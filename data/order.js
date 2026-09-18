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
    "Civilians",       // 9
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
  fallback: { good: 9, bad: 5 },

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
    "Ranger": 5, "Space Ranger": 5,
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
    "Astronaut": [9, 5, 10], "Power Miner": [9, 5, 10], "Miner": [9, 5, 10],
    "Explorer": [9, 5, 10], "Safari Master": [9, 0, 10], "Spaceman": [9, 5, 10],
    "Aqua Force": [9, 5, 12], "Atlantis Diver": [9, 5, 13],
    "Diver": [9, 5, 14], "Dive Team": [9, 5, 14],
    "Leader": [9, 0, 13],

    // 30 - athletes and trades that take a body (the fighters among the
    // athletes are named further down, at 20)
    "Athlete": [9, 5, 30],
    "Blacksmith": [9, 5, 30], "Dockworker": [9, 5, 30], "Farmer": [9, 5, 30],
    "Fisherman": [9, 5, 30], "Gardener": [9, 5, 30], "Courier": [9, 5, 30],
    "Mechanic": [9, 5, 32], "Mechanic Supervisor": [9, 0, 32],
    "Aircraft Mechanic": [9, 5, 32], "Aircraft Engineer": [9, 5, 32],
    "Engineer": [9, 5, 32], "Technician": [9, 5, 32], "Robot Builder": [9, 5, 32],
    "Construction Chief": [9, 0, 34], "Construction Worker": [9, 5, 34],
    "Site Planner": [9, 5, 34],
    "Racing Driver": [9, 5, 36], "Stunt Driver": [9, 5, 36],
    "Stuntman": [9, 5, 36], "Stunt Double": [9, 5, 36],
    "Chef": [9, 5, 36], "Gas Attendant": [9, 5, 36],

    // 40 - desks, shops, stages
    "Doctor": [9, 5, 40], "Professor": [9, 5, 40], "Librarian": [9, 5, 40],
    "Inventor": [9, 5, 40], "Curator": [9, 5, 40], "Occult Instructor": [9, 5, 40],
    "Launch Director": [9, 0, 40], "Director, Royal Transport Authority": [9, 0, 40],
    "Financier": [9, 5, 42], "Bank Teller": [9, 5, 42],
    "Inventory Specialist": [9, 5, 42], "Secretary": [9, 5, 42],
    "Assistant": [9, 5, 42], "Rights Activist": [9, 5, 42],
    "Shopkeeper": [9, 5, 44], "Greengrocer": [9, 5, 44], "Tea Seller": [9, 5, 44],
    "Musician": [9, 5, 46], "Rapper": [9, 5, 46], "Bard": [9, 5, 46],
    "Jester": [9, 5, 46], "Clown": [9, 5, 46], "Stand-up Comedian": [9, 5, 46],
    "Camera Operator": [9, 5, 46],
    "Traveller": [9, 5, 48], "Backpacker": [9, 5, 48], "Surfer": [9, 5, 48],
    "Gatekeeper": [9, 5, 48], "Easter Bunny": [9, 5, 48],
    "Convict": [9, 5, 48], "Criminal": [9, 5, 48], "Peasant": [9, 5, 48],

    // 50 - unarmed, and nothing else written down
    "Civilian": [9, 5, 50],

    // 60 - children, students, apprentices
    "Student": [9, 9, 60], "Law Student": [9, 9, 60], "Graduate": [9, 9, 60],
    "Intern": [9, 9, 60], "Apprentice": [9, 9, 60],
    "Orphan": [9, 9, 62], "Royal Child": [9, 9, 62], "Child": [9, 9, 62],

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
    "aphrodite": [9, 44],              // no more powerful than a civilian
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
    "the-discarded": [9, 1],           // no combat experience and one arm short
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
    "the-knighted-civilian": [9, 0],
    "the-boxer": [9, 20], "the-second-boxer": [9, 20],
    "the-wrestler": [9, 21], "the-sumo-wrestler": [9, 21],
    "the-karate-kid": [9, 22], "the-bodybuilder": [9, 23],
    "the-mechanic": [9, 10],           // he repaired his own arm and his own skull
    "the-hijacked": [9, 16],
    "the-dive-captain": [9, 14],
    "the-former-dive-captain": [9, 14],
    "the-aqua-force-leader": [9, 12],
    "the-aqua-force-second": [9, 12],
    "matthew": [9, 62],
    "elizabeth-swann": 9,
    "spongebob": 9,
    "the-maiden": [9, 52],             // behind the cop and the man with a sword
    "little-red-riding-hood": [9, 60],
    "the-neutral-skeletons": [9, 58],  // they are bones. They cannot move.
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
     front of the second". */
  moves: {},

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
