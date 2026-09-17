#!/usr/bin/env node
// Github Pages serves data/*.js with cache-control: max-age=600, so a browser
// that loaded the page recently keeps showing the old figure count after a
// deploy - and phones hold on to it far longer than ten minutes. Stamping the
// script tags with the commit time forces a fresh fetch whenever the data
// actually changed. A query string on a script src works over file:// too, so
// the catalogue still opens straight off disk.
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const page = path.join(root, "index.html");

const DATA = ["data/collection.js", "data/scenes.js", "data/lore.js", "data/featured.js"];

const stamp = Math.max(
  ...DATA.map(f => Math.floor(fs.statSync(path.join(root, f)).mtimeMs / 1000))
);

const TAG = /(<script src="data\/(?:collection|scenes|lore|featured)\.js)(\?v=\d+)?("><\/script>)/g;

let html = fs.readFileSync(page, "utf8");
const found = (html.match(TAG) || []).length;
if (found !== DATA.length) {
  console.error(`stamp: expected ${DATA.length} data script tags in index.html, found ${found}`);
  process.exit(1);
}

const stamped = html.replace(TAG, `$1?v=${stamp}$3`);
if (stamped === html) {
  // The data has not changed since the last stamp, so neither should the URL.
  console.log("stamp: already at v=" + stamp);
} else {
  fs.writeFileSync(page, stamped);
  console.log("stamped data scripts with v=" + stamp);
}
