/* ============================================================
   THE COLLECTION
   ------------------------------------------------------------
   ONE ENTRY PER CHARACTER (or per set, if they come as a set).
   Never make two entries for the same person — give the one
   entry several photos instead and page between them.

   name        Character name, or the set's name.     (required)
   variant     Extra detail, if it helps.             "Arm in a sling"
   faction     "good" | "bad" | "neutral"             (required)
   origin      "branded" | "custom"                   (required)
   theme       Franchise, or your own custom line.    "Star Wars"
   rank        What they ARE. Their nature.           see RANKS below
   role        What they DO. Their job or office.     "Archangel", "King"
   group       What they BELONG to. An organisation,  "The Space Militia"
               a people, a crew. Everyone sharing a group is shown to
               everyone else in it, so a militia medic and a militia
               general find each other even with different roles.
   location    Where they're based.                   "Lego City"
   relations   Links to other entries, shown as clickable chips:
               [{ to: "armstrong", label: "Uncle" }]  — `to` is an id.
               A link to an id that doesn't exist yet is skipped, so you
               can write one before the other figure is photographed.
   rating      1 to 5. Leave 0 for unrated.
   background  In-world lore. The story of the character.
   provenance  Real-world story. Where the figure actually came from.
   tags        Free-form labels for searching.        ["mortal", "sniper"]
   images      Photos. First one is the cover. Either a plain path,
               or {src, caption} when it's worth labelling which
               photo is which ("mask off", "Senate era").
   acquired    When you got it. Optional.
   notes       Anything else. Optional.
   ============================================================ */

