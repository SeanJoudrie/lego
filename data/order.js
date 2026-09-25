/* How the collection is ranked.

   This is a power scale, in your words - "factoring both power that you lead
   and power that you control". Every figure gets a tier off the ladder below.
   Roughly, anybody should beat anybody two or three tiers under them: a god
   beats the Prince, the Prince beats a mercenary, a mercenary beats a cop, a
   cop beats a fireman, a fireman beats a civilian.

   Read it as two files in one. `roles` is the bulk of it - every job title in
   the catalogue, with the tier that job sits at. `figures` is the exception
   list: named people who do not sit where their job title would put them,
   each with the reason. When something is in the wrong place, the fix is one
   line in one of those two, not a new rule in the code.

   The second number means different things in the two tables, on purpose.

   In `figures` it is standing along the whole rung - where this person stands
   against everybody else on it. Lower is further forward, and anybody without
   one waits behind the named and is placed by their unit. That is how the
   Prince opens the principals and Quinn opens the enemy's.

   In `roles` it is standing inside a unit only - a fire chief leads the fire
   service without outranking a soldier. It can never lift anybody past a rung.

   Branded figures still sort below custom ones, underneath all of this.
*/
window.ORDER = {

  /* ---------------------------------------------------------------- ladder */
  tiers: [
    "Gods",            // 0  creative power. Not a title - the ability to make things.
    "Demigods",        // 1
    "Principals",      // 2  the main heroes and the main villains. Who calls the shots.
    "Champions",       // 3  the best fighters, and the officers who really command
    "Elite",           // 4  elite units and the people who beat ordinary soldiers
    "Soldiers",        // 5  line troops, pilots, gunners, guards, droids
    "Warriors",        // 6  fighters carrying swords, axes and bows. A bronze
                       //    blade does not beat a minigun, however well trained
                       //    the man holding it - so they sit under the guns and
                       //    above the people who are not fighting at all.
    "Police",          // 7
    "Fire service",    // 8
    "Working people",  // 9  everybody who works somewhere that can kill them -
                       //    astronauts, divers, miners, the construction crew,
                       //    mechanics and drivers and their robots. Not fighters,
                       //    but not bystanders either. The rung is defined by
                       //    where it ends rather than by a job description: it
                       //    runs down to the Hatless Gnome, who is no kind of
                       //    working man but has magic, and magic outranks
                       //    anybody who has not got any.
    "Civilians",       // 10
  ],

  /* -------------------------------------------------------------- branded
     Branded means a specific outside property - Star Wars, Marvel, Halo. It is
     not about how the figure was made: a Lego play theme with no characters in
     it, like Agents or Space Police, is a line of generic people, and in this
     world they are this world's people. Those sort with the customs. Only a
     real property sorts last.

     The `origin` field on a card still records the plastic - bought in a box
     or built at home - and is what the corner tag shows. This is a separate
     question and only the order reads it. */
  ip: [
    "Star Wars", "Marvel", "DC", "Halo", "Ninjago", "Legends of Chima",
    "Indiana Jones", "Harry Potter", "Toy Story", "Disney",
    "Pirates of the Caribbean", "SpongeBob SquarePants",
    "Avatar: The Last Airbender", "Dragon Ball", "Lord of the Rings",
    "The Nightmare Before Christmas", "Animal Crossing", "Minecraft",
    "Adventure Time",
  ],

  /* Figures inside one of those themes who are not the property. A man in an
     orange flight suit with no name on him is a pilot, not Star Wars, and the
     blue senate guards are guards. Luke is in this list because he is in the
     rebel pilot squadron with the other eight and you circled the whole unit -
     one word puts him back. */
  notIp: [
    "luke-skywalker", "the-smirking-pilot", "the-bearded-pilot",
    "the-pilot-in-the-striped-helmet", "the-pilot-in-the-grid-helmet",
    "the-smiling-pilot", "the-stern-pilot", "the-pilot-in-glasses",
    "the-a-wing-pilot",
    "the-senate-guards", "the-retired-senate-guard",

    // The clones and the faceless troopers. They came out of Star Wars boxes
    // and in this world they are the royal military - that is the one standing
    // exception to the rule above, and it is not a small one: sixty figures,
    // the whole Clone Army, the legions, the commandos, the stormtroopers and
    // the snowtroopers. A named clone commander comes with his own men rather
    // than being split off from them.
     "sev", "fixer", "scorch", "boss", "the-green-clone-trooper",
     "the-501st-troopers", "commander-cody", "the-golden-company-rifleman",
     "the-golden-company-grenadier", "the-golden-company-scout",
     "the-golden-commander", "the-blaze-squad-soldier",
     "the-wolfpack-soldier", "the-camo-scouts", "the-wolfpack-scout",
     "the-187th-commander", "captain-antilles", "the-rebel-troopers",
     "the-snowtroopers", "the-scout-trooper", "the-yellow-clone-trooper",
     "the-clone-pilot-in-grey", "the-battered-clone-pilot",
     "the-stormtrooper-commander", "the-stormtrooper-pilot",
     "the-clone-captain", "the-battle-pack-clone",
     "the-plain-clone-trooper", "the-painted-clone-commander",
     "the-commander-in-red", "the-shock-troopers", "commander-fox",
     "the-shadow-troopers", "the-187th-soldiers", "the-bomb-squad",
     "the-discarded-commander", "the-old-republic-trooper", "captain-rex",
     "the-187th-scout", "the-stormtroopers", "ahsokas-trooper",
     "the-501st-scout", "the-classic-clones", "fives",
     "the-501st-arc-troopers", "the-501st-commando", "the-clone-traitor",
     "the-first-order-snowtrooper", "the-blue-imperial-trooper", "jek-14",
     "the-shadow-arf-trooper", "the-trooper-in-olive-and-white",
     "the-shadow-commando", "the-black-clone-trooper",
     "the-enemy-scout-trooper", "commander-gree",
     "the-lost-golden-rifleman", "the-tie-pilots", "the-at-st-pilot",
     "the-umbaran-soldier",
  ],

  /* ------------------------------------------------------------- sections
     The fourth deck. Every figure belongs to at least one section and may
     belong to a few; nobody is meant to belong to a dozen.

     Three kinds, drawn in this order. `sets` are made by hand, for the things
     the data does not say on its own - who is family, who answers to Quinn,
     who was put back together out of parts. Then every named unit in the
     collection, straight off the group field. Then a trade or a type for
     everybody, matched on the job title by the first pattern that fits, so
     that a figure with no unit is still somewhere. Anybody with no job title
     at all falls into a last pair of sections by side. */
  sets: {
    // Family, not the household - the staff, the guards and the orphans are in
    // The Royal Household instead. The impersonator is a stuntman doing an
    // Elvis act and the Pretender is a pretender; neither is a relation.
    "The Royal Family": [
      "the-prince", "the-space-princess", "the-royal-sons", "the-royal-daughter",
      "the-outcast-prince", "kaz", "the-princes-cousin",
    ],
    // The people who answer to him or stand with him. Being tied to Quinn is
    // not the test - Claws was captured by him and the Knighted Civilian
    // brought him down, and neither of them belongs in his circle.
    "Quinn and his circle": [
       "quinn", "the-shadow-king", "the-prince-pretender",
       "the-purple-shadow", "the-neon-fanatic", "quinns-second-in-command",
       "the-infamous-traitor", "the-fleet-general", "wen", "the-dictator",
       "the-defector-commander", "the-sith-lord", "the-first-man-in-space",
       "the-shadow-team-commander", "the-martian-leader",
    ],
    "The rebuilt and the bionic": [
       "the-discarded", "the-rebuilt", "the-salvager", "the-mechanic",
       "the-reformed", "the-hijacked", "claws",
       "the-verdauf-guards", "the-bionic-brother", "the-bionics-leader",
       "the-bionic-alien", "the-cybernetic-ninja", "the-cyborg",
       "the-second-cyborg-soldier", "the-evil-cyborg-soldier",
       "the-bin-woman", "the-bin-elder", "the-gunner", "the-voiceless",
       "the-damaged-battle-droid", "the-rebuilt-stone-warriors",
       "the-modified-arms-dealer",
       "the-brainwashed-assassin", "ultron", "doc-ock",
    ],
    // Everybody on the top two rungs, which is what it should always have been.
    "Gods and demigods": [
       "the-first-man", "the-cosmic-twins", "the-second", "the-twins",
       "the-green-demigod", "the-rebuilt", "the-engineer", "the-vessel",
       "the-shadow-king", "the-light-king", "the-blue-demigod",
       "the-man-from-the-yellow-dimension", "the-manifestation-of-life",
       "loki",
    ],
    // The shadow dimension itself - king, priest, prince, then its soldiers.
    // Not the Shadow Team, which is a company of this world with the word in
    // its name, and not the two lords, who are masters of the League.
    "The shadow line": [
       "the-shadow-king", "the-shadow-sorcerer", "the-shadow-prince",
       "the-purple-shadow", "the-shadow-soldiers", "the-shadow-troopers",
       "the-shadow-archer", "the-shadow-arf-trooper", "the-shadow-commando",
    ],

    // The ones who turned, and only them. Being in a betrayal does not put you
    // here: the Commissioner and the Prince were on the receiving end of one.
    "The betrayers": [
       "the-shadow-team-commander", "the-commissioners-apprentice",
       "the-transport-director", "quinn", "the-defector-commander",
       "the-prince-pretender", "the-traitor-captain",
       "the-infamous-traitor", "the-clone-traitor", "the-atlantis-traitor",
       "the-armoury-traitor", "the-discarded-militarist", "the-black-ninja",
       "the-rocket-saboteur", "general-shepherd", "the-former-dive-captain",
    ],

    // And the people it was done to, which is not the same list.
    "The betrayed": [
       "the-prince", "the-green-captain", "the-red-ninja", "the-samurai",
       "the-commissioner", "the-verdauf-guards", "the-blue-haired-ninja",
       "the-street-ninja", "the-younger-brother", "the-flight-director",
       "the-knock-off-captain", "the-ninja-golem", "the-red-apprentice",
       "the-mad-ticket-man", "the-defense-bot", "the-delta-leader",
       "the-delta-medic", "the-delta-sniper", "the-delta-gunner",
       "the-delta-artilleryman", "the-delta-rifleman", "the-daredevils",
       "the-test-pilot", "the-discarded", "the-young-leader",
       "the-atlantis-leader", "the-atlantis-diver", "the-moustached-diver",
       "the-bearded-diver", "the-grinning-diver", "the-scowling-diver",
       "the-woman-in-the-dive-suit", "the-beaming-diver",
       "the-diver-with-the-crooked-smile", "the-salvager", "the-technician",
       "the-ground-technician", "the-wanderer", "the-halo-grunts",
       "the-yellow-spartan", "the-odst-spartan", "the-jackals",
       "the-second-red-spartan", "the-purple-spartan",
       "the-standard-spartans", "the-elites", "the-hayabusa",
       "the-discarded-in-the-blue-cap", "the-old-verdauf-soldier",
       "the-engine-technician",
    ],

    // Steel commands every machine on that side, not only the figures filed as
    // droids - the killer bots, the tankers, the robots that are minifigures.
    "Steel's machines": [
       "phalanx", "steel", "the-tanker-robot", "the-armoured-killer-bot",
       "the-white-killer-bot", "the-tanker-droid", "the-television",
       "the-skeleton-robot", "the-robotic-samurai", "the-robot-builder",
       "the-droid-commander", "the-death-star-droid", "r-3po",
       "the-teal-astromech", "the-super-battle-droids",
       "the-cannon-armed-droid", "the-droid-commandos",
       "the-ig-battle-droids", "the-space-droids", "the-droid-bomber",
       "the-battle-droids",
    ],
    "The Bin": [
       "the-voiceless", "the-salvager", "the-in-betweener",
       "the-demon-lord", "the-discarded-militarist", "the-bin-woman",
       "the-bin-elder", "the-henchwoman-in-sunglasses",
       "the-man-in-the-astromech-head", "the-rebuilt-stone-warriors",
    ],
    "The lost": [
       "the-militiaman-in-the-black-helm", "the-militiaman-in-the-red-helm",
       "the-ranger-patrol-captain", "the-militiamen-out-of-armour",
       "the-lost-miners", "the-discarded-in-the-blue-cap", "the-elf-man",
       "the-long-shot-bowman", "the-lost-pirates", "the-lost-aqua-diver",
       "the-gungan-jedi", "the-alien-professor", "the-lost-soccer-player",
       "the-astronaut-soldier", "the-airline-pilot", "the-hooded-ranger",
       "the-blue-space-captain", "the-nude-aliens", "the-engine-technician",
       "the-ranger-in-the-olive-helm", "the-lost-golden-rifleman",
       "the-saxophone-player", "the-old-verdauf-soldier",
       "the-blue-pirate-thug", "the-space-captain-lady",
       "the-evil-space-captain", "the-space-criminal",
       "the-bribed-royal-enforcer", "the-bearded-spaceman",
       "the-masked-bounty-hunter",
    ],
  },

  /* For a figure with no job title at all. Matched on the name, first pattern
     that fits, after the franchise sections have already taken the licensed
     ones. The last line catches anybody the others miss. */
  /* For a figure with no job title at all, matched on the name. Only reaches
     the home-made ones - anybody out of a licensed property is already in that
     property's own section and does not need a second home. */
  namedFamilies: [
    ["Demigod|Cosmic|First Man|Manifestation|Deus|Aphrodite|Yellow Dimension", "Gods and cosmic beings"],
    ["Robot|Droid|Bot\\b|Cyborg|Television|Astromech|Thresher|Machine|Tin ", "Machines and robots"],
    ["Skeleton|Ghost|Werewolf|Wolfman|Yeti|Orc|Dwarf|Elf|Gnome|Leprechaun|Caveman|Devoured|Anglerfish|Bug|Insect|Hybrid|Primitive|Alien|Gorilla", "Monsters, aliens and folk of other kinds"],
    ["Costume|Pepper|Bunny|Pizza|Lederhosen|Liberty|Santa|Peas", "People in costume"],
    ["Bin|Salvager|Replica|Hijacked|Voiceless|Wanderer|Chaosborn|Spartan|Grey Beanie", "Survivors and salvage"],
    [".", "Ordinary people"],
  ],


  families: [
    ["^(King|Queen|Prince|Elected King|Emperor|Viceroy|Governor|Supreme Chancellor|Pharaoh|Shogun|Dictator|Crime Lord|Demon Lord|Elder|Senator|Ambassador|Pretender)$", "Crowns, thrones and titles"],
    ["Sith|Jedi|Padawan|Force", "The Force, both ends of it"],
    ["Ninja|Samurai", "Ninja and samurai"],
    ["Knight|Swordsman|Swordmaster|Fencer|Gladiator|Cavalry|Clubman|Elf$", "Blades and armour"],
    ["Archer|Crossbow|Bowman", "Bows"],
    ["Pirate|Viking|Raider|Smuggler|Outlaw|Gunslinger|Criminal|Convict|Thug|Goon|Pimp", "Outlaws, pirates and thugs"],
    ["Assassin|Hitman|Bounty Hunter|Mercenary|Infiltrator|Brawler|Enforcer|Vigilante|Fanatic|Disc Thrower|Arms Dealer|Heavy$", "Guns for hire"],
    ["Sniper|Commando|ARC|Machine Gunner|Artillery|Grenadier|Rifleman|Gunner|Astronaut Soldier", "Marksmen and heavy weapons"],
    ["Clone", "The clones"],
    ["Police|Sheriff|Detective|SWAT|Animal Control|Highway Patrol|Watch|Patrol Captain|Forensic|Nightwatch", "The law"],
    ["Fire", "The fire service"],
    ["Droid|Killer Bot|Defense Bot|Robot$|Replica|Horse|Beast|Parasite|Power Source|Nanobot|Vessel", "Machines, beasts and things"],
    ["Pilot|Squadron Leader|Hangar", "Pilots and aircrew"],
    ["Diver|Aqua|Dive Team", "Under the water"],
    ["Astronaut|Spaceman|Space Ranger|Space Cadet|Space Command|Space Biker|Space Engineer|Launch Director", "The space programme"],
    ["Militia|Verdauf", "The space militia"],
    ["Agent|Royal Intelligence|Master of|Occult|Shaman|Chaplain|Guardian|Auror", "Secrets, spies and sorcery"],
    ["General|Commander|Captain|Marshal|Squad Leader|Second in Command|Head of|Fleet|Secretary of War|Mentor|Instructor|Director|Officer|Sergeant|Invasion Leader|Leader", "Officers and commanders"],
    ["Soldier|Trooper|Guard|Scout|Warrior|Infantry|Ranger|Medic|Armorer|Quartermaster|Propagand|Mandalorian|Discarded", "Soldiers of every army"],
    ["Miner|Dockworker|Blacksmith|Construction|Site Planner|Builder|Gardener|Safari", "Mines, sites and open ground"],
    ["Mechanic|Technician|Engineer|Inventor|Maker", "Mechanics and technicians"],
    ["Doctor|Professor|Librarian|Student|Graduate|Intern|Curator", "Learning and medicine"],
    ["Financier|Bank|Inventory|Secretary|Assistant|Shopkeeper|Greengrocer|Tea Seller|Courier|Gas Attendant", "Money, shops and desks"],
    ["Athlete|Racing|Stunt|Driver|Surfer|Backpacker|Traveller|Explorer|Adventure", "Sport, speed and going places"],
    ["Chef|Farmer|Fisherman|Peasant|Woodsman", "Food, farms and water"],
    ["Musician|Rapper|Bard|Jester|Clown|Comedian|Camera|Rights Activist|Easter Bunny", "Stage, screen and street"],
    ["Orphan|Royal Child|Child|Apprentice", "Children and apprentices"],
    ["Civilian|Gatekeeper", "Ordinary people"],
  ],

  /* ------------------------------------------------------- working people
     The rung between the fire service and the civilians, and it is defined by
     where you drew the line rather than by any job title: everybody standing
     at or above the Hatless Gnome when the civilians were one block, plus
     every villain who was filed a civilian, Matthew excepted - he is a child.

     It is a list of names rather than a rule because the order it came from
     was made by hand. Anybody not named here and not ranked above is a
     civilian. */
  workers: [
    "the-knighted-civilian", "the-discarded", "the-mechanic",
    "the-pathfinder", "the-gold-domed-astronaut",
    "the-mars-mission-astronaut", "the-astronaut-in-the-gold-visor",
    "the-grimy-astronaut", "the-smiling-astronaut",
    "the-astronaut-in-the-yellow-visor", "the-red-spaceman",
    "the-blue-spaceman", "the-yellow-spaceman", "the-aqua-force-leader",
    "the-aqua-force-second", "the-cool-aqua-diver", "the-aqua-force-diver",
    "the-miner-in-goggles", "the-snarling-miner", "the-visored-miner",
    "the-green-eyed-miner", "the-miner-in-white", "the-smudged-miner",
    "the-young-leader", "the-former-dive-captain", "the-atlantis-leader",
    "the-atlantis-diver", "the-moustached-diver", "the-bearded-diver",
    "the-grinning-diver", "the-scowling-diver",
    "the-woman-in-the-dive-suit", "the-beaming-diver",
    "the-diver-with-the-crooked-smile", "the-atlantis-traitor",
    "the-explorer-and-the-monkey", "the-arctic-explorers",
    "the-construction-chief", "the-site-planner", "the-smirking-worker",
    "the-stern-worker", "the-winking-worker", "the-worker-in-shades",
    "the-cheerful-worker", "the-worker-in-silver-shades",
    "the-snorkel-diver", "the-dive-captain", "the-goggled-diver",
    "santa-claus", "the-replica", "the-hijacked", "the-tin-robot",
    "the-salvager", "the-statue-of-liberty", "the-activist",
    "the-voiceless", "the-genius-gorilla",
    "the-spaceship-racer", "the-princes-cousin", "the-princes-impersonator",
    "the-porsche-driver", "the-ferrari-driver", "the-stunt-robot",
    "the-stunt-driver", "george-joudrie", "the-technician",
    "the-ground-technician", "the-asteroid-gardener",
    "the-mechanic-supervisor", "the-tall-mechanic", "the-gas-men",
    "the-builder-and-his-clone", "the-leprechaun", "the-hatless-gnome",
    "the-evil-doctor", "the-butcher", "the-haunted-miner",
    "the-first-man-in-space", "the-astronaut-miner", "the-maker",
    "the-alien-technician", "the-robot-builder", "the-alien-racer",
    "the-transport-director", "the-escapees", "the-second-boxer",
    "the-financier-in-the-green-tie", "the-evil-financier",
    "the-financier-in-the-cravat", "the-tv-camera-woman", "the-pa",
    "the-neutral-skeletons",
  ],

  /* --------------------------------------------------------- what they ARE
     Read only when a figure has no job title and is not named below. */
  ranks: {
    "The First Man": 0,
    "Cosmic Deity": 1,
    "Demigod": 1,
    "Archangel": 1,
    "Ultimate Leader of the Droid Armies": 2,
    "Mortal": 2,
    "Commander": 3,
    "Captain": 3,
  },

  /* Last resort, when a figure has no job title, no rank and no line below.
     A villain with nothing written down is a threat rather than a bystander -
     the orcs, the werewolf, the skeletons - so the enemy side falls back to
     Soldiers and everybody else to Civilians. */
  fallback: { good: 10, bad: 5 },

  /* ------------------------------------------------------------ job titles */
  roles: {
    // 2 - principals
    "King": 2, "Queen": 2, "Prince": 2, "Elected King": 2,
    "Dictator": 2, "Crime Lord": 2, "Demon Lord": 2, "Sith Master": 2,
    "Sith Lord": 2, "Nanobot Virus": 2,
    "Pretender": 2, "Elder": 2, "Shogun": 2, "Archangel": 2, "Ferryman": 2,

    // 3 - command
    "General": 3, "Fleet General": 3, "Commander": 3, "Fleet Commander": 3,
    "Battalion Commander": 3, "Clone Commander": 3, "Commander of the Clone Armies": 3,
    "Pilot Commander": 3, "Squadron Leader": [3, 0], "Squad Leader": [3, 0],
    "Captain": 3, "Captain, Verdauf Squadron": 3, "Infantry Captain": 3,
    "Pirate Fleet Commander": 3, 
    "Engineer Commander": 3, "Hangar Commander": 3, "Troop Commander": 3,
    "Range Commander": 3, "Enforcer Commander": 3, "School Commander": 3,
    "Space Militia Commander": 3, "Domestic Security Captain": 3,
    "Second in Command": [3, 1], "Secretary of War": 3, "Invasion Leader": 3,
    "Ninja Master": 3, "Jedi Master": 3, "Mentor": 3,
    "Master of Tradition": 3, "Master of the Dark Psyche": 3, "Master of Combat": 3,
    "Master of Stealing and Looting": 3, "Master of Dark Wisdom": 3,
    "Master of Disguise": 3, "Master of Apprentices": 3,
    "Head of Royal Intelligence": 3, "Head of the Lego Agents": 3,
    "Head of Palace Control": 3, "Royal Intelligence Deputy": [3, 1],
    "Senator": 3, 
    "Propaganda Director": 5,
    "Chaplain": 3,

    // 4 - elite
    "Jedi": 4, "Sith": 4, "Assassin": 4, "Bounty Hunter": 4, "Hitman": 4,
    "Commando": 4, "Clone Commando": 4, "ARC Trooper": 4, "Sniper": 4,
    "Mandalorian": 4, "Ninja": 4, "Samurai": 6, "Knight": 6, "Mace Knight": 6,
    "Swordsman": 6, "Fencer": 6, "Mercenary": 4, "Enforcer": 4, "Outlaw": 4,
    "Vigilante": 4, "Auror": 4, "Infiltrator": 4, "Disc Thrower": 4,
    "Brawler": 4, "Heavy": 4, "Guardian": 4, "Honor Guard": 4, "Agent": 5,
    "Royal Intelligence Agent": 5, "Smuggler": 4, "Fanatic": 4, "Shaman": 4,
    "Vessel": 4, "Parasite": 4, "Leader, Bionics Team": [4, 0],

    // 5 - soldiers
    "Soldier": 5, "Clone Trooper": 5, "Rifleman": 5, "Grenadier": 5,
    // Every soldier stands in front of every pilot. A pilot is not in the
    // fight the way a man with a rifle is, and a test pilot never flies combat
    // at all - so the third number here holds them at the back of the rung.
    "Fighter Pilot": [5, 5, 80], "Pilot": [5, 5, 82], "Pilot Officer": [5, 5, 82],
    "Cargo Pilot": [5, 5, 84], "Test Pilot": [5, 5, 86],
    "Scout": 5, "Guard": 5, "Prince's Guard": 5,
    "Droid": 5, "Killer Bot": 5, "Defense Bot": 5, "Robot": 5,
    "Machine Gunner": 5, "Artillery": 5, "Defense Gunner": 5, "Medic": 5,
    "Armorer": 5, "Technician Sergeant": 5, "Sergeant": [5, 1],
    "Ranger": 5, "Space Ranger": 5, "Space Explorer": 5,
    "Warrior": 6, "Pirate": 6, "Viking": 6, "Archer": 6, "Crossbowman": 6,
    "Goon": 5, "Thug": 5, "Raider": 5, "Quartermaster": 5, "Space Command": 5,
    "Propagandist": 5, "Space Biker": 5, "Discarded": 5, "Horse": 5,
    "Replica": 5,

    // 6 - police
    // Inside the police the third number orders the whole rung: the chiefs,
    // then the door-kickers, then the beat, then traffic and animal control.
    "Chief of Police": [7, 0, 5], "Chief of Space Police": [7, 0, 5],
    "Watch Command": [7, 0, 5], "Domestic Police Commander": [7, 0, 5],
    "SWAT": [7, 0, 10],
    "Detective": [7, 5, 20], "Sheriff": [7, 1, 20], "Police": [7, 5, 22],
    "Space Police": [7, 5, 24],
    "Highway Patrol": [7, 5, 30], "Animal Control": [7, 5, 40],

    // 7 - fire service
    "Fire Chief": [8, 0], "Firefighter": 8,

    /* 9 - civilians, and they are not all the same. The third number orders
       the whole rung, top to bottom:

         10  rugged work that meets trouble - astronauts, power miners,
             divers, explorers. These people see combat.
         20  civilians who can fight: boxers, wrestlers, the karate kid
         30  athletes, and trades that take a body to do
         40  desk work, shops, stages and studios
         50  a plain unarmed civilian, which is where the word ends up
         60  children, students and apprentices

       Leaders of civilian outfits lead their own people and go no higher -
       a dive team captain does not outrank a soldier. */

    // 10 - rugged
    "Astronaut": [10, 5, 10], "Power Miner": [10, 5, 10], "Miner": [10, 5, 10],
    "Explorer": [10, 5, 10], "Safari Master": [10, 0, 10], "Spaceman": [10, 5, 10],
    "Aqua Force": [10, 5, 12], "Atlantis Diver": [10, 5, 13],
    "Diver": [10, 5, 14], "Dive Team": [10, 5, 14],
    "Leader": [10, 0, 13],

    // 30 - athletes and trades that take a body (the fighters among the
    // athletes are named further down, at 20)
    "Athlete": [10, 5, 30],
    "Blacksmith": [10, 5, 30], "Dockworker": [10, 5, 30], "Farmer": [10, 5, 30],
    "Fisherman": [10, 5, 30], "Gardener": [10, 5, 30], "Courier": [10, 5, 30],
    "Mechanic": [10, 5, 32], "Mechanic Supervisor": [10, 0, 32],
    "Aircraft Mechanic": [10, 5, 32], "Aircraft Engineer": [10, 5, 32],
    "Engineer": [10, 5, 32], "Technician": [10, 5, 32], "Robot Builder": [10, 5, 32],
    "Construction Chief": [10, 0, 34], "Construction Worker": [10, 5, 34],
    "Site Planner": [10, 5, 34],
    "Racing Driver": [10, 5, 36], "Stunt Driver": [10, 5, 36],
    "Stuntman": [10, 5, 36], "Stunt Double": [10, 5, 36],
    "Chef": [10, 5, 36], "Gas Attendant": [10, 5, 36],

    // 40 - desks, shops, stages
    "Doctor": [10, 5, 40], "Professor": [10, 5, 40], "Librarian": [10, 5, 40],
    "Inventor": [10, 5, 40], "Curator": [10, 5, 40], "Occult Instructor": [10, 5, 40],
    "Launch Director": [10, 0, 40], "Director, Royal Transport Authority": [10, 0, 40],
    "Financier": [10, 5, 42], "Bank Teller": [10, 5, 42],
    "Inventory Specialist": [10, 5, 42], "Secretary": [10, 5, 42],
    "Assistant": [10, 5, 42], "Rights Activist": [10, 5, 42],
    "Shopkeeper": [10, 5, 44], "Greengrocer": [10, 5, 44], "Tea Seller": [10, 5, 44],
    "Musician": [10, 5, 46], "Rapper": [10, 5, 46], "Bard": [10, 5, 46],
    "Jester": [10, 5, 46], "Clown": [10, 5, 46], "Stand-up Comedian": [10, 5, 46],
    "Camera Operator": [10, 5, 46],
    "Traveller": [10, 5, 48], "Backpacker": [10, 5, 48], "Surfer": [10, 5, 48],
    "Gatekeeper": [10, 5, 48], "Easter Bunny": [10, 5, 48],
    "Convict": [10, 5, 48], "Criminal": [10, 5, 48], "Peasant": [10, 5, 48],

    // 50 - unarmed, and nothing else written down
    "Civilian": [10, 5, 50],

    // 60 - children, students, apprentices
    "Student": [10, 9, 60], "Law Student": [10, 9, 60], "Graduate": [10, 9, 60],
    "Intern": [10, 9, 60], "Apprentice": [10, 9, 60],
    "Orphan": [10, 9, 62], "Royal Child": [10, 9, 62], "Child": [10, 9, 62],

    // 2 - principals (second pass)
    "Emperor": 2, "Supreme Chancellor": 2, "Viceroy": 2, "Governor": 2,
    "Master of Faces": 3,

    // 3 - command (second pass)
    "Leader, Space Bikers": [3, 0], "Patrol Captain": [3, 0],
    "Nightwatch Captain": [7, 0], "Officer": 5,

    // 4 - elite (second pass)
    "Arms Dealer": 4, "Gunslinger": 4, "Gladiator": 6, "Pimp": 4,

    // 5 - soldiers (second pass)
    "Cavalry": 6, "Clubman": 6, "Astronaut Soldier": 5, "Beast": 5, "Elf": 6,

    // Third pass - corrections. A title only counts for as much as the force
    // behind it: leading a dive team or a pirate crew is not commanding an army.
    "Pharaoh": 4, "Supreme Mega Knight": [6, 0], "Swordmaster": [6, 1],
    "Archer Commander": [6, 1], "Ambassador": 4, "Combat Instructor": 4,
    "Forensic Agent": 5, "Power Source": 4,
    "Pirate Captain": [6, 0], "First Mate": [6, 1],
    "Space Police Gunner": 5, "Space Engineer": 5, "Space Cadet": [5, 9],

    // The space militia are not ordinary soldiers - they carry plasma weapons
    // and the Verdauf squadron is an elite guard. The adventure crew are not
    // soldiers at all but every one of them is armed, and so are the woodsman
    // and the jungle adventurers, who fight with swords.
    "Space Militia": 4, "Verdauf Squadron": 4,
    "Adventure Crew": 5, "Adventurer": 5, "Woodsman": 6,
  },

  /* ------------------------------------------------------- named exceptions
     People who do not sit where their job title puts them, each with why.
     Second number is standing along the whole rung: 0 leads it, and anybody
     without one waits at 50 and is placed by their unit. */
  figures: {
    // --- 0. gods. Only two clear it now.
    "the-first-man": [0, 0],
    "the-cosmic-twins": [0, 1],

    // --- 1. demigods. The Second goes in front of the Green Demigod. The
    // single-colour figures are demigods rather than gods, on your call: the
    // Shadow King, the Light King, the Blue Demigod and the yellow man.
    "the-second": [1, 0],
    "the-green-demigod": [1, 1],
    "the-engineer": [1, 2],
    "the-twins": [1, 3],
    "the-rebuilt": [1, 4],
    "the-manifestation-of-life": [1, 5],
    "the-vessel": [1, 6],              // it is literally a demigod's vessel
    "the-man-from-the-yellow-dimension": [1, 7],
    "the-shadow-king": [1, 20],
    "the-light-king": [1, 21],
    "the-blue-demigod": [1, 22],

    // --- 2. principals
    "the-prince": [2, 0],
    "the-space-princess": [2, 1],
    "the-outcast-prince": [2, 2],
    "kaz": [2, 3],
    "brute": [2, 4],
    "the-samurai": [2, 5],
    "the-red-ninja": [2, 6],
    "the-ferryman": [2, 7],
    "the-in-betweener": [2, 8],
    "the-green-captain": [2, 9],
    "quinn": [2, 20],
    "steel": [2, 21],
    "phalanx": [2, 22],
    "the-martian-leader": [2, 23],
    "goku": [2, 0], "perfect-cell": [2, 1], "superman": [2, 0],
    "deus-pater": 2,
    "aphrodite": [10, 44],              // no more powerful than a civilian
    "the-dwarf-king": 3,
    "the-evil-kings-son": 4,

    // --- 3. champions, good side
    "the-palace-chief": [3, 0],
    "armstrong": [3, 1],               // ahead of his deputy
    "claws": [3, 2],
    "the-deputy": [3, 3],
    "the-snow-jedi": [3, 4],
    "the-commissioner": [3, 5],
    "the-space-marshal": [3, 6],
    "the-grey-beanie": [3, 7],
    "the-verdauf-guards": [3, 8],
    "the-nightwatch-captain": [3, 9],
    "the-guardsman": [3, 10],
    "the-jedi": [3, 11],
    "the-beowulf-jedi": [3, 12],
    "the-second-padawan": [3, 13],
    "the-blue-haired-ninja": [3, 14],
    "the-street-ninja": [3, 15],
    "drake": [3, 16],
    "the-sniper": [3, 17],
    "heavy": [3, 18],
    // Up out of elite, all of them named by you
    "the-younger-brother": [3, 19],
    "the-golden-sniper": [3, 20],
    "the-ninja-robot": [3, 21],
    "the-disc-thrower": [3, 22],
    "the-reckless": [3, 23],
    "the-planner": [3, 24],
    "the-gunner": [3, 25],
    "kenjen": [3, 26],
    "the-outlaw": [3, 27],
    "the-flight-director": [3, 45],    // he decides where the rockets go

    // --- 3. champions, enemy side
    "wen": [3, 0],                     // Quinn's second, and he ranks like it
    "the-iron-league-captain": [3, 1], // super deadly
    "the-crimson-ninja": [3, 2],
    "the-red-baron": [3, 3],           // incredibly dangerous
    "the-purple-shadow": [3, 4],
    "johnny-plasma": [3, 5],
    "the-traitor-captain": [3, 6],
    "the-lead-alien-mercenary": [3, 7],
    "the-modified-arms-dealer": [3, 8],
    "the-guardsmans-partner": [3, 9],  // literally John Wick
    "the-charming-bounty-hunter": [3, 10],
    "the-dapper-bounty-hunter": [3, 11],
    "the-grey-longshot": [3, 12],
    "the-smiling-hitman": [3, 13],
    "the-black-ninja": [3, 14],
    "the-disc-throwers-brother": [3, 15],
    "the-iron-league-assassin": [3, 16],
    "the-iron-league-alien": [3, 17],
    "the-bounty-hunter-captain": [3, 18],
    "the-bionic-brother": [3, 19],
    "the-bionics-leader": [3, 20],
    "the-narcissist": [3, 21],
    "long-arm-johnson": [3, 22],
    "the-current": [3, 23],            // an evil alien made of electricity
    "darth-revan": [3, 0], "ultron": [3, 1], "magneto": [3, 2],

    // --- 4. elite
    "the-discarded": [10, 1],           // no combat experience and one arm short
    "the-instructor": 5,
    "the-defector": 4,                 // down out of the champions
    "the-shadow-team-commander": 4,    // down a rank
    "the-retired-general": 4,          // down a rank
    "the-shadow-soldiers": 4,          // dangerous enough to leave the line
    "the-commissioners-apprentice": 4, // he nearly killed the Commissioner
    "the-iron-league-rifleman": 4,
    "the-occultist": 4,                // he can throw a spell at you
    "the-tricksters-apprentice": 4,    // a trickster god's protege, and does the magic
    "the-scrap-adventurer": 4,
    "the-ranger": 4,
    "the-armorer": 4,
    "the-chaosborn": 4,
    "the-displaced": 4,
    "the-senate-guards": 4,
    "the-retired-senate-guard": 4,
    "the-giant-orc": [5, 0],           // the strongest thing in the enemy's line

    // --- 5. soldiers. Background officers with a title and nothing behind it.
    "the-winter-trooper-leader": [5, 60],
    "the-engineer-commander": [5, 60],
    "the-hangar-commander": [5, 60],
    "the-range-commander": [5, 60],
    "the-enforcer-commander": [5, 60],
    "the-enforcer-squad": [5, 60],
    "the-pilot-officer": [5, 60],
    "the-clone-captain": [5, 60],
    "the-painted-clone-commander": [5, 60],
    "the-discarded-commander": [5, 60],
    // Forest rangers rather than soldiers, on your call
    "the-second-ranger": [5, 75],
    "the-third-ranger": [5, 75],
    "the-rescue-ranger": [5, 75],
    // Armed men, but not soldiers: gangsters and the man on the gate
    "the-gangster-financier": [5, 70],
    "the-second-gangster-financier": [5, 70],
    "the-mad-ticket-man": [5, 70],
    // He does not beat a killer bot or a grenadier in a fight
    "the-propagandist": [5, 72],
    "the-spartan": 5,
    "the-repair-crew": 5,
    "the-us-army-soldiers": [5, 30],   // behind Delta Squad
    "the-delta-leader": 5,             // back with his own squad
    "the-delta-sniper": 5,
    "the-head-agent": 5,               // back with his own team

    // --- 6. warriors
    "the-ninja-fan": 6,                // good with a sword

    // --- 7. police
    "the-vigilante": [7, 15],          // he belongs next to the cops

    // --- 9. civilians
    "the-knighted-civilian": [10, 0],
    "the-boxer": [10, 20], "the-second-boxer": [10, 20],
    "the-wrestler": [10, 21], "the-sumo-wrestler": [10, 21],
    "the-karate-kid": [10, 22], "the-bodybuilder": [10, 23],
    "the-mechanic": [10, 10],           // he repaired his own arm and his own skull
    "the-hijacked": [10, 16],
    "the-dive-captain": [10, 14],
    "the-former-dive-captain": [10, 14],
    "the-aqua-force-leader": [10, 12],
    "the-aqua-force-second": [10, 12],
    "matthew": [10, 62],
    "elizabeth-swann": 10,
    "spongebob": 10,
    "the-maiden": [10, 52],             // behind the cop and the man with a sword
    "little-red-riding-hood": [10, 60],
    "the-neutral-skeletons": [10, 58],  // they are bones. They cannot move.

    // He was filed good and stood with the working people on the strength of
    // his job. He is evil now, on your word, and the job did not change - so he
    // keeps Dockworker as his trade and comes out of the workers list, because
    // that list pins the rung and would have left a villain ranked under every
    // civilian in the collection. Soldiers is where this catalogue puts an
    // enemy with nothing else written down.
    "the-dock-robot": [5, 44],

    // --- Bravo Team, kept together on one rung. The job titles would have
    // scattered them - Explorer and Apprentice both read as civilian trades -
    // and all four went in at Civilians, which was wrong. They hold rank, they
    // answer for military work, they go armed, and they kill hostile alien
    // life. The pilot was already at Soldiers by his trade; the other three
    // are here by name so the team stands together whatever their titles say.
    "pringles": [5, 40],
    "the-old-apprentice": [5, 41],
    "the-night-watch-apprentice": [5, 42],
    "the-bravo-pilot": [5, 43],
  },


  /* ----------------------------------------------------------------- swaps
     The first arrangement made by hand on the page, back when Arrange
     exchanged two figures rather than inserting one in front of the other.
     These are replayed the way they were made - as exchanges - because that is
     the deck that was on screen while it was being built, and every move after
     the first was decided against the state the one before it produced.
     Reading them any other way rebuilds a deck that nobody ever arranged.

     `moves` below is the list made since, where a pair means "put the first
     one directly in front of the second". Swaps replay first, then moves.

     Both are keyed by deck, because an arrangement of the combined deck is not
     an arrangement of either side on its own. */
  swaps: {
    total: [
    ["the-twins", "the-green-demigod"],
    ["the-green-demigod", "the-engineer"],
    ["the-rebuilt", "the-engineer"],
    ["the-vessel", "the-manifestation-of-life"],
    ["the-shadow-king", "the-manifestation-of-life"],
    ["the-light-king", "the-man-from-the-yellow-dimension"],
    ["the-blue-demigod", "the-manifestation-of-life"],
    ["the-space-princess", "the-prince"],
    ["the-prince-pretender", "the-prince"],
    ["phalanx", "steel"],
    ["the-purple-shadow", "kenjen"],
    ["the-space-biker-leader", "the-underwater-commander"],
    ["the-green-captain", "the-samurai"],
    ["claws", "the-palace-chief"],
    ["the-space-marshal", "the-commissioner"],
    ["the-jedi", "armstrong"],
    ["the-snow-jedi", "the-palace-chief"],
    ["the-beowulf-jedi", "the-deputy"],
    ["the-second-padawan", "the-palace-chief"],
    ["drake", "the-space-marshal"],
    ["the-traitor-captain", "the-verdauf-guards"],
    ["the-younger-brother", "the-verdauf-guards"],
    ["the-grey-beanie", "the-nightwatch-captain"],
    ["the-space-marshal", "the-younger-brother"],
    ["heavy", "the-grey-beanie"],
    ["the-sniper", "the-guardsman"],
    ["kenjen", "the-guardsmans-partner"],
    ["the-guardsman", "armstrong"],
    ["the-guardsmans-partner", "the-deputy"],
    ["the-gunner", "the-deputy"],
    ["the-disc-thrower", "the-palace-chief"],
    ["the-disc-throwers-brother", "the-blue-haired-ninja"],
    ["the-planner", "the-street-ninja"],
    ["the-golden-sniper", "the-black-ninja"],
    ["the-reckless", "the-younger-brother"],
    ["the-battalion-commander", "the-disc-thrower"],
    ["the-disc-throwers-brother", "the-disc-thrower"],
    ["the-disc-throwers-brother", "the-planner"],
    ["the-planner", "the-golden-sniper"],
    ["the-golden-sniper", "the-reckless"],
    ["the-reckless", "armstrong"],
    ["the-purple-shadow", "the-second-pilot-commander"],
    ["the-outlaw", "the-black-ninja"],
    ["the-blue-haired-ninja", "the-ninja-robot"],
    ["the-street-ninja", "the-palace-chief"],
    ["the-palace-chief", "the-ninja-robot"],
    ["armstrong", "the-deputy"],
    ["the-flight-director", "the-second-pilot-commander"],
    ["the-deputy", "the-black-ninja"],
    ["the-black-ninja", "the-troop-commander"],
    ["the-deputy", "the-flight-director"],
    ["the-troop-commander", "the-second-pilot-commander"],
    ["the-second-pilot-commander", "the-pineapple-ninja"],
    ["the-fleet-commander", "the-dwarf-king"],
    ["the-pilot-commander", "the-dwarf-king"],
    ["the-purple-shadow", "the-black-ninja"],
    ["the-iron-league-captain", "the-black-ninja"],
    ["the-red-baron", "the-black-ninja"],
    ["the-black-ninja", "johnny-plasma"],
    ["the-lead-alien-mercenary", "the-crimson-ninja"],
    ["the-dapper-bounty-hunter", "the-black-ninja"],
    ["the-red-baron", "the-iron-league-captain"],
    ["the-iron-league-captain", "wen"],
    ["the-lead-alien-mercenary", "wen"],
    ["the-dapper-bounty-hunter", "wen"],
    ["the-crimson-ninja", "wen"],
    ["the-bounty-hunter-captain", "the-modified-arms-dealer"],
    ["the-smiling-hitman", "the-black-ninja"],
    ["the-iron-league-alien", "the-grey-longshot"],
    ["the-grey-longshot", "the-iron-league-alien"],
    ["the-iron-league-alien", "the-black-ninja"],
    ["the-modified-arms-dealer", "the-black-ninja"],
    ["the-bionic-brother", "the-black-ninja"],
    ["the-bionics-leader", "the-black-ninja"],
    ["the-narcissist", "the-black-ninja"],
    ["quinns-second-in-command", "the-black-ninja"],
    ["quinns-second-in-command", "the-narcissist"],
    ["quinns-second-in-command", "the-bionics-leader"],
    ["the-current", "long-arm-johnson"],
    ["the-fleet-general", "long-arm-johnson"],
    ["the-alien-militia-commander", "the-black-ninja"],
    ["the-defector-commander", "the-sith-lords-second"],
    ["the-shadow-sorcerer", "long-arm-johnson"],
    ["the-domestic-security-captain", "long-arm-johnson"],
    ["the-evil-infantry-captain", "the-knock-off-captain"],
    ["the-evil-infantry-captain", "the-domestic-security-captain"],
    ["the-sith-lords-second", "the-domestic-security-captain"],
    ["the-evil-infantry-captain", "the-domestic-security-captain"],
    ["the-black-ninja", "the-knock-off-captain"],
    ["the-master-of-the-dark-psyche", "the-master-of-tradition"],
    ["the-master-of-combat", "the-master-of-tradition"],
    ["the-master-of-dark-wisdom", "the-master-of-stealing-and-looting"],
    ["the-master-of-apprentices", "the-master-of-stealing-and-looting"],
    ["the-pirate-fleet-commander", "the-infantry-captain-in-grey"],
    ["the-infantry-captain-in-grey", "the-insect-captain"],
    ["long-arm-johnson", "the-space-biker-leader"],
    ["the-sting-ray-squad-leader", "the-underwater-commander"],
    ["the-chaosborn", "the-occultist"],
    ["the-scrap-adventurer", "the-reformed"],
    ["the-ninja-golem", "crispus"],
    ["the-ranger", "the-tv-star"],
    ["jimzon", "the-generals-son"],
    ["the-displaced", "the-green-officer"],
    ["the-occultist", "the-new-recruit"],
    ["the-tricksters-apprentice", "the-green-officer"],
    ["the-new-recruit", "the-retired-senate-guard"],
    ["the-green-officer", "the-retired-senate-guard"],
    ["crispus", "the-green-officer"],
    ["the-mystery-shaman", "the-armorer"],
    ["the-retired-senate-guard", "the-new-recruit"],
    ["the-green-officer", "the-red-apprentice"],
    ["the-tv-star", "the-red-apprentice"],
    ["the-armorer", "the-red-apprentice"],
    ["the-famous-poacher", "the-hitman"],
    ["the-juggernaut", "the-french-hitman"],
    ["the-evil-kings-son", "the-suit-thief"],
    ["the-ninja-assassin-pirate", "the-explorer-smuggler"],
    ["the-silent-soldier", "the-incompetent-bounty-hunter"],
    ["the-brainwashed-assassin", "the-blue-bounty-hunter"],
    ["the-cybernetic-ninja", "the-pharaoh"],
    ["the-second-deadliest-poacher", "the-second-pharaoh"],
    ["the-dark-side-enforcer", "the-incompetent-bounty-hunter"],
    ["the-shadow-soldiers", "the-second-pharaoh"],
    ["the-cobra-assassin", "the-pharaoh"],
    ["the-brain-parasites", "the-astronaut-ninja"],
    ["the-retired-general", "the-commissioners-apprentice"],
    ["the-incompetent-bounty-hunter", "the-pimp"],
    ["the-pimp", "the-retired-general"],
    ["the-second-pharaoh", "the-suit-thief"],
    ["the-pharaoh", "the-suit-thief"],
    ["the-suit-thief", "the-retired-general"],
    ["the-rhino-heavy", "the-retired-general"],
    ["the-repair-crew", "the-us-army-soldiers"],
    ["the-survivor", "the-us-army-soldiers"],
    ["the-us-army-soldiers", "the-princes-guards"],
    ["the-aviator", "the-instructor"],
    ["the-ace", "the-spartan"],
    ["the-fixer", "the-analyst"],
    ["the-aviators-father", "the-space-cadets"],
    ["the-old-hand", "the-princes-guards"],
    ["the-rifleman", "the-pilots-daughter"],
    ["the-host", "the-soldier-in-green-armor"],
    ["the-forager", "the-soldier-in-clear-armor"],
    ["the-curly-haired-adventurer", "the-retired-clone"],
    ["the-ginger-adventurer", "the-forager"],
    ["the-explorers-son", "the-curly-haired-adventurer"],
    ["the-forager", "the-medic"],
    ["the-curly-haired-adventurer", "the-quartermaster"],
    ["the-gem-hunter", "the-instructor"],
    ["the-gem-hunters-friend", "the-spartan"],
    ["the-medic", "the-analyst"],
    ["the-quartermaster", "the-soldier-in-green-armor"],
    ["the-mad-ticket-man", "the-instructor"],
    ["the-mad-ticket-man", "the-princes-guards"],
    ],
  },

  /* Arrangements made since, where a pair reads "put the first one directly in
     front of the second". Everybody between closes up and shifts along by one.
     Replayed after the swaps above, in the order they were made. */
  moves: {
    total: [
      ["the-khaki-officer", "the-minigunner"],
      ["the-constable", "the-officer-in-sunglasses"],
      ["the-khaki-officer", "the-officer-in-sunglasses"],
      ["the-sheriff", "the-detective"],
      ["the-detective", "the-young-watchman"],
      ["the-swat-officers", "the-young-watchman"],
      ["the-young-watchman", "the-watch-commander"],
      ["the-firewoman", "the-fireman-in-black"],
      ["the-fireman-in-the-white-helmet", "the-fireman-in-black"],
      ["the-minigunner", "the-young-watchman"],
      ["the-vigilante", "the-watch-commander"],
      ["the-swat-officers", "the-detective"],
      ["the-sheriff", "the-detective"],
      ["the-royal-knight", "the-royal-archer-commander"],
      ["the-dark-haired-swordsman", "the-mace-knight"],
      ["the-red-capped-swordsman", "the-mace-knight"],
      ["the-royal-archer", "the-mace-knight"],
      ["the-fencer", "the-royal-knight"],
      ["the-elf-knight", "the-second-royal-archer"],
      ["the-elf-knight", "the-mace-knight"],
      ["the-elf-knight", "the-royal-knight"],
      ["the-ninja-fan", "the-second-royal-archer"],
      ["the-dragon-knight", "the-supreme-mega-knight"],
      ["the-supreme-mega-knight", "the-evil-knight"],
      ["the-viking", "the-knight-with-the-real-sword"],
      ["the-pirate-hobo", "the-knight-with-the-real-sword"],
      ["the-sleepy-pirate", "the-knight-with-the-real-sword"],
      ["the-pirate-captain", "the-knight-with-the-real-sword"],
      ["the-first-mate", "the-knight-with-the-real-sword"],
      ["the-tattooed-pirate", "the-knight-with-the-real-sword"],
      ["the-long-haired-pirate", "the-knight-with-the-real-sword"],
      ["the-pirate-captain", "the-pirate-hobo"],
      ["the-first-mate", "the-pirate-hobo"],
      ["the-tattooed-pirate", "the-pirate-hobo"],
      ["the-long-haired-pirate", "the-pirate-hobo"],
      ["the-dwarf-archer", "the-viking"],
      ["the-shadow-archer", "the-knight-with-the-real-sword"],
      ["the-robotic-samurai", "the-knight-with-the-real-sword"],
      ["the-second-viking", "the-supreme-mega-knight"],
      ["the-evil-knight", "the-supreme-mega-knight"],
      ["the-black-knight", "the-supreme-mega-knight"],
      ["the-swordsmith-knight", "the-supreme-mega-knight"],
      ["the-infamous-space-pirate", "the-supreme-mega-knight"],
      ["the-gladiator", "the-masked-space-pirate"],
      ["the-yellow-super-swordsman", "the-masked-space-pirate"],
      ["the-space-trucker", "the-masked-space-pirate"],
      ["the-warrior-orc", "the-masked-space-pirate"],
      ["the-evil-cavalryman", "the-masked-space-pirate"],
      ["the-evil-swordsman", "the-masked-space-pirate"],
      ["the-clubman", "the-evil-bowman"],
      ["the-armoured-space-pirate", "the-clubman"],
      ["the-squid-warrior", "the-shark-warrior"],
      ["the-tanker-robot", "gold-tooth"],
      ["thresher", "the-werewolf"],
      ["the-airborne-raider", "the-henchwoman-in-sunglasses"],
      ["the-armoury-traitor", "the-white-killer-bot"],
      ["the-hyper-violent-alien", "the-conquistador"],
      ["the-brawling-alien", "the-conquistador"],
      ["the-alien-medic", "the-conquistador"],
      ["the-infamous-traitor", "the-enemy-soldiers-in-olive"],
      ["the-soldier-with-the-skull", "the-enemy-soldiers-in-olive"],
      ["the-armoury-traitor", "the-enemy-soldiers-in-olive"],
      ["the-successful-replica", "the-enemy-soldiers-in-olive"],
      ["the-successful-replica", "the-infamous-traitor"],
      ["thresher", "the-vikings-wife"],
      ["the-tanker-robot", "the-anglerfish"],
      ["the-airborne-raider", "the-television"],
      ["thresher", "the-armoured-killer-bot"],
      ["the-tanker-robot", "the-white-killer-bot"],
      ["the-tanker-droid", "the-anglerfish"],
      ["the-hyper-violent-alien", "the-enemy-soldiers-in-olive"],
      ["the-evil-grenadier", "the-enemy-soldiers-in-olive"],
      ["the-tanker-robot", "the-enemy-soldiers-in-olive"],
      ["thresher", "the-enemy-soldiers-in-olive"],
      ["the-armoured-killer-bot", "the-enemy-soldiers-in-olive"],
      ["the-airborne-raider", "the-enemy-soldiers-in-olive"],
      ["the-white-killer-bot", "the-enemy-soldiers-in-olive"],
      ["the-looter", "the-enemy-soldiers-in-olive"],
      ["the-tanker-droid", "the-enemy-soldiers-in-olive"],
      ["the-looter", "the-hyper-violent-alien"],
      ["the-airborne-raider", "the-hyper-violent-alien"],
      ["the-evil-grenadier", "the-hyper-violent-alien"],
      ["the-tanker-robot", "the-hyper-violent-alien"],
      ["thresher", "the-hyper-violent-alien"],
      ["the-armoured-killer-bot", "the-hyper-violent-alien"],
      ["the-white-killer-bot", "the-hyper-violent-alien"],
      ["the-tanker-droid", "the-hyper-violent-alien"],
      ["the-brawling-alien", "the-enemy-soldiers-in-olive"],
      ["the-slimed-biker", "the-enemy-soldiers-in-olive"],
      ["the-orange-biker", "the-enemy-soldiers-in-olive"],
      ["the-goon-in-the-beanie", "the-enemy-soldiers-in-olive"],
      ["the-devoured", "the-enemy-soldiers-in-olive"],
      ["the-bionic-alien", "the-occupier"],
      ["the-grey-alien-soldier", "the-occupier"],
      ["the-evil-cyborg-soldier", "the-occupier"],
      ["the-propaganda-director", "the-cyborg"],
      ["the-television", "the-cyborg"],
      ["the-conquistador", "the-looter"],
      ["the-gangster-financier", "the-martians"],
      ["the-evil-space-militia", "the-evil-pilot"],
      ["the-evil-pilot", "the-evil-space-militia"],
      ["the-propaganda-director", "the-thug"],
      ["the-television", "the-thug"],
      ["the-evil-pilot", "the-skeleton-robot"],
      ["the-propagandist", "the-television"],
      ["the-second-gangster-financier", "the-goon-in-the-blue-cap"],
      ["the-television", "the-skeleton-robot"],
      ["the-television", "the-thug"],
      ["the-thug", "the-evil-pilot"],
      ["the-thug", "the-second-gangster-financier"],
      ["the-second-gangster-financier", "the-thug"],
      ["the-gangster-financier", "the-martians"],
      ["the-evil-skeletons", "the-second-gangster-financier"],
      ["the-skeleton-robot", "the-second-gangster-financier"],
      ["the-skeleton-robot", "the-thug"],
      ["the-second-gangster-financier", "the-evil-skeletons"],
      ["the-creepy-elf", "the-evil-space-militia"],
      ["the-bin-woman", "the-evil-space-militia"],
      ["the-bin-elder", "the-evil-space-militia"],
      ["the-man-in-the-astromech-head", "the-evil-skeletons"],
      ["the-vikings-wife", "the-man-in-the-astromech-head"],
      ["the-vikings-wife", "the-man-in-the-astromech-head"],
      ["the-martians", "the-gangster-financier"],
      ["the-alien-medic", "the-cyborg"],
      ["the-second-cyborg-soldier", "the-sting-rays"],
      ["the-kartians", "the-evil-pilot"],
      ["the-blue-eyed-alien", "the-evil-pilot"],
      ["the-anglerfish", "the-wolfman"],
      ["the-short-orc", "the-wolfman"],
      ["the-wolfman", "the-evil-dwarf"],
      ["the-orc-alien-hybrid", "the-ghost"],
      ["gold-tooth", "the-caveman"],
      ["the-helmeted-henchman", "the-caveman"],
      ["the-henchwoman-in-sunglasses", "the-caveman"],
      ["the-henchman-with-the-diamond-eye", "the-caveman"],
      ["the-cyborg", "the-alien-medic"],
      ["the-primitive-alien", "the-martians"],
      ["the-primitive-alien", "the-martians"],
      ["the-martians", "the-primitive-alien"],
      ["the-second-cyborg-soldier", "the-martians"],
      ["the-evil-pilot", "the-second-cyborg-soldier"],
      ["the-evil-pilot", "the-second-cyborg-soldier"],
      ["the-blue-eyed-alien", "the-second-cyborg-soldier"],
      ["the-blue-eyed-alien", "the-martians"],
      ["the-martians", "the-evil-pilot"],
      ["the-second-cyborg-soldier", "the-evil-pilot"],
      ["the-alien-medic", "the-primitive-alien"],
      ["the-primitive-alien", "the-alien-medic"],
      ["the-delta-gunner", "the-delta-medic"],
      ["the-delta-medic", "the-delta-gunner"],
      ["the-delta-sniper", "the-delta-gunner"],
      ["the-grinning-ranger", "the-wide-eyed-ranger"],
      ["the-third-ranger", "the-second-ranger"],
      ["the-second-ranger", "the-third-ranger"],
      ["the-stern-pilot", "the-smiling-pilot"],
      ["the-smirking-pilot", "the-pilot-in-glasses"],
      ["the-cool-aqua-diver", "the-aqua-force-diver"],
      ["the-pathfinder", "the-explorer-and-the-monkey"],
      ["the-gold-domed-astronaut", "the-explorer-and-the-monkey"],
      ["the-mars-mission-astronaut", "the-explorer-and-the-monkey"],
      ["the-astronaut-in-the-gold-visor", "the-explorer-and-the-monkey"],
      ["the-grimy-astronaut", "the-explorer-and-the-monkey"],
      ["the-smiling-astronaut", "the-explorer-and-the-monkey"],
      ["the-astronaut-in-the-yellow-visor", "the-explorer-and-the-monkey"],
      ["the-red-spaceman", "the-arctic-explorers"],
      ["the-blue-spaceman", "the-arctic-explorers"],
      ["the-yellow-spaceman", "the-arctic-explorers"],
      ["the-miner-in-goggles", "the-arctic-explorers"],
      ["the-snarling-miner", "the-arctic-explorers"],
      ["the-visored-miner", "the-arctic-explorers"],
      ["the-safari-master", "the-green-eyed-miner"],
      ["the-arctic-explorers", "the-green-eyed-miner"],
      ["the-green-eyed-miner", "the-safari-master"],
      ["the-miner-in-white", "the-safari-master"],
      ["the-smudged-miner", "the-safari-master"],
      ["the-aqua-force-leader", "the-safari-master"],
      ["the-aqua-force-second", "the-safari-master"],
      ["the-cool-aqua-diver", "the-safari-master"],
      ["the-aqua-force-diver", "the-safari-master"],
      ["the-beaming-diver", "the-diver-with-the-crooked-smile"],
      ["the-safari-master", "the-space-boarder"],
      ["the-former-dive-captain", "the-atlantis-leader"],
      ["the-snorkel-diver", "the-dive-captain"],
      ["the-space-boarder", "the-safari-master"],
      ["the-construction-chief", "the-boxer"],
      ["the-construction-chief", "the-snorkel-diver"],
      ["the-site-planner", "the-snorkel-diver"],
      ["the-smirking-worker", "the-snorkel-diver"],
      ["the-mechanic-supervisor", "the-ferrari-driver"],
      ["the-stern-worker", "the-snorkel-diver"],
      ["the-maintenance-technician", "the-ferrari-driver"],
      ["the-worker-in-shades", "the-snorkel-diver"],
      ["the-winking-worker", "the-blacksmith"],
      ["the-winking-worker", "the-snorkel-diver"],
      ["the-cheerful-worker", "the-storage-robot"],
      ["the-worker-in-silver-shades", "the-storage-robot"],
      ["the-cheerful-worker", "the-snorkel-diver"],
      ["the-worker-in-silver-shades", "the-snorkel-diver"],
      ["the-winking-worker", "the-worker-in-shades"],
      ["the-two-guys-in-bunny-suits", "the-disco-civilian"],
      ["the-graduate", "little-red-riding-hood"],
      ["little-red-riding-hood", "the-royal-daughter"],
      ["the-palace-orphans", "the-royal-daughter"],
      ["the-royal-daughter", "the-palace-orphans"],
      ["the-kid-in-pyjamas", "the-palace-orphans"],
      ["the-maiden", "the-royal-sons"],
      ["the-royal-sons", "the-maiden"],
      ["the-maiden", "the-royal-sons"],
      ["the-royal-sons", "the-maiden"],
      ["the-khaki-officer", "the-minigunner"],
      ["the-constable", "the-officer-in-sunglasses"],
      ["the-khaki-officer", "the-officer-in-sunglasses"],
      ["the-sheriff", "the-detective"],
      ["the-detective", "the-young-watchman"],
      ["the-swat-officers", "the-young-watchman"],
      ["the-young-watchman", "the-watch-commander"],
      ["the-firewoman", "the-fireman-in-black"],
      ["the-fireman-in-the-white-helmet", "the-fireman-in-black"],
      ["the-minigunner", "the-young-watchman"],
      ["the-vigilante", "the-watch-commander"],
      ["the-swat-officers", "the-detective"],
      ["the-sheriff", "the-detective"],
      ["the-royal-knight", "the-royal-archer-commander"],
      ["the-dark-haired-swordsman", "the-mace-knight"],
      ["the-red-capped-swordsman", "the-mace-knight"],
      ["the-royal-archer", "the-mace-knight"],
      ["the-fencer", "the-royal-knight"],
      ["the-elf-knight", "the-second-royal-archer"],
      ["the-elf-knight", "the-mace-knight"],
      ["the-elf-knight", "the-royal-knight"],
      ["the-ninja-fan", "the-second-royal-archer"],
      ["the-dragon-knight", "the-supreme-mega-knight"],
      ["the-supreme-mega-knight", "the-evil-knight"],
      ["the-viking", "the-knight-with-the-real-sword"],
      ["the-pirate-hobo", "the-knight-with-the-real-sword"],
      ["the-sleepy-pirate", "the-knight-with-the-real-sword"],
      ["the-pirate-captain", "the-knight-with-the-real-sword"],
      ["the-first-mate", "the-knight-with-the-real-sword"],
      ["the-tattooed-pirate", "the-knight-with-the-real-sword"],
      ["the-long-haired-pirate", "the-knight-with-the-real-sword"],
      ["the-pirate-captain", "the-pirate-hobo"],
      ["the-first-mate", "the-pirate-hobo"],
      ["the-tattooed-pirate", "the-pirate-hobo"],
      ["the-long-haired-pirate", "the-pirate-hobo"],
      ["the-dwarf-archer", "the-viking"],
      ["the-shadow-archer", "the-knight-with-the-real-sword"],
      ["the-robotic-samurai", "the-knight-with-the-real-sword"],
      ["the-second-viking", "the-supreme-mega-knight"],
      ["the-evil-knight", "the-supreme-mega-knight"],
      ["the-black-knight", "the-supreme-mega-knight"],
      ["the-swordsmith-knight", "the-supreme-mega-knight"],
      ["the-infamous-space-pirate", "the-supreme-mega-knight"],
      ["the-gladiator", "the-masked-space-pirate"],
      ["the-yellow-super-swordsman", "the-masked-space-pirate"],
      ["the-space-trucker", "the-masked-space-pirate"],
      ["the-warrior-orc", "the-masked-space-pirate"],
      ["the-evil-cavalryman", "the-masked-space-pirate"],
      ["the-evil-swordsman", "the-masked-space-pirate"],
      ["the-clubman", "the-evil-bowman"],
      ["the-armoured-space-pirate", "the-clubman"],
      ["the-squid-warrior", "the-shark-warrior"],
      ["the-tanker-robot", "gold-tooth"],
      ["thresher", "the-werewolf"],
      ["the-airborne-raider", "the-henchwoman-in-sunglasses"],
      ["the-armoury-traitor", "the-white-killer-bot"],
      ["the-hyper-violent-alien", "the-conquistador"],
      ["the-brawling-alien", "the-conquistador"],
      ["the-alien-medic", "the-conquistador"],
      ["the-infamous-traitor", "the-enemy-soldiers-in-olive"],
      ["the-soldier-with-the-skull", "the-enemy-soldiers-in-olive"],
      ["the-armoury-traitor", "the-enemy-soldiers-in-olive"],
      ["the-successful-replica", "the-enemy-soldiers-in-olive"],
      ["the-successful-replica", "the-infamous-traitor"],
      ["thresher", "the-vikings-wife"],
      ["the-tanker-robot", "the-anglerfish"],
      ["the-airborne-raider", "the-television"],
      ["thresher", "the-armoured-killer-bot"],
      ["the-tanker-robot", "the-white-killer-bot"],
      ["the-tanker-droid", "the-anglerfish"],
      ["the-hyper-violent-alien", "the-enemy-soldiers-in-olive"],
      ["the-evil-grenadier", "the-enemy-soldiers-in-olive"],
      ["the-tanker-robot", "the-enemy-soldiers-in-olive"],
      ["thresher", "the-enemy-soldiers-in-olive"],
      ["the-armoured-killer-bot", "the-enemy-soldiers-in-olive"],
      ["the-airborne-raider", "the-enemy-soldiers-in-olive"],
      ["the-white-killer-bot", "the-enemy-soldiers-in-olive"],
      ["the-looter", "the-enemy-soldiers-in-olive"],
      ["the-tanker-droid", "the-enemy-soldiers-in-olive"],
      ["the-looter", "the-hyper-violent-alien"],
      ["the-airborne-raider", "the-hyper-violent-alien"],
      ["the-evil-grenadier", "the-hyper-violent-alien"],
      ["the-tanker-robot", "the-hyper-violent-alien"],
      ["thresher", "the-hyper-violent-alien"],
      ["the-armoured-killer-bot", "the-hyper-violent-alien"],
      ["the-white-killer-bot", "the-hyper-violent-alien"],
      ["the-tanker-droid", "the-hyper-violent-alien"],
      ["the-brawling-alien", "the-enemy-soldiers-in-olive"],
      ["the-slimed-biker", "the-enemy-soldiers-in-olive"],
      ["the-orange-biker", "the-enemy-soldiers-in-olive"],
      ["the-goon-in-the-beanie", "the-enemy-soldiers-in-olive"],
      ["the-devoured", "the-enemy-soldiers-in-olive"],
      ["the-bionic-alien", "the-occupier"],
      ["the-grey-alien-soldier", "the-occupier"],
      ["the-evil-cyborg-soldier", "the-occupier"],
      ["the-propaganda-director", "the-cyborg"],
      ["the-television", "the-cyborg"],
      ["the-conquistador", "the-looter"],
      ["the-gangster-financier", "the-martians"],
      ["the-evil-space-militia", "the-evil-pilot"],
      ["the-evil-pilot", "the-evil-space-militia"],
      ["the-propaganda-director", "the-thug"],
      ["the-television", "the-thug"],
      ["the-evil-pilot", "the-skeleton-robot"],
      ["the-propagandist", "the-television"],
      ["the-second-gangster-financier", "the-goon-in-the-blue-cap"],
      ["the-television", "the-skeleton-robot"],
      ["the-television", "the-thug"],
      ["the-thug", "the-evil-pilot"],
      ["the-thug", "the-second-gangster-financier"],
      ["the-second-gangster-financier", "the-thug"],
      ["the-gangster-financier", "the-martians"],
      ["the-evil-skeletons", "the-second-gangster-financier"],
      ["the-skeleton-robot", "the-second-gangster-financier"],
      ["the-skeleton-robot", "the-thug"],
      ["the-second-gangster-financier", "the-evil-skeletons"],
      ["the-creepy-elf", "the-evil-space-militia"],
      ["the-bin-woman", "the-evil-space-militia"],
      ["the-bin-elder", "the-evil-space-militia"],
      ["the-man-in-the-astromech-head", "the-evil-skeletons"],
      ["the-vikings-wife", "the-man-in-the-astromech-head"],
      ["the-vikings-wife", "the-man-in-the-astromech-head"],
      ["the-martians", "the-gangster-financier"],
      ["the-alien-medic", "the-cyborg"],
      ["the-second-cyborg-soldier", "the-sting-rays"],
      ["the-kartians", "the-evil-pilot"],
      ["the-blue-eyed-alien", "the-evil-pilot"],
      ["the-anglerfish", "the-wolfman"],
      ["the-short-orc", "the-wolfman"],
      ["the-wolfman", "the-evil-dwarf"],
      ["the-orc-alien-hybrid", "the-ghost"],
      ["gold-tooth", "the-caveman"],
      ["the-helmeted-henchman", "the-caveman"],
      ["the-henchwoman-in-sunglasses", "the-caveman"],
      ["the-henchman-with-the-diamond-eye", "the-caveman"],
      ["the-cyborg", "the-alien-medic"],
      ["the-primitive-alien", "the-martians"],
      ["the-primitive-alien", "the-martians"],
      ["the-martians", "the-primitive-alien"],
      ["the-second-cyborg-soldier", "the-martians"],
      ["the-evil-pilot", "the-second-cyborg-soldier"],
      ["the-evil-pilot", "the-second-cyborg-soldier"],
      ["the-blue-eyed-alien", "the-second-cyborg-soldier"],
      ["the-blue-eyed-alien", "the-martians"],
      ["the-martians", "the-evil-pilot"],
      ["the-second-cyborg-soldier", "the-evil-pilot"],
      ["the-alien-medic", "the-primitive-alien"],
      ["the-primitive-alien", "the-alien-medic"],
      ["the-delta-gunner", "the-delta-medic"],
      ["the-delta-medic", "the-delta-gunner"],
      ["the-delta-sniper", "the-delta-gunner"],
      ["the-grinning-ranger", "the-wide-eyed-ranger"],
      ["the-third-ranger", "the-second-ranger"],
      ["the-second-ranger", "the-third-ranger"],
      ["the-stern-pilot", "the-smiling-pilot"],
      ["the-smirking-pilot", "the-pilot-in-glasses"],
      ["the-cool-aqua-diver", "the-aqua-force-diver"],
      ["the-pathfinder", "the-explorer-and-the-monkey"],
      ["the-gold-domed-astronaut", "the-explorer-and-the-monkey"],
      ["the-mars-mission-astronaut", "the-explorer-and-the-monkey"],
      ["the-astronaut-in-the-gold-visor", "the-explorer-and-the-monkey"],
      ["the-grimy-astronaut", "the-explorer-and-the-monkey"],
      ["the-smiling-astronaut", "the-explorer-and-the-monkey"],
      ["the-astronaut-in-the-yellow-visor", "the-explorer-and-the-monkey"],
      ["the-red-spaceman", "the-arctic-explorers"],
      ["the-blue-spaceman", "the-arctic-explorers"],
      ["the-yellow-spaceman", "the-arctic-explorers"],
      ["the-miner-in-goggles", "the-arctic-explorers"],
      ["the-snarling-miner", "the-arctic-explorers"],
      ["the-visored-miner", "the-arctic-explorers"],
      ["the-safari-master", "the-green-eyed-miner"],
      ["the-arctic-explorers", "the-green-eyed-miner"],
      ["the-green-eyed-miner", "the-safari-master"],
      ["the-miner-in-white", "the-safari-master"],
      ["the-smudged-miner", "the-safari-master"],
      ["the-aqua-force-leader", "the-safari-master"],
      ["the-aqua-force-second", "the-safari-master"],
      ["the-cool-aqua-diver", "the-safari-master"],
      ["the-aqua-force-diver", "the-safari-master"],
      ["the-beaming-diver", "the-diver-with-the-crooked-smile"],
      ["the-safari-master", "the-space-boarder"],
      ["the-former-dive-captain", "the-atlantis-leader"],
      ["the-snorkel-diver", "the-dive-captain"],
      ["the-space-boarder", "the-safari-master"],
      ["the-construction-chief", "the-boxer"],
      ["the-construction-chief", "the-snorkel-diver"],
      ["the-site-planner", "the-snorkel-diver"],
      ["the-smirking-worker", "the-snorkel-diver"],
      ["the-mechanic-supervisor", "the-ferrari-driver"],
      ["the-stern-worker", "the-snorkel-diver"],
      ["the-maintenance-technician", "the-ferrari-driver"],
      ["the-worker-in-shades", "the-snorkel-diver"],
      ["the-winking-worker", "the-blacksmith"],
      ["the-winking-worker", "the-snorkel-diver"],
      ["the-cheerful-worker", "the-storage-robot"],
      ["the-worker-in-silver-shades", "the-storage-robot"],
      ["the-cheerful-worker", "the-snorkel-diver"],
      ["the-worker-in-silver-shades", "the-snorkel-diver"],
      ["the-winking-worker", "the-worker-in-shades"],
      ["the-two-guys-in-bunny-suits", "the-disco-civilian"],
      ["the-graduate", "little-red-riding-hood"],
      ["little-red-riding-hood", "the-royal-daughter"],
      ["the-palace-orphans", "the-royal-daughter"],
      ["the-royal-daughter", "the-palace-orphans"],
      ["the-kid-in-pyjamas", "the-palace-orphans"],
      ["the-maiden", "the-royal-sons"],
      ["the-royal-sons", "the-maiden"],
      ["the-evil-doctor", "the-first-man-in-space"],
      ["the-transport-director", "the-evil-doctor"],
      ["the-evil-doctor", "the-transport-director"],
      ["the-butcher", "the-transport-director"],
      ["the-haunted-miner", "the-transport-director"],
      ["the-first-man-in-space", "the-transport-director"],
      ["the-astronaut-miner", "the-transport-director"],
      ["the-maker", "the-transport-director"],
      ["the-alien-technician", "the-transport-director"],
      ["the-robot-builder", "the-transport-director"],
      ["the-alien-racer", "the-transport-director"],
      ["the-escapees", "the-second-boxer"],
      ["the-financier-in-the-green-tie", "the-pa"],
      ["the-evil-financier", "the-pa"],
      ["the-financier-in-the-cravat", "the-pa"],
      ["the-tv-camera-woman", "the-pa"],
      ["matthew", "the-neutral-skeletons"],
      ["the-younger-peasant-boy", "little-red-riding-hood"],
      ["the-girl-in-the-guinea-pig-costume", "the-royal-daughter"],
      ["the-royal-daughter", "the-girl-in-the-guinea-pig-costume"],
      ["the-cat-lover", "the-royal-daughter"],
      ["the-cat-lover", "the-royal-daughter"],
      ["the-royal-daughter", "the-cat-lover"],
      ["the-guy-in-the-pizza-costume", "the-graduate"],
      ["the-graduate", "the-guy-in-the-pizza-costume"],
      ["the-two-guys-in-bunny-suits", "the-graduate"],
      ["the-two-guys-in-bunny-suits", "the-graduate"],
      ["the-graduate", "the-two-guys-in-bunny-suits"],
      ["the-two-peas-in-a-pod", "the-graduate"],
      ["the-graduate", "the-two-peas-in-a-pod"],
      ["the-red-hot-chili-pepper", "the-graduate"],
      ["the-graduate", "the-red-hot-chili-pepper"],
      ["the-brick-seller", "the-red-hot-chili-pepper"],
      ["the-son", "the-royal-sons"],
      ["the-mother", "the-son"],
      ["the-father", "the-intern"],
      ["the-royal-sons", "the-intern"],
      ["the-graduate", "the-hiker"],
      ["the-tin-robot", "the-tea-seller"],
      ["the-four-armed-alien", "the-tea-seller"],
      ["the-salvager", "the-tea-seller"],
      ["the-replica", "the-tea-seller"],
      ["the-princes-cousin", "the-replica"],
      ["the-older-peasant-boy", "the-guy-in-the-pizza-costume"],
      ["the-guy-in-the-pizza-costume", "the-older-peasant-boy"],
      ["the-dock-robot", "the-safari-master"],
      ["the-storage-robot", "the-city-financier"],
      ["the-potato-farmer", "the-tea-seller"],
      ["the-gas-men", "the-builder-and-his-clone"],
      ["the-spaceship-racer", "the-builder-and-his-clone"],
      ["the-ferrari-driver", "the-builder-and-his-clone"],
      ["the-princes-impersonator", "the-builder-and-his-clone"],
      ["the-porsche-driver", "the-builder-and-his-clone"],
      ["the-stunt-robot", "the-builder-and-his-clone"],
      ["the-stunt-driver", "the-builder-and-his-clone"],
      ["the-princes-cousin", "the-builder-and-his-clone"],
      ["the-princes-cousin", "the-ferrari-driver"],
      ["the-salvager", "the-hijacked"],
      ["the-hijacked", "the-salvager"],
      ["the-replica", "the-hijacked"],
      ["the-tin-robot", "the-salvager"],
      ["the-potato-farmer", "the-younger-peasant-boy"],
      ["the-potato-farmer", "the-younger-peasant-boy"],
      ["the-potato-farmer", "the-younger-peasant-boy"],
      ["the-younger-peasant-boy", "the-potato-farmer"],
      ["dr-oz", "the-mechanic-supervisor"],
      ["the-intern", "the-voiceless"],
      ["the-law-student", "the-hiker"],
      ["the-law-student", "the-graduate"],
      ["the-wedding-lady", "sean"],
      ["sean", "the-wedding-lady"],
      ["the-leprechaun", "the-cameraman"],
      ["the-statue-of-liberty", "the-bank-teller"],
      ["george-joudrie", "the-bank-teller"],
      ["the-man-with-the-frog", "the-inventory-specialist"],
      ["santa-claus", "the-four-armed-alien"],
      ["santa-claus", "the-goggled-diver"],
      ["santa-claus", "the-goggled-diver"],
      ["the-goggled-diver", "santa-claus"],
      ["george-joudrie", "the-salvager"],
      ["the-salvager", "george-joudrie"],
      ["the-statue-of-liberty", "george-joudrie"],
      ["george-joudrie", "the-statue-of-liberty"],
      ["the-activist", "the-statue-of-liberty"],
      ["the-statue-of-liberty", "the-activist"],
      ["the-dock-robot", "the-boxer"],
      ["the-spaceship-racer", "the-boxer"],
      ["the-princes-cousin", "the-boxer"],
      ["the-ferrari-driver", "the-boxer"],
      ["the-princes-impersonator", "the-ferrari-driver"],
      ["the-porsche-driver", "the-princes-impersonator"],
      ["the-porsche-driver", "the-princes-impersonator"],
      ["the-princes-impersonator", "the-porsche-driver"],
      ["the-stunt-robot", "the-boxer"],
      ["the-stunt-driver", "the-boxer"],
      ["the-technician", "the-boxer"],
      ["the-ground-technician", "the-boxer"],
      ["the-asteroid-gardener", "the-ground-technician"],
      ["the-ground-technician", "the-asteroid-gardener"],
      ["the-chef", "the-man-with-the-frog"],
      ["sarah", "the-miner-in-goggles"],
      ["the-explorer-and-the-monkey", "the-arctic-explorers"],
      ["the-construction-chief", "the-arctic-explorers"],
      ["the-atlantis-traitor", "the-construction-chief"],
      ["the-construction-chief", "the-diver-with-the-crooked-smile"],
      ["the-diver-with-the-crooked-smile", "the-construction-chief"],
      ["the-arctic-explorers", "the-diver-with-the-crooked-smile"],
      ["the-diver-with-the-crooked-smile", "the-arctic-explorers"],
      ["the-explorer-and-the-monkey", "the-diver-with-the-crooked-smile"],
      ["the-diver-with-the-crooked-smile", "the-explorer-and-the-monkey"],
      ["sarah", "the-car-repairman"],
      ["the-atlantis-traitor", "the-diver-with-the-crooked-smile"],
      ["the-diver-with-the-crooked-smile", "the-atlantis-traitor"],
      ["the-green-eyed-miner", "the-young-leader"],
      ["the-miner-in-white", "the-young-leader"],
      ["the-smudged-miner", "the-young-leader"],
      ["the-red-spaceman", "the-aqua-force-leader"],
      ["the-blue-spaceman", "the-aqua-force-leader"],
      ["the-yellow-spaceman", "the-blue-spaceman"],
      ["the-blue-spaceman", "the-yellow-spaceman"],
      ["george-joudrie", "the-stunt-driver"],
      ["george-joudrie", "the-stunt-driver"],
      ["the-stunt-driver", "george-joudrie"],
      ["the-mechanic-supervisor", "the-ground-technician"],
      ["the-ground-technician", "the-mechanic-supervisor"],
      ["the-tall-mechanic", "the-asteroid-gardener"],
      ["the-builder-and-his-clone", "the-asteroid-gardener"],
      ["the-gas-men", "the-asteroid-gardener"],
      ["the-genius-gorilla", "the-activist"],
      ["the-activist", "the-genius-gorilla"],
      ["the-gas-men", "the-builder-and-his-clone"],
      ["the-asteroid-gardener", "the-mechanic-supervisor"],
      ["the-chef", "the-karate-kid"],
      ["the-karate-kid", "the-chef"],
      ["the-apprentice-chef", "the-bodybuilder"],
      ["the-leprechaun", "the-boxer"],
      ["the-maintenance-technician", "the-safari-master"],
      ["the-inventory-specialist", "the-safari-master"],
      ["the-fisherman-and-son", "the-basketball-player"],
      ["the-basketball-player", "the-fisherman-and-son"],
      ["the-inuit-fisherman", "the-fisherman-and-son"],
      ["the-fisherman-and-son", "the-inuit-fisherman"],
      ["the-hatless-gnome", "the-leprechaun"],
      ["the-leprechaun", "the-hatless-gnome"],
      ["the-woman-in-the-space-jacket", "the-maiden"],
      ["the-maiden", "the-woman-in-the-space-jacket"],
      ["the-woman-with-the-heart-necklace", "the-brick-seller"],
      ["the-wedding-lady", "the-brick-seller"],
      ["the-wedding-lady", "the-woman-in-the-space-jacket"],
      ["the-beach-bum", "the-inuit-fisherman"],
      ["the-inuit-fisherman", "the-beach-bum"],
      ["the-man-with-the-frog", "sarah"],
      ["the-city-financier", "sarah"],
      ["the-bank-teller", "sarah"],
      ["the-sculptors-heir", "the-bank-teller"],
      ["the-bank-teller", "the-sculptors-heir"],
      ["the-tea-seller", "sarah"],
      ["the-traveller", "sarah"],
      ["the-wanderer", "sarah"],
      ["the-backpacker", "sarah"],
      ["the-royal-financier", "the-city-financier"],
      ["the-city-financier", "the-royal-financier"],
      ["dr-oz", "the-tea-seller"],
      ["the-tea-seller", "dr-oz"],
      ["the-minecraft-person", "the-car-repairman"],
      ["the-town-twins", "the-law-student"],
      ["the-law-student", "the-royal-financier"],
      ["the-royal-financier", "the-law-student"],
      ["the-average-joe", "sean"],
      ["the-voiceless", "the-activist"],
      ["the-activist", "the-voiceless"],
    ],
    good: [
      ["the-occultist", "the-mercenary"],
      ["the-reformed", "the-mercenary"],
    ],
  },

  /* ------------------------------------------------- stated placements
     Straight instructions that beat everything above. `after` puts one figure
     directly behind another inside the deck. */
  after: {
    // "I know I added commander Gree later, so just put it next to the other
    // clone commanders."
    "commander-gree": "commander-cody",
    // "Why is Captain Rex not with the other clone commanders?"
    "captain-rex": "commander-gree",
    // The Atlantis dive team's leader was last on his own team. He leads it.
    "the-atlantis-leader": "the-young-leader",
  },

};
