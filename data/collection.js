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
      { to: "the-successful-replica", label: "Copied again as" },
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
      { to: "the-shadow-team-commander", label: "His Shadow Team defected under" },
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
      { to: "the-prince-pretender", label: "His throne is claimed by" },
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
    notes: "Two separate figures for one man, kept as one entry with two photos. Connections here are deliberately only his close ties - almost everyone in the collection reports to him eventually, and listing that would bury the people who actually matter to him. The Prince Pretender is on the list because a rival claimant to your throne is a close tie whether you like him or not. Those who are loyal to him still say so on their own pages."
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
      { to: "the-prince-pretender", label: "Brother of" },
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
    relations: [
      { to: "the-commissioners-apprentice", label: "Left for dead by" },
    ],
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
    notes: "Needs a real name. You mentioned a gold visor - I can't see one in this shot, so check I photographed the right figure. The protege this card mentions has been catalogued, and it did not go well: he shot the Commissioner through the thigh during the great betrayal, stabbed him in the chest and left him slumped over a command board. Left for dead rather than dead - nothing here has been changed - but say whether he lived."
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
      { to: "quinn", label: "Captured by" },
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
      "Really cool guy.\n\n" +
      "Quinn captured him and put him in a stasis chamber. There is a " +
      "photograph of it.",
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
    images: [
      { src: "images/claws-01.jpg", caption: "Claws" },
      { src: "images/claws-02.jpg", caption: "In the stasis chamber, after Quinn took him" },
    ],
    acquired: "",
    notes: "The most heavily kitbashed figure in the collection - nine different sources in one minifigure. Filed as custom, which in his case is not even a judgement call. The second photograph is the first picture of an event anywhere in this catalogue rather than a picture of a person: he is the frosted figure standing inside the lit tube, with two others in the dark outside it. The link to Quinn was written before Quinn had a card at all, pointed at an id that did not exist; it is live now, and so is the Knighted Civilian\'s."
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
    notes: "Placeholder name - you called him the Green Captain in passing. Since this was written, a second Verdauf captain has been catalogued: the Traitor Captain, also in light green, who misled his troops into a massacre and rigged a ship with explosives, and whose survivors lived because a bomb failed. Either that is a different man or it is this same event told honestly. Nothing here has been changed on a guess - say which it is."
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
      { to: "the-transport-director", label: "Betrayed by his own director" },
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
      { to: "the-black-ninja", label: "Studied under" },
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
    notes: "His connection to his father was written down long before there was anything to connect to, pointed at an id that did not exist. The Shadow King has been photographed now and the link is live."
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
      { to: "the-rocket-saboteur", label: "Worked under him" },
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
    relations: [
      { to: "the-guardsmans-partner", label: "Was his partner" },
    ],
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
    provenance:
      "A white head with a beard and hair drawn straight onto it in black " +
      "marker - thick strokes round the jaw, over the crown and back from the " +
      "temples, with two red slashes left for eyes and black dots inside them. " +
      "A grey torso printed with a pink and silver harness, a loop running " +
      "from the throat down to a plate at the stomach, and small yellow tabs " +
      "along the waist. One yellow arm and one red arm, one brown hand and one " +
      "grey. Legs painted over by hand in magenta and white with turquoise " +
      "showing through at the knees.",
    tags: ["damaged", "rescued", "voice-implant", "mute", "hand-marked", "mismatched"],
    images: ["images/the-voiceless-01.jpg"],
    acquired: "",
    notes: "Placeholder name. Like the Activist, the damage on this figure is real.\n\nHe went years on this card with no description on him at all, and was handed in again later with the question of whether he had already been done. He had. He is written up properly now: the face is marker, the arms do not match, and the legs were painted over by somebody. He belongs with the six hand-marked clone figures and the two people of the Bin - the marks are what was done to him, and they are how you tell."
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
      { to: "the-disc-throwers-brother", label: "Brother of" },
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
    notes: "His brother has been photographed now, and he is on the other side - he betrayed the whole militia and then came back for this man, who said no. The link is live. It is not Crispus, and it is not the Planner, which this card and the Planner's both used to wonder about."
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
    notes: "This card used to wonder whether he was the Disc Thrower's brother. He is not - that man has turned up, on the other side, catalogued with the villains. Whoever the brother in this description was, it is somebody else."
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
      { to: "the-purple-shadow", label: "Constantly fought" },
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
    notes: "Second death in the collection, after the Green Captain. His link to the Purple Shadow was written against an id that did not exist for a long time. It is live now."
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
      { to: "the-knock-off-captain", label: "The same man on the other side" },
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
    images: [
      { src: "images/the-scrap-adventurer-01.jpg", caption: "The figure" },
      { src: "images/the-scrap-adventurer-02.jpg", caption: "Concept art" },
    ],
    acquired: "",
    notes: "Placeholder name. The concept art is here at last - this card and the Ginger Adventurer's have both been promising it since the day they were catalogued. Blue mirrored aviators, a sword on the back and scale armour buckled over a dozen straps: the scrap reads as salvaged plate rather than as spare parts, which is a different thing from what the name suggests."
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
    images: [
      { src: "images/the-ginger-adventurer-01.jpg", caption: "The figure" },
      { src: "images/the-ginger-adventurer-02.jpg", caption: "Concept art" },
    ],
    acquired: "",
    notes: "The concept art, finally. Pith helmet, a full ginger beard, a blue neckerchief and a notebook open in both hands - and a six-pointed star pinned to the vest, which is the first time anything has suggested this man holds an office as well as going on expeditions. Nobody has said what the badge is."
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
    images: [
      { src: "images/the-young-watchman-01.jpg", caption: "The figure" },
      { src: "images/the-young-watchman-02.jpg", caption: "Concept art" },
    ],
    acquired: "",
    notes: "Placeholder name. The concept art bears his card out exactly - young, open-faced, warm rather than brooding - and dresses him for the cold: a fur-lined parka over a white tactical vest, snow behind him. The figure is a white spacesuit with air tanks, so the art is the first thing to say where he actually works."
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
      { to: "the-pilots-apprentice", label: "Killed by" },
      { to: "the-pilots-daughter", label: "Father of" },
    ],
    rating: 0,
    background:
      "A famous pilot, off a long run of successful missions and the people he " +
      "brought back from them.\n\n" +
      "Famous enough that his daughter went and did the same.\n\n" +
      "His own apprentice killed him. The man had grown tired of living " +
      "underneath the fame, and took him in a dogfight by shooting him in the " +
      "back.",
    provenance: "",
    tags: ["pilot", "famous", "veteran", "father", "deceased", "betrayed"],
    images: ["images/the-famous-pilot-01.jpg"],
    acquired: "",
    notes: "Placeholder name - but see the note on his daughter about the family name. His death was added after the fact, when the apprentice who did it was catalogued; you said outright that the man killed him, so this card is marked deceased. The Pilot's Daughter has deliberately not been touched - she followed him into the job and the family name is known across the galaxy for being heroic and brave, and nobody has said what she knows about how her father actually died."
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
    relations: [
      { to: "johnny-plasma", label: "Spent his career in his shadow" },
    ],
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
    notes: "Placeholder name. The knight he stands behind has arrived - Johnny Plasma, the celebrated one, who turned out to be exactly what this card always said he was. The link is live, and it is an inference rather than something stated outright: read Johnny Plasma's note and correct it if the famous knight is somebody else."
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
      { to: "the-bin-elder", label: "Probably met him" },
      { to: "the-bin-woman", label: "Probably met her" },
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
      { to: "the-successful-replica", label: "The attempt that worked" },
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
    variant: "And Iron Man, in three suits",
    faction: "good",
    origin: "branded",
    theme: "Marvel",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "Literally Tony Stark. Also, literally Iron Man - in three suits.",
    provenance: "A genuine Marvel minifigure, not a build.",
    tags: ["marvel", "iron-man", "tony-stark", "branded", "visitor", "four-outfits"],
    images: [
      { src: "images/tony-stark-01.jpg", caption: "Tony Stark" },
      { src: "images/tony-stark-02.jpg", caption: "Iron Man, the earlier suit" },
      { src: "images/tony-stark-03.jpg", caption: "Iron Man, the later suit" },
      { src: "images/tony-stark-04.jpg", caption: "Iron Man, the gold-faced suit" }
    ],
    acquired: "",
    notes: "First branded figure in the catalog - the origin filter has had nothing but customs in it for 160 figures and now it does something. Four figures now, one man, one entry - the same call as Bruce Wayne and Batman, and the suits are outfits. The fourth is a third Iron Man suit, red and dark red with a gold faceplate and the reactor set in a hexagonal chest plate, and it arrived in the middle of a run of villains; it is filed here on the good side with the rest of him because he is already catalogued as one person, the same ruling Anakin got. Say the word if it was meant otherwise. How he stands relative to the worlds cosmology still isn't written down."
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
    group: "The Dwarves",
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
    group: "The Dwarves",
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
    notes: "Placeholder name - I could not make out the title you gave him, and it sounded like Sir Jeff. Say it again and he gets it. The link to Quinn was written long before Quinn had a card, pointed at an id that did not exist; it is live now."
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
    notes: "Named for what was done to him, the way the Discarded, the Damaged, the Displaced and the Rebuilt are. Seventh robot here, and the second whose body was driven by somebody else - except the Vessel lends his out to demigods on purpose, and this one was awake for it. One of the few things villains are recorded as actually doing, alongside Quinn's uprising and Quinn's taking of Claws, and it is the quietest and worst of them."
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
    variant: "Two figures",
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
      "Two of him. Both are yellow throughout with no helmet and the oldest " +
      "face in the collection - two plain dots and a line. One is scuffed and " +
      "grubby with the planet-and-rocket badge worn nearly off; the other is " +
      "clean, with the badge still crisp.",
    tags: ["spaceman", "classic-space", "yellow", "vintage", "worn"],
    images: [
      { src: "images/the-yellow-spaceman-01.jpg", caption: "The worn one" },
      { src: "images/the-yellow-spaceman-02.jpg", caption: "The clean one" },
    ],
    acquired: "",
    notes: "Third in Classic Space, which settled the group: blue, red and now yellow, same badge, same service. Probably the oldest Lego figure here after the Ancient, who is not Lego at all. A second yellow figure has since turned up, kept on this card as one man in two conditions - but unlike Luke or Yoda, these two could as easily be two different spacemen, since the trio are told apart by colour and there is nothing else to tell these two apart by. Say the word and the clean one gets his own entry."
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
    notes: "Placeholder name. First mention of elves anywhere in the collection - the world already had dwarves, gnomes, several alien species and a viking, and it turns out it has elves too. He is the tie to them, and for a long time none of them were photographed - until the Elf Man turned up among the lost."
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
      { to: "the-former-dive-captain", label: "Took the job the captain left" },
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
    variant: "Six figures",
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
      "chest and a holster on the thigh. A fourth is the boy on Tatooine: " +
      "plain white robes with a brown belt, pale hair, a yellow head. A fifth " +
      "is him on the ice - a tan quilted vest over white, a brown utility belt, " +
      "and a helmet with goggles pushed up on the brim. A sixth is the " +
      "Tatooine robes again " +
      "on a later mould - a flesh face instead of a yellow one, proper fair " +
      "hair, and the wrappings on the legs printed in.",
    tags: ["star-wars", "pilot", "jedi", "rebel", "x-wing", "branded"],
    images: [
      { src: "images/luke-skywalker-01.jpg", caption: "In his flight kit" },
      { src: "images/luke-skywalker-04.jpg", caption: "On Tatooine, in white" },
      { src: "images/luke-skywalker-06.jpg", caption: "Tatooine again, the later mould" },
      { src: "images/luke-skywalker-03.jpg", caption: "In the ceremonial jacket" },
      { src: "images/luke-skywalker-05.jpg", caption: "In cold-weather gear" },
      { src: "images/luke-skywalker-02.jpg", caption: "Later, in black" },
    ],
    acquired: "",
    notes: "Opened the Star Wars theme, and has a squadron round him. Settled: the rebels exist within this world, not as visitors from another - so Luke stands alongside the Snow Jedi's line and the clone troopers rather than apart from them, and this world simply has both. Six figures of him now, more than anybody else in the collection - Obi-Wan is next at five. Two of the six are the same Tatooine robes on two mouldings, twenty-odd years apart. The captions describe rather than sequence: the photographs are not in the order he lived them. The jacket is the one picture of him being thanked; the black is the one where he is nobody's pilot."
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
    relations: [
      { to: "widow", label: "His horse" },
    ],
    rating: 0,
    background: "Spider-Man, dressed as a cowboy.",
    provenance:
      "The mask under a brown cowboy hat, a red bandana pulled up over the " +
      "mouth so only the eyes show, a grey cloth serape over one shoulder, " +
      "yellow waistcoat, gun belts on pale denim and brown boots.\n\n" +
      "Looked him up later, when his horse turned up: he is Web-Slinger, " +
      "Patrick O'Hara, from the Spider-Man: Across the Spider-Verse " +
      "collectible minifigures, set 71050. The horse in this collection came " +
      "out of the same packet.",
    tags: ["marvel", "spider-man", "cowboy", "western", "bandana", "branded"],
    images: ["images/cowboy-spider-man-01.jpg"],
    acquired: "",
    notes: "Second Marvel figure here, after Tony Stark, and third man in the collection dressed western after the Sheriff and the Outlaw. The bandana over the mask is the joke: he is wearing a disguise over a disguise. Kept under the name you gave him rather than his real one - he was Cowboy Spider-Man here first."
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
    variant: "Six figures",
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
      "Six figures of the same man. Two are the boy - one with short dark " +
      "brown hair, one with a fairer sandy mop - both freckled, both in plain " +
      "pale desert clothes with a brown belt, no armour and no weapon. The " +
      "third is the man: long swept hair, a scar down one cheek, blue eyes and " +
      "black Jedi robes with a brown leather belt. A fourth is him again in " +
      "cold-weather kit: a navy parka with a grey fur hood, the Jedi crest on " +
      "the chest, and a scarf and goggles wrapped over the whole face." +
      "The fifth and sixth arrived together and share a face - long straight " +
      "brown hair parted in the middle, a scar drawn down from the right " +
      "eyebrow, a closed half-smile. One wears black Jedi robes over an olive " +
      "tunic with a band of orange and gold at the waist; the other wears grey " +
      "plated armour strapped on over the robes, with reddish brown arms and " +
      "steel legs.",
    tags: ["star-wars", "anakin", "child", "desert", "branded"],
    images: [
      { src: "images/anakin-skywalker-01.jpg", caption: "As a boy, dark hair" },
      { src: "images/anakin-skywalker-03.jpg", caption: "As a boy, fair hair" },
      { src: "images/anakin-skywalker-02.jpg", caption: "Grown, in Jedi black" },
      { src: "images/anakin-skywalker-04.jpg", caption: "Grown, in cold-weather kit" },
      { src: "images/anakin-skywalker-05.jpg", caption: "Two more, grown - robes and armour" },
    ],
    acquired: "",
    notes: "He was entered under his full name last time precisely so a grown figure could join this entry instead of starting a second one, and that is what happened - the boy and the man are one card. Six figures now, two of them the boy. That ties him with Luke Skywalker for the most of any one person here - and it corrects this card, which claimed at four that it already held the record when Luke had six all along. Obi-Wan has five. Nobody else is above three. The scar is the whole distance between the child and the man. Whether this world knows he is Luke's father is still not written down. The two new ones arrived in the middle of a run of branded villains, which is worth flagging: if either of them was meant to be the turn rather than the Jedi, say so and he gets the same treatment as Boba Fett, who was split into a boy on this side and a man on the other."
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
    variant: "Six figures",
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
      "Six figures of the same man. The first has a full ginger beard, " +
      "flesh-toned face, a brown cloth cape and rust-coloured legs. The " +
      "younger has a plain yellow head, long hair past the shoulders, a " +
      "headset at the jaw and tan robes throughout. A third has him bearded " +
      "again but shoulder-length and worn, in a heavy brown outer robe over pale " +
      "wrappings, mouth open as though caught mid-word. A fourth is him old - " +
      "grey hair and a full grey beard on a yellow head, plain cream robes with " +
      "a brown belt and nothing else on him at all. A fifth is the old man " +
      "again on a later mould - a flesh face instead of a yellow one, the grey " +
      "beard printed in properly, and a gold buckle on the belt. A sixth is him " +
      "in his prime - a moulded reddish-brown hair piece instead of a cape, a " +
      "trimmed ginger beard on a flesh face, and plain cream robes with a " +
      "printed leather belt, tan from the collar to the boots with no outer " +
      "robe on him at all.",
    tags: ["star-wars", "jedi", "obi-wan", "beard", "robes", "branded"],
    images: [
      { src: "images/obi-wan-kenobi-01.jpg", caption: "Bearded, in the brown cape" },
      { src: "images/obi-wan-kenobi-02.jpg", caption: "Long-haired, with a headset" },
      { src: "images/obi-wan-kenobi-03.jpg", caption: "Older, in the heavy robe" },
      { src: "images/obi-wan-kenobi-04.jpg", caption: "Old, as Ben" },
      { src: "images/obi-wan-kenobi-05.jpg", caption: "Old again, the later mould" },
      { src: "images/obi-wan-kenobi-06.jpg", caption: "In his prime, in cream robes" },
    ],
    acquired: "",
    notes: "One entry, six figures - the same man at six points in his life, the way the Prince and SpongeBob are done. Putting them in as separate cards would have broken the one-entry rule. This card has said twice that it was level with Luke and been wrong both times; the count is settled now, and so is the top of the collection: Luke, Anakin and Obi-Wan all stand at six figures on one card, and nobody else is above three. The oldest of them is the one you called Ben - the name he took on Tatooine when he was hiding - and putting all six on one card means the young man with the headset and the old hermit are the same person, which is the whole point of the one-entry rule."
  },


  {
    id: "ahsoka-tano",
    name: "Ahsoka Tano",
    variant: "Three figures",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Jedi",
    group: "",
    location: "",
    relations: [
      { to: "ahsokas-trooper", label: "Serves under her" },
    ],
    rating: 0,
    background: "Ahsoka Tano.",
    provenance:
      "Two figures of the same woman. The older has grey chest armour over a " +
      "blue and yellow tabard, greaved legs, long white and blue montrals, and " +
      "carries two lightsabers at once. The younger has short montrals, a bare " +
      "midriff under an orange top, a plain brown belt and white legs - and " +
      "nothing in her hands. A third is the young one again on a later " +
      "mould - grey legs instead of white, and montrals that fall well past " +
      "the shoulders where the other pair stop short.",
    tags: ["star-wars", "jedi", "ahsoka", "togruta", "twin-sabers", "branded"],
    images: [
      { src: "images/ahsoka-tano-01.jpg", caption: "Older, in armour" },
      { src: "images/ahsoka-tano-02.jpg", caption: "Younger, short montrals" },
      { src: "images/ahsoka-tano-03.jpg", caption: "Younger, long montrals" },
    ],
    acquired: "",
    notes: "First woman in the Star Wars corner, and no longer the only one now Leia is here. Three figures of her on one card, which ties her with Luke, Tony Stark, Bruce Wayne and SpongeBob for the most photographed person here. The young one is unarmed and the older one carries two sabers, and that is the whole of what changed between them."
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
    variant: "Three figures",
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
      "Three figures of the same man, none of them with a hair piece. The first " +
      "is in a grey wrapped tunic with a gold belt and a brown cloth cape, " +
      "holding a lightsaber hilt. The second is in cream robes with a wide " +
      "tooled belt, cape on, mouth set hard. The third is in olive robes with " +
      "white cuffs and white bands at the shins, black hands, no cape, teeth " +
      "bared.",
    tags: ["star-wars", "jedi", "mace-windu", "cape", "branded"],
    images: [
      { src: "images/mace-windu-01.jpg", caption: "Grey tunic" },
      { src: "images/mace-windu-02.jpg", caption: "Cream robes" },
      { src: "images/mace-windu-03.jpg", caption: "Olive robes, teeth bared" },
    ],
    acquired: "",
    notes: "Fourth Jedi from the films now, after Obi-Wan, Ahsoka and Anakin, and the collection already has its own order in the Snow Jedi\'s line. That is two Jedi traditions in one world, and no link written between them yet. Three figures of him on one card now, and unlike the three of Luke or Ahsoka, his are not ages or eras - just three suits of the same working clothes."
  },


  {
    id: "chewbacca",
    name: "Chewbacca",
    variant: "Two figures",
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
      "Two figures of him. The first is one moulded brown piece from head to " +
      "hips, fur sculpted all over it, the bandolier picked out in silver. The " +
      "second is the same build caught in weather - white snow flecked through " +
      "the fur, drifts printed across the toes of both feet, and pale flames " +
      "licking up the legs.",
    tags: ["star-wars", "wookiee", "chewbacca", "bandolier", "branded"],
    images: [
      { src: "images/chewbacca-01.jpg", caption: "Plain" },
      { src: "images/chewbacca-02.jpg", caption: "In snow, with flames up the legs" },
    ],
    acquired: "",
    notes: "Bare-faced, no cloak, and the bandolier is the only thing he carries. The second figure is the odd one: snow through the fur and fire up the legs at the same time, which is a combination nobody else in the collection is printed with."
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


  {
    id: "the-ewok",
    name: "The Ewok",
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
    background: "An Ewok.",
    provenance:
      "Moulded brown head with a wrinkled muzzle, round white eyes and small " +
      "rounded ears, under a pale olive hood that frames the face and hangs " +
      "down the chest. Sculpted fur on the torso, short brown legs.",
    tags: ["star-wars", "ewok", "hood", "alien", "branded"],
    images: ["images/the-ewok-01.jpg"],
    acquired: "",
    notes: "Name is the species, since none was given. The hood colour is how Lego tells its Ewoks apart - Wicket\'s is dark orange and this one is pale olive - so if he is somebody in particular, say so. Fifth moulded-head alien in the collection."
  },


  {
    id: "onaconda-farr",
    name: "Onaconda Farr",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Senator",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Onaconda Farr, senator for Rodia in the Galactic Senate during the " +
      "Clone Wars.",
    provenance:
      "Moulded green Rodian head - long snout, blue bulb eyes, antennae over " +
      "the crown. Open purple sweater over a dark blue shirt with a yellow " +
      "banded belt, pale green legs, one silver hand and one grey.\n\n" +
      "Looked him up: he is Lego\'s Onaconda Farr, part SW0241, from set 8036, " +
      "the Separatist Shuttle, around 2009.",
    tags: ["star-wars", "rodian", "senator", "politician", "alien", "branded"],
    images: ["images/onaconda-farr-01.jpg"],
    acquired: "",
    notes: "You asked me to find the name and that is it. He is the first politician in the Star Wars corner - everybody else there flies, fights or guards something - and this collection has its own senate too, since the Prince served in one before he had the title."
  },


  {
    id: "young-boba-fett",
    name: "Young Boba Fett",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [
      { to: "boba-fett", label: "The man he becomes" },
    ],
    rating: 0,
    background:
      "Boba Fett as a boy, before any of it.",
    provenance:
      "Black bowl-cut hair, a plain yellow face with heavy brows and a flat " +
      "mouth. A pale blue tunic with a dark belt and a laced collar, dark navy " +
      "arms, pale blue legs. No armour and no helmet.",
    tags: ["star-wars", "boba-fett", "child", "branded", "boy", "unarmoured"],
    images: ["images/young-boba-fett-01.jpg"],
    acquired: "",
    notes: "Split from the armoured Boba on your say-so, which breaks the one-entry-per-character rule on purpose and is the first time this collection has done that. The boy is good and the man is not, and a single card could not hold both once the sides differed - the faction is what the two decks are built on, so he would have had to sit on one of them and be wrong on the other. Linked to his older self, which draws a line straight across the gap between the decks. Second child in the Star Wars corner."
  },

  {
    id: "boba-fett",
    name: "Boba Fett",
    variant: "Three figures, in the armour",
    faction: "bad",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Bounty Hunter",
    group: "",
    location: "",
    relations: [
      { to: "young-boba-fett", label: "The boy he was" },
    ],
    rating: 0,
    background:
      "Boba Fett, in the armour. Three figures of him, and he is an enemy of " +
      "this world.\n\nThe boy he used to be has a card of his own, on the other deck.",
    provenance:
      "Three suits of one armour.\n\n" +
      "Plain: a green helmet with a brown T-visor, a white and green chest " +
      "plate over a brown belt, pale grey arms and legs. Clean, bright, and " +
      "printed with almost nothing.\n\n" +
      "In detail: the same suit done properly - the helmet green with a dark " +
      "red stripe over the crown and a deep red visor, the chest plate worked " +
      "in green panels and silver scoring, a braid of Wookiee scalps at one " +
      "shoulder, a brown bandolier, a red belt, grey arms, pale grey legs.\n\n" +
      "Weathered: the same helmet shape gone dark, the visor worn through to " +
      "silver, the body black and grey and scuffed all over, one yellow " +
      "pauldron, a brown bandolier at the waist, yellow knee plates.\n\n" +
      "The printing is the whole story - the same man rendered plainly, then " +
      "properly, then beaten to pieces.",
    tags: ["villain", "star-wars", "boba-fett", "branded", "bounty-hunter", "mandalorian", "armour", "three-figures"],
    images: [
      { src: "images/boba-fett-01.jpg", caption: "The armour, plain" },
      { src: "images/boba-fett-02.jpg", caption: "The armour, in detail" },
      { src: "images/boba-fett-03.jpg", caption: "The armour, weathered" }
    ],
    acquired: "",
    notes: "He was filed good for the whole life of this collection and the world note on branded villains named him as the proof that bought figures got absorbed onto the winning side. That note is rewritten now, because he is the counter-example instead. Seventh branded villain, fifth of them out of Star Wars. Three photographs of one man on one card still, but the boy is no longer among them - he is linked from here and filed on the other deck."
  },


  {
    id: "han-solo",
    name: "Han Solo",
    variant: "Two outfits",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "Han Solo, in cold-weather gear.",
    provenance:
      "Two figures of the same man. One is in a navy parka with the fur-lined " +
      "hood up round the face, a satchel across the chest, a tool belt and an " +
      "ice axe printed down one thigh. The other is bare-headed, brown hair " +
      "swept back, in the black waistcoat over a white shirt with a gun belt " +
      "slung across the hip and blue trousers with the stripe down the seam.",
    tags: ["star-wars", "han-solo", "parka", "cold-weather", "branded"],
    images: [
      { src: "images/han-solo-01.jpg", caption: "In the parka" },
      { src: "images/han-solo-02.jpg", caption: "In the waistcoat" },
    ],
    acquired: "",
    notes: "In the parka rather than the waistcoat, which puts him in the same weather as the Winter Troopers - their leader is in the same white cold-weather kit from the same source. He is also the only figure in the Star Wars corner carrying an ice axe. The second figure is him as everybody pictures him, and the two together are the whole of his wardrobe: one for the cold and one for everything else."
  },


  {
    id: "c-3po",
    name: "C-3PO",
    variant: "Two figures",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Droid",
    group: "The Droids",
    location: "",
    relations: [],
    rating: 0,
    background: "C-3PO.",
    provenance:
      "Two figures of him, both gold from head to foot in a metallic finish " +
      "rather than a printed one. The later one has a deeper pearl gold, a " +
      "sharper moulded face, and the wiring across the midriff drawn in far " +
      "more detail than the first.",
    tags: ["star-wars", "droid", "c-3po", "gold", "branded"],
    images: [
      { src: "images/c-3po-01.jpg", caption: "The earlier one" },
      { src: "images/c-3po-02.jpg", caption: "The later one" },
    ],
    acquired: "",
    notes: "First droid from the films here. This collection already has several of its own - the radar robot who was hacked and made to watch himself attack people, the scrap-built dock robot, the Defense Bot - so he arrives into a world that has thinking machines and treats them as people. He has seven astromechs beside him now, which makes a group of them. Two figures of him on one card, and they are the clearest pair here for showing how much finer the printing got between one decade and the next."
  },


  {
    id: "rotta-the-hutt",
    name: "Rotta the Hutt",
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
    background: "Rotta the Hutt, a Huttlet.",
    provenance:
      "One moulded pale green piece from head to tail - no legs, no torso, no " +
      "neck. Ridged belly, heavy brow folds, two stubby arms and slit yellow " +
      "eyes. He does not come apart into standard pieces at all.",
    tags: ["star-wars", "hutt", "child", "alien", "one-piece", "branded"],
    images: ["images/rotta-the-hutt-01.jpg"],
    acquired: "",
    notes: "The least minifigure-shaped figure in the collection - no legs and no torso, where even the Kaminoan and Chewbacca keep the standard build under their moulding. Third child in the Star Wars corner, after the boy Anakin and the boy Boba."
  },


  {
    id: "yoda",
    name: "Yoda",
    variant: "Two moulds",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Jedi",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "Yoda.",
    provenance:
      "Two figures of the same man. The older has a duller grey-green head " +
      "with the eyes moulded rather than painted, and a plain cream robe with " +
      "a brown belt and two pouches. The later one has a brighter green head " +
      "with the eyes properly printed, and a cream robe over an orange " +
      "undershirt. Both have pale green hands and short cream legs.",
    tags: ["star-wars", "jedi", "yoda", "alien", "branded"],
    images: [
      { src: "images/yoda-01.jpg", caption: "The older mould" },
      { src: "images/yoda-02.jpg", caption: "The later mould" },
    ],
    acquired: "",
    notes: "One entry, two figures - the same man in two mouldings rather than two points in his life, which is a different reason for a second photo than Luke or Anakin had. Seventh Jedi from the films. He and Rotta are the only two here who stand on short legs by design rather than because they are children."
  },


  {
    id: "princess-leia",
    name: "Princess Leia",
    variant: "Three outfits",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "Princess Leia.",
    provenance:
      "Two figures of the same woman. One has long brown hair swept over the " +
      "shoulder, red lipstick, a pale yellow jacket with dark toggle fastenings " +
      "and stitched seams, mismatched grey and brown sleeves, white legs. The " +
      "other has her hair up in a coil and wears a worked metal halter over a " +
      "red drape, bare arms. A third has her in the long white gown with a " +
      "silver disc belt at the waist and the hair coiled over both ears.",
    tags: ["star-wars", "leia", "princess", "branded"],
    images: [
      { src: "images/princess-leia-03.jpg", caption: "In the white gown" },
      { src: "images/princess-leia-01.jpg", caption: "In the cold-weather jacket" },
      { src: "images/princess-leia-02.jpg", caption: "Held captive by Jabba" },
    ],
    acquired: "",
    notes: "Second woman in the Star Wars corner, after Ahsoka - twenty-nine figures there and two of them are women. She is also the third royal title in the collection, alongside the Prince and the Space Princess, and the only one of the three from outside this world. Two figures on one card, and they are as far apart as two pictures of one person get here - buttoned to the chin against the cold in one, held in chains in another. The white gown is the third, and it is the only one of the three where she is dressed as what her title says she is."
  },


  {
    id: "greedo",
    name: "Greedo",
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
    background: "Greedo.",
    provenance:
      "Moulded blue-green Rodian head - long snout, black bulb eyes, antennae " +
      "over the crown. Pale yellow open jerkin over a ribbed pale blue shirt, " +
      "brown belt, pale blue arms and legs.",
    tags: ["star-wars", "rodian", "greedo", "bounty-hunter", "alien", "branded"],
    images: ["images/greedo-01.jpg"],
    acquired: "",
    notes: "Second Rodian here, after Senator Onaconda Farr - same moulded head, different colour. They are the first species in this collection represented by two named individuals rather than a named one and a crowd. Filed good by the standing rule, since you have not said otherwise."
  },


  {
    id: "kai",
    name: "Kai",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Ninjago",
    rank: "",
    role: "Ninja",
    group: "The Ninja",
    location: "",
    relations: [
      { to: "the-false-kai", label: "Impersonated by" },
    ],
    rating: 0,
    background: "Kai, the red ninja.",
    provenance:
      "Red wrap hood covering everything but a yellow band across the eyes, " +
      "brows down hard. Red gi crossed with brown rope, a gold flame crest at " +
      "the chest, grey sash and black hands.",
    tags: ["ninjago", "ninja", "red", "fire", "hood", "branded"],
    images: ["images/kai-01.jpg"],
    acquired: "",
    notes: "Opens an eleventh theme. Only one figure of him so far, where Jay and Zane arrived with two apiece."
  },


  {
    id: "jay",
    name: "Jay",
    variant: "Two figures",
    faction: "good",
    origin: "branded",
    theme: "Ninjago",
    rank: "",
    role: "Ninja",
    group: "The Ninja",
    location: "",
    relations: [],
    rating: 0,
    background: "Jay, the blue ninja.",
    provenance:
      "Two figures of the same man. The first is in a plain blue hood and a " +
      "blue gi crossed with brown rope, a gold crest at the chest and a dark " +
      "sash. The second has a silver crest riveted to the brow of the hood, a " +
      "grey shoulder wrap and a white buckled belt, and one grey arm against " +
      "one blue.",
    tags: ["ninjago", "ninja", "blue", "hood", "branded"],
    images: [
      { src: "images/jay-01.jpg", caption: "In the plain hood" },
      { src: "images/jay-02.jpg", caption: "Crested hood, with armour" },
    ],
    acquired: "",
    notes: "Two figures, one card - the same man in ordinary kit and in armour, which is a third reason for a second photo after age and moulding."
  },


  {
    id: "zane",
    name: "Zane",
    variant: "Three figures",
    faction: "good",
    origin: "branded",
    theme: "Ninjago",
    rank: "",
    role: "Ninja",
    group: "The Ninja",
    location: "",
    relations: [],
    rating: 0,
    background: "Zane, the white ninja.",
    provenance:
      "Two figures of the same man. One is unhooded - pale swept hair over a " +
      "plain yellow face - in a white gi printed with a gold dragon breathing " +
      "blue ice, silver sash. The other is hooded with a gold crest at the " +
      "brow, in white with brown straps and a cream sash. A third is in " +
      "winter kit - a fur-brimmed grey cap, a heavy white face wrap, pale blue " +
      "eyes, a quiver of black arrows at the back and a snowflake on the " +
      "shoulder.",
    tags: ["ninjago", "ninja", "white", "ice", "dragon", "branded"],
    images: [
      { src: "images/zane-01.jpg", caption: "Unmasked" },
      { src: "images/zane-02.jpg", caption: "Hooded, with the gold crest" },
      { src: "images/zane-03.jpg", caption: "In winter kit, with a bow" },
    ],
    acquired: "",
    notes: "The unmasked figure is the point of this card - of the three ninja here, he is the only one whose face has been seen, and Kai and Jay are both still behind cloth. Three figures on his card now, and the third is the only ninja here carrying a bow - everyone else in both ninja traditions works with blades."
  },


  {
    id: "cole",
    name: "Cole",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Ninjago",
    rank: "",
    role: "Ninja",
    group: "The Ninja",
    location: "",
    relations: [],
    rating: 0,
    background: "Cole, the black ninja.",
    provenance:
      "Unhooded - heavy dark hair over a plain yellow face, mouth set flat. " +
      "Black gi with scaled shoulder panels and pale wrapping, silver " +
      "shoulder guards clipped over the neck, silver hands.",
    tags: ["ninjago", "ninja", "black", "unmasked", "armour", "branded"],
    images: ["images/cole-01.jpg"],
    acquired: "",
    notes: "Second ninja here whose face has been seen, after the unmasked Zane. Kai and Jay are both still behind cloth."
  },


  {
    id: "nya",
    name: "Nya",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Ninjago",
    rank: "",
    role: "Samurai",
    group: "The Ninja",
    location: "",
    relations: [],
    rating: 0,
    background: "Nya, in samurai armour.",
    provenance:
      "Black war helmet with silver horns swept up from the brow, a red " +
      "snarling face-guard clamped round the jaw, and her own face - lashes, " +
      "level brows - showing through the gap. Grey breastplate and shoulder " +
      "plates over red, red skirted legs.",
    tags: ["ninjago", "samurai", "armour", "helmet", "red", "branded"],
    images: ["images/nya-01.jpg"],
    acquired: "",
    notes: "First woman in the Ninjago group, and the only one of the five in plate rather than cloth. She is also the second samurai in this collection - the first is the Shogun who trained the Blue-Haired Ninja, so both traditions here now have one."
  },


  {
    id: "sokka",
    name: "Sokka",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Avatar: The Last Airbender",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "Sokka.",
    provenance:
      "Plain mid-blue torso and arms over dark navy legs, brown hair, blue " +
      "eyes and a crooked grin. Not a printed piece anywhere on him - no " +
      "Water Tribe markings, no belt, nothing.",
    tags: ["avatar-the-last-airbender", "water-tribe", "branded"],
    images: ["images/sokka-01.jpg"],
    acquired: "",
    notes: "Opens a twelfth theme. Worth recording plainly: the figure carries no character printing at all, so he is Sokka because you say he is, not because the parts say so - which puts him closer to how the custom half of this collection works than to how the branded half does."
  },


  {
    id: "the-dwarf-soldier",
    name: "The Dwarf Soldier",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Soldier",
    group: "The Dwarves",
    location: "",
    relations: [],
    rating: 0,
    background: "A dwarf soldier.",
    provenance:
      "Ginger hair swept back and a full ginger beard across a brown face, " +
      "one tooth showing in the grin. Red tunic with a white fur collar and " +
      "two buckled belts, mismatched arms - one black, one black and cream " +
      "with a pauldron - and black legs.",
    tags: ["dwarf", "soldier", "beard", "small-folk"],
    images: [
      { src: "images/the-dwarf-soldier-01.jpg", caption: "The figure" },
      { src: "images/the-dwarves-adventure-01.jpg", caption: "Out in the grass with the Dwarf Archer" },
    ],
    acquired: "",
    notes: "His arrival makes three dwarves, so they are a group now - him, the Dwarf King and the Dwarf Librarian, who were both sitting loose until today. The same thing happened to the Winter Troopers and the Enforcer Squad: two of a kind are not an organisation, three are."
  },


  {
    id: "the-dwarf-archer",
    name: "The Dwarf Archer",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Archer",
    group: "The Dwarves",
    location: "",
    relations: [],
    rating: 0,
    background: "A dwarf archer.",
    provenance:
      "Dark green hood with pale antlers rising from the crown, a brown cloth " +
      "cape over the shoulders. Light green tunic printed with a necklace of " +
      "claws, a quiver strap across the chest and pouches at the waist. Dark " +
      "green legs, stubbled chin, open grin.",
    tags: ["dwarf", "archer", "hunter", "antlers", "small-folk"],
    images: [
      { src: "images/the-dwarf-archer-01.jpg", caption: "The figure" },
      { src: "images/the-dwarves-adventure-01.jpg", caption: "Out in the grass with the Dwarf Soldier" },
    ],
    acquired: "",
    notes: "Fourth dwarf, a day after they became a group at all. He is the only one of them dressed for the woods rather than for a hall - the King, the Librarian and the Soldier are all indoor or battlefield people, and he is out hunting. The second photograph puts him out there with the Soldier, torches lit, undergrowth over their heads - the second picture of an event in this catalogue after Claws in the stasis chamber, and the first of one that is simply people doing something."
  },


  {
    id: "r2-d2",
    name: "R2-D2",
    variant: "Three figures",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Droid",
    group: "The Droids",
    location: "",
    relations: [],
    rating: 0,
    background: "R2-D2.",
    provenance:
      "Two figures of him, and the pair together are a lesson in how plastic " +
      "ages. One has yellowed right through - more than anything else in the " +
      "collection - with the blue gone chalky on the dome. The other is the " +
      "same droid still clean and white, blue still blue. A third sits between " +
      "them: the body still white, but the dome and both legs gone cream.",
    tags: ["star-wars", "droid", "astromech", "r2-d2", "aged", "branded"],
    images: [
      { src: "images/r2-d2-01.jpg", caption: "The yellowed one" },
      { src: "images/r2-d2-02.jpg", caption: "The clean one" },
      { src: "images/r2-d2-03.jpg", caption: "Part-yellowed, dome and legs" },
    ],
    acquired: "",
    notes: "Two figures on one card. The yellowed one is the most visibly aged piece in the whole collection, and standing the clean one beside it is the clearest before-and-after here of what thirty years does to white plastic. Three of him now, and the middle one is the useful part: it shows the yellowing arriving piece by piece rather than all at once, because the legs and the dome are moulded in a plastic that goes first. He is still the only named astromech - the other six are unnamed units."
  },


  {
    id: "the-blue-astromech",
    name: "The Blue Astromech",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Droid",
    group: "The Droids",
    location: "",
    relations: [],
    rating: 0,
    background: "An astromech droid.",
    provenance:
      "Same build and nearly the same livery as R2-D2 - white body, blue " +
      "dome markings - but the plastic is clean and unyellowed, and there is " +
      "a red lens on the dome that R2 does not have.",
    tags: ["star-wars", "droid", "astromech", "blue", "branded"],
    images: ["images/the-blue-astromech-01.jpg"],
    acquired: "",
    notes: "You said plainly that this is not R2, which is the only reason he is a separate card - side by side the two are close enough to be mistaken, and the red lens and the clean plastic are the whole difference."
  },


  {
    id: "the-red-astromech",
    name: "The Cone-Headed Astromech",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Droid",
    group: "The Droids",
    location: "",
    relations: [],
    rating: 0,
    background: "An astromech droid.",
    provenance:
      "Flat-topped grey cone for a head rather than the usual dome, with " +
      "three lenses across the front. White body panelled in red and grey.",
    tags: ["star-wars", "droid", "astromech", "red", "cone-head", "branded"],
    images: ["images/the-red-astromech-01.jpg"],
    acquired: "",
    notes: "Renamed from The Red Astromech once a red-domed one arrived, since the cone is the thing that actually sets him apart - a whole different series of droid rather than a repaint. He is still the only one here without a dome."
  },


  {
    id: "the-brown-astromech",
    name: "The Brown Astromech",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Droid",
    group: "The Droids",
    location: "",
    relations: [],
    rating: 0,
    background: "An astromech droid.",
    provenance:
      "Brown body with white panelling, and a dome split brown and white " +
      "with a red lens. The printing is scuffed away in patches across the " +
      "chest and the dome.",
    tags: ["star-wars", "droid", "astromech", "brown", "worn", "branded"],
    images: ["images/the-brown-astromech-01.jpg"],
    acquired: "",
    notes: "New group, The Droids, holding these four and C-3PO - my call rather than yours, made because five droids with no connections between them was worse than one grouping you can rename. This world has thinking machines of its own besides: the radar robot who was hacked, the Dock Robot, the Defense Bot, the Tin Robot and three more."
  },


  {
    id: "the-red-dome-astromech",
    name: "The Red-Domed Astromech",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Droid",
    group: "The Droids",
    location: "",
    relations: [],
    rating: 0,
    background: "An astromech droid.",
    provenance:
      "The standard dome and body, but banded in orange-red where R2 is blue " +
      "- red rungs round the crown of the dome and two red arrow stripes " +
      "across the chest.",
    tags: ["star-wars", "droid", "astromech", "red", "branded"],
    images: ["images/the-red-dome-astromech-01.jpg"],
    acquired: "",
    notes: "His arrival is why the Cone-Headed Astromech got renamed - that one was The Red Astromech until this one turned up wearing the colour on a normal dome."
  },


  {
    id: "the-horned-astromech",
    name: "The Horned Astromech",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Droid",
    group: "The Droids",
    location: "",
    relations: [],
    rating: 0,
    background: "An astromech droid.",
    provenance:
      "Blue and grey dome over a white body, same as R2, except a long grey " +
      "spike rises straight out of the top of his head. The chest printing " +
      "has rubbed thin in places.",
    tags: ["star-wars", "droid", "astromech", "horn", "antenna", "branded"],
    images: ["images/the-horned-astromech-01.jpg"],
    acquired: "",
    notes: "The horn is the only thing separating him from R2 at a glance - whether it is an antenna, a tool or damage is not something the figure says."
  },


  {
    id: "the-junk-astromech",
    name: "The Junk Astromech",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Droid",
    group: "The Droids",
    location: "",
    relations: [],
    rating: 0,
    background: "A droid built out of whatever was to hand.",
    provenance:
      "Nothing moulded about him - he is assembled. A blue dish on one side " +
      "of the head and a ribbed barrel on the other, a black rod through an " +
      "open frame above, a panelled grey body with yellow markings, and two " +
      "legs under it. A gold cylinder shows through the middle.",
    tags: ["droid", "astromech", "scrap-built", "custom", "dish", "improvised"],
    images: ["images/the-junk-astromech-01.jpg"],
    acquired: "",
    notes: "Filed custom rather than branded, because he is a build and not a figure - the only droid in the group who came out of a parts box instead of a set. That puts him beside the scrap-built Dock Robot rather than beside R2, and this world has form for machines made of what was lying around."
  },


  {
    id: "lloyd",
    name: "Lloyd",
    variant: "Two figures",
    faction: "good",
    origin: "branded",
    theme: "Ninjago",
    rank: "",
    role: "Ninja",
    group: "The Ninja",
    location: "",
    relations: [],
    rating: 0,
    background: "Lloyd, the green ninja.",
    provenance:
      "Two figures of the same man. The first has a two-tone green hood, lime " +
      "over dark, a yellow band across the eyes, a gi scaled in lime and a " +
      "white sash. The second wears a pale blonde hair piece pushed over the " +
      "hood, so the mask covers the mouth but the head is uncovered, in a " +
      "darker green kit hung with gold rope and two straight swords - one " +
      "sheathed at the back, one in his hand.",
    tags: ["ninjago", "ninja", "green", "hood", "branded"],
    images: [
      { src: "images/lloyd-01.jpg", caption: "Hooded" },
      { src: "images/lloyd-02.jpg", caption: "Hair over the hood, swords drawn" },
    ],
    acquired: "",
    notes: "Sixth of the Ninjago group, and his green is the one colour the other five do not wear. Two figures on one card, and the second is a halfway state nobody else here has - hair over the hood, face still masked, neither covered nor uncovered."
  },


  {
    id: "the-hogwarts-professor",
    name: "The Hogwarts Professor",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Harry Potter",
    rank: "",
    role: "Professor",
    group: "Hogwarts",
    location: "",
    relations: [],
    rating: 0,
    background: "A professor at Hogwarts. Yours, not the books.",
    provenance:
      "A great grey mane of hair down past the shoulders and a white plaited " +
      "beard covering most of the chest, half-moon spectacles over a lined " +
      "face. Dark robe with a banded sash and two gold bars at the waist, " +
      "brown sleeves and brown legs.",
    tags: ["harry-potter", "professor", "wizard", "beard", "custom"],
    images: ["images/the-hogwarts-professor-01.jpg"],
    acquired: "",
    notes: "First figure in the collection that is custom inside a branded theme - your own man standing in somebody else's world, where until now the custom half and the branded half have been separate things. Placeholder name until you give him one."
  },


  {
    id: "professor-sprout",
    name: "Professor Sprout",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Harry Potter",
    rank: "",
    role: "Professor",
    group: "Hogwarts",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Pomona Sprout, who teaches Herbology at Hogwarts and is head of " +
      "Hufflepuff house.",
    provenance:
      "Dark tan pointed hat with a wide brim, earmuffs printed on it. Tan " +
      "robes torn ragged at the hem and sleeves, big patch pockets, and a " +
      "spray of leaves and berries pinned at the throat.\n\n" +
      "Looked her up for you: this is the Professor Pomona Sprout figure from " +
      "the Harry Potter Series 2 collectible minifigures, number 71028. The " +
      "earmuffs on the hat are the giveaway - she wears them to handle " +
      "mandrakes.",
    tags: ["harry-potter", "professor", "herbology", "hufflepuff", "witch", "branded"],
    images: ["images/professor-sprout-01.jpg"],
    acquired: "",
    notes: "You asked me to work out who she was and that is her. Opens a thirteenth theme, alongside your own custom professor - and the third Hogwarts figure turned up the very next batch, so they are a group now - along with Harry, Neville and Fred Weasley."
  },


  {
    id: "little-red-riding-hood",
    name: "Little Red Riding Hood",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Fairy Tales",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "Little Red Riding Hood.",
    provenance:
      "Auburn hair coiled up, freckles, a small closed smile. Dark bodice " +
      "over a white laced blouse with red cross-stitch, white sleeves, red " +
      "legs, and a real red cloth cape.",
    tags: ["fairy-tales", "red-riding-hood", "cape", "branded"],
    images: ["images/little-red-riding-hood-01.jpg"],
    acquired: "",
    notes: "Opens a fourteenth theme. She is the first figure here out of a folk tale rather than a film, a comic or a toy line - the story she comes from has no owner, which makes her the oldest character in the collection by a long way."
  },


  {
    id: "laval",
    name: "Laval",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Legends of Chima",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Laval of the Lion Tribe.",
    provenance:
      "Moulded lion head - beige fur, white muzzle, black nose, yellow eyes " +
      "and a snarl - under a spiked brown mane. Bare beige torso with a blue " +
      "harness crossed over it, a gold plate at the centre holding a round " +
      "blue stone, blue armoured skirt and gold lion heads at the knees.\n\n" +
      "Looked him up: the blue tunic, the gold harness and the blue orb at " +
      "the chest are Laval as he appears through the first season.",
    tags: ["legends-of-chima", "lion", "beast-folk", "chi", "branded"],
    images: ["images/laval-01.jpg"],
    acquired: "",
    notes: "Opens a fifteenth theme. He is the first beast-person here - the collection has aliens, droids, dwarves and a skeleton, but nobody until now who is an animal walking upright."
  },


  {
    id: "minnie-mouse",
    name: "Minnie Mouse",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Disney",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "Minnie Mouse.",
    provenance:
      "Moulded mouse head with the two round ears, white face, lashes and a " +
      "sidelong smile. Black torso and arms, cream bloomers scalloped at the " +
      "hem, black legs and white shoes. No colour anywhere on her - the whole " +
      "figure is the early black and white cartoons rather than the red dress.",
    tags: ["disney", "minnie-mouse", "black-and-white", "vintage", "branded"],
    images: ["images/minnie-mouse-01.jpg"],
    acquired: "",
    notes: "Opens a sixteenth theme. Four new themes in one batch, which has not happened before. She is also the only figure in the collection printed with no colour at all."
  },


  {
    id: "harry-potter",
    name: "Harry Potter",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Harry Potter",
    rank: "",
    role: "Student",
    group: "Hogwarts",
    location: "",
    relations: [],
    rating: 0,
    background: "Harry Potter.",
    provenance:
      "Black hair, round wire glasses, a small orange lightning scar at the " +
      "brow, and a distinctly unimpressed set to the mouth. Grey school " +
      "jumper over a striped tie, the Gryffindor lion crest on the chest, " +
      "black legs.",
    tags: ["harry-potter", "student", "gryffindor", "glasses", "scar", "branded"],
    images: ["images/harry-potter-01.jpg"],
    acquired: "",
    notes: "In school uniform rather than robes, which is the ordinary version of him rather than the wizard one."
  },


  {
    id: "neville-longbottom",
    name: "Neville Longbottom",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Harry Potter",
    rank: "",
    role: "Student",
    group: "Hogwarts",
    location: "",
    relations: [],
    rating: 0,
    background: "Neville Longbottom.",
    provenance:
      "Brown hair swept across the brow, a lopsided half-smile. Grey patterned " +
      "cardigan over a blue collared shirt and a yellow vest, dark tan legs. " +
      "Not a stitch of school uniform on him.",
    tags: ["harry-potter", "student", "gryffindor", "cardigan", "branded"],
    images: ["images/neville-longbottom-01.jpg"],
    acquired: "",
    notes: "In his own clothes where Harry is in uniform. Between them and Professor Sprout, whose subject he is famously good at, three of the six Hogwarts figures here are connected in the books in ways nobody has written down yet."
  },


  {
    id: "fred-weasley",
    name: "Fred Weasley",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Harry Potter",
    rank: "",
    role: "Student",
    group: "Hogwarts",
    location: "",
    relations: [],
    rating: 0,
    background: "One of the Weasley twins.",
    provenance:
      "Dark orange hair under a cream bobble hat patterned in grey, a dark " +
      "tan buttoned winter coat over a red scarf and a striped jumper, grey " +
      "legs.\n\n" +
      "Looked him up: Lego catalogues this coat-and-bobble-hat design as Fred " +
      "Weasley, from the Goblet of Fire.",
    tags: ["harry-potter", "student", "gryffindor", "weasley", "winter", "branded"],
    images: ["images/fred-weasley-01.jpg"],
    acquired: "",
    notes: "You said maybe Fred or George and that is exactly the right amount of doubt to have. Lego calls this one Fred, so that is the name on the card - but they are identical twins and the figures are near enough identical too, and Fred and George are two different people who could not share an entry the way one man in two outfits can. If you know it is George, say so and the name changes."
  },


  {
    id: "kingsley-shacklebolt",
    name: "Kingsley Shacklebolt",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Harry Potter",
    rank: "",
    role: "Auror",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Kingsley Shacklebolt, an Auror - a wizard whose job is catching dark " +
      "wizards.",
    provenance:
      "Blue cap sitting at an angle, ringed with metallic gold and purple " +
      "diamonds. Purple robes printed down the torso, arms and legs, with a " +
      "cloth cape blue outside and darker blue within.\n\n" +
      "Looked him up for you: this is the Kingsley Shacklebolt figure from " +
      "the Harry Potter Series 2 collectible minifigures, 71028, number " +
      "thirteen of sixteen. It was his first minifigure ever.",
    tags: ["harry-potter", "auror", "ministry", "cape", "branded"],
    images: ["images/kingsley-shacklebolt-01.jpg"],
    acquired: "",
    notes: "You asked me to work out who he was and that is him. Deliberately left out of the Hogwarts group - he is Ministry rather than school, the only Harry Potter figure here who is not a pupil or a teacher, and lumping him in would have been the vague sort of grouping you told me to avoid."
  },


  {
    id: "elizabeth-swann",
    name: "Elizabeth Swann",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Pirates of the Caribbean",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "Elizabeth Swann.",
    provenance:
      "Long wavy light brown hair, dark red gown over a white underdress, " +
      "gold trim down every edge, and a gold medallion at the throat.\n\n" +
      "Looked her up: this is Elizabeth Swann from set 4181, Isla De La " +
      "Muerta, 2011. The medallion is not jewellery - it is one of the cursed " +
      "Aztec coins, which is the whole reason the first film happens to her.",
    tags: ["pirates-of-the-caribbean", "elizabeth-swann", "gown", "cursed-gold", "branded"],
    images: ["images/elizabeth-swann-01.jpg"],
    acquired: "",
    notes: "Your guess was right - Pirates of the Caribbean. Second figure in that theme, beside Jack Sparrow, and this world already has a pirate crew of its own for the pair of them to have never met."
  },


  {
    id: "luna-lovegood",
    name: "Luna Lovegood",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Harry Potter",
    rank: "",
    role: "Student",
    group: "Hogwarts",
    location: "",
    relations: [],
    rating: 0,
    background: "Luna Lovegood.",
    provenance:
      "Pale blonde hair, a crooked smile, and one eye drawn wide where the " +
      "other is not. Navy jumper printed all over with pink radishes, bright " +
      "pink trousers, red boots. Carries a wand.",
    tags: ["harry-potter", "student", "ravenclaw", "wand", "radishes", "branded"],
    images: ["images/luna-lovegood-01.jpg"],
    acquired: "",
    notes: "Sixth in the Hogwarts group, and the first of them holding a wand - Harry, Neville and Fred all arrived empty-handed. Her jumper is printed with radishes, which is not a mistake."
  },


  {
    id: "max-rebo",
    name: "Max Rebo",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Musician",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "Max Rebo, a keyboard player.",
    provenance:
      "One moulded pale blue piece for the whole head - a heavy trunk down " +
      "the front, two broad flaps hanging either side, and round black eyes " +
      "with white pupils. Pale blue arms, hands and legs under it.",
    tags: ["star-wars", "ortolan", "musician", "alien", "blue", "branded"],
    images: ["images/max-rebo-01.jpg"],
    acquired: "",
    notes: "First musician in the Star Wars corner, and only the fourth in the whole collection after the Bard, the Rap Star and the Ferryman. Thirty-seven Star Wars figures now and he is the only one whose job is playing an instrument."
  },


  {
    id: "woody",
    name: "Woody",
    variant: "Two figures",
    faction: "good",
    origin: "branded",
    theme: "Toy Story",
    rank: "",
    role: "",
    group: "The Toys",
    location: "",
    relations: [],
    rating: 0,
    background: "Woody, a pull-string cowboy doll.",
    provenance:
      "Two figures of the same man, built completely differently. One is an " +
      "ordinary minifigure - flat printed face under the brim, yellow arms, " +
      "blue legs with brown boots. The other has a fully sculpted head with " +
      "a long jaw, a moulded nose and brown eyes, which makes him read as a " +
      "person where the first reads as a minifigure. Both wear the cow-print " +
      "waistcoat, the yellow plaid shirt and the sheriff star.",
    tags: ["toy-story", "cowboy", "sheriff", "doll", "branded"],
    images: [
      { src: "images/woody-01.jpg", caption: "The plain minifigure head" },
      { src: "images/woody-02.jpg", caption: "The sculpted head" },
    ],
    acquired: "",
    notes: "Opens a seventeenth theme. Two figures, one card - and the reason for the second photo is new again: not age, not moulding variation, but two different ideas of how much of a face a figure should have. He is also the fourth western figure here, after the Sheriff, the Outlaw and Cowboy Spider-Man, and the only one of the four who is a toy pretending to be a cowboy."
  },


  {
    id: "buzz-lightyear",
    name: "Buzz Lightyear",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Toy Story",
    rank: "",
    role: "Space Ranger",
    group: "The Toys",
    location: "",
    relations: [],
    rating: 0,
    background: "Buzz Lightyear, a Space Ranger. Also a toy.",
    provenance:
      "Purple hood over a white face with a curl of hair printed on it, " +
      "under a clear domed helmet. Green and white suit with a lit control " +
      "panel at the chest, and a pair of wings spread out behind him, " +
      "striped red and white at the tips.",
    tags: ["toy-story", "space-ranger", "wings", "helmet", "doll", "branded"],
    images: ["images/buzz-lightyear-01.jpg"],
    acquired: "",
    notes: "This collection is full of space forces - the Space Militia, the Space Police, Classic Space, the Royal Space Academy, Mars Mission, the Green Rangers - and he is the only spaceman in it who is not really one. He and Woody were left ungrouped at two last time, because two is not an organisation by the rule the Winter Troopers and the dwarves set - the third toy arrived in the very next batch, so they are The Toys now."
  },


  {
    id: "the-toy-alien",
    name: "The Toy Alien",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Toy Story",
    rank: "",
    role: "",
    group: "The Toys",
    location: "",
    relations: [],
    rating: 0,
    background: "One of the three-eyed aliens.",
    provenance:
      "Moulded green head with three eyes in a row, pointed ears and a knob " +
      "on a stalk rising from the crown. Blue suit with a pink collar and a " +
      "ringed planet on the chest, green hands.",
    tags: ["toy-story", "alien", "three-eyed", "claw", "branded"],
    images: ["images/the-toy-alien-01.jpg"],
    acquired: "",
    notes: "Third Toy Story figure, which makes The Toys a group - Woody and Buzz were left loose last batch waiting for exactly this. He is also one of a crowd rather than a person, the way the Gungan Soldiers and the astromechs are, but he is the only one of that sort catalogued alone rather than as a unit."
  },


  {
    id: "goku",
    name: "Goku",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Dragon Ball",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [
      { to: "perfect-cell", label: "His enemy" },
    ],
    rating: 0,
    background: "Goku, gone Super Saiyan.",
    provenance:
      "Spiked yellow hair moulded into a flame, green eyes, mouth open in a " +
      "shout. Orange gi torn ragged across the chest and thighs with the skin " +
      "showing through, blue undershirt and wristbands, blue boots.\n\n" +
      "Worth recording: Lego has never made a Dragon Ball figure. The " +
      "printing is sharper and busier than anything official in the " +
      "collection, which means this one came from somewhere else.",
    tags: ["dragon-ball", "super-saiyan", "martial-arts", "third-party"],
    images: ["images/goku-01.jpg"],
    acquired: "",
    notes: "Opens an eighteenth theme. He is the first figure here that is a branded character on a piece Lego never made, and this world already has a word for that sort of thing - the Knock-offs, who came from other makers and went to war. If he belongs with the Defector, the Brute Prince, the Car Repairman and the Red Spartan, say so and he moves."
  },


  {
    id: "the-mandalorian-armorer",
    name: "The Mandalorian Armorer",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Armorer",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "The Armorer, who forges beskar for the Mandalorians and keeps their " +
      "creed.",
    provenance:
      "Gold horned helmet with a narrow visor and four black spikes along the " +
      "crown, a real fur mantle across the shoulders, a dark red chest plate, " +
      "and a cloth kilt over printed legs.",
    tags: ["star-wars", "mandalorian", "armorer", "beskar", "fur", "helmet", "branded"],
    images: ["images/the-mandalorian-armorer-01.jpg"],
    acquired: "",
    notes: "Named The Mandalorian Armorer rather than just The Armorer, because this collection already has one - a knight out of the Gunless Realm who came to the primary dimension, picked up a firearm and turned out to be the best shot in it. Two armorers now, one in each of two worlds, and neither has anything to do with the other unless you say so. Second Mandalorian here, after the bounty hunter."
  },


  {
    id: "kelleran-beq",
    name: "Kelleran Beq",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Jedi",
    group: "",
    location: "",
    relations: [
      { to: "grogu", label: "Carried him out" },
    ],
    rating: 0,
    background:
      "Kelleran Beq, the Jedi who got Grogu out of the temple when the clones " +
      "came for the younglings, and off the planet alive.",
    provenance:
      "Brown head with a thin moustache and a pointed beard, no hair piece. " +
      "Cream Jedi robes with gold thread worked through the wrap, a dark " +
      "brown cloth cape.\n\n" +
      "Looked him up for you: Kelleran Beq, from set 75378, the BARC Speeder " +
      "Escape, 2024. He is from the Order 66 flashback in the third season of " +
      "the Mandalorian, and is played by Ahmed Best - the same man who played " +
      "Jar Jar Binks, who is also in this collection.",
    tags: ["star-wars", "jedi", "kelleran-beq", "order-66", "cape", "branded"],
    images: ["images/kelleran-beq-01.jpg"],
    acquired: "",
    notes: "You asked and that is him. Eighth Jedi from the films here. The link to Grogu is written because you told me it yourself - he is the one who rescued him - so it is your lore, not the films spilling in."
  },


  {
    id: "grogu",
    name: "Grogu",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [
      { to: "kelleran-beq", label: "Carried out by" },
    ],
    rating: 0,
    background: "Grogu, the child.",
    provenance:
      "A moulded pale green head nearly as large as the body, with ears that " +
      "reach out past the shoulders and two enormous black eyes. Cream tunic " +
      "with a torn print, tiny green hands that are just two stubs, and short " +
      "cream legs.",
    tags: ["star-wars", "grogu", "child", "alien", "branded"],
    images: ["images/grogu-01.jpg"],
    acquired: "",
    notes: "The smallest figure in the collection - shorter than Rotta the Hutt, with less of a body than any of the dwarves. Fourth child in the Star Wars corner, after the two boy Anakins and the boy Boba."
  },


  {
    id: "the-umbaran-soldier",
    name: "The Umbaran Soldier",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Soldier",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "An Umbaran soldier.",
    provenance:
      "Smooth white helmet with a wide gold-rimmed visor, and behind it a " +
      "pale violet face with no whites to the eyes at all. White and navy " +
      "armour printed on a grey torso, grey legs, silver hands.",
    tags: ["star-wars", "umbaran", "soldier", "alien", "helmet", "branded"],
    images: ["images/the-umbaran-soldier-01.jpg"],
    acquired: "",
    notes: "His eyes are the whole figure - the helmet is ordinary, and then you look through the visor and there is nothing human behind it. Filed good by the standing rule, though the Umbarans fought the Republic in their own material."
  },


  {
    id: "widow",
    name: "Widow",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Marvel",
    rank: "",
    role: "Horse",
    group: "",
    location: "",
    relations: [
      { to: "cowboy-spider-man", label: "Her rider" },
    ],
    rating: 0,
    background: "Widow, a horse in a spider mask.",
    provenance:
      "A foal mould, white and grey with a brown mane, and a red spider mask " +
      "printed across the muzzle with the white eye shapes and the web lines " +
      "all present.\n\n" +
      "Looked her up: she is Widow, the horse who comes with Web-Slinger in " +
      "the Spider-Man: Across the Spider-Verse minifigures, set 71050 - which " +
      "means she came out of the same packet as the Cowboy Spider-Man already " +
      "in this collection. He is her rider.",
    tags: ["marvel", "horse", "spider-verse", "animal", "mask", "branded"],
    images: ["images/widow-01.jpg"],
    acquired: "",
    notes: "The first animal catalogued here in her own right - the monkey shares the Explorer card, and nothing else four-legged has an entry. She is also the only figure in the collection with no arms, no hands and no face of her own."
  },


  {
    id: "padme-amidala",
    name: "Padme Amidala",
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
    background: "Padme Amidala.",
    provenance:
      "Brown hair swept up and back, red lipstick, level brows. Blue jacket " +
      "open over a grey top, a blue sash at the waist with a red stone set in " +
      "it, black legs. A yellow head, which dates the figure to the older run.",
    tags: ["star-wars", "padme", "senator", "branded"],
    images: ["images/padme-amidala-01.jpg"],
    acquired: "",
    notes: "Third woman in the Star Wars corner, after Ahsoka and Leia, out of forty-three figures. Worth saying once: with her here, the collection now holds Anakin, Padme, Luke and Leia - a whole family, on four separate cards, none of them linked to each other. That is yours to write or leave alone."
  },


  {
    id: "the-a-wing-pilot",
    name: "The A-Wing Pilot",
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
    background: "A rebel A-wing pilot.",
    provenance:
      "Dark grey helmet striped red and white over the crown, with a " +
      "translucent yellow visor pulled down over a plain yellow face. Green " +
      "flight suit with a grey control box printed at the chest, black hands.\n\n" +
      "Double-checked as you asked: you were right. This is the A-wing pilot, " +
      "Lego part sw0031 - the oldest of the seven versions they have made, " +
      "first released in 2000, and the one with the classic yellow head and " +
      "the see-through yellow visor rather than a flesh face.",
    tags: ["star-wars", "rebel", "pilot", "a-wing", "green", "vintage", "branded"],
    images: ["images/the-a-wing-pilot-01.jpg"],
    acquired: "",
    notes: "Ninth in the Rebel Pilots, and the odd one out in it - everybody else in that squadron flies X-wings in orange, and he is in green for a different ship. Also one of the oldest figures in the whole collection by manufacture, at twenty-five years."
  },


  {
    id: "the-arctic-explorers",
    name: "The Arctic Explorers",
    variant: "Six of them",
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
      "An adventure squad of arctic explorers and mountaineers. There are six " +
      "of them.",
    provenance:
      "All six carry the same badge - a white mountain on pale blue with " +
      "ARCTIC in red under it. Four are in green parkas with white fur hoods " +
      "and blue snow goggles, one of those with a rainbow visor. One wears a " +
      "green cap and sunglasses instead of a hood, with A2 stencilled on his " +
      "chest. The last is in grey and blue with a black-lined hood.",
    tags: ["arctic", "explorer", "mountaineer", "unit", "six", "cold-weather", "expedition"],
    images: [{ src: "images/the-arctic-explorers-01.jpg", caption: "All six" }],
    acquired: "",
    notes: "One entry for the squad, the way the US Army Soldiers and the Gungan Soldiers are done. The man in the cap is the only one showing his whole face and the only one carrying a number, which reads as the one in charge - say so and he gets his own card. This world already has cold-weather people in the Winter Troopers and the Rescue Ranger, and a whole separate Frontier Expedition and Jungle Adventurers; whether any of them have met is not written down."
  },


  {
    id: "sev",
    name: "Sev",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Clone Commando",
    group: "The Clone Commandos",
    location: "",
    relations: [],
    rating: 0,
    background: "Sev, a clone commando.",
    provenance:
      "White commando armour slashed all over with red - across the helmet " +
      "like claw marks, down the arms, across the thighs, and solid red on " +
      "the boots. Blue visor, black underlay, and a long rifle held upright.",
    tags: ["star-wars", "clone", "commando", "red", "sniper", "branded"],
    images: ["images/sev-01.jpg"],
    acquired: "",
    notes: "The red on him does not read as unit colour the way the other two commandos wear theirs - it is sprayed on in streaks and spatters, like something done by hand rather than issued."
  },


  {
    id: "fixer",
    name: "Fixer",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Clone Commando",
    group: "The Clone Commandos",
    location: "",
    relations: [],
    rating: 0,
    background: "Fixer, a clone commando.",
    provenance:
      "White commando armour marked in green - a stripe straight over the " +
      "crown of the helmet and down the faceplate, green panels on the chest, " +
      "shoulders and thighs. Blue visor, black hands.",
    tags: ["star-wars", "clone", "commando", "green", "branded"],
    images: ["images/fixer-01.jpg"],
    acquired: "",
    notes: "His markings are laid on in clean straight lines where Sev\'s are slashed - the same armour, painted by two different temperaments."
  },


  {
    id: "scorch",
    name: "Scorch",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Clone Commando",
    group: "The Clone Commandos",
    location: "",
    relations: [],
    rating: 0,
    background: "Scorch, a clone commando.",
    provenance:
      "White commando armour with yellow at the hips, thighs and boots and a " +
      "yellow flash on one arm. Plain white helmet with a blue visor, no " +
      "colour on it at all, and grey and black plating across the chest.",
    tags: ["star-wars", "clone", "commando", "yellow", "demolitions", "branded"],
    images: ["images/scorch-01.jpg"],
    acquired: "",
    notes: "New group, The Clone Commandos - and here is the thing worth knowing. In their own source these three are Delta Squad, and this collection already has a Delta Squad: six soldiers of your own, with a leader, a medic, a gunner, an artilleryman, a sniper and a rifleman. Two Delta Squads in one world. I kept them apart rather than merge two units that only share a name, but say the word and they become one. Boss has since arrived, so the commandos are all four of them now."
  },


  {
    id: "boss",
    name: "Boss",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Clone Commando",
    group: "The Clone Commandos",
    location: "",
    relations: [],
    rating: 0,
    background: "Boss, who leads the clone commandos.",
    provenance:
      "White commando armour with orange over the crown of the helmet, down " +
      "the faceplate, across one shoulder and in a wedge at the collar. Blue " +
      "visor, black hands, grey plating on the chest.",
    tags: ["star-wars", "clone", "commando", "orange", "leader", "branded"],
    images: ["images/boss-01.jpg"],
    acquired: "",
    notes: "He completes the set - Boss, Fixer, Scorch and Sev are the whole of the squad in their own material, and all four are here now. His orange is applied in the same clean deliberate way as Fixer\'s green, which puts the two of them on one side of that squad and Sev\'s slashed red on the other."
  },


  {
    id: "the-green-clone-trooper",
    name: "The Green Clone Trooper",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Clone Trooper",
    group: "The Clone Army",
    location: "",
    relations: [],
    rating: 0,
    background: "A clone trooper in green.",
    provenance:
      "A commander-pattern Phase 2 helmet - silver faceplate, flared side " +
      "panels - with a green stripe over the crown and two green dots at the " +
      "temple. Green chest armour with a yellow-edged pack printed on it, " +
      "black shoulder straps, a row of brown ammunition pouches at the belt, " +
      "and bright green boots.\n\n" +
      "Looked him up as you asked, and could not pin him down. The obvious " +
      "candidate is Commander Gree of the 41st Elite Corps, who wears green " +
      "for Kashyyyk - but Lego\'s Gree, part sw0528, is printed in dark green " +
      "and tan camouflage, and this armour is clean flat green with no camo " +
      "on it at all. So he is 41st-adjacent rather than Gree himself, and the " +
      "exact figure is still open.",
    tags: ["star-wars", "clone", "trooper", "green", "commander-helmet", "branded"],
    images: ["images/the-green-clone-trooper-01.jpg"],
    acquired: "",
    notes: "Placeholder name until the real one turns up. New group, The Clone Army, holding the regular troopers - the commandos keep their own group, the way special forces sit inside an army rather than beside it."
  },


  {
    id: "the-501st-troopers",
    name: "The 501st Troopers",
    variant: "Four of them",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Clone Trooper",
    group: "The 501st Legion",
    location: "",
    relations: [],
    rating: 0,
    background: "Troopers of the 501st. There are four of them.",
    provenance:
      "Phase 2 helmets with a blue stripe over the crown and blue down the " +
      "cheek, blue arms, blue flashes at the knees. Identical to each other " +
      "down to the last line. A third is the same " +
      "trooper on a later print - the blue laid on heavier over the crown, a " +
      "blue wedge at the sternum the first two do not have, and the knee bands " +
      "outlined in black. " +
      "A fourth is the same again on plain white legs, no knee bands at all.",
    tags: ["star-wars", "clone", "trooper", "501st", "blue", "unit", "two", "branded"],
    images: [
      { src: "images/the-501st-troopers-01.jpg", caption: "The first two" },
      { src: "images/the-501st-troopers-02.jpg", caption: "The third, a later print" },
      { src: "images/the-501st-troopers-03.jpg", caption: "The fourth, on plain legs" },
    ],
    acquired: "",
    notes: "One entry for the pair, the way the Enforcer Squad and the Gungan Soldiers are done. Clones are the one case where that is not a shortcut - they really are the same man twice. Captain Rex has since arrived in the same blue, so the 501st is a group of its own now rather than two men filed under the whole army."
  },


  {
    id: "commander-cody",
    name: "Commander Cody",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Clone Commander",
    group: "The Clone Army",
    location: "",
    relations: [],
    rating: 0,
    background: "Commander Cody, of the 212th.",
    provenance:
      "White Phase 1 helmet with an orange stripe over the crown and a " +
      "separate orange rangefinder clipped over the side, standing out from " +
      "the head. Orange arms, orange chevrons and blocks across the chest, " +
      "and a sunburst printed on the chin.",
    tags: ["star-wars", "clone", "commander", "212th", "orange", "rangefinder", "branded"],
    images: ["images/commander-cody-01.jpg"],
    acquired: "",
    notes: "The only clone here with a piece standing off the helmet rather than printed on it, and the only Phase 1 helmet in the group - everybody else is in the later rounded pattern."
  },


  {
    id: "the-golden-company-rifleman",
    name: "The Golden Company Rifleman",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Rifleman",
    group: "The Golden Company",
    location: "",
    relations: [],
    rating: 0,
    background: "A rifleman of the Golden Company.",
    provenance:
      "Phase 2 helmet with a yellow stripe over the crown and a yellow bar " +
      "down the faceplate between the eyes. Yellow belt pouches, yellow " +
      "bands at the hips and thighs, yellow hands, and black unit markings " +
      "on both arms.",
    tags: ["star-wars", "clone", "trooper", "rifleman", "yellow", "golden-company", "branded"],
    images: ["images/the-golden-company-rifleman-01.jpg"],
    acquired: "",
    notes: "Golden Company is your name for them rather than one I found - Lego calls this yellow pattern the 327th Star Corps - so the card takes yours. There were more of them, in the very next batch - a grenadier, a scout and a commander - so the Golden Company is a group of its own inside the army now, exactly as that line hoped."
  },


  {
    id: "the-golden-company-grenadier",
    name: "The Golden Company Grenadier",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Grenadier",
    group: "The Golden Company",
    location: "",
    relations: [],
    rating: 0,
    background: "A grenadier of the Golden Company.",
    provenance:
      "Phase 2 helmet, yellow stripe over the crown and straight down between " +
      "the eyes. A grey sash slung over one shoulder, a yellow chevron at the " +
      "collar, and yellow wedges on both thighs.",
    tags: ["star-wars", "clone", "trooper", "grenadier", "yellow", "golden-company", "branded"],
    images: ["images/the-golden-company-grenadier-01.jpg"],
    acquired: "",
    notes: "The sash across his chest is the only soft-looking thing on him, and none of the others in the company wear one."
  },


  {
    id: "the-golden-company-scout",
    name: "The Golden Company Scout",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Scout",
    group: "The Golden Company",
    location: "",
    relations: [],
    rating: 0,
    background: "A scout of the Golden Company.",
    provenance:
      "A different helmet from the rest - flat-browed with an angular visor " +
      "shelf over the eyes, and a yellow-framed respirator clamped across the " +
      "mouth with a grey filter standing out from it. Yellow belt pouches, " +
      "yellow bands at the hips.",
    tags: ["star-wars", "clone", "scout", "respirator", "yellow", "golden-company", "branded"],
    images: ["images/the-golden-company-scout-01.jpg"],
    acquired: "",
    notes: "The only one of the four in a scout helmet rather than the standard pattern, and the only clone in the whole collection wearing a breathing filter - which puts him alongside Plo Koon as someone kitted to survive the air itself."
  },


  {
    id: "the-golden-commander",
    name: "The Golden Commander",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Commander",
    group: "The Golden Company",
    location: "",
    relations: [],
    rating: 0,
    background: "The commander of the Golden Company.",
    provenance:
      "Helmet with the whole faceplate in yellow under a white visor brim, " +
      "where his men wear yellow only as a stripe. A black pauldron over one " +
      "shoulder and a brown cloth kama hanging from the belt, both real " +
      "pieces rather than printing. Yellow ammunition blocks at the waist.",
    tags: ["star-wars", "clone", "commander", "pauldron", "kama", "yellow", "golden-company", "branded"],
    images: ["images/the-golden-commander-01.jpg"],
    acquired: "",
    notes: "New group, The Golden Company, four strong - a commander, a grenadier, a scout and a rifleman, which is a whole small unit with every job covered. He is marked out the way the Troop Commander is in your own Command Staff: cloth where the rest have paint."
  },


  {
    id: "the-blaze-squad-soldier",
    name: "The Blaze Squad Soldier",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Clone Trooper",
    group: "The Clone Army",
    location: "",
    relations: [],
    rating: 0,
    background: "A soldier of Blaze Squad.",
    provenance:
      "Phase 2 helmet with an orange stripe over the crown and a short orange " +
      "flash at the nose. Orange wedges across the chest and down both thighs, " +
      "and the white scuffed grey in places where it has been handled.",
    tags: ["star-wars", "clone", "trooper", "orange", "blaze-squad", "branded"],
    images: ["images/the-blaze-squad-soldier-01.jpg"],
    acquired: "",
    notes: "Blaze Squad is your name for them. Only one of him so far, so he stays in the Clone Army until a second turns up and makes the squad a group - the same rule the Winter Troopers and the dwarves went by."
  },


  {
    id: "the-wolfpack-soldier",
    name: "The Wolfpack Soldier",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Clone Trooper",
    group: "The Wolfpack",
    location: "",
    relations: [],
    rating: 0,
    background: "A soldier of the Wolfpack.",
    provenance:
      "Grey and black markings throughout - three bars over the crown of the " +
      "helmet, grey teeth and claw shapes worked across the faceplate, and a " +
      "grey pauldron on one shoulder. No colour on him anywhere.",
    tags: ["star-wars", "clone", "trooper", "grey", "wolfpack", "pauldron", "branded"],
    images: ["images/the-wolfpack-soldier-01.jpg"],
    acquired: "",
    notes: "Wolfpack is your name for them. The markings on his faceplate read as a muzzle rather than as unit stripes - he is the only clone here whose helmet has been painted into an animal. A scout has since joined him, so the Wolfpack is a group of two. That breaks the three-figure rule the Winter Troopers and the dwarves set, and the difference is worth naming: those two were loose figures with no unit name until a third arrived and gave them one. The Wolfpack had a name from the start, because you gave it one. A named unit is an organisation by declaration; two anonymous figures of a kind are not."
  },


  {
    id: "the-camo-scouts",
    name: "The Camo Scouts",
    variant: "Two of them",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Scout",
    group: "The Clone Army",
    location: "",
    relations: [],
    rating: 0,
    background: "Two scouts in camouflage.",
    provenance:
      "Camouflage printed over every single piece - helmet, shoulders, torso, " +
      "arms, legs, boots - in mottled greens with no white showing anywhere. " +
      "Scout helmets with the flat visor brim and a silver respirator box at " +
      "the mouth. One carries a long black rifle. Identical to each other.",
    tags: ["star-wars", "clone", "scout", "camouflage", "respirator", "unit", "two", "branded"],
    images: [{ src: "images/the-camo-scouts-01.jpg", caption: "Both of them" }],
    acquired: "",
    notes: "The only figures in the whole collection printed in camouflage from head to foot - everybody else in armour wears their unit colour as a stripe or a panel on white. These two are the only ones dressed to not be seen."
  },


  {
    id: "the-wolfpack-scout",
    name: "The Wolfpack Scout",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Scout",
    group: "The Wolfpack",
    location: "",
    relations: [],
    rating: 0,
    background: "A scout of the Wolfpack.",
    provenance:
      "White scout helmet striped dark olive over the crown like an animal\'s " +
      "back, with a silver respirator box at the mouth. A black pauldron on " +
      "one shoulder, an olive flash on the other, and a dark cloth kama at the " +
      "waist. Red marks on the toes of both boots.",
    tags: ["star-wars", "clone", "scout", "wolfpack", "pauldron", "kama", "respirator", "branded"],
    images: ["images/the-wolfpack-scout-01.jpg"],
    acquired: "",
    notes: "His arrival makes the Wolfpack a group of two. The stripes on his helmet run the same way as the teeth on the other Wolfpack figure - both painted into an animal rather than marked with a unit stripe, which is a thing only this outfit does."
  },


  {
    id: "the-187th-commander",
    name: "The 187th Commander",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Commander",
    group: "The 187th Legion",
    location: "",
    relations: [],
    rating: 0,
    background: "The commander of the 187th Legion.",
    provenance:
      "Phase 1 helmet with a purple stripe over the crown and purple worked " +
      "around the eyes in a flared mask shape. Purple pauldrons on both " +
      "shoulders rather than one, a black ammunition pack clipped across the " +
      "chest, a purple belt and purple knee markings.",
    tags: ["star-wars", "clone", "commander", "187th", "purple", "pauldron", "branded"],
    images: ["images/the-187th-commander-01.jpg"],
    acquired: "",
    notes: "Purple is a colour no other unit here wears, and he is the only clone in the collection with a pauldron on both shoulders instead of one. He was alone in the Clone Army until the 187th had more than a commander, and now it does - two soldiers in his purple arrived and the legion is a group of its own."
  },


  {
    id: "the-librarian",
    name: "The Librarian",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Librarian",
    group: "",
    location: "Lego City",
    relations: [],
    rating: 0,
    background: "A librarian.",
    provenance:
      "Dark brown bobbed hair, black-framed glasses, and a wide open smile - " +
      "one of the few faces here with the teeth showing. Cream jumper knitted " +
      "in orange and yellow argyle over a collared shirt, mismatched white and " +
      "dark grey sleeves, black legs.",
    tags: ["civilian", "librarian", "glasses", "argyle", "lego-city"],
    images: ["images/the-librarian-01.jpg"],
    acquired: "",
    notes: "Second librarian in the collection, after the Dwarf Librarian - who was raised to the job and did not do it. This one appears to be actually doing it. Placeholder name; filed in Lego City by default."
  },


  {
    id: "captain-antilles",
    name: "Captain Antilles",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Captain",
    group: "The Rebel Troopers",
    location: "",
    relations: [],
    rating: 0,
    background: "Captain Antilles, a rebel ship's captain.",
    provenance:
      "Open-faced rebel helmet - a brown dome in a white rim, with the chin " +
      "strap drawn down both cheeks - over a lined face with a black beard. " +
      "Tan officer\'s jacket with a rank plate at the chest, pocket flaps, and " +
      "a badge pinned at the waist. Olive legs.",
    tags: ["star-wars", "rebel", "captain", "officer", "helmet", "branded"],
    images: ["images/captain-antilles-01.jpg"],
    acquired: "",
    notes: "First rebel here who is not a pilot - the other nine all fly, so the group is called The Rebel Pilots and he does not fit in it. He is grouped instead with the Rebel Troopers, who arrived a batch later in the same open-faced helmet - an officer and the men he would be commanding, which is a better fit than a squadron of starfighter pilots. If the Rebellion should be one group rather than two, say so and they merge."
  },


  {
    id: "the-rebel-troopers",
    name: "The Rebel Troopers",
    variant: "Nine of them, two patterns",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Soldier",
    group: "The Rebel Troopers",
    location: "",
    relations: [],
    rating: 0,
    background: "Rebel troopers. There are nine of them.",
    provenance:
      "All nine wear the same thing: a brown and white open-faced helmet with " +
      "the chin strap drawn down both cheeks, a blue-grey shirt and tie under " +
      "a black vest, and pale grey legs. Seven are the older pattern, with a " +
      "plain vest and a single silver buckle. Two are a later moulding - the " +
      "vest printed with pockets, straps and a brown belt, and two different " +
      "faces rather than one repeated.",
    tags: ["star-wars", "rebel", "soldier", "unit", "nine", "branded"],
    images: [
      { src: "images/the-rebel-troopers-01.jpg", caption: "One of them" },
      { src: "images/the-rebel-troopers-02.jpg", caption: "The seven older ones" },
      { src: "images/the-rebel-troopers-03.jpg", caption: "The two newer ones" },
    ],
    acquired: "",
    notes: "One entry for all nine, the way the US Army Soldiers and the Arctic Explorers are done, with the two mouldings on the same card the way R2 and C-3PO have theirs. New group, The Rebel Troopers, holding them and Captain Antilles - the officer in the same helmet who had nobody to stand with until now. Largest unit in the collection after the ten US Army Soldiers."
  },


  {
    id: "the-snowtroopers",
    name: "The Snowtroopers",
    variant: "Three of them, two patterns",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Soldier",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "Snowtroopers. There are three of them.",
    provenance:
      "Ridged white helmets with a hanging cowl that covers everything but a " +
      "dark eye slit, over white armour printed with a breathing pack and " +
      "harness. One wears a black belt, the other grey. Both have gone " +
      "blotchy cream with age in places. A third is a later pattern " +
      "entirely: the helmet smooth instead of ridged, a flared plate " +
      "standing off the back of the neck, and a thin black visor slit rather " +
      "than a wide one.",
    tags: ["star-wars", "imperial", "snowtrooper", "cold-weather", "unit", "two", "branded"],
    images: [
      { src: "images/the-snowtroopers-01.jpg", caption: "The first two" },
      { src: "images/the-snowtroopers-02.jpg", caption: "The third, a later pattern" },
    ],
    acquired: "",
    notes: "One entry for all three, with the two helmet patterns on the same card the way the Rebel Troopers have theirs. Filed good by the standing rule, since you have not said otherwise - the same call the Umbaran Soldier got. Worth saying once and then leaving alone: these two and the Scout Trooper are the first unambiguously Imperial figures here, and this world already has the rebels in it by your own ruling. If the Empire exists here as well, they have a side to be on and a group to be in."
  },


  {
    id: "the-scout-trooper",
    name: "The Scout Trooper",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Scout",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A scout trooper.",
    provenance:
      "White helmet with a wide black visor across the whole face and a snub " +
      "filter below it, ear cups at both sides. Chest armour printed with two " +
      "big thigh pouches and a black belt. The white has gone cream and there " +
      "is scuffing across the chest.",
    tags: ["star-wars", "imperial", "scout-trooper", "visor", "worn", "branded"],
    images: ["images/the-scout-trooper-01.jpg"],
    acquired: "",
    notes: "Third scout in the collection to be defined by what he cannot be seen through, after the Camo Scouts and the Golden Company Scout. Ungrouped alongside the Snowtroopers until you say whether the Empire is a thing in this world."
  },


  {
    id: "the-yellow-clone-trooper",
    name: "The Yellow Clone Trooper",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Clone Trooper",
    group: "The Golden Company",
    location: "",
    relations: [],
    rating: 0,
    background: "A clone trooper in yellow.",
    provenance:
      "Phase 2 helmet with a yellow stripe over the crown and a yellow bar " +
      "straight down between the eyes, black brow band. Yellow chevron at the " +
      "collar and yellow blocks at the belt. Scuffed and grubby across the " +
      "legs.",
    tags: ["star-wars", "clone", "trooper", "yellow", "golden-company", "worn", "branded"],
    images: ["images/the-yellow-clone-trooper-01.jpg"],
    acquired: "",
    notes: "You did not know his unit, so the markings decided it: the yellow crown stripe and the bar down the faceplate are the Golden Company pattern exactly, the same as the Grenadier wears. Put him in with them on that basis rather than left floating - say the word if he belongs somewhere else. Fifth in the company."
  },


  {
    id: "the-clone-pilot-in-grey",
    name: "The Clone Pilot in Grey",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Pilot",
    group: "The Clone Army",
    location: "",
    relations: [],
    rating: 0,
    background: "A clone pilot.",
    provenance:
      "White flight helmet with a black stripe over the crown and a crest " +
      "printed at each temple. Blue-grey arms and legs against a white chest " +
      "rig - coiled hoses over both shoulders, a control panel at the sternum " +
      "and red indicator blocks.",
    tags: ["star-wars", "clone", "pilot", "flight-rig", "branded"],
    images: ["images/the-clone-pilot-in-grey-01.jpg"],
    acquired: "",
    notes: "Named for his legs to keep him clear of the Clone Pilot who is already here - that one is your own man, in the Space Militia, and has nothing to do with this one."
  },


  {
    id: "the-battered-clone-pilot",
    name: "The Battered Clone Pilot",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Pilot",
    group: "The Clone Army",
    location: "",
    relations: [],
    rating: 0,
    background: "A clone pilot, damaged in battle.",
    provenance:
      "Phase 1 helmet scored right through the paint - the yellow band across " +
      "the brow worn down to bare plastic, scratches across the crown and both " +
      "cheeks, the black markings rubbed thin. A chunk is missing from the " +
      "printing at his hip. Cream legs, white arms, the same hosed chest rig.",
    tags: ["star-wars", "clone", "pilot", "damaged", "worn", "battle-scarred", "branded"],
    images: ["images/the-battered-clone-pilot-01.jpg"],
    acquired: "",
    notes: "Damage read as history rather than wear, which is your call and a good one - it is the second time this collection has done that, after the Retired Clone, who was damaged out of service and still turns out for the parades. The most beaten-up figure in the Star Wars corner."
  },


  {
    id: "the-stormtrooper-commander",
    name: "The Stormtrooper Commander",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Commander",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A stormtrooper commander.",
    provenance:
      "The plain stormtrooper helmet, no markings on it at all, over white " +
      "chest armour - and dark navy arms, where a stormtrooper would have " +
      "white ones. That is the whole of what makes him a commander to look at.",
    tags: ["star-wars", "imperial", "stormtrooper", "commander", "branded"],
    images: ["images/the-stormtrooper-commander-01.jpg"],
    acquired: "",
    notes: "Blue sleeves on a white uniform is a quiet way to mark rank compared to how the clones do it, where a commander gets a pauldron, a kama and a repainted helmet. Ungrouped with the other Imperials until you rule on whether the Empire exists here."
  },


  {
    id: "the-stormtrooper-pilot",
    name: "The Stormtrooper Pilot",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Pilot",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "An Imperial pilot.",
    provenance:
      "White flight helmet with a black stripe over the crown and a red " +
      "Imperial cog at each temple, a red bar printed across the mouth vent. " +
      "Dark grey arms, light grey legs, and the hosed chest rig with its " +
      "control panel and red blocks.",
    tags: ["star-wars", "imperial", "pilot", "cog", "flight-rig", "branded"],
    images: ["images/the-stormtrooper-pilot-01.jpg"],
    acquired: "",
    notes: "Same chest rig as the two clone pilots, and the cog at his temple is the only thing that puts him on the other side of it - three men in identical kit and one badge between them. Fourth Imperial card now waiting on whether the Empire is a thing in this world, alongside the Snowtroopers, the Scout Trooper and the Stormtrooper Commander."
  },


  {
    id: "the-clone-captain",
    name: "The Clone Captain",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Star Wars",
    rank: "",
    role: "Captain",
    group: "The Clone Army",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A captain in the clone army who is not a clone.\n\n" +
      "He came out of the Discarded - made as a throwaway in somebody " +
      "else's civilization and given refuge here. He took a commission in " +
      "the clone army and still fights for it, and every man under him was " +
      "grown for the job while he simply turned up.",
    provenance:
      "Plain Phase 1 clone armour worked over by hand in dark purple marker - " +
      "jagged strikes down the chest and both arms, crosses on each thigh, " +
      "streaks up the crown of the helmet and bars across the boots. None of " +
      "it is printed. A yellow neck shows between helmet and torso.",
    tags: ["star-wars", "clone", "captain", "discarded", "hand-drawn", "custom"],
    images: ["images/the-clone-captain-01.jpg"],
    acquired: "",
    notes: "The first figure in the collection who belongs to two worlds at once - one of the Discarded, who are this world's own refugees from other people's sets, serving in the clone army, which came out of the films. Nothing else here crosses that line. Filed in the Clone Army because that is where he serves; say the word and he goes with the Discarded instead. He is also the only Star Wars figure whose markings you put on yourself."
  },


  {
    id: "the-verdauf-guards",
    name: "The Verdauf Guards",
    variant: "Four of them",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Verdauf Squadron",
    group: "The Verdauf",
    location: "",
    relations: [],
    rating: 0,
    background: "Guards of the Verdauf Squadron. There are four of them.",
    provenance:
      "Light green armour over white, all three identical: a flat-browed " +
      "helmet with a visor shelf, a silver breathing box clamped across the " +
      "mouth, green shoulders and a green belt, and a pale yellow marking at " +
      "the collar. One helmet carries a red flash the others do not.\n\n" +
      "A fourth stands apart: a silver ribbed pauldron over one shoulder, and " +
      "the arm beneath it gone entirely.",
    tags: ["verdauf", "squadron", "guard", "green-armor", "respirator", "unit", "three"],
    images: [
      { src: "images/the-verdauf-guards-01.jpg", caption: "Three of them together" },
      { src: "images/the-verdauf-guards-02.jpg", caption: "One of them alone" },
      { src: "images/the-verdauf-guards-03.jpg", caption: "The fourth, in a pauldron, one arm gone" },
    ],
    acquired: "",
    notes: "The Green Captain's entry has said from the start that the Verdauf Squadron is an actual unit rather than a handful of individuals, and that you would meet more of them later. These are them, and they are in his light green - the colour he is known by. The squadron is seven strong on four cards now: the Captain, his younger brother, the Defense Bot and these four guards. The fourth is missing an arm and wears a pauldron the others do not, which is the only rank or damage marked anywhere in this unit - and this collection has form for reading a missing limb as history rather than a lost piece, from Claws to the Rebuilt to the Survivor. I read the solo photograph as a close-up of one of the three rather than a fifth man; say so if he is his own."
  },


  {
    id: "the-battle-pack-clone",
    name: "The Clone Bombers",
    variant: "Two of them",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Clone Trooper",
    group: "The Clone Army",
    location: "",
    relations: [],
    rating: 0,
    background: "Clone bombers. There are two of them.",
    provenance:
      "Phase 1 helmet with an olive-tan cap over the crown and a dark " +
      "Republic crest at each temple, a fin standing up from the top. Grey " +
      "arms, white legs, and a silver hexagonal plate at the chest that the " +
      "other clones here do not have.\n\n" +
      "Out of one of the early clone battle packs, by your account. " +
      "A second of him has since turned up, identical down to the chest plate.",
    tags: ["star-wars", "clone", "trooper", "phase-1", "republic-crest", "vintage", "branded"],
    images: [
      { src: "images/the-battle-pack-clone-01.jpg", caption: "The first" },
      { src: "images/the-battle-pack-clone-02.jpg", caption: "The second" },
    ],
    acquired: "",
    notes: "Renamed from The Battle Pack Clone, which was a placeholder taken from where he came from - you called them clone bombers, so that is the name now. Two of them. The silver chest plate is the thing to look at - no other clone in the collection has armour drawn as a separate plate over the body."
  },


  {
    id: "the-plain-clone-trooper",
    name: "The Plain Clones",
    variant: "About a dozen",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Clone Trooper",
    group: "The Clone Army",
    location: "",
    relations: [],
    rating: 0,
    background: "Clone troopers with no unit markings at all. There are about a dozen of them.",
    provenance:
      "Phase 1 helmet and armour in plain white - the black brow band, the " +
      "moustache vent and the grey chest lines are all the printing there is. " +
      "No colour anywhere on him. The white has gone faintly cream.\n\n" +
      "A second of him is the same unmarked armour on a later print: the same " +
      "Phase 1 helmet, but the chest plates outlined in bold black and the belt " +
      "drawn as a row of separate boxes rather than a grey smudge. " +
      "Photographed together they come to roughly a dozen - the count is read " +
      "off the group shot rather than tallied - and every one of them is the " +
      "same unmarked white.",
    tags: ["star-wars", "clone", "trooper", "phase-1", "unmarked", "branded"],
    images: [
      { src: "images/the-plain-clone-trooper-01.jpg", caption: "The faint print" },
      { src: "images/the-plain-clone-trooper-02.jpg", caption: "The crisper print" },
      { src: "images/the-plain-clone-trooper-03.jpg", caption: "One of them, out in front" },
      { src: "images/the-plain-clone-trooper-04.jpg", caption: "About a dozen together" },
    ],
    acquired: "",
    notes: "The only clone here wearing no unit colour whatsoever - every other one carries yellow, blue, green, orange, red or purple somewhere. He is what all of them looked like before they were anybody. Renamed from The Plain Clone Trooper once the group shot arrived - there are about a dozen of them, not one. That made this the largest unit in the collection for exactly one batch, until about twenty Shock Troopers were photographed together; it is second now, ahead of the ten US Army Soldiers, and every man in it is unmarked. The count is an estimate off the photograph; give me a real number and it goes in."
  },


  {
    id: "the-painted-clone-commander",
    name: "The Painted Clone Commander",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Star Wars",
    rank: "",
    role: "Commander",
    group: "The Clone Army",
    location: "",
    relations: [],
    rating: 0,
    background: "A clone commander.",
    provenance:
      "Painted over by hand, not printed - every marking on him is brushwork. " +
      "Pale blue across the brow and the mouth of the helmet with red at the " +
      "temples, black strokes drawn on for the visor and the chest lines, and " +
      "solid red boots with blue arcs over the toes. A red cloth cape at the " +
      "shoulders. The paint has chipped at the edges and gone thick where it " +
      "pooled.\n\n" +
      "He was a giveaway - handed to you rather than bought or built.",
    tags: ["star-wars", "clone", "commander", "hand-painted", "cape", "giveaway", "custom"],
    images: ["images/the-painted-clone-commander-01.jpg"],
    acquired: "",
    notes: "Second clone here whose markings were put on by hand rather than printed, after the Clone Captain - and where that one was drawn in marker, this one is properly painted. Two different people made those two, which is the point: he came from somebody else and was given away."
  },


  {
    id: "the-commander-in-red",
    name: "The Commander in Red",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Commander",
    group: "The Clone Army",
    location: "",
    relations: [],
    rating: 0,
    background: "A clone commander.",
    provenance:
      "Phase 1 helmet with a dark red rangefinder standing off one side and a " +
      "twin-tube breathing rig across the mouth. Pale blue chest armour with " +
      "an ammunition block and four red pips, dark red cloth over both " +
      "shoulders and a black kama at the waist. Deep red legs.",
    tags: ["star-wars", "clone", "commander", "red", "rangefinder", "kama", "branded"],
    images: ["images/the-commander-in-red-01.jpg"],
    acquired: "",
    notes: "Fifth clone commander in the Star Wars corner, after Cody, the Golden Commander, the 187th and the painted one - and every single one of them is marked out by a different colour. Orange, yellow, purple, hand-painted blue, and now red. That held for exactly one batch: Commander Fox arrived next in dark maroon, so red is the first colour worn twice - and the two of them are the closest pair of commanders here, down to the rangefinder on the same side."
  },


  {
    id: "the-shock-troopers",
    name: "The Shock Troopers",
    variant: "About twenty",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Clone Trooper",
    group: "The Clone Army",
    location: "",
    relations: [],
    rating: 0,
    background: "Shock troopers. There are about twenty of them.",
    provenance:
      "Phase 2 helmets banded with red combs over the brow and a red fin " +
      "standing up from the crown, red flashes at the cheeks. Red chest " +
      "plates and red ammunition blocks at the belt. Both wear mismatched " +
      "legs, one red and one white, and both are scuffed and yellowed. " +
      "Most of them are a later and busier pattern than that first pair: red " +
      "shoulder pauldrons clipped on over the armour, a red comb of bars " +
      "printed across the brow, red slashes at both cheeks, and red blocks " +
      "worked down both legs. Ranked up together they come to roughly twenty - " +
      "read off the group shot rather than tallied.",
    tags: ["star-wars", "clone", "trooper", "shock-trooper", "red", "unit", "two", "worn", "branded"],
    images: [
      { src: "images/the-shock-troopers-02.jpg", caption: "One of them, in the later pattern" },
      { src: "images/the-shock-troopers-01.jpg", caption: "The first pair, on mismatched legs" },
      { src: "images/the-shock-troopers-03.jpg", caption: "About twenty of them" },
    ],
    acquired: "",
    notes: "One entry for all of them. This is now the largest unit in the collection by a wide margin - about twenty, against the dozen Plain Clones and the ten US Army Soldiers - and the only one big enough to look like an army rather than a squad. The two who arrived first are the odd ones out in it: they wear mismatched legs, one red and one white, where the ranks behind them all match. The count is an estimate off the photograph; give me a real number and it goes in."
  },


  {
    id: "commander-fox",
    name: "Commander Fox",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Commander",
    group: "The Clone Army",
    location: "",
    relations: [],
    rating: 0,
    background: "Commander Fox.",
    provenance:
      "Phase 1 helmet with a dark maroon visor brim standing out over the " +
      "face and a maroon fin down the crown, red marks at the cheeks and a " +
      "red bar at the chin. White chest plate worked over in red - a fan " +
      "shape at the collar, curved bands across the ribs - a maroon belt, " +
      "maroon arms and white legs stained brown at the seams.",
    tags: ["star-wars", "clone", "commander", "maroon", "fox", "branded"],
    images: ["images/commander-fox-01.jpg"],
    acquired: "",
    notes: "Sixth clone commander in the Star Wars corner, and the first named one since Cody - the rest are known by their colour rather than a name. He also settles a thing written on the Commander in Red last batch, that no two commanders here repeat a colour: they do now, and those two are the closest pair, both in red with the rangefinder on the same side."
  },


  {
    id: "the-tie-pilots",
    name: "The TIE Pilots",
    variant: "Two of them",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Pilot",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "TIE pilots. There are two of them.",
    provenance:
      "Black from the crown to the boots. Sculpted black flight helmets with " +
      "an Imperial cog at each temple and silver vents at the cheeks, over " +
      "black suits printed in grey and silver with a chest box, hoses and " +
      "belt blocks. The two have different chest panels - one a tall column " +
      "of readouts, the other a single wide screen.",
    tags: ["star-wars", "imperial", "tie-pilot", "black", "cog", "unit", "two", "branded"],
    images: [
      { src: "images/the-tie-pilots-01.jpg", caption: "The first" },
      { src: "images/the-tie-pilots-02.jpg", caption: "The second" },
    ],
    acquired: "",
    notes: "One entry for the pair. They are the darkest figures in the collection - black plastic with only grey printing on it, no colour anywhere. Ungrouped with the other Imperials until you rule on the Empire."
  },


  {
    id: "the-shadow-troopers",
    name: "The Shadow Troopers",
    variant: "Three of them",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Soldier",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "Shadow troopers. There are three of them.",
    provenance:
      "The stormtrooper helmet and armour, but moulded in black instead of " +
      "white - the eyes, teeth and vents picked out in pale grey so the face " +
      "still reads, and the belt blocks drawn in grey across the waist. All " +
      "three identical.",
    tags: ["star-wars", "imperial", "shadow-trooper", "black", "unit", "three", "branded"],
    images: [
      { src: "images/the-shadow-troopers-01.jpg", caption: "One of them" },
      { src: "images/the-shadow-troopers-02.jpg", caption: "All three" },
    ],
    acquired: "",
    notes: "One entry for all three, solo shot first and the group behind it, the way the Rebel Troopers are done. They are the exact photographic negative of a stormtrooper - same mould, same printing, inverted - which makes them and the TIE Pilots the only figures here whose whole idea is being hard to see."
  },


  {
    id: "the-187th-soldiers",
    name: "The 187th Soldiers",
    variant: "Two of them",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Clone Trooper",
    group: "The 187th Legion",
    location: "",
    relations: [],
    rating: 0,
    background: "Soldiers of the 187th. There are two of them.",
    provenance:
      "Phase 2 helmets with a purple fin down the crown, grey combs at the " +
      "brow and a purple muzzle plate. Purple shoulder panels, a purple " +
      "ammunition belt and a sling drawn diagonally across the chest. One has " +
      "gold thigh plates the other does not.",
    tags: ["star-wars", "clone", "trooper", "187th", "purple", "unit", "two", "branded"],
    images: [
      { src: "images/the-187th-soldiers-01.jpg", caption: "The one with gold thigh plates" },
      { src: "images/the-187th-soldiers-02.jpg", caption: "The other" },
    ],
    acquired: "",
    notes: "New group, The 187th Legion, holding these two and the Commander - who has been sitting in the Clone Army since he arrived, waiting for exactly this. Their purple matches his, which is the only colour in the whole clone army that no other unit touches."
  },


  {
    id: "the-bomb-squad",
    name: "The Bomb Squad",
    variant: "Two of them",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Clone Trooper",
    group: "The Clone Army",
    location: "",
    relations: [],
    rating: 0,
    background: "Clone bomb squad. There are two of them.",
    provenance:
      "Phase 1 helmets moulded in solid orange with a white wedge across the " +
      "brow and the black visor over it - the only clones here whose helmet is " +
      "orange rather than white with orange on it. Orange arms, white chest " +
      "plates worked over in orange, and orange legs with white knees. The two " +
      "are identical.",
    tags: ["star-wars", "clone", "trooper", "bomb-squad", "orange", "unit", "two", "branded"],
    images: [{ src: "images/the-bomb-squad-01.jpg", caption: "Both of them" }],
    acquired: "",
    notes: "One entry for the pair. Every other clone in the collection is a white man with a colour added; these two are the other way round, orange with white added. Bomb disposal is the one job where being seen is the point."
  },


  {
    id: "the-discarded-commander",
    name: "The Discarded Commander",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Star Wars",
    rank: "",
    role: "Commander",
    group: "The Clone Army",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A commander in the clone army who came out of the Discarded world, " +
      "like the Clone Captain before him.",
    provenance:
      "Phase 1 armour coloured over by hand in orange - blocks laid across " +
      "the chest plates, bands round both thighs, streaks down one arm and " +
      "stripes on the boots. The strokes go over the moulded edges rather " +
      "than following them, and the white underneath shows through in " +
      "patches.",
    tags: ["star-wars", "clone", "commander", "discarded", "hand-coloured", "orange", "custom"],
    images: ["images/the-discarded-commander-01.jpg"],
    acquired: "",
    notes: "Second figure here who came out of the Discarded and serves the clone army, after the Clone Captain - so that crossing is not a one-off, it is a route. Third clone whose markings were put on by hand: marker on the Captain, paint on the Painted Commander, and this one coloured in."
  },


  {
    id: "the-old-republic-trooper",
    name: "The Old Republic Trooper",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Soldier",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A trooper of the Old Republic.",
    provenance:
      "A helmet shaped unlike any other here - smooth and rounded with a " +
      "flat brow, a black T across the face and a grey grille at the mouth, " +
      "orange bars over the crown and orange flashes at the cheeks. White " +
      "armour with orange down the sternum, a black belt and orange panels " +
      "at both thighs. Scuffed and grubby throughout.",
    tags: ["star-wars", "old-republic", "soldier", "orange", "worn", "branded"],
    images: ["images/the-old-republic-trooper-01.jpg"],
    acquired: "",
    notes: "He is from a different age of this world entirely - the Old Republic is thousands of years before the clones, so he is the earliest Star Wars figure here by in-world time while the clones and Imperials are all one lifetime apart. Ungrouped: he has nobody to stand with."
  },


  {
    id: "captain-rex",
    name: "Captain Rex",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Captain",
    group: "The 501st Legion",
    location: "",
    relations: [],
    rating: 0,
    background: "Captain Rex, of the 501st.",
    provenance:
      "Phase 2 helmet painted in blue - a jaw shape up the faceplate, twin " +
      "flames over the crown and tally marks scored in black at both temples. " +
      "A dark blue cloth pauldron over one shoulder, blue flashes at the arm " +
      "and knees, and a black pistol in each hand.",
    tags: ["star-wars", "clone", "captain", "501st", "blue", "rex", "pauldron", "branded"],
    images: ["images/captain-rex-01.jpg"],
    acquired: "",
    notes: "New group, The 501st Legion, holding him and the two 501st troopers who have been sitting in the Clone Army since they arrived. The tally marks on his helmet are the thing: no other figure in this collection is printed with a count of anything. A second figure was put on this card and then taken off again: you corrected it, it is not him, and it has its own entry as the 501st Commando."
  },


  {
    id: "the-187th-scout",
    name: "The 187th Scout",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Scout",
    group: "The 187th Legion",
    location: "",
    relations: [],
    rating: 0,
    background: "A scout of the 187th.",
    provenance:
      "A stormtrooper-pattern helmet rather than a clone one - smooth, with " +
      "the black visor and the moulded snout - marked purple at the cheeks. " +
      "Purple shoulder panel, a tan sling across the chest, tan blocks at the " +
      "belt and purple wedges on both thighs.",
    tags: ["star-wars", "clone", "scout", "187th", "purple", "branded"],
    images: ["images/the-187th-scout-01.jpg"],
    acquired: "",
    notes: "Third in the 187th, which went from one card to three inside two batches. His helmet is the odd part - it is the stormtrooper mould, not the clone one, so he is wearing the shape that comes after the clones while everybody around him is still in the shape that came before."
  },


  {
    id: "the-stormtroopers",
    name: "The Stormtroopers",
    variant: "Five of them, two patterns",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Soldier",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "Stormtroopers. There are five of them.",
    provenance:
      "Four are the classic pattern: white armour with a black brow band, the " +
      "moustache vent, a row of grey belt blocks and plain white legs, all " +
      "four gone faintly cream and scuffed. The fifth is the later moulding - " +
      "the same helmet cut sharper, grey shoulder plates and a chest wedge " +
      "printed in, a full black bandolier of blocks across the waist, and the " +
      "legs printed with knee plates the old ones do not have.",
    tags: ["star-wars", "imperial", "stormtrooper", "unit", "five", "worn", "branded"],
    images: [
      { src: "images/the-stormtroopers-01.jpg", caption: "One of the classics" },
      { src: "images/the-stormtroopers-02.jpg", caption: "All four classics" },
      { src: "images/the-stormtroopers-03.jpg", caption: "The new pattern" },
    ],
    acquired: "",
    notes: "One entry for all five, solo first and the group behind it, with both mouldings on the same card the way the Rebel Troopers and the Snowtroopers have theirs. Standing the old four beside the new one is the plainest before-and-after of printing in the collection - the old legs are blank white and the new ones are drawn all the way down. Seventh Imperial card, still ungrouped."
  },


  {
    id: "ahsokas-trooper",
    name: "Ahsoka's Trooper",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Clone Trooper",
    group: "The 501st Legion",
    location: "",
    relations: [
      { to: "ahsoka-tano", label: "Serves under" },
    ],
    rating: 0,
    background: "One of Ahsoka's troopers, out of the 501st.",
    provenance:
      "Phase 2 helmet painted orange across the whole face and up over the " +
      "crown in the shape of her markings, with white round the jaw. The body " +
      "underneath is 501st blue - a blue collar, a blue wedge at the sternum " +
      "and blue bands at both knees.",
    tags: ["star-wars", "clone", "trooper", "501st", "ahsoka", "orange", "blue", "branded"],
    images: ["images/ahsokas-trooper-01.jpg"],
    acquired: "",
    notes: "Linked to Ahsoka because you made the link yourself - hers, out of the 501st - so it is your lore rather than the films leaking in. He is the only clone here wearing two units at once: the orange on his helmet is her marking laid over the blue of the legion he belongs to."
  },


  {
    id: "the-501st-scout",
    name: "The 501st Scout",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Scout",
    group: "The 501st Legion",
    location: "",
    relations: [],
    rating: 0,
    background: "A scout of the 501st.",
    provenance:
      "Scout helmet with a wide brim, blue over the crown and down both " +
      "sides, and a silver respirator box clamped across the mouth. A dark " +
      "grey harness strapped down the chest over blue panels, a blue shoulder " +
      "cap, and blue bands at the hips and knees.",
    tags: ["star-wars", "clone", "scout", "501st", "blue", "respirator", "branded"],
    images: ["images/the-501st-scout-01.jpg"],
    acquired: "",
    notes: "Fourth in the 501st. Third scout in a respirator box now, after the Golden Company Scout and the Wolfpack Scout - every legion that has a scout puts him in the same breathing gear, whatever colour the rest of them wear."
  },


  {
    id: "the-classic-clones",
    name: "The Classic Clones",
    variant: "Two of them",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Clone Trooper",
    group: "The Clone Army",
    location: "",
    relations: [],
    rating: 0,
    background: "Clone troopers with no unit markings. There are two of them.",
    provenance:
      "Phase 2 helmets with a fin standing up from the crown, a black brow " +
      "band and the moustache vent - no colour on either. The chest printing " +
      "is worn faint on both, grey lines over white, and the belt boxes have " +
      "rubbed nearly through on one of them.",
    tags: ["star-wars", "clone", "trooper", "phase-2", "unmarked", "worn", "unit", "two", "branded"],
    images: [{ src: "images/the-classic-clones-01.jpg", caption: "Both of them" }],
    acquired: "",
    notes: "One entry for the pair. These are the Phase 2 version of what the Plain Clone Trooper is in Phase 1 - unmarked men, before any legion took them. Between the two cards the collection now has four clones with no colour on them at all, against thirty-odd who carry one."
  },


  {
    id: "fives",
    name: "Fives",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "ARC Trooper",
    group: "The 501st Legion",
    location: "",
    relations: [],
    rating: 0,
    background: "Fives, an ARC trooper of the 501st.",
    provenance:
      "Blue rangefinder raised clear of the brow. The helmet carries the " +
      "busiest markings of the three ARC troopers here - blue running back " +
      "over the crown in strokes rather than plain stripes, blue down the " +
      "faceplate and out across both cheeks. Grey harness and a slung " +
      "bandolier printed across the chest over blue panels.\n\n" +
      "Read as Fives on the markings. His helmet is supposed to carry a " +
      "rishi eel drawn on it, after the one that killed a man in his old " +
      "squad, and of the three raised-visor troopers in this batch his is " +
      "the only helmet whose markings read as a shape rather than stripes.",
    tags: ["star-wars", "clone", "arc-trooper", "501st", "fives", "blue", "branded"],
    images: ["images/fives-01.jpg"],
    acquired: "",
    notes: "You said this batch has the actual Fives in it and asked me to work out which, so this is my call rather than yours - the busiest helmet of the three. The thing that would settle it is Echo, who is the other ARC trooper of that pair and wears a plain blue fin with two straight stripes; if one of the other two is Echo, then the odd one out is Fives and it may not be this one."
  },


  {
    id: "the-501st-arc-troopers",
    name: "The 501st ARC Troopers",
    variant: "Three of them",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "ARC Trooper",
    group: "The 501st Legion",
    location: "",
    relations: [],
    rating: 0,
    background: "ARC troopers of the 501st. There are three of them.",
    provenance:
      "Both wear the blue rangefinder raised above the brow and blue stripes " +
      "straight back over the crown, either side of the fin. One has a plain " +
      "501st chest with blue belt boxes; the other has the grey harness and " +
      "slung bandolier across it. " +
      "A third breaks the pattern: his rangefinder is white rather than blue, " +
      "and two yellow chevrons are printed at his collar where the others " +
      "carry none.",
    tags: ["star-wars", "clone", "arc-trooper", "501st", "blue", "rangefinder", "unit", "two", "branded"],
    images: [
      { src: "images/the-501st-arc-troopers-01.jpg", caption: "With the blue belt boxes" },
      { src: "images/the-501st-arc-troopers-02.jpg", caption: "With the chest harness" },
      { src: "images/the-501st-arc-troopers-03.jpg", caption: "White rangefinder, yellow chevrons" },
    ],
    acquired: "",
    notes: "The two ARC troopers left over once Fives was picked out. Their helmets are plain blue stripes either side of the fin, which is how Echo is described, so one of the first two may be him - say which and the card splits. The third is the one worth a second look: a white rangefinder and two yellow chevrons are the only markings of their kind anywhere in the legion, which is how a named man usually announces himself here."
  },


  {
    id: "the-501st-commando",
    name: "The 501st Commando",
    variant: "Two figures",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Commando",
    group: "The 501st Legion",
    location: "",
    relations: [],
    rating: 0,
    background: "A commando of the 501st.",
    provenance:
      "Two figures sharing the same chest print - a grey rig with three dark " +
      "blocks at one shoulder over a blue wedge. One wears a black cloth " +
      "pauldron and carries a pistol in each hand; the other has a blue kama " +
      "at the hip, thigh holsters printed on and a single long rifle. Both " +
      "helmets carry blue strokes over the crown with small red marks.",
    tags: ["star-wars", "clone", "commando", "501st", "blue", "pauldron", "kama", "branded"],
    images: [
      { src: "images/the-501st-commando-01.jpg", caption: "With the pauldron and pistols" },
      { src: "images/the-501st-commando-02.jpg", caption: "With the kama and rifle" },
    ],
    acquired: "",
    notes: "Named the way you said to name him - clone commando of the 501st - rather than guessed at. The second photo was on the Captain Rex card until you corrected it; the two are on one entry here because they share a chest print that nothing else in the legion has. If either is Fives or Echo after all, one word moves him."
  },



  /* ---- The villains. ---- */

  {
    id: "quinn",
    name: "Quinn",
    variant: "Three figures, one man",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Sith Master",
    group: "",
    location: "",
    relations: [
      { to: "the-shadow-team-commander", label: "Given a whole team by" },
      { to: "the-first-man-in-space", label: "Bought him" },
      { to: "the-sith-lord", label: "Aligned with" },
      { to: "the-defector-commander", label: "Defected to him" },
      { to: "the-dictator", label: "Aligned with" },
      { to: "wen", label: "Taught by" },
      { to: "the-fleet-general", label: "Given a fleet by" },
      { to: "the-infamous-traitor", label: "Followed by" },
      { to: "the-shadow-king", label: "Led the shadow uprising with" },
      { to: "the-prince-pretender", label: "Allied with" },
      { to: "the-purple-shadow", label: "His middleman to the shadow dimension" },
      { to: "quinns-second-in-command", label: "His second, on the technology side" },
      { to: "the-neon-fanatic", label: "Followed by" },
      { to: "claws", label: "Captured" },
      { to: "the-knighted-civilian", label: "Brought down by" },
    ],
    rating: 0,
    background:
      "He started as nothing. A low-ranking soldier for a neutral third party " +
      "in somebody else\'s conflict, and they left him to die in the cold.\n\n" +
      "He did not die, and what he came back with was a vow: never to be used " +
      "by anyone again. He wanted power. He wanted, at the very least, to feel " +
      "like the one calling the shots.\n\n" +
      "What he concluded is the part that matters. He looked at how widespread " +
      "war is - industrial, constant - and at how many good people would keep " +
      "turning up to fight in one, and he decided conflict was simply " +
      "inevitable. If it could not be stopped, he might as well be on the " +
      "winning side of it, and at the very top.\n\n" +
      "So he went and studied the dark arts. Both kinds: dark magic, and the " +
      "dark side of the Force. He became a master Sith. Then he reached the " +
      "shadow dimension and put it to the Shadow King, and the two of them led " +
      "the shadow uprising - which was to kill as many of the friendly leaders " +
      "as they could by raising each leader\'s own shadow, near-identical " +
      "versions of the people themselves, and setting them on their originals. " +
      "It did heavy damage. The shadow forces were pushed back in the end, but " +
      "the damage was done, which was all he wanted.\n\n" +
      "Alongside that he spent years quietly contacting anybody who could be " +
      "turned, and arranged for every one of those betrayals to happen inside " +
      "the same minute of the same day. Students turned on their masters. " +
      "Masters turned on their students. The result was chaos, on purpose.\n\n" +
      "The green is deliberate. Studying the dark arts turned his body neon as " +
      "it went, and he pushed it - he wanted to change the essence of the body " +
      "itself so that nothing could kill him.\n\n" +
      "What he has now: dark arts fighting experience, a genius intellect, the " +
      "Force, speed beyond following, and the ability to heal himself. Fire " +
      "and explosives do nothing to him.",
    provenance:
      "Three figures, one man, in order.\n\n" +
      "The soldier: a plain silver combat helmet with ear flaps, a scar through " +
      "one eye, and a white harness printed over grey - standard-issue " +
      "everything, on somebody nobody was looking at.\n\n" +
      "The arms dealer: brown hair, no helmet, a black pauldron across both " +
      "shoulders, a green webbing vest with a yellow-crossed scarf at the " +
      "throat and two pistols holstered on the thighs.\n\n" +
      "What he made of himself: a translucent neon green head, grinning, one " +
      "eye red. Bone-white spines stand off the collar. Black Sith robes over " +
      "black legs, one hand still flesh and the other gone black.",
    tags: ["villain", "quinn", "sith", "dark-arts", "force", "shadow-uprising", "betrayal", "self-healing", "immortality", "arms-dealer"],
    images: [
      { src: "images/quinn-01.jpg", caption: "The soldier, before any of it" },
      { src: "images/quinn-02.jpg", caption: "The independent arms dealer" },
      { src: "images/quinn-03.jpg", caption: "What he made of himself" },
    ],
    acquired: "",
    notes: "The main villain, and the most-anticipated card in the collection - two people have carried written links to an id that did not exist until now, and both light up on this card: Claws, whom he captured and put in a stasis chamber, and the Knighted Civilian, the jogger who shot him through the lung and ended the first uprising. Three photographs on one card because they are three eras of one man, the way Luke and Obi-Wan are done. Open question worth settling: whether the shadow uprising he led with the Shadow King is the same war as the Great Shadow War the Shadow Prince helped negotiate the end of, or a separate one."
  },


  {
    id: "the-shadow-king",
    name: "The Shadow King",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "King",
    group: "",
    location: "The Shadow Dimension",
    relations: [
      { to: "the-shadow-prince", label: "Father of" },
      { to: "quinn", label: "Led the shadow uprising with" },
      { to: "the-light-king", label: "Locked in eternal war with" },
    ],
    rating: 0,
    background:
      "King of the shadow dimension, which is locked in eternal conflict with " +
      "light itself.\n\n" +
      "Quinn reached him and put the uprising to him, and the two of them ran " +
      "it together: every friendly leader they could reach was attacked by his " +
      "own shadow, a near-identical version of himself raised against him.",
    provenance:
      "Black from the plume down - hat, face, torso, arms, hands and legs, with " +
      "no printing anywhere on him. A tall military dress hat with a brim and a " +
      "long plume standing off the crown.",
    tags: ["villain", "shadow", "king", "shadow-dimension", "eternal-conflict", "unprinted", "plume"],
    images: ["images/the-shadow-king-01.jpg"],
    acquired: "",
    notes: "Named in the world notes for a long time and never seen; his son the Shadow Prince has carried a link to this exact id since he was catalogued, and it works now. The Prince is good and it shows in his robes - this man is black all the way through with not one printed detail on him, which for a figure standing for a dimension at war with light is about as on the nose as the plastic gets. Still open: whether he and the Purple Shadow are the same power."
  },


  {
    id: "phalanx",
    name: "Phalanx",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Nanobot Virus",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Phalanx is a nanobot virus. What gave him a shape was the skull of an " +
      "ancient alien entity - something that had been transhumanist in its own " +
      "time - and when the virus met that skull it built itself a body out of " +
      "it. The result is jagged and rocky and not really a person.\n\n" +
      "He consumes people, and he consumes planets.\n\n" +
      "The dangerous part is that he is intelligent. He worked out that he " +
      "cannot spread himself thin enough to eat a galaxy on his own, so he " +
      "does not try. He leads an army of zombie aliens instead - hosts whose " +
      "bodies he has taken over - and sends them.",
    provenance:
      "A moulded grey skull mask with hollow slanted eyes and four long tusks " +
      "hanging down over the chest, drawn back into a smooth dome. Plain light " +
      "grey torso and legs with no printing at all, one arm light grey and the " +
      "other in darker armoured plate.",
    tags: ["villain", "phalanx", "nanobots", "virus", "alien", "skull", "planet-eater", "zombies", "hive"],
    images: ["images/phalanx-01.jpg"],
    acquired: "",
    notes: "A different kind of threat from the other two. Quinn and the Shadow King both want something - power, a war won - and this one is an appetite that happens to be clever. He is also the first villain here who commands anything: an army of taken bodies, which makes him the only enemy in this collection with a force behind him that is not made of soldiers who chose it. Worth noting he is the second entity built out of something that was here before - the Ancient is the other - and the only one that was dug up and worn."
  },



  {
    id: "the-prince-pretender",
    name: "The Prince Pretender",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Pretender",
    group: "",
    location: "",
    relations: [
      { to: "the-space-princess", label: "Brother of" },
      { to: "the-prince", label: "Claims his throne" },
      { to: "quinn", label: "Allied with" },
    ],
    rating: 0,
    background:
      "He has a real claim. He is the Space Princess\'s brother, the throne was " +
      "promised to him, and by certain loopholes in the marriage law he " +
      "technically should have been King.\n\n" +
      "He was not. The crown went through his sister\'s marriage instead, and " +
      "then to a senator who never claimed it and only holds it because she " +
      "disappeared for a while. So the blood claim sits with a man who has no " +
      "power of his own, and rather than live inside the society that passed " +
      "him over, he went and allied with Quinn to take the throne by force.\n\n" +
      "He is a violent, entitled piece of work.",
    provenance:
      "Dark swept hair, a heavy black moustache and stubble. Royal blue tunic " +
      "printed with gold stars, a brown sash knotted across the chest over a " +
      "red medallion, and a gold-trimmed black belt with a crest at the buckle. " +
      "Pale grey legs with plain pocket flaps - the only ordinary thing on him.",
    tags: ["villain", "pretender", "royal-claim", "throne", "entitled", "quinn", "royal-family"],
    images: ["images/the-prince-pretender-01.jpg"],
    acquired: "",
    notes: "He sharpens something the Prince\'s own card has said from the beginning - that the man is king \"de facto, never by claim\". Now there is somebody for whom that is a grievance. Kept out of the Royal Household: he is the Queen\'s brother and the royal children\'s uncle, but a group shows everybody to everybody and he is not one of them by choice. Say the word and he goes in. Second villain here who is somebody\'s family, after the Shadow King."
  },


  {
    id: "the-lead-alien-mercenary",
    name: "The Lead Alien Mercenary",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Mercenary",
    group: "",
    location: "",
    relations: [
      { to: "the-bionic-brother", label: "Brother of" },
    ],
    rating: 0,
    background:
      "He leads the alien mercenaries, and he is skilled in every single kind " +
      "of combat there is.",
    provenance:
      "A green face, deeply scored, with dark markings running from the eyes " +
      "down past a heavy drooping moustache, under a swept brown-gold hairpiece. " +
      "Grey and gold armour with a bandolier of shells over one shoulder and a " +
      "cog badge at the chest, a yellow-striped belt, black legs with silver " +
      "chevrons at the knees and boots.",
    tags: ["villain", "mercenary", "alien", "combat", "leader", "bandolier", "brother"],
    images: ["images/the-lead-alien-mercenary-01.jpg"],
    acquired: "",
    notes: "Leads mercenaries who have not been photographed yet, so the group is real and empty for now. He arrived in the same batch as two arms dealers and nobody has said whether they work together - it would be the obvious arrangement, and it is not written down. Say so and they connect."
  },


  {
    id: "the-arms-dealer",
    name: "The Arms Dealer",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Arms Dealer",
    group: "",
    location: "",
    relations: [
      { to: "the-modified-arms-dealer", label: "Equal in rank to" },
    ],
    rating: 0,
    background:
      "He handles the accounting, which makes him sound like the quiet one. He " +
      "is not. He is the one who decides who gets ripped off and who gets " +
      "killed.\n\n" +
      "He will do business with a target and then have that same target " +
      "assassinated - a rival dealer, or a unit of soldiers worth robbing for " +
      "their gear.",
    provenance:
      "A broad flat-brimmed tan campaign hat over a stubbled face set in a hard " +
      "scowl. Tan suit jacket open over a buttoned waistcoat and a dark " +
      "polka-dotted cravat, a brown book or wallet in one inside pocket. Tan " +
      "legs.",
    tags: ["villain", "arms-dealer", "accounting", "assassination", "robbery", "suit"],
    images: ["images/the-arms-dealer-01.jpg"],
    acquired: "",
    notes: "Dressed like a clerk and running the killing list, which is the whole joke of him - the only villain in this collection in a waistcoat. Quinn spent his middle era as an independent arms dealer and these two arrived immediately after his card; nothing is written between them, and it is the first thing worth settling."
  },


  {
    id: "the-light-king",
    name: "The Light King",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "King",
    group: "",
    location: "",
    relations: [
      { to: "the-shadow-king", label: "Locked in eternal war with" },
    ],
    rating: 0,
    background:
      "King of light, and locked in eternal war with the Shadow King.\n\n" +
      "When the shadow realm brought its conflict into the main Lego universe " +
      "he turned up to fight the shadows - and not as anybody\'s ally. If a city " +
      "had shadow people in it he sent his light army to bomb the city. The " +
      "Lego people in it did not enter into it.\n\n" +
      "The two kings are not opposite sides of a good war. They are the same " +
      "problem twice, carrying their fight into everybody else\'s home.",
    provenance:
      "White from the cap down - peaked cap, head, torso, arms, hands and legs, " +
      "with no printing anywhere on him and no face.",
    tags: ["villain", "light", "king", "eternal-war", "unprinted", "faceless", "collateral"],
    images: ["images/the-light-king-01.jpg"],
    acquired: "",
    notes: "The plastic does the whole argument by itself. The Shadow King is black from the plume down with not one printed detail on him; this man is white from the cap down with not one printed detail on him. Two figures, opposite colours, identically blank - and both of them filed bad. He is the second figure in the collection with no face at all, after the Man from the Yellow Dimension, and the first where that is the point."
  },


  {
    id: "the-modified-arms-dealer",
    name: "The Modified Arms Dealer",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Arms Dealer",
    group: "",
    location: "",
    relations: [
      { to: "the-arms-dealer", label: "Equal in rank to" },
    ],
    rating: 0,
    background:
      "The other arms dealer, and exactly as senior as the first.\n\n" +
      "He used to be a poacher. What he has now is a body modification: it " +
      "heals him quickly, lets him breathe underwater, lets him carry far more " +
      "ammunition than he should be able to, and gives him the strength to " +
      "fight in a way he could not before.",
    provenance:
      "A pale wide-brimmed hat over a lined, scowling face with a scar through " +
      "one eye. Cream torso worn under a heavy dark grey chest rig - a real " +
      "moulded piece rather than a print, ribbed, with a round port at the " +
      "sternum. Black legs and black hands.",
    tags: ["villain", "arms-dealer", "poacher", "body-modification", "self-healing", "amphibious", "strength"],
    images: ["images/the-modified-arms-dealer-01.jpg"],
    acquired: "",
    notes: "Worth putting beside Quinn. Quinn wanted the essence of his body changed so nothing could kill him and went to the dark arts for it; this man went and had hardware fitted, and got healing, gills, capacity and strength out of it. Same want, two prices. He is also the fourth figure here to wear a body modification as history rather than kit, after the Discarded, the Mechanic and the Rebuilt - and the only one of the four who is not on our side."
  },



  {
    id: "the-red-baron",
    name: "The Red Baron",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Assassin",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A professional assassin who can use shadows, and who leaves a streak of " +
      "violence behind him wherever he has been.\n\n" +
      "He enjoys taking skulls.",
    provenance:
      "Brown hair over a silver visor band across the eyes, stubble, a flat " +
      "hard mouth. Black armour printed in grey and red plate with red spiked " +
      "pauldrons standing off both shoulders, red arms into black hands, a belt " +
      "of white crosses, and black legs with red knee plates.",
    tags: ["villain", "assassin", "shadows", "trophies", "spikes", "for-hire"],
    images: ["images/the-red-baron-01.jpg"],
    acquired: "",
    notes: "He uses shadows, which puts him near the shadow dimension without anybody having said he is of it or works for it - the Shadow King, the Purple Shadow and Quinn are all in that part of the world and none of them is written to him. Say the word and he connects. Also the first figure here who collects trophies off the people he kills; this world has had killers before and none of them kept anything."
  },


  {
    id: "the-purple-shadow",
    name: "The Purple Shadow",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Sith",
    group: "",
    location: "",
    relations: [
      { to: "quinn", label: "Opened the shadow portal for" },
      { to: "the-second-padawan", label: "Killed" },
      { to: "the-beowulf-jedi", label: "Constantly fought" },
    ],
    rating: 0,
    background:
      "A Sith who reached the shadow people through the dark arts, and the " +
      "reason Quinn ever got to them. He was the middleman: he opened the " +
      "portal to the shadow dimension.\n\n" +
      "He carries a purple lightsaber. He and the Beowulf Jedi fought " +
      "constantly, and he killed the Snow Jedi\'s second Padawan - the Beowulf " +
      "Jedi\'s friendly rival, and by the end his friend.",
    provenance:
      "Black from head to boots. The head itself is printed rather than " +
      "moulded: a red band across the brow with a clasp at the centre, and two " +
      "pale discs where the eyes should be. A black cloth cape, a torso lined " +
      "in grey with a buckled belt, black legs, silver hands.",
    tags: ["villain", "sith", "purple-shadow", "dark-arts", "lightsaber", "portal", "shadow-dimension", "killer"],
    images: ["images/the-purple-shadow-01.jpg"],
    acquired: "",
    notes: "The last name to come off the not-yet-photographed list, and the last dangling link in the collection: the Second Padawan has carried \"Killed by\" against this exact id since he was catalogued. You called him the purple shadow Prince this time - the card uses the Purple Shadow, which is what the world notes and that link have always called him, and because this world already has a Shadow Prince who is the Shadow King\'s son and is good. If Prince is a title he actually holds, say so. He also settles an old question: he is a Sith who talked to the shadow people, not one of them, so he and the Shadow King are not the same power after all."
  },


  {
    id: "the-martian-leader",
    name: "The Martian Leader",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Invasion Leader",
    group: "The Martians",
    location: "",
    relations: [],
    rating: 0,
    background:
      "He led an army of Martian aliens in an invasion of Lego City.",
    provenance:
      "Not a minifigure at all - a Bionicle build, and taller than everyone " +
      "else here. A dark brown mask with two hollow white eye slits over a " +
      "translucent green body, the chest open around a bare socket, with " +
      "translucent green limbs pinned on at every joint.",
    tags: ["villain", "martian", "alien", "invasion", "lego-city", "bionicle", "not-a-minifigure"],
    images: ["images/the-martian-leader-01.jpg"],
    acquired: "",
    notes: "The fifth not-a-minifigure in the collection, after the Ancient out of a Tonka set, the Salvager, the Yellow Spaceman and the Bionicle wrap on Claws - and the first that is an enemy. He is also the only villain so far to have attacked Lego City itself rather than the wider world, which puts him against Lego City Law: eleven officers, the Commissioner, the Watch Commander and the Nightwatch Captain, and nobody has written a line between him and any of them."
  },


  {
    id: "the-iron-league-captain",
    name: "The Iron League Captain",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Captain",
    group: "The Iron League",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Captain of the Iron League - a set of specialists who can take out any " +
      "target, and some of the highest-rated bounty hunters in the galaxy.\n\n" +
      "They can kill just about anybody. They do have a big price.",
    provenance:
      "A silver combat helmet with a brow shelf and side boxes over black " +
      "goggles and a grim mouth. Bare tan arms into black hands. Grey torso " +
      "printed with a white and silver chest harness over dark red, yellow " +
      "clips at the waist, and grey legs with equipment panels down both thighs.",
    tags: ["villain", "iron-league", "bounty-hunter", "captain", "specialist", "for-hire", "expensive"],
    images: ["images/the-iron-league-captain-01.jpg"],
    acquired: "",
    notes: "A new group, named by you, with one man in it so far - the rest of the League has not been photographed. Filed bad, and you have since confirmed it outright - the League came with the line that all of these people are bad, which settles a flag this card used to carry. He is the first villain in a named unit at all; the other twelve are individuals."
  },



  {
    id: "the-iron-league-assassin",
    name: "The Iron League Assassin",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Assassin",
    group: "The Iron League",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Iron League. An expert in combat and a first-rate assassin, trained " +
      "specifically for fighting underwater and in space - and he still does " +
      "plenty of boots on the ground.",
    provenance:
      "Black flight helmet with silver-lensed goggles pushed over the eyes and " +
      "a wide grin under them. A ribbed grey air hose collared round the neck " +
      "and a black cape behind. The League chest plate - white and silver " +
      "harness over dark red with yellow clips - and grey legs printed with " +
      "dials, one yellow gauge and one red.",
    tags: ["villain", "iron-league", "assassin", "underwater", "space", "goggles", "air-hose"],
    images: ["images/the-iron-league-assassin-01.jpg"],
    acquired: "",
    notes: "The only figure in the collection trained for all three - underwater, space and ground. Aqua Force handle what happens under the water and the Space Militia handle what happens off the planet, and both of those are whole services; he is one man who does both and the ground as well."
  },


  {
    id: "the-iron-league-rifleman",
    name: "The Iron League Rifleman",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Rifleman",
    group: "The Iron League",
    location: "",
    relations: [],
    rating: 0,
    background: "Iron League. Their rifleman.",
    provenance:
      "Pale blond hair swept up hard, a black visor band with blue lenses " +
      "across the eyes, black flashes down both cheeks and a fanged grin. " +
      "Yellow arms into black hands. The League chest plate, and grey legs " +
      "printed with brown and gold plating.",
    tags: ["villain", "iron-league", "rifleman", "fangs", "visor"],
    images: ["images/the-iron-league-rifleman-01.jpg"],
    acquired: "",
    notes: "Third of the League and the only one of them showing teeth. All four wear the same chest plate, which is the first time a villain unit in this collection has had a uniform at all - the Enemy are two anonymous squads and everybody else on that side dresses as themselves."
  },


  {
    id: "the-charming-bounty-hunter",
    name: "The Charming Bounty Hunter",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Bounty Hunter",
    group: "",
    location: "",
    relations: [
      { to: "the-narcissist", label: "Brother of" },
    ],
    rating: 0,
    background:
      "Extremely charming, and a complete sociopath. Cheerful about it - oh " +
      "boy, here I go killing again - and genuinely good company right up " +
      "until he is working.\n\n" +
      "He loves it enough that he made a career of it. A lot of his kills are " +
      "very messy.",
    provenance:
      "Dark brown hair over a plain yellow face with a small, easy smile - " +
      "the mildest face on any villain here. Cream field jacket printed with " +
      "a white collar scarf, two pairs of clips at the chest, a radio at the " +
      "breast and a belt with a buckle and pouch. Black legs, black hands.",
    tags: ["villain", "bounty-hunter", "charming", "sociopath", "cheerful", "messy"],
    images: ["images/the-charming-bounty-hunter-01.jpg"],
    acquired: "",
    notes: "Not filed with the Iron League: he arrived between two of them but you described him on his own, and his torso is nothing like their chest plate. Say the word and he joins. He is the fifth bounty hunter in the collection and the first who is not on our side - Kaz, the Golden Sniper, the Ninja Robot and the Masked Bounty Hunter are all good. And his is the only villain face here that is simply a smile: no scar, no visor, no mask, no green."
  },


  {
    id: "the-iron-league-alien",
    name: "The Iron League Alien",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Bounty Hunter",
    group: "The Iron League",
    location: "",
    relations: [],
    rating: 0,
    background: "Iron League.",
    provenance:
      "A brown wide-brimmed hat over a grey-blue face - not human. Deep orange " +
      "eyes, a lined brow and a hard downturned mouth. Grey arms and hands, " +
      "the League chest plate, and grey legs printed with the same equipment " +
      "panels the Captain wears.",
    tags: ["villain", "iron-league", "bounty-hunter", "alien", "hat", "orange-eyes"],
    images: ["images/the-iron-league-alien-01.jpg"],
    acquired: "",
    notes: "Fourth of the League. The only non-human in it, and the only alien on the villain side other than Phalanx, the Martian Leader and the Lead Alien Mercenary - none of whom is written to anybody. Naming note: you have called this outfit the Iron League, the Iron Legion, the Iron Squadron and the Iron Squad Legion across two batches. The cards use Iron League, which is what you said first; one word changes all four of them."
  },


  {
    id: "the-traitor-captain",
    name: "The Traitor Captain",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Captain, Verdauf Squadron",
    group: "The Verdauf",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A captain of the Verdauf who misled his own troops into a massacre on " +
      "purpose.\n\n" +
      "He put half of them aboard a ship he had rigged with explosives, meant " +
      "to kill the ones who were on the good side. The men who lived only " +
      "lived because the bomb on the second ship failed to go off.",
    provenance:
      "White clone armour marked in pale green - a crested helmet with a fin " +
      "over the crown, a black visor bar across the eyes and a green chevron " +
      "at the mouth. Green shoulder flashes, a yellow crest at the sternum and " +
      "a rank plate at the belt, green wedges at both knees, and a heavy green " +
      "cloth cape.",
    tags: ["villain", "verdauf", "captain", "traitor", "massacre", "sabotage", "clone-armor", "cape"],
    images: ["images/the-traitor-captain-01.jpg"],
    acquired: "",
    notes: "Read carefully before taking this as settled. The Verdauf already have a captain on record - the Green Captain, who is known by his light green armour, who dies aboard an exploding ship, and whose card says he set the bomb off himself so that everyone else lived. This man is also a Verdauf captain, also in light green, also with a rigged ship and a bomb and survivors. Either they are two different men, or they are one story told two ways and the version on the Green Captain\'s card is the lie he left behind. I have not touched the Green Captain: overwriting a death that is quoted in two world notes on an inference would be the wrong call. Say which it is. Filed inside the Verdauf because he commanded them - a group shows everybody to everybody, and these are exactly the people he did it to."
  },



  {
    id: "general-shepherd",
    name: "General Shepherd",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "General",
    group: "The Green Rangers",
    location: "",
    relations: [],
    rating: 0,
    background:
      "He is in charge of the Green Rangers, and he stranded them.\n\n" +
      "He put them on a battlefield on a mission they were not meant to come " +
      "back from. They somehow got out of it anyway.",
    provenance:
      "Olive helmet over a fair face with a heavy brown moustache and a flat, " +
      "unimpressed mouth. Plain green field jacket printed with two breast " +
      "pockets and a webbing belt, green arms and green legs, pale hands. " +
      "Nothing on him marks a rank.",
    tags: ["villain", "general", "green-rangers", "betrayal", "suicide-mission", "command"],
    images: ["images/general-shepherd-01.jpg"],
    acquired: "",
    notes: "This card answers the loudest open question in the catalogue. The world note on the Green Rangers was written because they have the worst casualty rate of any unit here - three of eight dead - and it ended by saying the one time this outfit had somebody in charge, he was already gone. That was wrong. They had a general the whole time, and he is the reason. No causal line is drawn between him and the three who are dead, because you have not drawn one; what is written is what you said, which is that he sent them somewhere to die and they got out anyway. Named the way you named him, and the Modern Warfare comparison is yours rather than mine - the Outlaw\'s card writes its comparison as traits instead, and you can have that here too. Filed inside the unit because he commands it, which means the Rangers are the second group in the collection with people on both sides in it."
  },


  {
    id: "the-neon-fanatic",
    name: "The Neon Fanatic",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Fanatic",
    group: "",
    location: "",
    relations: [
      { to: "quinn", label: "Follows" },
    ],
    rating: 0,
    background:
      "A fanatic of Quinn\'s who went and did the same thing to himself. He " +
      "committed his own body to the neon, which makes him extremely hard to " +
      "kill.\n\n" +
      "Hyper, violent, and completely devoted.",
    provenance:
      "A translucent yellow-green head under a clear domed helmet - a wide " +
      "square-toothed grin, black brows drawn down hard and red pinpricks for " +
      "eyes. Silver chest armour with a glowing yellow-green core at the " +
      "sternum, one black arm and one grey, a red belt and black legs.",
    tags: ["villain", "fanatic", "quinn", "neon", "hard-to-kill", "devoted", "translucent"],
    images: ["images/the-neon-fanatic-01.jpg"],
    acquired: "",
    notes: "The first follower Quinn has. Everything else on his card is an equal or an enemy - the Shadow King, the Prince Pretender, the Purple Shadow - and this is the first person written as simply belonging to him. Worth keeping apart from the Goo, which is the collection\'s other body-taking substance: the Goo is something that happens to people and turns what it takes to grey rock, and the neon is something two men have now chosen."
  },


  {
    id: "the-hitman",
    name: "The Hitman",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Hitman",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "An expert poacher who became a hitman. Same skills, different quarry.",
    provenance:
      "Swept fair hair, a raw orange scar down one temple, a heavy stubbled " +
      "jaw and a hard flat mouth. White jacket open over a grey striped shirt " +
      "with a necklace of long teeth at the throat, a thick coil of rope round " +
      "the waist, tan legs.",
    tags: ["villain", "hitman", "poacher", "assassin", "trophies", "scar", "rope"],
    images: ["images/the-hitman-01.jpg"],
    acquired: "",
    notes: "Second poacher on the villain side. The Modified Arms Dealer used to be one too, and went into weapons; this one went into killing people directly. Neither is written to the other. He also wears teeth round his neck, which puts him with the Red Baron as the second man here who keeps something off what he kills."
  },


  {
    id: "quinns-second-in-command",
    name: "Quinn\'s Second-in-Command",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Second in Command",
    group: "",
    location: "",
    relations: [
      { to: "quinn", label: "Second-in-command to" },
    ],
    rating: 0,
    background:
      "Quinn\'s second, on the technology side. He organises the killing " +
      "machines and plans the invasions.",
    provenance:
      "White hair swept back off a lined yellow face, a white moustache and " +
      "beard, and a black eyepatch with a teal lens set into it over one eye. " +
      "Brown torso under a black shoulder rig with a targeting scope mounted " +
      "at the collarbone and a bandolier printed beneath. Olive legs printed " +
      "with rope, buckles and pouches, one grey hand and one yellow.",
    tags: ["villain", "quinn", "second-in-command", "technology", "war-machines", "invasions", "eyepatch"],
    images: ["images/quinns-second-in-command-01.jpg"],
    acquired: "",
    notes: "The first time anybody has been placed under Quinn rather than beside him. He also gives the villains something they have not had: a planner. Everything on that side so far has been a person with an appetite or a grievance, and this one sits down and organises invasions. The scope mounted at his collarbone is the only aiming device on any figure in the collection."
  },


  {
    id: "the-bounty-hunter-captain",
    name: "The Bounty Hunter Captain",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Captain",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A bounty hunter, and a captain of them.",
    provenance:
      "Brown wide-brimmed hat over a yellow face with a long fair moustache " +
      "and goatee and a scar at one eye. A deep red neckerchief knotted at the " +
      "throat over a dark blue and grey torso printed with straps and a " +
      "bedroll. A heavy ribbed grey mechanical arm on one side, an ordinary " +
      "yellow hand on the other, and brown legs.",
    tags: ["villain", "bounty-hunter", "captain", "mechanical-arm", "prosthetic", "scar", "neckerchief"],
    images: ["images/the-bounty-hunter-captain-01.jpg"],
    acquired: "",
    notes: "Not filed with the Iron League, whose four members all wear the same chest plate and who already have a captain; this man is in nothing like it. If he captains them too, or captains somebody else, say so. Sixth bounty hunter here and the second on the villain side. The mechanical arm is the fifth body modification worn as history in this collection, after the Discarded, the Mechanic, the Rebuilt and the Modified Arms Dealer - and the third of the five to be on this side."
  },



  {
    id: "the-bionic-brother",
    name: "The Bionic Brother",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Brawler",
    group: "",
    location: "",
    relations: [
      { to: "the-lead-alien-mercenary", label: "Brother of" },
    ],
    rating: 0,
    background:
      "Brother to the mercenary who leads the aliens. He has bionic legs and " +
      "super strength, which makes him made for close work - hand to hand is " +
      "where he is at his best.",
    provenance:
      "A pale green face with red eyes, two lower fangs and a scar hooked down " +
      "one cheek, under a swept ginger hairpiece. Pale green torso printed " +
      "with a gold X harness and a gold disc at the chest, green arms and a " +
      "green hand. White armoured legs plated in silver.",
    tags: ["villain", "bionic", "prosthetic", "super-strength", "hand-to-hand", "alien", "brother"],
    images: ["images/the-bionic-brother-01.jpg"],
    acquired: "",
    notes: "Linked to the Lead Alien Mercenary as his brother on the strength of the description - green skin and golden hair is that man exactly, and nothing else here matches both. If you meant somebody else, one word moves it. His legs are the sixth body modification worn as history in this collection, and they arrive in the same batch as the man whose team makes them; no line is written between those two, because you have not drawn one."
  },


  {
    id: "the-space-outlaw",
    name: "The Space Outlaw",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Outlaw",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A space outlaw and a cowboy, in a cape he is pleased with.\n\n" +
      "He gets himself into bar fights and duels on purpose. Not over money " +
      "and not over insults - he does it because he likes it.",
    provenance:
      "Long dark hair, a curled black moustache over a wide grin and stubble " +
      "across the jaw. Black doublet printed with two crossed studded " +
      "bandoliers and a gold buckle at the belt, black legs with gold " +
      "strapwork, brown hands. A deep red cloth cape.",
    tags: ["villain", "outlaw", "cowboy", "duellist", "bar-fights", "cape", "showman"],
    images: ["images/the-space-outlaw-01.jpg"],
    acquired: "",
    notes: "Named close to the Outlaw on purpose, because that is what you called him, and the two are worth reading together. The Outlaw is a space cowboy who would rob any of the good guys blind and never hurt one, and the Great Shadow War settled him; this one fights for the pleasure of fighting and is filed bad. Same job, same century, opposite ends of it. Say the word if you would rather he had a name that did not shadow the other one."
  },


  {
    id: "the-bionics-leader",
    name: "The Bionics Leader",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Leader, Bionics Team",
    group: "The Bionics Team",
    location: "",
    relations: [],
    rating: 0,
    background:
      "He leads the bionics team. What they build are prosthetics that double " +
      "as weapons - a limb that is also a gun.",
    provenance:
      "Black hair cut flat on top over a yellow face with a small moustache " +
      "and a hard mouth, and a grey space collar with round ports at the ears. " +
      "Black torso with a silver chest plate, a lime green badge at the " +
      "sternum, and a row of silver blocks across the belt. One grey arm, one " +
      "black, black legs.",
    tags: ["villain", "bionics", "prosthetics", "weapons", "engineer", "leader", "new-group"],
    images: ["images/the-bionics-leader-01.jpg"],
    acquired: "",
    notes: "A new group, and a significant one. This world has had body modification worn as history since very early - the Discarded, whose silver arm is the reason the civilization has cybernetics at all, then the Mechanic, the Rebuilt, the Modified Arms Dealer, the Bounty Hunter Captain and now the Bionic Brother. Until today nobody had said who makes them. The answer is a team, and it is on the villain side, and what it builds is a limb that is also a gun. He wears the same lime green badge as the Guardsman\'s Partner, which is the only thing tying those two together and is not written as a link."
  },


  {
    id: "the-narcissist",
    name: "The Narcissist",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Bounty Hunter",
    group: "",
    location: "",
    relations: [
      { to: "the-charming-bounty-hunter", label: "Brother of" },
    ],
    rating: 0,
    background:
      "Brother to the cheerful sociopath. This one runs on ego - how he looks, " +
      "what he is wearing, how he comes across - and underneath it he is as " +
      "unwell as his brother, in a different direction.\n\n" +
      "He reads as perfectly normal at first, and charming with it.",
    provenance:
      "Brown hair over a plain yellow face with a small closed smile - no " +
      "scar, no marking, nothing. Black doublet printed with crossed studded " +
      "bandoliers over a white shirt and a buckle at the belt, black legs with " +
      "silver strapwork, brown hands.",
    tags: ["villain", "bounty-hunter", "narcissist", "vanity", "charming", "brother", "unmarked-face"],
    images: ["images/the-narcissist-01.jpg"],
    acquired: "",
    notes: "Second pair of brothers on the villain side in one batch. Worth seeing the two of them together: his brother is a plain yellow face with an easy smile and this is a plain yellow face with an easy smile, and between them they are the only two villains here whose faces carry no mark at all - everybody else on that side has a scar, a visor, a mask or is not human. The wrongness in both of them is entirely under the surface, and the plastic agrees. He also wears nearly the same doublet as the Space Outlaw, who arrived in the same batch; nothing is written between them."
  },


  {
    id: "the-guardsmans-partner",
    name: "The Guardsman\'s Partner",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Assassin",
    group: "",
    location: "",
    relations: [
      { to: "the-guardsman", label: "Was his partner" },
    ],
    rating: 0,
    background:
      "He and the Guardsman were a duo, before.\n\n" +
      "What he is now is the most efficient killer in this world. Quiet, " +
      "formal, methodical - he does not threaten anybody, he simply arrives, " +
      "and the reputation does most of the work before he gets there. He " +
      "takes an enormous amount of punishment and keeps walking. People who " +
      "know what he is say his name carefully.\n\n" +
      "And the reason for all of it is money. He turned because he wanted to " +
      "be filthy rich.",
    provenance:
      "Long black hair, a black goatee, and orange scoring across the brows " +
      "and cheeks. Black torso with a grey chest plate and a lime green badge " +
      "at the shoulder, black arms, grey legs printed with thigh panels and " +
      "equipment slots.",
    tags: ["villain", "assassin", "efficient", "relentless", "reputation", "greed", "turned", "former-partner"],
    images: ["images/the-guardsmans-partner-01.jpg"],
    acquired: "",
    notes: "Placeholder name, taken from the only fixed thing about him. Written as traits rather than naming the comparison you gave, the way the Outlaw and the Anakin and Avatar cards are done - say the word and it goes in outright. The Guardsman is one of the elite protection forces around the Prince and climbed the whole ladder from soldier to agent to the top of it, and his card has been empty of connections since he was written; this is the first, and it is this. Thirty-one villains and he is the first whose motive is simply money - the rest want a throne, a war, a meal or revenge. He wears the same lime green badge as the Bionics Leader and nobody has said why."
  },



  {
    id: "the-infamous-traitor",
    name: "The Infamous Traitor",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Technician Sergeant",
    group: "",
    location: "",
    relations: [
      { to: "quinn", label: "Follows" },
    ],
    rating: 0,
    background:
      "One of the most infamous traitors this world has. He was a technician " +
      "sergeant in the Prince\'s army, and he went over to Quinn.\n\n" +
      "He sold state secrets. He got out on a ship carrying stolen technology " +
      "and weapons and delivered the lot to Quinn. And before he left he got " +
      "into the mainframe and left every entrance of a string of royal bases " +
      "unlocked, so that they could be walked into.",
    provenance:
      "Grey knitted cap over a pale face, black brows drawn hard down and a " +
      "flat closed mouth. White clone chest armour printed over the torso with " +
      "blue sleeves and grey hands, white legs with a grey hip.",
    tags: ["villain", "traitor", "technician", "sergeant", "quinn", "state-secrets", "sabotage", "hacker"],
    images: ["images/the-infamous-traitor-01.jpg"],
    acquired: "",
    notes: "He is a technician who turned, which is worse in this world than it sounds - the Space Militia\'s perfect safety record is built on one man\'s intelligence work, and the Royal Space Academy runs on its technicians. The damage here is the same job pointed the other way: he did not fight anybody, he unlocked the doors. No group written; the Prince\'s army is not a group in this catalogue, and the Royal Galactic Army has exactly one man in it. Say which force he was in."
  },


  {
    id: "the-demon-lord",
    name: "The Demon Lord",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Demon Lord",
    group: "",
    location: "The Underworld",
    relations: [],
    rating: 0,
    background:
      "He comes from the underworld.\n\n" +
      "What he does is raise the dead around him and fight with them. " +
      "Skeletons, or people killed recently enough to still have a body - he " +
      "reanimates the corpses and they go in with him.",
    provenance:
      "A dark metallic helm with a hooked face guard and a flared crest, " +
      "clawed pauldrons standing off both shoulders, and a moulded breastplate " +
      "over a dark torso. Pale grey legs marked with black. Everything about " +
      "him is metal or bone-coloured; there is no skin showing anywhere.",
    tags: ["villain", "demon", "underworld", "necromancy", "undead", "skeletons", "armour"],
    images: ["images/the-demon-lord-01.jpg"],
    acquired: "",
    notes: "He brings a whole place with him. The underworld has never been mentioned anywhere in this collection - there is a shadow dimension, a yellow dimension, the Bin, the space between worlds and the realm where dying costs you your gear, and now there is somewhere the dead are. He is also the first power here whose army is made of people who are already dead, which puts him beside Phalanx, whose army is made of people whose bodies he took while they lived."
  },


  {
    id: "the-disc-throwers-brother",
    name: "The Disc Thrower\'s Brother",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Disc Thrower",
    group: "",
    location: "",
    relations: [
      { to: "the-disc-thrower", label: "Brother of" },
    ],
    rating: 0,
    background:
      "The Disc Thrower\'s brother, and as good with a disc as he is. The two " +
      "of them were trained together on another planet.\n\n" +
      "He betrayed the entire Space Militia and went over to the other side. " +
      "Then he went to his brother and tried to bring him too, and his brother " +
      "said no.",
    provenance:
      "Ginger hair over a yellow face with one brow up and a small crooked " +
      "mouth. Grey mail torso printed with a broad ringed disc at the chest, " +
      "dark blue arms and dark blue legs, yellow hands.",
    tags: ["villain", "traitor", "space-militia", "disc", "brother", "recruiter"],
    images: ["images/the-disc-throwers-brother-01.jpg"],
    acquired: "",
    notes: "The Disc Thrower\'s card has said since it was written that his brother was in the same militia and had not been photographed; his note even wondered whether it was Crispus, and the Planner\'s card carries a maybe about it too. It is neither. It is this man, and he is filed with the villains. The Space Militia is the unit whose entire identity is that they keep everybody alive - a perfect record built out of the General\'s grief for his son - and one of them walked out to the other side and came back for his brother. Kept out of the group: he betrayed it, and he is not in it any more. Say the word if he should sit inside it the way the Traitor Captain sits inside the Verdauf."
  },


  {
    id: "johnny-plasma",
    name: "Johnny Plasma",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Knight",
    group: "",
    location: "",
    relations: [
      { to: "the-nexo-knight", label: "The knight who stood in his shadow" },
    ],
    rating: 0,
    background:
      "The famous one. The spectacular sword, the celebrated name, the figure " +
      "everybody was told to look up to.\n\n" +
      "He is a narcissist, and the public face was the whole of it. The heroism " +
      "was something he wore because it was being applauded; underneath he " +
      "never liked any of it. When he switched sides it was not a fall, it was " +
      "him stopping pretending.\n\n" +
      "Smiling, golden, and entirely hollow.",
    provenance:
      "Brown hair swept forward over a yellow face wearing a wide, pleased " +
      "grin with a dimple at each corner. A gold moulded pauldron piece with " +
      "wings standing off both shoulders and a horse crest in orange at the " +
      "sternum, over white and gold armour printed down the torso and both " +
      "legs. Pale blue arms, gold hands.",
    tags: ["villain", "knight", "nexo", "famous", "narcissist", "public-face", "turncoat", "gold"],
    images: ["images/johnny-plasma-01.jpg"],
    acquired: "",
    notes: "Read this one and correct it if it is wrong, because it is a real claim. The Nexo Knight\'s card has said from the day it was written that there is a more famous Nexo Knight than him, one with a spectacular sword, who turned out to be a villain - and that the modest one has spent his whole career in that man\'s shadow and never minded. That card\'s note ends: the knight he stands behind is a villain and is still to come. This is a Nexo Knights figure, he is the celebrated one, and he turned. So the link is written. If Johnny Plasma is somebody else and the famous knight is still out there, one word takes it out. Written as traits rather than naming the comparison you gave, the way the Outlaw and the Anakin and Avatar cards are done."
  },


  {
    id: "the-fleet-general",
    name: "The Fleet General",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Fleet General",
    group: "",
    location: "",
    relations: [
      { to: "quinn", label: "Handed him a fleet" },
    ],
    rating: 0,
    background:
      "Fleet command general of the Prince\'s forces, and he defected.\n\n" +
      "The way he did it was to send a small fleet out to be surrounded and " +
      "taken. Its whole crew was imprisoned and killed. The ships were the " +
      "point: that is how Quinn got a space fleet.",
    provenance:
      "White peaked cap over a lined, sour face with a heavy moustache. White " +
      "dress tunic printed with a pale blue winged crest at the chest and three " +
      "grey rank bars across the stomach, a black belt, white legs and white " +
      "hands. A white cloth cape.",
    tags: ["villain", "general", "fleet", "defector", "traitor", "quinn", "dress-uniform", "cape"],
    images: ["images/the-fleet-general-01.jpg"],
    acquired: "",
    notes: "He is the most expensive traitor in the collection - he did not steal a thing, he spent a crew. Worth putting next to the Fleet Commander, who is filed good and whose card has asked since it was written whose fleet he actually commands; nobody has said, and now there is a fleet that changed hands. Different men on the evidence - that one is in a grey officer\'s tunic with a rank bar, this one is in white dress uniform and a cape - but if they are the same man at two points in his life, say so. Also the second white-and-unprinted-looking figure on the villain side, after the Light King; this one at least has a face."
  },



  {
    id: "wen",
    name: "Wen",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Mentor",
    group: "",
    location: "",
    relations: [
      { to: "quinn", label: "Took him under his wing" },
    ],
    rating: 0,
    background:
      "Quinn had a teacher, and this is him. Wen mentored him before Quinn " +
      "went all the way off the deep end.\n\n" +
      "He started as a disgruntled soldier and walked away from it. Then he " +
      "studied the dark arts, and then he went looking - out into the world " +
      "after crystals that might stretch his life out and burn the disease " +
      "out of him. He ran a militia of his own along the way, five or ten " +
      "people, small.\n\n" +
      "Then he took Quinn on.",
    provenance:
      "Grey hair swept back, a grey moustache, one eye narrowed. Olive " +
      "explorer\'s shirt printed with two buttoned chest pockets, a red " +
      "chequered bandana at the throat and a coil of rope slung across the " +
      "body. Black trousers with a gold-buckled belt and a gold star hanging " +
      "at the hip.",
    tags: ["villain", "mentor", "quinn", "dark-arts", "crystals", "life-extension", "disease", "explorer", "old"],
    images: ["images/wen-01.jpg"],
    acquired: "",
    notes: "One of the few villains here with a proper name, and the only one who is older than Quinn in every sense. The making of Quinn has always read as a man who taught himself: he was left to die in the cold, drew a conclusion, and went and studied. There was somebody standing there. Note also what he was looking for - crystals to prolong a life and drive out a disease. Quinn ended up changing the essence of his own body so nothing could kill him, and the man who trained him spent his life chasing the same thing by gentler means. Say the word if Wen never actually got what he was after."
  },


  {
    id: "the-soldier-in-the-brown-helmet",
    name: "The Soldier in the Brown Helmet",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Soldier",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "No story given for him yet. He arrived in the villain batch and is " +
      "filed there until you say otherwise.",
    provenance:
      "Brown padded flight helmet with the ear flaps down over a plain yellow " +
      "face and an easy smile. Cream jacket printed with a grey harness, two " +
      "buckled straps and an equipment belt, brown arms into brown hands, " +
      "brown legs with a grey hip.",
    tags: ["villain", "soldier", "helmet", "no-story-yet", "needs-a-description"],
    images: ["images/the-soldier-in-the-brown-helmet-01.jpg"],
    acquired: "",
    notes: "This is the honest version of a guess. Five figures came in that batch and four descriptions came with them - Wen, the Commissioner\'s apprentice, Long Arm Johnson and the Butcher - and the apprentice one was not numbered. I put it on the third figure, who is scarred, armed, wears a badge on the shirt and a death\'s head on the leg, over this one, who is smiling in a flight helmet. If I have them the wrong way round, say so and the two cards swap. Either way this man has no story yet and should get one."
  },


  {
    id: "the-commissioners-apprentice",
    name: "The Commissioner\'s Apprentice",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Apprentice",
    group: "",
    location: "Lego City",
    relations: [
      { to: "the-commissioner", label: "Left him for dead" },
    ],
    rating: 0,
    background:
      "The Commissioner\'s protege, and very promising at first.\n\n" +
      "When the great betrayal came he was standing beside his commander. He " +
      "shot him through the thigh, stabbed him in the chest, and left him " +
      "slumped over a command board to die. He killed two guards on the way " +
      "out and stole a ship, and he took the information on the mothership " +
      "with him.",
    provenance:
      "Tousled brown hair over a yellow face with a scar through one brow and " +
      "a hard, level mouth. Cream shirt printed with two buttoned pockets, a " +
      "small gold badge at the breast, a brown belt and a holster. Black legs " +
      "carrying a white skull, a length of chain and orange banding.",
    tags: ["villain", "traitor", "apprentice", "police", "lego-city", "great-betrayal", "murder", "skull"],
    images: ["images/the-commissioners-apprentice-01.jpg"],
    acquired: "",
    notes: "The Commissioner\'s card has said from the day it was written that he has got a little old and so he has a protege, a Padawan - and that in this world Padawan just means apprentice, nothing to do with the Force. This is that man. The world note on the day of betrayals says Quinn arranged every turning to land inside the same minute of the same day, and that students turned on their masters and masters on their students. That has been an abstraction until now. This is one of them, with a name for the victim. The Commissioner is left for dead rather than dead: you said left him to die, and his card has not been touched. Say whether he lived."
  },


  {
    id: "long-arm-johnson",
    name: "Long Arm Johnson",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Bounty Hunter",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "An alien bounty hunter, and he has long arms.",
    provenance:
      "Dark blue knitted cap over a yellow face that is not a human one - a " +
      "broad grey snout, small black eyes set wide, freckling across both " +
      "cheeks and a mouth of pointed teeth. Brown tunic printed with a gold " +
      "studded belt and gold clasps, long yellow arms into yellow hands, " +
      "black legs.",
    tags: ["villain", "bounty-hunter", "alien", "long-arms", "fangs", "snout"],
    images: ["images/long-arm-johnson-01.jpg"],
    acquired: "",
    notes: "One of only a handful of villains with a personal name rather than a description - Quinn, Phalanx, Johnny Plasma, Wen and this man. Not filed with the Iron League: they all wear the same chest plate and he is in nothing like it. Say the word if he is one of theirs."
  },


  {
    id: "the-butcher",
    name: "The Butcher",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Doctor",
    group: "",
    location: "",
    relations: [
      { to: "the-evil-doctor", label: "Runs experiments with" },
    ],
    rating: 0,
    background:
      "A doctor, and they call him the Butcher.\n\n" +
      "What he works on is the dead. He takes corpses and tries to bring them " +
      "back or to make weapons out of them - his stated problem is the problem " +
      "of the dead, and this is his answer to it.\n\n" +
      "The rest of his work is on the living. He builds torture devices, and " +
      "he uses them on captured good people to get information out of them.",
    provenance:
      "Ginger hair and a full ginger beard over a wide, delighted grin - he is " +
      "smiling in the photograph. White coat printed with a buttoned collar " +
      "and a brown tool belt carrying a green-filled vial, a pair of open " +
      "scissors and a saw-edged blade. Black arms into black hands, black legs.",
    tags: ["villain", "doctor", "butcher", "reanimation", "corpses", "torture", "interrogation", "surgery"],
    images: ["images/the-butcher-01.jpg"],
    acquired: "",
    notes: "Named the Butcher rather than the Doctor, which you also called him, because this collection already has a Doctor - Dr. Oz, who is filed good and works with an assistant. Two men here now work on the dead and they could not be less alike: the Demon Lord comes out of the underworld and raises them whole, and this one is a man with scissors trying to solve it. He is also the second villain whose face is simply a happy one, after the Charming Bounty Hunter - and the only figure in five hundred and forty-eight who is grinning about this."
  },



  {
    id: "the-dictator",
    name: "The Dictator",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Dictator",
    group: "",
    location: "",
    relations: [
      { to: "the-war-secretary", label: "His Secretary of War" },
      { to: "quinn", label: "Aligned with" },
    ],
    rating: 0,
    background:
      "A fascist dictator, and he already runs a planet of his own.\n\n" +
      "What he wants is the rest of them. He aligned himself with Quinn " +
      "specifically so that he could hold the other planets in his outer rim.",
    provenance:
      "Brown peaked officer\'s cap with a broad gold band and a gold badge. A " +
      "tanned face, brows down hard, mouth flat. Pale khaki tunic printed with " +
      "an open collar, a rifle slung on a leather strap across the chest, " +
      "camouflage rolls and buttoned pockets, and a belt hung with pouches and " +
      "an axe head down one thigh.",
    tags: ["villain", "dictator", "fascist", "planet", "outer-rim", "conquest", "quinn", "uniform"],
    images: ["images/the-dictator-01.jpg"],
    acquired: "",
    notes: "The first villain here who already holds territory. Everybody else on that side wants something they have not got - a throne, a war, a meal, money, the world remade. This one has a planet and wants the neighbours, which is a different kind of want and a much more ordinary one. He is also the first to bring the outer rim into the catalogue as a place anybody governs."
  },


  {
    id: "the-dapper-bounty-hunter",
    name: "The Dapper Bounty Hunter",
    variant: "Hat off, hat on",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Bounty Hunter",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "An alien bounty hunter with a much better wardrobe than his face " +
      "suggests, and - genuinely - pretty friendly.\n\n" +
      "He does not have an ethical bone anywhere in him. It is not that he is " +
      "cruel: he does not even like killing. He is simply extremely good at " +
      "it, so that is the market he ended up in.",
    provenance:
      "A pale green head that is nothing like a face - two enormous black eyes " +
      "with yellow slits in them, fine lines worked over the skull, and a gold " +
      "beaked plate covering the mouth. Bright orange hair swept over it. Black " +
      "coat printed with two crossed studded bandoliers over a cream shirt and " +
      "a buckled belt, black legs with gold strapwork, pale green hands. A dark " +
      "brown fedora.",
    tags: ["villain", "bounty-hunter", "alien", "well-dressed", "friendly", "amoral", "fedora"],
    images: [
      { src: "images/the-dapper-bounty-hunter-01.jpg", caption: "Hat off" },
      { src: "images/the-dapper-bounty-hunter-02.jpg", caption: "Hat on" },
    ],
    acquired: "",
    notes: "Two photographs, one man, the way Luke and Obi-Wan and Quinn are done - this pair is just the hat. Bounty hunting is the single most common job on the villain side now - nine figures here carry the role and five of them are filed bad, and that is before the Bounty Hunter Captain, who is one too and is filed under Captain. He is easily the strangest of them on the moral question this collection keeps asking. The Charming Bounty Hunter loves the work and is a sociopath about it. This one does not enjoy it at all, is good company, and does it anyway because he is good at it. Nothing is written between him and any of the others; he wears none of the Iron League\'s chest plate."
  },


  {
    id: "the-defector-commander",
    name: "The Defector Commander",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Battalion Commander",
    group: "",
    location: "",
    relations: [
      { to: "the-looter", label: "His loyal man" },
      { to: "quinn", label: "Defected to" },
    ],
    rating: 0,
    background:
      "A battalion commander who defected, and took his battalion with him in " +
      "the worst possible sense.\n\n" +
      "He walked his own troops into a chamber and had it gassed. Then he had " +
      "one of his loyal men strip the bodies of everything they were carrying, " +
      "and left for Quinn\'s super base with the lot.",
    provenance:
      "White peaked cap over a scarred face - red lines across both cheeks, a " +
      "pale moustache, teeth bared. White officer\'s tunic printed with a " +
      "panelled front and a data plate at the chest, white legs with a pocket " +
      "outlined on each thigh, white hands, and a cream cloth cape.",
    tags: ["villain", "traitor", "commander", "battalion", "gas", "massacre", "looting", "quinn", "cape"],
    images: ["images/the-defector-commander-01.jpg"],
    acquired: "",
    notes: "Not the Battalion Commander, who is filed good and runs the Space Militia from the mothership - this is another one, in a different uniform, and you called him another. Third officer here to spend his own men: the Traitor Captain rigged a ship with half the Verdauf aboard, the Fleet General sent a crew to be surrounded and taken, and this one used a room. He also brings Quinn\'s super base into the catalogue, which nothing had named before. And there is a man unaccounted for in his story - the loyal one who stripped the bodies."
  },


  {
    id: "the-propagandist",
    name: "The Propagandist",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Propagandist",
    group: "The Propaganda Unit",
    location: "",
    relations: [
      { to: "the-first-man-in-space", label: "Fronted by" },
      { to: "the-pa", label: "His assistant" },
    ],
    rating: 0,
    background:
      "He plans the shots and writes the stories. What he puts out is " +
      "misleading information about the royal system, aimed at whoever will " +
      "take it.",
    provenance:
      "Brown hair swept up off a plain yellow face with an easy, pleased " +
      "smile. Cream shirt under an orange-brown waistcoat, and a red press " +
      "pass clipped to it printed with a small photograph. Blue legs.",
    tags: ["villain", "propaganda", "media", "misinformation", "press-pass", "royal-system"],
    images: ["images/the-propagandist-01.jpg"],
    acquired: "",
    notes: "A new kind of enemy for this world. Forty-five villains and every other one of them does something to a body - takes a throne, a planet, a ship, a life. This man works on what people believe, and he is the only one whose weapon is a story. He sits directly against something this collection already had: Lego City has a TV unit that is very highly regarded, with a Cameraman who does the editing and a TV Star who left it to enlist. Nobody has said whether the Propagandist came out of that unit or works against it. It is the obvious question."
  },



  {
    id: "the-propaganda-director",
    name: "The Propaganda Director",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Propaganda Director",
    group: "The Propaganda Unit",
    location: "",
    relations: [],
    rating: 0,
    background:
      "He directs the whole operation, and he used to work for the Prince - " +
      "as all of these TV people did.\n\n" +
      "What moved him was a better paycheck and a bigger audience. That is the " +
      "entire reason.",
    provenance:
      "Blue wide-brimmed hat over a yellow face with round wire glasses, one " +
      "eye half shut, a grey stubbled beard and a wry mouth. Blue TV-crew " +
      "tabard printed with the globe-and-TV badge over cream sleeves, blue " +
      "legs, yellow hands.",
    tags: ["villain", "propaganda", "director", "media", "defector", "tv-crew", "greed", "fame"],
    images: ["images/the-propaganda-director-01.jpg"],
    acquired: "",
    notes: "He answers a question this catalogue asked one batch ago and could not settle: whether the Propagandist came out of Lego City\'s TV unit or worked against it. He came out of it, and so did the rest of them. Read this next to the Cameraman, who is filed good and whose card says he does the camera work and editing for that unit and that he is not the director, he is the camera editor assistant guy. His director defected. Nobody has said the two men knew each other, so nothing is drawn, but there was only ever one TV unit in Lego City."
  },


  {
    id: "the-pa",
    name: "The PA",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Assistant",
    group: "The Propaganda Unit",
    location: "",
    relations: [
      { to: "the-propagandist", label: "Assistant to" },
    ],
    rating: 0,
    background:
      "The production assistant. He works to the Propagandist and does what " +
      "the job takes.",
    provenance:
      "Black flat-brimmed cap over a plain yellow face with a small smile and " +
      "a silver stud where one eye should be. White shirt printed with a film " +
      "camera badge at the breast pocket, an orange lanyard down the front and " +
      "a red laminated pass at the bottom of it. Black legs.",
    tags: ["villain", "propaganda", "assistant", "production", "media", "lanyard"],
    images: ["images/the-pa-01.jpg"],
    acquired: "",
    notes: "The most ordinary person on the villain side. Forty-nine others want a throne, a planet, a fleet, a body count or the world remade, and this one carries the lanyard and sets up the shot. He is also the only villain here whose job title is an abbreviation."
  },


  {
    id: "the-tv-camera-woman",
    name: "The TV Camera Woman",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Camera Operator",
    group: "The Propaganda Unit",
    location: "",
    relations: [],
    rating: 0,
    background:
      "She runs the camera. She came over from the Prince\'s TV people with " +
      "the rest of them.",
    provenance:
      "Brown hair pulled up into a bun, long lashes and red lipstick on a " +
      "yellow face. Cream TV-crew uniform printed with the blue " +
      "globe-and-TV badge, cream legs, yellow hands.",
    tags: ["villain", "propaganda", "camera", "media", "tv-crew", "defector", "woman"],
    images: ["images/the-tv-camera-woman-01.jpg"],
    acquired: "",
    notes: "The first woman on the villain side of this collection. Fifty villains and forty-nine of them are men - and the one who is not is a camera operator in a work uniform, not a warlord. She wears the same globe-and-TV badge as the Director, which is the piece of plastic that makes the whole unit legible as one thing."
  },


  {
    id: "the-sith-lord",
    name: "The Sith Lord",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Sith Lord",
    group: "",
    location: "",
    relations: [
      { to: "the-sith-lords-second", label: "His second in command" },
      { to: "quinn", label: "Aligned with" },
    ],
    rating: 0,
    background:
      "A minor Sith lord, and he is not interested in ruling anything. What he " +
      "is after is the knowledge and the power themselves.\n\n" +
      "He aligned himself with Quinn for a specific reason: to spread the dark " +
      "side as a religion.",
    provenance:
      "Dark brown hair over a pale face, brows down hard, orange scoring at " +
      "both temples and the teeth bared. Brown layered robe printed with a " +
      "leather belt hung with a pouch and a silver cylinder, grey legs, black " +
      "hands. A heavy brown cloth cape.",
    tags: ["villain", "sith", "dark-side", "religion", "knowledge", "quinn", "cape"],
    images: ["images/the-sith-lord-01.jpg"],
    acquired: "",
    notes: "Third Sith in the collection, after Quinn and the Purple Shadow, and the only one who wants the doctrine rather than what it buys. Quinn went to the dark arts to win a war he thought was inevitable; the Purple Shadow used them to reach the shadow people. This one is a missionary. Which makes him the second enemy here whose weapon is what people believe, after the Propagandist, and the two have nothing written between them."
  },


  {
    id: "the-first-man-in-space",
    name: "The First Man in Space",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Astronaut",
    group: "",
    location: "",
    relations: [
      { to: "quinn", label: "Bought by" },
      { to: "the-propagandist", label: "Fronts for" },
    ],
    rating: 0,
    background:
      "The first man ever to go to space in this world, and famous for it.\n\n" +
      "Quinn bought him. He is a puppet now, working with the propagandist, " +
      "and the arrangement made him more famous rather than less.",
    provenance:
      "A chromed silver visor down over a white pressure suit - a ribbed " +
      "breathing collar, hoses running to a moulded chest valve, a mission " +
      "patch on one side and a gold 99 plate on the other. Grey belt, white " +
      "legs, white hands. Old plastic, yellowed and scuffed.",
    tags: ["villain", "astronaut", "famous", "first-in-space", "puppet", "bought", "propaganda", "vintage"],
    images: ["images/the-first-man-in-space-01.jpg"],
    acquired: "",
    notes: "Not to be confused with the First Man, who is where this whole world starts - this is a different superlative and a much smaller one. He is the only villain here who did nothing except agree to be used, and the only one whose value is entirely that people already liked him. Eleven astronauts and spacemen in this collection and he is the first of them to be filed bad. Left out of Classic Space, whose four wear the planet-and-rocket badge and he does not; say the word if he is one of them."
  },



  {
    id: "the-evil-doctor",
    name: "The Evil Doctor",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Doctor",
    group: "",
    location: "",
    relations: [
      { to: "the-butcher", label: "Runs experiments with" },
    ],
    rating: 0,
    background:
      "The other half of the Butcher\'s work. The two of them run experiments " +
      "together, and the division of labour is clean: this one conceptualises, " +
      "plans, and works out what is possible. The Butcher is the one who makes " +
      "it possible.\n\n" +
      "What came out of that arrangement is mind control - a way of taking " +
      "over a body.",
    provenance:
      "Dark brown hair over a yellow face drawn hard - heavy black brows down, " +
      "deep lines from the nose, mouth clamped shut. White coat printed with a " +
      "buttoned collar, a stethoscope hung round the neck and two pens in the " +
      "breast pocket. Black legs, yellow hands.",
    tags: ["villain", "doctor", "experiments", "mind-control", "theory", "planner", "butcher"],
    images: ["images/the-evil-doctor-01.jpg"],
    acquired: "",
    notes: "Villain number fifty-one, and the third doctor in this world - Dr. Oz is the good one, the Butcher is the one with the scissors, and this is the one with the ideas. What they built between them is worth reading against the Hijacked, a robot whose body villains took while they left him his mind, so that he watched himself attack people and could not stop. His card calls that one of the few things villains are actually recorded as doing. Now there are two men here whose stated work is exactly that, and no line is written between them and him."
  },


  {
    id: "the-pilots-apprentice",
    name: "The Pilot\'s Apprentice",
    variant: "Helmet on, helmet off",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Pilot",
    group: "",
    location: "",
    relations: [
      { to: "the-famous-pilot", label: "Killed him" },
    ],
    rating: 0,
    background:
      "He was the Famous Pilot\'s apprentice, and he got tired of living " +
      "underneath the man\'s fame and glory.\n\n" +
      "So he turned on him. He killed him in a dogfight, and he did it by " +
      "shooting him in the back.",
    provenance:
      "Blue flight helmet with a black visor band, and beneath it a pale blond " +
      "sweep of hair over a yellow face with hard brows and a flat mouth. Blue " +
      "flight suit printed with a dark navy harness marked ADU in yellow, " +
      "silver clasps and buckles, white sleeves and black gloves, blue legs " +
      "with thigh packs.",
    tags: ["villain", "pilot", "apprentice", "betrayal", "murder", "dogfight", "adu", "helmet"],
    images: [
      { src: "images/the-pilots-apprentice-01.jpg", caption: "Helmet on" },
      { src: "images/the-pilots-apprentice-02.jpg", caption: "Helmet off" },
    ],
    acquired: "",
    notes: "Two photographs, one man, the helmet being the difference. The Famous Pilot has been in this collection a long time - famous off a long run of missions and the people he brought back from them, and famous enough that his daughter went and did the same. His card has now been marked deceased and the killing written into it, because you said outright that this man killed him. The Pilot\'s Daughter has not been touched. She became a pilot because of her father and the family name is known across the galaxy for being heroic and brave; nobody has said what she knows about how he died."
  },


  {
    id: "the-rocket-saboteur",
    name: "The Rocket Saboteur",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Space Command",
    group: "The Royal Space Academy",
    location: "",
    relations: [
      { to: "the-flight-director", label: "Worked under him" },
    ],
    rating: 0,
    background:
      "Space command, and he worked under the man in the red jumpsuit who runs " +
      "every launch.\n\n" +
      "Then he switched sides and stayed exactly where he was. What he does now " +
      "is sabotage the rockets the royal army is going to need, from the inside " +
      "of the programme that builds them.",
    provenance:
      "Curly brown hair over a yellow face with one brow raised and a doubtful, " +
      "sidelong mouth. Cream lab coat printed over a dark suit and blue tie, a " +
      "pocket of pens at one breast and a round shuttle badge in blue and " +
      "yellow at the other. Black legs, yellow hands.",
    tags: ["villain", "saboteur", "space-programme", "royal-space-academy", "insider", "rockets", "defector"],
    images: ["images/the-rocket-saboteur-01.jpg"],
    acquired: "",
    notes: "Filed inside the Royal Space Academy, because that is where he still is and that is the whole point of him - a group shows everybody to everybody, and these are the people he is working against. That makes three groups in the collection with people on both sides in them, after the Verdauf and the Green Rangers, and all three for the same reason: somebody senior stayed in the building. The red space commander he answers to is the Flight Director, whose card says the big red jumpsuit comes with the job."
  },


  {
    id: "the-knight-with-the-real-sword",
    name: "The Knight with the Real Sword",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Knight",
    group: "",
    location: "The Medieval Era",
    relations: [
      { to: "the-evil-knight", label: "Helped make his sword" },
      { to: "the-swordsmith-knight", label: "Forged the sword with him" },
    ],
    rating: 0,
    background:
      "He lived in the medieval realm, where death is not final and a fight " +
      "costs you your armour rather than your life.\n\n" +
      "Somebody granted him a sword that could kill for real. He played it as " +
      "though he had no idea - and then he went on using it on his enemies in " +
      "combat, on purpose, knowing exactly what it did.",
    provenance:
      "A silver nasal helm with hinged cheek guards, and a yellow face under it " +
      "with a lopsided half-smile. Blue and pale blue quartered surcoat printed " +
      "with a gold crown and a star-worked collar over a brown belt, grey " +
      "sleeves, pale grey legs, yellow hands.",
    tags: ["villain", "knight", "medieval", "real-death", "sword", "deception", "murder"],
    images: ["images/the-knight-with-the-real-sword-01.jpg"],
    acquired: "",
    notes: "This is an attack on the oldest local rule in the collection. The medieval realm works because dying there is not final - you come back, the enemy keeps your armour, and that is why going to war there is not the appalling thing it is everywhere else. He was handed a weapon that breaks it and pretended not to know. Every man he beat stayed beaten. Left out of the Royal Knights: they wear a red and blue surcoat with a crowned lion and his is a blue quartering with a plain crown, so say the word if he is one of theirs. And somebody gave him that sword, which is the loudest unanswered question on this card."
  },



  {
    id: "the-swordsmith-knight",
    name: "The Swordsmith Knight",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Swordsman",
    group: "",
    location: "The Medieval Era",
    relations: [
      { to: "the-evil-knight", label: "Made the swords with him" },
      { to: "the-knight-with-the-real-sword", label: "Forged the sword with him" },
    ],
    rating: 0,
    background:
      "A swordsman of the medieval realm, and he helped forge the blade that " +
      "kills for real.\n\n" +
      "Then the two of them used it. They went into fights in a place where " +
      "losing costs you your armour and nothing else, and killed people " +
      "properly, and for a while nobody knew that was what was happening.",
    provenance:
      "Dark brown nasal helm with hinged cheek guards over a yellow face wearing " +
      "a broad, delighted grin. Blue tunic with a grey panel and a gold-edged " +
      "collar, a brown baldric across the chest carrying a gold-ringed crown " +
      "badge, black belt, blue legs printed with a chain and a lantern. Grey " +
      "arms and grey hands.",
    tags: ["villain", "knight", "medieval", "swordsman", "forge", "real-death", "deception"],
    images: ["images/the-swordsmith-knight-01.jpg"],
    acquired: "",
    notes: "The Knight with the Real Sword\'s card ended on a question - somebody granted him that sword, and nobody had said who. This is half an answer: this man helped forge it. Who commissioned it is still open. The two of them are linked and both are filed bad, and between them they are the only people in the collection who have killed anybody in the one realm where killing was not supposed to be possible. Worth reading against the Blacksmith, who is filed good and is the only other person in the medieval era who works metal; nothing is written between them, and it is the obvious thing to ask."
  },


  {
    id: "the-discarded-militarist",
    name: "The Discarded Militarist",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Discarded",
    group: "The Discarded",
    location: "",
    relations: [],
    rating: 0,
    background:
      "One of the Discarded - made as a throwaway in another civilization and " +
      "given refuge in this one.\n\n" +
      "What he wants is an army of his own, and to take the Royals down with " +
      "it. The point of the coup is what comes after: a society militarised " +
      "hard enough that nothing like what happened to him and his people can " +
      "happen again.",
    provenance:
      "Clone pilot armour worked over by hand in blue - a helmet painted in " +
      "streaked blues with a black brow bar and a red cogged marking over each " +
      "temple, a black respirator across the mouth. The chest, arms and legs " +
      "carry the same layered blue, brushed on rather than printed, with the " +
      "moulded detail showing through and white left bare at the boots.",
    tags: ["villain", "discarded", "militarist", "coup", "refugee", "hand-painted", "kitbash"],
    images: ["images/the-discarded-militarist-01.jpg"],
    acquired: "",
    notes: "This is the hardest card in the batch to sit with. The Discarded are this world\'s refugees - people thrown away in somebody else\'s civilization and taken in here - and the whole group has been written as a kindness that worked. Their ambassador is a bridge between civilizations. Their brother wanders and skateboards. One of them went back into the Bin to pull other pieces out. This one came out of the same thing and drew the opposite conclusion: never again, by force, and the Royals go first. Filed inside the group, because he is one of them and a group shows everybody to everybody. That makes the Discarded the fourth group here with people on both sides in it."
  },


  {
    id: "the-shadow-sorcerer",
    name: "The Shadow Sorcerer",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Chaplain",
    group: "",
    location: "The Shadow Dimension",
    relations: [],
    rating: 0,
    background:
      "The shadow people have a religion, and this is the man who keeps it. " +
      "Something like a chaplain to them.\n\n" +
      "He was a fanatic, and what he preached was the invasion.",
    provenance:
      "Black from the crown down - a bare black head with no face printed on it " +
      "at all, black arms, black hands, black legs, and a dark cloth robe hung " +
      "open over the whole of it.",
    tags: ["villain", "shadow", "chaplain", "religion", "fanatic", "invasion", "faceless", "unprinted"],
    images: ["images/the-shadow-sorcerer-01.jpg"],
    acquired: "",
    notes: "Third figure in this world with no face at all, after the Man from the Yellow Dimension and the Light King, and the third all-black unprinted one on the shadow side after the Shadow King and the Purple Shadow. He is also the second enemy here whose work is a religion, after the Sith Lord who aligned with Quinn to spread the dark side as one. No relations written - being of the shadow people is affiliation rather than a stated meeting - but there is now a king, a prince, a portal-opener and a chaplain on that side of the world and no group holding them. That grouping is the obvious one waiting to be made; say the word."
  },


  {
    id: "the-shadow-team-commander",
    name: "The Shadow Team Commander",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Commander",
    group: "The Shadow Team",
    location: "",
    relations: [
      { to: "quinn", label: "Took his whole team to" },
      { to: "the-prince", label: "His team used to serve him" },
    ],
    rating: 0,
    background:
      "He commands the Shadow Team, who used to work under the Prince.\n\n" +
      "Under his leadership every one of them defected to Quinn.",
    provenance:
      "Black peaked cap over a lined face with orange scarring down one cheek " +
      "and a hard-set mouth. Black tunic printed with a grey winged crest at " +
      "the chest and a panelled rank plate across the stomach, pale grey " +
      "sleeves, black hands, black legs.",
    tags: ["villain", "commander", "shadow-team", "defector", "traitor", "quinn", "royal-forces"],
    images: ["images/the-shadow-team-commander-01.jpg"],
    acquired: "",
    notes: "A new group, named by you, with one man photographed. He is the fourth officer in this collection to take his own unit somewhere it did not choose - the Traitor Captain rigged a ship with half the Verdauf on it, General Shepherd stranded the Green Rangers, the Defector Commander gassed his battalion - and the only one of the four whose men went with him willingly. Nothing is written between the Shadow Team and the shadow dimension; the name may be a coincidence and may not be."
  },


  {
    id: "the-evil-grenadier",
    name: "The Evil Grenadier",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Grenadier",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A grenadier, on the wrong side of it.",
    provenance:
      "Black helmet over a plain yellow face with a small, easy smile. Black " +
      "torso under a moulded black tactical vest hung with three magazine " +
      "pouches, a black collar piece at the throat, black arms and black legs. " +
      "Yellow hands.",
    tags: ["villain", "grenadier", "soldier", "tactical-vest", "black"],
    images: ["images/the-evil-grenadier-01.jpg"],
    acquired: "",
    notes: "Second grenadier in the collection, after the Golden Company\'s, who is filed good. He is black from the helmet to the boots with a plain smiling face and nothing else on him, which makes him the plainest villain here - no scar, no visor, no marking, no story yet beyond the job. Say more about him and he will take it."
  },



  {
    id: "the-famous-poacher",
    name: "The Famous Poacher",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Smuggler",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Famous for it - a poacher and a smuggler both, and he worked with the " +
      "arms dealer.",
    provenance:
      "Brown wide-brimmed hat over a stubbled face with heavy brows and a " +
      "small hard mouth. White shirt printed with an orange spine down the " +
      "centre and black ribs curving off it, two pale fangs hung at the " +
      "throat, brown legs and a pale cloth cape.",
    tags: ["villain", "poacher", "smuggler", "famous", "trophies", "arms-trade"],
    images: ["images/the-famous-poacher-01.jpg"],
    acquired: "",
    notes: "Third poacher on the villain side, and the pattern is now hard to miss: the Modified Arms Dealer used to be one and went into weapons, the Hitman was one and went into killing people, and this one stayed in it and added smuggling. Nothing connects any of the three. No link written to the arms dealer either, because there are two of them and you did not say which - though the Modified one is the ex-poacher, which makes him the obvious guess. One word picks. His shirt is ribs and fangs, which is the third villain here wearing something taken off what he killed, after the Red Baron and the Hitman."
  },


  {
    id: "the-looter",
    name: "The Looter",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Soldier",
    group: "",
    location: "",
    relations: [
      { to: "the-defector-commander", label: "Loyal to" },
    ],
    rating: 0,
    background:
      "The Defector Commander\'s loyal man. When the commander walked a whole " +
      "squadron into a chamber and had it gassed, this is who went in " +
      "afterwards and stripped the bodies of everything they were carrying.\n\n" +
      "Then the two of them left for Quinn\'s super base with the lot.",
    provenance:
      "Black peaked cap over a pale, lined face with orange scarring down one " +
      "cheek and a flat mouth. White clone chest armour with a blue pauldron " +
      "sitting across both shoulders, blue sleeves into black hands, white " +
      "legs with a black hip.",
    tags: ["villain", "looter", "soldier", "massacre", "loyal", "quinn", "pauldron"],
    images: ["images/the-looter-01.jpg"],
    acquired: "",
    notes: "The Defector Commander\'s card ended by saying there was a man unaccounted for in his story - the loyal one who stripped the bodies. This is him, and the link is live. Worth saying plainly what the job was: the killing was the commander\'s idea and this man\'s whole recorded contribution is what he did to the dead afterwards. Nothing else about him is written down yet."
  },


  {
    id: "the-french-hitman",
    name: "The French Hitman",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Hitman",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A hitman, and he has a French accent.",
    provenance:
      "Dark brown hair over a yellow face with a thin curled moustache and a " +
      "small pursed mouth. Black double-breasted suit printed with a pale " +
      "grey shirt and a red tie, black legs, one yellow hand. He is carrying " +
      "something long and black at his side.",
    tags: ["villain", "hitman", "french", "suit", "moustache", "assassin"],
    images: ["images/the-french-hitman-01.jpg"],
    acquired: "",
    notes: "Named apart from the Hitman only because that name is taken - the other one is the ex-poacher. This is the second man in this collection whose whole card turns on how he sounds rather than what he has done: the only other one is the Wookiee, and he cannot talk. The suit puts him with the Arms Dealer, who keeps the accounts in a waistcoat, as the second villain here dressed for an office."
  },


  {
    id: "the-blue-demigod",
    name: "The Blue Demigod",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "Demigod",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A demigod of the blue people, who are the portal masters of this world " +
      "- their magic and their essence open ways into other dimensions.\n\n" +
      "He came through a portal, uninvited, and brought a blue army with him. " +
      "What he wanted was not a side. He wanted the shadow and light war " +
      "stopped, and his method was to go at whichever of the two was winning " +
      "and wreck it. A third party in somebody else\'s war, doing damage to " +
      "both expansions on purpose.",
    provenance:
      "Blue from the crown down - a bare blue head with no face printed on it, " +
      "blue torso, blue arms, blue hands and blue legs, with no marking " +
      "anywhere on him.",
    tags: ["villain", "demigod", "blue-people", "portal-masters", "dimensions", "third-party", "shadow-war", "unprinted", "faceless"],
    images: ["images/the-blue-demigod-01.jpg"],
    acquired: "",
    notes: "Two large things arrive with him. He is the first figure in the collection with a rank who is not on the good side - eleven people carry one and every other one of them belongs to the creation mythos. And the blue people are a whole civilization nobody had described: portal masters, who make the ways between dimensions this world has always used without saying who built them. Read it against Kenjen, who brought down an evil blue civilization with the old man clone and his robot, and whose card says that story has a great deal more to it. That civilization is the last antagonist left on the not-yet-photographed list. Whether these are them is the single biggest open question in the catalogue, and you have not said - so nothing is written. Fourth faceless figure here, after the Man from the Yellow Dimension, the Light King and the Shadow Sorcerer, and the fourth monochrome one standing for a whole realm."
  },


  {
    id: "the-evil-knight",
    name: "The Evil Knight",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Knight",
    group: "",
    location: "The Medieval Era",
    relations: [
      { to: "the-knight-with-the-real-sword", label: "Helped make his sword" },
      { to: "the-swordsmith-knight", label: "Made the swords with him" },
    ],
    rating: 0,
    background:
      "The third pair of hands on the swords that kill for real in the " +
      "medieval realm.\n\n" +
      "Swords, now - more than one of them was made.",
    provenance:
      "A translucent red visored helm lit from inside, with flared side vanes " +
      "and a black eye panel, over a grey moulded pauldron and cape. Dark " +
      "armour beneath, silver legs streaked with pale blue.",
    tags: ["villain", "knight", "medieval", "smith", "real-death", "swords", "translucent"],
    images: ["images/the-evil-knight-01.jpg"],
    acquired: "",
    notes: "Three men now on one weapon, and the weapon has become weapons. The rule in that realm is that dying costs you your armour and not your life, which is the whole reason going to war there is bearable; what these three made breaks it, and the first of them carried his blade around pretending he did not know what it did. Who commissioned the work is still the open question. He looks nothing like the other two - they are painted surcoats and nasal helms and he is a lit visor over moulded plate - so whether he is of that realm at all, or somebody who came to it, is worth saying."
  },



  {
    id: "the-juggernaut",
    name: "The Juggernaut",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Heavy",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "He carries a minigun and he goes into combat with it. That is the whole " +
      "of him: he walks in where the fighting is and he kills a great many " +
      "people.",
    provenance:
      "A black flight helmet with the ear covers down, over a pale grinning " +
      "face heavy with freckles and stubble. Wide grey pauldrons flared out " +
      "over a grey chest plate, black arms, black hands, black legs.",
    tags: ["villain", "heavy", "minigun", "combat", "killer"],
    images: ["images/the-juggernaut-01.jpg"],
    acquired: "",
    notes: "Third heavy-weapons figure in the collection and the first on the bad side. The Minigunner is Space Police and carries the same gun; Heavy is nineteen, in the Royal Household honor guard, and runs the largest gun in the Lego world. Nothing is written between any of the three, so no links. He is also the first figure to take Heavy as a role - Heavy himself is filed under Honor Guard."
  },

  {
    id: "the-lord-of-wrath",
    name: "The Lord of Wrath",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Elder",
    group: "The Shadow Elders",
    location: "The Shadow Dimension",
    relations: [
      { to: "the-lord-of-darkness", label: "Shadow Elder alongside" },
    ],
    rating: 0,
    background:
      "One of two elders who keep the secrets of the dark side, and who guard " +
      "the shadow room the shadow people worship in. What they worship there " +
      "are occult gods.\n\n" +
      "Each elder holds a title rather than a name. His is wrath.",
    provenance:
      "Long black hair swept back, with an enormous black beard hanging down " +
      "over the whole chest. Yellow face, heavy brows, stubble under the beard " +
      "line. Grey torso worked in gold and dark purple, yellow arms and hands, " +
      "and grey legs printed with two instrument dials - one yellow, one red.",
    tags: ["villain", "shadow", "elder", "occult", "secrets", "shadow-room", "wrath", "beard"],
    images: ["images/the-lord-of-wrath-01.jpg"],
    acquired: "",
    notes: "Which elder is which is my call, not yours - you said one is the Lord of Wrath and the other the Lord of Darkness without saying which. I gave the hood to Darkness and the beard to Wrath. One word swaps them if I have it backwards. New group: The Shadow Elders."
  },

  {
    id: "the-lord-of-darkness",
    name: "The Lord of Darkness",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Elder",
    group: "The Shadow Elders",
    location: "The Shadow Dimension",
    relations: [
      { to: "the-lord-of-wrath", label: "Shadow Elder alongside" },
    ],
    rating: 0,
    background:
      "The other of the two elders who keep the secrets of the dark side and " +
      "guard the shadow room. The occult gods worshipped there are theirs to " +
      "protect.\n\n" +
      "His title is darkness.",
    provenance:
      "A dark brown cloth hood pulled up over a yellow bearded face, scarred " +
      "across one eye. Black torso under grey chest armour and grey pauldrons, " +
      "a row of grey gauges printed across the belly, black arms, grey hands, " +
      "black legs with silver plating at the thighs.",
    tags: ["villain", "shadow", "elder", "occult", "secrets", "shadow-room", "darkness", "hood", "scarred"],
    images: ["images/the-lord-of-darkness-01.jpg"],
    acquired: "",
    notes: "See the Lord of Wrath - the two titles are assigned on my guess and swap on one word. The shadow side now has a king, a prince who left it, a portal-opener, a chaplain, a commander and two elders, and this is the first time it has been said outright what the religion is about: occult gods, kept in a room."
  },

  {
    id: "the-missile",
    name: "The Missile",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Heavy",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A sentient robot, and a heavy. He carries the big weapons like any " +
      "other heavy does.\n\n" +
      "He is also a weapon himself. His body cannot be broken, so he uses it: " +
      "he launches and flies straight through a ship, in one side and out the " +
      "other.",
    provenance:
      "A smooth black dome helmet with an orange translucent visor lit red at " +
      "the eye. A black flared collar piece over a black torso printed with " +
      "silver bars and an orange checker stripe, grey hands, a red belt " +
      "carried down the front of black legs.",
    tags: ["villain", "robot", "sentient", "heavy", "indestructible", "missile", "ramming"],
    images: ["images/the-missile-01.jpg"],
    acquired: "",
    notes: "The first machine in this collection on the bad side. Every one catalogued before him is good - the Rebuilt, the Ninja Robot, the Defense Bot, the Replica, the Stunt Robot, the Storage Robot, the Hijacked, the Tin Robot and the Dock Robot of this world, plus C-3PO, R2-D2 and six astromechs borrowed from another. Two more arrived on his side one batch later. Second figure to take the Heavy role, in the same batch as the first. Placeholder name."
  },

  {
    id: "the-knock-off-captain",
    name: "The Knock-off Captain",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Captain",
    group: "The Knock-offs",
    location: "",
    relations: [
      { to: "the-defector", label: "The same man on the other side" },
    ],
    rating: 0,
    background:
      "A military captain out of one of the knock-off societies - the off-brand " +
      "civilizations, the ones that would go to war with Lego given the " +
      "chance.\n\n" +
      "He is the Defector's opposite number. Same species, same rank, same " +
      "uniform down to the bandoliers; the Defector came across and this one " +
      "did not.",
    provenance:
      "The identical figure to the Defector but for the cap. Olive peaked cap " +
      "instead of red, over the same pale head with black sunglasses and a " +
      "thin moustache; the same moulded black tactical vest hung with " +
      "bandoliers and pouches, olive arms, pale hands, olive legs. Not a Lego " +
      "mould.",
    tags: ["villain", "knock-off", "captain", "military", "bandoliers", "not-lego", "counterpart"],
    images: ["images/the-knock-off-captain-01.jpg"],
    acquired: "",
    notes: "You said his good counterpart wears a red hat, and that lands exactly: the Defector is the same mould, the same face print and the same vest under a red peaked cap. No guessing needed. This makes The Knock-offs the fifth group with people on both sides, after the Verdauf, the Discarded, the Royal Space Academy and the Green Rangers - and the first where the split is one figure against four rather than a unit coming apart. Placeholder name."
  },



  {
    id: "the-war-secretary",
    name: "The War Secretary",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Secretary of War",
    group: "",
    location: "",
    relations: [
      { to: "the-dictator", label: "Secretary of War to" },
    ],
    rating: 0,
    background:
      "Secretary of War to the Dictator - the fascist who already holds one " +
      "planet and aligned with Quinn to take the rest of his outer rim.\n\n" +
      "The war that man wants is this man's department.",
    provenance:
      "A pale grey peaked officer's cap over a yellow face with a flat mouth " +
      "and a metal stud at one eye. A khaki tunic printed with an open collar, " +
      "buttoned breast pockets, a leather strap slung across the chest and a " +
      "broad buckled belt; khaki arms, yellow hands, plain khaki legs.",
    tags: ["villain", "secretary-of-war", "dictator", "cabinet", "officer", "uniform", "outer-rim"],
    images: ["images/the-war-secretary-01.jpg"],
    acquired: "",
    notes: "Second holder of this office in the collection and the first on the bad side. Brute has it for the good - loud, gruff, genuinely kind, in charge of all artillery and sitting on the Prince and Princess's council. Same job, opposite war. That makes twenty-three roles now held on both sides at once, out of two hundred and nine. He is also dressed almost exactly like his own boss: peaked cap, khaki tunic, strap across the chest. Placeholder name, kept clear of Brute's title."
  },

  {
    id: "the-infamous-space-pirate",
    name: "The Infamous Space Pirate",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Pirate",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A space pirate, and an infamous one. The name travels ahead of him.",
    provenance:
      "A dark green knitted beanie pulled down over a pale stubbled face with " +
      "a smirk and heavy brows. A lime and green torso printed with a climbing " +
      "harness - carabiners, a strap across the chest and a black instrument " +
      "hung at it - white arms, pale hands, white legs marked with lime and a " +
      "purple band at the boot.",
    tags: ["villain", "pirate", "space-pirate", "infamous", "beanie", "harness"],
    images: ["images/the-infamous-space-pirate-01.jpg"],
    acquired: "",
    notes: "The first pirate in this collection on the bad side. All eight before him are good - the Pirate Crew, the Pirate Hobo, the Sleepy Pirate, Jack Sparrow - and not one of them was ever said to work space. This is the first who works space, and the second time space piracy has come up at all: the Outlaw has a crew of space pirates behind him and reformed after the Great Shadow War. Nothing says this man is one of them, so no link. Say the word and he joins that crew, or takes it over."
  },

  {
    id: "the-incompetent-bounty-hunter",
    name: "The Incompetent Bounty Hunter",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Bounty Hunter",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A bounty hunter, more or less incompetent at it.",
    provenance:
      "A black domed helmet with a long antenna standing off the top, over a " +
      "yellow face furious to the point of comedy - eyes screwed up, teeth " +
      "bared, stubble across the scalp. Grey armour printed with white plating " +
      "and a small red crest at the chest, grey arms, black hands, black legs.",
    tags: ["villain", "bounty-hunter", "incompetent", "antenna", "helmet", "comic"],
    images: ["images/the-incompetent-bounty-hunter-01.jpg"],
    acquired: "",
    notes: "Tenth bounty hunter here and the sixth on the villain side, and the first of the ten who is bad at the work. The other nine are each defined by being good at it - Kaz, the Golden Sniper, the Ninja Robot and the Masked Bounty Hunter for the good; the Charming one, the Narcissist, Long Arm Johnson, the Dapper one and the Iron League Alien against. Ten people here hunt bounties for a living, evenly split six against four, and this is the first time the work has been played for a joke."
  },

  {
    id: "the-alien-militia-commander",
    name: "The Alien Militia Commander",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "School Commander",
    group: "The Alien Militia",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A captain of the alien militia, and the commander of its school. The " +
      "people who fight for that militia come up through him.",
    provenance:
      "A dark red knitted beanie over a white skull face - black sockets lit " +
      "red at the pupil, a stitched grin, a silver plate riveted across the " +
      "brow. A dark brown torso printed with a gold sash and medallion, gold " +
      "buckles and a studded collar; white arms, white hands, grey legs.",
    tags: ["villain", "alien", "militia", "commander", "captain", "school", "training", "skull"],
    images: ["images/the-alien-militia-commander-01.jpg"],
    acquired: "",
    notes: "New group: The Alien Militia, and the first standing military force catalogued on the bad side that is not a mercenary outfit or somebody's personal guard. The Space Militia is the good side's, seventeen strong. Nothing is written between this militia and the alien mercenaries the Lead Alien Mercenary commands - two separate alien fighting forces until you say otherwise. Placeholder name; the school is the part worth keeping in it."
  },



  {
    id: "the-pharaoh",
    name: "The Pharaoh",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Pharaoh",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "An ancient pharaoh. Raid her tomb and she puts the curse on you - " +
      "anyone who goes in after what is hers comes out carrying it.",
    provenance:
      "A turquoise headdress banded in red and gold over a gold face with " +
      "painted eyes and a level mouth. A white torso wrapped in bandages under " +
      "a broad collar of red, turquoise and gold with a dark scarab at the " +
      "centre; bandaged arms with gold and turquoise cuffs, grey hands, a gold " +
      "belt and skirt over white bandaged legs.",
    tags: ["villain", "pharaoh", "ancient", "curse", "tomb", "mummy", "egypt", "queen", "woman"],
    images: ["images/the-pharaoh-01.jpg"],
    acquired: "",
    notes: "The second woman on the villain side, and the first with any power - the other is a camera operator in a work uniform. She was also the first Egypt in the collection at all, with nothing else here of that world - a second pharaoh has since arrived, a man, unwrapped and moustached, and nothing says whether they are one dynasty or two strangers. Filed bad with the rest of this run, though cursing the people who rob your own grave is the most defensible thing anybody on that side has done. Say the word and she moves."
  },

  {
    id: "the-white-killer-bot",
    name: "The White Killer Bot",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Killer Bot",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A killer bot. Built to do it, and that is the whole job.",
    provenance:
      "A white moulded head with a hooded brow and a long blunt snout, two " +
      "ringed lenses lit green where the eyes would be, and a silver crown " +
      "piece behind. White body throughout - a panelled jumpsuit printed with " +
      "utility boxes down the waist and pocket seams at the thighs, white arms, " +
      "white hands, white legs.",
    tags: ["villain", "killer-bot", "robot", "machine", "green-optics", "white"],
    images: ["images/the-white-killer-bot-01.jpg"],
    acquired: "",
    notes: "Second machine ever catalogued on the bad side, after the Missile in the batch before this one - and he had been the only one for about an hour. Nothing is written between him and the Armoured Killer Bot who arrived alongside him, so they share a role and nothing else; say they work together and they connect. Reading \"killer bought\" as killer bot - correct me if that is wrong."
  },

  {
    id: "the-jetpack-sniper",
    name: "The Jetpack Sniper",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Sniper",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A sniper who works from a jetpack. He takes the shot from wherever the " +
      "pack will put him.",
    provenance:
      "A black cloth head wrap drawn across the face, leaving a band open at " +
      "the eyes - dark brows, hard stare. Black sleeveless torso printed with " +
      "a pale winged shape across the chest over a studded harness and a " +
      "bearded mask device below it, bare tanned arms, tan hands, black legs.",
    tags: ["villain", "sniper", "jetpack", "marksman", "masked", "wrapped"],
    images: ["images/the-jetpack-sniper-01.jpg"],
    acquired: "",
    notes: "The first sniper in this collection on the bad side. The three who carried the name before him are all good - the Sniper, the Golden Sniper and the Delta Sniper - and all three are men, though the Golden Sniper never takes a bounty without his robot. He is also the first person here to use a jetpack as how he works rather than as a thing he owns; the only other jetpacks are on an archangel and a Nexo Knight."
  },

  {
    id: "the-armoured-killer-bot",
    name: "The Armoured Killer Bot",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Killer Bot",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "The other killer bot. Same work, built heavier.",
    provenance:
      "A grey helm with a spiked crest and a hinged snouted faceplate, the " +
      "visor a band of transparent gold with two lit rings behind it. Grey " +
      "plate armour printed with a winged crest and copper edging, one pale " +
      "grey arm and one dark, grey hands, grey legs printed with pale blazons " +
      "and worn patches.",
    tags: ["villain", "killer-bot", "robot", "machine", "armour", "gold-visor", "spiked-helm"],
    images: ["images/the-armoured-killer-bot-01.jpg"],
    acquired: "",
    notes: "Third machine on the bad side, arriving in the same batch as the second. He looks medieval and the other one looks like a droid, which says the killer bots are not one production line. Nothing written between the two, so no link. Same reading of \"killer bought\" as on his counterpart."
  },

  {
    id: "the-gangster-financier",
    name: "The Gangster Financier",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Financier",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A gangster, and the money behind one. He finances the work rather than " +
      "doing it.",
    provenance:
      "A black wide-brimmed fedora over a yellow face with a heavy black beard " +
      "and sideburns, brows down, a scar at one eye. A black pinstriped " +
      "double-breasted suit printed with a white shirt and tie and four " +
      "buttons, black arms, yellow hands, black legs.",
    tags: ["villain", "gangster", "financier", "money", "crime", "pinstripe", "fedora"],
    images: ["images/the-gangster-financier-01.jpg"],
    acquired: "",
    notes: "Fourth financier here and the first on the bad side - the Royal Financier funds the Galactic Army, the City Financier funds the city, the Sculptor's Heir inherited his. Two roles crossed over in this one batch, Financier and Sniper, which puts twenty-five of the two hundred and eleven jobs in this world on both sides at once. He is also the first organised-crime figure on that side who is not a bounty hunter, an assassin or a dealer; the money end of the underworld has not been photographed before."
  },



  {
    id: "the-shadow-archer",
    name: "The Shadow Archer",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Archer",
    group: "The League of Shadows",
    location: "",
    relations: [],
    rating: 0,
    background:
      "The archer of the League of Shadows.",
    provenance:
      "A black helm with flared cheek guards over a silver skull faceplate, " +
      "the eyes cut open behind it. A brown leather strap across the chest " +
      "holding a quiver of arrows at the shoulder. Dark grey torso printed " +
      "with fine chainmail and three clasps down the front, dark arms, pale " +
      "hands, black legs with tan panels at the knees.",
    tags: ["villain", "archer", "league-of-shadows", "cult", "skull-faceplate", "quiver", "chainmail"],
    images: ["images/the-shadow-archer-01.jpg"],
    acquired: "",
    notes: "The first archer in this collection on the bad side. The six before him are all good, and five of the six are Royal Knights - two Royal Archers, their Commander, the Crossbowman and the Long Shot Bowman - with a dwarf making up the rest. Bows have been a knight's weapon here and nothing else until now. First member catalogued of a new group, The League of Shadows."
  },

  {
    id: "the-master-of-tradition",
    name: "The Master of Tradition",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Master of Tradition",
    group: "The League of Shadows",
    location: "",
    relations: [],
    rating: 0,
    background:
      "One of the masters of the League of Shadows - the cult. His discipline " +
      "is tradition: what the League has always done, and the keeping of it.",
    provenance:
      "A black cloth head wrap drawn close around a yellow face with an " +
      "eyepatch on a strap, stubble and a hard mouth. A black robe worked in " +
      "gold scrollwork over a purple and white collar, a wide gold-trimmed " +
      "sash at the waist, black arms, yellow hands, black legs carrying the " +
      "same gold running down them.",
    tags: ["villain", "league-of-shadows", "cult", "master", "tradition", "eyepatch", "robe"],
    images: ["images/the-master-of-tradition-01.jpg"],
    acquired: "",
    notes: "The League runs on masters of disciplines rather than ranks, which is the second body on the villain side to replace names with titles - the Shadow Elders did it first, with a Lord of Wrath and a Lord of Darkness keeping the secrets of the dark side. Whether the League of Shadows and the Shadow Elders are the same organisation is not written down. See the world note."
  },

  {
    id: "the-master-of-the-dark-psyche",
    name: "The Master of the Dark Psyche",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Master of the Dark Psyche",
    group: "The League of Shadows",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Master of the dark psyche. The mind is his discipline, and the part of " +
      "it the League is interested in.",
    provenance:
      "A black turban over a plain yellow face - level brows, a small " +
      "uncertain mouth, a scar at one temple. A ragged black cloth poncho hung " +
      "over the whole body, torn at the hem, with the arms almost entirely " +
      "hidden. Grey feet below it.",
    tags: ["villain", "league-of-shadows", "cult", "master", "psyche", "mind", "turban", "poncho"],
    images: ["images/the-master-of-the-dark-psyche-01.jpg"],
    acquired: "",
    notes: "The plainest face in the batch under the least clothing anybody on that side has worn - no armour, no printing, a torn cloth. The one master here whose discipline is not a thing you can carry."
  },

  {
    id: "the-evil-financier",
    name: "The Evil Financier",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Financier",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "An evil financier.",
    provenance:
      "A black fedora over a tan face with dark brows, a thin moustache and " +
      "the beginnings of a smirk. A black suit printed with a grey-green " +
      "waistcoat, a pale collar and a silver knotwork device across the chest; " +
      "black arms, pale hands, black legs.",
    tags: ["villain", "financier", "money", "suit", "fedora", "moustache"],
    images: ["images/the-evil-financier-01.jpg"],
    acquired: "",
    notes: "Fifth financier here and the second on the bad side, one batch after the first. The money side of the enemy went from nothing to two men in a fortnight, and nothing is written between them - the Gangster Financier funds a gang, this one is not said to fund anything in particular. He is also not put in the League of Shadows: the other four in this batch are, and he is the one you did not call a master. Say the word and he joins them."
  },

  {
    id: "the-master-of-combat",
    name: "The Master of Combat",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Master of Combat",
    group: "The League of Shadows",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Master of combat for the League of Shadows. The fighting is his " +
      "discipline, and the teaching of it.",
    provenance:
      "A moulded gold mask, weathered and pitted, with a spike standing off " +
      "the crown, cut-out eyes showing yellow behind, and a snarling toothed " +
      "mouth. A long black cloth cape. Black torso printed as heavy armour - " +
      "a grey chest plate with a red stripe down the centre, a control box at " +
      "the sternum and a silver belt - black arms, yellow hands, black legs " +
      "piped in silver.",
    tags: ["villain", "league-of-shadows", "cult", "master", "combat", "gold-mask", "cape", "armour"],
    images: ["images/the-master-of-combat-01.jpg"],
    acquired: "",
    notes: "The League keeps a master of the body, a master of the mind and a master of the past, and he is the body. Hand-worked plastic is not rare in this collection, but almost all of it is clone armour repainted - Captain Rex, Ahsoka's Trooper, the Painted Clone Commander, the Discarded Commander. A sculpted mask, gilded and given teeth, on a figure of this world rather than a borrowed one, is a different kind of effort."
  },



  {
    id: "the-ninja-assassin-pirate",
    name: "The Ninja Assassin Pirate",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Assassin",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A ninja, an assassin and a pirate. All three at once.",
    provenance:
      "Swept black hair over a pale face with a pointed goatee, hard brows and " +
      "scarring at both cheeks. A black tunic printed with a grey wrapped " +
      "collar and a deep red sash worn diagonally across the chest; black " +
      "arms, grey hands, brown legs printed with gold cord and buckles.",
    tags: ["villain", "ninja", "assassin", "pirate", "goatee", "sash"],
    images: ["images/the-ninja-assassin-pirate-01.jpg"],
    acquired: "",
    notes: "Three trades in one man, which nobody else in this collection has. The role field only takes one, so he is filed under Assassin - fourth here, and all four are on the bad side - with ninja and pirate carried in the tags. He is also the second ninja here on the bad side, after the Crimson Ninja, and the second pirate, after the Infamous Space Pirate."
  },

  {
    id: "savage-opress",
    name: "Savage Opress",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Sith",
    group: "",
    location: "",
    relations: [
      { to: "count-dooku", label: "His master, for a time" },
      { to: "darth-maul", label: "His brother" },
    ],
    rating: 0,
    background:
      "Savage Opress.",
    provenance:
      "Black head and body worked over in yellow - a pattern of blades and " +
      "hooks running up the face from the jaw to the brow and spread across " +
      "the chest, with a grey device at the sternum. A crown of horns, some " +
      "black and some painted yellow, standing off the top of the head. Black " +
      "arms, yellow hands, black legs.",
    tags: ["villain", "sith", "star-wars", "zabrak", "horns", "branded", "first-branded-villain"],
    images: ["images/savage-opress-01.jpg"],
    acquired: "",
    notes: "The first branded villain in this collection. A hundred and twenty-six figures here come out of a box with a name already on them - Star Wars, Ninjago, Marvel, Harry Potter, Chima, the lot - and until this one every single one of them was filed good, the stormtroopers and the TIE pilots and the snowtroopers included. The enemy was entirely home-made for the first five hundred and ninety figures. Boba Fett used to be the headline example of that absorption and has since crossed over, so the streak now reads as something nobody had got round to rather than a rule of the world."
  },

  {
    id: "the-master-of-stealing-and-looting",
    name: "The Master of Stealing and Looting",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Master of Stealing and Looting",
    group: "The League of Shadows",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Master of stealing and looting for the League of Shadows. Taking things " +
      "is the discipline, and he is the one who teaches it.",
    provenance:
      "A black cloth hood pulled up over a yellow face with a wide dark " +
      "moustache and a short beard, brows drawn together. A gold-worked shawl " +
      "across the shoulders with a round clasp at the throat and a gilded strap " +
      "of pouches slung down one side, over a black torso printed with buckles; " +
      "black arms, yellow hands, black legs.",
    tags: ["villain", "league-of-shadows", "cult", "master", "stealing", "looting", "hood", "gilded"],
    images: ["images/the-master-of-stealing-and-looting-01.jpg"],
    acquired: "",
    notes: "There is already a Looter on that side - a soldier who went through what was left after a fight - and nothing is written between them. If the League taught him, say so and they connect."
  },

  {
    id: "the-master-of-dark-wisdom",
    name: "The Master of Dark Wisdom",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Master of Dark Wisdom",
    group: "The League of Shadows",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Master of dark wisdom. Knowing is his discipline - what the League " +
      "knows, and what it is better nobody else did.",
    provenance:
      "A black hood over a yellow face carrying a monocle on one eye and a " +
      "round lens on the other, under a full white handlebar moustache. A " +
      "black torso printed as segmented armour with a panelled belt, a hooded " +
      "cape collar over the shoulders, black arms, yellow hands, black legs " +
      "with a grey plate at the hip.",
    tags: ["villain", "league-of-shadows", "cult", "master", "wisdom", "knowledge", "monocle", "moustache"],
    images: ["images/the-master-of-dark-wisdom-01.jpg"],
    acquired: "",
    notes: "The League's scholar. Learning has existed on that side - Wen mentored Quinn, and the Butcher and the Evil Doctor run experiments together on the dead - but it has always been knowledge put to use. The eight scholars filed good keep it or teach it instead: the Ancient, the Mystery Shaman, the Occultist, two librarians and three professors. The one villain office that comes close is the Shadow Elders, who guard the secrets of the dark side - one more reason to ask whether they and the League are the same body. The monocle is the only one in the collection."
  },

  {
    id: "the-master-of-disguise",
    name: "The Master of Disguise",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Master of Disguise",
    group: "The League of Shadows",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Master of disguise. Being someone else is the discipline.",
    provenance:
      "A black hood over a pale head with two dots for eyes and a simple " +
      "curved smile, and nothing else on it at all. A black robe printed with pale folds and a wrapped belt, " +
      "black arms, pale hands, black legs.",
    tags: ["villain", "league-of-shadows", "cult", "master", "disguise", "blank-face", "hood"],
    images: ["images/the-master-of-disguise-01.jpg"],
    acquired: "",
    notes: "The master of disguise wears the old plain smiley - no eyebrows, no lines, nothing to remember. The only other figure in the catalogue described that way is the Smiling Pilot. Whether it was the joke when he was built or an accident of what was in the box, it is the right head for the job."
  },



  {
    id: "the-master-of-apprentices",
    name: "The Master of Apprentices",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Master of Apprentices",
    group: "The League of Shadows",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Master of apprentices for the League of Shadows. The people coming up " +
      "are his discipline - whoever the League takes in passes through him " +
      "before anything else.",
    provenance:
      "A black cloth hood wrapped close over a pale face marked with rust-" +
      "coloured lines across both temples, brows down hard and the mouth pulled " +
      "back in a grimace. Black throughout below it - a torso printed with a " +
      "faint grey chevron and a crescent at the shoulder, black arms, pale " +
      "hands, black legs.",
    tags: ["villain", "league-of-shadows", "cult", "master", "apprentices", "training", "hood"],
    images: ["images/the-master-of-apprentices-01.jpg"],
    acquired: "",
    notes: "Seventh discipline in the League, which is now eight people. Reading \"master of apprentice\" as the office that takes the intake - the man the new ones go through. If he is instead somebody's apprentice who became a master, say so and the card turns round. The League now has a way in, which none of the other villain organisations here does."
  },

  {
    id: "the-current",
    name: "The Current",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Power Source",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "An entity made of electricity. He is run into weapons to power them, " +
      "and he fights in his own right.",
    provenance:
      "A dark blue helmet closed over a pale blue face that is all light - a " +
      "grid of circles for eyes and a wide bared grin, lit from inside. Heavy " +
      "blue shoulder armour flared out on both sides with a round black vent " +
      "at the chest and bolts at either collarbone, over a white torso; pale " +
      "blue hands, a black belt, white legs.",
    tags: ["villain", "electricity", "energy", "entity", "power-source", "combat", "armour"],
    images: ["images/the-current-01.jpg"],
    acquired: "",
    notes: "The second enemy here who is not really a body. Phalanx is a nanobot virus given a shape by an ancient alien skull; this one is current. The nearest thing on the good side is the Vessel, and that is an empty body rather than a substance - kept for the demigods to send a soul into. He is also the first figure on either side who is equipment and a fighter at once: he goes into the weapon, and he also swings. Placeholder name."
  },

  {
    id: "the-masked-space-pirate",
    name: "The Masked Space Pirate",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Pirate",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A space pirate.",
    provenance:
      "A wide brown brimmed hat banded in orange over a yellow face, most of " +
      "it hidden behind a moulded silver breathing mask strapped across the " +
      "mouth and jaw. A brown torso printed with a gold sash and medallion and " +
      "gold buckles - the same print the Alien Militia Commander wears - with " +
      "one yellow arm and one olive, yellow hands, brown legs.",
    tags: ["villain", "pirate", "space-pirate", "mask", "breathing-mask", "hat"],
    images: ["images/the-masked-space-pirate-01.jpg"],
    acquired: "",
    notes: "Third pirate on the bad side, after the Infamous Space Pirate and the Ninja Assassin Pirate - all three inside four batches, following a long run of good pirates and not one bad one for the rest of the collection. Nothing is written between him and the Infamous Space Pirate, or between either of them and the Outlaw, who has a crew of space pirates behind him. The torso he shares with the Alien Militia Commander is just a shared part unless you say otherwise."
  },

  {
    id: "zuko",
    name: "Zuko",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Avatar: The Last Airbender",
    rank: "",
    role: "Prince",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Prince Zuko of the Fire Nation.",
    provenance:
      "A bald pale head with the burn scar worked around one eye in mottled " +
      "red, a heavy brow over it and a flat mouth. Red and grey layered armour " +
      "printed across the chest with a raised red collar standing up at the " +
      "neck, black arms, pale hands, black legs.",
    tags: ["villain", "prince", "fire-nation", "avatar", "branded", "scar", "redemption"],
    images: ["images/zuko-01.jpg"],
    acquired: "",
    notes: "The second branded villain here, one batch after the first ever. He also joins Sokka, who has been filed good in this collection for a long time - the two of them are enemies and then friends in the show, and nothing between them is written here, so no link is drawn. Filed bad because he came in a run of villains, but he is the redemption arc: if this is Zuko before the turn rather than after it, the card should say so, and if it is after it he belongs on the other deck."
  },

  {
    id: "the-second-gangster-financier",
    name: "The Second Gangster Financier",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Financier",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A gangster financier.",
    provenance:
      "A black wide-brimmed fedora over a yellow face with a thick black " +
      "moustache, a small chin patch and long sideburns, brows down. The same " +
      "black pinstriped double-breasted suit the first Gangster Financier " +
      "wears, printed with a white shirt and tie and four buttons; black arms, " +
      "yellow hands, black legs.",
    tags: ["villain", "gangster", "financier", "money", "crime", "pinstripe", "fedora"],
    images: ["images/the-second-gangster-financier-01.jpg"],
    acquired: "",
    notes: "Worth checking before this stands. He is the identical torso to the Gangster Financier from two batches ago, described to me in the identical words, and the only difference I can see is the head: that one has a heavy full beard and a scar at the eye, this one a moustache and a chin patch. I have taken them as two men, which is why he is a separate card. If they are one man photographed twice, say so and I will fold this photo into the other entry rather than leave him double-counted. Either way the money side of the enemy has gone from nobody to three in three batches, counting the Evil Financier."
  },



  {
    id: "the-black-knight",
    name: "The Black Knight",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Knight",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "The Black Knight. Super evil, and that is the whole of what is said " +
      "about him so far.",
    provenance:
      "A black helm with a flared crown and a raised visor, and behind it a " +
      "silver skull - not a face, a skull, with the jaw and teeth worked in. A " +
      "black torso printed with a silver ribcage and spine, black shoulder " +
      "plates, black arms and hands, a dark red belt, black legs.",
    tags: ["villain", "knight", "black-knight", "skull", "ribcage", "medieval", "armour"],
    images: ["images/the-black-knight-01.jpg"],
    acquired: "",
    notes: "Fifth knight on the bad side, after Johnny Plasma, the Knight with the Real Sword, the Swordsmith Knight and the Evil Knight - and the three of those who are not Johnny Plasma are all tied to the swords that kill for real in the medieval realm. Nothing says he is. If he belongs to that story, say so and four become a set."
  },

  {
    id: "the-cybernetic-ninja",
    name: "The Cybernetic Ninja",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Ninja",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A ninja, rebuilt. Half his head is machine.",
    provenance:
      "A black ninja wrap over a yellow face, with a silver cybernetic plate " +
      "covering the left side - a ringed lens set with three red dots where " +
      "that eye was, a bracket running up over the crown, and the jaw plated " +
      "to match. The right eye is his own. Gold and purple armour printed " +
      "across a grey torso, black arms, black hands, black legs with an orange " +
      "flame sash at the waist.",
    tags: ["villain", "ninja", "cybernetic", "implant", "rebuilt", "armour"],
    images: ["images/the-cybernetic-ninja-01.jpg"],
    acquired: "",
    notes: "Third ninja on the bad side, after the Crimson Ninja and the Ninja Assassin Pirate. He also lands in the middle of this world's oldest running idea - body modification worn as history, which starts with the Discarded and his silver arm and is the reason the civilization has cybernetics at all. The Bionics Team on that side build prosthetics that double as weapons, a limb that is also a gun. Nothing connects him to them, and it would be the obvious place for him to have been made."
  },

  {
    id: "the-maker",
    name: "The Maker",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Inventor",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A cross between Tony Stark and Ultron - the man who builds the machines, " +
      "and the machine that came out of it. Both at once.",
    provenance:
      "A black cowl moulded close over the top half of a pale face, cut away " +
      "at the eyes, leaving the mouth and chin bare and smiling. A dark grey " +
      "torso and legs printed edge to edge with fine machine tracery - " +
      "plating, cabling and vents - lit through with pale blue at the chest " +
      "and down the body. Black arms, grey hands.",
    tags: ["villain", "inventor", "machine", "cybernetic", "tech", "stark", "ultron"],
    images: ["images/the-maker-01.jpg"],
    acquired: "",
    notes: "Tony Stark is already in this collection, filed good, as three figures in one entry - the man and both Iron Man suits. This one is the same idea gone wrong and is not linked to him, because nothing says they have met; it may be a comparison you were drawing rather than a person he knows. He follows the Missile and the two killer bots onto that side, and unlike any of them he is not only a machine - he is the man who made it as well. Ultron has since been catalogued too, two of him, on this same deck. So both halves of the sentence that describes this figure now exist here as people, standing on opposite decks, and he is still linked to neither. Placeholder name."
  },

  {
    id: "the-evil-infantry-captain",
    name: "The Evil Infantry Captain",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Infantry Captain",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A captain of infantry, on the wrong side of it.",
    provenance:
      "A black helmet printed with a red and white skull across the crown, " +
      "under a transparent red visor with a scarred, grimacing face showing " +
      "through it. Black flared shoulder armour over a blue and grey chest " +
      "plate with a panelled belt; yellow arms, silver hands, silver legs " +
      "printed with torn edges and pale chevrons.",
    tags: ["villain", "captain", "infantry", "skull-helmet", "red-visor", "armour"],
    images: ["images/the-evil-infantry-captain-01.jpg"],
    acquired: "",
    notes: "Sixth captain on the bad side, after the Iron League Captain, the Traitor Captain, the Bounty Hunter Captain, the Knock-off Captain and the Evil Space Captain. The Insect Captain in this same batch makes seven villains carrying a captaincy of some kind, and not one of them is written as commanding any of the others."
  },

  {
    id: "the-insect-captain",
    name: "The Insect Captain",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Captain",
    group: "The Evil Insects",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Captain of the evil insects, and the one in charge of them.",
    provenance:
      "A black insect helm with spread mandibles and a spiked crest, two round " +
      "yellow-green eyes lit under it and small fangs below. A black torso " +
      "printed in green circuitry around a single red slit eye at the chest, " +
      "with green panels carried down black legs. Black arms, grey hands.",
    tags: ["villain", "insect", "captain", "hive", "mandibles", "bio-tech", "green"],
    images: ["images/the-insect-captain-01.jpg"],
    acquired: "",
    notes: "Insects are new. Six hundred figures and there has not been a single one, nor any animal enemy at all - the only creatures catalogued are Laval, a horse, and a Spider-Man. The evil insects he commands have not been photographed, so the force is real and empty for now, the same way the alien mercenaries were before their leader arrived. No group made until there is somebody to put in it."
  },



  {
    id: "the-silent-soldier",
    name: "The Silent Soldier",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Assassin",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "They call him the Silent Soldier. An elite assassin.",
    provenance:
      "A black helmet fully enclosed, with a smoked visor and no face visible " +
      "behind it at all. A black torso printed with a silver bar at the " +
      "collarbone and, below it, a large orange insect - long body, six legs, " +
      "antennae. A red belt, red hands, black arms and legs.",
    tags: ["villain", "assassin", "elite", "silent", "faceless", "insect-mark", "visor"],
    images: ["images/the-silent-soldier-01.jpg"],
    acquired: "",
    notes: "Fifth assassin here, and all five are on the bad side. The thing worth a ruling is the insect printed across his chest: the Insect Captain arrived one batch ago in charge of the evil insects, and this man wears one as a device. It reads as a badge of allegiance and nothing says it is, so no link is drawn. Say he is theirs and the insects have their first soldier."
  },

  {
    id: "the-brain-parasites",
    name: "The Brain Parasites",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Parasite",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Brain-eating parasites. They fasten onto a person's head and feed on " +
      "what is inside it.",
    provenance:
      "Two of them, identical. Lime green, moulded as a single piece that sits " +
      "over a head like a cap - one stalked eye standing off the top, a wide " +
      "mouth ringed with white teeth and a dark red throat behind it, and four " +
      "curled legs hanging down to grip.",
    tags: ["villain", "parasite", "brain-eating", "creature", "pair", "head-mounted", "green"],
    images: ["images/the-brain-parasites-01.jpg"],
    acquired: "",
    notes: "One card because they came as a pair, the same call as the Nude Aliens and the Lost Pirates. They are also the first enemy in this collection that is not a person or a machine - the first thing that just eats. Insects arrived one batch ago and had nothing to show for themselves yet; this is the second non-human threat in two batches, after six hundred figures with none at all."
  },

  {
    id: "the-retired-general",
    name: "The Retired General",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "General",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A retired infantry general living a humble life, and none of that is " +
      "the truth of him. He is evil, and he is hired to plan raids.\n\n" +
      "The quiet life is the cover. The work is still the work.",
    provenance:
      "Black hair and a full black beard over a pale face with heavy brows and " +
      "a flat mouth. A pale green work shirt printed with buttons, braces over " +
      "both shoulders and a worn leather belt; one olive arm and one darker, " +
      "pale hands, plain grey legs. Nothing military anywhere on him.",
    tags: ["villain", "general", "retired", "cover", "raids", "planner", "civilian-dress"],
    images: ["images/the-retired-general-01.jpg"],
    acquired: "",
    notes: "Fourth general in the collection and the third on the bad side, after General Shepherd who stranded the Green Rangers and the Fleet General who spent a crew to hand Quinn a fleet. Only one general here is good. He is the first villain here dressed as a civilian - no uniform, no armour, no mark of any kind - which for a man whose whole method is the cover is the costume doing the work. Nothing connects him to the Iron League or to Quinn's organisation; somebody hires him, and it is not written who."
  },

  {
    id: "the-clone-traitor",
    name: "The Clone Traitor",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Clone Trooper",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A clone trooper who betrayed the rest of the clones.",
    provenance:
      "Phase 1 clone armour, white, with olive-green markings - a stripe over " +
      "the crown of the helmet, the brow band and the visor frame picked out " +
      "in the same green. A grey pauldron over one shoulder and a grey kama at " +
      "the waist, olive arms, black hands, white legs.",
    tags: ["villain", "clone", "clone-trooper", "traitor", "star-wars", "branded", "phase-1"],
    images: ["images/the-clone-traitor-01.jpg"],
    acquired: "",
    notes: "The first clone on the bad side. Twenty-nine clones are catalogued here - the Clone Army, the 501st, the Commandos, the Wolfpack, the 187th, Cody, Claws who commands all of them - and every single one was good until him. He is also the third branded villain ever, after Savage Opress and Zuko, and all three have landed within three batches. Not put in the Clone Army: a group shows everybody to everybody, and betraying them is the one fact he has. Filed branded because he looks like a stock figure rather than one you worked on - say if he is painted and it changes."
  },

  {
    id: "the-sith-lords-second",
    name: "The Sith Lord's Second",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Second in Command",
    group: "",
    location: "",
    relations: [
      { to: "the-sith-lord", label: "Second in command to" },
    ],
    rating: 0,
    background:
      "Second in command to the Sith Lord - the minor one who wants the " +
      "knowledge rather than the throne, and who aligned with Quinn to spread " +
      "the dark side as a religion.\n\n" +
      "If that doctrine is the work, this is the man who runs it under him.",
    provenance:
      "A brown cap banded in gold over a hood, with a yellow face beneath it - " +
      "a full white moustache and beard, white brows, deep lines. Brown layered " +
      "robes printed with a grey inner wrap and a belt hung with a bone-shaped " +
      "clasp; brown arms, silver hands, black legs with pale rags printed at " +
      "the thigh.",
    tags: ["villain", "second-in-command", "sith", "dark-side", "religion", "elder", "robes"],
    images: ["images/the-sith-lords-second-01.jpg"],
    acquired: "",
    notes: "You described his master as the Sith who wears the brown outfit and has the hair, and that is the Sith Lord exactly - dark brown hair, brown layered robes, orange scoring at the temples. No guessing needed. Fourth figure here whose whole identity is being somebody else's second - after The Second, the Aqua Force Second and Quinn's Second-in-Command - and the second of the four on the villain side. The doctrine now has a chain of command: a religion with two people running it."
  },



  {
    id: "jabba-the-hutt",
    name: "Jabba the Hutt",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Crime Lord",
    group: "",
    location: "",
    relations: [
      { to: "the-gamorrean-guard", label: "His guard" },
    ],
    rating: 0,
    background:
      "Literally Jabba the Hutt.",
    provenance:
      "Not a minifigure at all - a single large moulded piece in pale green, " +
      "the length of several figures, with a long tail laid out behind him. " +
      "Two small arms, a heavy folded body, and a face of stacked creases with " +
      "the eyes half shut and the mouth set in a wide flat line.",
    tags: ["villain", "crime-lord", "hutt", "star-wars", "branded", "not-a-minifigure", "large"],
    images: ["images/jabba-the-hutt-01.jpg"],
    acquired: "",
    notes: "Fourth branded villain, third of them out of Star Wars, and by some distance the largest thing in this collection - he does not fit the shape everything else here is. He is also the first villain who is a crime lord rather than a soldier, a cultist or a hired man: the underworld on that side has had bounty hunters, assassins, smugglers and three financiers, and now it has somebody they would all answer to. Nothing was written between him and any of them when he was catalogued; his own guard has since arrived, and is still the only line drawn to him."
  },

  {
    id: "the-pirate-fleet-commander",
    name: "The Pirate Fleet Commander",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Pirate Fleet Commander",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Commander of the pirate fleet, and the one in charge of combat. The " +
      "fighting is his part of it.",
    provenance:
      "Pale blond hair swept back over a dark brown face with a thin moustache " +
      "and a hard set to the mouth. A bare brown torso printed with a pale " +
      "bandolier of shells across the chest and a grey harness of buckles and " +
      "pouches below it; brown arms, brown hands, tan legs printed with a " +
      "holstered pistol at one thigh and a knife at the other.",
    tags: ["villain", "pirate", "fleet-commander", "combat", "bandolier", "holster"],
    images: ["images/the-pirate-fleet-commander-01.jpg"],
    acquired: "",
    notes: "This is the one that turns three loose pirates into a navy. The Infamous Space Pirate, the Ninja Assassin Pirate and the Masked Space Pirate have arrived over the last five batches with nothing between them; a fleet commander in charge of combat implies ships and crews and somebody over all of it. Nothing is written connecting him to any of the three, or to the Outlaw, who is filed good and has a crew of space pirates behind him. Say the word and the bad side gets its first navy."
  },

  {
    id: "the-orc-queen",
    name: "The Orc Queen",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Queen",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Queen of the orcs.",
    provenance:
      "A moulded lion's head worn as a headdress - yellow, with the mane " +
      "spread wide and streaked in brown, the beast's own eyes and muzzle " +
      "printed above her face. Underneath it a pale green face with dark lips " +
      "and level brows. A gold-worked collar and shoulder piece over a brown " +
      "torso, a dark green cloth cape behind, pale green arms and hands, brown " +
      "legs.",
    tags: ["villain", "orc", "queen", "woman", "ruler", "lion-headdress", "cape"],
    images: ["images/the-orc-queen-01.jpg"],
    acquired: "",
    notes: "Orcs are new - six hundred and ten figures and not one until now. She is also the third woman on the villain side, after the TV Camera Woman and the Pharaoh, and the second of those three who rules something. And she makes Queen a role held on both sides: the only other one is the Space Princess, who is a cosmic deity and the Prince's wife. Two queens in this world now, and they have nothing to do with each other."
  },

  {
    id: "the-atlantis-traitor",
    name: "The Atlantis Traitor",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Diver",
    group: "The Atlantis Dive Team",
    location: "",
    relations: [],
    rating: 0,
    background:
      "An Atlantis diver who turned.",
    provenance:
      "Dark brown hair over a pale face with a scar drawn down from one eye " +
      "and a metal stud at the brow. A grey diving rig printed across the " +
      "torso - a silver breastplate with hose loops running from the collar, " +
      "lime-green pack fittings at the waist and a lime belt; grey arms, pale " +
      "hands, grey legs carrying a red trident badge at one thigh and a spear " +
      "strapped to the other.",
    tags: ["villain", "diver", "atlantis", "traitor", "dive-rig", "trident"],
    images: ["images/the-atlantis-traitor-01.jpg"],
    acquired: "",
    notes: "The Atlantis Dive Team had ten people in it and all ten were good. Put inside the group rather than outside it, the same way the Traitor Captain sits inside the Verdauf - the unit is what he is, and turning on it is the story. That is the opposite call to the one made for the Clone Traitor a batch ago, who was kept out of the Clone Army; the difference is that a named dive team of eleven is a unit and the clone army is an army. Say if you would rather they matched. This makes the Dive Team the sixth group with people on both sides."
  },

  {
    id: "the-false-kai",
    name: "The False Kai",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Ninjago",
    rank: "",
    role: "Infiltrator",
    group: "",
    location: "",
    relations: [
      { to: "kai", label: "Went undercover as" },
    ],
    rating: 0,
    background:
      "Somebody else, wearing Kai. He went undercover as the Ninjago ninja and " +
      "was taken for him.",
    provenance:
      "A red ninja wrap with a gold crest set at the brow, over a yellow strip " +
      "of face showing hard brows and white eyes. Gold clawed shoulder armour " +
      "on both sides. A red torso printed with crossed silver blades over a " +
      "buckled belt, red arms, red hands, red legs with a blade printed down " +
      "one side. A later Kai than the one already catalogued, whose wrap is " +
      "plain and whose crest is a gold flame at the chest.",
    tags: ["villain", "infiltrator", "undercover", "disguise", "ninjago", "impostor", "branded"],
    images: ["images/the-false-kai-01.jpg"],
    acquired: "",
    notes: "The catalogue is taken in too. He is filed branded, theme Ninjago, and carries a NINJAGO corner tag - exactly like the real Kai two hundred entries away - because the figure genuinely is one and there is nothing on it to say otherwise. That is the disguise working on the database. Seven Ninjago figures are catalogued here and he is the only one on the bad side. Fifth branded villain. The League of Shadows has a Master of Disguise; nothing says he trained this man, and it would be the obvious place."
  },



  {
    id: "the-suit-thief",
    name: "The Suit Thief",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Outlaw",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "He killed the white astronaut and took his suit. He has been wearing it " +
      "ever since.\n\n" +
      "What he is now is a space cowboy, and what he likes is looting.",
    provenance:
      "A white cowboy hat over a yellow face with orange-tinted round glasses " +
      "and a smirk at one corner of the mouth. The suit underneath is Classic " +
      "Space, white throughout, with the grey planet and red rocket badge at " +
      "the chest; white arms, white hands, white legs. Not a mark on it.",
    tags: ["villain", "outlaw", "space-cowboy", "looter", "classic-space", "stolen-suit", "murder"],
    images: ["images/the-suit-thief-01.jpg"],
    acquired: "",
    notes: "Classic Space has four men in it - blue, red, yellow and the bearded one - and white is the colour that is missing. The man who should be wearing this suit is not in the catalogue, because this one killed him. It is the first time a figure here is the evidence of a crime against a figure that does not exist. Second space cowboy on the bad side after the Space Outlaw, who picks fights because he enjoys them; nothing is written between them."
  },

  {
    id: "the-second-deadliest-poacher",
    name: "The Second-Deadliest Poacher",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Assassin",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "The second most dangerous poacher in the world, which in his case means " +
      "a supreme assassin. What he brings to it is tracking: he finds the " +
      "thing first, and the rest follows.",
    provenance:
      "Brown curled hair and a full brown beard over a pale face, brows level, " +
      "mouth set. A white shirt printed open over a grey undershirt with a " +
      "necklace of teeth at the throat and a coiled rope belt at the waist; " +
      "white arms, pale hands, tan legs.",
    tags: ["villain", "poacher", "assassin", "tracker", "second-deadliest", "teeth-necklace"],
    images: ["images/the-second-deadliest-poacher-01.jpg"],
    acquired: "",
    notes: "Fourth poacher on that side and the sixth assassin. The ranking is the interesting part - calling him the second most dangerous means somebody is first, and there are three candidates already here: the Famous Poacher, who is famous for it and smuggles as well; the Hitman, an expert poacher who changed quarry; and the Modified Arms Dealer, who used to be one and now heals fast. Say which and the poachers get an order."
  },

  {
    id: "the-astronaut-miner",
    name: "The Astronaut Miner",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Miner",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A low-ranking astronaut miner, and on the wrong side of it. Nobody " +
      "important, and that is the whole of him for now.",
    provenance:
      "Dark brown hair over a yellow face with an orange moustache and chin " +
      "patch and a wide grin. A white spacesuit printed with a grey ring " +
      "harness at the collar, an orange planet badge at the chest and orange " +
      "piping looped round the waist and down the thighs; a black air tank at " +
      "the back, white arms, white hands, white legs.",
    tags: ["villain", "miner", "astronaut", "low-rank", "spacesuit", "air-tank"],
    images: ["images/the-astronaut-miner-01.jpg"],
    acquired: "",
    notes: "The first miner in this collection on the bad side - the seven Power Miners are all good. His suit is Mars Mission livery, the same white and orange the five Mars Mission astronauts wear, and all five of those are good too. He is not put in that group: you called him an astronaut miner and did not name the unit, and putting him in would show him to every one of them. Say he is theirs and Mars Mission becomes the seventh split group."
  },

  {
    id: "the-television",
    name: "The Television",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Robot",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A portable television, and sentient. It walks about on its own.",
    provenance:
      "A white set for a body with a green screen printed across the front, " +
      "text and a small portrait showing on it, and three coloured buttons " +
      "down one side. A black aerial standing off the top with a ball at the " +
      "tip, and a translucent orange wedge beside it. No arms at all. Black " +
      "hips and plain white legs.",
    tags: ["villain", "robot", "sentient", "television", "broadcast", "aerial", "no-arms"],
    images: ["images/the-television-01.jpg"],
    acquired: "",
    notes: "Reading \"a scented robot portable TV sentient\" as a sentient portable-television robot; correct me if it was a second robot rather than a scented one. Fifth machine on the bad side. He has no arms at all, which puts him with the astromechs and nothing else here - except that they are droid bodies on a dome and he has legs and walks about. The body is a television and that is all it is. The Propaganda Unit on that side is four people who make broadcasts; this one is the broadcast. Nothing written between them."
  },

  {
    id: "the-jetpack-assassin",
    name: "The Jetpack Assassin",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Assassin",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "An assassin who works from a jetpack.",
    provenance:
      "A dark red helmet over a black cap, with red-lensed goggles across a " +
      "pale face and a flat mouth below them. A dark red torso printed with a " +
      "bandolier of green-tipped charges running across the chest, a buckled " +
      "belt, and a circled letter D at the shoulder; dark red arms, dark red " +
      "hands, black legs.",
    tags: ["villain", "assassin", "jetpack", "goggles", "charges", "bandolier"],
    images: ["images/the-jetpack-assassin-01.jpg"],
    acquired: "",
    notes: "Seventh assassin here, all seven on the bad side, and the second man in this world whose method is a jetpack - the Jetpack Sniper shoots from one, this one closes with it. The only other jetpacks belong to an archangel and a Nexo Knight, both good. Nothing is written between the two jetpack men, and a pair of them doing the same work from the air is close enough to be worth asking about. The circled D on his shoulder is not explained."
  },



  {
    id: "the-successful-replica",
    name: "The Successful Replica",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Replica",
    group: "",
    location: "",
    relations: [
      { to: "the-replica", label: "The attempt that worked" },
      { to: "the-green-demigod", label: "Copied from" },
    ],
    rating: 0,
    background:
      "The last time they tried it, and the time it worked.\n\n" +
      "They had been copying the DNA into robot technology for a while, " +
      "trying to build themselves an evil one of their own, and every attempt " +
      "before this came out wrong. This one came out right: evil, sentient, " +
      "and obedient.",
    provenance:
      "A red robot head with a wide blue visor band across it, rivets round " +
      "the plating and a grilled vent where a mouth would be. A black torso " +
      "printed edge to edge with silver, yellow and orange circuitry - " +
      "conduits, dials, a fan at the chest - carried down onto black legs with " +
      "the same panelling. Red arms, black hands.",
    tags: ["villain", "replica", "robot", "sentient", "obedient", "demigod-copy", "circuitry"],
    images: ["images/the-successful-replica-01.jpg"],
    acquired: "",
    notes: "This pays off a card that has been standing for a very long time. The Replica says outright that the villains tried to copy demigod power into robot technology and build an evil one, and that it did not work - they used the original DNA and the niceness was already in it, so he came out good and is filed on the other deck. This is the attempt that finally worked, linked to him and to the Green Demigod they were copying. One thing to settle: you said archangel DNA and the Replica's card says demigod. The First Circle holds both - the Green Demigod on one side, the Twins, the Engineer and the Rebuilt as Archangels - so say which donor and the programme has a subject. Sixth machine on the bad side."
  },

  {
    id: "the-domestic-security-captain",
    name: "The Domestic Security Captain",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Domestic Security Captain",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Captain of domestic security.",
    provenance:
      "A grey flight helmet with goggles pushed up on the brow, over a pale " +
      "face with a black beard and a wide grin. A grey torso printed with a " +
      "gold circuit board across the chest and a zip up the middle of it; blue " +
      "arms, black hands. Grey mechanical legs panelled in silver, with a " +
      "yellow gauge on one thigh and a red one on the other, and a small white " +
      "skull at the belt.",
    tags: ["villain", "security", "captain", "domestic", "goggles", "circuitry", "mechanical-legs"],
    images: ["images/the-domestic-security-captain-01.jpg"],
    acquired: "",
    notes: "The mirror of the Watch Commander, who runs the domestic police forces for the good side - the ground units, the small ones, the citywide day-to-day, and who is very strict and very stern about it. Same beat, opposite side. Nothing is written between them. Eighth villain carrying a captaincy."
  },

  {
    id: "the-space-biker-leader",
    name: "The Space Biker Leader",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Leader, Space Bikers",
    group: "The Space Bikers",
    location: "",
    relations: [],
    rating: 0,
    background:
      "He leads the space bikers - a gang of them, out there on the roads " +
      "between places.",
    provenance:
      "A moulded lime-green alien head, horned at the crown with two long ears " +
      "swept back, black eyes and a small tusked mouth. A black torso printed " +
      "with a white armour plate across the chest carrying a lime-green B in a " +
      "roundel, and a row of white bars at the waist; lime arms, black hands, " +
      "black legs printed with pale cracks and red panels.",
    tags: ["villain", "space-biker", "gang", "leader", "alien", "roundel"],
    images: ["images/the-space-biker-leader-01.jpg"],
    acquired: "",
    notes: "New group: The Space Bikers, three strong, and the first gang of any kind in this collection - the bad side has had leagues, cults, militias, squadrons and a propaganda unit, but nothing that is simply a gang. Reading \"led by the first one\" as the first of the three bikers rather than the red robot, on the grounds that a sentient archangel copy is unlikely to be running a road gang. Say otherwise and the leadership moves."
  },

  {
    id: "the-slimed-biker",
    name: "The Slimed Biker",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Space Biker",
    group: "The Space Bikers",
    location: "",
    relations: [],
    rating: 0,
    background:
      "One of the space bikers.",
    provenance:
      "The same moulded lime-green alien head as the leader. A black torso " +
      "with pale green slime printed running down from the collar in heavy " +
      "drips, an orange flaming skull in a ring at one side and an orange " +
      "bracket at the other; lime arms, grey hands, black legs cracked through " +
      "with orange like something burning underneath.",
    tags: ["villain", "space-biker", "gang", "alien", "slime", "flaming-skull"],
    images: ["images/the-slimed-biker-01.jpg"],
    acquired: "",
    notes: "Same head as the leader, different everything else - the gang is a look rather than a uniform, which is the opposite of how every other outfit on that side is put together. The Iron League wear one matched chest plate between four men."
  },

  {
    id: "the-orange-biker",
    name: "The Orange Biker",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Space Biker",
    group: "The Space Bikers",
    location: "",
    relations: [],
    rating: 0,
    background:
      "One of the space bikers.",
    provenance:
      "The same moulded alien head as the other two, in orange rather than " +
      "lime - horned, long-eared, black-eyed, tusked. A dark blue torso " +
      "printed with a grey chest plate and a panelled belt with a single dial " +
      "at the buckle; orange arms, black hands, plain grey legs.",
    tags: ["villain", "space-biker", "gang", "alien", "orange", "armour-plate"],
    images: ["images/the-orange-biker-01.jpg"],
    acquired: "",
    notes: "Third of the bikers and the plainest of them - no slime, no roundel, no crack down the legs, just the head and the armour. The colour is the only thing that separates him from the leader at a glance."
  },



  {
    id: "the-hyper-violent-alien",
    name: "The Hyper-Violent Alien",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Soldier",
    group: "The Alien Soldiers",
    location: "",
    relations: [],
    rating: 0,
    background:
      "An alien soldier, and hyper violent with it. That is what is said about " +
      "him and it is the whole of him so far.",
    provenance:
      "A dark red face cracked through with black, white eyes lit orange at " +
      "the centre, and a small fanged mouth, under swept green hair. A dark " +
      "red torso printed with an enormous open maw across the chest - two rows " +
      "of white teeth round a black throat - with orange flame licking up " +
      "around it, a yellow-blocked belt below, red arms, tan hands, black legs.",
    tags: ["villain", "alien", "soldier", "violent", "maw", "flame", "green-hair"],
    images: ["images/the-hyper-violent-alien-01.jpg"],
    acquired: "",
    notes: "First of five alien soldiers arriving together. The group name is your own words - you called them various alien soldiers and did not name a unit. See his card mates for the question of which force they belong to."
  },

  {
    id: "the-brawling-alien",
    name: "The Brawling Alien",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Soldier",
    group: "The Alien Soldiers",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Dumb, and good at his job anyway. What he is good at is hand-to-hand.",
    provenance:
      "A lime green face with slit yellow eyes ringed in orange and a mouth of " +
      "small teeth, under a swept red hairpiece. A lime torso printed with " +
      "scaled plating and orange flasks slung on straps at both hips; one red " +
      "arm and one lime, lime hands, dark teal legs printed with pale weed and " +
      "scales.",
    tags: ["villain", "alien", "soldier", "hand-to-hand", "brawler", "scales", "flasks"],
    images: ["images/the-brawling-alien-01.jpg"],
    acquired: "",
    notes: "The only figure in this collection described as not clever. Everybody else on either side is competent, cunning, expert, elite or a master of something - being plainly dumb and still useful is a new note for this world, and a much more ordinary kind of soldier than it usually gets."
  },

  {
    id: "the-alien-medic",
    name: "The Alien Medic",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Medic",
    group: "The Alien Soldiers",
    location: "",
    relations: [],
    rating: 0,
    background:
      "The medic of the alien soldiers, and an evil one.",
    provenance:
      "A pale grey moulded alien head, wide and flat, with two red eyes on " +
      "stalks standing out to either side, green speckling across the crown, a " +
      "ring of small teeth and a long red tongue hanging out of the mouth. A " +
      "pale grey torso printed with faint rib lines, one grey arm and one " +
      "black, grey hands, a grey belt and pale grey legs.",
    tags: ["villain", "alien", "medic", "stalked-eyes", "tongue", "moulded-head"],
    images: ["images/the-alien-medic-01.jpg"],
    acquired: "",
    notes: "The first medic in this collection on the bad side. Three medics and doctors are filed good - the Space Militia's medic with tools deep enough for any injury, Delta Squad's, and Dr Oz - and the two villains who practise medicine are the Butcher, who works on the dead, and the Evil Doctor who runs experiments with him. This is the first one on that side whose job is keeping his own people alive."
  },

  {
    id: "the-alien-gunslinger",
    name: "The Alien Gunslinger",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Gunslinger",
    group: "The Alien Soldiers",
    location: "",
    relations: [],
    rating: 0,
    background:
      "The infantry gunslinger of the alien soldiers.",
    provenance:
      "A red face lined in black with white slit eyes, a snarl and two lower " +
      "fangs, under heavy swept black hair. A black leather jacket printed " +
      "across the torso - open zip up the middle, studded flashes at both " +
      "shoulders, a grille badge at the chest and a buckled belt; red arms, " +
      "grey hands, black legs.",
    tags: ["villain", "alien", "gunslinger", "infantry", "leather-jacket", "studs", "fangs"],
    images: ["images/the-alien-gunslinger-01.jpg"],
    acquired: "",
    notes: "Gunslinger is a new office here. Four men were working a gun as their whole job before him - the Space Police Gunner, the Minigunner, the Delta Gunner and the Defense Gunner - and all four are good. He is also wearing a studded black biker jacket one batch after the Space Bikers arrived. Nothing is written between them and a jacket is not evidence; the only other leather jacket in the collection is the Saxophone Player's, and his is brown and has no studs on it."
  },

  {
    id: "the-alien-technician",
    name: "The Alien Technician",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Technician",
    group: "The Alien Soldiers",
    location: "",
    relations: [
      { to: "the-occupier", label: "Grew up with" },
    ],
    rating: 0,
    background:
      "The technician of the alien soldiers.",
    provenance:
      "A moulded lime-green head shaped like a snake's, hooded and fanged, " +
      "with five long quills standing back off the crown and no eyes printed " +
      "on it at all. A plain black torso with two round studs at the chest, " +
      "lime arms, lime hands, black legs. No printing anywhere below the neck.",
    tags: ["villain", "alien", "technician", "snake-head", "quills", "unprinted"],
    images: ["images/the-alien-technician-01.jpg"],
    acquired: "",
    notes: "Second technician on the bad side, after the Infamous Traitor, who is a Technician Sergeant. This unit is now five people with a medic, a technician, a gunslinger and two soldiers - a proper small force rather than a handful of monsters, which is a first for the aliens here. The open question is whose force it is: the Alien Militia has a commander who runs its school and the people who fight for it come up through him, and the Lead Alien Mercenary leads mercenaries who have never been photographed. Either of those has been waiting for exactly this. Say which and The Alien Soldiers folds into it."
  },



  {
    id: "the-occupier",
    name: "The Occupier",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Soldier",
    group: "",
    location: "",
    relations: [
      { to: "the-alien-technician", label: "Grew up with" },
    ],
    rating: 0,
    background:
      "A soldier of an occupying army.\n\n" +
      "He and the alien technician grew up together, and they are friends.",
    provenance:
      "A moulded red head, skull-like, ridged across the crown and hollow at " +
      "the eyes, on a thin red neck. A black backpack torso with two round " +
      "vents at the front, red arms hanging either side of it, red hands, and " +
      "a red bar and strut assembly for legs. Barely a minifigure at all.",
    tags: ["villain", "alien", "soldier", "occupation", "friendship", "moulded", "skull-head"],
    images: ["images/the-occupier-01.jpg"],
    acquired: "",
    notes: "This card is the first friendship on the villain side of the collection. Fifty-odd relations connect one villain to another and every last one of them is rank, blood or business - brothers, seconds-in-command, men who follow Quinn, two doctors who run experiments together, three knights who made a sword. Growing up with somebody and liking them is new over there. An occupying army is also new: nothing in this world has been said to hold ground it took until now, the Dictator included, and he only holds the planet he started with."
  },

  {
    id: "the-cobra-assassin",
    name: "The Cobra Assassin",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Assassin",
    group: "The Alien Goons",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A silent assassin.",
    provenance:
      "A moulded dark green cobra head, the hood spread wide and marked with " +
      "pale scales, yellow slit eyes and two long white fangs over an open " +
      "mouth. A black torso printed with a blue tabard laced in gold over a " +
      "white wrap, dark green arms, bright green hands, black legs.",
    tags: ["villain", "alien", "assassin", "silent", "cobra", "fangs", "goon"],
    images: ["images/the-cobra-assassin-01.jpg"],
    acquired: "",
    notes: "You called him a silent assassin, and The Silent Soldier already holds that name here - an elite assassin with a closed helmet and an insect device on his chest. Two cards a letter apart would be a nuisance to live with, so this one is named for the head. Say the word and he takes the name back. Eighth assassin, all eight on the bad side."
  },

  {
    id: "the-rhino-heavy",
    name: "The Rhino Heavy",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Heavy",
    group: "The Alien Goons",
    location: "",
    relations: [],
    rating: 0,
    background:
      "The heavy of the goons.",
    provenance:
      "A moulded grey head built like a rhinoceros - a blunt snout with square " +
      "teeth showing, small dark eyes, and two horns standing up off the brow " +
      "in olive. A silver torso under a blue cloth cape hung from both " +
      "shoulders, blue arms, grey hands, black legs.",
    tags: ["villain", "alien", "heavy", "rhino", "horns", "cape", "goon"],
    images: ["images/the-rhino-heavy-01.jpg"],
    acquired: "",
    notes: "Third heavy on the bad side, after the Juggernaut with his minigun and the Missile who is one. There is no heavy at all on the good side - Heavy himself, the nineteen-year-old in the honor guard who runs the largest gun in the Lego world, is filed under Honor Guard rather than the role. Heavy weapons are entirely a villain job in this catalogue."
  },

  {
    id: "the-goon-in-the-beanie",
    name: "The Goon in the Beanie",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Goon",
    group: "The Alien Goons",
    location: "",
    relations: [],
    rating: 0,
    background:
      "One of the goons. Small arms.",
    provenance:
      "A moulded grey snake head with yellow slit eyes, pale scaling over the " +
      "brow and two fangs at the corners of the mouth, wearing a black ribbed " +
      "beanie pulled down over the crown. A dark red torso printed with gold " +
      "scalework at the collar and a gold-buckled belt; grey arms, black " +
      "hands, brown legs with a red and white striped sash hanging at one hip.",
    tags: ["villain", "alien", "goon", "small-arms", "snake", "beanie", "sash"],
    images: ["images/the-goon-in-the-beanie-01.jpg"],
    acquired: "",
    notes: "Goon is a new office, and the four of them are the first muscle in this world catalogued as muscle. Everybody else who hits people for a living here has a trade attached - assassin, hitman, brawler, enforcer, thug. These are just the men you bring."
  },

  {
    id: "the-scarred-goon",
    name: "The Scarred Goon",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Goon",
    group: "The Alien Goons",
    location: "",
    relations: [],
    rating: 0,
    background:
      "One of the goons. Small arms.",
    provenance:
      "A lime green moulded head with a heavy crested helm worked into it, " +
      "lugs standing out at both temples, a dark scar across one eye socket " +
      "and a red tongue between two fangs. A pale green torso printed with a " +
      "studded silver collar, a bare chest and an orange lightning belt; one " +
      "dark grey arm and one black, silver hands, black legs printed with gold " +
      "chain and buckles.",
    tags: ["villain", "alien", "goon", "small-arms", "scarred", "helm", "chain"],
    images: ["images/the-scarred-goon-01.jpg"],
    acquired: "",
    notes: "Fourth of the goons and the second of the two on small arms. New group: The Alien Goons. That is now four separate alien bodies on the bad side with nothing written between any of them - the Lead Alien Mercenary's mercenaries, the Alien Militia and its school, The Alien Soldiers from last batch, and these. See the world note; one ruling would collapse most of it."
  },



  {
    id: "the-wolfman",
    name: "The Wolfman",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Goon",
    group: "The Alien Goons",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Another one on small arms. What he brings on top of that is the nose - " +
      "he can smell extremely well, and he tracks with it.",
    provenance:
      "A tan wolf's face with a dark muzzle, white fangs bared, yellow eyes " +
      "and a red scar tearing down from the brow past one of them, under long " +
      "swept brown hair with pointed ears standing through it. A dark red shirt " +
      "printed open over a pale chest with a sash at the waist; red arms, pale " +
      "hands, olive legs.",
    tags: ["villain", "wolfman", "goon", "small-arms", "tracker", "scent", "scar"],
    images: ["images/the-wolfman-01.jpg"],
    acquired: "",
    notes: "First werewolf in the collection - nothing has been part animal here before, and the only wolves on record are two clone troopers of the Wolfpack, who are named after one rather than being one. Put with the goons because you called him another one on small arms, which points straight at the two from last batch. That makes the group name wrong: he is not an alien. Say the word and The Alien Goons becomes The Goons. He is also the second tracker on the bad side, after the poacher who is the second most dangerous in the world."
  },

  {
    id: "the-bionic-alien",
    name: "The Bionic Alien",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Soldier",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "His legs are not his own. What they give him is durability and speed - " +
      "he takes a great deal of punishment and he can sprint.",
    provenance:
      "A moulded green head, wide and finned, with a pale blue face plate and " +
      "two large blue eyes set into it, ridged ears swept back and a crest of " +
      "small knobs over the crown. A green torso printed with pale scaling and " +
      "a ragged hem, green arms, green hands - and grey mechanical legs " +
      "panelled with hatches and vents at the thigh and shin.",
    tags: ["villain", "alien", "bionic", "prosthetic", "durability", "sprint", "mechanical-legs"],
    images: ["images/the-bionic-alien-01.jpg"],
    acquired: "",
    notes: "The Bionics Team on that side build prosthetics that double as weapons - a limb that is also a gun. His legs are not weapons; they are endurance and speed, which is a different brief from the same trade. Nothing connects him to that team and it is the obvious workshop. He joins the longest-running idea in this world, body modification worn as history, which starts with the Discarded and his silver arm and runs through the Mechanic, the Rebuilt, the Modified Arms Dealer, the Ranger, the Cybernetic Ninja and the Bionic Brother."
  },

  {
    id: "deus-pater",
    name: "Deus Pater",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "Cosmic Deity",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "The physical embodiment of the old European god - the sky father, the " +
      "one the rest of that pantheon comes down from.\n\n" +
      "His soul is trapped in the statue. He is not powerless: the statue is " +
      "enormously strong, and he is wise. What he has lost is the knowledge of " +
      "what a god can actually do. The power is still in there and he no " +
      "longer knows how to reach it.",
    provenance:
      "Gold from the crest down. A gold crested war helm with the cheek guards " +
      "flared out, and behind the visor a gold face lined in dark red, the " +
      "teeth showing. Gold shoulder pieces standing off both sides, a gold " +
      "torso worked with a muscled cuirass and a red-banded belt, gold arms, " +
      "gold hands, gold legs scored with red. Not one other colour on him.",
    tags: ["villain", "god", "deity", "statue", "trapped", "sky-father", "gold", "wise"],
    images: ["images/deus-pater-01.jpg"],
    acquired: "",
    notes: "Only the second ranked figure on the bad side, after the Blue Demigod, out of twelve ranked figures in the whole collection. He is also only the second figure here out of real human mythology: Aphrodite is catalogued as a Cosmic Deity on the good side, and Deus Pater is the sky father the Greek pantheon descends from, so the two of them are family several thousand years apart and nothing is written between them. Filed Cosmic Deity because it is the top rank this world already has; if a trapped god outranks that, the ladder needs a new step and you should say so. Filed bad with the run he arrived in, though nothing you said about him is hostile - a wise god who cannot remember his own powers is not obviously anybody's enemy, and he would move on one word."
  },

  {
    id: "the-space-trucker",
    name: "The Space Trucker",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Pirate",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A space trucker, and a pirate with it. He hauls, and he takes.",
    provenance:
      "A white and dark red baseball cap with a brown beaver printed on the " +
      "front, over a yellow face with hard brows, a scar at one eye and a grey " +
      "breathing mask across the mouth and jaw. A dark red torso printed with " +
      "brown strapping, buckles and a white-studded plate at the belly; dark " +
      "red arms, black hands, dark red legs panelled in white and grey.",
    tags: ["villain", "pirate", "trucker", "hauler", "breathing-mask", "cap", "beaver"],
    images: ["images/the-space-trucker-01.jpg"],
    acquired: "",
    notes: "Fifth pirate on the bad side and the first with a day job. The other four are pirates and nothing else - the Infamous one, the Ninja Assassin Pirate, the Masked one, and the Fleet Commander who runs their combat. This one drives a lorry between worlds and robs what he passes - the only pirate here who also has a job. The beaver on the cap is not explained."
  },

  {
    id: "the-financier-in-the-green-tie",
    name: "The Financier in the Green Tie",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Financier",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Another financier.",
    provenance:
      "Swept brown hair over a pale face with one brow raised and a flat, " +
      "unimpressed mouth. A black suit printed with a pale grey waistcoat, a " +
      "white shirt and a dark green tie; black arms, grey hands, black legs. " +
      "No hat, which is what separates him from the two gangsters.",
    tags: ["villain", "financier", "money", "suit", "green-tie", "no-hat"],
    images: ["images/the-financier-in-the-green-tie-01.jpg"],
    acquired: "",
    notes: "Seventh financier in the collection and the fourth on the bad side, all four inside six batches. Three of the four are near-identical men in dark suits - the Gangster Financier and the Second Gangster Financier share a torso print outright, the Evil Financier wears the same fedora - and this one is the first without a hat. Named for the tie because there is nothing else to tell him apart by. The money end of the enemy went from nobody to four in a fortnight and not one of them is written as connected to any other, or to Jabba, who is the crime lord they would all plausibly answer to."
  },



  {
    id: "the-financier-in-the-cravat",
    name: "The Financier in the Cravat",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Financier",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Another evil financier.",
    provenance:
      "Black hair swept up and back over a pale face with heavy stubble and a " +
      "small closed mouth. A black formal coat printed over a pale waistcoat " +
      "and a dark red cravat knotted at the throat, with gold buttons and a " +
      "gold watch chain looped at the pocket; black arms, white hands, black " +
      "legs printed with the tails of the coat.",
    tags: ["villain", "financier", "money", "cravat", "watch-chain", "formal"],
    images: ["images/the-financier-in-the-cravat-01.jpg"],
    acquired: "",
    notes: "Fifth financier on the bad side and the eighth in the collection. Five men handle the enemy's money, which is more than the Iron League or the Propaganda Unit can field and level with the Alien Soldiers and the Goons. Only the League of Shadows, at eight, is bigger than the accounts department. Not one of the five is written as connected to any other, or to Jabba the Hutt, and none of them is said to fund anything in particular. This one is the best dressed of them, which is the only thing that separates him."
  },

  {
    id: "the-transport-director",
    name: "The Transport Director",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Director, Royal Transport Authority",
    group: "",
    location: "",
    relations: [
      { to: "the-mad-ticket-man", label: "Was over him, and betrayed him" },
    ],
    rating: 0,
    background:
      "He used to run the Royal Transport Authority. He has switched sides.\n\n" +
      "The Mad Ticket Man was under him, and he betrayed him.",
    provenance:
      "A black peaked cap over a yellow face with a flat mouth and a small " +
      "scar at one cheek. A dark blue conductor's uniform printed with a pale " +
      "shirt, a red tie, three buttons, a ticket and pen in the breast pocket " +
      "and a white rail badge at the chest; dark blue arms, yellow hands, dark " +
      "blue legs.",
    tags: ["villain", "transport", "director", "railway", "defector", "betrayal", "uniform"],
    images: ["images/the-transport-director-01.jpg"],
    acquired: "",
    notes: "This is the payoff nobody had set up. The Mad Ticket Man's card has said from the day it was written that a lot of people assumed he would turn out to be a bad guy when the Great Lego War came, and that he was devoutly loyal instead, which was very nice. The man everybody suspected stayed. The man above him is the one who went. The Royal Transport Authority is new, and it explains what the Ticket Man actually is: not a jobsworth on a gate but the security of the Royal Palace and the city, under a directorate that has now lost its director."
  },

  {
    id: "the-dark-side-enforcer",
    name: "The Dark Side Enforcer",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Enforcer",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "The enforcer of the dark side.",
    provenance:
      "A black helmet closed over the whole head with a smoked visor and a " +
      "collar piece beneath it, nothing showing. A black suit printed with a " +
      "pale shirt, a grey tie, two yellow buttons and a white shield badge " +
      "carrying a yellow star; black arms, grey hands, black legs printed with " +
      "belt pouches and pale bands at the knee.",
    tags: ["villain", "enforcer", "dark-side", "faceless", "visor", "badge", "star"],
    images: ["images/the-dark-side-enforcer-01.jpg"],
    acquired: "",
    notes: "The first enforcer in this collection on the bad side; the Enforcer Squad, their Commander and the Bribed Royal Enforcer are all good. He wears a badge with a star on it, which is what a lawman wears here, over a suit and tie - the enemy has produced its own police. Which dark side he enforces for is not said: Quinn is a Sith Master, the Sith Lord spreads the doctrine as a religion, the shadow people worship occult gods, and the League of Shadows keeps their secrets. Four candidates, no link drawn."
  },

  {
    id: "the-robotic-samurai",
    name: "The Robotic Samurai",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Samurai",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A samurai, and a machine.",
    provenance:
      "A black samurai helm with wide neck flanges and a pair of chrome horns " +
      "curving up off the brow. Under it a dark face with a thin moustache and " +
      "a wide grin. A black torso printed with a blue and silver circuit plate " +
      "across the chest - coils either side, a warning triangle at the centre, " +
      "screws at all four corners - one grey arm and one black, blue hands, a " +
      "blue belt and grey legs.",
    tags: ["villain", "samurai", "robot", "machine", "circuitry", "horned-helm"],
    images: ["images/the-robotic-samurai-01.jpg"],
    acquired: "",
    notes: "Seventh machine on the bad side, and the first samurai there. The other two are good and both belong to the ninja story - the Samurai, who is the Shogun of the Ninja Lineage and trained the blue-haired ninja, and Nya. A samurai built rather than trained is a new idea in that corner of the world, and nothing connects him to the Lineage."
  },

  {
    id: "the-evil-pilot",
    name: "The Evil Pilot",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Pilot",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "An evil pilot.",
    provenance:
      "A plain orange helmet with a silver mirrored visor pulled down, a " +
      "grimace just visible behind it. An orange racing suit printed with a " +
      "white and grey panel across the chest and a globe badge reading WR; " +
      "orange arms, yellow hands, plain orange legs.",
    tags: ["villain", "pilot", "racing-suit", "mirrored-visor", "orange"],
    images: ["images/the-evil-pilot-01.jpg"],
    acquired: "",
    notes: "Thirty pilots are catalogued here and twenty-eight of them are good - it is the second commonest job in the collection after soldier, and until the Pilot's Apprentice murdered the Famous Pilot for his job, every single one of them was on the right side. This is the second. He is dressed as a racing driver rather than a combat flier, and the three racing drivers here are all good, so which he actually flies is worth saying."
  },



  {
    id: "the-armoury-traitor",
    name: "The Armoury Traitor",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Armorer",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "The traitor of the armoury. He moved as many guns, weapons and " +
      "explosives out of it as he could get his hands on.",
    provenance:
      "Short black hair over a pale face with heavy brows and a flat mouth. A " +
      "blue torso printed with a grey chest plate, a panelled belt and a brown " +
      "strap over one shoulder; one blue arm and one grey, grey hands, blue " +
      "legs with a white buckle and a pale slash printed at the thigh.",
    tags: ["villain", "armoury", "armorer", "traitor", "weapons", "explosives", "theft"],
    images: ["images/the-armoury-traitor-01.jpg"],
    acquired: "",
    notes: "You put him next to the Transport Director from the last batch and the pair of them make a shape: two men inside the machinery of the state who turned, one holding the roads and one holding the guns. Nothing is written between them and a comparison is not a connection, so no link. Say they worked together and the enemy has a fifth column rather than two separate resignations. The armoury itself is new as a place; the Armorer of the Gunless Realm and the Space Militia's Quartermaster are the only other people here who keep weapons, and both are good."
  },

  {
    id: "the-robot-builder",
    name: "The Robot Builder",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Robot Builder",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A robotic soldier who builds robots.",
    provenance:
      "A plain white helmet with a silver mirrored visor lifted, and behind it " +
      "a yellow face with a single green lens where one eye should be and a " +
      "grimace under it. A black torso printed edge to edge with grey plating " +
      "and pale blue lights - a ribbed spine, panels at the ribs, a lit core - " +
      "black arms, grey hands, blue legs.",
    tags: ["villain", "robot", "machine", "builder", "manufacture", "lens-eye", "visor"],
    images: ["images/the-robot-builder-01.jpg"],
    acquired: "",
    notes: "Eighth machine on the bad side, and the one that changes the arithmetic: he makes more. Every machine over there so far has been a single object somebody else built - the Missile, two killer bots, the Television, the Robotic Samurai, the Successful Replica. The Maker built himself, which was already a step. This one is a production line, and a production line does not need the villains to keep photographing new ones."
  },

  {
    id: "the-former-dive-captain",
    name: "The Former Dive Captain",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Captain",
    group: "The Atlantis Dive Team",
    location: "",
    relations: [
      { to: "the-young-leader", label: "The captain before him" },
    ],
    rating: 0,
    background:
      "He was the captain of the Atlantis dive team before he switched sides.",
    provenance:
      "A translucent green dome helmet over a yellow face in wide goggles, " +
      "with a grey collar rig and a tank at the back. A grey dive suit printed " +
      "with yellow-blocked plating at the waist and a red belt, red arms, black " +
      "hands, grey legs carrying a red trident badge at one thigh and a tool at " +
      "the other.",
    tags: ["villain", "diver", "atlantis", "captain", "defector", "trident", "dome-helmet"],
    images: ["images/the-former-dive-captain-01.jpg"],
    acquired: "",
    notes: "This answers a question the Young Leader's card never knew it was asking. He is twenty-three, he runs the Atlantis dive team, and his note says almost every leader in this collection got the job by rank, bloodline or outliving the last one - and that he got it by being wanted in it. Both are now true. There was a captain before him, the captain turned, and the job went to the youngest person in the collection to run anything. Second defector out of the same twelve-strong team in two batches, after the Atlantis Traitor, and the two of them are not written as connected."
  },

  {
    id: "the-gladiator",
    name: "The Gladiator",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Gladiator",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A gladiator, and a warrior.",
    provenance:
      "A bronze gladiator helm with a crest standing off the crown, the brim " +
      "flared out at the sides and the whole face closed behind a pierced " +
      "grille. A black tunic printed over a brown belt with pale fastenings, " +
      "one yellow arm cracked with age and one black, a yellow hand and a grey " +
      "one, tan legs with a satchel at one thigh and a white axe head at the " +
      "other.",
    tags: ["villain", "gladiator", "warrior", "bronze-helm", "grille", "axe", "arena"],
    images: ["images/the-gladiator-01.jpg"],
    acquired: "",
    notes: "Gladiators are new. Six hundred and forty-five figures and nobody has fought for an audience before - the nearest things are the Wrestler, the Sumo Wrestler and the Boxer, all three filed as athletes and all three good. Fighting here has always been war, crime, or duty. This is the first man whose job is a spectacle. Whether there is an arena somewhere in this world, and whose, is worth saying."
  },

  {
    id: "the-infantry-captain-in-grey",
    name: "The Infantry Captain in Grey",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Infantry Captain",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "An evil infantry captain.",
    provenance:
      "A grey helmet with the visor raised, showing an orange-lit face with " +
      "hard brows and a set mouth. A dark blue torso printed with silver " +
      "plating across the chest and a panelled belt, the letters WIZ at one " +
      "shoulder; dark blue arms, grey hands, dark blue legs carrying the same " +
      "silver panelling down to the boot.",
    tags: ["villain", "captain", "infantry", "visor", "plating", "wiz"],
    images: ["images/the-infantry-captain-in-grey-01.jpg"],
    acquired: "",
    notes: "Named in grey because The Evil Infantry Captain already exists on that side - a black helmet printed with a red and white skull under a transparent red visor, arriving five batches ago. Two evil infantry captains now, dressed nothing alike, with nothing written between them and no unit named for either. Tenth villain carrying a captaincy, counting the Former Dive Captain in this same batch, and still not one of the ten is written as commanding any of the others. The WIZ on his shoulder is not explained."
  },



  {
    id: "the-evil-bowman",
    name: "The Evil Bowman",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Archer",
    group: "The Evil Knights",
    location: "",
    relations: [],
    rating: 0,
    background:
      "The bowman of the evil knights.",
    provenance:
      "A riveted grey kettle helm with a wide brim, over a mail coif framing a " +
      "yellow face with a small closed mouth. A tunic quartered red and white " +
      "and printed with a gold lion, a brown belt across it; one grey arm and " +
      "one black, yellow hands, pale grey legs.",
    tags: ["villain", "knight", "archer", "bowman", "kettle-helm", "lion", "medieval"],
    images: ["images/the-evil-bowman-01.jpg"],
    acquired: "",
    notes: "He is wearing the enemy's badge. The Dragon Knight's card has said since it was written that the lion is what the rest of the order carries - it is the Royal Knights' own crest - and this man has a gold one across his chest. In that realm the rule is that dying costs you your armour and not your life, and what you lose stays where you fell for the other side to pick up and keep. A lion surcoat on an enemy archer is exactly what that rule predicts. He could equally be a defector, or it could be a shared part and nothing more. Second archer on the bad side, after the Shadow Archer."
  },

  {
    id: "the-clubman",
    name: "The Clubman",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Clubman",
    group: "The Evil Knights",
    location: "",
    relations: [],
    rating: 0,
    background:
      "The club man of the evil knights.",
    provenance:
      "A black mail coif drawn close around a yellow face with heavy stubble, " +
      "brows down and the teeth bared. A grey torso printed with fine white " +
      "chainmail under crossed brown leather straps and a buckled belt; red " +
      "arms, yellow hands, red legs.",
    tags: ["villain", "knight", "clubman", "chainmail", "coif", "stubble", "medieval"],
    images: ["images/the-clubman-01.jpg"],
    acquired: "",
    notes: "Clubman is a new office. The Royal Knights have a Mace Knight who fights with a mace and that is the nearest thing - eighteen of them, and every one is good. A club is the crudest weapon anybody in this collection carries; the rest of the medieval realm fights with swords, bows, crossbows and a mace."
  },

  {
    id: "the-evil-cavalryman",
    name: "The Evil Cavalryman",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Cavalry",
    group: "The Evil Knights",
    location: "",
    relations: [],
    rating: 0,
    background:
      "The cavalry of the evil knights.",
    provenance:
      "A black helm with the neck guard flaring wide at both sides, over a " +
      "yellow face carrying a black eyepatch and a scar beneath it. A torso " +
      "printed with a silver gorget above a red and black shield with a gold " +
      "dragon rearing on it; blue arms, yellow hands, blue legs.",
    tags: ["villain", "knight", "cavalry", "dragon", "eyepatch", "scar", "medieval"],
    images: ["images/the-evil-cavalryman-01.jpg"],
    acquired: "",
    notes: "Cavalry is new, and it raises a question the collection cannot answer: there is exactly one horse in it, Widow, and she is filed good. A mounted arm on the enemy side needs mounts. He carries a gold dragon, and so does the Evil Swordsman beside him - but the Royal Knights have a Dragon Knight of their own, whose card points out that his dragon is not the lion the rest of the order carries. A dragon is not a side here."
  },

  {
    id: "the-evil-swordsman",
    name: "The Evil Swordsman",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Swordsman",
    group: "The Evil Knights",
    location: "",
    relations: [],
    rating: 0,
    background:
      "The swordsman of the evil knights.",
    provenance:
      "A black helm with the neck guard swept out and down, over a yellow face " +
      "with a heavy black moustache and the brows pulled hard together. A black " +
      "torso printed with rows of silver studs around a red shield carrying a " +
      "red dragon, a studded brown belt below it; red arms, black hands, black " +
      "legs.",
    tags: ["villain", "knight", "swordsman", "dragon", "studded", "moustache", "medieval"],
    images: ["images/the-evil-swordsman-01.jpg"],
    acquired: "",
    notes: "The first man on that side whose whole job is the sword and who is not tied to the killing swords. The three medieval villains before him - the Swordsmith Knight, the Knight with the Real Sword and the Evil Knight - are every one of them caught up in that story, the weapons that kill for real in a realm where dying is supposed to cost you nothing but your armour. This one is not written into it. If he is, that story has a fourth man."
  },

  {
    id: "the-yellow-super-swordsman",
    name: "The Yellow Super Swordsman",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Swordsman",
    group: "The Evil Knights",
    location: "",
    relations: [],
    rating: 0,
    background:
      "The best swordsman the evil knights have.",
    provenance:
      "A full black great helm with a cross brace and a narrow eye slit, a dark " +
      "red plume standing off the crown on a spike. A tunic quartered yellow " +
      "and black under a printed mail collar, a red and silver studded belt " +
      "across it; black arms, dark red hands, black and yellow legs over grey " +
      "boots.",
    tags: ["villain", "knight", "swordsman", "elite", "great-helm", "plume", "quartered"],
    images: ["images/the-yellow-super-swordsman-01.jpg"],
    acquired: "",
    notes: "Their best, and the only one of the five whose face is entirely shut away - the other four all show a jaw or a scar. The Royal Knights answer him with the Swordmaster and the Supreme Mega Knight, who is full plate, battered, scuffed and grubby with it. Nobody has said whether these two have ever met and it is the fight the medieval realm has been missing."
  },



  {
    id: "the-armoured-space-pirate",
    name: "The Armoured Space Pirate",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Pirate",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A space pirate.",
    provenance:
      "A black helm with the neck guard flared wide, over a dark brown face " +
      "with a white eye and a scar drawn down the cheek. A brown leather " +
      "cuirass printed with pale straps at the shoulders, gold studs and a gold " +
      "band round the hem; brown arms, brown hands, tan legs.",
    tags: ["villain", "pirate", "space-pirate", "leather", "scar", "helm"],
    images: ["images/the-armoured-space-pirate-01.jpg"],
    acquired: "",
    notes: "Sixth pirate on the bad side. The Pirate Fleet Commander arrived several batches ago in charge of their combat, and the crew he implies keeps growing without anybody saying it is his: the Infamous Space Pirate, the Ninja Assassin Pirate, the Masked Space Pirate, the Space Trucker and now this one. Five pirates and a man who commands a fleet, and not a word between any of them."
  },

  {
    id: "the-second-evil-bowman",
    name: "The Second Evil Bowman",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Archer",
    group: "The Evil Knights",
    location: "",
    relations: [],
    rating: 0,
    background:
      "The second bowman of the evil knights.",
    provenance:
      "The same riveted kettle helm and mail coif as the first bowman, over a " +
      "yellow face with a black moustache and heavy stubble. The same tunic " +
      "too - quartered red and white, gold lion across the chest, brown belt - " +
      "with grey arms, one pale hand and one yellow, and pale grey legs.",
    tags: ["villain", "knight", "archer", "bowman", "kettle-helm", "lion", "moustache"],
    images: ["images/the-second-evil-bowman-01.jpg"],
    acquired: "",
    notes: "Two enemy archers now, wearing the identical tunic, and the tunic is the Royal Knights' lion. One man in their colours could be a shared part. Two is a pattern. In that realm what you lose when you fall stays there for the other side to pick up and keep, so a pair of enemy bowmen kitted out of the same wardrobe is precisely what the rule produces - and the Second Royal Archer is still wearing his. Whether these two stripped him or defected from beside him is the open question."
  },

  {
    id: "the-blue-bounty-hunter",
    name: "The Blue Bounty Hunter",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Bounty Hunter",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A bounty hunter, and she flies alone.",
    provenance:
      "Long red hair falling either side of a blue face - brown eyes, painted " +
      "lips, fine lines at the brow. A grey torso printed with plated armour " +
      "and gold chain looped across it, a yellow-blocked belt below; one blue " +
      "arm bare and one in a black armoured sleeve with a clawed gauntlet, grey " +
      "legs carrying a yellow dial at one thigh and a red one at the other.",
    tags: ["villain", "bounty-hunter", "woman", "pilot", "solo", "blue", "chains", "gauntlet"],
    images: ["images/the-blue-bounty-hunter-01.jpg"],
    acquired: "",
    notes: "Eleventh bounty hunter and the first woman among them; seven of the eleven are on this side and every one before her was a man. She is also the fourth woman on the villain side at all, after the TV Camera Woman, the Pharaoh and the Orc Queen. The thing worth a ruling is her skin: the blue people are the portal masters of this world, whose magic and essence open the ways between dimensions, and the only one of them photographed is a demigod who came through uninvited with an army. If she is one of theirs, a portal master working as a bounty hunter is a much larger fact than the job. Nothing says she is."
  },

  {
    id: "the-black-ninja",
    name: "The Black Ninja",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Ninja",
    group: "The Ninja Lineage",
    location: "",
    relations: [
      { to: "the-red-ninja", label: "Taught" },
    ],
    rating: 0,
    background:
      "The ninja who taught the Red Ninja.",
    provenance:
      "A black cloth wrap closed over the whole head, leaving a single yellow " +
      "band at the eyes and nothing else. A black gi printed with pale fold " +
      "lines and a crossed wrap at the chest; black arms, black hands, black " +
      "legs. Not one other colour anywhere on him.",
    tags: ["villain", "ninja", "teacher", "lineage", "masked", "all-black"],
    images: ["images/the-black-ninja-01.jpg"],
    acquired: "",
    notes: "This explains a line that has been sitting on the Red Ninja's card doing nothing: for a time he was tempted by evil, and he decided not to do evil. His teacher is where the temptation came from. The Ninja Lineage is a chain of teaching four generations deep now - the Black Ninja taught the Red Ninja, the Red Ninja taught the Blue-Haired Ninja and the Street Ninja, the Blue-Haired Ninja is training the Red Apprentice - and the man at the top of it is on the other deck. He is in the group, because a lineage is exactly the thing he belongs to, which makes it the seventh group in this collection with people on both sides."
  },

  {
    id: "the-astronaut-ninja",
    name: "The Astronaut Ninja",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Ninja",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "An astronaut ninja. He is not much of a ninja. He is genuinely good " +
      "with a sword.",
    provenance:
      "A white space helmet with a dark blue visor pulled right down over the " +
      "face. A red tunic printed with a gold scaled collar, a black sash " +
      "crossing the chest with a hilt at it, and a gold chevron at the hem; red " +
      "arms, yellow hands, black legs.",
    tags: ["villain", "ninja", "astronaut", "swordsman", "space-helmet", "not-very-good"],
    images: ["images/the-astronaut-ninja-01.jpg"],
    acquired: "",
    notes: "The bad side has four men filed as ninja now - the Crimson Ninja, the Cybernetic Ninja, the Black Ninja and him - plus the Ninja Assassin Pirate, who is filed as an assassin. He is also the second figure in the collection admitted to be bad at their own job, after the Incompetent Bounty Hunter. The Brawling Alien is dumb and good at his, which is a different thing. Nobody here has ever combined the two crafts either - the ninja are medieval and Ninjago, the astronauts are Classic Space and Mars Mission, and a man in a space helmet carrying a sword belongs to neither."
  },



  {
    id: "darth-nihilus",
    name: "Darth Nihilus",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Sith",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Darth Nihilus.",
    provenance:
      "A black hood pulled forward over a white bone mask - a long crack down " +
      "the centre, two dark hollows where the eyes would be with red bled into " +
      "them. A black robe printed with pale folds and a high collar, a black " +
      "cloth cape behind, black arms, black hands, black legs. A red blade on " +
      "a silver hilt.",
    tags: ["villain", "sith", "star-wars", "branded", "mask", "hood", "red-lightsaber"],
    images: ["images/darth-nihilus-01.jpg"],
    acquired: "",
    notes: "Sixth branded villain, fourth of them out of Star Wars, and the fifth Sith here after Quinn, the Purple Shadow, the Sith Lord and Savage Opress. Three of those five are home-made, which keeps being the shape of this collection - the bought figures supply the famous ones and the enemy was invented."
  },

  {
    id: "the-alien-racer",
    name: "The Alien Racer",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Racing Driver",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A racer. He runs transports, and he is not a man.",
    provenance:
      "A translucent red head lit from inside and painted over with a black " +
      "visor band, two pale eyes and a wide yellow grin, with green corrosion " +
      "creeping across the crown. A blue torso printed with a silver control " +
      "panel, dials and cabling running down to the waist; blue arms, one " +
      "black hand and one silver, black legs.",
    tags: ["villain", "racer", "transport", "alien", "robot", "translucent", "corroded"],
    images: ["images/the-alien-racer-01.jpg"],
    acquired: "",
    notes: "First racing driver in this collection on the bad side - the Ferrari Driver, the Porsche Driver, the Spaceship Racer and the Stunt Driver are all good. Your description ran robot, transport, racer and alien together and I could not tell which of those is the noun. The head is translucent and corroded, which would suit a machine, so the card takes all four as true. Correct whichever is wrong."
  },

  {
    id: "the-speed-assassins",
    name: "The Speed Assassins",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Assassin",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Two of them, working as a pair. They come past fast, blow the thing up " +
      "and are gone before anybody has turned round. Hit and run, every time.",
    provenance:
      "Two figures, identically helmeted - black domed helms with a silver " +
      "chevron worked across the face and small horns at the crown, no eyes " +
      "and no mouth. One wears a grey chest rig printed with white tubing over " +
      "a yellow-blocked belt; the other is armoured in silver and gold with " +
      "chevrons at the thighs and silver boots. Black arms and legs on both, " +
      "grey hands.",
    tags: ["villain", "assassin", "pair", "hit-and-run", "speed", "helmet", "faceless"],
    images: ["images/the-speed-assassins-01.jpg"],
    acquired: "",
    notes: "One card because they came as a pair, the same call as the Nude Aliens, the Lost Pirates and the Brain Parasites. They are also the first people in this collection whose method is a tactic rather than a weapon or a skill: everybody else is defined by what they carry or what they are good at, and these two are defined by not being there when you look."
  },



  {
    id: "darth-vader",
    name: "Darth Vader",
    variant: "Three figures",
    faction: "bad",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Sith",
    group: "",
    location: "",
    relations: [
      { to: "emperor-palpatine", label: "His master" },
    ],
    rating: 0,
    background:
      "Darth Vader.",
    provenance:
      "Three of him, and two of the three are the same figure a decade " +
      "apart.\n\n" +
      "Plain: the moulded black helmet and mask, a black cloth cape, and a " +
      "torso printed simply - white ribbing at the chest, a control box, two " +
      "panels at the belt. Black arms, black hands, black legs with no " +
      "printing on them at all.\n\n" +
      "In detail: the same helmet over a torso worked properly - the ribbing " +
      "shaded, the chest box picked out in red and green, panels at both hips " +
      "and the printing carried right down the legs. A rougher, heavier cloth " +
      "cape.\n\n" +
      "And in blue: the whole figure moulded in transparent blue, helmet to " +
      "boots, with the chest panel printed in white over it and a blue blade " +
      "in his hand. You can see through him.",
    tags: ["villain", "sith", "star-wars", "branded", "vader", "helmet", "cape", "translucent"],
    images: [
      { src: "images/darth-vader-01.jpg", caption: "Plain" },
      { src: "images/darth-vader-02.jpg", caption: "In detail" },
      { src: "images/darth-vader-03.jpg", caption: "Transparent blue" }
    ],
    acquired: "",
    notes: "Eighth branded villain and the sixth out of Star Wars, which makes that franchise the enemy's main supplier of bought figures by a distance. Sixth Sith here, after Quinn, the Purple Shadow, the Sith Lord, Savage Opress and Darth Nihilus - three home-made, three off the shelf. The transparent one is the odd thing: a fair few figures in this collection have a translucent piece, a visor or a helmet or a blade, and none of them is translucent all the way through. He was the only figure here you can see the shelf through, until a hologram of Darth Revan arrived - transparent blue from the hood down, and a picture of a man rather than a man."
  },

  {
    id: "the-blue-mandalorian",
    name: "The Blue Mandalorian",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Mandalorian",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A Mandalorian, and an enemy of this world.",
    provenance:
      "A grey-domed helmet with the face plate in blue, a black T-visor and " +
      "silver at the ears and brow. A blue torso printed with a grey chest " +
      "plate, a sculpted collar and a grey segmented belt with a brown strap " +
      "under it; blue arms, grey hands, blue legs.",
    tags: ["villain", "mandalorian", "star-wars", "branded", "beskar", "t-visor", "blue"],
    images: ["images/the-blue-mandalorian-01.jpg"],
    acquired: "",
    notes: "Ninth branded villain. The Mandalorian and the Armorer, who forges beskar and keeps their creed, are both filed good - so this is the third Mandalorian here and the first against this world. You said these two are separate men rather than one photographed twice, so they get a card each; they share a torso print and differ only at the helmet."
  },

  {
    id: "the-second-blue-mandalorian",
    name: "The Second Blue Mandalorian",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Mandalorian",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "The other Mandalorian.",
    provenance:
      "The same blue and grey armour as the first, down to the chest plate and " +
      "the segmented belt - and a different helmet: the dome grey, the blue " +
      "carried further forward, a silver band running up the centre over the " +
      "visor, and a brown pack at the back of the neck. Blue arms, grey hands, " +
      "blue legs.",
    tags: ["villain", "mandalorian", "star-wars", "branded", "beskar", "t-visor", "blue", "pack"],
    images: ["images/the-second-blue-mandalorian-01.jpg"],
    acquired: "",
    notes: "Tenth branded villain. Two men in one set of armour, named apart because you said they are separate - which is the opposite call to Boba Fett, where three suits of armour turned out to be one man. Mandalorian armour is inherited and handed on in the source, so a shared print is exactly what you would expect either way; the helmet and the pack are what separate them here."
  },



  {
    id: "the-wampa",
    name: "The Wampa",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Beast",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A wampa. The thing that lives in the ice and takes people back to its " +
      "cave.",
    provenance:
      "Not a minifigure - a single large moulded piece in off-white, twice the " +
      "bulk of an ordinary figure, with shaggy fur cut into it in jagged " +
      "planes. Two curved grey horns, a black snarl of teeth under a small " +
      "yellow muzzle, dark sunken eyes, and grey claws on both hands and both " +
      "feet. It stands hunched.",
    tags: ["villain", "beast", "animal", "wampa", "star-wars", "branded", "not-a-minifigure", "ice"],
    images: ["images/the-wampa-01.jpg"],
    acquired: "",
    notes: "The first animal in this collection on the bad side. Six creatures were catalogued before him - Laval, a horse called Widow, Chewbacca, the Ewok, Rotta the Hutt and a Spider-Man - and every one is good. He is also the first enemy here that is simply a predator: the Brain Parasites eat, but they were built as a weapon by somebody. Nobody sent the wampa. Fourth figure in the catalogue that is not minifigure-shaped, after the Kaminoan, the Martian Leader and Jabba. This used to read fifth and counted the Alien Professor, who has since been photographed properly and turns out to be an ordinary minifigure."
  },

  {
    id: "lotso",
    name: "Lotso",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Toy Story",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Lots-o'-Huggin' Bear.",
    provenance:
      "A single moulded piece, deep pink, shaped as a bear standing upright - " +
      "rounded ears, a pale grey muzzle with a purple nose and purple brows " +
      "over small brown eyes, and a pale belly patch stitched round the edge. " +
      "Stubby arms hanging at the sides and moulded feet. No printing except " +
      "the face.",
    tags: ["villain", "toy-story", "branded", "bear", "not-a-minifigure", "pink", "moulded"],
    images: ["images/lotso-01.jpg"],
    acquired: "",
    notes: "The first Toy Story villain here, and the first branded villain out of anywhere except Star Wars, Avatar and Ninjago. The Toys are Woody, Buzz Lightyear and the Toy Alien, all good and all in a group together - he is deliberately not put in it, since being the thing they are afraid of is the point. Fifth figure that is not minifigure-shaped, arriving in the same batch as the fourth. Both counts moved down by one when the Alien Professor was photographed and turned out to be an ordinary minifigure."
  },

  {
    id: "nute-gunray",
    name: "Nute Gunray",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Viceroy",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Nute Gunray, Viceroy of the Trade Federation.",
    provenance:
      "A tall grey moulded headdress worked with raised ovals and swept out to " +
      "points at both sides, over a pale grey face - a heavy frown, a wide " +
      "flat mouth and orange eyes with dark centres. A dark red tunic printed " +
      "with an orange-edged panel and a silver device at the chest; orange " +
      "arms, grey hands, dark red legs.",
    tags: ["villain", "star-wars", "branded", "neimoidian", "viceroy", "trade-federation", "headdress"],
    images: ["images/nute-gunray-01.jpg"],
    acquired: "",
    notes: "The first villain in this collection whose power is commercial. Everybody else on that side holds a throne, an army, a doctrine or a gun; this one holds a trade route. He sits oddly beside the five financiers on the bad side, none of whom is said to fund anything in particular - a viceroy of a trade federation is exactly the thing they would all be working for, and nothing is written between them."
  },

  {
    id: "the-first-order-snowtrooper",
    name: "The First Order Snowtrooper",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Soldier",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A snowtrooper of the First Order.",
    provenance:
      "A smooth white helmet with a narrow black visor slit and two grey studs " +
      "at the jaw, no cowl. White armour printed with a fine black lining - " +
      "seams, a chest box, a belt and thigh pouches - carried down onto white " +
      "legs. One white arm and one white with a grey hand.",
    tags: ["villain", "star-wars", "branded", "snowtrooper", "first-order", "soldier", "white"],
    images: ["images/the-first-order-snowtrooper-01.jpg"],
    acquired: "",
    notes: "There are already three snowtroopers here and all three are good - ridged helmets with a hanging cowl and a dark eye slit, the older pattern. This one is the later army: smooth helmet, no cowl, black lining instead of blocks. Same job, different generation, opposite deck. Not put with them, since the whole point of him is that he is the other one."
  },

  {
    id: "the-third-blue-mandalorian",
    name: "The Third Blue Mandalorian",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Mandalorian",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "The third of them.",
    provenance:
      "The same blue and grey armour again - grey-domed helmet, blue face " +
      "plate, black T-visor, the grey chest plate and segmented belt. What " +
      "separates him is below the waist: a white band across the hips and a " +
      "white stripe running down between the legs, where the other two have " +
      "plain blue.",
    tags: ["villain", "mandalorian", "star-wars", "branded", "beskar", "t-visor", "blue", "white-stripe"],
    images: ["images/the-third-blue-mandalorian-01.jpg"],
    acquired: "",
    notes: "Three of them now, separate men in one set of armour, told apart by a helmet, a neck pack and a white stripe. They are not put in a group: you have called them separate rather than a unit, and a group here shows everybody to everybody. Say they are a squad and they become one - which would give the bad side its first Star Wars unit, against the Clone Army, the 501st, the Commandos and the rest on the other deck."
  },



  {
    id: "the-blue-imperial-trooper",
    name: "The Blue Imperial Trooper",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Soldier",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "An Imperial trooper in blue armour.",
    provenance:
      "The stormtrooper helmet mould, moulded in dark blue and printed with " +
      "black lining and a small red triangle at the brow. A blue torso carrying " +
      "the Imperial cog in a white circle at the chest, black seam lines over " +
      "the plating and a silver-blocked belt; blue arms, white hands, blue legs " +
      "lined to match.",
    tags: ["villain", "star-wars", "branded", "imperial", "stormtrooper", "blue", "cog"],
    images: ["images/the-blue-imperial-trooper-01.jpg"],
    acquired: "",
    notes: "Named for what he plainly is rather than guessed at: a stormtrooper mould in blue with the Imperial crest. He is most likely one of the Imperial special forces figures, and if you know which, the card takes the proper name. Seven stormtroopers and troopers of that army are already catalogued here and every one is good - the Stormtroopers, their Commander, the Stormtrooper Pilot, the TIE Pilots, the Scout Trooper, the Snowtroopers and the Shadow Troopers. He and the First Order Snowtrooper are the first two against this world."
  },

  {
    id: "harley-quinn",
    name: "Harley Quinn",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "DC",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Harley Quinn.",
    provenance:
      "Two pigtails, one black and one red, held in clasps of the opposite " +
      "colour, over a white face with a wide grin, pink lips and a black " +
      "diamond at one eye. A red and black corset printed across the torso with " +
      "white lacing and a red diamond at the waist; one red arm and one black, " +
      "white hands, and legs split the same way - red over black, black over " +
      "red, with diamonds at the thigh and boots below.",
    tags: ["villain", "dc", "branded", "harley-quinn", "pigtails", "diamonds", "woman"],
    images: ["images/harley-quinn-01.jpg"],
    acquired: "",
    notes: "First DC villain here. Bruce Wayne, Superman and the Old Flash are the three DC figures before her and all three are good, so this is the same pattern as Star Wars and Toy Story - the bought figures supplied the heroes first and the enemy came later. She is also the fifth woman on the villain side, after the TV Camera Woman, the Pharaoh, the Orc Queen and the Blue Bounty Hunter."
  },

  {
    id: "the-joker",
    name: "The Joker",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "DC",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "The Joker.",
    provenance:
      "Swept lime-green hair over a white face - black brows drawn up, a red " +
      "grin stretched well past where a mouth should end, and fine lines at the " +
      "eyes. A white suit printed with black lapels and pocket seams over a " +
      "purple shirt and a white tie; white arms, white hands, white legs.",
    tags: ["villain", "dc", "branded", "joker", "white-suit", "green-hair", "grin"],
    images: ["images/the-joker-01.jpg"],
    acquired: "",
    notes: "Second DC villain, arriving with the first. Bruce Wayne is filed good and his card holds three figures - the man and Batman - so the two halves of that rivalry are now both on the shelf, on opposite decks, with nothing written between them. Say they have met and the connection draws itself across the two sides."
  },

  {
    id: "the-at-st-pilot",
    name: "The AT-ST Pilot",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Pilot",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "An Imperial walker pilot.",
    provenance:
      "A grey helmet with flat flaps hanging at both sides, over a pale face " +
      "printed with wide black goggles and a chin strap. A pale grey tunic with " +
      "fine creasing, a black belt and a silver buckle; grey arms, black hands, " +
      "pale grey legs.",
    tags: ["villain", "star-wars", "branded", "imperial", "pilot", "walker", "goggles"],
    images: ["images/the-at-st-pilot-01.jpg"],
    acquired: "",
    notes: "Third pilot on the bad side, after the Pilot's Apprentice who murdered the Famous Pilot for his job and the Evil Pilot. Thirty-one pilots are catalogued here and twenty-eight of them are good. This is the first one flying for an army rather than for himself."
  },

  {
    id: "grand-moff-tarkin",
    name: "Grand Moff Tarkin",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Governor",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Grand Moff Tarkin.",
    provenance:
      "Swept grey hair over a pale face with a hard mouth and deep lines drawn " +
      "down both cheeks. A grey uniform tunic printed with a high collar, twin " +
      "rank studs at the shoulders, a bar of blue, red and white rank squares " +
      "at the chest and a black belt with a silver buckle; grey arms, pale " +
      "hands, grey legs.",
    tags: ["villain", "star-wars", "branded", "imperial", "governor", "moff", "uniform", "rank-bar"],
    images: ["images/grand-moff-tarkin-01.jpg"],
    acquired: "",
    notes: "The Empire arrives properly with this batch: a governor, a walker pilot, a trooper in blue and a snowtrooper, where before it was seven figures of that army all filed good. He is the one who makes it an occupation rather than a uniform - the second villain here whose power is administrative, after Nute Gunray and his trade route. Neither of them carries anything."
  },



  {
    id: "the-hooded-skeleton",
    name: "The Hooded Skeleton",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A hooded man wearing his own bones on the outside.",
    provenance:
      "A black cloth hood drawn up over a yellow face - one brow raised, the " +
      "mouth pulled into a smirk - with a black cape falling behind. A black " +
      "torso printed with a white ribcage and a purple sash across the " +
      "stomach, and a small lime-green S at one shoulder. Black arms, yellow " +
      "hands, black legs.",
    tags: ["villain", "hooded", "skeleton", "ribcage", "cape", "smirk", "green-s"],
    images: ["images/the-hooded-skeleton-01.jpg"],
    acquired: "",
    notes: "The one in this batch I could not put a name to. He came in a run of branded villains but I cannot place the character, and the parts read as a mixture rather than one figure out of one box - a hood and cape over a skeleton torso with a lime-green S on it. Filed custom and described from the plastic rather than guessed at; tell me who he is and the card takes the name, the theme and the branded tag."
  },

  {
    id: "dengar",
    name: "Dengar",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Bounty Hunter",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Dengar.",
    provenance:
      "A moulded off-white head wrap covering everything but a narrow band at " +
      "the eyes, wound round the jaw and hanging down the neck. A grey torso " +
      "printed with a brown harness over a dark chest plate with a boxed device " +
      "at the centre; grey arms, white hands, brown legs.",
    tags: ["villain", "star-wars", "branded", "bounty-hunter", "bandaged", "head-wrap"],
    images: ["images/dengar-01.jpg"],
    acquired: "",
    notes: "Thirteenth bounty hunter here and the ninth on the bad side, where only Soldier is a commoner job. He is the second of them out of Star Wars after Boba Fett, and the two of them arrived at the same trade from opposite directions - Boba was good in this collection for years before he crossed, and this one started there."
  },

  {
    id: "the-death-star-droid",
    name: "The Death Star Droid",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Droid",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A black protocol droid, working for the Empire.",
    provenance:
      "The protocol droid mould in black - the same head shape as C-3PO, " +
      "smooth and eyeless except for two lit discs. A black torso printed with " +
      "white wiring at the collar and chest and a band of colour at the waist, " +
      "red and blue and yellow against silver; black arms, black hands, black " +
      "legs printed with white cabling at the thigh.",
    tags: ["villain", "star-wars", "branded", "droid", "protocol", "black", "empire"],
    images: ["images/the-death-star-droid-01.jpg"],
    acquired: "",
    notes: "The first droid in this collection on the bad side. Eight were catalogued before him - C-3PO, R2-D2 and six astromechs, all in a group called The Droids - and every one is good. He and R-3PO arrive together and break that in the same batch. Not put in The Droids: a group here shows everybody to everybody, and these two work for the people the others were running from."
  },

  {
    id: "r-3po",
    name: "R-3PO",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Droid",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "R-3PO. A protocol droid in red, and an informer.",
    provenance:
      "The same protocol droid mould as C-3PO, moulded in deep red throughout - " +
      "head, body, arms and legs, with the black wiring lines printed at the " +
      "collar and a set of concentric rings at the stomach where the gold one " +
      "has his. Nothing else on him is any other colour.",
    tags: ["villain", "star-wars", "branded", "droid", "protocol", "red", "informer"],
    images: ["images/r-3po-01.jpg"],
    acquired: "",
    notes: "The same mould as C-3PO in another colour, and on the other deck. That is a neat thing for a catalogue that sorts by side to have in it: two identical castings, one filed good and one filed bad, and the only difference visible on the shelf is red against gold. Second droid on the bad side, arriving with the first."
  },

  {
    id: "the-royal-guard",
    name: "The Royal Guard",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Guard",
    group: "",
    location: "",
    relations: [
      { to: "emperor-palpatine", label: "Guards him" },
    ],
    rating: 0,
    background:
      "An Imperial Royal Guard.",
    provenance:
      "A moulded red helmet coming to a point at the crown with a silver stud " +
      "on top, the whole face closed behind it but for a black slit at the " +
      "eyes. A red robe over a red torso with no printing anywhere, a long red " +
      "cloth cape, red arms, black hands, red legs. Red from the stud down " +
      "apart from the hands.",
    tags: ["villain", "star-wars", "branded", "imperial", "guard", "red", "cape", "unprinted"],
    images: ["images/the-royal-guard-01.jpg"],
    acquired: "",
    notes: "The first guard in this collection on the bad side. Five were catalogued before him and all five stand in front of somebody good - Heavy and the Prince's Guards and the Guardsman at the Royal Household, the Jedi Palace Guard, and the Ninja Golem who guards the golden sword. This one stands in front of an emperor - and that sentence was written when there was no emperor in this collection. Palpatine has since been catalogued, and the line is drawn. He is also almost entirely unprinted, which on that side puts him with the Shadow King, the Purple Shadow and the Shadow Sorcerer - and they are black where he is red."
  },


  {
    id: "asajj-ventress",
    name: "Asajj Ventress",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Assassin",
    group: "",
    location: "",
    relations: [
      { to: "count-dooku", label: "Her master" }
    ],
    rating: 0,
    background:
      "Asajj Ventress.",
    provenance:
      "A white head, bald to the crown, with thin purple marks scratched back " +
      "over the scalp and down past the mouth. Pale blue eyes ringed in heavy " +
      "black, and a full red mouth, which makes her the most made-up face on " +
      "this side of the collection. A grey and dark blue bodysuit, ribbed at " +
      "the chest, with a white ring buckle at the waist and blue panelling " +
      "running down the legs. Grey arms, white hands, black feet.",
    tags: ["villain", "star-wars", "branded", "sith", "assassin", "woman", "bald", "white"],
    images: ["images/asajj-ventress-01.jpg"],
    acquired: "",
    notes: "Twenty-fifth branded villain. Tenth figure here whose job is assassin, and all ten of them are on this side - nobody good in this collection has ever held that job. She is also the sixth woman on the villain side, after the TV Camera Woman, the Pharaoh, the Orc Queen, the Blue Bounty Hunter and Harley Quinn, against twelve on the good side. She and her master came in together, and that is the real change in this batch: before it, not one branded villain here had a line drawn to another branded villain. Three got drawn at once."
  },

  {
    id: "count-dooku",
    name: "Count Dooku",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Sith Lord",
    group: "",
    location: "",
    relations: [
      { to: "emperor-palpatine", label: "His master" },
      { to: "asajj-ventress", label: "His apprentice" },
      { to: "savage-opress", label: "Trained him, for a time" }
    ],
    rating: 0,
    background:
      "Count Dooku.",
    provenance:
      "Light grey hair swept back off a plain yellow head - not the flesh tone " +
      "the rest of the Star Wars figures here use, the old yellow, which dates " +
      "him to the first years of the licence. The face is a frown with two " +
      "long lines cut down from the nose and creases at the eyes. A black " +
      "tunic with a tan collar band, a fine chain across the chest and a tan " +
      "belt, black legs with grey boots, yellow hands. A brown cloth cape gone " +
      "furred at the edges from age. He is holding a silver piece at one hand.",
    tags: ["villain", "star-wars", "branded", "sith", "cape", "yellow-head", "old"],
    images: ["images/count-dooku-01.jpg"],
    acquired: "",
    notes: "Twenty-sixth branded villain and the seventh Sith here, after Quinn, the Purple Shadow, the Sith Lord, Savage Opress, Darth Nihilus and Darth Vader - three home-made, four bought, so the bought ones have just taken the lead in a category this collection invented for itself first. The yellow head dates him. It is the mould from before the licence went to flesh tones, and the other yellow heads written up here - Luke, Obi-Wan, Padme, young Boba Fett and three of the pilots - are every one of them on the good side. He is the oldest-looking villain on the shelf. He also brings Savage Opress a master: Savage was the first branded villain in this collection and had nothing written to anybody until this batch."
  },

  {
    id: "the-gamorrean-guard",
    name: "The Gamorrean Guard",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Guard",
    group: "",
    location: "",
    relations: [
      { to: "jabba-the-hutt", label: "Guards him" }
    ],
    rating: 0,
    background:
      "A Gamorrean guard, from the crime lord's palace.",
    provenance:
      "A single moulded pale green piece that is head, jaw, ears and shoulders " +
      "all at once - a tusked pig face with small sunk eyes and a snout, " +
      "dropping into a smock with a strap across the chest and a belt. Green " +
      "legs, and reddish brown arms with tan hands, the only part of him that " +
      "is a normal minifigure. Nothing on him is printed; all of it is moulded.",
    tags: ["villain", "star-wars", "branded", "guard", "creature", "green", "moulded", "unprinted"],
    images: ["images/the-gamorrean-guard-01.jpg"],
    acquired: "",
    notes: "Twenty-seventh branded villain, and the second guard on the villain side after the Imperial Royal Guard. That is two against five on the good side, where a guard stands in front of a prince or a temple; both of these stand in front of a tyrant. He matters more for who he is standing in front of. Jabba the Hutt came in with nothing written between him and anyone, noted at the time as odd for a crime lord surrounded by bounty hunters and financiers who would all answer to him. This is the first line drawn to Jabba, and it is his own doorman."
  },

  {
    id: "darth-maul",
    name: "Darth Maul",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Sith",
    group: "",
    location: "",
    relations: [
      { to: "emperor-palpatine", label: "His master" },
      { to: "savage-opress", label: "His brother" }
    ],
    rating: 0,
    background:
      "Darth Maul.",
    provenance:
      "A black hood pulled right forward, and inside it a red face broken up " +
      "by black tattooing across the brow, cheeks and chin, with yellow eyes " +
      "and a small bared mouth. Black robes printed in fine grey lines over a " +
      "black torso, black arms and hands, black legs, and a long black cloth " +
      "cape behind. Apart from the face he is black from the hood down.",
    tags: ["villain", "star-wars", "branded", "sith", "hood", "cape", "tattooed", "black"],
    images: ["images/darth-maul-01.jpg"],
    acquired: "",
    notes: "Twenty-eighth branded villain and the eighth Sith. He is here for his brother. Savage Opress was the first figure ever filed on the villain side with a name already printed on the box, the card that broke a run of a hundred and twenty-six bought figures all landing good, and he sat there with an empty relations list for twenty-three villains after him. In one batch he has picked up a brother and a master. He is also the second card in this batch to hand Savage something. Between the two of them, the first branded villain in this collection went from an empty relations list to a brother and a master in a single batch."
  },

  {
    id: "loki",
    name: "Loki",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Marvel",
    rank: "Cosmic Deity",
    role: "",
    group: "",
    location: "",
    relations: [
      { to: "the-chitauri", label: "Leads them" }
    ],
    rating: 0,
    background:
      "Loki. A Norse god, and the one who brought the invasion.",
    provenance:
      "A gold helmet with two long curved horns sweeping up and back off the " +
      "brow, cheek plates coming down either side of the face. Under it a pale " +
      "face with heavy black brows and a set mouth. Grey armour printed in fine " +
      "olive and green panels across the chest and down the legs, a green cloth " +
      "cape to the ankles, grey arms and pale hands. The helmet is taller than " +
      "the head it sits on.",
    tags: ["villain", "marvel", "branded", "god", "deity", "norse", "mythology", "horns", "cape", "gold"],
    images: ["images/loki-01.jpg"],
    acquired: "",
    notes: "Twenty-ninth branded villain, and the first villain out of Marvel. Marvel had six figures here before him - Tony Stark, Captain America, Deadpool, Iron Fist, Cowboy Spider-Man and his horse - and every one of them was good, which made it the last big licence on the shelf with no enemy in it at all. He is the sixth Cosmic Deity in this collection and the second on the villain side after Deus Pater, and the third figure here out of real human mythology after Aphrodite and Deus Pater. That is the thing worth stopping on. The rank ladder - the First Man, Cosmic Deity, Demigod, Mortal - was built out of this world's own creation story, and the gods filling it in now are arriving out of Greek myth, Roman myth and Norse myth, through a toy licence."
  },

  {
    id: "the-chitauri",
    name: "The Chitauri",
    variant: "Two figures",
    faction: "bad",
    origin: "branded",
    theme: "Marvel",
    rank: "",
    role: "Soldier",
    group: "",
    location: "",
    relations: [
      { to: "loki", label: "Led by him" }
    ],
    rating: 0,
    background:
      "The Chitauri. The army Loki came through the sky with.",
    provenance:
      "Two of them, and their heads are not the same. Both are moulded in gold " +
      "with a helmet and a face printed straight onto the stud - a pale bone " +
      "mask with sunk eyes and a tusked jaw underneath gold plating. One has " +
      "clean gold over the brow; the other has purple worked through the plates " +
      "and a bright stone set at the forehead, which reads as the senior of the " +
      "two. The bodies match: white and grey armour with gold shoulder work, " +
      "brown strapping and purple piping, grey arms and purple hands.",
    tags: ["villain", "marvel", "branded", "alien", "army", "soldier", "gold", "two-figures"],
    images: ["images/the-chitauri-01.jpg"],
    acquired: "",
    notes: "Thirtieth branded villain, and the fifth alien force on this side that nobody has joined up to any of the others. The catalogue already holds mercenaries nobody has photographed, a militia with a school and one member, five alien soldiers with a medic and a technician, and four alien goons - four doors kept open because nothing in the world said they were the same army. This lot are different in one respect that settles them: they arrived with their commander in the same batch, and he is a god. Every other alien body here is still waiting to be told who it answers to."
  },

  {
    id: "emperor-palpatine",
    name: "Emperor Palpatine",
    variant: "Two figures",
    faction: "bad",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Emperor",
    group: "",
    location: "",
    relations: [
      { to: "darth-vader", label: "His apprentice" },
      { to: "count-dooku", label: "His apprentice" },
      { to: "darth-maul", label: "His apprentice" },
      { to: "the-royal-guard", label: "Guarded by him" }
    ],
    rating: 0,
    background:
      "Emperor Palpatine.",
    provenance:
      "A brown hood pulled forward over a white face cut through with deep " +
      "lines at the brow, cheeks and jaw, the eyes small and yellow. Black " +
      "robes printed in pale grey folds with a sash at the waist, black arms " +
      "and hands, black legs, and a long black cloth cape gone soft and frayed " +
      "at the shoulders. Older wear than most things on the shelf.\n\n" +
      "A second figure is the same man on a different mould: a tan face " +
      "instead of a white one, the lines cut deeper and the eyes wide and " +
      "yellow with the teeth bared, under a hard moulded hood rather than a " +
      "soft one. Black robes printed in silver, a black cape. He is holding " +
      "two lengths of lightning - translucent purple and pale blue, zigzagged, " +
      "one in each hand - which is the only weapon in this collection that is " +
      "not a blade, a gun or a staff.",
    tags: ["villain", "star-wars", "branded", "sith", "emperor", "hood", "cape", "old"],
    images: [
      { src: "images/emperor-palpatine-01.jpg", caption: "The white-faced mould" },
      { src: "images/emperor-palpatine-02.jpg", caption: "The later mould, throwing lightning" }
    ],
    acquired: "",
    notes: "Thirty-first branded villain and the ninth Sith, after Quinn, the Purple Shadow, the Sith Lord, Savage Opress, Darth Nihilus, Darth Vader, Count Dooku and Darth Maul. He is the first emperor in this collection - no figure on either deck has held that job before, and this one arrives holding the leashes of three men already catalogued. Four relations, which is more than any other bought figure here has, villain or otherwise. The payoff is the Imperial Royal Guard. His card was written with the line that he stands in front of an emperor, at a point when there was no emperor in this collection to stand in front of. There is now. Two figures on one card, one batch after the first arrived - the same man on two moulds, the second one caught mid-attack."
  },

  {
    id: "the-tusken-raider",
    name: "The Tusken Raider",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Raider",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A Tusken Raider, off the desert planet.",
    provenance:
      "A tan head wrapped in printed cloth, with two round silver-ringed eye " +
      "pieces and a ribbed breathing mouthpiece below them, orange wrapping at " +
      "the jaw. A tan torso with two crossed bandoliers of orange pouches and a " +
      "grey belt, tan arms and legs, grey hands. Nothing of the face is visible " +
      "and nothing on him is metal armour - it is all cloth, strap and pouch.",
    tags: ["villain", "star-wars", "branded", "desert", "masked", "raider", "tan"],
    images: ["images/the-tusken-raider-01.jpg"],
    acquired: "",
    notes: "Thirty-second branded villain, and the first raider in this collection - nobody on either deck has held that job, which is a gap for a world with this many soldiers, pirates and bandits in it. He is worth reading next to Anakin Skywalker's card, which is two decks over and holds two figures of the same boy in plain pale desert clothes with no weapon. This figure comes off that same desert. Nothing is written between them and nothing should be until it is said out loud, but they are the only two things in this collection standing on the same sand."
  },

  {
    id: "jek-14",
    name: "Jek-14",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Clone Trooper",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Jek-14. A clone the other side built for itself.",
    provenance:
      "A clone helmet in white with dark red blocks over the crown, down the " +
      "brow and along the breathing vents, and the eye slits picked out in pale " +
      "blue rather than the black every other clone here has. A white torso " +
      "with dark red chest plates and a grey belt, white legs with dark red " +
      "knee flashes. One arm is white; the other is translucent blue all the " +
      "way down to a white hand, which is not a colour any trooper in this " +
      "collection has anywhere on him.",
    tags: ["villain", "star-wars", "branded", "clone", "trooper", "helmet", "translucent", "red"],
    images: ["images/jek-14-01.jpg"],
    acquired: "",
    notes: "Thirty-third branded villain, and the second clone on this side. Twenty figures here have some form of clone as their job and eighteen of them are good; the only exception before him was the Clone Traitor, who turned. This one did not turn, because he was never theirs - the other side made him. Those two are not the same kind of story and the catalogue should not file them as if they were. The pale blue eye slits and the one translucent arm are how you tell him from the ranks he was copied off, and the arm is the part I cannot account for: it may be how he was sold or it may be a piece somebody swapped in years ago. Say which and the card gets fixed."
  },

  {
    id: "magneto",
    name: "Magneto",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Marvel",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Magneto.",
    provenance:
      "A red and purple helmet moulded to the skull with a raised fin at the " +
      "crown and wide flared cheek pieces, leaving a narrow window at the face " +
      "- grey brows drawn down hard and teeth bared. A red torso printed with " +
      "muscle lines under a purple yoke with three round studs at the collar. " +
      "Red arms, purple hands, a purple belt, red legs, and a long dark purple " +
      "cloth cape. He is red and purple and nothing else.",
    tags: ["villain", "marvel", "branded", "helmet", "cape", "red", "purple"],
    images: ["images/magneto-01.jpg"],
    acquired: "",
    notes: "Thirty-fourth branded villain and the third out of Marvel. Two batches ago Marvel was the most one-sided licence on this shelf: six figures here, every one of them good, no enemy at all. It now has Loki, the Chitauri, this man and Ultron on the other deck, which is four against six in the space of two batches. The helmet is the whole design. It comes down over the ears and in at the cheeks and leaves a slot for a face, which makes it one of the few helmets here that is clearly built to keep something out rather than to stop a blow."
  },

  {
    id: "the-teal-astromech",
    name: "The Teal Astromech",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Droid",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "An astromech droid, in teal.",
    provenance:
      "A dome and body moulded in dark teal, which is not a colour anything " +
      "else in this collection is. The dome carries three silver-ringed lenses " +
      "in a row and two pale bands around the crown; the body is printed with a " +
      "silver panel, vents and two small readouts down the front. Two legs and " +
      "no arms, like every astromech here.",
    tags: ["villain", "star-wars", "branded", "droid", "astromech", "teal", "armless"],
    images: ["images/the-teal-astromech-01.jpg"],
    acquired: "",
    notes: "Thirty-fifth branded villain, and the eighth astromech in this collection. The other seven - R2-D2, the Blue, the Cone-Headed, the Brown, the Red-Domed, the Horned and the Junk Astromech - are all on the good side, so this is the first one ever filed as an enemy. Six of those seven carry descriptive names because nothing named them, and this one joins them: I do not know which droid he is. If he has a designation, say it and the card gets his real name. He is here as an enemy because he arrived in a run of villains and nothing said otherwise, which is the only reason - an astromech is a tool and tools do not pick sides on their own."
  },

  {
    id: "ultron",
    name: "Ultron",
    variant: "Three figures",
    faction: "bad",
    origin: "branded",
    theme: "Marvel",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Ultron. Three of him.",
    provenance:
      "A black head moulded with a plated skull, two round blue eyes and a wide " +
      "blue grille across the jaw that reads as a lit mouth. A silver torso " +
      "printed in fine white and blue circuitry over black, the same work " +
      "running down silver legs, with black arms and grey hands. Two of them, " +
      "and the print is the same on all three of them down to the last line - " +
      "the head, the chest plating, the blue lights, the banding at the hips, " +
      "the silver feet. Nothing distinguishes one from another.",
    tags: ["villain", "marvel", "branded", "robot", "machine", "android", "silver", "two-figures"],
    images: [
      { src: "images/ultron-01.jpg", caption: "One" },
      { src: "images/ultron-02.jpg", caption: "The second" },
      { src: "images/ultron-03.jpg", caption: "The third" }
    ],
    acquired: "",
    notes: "Thirty-sixth branded villain and the fourth out of Marvel. He joins a villain side that has been filling with machines for a long time - the Missile, the White and Armoured Killer Bots, the Robotic Samurai, the Television, the Successful Replica, the Robot Builder - and he is the first of them that was bought rather than built here. The card that matters is The Maker. That figure was catalogued as a cross between Tony Stark and Ultron, the man who builds the machines and the machine that came out of it, at a point when neither half of that sentence existed in this collection as a person. Both halves are now here, on opposite decks: Tony Stark filed good, Ultron filed bad, and The Maker in between with nothing written to either of them. Three figures on one card now, and they are identical to each other, which is the one villain here where duplication is the character rather than an accident of the shelf. A fourth figure has since arrived wearing the same body from the neck down with a different head on it, catalogued as the Cyborg - so either somebody borrowed the torso off a shelf, or the thing Ultron is made of is a chassis that gets used more than once."
  },

  {
    id: "perfect-cell",
    name: "Perfect Cell",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Dragon Ball",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [
      { to: "goku", label: "His enemy" }
    ],
    rating: 0,
    background:
      "Cell, in his perfect form.",
    provenance:
      "A green head plate moulded into two long swept horns, spotted black, " +
      "with yellow tabs at the ears and a white face under it - purple eye " +
      "markings and a small closed smile. A green torso and legs printed all " +
      "over in black spotting and purple panelling, yellow at the feet, with a " +
      "separate black chest and shoulder armour piece clipped over the top and " +
      "two black wings behind. White hands. More separate moulded pieces than " +
      "almost anything else here.",
    tags: ["villain", "dragon-ball", "branded", "third-party", "green", "wings", "horns"],
    images: ["images/perfect-cell-01.jpg"],
    acquired: "",
    notes: "Thirty-seventh branded villain, and the first villain out of Dragon Ball. That theme had exactly one figure in it - Goku, gone Super Saiyan - and now it has the man Goku fights, which makes this the second theme in two batches to go from all-good to having an enemy in it. Goku's card carries an open question and this one doubles it. He is a branded character on a piece Lego never made, and this world already has a word for that sort of thing: the Knock-offs, who came from other makers and went to war. If Goku belongs with them, so does this one, and the ruling now moves two figures rather than one."
  },

  {
    id: "gollum",
    name: "Gollum",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Lord of the Rings",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Gollum.",
    provenance:
      "One moulded piece in pale tan, crouched forward on all fours with the " +
      "arms and legs bent under him - not a minifigure body at all. A thin " +
      "drawn face with heavy brow lines, a few strands of hair scratched over " +
      "the crown, wide pale blue eyes ringed in grey and a mouth full of small " +
      "pointed teeth. No printing below the neck and no clothes on him.",
    tags: ["villain", "lord-of-the-rings", "branded", "creature", "crawling", "non-minifigure", "tan"],
    images: ["images/gollum-01.jpg"],
    acquired: "",
    notes: "Thirty-eighth branded villain, and he opens a nineteenth theme: Lord of the Rings has never had a figure in this collection until now, and the first one through the door is on the villain side. Every other licence here arrived good first. He is also the sixth figure in the catalogue that is not minifigure-shaped, after the Kaminoan, the Martian Leader, Jabba, the Wampa and Lotso - the Alien Professor was on that list until he was photographed properly - and he is in Rotta the Hutt's territory - no torso and no legs in the standard build, the whole body one piece. Whether he is an enemy at all is the same question the Pharaoh and Deus Pater are carrying. He is filed here because he arrived in a run of villains, and of the six things here that are not minifigure-shaped, five are now on this side - the Kaminoan is the only good one."
  },

  {
    id: "the-shadow-arf-trooper",
    name: "The Shadow ARF Trooper",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Clone Trooper",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A clone scout trooper, in black.",
    provenance:
      "The recon helmet - a wide brim over a broad silver visor, with a ribbed " +
      "breathing piece down the front of the face and a rounded pack at each " +
      "ear - moulded in black instead of white. A black torso with the trooper " +
      "chest plates printed in pale grey rather than picked out in colour, " +
      "black arms, grey hands, black legs with grey boots. He is carrying a " +
      "long black blaster rifle.",
    tags: ["villain", "star-wars", "branded", "clone", "trooper", "scout", "helmet", "black"],
    images: ["images/the-shadow-arf-trooper-01.jpg"],
    acquired: "",
    notes: "Thirty-ninth branded villain and the third clone on this side, after the Clone Traitor, who turned, and Jek-14, who was built by the other side. This one is neither - he is a standard recon trooper issued in black, which is a unit rather than a story. The collection already holds the Shadow Troopers on the good side: three stormtroopers moulded in black instead of white, catalogued as the exact photographic negative of the standard figure and noted as the only figures here whose whole idea is being hard to see. This is the same idea applied to a clone instead of a stormtrooper, and it has landed on the opposite deck. Nothing is written between them and nothing should be until it is said, but if the black kit means one outfit rather than two coincidences, say so and they go in a group together."
  },

  {
    id: "the-marked-soldiers",
    name: "The Marked Soldiers",
    variant: "Three of them",
    faction: "good",
    origin: "custom",
    theme: "Star Wars",
    rank: "",
    role: "Soldier",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Three soldiers of the Damaged, or of the Discarded - you gave the two " +
      "names together with a slash between them, so the catalogue is not " +
      "picking one on its own.\n\n" +
      "Whichever they belong to, they are the first fighting men either of " +
      "those peoples has put on a card.",
    provenance:
      "Three clone bodies, none of them printed where it counts - every " +
      "marking on all three was put on by hand.\n\n" +
      "The first wears a white recon helmet with the visor up and a real face " +
      "showing through it, eyebrows and all, the whole dome scribbled over in " +
      "black and grey. Grey arms, and a torso worked so hard in black and " +
      "purple that the print underneath is gone. Purple smears on both thighs.\n\n" +
      "The second is Phase 1 armour: the crown of the helmet scorched brown " +
      "and black over the white, a black chevron drawn down the face, and one " +
      "long purple stroke laid diagonally across the chest. Black arms. Both " +
      "legs blotched dark from hip to boot.\n\n" +
      "The third has the helmet coloured in blue and black almost to the " +
      "edges, a yellow neck showing beneath it, a torso scrawled over in black " +
      "and the legs darkened right down with a band of teal at each knee.",
    tags: ["damaged", "discarded", "soldier", "clone", "hand-marked", "custom", "refugee", "star-wars"],
    images: [
      { src: "images/the-marked-soldiers-01.jpg", caption: "The one with his face showing" },
      { src: "images/the-marked-soldiers-02.jpg", caption: "The one with the purple stroke" },
      { src: "images/the-marked-soldiers-03.jpg", caption: "The one in blue and black" }
    ],
    acquired: "",
    notes: "These three land on a thread that has been running quietly for a long time. Three clone figures here already have their markings put on by hand rather than printed - the Clone Captain, drawn over in purple marker, one of the Discarded serving in the clone army; the Painted Clone Commander, done in proper brushwork, who came from somebody else and was given away; and the Discarded Commander, coloured in orange, another of the Discarded. Add these three and there are six hand-marked clone figures in this collection, and every one that has a story attached came out of somebody else's world. The hand on the plastic is turning out to be the signature of these people.\n\nTwo rulings this card is waiting on. Which group - you wrote Damaged and Discarded with a slash, and they are two different peoples here: the Discarded were made as throwaways, the Damaged were destroyed and abused. The group field is deliberately empty until you say, because group membership in this catalogue has never been guessed. And whether these are three men or one unit: they are on one card because you described them together, but they are three visibly different figures and the other three hand-marked clones each got a card of their own. Say the word and they split.\n\nOne thing worth flagging either way. The Damaged already have a Combat Instructor - a man whose whole role is teaching people to fight, catalogued with nobody to teach. If these three are his, that card stops being a man with a job and no work."
  },

  {
    id: "doc-ock",
    name: "Doc Ock",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Marvel",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Doctor Octopus, built rather than bought.",
    provenance:
      "A dark grey helmet with a ribbed hose running round the jaw and a short " +
      "nozzle standing out from the chest, red round goggles over a pale face " +
      "with the teeth bared. A black torso printed with silver plating and " +
      "magenta panels at the ribs. Black arms, pale hands, plain brown legs " +
      "with nothing on them. No moulded arms and no tentacles anywhere - the " +
      "character is assembled out of parts that were never his.",
    tags: ["villain", "marvel", "custom", "doctor", "cyborg", "goggles", "built"],
    images: ["images/doc-ock-01.jpg"],
    acquired: "",
    notes: "A custom, not a bought figure, which makes him unusual twice over. Every other custom filed against somebody else's licence here is on the good side - Finn, the Hogwarts Professor, the Clone Captain, the Painted Clone Commander, the Discarded Commander, the Gungan Jedi, and the Marked Soldiers who came in beside him. He is the first one built here, out of a licence, and filed as an enemy. He is also the first custom Marvel figure in the collection, against ten bought ones.\n\nCowboy Spider-Man is two decks over. Nothing is written between them and nothing is going in without you saying so - the same call The Maker got, whose card describes him as a cross between Tony Stark and Ultron and is still linked to neither. If these two have met in this world, say so."
  },

  {
    id: "the-brainwashed-assassin",
    name: "The Brainwashed Assassin",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Assassin",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A cyborg assassin who was brainwashed into it. The work is his; the " +
      "decision to do it was not.",
    provenance:
      "A plain grey helmet with a dark visor, and behind it a yellow face with " +
      "a grey breathing plate over the mouth and one eye ringed in orange - the " +
      "other is uncovered. A black and silver torso printed with cabling and " +
      "red lines running loose across the chest, one arm grey and one black. " +
      "Deep red legs strapped over with pale bindings crossed at the thigh.",
    tags: ["villain", "assassin", "cyborg", "brainwashed", "custom", "helmet", "masked"],
    images: ["images/the-brainwashed-assassin-01.jpg"],
    acquired: "",
    notes: "Eleventh figure here whose job is assassin, and all eleven are on the villain side - no one good in this collection has ever held that job. He is the only one of the eleven who did not choose it.\n\nThat lands on the Evil Doctor. His card says, in his own words, that what came out of his work with the Butcher is mind control - a way of taking over a body - and it already carries a note about the Hijacked, the robot whose body villains took while leaving him his mind, so that he watched himself attack people and could not stop. His card observed that two men here have that exact stated work and no line is written between them and him. Now there is a second subject, and a killer this time. No line is written here either, because you have not said who did it. If it was those two, say so and three cards resolve at once.\n\nHe is also a cyborg, and there is a Bionics Team on that side with a leader in it. Whether he is theirs is not written anywhere and has not been guessed."
  },

  {
    id: "the-short-orc",
    name: "The Short Orc",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "An orc. Short.",
    provenance:
      "A black helmet moulded with a long mane falling past the shoulders and " +
      "a raised crest over the brow, silvered along the ridges. Under it a " +
      "green face with red eyes and two tusks pushing up out of the lower jaw. " +
      "A brown torso printed with a gold medallion at one shoulder, silver " +
      "chain across the chest and a fur collar below, green arms and hands, " +
      "brown legs.",
    tags: ["villain", "orc", "tusks", "green", "helmet", "chain", "custom"],
    images: ["images/the-short-orc-01.jpg"],
    acquired: "",
    notes: "The Orc Queen has subjects. Her card was written with the line that orcs were new - six hundred and ten figures catalogued and not one orc until her - and she has stood there since as a queen of nobody. Two of them have now arrived in the same batch. Nothing is written between them and her, and no group has been made, because a species is not an affiliation and this catalogue has never guessed at membership. But she rules orcs, she says so on her own card, and there are orcs now. Say the word and the three of them go in a group together."
  },

  {
    id: "the-warrior-orc",
    name: "The Warrior Orc",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Warrior",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "An orc warrior.",
    provenance:
      "The same black maned helmet as the short one, silvered along the ridges " +
      "with a stud set at the brow, and the same green face - red eyes, two " +
      "tusks, a snarl. Over the torso a separate moulded vest, black speckled " +
      "through with silver, cut open down the front and hanging past the waist. " +
      "Green arms, brown hands, brown legs. No printing visible anywhere on him: " +
      "the armour covers the lot.",
    tags: ["villain", "orc", "tusks", "green", "helmet", "armour", "warrior", "custom"],
    images: ["images/the-warrior-orc-01.jpg"],
    acquired: "",
    notes: "The second orc to arrive in the same batch, and the one wearing armour. He is a warrior and the other is not, which is the first thing this world has said about how orcs are organised beyond the fact that they have a queen. The vest is a separate moulded piece clipped over the torso, and it covers the print completely: there is nothing on him you can read except the armour itself."
  },

  {
    id: "the-grey-alien-soldier",
    name: "The Grey Alien Soldier",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Soldier",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "An alien soldier.",
    provenance:
      "The classic grey alien head - moulded bald and tapered, two enormous " +
      "black almond eyes with a white glint in each, no nose, and a small flat " +
      "mouth drawn straight across. A dark grey torso printed with plate " +
      "armour, a yellow triangle divided into three at the chest and yellow " +
      "flashes at the ribs, over a high grey collar. Black arms, grey hands, " +
      "black legs.",
    tags: ["villain", "alien", "soldier", "grey", "big-eyes", "armour", "custom"],
    images: ["images/the-grey-alien-soldier-01.jpg"],
    acquired: "",
    notes: "Named The Grey Alien Soldier rather than The Alien Soldier on purpose: there is already a group here called The Alien Soldiers, five of them, and this figure is not one of them. Those five are humanoid faces with hair and teeth - red, lime, snarling - and this is the flat-eyed grey kind, a different species on sight. He is filed on his own for that reason.\n\nWhich makes him a fifth alien body on that side with nothing written between him and the other four. The catalogue already holds mercenaries nobody has photographed, a militia with a school, five alien soldiers and four alien goons, all kept apart because nothing in the world joined them up. He is not being joined up either. If he is one of the five, or one of the goons, say so and he moves."
  },

  {
    id: "darth-revan",
    name: "Darth Revan",
    variant: "And his hologram",
    faction: "bad",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Sith",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Darth Revan, and a hologram of him.",
    provenance:
      "A black hood pulled forward over a moulded mask - dark grey with a red " +
      "T of markings across the brow and down the nose, no face behind it. " +
      "Black robes printed in fine silver over the chest, a wide belt, and a " +
      "long grey tabard down the front with a red panel running the length of " +
      "it. A black cloth cape. He is holding two blades at once, one purple and " +
      "one red.\n\n" +
      "The second figure is him again in transparent blue - hood, mask, robes, " +
      "arms, hands and legs, the whole figure moulded in one clear colour with " +
      "the printing laid over it in white. Even the lightsaber is a clear blue " +
      "hilt with a clear blade. It is a hologram, not a person.",
    tags: ["villain", "star-wars", "branded", "sith", "mask", "hood", "cape", "hologram", "translucent", "two-figures"],
    images: [
      { src: "images/darth-revan-01.jpg", caption: "The man, with both blades" },
      { src: "images/darth-revan-02.jpg", caption: "The hologram" }
    ],
    acquired: "",
    notes: "Fortieth branded villain and the tenth Sith, after Quinn, the Purple Shadow, the Sith Lord, Savage Opress, Darth Nihilus, Darth Vader, Count Dooku, Darth Maul and Palpatine.\n\nTwo figures in this collection carry two lit blades at once, and they are on opposite decks: this one, with a purple blade in one hand and a red one in the other, and Ahsoka Tano, catalogued a long way back with two lightsabers and nothing written between her and anybody on this side. The hologram is the stranger half of the card. Every other figure on these two decks is somebody; this one is a picture of somebody, standing on the same shelf.\n\nThat also corrects Darth Vader's card, which claimed he was the only figure here you can see the shelf through. He is not, as of this batch, and his card now says so.\n\nOne flag. Revan is the one name on this deck famous for having been on both sides of it. Nothing in this world has said which way round he is here, and he is filed as an enemy because you handed him in as Darth Revan. If the hologram is meant to be the other half of that - the man before or after - say so, and the card can carry the split the way Boba Fett does."
  },

  {
    id: "the-sting-rays",
    name: "The Sting Rays",
    variant: "Six of them",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Soldier",
    group: "The Sting Rays",
    location: "",
    relations: [],
    rating: 0,
    background:
      "The Sting Rays. Rank and file.",
    provenance:
      "A hard grey helmet moulded in one piece over the whole head, closed at " +
      "the jaw, with a black split running back over the crown and two eyes " +
      "printed into the front - yellow, with a red pupil in each, and a black " +
      "bar between them. A breathing piece sits under the chin. Grey arms and " +
      "red hands, a black waist, red legs.\n\n" +
      "The torsos are not all the same. Most carry an insect worked across the " +
      "chest in teal and tan - a body, a pair of wings and an orange disc at " +
      "the throat - but the six in the group shot are printed at least three " +
      "different ways, some teal, some tan, one almost entirely dark. Six of " +
      "them are photographed together and one is shown on his own in front.",
    tags: ["villain", "soldier", "insect", "helmet", "unit", "custom", "six-figures"],
    images: [
      { src: "images/the-sting-rays-01.jpg", caption: "One of them" },
      { src: "images/the-sting-rays-02.jpg", caption: "Six of them" }
    ],
    acquired: "",
    notes: "One entry, solo shot first and the group behind it, the way the Shadow Troopers are done.\n\nThey arrive as a going concern, which is rare here. Most units in this collection turned up as a name with nobody in it - the alien mercenaries nobody had photographed, the militia with a school and one member, the Insect Captain's evil insects. This one arrives the other way round: six soldiers, a squad leader and a head of state, all in one batch, with the ranks already told apart by the colour of the legs. Red for the ranks, brown for the leader, green for the chancellor.\n\nOne thing is still open. The Insect Captain is sitting one deck over with a card that says he is in charge of the evil insects, that the insects have not been photographed, and that no group would be made until there was somebody to put in it. These have an insect printed across the chest. If they are his, say so, and a card that has been empty since it was written finally has an army under it."
  },

  {
    id: "the-sting-ray-squad-leader",
    name: "The Sting Ray Squad Leader",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Squad Leader",
    group: "The Sting Rays",
    location: "",
    relations: [],
    rating: 0,
    background:
      "The one who leads the squad.",
    provenance:
      "The same closed grey helmet as the ranks, the same yellow eyes with red " +
      "pupils, the same split down the crown. A grey torso printed with an " +
      "orange disc at the throat, teal panels spread either side of it and two " +
      "tan claw shapes below. Grey arms, red hands, a black waist. What marks " +
      "him out is below that: brown legs where every soldier in the squad wears " +
      "red.",
    tags: ["villain", "leader", "insect", "helmet", "custom", "brown-legs"],
    images: ["images/the-sting-ray-squad-leader-01.jpg"],
    acquired: "",
    notes: "Rank in this unit is worn on the legs and nowhere else. The helmet is identical to the ranks, the arms are identical, the torso print is a variation on the same insect - and the legs are brown instead of red. That is the whole insignia. It is the cleanest rank system in this collection: every other officer here is told apart by a cape, a pauldron, a helmet crest or a colour laid over the armour, and this one is told apart by his trousers."
  },

  {
    id: "the-supreme-chancellor",
    name: "The Supreme Chancellor",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Supreme Chancellor",
    group: "The Sting Rays",
    location: "",
    relations: [],
    rating: 0,
    background:
      "The Supreme Chancellor of the Sting Rays.",
    provenance:
      "The only one of the eight with his face showing. No closed helmet - a " +
      "brown hairpiece with a pair of black goggles pushed up on it, and under " +
      "that a yellow face with red eyes ringed in blue, a black moustache and " +
      "scarring drawn back from both eyes. The same grey torso as the squad " +
      "leader, orange disc at the throat, teal panels and tan claws. Grey arms, " +
      "white hands, and green legs.",
    tags: ["villain", "ruler", "chancellor", "insect", "goggles", "custom", "green-legs"],
    images: ["images/the-supreme-chancellor-01.jpg"],
    acquired: "",
    notes: "Supreme Chancellor is a job nobody in this world has held. Twelve figures here carry a ruling title and they are all crowns and conquest - six kings, two queens, a dictator, a governor, an emperor and an elected king. This is the first one that sounds like an office rather than a throne, and it is on the villain side.\n\nHe is also the only Sting Ray with a face. Every soldier and the squad leader are sealed into a moulded helmet with printed eyes; the man in charge of them took his off, and what is underneath is a yellow face with red eyes and scars drawn back from both of them. Green legs where the ranks wear red and the leader wears brown, so the whole chain of command in this unit is legible from the knees down.\n\nThe Outcast Prince is the only other figure here whose title says he was put there rather than born there - he is an Elected King, on the good side. Nothing is written between them."
  },

  {
    id: "the-evil-bug",
    name: "The Evil Bug",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "The Evil Insects",
    location: "",
    relations: [],
    rating: 0,
    background:
      "An evil bug.",
    provenance:
      "A moulded olive head with a star-shaped plate across the face, two " +
      "black pitted compound eyes bulging either side of it, and a long " +
      "tapered snout hanging down over the chest. Two transparent yellow-green " +
      "wings stand out behind the shoulders. Olive arms with dark red hands, " +
      "one pale and one dark. The torso and legs are printed all over as a " +
      "body rather than as clothing - a ribbed red abdomen, pale plating " +
      "spread either side of it, red markings down the thighs. He is not " +
      "wearing anything. That is him.",
    tags: ["villain", "insect", "bug", "wings", "moulded", "custom", "olive"],
    images: ["images/the-evil-bug-01.jpg"],
    acquired: "",
    notes: "The Insect Captain has an insect. His card was written with the line that he is captain of the evil insects and in charge of them, that the insects he commands had never been photographed, and - in as many words - that no group would be made until there was somebody to put in it. There is somebody now, so the group exists: The Evil Insects, two of them, the captain and the bug.\n\nThat is a group made on the card's own instruction rather than on a guess, which is worth saying out loud because the Sting Rays arrived in the batch before this one with an insect printed across the chest and were deliberately not put in it. An emblem is a badge; this is an animal. If the Sting Rays belong in here too, say so and they join.\n\nHe is also the second creature on the villain side that is simply an animal rather than a person, after the Wampa. Nobody sent the wampa either."
  },

  {
    id: "the-martians",
    name: "The Martians",
    variant: "Three of them",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Soldier",
    group: "The Martians",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Three Martians. The army their leader took into Lego City.",
    provenance:
      "Three of them, and the heads are not all the same mould. Two are " +
      "photographed together: bright green heads with a heavy underslung jaw " +
      "and four white fangs standing up out of it, four black eyes set in two " +
      "pairs, and a small ridged crest at the crown. The third stands alone " +
      "and is sharper - the whole head drawn to a point, the jaw flat and the " +
      "fangs smaller, two long black eyes swept back along the sides.\n\n" +
      "The bodies match across all three: magenta arms going down to green " +
      "hands, and black torsos and legs printed with pink vent bars, silver " +
      "plating and a control panel at the waist. One of the three has more " +
      "silver worked into the chest than the others.",
    tags: ["villain", "martian", "alien", "invader", "fangs", "custom", "three-figures"],
    images: [
      { src: "images/the-martians-01.jpg", caption: "Two of them" },
      { src: "images/the-martians-02.jpg", caption: "The third, a different head" }
    ],
    acquired: "",
    notes: "The Martian Leader has his army. His card says he led an army of Martian aliens in an invasion of Lego City, and that army has never been on the shelf until now. They are in a group with him on the strength of his own card and your own word for them - Martians, and the man who leads Martians - and that is the reasoning, so it can be undone in one line if it is wrong.\n\nHis card also carries the thing this batch does not resolve. He is the only villain here who attacked Lego City itself rather than the wider world, which puts him against Lego City Law - eleven officers, the Commissioner, the Watch Commander and the Nightwatch Captain - and not one line has ever been written between him and any of them. The invasion now has troops and still has nobody on the other side of it.\n\nHe is also a Bionicle build and taller than everything else here, so the leader and his men do not look like the same species at all. If the army is meant to be a different thing from him, say so and the group comes apart."
  },

  {
    id: "the-shark-warrior",
    name: "The Shark Warrior",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Warrior",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "An evil shark.",
    provenance:
      "A moulded shark head worn over the whole skull - dark grey across the " +
      "top, pale underneath, a small eye printed at each side and a mouth of " +
      "white teeth standing open across the front with the figure's own face " +
      "nowhere in sight. A white torso and white legs printed with dark blue " +
      "markings that curl like tattooing, the paint worn away in patches. One " +
      "grey arm and one dark grey, grey hands.",
    tags: ["villain", "shark", "sea", "creature", "moulded", "custom", "warrior"],
    images: ["images/the-shark-warrior-01.jpg"],
    acquired: "",
    notes: "The sea has had one side of it for a very long time. Twelve people are catalogued in the Atlantis Dive Team: ten under the Young Leader, and two who turned - the Atlantis Traitor and the Former Dive Captain, who used to command them. There is a second, smaller dive team on top of that, three more. That is fifteen people in the water and, until now, nothing in the water with them.\n\nHe is not put in any group and no line is drawn to the dive team, because being somebody's enemy is not the same as knowing them, and nothing has been said about what he does or who he does it to. But he is the first thing in this collection that the divers would actually meet down there.\n\nThird creature on the villain side that is an animal rather than a person, after the Wampa and the Evil Bug in this same batch."
  },

  {
    id: "the-blue-eyed-alien",
    name: "The Blue-Eyed Alien",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "An alien. Nothing else said about him yet.",
    provenance:
      "A moulded dark green head with a ridged crown, two pointed ears swept " +
      "back and three small horns standing up off the top. The face is picked " +
      "out in pale blue - two round blue eyes with black pupils, a blue muzzle " +
      "and a blue sheen over the brow - against green everywhere else. A green " +
      "torso, arms, hands and legs, with a ribcage printed faintly across the " +
      "chest in darker green: bones, drawn on the outside.",
    tags: ["villain", "alien", "green", "horns", "moulded", "ribcage", "custom"],
    images: ["images/the-blue-eyed-alien-01.jpg"],
    acquired: "",
    notes: "Named for his face because nothing else about him has been said yet - green is not enough to go on when this collection already holds an alien farmer, a four-armed alien, a bionic alien, an alien racer, a lead mercenary, a militia commander, five alien soldiers and four goons. The blue is the part nobody else has.\n\nWhich makes him a sixth alien body on that side with nothing written between him and the other five. The catalogue has kept mercenaries, a militia, the Alien Soldiers, the Alien Goons and the Grey Alien Soldier apart because nothing in the world joined them up, and he goes on the same shelf of open doors. One ruling would collapse most of it.\n\nThe ribcage is the odd detail. It is printed on the outside of him, over the chest, the way the Damaged carry their damage on the plastic - except nothing here says he was hurt. It may just be how his species is built."
  },

  {
    id: "the-giant-orc",
    name: "The Giant Orc",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A giant orc. A monster rather than a soldier.",
    provenance:
      "Not a minifigure - a single large build, half again the height of " +
      "everything around him and three or four times the bulk. Pale green all " +
      "over, with an enormous moulded head: a heavy brow, small hard eyes, a " +
      "flat snout and two white tusks standing up out of the lower jaw. A dark " +
      "grey helmet sits over the crown with long cheek plates hanging down " +
      "either side. Huge closed fists with the fingers moulded in, a silver " +
      "belt plate with two studs on it, and a black kilt hanging from it. No " +
      "printing on him anywhere except the face.",
    tags: ["villain", "orc", "giant", "monster", "tusks", "non-minifigure", "custom", "green"],
    images: ["images/the-giant-orc-01.jpg"],
    acquired: "",
    notes: "Fourth orc, and the shape of them is filling in fast. The Orc Queen sat here for a long time as a queen of nobody - her card says so - and in two batches she has gone to three subjects: one short, one in armour called a warrior, and this. They are still not in a group, because a species is not an affiliation and nobody has said they answer to her, but the offer stands and it now covers four figures rather than three.\n\nHe is the seventh thing in this collection that is not minifigure-shaped, after the Kaminoan, the Martian Leader, Jabba, the Wampa, Lotso and Gollum - and only the third of those that is big rather than small. The other two enormous ones are Jabba and the Martian Leader, and both of them are leaders. This one is described as a monster."
  },

  {
    id: "the-shadow-soldiers",
    name: "The Shadow Soldiers",
    variant: "Seven of them",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Soldier",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Shadow soldiers. Seven of them.",
    provenance:
      "Black plastic and nothing else. Head, torso, arms, legs, all the " +
      "standard minifigure moulds and every one of them unprinted - no face, " +
      "no collar, no belt, no seams drawn anywhere. The only thing that is not " +
      "black on any of them is a hand: most wear black ones, several have a " +
      "single grey hand on one side, which is the only way to tell one from " +
      "another at all.\n\n" +
      "Six are photographed in a row and one on his own. They are people with " +
      "everything taken out.",
    tags: ["villain", "shadow", "soldier", "unprinted", "blank", "black", "custom", "seven-figures"],
    images: [
      { src: "images/the-shadow-soldiers-01.jpg", caption: "One of them" },
      { src: "images/the-shadow-soldiers-02.jpg", caption: "Six of them" }
    ],
    acquired: "",
    notes: "The shadow dimension has had everything except the shadows. It has a king locked in eternal conflict with light, a chaplain who preached the invasion as doctrine, two elders keeping a room where occult gods are worshipped, a commander who walked a defecting unit in, a Sith from outside who opened the door, and a prince who left and helped negotiate peace. Six roles and a throne, all catalogued, and not one rank-and-file shadow on the shelf until now.\n\nWhat the uprising actually did is the thing this card settles. Quinn and the Shadow King raised each friendly leader's own shadow against him - near-identical versions of the people themselves - and that has been written down as a method for a long time without anybody being able to see it. A figure with the face, the printing and the colour taken out and the silhouette left standing is exactly what that would look like.\n\nNo group has been made and that is deliberate twice over. The Shadow Team is a unit of humans who defected under their commander and they have faces; these do not. And the shadow dimension's own army has never been named, so putting these in a group would mean inventing a name for it. Name it and they go in.\n\nSeven figures on one card. Only three entries in this catalogue are recorded as holding more - about a dozen plain clones, ten US Army soldiers and nine rebel troopers - and all three of them are on the good deck."
  },

  {
    id: "matthew",
    name: "Matthew",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A child. He was kidnapped by the bad guys, and he is being raised by " +
      "some of them.",
    provenance:
      "Not a minifigure and older than one. A solid red body moulded as a " +
      "single tapered block with no arms and no legs on it at all, and a large " +
      "yellow head on top - a moulded nose and two ears standing out from the " +
      "sides, a face drawn in four thin lines: two eyes, two brows, and a " +
      "curve for a mouth that is neither a smile nor not one. Black hair " +
      "moulded in a bowl cut over the whole crown. This mould is older than " +
      "the minifigure itself.",
    tags: ["villain", "child", "kidnapped", "red", "vintage", "non-minifigure", "armless", "custom"],
    images: ["images/matthew-01.jpg"],
    acquired: "",
    notes: "Every child catalogued in this collection until now has been on the good side - royal sons and a royal daughter, a son, a farmer boy, two peasant boys, a karate kid, a kid in pyjamas, a girl in a guinea pig costume, the boy Anakin, the boy Boba, Rotta and Grogu. He is the first child on the other deck, and he did not walk there. He was taken.\n\nThat puts him with the Brainwashed Assassin as the second figure on this side who is filed as an enemy without having chosen it, and he is the younger of the two by a long way. Nothing says what he has been raised to do, or which of them is raising him.\n\nHe has a name, which is rare here. Most of this world goes by what it is; the home-made villains with personal names come to a handful - Quinn, Phalanx, General Shepherd, Johnny Plasma, Wen, Long Arm Johnson, Deus Pater - and he is the only child among them. Somebody named him. Given the card, that may be the point.\n\nHe is also the eighth thing here that is not minifigure-shaped, and the oldest kind of figure in the collection: the mould predates the minifigure, so the youngest character on this deck is the oldest piece of plastic on it."
  },

  {
    id: "the-squid-warrior",
    name: "The Squid Warrior",
    variant: "Two of them",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Warrior",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Evil squids, underwater. Two of them.",
    provenance:
      "Dark red throughout. A moulded head drawn up into a tall ridged cone " +
      "with a gold emblem printed across the front of it - a ring with a spike " +
      "through it and scrollwork either side - and two small eyes set low " +
      "beneath. Below the eyes the face opens into a hood of tentacles hanging " +
      "down over the chest, with more coiling up out of the middle of them. " +
      "Instead of legs, a moulded skirt of long tentacles spread out to the " +
      "floor. Dark red arms and grey hands.\n\n" +
      "A second one has since arrived and he is the same figure down to the " +
      "emblem - same dark red, same gold ring and spike stamped across the " +
      "cone, same tentacle skirt. The only thing that reads differently is the " +
      "eyes, one white and one dark, which may be the mould and may be the " +
      "light.",
    tags: ["villain", "squid", "sea", "creature", "moulded", "tentacles", "gold", "custom"],
    images: [
      { src: "images/the-squid-warrior-01.jpg", caption: "The first" },
      { src: "images/the-squid-warrior-02.jpg", caption: "The second" }
    ],
    acquired: "",
    notes: "Second kind of thing in the water, and now two of him. The Shark Warrior arrived in the batch before this one and his card said he was the first thing in this collection the divers would actually meet down there; there are four creatures down there now, across three kinds, against fifteen people catalogued underwater on two dive teams.\n\nThe difference between the pair is worth writing down. The shark carries no marking at all - grey head, worn blue tribal lines, nothing that says rank. This one has a gold emblem printed across the front of the skull, which is the only insignia anything in the water is wearing. If one of these two gives the orders it is this one, and nothing says so yet.\n\nThey are not in a group together. Two sea creatures on the same deck is a pattern, not an affiliation, and nothing has been said about whether they know each other. Say they are one force and they go in together - it would be the first enemy the Atlantis dive team has ever had a name for."
  },

  {
    id: "the-devoured",
    name: "The Devoured",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A man in a white suit whose body was taken over by a hungry " +
      "carnivorous monster.\n\n" +
      "What walks around in the suit now is the monster.",
    provenance:
      "A plain white helmet with no visor and no face - and where the face " +
      "should be, a mouth. A wide dark red maw printed across the front of the " +
      "head, filled top and bottom with white pointed teeth and opening into " +
      "red throat behind them. White trooper armour below it, the chest plates " +
      "and belt clips drawn in fine grey, a black waist and white legs. Black " +
      "arms and black hands. Everything about him is a standard soldier in " +
      "white except the head, and the head is eating.",
    tags: ["villain", "monster", "possessed", "teeth", "white", "helmet", "custom"],
    images: ["images/the-devoured-01.jpg"],
    acquired: "",
    notes: "Named the way the Discarded, the Damaged, the Displaced, the Rebuilt, the Reformed and the Hijacked are named - for what was done to him rather than for who he was. That is a coined name, not one you gave, so change it if it is wrong.\n\nEvery other figure in that naming family is on the good side. He is the first of them filed as an enemy, and the reason is on the card: with the Hijacked, villains took the body and left the mind, and he was brought back afterwards. Nothing here says this one gets brought back. What is standing on the shelf is the thing that ate him, wearing the suit.\n\nThat makes four ways this world has now recorded a body being used against its owner. The Hijacked was hacked and stayed awake through it. The Commissioner's apprentice chose it. The Brainwashed Assassin had the decision taken out of him and kept the body. This one had the body taken and lost everything else. It is the only one of the four where nobody is left inside to bring back."
  },

  {
    id: "the-anglerfish",
    name: "The Anglerfish",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "An anglerfish, underwater.",
    provenance:
      "A moulded head in two greens - a dark olive crest running back over the " +
      "crown in ridged fins, a sand green face beneath it, and one small orange " +
      "eye at each side. Two white fangs the length of his own chest stand " +
      "straight up out of the lower jaw, far bigger than anything else in his " +
      "mouth. A dark olive torso and sand green legs with nothing printed on " +
      "them at all, and a fin hanging down over the front of the thighs.",
    tags: ["villain", "fish", "sea", "creature", "moulded", "fangs", "green", "custom"],
    images: ["images/the-anglerfish-01.jpg"],
    acquired: "",
    notes: "Third kind of thing in the water, after the shark and the squid, and the fourth figure down there - the squid has two of him now. The sea went from empty to a small population in three batches: before the Shark Warrior there were fifteen people catalogued underwater across two dive teams and nothing at all in the water with them.\n\nStill no group. Three sea creatures on the same deck is a pattern and not an affiliation, and nothing has been said about whether any of them knows the others. The squid is the only one wearing an insignia, so if there is an order down there it starts with him. Say they are one force and the Atlantis dive team finally has an enemy with a name."
  },

  {
    id: "the-second-viking",
    name: "The Second Viking",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Viking",
    group: "",
    location: "",
    relations: [
      { to: "the-vikings-wife", label: "Married to" }
    ],
    rating: 0,
    background:
      "A viking, and a married man.",
    provenance:
      "A grey helmet with a nose guard coming down over the face, so that only " +
      "a strip of the eyes shows through it, and an enormous orange beard " +
      "hanging out from under the jaw and down over the chest. An olive green " +
      "torso printed with a blue-trimmed collar, a small silver face-medallion " +
      "on a cord, and two brown straps crossed over the front. Brown arms, " +
      "yellow hands, olive legs going into brown boots. A blue cloth cape " +
      "behind him.",
    tags: ["villain", "viking", "beard", "helmet", "cape", "married", "custom"],
    images: ["images/the-second-viking-01.jpg"],
    acquired: "",
    notes: "Called the Second Viking because the name was taken. There is already a Viking in this collection, filed good - a woman who came through a time dilation, calm, nice, fond of running water, with a card that has been asking for years who the others who came through with her were.\n\nSo there are three vikings here now and they sit on opposite decks, and nothing says whether they are anything to each other. That is the question this card is for. If she came through the dilation with these two, her card stops being a loose end. If she did not, then vikings simply exist here twice over and it means nothing.\n\nHe and his wife are also the first married couple on the villain side. The catalogue has two marriages written into it - the Prince and the Space Princess, the Father and the Mother - and until now both were good and both were on the same deck as each other."
  },

  {
    id: "the-vikings-wife",
    name: "The Viking's Wife",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [
      { to: "the-second-viking", label: "Married to" }
    ],
    rating: 0,
    background:
      "The Viking's wife.",
    provenance:
      "A silver horned helmet with two long white horns curving out from the " +
      "sides and a diamond pattern stamped into the front, worn over long pale " +
      "blonde hair falling past both shoulders. A yellow face with hard drawn " +
      "brows and a level, unimpressed mouth. A brown dress printed from collar " +
      "to hem - a beaded necklace and two gold brooches at the shoulders, a " +
      "wide gold-worked belt, and a band of Celtic knotwork low across the " +
      "skirt. Pale tan arms, yellow hands, and no legs showing at all.",
    tags: ["villain", "viking", "woman", "married", "horned-helmet", "dress", "custom"],
    images: ["images/the-vikings-wife-01.jpg"],
    acquired: "",
    notes: "Seventh woman on the villain side, after the TV Camera Woman, the Pharaoh, the Orc Queen, the Blue Bounty Hunter, Harley Quinn and Asajj Ventress. Every one of those six has a job on her own card: the Pharaoh rules, the Orc Queen rules, the bounty hunter hunts, Ventress kills, Harley Quinn is Harley Quinn, and even the TV Camera Woman runs a camera. She is the first woman filed on this deck described by her marriage instead, and that is the description given rather than a judgement - nothing has been said about what she does.\n\nShe wears the horned helmet and he does not, which is worth noting since he is the one with the job title.\n\nA name of her own would help. She is one of very few figures in this collection identified entirely by somebody else's card."
  },

  {
    id: "the-evil-dwarf",
    name: "The Evil Dwarf",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A dwarf, and an enemy.",
    provenance:
      "Short legs, and black from the hat down. A dark brown tricorn worn low " +
      "with a feather laid along the brim, and under it a strip of yellow face " +
      "showing nothing but two orange eyes and heavy black brows drawn hard " +
      "down. Everything below that is a moulded black beard falling in folds " +
      "past the chest, with a black cape behind and a thin edge of pale cloth " +
      "showing at one side. Black arms, grey hands, black short legs.",
    tags: ["villain", "dwarf", "beard", "tricorn", "cape", "black", "custom"],
    images: ["images/the-evil-dwarf-01.jpg"],
    acquired: "",
    notes: "The first dwarf on the villain side. There is a group here called The Dwarves and it has four in it - a king, a librarian, a soldier and an archer - and every one of them is good. He is not put in with them, because nothing says he is one of theirs rather than one of somebody else's, and a species is not an affiliation. But that group has been entirely good since the day it was made, and it is not any more unless he is from somewhere else.\n\nThe beard is the whole figure. It starts under the eyes and does not stop until the waist, so what you can actually see of him is one narrow yellow band with two orange eyes in it. That is the second face in two batches reduced to a strip: the Second Viking shows the same narrow band of eyes, except his is closed off by a helmet's nose guard from above and this one is closed off by his own beard from below."
  },

  {
    id: "the-ghost",
    name: "The Ghost",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A ghost.",
    provenance:
      "A single pale shroud moulded over the whole figure from the crown to " +
      "the ankles, falling in soft folds with no seam at the waist. Two black " +
      "eyes and a small open black mouth are the only printing on it, set into " +
      "the front of the hood. White arms and white hands come out from " +
      "underneath, and two plain white feet stand out below the hem. The " +
      "plastic is the old glow-in-the-dark kind, gone faintly green with age.",
    tags: ["villain", "ghost", "dead", "shroud", "glow-in-the-dark", "white", "custom"],
    images: ["images/the-ghost-01.jpg"],
    acquired: "",
    notes: "The first ghost in this collection, which is odd for a world this size - it has a Ferryman, a religion, occult gods, a shadow dimension, two figures lost to time and a whole section of the catalogue for the dead, and until now nothing has ever come back.\n\nTwo cards were waiting for him without knowing it. The Ranger's says there are temples out there full of evil spirits, ghosts and zombie-like things that he has to go in and fight - written long before anything of the kind was on the shelf. And the Occultist runs a school teaching how to contact the spirits of other dimensions and realms, in the open, so people understand how evil works. One man fights them and one man teaches about them, and this is the first one either of them could point at.\n\nNo line drawn to either. Nothing says this ghost is from those temples, and nothing says who he was before."
  },

  {
    id: "the-orc-alien-hybrid",
    name: "The Orc-Alien Hybrid",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A cross between an orc and an alien.",
    provenance:
      "A pale grey moulded alien head, wide and flat, with two red eyes on " +
      "stalks standing out to either side, green speckling across the crown, a " +
      "ring of small teeth and a long red tongue hanging out of the mouth. " +
      "Below the neck he is an orc: the brown torso with a gold medallion at " +
      "one shoulder, a silver chain across the chest and a fur collar under " +
      "it, pale green arms, grey hands, brown legs.",
    tags: ["villain", "orc", "alien", "hybrid", "moulded-head", "green", "custom"],
    images: ["images/the-orc-alien-hybrid-01.jpg"],
    acquired: "",
    notes: "This figure is made of two other cards in this collection, and the descriptions match part for part. The head is the Alien Medic's - pale grey, flat and wide, red eyes out on stalks, green speckling, the red tongue hanging out - and he is one of the five Alien Soldiers on the villain side. The body is the Short Orc's: brown torso, gold medallion, silver chain, fur collar.\n\nSo the hybrid is not a metaphor. Two catalogued enemies, one from the alien soldiers and one from the orcs, and he is the join between them. Nothing is written between him and either, and nothing should be until it is said - but if a hybrid means those two peoples have met, that is the first thing anybody has said about how any of the alien forces on that side relate to anything else.\n\nFifth orc and, depending on the ruling, a seventh alien body."
  },

  {
    id: "the-serpent",
    name: "The Serpent",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Ninjago",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A snake villain, out of Ninjago.",
    provenance:
      "A moulded snake head with a wide cobra hood spread back from the skull, " +
      "pale grey on the outside with dark grey scrollwork worked over it and " +
      "dark blue underneath. The face is dark blue with two small white fangs " +
      "and a yellow chevron up the brow, and the eyes are orange spirals " +
      "wound in on themselves. A pale grey torso and legs printed with the " +
      "same grey scrollwork, split down the middle by a dark blue belly panel " +
      "barred in yellow. Grey arms and hands.",
    tags: ["villain", "ninjago", "branded", "snake", "cobra", "hood", "spiral-eyes"],
    images: ["images/the-serpent-01.jpg"],
    acquired: "",
    notes: "Forty-first branded villain, and the second out of Ninjago after the False Kai - who is a man who went undercover as one of the ninja rather than an enemy of his own. So this is the first thing from Ninjago on that deck that is simply not one of them. Six good Ninjago figures against two.\n\nNamed descriptively because I do not know which snake he is. The tribes have names and he will have one; the spiral eyes are the identifying mark, and they are worth flagging for a second reason. Spirals wound in on themselves is what hypnosis looks like drawn on a face, and there is already a thread in this world about taking a mind: the Evil Doctor and the Butcher built mind control between them, and the Brainwashed Assassin is walking around as the result. If this one takes minds too, say so - that would be three separate methods for the same crime, from three different corners of the shelf."
  },

  {
    id: "the-evil-cyborg-soldier",
    name: "The Evil Cyborg Soldier",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Soldier",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A cyborg soldier.",
    provenance:
      "Half a face. The left side is a yellow man with a black brow drawn down " +
      "and bared teeth; the right side is silver plate that runs from the " +
      "hairline to the jaw, with a round green lens set where the eye was and " +
      "a cable looping back from it into the skull. Black hair swept up over " +
      "both. A black sleeveless top printed with a checkered flag and orange " +
      "flames across the chest, bare yellow arms, black hands, black legs.",
    tags: ["villain", "cyborg", "soldier", "implant", "half-face", "flames", "custom"],
    images: ["images/the-evil-cyborg-soldier-01.jpg"],
    acquired: "",
    notes: "Cybernetics in this world have one origin and it is written on a good card. The Discarded - the ambassador, the kind one, the bridge between civilizations - has an arm from another world, and his card says that arm is the reason this society has cybernetics at all: they studied him and built from what they found.\n\nSo every machine limb on the villain side traces back to a refugee who let them look. The Bionics Team, the Bionic Brother, the Bionic Alien, the Cybernetic Ninja, Doc Ock, the Brainwashed Assassin, and now a soldier with half his head replaced. Nothing is written between any of them and the man it came from, and nothing should be - he gave nobody permission for this and nobody has said he knows.\n\nThe flames and the checkered flag are the odd part. That is racing kit, not soldiering kit, and nothing on the card explains why a cyborg soldier is dressed for a track."
  },

  {
    id: "the-goon-in-the-blue-cap",
    name: "The Goon in the Blue Cap",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Goon",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A goon. Nothing more specific said about him.",
    provenance:
      "A blue baseball cap pulled straight, and under it a yellow face with " +
      "one brow up and one down, lines at both cheeks and a flat unhappy " +
      "mouth. A dark brown jacket printed open over a grey shirt with a pale " +
      "fleece collar and two square tags at the chest. Brown arms, yellow " +
      "hands, dark blue legs. He is dressed like somebody with a van.",
    tags: ["villain", "goon", "cap", "jacket", "custom"],
    images: ["images/the-goon-in-the-blue-cap-01.jpg"],
    acquired: "",
    notes: "Named after the Goon in the Beanie, who is in a group called The Alien Goons along with the Scarred Goon and the Wolfman. This one is not put in with them, and he sharpens a question that has been open on that group since it was made: the Wolfman is not an alien either, and the group name was taken from the words used to describe the batch rather than from anything in the world. Now there is a fourth goon who is plainly an ordinary man in a baseball cap.\n\nSo either the group is about a job rather than a species and should lose the word Alien, or he belongs somewhere else entirely. Four goons, one name that does not fit three of them.\n\nNothing else has been said about him. He is muscle, and the card says so."
  },

  {
    id: "the-explorer-smuggler",
    name: "The Explorer Smuggler",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Smuggler",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "An explorer, and a smuggler.",
    provenance:
      "Dark brown hair swept back, and a grey moustache and stubble over a " +
      "yellow face with heavy brows and a set jaw. A tan field shirt printed " +
      "with an open collar, a buttoned breast pocket and a brown strap running " +
      "across the chest carrying silver cartridges, with a green cloth bundle " +
      "slung under one arm. Tan arms, grey hands, black trousers with two " +
      "printed thigh pockets, and brown boots.",
    tags: ["villain", "explorer", "smuggler", "moustache", "bandolier", "field-kit", "custom"],
    images: ["images/the-explorer-smuggler-01.jpg"],
    acquired: "",
    notes: "Nine explorers, adventurers and pathfinders are catalogued in this world and every one of them is good - the Explorer and the Monkey, the Scrap Adventurer, the Ginger Adventurer, the Explorer's Son, the Ranger, the Pathfinder, the two Gem Hunters and the Arctic Explorers. He is the first person on the other deck whose job is going out and finding things.\n\nHe is also the second smuggler. The other is the Famous Poacher, whose card says he is a poacher and a smuggler both and worked with the arms dealer. That makes two smugglers here, in the same trade, with nothing written between them - which is the third time that has happened on his card alone.\n\nThe kit is the reason the two halves of his name sit together. A bandolier, a bedroll, thigh pockets and field boots is what somebody wears to go a long way from anywhere - and the thing that makes it smuggling rather than exploring is what he brings back."
  },

  {
    id: "the-manta-warrior",
    name: "The Manta Warrior",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Warrior",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A manta ray, underwater.",
    provenance:
      "A moulded manta head worn over the whole skull - the wings swept back " +
      "and down either side of the face, white on top with dark blue " +
      "scrollwork and a black and yellow band along the crown, and underneath " +
      "the face itself: pale, with two wide black eyes and blue markings " +
      "curling away from them. A pale blue torso printed with a spread of " +
      "speckled wings and two crowned panels at the waist, dark blue arms and " +
      "legs, black hands.",
    tags: ["villain", "manta", "ray", "sea", "creature", "moulded", "blue", "custom"],
    images: ["images/the-manta-warrior-01.jpg"],
    acquired: "",
    notes: "Fourth kind of thing in the water and the fifth figure down there: a shark, two squids, an anglerfish and now a manta. Three batches ago the sea had fifteen people in it across two dive teams and nothing else at all.\n\nThis is the point where the pattern stops being a coincidence and starts being a decision somebody has to make. They are all the same build - a moulded animal head over a standard body - they all arrived in consecutive batches, and they are all on the same deck. What they are not is joined up, because habitat is not affiliation and nothing in this world has said they know each other. The catalogue has held the same line on the four alien forces and on the orcs.\n\nOne word from you and they become a force, and the Atlantis Dive Team - twelve people on the card, ten of them still on it - finally has something on the other side of the water."
  },

  {
    id: "the-second-serpent",
    name: "The Second Serpent",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Ninjago",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Another snake, out of Ninjago.",
    provenance:
      "A moulded snake head, and a different tribe from the first one. Dark " +
      "brown and black rather than grey and blue, scaled all over in fine " +
      "white lines, with three stubby orange spines standing straight up out " +
      "of the crown and a fourth laid back along the skull. Small white fangs " +
      "at the jaw. A black torso printed with the same white scaling and a " +
      "yellow underbelly flash at the chest, one grey arm and one black, black " +
      "hands, black legs.",
    tags: ["villain", "ninjago", "branded", "snake", "spines", "black", "orange"],
    images: ["images/the-second-serpent-01.jpg"],
    acquired: "",
    notes: "Second snake and plainly not the same kind of snake. The first has a cobra hood and hypnotic spiral eyes; this one has no hood at all and a row of orange spines instead. In Ninjago the snakes come in tribes, so two different builds most likely means two different tribes, and neither card has the proper name on it yet.\n\nThat makes three Ninjago villains against six good, and the only one of the three who is not a snake is the False Kai, who was a man pretending to be a ninja. So Ninjago's contribution to this collection's enemy is: one impostor and two serpents.\n\nNo group made. Two snakes is not a tribe until somebody says which tribes they are."
  },

  {
    id: "the-conquistador",
    name: "The Conquistador",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Soldier",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A conquistador.",
    provenance:
      "A gold morion helmet with the brim swept up to a point front and back " +
      "and a comb running over the crown. Under it a yellow face with a brown " +
      "moustache and a short beard, and a scar or a strap drawn down one " +
      "cheek. A gold breastplate moulded as a separate piece over the torso, " +
      "silver-banded at the collar and the waist, with tassets hanging over " +
      "the hips and a gold fauld printed onto the legs below. Dark red arms, " +
      "grey hands, and white lower legs.",
    tags: ["villain", "conquistador", "soldier", "gold", "armour", "helmet", "moustache", "custom"],
    images: ["images/the-conquistador-01.jpg"],
    acquired: "",
    notes: "He is the first conquistador here, and he lands in a world that already has a lot to say about people arriving somewhere that is not theirs. The Discarded and the Damaged came here as refugees and were taken in. The Martian Leader came with an army and attacked Lego City. The Blue Demigod came through uninvited with troops and wanted a war stopped badly enough to wreck whichever side was winning. This one is filed as an enemy and nothing has been said about what he did, which leaves the word itself doing all the work.\n\nHe is also, physically, one of the most armoured things on that deck - gold breastplate, tassets, a fauld printed straight onto the legs - and one of the few enemies here dressed for a period rather than for a genre."
  },

  {
    id: "the-at-at-driver",
    name: "The AT-AT Driver",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Pilot",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A driver for the walkers.",
    provenance:
      "A dark grey helmet with a low dome and flared panels dropping over both " +
      "ears, and under it a pale face taken up almost entirely by printed " +
      "goggles - a wide black band with two white lenses in it and a strap " +
      "running back, with a small breathing piece at the mouth. A pale grey " +
      "tunic printed with a black seam down the front, faint quilting either " +
      "side, and a black belt with a silver buckle. Grey arms, black hands, " +
      "pale grey legs.",
    tags: ["villain", "star-wars", "branded", "imperial", "pilot", "walker", "goggles", "grey"],
    images: ["images/the-at-at-driver-01.jpg"],
    acquired: "",
    notes: "Second of the Empire's walker crews here, after the AT-ST Pilot. Between them this collection now has the two-legged walker and the four-legged one crewed, plus a general to command them, all three on the villain side.\n\nOne note on the labelling. This figure came in named as General Veers and the one beside him came in described as the general of the camel-looking walker. Read straight, both labels point at the same man, and the faces settle which is which: this one is goggled and anonymous, a crewman, and the other has a face and an officer's print. So the name went on that card and this one is filed as the driver. Say the word and they swap."
  },

  {
    id: "general-veers",
    name: "General Veers",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "General",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "General Veers, who commands the walkers.",
    provenance:
      "The same grey walker helmet as the driver, low-domed with panels over " +
      "both ears - and no goggles. A pale face underneath with brown brows, a " +
      "small dark moustache, a line at each cheek and a flat set mouth. The " +
      "same pale grey tunic with the black seam and the quilting, the same " +
      "black belt and silver buckle. Grey arms, black hands, pale grey legs.",
    tags: ["villain", "star-wars", "branded", "imperial", "general", "officer", "moustache", "grey"],
    images: ["images/general-veers-01.jpg"],
    acquired: "",
    notes: "Forty-fourth branded villain, and the first general anywhere in this collection who came out of a box. The four already here are all home-made: the General on the good deck, and General Shepherd - who stranded the Green Rangers - the Fleet General and the Retired General on this one.\n\nThe kit is identical to the AT-AT Driver's from the neck down. Same helmet, same tunic, same belt. The only thing that separates a general from a crewman here is that one of them has a face and the other has goggles, which is as clean a statement about rank as anything on the shelf - and it is the exact opposite of the Sting Rays, where the ranks show their faces to nobody and the insignia is the colour of the trousers.\n\nYou handed the name in on the other card. Both labels described the same man and the faces decided it; one word and the two cards swap names."
  },

  {
    id: "the-creepy-elf",
    name: "The Creepy Elf",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "An elf, and not a friendly one.",
    provenance:
      "Long pointed ears standing out either side of a swept brown hairpiece, " +
      "and a pale face lined in brown - creases fanning from both eyes and " +
      "curving round the mouth, thin arched brows, and a wide red mouth closed " +
      "over it. A brown dress printed from collar to hem: a yellow panel at " +
      "the throat, two gold brooches at the shoulders, a beaded blue necklace " +
      "under them and a broad gold-worked belt across the waist.\n\n" +
      "The dress is the same print the Viking's Wife wears, one deck over in " +
      "the same batch of arrivals - brown, brooches, beads, gold belt. One pale " +
      "tan arm, one brown, yellow hands, brown legs.",
    tags: ["villain", "elf", "woman", "pointed-ears", "dress", "lined-face", "custom"],
    images: ["images/the-creepy-elf-01.jpg"],
    acquired: "",
    notes: "The first elf on the villain side. There are two others here and both are good: the Elf Man, and the Elf Knight, who is one of the Royal Knights. So a people that had been entirely on one side is not any more.\n\nShe is the eighth woman on that deck, and the second in two batches to arrive wearing that particular brown dress - the Viking's Wife has the identical torso print. Two women on the same deck in the same clothes is a parts coincidence rather than a uniform, and it is written down here in case it is not.\n\nCreepy is the word you used and the face earns it: the lines are drawn as age or as strain, and the mouth is doing something that is not a smile. Nothing else has been said about her - no name, no job, no idea what she wants."
  },

  {
    id: "the-bin-woman",
    name: "The Woman Built in the Bin",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "The Bin",
    relations: [
      { to: "the-in-betweener", label: "He probably met her" }
    ],
    rating: 0,
    background:
      "One of the people of the Bin - the place between dimensions where lost " +
      "pieces end up, and where people get built out of whatever is in there.\n\n" +
      "That is why she looks the way she does.",
    provenance:
      "Nothing on her goes with anything else. A silver horned viking helmet " +
      "over long pale blonde hair, and a flesh-toned face underneath with blue " +
      "eyes, a brown scar cut down from the brow past one of them, and a flat " +
      "closed mouth. A black torso printed as a pale apron with a red bow at " +
      "the throat and three red crosses stitched across the hem - a servant's " +
      "or a nurse's front. White arms and white hands from a different figure " +
      "again. Then a grey skirt piece clipped at the waist, white-spotted, and " +
      "grey legs underneath it.",
    tags: ["the-bin", "in-between", "mismatched", "horned-helmet", "scar", "woman", "custom"],
    images: ["images/the-bin-woman-01.jpg"],
    acquired: "",
    notes: "The Bin has had a card since very early on and never a resident. It is a real donation bin at an elementary school and, in the world, the place the non-Lego pieces come from - with its own people and its own beasts. The Salvager was rebuilt out of it after he was destroyed, Lego above the waist and not Lego below, and the people of the Bin gave him his cape for going back in to pull others out. Those people are on this card and the next one. They had never been photographed.\n\nThe mismatch is the whole point and it is not sloppiness. A viking helmet, a nurse's apron, arms from a third figure and a skirt from a fourth is exactly what being assembled out of a lost-and-found looks like.\n\nShe is filed as an enemy because the standing rule for this run is that everything coming in is one, and that is the only reason. It sits awkwardly and the card should say so: the Bin as written is the side that saves people, and its residents are the ones who dressed the Salvager. If these two are those people, they are on the wrong deck and it is a one-word fix."
  },

  {
    id: "the-bin-elder",
    name: "The Old Man Built in the Bin",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "The Bin",
    relations: [
      { to: "the-in-betweener", label: "He probably met him" }
    ],
    rating: 0,
    background:
      "Another of the people of the Bin, put together out of what was lying in " +
      "it.",
    provenance:
      "The same silver horned viking helmet as hers, over the same long pale " +
      "blonde hair - and under it an old yellow face with a thick white " +
      "moustache, a small smile, and a black-rimmed eyepiece printed over one " +
      "eye with a pale lens in it. A sage green torso printed as a draped " +
      "cloak or a hanging skin, green arms, green hands. Below that, bright " +
      "pink legs patterned in blue and turquoise with green stitching at the " +
      "knees. The top half is a hermit and the bottom half is a carnival.",
    tags: ["the-bin", "in-between", "mismatched", "horned-helmet", "moustache", "eyepiece", "old", "custom"],
    images: ["images/the-bin-elder-01.jpg"],
    acquired: "",
    notes: "The second of the Bin's own people, and the one that explains a card written a long time ago. The In-Betweener travels between dimensions and does not cross them like the Ferryman does - he stays inside the space in between and lives there. His card ends by saying that when he comes to the mainland the way he dresses is very funny, and that has sat there as a joke about one man's taste.\n\nIt is not taste. Look at these two and look at him: a neon helmet, one red arm and one black, a studded blue chest and a brown cape. Everyone who lives in the in-between is dressed out of whatever was to hand, because that is what is there. The funny clothes are the address.\n\nYou said he probably met them, and that word is on both relations exactly as you said it rather than firmed up into something you did not claim.\n\nThe faction question on the card before this one applies here too."
  },

  {
    id: "the-caveman",
    name: "The Caveman",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A caveman. A strong one.",
    provenance:
      "A single moulded piece of dark orange hair and beard swallowing the " +
      "entire head - it comes down over the brow, round both cheeks and off " +
      "the chin in one mass, leaving a small window with two blue eyes, ginger " +
      "brows drawn hard down, and creases at the corners. No mouth visible at " +
      "all. Below it a plain yellow torso and bare yellow arms with nothing " +
      "printed on them anywhere, and plain tan legs. He owns no clothes.",
    tags: ["villain", "caveman", "beard", "bare", "unprinted", "strong", "custom"],
    images: ["images/the-caveman-01.jpg"],
    acquired: "",
    notes: "The first caveman here, and a bare torso, bare arms and plain legs with not one printed line on any of it. The only thing on him that was designed is the hair.\n\nA fair few figures here are unprinted - the Shadow King, the Light King, the Shadow Sorcerer, the Royal Guard, the Shadow Soldiers - but every one of those is unprinted because a robe or a shell or a solid colour covers them. He is unprinted because he has no clothes. The only other card that draws that distinction is the Nude Aliens, which says of one of them that he is not blank, he is undressed. This is the same thing on the villain side: nothing is missing from him, he simply has nothing.\n\nStrength is the whole description given and there is no shortage of muscle on that deck already - the Brawling Alien, the Rhino Heavy, the Juggernaut, the Giant Orc. What none of them is, is old. A caveman belongs to a time this world has not otherwise mentioned."
  },

  {
    id: "the-werewolf",
    name: "The Werewolf",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A werewolf.",
    provenance:
      "A moulded brown wolf's head over the whole skull - pointed ears " +
      "standing up, a black snout, a heavy brow with two small white eyes " +
      "under it, and a mouth of white teeth bared in a line. Brown arms and " +
      "brown hands. A red plaid shirt printed open and torn across the chest " +
      "with two red braces over the shoulders, and blue jeans printed with " +
      "long tears down both thighs and the skin showing through.\n\n" +
      "The clothes are the story: he was a man dressed for an ordinary evening " +
      "and the shape underneath them changed.",
    tags: ["villain", "werewolf", "wolf", "moulded", "torn-clothes", "plaid", "custom"],
    images: ["images/the-werewolf-01.jpg"],
    acquired: "",
    notes: "Second wolf on the villain side, and not the same animal at all. The Wolfman is in the Alien Goons, works small arms and tracks by smell, and his card describes a tan wolf face with a red scar under long swept brown hair, a dark red shirt and olive legs. This one is brown, moulded, has no scar, and is wearing a torn plaid shirt and burst jeans.\n\nThe difference between them is what the clothes say. The Wolfman is a wolf who has a job. This one is a man whose clothes did not survive becoming a wolf, which is a different kind of thing entirely and makes him the first figure here where the transformation is the character.\n\nHe also lands on an open question rather than settling it: the Alien Goons hold a wolf who is not an alien and a goon in a baseball cap who is not one either. A second wolf outside the group does not help that name any."
  },

  {
    id: "the-tanker-droid",
    name: "The Tanker Droid",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A tanker droid.",
    provenance:
      "Not a minifigure - a built machine, squat and wide, standing about a " +
      "minifigure's height but three times the bulk. A dark grey head plate " +
      "with a single red slit for a visor, set back into silver shoulder " +
      "housings. A silver chest with a round port in the middle of it and two " +
      "grey vents below. Heavy silver arms hanging to the knees with blocked " +
      "fists, and two broad gold-brown feet planted flat and forward, each one " +
      "moulded as a slab.",
    tags: ["villain", "droid", "robot", "machine", "silver", "non-minifigure", "custom"],
    images: ["images/the-tanker-droid-01.jpg"],
    acquired: "",
    notes: "Ninth thing in this collection that is not minifigure-shaped, after the Kaminoan, the Martian Leader, Jabba, the Wampa, Lotso, Gollum, the Giant Orc and Matthew - and the first of the nine that is a machine rather than a body.\n\nHe joins a villain side that has been filling with machines for a long time: the Missile, the two Killer Bots, the Robotic Samurai, the Television, the Successful Replica, the Robot Builder, Ultron. What none of those is, is armour. This one is built like a thing meant to be shot at, which is the first time that shape has turned up on either deck.\n\nOne red slit and no face. The Devoured has a mouth where a face should be and the Shadow Soldiers have nothing at all; this one has an aperture."
  },

  {
    id: "the-trooper-in-olive-and-white",
    name: "The Trooper in Olive and White",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Soldier",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A soldier in jungle kit. Who he is has not been established.",
    provenance:
      "A white helmet with wide flared cheek plates, painted with an olive " +
      "chevron over the crown and a broad dark green visor band across the " +
      "front with two pale slits in it. Below that a vent drawn at the mouth " +
      "with a small round intake either side of it. An olive green chest plate " +
      "printed over a brown undersuit, with four brown belt pouches strapped " +
      "round the waist and a bandolier strip above them. Dark brown arms, grey " +
      "hands. Brown legs with a printed pouch at one thigh and an olive knee " +
      "guard on each.",
    tags: ["villain", "star-wars", "branded", "soldier", "jungle", "camouflage", "helmet", "unidentified"],
    images: ["images/the-trooper-in-olive-and-white-01.jpg"],
    acquired: "",
    notes: "You said find out, so here is exactly how far I got and no further.\n\nThe kit is jungle field gear rather than parade armour: plate over an undersuit, a heavy belt rig with four pouches, knee guards. The mould and the printing read Star Wars to me, most likely a Clone Wars-era trooper in jungle camouflage - the 41st Elite Corps and Commander Gree wear olive and white like this. But the helmet is not the Phase 1 or Phase 2 clone shape, not a stormtrooper and not a Mandalorian T-visor: it is a wide band visor with flared cheeks and a vented mouth, and I cannot match it with enough confidence to put a name on the card.\n\nSo he is named for what is on him, the way the Teal Astromech and the Blue Imperial Trooper are. If you know the figure, the card takes the real name. If the theme is wrong too, that is a one-word fix.\n\nHe is also on the villain side only because that is the standing rule for this run. If he is a clone he would be the fourth on that deck, against eighteen good ones, and the other three all have a reason written down - the Clone Traitor turned, Jek-14 was built by the other side, the Shadow ARF Trooper is a unit. This one would have nothing."
  },

  {
    id: "the-escapees",
    name: "The Escapees",
    variant: "Three of them",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Convict",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Men out of the same prison, in the same shirt, wearing the same number.",
    provenance:
      "Three of them, in the same clothes and wearing the same number. Black " +
      "knitted beanies pulled to the brow, and yellow faces under them - one " +
      "with heavy stubble across the jaw, a raised brow and a broad gap-toothed " +
      "grin, the other with a pointed black goatee and moustache and the same " +
      "one-sided grin. Grey and white horizontally striped shirts printed with " +
      "a buttoned placket, an open collar with chest hair showing, and 50380 " +
      "stamped across the ribs. White arms, yellow hands, plain grey legs.\n\n" +
      "The third has a clean face under the same black beanie - no stubble and " +
      "no beard, brows driven down, a flat unimpressed mouth - and the same " +
      "shirt with the same number on it.",
    tags: ["villain", "convict", "escapee", "prison", "beanie", "stripes", "custom", "three-figures"],
    images: [
      { src: "images/the-escapees-01.jpg", caption: "The stubbled one" },
      { src: "images/the-escapees-02.jpg", caption: "The one with the goatee" },
      { src: "images/the-escapees-03.jpg", caption: "The clean-shaven one" }
    ],
    acquired: "",
    notes: "One card because the plastic says so: identical shirt, identical trousers, and 50380 printed on all three of them. Three men cannot share a prisoner number, so that is the prison's stamp rather than any one man's - and it settles a question the first two raised on their own.\n\nThe third came in described as another generic criminal rather than as an escapee, so the name on this card may be doing more work than it should. If he never got out, he splits off onto his own.\n\nWhat they land on is the police. Lego City Law is the largest institution in this collection with eleven people in it - a Commissioner who was a sniper before he was a chief, a Watch Commander, a Nightwatch Captain who owns everything after dark, a sheriff, a sergeant, a highway patrolman, an animal control officer - and in all that time not one person has ever been catalogued for them to arrest. The Martian Leader attacked Lego City itself and has no line to any of them. These two are the first people here who are plainly the police's problem.\n\nNo line drawn, because nothing says which of the eleven lost them. Somebody had these two in a cell."
  },

  {
    id: "gold-tooth",
    name: "Gold Tooth",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Agents",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "One of the Agents' supervillains.",
    provenance:
      "A black baseball cap with a small stud printed on the front, worn over " +
      "a yellow face with a black eyepatch across one eye, a scarred brow above " +
      "it, and a wide open grin showing a full set of teeth with one of them " +
      "gold. An orange boiler suit printed to the ankle - a black zipped panel " +
      "running diagonally across the chest, a grey utility belt with a silver " +
      "buckle, and a round badge at the shoulder: a black flame with a face in " +
      "it, ringed in gold. Orange arms, black hands, orange legs.",
    tags: ["villain", "agents", "branded", "eyepatch", "gold-tooth", "orange", "flame-badge"],
    images: ["images/gold-tooth-01.jpg"],
    acquired: "",
    notes: "Opens a twentieth theme. Lego's Agents is an in-house line rather than a licence, filed branded here the same way Ninjago and Chima are - and unlike every other theme in this collection, it arrives with no good side at all. Eighteen themes here came out of a box and sixteen of them opened with somebody good. Lord of the Rings opened with Gollum and still has nobody else in it. This one opens with two villains and no agents at all.\n\nThe name is taken straight off his face because the face is the name: an eyepatch, a scar, and one gold tooth in a grin. If the figure has a different proper name, the card takes it.\n\nThe badge on his shoulder is the thing to look at. The henchman catalogued beside him is wearing the identical one - a black flame with a face inside it - which is the clearest statement of affiliation anything on this deck has ever worn. No group made, because nobody has said what the outfit is called. Name it and there is a group."
  },

  {
    id: "the-helmeted-henchman",
    name: "The Helmeted Henchman",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Agents",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Another of the Agents' supervillains, in breathing gear.",
    provenance:
      "A transparent yellow dome clipped over the whole head on a grey ribbed " +
      "collar, with a round intake standing out from the throat and two dark " +
      "packs at the shoulders. Through the dome: a yellow face, black brows " +
      "drawn hard down, a flat mouth and red scoring along one cheek. An orange " +
      "boiler suit with a black zipped panel across the chest, a grey and gold " +
      "belt, and the same round badge at the shoulder as Gold Tooth - a black " +
      "flame with a face in it. Orange arms, black hands, orange legs.",
    tags: ["villain", "agents", "branded", "helmet", "breathing-gear", "orange", "flame-badge", "scarred"],
    images: ["images/the-helmeted-henchman-01.jpg"],
    acquired: "",
    notes: "Second of the two, and named descriptively because his face is behind a dome and nothing else identifies him. Gold Tooth has a name written on his; this one does not, so the helmet does the work until you supply one.\n\nThe suit is identical from the neck down - same orange, same black zip panel, same belt, same badge. Two more have since arrived in it, so there are four, and they are the first figures on that deck wearing an actual uniform with an actual insignia on it. The Iron League have four matched chest plates and the League of Shadows all dress in black and gold, but neither of them wears a badge. This outfit does.\n\nHe is also in breathing gear and nothing says what for. The trans-yellow dome and the throat intake are diving or flight kit, which on this deck puts him near the sea creatures and the pilots without being either."
  },

  {
    id: "the-henchwoman-in-sunglasses",
    name: "The Henchwoman in Sunglasses",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Agents",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Another of the Agents' supervillains.",
    provenance:
      "Swept dark brown hair falling over one side of the face, and under it a " +
      "yellow face in black wraparound sunglasses with a white glint across " +
      "them, and a full mouth painted black. The same orange boiler suit as " +
      "the rest of them - a black zipped panel running down one side, a grey " +
      "belt, and the round badge at the shoulder: a black flame with a face in " +
      "it, ringed in gold, on a torn silver patch. One grey arm and one orange, " +
      "grey hands, orange legs.",
    tags: ["villain", "agents", "branded", "woman", "sunglasses", "orange", "flame-badge"],
    images: ["images/the-henchwoman-in-sunglasses-01.jpg"],
    acquired: "",
    notes: "Third into the orange suit and the first woman in it. She is the tenth woman on the villain side and the first who belongs to an organisation with a uniform. The Pharaoh rules, the Orc Queen rules, Ventress kills, Harley Quinn is Harley Quinn, the Viking's Wife is described by her marriage, the Woman Built in the Bin was assembled out of a lost-and-found - and not one of the nine before her wore anybody's badge.\n\nOne detail is hers alone. Her flame badge sits on a torn silver patch, as though something under the orange has been through worse than the other suits have. The other three are clean."
  },

  {
    id: "the-henchman-with-the-diamond-eye",
    name: "The Henchman with the Diamond Eye",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Agents",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Another of the Agents' supervillains.",
    provenance:
      "A dark grey knitted beanie pulled to the brow, and a yellow face under " +
      "it with heavy stubble across the jaw, one eye narrowed and scarred - and " +
      "a pale blue diamond set where the other eye should be, cut and faceted, " +
      "printed straight onto the skin. A wide flat grin below. The orange " +
      "boiler suit again with the black zip panel, a gold and grey belt, and " +
      "the flame badge at the shoulder. Orange arms, grey hands, orange legs.",
    tags: ["villain", "agents", "branded", "beanie", "diamond", "scarred", "orange", "flame-badge"],
    images: ["images/the-henchman-with-the-diamond-eye-01.jpg"],
    acquired: "",
    notes: "Fourth in the orange suit, and named for the eye because I do not know his proper name. The figure almost certainly has one; the diamond is the identifying mark, so if you have it the card takes it.\n\nFour of them now, all in the same suit and all wearing the same flame. That badge has gone from a curiosity to the most disciplined-looking outfit on either deck - the Iron League have four matched chest plates and the League of Shadows all dress black and gold, and neither of them wears an actual insignia. This lot do, and there are four.\n\nStill no group, and it is the same reason as before: nobody has named the outfit. It is the only thing stopping a group of four with a badge from being made, and one word does it.\n\nThe beanie is worth a glance too. Two prison escapees came in wearing the same hat one batch ago, and so did the Goon in the Beanie. It is the most common thing any criminal in this collection puts on his head."
  },

  {
    id: "the-second-pharaoh",
    name: "The Second Pharaoh",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Pharaoh",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A pharaoh.",
    provenance:
      "A black nemes headdress falling square to both shoulders, with a raised " +
      "black disc set at the brow where a cobra would sit. Under it a yellow " +
      "face with thin arched brows, lines down both cheeks and a small black " +
      "moustache over a flat mouth. A bare yellow torso printed with a broad " +
      "collar in gold and dark blue and a scarab at the throat; bare yellow " +
      "arms, yellow hands. A white kilt printed across the hips with black and " +
      "blue banding and a gold clasp, over bare yellow legs.",
    tags: ["villain", "pharaoh", "egypt", "ancient", "nemes", "scarab", "moustache", "custom"],
    images: ["images/the-second-pharaoh-01.jpg"],
    acquired: "",
    notes: "Egypt stops being one person. The Pharaoh was catalogued with a line saying she was the first Egypt in this collection at all and that nothing else here was of that world; that line has been amended on her card, because this is the second.\n\nThey are not the same figure and not obviously the same story. She is wrapped - bandaged arms, bandaged legs, a turquoise and red headdress, and a curse she lays on anyone who robs her tomb. He is not wrapped at all: bare arms, bare legs, a black headdress and a moustache. She is dead and working from inside a grave. Nothing on this card says he is dead at all.\n\nSo there are two pharaohs and nothing says whether they are one dynasty, two, or two people who would not recognise each other. Called the Second Pharaoh because the name was taken, the way the Second Viking and the Second Serpent were."
  },

  {
    id: "the-master-of-faces",
    name: "The Master of Faces",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Master of Faces",
    group: "The League of Shadows",
    location: "",
    relations: [],
    rating: 0,
    background:
      "The master of faces.",
    provenance:
      "A black hood pulled forward, and inside it a pale face - heavy black " +
      "shadow smeared round both eyes, thin orange lines scored down the brow " +
      "and across one cheek, and a small dark mouth open on a row of even " +
      "teeth. Over the shoulders a ragged olive and tan wrap, crossed at the " +
      "chest, clasped with a small ring and hanging in torn points. Black " +
      "arms, black hands, black legs, and a long black cloth cape.",
    tags: ["villain", "league-of-shadows", "master", "hood", "cape", "scarred", "ragged", "custom"],
    images: ["images/the-master-of-faces-01.jpg"],
    acquired: "",
    notes: "Eighth master and the ninth member of the League of Shadows, which is already the largest thing on the villain side. The League does not run on ranks, it runs on masters of disciplines, and the list now reads: combat, the dark psyche, tradition, stealing and looting, dark wisdom, disguise, apprentices, and faces.\n\nThat last pair is the problem this card raises. There is already a Master of Disguise here, and his figure is the joke of the group - a black hood over the old plain smiley, two dots and a curve, the right head for that job and possibly an accident. Disguise and faces are close enough to the same discipline that somebody should say whether these are two men, or one man renamed, or two halves of a job that got split.\n\nHe also breaks the League's dress. Every master so far is black to the boots with the discipline worked over the top in gold - a gilded mask, a gilded strap of pouches, gold scrollwork. His overlay is a torn olive rag. He is the first of them wearing something that looks salvaged rather than made."
  },

  {
    id: "the-thug",
    name: "The Thug",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Thug",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A thug. Nothing more specific than that.",
    provenance:
      "A dark grey knitted beanie, and a pale face under it with one brow up " +
      "and one down, a grimace showing no teeth, a grey scar across the " +
      "forehead and orange scoring at both cheeks and the chin. A black leather " +
      "jacket printed open over a grey and white horizontally striped shirt, " +
      "with a broad gold-buckled belt at the waist. Black arms, pale hands, " +
      "plain blue legs.",
    tags: ["villain", "thug", "beanie", "leather-jacket", "stripes", "scarred", "custom"],
    images: ["images/the-thug-01.jpg"],
    acquired: "",
    notes: "The first thug on the villain side. There is one other in the collection and he is a Blue Pirate Thug on the good deck, which is one of the odder job placements in here.\n\nHe is also the third figure in two batches in a knitted beanie and a striped shirt, after the two Escapees - and the difference is the jacket and the trousers. Theirs are prison issue with a number stamped on the ribs; his are a leather jacket and blue jeans over the same stripes. Either he got out earlier and dressed himself, or the stripes are just what this world thinks a criminal wears. Nothing is written between him and them.\n\nGeneric is the word you used and the card keeps it. Five figures on that deck are now filed as goons or thugs, and only one of the five has anything else written about him - the Wolfman, who tracks by smell. The rest are muscle and the catalogue says so."
  },

  {
    id: "the-second-boxer",
    name: "The Second Boxer",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Athlete",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A boxer, and this one is not a sportsman.",
    provenance:
      "Red padded headgear closed round the skull with the ears covered and a " +
      "band across the brow, and under it a yellow face: black brows driven " +
      "down to a point, a thin black moustache, creases at both temples, and a " +
      "wide open grin with the teeth showing. A bare yellow torso printed with " +
      "muscle - pectorals, ribs and a line down the stomach - over a black " +
      "championship belt with a gold buckle at the waist. Bare yellow arms " +
      "into enormous red gloves. Red shorts with gold trim and yellow bands " +
      "above red boots.",
    tags: ["villain", "boxer", "athlete", "gloves", "champion", "bare-chested", "custom"],
    images: ["images/the-second-boxer-01.jpg"],
    acquired: "",
    notes: "Called the Second Boxer because the name was taken. There is already a Boxer here, filed good. Eleven athletes are catalogued in this world - two runners, a marathon runner, a soccer player and a lost one, a basketball player, a karate kid, a bodybuilder, a wrestler, a sumo wrestler, a space boarder and that first Boxer - and every one of the eleven is on the good deck. Sport was the last ordinary job in this world with a clean record, and he is the twelfth.\n\nThe belt is the detail. He is wearing a championship title round his waist, which means he did not just fight, he won, and somebody handed it to him. That is a career and an institution behind him, and neither has been written down. Nothing says whether he took the title honestly and turned afterwards, or whether the belt is the reason he is on this side.\n\nThe gloves make him one of very few figures here who cannot hold anything. His hands are the weapon and nothing else fits in them."
  },

  {
    id: "the-cyborg",
    name: "The Cyborg",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A cyborg.",
    provenance:
      "A black head with the face half stripped to machine: a red targeting " +
      "lens over one eye with a fin standing off it, a purple ring round the " +
      "socket beside it holding a small red optic, and a silver grille bared " +
      "across the mouth where a jaw should be. Black arms and silver hands.\n\n" +
      "From the neck down he is Ultron. The torso is the same print exactly - " +
      "silver plating over black with blue lights set into the chest - and so " +
      "are the legs, down to the banding at the hips and the silver feet. " +
      "Only the head is different.",
    tags: ["villain", "cyborg", "machine", "red-eye", "silver", "custom"],
    images: ["images/the-cyborg-01.jpg"],
    acquired: "",
    notes: "This is the second figure in the collection built out of another card's body. The first was the Orc-Alien Hybrid, who is the Alien Medic's head on the Short Orc's torso; this one is a different head on Ultron's, and the match runs all the way to the feet.\n\nWhat that means is not written anywhere and is not being guessed. It could be a part borrowed off a shelf and nothing more. It could be that the thing Ultron is made of gets used for other machines, which would make the three identical Ultrons less like a character and more like a production line with a spare body. You handed him in as a cyborg rather than as an Ultron, so he is his own card.\n\nHe joins a villain side thick with machines - the Missile, two Killer Bots, the Robotic Samurai, the Television, the Successful Replica, the Robot Builder, the Tanker Droid, three Ultrons - and he is the fourth cyborg specifically, after Doc Ock, the Brainwashed Assassin and the Evil Cyborg Soldier. Every one of those traces back to the Discarded's arm, which is the only origin cybernetics have in this world."
  },

  {
    id: "the-haunted-miner",
    name: "The Haunted Miner",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Miner",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A miner, and a skeleton. Haunted.",
    provenance:
      "A grey miner's helmet with a broad brim and a lamp housing set at the " +
      "front, worn over a white skull - black sockets with small red points " +
      "burning in them, a drawn nose hole, and a mouth stitched shut in a line " +
      "of teeth. A white torso printed with a ribcage in pale green light and a " +
      "black pick slung across the chest, and below that a black plate with a " +
      "single orange eye set in the middle of it, open and slitted like a " +
      "cat's. Black legs worked in pink and green circuitry. One white arm and " +
      "one black, white hands.",
    tags: ["villain", "miner", "skeleton", "haunted", "helmet", "glowing", "custom"],
    images: ["images/the-haunted-miner-01.jpg"],
    acquired: "",
    notes: "Mining in this world has been almost entirely a good job. Seven miner cards sit on that deck - six Power Miners and the Lost Miners - and until now the only one over here was the Astronaut Miner. This is the second, and he is a different kind of thing from all of them: the others are men with a job and he is a man the job finished.\n\nThe orange eye on his chest is the part nobody has explained. It is not a lamp and it is not a badge - it is set into a black plate at the sternum, open, with a slit pupil, and it is looking out. Something is wearing him, or something is riding in him. The Devoured had a mouth where his face should be and was named for what took him; this one has an eye where his heart should be and has not been named for anything yet.\n\nHe is also the second skeleton on the villain side after the Hooded Skeleton, and the second dead thing in three batches after the Ghost. Whatever is happening to the dead in this world, it started recently."
  },

  {
    id: "the-man-in-the-astromech-head",
    name: "The Man in the Astromech Head",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A man wearing an astromech's head.",
    provenance:
      "An astromech dome clipped down over a minifigure's head like a helmet - " +
      "white, banded in dark green round the crown and the rim, with a black " +
      "and green main eye, an orange light, a silver port and a small panel " +
      "printed across the front. The white neck stud of the figure underneath " +
      "shows in the gap.\\n\\n" +
      "Below it he is a soldier out of a different world entirely: a moulded " +
      "pale blue tactical vest over a grey undersuit, stitched panels and " +
      "pouches across the chest, with ACU printed in a box in the middle of " +
      "it. Dark grey arms, grey hands, plain white legs.",
    tags: ["villain", "astromech", "dome", "helmet", "tactical-vest", "acu", "mixed-parts", "custom"],
    images: ["images/the-man-in-the-astromech-head-01.jpg"],
    acquired: "",
    notes: "Eight astromechs are catalogued here and every one of them is a droid. This is the ninth dome in the collection and the first with a person underneath it.\\n\\nWhat he is wearing below the neck comes from somewhere else again - an ACU vest, an asset containment unit, which is not from the same world as the dome or from this one. So he is three things at once: a soldier's body, a security unit's kit, and a droid's head worn as a mask.\\n\\nThat lands next to a card already here. The Man in the Astromech Head is doing on purpose what the people of the Bin do by necessity - wearing whatever came to hand - except the Bin's residents are built that way and this one chose a droid's face. Nothing says which, so nothing is written between them.\\n\\nHe is also the second figure on that deck to hide behind another thing's head, after the Devoured, whose face is a mouth. The difference is that the Devoured did not choose it."
  },

  {
    id: "the-second-cyborg-soldier",
    name: "The Second Cyborg Soldier",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Soldier",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Another cyborg soldier, and this one is old-world.",
    provenance:
      "A silver conical helmet with a long neck flap hanging either side, the " +
      "kind a foot soldier wears in a castle. Under it a yellow face split in " +
      "two: the left side machine, a silver plate bolted over the temple with " +
      "a red lens burning in the middle of it, and the right side a man - one " +
      "eye, a black lip, and teeth bared in a strip of silver.\\n\\n" +
      "A grey breastplate printed over the torso with straps, a red shield " +
      "crest at the heart and a belt of pouches beneath. Bare yellow arms, one " +
      "black hand and one yellow. Legs in dark green and blue tartan going " +
      "down to brown boots.",
    tags: ["villain", "cyborg", "soldier", "medieval", "helmet", "tartan", "red-eye", "custom"],
    images: ["images/the-second-cyborg-soldier-01.jpg"],
    acquired: "",
    notes: "Called the Second Cyborg Soldier because the name was taken one batch ago. The first wears a racing vest with flames on it and has the right side of his head replaced; this one wears a conical helm and tartan and has the left side of his.\\n\\nThat is the interesting part. Cybernetics in this world come from one place - the Discarded's arm, studied and built from - and everything machine-limbed on the villain side has so far been modern: bikers, assassins, robots, a man in racing kit. This one is in castle armour with a tartan on, which means the technology has reached somewhere that does not otherwise have it. Either the timeline is not what it looks like, or somebody carried it back.\\n\\nFifth cyborg on that deck, after Doc Ock, the Brainwashed Assassin, the Evil Cyborg Soldier and the Cyborg."
  },

  {
    id: "the-primitive-alien",
    name: "The Primitive Alien",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A primitive alien.",
    provenance:
      "Pale lavender from the crown to the boots, with no hair and no helmet. " +
      "The face is scarred over in short white slashes - across the brow, down " +
      "one cheek, along the jaw - with two yellow eyes under heavy drawn brows " +
      "and a wide mouth pulled back off uneven cream teeth.\\n\\n" +
      "The armour is made rather than manufactured: tan hide panels lashed on " +
      "with cord and crossed sticks, knotted at the shoulders and again at the " +
      "waist, with pale blue crystals set into it - one large at the chest, " +
      "smaller ones down the ribs and a pair strapped to each thigh. Lavender " +
      "arms and hands.",
    tags: ["villain", "alien", "primitive", "crystals", "scarred", "lavender", "hide-armour", "custom"],
    images: ["images/the-primitive-alien-01.jpg"],
    acquired: "",
    notes: "Seventh alien body on that deck with nothing written between it and any of the others. The catalogue holds mercenaries nobody has photographed, a militia with a school, five Alien Soldiers, four Alien Goons, a Grey Alien Soldier and a Blue-Eyed Alien, all kept apart because nothing in the world joined them up. He makes seven doors.\\n\\nWhat separates him from the other six is that he is not equipped, he is dressed. Every alien on that side so far wears printed armour or a uniform of some kind; his is hide and cord and sticks, tied on by hand, with crystals wedged into it. Nothing here is manufactured.\\n\\nThe crystals are the open question. They are set at the chest, the ribs and both thighs, which is where you would put armour plates - so either they are the armour, or they are what he is carrying, or they are what he is. The Rock Monsters waiting in the pending file are crystal too, and nobody has said whether that means anything."
  },

  {
    id: "the-underwater-king",
    name: "The Underwater King",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "King",
    group: "",
    location: "",
    relations: [
      { to: "the-underwater-commander", label: "Commands his military force for him" },
    ],
    rating: 0,
    background:
      "A king, underwater.",
    provenance:
      "A transparent neon green helmet closed over the whole head, ridged and " +
      "faceted, clipped onto a dark silver collar rig with a round intake " +
      "standing out from the throat and a hose running back over one shoulder. " +
      "Through the green: a face that is not a face - a white skull mask drawn " +
      "across it with black sockets, a fanged jaw, and two yellow wings " +
      "sweeping back from the eyes.\\n\\n" +
      "A blue torso printed with the silver rig over it, a pressure gauge at " +
      "one side and a readout at the other. One black arm and one blue, grey " +
      "and black hands, black legs with a blue seam at the hips.",
    tags: ["villain", "king", "sea", "diver", "helmet", "skull-mask", "breathing-gear", "custom"],
    images: ["images/the-underwater-king-01.jpg"],
    acquired: "",
    notes: "This may be the card that closes the sea, and it is being flagged rather than assumed.\\n\\nFive creatures have arrived down there across four batches - a shark, two squids, an anglerfish and a manta - all built the same way, all on this deck, and every single time the catalogue has refused to group them because habitat is not affiliation and nobody had said they answered to anything. The one line that kept being written was that the squid wears the only insignia, so if there is an order down there it starts with him.\\n\\nNow there is a king. If he is their king, the group exists, the Atlantis Dive Team finally has a named enemy after twelve people and a second crew of three have been diving into nothing, and one of the oldest open questions in this catalogue closes on a word.\\n\\nWhat gives pause is that he is not a creature. He is a man in a diving rig - breathing gear, a pressure gauge, a hose - with a skull painted over his face. The five down there are animals with moulded heads. A king who has to bring his own air is not obviously the king of the things that live in the water, and that is exactly why no line has been drawn.\\n\\nHe is the tenth ruler on the villain side, after two kings, two pharaohs, a queen, an emperor, a dictator, a governor and a supreme chancellor - and the Shadow King is the only other one whose kingdom is a place rather than a people."
  },

  {
    id: "the-shadow-commando",
    name: "The Shadow Commando",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Commando",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A commando, in black.",
    provenance:
      "The commando helmet - a closed dome with a heavy brow and a wide " +
      "faceplate - moulded in black, with a broad pale blue T drawn down the " +
      "centre of the visor and out across the cheeks, thin silver antenna " +
      "lines scratched over the crown, and three studs set along the jaw. A " +
      "black torso printed in fine white line work: a ribbed collar, a plated " +
      "chest rig, a harness across the ribs and four small lights at one " +
      "shoulder. Black arms and hands, black legs with knee plates and boot " +
      "caps drawn on in white. He is carrying a long black rifle.",
    tags: ["villain", "star-wars", "branded", "clone", "commando", "black", "helmet", "shadow"],
    images: ["images/the-shadow-commando-01.jpg"],
    acquired: "",
    notes: "Third black-kit unit in this collection, and the name you gave him is the one the other two already carry. The Shadow Troopers are stormtroopers moulded in black instead of white, catalogued good, with a card saying they are the exact photographic negative of the standard figure. The Shadow ARF Trooper is a recon clone issued the same way, catalogued bad. This is the commando version, and it is bad too.\\n\\nSo the black kit now runs across three different unit types, one good and two on this side, and every time one has arrived the same offer has been made and not taken: if the black means one outfit rather than three coincidences, say so and they go in a group together. It is now the oldest unclaimed group in the catalogue.\\n\\nHe is also the fourth clone on the villain side, after the Clone Traitor who turned, Jek-14 who was built by the other side, and the Shadow ARF Trooper. Four Clone Commandos are catalogued - Sev, Fixer, Scorch and Boss - and every one of them is good. This is the first commando against them."
  },

  {
    id: "the-yeti",
    name: "The Yeti",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A yeti.",
    provenance:
      "One moulded piece, off-white and worn yellow at the creases, shaped as " +
      "a shaggy animal standing upright. The face is a heavy brow over sunk " +
      "sockets with no eyes printed in them at all, a flat snout, and a jaw " +
      "hanging open on two square teeth with a gap between them. Fur is cut " +
      "into the plastic in long wavy lines down the chest and the arms, and " +
      "the legs end in two blunt flat feet. Nothing on him is painted.",
    tags: ["villain", "yeti", "creature", "snow", "moulded", "non-minifigure", "white", "custom"],
    images: ["images/the-yeti-01.jpg"],
    acquired: "",
    notes: "There is already a Wampa here - white, shaggy, a predator, and the card that made the point that nobody sent him. A yeti and a wampa are the same idea twice, from two different worlds, and they are both on this deck. Nothing is written between them and nothing should be, but somebody should say whether this world has two of that animal or one animal with two names.\\n\\nAnother of the things on that deck that are simply animals rather than people - the Wampa, the Evil Bug, and the five in the water. And tenth thing in the collection that is not minifigure-shaped, after the Kaminoan, the Martian Leader, Jabba, the Wampa, Lotso, Gollum, the Giant Orc, Matthew and the Tanker Droid.\\n\\nHis eyes are the detail. The sockets are moulded but nothing is printed in them, so there is nothing looking out - which on a figure this size reads as worse than a painted stare would."
  },

  {
    id: "the-evil-kings-son",
    name: "The Evil King's Son",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Prince",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "The son of an evil king. Which king has not been said.",
    provenance:
      "Swept brown hair over a yellow face with two black eyes, a red scar " +
      "running back from one of them, and a dark strap or a beard drawn round " +
      "the jaw. A moulded black shoulder piece with spikes standing up at both " +
      "sides, clipped over a black torso printed with three blue-outlined " +
      "panels, a wide yellow belt below them and a red mark at the collar. " +
      "Yellow hands, black arms, black legs.",
    tags: ["villain", "prince", "heir", "spiked-armour", "scar", "custom"],
    images: ["images/the-evil-kings-son-01.jpg"],
    acquired: "",
    notes: "Three kings sit on the villain side - the Shadow King, the Light King and the Underwater King - and nothing on this card says which of them is his father. The plastic has an opinion though. He is wearing the same black torso print and the same spiked shoulder piece as the Underwater King's military commander, who arrived in this same batch, and a uniform shared with a king's commander is the strongest thing pointing anywhere. It is still not a word from you, so no line is drawn.\\n\\nIf it is the Shadow King, this card is much heavier than it looks. That one already has a son here: the Shadow Prince, who helped negotiate the end of the Great Shadow War, is on the good deck, and his card says you can tell just by looking at him that he is not full shadow. Two sons, one good and one not, would be the first family in this collection split across the two decks by choice rather than by betrayal.\\n\\nSecond figure on this deck whose title is Prince, after Zuko. The Prince Pretender is over here too and is not a prince at all - he claims the throne rather than being born to it - which makes this one the first heir on the villain side who actually is somebody's son."
  },

  {
    id: "the-pimp",
    name: "The Pimp",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Pimp",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A pimp. He has no face.",
    provenance:
      "A dark purple fedora with a wide brim, and under it no head at all - a " +
      "plain blue cylinder standing where a face should be, unmarked on every " +
      "side. A pale grey lab coat printed open over a dark waistcoat and a " +
      "belt, with an identification badge clipped at the chest: a small blue " +
      "card with a figure on it and DR. printed underneath. Grey arms, flesh " +
      "hands, purple legs. He is carrying a green case.",
    tags: ["villain", "pimp", "faceless", "fedora", "lab-coat", "briefcase", "custom"],
    images: ["images/the-pimp-01.jpg"],
    acquired: "",
    notes: "He is a pimp. This card said doctor at first because of the badge, and that was my error rather than yours - you said pimp and I read the plastic over the words.\n\nWhich leaves the clothes as the real question. He is wearing a lab coat, and clipped to it is photo identification with a picture on it and DR. printed underneath, and there is no face on him to check the photograph against. Whatever is under that hat is a blank blue cylinder. So this is a man in a stolen profession: the coat and the badge belong to somebody, and the fedora and the case are his.\n\nSix doctors and medics are catalogued in this world - Dr. Oz, the Medic and the Delta Medic on one side, the Butcher, the Evil Doctor and the Alien Medic on the other - and the two who work together invented mind control between them. Somebody is missing a coat and a badge, and nothing is written between him and any of them.\n\nHe is the first pimp in this collection, and the second figure here dressed like a professional with nothing behind the clothes, after the Master of Disguise, whose face is the old plain smiley. The difference is that a smiley is still a face."
  },

  {
    id: "the-underwater-commander",
    name: "The Underwater King's Commander",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Commander",
    group: "",
    location: "",
    relations: [
      { to: "the-underwater-king", label: "Commands his military force" }
    ],
    rating: 0,
    background:
      "Commander of the Underwater King's military force.",
    provenance:
      "A red helmet closed over the whole skull with a rectangular window cut " +
      "in the front, and behind it a yellow face with black eyes and a silver " +
      "grille drawn across the mouth. A moulded black shoulder piece with " +
      "spikes standing at both sides and a ribbed collar beneath it, over a " +
      "black torso printed with three blue-outlined panels, yellow bands " +
      "between them and a red mark at the throat. Yellow hands, black arms, " +
      "black legs.",
    tags: ["villain", "commander", "sea", "helmet", "spiked-armour", "custom"],
    images: ["images/the-underwater-commander-01.jpg"],
    acquired: "",
    notes: "The first line ever drawn into the water, and you drew it: he commands the Underwater King's military force, said in as many words, so it is on the card as a relation rather than as a guess.\\n\\nThat matters because of what is still not connected. Five creatures are catalogued down there - a shark, two squids, an anglerfish and a manta - and across four batches the catalogue has refused every time to group them, because habitat is not affiliation. There is now a king with a commander and an army, and five animals in the same water, and not one word joining the two halves. If the creatures are his force, the group exists and the Atlantis Dive Team finally has a named enemy.\\n\\nThe other thing on this card is the uniform. The Evil King's Son, in this same batch, is wearing the identical torso print and the identical spiked shoulder piece. A commander and a prince in the same kit is the closest thing to an answer about which king fathered that boy, and it is still not an answer."
  },

  {
    id: "thresher",
    name: "Thresher",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Thresher.",
    provenance:
      "A black hood or helmet closed over the whole skull, and inside it a " +
      "yellow face drawn as a skull - black sockets with small eyes at the top " +
      "of them, a nose hole, and a wide grid of teeth running ear to ear. A " +
      "moulded black shoulder piece with spikes at both sides and a ribbed " +
      "collar under it, over a black torso printed with three blue-outlined " +
      "panels, yellow bands between them and a red mark at the throat. A wide " +
      "yellow belt below. Black arms, black hands, black legs. He is holding a " +
      "transparent green hook.",
    tags: ["villain", "named", "skull-face", "spiked-armour", "hood", "hook", "custom"],
    images: ["images/thresher-01.jpg"],
    acquired: "",
    notes: "He has a name, which is rare here. The home-made villains with personal names come to a handful - Quinn, Phalanx, General Shepherd, Johnny Plasma, Wen, Long Arm Johnson, Deus Pater and Matthew - and he is the ninth.\\n\\nHe is also the third figure to arrive in one particular uniform. The Underwater King's Commander wears the identical black torso print and the identical spiked shoulder piece, and so does the Evil King's Son. Three men in the same kit, one of them stated to command a king's military force, one of them a king's son, and this one with a name and a hook. That is a unit in everything but a word from you.\\n\\nThe skull face is the other link. The Underwater King has a skull drawn across his face too, behind a green helmet. So does the Underwater King's Commander have a silver grille over the mouth. Whatever this outfit is, its people do not show their faces and what they show instead is a death's head.\\n\\nThe hook is transparent green, which is the only piece of colour on him."
  },

  {
    id: "the-tanker-robot",
    name: "The Tanker Robot",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "An evil robot.",
    provenance:
      "A grey head printed as a machine face: two small black dots for eyes, " +
      "and below them an enormous red mouth curved in a smile with a row of " +
      "silver teeth clamped under it and vent lines drawn either side. Over " +
      "the torso a moulded grey shoulder and chest piece, thick and rounded " +
      "with a raised collar, hiding whatever is printed underneath. A gold " +
      "belt across the hips with two red lights set in it, grey legs printed " +
      "with cross-hatched plating, panel vents at the thighs and armour caps " +
      "at the shins. Black arms, grey hands.",
    tags: ["villain", "robot", "machine", "grey", "armoured", "red-mouth", "custom"],
    images: ["images/the-tanker-robot-01.jpg"],
    acquired: "",
    notes: "Not the same thing as the Tanker Droid, which is a built machine standing three times a minifigure's bulk on slab feet. This one is minifigure-shaped and wears armour, which the Droid does not - it is armour all the way through.\\n\\nThe face is the whole card. Every other machine on that deck reads as a machine: the Missile has no face, the Killer Bots have visors, Ultron has a lit grille, the Tanker Droid has one red slit, the Cyborg has a targeting lens. This one is smiling. A red mouth curved upward with the teeth showing underneath is the only cheerful expression on any enemy machine in this collection, and it is the worst thing about him.\\n\\nHe joins a villain side that now holds the Missile, two Killer Bots, the Robotic Samurai, the Television, the Successful Replica, the Robot Builder, the Tanker Droid, three Ultrons and the Cyborg."
  },

  {
    id: "the-black-clone-trooper",
    name: "The Black Clone Trooper",
    variant: "",
    faction: "bad",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Clone Trooper",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A clone trooper, in black.",
    provenance:
      "The Phase 2 clone helmet moulded in black, with a dark red trace " +
      "running along the top edge of the visor and the vents and studs picked " +
      "out in grey at the jaw. A black torso printed in fine white line work - " +
      "chest plates, a belt rig with pouches, panels and a keypad drawn across " +
      "the stomach - and black legs with white outlines at the knees and the " +
      "boot caps. Black arms, black hands.",
    tags: ["villain", "star-wars", "branded", "clone", "trooper", "black", "helmet", "shadow"],
    images: ["images/the-black-clone-trooper-01.jpg"],
    acquired: "",
    notes: "You called him a shadow soldier and that name is taken, which is why the card reads the way it does. The Shadow Soldiers here are seven blank black figures out of the shadow dimension - no face, no printing, people with everything taken out - and he is a printed clone in black armour. Two very different things cannot hold the same name, so he is filed for what he is until you give him another.\\n\\nWhat he does is complete a set. The black kit now runs across four unit types: the Shadow Troopers, who are stormtroopers in black and filed good; the Shadow ARF Trooper, a recon clone; the Shadow Commando, who arrived last batch; and now the standard trooper. Three of the four are on this side. That offer has been made four times and never taken, and it is the oldest open group in the catalogue.\\n\\nHe is also the fifth clone on the villain side, against eighteen good ones."
  },

  {
    id: "the-kartians",
    name: "The Kartians",
    variant: "Four of them",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Soldier",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "Kartians. Martians of some kind, four of them.",
    provenance:
      "Four figures, all transparent green all the way through - head, body, " +
      "arms and legs moulded in one clear colour with nothing printed on any " +
      "of them. They are not minifigures. Each is a single small build with a " +
      "peaked helmet or crest swept back off the skull, a heavy brow, a round " +
      "port set into the chest, and short arms hanging at the sides. They " +
      "stand on a grey plate in two rows of two.",
    tags: ["villain", "martian", "alien", "translucent", "green", "non-minifigure", "unprinted", "custom"],
    images: ["images/the-kartians-01.jpg"],
    acquired: "",
    notes: "The name came in as kartians martians and the card keeps the first word, because that is the one that is not already a card here. The Martians are catalogued separately - three of them, green heads with fangs and magenta arms, in a group with the Martian Leader who took an army into Lego City. These four are not those. They are clear green and they are not minifigure-shaped at all.\\n\\nSo either Kartian is what that species is called and the Martians are something else, or these are the same people seen another way. Nothing has been said and the two cards are kept apart, which is the eighth alien body on that deck with nothing written between it and the others.\\n\\nThey also make the transparent figures a pattern rather than an oddity. Darth Vader's card once claimed he was the only figure here you could see the shelf through; a hologram of Darth Revan corrected that, and these four correct it again. Four at once is more than the rest of the collection has managed in total."
  },

  /* ---- Figures lost to time. Gone from the shelf, dead in the world. ---- */

  {
    id: "the-militiaman-in-the-black-helm",
    name: "The Militiaman in the Black Helm",
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
      "Space Militia. Lost, and dead.\n\n" +
      "He is one of the figures that did not survive the years - gone from " +
      "the shelf, and gone from the world with it.",
    provenance:
      "Black domed helmet with the visor down over a yellow face in dark " +
      "sunglasses, black neck bracket. Ribbed black chest armour with a " +
      "control panel at the sternum and a segmented belt, one yellow arm and " +
      "one black.\n\n" +
      "Photographed off an old video rather than in hand, because there is no " +
      "hand to photograph him in any more.",
    tags: ["space-militia", "lost", "deceased", "helmet", "sunglasses"],
    images: ["images/the-militiaman-in-the-black-helm-01.jpg"],
    acquired: "",
    notes: "First of the lost. These entries are here because a catalogue that only holds what survives is not a record of the collection, it is a record of the shelf."
  },


  {
    id: "the-militiaman-in-the-red-helm",
    name: "The Militiaman in the Red Helm",
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
    background: "Space Militia. Lost, and dead.",
    provenance:
      "Dark red helmet over a black cowl, a yellow face with a cut across one " +
      "cheek and a flat, unhappy mouth. Black sleeveless top with a grey " +
      "ammunition belt printed across it, black legs, a long rifle in one hand.",
    tags: ["space-militia", "lost", "deceased", "rifle", "scarred"],
    images: ["images/the-militiaman-in-the-red-helm-01.jpg"],
    acquired: "",
    notes: "The only one of the lost carrying a weapon in his photograph."
  },


  {
    id: "the-ranger-patrol-captain",
    name: "The Ranger Patrol Captain",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Patrol Captain",
    group: "The Green Rangers",
    location: "",
    relations: [],
    rating: 0,
    background: "A patrol captain of the rangers. Lost, and dead.",
    provenance:
      "Green helmet with a broad brim and flaps down both sides, fair hair " +
      "showing under it. Green field jacket printed with a bandolier of " +
      "pouches over camouflage, a white-and-black webbing belt, pale grey legs.",
    tags: ["green-rangers", "ranger", "captain", "lost", "deceased", "camouflage"],
    images: ["images/the-ranger-patrol-captain-01.jpg"],
    acquired: "",
    notes: "Filed with the Green Rangers on the green, which is the only thing tying him to them - say so if the patrol was its own outfit. He is the highest rank among the lost, and the Green Rangers had no captain until now: they are the lowest tier of the military and every one of them catalogued so far is rank and file."
  },


  {
    id: "the-militiamen-out-of-armour",
    name: "The Militiamen Out of Armour",
    variant: "Two of them",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Space Militia",
    group: "The Space Militia",
    location: "",
    relations: [],
    rating: 0,
    background: "Space Militia. Lost, and dead. There are two of them.",
    provenance:
      "Neither is in uniform. One has black hair and a blue work harness over " +
      "denim with an identity card clipped at the hip and a pack on his back; " +
      "the other is blond with wraparound sunglasses and a headset mic, in a " +
      "black sleeveless top printed with flames and a chequered flag.\n\n" +
      "Photographed together, on a table, years ago.",
    tags: ["space-militia", "lost", "deceased", "civilian-dress", "headset"],
    images: [{ src: "images/the-militiamen-out-of-armour-01.jpg", caption: "Both of them" }],
    acquired: "",
    notes: "More of the lost are Space Militia than any other unit - four of them, across three cards - which is a hard thing to notice - of every unit in this collection, the militia is the one that actually lost people. The General lost his adopted son too, and that death is why the whole outfit has the safety culture it has."
  },


  {
    id: "the-lost-miners",
    name: "The Lost Miners",
    variant: "Two of them",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Power Miner",
    group: "The Power Miners",
    location: "",
    relations: [],
    rating: 0,
    background: "Two of the power miners. Lost, and dead.",
    provenance:
      "Blue helmets with the ear guards down, one with the clear visor pulled " +
      "over it. Blue working overalls - one in a plain bib with a pencil in " +
      "the pocket, the other in a harnessed vest hung with tools - over blue " +
      "legs. A streak of red hair shows under one helmet.",
    tags: ["power-miner", "lost", "deceased", "overalls", "helmet"],
    images: [{ src: "images/the-lost-miners-01.jpg", caption: "Both of them" }],
    acquired: "",
    notes: "The mining crew is eight now, and two of the eight are gone. Their blue is a different blue from the six who survive - lighter, and in overalls rather than the grey and blue harnesses the others wear - so they read as an earlier generation of the crew."
  },



  {
    id: "the-discarded-in-the-blue-cap",
    name: "The Discarded in the Blue Cap",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Discarded",
    group: "The Discarded",
    location: "",
    relations: [],
    rating: 0,
    background:
      "One of the Discarded - thrown away in another civilization and given " +
      "refuge in this one. Lost, and dead.",
    provenance:
      "Blue cap with the ear flaps down, a yellow face with a sharp goatee and " +
      "an angry set to the brow. Orange jacket with a diagonal zip and a torn " +
      "grey panel at the shoulder, carrying a round badge of a black crown in " +
      "flame. Reddish-brown legs, black hands.\n\n" +
      "The badge is not a marking anyone else in this collection wears, and I " +
      "could not place the set it came from.",
    tags: ["discarded", "refugee", "lost", "deceased", "cap", "goatee"],
    images: ["images/the-discarded-in-the-blue-cap-01.jpg"],
    acquired: "",
    notes: "The first of the Discarded to be lost. That group is five now and one of the five is gone, which lands differently than it would anywhere else - these are people who were thrown away once already and taken in, and this one did not get to stay either."
  },


  {
    id: "the-elf-man",
    name: "The Elf Man",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Elf",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "An elf. The first one ever photographed for this collection - and he is " +
      "lost, and dead.\n\n" +
      "The elf people have been in this world since the Elf Knight was " +
      "catalogued, referred to and never seen. This is the only face any of " +
      "them has.",
    provenance:
      "Long dark hair swept back off the face, a plain yellow head with a " +
      "half-smile and one raised eyebrow. Pale tan open vest over a grey shirt, " +
      "black arms, dark grey hands, reddish-brown legs.\n\n" +
      "Nothing about the moulding is elven - it is an ordinary head and an " +
      "ordinary hairpiece. He is an elf because you said he is.",
    tags: ["elf", "lost", "deceased", "long-hair", "vest"],
    images: ["images/the-elf-man-01.jpg"],
    acquired: "",
    notes: "The payoff on a thread that has been open a long time: the Elf Knight has ties to the elf people of this world and not one of them had ever been photographed. Now one has, and he is dead. No link written between the two - the Knight has ties to the elves as a people, which is not the same as having met this man. Say they knew each other and they connect."
  },


  {
    id: "the-long-shot-bowman",
    name: "The Long Shot Bowman",
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
    background: "An archer of the Royal Knights, and a long shot. Lost, and dead.",
    provenance:
      "Broad-brimmed steel kettle helm over a mail coif, a dark face with a " +
      "black beard. Mail shirt crossed by tan leather straps and a buckled " +
      "belt, red arms, mail leggings printed over pale surcoat tails.",
    tags: ["knight", "archer", "bow", "medieval", "royal-knights", "lost", "deceased", "kettle-helm"],
    images: ["images/the-long-shot-bowman-01.jpg"],
    acquired: "",
    notes: "Named the way you named him. Fifth ranged man among the Royal Knights - four bows and a crossbow across eighteen of them - and the only one of the eighteen who is dead."
  },


  {
    id: "the-lost-pirates",
    name: "The Lost Pirates",
    variant: "Two of them",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Pirate",
    group: "The Pirate Crew",
    location: "",
    relations: [],
    rating: 0,
    background: "Two of the crew. Lost, and dead.",
    provenance:
      "One in a dark green knit cap, bare-chested under an open brown waistcoat " +
      "with three white buttons, an anchor inked over his heart and a chain at " +
      "his neck, green legs.\n\n" +
      "The other in a blue headscarf, moustached and heavily freckled, in a red " +
      "and white striped shirt over a wide belt and pale grey legs. He was " +
      "photographed lying on his side.",
    tags: ["pirate", "crew", "lost", "deceased", "tattoo", "anchor", "stripes"],
    images: [
      { src: "images/the-lost-pirates-01.jpg", caption: "The anchor tattoo" },
      { src: "images/the-lost-pirates-02.jpg", caption: "The striped shirt" },
    ],
    acquired: "",
    notes: "One card because you sent them as a pair, but they were photographed separately and split cleanly if you want two. The first shares the anchor tattoo with the Tattooed Pirate, who is alive and in the same crew - either the same ink twice or the same man in a second photograph, and you would know which. The crew is six now and two of the six are gone."
  },



  {
    id: "the-lost-aqua-diver",
    name: "The Lost Aqua Diver",
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
    background:
      "Aqua Force - the service that handles any military necessity involving " +
      "going underwater. Lost, and dead.",
    provenance:
      "The same black wetsuit the rest of Aqua Force wear: blue trident at the " +
      "sternum, yellow piping, blue flashes at the ribs and a row of white " +
      "pouches across the belt. He is out of the helmet the others keep on - " +
      "a bare pink head, balding, a hard flat mouth and a crease down one " +
      "cheek that reads as a scar. Tan arms and tan legs instead of the grey " +
      "and black the Diver wears.",
    tags: ["aqua-force", "underwater", "diver", "trident", "lost", "deceased", "scarred"],
    images: ["images/the-lost-aqua-diver-01.jpg"],
    acquired: "",
    notes: "First Aqua Force loss - the service is five now and one of the five is gone. He is also the only one of them photographed without a helmet, which means he is the only member of an underwater unit whose face anyone has seen. Filed among the lost because of how he was photographed; one word moves him back to the living."
  },


  {
    id: "the-gungan-jedi",
    name: "The Gungan Jedi",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Star Wars",
    rank: "",
    role: "Jedi",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A Gungan who is a Jedi. Lost, and dead.\n\n" +
      "There is no such thing in the films - the Gungans in this collection are " +
      "Jar Jar and two soldiers, and none of them are Force users. This one is " +
      "yours.",
    provenance:
      "Moulded Gungan head in pale olive, eyes up on stalks, long earflaps. " +
      "Cream robe printed with brown dotted seams, a winged crest at the " +
      "collar and two silver clasps at the chest, over dark grey legs. Pale " +
      "flesh arms and hands. A black cloth cape, spread out flat underneath " +
      "him in the photograph.\n\n" +
      "The robe is not a piece I could place. Photographed off an old video " +
      "rather than in hand.",
    tags: ["star-wars", "gungan", "jedi", "alien", "cape", "lost", "deceased"],
    images: ["images/the-gungan-jedi-01.jpg"],
    acquired: "",
    notes: "Named the way you named him. The Gungans are four figures on three cards now, and this is the only one of them who is not out of a film. No group written: this world has its own Jedi - the Jedi, and the Snow Jedi's Line - and nobody has said whether he trained with any of them or stood alone. Say so and he joins them."
  },



  {
    id: "the-alien-professor",
    name: "The Alien Professor",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Professor",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "An alien, and a professor. Lost, and dead.",
    provenance:
      "A photograph at last. He is an ordinary minifigure, which the first " +
      "description of him got wrong.\n\n" +
      "A white face with three eyes - two set where eyes go, lashed and ringed " +
      "in red, and a third smaller one closed in the middle of the forehead - " +
      "over a wide red mouth. Sandy blond hair swept across the crown. A dark " +
      "tan suit jacket printed with a collar, a dark tie, three buttons and two " +
      "pocket flaps, tan arms, white hands, plain tan legs. He is dressed for a " +
      "lecture.\n\n" +
      "The first entry was written off a soft video frame and described a " +
      "sculpted moulded head and long robes. Neither is right.",
    tags: ["alien", "professor", "academic", "three-eyes", "suit", "lost", "deceased"],
    images: [
      { src: "images/the-alien-professor-02.jpg", caption: "Found, and photographed" },
      { src: "images/the-alien-professor-01.jpg", caption: "The old video frame" }
    ],
    acquired: "",
    notes: "The only professor in this world who is not out of Hogwarts - the Hogwarts Professor and Professor Sprout are both branded, so he is the collection's own academic, and his card says he is dead.\n\nHe was catalogued off a video frame, as lost, with a guess at what he looked like. He has now been found and photographed and the guess was wrong twice over: no moulded head, no robes. He is a man in a suit with three eyes. The claim that he was the only moulded-head alien here not out of a franchise goes with it, and so does his place on the list of figures that are not minifigure-shaped - five other cards were counting him on it and all five have been corrected.\n\nWhat has not changed is the word lost, and that wants a ruling. Found on the shelf is not the same as found in the world. If he is still lost and dead out there, the card stands. If finding the figure means finding the man, then a card filed as lost and dead stops being either, and it wants rewriting from the top."
  },


  {
    id: "the-lost-soccer-player",
    name: "The Lost Soccer Player",
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
    background: "A soccer player. Lost, and dead.",
    provenance:
      "Black hair, a plain yellow face. A strip shirt in red with a white " +
      "panel down the front and blue trim at the shoulders, over blue shorts " +
      "or legs.",
    tags: ["soccer", "football", "athlete", "sport", "kit", "lost", "deceased"],
    images: ["images/the-lost-soccer-player-01.jpg"],
    acquired: "",
    notes: "Second soccer player, and named apart from the first only because that name is taken. Which raises a question worth answering: the other one is alive, and two players in kit is either two people or a team. Say they played together and they group."
  },


  {
    id: "the-astronaut-soldier",
    name: "The Astronaut Soldier",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Astronaut Soldier",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "An astronaut, and a soldier. Lost, and dead.",
    provenance:
      "Blue helmet. Black torso carrying a dense printed panel in blue and " +
      "white across the chest - instruments or webbing, the frame will not say " +
      "which - over a red hip piece and dark legs. Blue arms, yellow hands.",
    tags: ["astronaut", "soldier", "space", "helmet", "lost", "deceased"],
    images: ["images/the-astronaut-soldier-01.jpg"],
    acquired: "",
    notes: "The first figure here who is both at once. This world already had nine cards of astronauts and spacemen, and soldiers beyond counting, and until now those were separate jobs - the Mars Mission crew explore, the Space Militia fight. No group written: nobody has said whether he flew for the militia, the Royal Galactic Army or neither."
  },


  {
    id: "the-airline-pilot",
    name: "The Airline Pilot",
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
    background: "An airline pilot. Lost, and dead.",
    provenance:
      "White uniform shirt with a dark tie down the front and a white peaked " +
      "cap, one black arm. Photographed lying on a grey baseplate with a " +
      "second pale figure just behind him, too soft to identify.",
    tags: ["pilot", "airline", "civilian", "uniform", "cap", "lost", "deceased"],
    images: ["images/the-airline-pilot-01.jpg"],
    acquired: "",
    notes: "Twenty-eight pilot cards in this collection and he is the first civilian one. Every other pilot here flies for somebody - clones, rebels, TIE squadrons, the Green Rangers, the Command Staff - and this man flew passengers. There is a second figure in the frame behind him; if that is another of the lost, say so and he gets a card."
  },


  {
    id: "the-hooded-ranger",
    name: "The Hooded Ranger",
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
    background: "A Green Ranger. Lost, and dead.",
    provenance:
      "A black hood pulled right over the head with only a band of yellow face " +
      "showing through at the eyes, over a green uniform and dark legs.",
    tags: ["green-rangers", "soldier", "hood", "balaclava", "lost", "deceased"],
    images: ["images/the-hooded-ranger-01.jpg"],
    acquired: "",
    notes: "Filed with the Green Rangers because they are the only green army in this world - say the word if the green army men are somebody else and he moves. He is the odd one out among them either way: the other five have the most expressive faces in the collection, two enormous eyes, a handlebar moustache, the widest grin in the unit, and this one has no face showing at all. The Rangers are eight now and three of the eight are dead, which is by some way the worst rate of any unit here - the lowest rung of the military, and the one the world keeps taking from."
  },



  {
    id: "the-blue-space-captain",
    name: "The Blue Space Captain",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Captain",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A space captain. Lost, and dead.",
    provenance:
      "Blue flight cap with the ear flaps down, black goggles across the eyes " +
      "and a headset mic curving to the mouth. Blue flight suit all the way " +
      "down, a circular cogged badge at the chest, a printed equipment belt at " +
      "the waist and white hands.\n\n" +
      "The badge is the Galactic Republic cog, so the pieces are out of a Star " +
      "Wars pilot. The man is not - he is yours, and you named him a space " +
      "captain rather than a clone.",
    tags: ["captain", "space", "pilot", "goggles", "headset", "lost", "deceased"],
    images: ["images/the-blue-space-captain-01.jpg"],
    acquired: "",
    notes: "Filed as one of yours because that is how you named him - every Star Wars figure here you call by its Star Wars name, and this one you called a space captain. Say the word and he moves to the Star Wars corner. No group either: this world has a Space Militia, a Royal Galactic Army, a Royal Space Academy and a Blacktron Squadron, and nobody has said which ship was his. Since he was catalogued, the Space Captain Lady has turned up in the identical suit, badge and all, and hers is stolen - so his is the uniform somebody thought worth taking."
  },


  {
    id: "the-nude-aliens",
    name: "The Nude Aliens",
    variant: "Two of them",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "Two aliens, both of them nude. Lost, and dead.",
    provenance:
      "One is a bare yellow minifigure - torso, arms, hands and legs all plain " +
      "unprinted yellow, with a face on him: brown hair, thick brows and a " +
      "moustache. He is not blank, he is undressed.\n\n" +
      "The other is green throughout with a moulded head - a scaled, gaping " +
      "fish-like face with a blue patch at the gill - and dark markings across " +
      "the chest that read as skin rather than clothing. He is in pieces on " +
      "the table in the photograph, head and torso and a loose brick.",
    tags: ["alien", "nude", "unprinted", "moulded-head", "lost", "deceased"],
    images: [{ src: "images/the-nude-aliens-01.jpg", caption: "Both of them" }],
    acquired: "",
    notes: "One card because you sent them as a pair. Worth distinguishing from the Man from the Yellow Dimension, who is unprinted everywhere including his face - the yellow one here has a face and is simply not wearing anything. The green one is the third alien in this world who is not shaped like everybody else, after the Four-Armed Alien and the Alien Professor. No species link written between the two of them: being undressed is not a species."
  },


  {
    id: "the-engine-technician",
    name: "The Engine Technician",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Technician",
    group: "The Royal Space Academy",
    location: "",
    relations: [],
    rating: 0,
    background: "One of the engine technicians. Lost, and dead.",
    provenance:
      "Black helmet with round padded ear cups. A pale face, wide open grin, " +
      "one raised brow. Cream torso printed with grey shoulder plates and a " +
      "panelled chest, grey arms.",
    tags: ["technician", "engines", "space-programme", "helmet", "lost", "deceased"],
    images: ["images/the-engine-technician-01.jpg"],
    acquired: "",
    notes: "Filed with the Royal Space Academy, whose two technicians are the only ones in this world - say so if the engine technicians are a crew of their own and he moves. The Mechanic Supervisor on the Command Staff and the ungrouped Repair Crew are the other places he could belong. First of the Academy to be lost; they are six now and one of the six is gone."
  },


  {
    id: "the-ranger-in-the-olive-helm",
    name: "The Ranger in the Olive Helm",
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
    background: "A Green Ranger. Lost, and dead.",
    provenance:
      "Plain domed helmet in dark olive. Yellow face, dark eyes, a small " +
      "closed smile. Green field jacket printed with breast pockets and a " +
      "seam down the front, a pale yellow-green belt, grey legs with a red " +
      "patch at one hip and black hands.",
    tags: ["green-rangers", "soldier", "helmet", "field-jacket", "lost", "deceased"],
    images: ["images/the-ranger-in-the-olive-helm-01.jpg"],
    acquired: "",
    notes: "Named the way the lost militiamen are, for the helmet, because the Rangers' descriptive names are all faces and his face is the ordinary one. Eighth Green Ranger."
  },


  {
    id: "the-lost-golden-rifleman",
    name: "The Lost Golden Rifleman",
    variant: "",
    faction: "good",
    origin: "branded",
    theme: "Star Wars",
    rank: "",
    role: "Rifleman",
    group: "The Golden Company",
    location: "",
    relations: [],
    rating: 0,
    background: "A rifleman of the Golden Company. Lost, and dead.",
    provenance:
      "Pale clone helmet with a plain visor and no crown stripe, white armour " +
      "carrying orange-gold markings across the chest and hips. A long black " +
      "rifle held at his side, standing on a grey baseplate.\n\n" +
      "Too soft a frame to tell Phase 1 from Phase 2, or to read the unit " +
      "markings the living Rifleman carries on both arms.",
    tags: ["star-wars", "clone", "trooper", "rifleman", "golden-company", "rifle", "lost", "deceased", "branded"],
    images: ["images/the-lost-golden-rifleman-01.jpg"],
    acquired: "",
    notes: "Named apart from the Golden Company Rifleman only because that name is taken - you called them both riflemen. First loss in the Golden Company, and the only branded figure among the lost - every other one of the dead is a person out of your own world rather than out of a box."
  },



  {
    id: "the-saxophone-player",
    name: "The Saxophone Player",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Musician",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A saxophone player, and cool with it. Lost, and dead.",
    provenance:
      "Spiked brown hair, blue-tinted aviator sunglasses, a small closed " +
      "smile. Brown leather jacket printed open over a cream shirt with " +
      "buckled straps at the shoulders and a belt at the waist, dark red legs. " +
      "A pearl-gold saxophone held up to his mouth in both hands.\n\n" +
      "Photographed standing on wet sand with the sea behind him and his own " +
      "reflection under his feet - the only figure among the lost shot " +
      "outdoors, and one of very few anywhere in this collection.",
    tags: ["musician", "saxophone", "music", "cool", "sunglasses", "lost", "deceased"],
    images: ["images/the-saxophone-player-01.jpg"],
    acquired: "",
    notes: "Third musician in this world after the Rap Star and the Bard - Max Rebo is out of a film. The only one of the three photographed actually playing, and the only figure in the lost block who was given a scene rather than a table."
  },


  {
    id: "the-old-verdauf-soldier",
    name: "The Old Verdauf Soldier",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Soldier",
    group: "The Verdauf",
    location: "",
    relations: [],
    rating: 0,
    background: "An old soldier of the Verdauf Squadron. Lost, and dead.",
    provenance:
      "White armour rather than the squadron green - a plated torso with a " +
      "dark utility belt and a grey shoulder panel. Black hair, a heavy black " +
      "beard swallowing the whole lower face, a black comm piece at the ear " +
      "and scuffing across the chest and arms. Two black weapons in the frame " +
      "with him.\n\n" +
      "He is built off white blocks below the waist rather than printed legs.",
    tags: ["verdauf", "squadron", "soldier", "veteran", "beard", "white-armor", "lost", "deceased"],
    images: ["images/the-old-verdauf-soldier-01.jpg"],
    acquired: "",
    notes: "The Verdauf are eight men on five cards now and this is their first loss off the shelf - but not their first death. The Green Captain died in the world, aboard the ship with the bomb, and he is still here to photograph. This man is the other kind of dead. He wears white rather than the light green the squadron is known by, which is the same white the Younger Brother wears in his father's armour; whether that means anything is not written down."
  },


  {
    id: "the-blue-pirate-thug",
    name: "The Blue Pirate Thug",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Thug",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A pirate thug. The uniform he is wearing is not his - he stole it. " +
      "Lost, and dead.",
    provenance:
      "Blue knit cap over a black respirator mask with round goggle lenses, " +
      "the whole face covered. Blue service parka with a fur-trimmed collar, a " +
      "zip up the front, twin yellow-and-black belt buckles, and a badge at " +
      "the chest of a submarine inside a targeting reticle. Blue legs with a " +
      "white stripe, a black blaster in one hand and a yellow standard on a " +
      "pole behind him.",
    tags: ["thug", "pirate", "stolen-uniform", "respirator", "blue", "lost", "deceased"],
    images: ["images/the-blue-pirate-thug-01.jpg"],
    acquired: "",
    notes: "One of three you sent in stolen uniforms. Kept good rather than bad, the way the Outlaw is - a mercenary who would rob any of the good guys blind and would never hurt one - because you called him a thug, not evil. The badge is a submarine in a gunsight, and this card first guessed Aqua Force for it. That was wrong: the Bribed Royal Enforcer arrived in the identical parka, buckles and badge, so what the Thug is wearing is a royal enforcer's kit."
  },


  {
    id: "the-space-captain-lady",
    name: "The Space Captain Lady",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Captain",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A space captain. The uniform she is wearing is not hers - she stole it. " +
      "Lost, and dead.",
    provenance:
      "The blue flight cap with the ear flaps down, a silver visor pushed up " +
      "off the face. Yellow skin, red lipstick, a broad smile. Blue flight " +
      "suit with the cogged badge at the chest and the printed equipment belt " +
      "at the waist.\n\n" +
      "It is the same uniform the Blue Space Captain wears, down to the badge.",
    tags: ["captain", "space", "woman", "stolen-uniform", "visor", "lost", "deceased"],
    images: ["images/the-space-captain-lady-01.jpg"],
    acquired: "",
    notes: "The hardest of the three to file, because she is wearing a real man's clothes: the Blue Space Captain is in this collection, in that exact suit, and he is among the lost too. No link written - stealing a uniform is not the same as having met the man it belonged to, and nobody has said she took it off him. Say so and they connect. Second woman here who captains anything, after the Pirate Captain."
  },


  {
    id: "the-evil-space-captain",
    name: "The Evil Space Captain",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Captain",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "An evil space captain. The uniform he is wearing is not his - he stole " +
      "it. Lost, and dead.",
    provenance:
      "White and grey flight helmet with a gold bar over the crown. Pale face, " +
      "dark brows, a full black beard. Cream flak vest printed with angular " +
      "grey panels and clasps over blue arms and blue legs, a white cloth " +
      "hanging from one shoulder.\n\n" +
      "It is a rebel pilot's kit. There are nine Rebel Pilots in this " +
      "collection and he is not one of them.",
    tags: ["captain", "space", "villain", "stolen-uniform", "flight-helmet", "beard", "lost", "deceased"],
    images: ["images/the-evil-space-captain-01.jpg"],
    acquired: "",
    notes: "Third bad figure in five hundred and five, after the two units of Enemy Soldiers, and the first villain here who is a person rather than a nameless squad. Marked bad because you called him evil outright; one word flips it. You said the villains come once the good people are done, so he is not that batch - he arrived because he is dead, not because he is bad."
  },



  {
    id: "the-space-criminal",
    name: "The Space Criminal",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Criminal",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A space criminal. Lost, and dead.",
    provenance:
      "Tan hair swept back in a heavy wave. Yellow face stubbled across the " +
      "jaw, one brow up, a wide bared-teeth grin - one of the most openly " +
      "pleased-with-itself faces in the collection. White waistcoat over a " +
      "purple shirt, a patterned yellow cravat at the throat with a round " +
      "medallion on it, purple sleeves, dark blue jeans. A black blaster in " +
      "one hand.",
    tags: ["criminal", "space", "crook", "grin", "blaster", "lost", "deceased"],
    images: ["images/the-space-criminal-01.jpg"],
    acquired: "",
    notes: "Kept good rather than bad, the way the Outlaw and the Blue Pirate Thug are - this world files its rogues on the good side unless you say the word evil, and you did not. He is dressed better than anybody in the lost block: waistcoat, cravat and a medallion, while the soldiers around him are in armour."
  },


  {
    id: "the-bribed-royal-enforcer",
    name: "The Bribed Royal Enforcer",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Enforcer",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "A royal enforcer who took a bribe. Lost, and dead.",
    provenance:
      "Blue helmet with a clear visor pulled down over a frowning yellow face " +
      "and a padded hood. Blue service parka, zip up the front, twin " +
      "yellow-and-black belt buckles, and the badge at the chest of a " +
      "submarine inside a targeting reticle. Black legs printed with pale " +
      "blue panels. A black weapon with a red translucent tip.",
    tags: ["enforcer", "royal", "bribed", "corruption", "visor", "lost", "deceased"],
    images: ["images/the-bribed-royal-enforcer-01.jpg"],
    acquired: "",
    notes: "The first bribe recorded anywhere in this collection - five hundred and nine people and nobody until now has been bought. It matters that he is an enforcer: this world has no corrupt soldiers, no crooked police, and the one man who took money is the one whose job was making people obey. He wears the same parka and the same submarine badge as the Blue Pirate Thug, whose uniform is stolen - so the Thug robbed an enforcer, not Aqua Force as that card guessed. No group written: the Enforcer Squad wear white armour and black visor bands, nothing like this, so whether a royal enforcer is one of them is an open question."
  },


  {
    id: "the-bearded-spaceman",
    name: "The Bearded Spaceman",
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
    background: "A blue spaceman. Lost, and dead.",
    provenance:
      "The classic Lego Space suit, blue from collar to boots, with the " +
      "planet-and-rocket badge on the chest. No helmet: long dark brown hair " +
      "swept back and a full black beard, heavy brows, a flat mouth. Dust " +
      "worn into the plastic at the shoulders and knees.",
    tags: ["spaceman", "classic-space", "blue", "beard", "vintage", "lost", "deceased"],
    images: ["images/the-bearded-spaceman-01.jpg"],
    acquired: "",
    notes: "Named apart from the Blue Spaceman only because that name is taken - you called them both blue spacemen. Fourth in Classic Space and the only one of the four out of his helmet, which makes him the only face that badge has. First loss among the oldest designs in the collection."
  },


  {
    id: "the-masked-bounty-hunter",
    name: "The Masked Bounty Hunter",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Bounty Hunter",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background: "A masked bounty hunter. Lost, and dead.",
    provenance:
      "A blue hood drawn over the whole head with two slit eyes burning red " +
      "through it - no face at all behind the mask. A gold and tan tunic " +
      "printed in a dense repeating pattern, blue arms, dark brown below the " +
      "belt.\n\n" +
      "The frame is badly blurred and this is as much as it gives.",
    tags: ["bounty-hunter", "masked", "red-eyes", "hood", "lost", "deceased"],
    images: ["images/the-masked-bounty-hunter-01.jpg"],
    acquired: "",
    notes: "Fourth bounty hunter of this world's own after Kaz, the Golden Sniper and the Ninja Robot, and the first one dead. The red eyes are the thing: every other masked figure here has a visor or a respirator over an ordinary face, and there is nothing behind this one."
  },



  {
    id: "the-crimson-ninja",
    name: "The Crimson Ninja",
    variant: "",
    faction: "bad",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Ninja",
    group: "",
    location: "",
    relations: [],
    rating: 0,
    background:
      "An evil ninja, in crimson. The figure has not been photographed yet - " +
      "this card is holding his concept art until he turns up.",
    provenance:
      "From the art: a wide woven straw hat with a long red feather through " +
      "the crown, a pale mask with a red domino worked across the eyes, and no " +
      "face behind it. White and crimson lamellar over full sleeves, a red sash " +
      "at the waist, white gloves, and a red cloak streaming off one shoulder. " +
      "A katana held level in both hands.",
    tags: ["ninja", "villain", "crimson", "masked", "concept-art", "no-photograph"],
    images: [
      { src: "images/the-crimson-ninja-01.jpg", caption: "Concept art - no photograph of the figure yet" },
    ],
    acquired: "",
    notes: "The first card in five hundred and ten with no photograph of the figure on it. Everyone else here is a thing on a shelf first and a story second; he is the other way round for now. Fourth bad figure, and the second villain who is a person rather than a nameless squad. No group written: this world has a Ninja Lineage six strong and nobody has said whether he came out of it or came for it."
  },


  {
    id: "the-nightwatch-captain",
    name: "The Nightwatch Captain",
    variant: "",
    faction: "good",
    origin: "custom",
    theme: "Creation Mythos",
    rank: "",
    role: "Nightwatch Captain",
    group: "Lego City Law",
    location: "Lego City",
    relations: [],
    rating: 0,
    background:
      "He covers all the night work in Lego City. Everything that happens after " +
      "dark is his.",
    provenance:
      "Blue helmet under a broad gold brim. Dark beard and moustache across a " +
      "pale face. Black tunic with gold frogging up the front, a red crest at " +
      "the breast and two gold rank bars at the waist, blue arms, black hands " +
      "and black legs.",
    tags: ["police", "nightwatch", "captain", "night", "lego-city", "gold-braid"],
    images: ["images/the-nightwatch-captain-01.jpg"],
    acquired: "",
    notes: "Read as one who was missing from the catalogue rather than one lost to time - he is stood up and in focus the way the living are photographed, not laid flat or pulled off an old video, and you put him in the present tense. One word moves him to the lost. Eleventh in Lego City Law and the only one of them with a shift: everybody else polices the city, he polices the dark. No link to the Watch Commander, who runs the day-to-day ground units and would be the obvious other half of that arrangement - say so and they connect."
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
