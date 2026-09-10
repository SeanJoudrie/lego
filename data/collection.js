/* ============================================================
   THE COLLECTION
   ------------------------------------------------------------
   One object per minifigure. Copy the template at the bottom.

   name        Character name.                        (required)
   variant     Which version, if it matters.          "Hoth Pilot"
   faction     "good" | "bad" | "neutral"             (required)
   origin      "branded" | "custom"                   (required)
   theme       Franchise, or your own custom line.    "Star Wars"
   rank        What they ARE. Their nature.           see RANKS below
   role        What they DO. Their job or office.     "Archangel", "King"
   location    Where they're based.                   "Lego City"
   character   Shared key when two figures are the same PERSON at different
               points in their life. Both entries get the same value and each
               links to the other. Leave blank for a one-figure character.
   rating      1 to 5. Leave 0 or null for unrated.
   background  In-world lore. The story of the character.
   provenance  Real-world story. Where the figure actually came from.
   tags        Free-form labels for searching.        ["jedi", "mortal"]
   images      Photo paths, first one is the cover.
   acquired    When you got it. Optional.
   notes       Anything else. Optional.
   ============================================================ */

/* The hierarchy of the world, most senior first. This controls the order
   of the rank dropdown and the "Rank" sort. Add tiers as they show up. */
window.RANKS = [
  "The First Man",
  "Cosmic Deity",
  "Demigod",
  "Mortal"
];

