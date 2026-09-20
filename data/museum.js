/* ============================================================
   THE MUSEUM
   ------------------------------------------------------------
   Paintings of events: pictures made inside this world, of things
   that happened in it. Not portraits - the figure paintings live
   on the cards and hang in The Paintings. These are accounts.

   One entry per event, however many pictures of it exist. Where
   several painters disagree, every version hangs together and the
   text says what they disagree about, because the disagreement is
   usually the most honest thing left of the event.

   { id, title, text, figures, paintings: [{ src, caption }] }

   `figures` is a list of ids from collection.js and is used to
   print who is in the room. An id that does not exist is skipped
   rather than breaking the page.
   ============================================================ */

window.MUSEUM = [

  {
    id: "the-great-betrayal",
    title: "The great betrayal",
    text:
      "Four paintings of the same ten seconds, and no two of them agree. All " +
      "four hang here anyway, because the disagreement is most of what " +
      "survives of the event.\n\n" +
      "What every painter puts in: the command board, the gold sash pulled " +
      "crooked, the Commissioner's helmet off and lying where anyone can see " +
      "it - the rank on the table - and the apprentice on his way out of the " +
      "room, looking back. None of them paints him angry. That is the one " +
      "thing the four accounts are unanimous about, and it is the part that " +
      "frightens people.\n\n" +
      "Where they part company is the Commissioner. The first has him laid " +
      "out flat with his eyes shut, which is the version the people who " +
      "wanted him dead were happy to hang. The second keeps him conscious and " +
      "looking straight at the man who did it, and is the only one to paint " +
      "the room wrecked - the chair over, the charts on the floor. The third " +
      "is painted in plain daylight with nothing hidden, and it is also the " +
      "one that makes the helmet solid gold instead of banded, which is " +
      "either an error or a flattery depending on who paid for it. The fourth " +
      "brings the apprentice close enough to touch him, and is the only one " +
      "that still has the knife in the frame.\n\n" +
      "He was left for dead. Whether he lived is not written down anywhere, " +
      "and four painters have given four answers to it.",
    figures: ["the-commissioner", "the-commissioners-apprentice"],
    paintings: [
      { src: "images/scenes/the-great-betrayal-01.jpg", caption: "The first account: laid out, eyes closed" },
      { src: "images/scenes/the-great-betrayal-02.jpg", caption: "The second: still looking at him, the room wrecked" },
      { src: "images/scenes/the-great-betrayal-03.jpg", caption: "The third: painted in daylight, the helmet all gold" },
      { src: "images/scenes/the-great-betrayal-04.jpg", caption: "The fourth: close enough to touch, the knife still out" },
    ],
  },

  {
    id: "the-killing-of-the-second-padawan",
    title: "The killing of the Second Padawan",
    text:
      "The great betrayal has four painters arguing with each other. This has " +
      "one picture and nobody disputing it, and the reason is in the picture: " +
      "the only other man in the room is standing in the doorway, and he " +
      "lived.\n\n" +
      "The Purple Shadow killed the Snow Jedi's second Padawan. The Beowulf " +
      "Jedi - trained beside him, a friendly rival first and a friend by the " +
      "end - arrived a beat too late, and everything in the painting is " +
      "arranged around that beat. It is seen from the floor, at the height of " +
      "the hilt the dead man has dropped out of his own hand. The Shadow " +
      "stands over him with the violet blade lit and held down, done. In the " +
      "doorway the Beowulf Jedi has stopped, both of his sabers still on his " +
      "belt and neither drawn, and his shadow reaches the whole length of the " +
      "hall and lies across the body.\n\n" +
      "Two sources of light in the whole thing, and the man who could describe " +
      "them both is the one in the door. What the painting will not say is " +
      "where it happened: nothing written down names the hall.",
    figures: ["the-second-padawan", "the-purple-shadow", "the-beowulf-jedi"],
    paintings: [
      { src: "images/scenes/the-killing-of-the-second-padawan.jpg",
        caption: "The killing of the Second Padawan, and the friend in the doorway" },
    ],
  },

];