/* What someone IS, most senior first. Drives the Rank dropdown order
   and the Rank sort. Job titles go in `role`, not here. */
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
    group: "The First Circle",
    location: "",
    relations: [
      { to: "the-green-demigod", label: "Took as Padawan" },
      { to: "the-second", label: "Best friend" },
    ],
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
    group: "The First Circle",
    location: "",
    relations: [
      { to: "the-first-man", label: "Padawan of" },
      { to: "the-replica", label: "Replicated as" },
    ],
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
    id: "the-twins",
    name: "The Twins",
    variant: "Blue and black",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Archangel",
    group: "The First Circle",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Two of them, and they come as a pair. The one with the blue jetpack is " +
      "the alpha of the two — very much a Saint Michael the Archangel vibe — and " +
      "the black one is the Gabriel to his Michael. They are always the ones " +
      "sent on missions, and between them they keep the world at the status quo " +
      "the First Man created.\n\n" +
      "They're definitely a bit off. You're never quite on the same wavelength " +
      "as them, but you know they are committed to doing good no matter what. " +
      "They once had a fight against each other, which the blue one won. It " +
      "wasn't over greater power — it was just teenage growing-up ego. " +
      "Afterwards they decided to meditate and grow as people over the thirty " +
      "years they've been alive, which is forever in a Lego lifespan.\n\n" +
      "Chill, ultimately. If you ever meet them you can just hang out. It's cool.",
    provenance:
      "Not a kitbash. They come as a matched pair, as-is, from the same set.",
    tags: ["twin", "archangel", "jetpack", "status-quo", "pair"],
    images: ["images/the-twins-01.jpg"],
    acquired: "",
    notes: "Blue on the left, black on the right."
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
    group: "The First Circle",
    location: "",
    relations: [],
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
    group: "The First Circle",
    location: "",
    relations: [
      { to: "the-first-man", label: "Best friend and second to" },
    ],
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
      "spare black visor from a Rebel battle pack, and I gave it to him.\n\n" +
      "Parts: most of the figure comes from a Lego System set; the helmet itself " +
      "is a racing helmet. Which is not a contradiction — that is what the piece " +
      "is, and behind the microwave is where it came from. Fuller sourcing to come.",
    tags: ["mortal", "lightsaber", "green-saber", "force", "cybernetic", "found"],
    images: ["images/the-second-01.jpg", "images/the-second-02.jpg"],
    acquired: "",
    notes: ""
  },

  {
    id: "the-prince",
    name: "The Prince",
    variant: "King, but still calls himself Prince",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "King",
    group: "The Royal Household",
    location: "The Royal Palace",
    relations: [
      { to: "the-princes-cousin", label: "Cousin of" },
      { to: "the-princes-impersonator", label: "Impersonated by" },
      { to: "kenjen", label: "Loyal to him" },
      { to: "jimzon", label: "Loyal to him" },
      { to: "king-arthur", label: "Follows him" },
      { to: "the-space-princess", label: "Married to" },
      { to: "the-royal-sons", label: "Father of" },
      { to: "the-royal-daughter", label: "Father of" },
      { to: "the-outcast-prince", label: "Brother of" },
      { to: "the-palace-chief", label: "Pushed into the Senate by" },
    ],
    rating: 0,
    background:
      "He is known as the King right now, but he still refers to himself as a " +
      "Prince.\n\n" +
      "He started out as a senator in the earliest days of the Senate, in a " +
      "purple T-shirt and nothing else, and he tried his best. That was more or " +
      "less the whole of it, and it turned out to be enough. He ended up " +
      "marrying the Space Princess, and on their marriage he became the Prince. " +
      "They were happily married and had a few kids. She later disappeared for " +
      "a while, which is how he became king — de facto, never by claim. He has " +
      "never updated the title he uses for himself.\n\n" +
      "He is a much better king now, and genuinely useful. He still sometimes " +
      "wonders what makes him so special. The real answer is just that he has a " +
      "good heart. He is not the super mega ultra genius politician. He " +
      "genuinely just has a good heart.",
    provenance: "",
    tags: ["royal-family", "king", "senator", "married", "good-heart"],
    images: [
      { src: "images/the-prince-king-01.jpg",    caption: "As King" },
      { src: "images/the-prince-senator-01.jpg", caption: "Senate era — before the title" }
    ],
    acquired: "",
    notes: "Two separate figures for one man, kept as one entry with two photos. Connections here are deliberately only his close ties - almost everyone in the collection reports to him eventually, and listing that would bury the people who actually matter to him. Those who are loyal to him still say so on their own pages."
  },

  {
    id: "the-space-princess",
    name: "The Space Princess",
    variant: "Blue dress, after her return",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "Cosmic Deity",
    role: "Queen",
    group: "The Royal Household",
    location: "The Royal Palace",
    relations: [
      { to: "the-prince", label: "Married to" },
      { to: "the-royal-sons", label: "Mother of" },
      { to: "the-royal-daughter", label: "Mother of" },
    ],
    rating: 0,
    background:
      "Another cosmic deity. She can influence space, and through that, some " +
      "aspects of the weather.\n\n" +
      "She married the senator, and on their marriage he became the Prince. " +
      "They were happily married and had a few kids. She later disappeared for " +
      "a while, and in her absence he became king by default.\n\n" +
      "She used to wear a white and black dress. Since she returned, she wears " +
      "the blue one, and she is the Queen.",
    provenance: "",
    tags: ["royal-family", "cosmic", "space", "weather", "returned"],
    images: ["images/the-space-princess-01.jpg"],
    acquired: "",
    notes: "If you still have the white-and-black dress version, it's a second photo on this entry, not a second entry."
  },

  {
    id: "the-royal-sons",
    name: "The Royal Sons",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Royal Child",
    group: "The Royal Household",
    location: "The Royal Palace",
    relations: [
      { to: "the-prince", label: "Sons of" },
      { to: "the-space-princess", label: "Sons of" },
      { to: "the-royal-daughter", label: "Brothers of" },
      { to: "brute", label: "Idolise" },
    ],
    rating: 0,
    background:
      "The Prince's two sons. They both wear blue, just like their dad — it is " +
      "the family color.\n\n" +
      "They both love adventure, but their adventures mostly consist of playing " +
      "outside in nature and using their imagination. They have big dreams of " +
      "one day being explorers, or soldiers. But they are still just kids.",
    provenance: "",
    tags: ["royal-family", "child", "adventure", "pair"],
    images: ["images/the-royal-sons-01.jpg"],
    acquired: "",
    notes: "Both need real names."
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
    group: "The Royal Household",
    location: "The Royal Palace",
    relations: [
      { to: "the-prince", label: "Pushed him into the Senate" },
    ],
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
    group: "",
    location: "The Sand Planet",
    relations: [
      { to: "the-prince", label: "Brother of" },
      { to: "kaz", label: "Father of" },
    ],
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
    group: "",
    location: "The Sand Planet",
    relations: [
      { to: "the-outcast-prince", label: "Son of" },
    ],
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
    group: "The Royal Household",
    location: "",
    relations: [
      { to: "heavy", label: "Trained" },
      { to: "the-royal-sons", label: "Idolised by" },
    ],
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
    group: "Lego City Law",
    location: "Lego City",
    relations: [],
    rating: 0,
    background:
      "He's based in Lego City — the giant, expensive city that exists in this " +
      "universe — and he's in charge of all the police there.\n\n" +
      "A former sniper, and still a great shot. He's got a little old, so he " +
      "has a protege, a Padawan. In this world Padawan just means apprentice; " +
      "it doesn't have anything to do with the Force.\n\n" +
      "He's in charge of anti-terrorism, fortifications, and overall planning, " +
      "and he regularly volunteers to go fight whatever bad thing is on its way.",
    provenance:
      "Brown headpiece from a Lego Indiana Jones pilot. The gold visor is from Lego " +
      "Mars Mission. Face from Lego Space Police. Torso possibly Naboo. One further " +
      "piece from a Star Wars Rebel battle pack.\n\n" +
      "The gold visor I could not see in the photo is real — it is in there.",
    tags: ["veteran", "sniper", "police", "anti-terrorism", "has-apprentice", "kitbash"],
    images: ["images/the-commissioner-01.jpg"],
    acquired: "",
    notes: "Needs a real name. You mentioned a gold visor - I can't see one in this shot, so check I photographed the right figure."
  },

  {
    id: "claws",
    name: "Claws",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Commander of the Clone Armies",
    group: "",
    location: "",
    relations: [
      { to: "the-clone-pilot", label: "Lost him to the space militia" },
    ],
    rating: 0,
    background:
      "He's called Claws for his proficiency with the energy sword. There are " +
      "energy swords in this world, and they don't turn off.\n\n" +
      "He was just a normal clone trooper. He actually refused any medals or " +
      "decorations on his uniform until he had really earned them — until he " +
      "saved the entire civilization, one time, which left his face badly " +
      "bruised and bloody.\n\n" +
      "After that he was given all kinds of royal awards, and he reluctantly " +
      "accepted his position. He's still capable of fighting, but he's no " +
      "longer the super mega assassin soldier he once was. He's in charge of " +
      "all the clone armies now, and that's why he's decorated like that — so " +
      "everyone knows.\n\n" +
      "Really cool guy.",
    provenance:
      "There is not a single piece on him that comes from the same figure. The " +
      "only matching pair is the arms, because arms come in twos.\n\n" +
      "Helmet — Captain Rex, Star Wars\n" +
      "Face underneath — a damaged Anakin Skywalker head\n" +
      "Epaulette — Lego Pirates\n" +
      "Torso — Star Wars Snowtrooper\n" +
      "Arms — Lego City, blue\n" +
      "Hands — black, off some other figure entirely\n" +
      "Waist — blue, off a pair of blue pants\n" +
      "Legs — 501st clone trooper\n" +
      "The blue wrap around him — Bionicle\n" +
      "Accessories — Halo",
    tags: ["clone", "energy-sword", "decorated", "veteran", "commander", "kitbash"],
    images: ["images/claws-01.jpg"],
    acquired: "",
    notes: "The most heavily kitbashed figure in the collection - nine different sources in one minifigure. Filed as custom, which in his case is not even a judgement call."
  },

  {
    id: "the-mechanic",
    name: "The Mechanic",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Aircraft Engineer",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "He fixes and invents a lot of the aircraft used across the Royal world. " +
      "(The Royals are in charge of the city, by the way, in case that hadn't " +
      "come up.)\n\n" +
      "He was damaged in a crash where his spaceship was shot down. He did the " +
      "modifications to his own arm himself, which is where the gold comes " +
      "from, and he has metal plating on his head because he had to quickly " +
      "repair his own skull. It healed perfectly, but it can't be taken off " +
      "right now.\n\n" +
      "Very friendly, and very funny.",
    provenance:
      "Hair from a Lego surfer. Face from Lego Power Miners. Torso from the Hoth " +
      "rebels. The golden arm is from a Lego gladiator. Legs not yet identified.",
    tags: ["engineer", "aircraft", "prosthetic", "crash-survivor", "self-repaired", "kitbash"],
    images: ["images/the-mechanic-01.jpg"],
    acquired: "",
    notes: "Placeholder name - 'The Engineer' was already taken by the Archangel."
  },

  {
    id: "drake",
    name: "Drake",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Soldier",
    group: "",
    location: "Off-world",
    relations: [],
    rating: 0,
    background:
      "Known for going loud, and known for completing just about any mission " +
      "anyway. He's one of the louder, cockier ones.\n\n" +
      "He does a lot of his military service off-world, on other planets, as a " +
      "direct soldier.",
    provenance: "",
    tags: ["soldier", "off-world", "loud", "cocky"],
    images: ["images/drake-01.jpg"],
    acquired: "",
    notes: ""
  },

  {
    id: "the-sniper",
    name: "The Sniper",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Sniper",
    group: "",
    location: "Lego City",
    relations: [],
    rating: 0,
    background:
      "The most elite soldier out of any of them, and the one who likes to be " +
      "as quiet as possible. He doesn't take any praise. He doesn't really lead " +
      "a team beyond the one or two people assisting him. He speaks a lot of " +
      "military speak.\n\n" +
      "Not too much is known about the guy. But he's super loyal — he has taken " +
      "a bullet for Lego City without hesitation and without complaint, and he " +
      "has done it repeatedly.\n\n" +
      "He can do anything from high-profile assassinations to holding off hordes " +
      "of robots or zombies or aliens. More than any one human is thought " +
      "capable of.",
    provenance: "",
    tags: ["sniper", "elite", "quiet", "loyal", "anti-horde"],
    images: ["images/the-sniper-01.jpg"],
    acquired: "",
    notes: ""
  },

  {
    id: "armstrong",
    name: "Armstrong",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Head of Royal Intelligence",
    group: "Royal Intelligence",
    location: "Lego City",
    relations: [
      { to: "heavy", label: "Uncle of" },
      { to: "the-deputy", label: "Covered by" },
      { to: "the-analyst", label: "Runs" },
    ],
    rating: 0,
    background:
      "Head of the Royal intelligence agency, with the whole thing under him. " +
      "He intercepts all communication, and if anyone has to go undercover they " +
      "go through him — he's the one who plans it.\n\n" +
      "He's also very nice, and he actually doesn't mind getting his hands " +
      "dirty out on missions himself. He leads the intelligence agency for the " +
      "entire city.",
    provenance: "",
    tags: ["intelligence", "spymaster", "undercover", "nice"],
    images: [
      { src: "images/armstrong-01.jpg", caption: "Suit and tie" },
      { src: "images/armstrong-02.jpg", caption: "Combat gear" }
    ],
    acquired: "",
    notes: ""
  },

  {
    id: "the-palace-orphans",
    name: "The Palace Orphans",
    variant: "Five of them",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Orphan",
    group: "The Royal Household",
    location: "The Royal Palace",
    relations: [
      { to: "the-father", label: "Raised by" },
      { to: "the-mother", label: "Raised by" },
    ],
    rating: 0,
    background:
      "Various orphans, all of them hit by the war. They are different species " +
      "of humans. The one with the big translucent blue body is just a fat " +
      "baby; next to him is his twin, who is a normal baby. The three bulky " +
      "ones come from a different planet.\n\n" +
      "They live peacefully in the royal castle with the Prince and the Queen. " +
      "The Prince and Queen are super busy, so while they took them in, they " +
      "are not their adoptive parents and nobody pretends otherwise. They are " +
      "raised by the good people who live at the Royal Palace — fed, clothed, " +
      "taught, with caretakers of their own. They are very, very well loved and " +
      "they live really well.\n\n" +
      "But they are still orphans. They never really met their parents.",
    provenance: "",
    tags: ["orphan", "war", "twin", "off-world", "vintage-figure", "group"],
    images: ["images/the-palace-orphans-01.jpg"],
    acquired: "",
    notes: "Left to right: bulky, fat baby, his twin, bulky, bulky."
  },

  {
    id: "the-royal-daughter",
    name: "The Royal Daughter",
    variant: "Arm in a sling",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Royal Child",
    group: "The Royal Household",
    location: "The Royal Palace",
    relations: [
      { to: "the-prince", label: "Daughter of" },
      { to: "the-space-princess", label: "Daughter of" },
      { to: "the-royal-sons", label: "Sister of" },
    ],
    rating: 0,
    background:
      "The Prince's daughter. Blonde, very hyperactive, and every bit as " +
      "adventurous as her brothers — which is how the broken arm happened.\n\n" +
      "She gets to wear her dad's old Senate coat, because it reminds her of him.",
    provenance: "",
    tags: ["royal-family", "child", "adventure", "hyperactive", "broken-arm"],
    images: [
      { src: "images/the-royal-daughter-01.jpg", caption: "Grinning" },
      { src: "images/the-royal-daughter-02.jpg", caption: "In tears" }
    ],
    acquired: "",
    notes: "One figure, head turned around. Her torso is physically the same one the Senate-era Prince wears - the lore and the plastic agree."
  },

  {
    id: "the-deputy",
    name: "The Deputy",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Royal Intelligence Deputy",
    group: "Royal Intelligence",
    location: "Lego City",
    relations: [
      { to: "armstrong", label: "Stands in for" },
    ],
    rating: 0,
    background:
      "Armstrong's replacement. Whenever Armstrong is off planet, or busy, or " +
      "undercover, or whatever else, this is who runs the agency.\n\n" +
      "He's an alien, as you can tell from the green skin, but he wears the " +
      "Royal Intelligence Agency uniform like everyone else. He's a lot more " +
      "quiet than Armstrong. He is just as capable.",
    provenance: "",
    tags: ["intelligence", "alien", "quiet", "stand-in"],
    images: ["images/the-deputy-01.jpg"],
    acquired: "",
    notes: "Wears physically the same torso as Armstrong's suit - that torso is the agency uniform. Placeholder name."
  },

  {
    id: "the-space-marshal",
    name: "The Space Marshal",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Chief of Space Police",
    group: "The Space Police",
    location: "",
    relations: [
      { to: "crispus", label: "Commands" },
      { to: "the-gunner", label: "Best friend of" },
      { to: "the-disc-thrower", label: "Commands" },
      { to: "the-reckless", label: "Commands" },
      { to: "the-planner", label: "Commands" },
      { to: "the-clone-pilot", label: "Commands" },
      { to: "the-minigunner", label: "Commands" },
      { to: "the-tv-star", label: "Commands" },
      { to: "the-battalion-commander", label: "Commands" },
      { to: "the-mercenary", label: "Commands" },
      { to: "the-green-officer", label: "Commands" },
      { to: "the-marshals-love", label: "In love with" },
    ],
    rating: 0,
    background:
      "The man in charge of the space police. He has a team of his own, who " +
      "you'll meet later.\n\n" +
      "Bold and daring, with a lot of feelings running close to the surface — " +
      "but an optimist underneath all of it. And he does not go to the dark " +
      "side. He's chill.",
    provenance: "",
    tags: ["space-police", "bold", "daring", "optimist", "leads-a-team"],
    images: ["images/the-space-marshal-01.jpg"],
    acquired: "",
    notes: "Placeholder name. His team is still to come."
  },

  {
    id: "the-green-captain",
    name: "The Green Captain",
    variant: "Light green armor",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Captain, Verdauf Squadron",
    group: "The Verdauf",
    location: "",
    relations: [
      { to: "the-younger-brother", label: "Brother of" },
    ],
    rating: 0,
    background:
      "He leads the Verdauf Squadron, the most elite unit there is — and an " +
      "actual unit, not a handful of specific individuals each handed their own " +
      "task. These men work together. You'll meet more of them later. He's " +
      "known by his light green armor, and he's skilled in hand-to-hand " +
      "combat.\n\n" +
      "He and his younger brother grew up on a planet where militias were the " +
      "only thing keeping the world safe from alien criminals, gangs, and " +
      "violence in general. Their father was something like a space cop, though " +
      "he never patrolled other planets — he was in charge of their settlement, " +
      "and he was killed in the line of duty. Both sons joined the military " +
      "after that.\n\n" +
      "He dies aboard an exploding ship. There was a bomb about to go off and " +
      "take the whole planet with it; he pushed his younger brother into an " +
      "escape pod, and then set the bomb off on the ship instead. Everyone " +
      "else lived.",
    provenance: "",
    tags: ["verdauf", "elite", "captain", "hand-to-hand", "brother", "deceased"],
    images: ["images/the-green-captain-01.jpg"],
    acquired: "",
    notes: "Placeholder name - you called him the Green Captain in passing."
  },

  {
    id: "the-younger-brother",
    name: "The Younger Brother",
    variant: "His father's armor, and his everyday gear",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Soldier",
    group: "The Verdauf",
    location: "",
    relations: [
      { to: "the-green-captain", label: "Brother of" },
    ],
    rating: 0,
    background:
      "The Green Captain's younger brother. The white, black and yellow armor " +
      "he wears is his dad's.\n\n" +
      "They grew up on a planet where militias were the only thing keeping the " +
      "world safe from alien criminals, gangs, and violence in general. Their " +
      "father was something like a space cop, though he never patrolled other " +
      "planets — he was in charge of their settlement, and he was killed in the " +
      "line of duty. Both sons joined the military after that.\n\n" +
      "He is alive because his brother pushed him into an escape pod and stayed " +
      "aboard the ship to set off the bomb himself.",
    provenance: "",
    tags: ["soldier", "brother", "inherited-armor", "survivor"],
    images: [
      { src: "images/the-younger-brother-01.jpg", caption: "His father's armor" },
      { src: "images/the-younger-brother-02.jpg", caption: "Everyday gear" }
    ],
    acquired: "",
    notes: "Placeholder name."
  },

  {
    id: "the-discarded",
    name: "The Discarded",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Ambassador",
    group: "The Discarded",
    location: "",
    relations: [
      { to: "the-wanderer", label: "Brother of" },
      { to: "the-mad-ticket-man", label: "From the same world as" },
    ],
    rating: 0,
    background:
      "He is one of the Discarded — made as a throwaway character in a " +
      "different civilization, and given refuge here.\n\n" +
      "He's a kind, intelligent explorer, well-versed in other cultures, and " +
      "he's used as a societal bridge between different worlds. An ambassador, " +
      "essentially, for civilizations that aren't his own. He travels a great " +
      "deal.\n\n" +
      "His arm is the reason this society has cybernetics at all — they were " +
      "able to study him, and built from what they found. He likes the arm: it " +
      "takes different devices. But what he actually enjoys is meeting other " +
      "civilizations.\n\n" +
      "His modest appearance reflects who he is. He loves going for walks and " +
      "studying poetry, which isn't what you'd guess from looking at him. He " +
      "also loves sports.",
    provenance:
      "Red cap from Lego City. Head from Indiana Jones. Torso from Lego Agents. " +
      "Plain black legs.\n\n" +
      "The silver arm is still unaccounted for — and it is the piece the whole " +
      "cybernetics story hangs on.",
    tags: ["discarded", "ambassador", "explorer", "cybernetics", "poetry", "sports", "refugee"],
    images: ["images/the-discarded-01.jpg"],
    acquired: "",
    notes: "\"The Discarded\" is what his people are called, not his own name - he may want one of his own."
  },

  {
    id: "the-mad-ticket-man",
    name: "The Mad Ticket Man",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Gatekeeper",
    group: "The Discarded",
    location: "The Royal Palace",
    relations: [
      { to: "the-discarded", label: "From the same world as" },
    ],
    rating: 0,
    background:
      "Very grumpy, very grouchy, and widely considered an asshole. He would " +
      "also be the first person to fight if anything happened.\n\n" +
      "He controls security for the premises of the Royal Palace and the city, " +
      "which means he knows not just which people get past the walls but which " +
      "information and which goods do too.\n\n" +
      "A lot of people assumed he'd turn out to be a bad guy when the Great " +
      "Lego War came. He was devoutly loyal instead, which was very nice. He " +
      "carries a small pistol.\n\n" +
      "He comes from the same world as the Discarded.",
    provenance: "",
    tags: ["discarded", "gatekeeper", "grumpy", "loyal", "great-lego-war", "pistol"],
    images: ["images/the-mad-ticket-man-01.jpg"],
    acquired: "",
    notes: ""
  },

  {
    id: "heavy",
    name: "Heavy",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Honor Guard",
    group: "The Royal Household",
    location: "The Royal Palace",
    relations: [
      { to: "armstrong", label: "Nephew of" },
      { to: "brute", label: "Trained by" },
    ],
    rating: 0,
    background:
      "Young, friendly and useful — no more than nineteen. Eager and " +
      "charismatic.\n\n" +
      "He is also the one in charge of the largest gun in the entire Lego " +
      "world, and somehow manages to be super accurate with it despite the " +
      "insane recoil. He studied under Brute.\n\n" +
      "He's part of the young honor guard: they go on missions and they protect " +
      "the royal house from foreign invasion, and they're being trained to do " +
      "elite work without needing to be closely monitored.\n\n" +
      "His uncle is Armstrong, over at the Royal Intelligence Agency.",
    provenance: "",
    tags: ["honor-guard", "young", "heavy-weapons", "marksman", "trained-by-brute", "armstrong-nephew"],
    images: [
      { src: "images/heavy-01.jpg", caption: "Masked" },
      { src: "images/heavy-02.jpg", caption: "Unmasked — he's nineteen" }
    ],
    acquired: "",
    notes: ""
  },

  {
    id: "the-activist",
    name: "The Activist",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Rights Activist",
    group: "The Damaged",
    location: "",
    relations: [
      { to: "the-voiceless", label: "Rescued" },
      { to: "the-survivor", label: "Held by the same world as" },
      { to: "the-spartan", label: "From the same world as" },
    ],
    rating: 0,
    background:
      "He comes from another world, one where Lego figures were destroyed and " +
      "abused. He was rescued out of it — and then he went and rescued some of " +
      "his own friends.\n\n" +
      "His people are the Damaged. As he likes to put it: damaged, but not " +
      "broken. Stronger than ever.\n\n" +
      "He's an outspoken rights activist for damaged figures everywhere, in the " +
      "hope that they can take refuge in this world and this society. Some of " +
      "the Damaged are mean and don't trust other figures. He's really nice, " +
      "and he's loyal.",
    provenance:
      "I never painted him. Someone was destroying these Lego figures, and I got " +
      "them.\n\n" +
      "The damage on him is real damage, done by somebody else. He is not a figure " +
      "made to look like one of the Damaged — he is one.",
    tags: ["damaged", "activist", "rescuer", "refugee", "loyal", "salvaged"],
    images: ["images/the-activist-01.jpg"],
    acquired: "",
    notes: "\"The Damaged\" is what his people are called - he needs a name of his own. Corrected: this figure was never painted by its owner. The damage is real, inflicted by someone else, and he was salvaged out of it."
  },

  {
    id: "the-blue-haired-ninja",
    name: "The Blue-Haired Ninja",
    variant: "Red robes",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Ninja",
    group: "The Ninja Lineage",
    location: "",
    relations: [
      { to: "the-samurai", label: "Studied under" },
      { to: "the-red-ninja", label: "Studied under" },
      { to: "the-street-ninja", label: "Rival of" },
      { to: "the-red-apprentice", label: "Training" },
      { to: "the-ninja-golem", label: "Judged worthy by" },
    ],
    rating: 0,
    background:
      "The best ninja there is. He's known for carrying the golden sword, the " +
      "sharpest sword in existence — in some cases almost a lightsaber, given " +
      "how strong it can be, with the advantage of being completely silent.\n\n" +
      "He started out raw, and the Samurai took him for just a young cocky kid " +
      "at first. But he studied hard, and once the Samurai saw what he actually " +
      "had, he trained him very well. After learning combat under the Samurai, " +
      "he studied under the Red Ninja too — so he ended up with both sides of " +
      "it.\n\n" +
      "For a time he and the Street Ninja were rivals. They never actually " +
      "hated each other. He did ultimately best him.\n\n" +
      "Being the best in the world means a lot of high-profile missions, and " +
      "not much time at home.",
    provenance: "",
    tags: ["ninja", "golden-sword", "silent", "prodigy", "rival"],
    images: ["images/the-blue-haired-ninja-01.jpg"],
    acquired: "",
    notes: "Placeholder name. You called him the red ninja with the blue hair - he wears red robes, but he is not The Red Ninja, who is his teacher."
  },

  {
    id: "the-samurai",
    name: "The Samurai",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Shogun",
    group: "The Ninja Lineage",
    location: "",
    relations: [
      { to: "the-blue-haired-ninja", label: "Taught" },
    ],
    rating: 0,
    background:
      "A shogun, with a modest but very strict kingdom — and he taught the same " +
      "way he ruled.\n\n" +
      "He was hard on the blue-haired ninja, having written him off initially " +
      "as a young cocky kid. Then he saw what the kid actually had, and trained " +
      "him very well.",
    provenance: "",
    tags: ["samurai", "shogun", "strict", "teacher"],
    images: ["images/the-samurai-01.jpg"],
    acquired: "",
    notes: "Placeholder name. His kingdom doesn't have one yet either."
  },

  {
    id: "the-street-ninja",
    name: "The Street Ninja",
    variant: "Backwards cap",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Ninja",
    group: "The Ninja Lineage",
    location: "",
    relations: [
      { to: "the-red-ninja", label: "Studied under" },
      { to: "the-blue-haired-ninja", label: "Rival of" },
    ],
    rating: 0,
    background:
      "Raised in the streets, and trained by the Red Ninja. He's superb with " +
      "nunchucks and fights akimbo, a sword in each hand.\n\n" +
      "For a time he and the blue-haired ninja were rivals. They never actually " +
      "hated each other, and he was ultimately bested.\n\n" +
      "He didn't mind. Being second meant he wasn't the one shipped out on " +
      "every high-profile mission — which left him free to protect his own home " +
      "and his own city, and to keep an eye on things at ground level. He liked " +
      "that a great deal more.",
    provenance: "",
    tags: ["ninja", "streets", "nunchucks", "akimbo", "rival", "homebody"],
    images: ["images/the-street-ninja-01.jpg"],
    acquired: "",
    notes: "Placeholder name."
  },

  {
    id: "the-red-ninja",
    name: "The Red Ninja",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Ninja",
    group: "The Ninja Lineage",
    location: "",
    relations: [
      { to: "the-blue-haired-ninja", label: "Taught" },
      { to: "the-street-ninja", label: "Taught" },
    ],
    rating: 0,
    background:
      "Teacher to both of them. He took the blue-haired ninja after the Samurai " +
      "had finished with him, which is how that one came away with both sides " +
      "of the craft, and he trained the Street Ninja as well.\n\n" +
      "For a time he was tempted by evil. He decided not to do evil.",
    provenance: "",
    tags: ["ninja", "teacher", "tempted", "chose-good"],
    images: ["images/the-red-ninja-01.jpg"],
    acquired: "",
    notes: "Placeholder name."
  },

  {
    id: "the-explorer-and-the-monkey",
    name: "The Explorer and the Monkey",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Explorer",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "An arctic explorer, and the discoverer of things like the Great Base " +
      "Plate.\n\n" +
      "The monkey came from the jungle. By rights the two of them should never " +
      "have been able to meet at all — a winter explorer and a jungle animal, " +
      "with no overlap between where either could survive. They met anyway, and " +
      "became best friends.\n\n" +
      "And because of that friendship — because they're so connected, basically " +
      "by magic — each of them can now survive the other's climate.",
    provenance: "",
    tags: ["explorer", "arctic", "jungle", "monkey", "friendship", "great-base-plate", "pair"],
    images: ["images/the-explorer-and-the-monkey-01.jpg"],
    acquired: "",
    notes: "Neither has a name yet."
  },

  {
    id: "the-shadow-prince",
    name: "The Shadow Prince",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Prince",
    group: "",
    location: "",
    relations: [
      { to: "the-shadow-king", label: "Son of" },
    ],
    rating: 0,
    background:
      "His father is the Shadow King, who is a villain. He is not.\n\n" +
      "He helped negotiate the end of the Great Shadow War, and you can tell " +
      "just by looking at him that he isn't full shadow — there's still some " +
      "good on him, and it shows in his robes.\n\n" +
      "He's very nice. He's young. He believes in the best of people, which is " +
      "the thing his father does not.",
    provenance: "",
    tags: ["shadow", "prince", "negotiator", "great-shadow-war", "not-his-father"],
    images: ["images/the-shadow-prince-01.jpg"],
    acquired: "",
    notes: "His connection to the Shadow King is already written down - it will start working the moment a figure with id \"the-shadow-king\" exists."
  },

  {
    id: "the-jedi",
    name: "The Jedi",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Jedi",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Very outgoing, and completely unorthodox about all of it. Playful, " +
      "free-spirited, quick to laugh, and not remotely interested in doing " +
      "things the way they're supposed to be done — which turns out to work.\n\n" +
      "His lightsaber is blue, and it's a staff. He can activate it and it " +
      "becomes about twice as long, which is where the unorthodox fighting " +
      "style comes from.\n\n" +
      "He's always down to mentor a young Padawan.",
    provenance: "",
    tags: ["jedi", "lightsaber-staff", "blue-saber", "unorthodox", "mentor"],
    images: ["images/the-jedi-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Described by traits rather than the Avatar comparison, same as the Space Marshal - say the word if you'd rather it were named outright."
  },

  {
    id: "the-gas-men",
    name: "The Gas Men",
    variant: "The angry one and his protege",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Gas Attendant",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "The one in front is the angry gas man: a very grumpy gas attendant, and " +
      "back in the day an eighties-flavoured conspiracy theorist. When aliens " +
      "actually did come, he was the one who saved the day. He left that life " +
      "behind him — but during first contact he had extreme intelligence about " +
      "the alien life they were dealing with, and he was right.\n\n" +
      "Behind him is his protege: the young but crazy gas man, heavily Kentucky " +
      "hillbilly coded.",
    provenance: "",
    tags: ["gas-station", "grumpy", "conspiracy-theorist", "first-contact", "protege", "pair"],
    images: ["images/the-gas-men-01.jpg"],
    acquired: "",
    notes: "Angry one on the left, protege on the right. One box because they share a photo - say so if you'd rather they were split."
  },

  {
    id: "the-daredevils",
    name: "The Daredevils",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Test Pilot",
    group: "The Royal Space Academy",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Best friends, and daredevils. They test all kinds of experimental " +
      "vehicles and ships, and they love doing every kind of crazy stunt.\n\n" +
      "They grew up building vehicles in their backyard out of scrap pieces, " +
      "which is exactly why they're always first to test-fly anything new — " +
      "nobody else has that range behind the controls.",
    provenance: "",
    tags: ["test-pilot", "daredevil", "stunts", "scrap-built", "best-friends", "pair"],
    images: ["images/the-daredevils-01.jpg"],
    acquired: "",
    notes: "Neither has a name yet."
  },

  {
    id: "the-pineapple-ninja",
    name: "The Pineapple Ninja",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Ninja Master",
    group: "",
    location: "The Mountain Dojo",
    relations: [],
    rating: 0,
    background:
      "A ninja master who is, literally, made of pineapple. You might wonder " +
      "how a pineapple head is possible. Don't worry about it. He speaks " +
      "without a mouth and that works too.\n\n" +
      "He's very friendly. The only problem with him is that he lives " +
      "inconveniently far away — he very much likes his dojo on top of the " +
      "mountain and has no intention of moving it.\n\n" +
      "If you ever need a ninja, he will be there to help. And then he will " +
      "offer to have you back at his place for tea, because he is extremely " +
      "hospitable.",
    provenance: "",
    tags: ["ninja", "pineapple", "hospitable", "mountain", "dojo", "no-mouth"],
    images: ["images/the-pineapple-ninja-01.jpg"],
    acquired: "",
    notes: ""
  },

  {
    id: "the-repair-crew",
    name: "The Repair Crew",
    variant: "Space engineers",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Space Engineer",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "The space engineer crew. They don't really design things — they fix " +
      "them. A squad that repairs everything after the battles are over, and " +
      "works out moderate upgrades while they're in there.\n\n" +
      "The one with the black hair is in charge of the team. He built a small " +
      "twelve-foot red mech, bionic enough that they could pilot it — lifting " +
      "gears, moving heavy things far faster than they otherwise could. He's " +
      "cool.",
    provenance: "",
    tags: ["engineer", "space", "repair", "crew", "mech", "upgrades", "group"],
    images: [
      { src: "images/the-repair-crew-01.jpg", caption: "The crew" },
      { src: "images/the-repair-crew-02.jpg", caption: "The chief, who built the mech" }
    ],
    acquired: "",
    notes: "One box because the chief is in both photos. Say so if you'd rather he had his own entry - he's done enough to deserve one."
  },

  {
    id: "the-flight-director",
    name: "The Flight Director",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Launch Director",
    group: "The Royal Space Academy",
    location: "The Royal Space Academy",
    relations: [
      { to: "the-test-pilot", label: "Commands" },
      { to: "the-technician", label: "Works with" },
      { to: "the-ground-technician", label: "Works with" },
    ],
    rating: 0,
    background:
      "He runs the launches. Any big ship going up, any engineering project of " +
      "size — he's the overseer, and he's in charge of the entire operation " +
      "now.\n\n" +
      "He used to be a pilot himself, testing the things other people had " +
      "built, and he rose through the ranks of the Royal Space Academy from " +
      "there. The big red jumpsuit comes with the job.\n\n" +
      "When somebody up there says they have a problem, he's the one on the " +
      "other end of it.",
    provenance: "",
    tags: ["space", "launch", "director", "former-pilot", "royal-space-academy"],
    images: ["images/the-flight-director-01.jpg"],
    acquired: "",
    notes: "Placeholder name."
  },

  {
    id: "the-ferryman",
    name: "The Ferryman",
    variant: "Top hat",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "Cosmic Deity",
    role: "Ferryman",
    group: "The Trickster's Boat",
    location: "",
    relations: [
      { to: "the-tricksters-apprentice", label: "Took on" },
      { to: "the-in-betweener", label: "Has never met" },
    ],
    rating: 0,
    background:
      "A trickster god. His origin is a mystery, he is very playful, and he " +
      "will absolutely play pranks on you. He can do all kinds of weird magic. " +
      "He's an odd guy, and he is fundamentally good.\n\n" +
      "What he actually does is bring people here. He pilots an " +
      "interdimensional boat, and he goes and collects the lost and the " +
      "abandoned out of other worlds — by very strange means, but everyone he " +
      "brings across is thankful for it.\n\n" +
      "If someone is being abused in their own civilization, they can go and " +
      "wait on a dock. He will arrive, pick them up, and carry them to safety " +
      "here. Then he leaves them to it. Some people just want a boat ride. Some " +
      "people just want to leave their city forever. He'll take either.",
    provenance: "",
    tags: ["trickster", "god", "boat", "rescue", "magic", "interdimensional", "playful"],
    images: ["images/the-ferryman-01.jpg"],
    acquired: "",
    notes: "Placeholder name - you called him a trickster god, and the boat is what he's actually known for."
  },

  {
    id: "the-tricksters-apprentice",
    name: "The Trickster's Apprentice",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Apprentice",
    group: "The Trickster's Boat",
    location: "",
    relations: [
      { to: "the-ferryman", label: "Apprentice to" },
    ],
    rating: 0,
    background:
      "The trickster god's protege — generally assisting him, and genuinely " +
      "useful about it. He's also a bit of the comic relief, and he helps with " +
      "the pranks.\n\n" +
      "His origins are a little unknown too. Some people think he's the " +
      "trickster's son. Some people think he was just a fan who hung around " +
      "long enough that he eventually picked up some magical powers of his own.",
    provenance: "",
    tags: ["trickster", "apprentice", "pranks", "comic-relief", "magic", "unknown-origin"],
    images: ["images/the-tricksters-apprentice-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Whether he's the Ferryman's son is deliberately left open, because you left it open."
  },

  {
    id: "the-instructor",
    name: "The Instructor",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Combat Instructor",
    group: "The Damaged",
    location: "",
    relations: [
    ],
    rating: 0,
    background:
      "Another of the Damaged. He is badly worn, and you can see it — the new " +
      "society tried to fit him with a new pair of legs, and the join rips " +
      "straight into his torso.\n\n" +
      "He came out of a different civilization with real combat experience, and " +
      "he is happy to teach and trade it. So he does: how to fight with other " +
      "civilizations' weapons, their tactics, and what the world out there " +
      "actually looks like.\n\n" +
      "Very nice guy.",
    provenance:
      "Head wrap from Prince of Persia. Face is a damaged soldier from Indiana " +
      "Jones. Body from Star Wars Endor rebels. Legs possibly from a collectible " +
      "minifigure space villain.\n\n" +
      "So the legs really did come off something else, exactly as the lore says.",
    tags: ["damaged", "instructor", "combat", "foreign-tactics", "refugee", "mismatched-legs", "kitbash"],
    images: ["images/the-instructor-01.jpg"],
    acquired: "",
    notes: "Placeholder name. The damage is literal - the figure really is worn through and wearing two different legs, so the lore and the plastic agree again."
  },

  {
    id: "the-rebuilt",
    name: "The Rebuilt",
    variant: "Upgraded, with shoulder pads",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "Mortal",
    role: "Archangel",
    group: "The First Circle",
    location: "",
    relations: [],
    rating: 0,
    background:
      "One of the Archangels — the demigod sort, the ones higher up — created " +
      "and then sent here. He is a robot, and despite having superhuman " +
      "knowledge he is entirely mortal and doesn't have many powers.\n\n" +
      "For a long time what he did was teach. He trained a great many people.\n\n" +
      "Then there was an attack, and in defending against it he was destroyed " +
      "enough to need rebuilding — and was rebuilt more powerful than he had " +
      "ever been. The shoulder pads are the upgrade. Since then he has stopped " +
      "being only a leader who trains people, and become someone who plans and " +
      "fights in the battles himself.",
    provenance: "",
    tags: ["archangel", "robot", "mortal", "rebuilt", "upgraded", "teacher"],
    images: [
      { src: "images/the-rebuilt-01.jpg", caption: "After the rebuild" },
      { src: "images/the-rebuilt-02.jpg", caption: "Before — the original build" }
    ],
    acquired: "",
    notes: "Placeholder name, taken from what happened to him - the same way the Discarded and the Damaged are named. Two figures, one character, one entry."
  },

  {
    id: "the-chef",
    name: "The Chef",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Chef",
    group: "",
    location: "",
    relations: [
      { to: "the-space-cadets", label: "Trained one of" },
      { to: "the-apprentice-chef", label: "Teaching" },
    ],
    rating: 0,
    background:
      "The best chef in the world. He was already the best chef in the world " +
      "before the knife.\n\n" +
      "The knife is golden, and it was given to him. In the same way there are " +
      "magic swords in this world, this is a magic knife — he can super-chop, " +
      "cut anything, and work at supersonic speed. But none of that is why he's " +
      "the best. It only lets him work faster.",
    provenance: "",
    tags: ["chef", "golden-knife", "magic-weapon", "supersonic", "the-best"],
    images: ["images/the-chef-01.jpg"],
    acquired: "",
    notes: "Placeholder name. He has an apprentice now."
  },

  {
    id: "dr-oz",
    name: "Dr. Oz and his Assistant",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Doctor",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Dr. Oz is the one with the black hair; the other is his assistant. Both " +
      "highly trained, and between them they run the medical facilities.\n\n" +
      "They put everyone back together after a battle, and they handle ordinary " +
      "sickness the rest of the time.",
    provenance: "",
    tags: ["doctor", "medical", "assistant", "after-the-battle", "pair"],
    images: ["images/dr-oz-01.jpg"],
    acquired: "",
    notes: "Dr. Oz on the left, his assistant on the right. The assistant has no name yet."
  },

  {
    id: "the-watch-commander",
    name: "The Watch Commander",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Domestic Police Commander",
    group: "Lego City Law",
    location: "Lego City",
    relations: [
      { to: "the-young-watchman", label: "Commands" },
    ],
    rating: 0,
    background:
      "He runs the domestic police forces — the ground units, the small ones, " +
      "the citywide day-to-day. Very strict and very stern.\n\n" +
      "He is a former clone trooper who was injured in the line of duty, and he " +
      "turned to smaller-scale work after it. He is extremely competent at it.",
    provenance: "",
    tags: ["police", "domestic", "strict", "former-clone", "injured", "competent"],
    images: ["images/the-watch-commander-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Location inferred from \"citywide\" - correct me if he isn't Lego City. Also unclear whether he reports to the Commissioner or runs a separate force; no link drawn either way."
  },

  {
    id: "the-cameraman",
    name: "The Cameraman",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Camera Operator",
    group: "",
    location: "Lego City",
    relations: [],
    rating: 0,
    background:
      "Camera work and editing for the TV unit, which is very highly regarded " +
      "in Lego City. He is not the director — he's the camera editor assistant " +
      "guy, and that's the job.\n\n" +
      "An accident left him badly scarred. He stayed cheerful about it.",
    provenance: "",
    tags: ["tv", "camera", "editor", "scarred", "cheerful"],
    images: ["images/the-cameraman-01.jpg"],
    acquired: "",
    notes: "The scarring is on the figure - it's scuffed and marked all over. Placeholder name."
  },

  {
    id: "the-golden-sniper",
    name: "The Golden Sniper",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Bounty Hunter",
    group: "",
    location: "Lego City",
    relations: [
      { to: "the-ninja-robot", label: "Works with" },
      { to: "the-chaosborn", label: "Best friends with" },
    ],
    rating: 0,
    background:
      "He crossed a great many countries and states to get here from a far away " +
      "land. His golden sniper rifle will take down any bad guy, or any prey.\n\n" +
      "He takes bounties, always alongside his robot. Outside of that he is " +
      "deeply into tea, and really enjoys making it.",
    provenance: "",
    tags: ["sniper", "golden-rifle", "bounty-hunter", "traveller", "tea"],
    images: ["images/the-golden-sniper-01.jpg"],
    acquired: "",
    notes: "Distinct from The Sniper, the quiet elite soldier - two different people."
  },

  {
    id: "the-ninja-robot",
    name: "The Ninja Robot",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Bounty Hunter",
    group: "",
    location: "Lego City",
    relations: [
      { to: "the-golden-sniper", label: "Works with" },
    ],
    rating: 0,
    background:
      "The Golden Sniper's ninja robot companion. The two of them are hired as " +
      "a pair.",
    provenance: "",
    tags: ["robot", "ninja", "bounty-hunter", "companion"],
    images: ["images/the-ninja-robot-01.jpg"],
    acquired: "",
    notes: "Placeholder name."
  },

  {
    id: "the-guardsman",
    name: "The Guardsman",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Prince's Guard",
    group: "The Royal Household",
    location: "The Royal Palace",
    relations: [],
    rating: 0,
    background:
      "One of the elite protection forces around the Prince — the top of that " +
      "ladder, and he climbed the whole thing. He started as a soldier, became " +
      "an agent, and made it all the way up.",
    provenance: "",
    tags: ["royal-guard", "elite", "soldier", "former-agent", "rose-through-ranks"],
    images: ["images/the-guardsman-01.jpg"],
    acquired: "",
    notes: "Placeholder name. \"Lego soldier, then Lego agent, then the top\" reads as either his career or the themes his parts came from - possibly both, which would be a nice accident."
  },

  {
    id: "the-wanderer",
    name: "The Wanderer",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "The Discarded",
    location: "",
    relations: [
      { to: "the-discarded", label: "Brother of" },
    ],
    rating: 0,
    background:
      "The Discarded's brother, out of the same background.\n\n" +
      "What he does with it is wander around, talk to people, and skateboard.",
    provenance: "",
    tags: ["discarded", "wanderer", "skateboard", "sociable"],
    images: ["images/the-wanderer-01.jpg"],
    acquired: "",
    notes: "Placeholder name."
  },

  {
    id: "the-reformed",
    name: "The Reformed",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Ambassador",
    group: "",
    location: "",
    relations: [
      { to: "the-alien-farmer", label: "Same species as" },
    ],
    rating: 0,
    background:
      "He came out of an alien biker gang and turned his life around, switching " +
      "his allegiance to Lego City during a hard stretch of the conflict. What " +
      "changed him was working out that warfare lands on everyone.\n\n" +
      "He wants a peaceful galaxy and is mostly an ambassador now. His whole " +
      "gang has gone essentially pacifist with him — though if it came to a " +
      "large enough battle, they would still fight.",
    provenance: "",
    tags: ["alien", "biker-gang", "reformed", "pacifist", "ambassador"],
    images: ["images/the-reformed-01.jpg"],
    acquired: "",
    notes: "Placeholder name, in the pattern of the Discarded and the Rebuilt."
  },

  {
    id: "the-voiceless",
    name: "The Voiceless",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "The Damaged",
    location: "",
    relations: [
      { to: "the-activist", label: "Rescued by" },
    ],
    rating: 0,
    background:
      "One of the Damaged, rescued by the Activist.\n\n" +
      "He can no longer speak. A voice implant gives him a robotic one, and he " +
      "uses it to say what he thinks.",
    provenance: "",
    tags: ["damaged", "rescued", "voice-implant", "mute"],
    images: ["images/the-voiceless-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Like the Activist, the damage on this figure is real."
  },

  {
    id: "the-analyst",
    name: "The Analyst",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Royal Intelligence Agent",
    group: "Royal Intelligence",
    location: "Lego City",
    relations: [
      { to: "armstrong", label: "Works under" },
    ],
    rating: 0,
    background:
      "Royal Intelligence Agency, in a background support role. Twenty-three or " +
      "twenty-four, and highly capable at whatever he's handed.",
    provenance: "",
    tags: ["intelligence", "support", "young", "capable"],
    images: ["images/the-analyst-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Third figure in the black-vest-and-tie agency uniform, after Armstrong and the Deputy."
  },

  {
    id: "crispus",
    name: "Crispus",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Space Militia",
    group: "The Space Militia",
    location: "",
    relations: [
      { to: "the-space-marshal", label: "Serves under" },
    ],
    rating: 0,
    background:
      "Space militia, under the Space Marshal. Very stern and a bit quiet, but " +
      "friendly with it.\n\n" +
      "Artillery and rockets are where he's strongest.",
    provenance: "",
    tags: ["space-militia", "artillery", "rockets", "stern", "friendly"],
    images: ["images/crispus-01.jpg"],
    acquired: "",
    notes: ""
  },

  {
    id: "the-gunner",
    name: "The Gunner",
    variant: "Infected arm",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Space Police Gunner",
    group: "The Space Police",
    location: "",
    relations: [
      { to: "the-space-marshal", label: "Best friend of" },
      { to: "the-planner", label: "Kept alive by" },
      { to: "the-medic", label: "Saved by" },
    ],
    rating: 0,
    background:
      "Former gunner of the space police, and the Space Marshal's best friend. " +
      "A soldier who fought a great many missions.\n\n" +
      "Then the Goo got into his arm. It took the whole limb and turned it grey, " +
      "and by the time a cure was found that stopped it spreading, the arm had " +
      "gone dark grey and hardened into something like rock. He lost it, in the " +
      "sense that it is no longer his arm.\n\n" +
      "He still fights. The arm has superhuman strength in it now.",
    provenance: "",
    tags: ["space-police", "gunner", "the-goo", "infected", "super-strength", "veteran"],
    images: ["images/the-gunner-01.jpg"],
    acquired: "",
    notes: "The black arm on the figure is the infected one - the lore and the plastic agree again."
  },

  {
    id: "the-disc-thrower",
    name: "The Disc Thrower",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Space Militia",
    group: "The Space Militia",
    location: "",
    relations: [
      { to: "the-space-marshal", label: "Serves under" },
    ],
    rating: 0,
    background:
      "Space militia. On his back he carries a disc, rather like a certain " +
      "shield — and he has several of them. Each takes a different attachment: " +
      "explosive, gas, a shield, whatever the job needs.\n\n" +
      "He and his brother were both trained on another planet and both fight " +
      "for freedom and safety. Of the two of them, he's the jolly one. He has " +
      "fun with it.",
    provenance: "",
    tags: ["space-militia", "discs", "modular-weapons", "jolly", "off-world-trained"],
    images: ["images/the-disc-thrower-01.jpg"],
    acquired: "",
    notes: "His brother is in the same militia but hasn't been photographed yet - no link drawn, and it isn't clear whether it's Crispus."
  },

  {
    id: "the-space-cadets",
    name: "The Space Cadets",
    variant: "Two of a class",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Space Cadet",
    group: "",
    location: "",
    relations: [
      { to: "the-chef", label: "One of them cooked for" },
    ],
    rating: 0,
    background:
      "Officer candidates — the ROTC of this world, the route into the military. " +
      "There are always a few of them about; these two are just a sample of the " +
      "class.\n\n" +
      "The one with dark hair is the older of the pair at about twenty-eight. He " +
      "used to work in a restaurant, for the really good chef, and left because " +
      "he wanted to do something bigger with his life.\n\n" +
      "The one with brown hair is very nice and very studious, and sometimes a " +
      "bit too passive.",
    provenance: "",
    tags: ["space-cadet", "officer-candidate", "trainee", "pair"],
    images: ["images/the-space-cadets-01.jpg"],
    acquired: "",
    notes: "Brown hair on the left, dark hair and moustache on the right."
  },

  {
    id: "the-reckless",
    name: "The Reckless",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Space Militia",
    group: "The Space Militia",
    location: "",
    relations: [
      { to: "the-space-marshal", label: "Serves under" },
    ],
    rating: 0,
    background:
      "Small-time teenage crime on his home planet, until he turned it around " +
      "and joined the space militia. He's loyal now.\n\n" +
      "People sometimes take him for an asshole because he isn't well spoken. " +
      "What he actually is, is brave — brave enough that some of them call it " +
      "reckless. He will throw himself into a fight, and he will put himself in " +
      "front of a teammate without pausing to think about it.\n\n" +
      "He's also a pilot, and he goes very fast.",
    provenance: "",
    tags: ["space-militia", "pilot", "brave", "reckless", "reformed", "loyal"],
    images: ["images/the-reckless-01.jpg"],
    acquired: "",
    notes: "Second figure with a turned-his-life-around arc, after the Reformed."
  },

  {
    id: "the-survivor",
    name: "The Survivor",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Soldier",
    group: "",
    location: "",
    relations: [
      { to: "the-activist", label: "Held by the same world as" },
    ],
    rating: 0,
    background:
      "He was an ordinary soldier until he was captured by the same society the " +
      "Damaged come from. They electrocuted him, drugged him and beat him.\n\n" +
      "He came back. He is still a soldier, and he has become an advocate for " +
      "morale — for what it actually takes to be the good guy, and for always " +
      "doing the right thing anyway.\n\n" +
      "Still brave. Still cool.",
    provenance: "",
    tags: ["soldier", "tortured", "survivor", "morale", "advocate"],
    images: ["images/the-survivor-01.jpg"],
    acquired: "",
    notes: "First figure taken by that world who isn't one of the Damaged - it reaches outside its own borders."
  },

  {
    id: "the-displaced",
    name: "The Displaced",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Soldier",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A soldier out of a war in the 1800s. He was on the field of a battle he " +
      "was losing, with his death immediately ahead of him, and he prayed to be " +
      "taken out of it.\n\n" +
      "He was. He arrived in the modern day and joined a ship.\n\n" +
      "He fights with revolvers, one in each hand. Very strict, and a hard-ass " +
      "about it. He does not understand the ships he flies on at all. He " +
      "understands combat completely.",
    provenance: "",
    tags: ["soldier", "1800s", "time-displaced", "revolvers", "akimbo", "strict", "prayer"],
    images: ["images/the-displaced-01.jpg"],
    acquired: "",
    notes: "A prayer moved him through time. Nobody has said who answered it."
  },

  {
    id: "the-planner",
    name: "The Planner",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Space Militia",
    group: "The Space Militia",
    location: "",
    relations: [
      { to: "the-space-marshal", label: "Serves under" },
      { to: "the-gunner", label: "The militia's only casualty is" },
    ],
    rating: 0,
    background:
      "The space militia's tech guy. He's on the ship with them and he fights " +
      "alongside them, but what he actually does is radio, intelligence and " +
      "planning. He's had a few upgrades over the years, earned by saving the " +
      "day with his gadgets.\n\n" +
      "The reason he matters: the attacks he plans off his own intel have meant " +
      "that nobody on the space militia has ever died. Not one. Their single " +
      "casualty is the man who lost an arm — and they saved him, and the arm he " +
      "got back is stronger than the one he lost.",
    provenance: "",
    tags: ["space-militia", "tech", "intelligence", "planner", "gadgets", "upgraded"],
    images: ["images/the-planner-01.jpg"],
    acquired: "",
    notes: "Possibly the Disc Thrower's brother - a brother came up in the description and the Disc Thrower has one in this militia, but it wasn't stated outright, so no link drawn."
  },

  {
    id: "the-calm-pilot",
    name: "The Calm Pilot",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Pilot",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Young, modest, and very funny. Mostly, though, he is calm — calm at a " +
      "party, calm in front of something about to kill him, calm all the way " +
      "through.",
    provenance: "",
    tags: ["pilot", "young", "calm", "modest", "funny"],
    images: ["images/the-calm-pilot-01.jpg"],
    acquired: "",
    notes: "Came in with the space militia batch but wasn't stated to be one of them - left unattached."
  },

  {
    id: "the-clone-pilot",
    name: "The Clone Pilot",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Pilot",
    group: "The Space Militia",
    location: "",
    relations: [
      { to: "the-space-marshal", label: "Serves under" },
      { to: "claws", label: "Left the clone armies of" },
    ],
    rating: 0,
    background:
      "A clone who took a shot to the arm and used it as the moment to leave. " +
      "He moved across to the space militia rather than stay in the clone army, " +
      "for the flexibility.",
    provenance: "",
    tags: ["pilot", "clone", "space-militia", "former-clone-army", "wounded"],
    images: ["images/the-clone-pilot-01.jpg"],
    acquired: "",
    notes: "Placeholder name."
  },

  {
    id: "the-construction-chief",
    name: "The Construction Chief",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Construction Chief",
    group: "The Construction Crew",
    location: "Lego City",
    relations: [
      { to: "the-site-planner", label: "His second" },
    ],
    rating: 0,
    background:
      "He runs construction in Lego City and trained every other crew in it.\n\n" +
      "He also works at supersonic speed, and he trained as a Jedi.",
    provenance: "",
    tags: ["construction", "supersonic", "jedi-trained", "teacher"],
    images: ["images/the-construction-chief-01.jpg"],
    acquired: "",
    notes: "He has a crew now, and a second. Second figure who works at supersonic speed, after the Chef - and the only one outside the Jedi who trained as one."
  },

  {
    id: "the-minigunner",
    name: "The Minigunner",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Space Police",
    group: "The Space Police",
    location: "",
    relations: [
      { to: "the-space-marshal", label: "Serves under" },
    ],
    rating: 0,
    background:
      "Space police, carrying a minigun. Tough, rugged, and considerable swag.",
    provenance: "",
    tags: ["space-police", "minigun", "tough", "rugged", "swag"],
    images: ["images/the-minigunner-01.jpg"],
    acquired: "",
    notes: "Placeholder name, kept distinct from The Gunner."
  },

  {
    id: "the-aviator",
    name: "The Aviator",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Adventure Crew",
    group: "The Adventure Crew",
    location: "",
    relations: [
      { to: "the-aviators-father", label: "Son of" },
    ],
    rating: 0,
    background:
      "Adventure squad. He flies anything that isn't a spacecraft — planes, " +
      "ships, whatever there is — and he works on them too.\n\n" +
      "He is very, very into maps and finding treasure.",
    provenance: "",
    tags: ["adventure-squad", "pilot", "mechanic", "maps", "treasure"],
    images: ["images/the-aviator-01.jpg"],
    acquired: "",
    notes: "Sixth member of the Adventure Crew. Placeholder name - and the crew needs a better one than \"the khaki adventurers\" too."
  },

  {
    id: "the-tv-star",
    name: "The TV Star",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Space Militia",
    group: "The Space Militia",
    location: "",
    relations: [
      { to: "the-space-marshal", label: "Serves under" },
    ],
    rating: 0,
    background:
      "He was a TV star before he enlisted in the space militia, during one of " +
      "the shadow wars. That's where his face went.\n\n" +
      "You can still tell he was handsome. Part of his face is damaged now, and " +
      "he has gold teeth.",
    provenance: "",
    tags: ["space-militia", "former-tv-star", "scarred", "gold-teeth", "shadow-wars"],
    images: ["images/the-tv-star-01.jpg"],
    acquired: "",
    notes: "Possible link to the Cameraman's TV unit in Lego City - not stated, so not drawn."
  },

  {
    id: "the-snow-jedi",
    name: "The Snow Jedi",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Jedi Master",
    group: "The Snow Jedi's Line",
    location: "",
    relations: [
      { to: "the-beowulf-jedi", label: "Trained" },
      { to: "the-second-padawan", label: "Trained" },
    ],
    rating: 0,
    background:
      "A master, despite the big goggles and the white chest plate, and his " +
      "lightsaber is green.\n\n" +
      "He was formed out of ancient pieces, which is where the knowledge comes " +
      "from — he simply has a great deal of it, instinctively, without having " +
      "had to learn it.\n\n" +
      "He trained two Padawans. One of them is dead.",
    provenance: "",
    tags: ["jedi", "master", "green-saber", "ancient-pieces", "instinctual", "teacher"],
    images: ["images/the-snow-jedi-01.jpg"],
    acquired: "",
    notes: "\"Formed from ancient pieces\" is the first time the piece-based biology has been said to carry knowledge - see the world notes."
  },

  {
    id: "the-beowulf-jedi",
    name: "The Beowulf Jedi",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Jedi",
    group: "The Snow Jedi's Line",
    location: "",
    relations: [
      { to: "the-snow-jedi", label: "Trained by" },
      { to: "the-second-padawan", label: "Friendly rival of" },
    ],
    rating: 0,
    background:
      "He carries the soul of a legendary ancient fighter, reborn and given the " +
      "Force. That is what the Snow Jedi sensed in him, and why he came looking " +
      "for him.\n\n" +
      "He fights monsters, and anything else put in front of him. Extremely " +
      "brave, and enormously strong in both the Force and in plain willpower. " +
      "Not the sharpest — but the bravery covers a lot of ground.\n\n" +
      "He trained alongside the Snow Jedi's other Padawan. They were friendly " +
      "rivals, and in the end they were friends. His death hit him hard.",
    provenance: "",
    tags: ["jedi", "ancient-soul", "reborn", "brave", "monster-slayer", "willpower"],
    images: ["images/the-beowulf-jedi-01.jpg"],
    acquired: "",
    notes: "Named for the Beowulf and Skyrim energy you described."
  },

  {
    id: "the-second-padawan",
    name: "The Second Padawan",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Jedi",
    group: "The Snow Jedi's Line",
    location: "",
    relations: [
      { to: "the-snow-jedi", label: "Trained by" },
      { to: "the-beowulf-jedi", label: "Friendly rival of" },
      { to: "the-purple-shadow", label: "Killed by" },
    ],
    rating: 0,
    background:
      "Force-sensitive from childhood, and very poor with it — so he used mind " +
      "tricks to deceive people, because that was what was available.\n\n" +
      "The Snow Jedi sought him out, and he corrected himself. He fought.\n\n" +
      "He was killed by the Purple Shadow. He and the Beowulf Jedi were friendly " +
      "rivals who had trained together, and by the end that amounted to being " +
      "good friends — the loss hurt him badly.",
    provenance: "",
    tags: ["jedi", "force-sensitive", "mind-tricks", "poverty", "redeemed", "deceased"],
    images: ["images/the-second-padawan-01.jpg"],
    acquired: "",
    notes: "Second death in the collection, after the Green Captain. His link to the Purple Shadow will start working once that figure exists."
  },

  {
    id: "kenjen",
    name: "Kenjen",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Warrior",
    group: "",
    location: "",
    relations: [
      { to: "the-prince", label: "Loyal to" },
    ],
    rating: 0,
    background:
      "A warrior built by an ancient civilization and then frozen — held in a " +
      "stasis chamber until somebody needed him. When they finally called him " +
      "up and he got out, the first thing he did was take down a tiger roughly " +
      "fifty times his size.\n\n" +
      "He rode to a city, met the old man clone and the old man clone's robot, " +
      "and between them they brought down the evil blue civilization. There is " +
      "a great deal more to that story.\n\n" +
      "He is not originally from here. His dimension runs very close to this " +
      "one — near enough that most things are familiar to him and a few things " +
      "are not. He's here now, and he is loyal to the Prince. He has not yet " +
      "been called on for anything.",
    provenance:
      "Made during Covid, at about 19 — much later than the rest of the " +
      "collection.",
    tags: ["warrior", "ancient", "stasis", "summoned", "alternate-dimension", "unused"],
    images: ["images/kenjen-01.jpg"],
    acquired: "",
    notes: "Second figure that can be dated, after Kaz at 16. The old man clone, his robot, and the evil blue civilization are all still uncatalogued."
  },

  {
    id: "the-battalion-commander",
    name: "The Battalion Commander",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Space Militia Commander",
    group: "The Space Militia",
    location: "",
    relations: [
      { to: "the-space-marshal", label: "Serves under" },
    ],
    rating: 0,
    background:
      "He runs the space militia from the mothership — a battalion commander, " +
      "handling everything above the day-to-day.\n\n" +
      "That means serious mission planning. It also means organising the " +
      "celebrations and the welcome-home ceremonies, which in a militia that " +
      "has never lost anyone is a real and recurring job.",
    provenance: "",
    tags: ["space-militia", "commander", "mothership", "planning", "ceremonies"],
    images: ["images/the-battalion-commander-01.jpg"],
    acquired: "",
    notes: "Placeholder name."
  },

  {
    id: "the-mercenary",
    name: "The Mercenary",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Space Militia",
    group: "The Space Militia",
    location: "",
    relations: [
      { to: "the-space-marshal", label: "Serves under" },
    ],
    rating: 0,
    background:
      "A former special-forces mercenary who eventually ended up in the space " +
      "militia.\n\n" +
      "Explosives and shotguns are his forte.",
    provenance: "",
    tags: ["space-militia", "former-mercenary", "explosives", "shotguns"],
    images: ["images/the-mercenary-01.jpg"],
    acquired: "",
    notes: "Part of your description came through too garbled to use - something about how he ended up in the militia. Worth re-telling."
  },

  {
    id: "the-ship-crew",
    name: "The Ship Crew",
    variant: "Two of them",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Pilot",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "They came from another planet and settled here. Between them they fly " +
      "the most famous ship in the galaxy: it looks like an ordinary aeroplane " +
      "until it folds its wings in and becomes something rocket-powered and " +
      "extremely fast.\n\n" +
      "Both of them have a southern accent and both of them are very friendly. " +
      "They are also masters of the sea and of water.",
    provenance: "",
    tags: ["pilot", "famous-ship", "off-world", "sea", "water", "friendly", "pair"],
    images: ["images/the-ship-crew-01.jpg"],
    acquired: "",
    notes: "Placeholder name - the ship is the famous thing, so it probably wants naming before they do."
  },

  {
    id: "the-defector",
    name: "The Defector",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Commander",
    group: "The Knock-offs",
    location: "",
    relations: [
      { to: "the-car-repairman", label: "Brought him across" },
    ],
    rating: 0,
    background:
      "A soldier commander out of one of the knock-off societies — the off-brand " +
      "civilizations, plenty of whom would happily declare war on Lego.\n\n" +
      "He switched sides, and brought some of his men across with him. You can " +
      "already see him adapting to the new climate.",
    provenance: "",
    tags: ["defector", "knock-off", "commander", "switched-sides", "adapting"],
    images: ["images/the-defector-01.jpg"],
    acquired: "",
    notes: "The figure is itself a knock-off brick minifigure, so his origin is literally what he's made of - the most direct case of the lore and the plastic agreeing yet."
  },

  {
    id: "the-salvager",
    name: "The Salvager",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "The Discarded",
    location: "The Bin",
    relations: [],
    rating: 0,
    background:
      "His torso and face are ordinary Lego. He was discarded after an attack " +
      "on civilians, and what put him back together came out of the Bin — so " +
      "everything below the waist is not Lego at all. Bionic legs, and a " +
      "reinforced helmet.\n\n" +
      "He goes back in. He ventures into the Bin to save other pieces and to " +
      "fight off the beasts that come at him on the way.\n\n" +
      "The cape was given to him by the people of the Bin, for the number of " +
      "them he has pulled out of destruction that was already coming.",
    provenance:
      "The Bin was a donation bin at my elementary school.",
    tags: ["discarded", "the-bin", "bionic", "rebuilt", "rescuer", "non-lego-parts", "cape"],
    images: ["images/the-salvager-01.jpg"],
    acquired: "",
    notes: "Lego above the waist, not Lego below it - exactly as the lore says. Placeholder name."
  },

  {
    id: "the-grey-beanie",
    name: "The Man in the Grey Beanie",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "",
    provenance: "",
    tags: ["undescribed"],
    images: ["images/the-grey-beanie-01.jpg"],
    acquired: "",
    notes: "NOT YET DESCRIBED. He was the second photo in a batch where the description jumped from the first to the third, so he has no story and no name - the name here is pure physical description so he isn't mistaken for a character I invented. Tell me who he is."
  },

  {
    id: "the-chaosborn",
    name: "The Chaosborn",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [
      { to: "the-golden-sniper", label: "Best friends with" },
    ],
    rating: 0,
    background:
      "He comes from a world where everything is made of incoherent scrap — " +
      "not built, just pure chaos. He grew up fighting monsters made of bricks " +
      "and people assembled out of every combination of parts there is.\n\n" +
      "He and the Golden Sniper are best friends.",
    provenance: "A gift from my friend Zach.",
    tags: ["scrap-world", "chaos", "monster-fighter", "gift"],
    images: ["images/the-chaosborn-01.jpg"],
    acquired: "",
    notes: "Placeholder name."
  },

  {
    id: "the-scrap-adventurer",
    name: "The Scrap Adventurer",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Adventurer",
    group: "The Jungle Adventurers",
    location: "",
    relations: [
      { to: "the-ginger-adventurer", label: "Adventures with" },
      { to: "the-young-watchman", label: "Adventures with" },
    ],
    rating: 0,
    background:
      "Made up of scrap pieces, and an adventurer. He comes from the same land " +
      "as the Ginger Adventurer, and the two of them are good friends who have " +
      "been through a great many jungle adventures together.",
    provenance: "",
    tags: ["adventurer", "scrap-pieces", "jungle", "friends"],
    images: ["images/the-scrap-adventurer-01.jpg"],
    acquired: "",
    notes: "Placeholder name. More detail to come - there's concept art of these two."
  },

  {
    id: "the-ginger-adventurer",
    name: "The Ginger Adventurer",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Adventurer",
    group: "The Jungle Adventurers",
    location: "",
    relations: [
      { to: "the-scrap-adventurer", label: "Adventures with" },
      { to: "the-young-watchman", label: "Adventures with" },
      { to: "the-explorers-son", label: "Father of" },
    ],
    rating: 0,
    background:
      "From the same land as the Scrap Adventurer, and his good friend. A great " +
      "many jungle adventures between the two of them.",
    provenance: "",
    tags: ["adventurer", "jungle", "friends"],
    images: ["images/the-ginger-adventurer-01.jpg"],
    acquired: "",
    notes: "More detail to come - there's concept art of these two."
  },

  {
    id: "the-outlaw",
    name: "The Outlaw",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Outlaw",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A mercenary outlaw with a crew of space pirates behind him, and a long " +
      "career spent in the ethically grey. He would rob any of the good guys " +
      "blind for a treasure. He would never hurt one of them.\n\n" +
      "The Great Shadow War is what settled him. He came out of it loyal to the " +
      "city, stopped stealing, and turned the plundering to good use.\n\n" +
      "A space cowboy — weary and hard-worn, carrying more than he says, dry " +
      "about it, decent underneath, and trying to square the ledger later than " +
      "he should have.",
    provenance: "",
    tags: ["outlaw", "space-pirate", "mercenary", "reformed", "great-shadow-war", "cowboy"],
    images: ["images/the-outlaw-01.jpg"],
    acquired: "",
    notes: "Written as traits rather than naming the Red Dead comparison, same as the Anakin and Avatar ones - say if you'd rather it were named outright."
  },

  {
    id: "the-young-watchman",
    name: "The Young Watchman",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Watch Command",
    group: "Lego City Law",
    location: "Lego City",
    relations: [
      { to: "the-watch-commander", label: "Serves under" },
      { to: "the-scrap-adventurer", label: "Adventures with" },
      { to: "the-ginger-adventurer", label: "Adventures with" },
    ],
    rating: 0,
    background:
      "A young soldier of the Watch Command, and a friend of the two " +
      "adventurers — he goes on the jungle trips with them.\n\n" +
      "He has the look of a solemn young northern swordsman about him, and none " +
      "of the brooding that usually comes with it. He's warm, and friendly, and " +
      "still very young.",
    provenance: "",
    tags: ["watch-command", "young", "warm", "friendly", "adventurer"],
    images: ["images/the-young-watchman-01.jpg"],
    acquired: "",
    notes: "Placeholder name."
  },

  {
    id: "the-explorers-son",
    name: "The Explorer's Son",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Adventurer",
    group: "The Jungle Adventurers",
    location: "",
    relations: [
      { to: "the-ginger-adventurer", label: "Son of" },
    ],
    rating: 0,
    background:
      "The Ginger Adventurer's son. He has an illness of the bones, which " +
      "leaves him weak and frail.\n\n" +
      "He still loves going out on adventures with his dad.",
    provenance: "",
    tags: ["adventurer", "son", "illness", "frail", "determined"],
    images: ["images/the-explorers-son-01.jpg"],
    acquired: "",
    notes: "Placeholder name."
  },

  {
    id: "the-famous-pilot",
    name: "The Famous Pilot",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Pilot",
    group: "",
    location: "",
    relations: [
      { to: "the-pilots-daughter", label: "Father of" },
    ],
    rating: 0,
    background:
      "A famous pilot, off a long run of successful missions and the people he " +
      "brought back from them.\n\n" +
      "Famous enough that his daughter went and did the same.",
    provenance: "",
    tags: ["pilot", "famous", "veteran", "father"],
    images: ["images/the-famous-pilot-01.jpg"],
    acquired: "",
    notes: "Placeholder name - but see the note on his daughter about the family name."
  },

  {
    id: "the-pilots-daughter",
    name: "The Pilot's Daughter",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Soldier",
    group: "",
    location: "",
    relations: [
      { to: "the-famous-pilot", label: "Daughter of" },
    ],
    rating: 0,
    background:
      "She followed her father into it and became famous in her own right. " +
      "Genuinely strong, with a very strong jawline.\n\n" +
      "Between the two of them the family name is known across the galaxy, and " +
      "known for being heroic and brave.",
    provenance: "",
    tags: ["soldier", "famous", "strong", "daughter", "heroic-family"],
    images: ["images/the-pilots-daughter-01.jpg"],
    acquired: "",
    notes: "Their surname is famous throughout the galaxy in-world, and is the first name in this collection said to be known and then not given. Worth having."
  },

  {
    id: "the-general",
    name: "The General",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "General",
    group: "The Space Militia",
    location: "",
    relations: [
      { to: "the-generals-son", label: "Adopted father of" },
      { to: "jimzon", label: "Commands" },
      { to: "the-medic", label: "Commands" },
    ],
    rating: 0,
    background:
      "Top of every space militia force there is. He started out as a gas man " +
      "on an oil refinery on another planet, put together a team to protect it, " +
      "and spent forty years watching that turn into the militia.\n\n" +
      "They are loyal to the Prince but operate with far more freedom than a " +
      "regular force — down to what they're allowed to wear.\n\n" +
      "His adopted son died on a mission he took against his father's word. " +
      "Everything about how the militia runs now comes out of that: the " +
      "obsession with safety, the insistence that everyone has the best " +
      "equipment there is. They live on donations and a very thin margin, and " +
      "none of it goes to anybody's house. It goes to safety, equipment and " +
      "training.",
    provenance: "",
    tags: ["space-militia", "general", "founder", "former-gas-man", "safety", "grief"],
    images: ["images/the-general-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Unclear how he and the Space Marshal sit relative to each other - the Marshal was said to lead the space militia too. No link drawn between them."
  },

  {
    id: "the-generals-son",
    name: "The General's Son",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Space Militia",
    group: "The Space Militia",
    location: "",
    relations: [
      { to: "the-general", label: "Adopted son of" },
    ],
    rating: 0,
    background:
      "The General's adopted son, and a militiaman himself. He wanted to push " +
      "back at his father a little, so he started taking his own missions — " +
      "including the ones he'd been told no about.\n\n" +
      "Aliens killed him on one of them.\n\n" +
      "The safety culture of the entire militia is built on top of that, and so " +
      "is its record.",
    provenance: "",
    tags: ["space-militia", "deceased", "rebellion", "adopted-son", "the-reason"],
    images: ["images/the-generals-son-01.jpg"],
    acquired: "",
    notes: "Third death in the collection, and the one that explains the militia's perfect record since - see the world notes."
  },

  {
    id: "jimzon",
    name: "Jimzon",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Space Militia",
    group: "The Space Militia",
    location: "",
    relations: [
      { to: "the-general", label: "Serves under" },
      { to: "the-prince", label: "Loyal to" },
    ],
    rating: 0,
    background:
      "His family live on an asteroid colony. He joined the military as a cadet " +
      "very early, he's space militia, and he's loyal to the Prince's army.\n\n" +
      "More to come on him.",
    provenance:
      "Built off a character from my book. He has the same name in both.",
    tags: ["space-militia", "cadet", "asteroid-colony", "book-character"],
    images: ["images/jimzon-01.jpg"],
    acquired: "",
    notes: "The second figure who exists in the book as well as the collection - and, like Kaz, one of the few with a real name. That is the naming pattern holding."
  },

  {
    id: "the-spartan",
    name: "The Spartan",
    variant: "First attempt",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "The Damaged",
    location: "",
    relations: [
      { to: "the-activist", label: "From the same world as" },
    ],
    rating: 0,
    background:
      "He came out of the same world as the spray-painted ones, and he turned " +
      "out okay.\n\n" +
      "He doesn't talk much. He moves slowly, he is extremely hard to kill, and " +
      "the armour stops more or less anything.",
    provenance: "",
    tags: ["spartan", "damaged-world", "armoured", "silent", "bulletproof"],
    images: ["images/the-spartan-01.jpg"],
    acquired: "",
    notes: "\"First attempt at the Spartan soldier\" - sounds like there are more. Linked to the Damaged rather than the Discarded, on the strength of \"the people that were spray-painted\"; say if that's the wrong one."
  },

  {
    id: "the-medic",
    name: "The Medic",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Medic",
    group: "The Space Militia",
    location: "",
    relations: [
      { to: "the-general", label: "Serves under" },
      { to: "the-gunner", label: "Saved the life of" },
    ],
    rating: 0,
    background:
      "One of the militia's medics, carrying a deep enough set of tools to deal " +
      "with any injury that comes to him.\n\n" +
      "He is the one who saved the man whose arm turned to rock.",
    provenance: "",
    tags: ["space-militia", "medic", "the-goo", "lifesaver"],
    images: ["images/the-medic-01.jpg"],
    acquired: "",
    notes: "Placeholder name."
  },

  {
    id: "the-brute-prince",
    name: "The Brute Prince",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Prince",
    group: "The Knock-offs",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A prince of the Mega Bloks world — a prince, not a king — during the " +
      "Halo Mega Bloks wars.\n\n" +
      "The Mega Bloks were the aggressor. He was one of the few on that side " +
      "who argued for stopping it, and who wanted it resolved by talking rather " +
      "than by winning. The war did eventually end.",
    provenance: "",
    tags: ["mega-bloks", "knock-off", "prince", "peacemaker", "halo-wars", "diplomat"],
    images: ["images/the-brute-prince-01.jpg"],
    acquired: "",
    notes: "He is a Mega Bloks Halo figure, so like the Defector his origin is what he is made of. Placeholder name - kept distinct from Brute, the Secretary of War."
  },

  {
    id: "the-nexo-knight",
    name: "The Nexo Knight",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Knight",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "There is a more famous Nexo Knight than him — one with a spectacular " +
      "sword, who turned out to be a villain. This one has spent his whole " +
      "career in that man's shadow, and never minded it.\n\n" +
      "Where the other one flies the ship, he is the gunner. Where the other " +
      "one flies into battle, he is a soldier on the ground. He has a jetpack " +
      "and can come at you from above.\n\n" +
      "Very modest. He would rather not be in the spotlight at all.",
    provenance: "",
    tags: ["knight", "nexo", "jetpack", "modest", "overshadowed"],
    images: ["images/the-nexo-knight-01.jpg"],
    acquired: "",
    notes: "Placeholder name. The knight he stands behind is a villain and is still to come."
  },

  {
    id: "king-arthur",
    name: "King Arthur",
    variant: "Mounted",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "King",
    group: "The Gunless Realm",
    location: "The Medieval Era",
    relations: [
      { to: "the-prince", label: "Follows" },
      { to: "the-city-king", label: "Rules above" },
      { to: "curtis", label: "His knight" },
    ],
    rating: 0,
    background:
      "King of the part of the world where guns do not work, and where everyone " +
      "has therefore fallen back on medieval tactics.\n\n" +
      "He is a king in his own right and still answers to the Prince. His sword " +
      "is Excalibur, and the cape is excellent.",
    provenance: "",
    tags: ["king", "excalibur", "gunless-realm", "mounted", "timeless"],
    images: ["images/king-arthur-01.jpg"],
    acquired: "",
    notes: "Taken as his actual in-world name rather than a comparison, since you named his sword too - say if that's wrong. \"The Gunless Realm\" is my shorthand for his territory; it needs a real name."
  },

  {
    id: "the-armorer",
    name: "The Armorer",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Armorer",
    group: "The Gunless Realm",
    location: "The Medieval Era",
    relations: [],
    rating: 0,
    background:
      "A knight out of the realm where guns don't work, trained on the crossbow " +
      "because that is what there was.\n\n" +
      "Then he travelled to the primary Lego dimension, picked up a firearm, and " +
      "turned out to be the most skilled shot in it. He serves as the armorer, " +
      "or on the battlefield as a long-range rifleman.",
    provenance: "",
    tags: ["knight", "armorer", "crossbow", "marksman", "gunless-realm", "traveller"],
    images: ["images/the-armorer-01.jpg"],
    acquired: "",
    notes: "Placeholder name."
  },

  {
    id: "curtis",
    name: "Curtis",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Knight",
    group: "The Gunless Realm",
    location: "The Medieval Era",
    relations: [
      { to: "king-arthur", label: "Knight of" },
    ],
    rating: 0,
    background:
      "A famous knight of the gunless realm. Very brave, and a great enjoyer of " +
      "jousting.",
    provenance: "",
    tags: ["knight", "famous", "brave", "jousting", "gunless-realm"],
    images: ["images/curtis-01.jpg"],
    acquired: "",
    notes: ""
  },

  {
    id: "the-ace",
    name: "The Ace",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Adventure Crew",
    group: "The Adventure Crew",
    location: "",
    relations: [
      { to: "the-fixer", label: "Father of" },
      { to: "the-old-hand", label: "Best friend of" },
    ],
    rating: 0,
    background:
      "The Adventure Crew's pilot, out of a time when aviation had only just " +
      "started — he fought in what amounts to the First World War.\n\n" +
      "He keeps company with the likes of Indiana Jones, and has flown him " +
      "somewhere before now.",
    provenance: "",
    tags: ["adventure-crew", "pilot", "wwi-era", "time-displaced", "indiana-jones"],
    images: ["images/the-ace-01.jpg"],
    acquired: "",
    notes: "Placeholder name."
  },

  {
    id: "the-fixer",
    name: "The Fixer",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Adventure Crew",
    group: "The Adventure Crew",
    location: "",
    relations: [
      { to: "the-ace", label: "Son of" },
    ],
    rating: 0,
    background:
      "The Ace's son, and the man with an answer to everything. Extremely " +
      "resourceful — he can build what's needed out of what's there.\n\n" +
      "Wounded, he's the medic. Lost, he's the navigator. Sick, he'll work " +
      "something out.",
    provenance: "",
    tags: ["adventure-crew", "resourceful", "medic", "navigator", "improviser"],
    images: ["images/the-fixer-01.jpg"],
    acquired: "",
    notes: "Placeholder name."
  },

  {
    id: "the-host",
    name: "The Host",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Adventure Crew",
    group: "The Adventure Crew",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A famous television presenter — the survival-and-extreme-adventure sort " +
      "— who came out to film an episode or two with the crew.\n\n" +
      "He fell in love with it and never left. He's full-time with them now, " +
      "and he still posts about what they're up to. Loud, charismatic, and " +
      "exactly as advertised.",
    provenance: "",
    tags: ["adventure-crew", "tv-host", "charismatic", "loud", "career-change"],
    images: ["images/the-host-01.jpg"],
    acquired: "",
    notes: "Placeholder name."
  },

  {
    id: "the-old-hand",
    name: "The Old Hand",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Adventure Crew",
    group: "The Adventure Crew",
    location: "",
    relations: [
      { to: "the-ace", label: "Best friend of" },
    ],
    rating: 0,
    background:
      "The old man of the Adventure Crew, best friend of its pilot, and one of " +
      "the people who leads it.",
    provenance: "",
    tags: ["adventure-crew", "elder", "leader", "best-friend"],
    images: ["images/the-old-hand-01.jpg"],
    acquired: "",
    notes: "Placeholder name."
  },

  {
    id: "the-aviators-father",
    name: "The Aviator's Father",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Adventure Crew",
    group: "The Adventure Crew",
    location: "",
    relations: [
      { to: "the-aviator", label: "Father of" },
    ],
    rating: 0,
    background:
      "He and his son were separated at birth, and not by anyone's choice.\n\n" +
      "They found each other again by both joining the same flying club — " +
      "neither of them knowing, both of them having turned out to love flying " +
      "without being taught to.",
    provenance: "",
    tags: ["adventure-crew", "pilot", "separated-at-birth", "reunion", "flying"],
    images: ["images/the-aviators-father-01.jpg"],
    acquired: "",
    notes: "Placeholder name."
  },

  {
    id: "the-rifleman",
    name: "The Rifleman",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Adventure Crew",
    group: "The Adventure Crew",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Another of the Adventure Crew, and their support rifleman. Large " +
      "moustache, cowboy hat.\n\n" +
      "He speaks in a flat, oddly formal deadpan, arrives at conclusions nobody " +
      "else was heading toward, and delivers them with complete and untroubled " +
      "confidence.",
    provenance: "",
    tags: ["adventure-crew", "rifleman", "moustache", "deadpan"],
    images: ["images/the-rifleman-01.jpg"],
    acquired: "",
    notes: "Voice written as traits rather than naming the Family Guy comparison, same as the others."
  },

  {
    id: "the-woodsman",
    name: "The Woodsman",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Woodsman",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Grizzled and wild, the sort of man you picture in a coonskin hat. He has " +
      "defended his house out in the wilderness from zombies and from aliens.\n\n" +
      "Friendly and hospitable, and he will not join anybody's team. He wants " +
      "to be left alone. Occasionally something comes through his land that he " +
      "can't handle by himself, and the Adventure Crew turn up for it.\n\n" +
      "He has dug up a great deal out there — Viking helmets, golden swords — " +
      "and he will not hand any of it over. They're his.",
    provenance: "",
    tags: ["woodsman", "unaffiliated", "hermit", "hospitable", "treasure", "stubborn"],
    images: ["images/the-woodsman-01.jpg"],
    acquired: "",
    notes: "The only figure in the collection who has actively refused to belong to anything - no relations drawn, which is the point."
  },

  {
    id: "the-forager",
    name: "The Forager",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Adventure Crew",
    group: "The Adventure Crew",
    location: "",
    relations: [
      { to: "the-hatless-gnome", label: "Gnome blood in common" },
    ],
    rating: 0,
    background:
      "Descended from gnomes, at least in part — the height gives it away.\n\n" +
      "He is the finest navigator on the ground there is, and he reads " +
      "everything instantly. He can feel rain coming two days out. He knows " +
      "where every trail goes. He knows the mosses by name and which of them " +
      "are medicine.\n\n" +
      "And he is the crew's cook. He can put a five-star meal together out of " +
      "nothing at all — the right moss, the right mushrooms, the right leaves, " +
      "and exactly how to cook or smoke them into something worth eating.",
    provenance: "",
    tags: ["adventure-crew", "gnome-blooded", "navigator", "forager", "cook", "nature"],
    images: ["images/the-forager-01.jpg"],
    acquired: "",
    notes: "Second best cook in the collection, after the Chef - but in the wilderness rather than a kitchen, and without a magic knife."
  },

  {
    id: "the-green-officer",
    name: "The Green Officer",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Space Police",
    group: "The Space Police",
    location: "",
    relations: [
      { to: "the-space-marshal", label: "Serves under" },
    ],
    rating: 0,
    background:
      "Space police, in green. A supporting man rather than a leading one.",
    provenance: "",
    tags: ["space-police", "support", "green"],
    images: ["images/the-green-officer-01.jpg"],
    acquired: "",
    notes: "Placeholder name."
  },

  {
    id: "the-marshals-love",
    name: "The Marshal's Love",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "The Space Police",
    location: "",
    relations: [
      { to: "the-space-marshal", label: "Love interest of" },
    ],
    rating: 0,
    background:
      "The Space Marshal's love interest.",
    provenance: "",
    tags: ["love-interest", "space-police"],
    images: ["images/the-marshals-love-01.jpg"],
    acquired: "",
    notes: "Fourth woman in a collection of 107, and the only character here defined solely by her relationship to someone else - she has no role, no name and no story of her own yet. The placeholder name is deliberately awkward so it nags. She wears the same torso as the General's Son."
  },

  {
    id: "the-in-betweener",
    name: "The In-Betweener",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Traveller",
    group: "The Trickster's Boat",
    location: "",
    relations: [
      { to: "the-ferryman", label: "Has never met" },
    ],
    rating: 0,
    background:
      "He travels between dimensions and has seen most of what there is — " +
      "fifth-dimensional tesseract places, topsy-turvy incoherent ones — and he " +
      "has sat and spoken with the gods and demigods of several different " +
      "worlds.\n\n" +
      "He has a dimensional boat, much like the trickster's. The two of them " +
      "have never met. The difference is that the trickster crosses between " +
      "worlds, and this one stays inside the space in between them and lives " +
      "there.\n\n" +
      "Which is why, when he comes to visit the mainland, the way he dresses is " +
      "very funny. He has some small magic. Nothing enormous.",
    provenance: "",
    tags: ["dimensions", "boat", "in-between", "magic", "traveller", "odd-dresser"],
    images: ["images/the-in-betweener-01.jpg"],
    acquired: "",
    notes: "Second man in the collection with a dimensional boat, and the link to the Ferryman records that they have never met - which seemed worth keeping rather than leaving blank."
  },

  {
    id: "the-defense-bot",
    name: "The Defense Bot",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Defense Bot",
    group: "The Verdauf",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Built by an old man of the former Verdauf guards. One hand is a minigun. " +
      "He is also a very good mechanic.",
    provenance: "",
    tags: ["robot", "verdauf", "minigun", "mechanic", "built"],
    images: ["images/the-defense-bot-01.jpg"],
    acquired: "",
    notes: "The old man who built him is still to come. First mention of the Verdauf guards as distinct from the Verdauf Squadron."
  },

  {
    id: "the-space-boarder",
    name: "The Space Boarder",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Athlete",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A famous space boarder and a local celebrity — the defining competitor " +
      "in his sport, medalled and well known for it, and enough of a showman " +
      "that people who don't follow the sport know him anyway.",
    provenance: "",
    tags: ["athlete", "space-boarding", "celebrity", "medalled", "showman"],
    images: ["images/the-space-boarder-01.jpg"],
    acquired: "",
    notes: "First athlete in the collection - everyone else works, fights or rules. The gold medal is on the actual figure."
  },

  {
    id: "the-test-pilot",
    name: "The Test Pilot",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Test Pilot",
    group: "The Royal Space Academy",
    location: "",
    relations: [
      { to: "the-flight-director", label: "Serves under" },
    ],
    rating: 0,
    background:
      "He tests aircraft. That is the job, and he does it under the man in the " +
      "red jumpsuit who runs every launch.",
    provenance: "",
    tags: ["test-pilot", "aircraft", "royal-space-academy"],
    images: ["images/the-test-pilot-01.jpg"],
    acquired: "",
    notes: "Placeholder name."
  },

  {
    id: "the-red-apprentice",
    name: "The Red Apprentice",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Ninja",
    group: "The Ninja Lineage",
    location: "",
    relations: [
      { to: "the-blue-haired-ninja", label: "Apprentice to" },
    ],
    rating: 0,
    background:
      "The Blue-Haired Ninja's apprentice, and very nearly finished training.\n\n" +
      "He will take the mantle one day.",
    provenance: "",
    tags: ["ninja", "apprentice", "successor", "nearly-trained"],
    images: ["images/the-red-apprentice-01.jpg"],
    acquired: "",
    notes: "Corrected: he studies under the Blue-Haired Ninja, not the Red Ninja. The name still fits - the Blue-Haired Ninja wears red robes."
  },

  {
    id: "the-ancient",
    name: "The Ancient",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Elder",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "He predates the Lego civilization entirely. He was here before any of " +
      "it, he is wisely respected, and he helped the whole thing grow into what " +
      "it became.\n\n" +
      "He had a brother. The brother disappeared completely, and the search for " +
      "him has been running for twenty years. It is not likely now that he will " +
      "ever be found.",
    provenance:
      "Originally just a Tonka truck figure — not a Lego piece at all, and the " +
      "oldest thing in the collection. The twenty-year search is a real one.",
    tags: ["ancient", "pre-lego", "tonka", "wisdom", "elder", "lost-brother", "not-lego"],
    images: ["images/the-ancient-01.jpg"],
    acquired: "",
    notes: "The only figure here older than the collection itself, and older than The First Man - which is a question the lore hasn't answered: The First Man is the first man to exist, and this one was already here. Placeholder name."
  },

  {
    id: "the-ranger",
    name: "The Ranger",
    variant: "Bionic arm",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Adventurer",
    group: "The Frontier Expedition",
    location: "",
    relations: [
      { to: "the-pathfinder", label: "Travels with" },
    ],
    rating: 0,
    background:
      "An adventurer with a bionic arm, and most of what he is remains a " +
      "mystery.\n\n" +
      "His planet keeps him busy. Hostile forces are trying to occupy it. The " +
      "wildlife is in danger. And there are temples out there full of evil " +
      "spirits, ghosts and zombie-like things that he has to go in and fight.\n\n" +
      "In between, he rides ATVs.",
    provenance: "",
    tags: ["adventurer", "bionic-arm", "solo", "mystery", "wildlife", "temples", "atvs"],
    images: ["images/the-ranger-01.jpg"],
    acquired: "",
    notes: "Corrected: he is not solo - he travels with the Pathfinder. The figure has one yellow arm and one sand-green arm, so the bionic one is visible. \"The Frontier Expedition\" is my name for the pair and needs a real one."
  },

  {
    id: "the-blacktron-pilot",
    name: "The Blacktron Pilot",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Pilot",
    group: "The Blacktron Squadron",
    location: "",
    relations: [],
    rating: 0,
    background: "Pilot of the Blacktron squadron.",
    provenance: "",
    tags: ["pilot", "blacktron", "squadron"],
    images: ["images/the-blacktron-pilot-01.jpg"],
    acquired: "",
    notes: "First of his squadron. The group is set so the rest of them join him automatically when they arrive."
  },

  {
    id: "the-technician",
    name: "The Technician",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Technician",
    group: "The Royal Space Academy",
    location: "",
    relations: [
      { to: "the-flight-director", label: "Works for" },
    ],
    rating: 0,
    background:
      "Assistant technician on the space programme, working to the man in the " +
      "red jumpsuit.",
    provenance: "",
    tags: ["technician", "space-programme", "support"],
    images: ["images/the-technician-01.jpg"],
    acquired: "",
    notes: "Placeholder name."
  },

  {
    id: "the-ground-technician",
    name: "The Ground Technician",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Technician",
    group: "The Royal Space Academy",
    location: "",
    relations: [
      { to: "the-flight-director", label: "Works for" },
    ],
    rating: 0,
    background:
      "The other technician on the red space programme.",
    provenance: "",
    tags: ["technician", "space-programme", "support"],
    images: ["images/the-ground-technician-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Wears the same star-spangled helmet as the Test Pilot."
  },

  {
    id: "the-new-recruit",
    name: "The New Recruit",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Space Militia",
    group: "The Space Militia",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A space cadet, recently graduated into the space militia. He has not " +
      "seen anything yet.",
    provenance: "",
    tags: ["space-militia", "graduate", "green", "untested"],
    images: ["images/the-new-recruit-01.jpg"],
    acquired: "",
    notes: "Placeholder name."
  },

  {
    id: "the-blacktron-leader",
    name: "The Blacktron Leader",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Squadron Leader",
    group: "The Blacktron Squadron",
    location: "",
    relations: [],
    rating: 0,
    background:
      "He leads the Blacktron squadron. Their work is mining mineral resources " +
      "out in space, and defending whatever needs defending when it comes to " +
      "that.",
    provenance: "",
    tags: ["blacktron", "squadron", "leader", "mining", "space"],
    images: ["images/the-blacktron-leader-01.jpg"],
    acquired: "",
    notes: "Placeholder name. His squadron is two now, so the group finally shows."
  },

  {
    id: "the-ninja-golem",
    name: "The Ninja Golem",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Guardian",
    group: "The Ninja Lineage",
    location: "",
    relations: [
      { to: "the-blue-haired-ninja", label: "Follows" },
    ],
    rating: 0,
    background:
      "A sentient statue, set to guard the golden sword.\n\n" +
      "The Blue-Haired Ninja came for it and they fought. The golem judged him " +
      "worthy, gave up the sword, and has followed him ever since.",
    provenance: "",
    tags: ["golem", "statue", "sentient", "guardian", "golden-sword"],
    images: ["images/the-ninja-golem-01.jpg"],
    acquired: "",
    notes: "This is where the golden sword came from."
  },

  {
    id: "the-pathfinder",
    name: "The Pathfinder",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Explorer",
    group: "The Frontier Expedition",
    location: "",
    relations: [
      { to: "the-ranger", label: "Travels with" },
    ],
    rating: 0,
    background:
      "He travels with the Ranger. He does the navigating, and he has the " +
      "charisma to walk into a local village and be welcome there.",
    provenance: "",
    tags: ["explorer", "navigator", "charisma", "diplomacy"],
    images: ["images/the-pathfinder-01.jpg"],
    acquired: "",
    notes: "Placeholder name. His arrival is what stopped the Ranger being a solo act."
  },

  {
    id: "the-quartermaster",
    name: "The Quartermaster",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Quartermaster",
    group: "The Space Militia",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Maintenance and supply aboard the mothership, for the space militia and " +
      "the space police both. He is the reason everybody has their gear.",
    provenance: "",
    tags: ["quartermaster", "supply", "maintenance", "mothership", "logistics"],
    images: ["images/the-quartermaster-01.jpg"],
    acquired: "",
    notes: "Serves both the militia and the space police; filed with the militia because the mothership is theirs."
  },

  {
    id: "the-constable",
    name: "The Constable",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Police",
    group: "Lego City Law",
    location: "Lego City",
    relations: [],
    rating: 0,
    background: "Police. Very stern about it.",
    provenance: "",
    tags: ["police", "stern"],
    images: ["images/the-constable-01.jpg"],
    acquired: "",
    notes: "Placeholder name."
  },


  {
    id: "the-beach-bum",
    name: "The Beach Bum",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "He used to captain a pirate ship. He gave it up and went to the beach, " +
      "and he has stayed there.\n\n" +
      "He isn't a burnout and he isn't a nuisance. He doesn't do drugs and he " +
      "doesn't cause anybody trouble. He is genuinely just a man on a beach who " +
      "can tell a story and play the guitar.",
    provenance: "",
    tags: ["former-pirate", "captain", "beach", "guitar", "storyteller", "retired"],
    images: ["images/the-beach-bum-01.jpg"],
    acquired: "",
    notes: "Placeholder name. The first retired person in the collection - everyone else who stopped doing their job was stopped by something."
  },


  {
    id: "the-agent",
    name: "The Agent",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Agent",
    group: "Lego Agents",
    location: "",
    relations: [],
    rating: 0,
    background:
      "He transferred here from a different world, and once he arrived he " +
      "joined the Lego Agents.\n\n" +
      "The work is the Mission Impossible kind: infiltration, gadgets, getting " +
      "into the place nobody is supposed to get into and back out again.",
    provenance:
      "The black suit with the orbiting-globe badge is a genuine Lego Agents " +
      "torso, so the lore and the plastic agree - he joined the Agents and he " +
      "is wearing the Agents.",
    tags: ["agent", "spy", "off-world", "transfer", "infiltration", "gadgets"],
    images: ["images/the-agent-01.jpg"],
    acquired: "",
    notes: "Placeholder name. How he crossed over isn't recorded yet - the Ferryman and the In-Betweener are the two known ways across, and he isn't linked to either."
  },


  {
    id: "the-replica",
    name: "The Replica",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [
      { to: "the-green-demigod", label: "Built to replicate" },
    ],
    rating: 0,
    background:
      "Villains tried to copy demigod power into robot technology and build " +
      "themselves an evil one of their own.\n\n" +
      "It didn't work, because they built him off the original DNA - and the " +
      "niceness was already coded into it. He came out good. He is nowhere near " +
      "as powerful as an actual demigod, but he behaves exactly like one.",
    provenance: "",
    tags: ["robot", "replica", "demigod", "built-by-villains", "failed-weapon", "good"],
    images: ["images/the-replica-01.jpg"],
    acquired: "",
    notes: "Placeholder name. The first figure here made by the villains, and he came out on the good side of the filter anyway."
  },


  {
    id: "the-mystery-shaman",
    name: "The Mystery Shaman",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Shaman",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Very well groomed, and dressed like nowhere anybody can place.\n\n" +
      "He holds every kind of ancient wisdom: how to make contact with parallel " +
      "universes, realms and dimensions, and what to do about all manner of " +
      "ailments.\n\n" +
      "He also fucks around with magic. If you ever need to get into your own " +
      "mind, he can send you into the dimension of it.",
    provenance: "",
    tags: ["shaman", "ancient-wisdom", "magic", "dimensions", "parallel-universes", "healer", "mystery"],
    images: ["images/the-mystery-shaman-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Third person in the collection who deals in dimensions, after the Ferryman and the In-Betweener - but he reaches them instead of travelling them."
  },



  {
    id: "george-joudrie",
    name: "George Joudrie",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Civilian",
    group: "",
    location: "",
    relations: [
      { to: "sean", label: "Father of" },
    ],
    rating: 0,
    background:
      "Very loving. Likes to work outside.\n\n" +
      "He is a civilian. He could probably do anything.",
    provenance: "The Lego version of my dad.",
    tags: ["civilian", "father", "real-person", "outdoors", "capable"],
    images: ["images/george-joudrie-01.jpg"],
    acquired: "",
    notes: "The first figure here named after someone real and living, and now standing next to his son, and the only man in the collection with no rank, no office and no unit who is still described as able to do anything."
  },


  {
    id: "the-royal-financier",
    name: "The Royal Financier",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Financier",
    group: "The Royal Galactic Army",
    location: "",
    relations: [],
    rating: 0,
    background:
      "One of the head financiers of the Royal Galactic Army. He is the reason " +
      "the fleet is paid for.",
    provenance: "",
    tags: ["financier", "money", "royal", "army", "suit"],
    images: ["images/the-royal-financier-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Open question: is the Royal Galactic Army the same force as the Space Militia, or a separate one? Kept as its own group until you say."
  },


  {
    id: "the-ninja-fan",
    name: "The Ninja Fan",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A fan of all ninja. He is genuinely good with a sword - not the best, " +
      "but good.\n\n" +
      "He has training. He has no proper training. Nobody in the lineage taught " +
      "him anything; he got this far on his own, because he loves it.",
    provenance: "",
    tags: ["ninja-fan", "sword", "self-taught", "untrained", "enthusiast"],
    images: ["images/the-ninja-fan-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Deliberately NOT in the Ninja Lineage - admiring them is not belonging to them, and that gap is the whole character."
  },


  {
    id: "the-city-financier",
    name: "The City Financier",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Financier",
    group: "",
    location: "Lego City",
    relations: [],
    rating: 0,
    background:
      "He finances a lot of domestic Lego City. The police budget and the " +
      "defense budget both come through him.\n\n" +
      "He funds them as best he can.",
    provenance: "",
    tags: ["financier", "money", "budget", "lego-city", "domestic", "police-funding"],
    images: ["images/the-city-financier-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Second financier in the collection - he pays for home, the other one pays for the fleet. Whether they are colleagues in one office or two separate offices isn't settled, so they share a role and no connection."
  },


  {
    id: "the-gem-hunter",
    name: "The Gem Hunter",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Adventurer",
    group: "The Gem Hunters",
    location: "",
    relations: [
      { to: "the-gem-hunters-friend", label: "Friend of" },
    ],
    rating: 0,
    background:
      "A different kind of adventurer, in a different adventure group " +
      "altogether.\n\n" +
      "What he is after is ancient precious gemstones - the ones that carry " +
      "mystical powers.",
    provenance: "",
    tags: ["adventurer", "gemstones", "relics", "mystical", "treasure"],
    images: ["images/the-gem-hunter-01.jpg"],
    acquired: "",
    notes: "Placeholder name, and the group name is a placeholder too - you said a different adventure group without naming it. Fourth adventuring outfit here after the Adventure Crew, the Jungle Adventurers and the Frontier Expedition."
  },



  {
    id: "the-gem-hunters-friend",
    name: "The Gem Hunter's Friend",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Adventurer",
    group: "The Gem Hunters",
    location: "",
    relations: [
      { to: "the-gem-hunter", label: "Friend of" },
    ],
    rating: 0,
    background:
      "The Gem Hunter's friend, and out there with him after the same ancient " +
      "stones.",
    provenance:
      "He and the Gem Hunter are wearing the same shirt - the tan one with the " +
      "red neckerchief and the coiled rope. Two men from the same outfit, " +
      "dressed out of the same kit.",
    tags: ["adventurer", "gemstones", "friend", "expedition"],
    images: ["images/the-gem-hunters-friend-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Second member of the Gem Hunters, so that group is a real one now rather than a group of one."
  },


  {
    id: "the-sculptors-heir",
    name: "The Sculptor's Heir",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Financier",
    group: "",
    location: "Lego City",
    relations: [],
    rating: 0,
    background:
      "Another financier, and this one's money came out of art.\n\n" +
      "His family are artists - sculptors, and not the painting kind. They " +
      "build big: sculpture, and architectural design for a whole city. The " +
      "family fortune was made doing that.\n\n" +
      "He brings the money back to the city.",
    provenance: "",
    tags: ["financier", "money", "art", "sculpture", "architecture", "family-fortune", "inherited"],
    images: ["images/the-sculptors-heir-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Third financier in the collection - the fleet, the city, and now the one whose fortune was built rather than earned in office."
  },


  {
    id: "the-law-student",
    name: "The Law Student",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Law Student",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A ginger law student.",
    provenance:
      "Wearing the same black sweater, white collar and red tie as the Royal " +
      "Financier. In this world that torso is the professional class - the " +
      "money men and the men studying to argue.",
    tags: ["law", "student", "ginger", "civilian"],
    images: ["images/the-law-student-01.jpg"],
    acquired: "",
    notes: "Placeholder name. The first person here training for something rather than already being it."
  },


  {
    id: "the-disco-civilian",
    name: "The Disco Civilian",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Civilian",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A disco civilian.",
    provenance: "",
    tags: ["disco", "civilian", "sunglasses", "gold-chain", "purple"],
    images: ["images/the-disco-civilian-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Second civilian in the collection, after my dad."
  },


  {
    id: "the-bank-teller",
    name: "The Bank Teller",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Bank Teller",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A bank teller. He has stopped bank robberies by himself.",
    provenance: "",
    tags: ["bank", "teller", "robbery", "civilian", "brave"],
    images: ["images/the-bank-teller-01.jpg"],
    acquired: "",
    notes: "Placeholder name. A man with no rank, no unit and no weapon who has stopped armed robberies on his own - which puts him in a very short list here."
  },



  {
    id: "the-manifestation-of-life",
    name: "The Manifestation of Life",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "Demigod",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "There are a great many magical and mystical beings here, and they are " +
      "not the creator. The creator is the First Man. These are the smaller " +
      "gods - demigods, gods of a lesser size.\n\n" +
      "This one is a manifestation of life itself. And he can be contacted.\n\n" +
      "Which is why he is wearing the plainest Lego outfit that exists: no " +
      "printing, no gear, no expression but the smile. That is deliberate.",
    provenance:
      "The most default minifigure it is possible to assemble - blank yellow " +
      "head, red torso, blue legs, nothing else. Nothing in the collection is " +
      "less decorated, and nothing in it means more by being undecorated.",
    tags: ["demigod", "life", "small-god", "plain", "default", "contactable", "mystical"],
    images: ["images/the-manifestation-of-life-01.jpg"],
    acquired: "",
    notes: "Placeholder name. The purest case in the collection of the lore and the plastic agreeing: life itself is the figure with no costume on."
  },


  {
    id: "the-tall-mechanic",
    name: "The Tall Mechanic",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Aircraft Mechanic",
    group: "The Fire Service",
    location: "",
    relations: [
      { to: "the-fire-chief", label: "Volunteers under" },
    ],
    rating: 0,
    background:
      "An aircraft mechanic, and ridiculously tall with it.\n\n" +
      "He is also a volunteer firefighter.",
    provenance: "",
    tags: ["mechanic", "aircraft", "tall", "firefighter", "volunteer"],
    images: ["images/the-tall-mechanic-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Linked to the Fire Chief because he volunteers and the Chief runs the service - say the word if his brigade answers to somebody else. Second aircraft man here after the Mechanic, who is an engineer rather than a mechanic, so they don't share a role."
  },


  {
    id: "the-vigilante",
    name: "The Vigilante",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Vigilante",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Twenty years old, and out most nights on his bike.\n\n" +
      "He works with the police and carries an honorary badge, given to him for " +
      "the time he stopped a crime. He is not one of them. He prefers it solo, " +
      "and what he handles is small - gas station robberies, that kind of " +
      "thing. Whatever he can get to.",
    provenance: "",
    tags: ["vigilante", "bike", "night", "honorary-badge", "solo", "young"],
    images: ["images/the-vigilante-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Deliberately not in Lego City Law - an honorary badge is not a job, and staying outside it is the point of him. Second civilian here to stop a robbery without being police, after the Bank Teller."
  },


  {
    id: "the-vessel",
    name: "The Vessel",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Vessel",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "An empty body, kept for the demigods to use.\n\n" +
      "When one of them cannot physically be somewhere - trapped in another " +
      "dimension, say - they send their soul into this being and act through " +
      "it.\n\n" +
      "The rest of the time it is empty.",
    provenance: "",
    tags: ["vessel", "empty", "demigod", "possession", "soul", "robot", "dimensions"],
    images: ["images/the-vessel-01.jpg"],
    acquired: "",
    notes: "Placeholder name. No relations recorded because no particular demigod owns him - any of them can be him, which is a strange thing for an entry in a catalogue of individuals."
  },


  {
    id: "the-fire-chief",
    name: "The Fire Chief",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Fire Chief",
    group: "The Fire Service",
    location: "",
    relations: [
      { to: "the-tall-mechanic", label: "Volunteer firefighter" },
    ],
    rating: 0,
    background: "Chief firefighter of the Lego civilization.",
    provenance: "",
    tags: ["firefighter", "chief", "fire-service", "ginger-beard"],
    images: ["images/the-fire-chief-01.jpg"],
    acquired: "",
    notes: "Placeholder name. The first fire service in the collection, after a great many armies and police forces."
  },



  {
    id: "the-occultist",
    name: "The Occultist",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Occult Instructor",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "An expert in everything occult. He runs the school, and what he teaches " +
      "there is dark magic - how it works, and how to contact the spirits of " +
      "other dimensions and realms.\n\n" +
      "He teaches it to be used for good. You would think he was evil. He is " +
      "not. He simply has a fascination with evil things without being any of " +
      "them, and teaching it in the open is the point: it lets people " +
      "understand how evil actually works, and how things like it get stopped.\n\n" +
      "He does live in a tower full of strange potions and skulls. He is just " +
      "like that.",
    provenance: "",
    tags: ["occult", "dark-magic", "teacher", "school", "spirits", "dimensions", "tower", "potions", "skulls", "not-evil"],
    images: ["images/the-occultist-01.jpg"],
    acquired: "",
    notes: "Placeholder name. The clearest good-faction figure here who reads as a villain on sight - which is the whole point of him, and a useful one in a catalogue sorted by good and bad. Close in subject to the Mystery Shaman, but no meeting between them is recorded, so no link."
  },


  {
    id: "the-man-with-the-frog",
    name: "The Man with the Frog",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Civilian",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "He uncovered a statue of a frog. The moment he picked it up it attached " +
      "itself to the top of his head, and it has not come off since.\n\n" +
      "At first he was deeply embarrassed. He now has every power a frog has, " +
      "and he is indestructible.\n\n" +
      "The trouble is that he is an ordinary civilian and not especially brave. " +
      "So he goes to work at his office, with a giant frog statue on his head.",
    provenance: "",
    tags: ["frog", "statue", "indestructible", "powers", "civilian", "office", "embarrassed", "accident"],
    images: ["images/the-man-with-the-frog-01.jpg"],
    acquired: "",
    notes: "Placeholder name. The only indestructible man in the collection, and he uses it to commute."
  },


  {
    id: "the-alien-farmer",
    name: "The Alien Farmer",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Farmer",
    group: "",
    location: "",
    relations: [
      { to: "the-reformed", label: "Same species as" },
    ],
    rating: 0,
    background:
      "Same species as the Reformed, the one who came out of the alien biker " +
      "gang. This one just decided to retire and become a farmer instead.\n\n" +
      "He is a nice guy.",
    provenance: "",
    tags: ["alien", "farmer", "retired", "nice", "peaceful"],
    images: ["images/the-alien-farmer-01.jpg"],
    acquired: "",
    notes: "Placeholder name. The link to the Reformed is a species link, not a recorded meeting - cut it if you'd rather connections only meant people who have actually met."
  },


  {
    id: "the-intern",
    name: "The Intern",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Intern",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A grey alien, and a nice one.\n\n" +
      "He interns at a mining facility and goes to college, where he is " +
      "studying mechanical engineering.",
    provenance: "",
    tags: ["alien", "grey-alien", "intern", "mining", "student", "engineering", "nice"],
    images: ["images/the-intern-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Second person here still training for something, after the Law Student."
  },


  {
    id: "the-fisherman-and-son",
    name: "The Fisherman and his Son",
    variant: "Two of them",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Fisherman",
    group: "",
    location: "Lego City",
    relations: [],
    rating: 0,
    background:
      "A fisherman and his son. Between them they are known for feeding a great " +
      "deal of the city.",
    provenance: "",
    tags: ["fisherman", "father-and-son", "food", "city", "pair"],
    images: ["images/the-fisherman-and-son-01.jpg"],
    acquired: "",
    notes: "Placeholder name. One box because they share a photo, same as the Twins and the Gas Men - say so if you'd rather they were split."
  },



  {
    id: "the-detective",
    name: "The Detective",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Detective",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A detective. He works any high-profile mystery case there is.",
    provenance: "",
    tags: ["detective", "mystery", "investigator", "high-profile"],
    images: ["images/the-detective-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Left out of Lego City Law because which force he answers to isn't recorded - say the word and he joins them."
  },


  {
    id: "the-sheriff",
    name: "The Sheriff",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Sheriff",
    group: "Lego City Law",
    location: "Lego City",
    relations: [],
    rating: 0,
    background:
      "A sheriff out of a small rural town, lately moved to Lego City to work.",
    provenance: "",
    tags: ["sheriff", "police", "rural", "transfer", "lego-city"],
    images: ["images/the-sheriff-01.jpg"],
    acquired: "",
    notes: "Placeholder name."
  },


  {
    id: "the-swat-officers",
    name: "The SWAT Officers",
    variant: "Two of them, out of their gear",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "SWAT",
    group: "The SWAT Team",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Two members of the Lego civilization's SWAT team.\n\n" +
      "This is them in ordinary uniform rather than in all their gear.",
    provenance: "",
    tags: ["swat", "police", "tactical", "out-of-gear", "pair"],
    images: ["images/the-swat-officers-01.jpg"],
    acquired: "",
    notes: "Placeholder name. One box because they share a photo, same as the Gas Men and the Fisherman - say so if you'd rather they were split. Kept as their own unit rather than folded into Lego City Law, since SWAT here is the whole civilization's rather than the city's."
  },



  {
    id: "the-animal-control-officer",
    name: "The Animal Control Officer",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Animal Control",
    group: "Lego City Law",
    location: "Lego City",
    relations: [],
    rating: 0,
    background:
      "Animal control. He is a bit grumpy about it, and the reason is that a " +
      "great deal of the job turns out to be wild wolves.",
    provenance: "",
    tags: ["police", "animal-control", "wolves", "grumpy"],
    images: ["images/the-animal-control-officer-01.jpg"],
    acquired: "",
    notes: "Placeholder name. First mention of wild animals being a standing problem in the city rather than a one-off."
  },


  {
    id: "the-sergeant",
    name: "The Sergeant",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Sergeant",
    group: "Lego City Law",
    location: "Lego City",
    relations: [],
    rating: 0,
    background: "One of the police sergeants.",
    provenance: "",
    tags: ["police", "sergeant"],
    images: ["images/the-sergeant-01.jpg"],
    acquired: "",
    notes: "Placeholder name. You said one of the sergeants, so there are others not yet photographed."
  },


  {
    id: "the-highway-patrolman",
    name: "The Highway Patrolman",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Highway Patrol",
    group: "Lego City Law",
    location: "Lego City",
    relations: [],
    rating: 0,
    background: "Police. He works the highways.",
    provenance: "",
    tags: ["police", "highway-patrol", "roads"],
    images: ["images/the-highway-patrolman-01.jpg"],
    acquired: "",
    notes: "Placeholder name."
  },


  {
    id: "the-officer-in-sunglasses",
    name: "The Officer in Sunglasses",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Police",
    group: "Lego City Law",
    location: "Lego City",
    relations: [],
    rating: 0,
    background: "Police.",
    provenance: "",
    tags: ["police", "sunglasses"],
    images: ["images/the-officer-in-sunglasses-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive - no story given for him yet beyond the uniform. Send one whenever and it goes straight in."
  },


  {
    id: "the-khaki-officer",
    name: "The Khaki Officer",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Police",
    group: "Lego City Law",
    location: "Lego City",
    relations: [],
    rating: 0,
    background: "Police.",
    provenance: "",
    tags: ["police", "khaki", "sidearm"],
    images: ["images/the-khaki-officer-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive, in the pattern of the Green Officer - no story given for him yet beyond the uniform."
  },



  {
    id: "the-backpacker",
    name: "The Backpacker",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Backpacker",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A backpacker. What he backpacks is the local mountains.",
    provenance: "",
    tags: ["backpacker", "mountains", "hiking", "outdoors", "civilian"],
    images: ["images/the-backpacker-01.jpg"],
    acquired: "",
    notes: "Placeholder name. The only person here who goes into the wilderness for no reason but going."
  },


  {
    id: "the-head-agent",
    name: "The Head Agent",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Head of the Lego Agents",
    group: "Lego Agents",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Head agent of the Lego Agents.\n\n" +
      "He has extremely cool spy sunglasses.",
    provenance: "",
    tags: ["agent", "spy", "head", "leader", "sunglasses"],
    images: ["images/the-head-agent-01.jpg"],
    acquired: "",
    notes: "Placeholder name. No roster links written - everyone in the Lego Agents already shows everyone else through the group, and stacking commands-and-serves-under on top of that is the redundancy you called out on the Space Marshal."
  },


  {
    id: "the-smiling-agent",
    name: "The Smiling Agent",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Agent",
    group: "Lego Agents",
    location: "",
    relations: [],
    rating: 0,
    background: "One of the Lego Agents.",
    provenance: "",
    tags: ["agent", "spy"],
    images: ["images/the-smiling-agent-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive - he is the only agent wearing the plain old smile instead of gear on his face. No story given for him yet."
  },


  {
    id: "the-forensic-agent",
    name: "The Forensic Agent",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Forensic Agent",
    group: "Lego Agents",
    location: "",
    relations: [],
    rating: 0,
    background:
      "The forensics of the Lego Agents. She is the one who reads a crime " +
      "scene, and the one who finds the clues in it.",
    provenance: "",
    tags: ["agent", "forensics", "crime-scene", "clues", "investigator"],
    images: ["images/the-forensic-agent-01.jpg"],
    acquired: "",
    notes: "Placeholder name. One of the very few women in the collection, and the first whose entry is about what she does rather than who she is related to."
  },


  {
    id: "the-agent-in-the-helmet",
    name: "The Agent in the Helmet",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Agent",
    group: "Lego Agents",
    location: "",
    relations: [],
    rating: 0,
    background: "One of the Lego Agents.",
    provenance: "",
    tags: ["agent", "spy", "helmet", "sunglasses"],
    images: ["images/the-agent-in-the-helmet-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive. No story given for him yet."
  },



  {
    id: "tony-stark",
    name: "Tony Stark",
    variant: "And Iron Man, in two suits",
    faction: "good",
    origin: "branded",
    theme: "Marvel",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "Literally Tony Stark. Also, literally Iron Man - in two suits.",
    provenance: "A genuine Marvel minifigure, not a build.",
    tags: ["marvel", "iron-man", "tony-stark", "branded", "visitor", "three-outfits"],
    images: [
      { src: "images/tony-stark-01.jpg", caption: "Tony Stark" },
      { src: "images/tony-stark-02.jpg", caption: "Iron Man, the earlier suit" },
      { src: "images/tony-stark-03.jpg", caption: "Iron Man, the later suit" }
    ],
    acquired: "",
    notes: "First branded figure in the catalog - the origin filter has had nothing but customs in it for 160 figures and now it does something. Three figures, one man, one entry - the same call as Bruce Wayne and Batman, and the suits are outfits. How he stands relative to the worlds cosmology still isn't written down."
  },


  {
    id: "bruce-wayne",
    name: "Bruce Wayne",
    variant: "And Batman",
    faction: "good",
    origin: "branded",
    theme: "DC",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "Literally Bruce Wayne. Also, literally Batman - in two different suits.",
    provenance: "A genuine DC minifigure, not a build.",
    tags: ["dc", "batman", "bruce-wayne", "branded", "visitor", "two-outfits"],
    images: [
      { src: "images/bruce-wayne-01.jpg", caption: "Bruce Wayne" },
      { src: "images/bruce-wayne-02.jpg", caption: "Batman, black suit" },
      { src: "images/bruce-wayne-03.jpg", caption: "Batman, grey and white suit" }
    ],
    acquired: "",
    notes: "Two figures, one man, one entry - your own rule is never two entries for the same person, and a secret identity is the most literal case of two outfits there is. Say the word if you would rather Batman stood on his own card. Same open question as Tony Stark about how he stands relative to the worlds."
  },


  {
    id: "the-stunt-robot",
    name: "The Stunt Robot",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Stunt Double",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A robot used for the stunts - the ones where putting a human in would " +
      "be too dangerous.",
    provenance: "",
    tags: ["robot", "stunts", "stand-in", "dangerous-work", "film"],
    images: ["images/the-stunt-robot-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Third robot here built to stand in for a person, after the Vessel and the Replica - though this one is the only one whose whole purpose is being expendable."
  },


  {
    id: "the-curly-haired-adventurer",
    name: "The Curly-Haired Adventurer",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Adventure Crew",
    group: "The Adventure Crew",
    location: "",
    relations: [],
    rating: 0,
    background: "One of the khaki adventure lot.",
    provenance: "",
    tags: ["adventurer", "khaki", "sidearm"],
    images: ["images/the-curly-haired-adventurer-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive - no story given for him yet beyond which crew he runs with. Ninth in the Adventure Crew."
  },


  {
    id: "the-viking",
    name: "The Viking",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Viking",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A viking, sent here in a time dilation like the others were.\n\n" +
      "She is genuinely nice, and very chill. She likes running water.",
    provenance: "",
    tags: ["viking", "time-dilation", "displaced", "calm", "running-water", "woman"],
    images: ["images/the-viking-01.jpg"],
    acquired: "",
    notes: "Placeholder name. You said she ALSO came through a time dilation - nobody else in the catalog is recorded as having arrived that way yet, so whoever the others are, they're not written down. Worth telling me who."
  },



  {
    id: "the-ferrari-driver",
    name: "The Ferrari Driver",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Racing Driver",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A Ferrari driver.",
    provenance:
      "The suit is a genuine licensed Ferrari torso, sponsors and prancing " +
      "horse and all - so Ferrari exists in this world as itself.",
    tags: ["racing", "driver", "ferrari", "motorsport"],
    images: ["images/the-ferrari-driver-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Kept as custom rather than branded because you called him a Ferrari driver, not a specific real driver - unlike Tony Stark and Bruce Wayne, who are literally themselves."
  },


  {
    id: "the-helmeted-space-officer",
    name: "The Helmeted Space Officer",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Space Police",
    group: "The Space Police",
    location: "",
    relations: [],
    rating: 0,
    background: "Space police.",
    provenance: "",
    tags: ["space-police", "helmet", "visor"],
    images: ["images/the-helmeted-space-officer-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive - three space police arrived together in the same grey armor and the only thing telling them apart is what is on their heads and faces. Send names or stories and they go straight in."
  },


  {
    id: "the-smiling-space-officer",
    name: "The Smiling Space Officer",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Space Police",
    group: "The Space Police",
    location: "",
    relations: [],
    rating: 0,
    background: "Space police.",
    provenance: "",
    tags: ["space-police", "woman"],
    images: ["images/the-smiling-space-officer-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive. One of two women who joined the Space Police in the same batch - before them the force had five members and one woman in it, and she was listed by who she loves."
  },


  {
    id: "the-scowling-space-officer",
    name: "The Scowling Space Officer",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Space Police",
    group: "The Space Police",
    location: "",
    relations: [],
    rating: 0,
    background: "Space police.",
    provenance: "",
    tags: ["space-police", "woman", "stern"],
    images: ["images/the-scowling-space-officer-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive, taken from the only thing that distinguishes her from the officer beside her in identical armor."
  },


  {
    id: "the-stunt-driver",
    name: "The Stunt Driver",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Stunt Driver",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A daredevil driver, and a stunt performer.",
    provenance: "",
    tags: ["stunt", "driver", "daredevil", "racing", "performer"],
    images: ["images/the-stunt-driver-01.jpg"],
    acquired: "",
    notes: "Placeholder name. No link written to the Stunt Robot, who exists to take the stunts that would be too dangerous for a person - they are obviously in the same trade and probably the same job, but you haven't said they know each other, so say the word and I'll connect them. Separate from the Daredevils, who are test pilots at the Space Academy rather than performers."
  },



  {
    id: "the-father",
    name: "The Father",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Civilian",
    group: "The West Family",
    location: "",
    relations: [
      { to: "the-mother", label: "Married to" },
      { to: "the-son", label: "Father of" },
      { to: "the-palace-orphans", label: "Helps raise" },
    ],
    rating: 0,
    background:
      "Father of the family, and a civilian.\n\n" +
      "He and his wife are among the people who help raise the orphans inside " +
      "the Royal Palace.",
    provenance: "",
    tags: ["civilian", "father", "family", "caretaker", "palace"],
    images: ["images/the-father-01.jpg"],
    acquired: "",
    notes: "West is confirmed as the family name - it came out of a voice-to-text slip, you liked it, and you kept it, which makes it the only name in the collection the world gave itself. This family answers something the Palace Orphans entry left open: it already said the orphans are raised by the good people who live at the Palace, with caretakers of their own, and until now none of those people had a face."
  },


  {
    id: "the-mother",
    name: "The Mother",
    variant: "Two outfits",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Civilian",
    group: "The West Family",
    location: "",
    relations: [
      { to: "the-father", label: "Married to" },
      { to: "the-son", label: "Mother of" },
      { to: "the-palace-orphans", label: "Helps raise" },
    ],
    rating: 0,
    background:
      "Mother of the family, and a civilian.\n\n" +
      "She and her husband are among the people who help raise the orphans " +
      "inside the Royal Palace.",
    provenance: "",
    tags: ["civilian", "mother", "family", "caretaker", "palace"],
    images: [
      { src: "images/the-mother-01.jpg", caption: "Blue blazer" },
      { src: "images/the-mother-02.jpg", caption: "Red wrap top" }
    ],
    acquired: "",
    notes: "Two photos, one woman, one entry - two outfits rather than two people. West is confirmed as the family name."
  },


  {
    id: "the-son",
    name: "The Son",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Civilian",
    group: "The West Family",
    location: "",
    relations: [
      { to: "the-father", label: "Son of" },
      { to: "the-mother", label: "Son of" },
    ],
    rating: 0,
    background: "Their son.",
    provenance: "",
    tags: ["civilian", "son", "family", "child"],
    images: ["images/the-son-01.jpg"],
    acquired: "",
    notes: "No raising link written for him - you said the parents help raise the palace orphans, and he looks young enough to be one of the children rather than one of the carers. West is confirmed as the family name."
  },


  {
    id: "the-comedian",
    name: "The Comedian",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Stand-up Comedian",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A local stand-up comedian. Also a skateboarder. Also, sometimes, the " +
      "town drunk.",
    provenance:
      "This figure appears in a minifigure scene in the KESHEN8 YouTube video " +
      "LEGO Black Ops - the only figure in the collection that came out of " +
      "somebody else's film.",
    tags: ["comedian", "stand-up", "skateboarder", "drunk", "keshen8", "film"],
    images: ["images/the-comedian-01.jpg"],
    acquired: "",
    notes: "Placeholder name. First figure here whose provenance is another person's work rather than a set or a kitbash."
  },



  {
    id: "the-second-blacktron-pilot",
    name: "The Second Blacktron Pilot",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Pilot",
    group: "The Blacktron Squadron",
    location: "",
    relations: [],
    rating: 0,
    background: "A pilot on the Blacktron team.",
    provenance:
      "Notably not wearing Blacktron black and yellow - white and grey, with " +
      "an air supply rig printed across his chest.",
    tags: ["blacktron", "pilot", "space", "air-supply"],
    images: ["images/the-second-blacktron-pilot-01.jpg"],
    acquired: "",
    notes: "Named by ordinal because the squadron already has a Blacktron Pilot and no story separates them yet - same pattern as the Second Padawan."
  },


  {
    id: "the-town-twins",
    name: "The Town Twins",
    variant: "Two of them",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Civilian",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Twins with normal jobs.\n\n" +
      "Sometimes they dress the same as a joke. You can find them hanging " +
      "around the park, or watching a sports game.",
    provenance: "",
    tags: ["twins", "civilian", "normal-jobs", "park", "sports", "pair", "joke"],
    images: ["images/the-town-twins-01.jpg"],
    acquired: "",
    notes: "Called the Town Twins to keep them clear of the Twins, who are Archangels of the First Circle. These two work normal jobs and go to the park. One box because they share a photo - say so if you'd rather they were split."
  },


  {
    id: "the-marathon-runner",
    name: "The Marathon Runner",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Athlete",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A town marathon runner.",
    provenance: "The bib is printed on the vest: BIB 0937.",
    tags: ["marathon", "runner", "athlete", "race", "town"],
    images: ["images/the-marathon-runner-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Second athlete here, after the Space Boarder, so the Athlete role finally has two people in it."
  },


  {
    id: "the-man-from-the-yellow-dimension",
    name: "The Man from the Yellow Dimension",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A man from the yellow dimension.",
    provenance:
      "Entirely yellow and entirely unprinted - head, torso, arms, hands and " +
      "legs all one colour, and no face at all. The only figure in the " +
      "collection with nothing on its face.",
    tags: ["yellow-dimension", "dimensions", "blank", "faceless", "monochrome"],
    images: ["images/the-man-from-the-yellow-dimension-01.jpg"],
    acquired: "",
    notes: "Placeholder name. First mention of the yellow dimension anywhere - a whole place the world notes have never heard of. Compare the Manifestation of Life, who is the plainest printed figure here; this one goes a step further and has no face."
  },



  {
    id: "the-fireman-in-orange",
    name: "The Fireman in Orange",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Firefighter",
    group: "The Fire Service",
    location: "",
    relations: [],
    rating: 0,
    background: "A fireman.",
    provenance: "Orange rescue kit, dark red helmet, breathing apparatus on.",
    tags: ["firefighter", "rescue", "breathing-apparatus", "orange"],
    images: ["images/the-fireman-in-orange-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive - two firemen arrived at once and the gear is the only thing telling them apart."
  },


  {
    id: "the-fireman-in-black",
    name: "The Fireman in Black",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Firefighter",
    group: "The Fire Service",
    location: "",
    relations: [],
    rating: 0,
    background: "A fireman.",
    provenance:
      "The old black fire uniform with the flame shield on the chest, and the " +
      "classic black helmet.",
    tags: ["firefighter", "black", "classic", "flame-badge"],
    images: ["images/the-fireman-in-black-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive, paired with the Fireman in Orange."
  },


  {
    id: "the-firewoman",
    name: "The Firewoman",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Firefighter",
    group: "The Fire Service",
    location: "",
    relations: [],
    rating: 0,
    background: "A firewoman.",
    provenance: "Modern turnout gear - black and hi-vis, radio on the shoulder.",
    tags: ["firefighter", "woman", "turnout-gear", "radio"],
    images: ["images/the-firewoman-01.jpg"],
    acquired: "",
    notes: "Not named by her gear like the two men beside her, because you gave her a designation of her own and that is enough to tell her apart."
  },


  {
    id: "the-inuit-fisherman",
    name: "The Inuit Fisherman",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Fisherman",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "An Inuit fisherman.",
    provenance: "Fur-lined parka hood, patterned knit right down the legs.",
    tags: ["fisherman", "inuit", "cold", "parka", "fur-hood"],
    images: ["images/the-inuit-fisherman-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Shares the Fisherman role with the Fisherman and his Son, so the role finds all three, but no link between them - working the same trade in different water is not knowing each other."
  },



  {
    id: "the-cosmic-twins",
    name: "The Cosmic Twins",
    variant: "Divine essence, and in disguise",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "Cosmic Deity",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "The cosmic, divine twins. They are the twins at the end of the European " +
      "creation stories - Romulus and Remus, and every other iteration of the " +
      "creation that comes with two of them in it. In this universe those " +
      "stories are not stories. The twins are real, and all of those tellings " +
      "are them.\n\n" +
      "They reincarnate. They fight sometimes, and they push through time. The " +
      "blue and the red with nothing on them is their divine essence - the " +
      "energy itself, undisguised.\n\n" +
      "When they want to pass unnoticed they take an ordinary shape instead, " +
      "beach dwellers and the like, but they never drop the blue and the red.\n\n" +
      "It is common enough to see them. Nobody really interacts with them " +
      "properly, because they are always teleporting through time and space and " +
      "they live on their own wavelength. They are harmless, and they are " +
      "benevolent.",
    provenance:
      "Their essence figures are pure blue and pure red - torso, arms, hands " +
      "and legs all one colour, with only the old smile on the face.",
    tags: ["divine-twins", "cosmic", "reincarnation", "romulus-and-remus", "creation-myth", "time-travel", "teleport", "disguise", "benevolent", "pair"],
    images: [
      { src: "images/the-cosmic-twins-01.jpg", caption: "Their divine essence" },
      { src: "images/the-cosmic-twins-02.jpg", caption: "In disguise as beach dwellers" }
    ],
    acquired: "",
    notes: "Third set of twins in the collection and no relation to the other two - the Twins are Archangels of the First Circle, the Town Twins work normal jobs and go to the park, and these two are the creation myth itself. Ranked Cosmic Deity from your word divine and from what they do; say so if that puts them too high or too low. Also the third case here where blankness is the character, after the Manifestation of Life and the Man from the Yellow Dimension."
  },


  {
    id: "the-dwarf-librarian",
    name: "The Dwarf Librarian",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Librarian",
    group: "",
    location: "",
    relations: [
      { to: "the-dwarf-king", label: "Dwarf kingdom in common" },
    ],
    rating: 0,
    background:
      "A dwarf who decided to work at a library, rather than do what his " +
      "upbringing had in mind for him.",
    provenance: "",
    tags: ["dwarf", "librarian", "books", "left-the-trade"],
    images: ["images/the-dwarf-librarian-01.jpg"],
    acquired: "",
    notes: "Placeholder name. First librarian here, and one more person defined by the thing he was raised to do and didn't."
  },


  {
    id: "the-hatless-gnome",
    name: "The Hatless Gnome",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [
      { to: "the-forager", label: "Gnome blood in common" },
    ],
    rating: 0,
    background:
      "A gnome who lost his hat.\n\n" +
      "Known for being a little mischievous.",
    provenance: "",
    tags: ["gnome", "hatless", "mischievous", "lost-hat"],
    images: ["images/the-hatless-gnome-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Linked to the Forager, who is descended from gnomes at least in part - a bloodline link rather than a recorded meeting, same as the Alien Farmer and the Reformed. Cut it if you'd rather connections only meant people who have met."
  },


  {
    id: "indiana-jones",
    name: "Indiana Jones",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Indiana Jones",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [
      { to: "indiana-joneses-father", label: "Son of" },
    ],
    rating: 0,
    background: "Literally Indiana Jones.",
    provenance: "A genuine Indiana Jones minifigure, not a build.",
    tags: ["indiana-jones", "branded", "archaeologist", "adventurer", "visitor"],
    images: ["images/indiana-jones-01.jpg"],
    acquired: "",
    notes: "Third branded figure and third theme outside the Creation Mythos, after Tony Stark and Bruce Wayne. Same open question about how he stands relative to the worlds. Worth noting he is the one branded figure whose job the collection already has four crews doing."
  },



  {
    id: "indiana-joneses-father",
    name: "Indiana Jones's Father",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Indiana Jones",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [
      { to: "indiana-jones", label: "Father of" },
    ],
    rating: 0,
    background: "Literally Indiana Jones's dad.",
    provenance:
      "A genuine Indiana Jones minifigure - Henry Jones Sr., pith helmet, " +
      "spotted bow tie and all.",
    tags: ["indiana-jones", "branded", "father", "professor", "visitor"],
    images: ["images/indiana-joneses-father-01.jpg"],
    acquired: "",
    notes: "Named by his relation rather than by his own name, the way the Aviator's Father and the Explorer's Son are. Fourth branded figure, and the first branded pair."
  },


  {
    id: "the-soldier-in-green-armor",
    name: "The Soldier in Green Armor",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Soldier",
    group: "",
    location: "",
    relations: [
      { to: "the-soldier-in-clear-armor", label: "Same experimental armor" },
      { to: "the-red-spartan", label: "Armor copied from him" },
    ],
    rating: 0,
    background: "A soldier wearing experimental armor.",
    provenance:
      "One of two attempts at rebuilding the Mega Bloks Halo armor in Lego - " +
      "this is the solid teal-green version, with the visored helmet over it.",
    tags: ["soldier", "experimental-armor", "halo", "mega-bloks", "rebuild", "visor"],
    images: ["images/the-soldier-in-green-armor-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive - the armor is the only thing separating the two of them. Kitbash lineage worth noting: the Brute Prince and the Defector are knock-offs in the lore, and these two are a knock-off in the plastic, of a rival brick company's armor."
  },


  {
    id: "the-soldier-in-clear-armor",
    name: "The Soldier in Clear Armor",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Soldier",
    group: "",
    location: "",
    relations: [
      { to: "the-soldier-in-green-armor", label: "Same experimental armor" },
      { to: "the-red-spartan", label: "Armor copied from him" },
    ],
    rating: 0,
    background: "A soldier wearing experimental armor.",
    provenance:
      "The second attempt at rebuilding the Mega Bloks Halo armor in Lego - " +
      "this one in translucent plate over a black torso.",
    tags: ["soldier", "woman", "experimental-armor", "halo", "mega-bloks", "rebuild", "translucent"],
    images: ["images/the-soldier-in-clear-armor-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive. She is a different person from the soldier in green, not the same one re-kitted - two iterations of the same experiment, worn by two people."
  },


  {
    id: "the-dwarf-king",
    name: "The Dwarf King",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "King",
    group: "",
    location: "",
    relations: [
      { to: "the-dwarf-librarian", label: "Dwarf kingdom in common" },
    ],
    rating: 0,
    background:
      "His exact rank does not translate into English properly. King is the " +
      "closest the language gets.\n\n" +
      "It is not quite the same office, because dwarf kingdoms do not run on " +
      "many laws. What he actually holds is the authority to call a feast, and " +
      "the authority to raise an army.\n\n" +
      "Fortunately, in the dwarf kingdom, it is usually the feast. Usually it is " +
      "a holiday.",
    provenance: "",
    tags: ["dwarf", "king", "untranslatable-rank", "feast", "army", "holiday"],
    images: ["images/the-dwarf-king-01.jpg"],
    acquired: "",
    notes: "You called him the dwarf ambassador first and then said he is essentially a king, so King is the role and the translation problem is in the background where it belongs. Third King in the role filter, after the Prince and King Arthur - and the only one whose two powers are a war and a party."
  },


  {
    id: "the-runner",
    name: "The Runner",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Athlete",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "He goes to the gym and he goes for jogs.\n\n" +
      "He likes to run places.",
    provenance: "",
    tags: ["runner", "jogging", "gym", "athlete"],
    images: ["images/the-runner-01.jpg"],
    acquired: "",
    notes: "Placeholder name, and kept distinct from the Marathon Runner on purpose - that one races, this one just likes getting there on foot. Third athlete here, so the role now holds three."
  },



  {
    id: "the-builder-and-his-clone",
    name: "The Builder and His Clone",
    variant: "Two of them, and neither knows which is which",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Mechanic",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A local mechanic and builder, who got cloned by accident.\n\n" +
      "Neither of them knows which one is the original. Neither of them cares, " +
      "because they are best friends.\n\n" +
      "And by now the question has stopped meaning anything anyway: enough " +
      "years have passed that they have grown different from each other in the " +
      "small details.",
    provenance:
      "The plastic agrees with the story. The two figures are not identical - " +
      "different shades of blue on the legs, the overall print worn differently " +
      "on each. They have diverged exactly the way the lore says they did.",
    tags: ["mechanic", "builder", "clone", "accident", "best-friends", "identity", "pair"],
    images: ["images/the-builder-and-his-clone-01.jpg"],
    acquired: "",
    notes: "Named Builder rather than Mechanic to keep him clear of the Mechanic, who is an aircraft engineer. One box because they share a photo, and in this case because splitting them would require deciding which is the original, which is the one thing the story refuses to do."
  },


  {
    id: "the-two-guys-in-bunny-suits",
    name: "The Two Guys in Bunny Suits",
    variant: "Two of them",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Easter Bunny",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Two guys in bunny suits. That is the whole of it.\n\n" +
      "It is their job, for Easter.",
    provenance:
      "They are wearing the same face as well as the same suit, and they are " +
      "still two different people.",
    tags: ["bunny-suit", "easter", "costume", "job", "pair"],
    images: ["images/the-two-guys-in-bunny-suits-01.jpg"],
    acquired: "",
    notes: "Second pair in the collection who look identical and are not the same person, alongside the Builder and his clone in the same batch - except those two started identical and drifted apart, and these two never were."
  },


  {
    id: "spongebob",
    name: "SpongeBob",
    variant: "Three outfits",
    faction: "good",
    origin: "branded",
    theme: "SpongeBob SquarePants",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [
      { to: "patrick-star", label: "Best friend" },
      { to: "plankton", label: "Rival" },
    ],
    rating: 0,
    background: "Literally SpongeBob.",
    provenance: "A genuine SpongeBob SquarePants minifigure, square head and all.",
    tags: ["spongebob", "branded", "visitor"],
    images: [
      { src: "images/spongebob-01.jpg", caption: "Brown trousers" },
      { src: "images/spongebob-02.jpg", caption: "In the air helmet" },
      { src: "images/spongebob-03.jpg", caption: "Yellow trousers" }
    ],
    acquired: "",
    notes: "Three photos, one sponge. The air helmet is an outfit and the trousers change colour; none of it is another character. Fifth branded figure, and the first branded theme with three of its own people in it. Linked to the other two on your say-so - the only branded figures here who know each other."
  },


  {
    id: "plankton",
    name: "Plankton",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "SpongeBob SquarePants",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [
      { to: "spongebob", label: "Rival" },
      { to: "patrick-star", label: "Rival" },
    ],
    rating: 0,
    background:
      "Literally Plankton.\n\n" +
      "He is mean. He is not evil. He wants to steal a formula, and set against what evil actually means around here, that is nothing at all.",
    provenance:
      "A single printed 1x1 round brick - no torso, no legs, no arms. The " +
      "smallest figure in the collection by a very long way, and the only one " +
      "that is one piece.",
    tags: ["plankton", "spongebob", "branded", "smallest", "one-piece", "visitor"],
    images: ["images/plankton-01.jpg"],
    acquired: "",
    notes: "Stays good, and now on purpose rather than by default: you ruled that being mean and wanting a formula does not make somebody evil in this world. He is the first figure here who is a villain in his own source material and still does not qualify."
  },


  {
    id: "patrick-star",
    name: "Patrick Star",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "SpongeBob SquarePants",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [
      { to: "spongebob", label: "Best friend" },
      { to: "plankton", label: "Rival" },
    ],
    rating: 0,
    background: "Literally Patrick Star.",
    provenance: "A genuine SpongeBob SquarePants minifigure - the cone head is a moulded piece, not a hat.",
    tags: ["patrick", "spongebob", "branded", "visitor"],
    images: ["images/patrick-star-01.jpg"],
    acquired: "",
    notes: "Linked to SpongeBob and Plankton on your say-so, after being left unlinked at first."
  },



  {
    id: "the-soccer-player",
    name: "The Soccer Player",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Athlete",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A soccer player.",
    provenance: "",
    tags: ["soccer", "football", "athlete", "sport"],
    images: ["images/the-soccer-player-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Fourth athlete here, and the first who plays a team sport - the others run, board and race on their own."
  },


  {
    id: "the-genius-gorilla",
    name: "The Genius Gorilla",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A gorilla. Conscious, highly intelligent, and a genius with it.",
    provenance: "",
    tags: ["gorilla", "genius", "conscious", "intelligent", "animal"],
    images: ["images/the-genius-gorilla-01.jpg"],
    acquired: "",
    notes: "Placeholder name. First animal in the collection who is a person in his own right - the Explorer's monkey travels with someone, this one does not belong to anybody."
  },


  {
    id: "the-storage-robot",
    name: "The Storage Robot",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Courier",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A storage robot. He gets about on wheels - it looks like hovering but it " +
      "isn't, he just scoots.\n\n" +
      "What he does is deliver: resources, packages, whatever needs moving. You " +
      "can talk to him, and he is pretty nice.",
    provenance:
      "No head, no torso, no arms and no legs - a droid body rather than a " +
      "minifigure. One of the very few things here not built to the usual shape.",
    tags: ["robot", "storage", "delivery", "courier", "wheels", "droid", "nice"],
    images: ["images/the-storage-robot-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Fifth robot here, and the only one whose entire job is being useful rather than fighting, standing in for someone, or being a vessel."
  },


  {
    id: "the-tea-seller",
    name: "The Tea Seller",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Tea Seller",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A local tea seller.",
    provenance:
      "His arms do not match - one white, one dark brown. The same quiet kitbash " +
      "the Ranger has, where the figure was put together out of whatever was to " +
      "hand and nobody bothered to fix it.",
    tags: ["tea", "seller", "merchant", "local", "mismatched-arms"],
    images: ["images/the-tea-seller-01.jpg"],
    acquired: "",
    notes: "Placeholder name."
  },


  {
    id: "the-rap-star",
    name: "The Rap Star",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Rapper",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A local rap star.",
    provenance: "Shutter shades, a dollar sign on the cap and another one round his neck.",
    tags: ["rap", "music", "star", "local-fame", "gold-chain"],
    images: ["images/the-rap-star-01.jpg"],
    acquired: "",
    notes: "Placeholder name. First musician in the collection with music as the job - the Beach Bum plays guitar, but that is what he does now that he stopped working."
  },



  {
    id: "the-guy-in-the-pizza-costume",
    name: "The Guy in the Pizza Costume",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "Literally just a guy in a pizza costume.",
    provenance: "",
    tags: ["pizza", "costume", "civilian"],
    images: ["images/the-guy-in-the-pizza-costume-01.jpg"],
    acquired: "",
    notes: "Placeholder name, in the pattern of the Two Guys in Bunny Suits. No link between them - dressing up is not knowing each other."
  },


  {
    id: "the-knighted-civilian",
    name: "The Knighted Civilian",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Civilian",
    group: "",
    location: "",
    relations: [
      { to: "quinn", label: "Brought down" },
    ],
    rating: 0,
    background:
      "Before any of it he was nobody in particular. A jogger in a red hoodie.\n\n" +
      "Then came the first Quinn uprising. Quinn destroyed half the city, and " +
      "every one of the strongest heroes was beaten, destroyed or killed. There " +
      "was nobody left standing who was supposed to be able to stop him.\n\n" +
      "In the chaos this man got to a rifle and shot Quinn through the lung. " +
      "That was the end of it. Quinn was finished, and went into captivity.\n\n" +
      "He was knighted for it. A civilian's active bravery saved the day, and " +
      "the armor he wears now is what the city gave him for it.",
    provenance: "",
    tags: ["civilian", "jogger", "red-hoodie", "knighted", "quinn", "first-uprising", "rifle", "hero"],
    images: ["images/the-knighted-civilian-01.jpg"],
    acquired: "",
    notes: "Placeholder name - I could not make out the title you gave him, and it sounded like Sir Jeff. Say it again and he gets it. The link to Quinn is written even though Quinn has no entry yet; unknown ids are skipped, so it lights up by itself the moment Quinn is photographed."
  },


  {
    id: "the-farmer",
    name: "The Farmer",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Farmer",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A farmer.",
    provenance:
      "Mismatched arms again - one cream, one dark brown, with grey hands. The " +
      "second figure in two batches built that way, after the Tea Seller.",
    tags: ["farmer", "overalls", "mismatched-arms"],
    images: ["images/the-farmer-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Second farmer in the role filter after the Alien Farmer - and the First Man, who was a farmer before he was anything else, has no role recorded at all."
  },



  {
    id: "the-farmer-boy",
    name: "The Farmer Boy",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Farmer",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A farmer boy.",
    provenance:
      "Wearing exactly the same blue and white overalls as the Farmer, who " +
      "arrived one batch ago.",
    tags: ["farmer", "boy", "overalls", "young"],
    images: ["images/the-farmer-boy-01.jpg"],
    acquired: "",
    notes: "Placeholder name. No link written to the Farmer - the shared overalls make them look like father and son, but you have not said they are, and wearing the same workwear is not a family. One word and it goes in."
  },


  {
    id: "the-graduate",
    name: "The Graduate",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Graduate",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A graduation kid. Cap, gown, and very pleased about it.",
    provenance: "",
    tags: ["graduate", "graduation", "student", "young", "cap-and-gown"],
    images: ["images/the-graduate-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Third figure in the education thread, after the Law Student and the Intern - and the only one who has finished."
  },


  {
    id: "the-surfer",
    name: "The Surfer",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Surfer",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A beach surfer.",
    provenance: "Sunset shirt, palm trees, and bare legs below the shorts.",
    tags: ["surfer", "beach", "sea", "sunglasses"],
    images: ["images/the-surfer-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Second man on the beach after the Beach Bum, and no link between them - sharing a coastline is not knowing each other."
  },


  {
    id: "the-car-repairman",
    name: "The Car Repairman",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Mechanic",
    group: "The Knock-offs",
    location: "",
    relations: [
      { to: "the-defector", label: "Defected with" },
    ],
    rating: 0,
    background:
      "One of the men who came across with the Defector when he switched sides.\n\n" +
      "He became a normal car repairman.",
    provenance:
      "His head has a moulded nose, which Lego minifigure heads do not - like " +
      "the Defector, he is physically a knock-off figure. The lore and the " +
      "plastic agree twice over now.",
    tags: ["knock-off", "defector", "mechanic", "car-repair", "former-soldier", "new-life"],
    images: ["images/the-car-repairman-01.jpg"],
    acquired: "",
    notes: "The Defector's entry has said since it was written that he brought some of his men across with him. This is the first of those men to get a face. Second mechanic in the role filter, after the Builder and his clone."
  },


  {
    id: "the-traveller",
    name: "The Traveller",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Traveller",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A normal traveller. He likes to travel to the different parts of the city.",
    provenance: "",
    tags: ["traveller", "city", "wanderer", "backpack"],
    images: ["images/the-traveller-01.jpg"],
    acquired: "",
    notes: "Placeholder name. He shares the Traveller role with the In-Betweener, who lives in the space between dimensions and has sat with the gods of several worlds. Filtering by Traveller now returns both of them, which is the best joke the role dropdown has made so far."
  },



  {
    id: "the-space-police-pilot",
    name: "The Space Police Pilot",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Pilot",
    group: "The Space Police",
    location: "",
    relations: [],
    rating: 0,
    background: "One of the Space Police pilots.",
    provenance: "The same grey armor the three officers wear, with a visored flight helmet over it.",
    tags: ["space-police", "pilot", "visor", "armor"],
    images: ["images/the-space-police-pilot-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Ninth in the Space Police, which is now the second largest group in the catalog after Lego City Law."
  },


  {
    id: "the-red-spartan",
    name: "The Red Spartan",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Soldier",
    group: "The Knock-offs",
    location: "",
    relations: [
      { to: "the-soldier-in-green-armor", label: "The armor they copied" },
      { to: "the-soldier-in-clear-armor", label: "The armor they copied" },
    ],
    rating: 0,
    background:
      "A Mega Bloks Halo Spartan, out of the same world the Brute Prince is a " +
      "prince of.\n\n" +
      "He decided to join the good guys.",
    provenance:
      "Not a Lego figure at all - a genuine Mega Bloks Halo Spartan, with " +
      "articulated joints and moulded boots that no minifigure has. The two " +
      "soldiers in experimental armor are Lego rebuilds of exactly this; he is " +
      "the thing they were copying.",
    tags: ["spartan", "halo", "mega-bloks", "not-lego", "defector", "soldier", "original"],
    images: ["images/the-red-spartan-01.jpg"],
    acquired: "",
    notes: "Named Red to keep him clear of the Spartan, who is one of the Damaged and came out of the spray-painted world. Filed custom rather than branded, following the Brute Prince - branded here has meant a genuine Lego figure of a named character, and he is neither."
  },


  {
    id: "the-blue-spaceman",
    name: "The Blue Spaceman",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Spaceman",
    group: "Classic Space",
    location: "",
    relations: [],
    rating: 0,
    background: "A blue spaceman.",
    provenance:
      "The classic Lego Space figure, planet-and-rocket logo on the chest, blue " +
      "from helmet to boots. One of the oldest designs in the collection.",
    tags: ["spaceman", "classic-space", "blue", "astronaut", "vintage"],
    images: ["images/the-blue-spaceman-01.jpg"],
    acquired: "",
    notes: "Placeholder name. The plainest space figure here, and the first to wear the original Lego Space badge rather than a militia, police or squadron marking - the Red Spaceman wears it too, which is why Classic Space is a group now."
  },



  {
    id: "santa-claus",
    name: "Santa Claus",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Christmas",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "Literally Santa Claus.",
    provenance: "A genuine Lego Santa - the old moulded beard, red cap, black belt.",
    tags: ["santa", "christmas", "branded", "visitor"],
    images: ["images/santa-claus-01.jpg"],
    acquired: "",
    notes: "Filed branded, like Tony Stark and Batman, because he is literally himself rather than a character built to look like somebody. He is the only branded figure here who comes from no franchise at all, which is why Christmas is a theme now."
  },


  {
    id: "the-two-peas-in-a-pod",
    name: "The Two Peas in a Pod",
    variant: "Two of them",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Greengrocer",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "Two peas in a pod. They sell healthy food.",
    provenance: "",
    tags: ["peas", "costume", "healthy-food", "grocer", "pair"],
    images: ["images/the-two-peas-in-a-pod-01.jpg"],
    acquired: "",
    notes: "One box because they share a photo. Third costume in the collection after the bunny suits and the pizza, and the first where the costume is the job - the other two are wearing theirs for Easter and for no reason at all."
  },


  {
    id: "the-spaceship-racer",
    name: "The Spaceship Racer",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Racing Driver",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A spaceship racer.",
    provenance: "Helmet off and set down beside him, number 3 on the side of it.",
    tags: ["racing", "spaceship", "racer", "helmet", "number-3"],
    images: ["images/the-spaceship-racer-01.jpg"],
    acquired: "",
    notes: "Shares the Racing Driver role with the Ferrari Driver, who races on the ground. Only figure here photographed with a piece of his own gear taken off and stood next to him."
  },


  {
    id: "the-princes-cousin",
    name: "The Prince's Cousin",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "The Royal Household",
    location: "",
    relations: [
      { to: "the-prince", label: "Cousin of" },
      { to: "the-princes-impersonator", label: "Told apart by the haircut" },
    ],
    rating: 0,
    background:
      "Cousin to the Prince, which gives him real standing.\n\n" +
      "He just wants to be a stuntman.",
    provenance: "",
    tags: ["royal", "cousin", "ginger", "stuntman", "status", "wants-out"],
    images: ["images/the-princes-cousin-01.jpg"],
    acquired: "",
    notes: "In the Royal Household because standing is a fact and not a preference, however little he wants it. Wearing the same suit and cape as the Prince's Impersonator, which is the joke of the pair: this one has the blood and wants the stunts, that one has the stunts and fakes the blood."
  },


  {
    id: "the-princes-impersonator",
    name: "The Prince's Impersonator",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Stuntman",
    group: "",
    location: "",
    relations: [
      { to: "the-prince", label: "Impersonates" },
      { to: "the-princes-cousin", label: "Told apart by the haircut" },
    ],
    rating: 0,
    background:
      "A stuntman who goes about pretending to be the Prince. It is marketing - " +
      "the Elvis impersonator arrangement.\n\n" +
      "They look very much alike. The haircut is how you tell them apart.",
    provenance: "",
    tags: ["stuntman", "impersonator", "marketing", "lookalike", "elvis"],
    images: ["images/the-princes-impersonator-01.jpg"],
    acquired: "",
    notes: "Second stunt performer here, after the Stunt Driver, and the only one whose act is being somebody else. Not put in the Royal Household - looking like the Prince is not belonging to him."
  },



  {
    id: "the-wrestler",
    name: "The Wrestler",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Athlete",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A professional wrestler.",
    provenance: "Luchador mask, and a championship belt printed across his middle.",
    tags: ["wrestler", "luchador", "mask", "champion", "athlete", "background"],
    images: ["images/the-wrestler-01.jpg"],
    acquired: "",
    notes: "Background figure. Filed as an Athlete with the rest of the sportspeople rather than given a role of his own - the name says what he does."
  },


  {
    id: "the-karate-kid",
    name: "The Karate Kid",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Athlete",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A karate kid.",
    provenance: "White gi, headband, and a black belt printed right down onto the legs.",
    tags: ["karate", "martial-arts", "black-belt", "gi", "athlete", "background"],
    images: ["images/the-karate-kid-01.jpg"],
    acquired: "",
    notes: "Background figure. Not put anywhere near the Ninja Lineage - a black belt is a sport, and they are something else."
  },


  {
    id: "the-basketball-player",
    name: "The Basketball Player",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Athlete",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A basketball player.",
    provenance:
      "A real licensed NBA jersey print, number 3 - so the NBA exists here as " +
      "itself, the same way Ferrari does.",
    tags: ["basketball", "nba", "jersey", "athlete", "background"],
    images: ["images/the-basketball-player-01.jpg"],
    acquired: "",
    notes: "Background figure. Custom rather than branded, like the Ferrari Driver: he plays in the league, he is not a named player out of it."
  },


  {
    id: "the-sumo-wrestler",
    name: "The Sumo Wrestler",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Athlete",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A sumo wrestler.",
    provenance: "",
    tags: ["sumo", "wrestler", "athlete", "background"],
    images: ["images/the-sumo-wrestler-01.jpg"],
    acquired: "",
    notes: "Background figure. Second wrestler in the collection, and nothing at all to do with the first."
  },


  {
    id: "the-red-hot-chili-pepper",
    name: "The Red Hot Chili Pepper",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A red hot chili pepper.",
    provenance: "",
    tags: ["chili", "pepper", "costume", "background"],
    images: ["images/the-red-hot-chili-pepper-01.jpg"],
    acquired: "",
    notes: "Background figure, and the fourth person here inside a costume after the bunny suits, the pizza and the peas. Three of those four are food."
  },



  {
    id: "the-clown",
    name: "The Clown",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Clown",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A clown.",
    provenance: "",
    tags: ["clown", "circus", "entertainer", "red-wig", "background"],
    images: ["images/the-clown-01.jpg"],
    acquired: "",
    notes: "Background figure. Third entertainer here, after the Comedian and the Host."
  },


  {
    id: "the-apprentice-chef",
    name: "The Apprentice Chef",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Chef",
    group: "",
    location: "",
    relations: [
      { to: "the-chef", label: "Apprentice to" },
    ],
    rating: 0,
    background:
      "A chef, learning under the Chef - the best in the world, the one with " +
      "the golden knife.",
    provenance: "",
    tags: ["chef", "apprentice", "kitchen", "student"],
    images: ["images/the-apprentice-chef-01.jpg"],
    acquired: "",
    notes: "Linked both ways with the Chef. The fourth person here learning a trade under somebody, after the Trickster's Apprentice, the Red Apprentice and the Gas Men's protege - and the only one whose master's whole point is that the magic is not why he is the best."
  },


  {
    id: "the-red-spaceman",
    name: "The Red Spaceman",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Spaceman",
    group: "Classic Space",
    location: "",
    relations: [],
    rating: 0,
    background: "A red spaceman.",
    provenance:
      "The classic Lego Space figure again, same planet-and-rocket badge as the " +
      "blue one, red from helmet to boots.",
    tags: ["spaceman", "classic-space", "red", "astronaut", "vintage"],
    images: ["images/the-red-spaceman-01.jpg"],
    acquired: "",
    notes: "Grouped with the Blue Spaceman under Classic Space. In this world a chest badge has always meant an outfit you belong to - militia, police, squadron - so two men in the same badge and different colours read as the same service."
  },


  {
    id: "the-wedding-lady",
    name: "The Wedding Lady",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A wedding lady.",
    provenance: "A white gown printed with silver beading down the front.",
    tags: ["wedding", "gown", "woman", "background"],
    images: ["images/the-wedding-lady-01.jpg"],
    acquired: "",
    notes: "Placeholder name, taken from your words. Whether she is the bride or somebody who works at weddings isn't settled, so no role is recorded - say which and it goes in."
  },


  {
    id: "the-winter-trooper",
    name: "The Winter Trooper",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Soldier",
    group: "The Winter Troopers",
    location: "",
    relations: [
      { to: "the-winter-trooper-leader", label: "Serves under" },
    ],
    rating: 0,
    background: "A winter trooper.",
    provenance:
      "Hoth rebel kit - the tan cold-weather cap with the ear flaps, ammunition " +
      "pouches and a satchel on the belt. The same rebel line Armstrong and the " +
      "Deputy's torsos came out of.",
    tags: ["soldier", "winter", "cold-weather", "trooper", "hoth", "background"],
    images: ["images/the-winter-trooper-01.jpg"],
    acquired: "",
    notes: "Background figure. No unit recorded - say which army he belongs to and he and the second winter trooper both join it."
  },



  {
    id: "the-second-winter-trooper",
    name: "The Second Winter Trooper",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Soldier",
    group: "The Winter Troopers",
    location: "",
    relations: [
      { to: "the-winter-trooper-leader", label: "Serves under" },
    ],
    rating: 0,
    background: "Another winter trooper.",
    provenance:
      "The same tan cold-weather cap and kit as the first one, but with grey " +
      "sleeves instead of tan and a different set of pouches printed on.",
    tags: ["soldier", "winter", "cold-weather", "trooper", "background"],
    images: ["images/the-second-winter-trooper-01.jpg"],
    acquired: "",
    notes: "Named by ordinal, like the Second Padawan. Linked to the first by the kit rather than filed into a unit, because no unit has been named for either of them - say which army and they both join it."
  },


  {
    id: "the-guy-in-lederhosen",
    name: "The Guy in Lederhosen",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "Just a guy in lederhosen.",
    provenance: "Green alpine hat, braces, and the full embroidered front.",
    tags: ["lederhosen", "alpine", "traditional-dress", "background"],
    images: ["images/the-guy-in-lederhosen-01.jpg"],
    acquired: "",
    notes: "Background figure, named the way the Guy in the Pizza Costume is - except this one is not in costume, he is just dressed."
  },


  {
    id: "the-statue-of-liberty",
    name: "The Statue of Liberty",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "The Statue of Liberty, except she is a walking person. Not a statue - an " +
      "actual person who looks like that.\n\n" +
      "She presumably enjoys talking about freedom and philosophy.",
    provenance: "Green from crown to hem, robe folds printed all the way down.",
    tags: ["liberty", "statue", "walking", "freedom", "philosophy", "not-a-statue"],
    images: ["images/the-statue-of-liberty-01.jpg"],
    acquired: "",
    notes: "Filed custom rather than branded: Santa is literally Santa, but this is a person of yours who happens to look like a monument, which is a different move. The exact mirror of the Ninja Golem, who is a statue that turned out to be a person - she is a person the world keeps mistaking for a statue. There is also a moustache on her face that the figure would not normally have; tell me whether that was done to her and by whom, the way the Activist's damage was."
  },


  {
    id: "the-boxer",
    name: "The Boxer",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Athlete",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A boxer.",
    provenance: "Headguard, gloves and a championship belt printed round his middle.",
    tags: ["boxer", "boxing", "gloves", "champion", "athlete", "background"],
    images: ["images/the-boxer-01.jpg"],
    acquired: "",
    notes: "Background figure. Ninth athlete, and the third fighter after the Wrestler and the Sumo Wrestler - the sports half of this collection is mostly people hitting each other."
  },


  {
    id: "the-average-joe",
    name: "The Average Joe",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Civilian",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "An average Joe civilian.",
    provenance: "",
    tags: ["civilian", "average", "ordinary", "background"],
    images: ["images/the-average-joe-01.jpg"],
    acquired: "",
    notes: "Background figure, and the ninth civilian. In a world with a creator god, three cosmic deities and four armies, that is a category worth having."
  },



  {
    id: "the-woman-in-the-space-jacket",
    name: "The Woman in the Space Jacket",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Civilian",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A civilian.",
    provenance:
      "Her red jacket carries the classic Lego Space badge - the same " +
      "planet-and-rocket the Blue and Red Spacemen wear.",
    tags: ["civilian", "woman", "space-badge", "jacket", "background"],
    images: ["images/the-woman-in-the-space-jacket-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive - two civilian women arrived together and the printing is the only thing telling them apart. Left out of Classic Space on purpose: I made that a group on the reasoning that a chest badge means an outfit you belong to, and she is the test of it. Is she one of them off duty, or is it just a jacket? Say which."
  },


  {
    id: "the-woman-with-the-heart-necklace",
    name: "The Woman with the Heart Necklace",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Civilian",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A civilian.",
    provenance: "Red wrap top over a starred shirt, with a heart on a chain at her throat.",
    tags: ["civilian", "woman", "necklace", "background"],
    images: ["images/the-woman-with-the-heart-necklace-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive, paired with the Woman in the Space Jacket."
  },


  {
    id: "the-kid-in-pyjamas",
    name: "The Kid in Pyjamas",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Civilian",
    group: "",
    location: "Lego City",
    relations: [],
    rating: 0,
    background: "A normal Lego City kid. A resident, nothing more.",
    provenance: "Pink pyjamas printed all over with rabbits.",
    tags: ["kid", "civilian", "pyjamas", "lego-city", "resident", "background"],
    images: ["images/the-kid-in-pyjamas-01.jpg"],
    acquired: "",
    notes: "Background figure, and the only person in the collection photographed in what they sleep in."
  },


  {
    id: "the-brick-seller",
    name: "The Brick Seller",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Shopkeeper",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "He sells bricks at the Lego store. The brick he is wearing is the " +
      "costume.",
    provenance: "A 2x2 brick suit with a 10 on the front, studs and all.",
    tags: ["shop", "bricks", "lego-store", "costume", "salesman", "background"],
    images: ["images/the-brick-seller-01.jpg"],
    acquired: "",
    notes: "Fifth costume here after the bunny suits, the pizza, the peas and the chili - and the second where it is the uniform, after the peas. He is also the first person in the collection whose job is inside a Lego store, which means this world contains a shop that sells the material everyone in it is made of."
  },


  {
    id: "the-four-armed-alien",
    name: "The Four-Armed Alien",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A four-armed alien. Also a nice guy.",
    provenance: "Green throughout, with a second pair of arms hung off the shoulders.",
    tags: ["alien", "four-arms", "green", "nice", "background"],
    images: ["images/the-four-armed-alien-01.jpg"],
    acquired: "",
    notes: "Fourth alien here after the Reformed, the Alien Farmer and the Intern, and the only one who is not shaped like everybody else. No species link written - the other three look human, he does not."
  },



  {
    id: "sean",
    name: "Sean",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Civilian",
    group: "",
    location: "",
    relations: [
      { to: "george-joudrie", label: "Son of" },
    ],
    rating: 0,
    background: "A civilian named Sean.",
    provenance: "The Lego version of me, built a few years ago to look like me.",
    tags: ["civilian", "self-portrait", "real-person", "sean"],
    images: ["images/sean-01.jpg"],
    acquired: "",
    notes: "The second figure here named after someone real and living, after my dad - and the maker of the whole collection, standing in it as a civilian with no rank, no office, no unit and no powers. Linked to George as father and son; cut it if the Lego versions are not meant to be related in world."
  },


  {
    id: "aphrodite",
    name: "Aphrodite",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "Cosmic Deity",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "The Greek deity Aphrodite.",
    provenance: "",
    tags: ["aphrodite", "greek", "deity", "goddess", "mythology", "classical"],
    images: ["images/aphrodite-01.jpg"],
    acquired: "",
    notes: "Fourth Cosmic Deity, after the Space Princess, the Ferryman and the Cosmic Twins. Filed custom rather than branded, the same call as the Statue of Liberty: this is a figure cast as her, not a Lego figure of her. No link written to the Cosmic Twins, though they belong to the same idea - that entry says the European creation stories are not stories here, and she is the second piece of real-world classical myth to turn out literally true in this world."
  },


  {
    id: "the-hijacked",
    name: "The Hijacked",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A robot on legs. What he is for is connection - he carries a radar " +
      "system - and he can also fire lasers.\n\n" +
      "Villains hacked him and turned the lasers into a weapon. They took his " +
      "body and not his mind, so he stayed awake through all of it: watching " +
      "himself attack people, and unable to stop.\n\n" +
      "He was brought back to good afterwards.",
    provenance:
      "A radar dish for a face with a red lens at the centre of it, and no " +
      "arms - grey legs straight up into the machine.",
    tags: ["robot", "radar", "lasers", "hacked", "possessed", "awake", "restored"],
    images: ["images/the-hijacked-01.jpg"],
    acquired: "",
    notes: "Named for what was done to him, the way the Discarded, the Damaged, the Displaced and the Rebuilt are. Seventh robot here, and the second whose body was driven by somebody else - except the Vessel lends his out to demigods on purpose, and this one was awake for it. Only the second thing villains are recorded as actually doing, after Quinn's uprising, and it is a quieter and worse one."
  },


  {
    id: "the-pirate-hobo",
    name: "The Pirate Hobo",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Pirate",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A pirate hobo. He likes to party.",
    provenance: "Blue knit cap, a huge grey beard, and a patch sewn onto the trousers.",
    tags: ["pirate", "hobo", "party", "beard", "ragged"],
    images: ["images/the-pirate-hobo-01.jpg"],
    acquired: "",
    notes: "Placeholder name. No link to the Pirate Captain - they arrived together and they are both pirates, but nobody has said they sail together. Say so and they connect."
  },


  {
    id: "the-pirate-captain",
    name: "The Pirate Captain",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Pirate Captain",
    group: "The Pirate Crew",
    location: "",
    relations: [
      { to: "the-first-mate", label: "Her first mate" },
    ],
    rating: 0,
    background: "A pirate captain. She runs the ship.",
    provenance: "Red corset over a white shirt, and a holster on the belt.",
    tags: ["pirate", "captain", "woman", "command", "ship"],
    images: ["images/the-pirate-captain-01.jpg"],
    acquired: "",
    notes: "Placeholder name. First woman here who captains anything, and she has a crew now. Second pirate captain in the collection, but the Beach Bum is a former one who walked away from it, so she is the only serving one - and he has no Pirate role for exactly that reason."
  },



  {
    id: "the-first-mate",
    name: "The First Mate",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "First Mate",
    group: "The Pirate Crew",
    location: "",
    relations: [
      { to: "the-pirate-captain", label: "First mate to" },
    ],
    rating: 0,
    background: "First mate to the Pirate Captain.",
    provenance: "Green and white stripes under a bandolier, and a blue knit cap.",
    tags: ["pirate", "first-mate", "crew", "second-in-command"],
    images: ["images/the-first-mate-01.jpg"],
    acquired: "",
    notes: "Placeholder name. The captain had no crew until this batch; now she has three, and he is the one who answers for them."
  },


  {
    id: "the-tattooed-pirate",
    name: "The Tattooed Pirate",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Pirate",
    group: "The Pirate Crew",
    location: "",
    relations: [],
    rating: 0,
    background: "One of the Pirate Captain's crew.",
    provenance: "An anchor inked on his chest, open pink-lined vest, green cap.",
    tags: ["pirate", "crew", "tattoo", "anchor"],
    images: ["images/the-tattooed-pirate-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive. No roster link written to the captain - the crew already shows everyone to everyone, and stacking serves-under on top is the redundancy called out on the Space Marshal."
  },


  {
    id: "the-long-haired-pirate",
    name: "The Long-Haired Pirate",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Pirate",
    group: "The Pirate Crew",
    location: "",
    relations: [],
    rating: 0,
    background: "One of the Pirate Captain's crew.",
    provenance: "A braided blue coat over a red and white striped shirt.",
    tags: ["pirate", "crew", "long-hair", "coat"],
    images: ["images/the-long-haired-pirate-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive, paired with the Tattooed Pirate."
  },


  {
    id: "the-tin-robot",
    name: "The Tin Robot",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A robot.",
    provenance:
      "Built to look like a wind-up tin toy - square head, dial eyes, a mouth " +
      "of coloured lights and springs printed down the legs.",
    tags: ["robot", "tin-toy", "wind-up", "dials", "background"],
    images: ["images/the-tin-robot-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Ninth robot in the collection, and the only one built to look like a toy - everything else mechanical here is a soldier, a vessel, a stand-in or a courier."
  },


  {
    id: "the-sleepy-pirate",
    name: "The Sleepy Pirate",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Pirate",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A sleepy pirate.",
    provenance: "Tricorn hat, and a face caught mid-yawn with both eyes shut.",
    tags: ["pirate", "sleepy", "yawn", "tricorn"],
    images: ["images/the-sleepy-pirate-01.jpg"],
    acquired: "",
    notes: "Left out of the Pirate Crew on purpose: you named the other three as hers and stopped short of him. Say the word and he joins, along with the Pirate Hobo, who is in the same position."
  },



  {
    id: "the-potato-farmer",
    name: "The Potato Farmer",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Farmer",
    group: "The Medieval Era",
    location: "The Medieval Era",
    relations: [],
    rating: 0,
    background:
      "An old potato farmer. He looks like a pauper and he is not one - he " +
      "lives in what amounts to a mansion, by the standards of the age.\n\n" +
      "He has a resting sad face. He is actually pretty happy.",
    provenance:
      "The plastic does the first half of the joke: the face really is printed " +
      "downturned and miserable, and the tunic really is patched.",
    tags: ["medieval", "farmer", "potatoes", "wealthy", "resting-sad-face", "happy"],
    images: ["images/the-potato-farmer-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Fourth farmer here. Two things about him are the opposite of how he looks, which is a rare trick in a collection where the figure usually tells you the truth."
  },


  {
    id: "the-blacksmith",
    name: "The Blacksmith",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Blacksmith",
    group: "The Medieval Era",
    location: "The Medieval Era",
    relations: [],
    rating: 0,
    background: "The blacksmith.",
    provenance: "Black leather apron under a hood, and black gloves.",
    tags: ["medieval", "blacksmith", "smith", "forge", "apron"],
    images: ["images/the-blacksmith-01.jpg"],
    acquired: "",
    notes: "Placeholder name. No link to the Armorer of the Gunless Realm - both work metal, but nobody has said the two places are the same place."
  },


  {
    id: "the-maiden",
    name: "The Maiden",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Peasant",
    group: "The Medieval Era",
    location: "The Medieval Era",
    relations: [],
    rating: 0,
    background: "A maiden.",
    provenance: "Laced bodice, white apron, and a long skirt instead of legs.",
    tags: ["medieval", "maiden", "woman", "apron", "peasant"],
    images: ["images/the-maiden-01.jpg"],
    acquired: "",
    notes: "Placeholder name, taken from your word for her. Filed Peasant because you said the era is mostly peasants - say if she is something more particular."
  },


  {
    id: "the-older-peasant-boy",
    name: "The Older Peasant Boy",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Peasant",
    group: "The Medieval Era",
    location: "The Medieval Era",
    relations: [],
    rating: 0,
    background:
      "A peasant boy, the taller of the two.\n\n" +
      "He wants to be a knight someday.",
    provenance: "The same patched tunic the potato farmer wears, with grey legs.",
    tags: ["medieval", "peasant", "boy", "knight", "ambition"],
    images: ["images/the-older-peasant-boy-01.jpg"],
    acquired: "",
    notes: "Placeholder name. No link written to the younger one - they arrived together and dress alike, but nobody has said they are brothers. He is the fifth person here defined by a trade he has not got yet, after the Law Student, the Intern, the Graduate and the Prince's Cousin."
  },


  {
    id: "the-younger-peasant-boy",
    name: "The Younger Peasant Boy",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Peasant",
    group: "The Medieval Era",
    location: "The Medieval Era",
    relations: [],
    rating: 0,
    background: "A peasant boy, the shorter of the two.",
    provenance:
      "Same patched tunic again, and short legs - the figure is physically " +
      "smaller, not just described as younger.",
    tags: ["medieval", "peasant", "boy", "young", "short-legs"],
    images: ["images/the-younger-peasant-boy-01.jpg"],
    acquired: "",
    notes: "Placeholder name. The age difference is built rather than written: he is on short legs and the other one is not."
  },



  {
    id: "the-minecraft-person",
    name: "The Minecraft Person",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A Minecraft person.",
    provenance:
      "A genuine Lego Minecraft figure, which means his head is a cube and his " +
      "face is pixels. He is not built to the same standard as everybody else " +
      "here.",
    tags: ["minecraft", "blocky", "pixel", "visitor", "other-world"],
    images: ["images/the-minecraft-person-01.jpg"],
    acquired: "",
    notes: "Placeholder name. By your own cosmology - every Lego world is its own world, and figures can visit - he is the clearest visitor in the collection, because the difference is physical: his body is made to a different pattern. The Ancient, the Salvager, the Defector and the Red Spartan are the others who are shaped wrong for this world, and every one of them came from somewhere else."
  },


  {
    id: "the-bodybuilder",
    name: "The Bodybuilder",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Athlete",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A bodybuilder.",
    provenance: "Bare printed torso and gym shorts.",
    tags: ["bodybuilder", "athlete", "gym", "muscles", "background"],
    images: ["images/the-bodybuilder-01.jpg"],
    acquired: "",
    notes: "Background figure. Tenth athlete."
  },


  {
    id: "the-yellow-spaceman",
    name: "The Yellow Spaceman",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Spaceman",
    group: "Classic Space",
    location: "",
    relations: [],
    rating: 0,
    background: "A yellow spaceman.",
    provenance:
      "Yellow throughout, no helmet, and the oldest face in the collection - " +
      "two plain dots and a line. The planet-and-rocket badge is worn nearly off.",
    tags: ["spaceman", "classic-space", "yellow", "vintage", "worn"],
    images: ["images/the-yellow-spaceman-01.jpg"],
    acquired: "",
    notes: "Third in Classic Space, which settles the group: blue, red and now yellow, same badge, same service. Probably the oldest Lego figure here after the Ancient, who is not Lego at all."
  },


  {
    id: "the-retired-clone",
    name: "The Retired Clone",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Soldier",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A clone trooper, damaged and retired from service.\n\n" +
      "He can still do the military parades.",
    provenance:
      "The camouflage is worn most of the way off the helmet and the armor - " +
      "genuinely scuffed plastic, not printed damage.",
    tags: ["clone", "trooper", "retired", "damaged", "veteran", "parades"],
    images: ["images/the-retired-clone-01.jpg"],
    acquired: "",
    notes: "Deliberately not put in the Damaged: that group is people out of the world where Lego figures were destroyed and abused, and he is a veteran with wear on him, which is a different thing entirely. No link to Claws either, though Claws commands the clone armies and this man presumably served in them - say so and it goes in."
  },


  {
    id: "the-porsche-driver",
    name: "The Porsche Driver",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Racing Driver",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A Porsche driver.",
    provenance:
      "Worth flagging: the suit is printed with the Ferrari shield and the " +
      "Italian tricolour, not a Porsche badge. Either he has changed teams and " +
      "kept the overalls, or Porsche is the slip and he is the second Ferrari " +
      "driver here.",
    tags: ["racing", "driver", "porsche", "motorsport", "white-suit"],
    images: ["images/the-porsche-driver-01.jpg"],
    acquired: "",
    notes: "Named as you said him. Third Racing Driver, after the Ferrari Driver and the Spaceship Racer. The badge on his chest disagrees with his name, which has happened once before with the Blacktron pilot who is not wearing Blacktron colours - tell me which way round it goes."
  },



  {
    id: "the-cat-lover",
    name: "The Cat Lover",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Civilian",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A civilian. She likes cats.",
    provenance: "Red beanie, round glasses, orange jacket over a striped shirt.",
    tags: ["civilian", "woman", "cats", "glasses", "background"],
    images: ["images/the-cat-lover-01.jpg"],
    acquired: "",
    notes: "Background figure. Thirteenth civilian."
  },


  {
    id: "the-dock-robot",
    name: "The Dock Robot",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Dockworker",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A robot put together out of scrap pieces. He works the docks.",
    provenance:
      "Genuinely a kitbash - mismatched greys, a red arm on one side and a " +
      "white one on the other, nothing matching anything.",
    tags: ["robot", "scrap", "kitbash", "docks", "worker", "mismatched"],
    images: ["images/the-dock-robot-01.jpg"],
    acquired: "",
    notes: "Tenth robot here, and the second whose whole job is being useful rather than fighting, after the Storage Robot. The plastic agrees with the story again: he is described as built from scrap and he is visibly built from scrap."
  },


  {
    id: "the-enemy-soldiers-in-olive",
    name: "The Enemy Soldiers in Olive",
    variant: "A unit of them",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Soldier",
    group: "The Enemy",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Enemy soldiers. There is a whole unit of them.\n\n" +
      "They are soldiers and nothing more particular than that - the world " +
      "they fight for is this one's, not anybody's real history.",
    provenance:
      "The uniform print is modelled on twentieth-century European infantry " +
      "kit: olive tunic, webbing and pouches, stahlhelm-shaped helmet.",
    tags: ["enemy", "soldier", "unit", "olive", "villain"],
    images: [
      { src: "images/the-enemy-soldiers-in-olive-01.jpg", caption: "One of them" },
      { src: "images/the-enemy-unit-01.jpg", caption: "The unit, both types together" }
    ],
    acquired: "",
    notes: "The first figure in the collection filed bad. For 257 entries the faction filter separated nothing at all; it does now. Named Enemy on your instruction rather than by the real-world army the uniform is based on, because you said they are just soldiers here."
  },


  {
    id: "the-enemy-soldiers-in-black",
    name: "The Enemy Soldiers in Black",
    variant: "A unit of them",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Soldier",
    group: "The Enemy",
    location: "",
    relations: [],
    rating: 0,
    background:
      "The other half of the unit. Same enemy, different kit.\n\n" +
      "Soldiers, and nothing more particular than that.",
    provenance:
      "Black helmets, red collar tabs and a flag patch at the shoulder - a " +
      "different twentieth-century European pattern from the olive lot.",
    tags: ["enemy", "soldier", "unit", "black-helmet", "villain"],
    images: [
      { src: "images/the-enemy-soldiers-in-black-01.jpg", caption: "One of them" },
      { src: "images/the-enemy-unit-01.jpg", caption: "The unit, both types together" }
    ],
    acquired: "",
    notes: "Second figure filed bad, and the pair share the group photo as their second image, as you asked. Two kits, one enemy."
  },



  {
    id: "the-aqua-force-leader",
    name: "The Aqua Force Leader",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Commander",
    group: "Aqua Force",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Leader of Aqua Force.\n\n" +
      "Aqua Force handles any military necessity that involves going underwater.",
    provenance: "Black wetsuit with a blue trident on the chest, goggles pushed up onto the helmet.",
    tags: ["aqua-force", "underwater", "diver", "leader", "trident"],
    images: ["images/the-aqua-force-leader-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Aqua Force is the fifth armed service in the collection, after the Space Militia, the Space Police, Lego City Law and the Blacktron Squadron - and the first one whose whole remit is a place rather than a job: everything that happens under the water."
  },


  {
    id: "the-aqua-force-second",
    name: "The Aqua Force Second",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Second in Command",
    group: "Aqua Force",
    location: "",
    relations: [],
    rating: 0,
    background: "Second in command of Aqua Force.",
    provenance: "Air hose collar round the neck, visored helmet, and a face that is not enjoying itself.",
    tags: ["aqua-force", "underwater", "diver", "second-in-command", "air-hose"],
    images: ["images/the-aqua-force-second-01.jpg"],
    acquired: "",
    notes: "Placeholder name. He shares the Second in Command role with the Second, who is an Archangel of the First Circle - the same office at wildly different altitudes."
  },


  {
    id: "the-aqua-force-diver",
    name: "The Aqua Force Diver",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Aqua Force",
    group: "Aqua Force",
    location: "",
    relations: [],
    rating: 0,
    background: "A member of Aqua Force.",
    provenance: "Same black wetsuit and trident, grey arms, black legs.",
    tags: ["aqua-force", "underwater", "diver"],
    images: ["images/the-aqua-force-diver-01.jpg"],
    acquired: "",
    notes: "Placeholder name. No roster link to the leader - the group already shows everyone to everyone."
  },


  {
    id: "the-cool-aqua-diver",
    name: "The Cool Aqua Diver",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Aqua Force",
    group: "Aqua Force",
    location: "",
    relations: [],
    rating: 0,
    background: "The cool one in Aqua Force.",
    provenance:
      "Aviator sunglasses on, under the visor, underwater. The plastic is doing " +
      "the work here.",
    tags: ["aqua-force", "underwater", "diver", "cool", "sunglasses"],
    images: ["images/the-cool-aqua-diver-01.jpg"],
    acquired: "",
    notes: "Named as you described him. He is the only figure in the collection whose defining trait is simply being cool, and he earns it by wearing sunglasses beneath a dive helmet."
  },


  {
    id: "the-royal-knight",
    name: "The Royal Knight",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Knight",
    group: "The Royal Knights",
    location: "The Medieval Era",
    relations: [],
    rating: 0,
    background:
      "One of the Royal Knights, and one of the most popular of them.\n\n" +
      "The Royal Knights do not wear much armor, and they fight on the " +
      "battlefield anyway. They can afford to: in that realm, dying is not the " +
      "end of you. You come back. What you do not get back is your things - " +
      "your armor stays where you fell, and the enemy is welcome to it.\n\n" +
      "Which is why going to war is not the terrible matter it would be " +
      "elsewhere, and why a sword fight still is. Nobody wants to be hurt, and " +
      "nobody wants to be stripped.",
    provenance: "Red and blue royal surcoat with a crowned lion, and a matching shield.",
    tags: ["knight", "royal-knights", "medieval", "respawn", "lion", "popular"],
    images: ["images/the-royal-knight-01.jpg"],
    acquired: "",
    notes: "Placeholder name. New group, the Royal Knights, kept separate from the Medieval Era villagers - the era is the setting, the Knights are an order inside it - and they share the location so the filter still holds them together. Third Knight in the role filter after Curtis and the Nexo Knight, and the Gunless Realm question is still open: King Arthur, an Armorer and a Knight are already filed somewhere that might be this same place."
  },



  {
    id: "the-royal-archer-commander",
    name: "The Royal Archer Commander",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Archer Commander",
    group: "The Royal Knights",
    location: "The Medieval Era",
    relations: [],
    rating: 0,
    background: "Commander of the royal archers.",
    provenance: "Kettle helm with a mail coif under it, ginger beard, lion surcoat.",
    tags: ["knight", "archer", "commander", "medieval", "royal-knights"],
    images: ["images/the-royal-archer-commander-01.jpg"],
    acquired: "",
    notes: "Placeholder name. The only one of the Royal Knights who commands anything, and the only archer among them - everybody else here is close work."
  },


  {
    id: "the-helmed-swordsman",
    name: "The Helmed Swordsman",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Swordsman",
    group: "The Royal Knights",
    location: "The Medieval Era",
    relations: [],
    rating: 0,
    background: "A swordsman of the Royal Knights.",
    provenance: "Kettle helm and plain navy legs - the only one of the three swordsmen wearing a helmet.",
    tags: ["knight", "swordsman", "medieval", "royal-knights", "helmet"],
    images: ["images/the-helmed-swordsman-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive - three swordsmen arrived together and the helmet is what separates this one."
  },


  {
    id: "the-mace-knight",
    name: "The Mace Knight",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Mace Knight",
    group: "The Royal Knights",
    location: "The Medieval Era",
    relations: [],
    rating: 0,
    background: "A Royal Knight. He fights with a mace.",
    provenance: "Black visored helm and light grey legs.",
    tags: ["knight", "mace", "medieval", "royal-knights", "visor"],
    images: ["images/the-mace-knight-01.jpg"],
    acquired: "",
    notes: "Placeholder name. The only Royal Knight here not carrying a blade."
  },


  {
    id: "the-dark-haired-swordsman",
    name: "The Dark-Haired Swordsman",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Swordsman",
    group: "The Royal Knights",
    location: "The Medieval Era",
    relations: [],
    rating: 0,
    background: "A swordsman of the Royal Knights.",
    provenance: "No helmet at all, black hair, the full surcoat and skirt.",
    tags: ["knight", "swordsman", "medieval", "royal-knights", "bareheaded"],
    images: ["images/the-dark-haired-swordsman-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive, paired against the Swordmaster, who is also bareheaded but grey in the beard."
  },


  {
    id: "the-swordmaster",
    name: "The Swordmaster",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Swordmaster",
    group: "The Royal Knights",
    location: "The Medieval Era",
    relations: [],
    rating: 0,
    background:
      "A swordsman of the Royal Knights, and a mentor to them.",
    provenance: "Bareheaded, brown hair going grey in the beard.",
    tags: ["knight", "swordsman", "mentor", "teacher", "medieval", "royal-knights"],
    images: ["images/the-swordmaster-01.jpg"],
    acquired: "",
    notes: "Placeholder name, chosen because it holds both halves of what you said - he fights and he teaches. No link written to any particular student; the order already shows him to all of them. He joins a long line here: the Instructor, the Chef, the Rebuilt, the Blue-Haired Ninja, the Ferryman and the Occultist all teach somebody."
  },



  {
    id: "the-bard",
    name: "The Bard",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Bard",
    group: "The Royal Knights",
    location: "The Medieval Era",
    relations: [],
    rating: 0,
    background: "The bard of the Royal Knights.",
    provenance: "Soft brown hat, ginger beard, and the lion surcoat like the rest of them.",
    tags: ["bard", "music", "medieval", "royal-knights", "ginger"],
    images: ["images/the-bard-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Second musician in the collection after the Rap Star, and the only one attached to an army - in a realm where dying costs you your gear and not your life, somebody has to be keeping the count of who did what."
  },


  {
    id: "the-red-capped-swordsman",
    name: "The Red-Capped Swordsman",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Swordsman",
    group: "The Royal Knights",
    location: "The Medieval Era",
    relations: [],
    rating: 0,
    background: "A swordsman of the Royal Knights.",
    provenance: "Flat red cap and a brown beard - no helmet on him either.",
    tags: ["knight", "swordsman", "medieval", "royal-knights", "red-cap"],
    images: ["images/the-red-capped-swordsman-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive. Fourth swordsman in the order."
  },


  {
    id: "the-royal-archer",
    name: "The Royal Archer",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Archer",
    group: "The Royal Knights",
    location: "The Medieval Era",
    relations: [],
    rating: 0,
    background: "An archer of the Royal Knights.",
    provenance: "Kettle helm with the mail coif, black legs.",
    tags: ["knight", "archer", "bow", "medieval", "royal-knights"],
    images: ["images/the-royal-archer-01.jpg"],
    acquired: "",
    notes: "Placeholder name. The Archer Commander finally has an archer to command."
  },


  {
    id: "the-jester",
    name: "The Jester",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Jester",
    group: "The Royal Knights",
    location: "The Medieval Era",
    relations: [],
    rating: 0,
    background: "The jester.",
    provenance: "Red and white motley, bells on the hat, and a grin with a tongue out.",
    tags: ["jester", "fool", "court", "medieval", "royal-knights", "motley"],
    images: ["images/the-jester-01.jpg"],
    acquired: "",
    notes: "Filed with the Royal Knights because you listed him among them, though he is the only one of the eleven who does not fight. Fourth entertainer in the collection, after the Comedian, the Host and the Clown."
  },


  {
    id: "the-city-king",
    name: "The City King",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "King",
    group: "The Gunless Realm",
    location: "The Medieval Era",
    relations: [
      { to: "king-arthur", label: "Rules beneath" },
    ],
    rating: 0,
    background:
      "One of the realm's kings, and the one you actually see. He is the face " +
      "of it, and he rules the city.\n\n" +
      "Above him is King Arthur, who is the timeless supreme ruler of the " +
      "realm - the one who goes out to the battles and fights the big monsters " +
      "while this king governs.",
    provenance: "Gold crown, white moustache, and a cloth cape.",
    tags: ["king", "medieval", "gunless-realm", "ruler", "city", "figurehead"],
    images: ["images/the-city-king-01.jpg"],
    acquired: "",
    notes: "Fourth King in the role filter, and the second in this one realm. Not a contradiction like the First Man and the Ancient or the General and the Space Marshal - this is a stated hierarchy, and it runs three deep: the Prince, then King Arthur who answers to him, then this man who answers to Arthur."
  },



  {
    id: "the-crossbowman",
    name: "The Crossbowman",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Crossbowman",
    group: "The Royal Knights",
    location: "The Medieval Era",
    relations: [],
    rating: 0,
    background: "A Royal Knight. He is on the crossbow.",
    provenance: "Pointed black helm with the neck guard, scale mail, orange moustache.",
    tags: ["knight", "crossbow", "medieval", "royal-knights", "scale-mail"],
    images: ["images/the-crossbowman-01.jpg"],
    acquired: "",
    notes: "Placeholder name. The Armorer was trained on the crossbow because that was all the realm allowed, before he crossed over and turned out to be the finest shot with a gun in the other dimension - so this is the weapon that made him. No link written; nobody has said the two men know each other."
  },


  {
    id: "the-second-royal-archer",
    name: "The Second Royal Archer",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Archer",
    group: "The Royal Knights",
    location: "The Medieval Era",
    relations: [],
    rating: 0,
    background: "Another archer of the Royal Knights.",
    provenance:
      "Different heraldry from the rest of them - red and white halved with a " +
      "gold lion's head, rather than the blue shield everybody else wears.",
    tags: ["knight", "archer", "medieval", "royal-knights", "heraldry"],
    images: ["images/the-second-royal-archer-01.jpg"],
    acquired: "",
    notes: "Named by ordinal, like the Second Padawan. Worth a look: he is the only Royal Knight not wearing the blue lion shield, which either means a different house or nothing at all - tell me which."
  },


  {
    id: "the-princes-guards",
    name: "The Prince's Guards",
    variant: "Two of them",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Prince's Guard",
    group: "The Royal Household",
    location: "The Royal Palace",
    relations: [],
    rating: 0,
    background: "Royal guards. What they guard is the Prince.",
    provenance: "Bearskin caps, red tunics and a sash apiece.",
    tags: ["guard", "royal-household", "prince", "bearskin", "pair"],
    images: ["images/the-princes-guards-01.jpg"],
    acquired: "",
    notes: "Filed with the Royal Household rather than the Royal Knights, even though they came in with the medieval batch: they guard the Prince, and the Guardsman already holds that exact role in that exact house. One box because they share a photo."
  },


  {
    id: "the-fencer",
    name: "The Fencer",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Fencer",
    group: "The Royal Knights",
    location: "The Medieval Era",
    relations: [],
    rating: 0,
    background: "A swordsman of the Royal Knights, and a fencer.",
    provenance: "Plumed black hat, fleur-de-lis tabard, and a baldric across the chest - a musketeer among knights.",
    tags: ["knight", "fencer", "swordsman", "medieval", "royal-knights", "musketeer"],
    images: ["images/the-fencer-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Fifth blade in the order, and the only one who fences rather than simply swings - which is a distinction that matters in a realm where the sword fights are the part everybody takes seriously."
  },


  {
    id: "the-supreme-mega-knight",
    name: "The Supreme Mega Knight",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Supreme Mega Knight",
    group: "The Royal Knights",
    location: "The Medieval Era",
    relations: [],
    rating: 0,
    background: "The supreme mega knight.",
    provenance:
      "Full plate - barred visor, breastplate, pauldrons, the lot. Battered, " +
      "scuffed and grubby with it.",
    tags: ["knight", "supreme", "full-plate", "armor", "medieval", "royal-knights"],
    images: ["images/the-supreme-mega-knight-01.jpg"],
    acquired: "",
    notes: "Named exactly as you called him. The Royal Knights are on record as not wearing much armor, and he is in full plate - which in a realm where death costs you your gear and nothing else makes him the man with the most to lose on the field. He is also the only one of the fourteen whose armor is visibly beaten up."
  },



  {
    id: "the-elf-knight",
    name: "The Elf Knight",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Knight",
    group: "The Royal Knights",
    location: "The Medieval Era",
    relations: [],
    rating: 0,
    background:
      "A Royal Knight, and an elf human. He has his own ties to the elf people " +
      "of this world.",
    provenance: "Mail over a red undershirt, pale swept-back hair, grey legs.",
    tags: ["knight", "elf", "half-elf", "medieval", "royal-knights", "kinship"],
    images: ["images/the-elf-knight-01.jpg"],
    acquired: "",
    notes: "Placeholder name. First mention of elves anywhere in the collection - the world already had dwarves, gnomes, several alien species and a viking, and it turns out it has elves too. He is the tie to them and none of them are photographed yet."
  },


  {
    id: "the-dragon-knight",
    name: "The Dragon Knight",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Knight",
    group: "The Royal Knights",
    location: "The Medieval Era",
    relations: [],
    rating: 0,
    background: "A dragon knight.",
    provenance:
      "Gold dragon helm over full silver plate, and a white dragon on blue on " +
      "the shield - not the lion the rest of the order carries.",
    tags: ["knight", "dragon", "plate-armor", "heraldry", "medieval", "royal-knights"],
    images: ["images/the-dragon-knight-01.jpg"],
    acquired: "",
    notes: "Filed with the Royal Knights on the strength of the batch, but flagging it: his arms are a dragon, not the blue lion shield. He is the second knight here under different heraldry, after the Second Royal Archer - which either means there is a second house in the realm or it means nothing. Second man in full plate, after the Supreme Mega Knight."
  },


  {
    id: "finn",
    name: "Finn",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Adventure Time",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "Finn, from Adventure Time.",
    provenance:
      "Built rather than bought - a plain blue torso and a white helmet standing " +
      "in for the hat.",
    tags: ["finn", "adventure-time", "visitor", "custom-build"],
    images: ["images/finn-01.jpg"],
    acquired: "",
    notes: "First figure here that is custom in origin and branded in theme at the same time, and the split is deliberate: origin describes the figure, theme describes who it is. Tony Stark and SpongeBob are real Lego figures of themselves; this is a build of somebody. Seventh theme outside the Creation Mythos."
  },


  {
    id: "the-common-knight",
    name: "The Common Knight",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Knight",
    group: "The Royal Knights",
    location: "The Medieval Era",
    relations: [],
    rating: 0,
    background: "A normal knight.",
    provenance:
      "Pointed helm with neck guards, lion's head on the chest - and a face " +
      "printed frowning with sweat coming off it.",
    tags: ["knight", "medieval", "royal-knights", "ordinary", "sweating"],
    images: ["images/the-common-knight-01.jpg"],
    acquired: "",
    notes: "Placeholder name, from your word for him. The plainest knight in the order, and the only one in 285 figures whose face is printed sweating - which is a strange thing to find on the one you called normal."
  },



  {
    id: "the-fleet-commander",
    name: "The Fleet Commander",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Fleet Commander",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A fleet commander.",
    provenance: "Grey officer's tunic with a rank bar on the chest and a plain belt.",
    tags: ["commander", "fleet", "officer", "space"],
    images: ["images/the-fleet-commander-01.jpg"],
    acquired: "",
    notes: "Placeholder name, and no group written: this world has a Space Militia, a Space Police, a Royal Galactic Army, a Blacktron Squadron and an Aqua Force, and nobody has said whose fleet he commands. Name it and he joins them."
  },


  {
    id: "the-inventory-specialist",
    name: "The Inventory Specialist",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Inventory Specialist",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Inventory specialist for the entire civilization. He tracks every " +
      "material that goes into the city, and everything the space forces or " +
      "the Royals hold. If it needs ordering, he is the one who orders it.\n\n" +
      "Every mechanic and every technician answers to him.\n\n" +
      "He looks like nobody in particular. He is extremely high ranking.",
    provenance: "Plain tan coveralls with two chest pockets, brown hair, no insignia anywhere.",
    tags: ["inventory", "logistics", "supply", "high-ranking", "modest", "quartermaster-general"],
    images: ["images/the-inventory-specialist-01.jpg"],
    acquired: "",
    notes: "Placeholder name. No link written to the Quartermaster, who runs maintenance and supply aboard the mothership for the militia and the police both - by this man's description that is a job inside his own, but nobody has said so. Second figure here whose appearance is a deliberate lie about his standing, after the Potato Farmer who lives in a mansion."
  },


  {
    id: "the-second-ranger",
    name: "The Second Ranger",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Ranger",
    group: "",
    location: "",
    relations: [
      { to: "the-third-ranger", label: "Same ranger kit" },
    ],
    rating: 0,
    background: "A ranger.",
    provenance: "Pith helmet, open safari shirt, ammunition pouches across the belt.",
    tags: ["ranger", "pith-helmet", "expedition", "bandolier"],
    images: ["images/the-second-ranger-01.jpg"],
    acquired: "",
    notes: "Named by ordinal because the Ranger already exists - the one with the bionic arm, out with the Frontier Expedition. These two are not filed with him: they wear a completely different kit and nobody has said they are the same outfit. Say so and all three go together."
  },


  {
    id: "the-third-ranger",
    name: "The Third Ranger",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Ranger",
    group: "",
    location: "",
    relations: [
      { to: "the-second-ranger", label: "Same ranger kit" },
    ],
    rating: 0,
    background: "Also a ranger.",
    provenance:
      "The same pith helmet and pouches, but his shirt is buttoned and his face " +
      "is scarred across one eye.",
    tags: ["ranger", "pith-helmet", "expedition", "scarred"],
    images: ["images/the-third-ranger-01.jpg"],
    acquired: "",
    notes: "Named by ordinal, linked to the second by the kit rather than filed into a unit. The scar is printed, not wear."
  },



  {
    id: "the-rescue-ranger",
    name: "The Rescue Ranger",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Ranger",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A ranger. He works the snow and he works the sand, and what he does in " +
      "both is get people out.",
    provenance:
      "Tan cap with ear flaps and the same two-pocket tan coveralls the " +
      "Inventory Specialist wears.",
    tags: ["ranger", "rescue", "snow", "desert", "search-and-rescue"],
    images: ["images/the-rescue-ranger-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Third Ranger in the role filter, and the only one in the collection whose job is saving people rather than finding things - the fire service aside, almost nobody here is a rescuer."
  },


  {
    id: "the-safari-master",
    name: "The Safari Master",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Safari Master",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "The safari master.",
    provenance: "Pith helmet, buttoned safari shirt, belt pouches and a key at the hip.",
    tags: ["safari", "master", "pith-helmet", "expedition", "guide"],
    images: ["images/the-safari-master-01.jpg"],
    acquired: "",
    notes: "Placeholder name. He is in the same pith helmet as the Second and Third Rangers and he is called the master of something - if those two are his, say so and the three of them become an outfit. Nobody has said it, so nothing is written."
  },


  {
    id: "the-maintenance-technician",
    name: "The Maintenance Technician",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Technician",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A maintenance technician.",
    provenance: "Tan coveralls printed with tool loops down the front, and a flat tan cap.",
    tags: ["technician", "maintenance", "tools", "coveralls"],
    images: ["images/the-maintenance-technician-01.jpg"],
    acquired: "",
    notes: "Third Technician here. By the Inventory Specialist's own entry, every mechanic and every technician in the civilization answers to him - which is a stated fact rather than a guess, and applies to this man, the Technician, the Ground Technician, the Mechanic, the Tall Mechanic, the Builder and the Car Repairman alike. No links written, because writing one and not the other six would be arbitrary. Say the word and all seven get wired to him."
  },


  {
    id: "the-leprechaun",
    name: "The Leprechaun",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A leprechaun.",
    provenance: "Green tails, buckled top hat, shamrock on the lapel, ginger beard.",
    tags: ["leprechaun", "small-folk", "green", "shamrock", "folklore"],
    images: ["images/the-leprechaun-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Fourth small folk in the world, after the dwarves, the gnomes and the elves - and the elves still have not been photographed."
  },



  {
    id: "the-delta-leader",
    name: "The Delta Leader",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Squad Leader",
    group: "Delta Squad",
    location: "",
    relations: [],
    rating: 0,
    background: "Leader of Delta Squad.",
    provenance:
      "The only one of the five with his head uncovered - dark hair instead of " +
      "a helmet, same green fatigues as the rest.",
    tags: ["delta-squad", "soldier", "leader", "squad"],
    images: ["images/the-delta-leader-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Delta Squad is the first unit in the collection built as a fireteam rather than assembled as a roster - leader, medic, machine gun, artillery, sniper, one man to each job. Every other group here is people who happen to share an employer."
  },


  {
    id: "the-delta-medic",
    name: "The Delta Medic",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Medic",
    group: "Delta Squad",
    location: "",
    relations: [],
    rating: 0,
    background: "Delta Squad's medic.",
    provenance: "White cross on the helmet, and the only plain smile in the squad.",
    tags: ["delta-squad", "medic", "soldier", "red-cross"],
    images: ["images/the-delta-medic-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Second Medic in the collection, after the Space Militia's. He is also the only man in Delta Squad who is not scowling, which is a fair division of labour."
  },


  {
    id: "the-delta-gunner",
    name: "The Delta Gunner",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Machine Gunner",
    group: "Delta Squad",
    location: "",
    relations: [],
    rating: 0,
    background: "Delta Squad's machine gunner.",
    provenance: "Stubble and a mark over one eye.",
    tags: ["delta-squad", "machine-gun", "soldier", "gunner"],
    images: ["images/the-delta-gunner-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Third gunner in the collection, after the Gunner of the Space Police and the Minigunner."
  },


  {
    id: "the-delta-artilleryman",
    name: "The Delta Artilleryman",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Artillery",
    group: "Delta Squad",
    location: "",
    relations: [],
    rating: 0,
    background: "Delta Squad's artillery.",
    provenance: "Pale head rather than yellow, and a face printed bloodied and furious.",
    tags: ["delta-squad", "artillery", "soldier", "battered"],
    images: ["images/the-delta-artilleryman-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Only artillery specialist in the collection - this world has five armed services, dozens of soldiers and nobody else whose job is the big guns."
  },


  {
    id: "the-delta-sniper",
    name: "The Delta Sniper",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Sniper",
    group: "Delta Squad",
    location: "",
    relations: [],
    rating: 0,
    background: "Delta Squad's sniper.",
    provenance: "Chinstrap down, pale head, one fair eyebrow showing under the helmet.",
    tags: ["delta-squad", "sniper", "soldier", "marksman"],
    images: ["images/the-delta-sniper-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Third sniper here, after the Sniper and the Golden Sniper - and the first one who belongs to a squad rather than working alone or for hire."
  },



  {
    id: "the-delta-rifleman",
    name: "The Delta Rifleman",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Rifleman",
    group: "Delta Squad",
    location: "",
    relations: [],
    rating: 0,
    background: "Delta Squad's other rifleman.",
    provenance:
      "Bareheaded like the leader, black hair, the same green fatigues as the " +
      "rest of the squad.",
    tags: ["delta-squad", "rifleman", "soldier"],
    images: ["images/the-delta-rifleman-01.jpg"],
    acquired: "",
    notes: "Sixth and last of Delta Squad. You called him the OTHER rifleman, which means one of the first five is carrying a rifle too and it has not been recorded which - say and it goes in. Second Rifleman in the role filter, after the Adventure Crew's."
  },


  {
    id: "the-fighter-pilot",
    name: "The Fighter Pilot",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Fighter Pilot",
    group: "The Green Rangers",
    location: "",
    relations: [],
    rating: 0,
    background: "The Green Rangers' fighter pilot.",
    provenance: "Brown leather flying cap with goggles pushed up, star on the belt buckle.",
    tags: ["green-rangers", "pilot", "fighter", "goggles"],
    images: ["images/the-fighter-pilot-01.jpg"],
    acquired: "",
    notes: "Placeholder name. The Green Rangers are the lowest rung of this world's military - which makes them the first unit in the collection defined by being at the bottom. Everything else here is elite, royal, specialist or a whole service."
  },


  {
    id: "the-cargo-pilot",
    name: "The Cargo Pilot",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Cargo Pilot",
    group: "The Green Rangers",
    location: "",
    relations: [],
    rating: 0,
    background: "The Green Rangers' routine cargo pilot.",
    provenance:
      "Black flying cap where the fighter pilot's is brown, and trousers scuffed " +
      "and stained down both legs.",
    tags: ["green-rangers", "pilot", "cargo", "routine", "goggles"],
    images: ["images/the-cargo-pilot-01.jpg"],
    acquired: "",
    notes: "Placeholder name, told apart from the fighter pilot by the black cap as you said. Ninth pilot in the collection and the only one whose job is described as routine - everybody else here flies something famous, experimental or armed."
  },


  {
    id: "the-wide-eyed-ranger",
    name: "The Wide-Eyed Ranger",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Soldier",
    group: "The Green Rangers",
    location: "",
    relations: [],
    rating: 0,
    background: "A Green Ranger. Funny, and goofy with it.",
    provenance:
      "Two enormous round eyes, an orange nose and no mouth at all - the " +
      "strangest face in the collection, and the only one without a mouth.",
    tags: ["green-rangers", "soldier", "goofy", "odd-face"],
    images: ["images/the-wide-eyed-ranger-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive. You said these two are funny and goofy, and the plastic agrees before the lore does: he has a face no other figure here has."
  },


  {
    id: "the-moustached-ranger",
    name: "The Moustached Ranger",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Soldier",
    group: "The Green Rangers",
    location: "",
    relations: [],
    rating: 0,
    background: "A Green Ranger. Funny, and goofy with it.",
    provenance: "An enormous black handlebar moustache running into muttonchops.",
    tags: ["green-rangers", "soldier", "goofy", "moustache"],
    images: ["images/the-moustached-ranger-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive, paired with the Wide-Eyed Ranger."
  },



  {
    id: "the-grinning-ranger",
    name: "The Grinning Ranger",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Soldier",
    group: "The Green Rangers",
    location: "",
    relations: [],
    rating: 0,
    background: "Another of the Green Rangers.",
    provenance: "Tanned head, bright blue eyes, freckles, and the widest grin in the unit.",
    tags: ["green-rangers", "soldier", "grin", "freckles"],
    images: ["images/the-grinning-ranger-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive. Fifth Green Ranger, and the third of them with a face doing something odd - for the lowest rung of the military they are by some distance the most expressive unit in the collection."
  },


  {
    id: "the-dive-captain",
    name: "The Dive Captain",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Captain",
    group: "The Dive Team",
    location: "",
    relations: [],
    rating: 0,
    background: "Captain of the dive team.",
    provenance: "Blue helmet with the visor down, air hose round the collar, yellow high-visibility jacket.",
    tags: ["dive-team", "captain", "diver", "underwater", "rescue"],
    images: ["images/the-dive-captain-01.jpg"],
    acquired: "",
    notes: "Placeholder name, and a new group. Kept separate from Aqua Force, who handle military necessities underwater - this lot are in high-visibility rescue kit rather than wetsuits, and nobody has said the two are connected. Say so and they merge."
  },


  {
    id: "the-snorkel-diver",
    name: "The Snorkel Diver",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Diver",
    group: "The Dive Team",
    location: "",
    relations: [],
    rating: 0,
    background: "One of the divers.",
    provenance: "Mask and snorkel over a white cap, life vest on.",
    tags: ["dive-team", "diver", "snorkel", "life-vest"],
    images: ["images/the-snorkel-diver-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive."
  },


  {
    id: "the-goggled-diver",
    name: "The Goggled Diver",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Diver",
    group: "The Dive Team",
    location: "",
    relations: [],
    rating: 0,
    background: "One of the divers.",
    provenance:
      "Worth flagging: he is in a white McLaren racing suit with the logo on " +
      "the chest, not dive kit. Only the blue goggles over the helmet say " +
      "water at all.",
    tags: ["dive-team", "diver", "goggles", "racing-suit"],
    images: ["images/the-goggled-diver-01.jpg"],
    acquired: "",
    notes: "Filed as a diver because you said so. The suit disagrees - it is motorsport, the same sort of discrepancy as the Porsche Driver in his Ferrari overalls. Either he came to the water from racing or the kit is just what was to hand; tell me which."
  },


  {
    id: "the-us-army-soldiers",
    name: "The US Army Soldiers",
    variant: "Ten of them",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Soldier",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "US Army soldiers. There are ten of them.",
    provenance:
      "M1 helmets, ammunition bandoliers and a US pouch on the belt - the " +
      "uniform print is modelled on twentieth-century American infantry kit.",
    tags: ["us-army", "soldier", "unit", "infantry", "ten"],
    images: [
      { src: "images/the-us-army-soldiers-01.jpg", caption: "One of them" },
      { src: "images/the-us-army-soldiers-02.jpg", caption: "The unit" }
    ],
    acquired: "",
    notes: "One entry for all ten, with the unit photo as the second image the way the Enemy's is. Filed good by the standing rule, since you have not said otherwise: the only figures marked bad in 308 are the Enemy Soldiers, who are the other twentieth-century unit here. Whether these two fight each other is not written down."
  },



  {
    id: "the-site-planner",
    name: "The Site Planner",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Site Planner",
    group: "The Construction Crew",
    location: "Lego City",
    relations: [
      { to: "the-construction-chief", label: "Second to" },
    ],
    rating: 0,
    background:
      "Second in command to the Construction Chief.\n\n" +
      "What he actually does is plan, and make sure everybody goes home in one " +
      "piece.",
    provenance: "White hard hat and white trousers, where the rest of the crew are in red and blue.",
    tags: ["construction", "planner", "safety", "second-in-command", "lego-city"],
    images: ["images/the-site-planner-01.jpg"],
    acquired: "",
    notes: "Placeholder name, kept clear of the Planner of the Space Militia. The white hat and white trousers are how you tell him from the crew, and the collection has form for this: the General's son died and the militia built its whole safety culture round it. This is the first man here whose actual job is nobody getting hurt."
  },


  {
    id: "the-smirking-worker",
    name: "The Smirking Worker",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Construction Worker",
    group: "The Construction Crew",
    location: "Lego City",
    relations: [],
    rating: 0,
    background: "A construction worker.",
    provenance: "Red hard hat, orange hi-vis jacket, and a crooked grin.",
    tags: ["construction", "worker", "hard-hat", "hi-vis"],
    images: ["images/the-smirking-worker-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive - three workers arrived together and their faces are the only difference."
  },


  {
    id: "the-stern-worker",
    name: "The Stern Worker",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Construction Worker",
    group: "The Construction Crew",
    location: "Lego City",
    relations: [],
    rating: 0,
    background: "A construction worker.",
    provenance: "Same red hat and orange jacket, mouth printed as a flat line.",
    tags: ["construction", "worker", "hard-hat", "hi-vis"],
    images: ["images/the-stern-worker-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive."
  },


  {
    id: "the-worker-in-shades",
    name: "The Worker in Shades",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Construction Worker",
    group: "The Construction Crew",
    location: "Lego City",
    relations: [],
    rating: 0,
    background: "A construction worker.",
    provenance:
      "Black sunglasses under the hard hat, and a railway arrow on the vest - " +
      "the same marking the Site Planner wears.",
    tags: ["construction", "worker", "sunglasses", "railway", "hi-vis"],
    images: ["images/the-worker-in-shades-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive. He, the Site Planner and the Winking Worker all carry a railway arrow on the vest, which the rest of the crew do not - three of eight, so if this crew works the rails rather than buildings, say so."
  },


  {
    id: "the-winking-worker",
    name: "The Winking Worker",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Construction Worker",
    group: "The Construction Crew",
    location: "Lego City",
    relations: [],
    rating: 0,
    background: "A construction worker.",
    provenance:
      "Red hard hat, orange hi-vis vest worn over a blue collared shirt and " +
      "tie, blue arms and legs. A railway arrow on the vest, and a wink.",
    tags: ["construction", "worker", "hard-hat", "hi-vis", "railway"],
    images: ["images/the-winking-worker-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive. Third man in the crew with the railway arrow on his vest, after the Site Planner and the Worker in Shades - three of eight now, which is a big enough share to mean something if this crew works the rails."
  },


  {
    id: "the-cheerful-worker",
    name: "The Cheerful Worker",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Construction Worker",
    group: "The Construction Crew",
    location: "Lego City",
    relations: [],
    rating: 0,
    background: "A construction worker.",
    provenance:
      "Red hard hat over ginger hair, a zipped orange work jacket with " +
      "reflective bands and chest pockets, blue legs, grey hands. Open smile.",
    tags: ["construction", "worker", "hard-hat", "hi-vis"],
    images: ["images/the-cheerful-worker-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive. He and the Worker in Silver Shades wear the same zipped jacket, a heavier kit than the older three in their plain vests."
  },


  {
    id: "the-worker-in-silver-shades",
    name: "The Worker in Silver Shades",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Construction Worker",
    group: "The Construction Crew",
    location: "Lego City",
    relations: [],
    rating: 0,
    background: "A construction worker.",
    provenance:
      "Same zipped orange jacket as the Cheerful Worker, mirrored silver " +
      "sunglasses under the red hat, and a smirk.",
    tags: ["construction", "worker", "sunglasses", "hard-hat", "hi-vis"],
    images: ["images/the-worker-in-silver-shades-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive, and kept clear of the Worker in Shades, who wears black ones. Two men in sunglasses on an eight-man crew."
  },


  {
    id: "the-atlantis-leader",
    name: "The Leader with the Eyepatch",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Leader",
    group: "The Atlantis Dive Team",
    location: "",
    relations: [
      { to: "the-young-leader", label: "Serves under" },
    ],
    rating: 0,
    background:
      "One of the leaders of the Atlantis dive team, under the Young Leader.",
    provenance:
      "Green transparent dome helmet over a grey armoured dive suit, lime " +
      "arms, a harpoon printed down one leg and a red trident badge on the " +
      "other. Black eyepatch with the strap across his face.",
    tags: ["atlantis", "dive-team", "leader", "diver", "underwater", "eyepatch", "trident"],
    images: ["images/the-atlantis-leader-01.jpg"],
    acquired: "",
    notes: "Renamed from The Atlantis Leader once the actual leader turned up - you called him one of their leaders, and the Young Leader is the leader. Still worth checking whether the Diver with the Thrusters has an eyepatch too, half hidden behind the green dome."
  },


  {
    id: "the-atlantis-diver",
    name: "The Diver with the Thrusters",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Diver",
    group: "The Atlantis Dive Team",
    location: "",
    relations: [
      { to: "the-young-leader", label: "Serves under" },
    ],
    rating: 0,
    background: "One of the Atlantis dive team.",
    provenance:
      "Same grey armoured suit and green dome, with twin yellow thruster pods " +
      "mounted on the back. Red trident badge on the leg.",
    tags: ["atlantis", "dive-team", "diver", "underwater", "thrusters", "trident"],
    images: ["images/the-atlantis-diver-01.jpg"],
    acquired: "",
    notes: "Renamed from The Atlantis Diver once the team grew to seven - that name read as the whole group. The thruster pods are his alone, so far. Three separate underwater outfits now: Aqua Force in wetsuits with a blue trident, the Dive Team in yellow hi-vis rescue kit, and this lot in armoured pressure suits with a red trident. The two tridents are close enough to be worth asking about - say the word and Aqua Force and Atlantis connect."
  },


  {
    id: "the-moustached-diver",
    name: "The Moustached Diver",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Diver",
    group: "The Atlantis Dive Team",
    location: "",
    relations: [
      { to: "the-young-leader", label: "Serves under" },
    ],
    rating: 0,
    background: "One of the Atlantis dive team.",
    provenance:
      "Round wire-rimmed glasses behind the green dome and a heavy brown " +
      "moustache. Same grey pressure suit, lime arms, black hands.",
    tags: ["atlantis", "dive-team", "diver", "underwater", "glasses", "moustache", "trident"],
    images: ["images/the-moustached-diver-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive. Two of the seven wear glasses under the helmet, which is an odd thing to do at depth and reads as the team carrying specialists rather than only swimmers."
  },


  {
    id: "the-bearded-diver",
    name: "The Bearded Diver",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Diver",
    group: "The Atlantis Dive Team",
    location: "",
    relations: [
      { to: "the-young-leader", label: "Serves under" },
    ],
    rating: 0,
    background: "One of the Atlantis dive team.",
    provenance:
      "Round glasses, grey hair and a grey beard, and a smile. The oldest " +
      "face on the team by a long way.",
    tags: ["atlantis", "dive-team", "diver", "underwater", "glasses", "beard", "trident"],
    images: ["images/the-bearded-diver-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive. The other man in glasses, and grey where the rest are not - if either of these two is the team's scientist or engineer rather than a diver, say so and the role changes."
  },


  {
    id: "the-grinning-diver",
    name: "The Grinning Diver",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Diver",
    group: "The Atlantis Dive Team",
    location: "",
    relations: [
      { to: "the-young-leader", label: "Serves under" },
    ],
    rating: 0,
    background: "One of the Atlantis dive team.",
    provenance: "Clean-shaven, one eyebrow up, grinning. Dark grey claw hands rather than black.",
    tags: ["atlantis", "dive-team", "diver", "underwater", "trident"],
    images: ["images/the-grinning-diver-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive, and kept clear of the Grinning Ranger."
  },


  {
    id: "the-scowling-diver",
    name: "The Scowling Diver",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Diver",
    group: "The Atlantis Dive Team",
    location: "",
    relations: [
      { to: "the-young-leader", label: "Serves under" },
    ],
    rating: 0,
    background: "One of the Atlantis dive team.",
    provenance:
      "Same raised eyebrow as the Grinning Diver but the mouth turned down, " +
      "and stubble on the chin. Dark grey claw hands.",
    tags: ["atlantis", "dive-team", "diver", "underwater", "trident"],
    images: ["images/the-scowling-diver-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive. He and the Grinning Diver are near enough the same man with the mouth redrawn - if they are meant to be brothers, or the same person twice, say so."
  },


  {
    id: "the-woman-in-the-dive-suit",
    name: "The Woman in the Dive Suit",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Diver",
    group: "The Atlantis Dive Team",
    location: "",
    relations: [
      { to: "the-young-leader", label: "Serves under" },
    ],
    rating: 0,
    background: "One of the Atlantis dive team.",
    provenance: "Lashes and red lipstick behind the dome, and the same armoured suit as every other diver.",
    tags: ["atlantis", "dive-team", "diver", "underwater", "trident"],
    images: ["images/the-woman-in-the-dive-suit-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive, and kept clear of the Dive Team, who are a different outfit. The only woman on the Atlantis team so far, and she is in exactly the same kit as the men - no separate uniform for her, which is not true everywhere in this world."
  },


  {
    id: "the-diver-with-the-crooked-smile",
    name: "The Diver with the Crooked Smile",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Diver",
    group: "The Atlantis Dive Team",
    location: "",
    relations: [
      { to: "the-young-leader", label: "Serves under" },
    ],
    rating: 0,
    background: "One of the Atlantis dive team.",
    provenance:
      "A small closed-mouth smile pulled to one side. The only diver wearing " +
      "mismatched hands, one silver and one black.",
    tags: ["atlantis", "dive-team", "diver", "underwater", "trident"],
    images: ["images/the-diver-with-the-crooked-smile-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive. The odd hands are probably just how he was put together, but he is the only one, so it is written down."
  },


  {
    id: "the-beaming-diver",
    name: "The Beaming Diver",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Diver",
    group: "The Atlantis Dive Team",
    location: "",
    relations: [
      { to: "the-young-leader", label: "Serves under" },
    ],
    rating: 0,
    background: "One of the Atlantis dive team.",
    provenance: "Wide open grin with the teeth showing, thick dark eyebrows, black claw hands.",
    tags: ["atlantis", "dive-team", "diver", "underwater", "trident"],
    images: ["images/the-beaming-diver-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive, and kept clear of the Grinning Diver, whose mouth is closed."
  },


  {
    id: "the-young-leader",
    name: "The Young Leader",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Leader",
    group: "The Atlantis Dive Team",
    location: "",
    relations: [
      { to: "the-atlantis-leader", label: "One of his leaders" },
      { to: "the-atlantis-diver", label: "Leads" },
      { to: "the-moustached-diver", label: "Leads" },
      { to: "the-bearded-diver", label: "Leads" },
      { to: "the-grinning-diver", label: "Leads" },
      { to: "the-scowling-diver", label: "Leads" },
      { to: "the-woman-in-the-dive-suit", label: "Leads" },
      { to: "the-diver-with-the-crooked-smile", label: "Leads" },
      { to: "the-beaming-diver", label: "Leads" },
    ],
    rating: 0,
    background:
      "The leader of the Atlantis dive team.\n\n" +
      "He is twenty-three. He is the youngest person in the collection to run " +
      "anything, and nobody under him treats that as a problem - he is so " +
      "relentlessly motivated that the respect came anyway.\n\n" +
      "The winged helmet looks silly and is not. It is an ancient relic the " +
      "team dug up, and they asked him to wear it. It is not a rank badge the " +
      "organisation issued him; it is a thing his own people handed him " +
      "because they were proud of him.",
    provenance:
      "Steel helm with two large white wings, out of the dive suit and into " +
      "a grey breastplate with a horned collar. Lime arms, same as every " +
      "other diver. Grinning.",
    tags: ["atlantis", "dive-team", "leader", "young", "relic", "winged-helm", "motivated"],
    images: ["images/the-young-leader-01.jpg"],
    acquired: "",
    notes: "The grin is on his face nearly always, and it is an age thing rather than a mood. Worth noting how rare this is here: almost every leader in this collection got the job through rank, bloodline or outliving the last one. He got it by being wanted in it, and the relic was given, not awarded."
  },


  {
    id: "the-winter-trooper-leader",
    name: "The Winter Trooper Leader",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Leader",
    group: "The Winter Troopers",
    location: "",
    relations: [
      { to: "the-winter-trooper", label: "Commands" },
      { to: "the-second-winter-trooper", label: "Commands" },
    ],
    rating: 0,
    background: "He leads the two winter troopers.",
    provenance:
      "White cold-weather helmet with the goggles pushed up on the brim, a " +
      "grey moustache and beard, and a white and tan field jacket with ammo " +
      "pouches and a belt pack.",
    tags: ["soldier", "winter", "cold-weather", "trooper", "leader", "veteran"],
    images: ["images/the-winter-trooper-leader-01.jpg"],
    acquired: "",
    notes: "His arrival turns the two winter troopers from loose figures into a unit - they are now a group of three. He is also visibly the oldest of them, which the other two are not."
  },


  {
    id: "the-girl-in-the-guinea-pig-costume",
    name: "The Girl in the Guinea Pig Costume",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Civilian",
    group: "",
    location: "Lego City",
    relations: [],
    rating: 0,
    background: "A civilian girl in a costume.",
    provenance:
      "Full brown guinea pig suit with the head as a hood and her freckled " +
      "face showing through the mouth, white belly patch, pink paws, and " +
      "roller skates whose wheels are cucumber slices.",
    tags: ["civilian", "costume", "guinea-pig", "roller-skates", "lego-city"],
    images: ["images/the-girl-in-the-guinea-pig-costume-01.jpg"],
    acquired: "",
    notes: "Third person here in a full costume, after the Guy in the Pizza Costume and the man who sells bricks at the Lego store in a brick suit. Filed in Lego City by default - say the word if she belongs somewhere else."
  },


  {
    id: "the-engineer-commander",
    name: "The Engineer Commander",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Engineer Commander",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "He commands the engineers.",
    provenance:
      "Black peaked cap, grey officer's tunic with a rank plate of red and " +
      "blue bars on the chest, grey legs, and one black hand and one grey.",
    tags: ["engineer", "commander", "officer", "rank-insignia"],
    images: ["images/the-engineer-commander-01.jpg"],
    acquired: "",
    notes: "Kept clear of the Engineer, who is an Archangel and nothing to do with machines. Worth deciding: the Inventory Specialist is described as in charge of any mechanic or technician in the civilization, which would put this man under him - but his cap and rank plate say a separate service, so no link is written until you say."
  },


  {
    id: "the-hiker",
    name: "The Hiker",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Civilian",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "An outdoorsman. He hikes, and that is the whole of it - no service, no " +
      "unit, nobody above him.\n\n" +
      "He is short. Not a dwarf or one of the small folk, just a short man " +
      "who goes walking.",
    provenance:
      "Brown wide-brimmed hat, round glasses, brown beard, navy shirt under " +
      "green braces hung with a wrench and a hammer. Short legs in brown, " +
      "and mismatched hands - one yellow, one white.",
    tags: ["civilian", "hiker", "outdoors", "short", "beard", "glasses"],
    images: ["images/the-hiker-01.jpg"],
    acquired: "",
    notes: "Kept clear of the Backpacker. His height is the thing to note: every other short figure here is a dwarf, a gnome, a leprechaun or a child - he is the first who is simply a short man, with no species or age attached."
  },


  {
    id: "the-snarling-miner",
    name: "The Snarling Miner",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Power Miner",
    group: "The Power Miners",
    location: "",
    relations: [],
    rating: 0,
    background: "One of the power miners.",
    provenance:
      "Blue mining helmet with the ear guards down, teeth bared, stubble and " +
      "fresh cuts across the face. Grey and blue harness over blue legs with " +
      "a chain and a dynamite stick printed on them.",
    tags: ["power-miner", "miner", "underground", "helmet", "scarred"],
    images: ["images/the-snarling-miner-01.jpg"],
    acquired: "",
    notes: "New group. Names are purely descriptive - the three arrived together in identical kit and the faces are the only difference. He is the only one of them with cuts on his face."
  },


  {
    id: "the-green-eyed-miner",
    name: "The Green-Eyed Miner",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Power Miner",
    group: "The Power Miners",
    location: "",
    relations: [],
    rating: 0,
    background: "One of the power miners.",
    provenance: "Same blue helmet and harness. Green eyes under heavy brows, and a flat half-smile.",
    tags: ["power-miner", "miner", "underground", "helmet"],
    images: ["images/the-green-eyed-miner-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive. Green eyes are rare here - nearly every face in the collection is printed with plain black dots."
  },


  {
    id: "the-miner-in-goggles",
    name: "The Miner in Goggles",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Power Miner",
    group: "The Power Miners",
    location: "",
    relations: [],
    rating: 0,
    background: "One of the power miners.",
    provenance:
      "Tinted goggles across the face, freckles and stubble, grinning. His " +
      "harness is the odd one out - two big cargo pockets where the others " +
      "carry tool loops.",
    tags: ["power-miner", "miner", "underground", "goggles", "helmet"],
    images: ["images/the-miner-in-goggles-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive, and kept clear of the Goggled Diver. The different harness is the only kit variation in the three, so if it means a different job down there, say so."
  },


  {
    id: "the-visored-miner",
    name: "The Visored Miner",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Power Miner",
    group: "The Power Miners",
    location: "",
    relations: [],
    rating: 0,
    background: "One of the power miners.",
    provenance:
      "The only one with the clear visor pulled down over his face. Plain " +
      "even smile behind it, yellow arms, silver claw hands.",
    tags: ["power-miner", "miner", "underground", "helmet", "visor"],
    images: ["images/the-visored-miner-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive. Everyone else on the crew has the visor up or no visor at all."
  },


  {
    id: "the-miner-in-white",
    name: "The Miner in White",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Power Miner",
    group: "The Power Miners",
    location: "",
    relations: [],
    rating: 0,
    background: "One of the power miners.",
    provenance:
      "Thin silver-rimmed glasses and red lips under the blue helmet. Her " +
      "sleeves, arms and hands are white where every other miner's are " +
      "yellow, and her harness has deep cargo pockets.",
    tags: ["power-miner", "miner", "underground", "helmet", "glasses"],
    images: ["images/the-miner-in-white-01.jpg"],
    acquired: "",
    notes: "First woman on the mining crew, and the only miner not in yellow sleeves - if the white means a different job down there, a medic or an inspector rather than a digger, say so. Third woman here in glasses under a working helmet, after the two Atlantis divers."
  },


  {
    id: "the-smudged-miner",
    name: "The Smudged Miner",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Power Miner",
    group: "The Power Miners",
    location: "",
    relations: [],
    rating: 0,
    background: "One of the power miners.",
    provenance:
      "Wide toothy grin, thin moustache, and a black smear of dirt across " +
      "one cheek. Cargo-pocket harness, grey claw hands.",
    tags: ["power-miner", "miner", "underground", "helmet"],
    images: ["images/the-smudged-miner-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive. The crew is six now, and the harnesses split three and three - tool loops on the first three, cargo pockets on the rest."
  },


  {
    id: "the-fireman-in-the-white-helmet",
    name: "The Fireman in the White Helmet",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Firefighter",
    group: "The Fire Service",
    location: "Lego City",
    relations: [],
    rating: 0,
    background: "One of the fire service.",
    provenance:
      "White fire helmet, a grey breathing hose coiled round the collar, and " +
      "an orange suit printed with a red harness and the service badge.",
    tags: ["firefighter", "fire-service", "breathing-apparatus", "rescue", "lego-city"],
    images: ["images/the-fireman-in-the-white-helmet-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive, and kept clear of the Fireman in Orange - they are both in orange, so the helmet is what tells them apart. Fire Service is six now. He is the only one carrying breathing apparatus, which is the kit for going inside a burning building rather than fighting it from outside."
  },


  {
    id: "luke-skywalker",
    name: "Luke Skywalker",
    variant: "Three outfits",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Pilot",
    group: "The Rebel Pilots",
    location: "",
    relations: [],
    rating: 0,
    background: "Luke Skywalker, in his flight kit and later in black.",
    provenance:
      "Two figures of the same man. The pilot is in an orange flight suit with " +
      "the grey chest rig and the white X-wing helmet, red rebel crests on both " +
      "sides. The later one is bare-headed and blond, in a grey tunic over black " +
      "arms and legs, with no kit on him at all. A third has him in a yellow " +
      "ceremonial jacket over brown trousers, a gold medallion printed at the " +
      "chest and a holster on the thigh.",
    tags: ["star-wars", "pilot", "jedi", "rebel", "x-wing", "branded"],
    images: [
      { src: "images/luke-skywalker-01.jpg", caption: "In his flight kit" },
      { src: "images/luke-skywalker-03.jpg", caption: "In the ceremonial jacket" },
      { src: "images/luke-skywalker-02.jpg", caption: "Later, in black" },
    ],
    acquired: "",
    notes: "Opened the Star Wars theme, and has a squadron round him. Settled: the rebels exist within this world, not as visitors from another - so Luke stands alongside the Snow Jedi's line and the clone troopers rather than apart from them, and this world simply has both. Three figures of him now, which makes him the most photographed person in the collection alongside Tony Stark, Bruce Wayne and SpongeBob - and the only one of those four who is not the owner of his own franchise. The jacket is the one picture of him being thanked; the black is the one where he is nobody's pilot."
  },


  {
    id: "the-smirking-pilot",
    name: "The Smirking Pilot",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Pilot",
    group: "The Rebel Pilots",
    location: "",
    relations: [],
    rating: 0,
    background: "One of the rebel pilots.",
    provenance:
      "White helmet with broad grey stripes, one eyebrow up and a smirk. He " +
      "is the only rebel pilot with a plain yellow head - every other one is " +
      "flesh-toned. Orange suit with the full life-support rig: white vest, " +
      "grey control panel, coiled hose.",
    tags: ["star-wars", "rebel", "pilot", "x-wing", "branded"],
    images: ["images/the-smirking-pilot-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive. New group, The Rebel Pilots, with Luke Skywalker in it."
  },


  {
    id: "the-bearded-pilot",
    name: "The Bearded Pilot",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Pilot",
    group: "The Rebel Pilots",
    location: "",
    relations: [],
    rating: 0,
    background: "One of the rebel pilots.",
    provenance:
      "Full black chinstrap beard with the teeth showing, and a yellow stripe " +
      "down the crown of the helmet. Wears the plainer chest rig, the same " +
      "one Luke has, rather than the panelled life-support vest.",
    tags: ["star-wars", "rebel", "pilot", "x-wing", "beard", "branded"],
    images: ["images/the-bearded-pilot-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive. The squadron splits on kit: three in the panelled life-support vest, three in the plain rig."
  },


  {
    id: "the-pilot-in-the-striped-helmet",
    name: "The Pilot in the Striped Helmet",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Pilot",
    group: "The Rebel Pilots",
    location: "",
    relations: [],
    rating: 0,
    background: "One of the rebel pilots.",
    provenance:
      "Grey and white striped helmet. An orange band is printed straight " +
      "across his face at eye level, with a black goatee under it, and the " +
      "panelled life-support vest on the chest.",
    tags: ["star-wars", "rebel", "pilot", "x-wing", "goatee", "branded"],
    images: ["images/the-pilot-in-the-striped-helmet-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive. He and the Pilot in the Grid Helmet have the same face - orange band, same goatee - so the helmet is the only way to tell them apart. If they are brothers, or the same man twice, say so."
  },


  {
    id: "the-pilot-in-the-grid-helmet",
    name: "The Pilot in the Grid Helmet",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Pilot",
    group: "The Rebel Pilots",
    location: "",
    relations: [],
    rating: 0,
    background: "One of the rebel pilots.",
    provenance:
      "Helmet marked with olive grid panels and a black spiral emblem on the " +
      "crown. Same orange face band and black goatee as the Pilot in the " +
      "Striped Helmet, and the panelled life-support vest.",
    tags: ["star-wars", "rebel", "pilot", "x-wing", "goatee", "branded"],
    images: ["images/the-pilot-in-the-grid-helmet-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive. He shares his helmet markings with the Smiling Pilot and his face with the Pilot in the Striped Helmet - the only figure here who overlaps with two others in different ways."
  },


  {
    id: "the-smiling-pilot",
    name: "The Smiling Pilot",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Pilot",
    group: "The Rebel Pilots",
    location: "",
    relations: [],
    rating: 0,
    background: "One of the rebel pilots.",
    provenance:
      "Same olive grid helmet with the black spiral. Plain flesh face, two " +
      "dots and a simple smile, no beard. Wears the plain chest rig.",
    tags: ["star-wars", "rebel", "pilot", "x-wing", "branded"],
    images: ["images/the-smiling-pilot-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive. The youngest-looking face in the squadron, and the only one in it with no expression to read."
  },


  {
    id: "the-stern-pilot",
    name: "The Stern Pilot",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Pilot",
    group: "The Rebel Pilots",
    location: "",
    relations: [],
    rating: 0,
    background: "One of the rebel pilots.",
    provenance:
      "Grey and white striped helmet, heavy dark brows and a hard set to the " +
      "mouth. Panelled life-support vest with the control box and hose.",
    tags: ["star-wars", "rebel", "pilot", "x-wing", "branded"],
    images: ["images/the-stern-pilot-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive."
  },


  {
    id: "the-pilot-in-glasses",
    name: "The Pilot in Glasses",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Pilot",
    group: "The Rebel Pilots",
    location: "",
    relations: [],
    rating: 0,
    background: "One of the rebel pilots.",
    provenance:
      "Blue-rimmed glasses and a headset microphone swung across his cheek, " +
      "under a helmet marked with tan oval panels. Yellow head, plain chest rig.",
    tags: ["star-wars", "rebel", "pilot", "x-wing", "glasses", "headset", "branded"],
    images: ["images/the-pilot-in-glasses-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive. The only pilot in the squadron with a microphone printed on his face, which reads as the one doing the talking. Second yellow head among eight rebels, after the Smirking Pilot."
  },


  {
    id: "the-gold-domed-astronaut",
    name: "The Gold-Domed Astronaut",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Astronaut",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "An astronaut.",
    provenance:
      "Solid gold dome over a white pressure suit, with a ribbed breathing " +
      "collar and hoses running to a chest valve. Black utility belt, white " +
      "legs printed with vents.",
    tags: ["astronaut", "space", "gold-visor", "pressure-suit", "life-support"],
    images: ["images/the-gold-domed-astronaut-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Kept out of a group for now, but worth checking against the Mars Mission crew - his gold dome is the same idea as their gold visor, and if he is one of them rather than a lone astronaut, say so and he moves."
  },


  {
    id: "the-mars-mission-astronaut",
    name: "The Clench-Jawed Astronaut",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Astronaut",
    group: "Mars Mission",
    location: "",
    relations: [],
    rating: 0,
    background: "One of the Mars Mission crew.",
    provenance:
      "White suit printed with an orange harness and the old rocket-and-planet " +
      "badge on the chest. The gold visor flips: down it covers the face " +
      "entirely, up it sits on the brim and shows a yellow face in " +
      "sunglasses, teeth clenched.",
    tags: ["astronaut", "mars-mission", "space", "gold-visor", "classic-space-logo"],
    images: [
      { src: "images/the-mars-mission-astronaut-01.jpg", caption: "Visor down" },
      { src: "images/the-mars-mission-astronaut-02.jpg", caption: "Visor up" },
    ],
    acquired: "",
    notes: "One man, two photos - not two figures. Renamed from The Mars Mission Astronaut once the crew grew to five, since that name read as the whole group. He is still the only one photographed both ways. Also worth noting the badge on his chest is the old rocket-and-planet mark that Classic Space wear, which would make Mars Mission a later chapter of the same service rather than a separate one - say so and the two connect."
  },


  {
    id: "the-grimy-astronaut",
    name: "The Grimy Astronaut",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Astronaut",
    group: "Mars Mission",
    location: "",
    relations: [],
    rating: 0,
    background: "One of the Mars Mission crew.",
    provenance:
      "Visor pushed up on the brim. The face under it is filthy - heavy " +
      "stubble, grime across the cheeks, jaw set hard. His sleeves carry " +
      "green staining from years of handling.",
    tags: ["astronaut", "mars-mission", "space", "worn"],
    images: ["images/the-grimy-astronaut-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive. The dirtiest face on the crew, and the wear on his arms is real - he has been played with harder than the rest."
  },


  {
    id: "the-smiling-astronaut",
    name: "The Smiling Astronaut",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Astronaut",
    group: "Mars Mission",
    location: "",
    relations: [],
    rating: 0,
    background: "One of the Mars Mission crew.",
    provenance:
      "Visor up, dark sunglasses on, and an easy closed-mouth smile. One " +
      "silver hand and one black.",
    tags: ["astronaut", "mars-mission", "space", "sunglasses"],
    images: ["images/the-smiling-astronaut-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive, and kept clear of the Clench-Jawed Astronaut, who wears the same sunglasses with his teeth bared. Sunglasses and a smile are the difference between them."
  },


  {
    id: "the-astronaut-in-the-gold-visor",
    name: "The Astronaut in the Gold Visor",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Astronaut",
    group: "Mars Mission",
    location: "",
    relations: [],
    rating: 0,
    background: "One of the Mars Mission crew.",
    provenance: "White dome with the solid gold visor down. No face has been seen.",
    tags: ["astronaut", "mars-mission", "space", "gold-visor"],
    images: ["images/the-astronaut-in-the-gold-visor-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive. Nobody has looked under this one, so there is nothing recorded about his face - which also means there is no way to tell yet whether he is his own man or a duplicate of somebody already here."
  },


  {
    id: "the-astronaut-in-the-yellow-visor",
    name: "The Astronaut in the Yellow Visor",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Astronaut",
    group: "Mars Mission",
    location: "",
    relations: [],
    rating: 0,
    background: "One of the Mars Mission crew.",
    provenance:
      "Transparent yellow visor rather than the gold - his face shows straight " +
      "through it, brows down, stubbled. The legs are flecked pale where the " +
      "white has worn.",
    tags: ["astronaut", "mars-mission", "space", "yellow-visor"],
    images: ["images/the-astronaut-in-the-yellow-visor-01.jpg"],
    acquired: "",
    notes: "Name is purely descriptive. The only clear visor in the crew - everybody else's is solid, so he is the one who can be read with his helmet shut."
  },


  {
    id: "the-enforcer-squad",
    name: "The Enforcer Squad",
    variant: "Two of them",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Soldier",
    group: "The Enforcer Squad",
    location: "",
    relations: [
      { to: "the-enforcer-commander", label: "Serves under" },
    ],
    rating: 0,
    background: "The Enforcer Squad. There are two of them.",
    provenance:
      "White armour with a black visor band straight across the dome, and a " +
      "ribbed chest and belt plate printed on the torso. The two are identical.",
    tags: ["enforcer", "squad", "soldier", "unit", "armour", "two"],
    images: [{ src: "images/the-enforcer-squad-01.jpg", caption: "Both of them" }],
    acquired: "",
    notes: "One entry for the pair, the way the US Army Soldiers and the Enemy are done. Filed good by the standing rule, since you have not said otherwise. They now have a commander, so the squad is a group after all - that note used to say two men with no third are not an organisation, and the third arrived."
  },


  {
    id: "the-defense-gunner",
    name: "The Defense Gunner",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Defense Gunner",
    group: "The Command Staff",
    location: "",
    relations: [],
    rating: 0,
    background: "He works the defensive guns.",
    provenance:
      "White armour with a smoked translucent visor band rather than a solid " +
      "one - his face reads straight through it, brows down, stubbled and " +
      "unhappy. Black hands.",
    tags: ["gunner", "defense", "armour", "visor", "command-staff"],
    images: ["images/the-defense-gunner-01.jpg"],
    acquired: "",
    notes: "The only one of the five without a command title, and the only one whose face is behind a visor - the rest go bare-headed under caps and hair. He wears the Enforcer Squad's helmet with a see-through visor instead of their black one."
  },


  {
    id: "the-pilot-commander",
    name: "The Pilot Commander",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Pilot Commander",
    group: "The Command Staff",
    location: "",
    relations: [
      { to: "the-second-pilot-commander", label: "Shares his title with" },
    ],
    rating: 0,
    background: "He commands the pilots.",
    provenance:
      "White peaked cap, sand-blue arms and legs, and a white chest rig with " +
      "hoses running to a panel of red and blue rank bars. A pack on his back.",
    tags: ["commander", "pilot", "officer", "rank-insignia", "command-staff"],
    images: ["images/the-pilot-commander-01.jpg"],
    acquired: "",
    notes: "He and the Hangar Commander have the same scarred face. Two men running next-door departments with one face between them is either brothers or the same man twice - say which."
  },


  {
    id: "the-hangar-commander",
    name: "The Hangar Commander",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Hangar Commander",
    group: "The Command Staff",
    location: "",
    relations: [],
    rating: 0,
    background: "He runs the hangar.",
    provenance:
      "Same white peaked cap and the same scarred face as the Pilot Commander, " +
      "but in full white armour with a black belt rather than an officer's kit.",
    tags: ["commander", "hangar", "officer", "armour", "command-staff"],
    images: ["images/the-hangar-commander-01.jpg"],
    acquired: "",
    notes: "The hangar and the pilots are the same building's business, and these two share a face and a cap. If there is a relation between them beyond the department, say so."
  },


  {
    id: "the-troop-commander",
    name: "The Troop Commander",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Troop Commander",
    group: "The Command Staff",
    location: "",
    relations: [],
    rating: 0,
    background: "He commands the troops.",
    provenance:
      "Dark brown hair, no helmet, and a cloth pauldron over one shoulder - " +
      "white with a blue stripe. Full white armour underneath.",
    tags: ["commander", "troops", "pauldron", "armour", "command-staff"],
    images: ["images/the-troop-commander-01.jpg"],
    acquired: "",
    notes: "The only one of the five wearing cloth. A pauldron is a field marking rather than an office one, so of this staff he is the one who is meant to be seen from a distance on the ground."
  },


  {
    id: "the-mechanic-supervisor",
    name: "The Mechanic Supervisor",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Mechanic Supervisor",
    group: "The Command Staff",
    location: "",
    relations: [],
    rating: 0,
    background: "He supervises the mechanics.",
    provenance:
      "Brown cap over a yellow face with a lopsided grin. Full white armour, " +
      "white hands. Easily the most cheerful of the five.",
    tags: ["supervisor", "mechanic", "armour", "command-staff"],
    images: ["images/the-mechanic-supervisor-01.jpg"],
    acquired: "",
    notes: "Third man now whose job is the mechanics, after the Inventory Specialist - who you said is in charge of any mechanic or technician in the civilization - and the Engineer Commander. Three layers of the same trade with no line drawn between them yet."
  },


  {
    id: "the-range-commander",
    name: "The Range Commander",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Range Commander",
    group: "The Command Staff",
    location: "",
    relations: [],
    rating: 0,
    background: "He commands the range.",
    provenance:
      "Sand-coloured field uniform, a tactical vest printed with pouches and " +
      "a stencilled number, and white goggles pushed up on a black helmet. " +
      "His face is cut about and furious.",
    tags: ["commander", "range", "field-kit", "goggles", "scarred", "command-staff"],
    images: ["images/the-range-commander-01.jpg"],
    acquired: "",
    notes: "The only one of the staff not in white - sand field kit rather than armour or an officer's tunic, which puts him outdoors where the others are inside a building. Also the most beaten-up face on the staff."
  },


  {
    id: "the-second-pilot-commander",
    name: "The Second Pilot Commander",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Pilot Commander",
    group: "The Command Staff",
    location: "",
    relations: [
      { to: "the-pilot-commander", label: "Shares his title with" },
    ],
    rating: 0,
    background: "He commands the pilots.",
    provenance:
      "Grey skull cap over a cheerful flesh face, white armour with a black " +
      "chest plate, and mismatched arms - one grey, one black.",
    tags: ["commander", "pilot", "armour", "command-staff"],
    images: ["images/the-second-pilot-commander-01.jpg"],
    acquired: "",
    notes: "You gave the Pilot Commander title twice, so this is the second holder of it - named the way the Second Winter Trooper and the Second Padawan are. Either the pilots have two commanders, or one of these two is something else; the difference in kit is real, since the first wears an officer's tunic with rank bars and this one wears armour."
  },


  {
    id: "the-enforcer-commander",
    name: "The Enforcer Commander",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Enforcer Commander",
    group: "The Enforcer Squad",
    location: "",
    relations: [
      { to: "the-enforcer-squad", label: "Commands" },
    ],
    rating: 0,
    background: "He commands the Enforcer Squad.",
    provenance:
      "The squad's own kit exactly - white armour, white dome, solid black " +
      "visor band - with white hands where theirs are black.",
    tags: ["commander", "enforcer", "squad", "armour", "visor"],
    images: ["images/the-enforcer-commander-01.jpg"],
    acquired: "",
    notes: "His arrival turns the Enforcer Squad from a loose pair into a unit of three. He is in their exact helmet rather than a cap, which is the opposite of how the Command Staff mark rank - so he may belong with them on that staff as well, and only one group can be written; say the word and he moves."
  },


  {
    id: "the-pilot-officer",
    name: "The Pilot Officer",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Pilot Officer",
    group: "The Command Staff",
    location: "",
    relations: [],
    rating: 0,
    background: "An officer among the pilots.",
    provenance:
      "White flight helmet capped in blue, flesh face with a flat mouth, full " +
      "white armour, black hands.",
    tags: ["officer", "pilot", "armour", "flight-helmet", "command-staff"],
    images: ["images/the-pilot-officer-01.jpg"],
    acquired: "",
    notes: "Third man on the staff attached to the pilots, after the two Pilot Commanders. Officer is a rung below commander everywhere else in this collection, so he is written as under them until you say otherwise."
  },


  {
    id: "cowboy-spider-man",
    name: "Cowboy Spider-Man",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Marvel",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "Spider-Man, dressed as a cowboy.",
    provenance:
      "The mask under a brown cowboy hat, a red bandana pulled up over the " +
      "mouth so only the eyes show, a grey cloth serape over one shoulder, " +
      "yellow waistcoat, gun belts on pale denim and brown boots.",
    tags: ["marvel", "spider-man", "cowboy", "western", "bandana", "branded"],
    images: ["images/cowboy-spider-man-01.jpg"],
    acquired: "",
    notes: "Second Marvel figure here, after Tony Stark, and third man in the collection dressed western after the Sheriff and the Outlaw. The bandana over the mask is the joke: he is wearing a disguise over a disguise."
  },


  {
    id: "deadpool",
    name: "Deadpool",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Marvel",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "Deadpool.",
    provenance:
      "Red and black suit with the mask printed straight onto the head, " +
      "twin katana harnesses crossed at the chest, a belt with the logo on " +
      "the buckle and pouches down both hips. Black arms, red hands.",
    tags: ["marvel", "deadpool", "mercenary", "katana", "branded"],
    images: ["images/deadpool-01.jpg"],
    acquired: "",
    notes: "Third Marvel figure, after Tony Stark and Cowboy Spider-Man. Filed good by the standing rule, which is a call worth revisiting - he is the first figure here whose source material would not describe him as one of the good guys, and the Outlaw is the nearest thing the collection has to that so far."
  },


  {
    id: "the-mandalorian",
    name: "The Mandalorian",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "The Mandalorian.",
    provenance:
      "Beskar helmet with the T visor, a dark cloth cape, bandolier across " +
      "the chest, and greaved legs. Printed almost entirely in metallic greys.",
    tags: ["star-wars", "mandalorian", "bounty-hunter", "beskar", "helmet", "branded"],
    images: ["images/the-mandalorian-01.jpg"],
    acquired: "",
    notes: "Ninth Star Wars figure. He is the only one of them not attached to a side - the Rebel Pilots have a squadron, and he has nobody."
  },


  {
    id: "the-jedi-palace-guard",
    name: "The Jedi Palace Guard",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Guard",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A guard of the Jedi palace.",
    provenance:
      "White hood pulled over a featureless mask marked with a gold flame, " +
      "tan robes with a white sash, a heavy brown belt and pouches. Nothing " +
      "of the face shows but two slits.",
    tags: ["star-wars", "jedi", "guard", "masked", "robes", "branded"],
    images: ["images/the-jedi-palace-guard-01.jpg"],
    acquired: "",
    notes: "Worth deciding: this world already has a Jedi order of its own - the Snow Jedi and the line he trained - and the rebels were ruled to exist within the world rather than visiting. If the same goes for the Jedi, then this man guards a palace that the Snow Jedi's people would know, and a link can be written."
  },


  {
    id: "anakin-skywalker",
    name: "Anakin Skywalker",
    variant: "Boy and man",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "Anakin Skywalker, as a boy and grown.",
    provenance:
      "Two figures of the same man. The boy has short brown hair, a freckled " +
      "face, and plain pale desert clothes with a brown belt - no armour, no " +
      "weapon, nothing of what he becomes. The man has long swept hair, a scar " +
      "down one cheek, blue eyes and black Jedi robes with a brown leather belt.",
    tags: ["star-wars", "anakin", "child", "desert", "branded"],
    images: [
      { src: "images/anakin-skywalker-01.jpg", caption: "As a boy" },
      { src: "images/anakin-skywalker-02.jpg", caption: "Grown, in Jedi black" },
    ],
    acquired: "",
    notes: "He was entered under his full name last time precisely so a grown figure could join this entry instead of starting a second one, and that is what happened - the boy and the man are one card. The scar is the whole distance between the two photographs. Whether this world knows he is Luke's father is still not written down."
  },


  {
    id: "jack-skellington",
    name: "Jack Skellington",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "The Nightmare Before Christmas",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "Jack Skellington.",
    provenance:
      "Bare skull head with the stitched grin, a black bat bow tie with the " +
      "wings spread wide, and the pinstripe suit printed down the torso and " +
      "both legs. A cloth sash at the waist.",
    tags: ["nightmare-before-christmas", "skeleton", "pinstripe", "halloween", "branded"],
    images: ["images/jack-skellington-01.jpg"],
    acquired: "",
    notes: "Opens a ninth theme. Kept out of Christmas, where Santa Claus sits, because he is his own property rather than part of that one - though the two of them being in the same collection is funny given what Jack does to Christmas in his own story."
  },


  {
    id: "the-kaminoan",
    name: "The Kaminoan",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A Kaminoan.",
    provenance:
      "Tall smooth white skull on a long grey neck, black almond eyes, no " +
      "nose to speak of. White and grey robes with a high collar, pale blue " +
      "sleeves. The head and neck are a single moulded piece rather than the " +
      "usual stud.",
    tags: ["star-wars", "kaminoan", "alien", "cloner", "branded"],
    images: ["images/the-kaminoan-01.jpg"],
    acquired: "",
    notes: "You could not place the name, so the species is what is written down: Kaminoan, the people who grow the clone armies. Lego has made two of them by name, Lama Su and Taun We, and this is one of the two - tell me which and the entry gets it. Worth noting he is the first non-human in the Star Wars corner of this collection, and the only figure here whose head and neck are one piece."
  },


  {
    id: "obi-wan-kenobi",
    name: "Obi-Wan Kenobi",
    variant: "Two eras",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Jedi",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "Obi-Wan Kenobi.",
    provenance:
      "Two figures of the same man. The older one has a full ginger beard, " +
      "flesh-toned face, a brown cloth cape and rust-coloured legs. The " +
      "younger has a plain yellow head, long hair past the shoulders, a " +
      "headset at the jaw and tan robes throughout.",
    tags: ["star-wars", "jedi", "obi-wan", "beard", "robes", "branded"],
    images: [
      { src: "images/obi-wan-kenobi-01.jpg", caption: "Bearded, in the brown cape" },
      { src: "images/obi-wan-kenobi-02.jpg", caption: "Long-haired, with a headset" },
    ],
    acquired: "",
    notes: "One entry, two figures - the same man at two points in his life, the way the Prince and SpongeBob are done. Putting them in as two cards would have broken the one-entry rule. The older of the two is also the only Jedi here with a real cloth cape."
  },


  {
    id: "ahsoka-tano",
    name: "Ahsoka Tano",
    variant: "Two eras",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Jedi",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "Ahsoka Tano.",
    provenance:
      "Two figures of the same woman. The older has grey chest armour over a " +
      "blue and yellow tabard, greaved legs, long white and blue montrals, and " +
      "carries two lightsabers at once. The younger has short montrals, a bare " +
      "midriff under an orange top, a plain brown belt and white legs - and " +
      "nothing in her hands.",
    tags: ["star-wars", "jedi", "ahsoka", "togruta", "twin-sabers", "branded"],
    images: [
      { src: "images/ahsoka-tano-01.jpg", caption: "Older, in armour" },
      { src: "images/ahsoka-tano-02.jpg", caption: "Younger, in orange" },
    ],
    acquired: "",
    notes: "First woman in the Star Wars corner, and still the only one. Two figures of her now, one entry: the young one is unarmed and the older one carries two sabers, which is the whole of what changed between them."
  },


  {
    id: "captain-america",
    name: "Captain America",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Marvel",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "Captain America.",
    provenance:
      "Navy blue throughout, with the A on the forehead of the cowl, a white " +
      "star on the chest and red and white bands across the ribs. Red hands. " +
      "No shield with him.",
    tags: ["marvel", "captain-america", "soldier", "branded"],
    images: ["images/captain-america-01.jpg"],
    acquired: "",
    notes: "Fourth Marvel figure, after Tony Stark, Cowboy Spider-Man and Deadpool. He arrives without his shield, which is the one thing everybody would name first about him."
  },


  {
    id: "the-old-flash",
    name: "The Old Flash",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "DC",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "The Flash, the older one.",
    provenance:
      "Steel bowl helmet with a gold wing on each side, red shirt with the " +
      "lightning bolt across the chest, black belt, blue trousers and red " +
      "boots. Grinning, and no mask at all.",
    tags: ["dc", "flash", "speedster", "winged-helmet", "branded"],
    images: ["images/the-old-flash-01.jpg"],
    acquired: "",
    notes: "Named the way you named him. The winged helmet marks him as the Golden Age Flash, Jay Garrick, rather than the red-suited one - so if a modern Flash ever turns up he is a different man and gets his own entry rather than joining this one. Second DC figure, after Bruce Wayne."
  },


  {
    id: "superman",
    name: "Superman",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "DC",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "Superman.",
    provenance:
      "Blue throughout with the crest on the chest, red panelling at the " +
      "waist and knees, a real red cloth cape, and black hair with the curl. " +
      "No trunks on this version.",
    tags: ["dc", "superman", "cape", "kryptonian", "branded"],
    images: ["images/superman-01.jpg"],
    acquired: "",
    notes: "Third DC figure. He is the first branded figure here whose power is simply being stronger than everybody - the collection\'s own strongest are the Cosmic Deities and the First Man, which makes him the first outsider who would have to be ranked against them."
  },


  {
    id: "iron-fist",
    name: "Iron Fist",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Marvel",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "Iron Fist.",
    provenance:
      "Green suit with a yellow sash at the waist and the black dragon spread " +
      "across the chest. Yellow mask over the upper face, mouth and chin bare, " +
      "yellow hands.",
    tags: ["marvel", "iron-fist", "dragon", "martial-arts", "branded"],
    images: ["images/iron-fist-01.jpg"],
    acquired: "",
    notes: "Fifth Marvel figure. Marvel is now the largest branded theme here, ahead of Star Wars\' named characters, and every one of them so far is a man."
  },


  {
    id: "jar-jar-binks",
    name: "Jar Jar Binks",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "Jar Jar Binks.",
    provenance:
      "Moulded Gungan head in pale olive, eyes up on stalks, long earflaps " +
      "hanging past the shoulders. Grey open jerkin over a bare chest, orange " +
      "arms, grey legs.",
    tags: ["star-wars", "gungan", "jar-jar", "alien", "branded"],
    images: ["images/jar-jar-binks-01.jpg"],
    acquired: "",
    notes: "Second non-human in the Star Wars corner, after the Kaminoan, and the second figure here whose head is a solid moulded piece rather than a printed stud."
  },


  {
    id: "mace-windu",
    name: "Mace Windu",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Jedi",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "Mace Windu.",
    provenance:
      "Brown head, flat mouth, no hair piece. Grey wrapped tunic with a gold " +
      "belt, pale legs, and a brown cloth cape. Carries a lightsaber hilt.",
    tags: ["star-wars", "jedi", "mace-windu", "cape", "branded"],
    images: ["images/mace-windu-01.jpg"],
    acquired: "",
    notes: "Fourth Jedi from the films now, after Obi-Wan, Ahsoka and Anakin, and the collection already has its own order in the Snow Jedi\'s line. That is two Jedi traditions in one world, and no link written between them yet."
  },


  {
    id: "chewbacca",
    name: "Chewbacca",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "Chewbacca.",
    provenance:
      "One moulded brown piece from the head to the hips, fur sculpted all " +
      "over it, with the ammunition bandolier picked out in silver across the " +
      "chest. Brown legs and arms under it.",
    tags: ["star-wars", "wookiee", "chewbacca", "bandolier", "branded"],
    images: ["images/chewbacca-01.jpg"],
    acquired: "",
    notes: "Bare-faced, no cloak, and the bandolier is the only thing he carries."
  },


  {
    id: "the-wookiee",
    name: "The Wookiee",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A Wookiee.",
    provenance:
      "The same sculpted brown build as Chewbacca, but hooded, with a heavy " +
      "mane pulled over the head, twin bandoliers crossed at the chest, a gold " +
      "medallion at the breast and a broad worked belt with a gold buckle.",
    tags: ["star-wars", "wookiee", "hooded", "bandolier", "medallion", "branded"],
    images: ["images/the-wookiee-01.jpg"],
    acquired: "",
    notes: "Not Chewbacca - a second Wookiee, and far better dressed. The hood, the medallion and the worked belt all read as rank rather than kit, so if he is somebody in particular among his own people, say so and he gets the name. Third species represented in the Star Wars corner."
  },


  {
    id: "kit-fisto",
    name: "Kit Fisto",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Jedi",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "Kit Fisto.",
    provenance:
      "Moulded green Nautolan head, black eyes with no whites, and fourteen " +
      "tentacles falling from the skull down past the chest. Brown Jedi robes " +
      "with a grey wrap and a white clasp at the belt, green hands.",
    tags: ["star-wars", "jedi", "kit-fisto", "nautolan", "alien", "branded"],
    images: ["images/kit-fisto-01.jpg"],
    acquired: "",
    notes: "Fifth Jedi from the films. Third moulded-head alien in the collection, after the Kaminoan and Jar Jar, and the first of them who is also a Jedi."
  },


  {
    id: "the-gungan-soldiers",
    name: "The Gungan Soldiers",
    variant: "Two of them",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Soldier",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "Gungan soldiers. There are two of them.",
    provenance:
      "Moulded Gungan heads in pale olive with a dark brown cap over the " +
      "brow, eyes up on stalks, long earflaps down the back. Brown leather " +
      "jerkins with gold trim at the waist, orange arms, tan legs. Identical " +
      "to each other.",
    tags: ["star-wars", "gungan", "soldier", "unit", "alien", "two", "branded"],
    images: [{ src: "images/the-gungan-soldiers-01.jpg", caption: "Both of them" }],
    acquired: "",
    notes: "One entry for the pair, the way the Enforcer Squad and the US Army Soldiers are done. They are Jar Jar\'s own people in armour - he is in an open jerkin with a bare chest and they are kitted out, which is the first time this collection has a named alien and the rank and file of his species both catalogued."
  },


  {
    id: "plo-koon",
    name: "Plo Koon",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Jedi",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "Plo Koon.",
    provenance:
      "Moulded orange Kel Dor head behind a grey breathing mask and goggles - " +
      "nothing of the face is visible at all. Tan Jedi robes with a brown " +
      "belt, tan legs, brown hands.",
    tags: ["star-wars", "jedi", "plo-koon", "kel-dor", "mask", "alien", "branded"],
    images: ["images/plo-koon-01.jpg"],
    acquired: "",
    notes: "Sixth Jedi from the films, and the fourth moulded-head alien. He cannot breathe what everybody else breathes, which makes him the first figure in the collection kept alive by his own equipment rather than wearing it for work."
  },


  {
    id: "jack-sparrow",
    name: "Jack Sparrow",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Pirates of the Caribbean",
    rank: "",
    role: "Pirate",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "Jack Sparrow.",
    provenance:
      "Dark red bandana under long black dreadlocks strung with silver beads, " +
      "a braided moustache and beard, a blue waistcoat over a loose shirt with " +
      "a wide buckled belt and a red sash, and tan breeches.",
    tags: ["pirates-of-the-caribbean", "pirate", "jack-sparrow", "branded"],
    images: ["images/jack-sparrow-01.jpg"],
    acquired: "",
    notes: "Opens a tenth theme. This collection already has a whole pirate crew of its own - the Pirate Captain, her first mate in green, the hobo, the sleepy one - so he lands in a world that has pirates already and is not one of them. Whether he ever crossed her deck is yours to say."
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
    group: "",
    location: "",
    relations: [],
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