window.COLLECTION = [

  {
    id: "the-first-man",
    name: "The First Man",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "The First Man",
    role: "",
    location: "",
    rating: 0,
    background:
      "He has no name. He is known only as the First Man — the first man to " +
      "exist. The godlike parental figure of the world: the architect, the " +
      "wise man.\n\n" +
      "He is primarily known for assisting creation and helping give life. He " +
      "is not the one who created life, but he can revive people and build " +
      "life out of blocks. He is also the one who introduced the Force to this " +
      "world — the Star Wars kind — and took on Padawans, who became known as " +
      "the Demigods, a title they never claimed for themselves.\n\n" +
      "Many people have met him, and he has interfered to save the day a few " +
      "times throughout history. Most of what he is remains a mystery. He is " +
      "essentially retired now, but despite his appearance he is still very " +
      "agile and very skilled with a lightsaber.",
    provenance:
      "The first figure I ever got, which is why he's the parental figure of " +
      "the whole world.",
    tags: ["force", "lightsaber", "creation", "retired"],
    images: ["images/the-first-man-01.jpg"],
    acquired: "",
    notes: ""
  },

  {
    id: "the-green-demigod",
    name: "The Green Demigod",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "Demigod",
    role: "",
    location: "",
    rating: 0,
    background:
      "Just cool as fuck. Extremely swag, extremely fashionable. He likes " +
      "material wealth very much and lives in a very, very lavish house — but " +
      "he is also extremely loyal to the old man, and to humanity as a whole.\n\n" +
      "He carries a green lightsaber with a light gray hilt. He used to be a " +
      "secret agent of sorts, but has since embraced his demigod abilities.\n\n" +
      "One of the Demigods who lives among the people rather than above them. " +
      "He still fights in whatever conflicts need him.",
    provenance: "One of the second figures I ever got.",
    tags: ["lightsaber", "green-saber", "former-agent", "wealth"],
    images: ["images/the-green-demigod-01.jpg"],
    acquired: "",
    notes: ""
  },

  {
    id: "the-blue-twin",
    name: "The Blue Twin",
    variant: "Blue jetpack",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Archangel",
    location: "",
    rating: 0,
    background:
      "The alpha of the two twins. Very much a Saint Michael the Archangel " +
      "vibe — the pair are always the ones sent on missions.\n\n" +
      "They're definitely a bit off. You're never quite on the same wavelength " +
      "as them, but you know they are committed to doing good no matter what. " +
      "They once had a fight against each other, which the blue one won. It " +
      "wasn't over greater power — it was just teenage growing-up ego. " +
      "Afterwards they decided to meditate and grow as people over the thirty " +
      "years they've been alive, which is forever in a Lego lifespan.\n\n" +
      "Chill, ultimately. If you ever meet them you can just hang out. It's cool.",
    provenance: "",
    tags: ["twin", "archangel", "jetpack"],
    images: ["images/the-twins-01.jpg"],
    acquired: "",
    notes: "Left figure in the shared photo."
  },

  {
    id: "the-black-twin",
    name: "The Black Twin",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Archangel",
    location: "",
    rating: 0,
    background:
      "The other twin — the Gabriel to his brother's Michael. Sent down " +
      "alongside him, the two of them keep the world at the status quo the " +
      "First Man created.\n\n" +
      "He lost the fight between the two of them, but it was never about power, " +
      "just teenage ego, and they both came out of it into thirty years of " +
      "meditating and growing as people.\n\n" +
      "A bit off, like his brother — never quite on your wavelength — but " +
      "committed to doing good no matter what, and chill enough to hang out with.",
    provenance: "",
    tags: ["twin", "archangel", "status-quo"],
    images: ["images/the-twins-01.jpg"],
    acquired: "",
    notes: "Right figure in the shared photo."
  },

  {
    id: "the-engineer",
    name: "The Engineer",
    variant: "Helmet off",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "Mortal",
    role: "Archangel",
    location: "",
    rating: 0,
    background:
      "Another of the Archangel types, but where the twins do missions, he does " +
      "detail. He assists creation by fine-tuning the small things — cellular " +
      "life, and anything that involves math.\n\n" +
      "He's basically a coder for worlds. What percent of gravity. How to " +
      "introduce new creations without breeding microbes that will interfere " +
      "with life. A very science type of guy.\n\n" +
      "All of these characters willingly nerfed themselves — long story, for " +
      "later — so he isn't what he could be. He's super smart, but he has no " +
      "magic abilities. Maybe super strength, maybe he can fly, since he's given " +
      "himself some upgrades. But he's a mortal.",
    provenance: "",
    tags: ["archangel", "mortal", "science", "nerfed"],
    images: ["images/the-engineer-01.jpg"],
    acquired: "",
    notes: ""
  },

  {
    id: "the-second",
    name: "The Second",
    variant: "Biker helmet, black visor",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "Mortal",
    role: "Second in Command",
    location: "",
    rating: 0,
    background:
      "The second in command, and he truly holds that status. He dual-wields " +
      "green lightsabers, he can use the Force, and he's so agile that when he " +
      "bursts around he leaves a trail of neon green behind him.\n\n" +
      "The most badass guy ever. Skilled in hand-to-hand combat and proficient " +
      "with firearms. A strong silent type. He's also a mortal.\n\n" +
      "Super loyal to the creator — but more than that, they're best friends. " +
      "They fought together in the wars of creation and he always made it.\n\n" +
      "He's cybernetic, but it's magic cybernetic. He's not transhuman, he's " +
      "living. A bit of a mystery, and he has a fuck ton of aura.",
    provenance:
      "When I was about eight we were moving into a house, and I found the " +
      "helmet behind where we were installing a microwave while the place was " +
      "still empty — left behind by the former tenants. I coincidentally had a " +
      "spare black visor from a Rebel battle pack, and I gave it to him.",
    tags: ["mortal", "lightsaber", "green-saber", "force", "cybernetic", "found"],
    images: ["images/the-second-01.jpg", "images/the-second-02.jpg"],
    acquired: "",
    notes: ""
  },

  {
    id: "the-prince-king",
    name: "The Prince",
    variant: "As King",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "King",
    location: "The Royal Palace",
    character: "the-prince",
    rating: 0,
    background:
      "He is known as the King right now, but he still refers to himself as a " +
      "Prince.\n\n" +
      "He started out as a senator in the earliest days of the Senate, and he " +
      "tried his best. He ended up marrying the Space Princess, and on their " +
      "marriage he became the Prince. They were happily married and had a few " +
      "kids. She later disappeared for a while, which is how he became king — " +
      "de facto, never by claim. He has never updated the title he uses for " +
      "himself.\n\n" +
      "He is a much better king now, and genuinely useful. He still sometimes " +
      "wonders what makes him so special. The real answer is just that he has a " +
      "good heart. He is not the super mega ultra genius politician. He " +
      "genuinely just has a good heart.",
    provenance: "",
    tags: ["royal-family", "king", "married", "good-heart"],
    images: ["images/the-prince-king-01.jpg"],
    acquired: "",
    notes: ""
  },

  {
    id: "the-prince-senator",
    name: "The Prince",
    variant: "Senate era",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Senator",
    location: "The Royal Palace",
    character: "the-prince",
    rating: 0,
    background:
      "The same man, much earlier. This is him in the earliest days of the " +
      "Senate, when he was a senator in a purple T-shirt and nothing else.\n\n" +
      "He tried his best. That was more or less the whole of it, and it turned " +
      "out to be enough — this is the version of him that met and married the " +
      "Space Princess, before there was any title attached to his name.",
    provenance: "",
    tags: ["royal-family", "senator", "early-era"],
    images: ["images/the-prince-senator-01.jpg"],
    acquired: "",
    notes: ""
  },

  {
    id: "the-space-princess",
    name: "The Space Princess",
    variant: "Blue dress, after her return",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "Cosmic Deity",
    role: "",
    location: "",
    character: "",
    rating: 0,
    background:
      "Another cosmic deity. She can influence space, and through that, some " +
      "aspects of the weather.\n\n" +
      "She married the senator, and on their marriage he became the Prince. " +
      "They were happily married and had a few kids. She later disappeared for " +
      "a while, and in her absence he became king by default.\n\n" +
      "She used to wear a white and black dress. Since she returned, she wears " +
      "the blue one.",
    provenance: "",
    tags: ["royal-family", "cosmic", "space", "weather", "returned"],
    images: ["images/the-space-princess-01.jpg"],
    acquired: "",
    notes: "The white-and-black dress version is a separate figure if you still have it — worth its own entry sharing character: \"the-space-princess\"."
  },

  {
    id: "the-royal-son-straight",
    name: "Royal Son",
    variant: "Plain blue torso, brown legs",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Royal Child",
    location: "The Royal Palace",
    character: "",
    rating: 0,
    background:
      "One of the two sons. They both wear blue, just like their dad — it is " +
      "the family color.\n\n" +
      "They both love adventure, but their adventures mostly consist of playing " +
      "outside in nature and using their imagination. They have big dreams of " +
      "one day being explorers, or soldiers. But they are still just kids.",
    provenance: "",
    tags: ["royal-family", "child", "adventure"],
    images: ["images/the-royal-sons-01.jpg"],
    acquired: "",
    notes: "Front figure in the shared photo. Needs a real name."
  },

  {
    id: "the-royal-son-spiky",
    name: "Royal Son",
    variant: "Blue jacket, spiky hair",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Royal Child",
    location: "The Royal Palace",
    character: "",
    rating: 0,
    background:
      "One of the two sons. They both wear blue, just like their dad — it is " +
      "the family color.\n\n" +
      "They both love adventure, but their adventures mostly consist of playing " +
      "outside in nature and using their imagination. They have big dreams of " +
      "one day being explorers, or soldiers. But they are still just kids.",
    provenance: "",
    tags: ["royal-family", "child", "adventure"],
    images: ["images/the-royal-sons-01.jpg"],
    acquired: "",
    notes: "Rear figure in the shared photo. Needs a real name."
  },

  {
    id: "the-palace-chief",
    name: "The Palace Chief",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Head of Palace Control",
    location: "The Royal Palace",
    character: "",
    rating: 0,
    background:
      "Head of control of the royal palace. A former veteran, still currently " +
      "serving in both the Royal Secret Service and the Senate service.\n\n" +
      "He is the one who encouraged the Prince to run for Senate in the first " +
      "place — which makes him, quietly, the reason the whole royal line exists " +
      "in the shape it does.",
    provenance: "",
    tags: ["royal-service", "veteran", "secret-service", "senate"],
    images: ["images/the-palace-chief-01.jpg"],
    acquired: "",
    notes: "Needs a real name."
  },

  {
    id: "the-outcast-prince",
    name: "The Outcast Prince",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Elected King",
    location: "The Sand Planet",
    character: "",
    rating: 0,
    background:
      "The Prince's brother. He was always a bit of an outcast, but never in a " +
      "way that got him bullied — he simply decided to live off the rails.\n\n" +
      "He settled on a sandy planet, a place a bit like Mad Max, where battles " +
      "were being fought, and he enjoyed his time there living as a smuggler " +
      "and a pirate. He never killed anybody who wasn't bad. He's a good guy. " +
      "He has also hunted a lot of big beasts.\n\n" +
      "He left the royal system behind. He is technically a prince, but he " +
      "doesn't really identify as one — he just likes to live off the grid. He " +
      "is something like the elected king of that sand planet, though not a " +
      "strong royal king: he helps make the rules and everyone respects him, " +
      "but everyone there is very free. There aren't really a lot of laws, or " +
      "taxes anyone could enforce. Mostly he makes sure human rights are upheld.",
    provenance: "",
    tags: ["royal-family", "outcast", "smuggler", "pirate", "beast-hunter", "off-grid"],
    images: ["images/the-outcast-prince-01.jpg"],
    acquired: "",
    notes: ""
  },

  {
    id: "kaz",
    name: "Kaz",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Bounty Hunter",
    location: "The Sand Planet",
    character: "",
    rating: 0,
    background:
      "The Outcast Prince's son, inspired by his dad from growing up in those " +
      "rougher areas. Very charismatic, suave, and cool.\n\n" +
      "He's a bounty hunter, and he always takes them alive. Part of it is " +
      "wanting to impress his dad, but he's eventually doing his own thing.\n\n" +
      "He's basically Star-Lord, before Star-Lord ever came out.",
    provenance: "",
    tags: ["royal-family", "bounty-hunter", "takes-them-alive", "charismatic"],
    images: ["images/kaz-01.jpg"],
    acquired: "",
    notes: ""
  },

  {
    id: "brute",
    name: "Brute",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Secretary of War",
    location: "",
    character: "",
    rating: 0,
    background:
      "Despite the rugged demeanor, he's actually a very nice guy. Very loud, " +
      "very gruff, and very nice.\n\n" +
      "He's in charge of all artillery, whether ground or space. Another " +
      "veteran, with a lot of combat experience. Right now he is essentially " +
      "the Secretary of War, sitting on the Prince and Princess's council.\n\n" +
      "The Prince's two sons have taken a real shining to him and think he's " +
      "the coolest, because he lets them do fun things out in the field — like " +
      "shoot a rifle, or a cannon.",
    provenance: "",
    tags: ["veteran", "artillery", "council", "gruff", "good-with-kids"],
    images: ["images/brute-01.jpg"],
    acquired: "",
    notes: ""
  },

  {
    id: "the-commissioner",
    name: "The Commissioner",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Chief of Police",
    location: "Lego City",
    character: "",
    rating: 0,
    background:
      "He's based in Lego City — the giant, expensive city that exists in this " +
      "universe — and he's in charge of all the police there.\n\n" +
      "A former sniper, and still a great shot. He's got a little old, so he " +
      "has a protege, a Padawan. In this world Padawan just means apprentice; " +
      "it doesn't have anything to do with the Force.\n\n" +
      "He's in charge of anti-terrorism, fortifications, and overall planning, " +
      "and he regularly volunteers to go fight whatever bad thing is on its way.",
    provenance: "",
    tags: ["veteran", "sniper", "police", "anti-terrorism", "has-apprentice"],
    images: ["images/the-commissioner-01.jpg"],
    acquired: "",
    notes: "Needs a real name. You mentioned a gold visor - I can't see one in this shot, so check I photographed the right figure."
  },

  /* ---- TEMPLATE: copy this block for each new figure ----
  {
    id: "",
    name: "",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "",
    rank: "",
    role: "",
    location: "",
    character: "",
    rating: 0,
    background: "",
    provenance: "",
    tags: [],
    images: [],
    acquired: "",
    notes: ""
  },
  -------------------------------------------------------- */

];
