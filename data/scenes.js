/* ----------------------------------------------------------------------------
   Lore shots.

   Not portraits. These are photographs of things happening - several figures in
   one frame, doing something to each other - where the point is the moment
   rather than the plastic. They sit in their own section because they do not
   belong to a deck: a scene can hold people from both sides at once.

   Each entry is { src, title, when, text, figures } where figures is a list of
   ids from collection.js. An id that does not exist is skipped rather than
   breaking the page, so you can name somebody before their card is written.
---------------------------------------------------------------------------- */

window.SCENES = [

  {
    src: "images/scenes/the-arms-dealers-meeting.jpg",
    title: "The arms dealers, in company",
    text:
      "A deal, or the setting up of one. A wide-brimmed hat in the foreground " +
      "with his back to us, a man in a red jacket and a breathing mask up on " +
      "the crates, somebody at a console in teal, and a fourth handling a " +
      "mounted piece on a stand.\n\n" +
      "The two arms dealers are catalogued and sit on the villain deck. Nobody " +
      "has said who the other men in the frame are, or whether this is their " +
      "crew or their customers - so the card names only the ones already " +
      "written down.",
    figures: ["the-arms-dealer", "the-modified-arms-dealer"],
  },

  {
    src: "images/scenes/kenjen-in-disguise.jpg",
    title: "Kenjen, in disguise",
    text:
      "In among blue troopers and wearing their kit, and the only face in the " +
      "frame that is furious about it. He was built by an ancient " +
      "civilization and frozen until somebody needed him, and this is what " +
      "needing him looks like: a man walking through a formation that does " +
      "not know what he is.",
    figures: ["kenjen"],
  },

  {
    src: "images/scenes/kenjen-out-of-the-coma.jpg",
    title: "Kenjen, out of the coma",
    text:
      "Awake, and not pleased about the interval. Out of the blue kit and " +
      "into a studded jerkin, teeth bared, bare-armed. The man's whole " +
      "history is being put under and taken back out again - a stasis " +
      "chamber first, and now this - and he has woken up angry both times.",
    figures: ["kenjen"],
  },

  {
    src: "images/scenes/the-verdauf-brothers-reunite.jpg",
    title: "The Verdauf brothers, reunited",
    text:
      "Two men in the same light green Verdauf plate, facing each other, one " +
      "reaching out.\n\n" +
      "It is worth knowing what their cards say before you look at it. The " +
      "Green Captain pushed his younger brother into an escape pod and set " +
      "the bomb off himself, and everyone else lived. The Younger Brother has " +
      "been walking around in his father's armour ever since. Whatever this " +
      "photograph is, it is the two of them in the same frame again.",
    figures: ["the-green-captain", "the-younger-brother"],
  },

];
