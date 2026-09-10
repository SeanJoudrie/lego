// Regenerates SUMMARY.md from the catalog data.
//   node tools/make-summary.js > SUMMARY.md
global.window = {};
require('../data/collection.js');
require('../data/lore.js');

const figs = window.COLLECTION, lore = window.LORE;
const byId = Object.fromEntries(figs.map(f => [f.id, f]));
const out = [];

out.push('# The Collection — full character summary');
out.push('');
out.push(`${figs.length} characters from a custom LEGO minifigure world, in the order they were`);
out.push('catalogued. Everything below is the owner\'s lore, written down as told.');
out.push('');
out.push('---');
out.push('');
out.push('## The world');
out.push('');
for (const n of lore) {
  out.push(`### ${n.title}`);
  out.push('');
  out.push(n.text);
  out.push('');
}
out.push('---');
out.push('');
out.push('## The characters');
out.push('');

figs.forEach((f, i) => {
  out.push(`### ${i + 1}. ${f.name}${f.variant ? ` — ${f.variant}` : ''}`);
  out.push('');
  const facts = [
    `**Alignment:** ${f.faction}`,
    f.rank && `**Nature:** ${f.rank}`,
    f.role && `**Role:** ${f.role}`,
    f.location && `**Based:** ${f.location}`,
    `**Figure:** ${f.origin}`,
  ].filter(Boolean);
  out.push(facts.join(' · '));
  out.push('');
  out.push(f.background);
  out.push('');
  if (f.provenance) { out.push(`*How it was got:* ${f.provenance}`); out.push(''); }
  const rels = (f.relations || []).filter(r => byId[r.to]);
  if (rels.length) {
    out.push(`*Connections:* ${rels.map(r => `${r.label} ${byId[r.to].name}`).join(' · ')}`);
    out.push('');
  }
  if ((f.tags || []).length) { out.push(`*Tags:* ${f.tags.join(', ')}`); out.push(''); }
});

out.push('---');
out.push('');
out.push('## Naming');
out.push('');
out.push('Most of these characters have no personal name, and that is deliberate rather than');
out.push('unfinished — they go by what they are. The exceptions are Kaz, Quinn (the main');
out.push('villain, not yet catalogued), and a handful of operational call signs: Claws,');
out.push('Brute, Drake, Heavy, Armstrong. Titles used below that were coined for the');
out.push('catalogue rather than by the owner are marked in the notes of the live version.');
out.push('');

console.log(out.join('\n'));
