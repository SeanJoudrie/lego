# The Collection

A private catalog of my LEGO minifigures.

## Looking at it

Double-click `index.html`. That's it — no server, no install, no build step.

Filter by faction (good / bad / neutral), by custom vs. branded, by rank, or
by theme. Sort by rank, rating, name, theme, or most recently added. The search
box covers names, variants, ranks, backgrounds, provenance, and tags. Click any
figure for the full write-up.

## Adding a figure

1. Put the photos in `images/`. Name them after the figure so they're easy to
   find later, e.g. `luke-skywalker-01.jpg`, `luke-skywalker-02.jpg`.
2. Open `data/collection.js` and copy the template block near the bottom.
3. Fill it in and save. Refresh the browser.

```js
{
  id: "luke-skywalker",         // unique slug, lowercase-with-dashes
  name: "Luke Skywalker",       // character name
  variant: "Hoth Pilot",        // which version — optional
  faction: "good",              // "good" | "bad" | "neutral"
  origin: "branded",            // "branded" | "custom"
  theme: "Star Wars",           // franchise, or your own custom line
  rank: "Demigod",              // where they sit in the world — see RANKS
  rating: 5,                    // 1–5, or 0 for unrated
  background: "The story...",   // in-world lore
  provenance: "Found it at...", // real-world story of the actual figure
  tags: ["jedi", "cape"],       // free-form, searchable
  images: ["images/luke-skywalker-01.jpg"],   // first one is the cover
  acquired: "2024-03-12",       // optional
  notes: ""                     // optional
},
```

### background vs. provenance

`background` is the character — who they are inside the world. `provenance` is
the object — where this specific piece of plastic actually came from. Keeping
them apart means the lore stays clean while the real stories (the first figure
you ever got, the helmet found behind a microwave in an empty house) don't get
lost.

### Ranks

`window.RANKS` at the top of `data/collection.js` is the hierarchy of the
world, most senior first. It drives the order of the Rank dropdown and the
"Rank" sort — so the catalog opens showing the shape of the world rather than
an alphabetical list. Add tiers to that array as they turn up. A figure with a
rank not in the list still works, it just sorts last.

Fields can be left empty. A figure with no photos still shows up, just with a
"NO PHOTO YET" placeholder — so you can catalog first and shoot photos later.

## Photo tips

Shoot vertical. Tiles show the whole figure letterboxed rather than cropping
it, so nothing gets its head cut off, but a portrait shot wastes the least
space. A plain, evenly-lit backdrop keeps the figure readable at thumbnail size.

Phone photos run 3–5MB each, which gets heavy fast in a git repo. Downscaling
to ~1600px tall at quality 82 cuts that by roughly 75% with no visible loss at
catalog sizes:

```bash
python3 -c "
from PIL import Image; import sys
im = Image.open(sys.argv[1])
im = im.resize((round(im.width*1600/im.height), 1600), Image.LANCZOS)
im.save(sys.argv[2], quality=82, optimize=True, progressive=True)
" input.jpg images/output.jpg
```

If one photo has two figures in it, crop it into one image per figure so each
gets its own tile, and keep the original as a second image on both entries.

## Why files instead of a database

Everything is plain text and plain images in a git repo. It opens on any
machine with a browser, it's searchable with `grep`, it survives without any
software staying alive around it, and every change is backed up in git history.
