/* ============================================================
   THE COLLECTION
   ------------------------------------------------------------
   One object per minifigure. Copy the template at the bottom.

   name        Character name.                        (required)
   variant     Which version, if it matters.          "Hoth Pilot", "Season 2"
   faction     "good" | "bad" | "neutral"             (required)
   origin      "branded" | "custom"                   (required)
   theme       Franchise, or your own custom line.    "Star Wars", "Wasteland"
   rating      1 to 5, how much you like it.
   background  The story. Write as much as you want.
   tags        Free-form labels for searching.        ["jedi", "helmet", "cape"]
   images      Photo paths, first one is the cover.
   acquired    When you got it. Optional.
   notes       Anything else. Optional.
   ============================================================ */

window.COLLECTION = [

  {
    id: "luke-skywalker",
    name: "Luke Skywalker",
    variant: "Original Trilogy",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rating: 5,
    background:
      "Placeholder entry so the page has something to show. Replace or delete " +
      "this once your real figures start going in.",
    tags: ["jedi", "rebel"],
    images: [],
    acquired: "",
    notes: ""
  },

  /* ---- TEMPLATE: copy this block for each new figure ----
  {
    id: "",
    name: "",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "",
    rating: 3,
    background: "",
    tags: [],
    images: [],
    acquired: "",
    notes: ""
  },
  -------------------------------------------------------- */

];
