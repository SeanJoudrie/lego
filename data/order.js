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
    "Police": 7, "Chief of Police": [7, 0], "Watch Command": [7, 0],
    "Domestic Police Commander": [7, 0], "Space Police": 7,
    "Chief of Space Police": [7, 0], 
    "Sheriff": [7, 1], "Detective": 7, "SWAT": 7, "Animal Control": 7,
    "Highway Patrol": 7, 

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
    "Diver": [9, 5, 12], "Dive Team": [9, 5, 12], "Aqua Force": [9, 5, 12],
    "Leader": [9, 0, 12],

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
    "aphrodite": [9, 44],

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
    "the-verdauf-guards": [3, 7],  // ranked above green berets, so above elite
    // "One of the elite protection forces around the Prince - the top of that
    // ladder, and he climbed the whole thing. He started as a soldier, became
    // an agent, and made it all the way up." That is not a guard.
    "the-guardsman": [3, 9],
    "the-nightwatch-captain": [3, 8],  // a senior post, on the level of running royal intelligence

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
    // "He is literally just a guy with a robot arm." His card calls him an
    // ambassador because he is a bridge between civilisations, not because he
    // commands anything - he is a kind, well-travelled explorer with no combat
    // experience and one arm missing. He does not beat trained soldiers.
    "the-discarded": [9, 1],
    // Real combat experience and he teaches it, but he is badly worn - the new
    // legs rip into his torso. He trains soldiers; he does not outfight them.
    "the-instructor": 5,
    "the-bounty-hunter-captain": 4,
    "the-giant-orc": 4,
    "the-current": 4,              // an evil alien made of electricity

    // Background filler officers. Not combat soldiers and not people who
    // matter - so they go to the back of the soldiers rather than standing
    // among the champions on the strength of a title.
    "the-winter-trooper-leader": [5, 60],
    "the-engineer-commander": [5, 60],
    "the-hangar-commander": [5, 60],
    "the-range-commander": [5, 60],
    "the-enforcer-commander": [5, 60],
    "the-clone-captain": [5, 60],
    "the-painted-clone-commander": [5, 60],
    "the-discarded-commander": [5, 60],

    // Elite, both of them. The Gunner fought a great many missions and still
    // fights, with an arm the Goo turned to rock and left superhumanly strong.
    // The Younger Brother is Verdauf, and the Verdauf are not line infantry.
    "the-gunner": 4,
    "the-younger-brother": 4,
    "kenjen": 4,                   // filed Warrior on the job title; he is elite

    // --- 5. soldiers
    "the-spartan": 5,              // a Spartan soldier
    "the-chaosborn": 5,            // carries a sword
    "the-commissioners-apprentice": 5,   // he nearly killed the Commissioner
    "the-repair-crew": 5,          // armed and trained for combat
    "the-green-officer": [7, 0],

    // --- 8. civilians
    // Their titles say captain and commander; they run dive crews, so they
    // belong with the rugged civilians rather than with fighting forces.
    "the-dive-captain": [9, 12],
    "the-former-dive-captain": [9, 12],
    "the-aqua-force-leader": [9, 12],
    "the-aqua-force-second": [9, 12],
    "the-knighted-civilian": [9, 0],   // first of the civilians

    // Civilians who can actually fight. A boxer beats a shopkeeper, and this
    // rung has been ordered so that shows: these six sit above the athletes
    // who only run and kick, and well above anybody unarmed.
    "the-boxer": [9, 20],
    "the-second-boxer": [9, 20],
    "the-wrestler": [9, 21],
    "the-sumo-wrestler": [9, 21],
    "the-karate-kid": [9, 22],
    "the-bodybuilder": [9, 23],
    "matthew": [9, 62],            // a civilian child
    "elizabeth-swann": 9,
    "spongebob": 9,

    // The Atlantis dive team's actual leader. He was last; he leads it.

    // Leads soldiers, not a civilian outfit.
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
