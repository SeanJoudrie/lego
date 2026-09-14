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
    relations: [],
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
      { to: "the-activist", label: "Also one of the Damaged, like" },
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
    location: "",
    relations: [
      { to: "the-space-cadets", label: "Trained one of" },
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
    notes: "Placeholder name."
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
    location: "",
    relations: [],
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
    location: "Lego City",
    relations: [],
    rating: 0,
    background:
      "He runs construction in Lego City and trained every other crew in it.\n\n" +
      "He also works at supersonic speed, and he trained as a Jedi.",
    provenance: "",
    tags: ["construction", "supersonic", "jedi-trained", "teacher"],
    images: ["images/the-construction-chief-01.jpg"],
    acquired: "",
    notes: "Second figure who works at supersonic speed, after the Chef - and the only one outside the Jedi who trained as one."
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
    relations: [],
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
    location: "The Gunless Realm",
    relations: [
      { to: "the-prince", label: "Follows" },
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
    location: "",
    relations: [
      { to: "king-arthur", label: "From the realm of" },
    ],
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
    location: "The Gunless Realm",
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
    relations: [],
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
