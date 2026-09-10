# The Collection

A private catalog of my LEGO minifigures.

## Looking at it

Double-click `index.html`. That's it — no server, no install, no build step.

One entry per character. If someone has more than one photo — mask on and mask
off, an earlier era, a different outfit — they still get **one** box, and you
page through the photos inside it with the arrows, the arrow keys, or the
thumbnails. Figures that come as a set (the twins, the orphans) are one box
too. No character or group appears in the grid twice.

Figures show in the order they were added. The search box is always there; the
filters and sorting live behind the **Filters** button, which counts and
highlights itself when something is active so a collapsed panel can't hide a
filter from you. Filter by faction, custom vs. branded, rank, role, location or
theme; sort by order added, rank, role, rating, name, theme, or newest first.

Click any figure for the full write-up. Three across on a phone, more as the
window widens.

## World notes

Facts that belong to the world rather than to any one figure — how travel
between worlds works, who the Discarded and the Damaged are, what Padawan
means here — live in `data/lore.js` and open behind the **World notes**
button at the top of the page. Same shape as the collection: a plain list of
`{ title, text }`, edited by hand.

If a fact keeps having to be repeated across several figures' backgrounds, or
has no figure to attach to at all, it belongs here.

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
  rank: "Demigod",              // what they ARE — see RANKS
  role: "Bounty Hunter",        // what they DO — job or office
  location: "Lego City",        // where they're based
  rating: 5,                    // 1–5, or 0 for unrated
  background: "The story...",   // in-world lore
  provenance: "Found it at...", // real-world story of the actual figure
  tags: ["jedi", "cape"],       // free-form, searchable
  images: ["images/luke-skywalker-01.jpg"],   // first one is the cover
  acquired: "2024-03-12",       // optional
  notes: ""                     // optional
},
```

### Connections between figures

`relations` links an entry to other entries, and they render as clickable chips
at the bottom of the write-up — click one and you jump to that figure.

```js
relations: [
  { to: "armstrong", label: "Nephew of" },
  { to: "brute",     label: "Trained by" }
],
```

`to` is another entry's `id`. A link pointing at an id that doesn't exist yet is
skipped rather than breaking, so you can write "son of X" before X is
photographed. Links are one-way in the data — put a matching one on the other
figure if you want it to point back.

### Several photos of one character

Add them to `images`. The first is the cover shown in the grid. When it matters
which photo is which, swap the plain path for `{src, caption}` and the caption
shows under the photo as you page:

```js
images: [
  { src: "images/the-prince-king-01.jpg",    caption: "As King" },
  { src: "images/the-prince-senator-01.jpg", caption: "Senate era" }
],
```

You can mix the two forms freely in one list. Use this for a mask on and off, a
helmet on the ground, two eras of the same person, or just a better angle —
never a second entry.

### background vs. provenance

`background` is the character — who they are inside the world. `provenance` is
the object — where this specific piece of plastic actually came from. Keeping
them apart means the lore stays clean while the real stories (the first figure
you ever got, the helmet found behind a microwave in an empty house) don't get
lost.

### rank vs. role

`rank` is what someone **is** — their nature. `role` is what they **do** —
their job or office. These came apart the moment a character turned out to be
"one of the Archangel types" *and* "a mortal": Archangel is a job, mortal is a
nature, and one field couldn't hold both without turning into a junk drawer of
unrelated labels.

`window.RANKS` at the top of `data/collection.js` lists the natures, most
senior first. It drives the Rank dropdown order and the "Rank" sort, which
falls back to role and then name — so unranked figures still group by job
rather than scattering. A rank not in the list still works, it just sorts last.

Roles and locations need no such list; their dropdowns are built alphabetically
from whatever values are actually in use.


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

If one photo has several figures in it, that's one entry for the set, not one
per figure — they live together anyway. Use `notes` to say who's who ("left to
right: bulky, fat baby, his twin, bulky, bulky").

## Identifying pieces

`tools/identify.js` sends a photo to [Brickognize](https://brickognize.com) and
reports which official LEGO item it most resembles. No dependencies and no API
key; needs Node 18+.

```bash
node tools/identify.js images/claws-01.jpg              # whole minifigure
node tools/identify.js loose-part.jpg --type parts      # one loose piece
node tools/identify.js images/*.jpg --brief | sort -rn  # scan everything
```

`--type figs` (the default) takes a whole assembled minifigure and names the
official figure it looks most like. On a kitbash that is the *donor* of
whichever part the model recognises loudest, not the figure itself — which is
exactly the useful answer when you're trying to remember where a torso came
from.

`--type parts` needs one loose piece, alone, on a plain background. Hand it a
whole minifigure and it correctly returns nothing.

Results are guesses with a confidence score, and the output says plainly when a
match is weak. Follow the BrickLink link on any result for the full list of sets
that piece appears in. A scan of the whole collection lives in `PARTS-SCAN.md`,
kept separate from the catalogue on purpose: machine guesses don't belong in
`provenance` until a human has confirmed them.

## Why files instead of a database

Everything is plain text and plain images in a git repo. It opens on any
machine with a browser, it's searchable with `grep`, it survives without any
software staying alive around it, and every change is backed up in git history.
