#!/usr/bin/env node
/*
  Identify LEGO pieces from a photo, using Brickognize.

    node tools/identify.js part.jpg
    node tools/identify.js a.jpg b.jpg --type figs
    node tools/identify.js part.jpg --top 5

  --type  figs (default) | parts | sets | all
  --top   how many candidates to show (default 3)
  --brief one line per image, for running over a whole folder

  No dependencies and no API key — needs Node 18+ for fetch/FormData/Blob.

  figs  — a whole assembled minifigure. Tells you which official figure it
          most resembles, which on a kitbash names the donor of the loudest
          part rather than the figure itself. That is the useful answer.
  parts — ONE loose piece, alone, on a plain background. Returns nothing
          at all if you give it a whole minifigure.
*/
const fs = require('fs');
const path = require('path');

const API = 'https://api.brickognize.com/predict';
const args = process.argv.slice(2);

const flag = (name, fallback) => {
  const i = args.indexOf('--' + name);
  return i === -1 ? fallback : args[i + 1];
};
const type = flag('type', 'figs');
const top = Number(flag('top', 3));
const brief = args.includes('--brief');
const files = args.filter((a, i) =>
  !a.startsWith('--') && args[i - 1] !== '--type' && args[i - 1] !== '--top');
const sleep = ms => new Promise(r => setTimeout(r, ms));

if (!files.length) {
  console.error('usage: node tools/identify.js <image...> [--type parts|figs|sets|all] [--top N]');
  process.exit(1);
}
if (!['parts', 'figs', 'sets', 'all'].includes(type)) {
  console.error(`unknown --type "${type}" (parts | figs | sets | all)`);
  process.exit(1);
}

const endpoint = type === 'all' ? `${API}/` : `${API}/${type}/`;

// score bands, so a weak guess never reads like an answer
function confidence(s) {
  if (s >= 0.80) return 'strong';
  if (s >= 0.60) return 'fair';
  if (s >= 0.40) return 'weak — treat as a hint';
  return 'very weak — probably wrong';
}

async function identify(file) {
  const label = path.basename(file).replace(/\.jpg$/, '');
  if (!brief) console.log(`\n${'='.repeat(64)}\n${path.basename(file)}`);
  if (!fs.existsSync(file)) { console.log(`  ${label}: file not found`); return; }

  const fd = new FormData();
  fd.append('query_image',
    new Blob([fs.readFileSync(file)], { type: 'image/jpeg' }), path.basename(file));

  let data;
  try {
    const res = await fetch(endpoint, { method: 'POST', body: fd });
    if (!res.ok) { console.log(`  ${label}: API error HTTP ${res.status}`); return; }
    data = await res.json();
  } catch (e) {
    console.log(`  ${label}: request failed — ${e.message}`);
    return;
  }

  const items = (data.items || []).slice(0, top);
  if (brief) {
    const t = items[0];
    console.log(t
      ? `${(t.score * 100).toFixed(0).padStart(3)}%  ${label.padEnd(30)} ${t.name}`
      : `  --  ${label.padEnd(30)} (nothing found)`);
    return;
  }
  if (!items.length) {
    console.log(type === 'parts'
      ? '  nothing found. "parts" mode needs a photo of ONE loose piece —\n' +
        '  for a whole minifigure use --type figs.'
      : '  nothing found.');
    return;
  }

  items.forEach((it, i) => {
    const bl = (it.external_sites || []).find(s => s.name === 'bricklink');
    console.log(`\n  ${i + 1}. ${it.name}`);
    console.log(`     id ${it.id}  ·  ${it.category || 'uncategorised'}`);
    console.log(`     match ${(it.score * 100).toFixed(0)}%  — ${confidence(it.score)}`);
    if (bl) console.log(`     ${bl.url}`);
  });

  if (items[0].score < 0.6) {
    console.log(`\n  Low confidence. Either the photo needs to be of the single piece`);
    console.log(`  on a plain background, or this is a part it doesn't know.`);
  }
}

(async () => {
  for (const [i, f] of files.entries()) {
    await identify(f);
    if (i < files.length - 1) await sleep(700);   // be polite to a free API
  }
  if (!brief) {
    console.log(`\n${'='.repeat(64)}`);
    console.log('Follow the BrickLink links for the full list of sets a piece appears in.');
  }
})();
