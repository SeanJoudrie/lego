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

const DATA = ["data/collection.js", "data/scenes.js", "data/lore.js", "data/featured.js",
              "data/order.js", "data/museum.js"];

// Each page and the number of data scripts it is expected to carry, so a
// dropped script tag fails the stamp rather than shipping a page that quietly
// renders nothing. art.html only needs the figures.
const PAGES = [["index.html", 5], ["art.html", 1], ["museum.html", 2]];

const stamp = Math.max(
  ...DATA.map(f => Math.floor(fs.statSync(path.join(root, f)).mtimeMs / 1000))
);

const TAG = /(<script src="data\/(?:collection|scenes|lore|featured|order|museum)\.js)(\?v=\d+)?("><\/script>)/g;

let wrote = 0;
for (const [page, expected] of PAGES) {
  const file = path.join(root, page);
  const html = fs.readFileSync(file, "utf8");
  const found = (html.match(TAG) || []).length;
  if (found !== expected) {
    console.error(`stamp: expected ${expected} data script tags in ${page}, found ${found}`);
    process.exit(1);
  }
  const stamped = html.replace(TAG, `$1?v=${stamp}$3`);
  if (stamped !== html) {
    fs.writeFileSync(file, stamped);
    wrote++;
  }
}

// The data has not changed since the last stamp, so neither should the URLs.
console.log(wrote
  ? `stamped ${wrote} page(s) with v=${stamp}`
  : "stamp: already at v=" + stamp);
