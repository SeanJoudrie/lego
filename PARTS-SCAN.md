# Parts scan

Machine guesses from `tools/identify.js`, which sends each photo to
Brickognize and reports the official minifigure it most resembles.

**These are not facts.** On a kitbash the tool locks onto whichever part it
recognises loudest, so a result names a *donor* rather than the figure. Treat
every line as a lead to confirm, not an answer. Nothing here has been written
into the catalogue.

Regenerate with:

    node tools/identify.js images/*.jpg --type figs --brief | sort -rn

## What this run turned up

**The best-looking figures in the collection are mostly LEGO Insectoids (1998).**
The Second, the Twins and the Engineer all trace back to that one obscure space
theme — including those translucent neon-green helmets. Three separate
characters, built years apart, from the same visual well.

**The Royal Daughter and the Senate-era Prince both come back as Onaconda Farr**
— a Galactic Senate senator. The lore says she wears her dad's old Senate coat.
The torso is an actual senator's torso. The plastic and the story agree without
anyone planning it.

**Armstrong and the Deputy both come back as Rebel Fleet Trooper.** Same base
figure, which is why they share a torso — and in the lore that torso is the
Royal Intelligence Agency uniform.

**The Shadow Prince comes back as Emperor Palpatine.** His father is the Shadow
King, the villain. He is built out of the most famous villain in Star Wars.

**Kaz comes back as Cad Bane** — a bounty hunter, which is what Kaz is.

Confirmed against what the owner already remembered: the Commissioner (Naboo),
the Mechanic (Hoth rebels), Claws (Captain Rex helmet).

## Full results

```
 89%  the-tricksters-apprentice-01   Dr. Kilroy / Dr. Charles Lightning - White Shirt and Suspenders, Green Legs, White Pith Helmet
 89%  the-samurai-01                 Ninja - Samurai, Blue Young
 89%  the-engineer-01                Insectoids Zotaxian Alien - Male, Gray and Green with Green Circuits and Silver Hoses, with Air Tanks (Danny Longlegs / Corporal Steel)
 88%  the-twins-01                   Insectoids Zotaxian Alien - Male, Gray and Blue with Silver Circuits and Hoses (Lieutenant Maverick)
 88%  the-space-princess-01          Fantasy Era - Crown Queen
 86%  armstrong-01                   Rebel Fleet Trooper - Plain Vest, Grin
 85%  the-second-02                  Insectoids Droid (Gigabot)
 85%  the-green-captain-01           Clone Trooper, Horn Company (Phase 1) - Sand Green and Lime Markings, Large Eyes
 85%  heavy-02                       Senate Commando Captain - Plain Legs, Large Eyes
 85%  heavy-01                       Senate Commando Captain - Plain Legs, Large Eyes
 84%  the-commissioner-01            Naboo Fighter Pilot - Tan Jacket
 83%  the-explorer-and-the-monkey-01 Arctic - Black, Black Hood, Backpack
 82%  the-flight-director-01         Space Port - Ground Control, Red Cap
 80%  the-younger-brother-01         Clone Trooper, 327th Star Corps (Phase 2) - Black Head
 79%  the-repair-crew-02             Gate Guard
 78%  kaz-01                         Cad Bane - Blue Head, Dark Bluish Gray Legs
 78%  drake-01                       Clone Bomb Squad Trooper (Phase 1) - Large Eyes
 77%  the-second-01                  Insectoids Droid (Gigabot)
 77%  the-royal-daughter-02          Onaconda Farr
 76%  the-prince-senator-01          Onaconda Farr
 76%  the-palace-chief-01            Jet - Trans-Neon Green Visor
 75%  the-royal-daughter-01          Onaconda Farr
 75%  the-red-ninja-01               Ninja - Red
 75%  the-mad-ticket-man-01          Professor Henry Jones Sr. - Dark Bluish Gray Pith Helmet, Diary in Pocket
 75%  brute-01                       Space Police 3 Alien - Rench
 73%  the-green-demigod-01           Jacket Green with 2 Large Pockets - Green Legs, Black Male Hair
 72%  the-royal-sons-01              Snowboarder Guy, Series 5 (Minifigure Only without Stand and Accessories)
 72%  the-discarded-01               Saw Fist
 72%  the-deputy-01                  Rebel Fleet Trooper / Rebel Scout Trooper - Plain Vest, Frown
 72%  the-blue-haired-ninja-01       Imperial Royal Guard - Black Hands
 71%  the-space-marshal-01           Space Police 3 Officer  4 - Air Tanks
 71%  the-shadow-prince-01           Emperor Palpatine - Yellow Head, Black Hands
 66%  the-mechanic-01                Hoth Rebel Trooper (Orange Chin Dimple)
 64%  the-first-man-01               Overalls Striped Blue with Pocket, Blue Legs, Red Construction Helmet, Silver Glasses and Eyebrows
 62%  the-street-ninja-01            Plain Black Torso with Yellow Arms, Black Legs, Sunglasses, Black Cap
 57%  the-outcast-prince-01          Ogel - Black Hands
 53%  claws-01                       Clone Trooper Captain Rex, 501st Legion (Phase 2) - Blue Cloth Pauldron, Black Cloth Kama, Large Eyes
 51%  the-gas-men-01                 Octan - Blue Oil, Blue Legs, Red Short Bill Cap, Orange Sunglasses
  --  the-sniper-01                  (nothing found)
  --  the-repair-crew-01             (nothing found)
  --  the-prince-king-01             (nothing found)
  --  the-pineapple-ninja-01         (nothing found)
  --  the-palace-orphans-01          (nothing found)
  --  the-jedi-01                    (nothing found)
  --  the-instructor-01              (nothing found)
  --  the-ferryman-01                (nothing found)
  --  the-daredevils-01              (nothing found)
  --  the-activist-01                (nothing found)
  --  armstrong-02                   (nothing found)
```

## No result

Group shots (several figures in frame), the most heavily rebuilt figures, and
the salvaged ones return nothing. That is the tool working correctly — there is
no official figure for them to resemble.
