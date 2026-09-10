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
   location    Where they're based.                   "Lego City"
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
    id: "the-space-princess",
    name: "The Space Princess",
    variant: "Blue dress, after her return",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "Cosmic Deity",
    role: "Queen",
    location: "The Royal Palace",
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
    id: "the-twins",
    name: "The Twins",
    variant: "Blue and black",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Archangel",
    location: "",
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
    provenance: "",
    tags: ["twin", "archangel", "jetpack", "status-quo", "pair"],
    images: ["images/the-twins-01.jpg"],
    acquired: "",
    notes: "Blue on the left, black on the right."
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
    location: "The Royal Palace",
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
    notes: "Two separate figures for one man, kept as one entry with two photos."
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
    location: "The Royal Palace",
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
    id: "the-royal-daughter",
    name: "The Royal Daughter",
    variant: "Arm in a sling",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Royal Child",
    location: "The Royal Palace",
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
    id: "the-palace-orphans",
    name: "The Palace Orphans",
    variant: "Five of them",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Orphan",
    location: "The Royal Palace",
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
    id: "the-palace-chief",
    name: "The Palace Chief",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Head of Palace Control",
    location: "The Royal Palace",
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
    id: "claws",
    name: "Claws",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Commander of the Clone Armies",
    location: "",
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
    provenance: "",
    tags: ["clone", "energy-sword", "decorated", "veteran", "commander"],
    images: ["images/claws-01.jpg"],
    acquired: "",
    notes: "Built on a Star Wars clone trooper with a custom energy sword and shield. Filed as custom because Claws is your character, not the Star Wars one - tell me if you'd rather sort by what the figure is made of."
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
    provenance: "",
    tags: ["engineer", "aircraft", "prosthetic", "crash-survivor", "self-repaired"],
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
    location: "Lego City",
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
    id: "brute",
    name: "Brute",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Secretary of War",
    location: "",
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

  {
    id: "the-deputy",
    name: "The Deputy",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Royal Intelligence Deputy",
    location: "Lego City",
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
    location: "",
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
    location: "",
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
    variant: "His father's white, black and yellow armor",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Soldier",
    location: "",
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
    images: ["images/the-younger-brother-01.jpg"],
    acquired: "",
    notes: "Placeholder name."
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
