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
    "Champions",       // 3  the best fighters and the officers who really command
    "Elite",           // 4  Jedi, Sith, assassins, commandos, bounty hunters, knights
    "Soldiers",        // 5  troopers, pilots, gunners, guards, warriors, droids, militia
    "Police",          // 6
    "Fire service",    // 7
    "Civilians",       // 8
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
  fallback: { good: 8, bad: 5 },

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
    "Mandalorian": 4, "Ninja": 4, "Samurai": 4, "Knight": 4, "Mace Knight": 4,
    "Swordsman": 4, "Fencer": 4, "Mercenary": 4, "Enforcer": 4, "Outlaw": 4,
    "Vigilante": 4, "Auror": 4, "Infiltrator": 4, "Disc Thrower": 4,
    "Brawler": 4, "Heavy": 4, "Guardian": 4, "Honor Guard": 4, "Agent": 4,
    "Royal Intelligence Agent": 4, "Smuggler": 4, "Fanatic": 4, "Shaman": 4,
    "Vessel": 4, "Parasite": 4, "Leader, Bionics Team": [4, 0],

    // 5 - soldiers
    "Soldier": 5, "Clone Trooper": 5, "Rifleman": 5, "Grenadier": 5,
    "Pilot": 5, "Fighter Pilot": 5, "Cargo Pilot": 5, "Test Pilot": 5,
    "Pilot Officer": 5, "Scout": 5, "Guard": 5, "Prince's Guard": 5,
    "Droid": 5, "Killer Bot": 5, "Defense Bot": 5, "Robot": 5,
    "Machine Gunner": 5, "Artillery": 5, "Defense Gunner": 5, "Medic": 5,
    "Armorer": 5, "Technician Sergeant": 5, "Sergeant": [5, 1],
    "Ranger": 5, "Space Ranger": 5,
    "Warrior": 5, "Pirate": 5, "Viking": 5, "Archer": 5, "Crossbowman": 5,
    "Goon": 5, "Thug": 5, "Raider": 5, "Quartermaster": 5, "Space Command": 5,
    "Propagandist": 5, "Space Biker": 5, "Discarded": 5, "Horse": 5,
    "Replica": 5,

    // 6 - police
    "Police": 6, "Chief of Police": [6, 0], "Watch Command": [6, 0],
    "Domestic Police Commander": [6, 0], "Space Police": 6,
    "Chief of Space Police": [6, 0], 
    "Sheriff": [6, 1], "Detective": 6, "SWAT": 6, "Animal Control": 6,
    "Highway Patrol": 6, 

    // 7 - fire service
    "Fire Chief": [7, 0], "Firefighter": 7,

    // 8 - civilians. Everything with a job that is not fighting, policing or
    // putting fires out. Leaders of civilian outfits lead their own people and
    // go no higher - a dive team captain does not outrank a soldier.
    "Leader": [8, 0], "Explorer": 8,
    "Safari Master": [8, 0], "Diver": [8, 2], "Dive Team": [8, 2], "Aqua Force": [8, 2],
    "Astronaut": [8, 2], "Spaceman": [8, 1], 
    "Aircraft Engineer": 8, "Aircraft Mechanic": 8, "Mechanic": 8,
    "Mechanic Supervisor": [8, 0], "Engineer": 8, "Technician": 8,
    "Construction Chief": [8, 0], "Construction Worker": 8, "Site Planner": 8,
    "Power Miner": [8, 2], "Miner": [8, 2], "Blacksmith": 8, "Dockworker": 8,
    "Farmer": 8, "Fisherman": 8, "Greengrocer": 8, "Shopkeeper": 8,
    "Chef": 8, "Tea Seller": 8, "Gas Attendant": 8, "Courier": 8,
    "Doctor": 8, "Professor": 8, "Librarian": 8, "Student": [8, 9],
    "Law Student": [8, 9], "Graduate": [8, 9], "Intern": [8, 9],
    "Bank Teller": 8, "Financier": 8, "Inventory Specialist": 8,
    "Secretary": 8, "Assistant": 8, "Rights Activist": 8, 
    "Traveller": 8, "Backpacker": 8, "Surfer": 8, "Athlete": 8,
    "Racing Driver": 8, "Stunt Driver": 8, "Stuntman": 8, "Stunt Double": 8,
    "Musician": 8, "Rapper": 8, "Bard": 8, "Jester": 8, "Clown": 8,
    "Stand-up Comedian": 8, "Camera Operator": 8, "Peasant": 8,
    "Civilian": 8, "Orphan": [8, 9], "Royal Child": [8, 9], "Child": [8, 9],
    "Apprentice": [8, 9], "Gatekeeper": 8, "Easter Bunny": 8, "Inventor": 8,

    // 2 - principals (second pass)
    "Emperor": 2, "Supreme Chancellor": 2, "Viceroy": 2, "Governor": 2,
    "Master of Faces": 3,

    // 3 - command (second pass)
    "Leader, Space Bikers": [3, 0], "Patrol Captain": [3, 0],
    "Nightwatch Captain": [6, 0], "Officer": 5,

    // 4 - elite (second pass)
    "Arms Dealer": 4, "Gunslinger": 4, "Gladiator": 4, "Pimp": 4,

    // 5 - soldiers (second pass)
    "Cavalry": 5, "Clubman": 5, "Astronaut Soldier": 5, "Beast": 5, "Elf": 5,

    // Third pass - corrections. A title only counts for as much as the force
    // behind it: leading a dive team or a pirate crew is not commanding an army.
    "Pharaoh": 4, "Supreme Mega Knight": [4, 0], "Swordmaster": [4, 1],
    "Archer Commander": [4, 1], "Ambassador": 4, "Combat Instructor": 4,
    "Forensic Agent": 4, "Power Source": 4,
    "Pirate Captain": [5, 0], "First Mate": [5, 1],
    "Space Police Gunner": 5, "Space Engineer": 5, "Space Cadet": [5, 9],
    "Occult Instructor": 8, "Launch Director": 8,

    // The space militia are not ordinary soldiers - they carry plasma weapons
    // and the Verdauf squadron is an elite guard. The adventure crew are not
    // soldiers at all but every one of them is armed, and so are the woodsman
    // and the jungle adventurers, who fight with swords.
    "Space Militia": 4, "Verdauf Squadron": 4,
    "Adventure Crew": 5, "Adventurer": 5, "Woodsman": 5,

    // 8 - civilians (second pass)
    "Director, Royal Transport Authority": [8, 0], "Robot Builder": 8,
    "Curator": 8, "Gardener": 8, "Convict": 8, "Criminal": 8,
  },

  /* ------------------------------------------------------- named exceptions
     People who do not sit where their job title puts them, each with why.
     The second number is standing inside the rung: 0 leads it, 9 brings up the
     rear, 5 if not given - and it now beats unit clustering, so somebody can be
     placed against the whole rung rather than only against their own unit. */
  figures: {
    // --- 0. gods. Creative power, not a title.
    "the-first-man": [0, 0],
    "the-cosmic-twins": [0, 1],
    "the-shadow-king": [0, 2],
    "the-light-king": [0, 3],

    // --- 1. demigods
    "the-green-demigod": [1, 0],
    "the-second": [1, 1],
    "the-engineer": [1, 2],
    "the-twins": [1, 3],
    "the-rebuilt": [1, 4],
    "the-manifestation-of-life": [1, 5],
    "the-blue-demigod": [1, 6],

    // --- 2. principals. The good side first, then the enemy's, in the order
    // you ranked them: Quinn, then Steel, then Phalanx.
    "the-prince": [2, 0],          // runs the entire good civilisation
    "the-space-princess": [2, 1],
    "the-outcast-prince": [2, 2],  // the Prince's brother
    "kaz": [2, 3],                 // his son
    "brute": [2, 4],
    "the-samurai": [2, 5],
    "the-red-ninja": [2, 6],       // the king ninja - stands beside the Samurai
    "the-ferryman": [2, 7],
    "quinn": [2, 0],              // number one villain of this world
    "steel": [2, 1],              // ultimate leader of the droid armies
    "phalanx": [2, 2],
    "the-martian-leader": [2, 3], // leads the entire Martian invasion
    "goku": [2, 0],
    "perfect-cell": [2, 1],
    "superman": [2, 0],

    // Ranked cosmic deities who are not gods, and one who is not a principal
    // either: "Aphrodite is no more powerful than a civilian."
    "deus-pater": 2,
    "aphrodite": 8,

    // Down a rung. The dwarves do as they please, so their king commands less
    // than the title suggests; the Evil King's Son is not a major villain.
    "the-dwarf-king": 3,
    "the-evil-kings-son": 4,

    // --- 3. champions. Real commanders and the best fighters, in your order.
    "the-palace-chief": [3, 0],
    "claws": [3, 1],
    "the-traitor-captain": [3, 2],
    "the-snow-jedi": [3, 3],
    "the-commissioner": [3, 4],    // the man in charge of the law
    "the-space-marshal": [3, 5],   // runs the entire space militia
    "the-grey-beanie": [3, 6],     // an extremely strong mercenary on the good side

    // Fighters you named as belonging above elite.
    "the-jedi": [3, 10],
    "the-beowulf-jedi": [3, 11],
    "the-second-padawan": [3, 12],
    "the-blue-haired-ninja": [3, 13],
    "the-street-ninja": [3, 14],
    "drake": [3, 15],
    "the-sniper": [3, 16],
    "heavy": [3, 17],
    "the-purple-shadow": [3, 10],  // super evil - above elite
    "johnny-plasma": [3, 11],
    "the-lead-alien-mercenary": [3, 12],
    "the-modified-arms-dealer": [3, 13],
    "the-guardsmans-partner": [3, 14],   // literally John Wick
    "the-charming-bounty-hunter": [3, 15],
    "the-dapper-bounty-hunter": [3, 16],
    "the-grey-longshot": [3, 17],
    "the-smiling-hitman": [3, 18],
    "the-crimson-ninja": [3, 19],
    "the-black-ninja": [3, 20],
    "darth-revan": [3, 0],
    "ultron": [3, 1],
    "magneto": [3, 2],

    // --- 4. elite
    "the-discarded": 4,            // an ambassador, not a field commander
    "the-instructor": 4,
    "the-bounty-hunter-captain": 4,
    "the-nightwatch-captain": 4,   // bumped up two rungs
    "the-giant-orc": 4,
    "the-current": 4,              // an evil alien made of electricity

    // --- 5. soldiers
    "the-spartan": 5,              // a Spartan soldier
    "the-chaosborn": 5,            // carries a sword
    "the-commissioners-apprentice": 5,   // he nearly killed the Commissioner
    "the-repair-crew": 5,          // armed and trained for combat
    "the-green-officer": [6, 0],

    // --- 8. civilians
    "the-occultist": 8,            // a professor
    "the-dive-captain": 8,
    "the-aqua-force-leader": 8,     // leads a dive crew, not a fighting force
    "the-aqua-force-second": 8,
    "the-flight-director": 8,       // runs a launch pad    // a civilian diver with a boat
    "the-former-dive-captain": 8,
    "the-knighted-civilian": [8, 0],
    "matthew": 8,                  // a civilian child
    "elizabeth-swann": 8,
    "spongebob": 8,

    // The Atlantis dive team's actual leader. He was last; he leads it.
    "the-young-leader": 8,
    "the-atlantis-leader": 8,

    // Leads soldiers, not a civilian outfit.
    "the-winter-trooper-leader": 3,
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
