# The Collection

A private catalog of my LEGO minifigures.

## Looking at it

Double-click `index.html`. That's it — no server, no install, no build step.

Filter by faction (good / bad / neutral), by custom vs. branded, or by theme.
Sort by rating, name, theme, or most recently added. The search box covers
names, variants, backgrounds, and tags. Click any figure for the full write-up.

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
  rating: 5,                    // 1–5
  background: "The story...",   // write as much as you want
  tags: ["jedi", "cape"],       // free-form, searchable
  images: ["images/luke-skywalker-01.jpg"],   // first one is the cover
  acquired: "2024-03-12",       // optional
  notes: ""                     // optional
},
```

Fields can be left empty. A figure with no photos still shows up, just with a
"NO PHOTO YET" placeholder — so you can catalog first and shoot photos later.

## Photo tips

Nothing here needs a particular size, but the cards are cut to a 3:4 portrait
crop, so vertical shots fill the grid best. A plain, evenly-lit backdrop keeps
the figure readable at thumbnail size.

## Why files instead of a database

Everything is plain text and plain images in a git repo. It opens on any
machine with a browser, it's searchable with `grep`, it survives without any
software staying alive around it, and every change is backed up in git history.
