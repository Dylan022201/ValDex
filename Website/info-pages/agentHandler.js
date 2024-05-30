document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the character name from localStorage
    const characterName = localStorage.getItem('selectedCharacter');

    // Set the title to include the character name
    document.title = `Val Dex | ${characterName}`;

    // Set the h2 tag to display the character's name
    const agentName = document.getElementById('agentName');
    agentName.textContent = characterName;

    // Set the agent image source dynamically
    const agentImage = document.getElementById('agentImage');

    let imageName;
    if (characterName === "KAY/O") {
        imageName = "Kayo.jpg"; // Adjusted filename for KAY/O
    } else {
        imageName = `${characterName}.jpg`; // Default filename for other characters
    }

    agentImage.src = `../assets/${imageName}`;

    // Define the abilities data for each character
    const abilitiesData = {
        Brimstone: [
            { name: "Incendiary", image: "../assets/abilities/incendiary.JPG", description: "An incendiary grenade to prevent opponents from accessing a location without risking death. Useful for denying push, plant, defuse, or flushing enemies out of a corner.<br><br>Cost: 250 Credits<br>Duration: 7s<br>Damage: 60/s<br>Charges: 1" },
            { name: "Stim Beacon", image: "../assets/abilities/stim_beacon.JPG", description: "A placeable beacon that applies multiple buffs to all allies that enter the radius. Useful for making a hasty push onto site, or a rotation if needed.<br><br>Cost: 200 Credits<br>Duration: 12s<br>Charges: 1<br><br>Buffs:<br>+10% Equip Speed<br>+15% Fire Rate<br>+10% Reload Speed<br>+10% Recovery Speed<br>+15% Speed Boost" },
            { name: "Sky Smoke", image: "../assets/abilities/sky_smoke.JPG", description: "A smoke utility with a limited range, placed from a screen providing an overhead map-view.<br><br>Cost:100<br>Duration: 19.25s<br>Charges: 3<br>" },
            { name: "Orbital Strike", image: "../assets/abilities/orbital_strike.JPG", description: "A strike coming from the sky, attacking a wide area, damaging everyone within. Great for stopping plant, clearing site, or eleminating opponents in closed off areas.<br><br>Ult Orbs: 8<br>Duration: 3s<br>Windup: 2s<br>Damage: 20/Tick (6.67 Ticks/s)" }
        ],
        Phoenix: [
            { name: "Blaze", image: "../assets/abilities/blaze.JPG", description: "Create a wall of fire that travels approximately 15m, with the ability to curve it the direction you turn your mouse. Damages enemies and allies that pass through it, but heals the user. <br><br>Cost: 150 Credits<br>Duration: 8s<br>Damage: 30/s<br>Charges: 1" },
            { name: "Curveball", image: "../assets/abilities/curveball.JPG", description: "A short range flash that will blind anyone in line of sight of it. Flies either to the left or right, capable of going around corners.<br><br>Cost: 250 Credits<br>Cast Time: 0.5s<br>Flash Time: 1.5s<br>Charges: 2" },
            { name: "Hot Hands", image: "../assets/abilities/hot_hands.JPG", description: "A molly that creates an AOE on the ground, damaging allies and enemies but heals the user.<br><br>Cost: Free<br>Duration: 3.25s<br>Recharge: 2 Kills<br>Damage: 60/s" },
            { name: "Run It Back", image: "../assets/abilities/run_it_back.JPG", description: "Leave a mark on the ground, taking control of a copy of yourself that, when killed or the time runs out, burns up and you are reborn at the mark. When reborn, your armor will be the same as that which you had at the start.<br><br>Ult Orbs: 6<br>Duration: 10s" }
        ],
        Sage: [
            { name: "Barrier Orb", image: "../assets/abilities/barrier_orb.JPG", description: "Create a wall, approximately 15m in length and 4m wide that can be used to raise yourself and others up, or to block paths and slow down pushes.<br><br>Cost: 400 Credits <br>Duration: 40s<br>Health: 400, or 800 (when fortified)<br>Charges: 1" },
            { name: "Slow Orb", image: "../assets/abilities/slow_orb.JPG", description: "An orb that, when fired, creates a slowing field upon landing on a ground surface. Effects enemies in range, making it to where they can't jump onto boxes or move quickly.<br><br>Cost: 200 Credits<br>Duration: 7s<br>Charges: 2" },
            { name: "Healing Orb", image: "../assets/abilities/healing_orb.JPG", description: "Heal yourself or allies, but do not replenish any shield. Allies must be line of sight.<br><br>Cost: Free<br>Duration: 5s (Ally) / 10s (Self)<br>Cooldown: 45s<br>Healing: 100HP (Ally) / 30HP (Self)<br>Charges: Infinte" },
            { name: "Resurrection", image: "../assets/abilities/resurrection.JPG", description: "Resurrect a fallen ally, unusable on self even when dead. Teammate is vulnerable to damage whilst going through the revive animation.<br><br>Ult Orbs: 8<br>Duration: 3.3s" }  
        ],
        Sova: [
            { name: "Shock Bolt", image: "../assets/abilities/shock_bolt.JPG", description: "Damaging AOE shock darts, capable of bouncing off walls up to 2 times before detonating. Number of bounces can be cycled through using right click.<br><br>Cost: 150 Credits<br>Charges: 2<br>Damage: 1-75 (Outer radius - inner radius)" },
            { name: "Owl Drone", image: "../assets/abilities/owl_drone.JPG", description: "A drone that can be utilized to gather information on the positioning of opponents or clear angles for your team to push. It is able to shoot a dart that, when it hits an enemy, spots them.<br><br>Cost: 400 Credits<br>Duration: 7s<br>Health: 100HP<br>Dart Interval: 0.6s<br>Dart Duration: 5s" },
            { name: "Recon Bolt", image: "../assets/abilities/recon_bolt.JPG", description: "A scanning dart, capable of bouncing off walls up to 2 times before anchoring and scanning. Number of bounces are cycled through by pressing right click.<br><br>Cost: Free<br>Duration: 3.2s<br>Cooldown: 40s<br>Health: 20HP<br>Scan Interval: 0.75s" },
            { name: "Hunter's Fury", image: "../assets/abilities/hunters_fury.JPG", description: "Grab a powerful bow with 3 shots, releases a blast of energy that travels through walls. Spots enemies hit by it, but user is unable to move the aim whilst firing. Can be canceled early.<br><br>Ult Orbs: 8<br>Duration 6s<br>Damage: 80<br>Time between shots: 1s" }
        ],
        Viper: [
            { name: "Snake Bite", image: "../assets/snake_bite.png", description: "Description of Snake Bite ability goes here." },
            { name: "Poison Cloud", image: "../assets/poison_cloud.png", description: "Description of Poison Cloud ability goes here." },
            { name: "Toxic Screen", image: "../assets/toxic_screen.png", description: "Description of Toxic Screen ability goes here." },
            { name: "Viper's Pit", image: "../assets/vipers_pit.png", description: "Description of Viper's Pit ability goes here." }
        ],
        Cypher: [
            { name: "Trapwire", image: "../assets/trapwire.png", description: "Description of Trapwire ability goes here." },
            { name: "Cyber Cage", image: "../assets/cyber_cage.png", description: "Description of Cyber Cage ability goes here." },
            { name: "Spycam", image: "../assets/spycam.png", description: "Description of Spycam ability goes here." },
            { name: "Neural Theft", image: "../assets/neural_theft.png", description: "Description of Neural Theft ability goes here." }
        ],
        Reyna: [
            { name: "Leer", image: "../assets/leer.png", description: "Description of Leer ability goes here." },
            { name: "Devour", image: "../assets/devour.png", description: "Description of Devour ability goes here." },
            { name: "Dismiss", image: "../assets/dismiss.png", description: "Description of Dismiss ability goes here." },
            { name: "Empress", image: "../assets/empress.png", description: "Description of Empress ability goes here." }
        ],
        Killjoy: [
            { name: "Alarmbot", image: "../assets/alarmbot.png", description: "Description of Alarmbot ability goes here." },
            { name: "Nanoswarm", image: "../assets/nanoswarm.png", description: "Description of Nanoswarm ability goes here." },
            { name: "Turret", image: "../assets/turret.png", description: "Description of Turret ability goes here." },
            { name: "Lockdown", image: "../assets/lockdown.png", description: "Description of Lockdown ability goes here." }
        ],
        Breach: [
            { name: "Flashpoint", image: "../assets/flashpoint.png", description: "Description of Flashpoint ability goes here." },
            { name: "Fault Line", image: "../assets/fault_line.png", description: "Description of Fault Line ability goes here." },
            { name: "Aftershock", image: "../assets/aftershock.png", description: "Description of Aftershock ability goes here." },
            { name: "Rolling Thunder", image: "../assets/rolling_thunder.png", description: "Description of Rolling Thunder ability goes here." }
        ],
        Omen: [
            { name: "Shrouded Step", image: "../assets/shrouded_step.png", description: "Description of Shrouded Step ability goes here." },
            { name: "Paranoia", image: "../assets/paranoia.png", description: "Description of Paranoia ability goes here." },
            { name: "Dark Cover", image: "../assets/dark_cover.png", description: "Description of Dark Cover ability goes here." },
            { name: "From the Shadows", image: "../assets/from_the_shadows.png", description: "Description of From the Shadows ability goes here." }
        ],
        Jett: [
            { name: "Cloudburst", image: "../assets/cloudburst.png", description: "Description of Cloudburst ability goes here." },
            { name: "Updraft", image: "../assets/updraft.png", description: "Description of Updraft ability goes here." },
            { name: "Tailwind", image: "../assets/tailwind.png", description: "Description of Tailwind ability goes here." },
            { name: "Blade Storm", image: "../assets/blade_storm.png", description: "Description of Blade Storm ability goes here." }
        ],
        Raze: [
            { name: "Boom Bot", image: "../assets/boom_bot.png", description: "Description of Boom Bot ability goes here." },
            { name: "Blast Pack", image: "../assets/blast_pack.png", description: "Description of Blast Pack ability goes here." },
            { name: "Paint Shells", image: "../assets/paint_shells.png", description: "Description of Paint Shells ability goes here." },
            { name: "Showstopper", image: "../assets/showstopper.png", description: "Description of Showstopper ability goes here." }
        ],
        Skye: [
            { name: "Regrowth", image: "../assets/regrowth.png", description: "Description of Regrowth ability goes here." },
            { name: "Trailblazer", image: "../assets/trailblazer.png", description: "Description of Trailblazer ability goes here." },
            { name: "Guiding Light", image: "../assets/guiding_light.png", description: "Description of Guiding Light ability goes here." },
            { name: "Seekers", image: "../assets/seekers.png", description: "Description of Seekers ability goes here." }
        ],
        Yoru: [
            { name: "Blindside", image: "../assets/blindside.png", description: "Description of Blindside ability goes here." },
            { name: "Gatecrash", image: "../assets/gatecrash.png", description: "Description of Gatecrash ability goes here." },
            { name: "Fakeout", image: "../assets/fakeout.png", description: "Description of Fakeout ability goes here." },
            { name: "Dimensional Drift", image: "../assets/dimensional_drift.png", description: "Description of Dimensional Drift ability goes here." }
        ],
        Astra: [
            { name: "Gravity Well", image: "../assets/gravity_well.png", description: "Description of Gravity Well ability goes here." },
            { name: "Nova Pulse", image: "../assets/nova_pulse.png", description: "Description of Nova Pulse ability goes here." },
            { name: "Nebula", image: "../assets/nebula.png", description: "Description of Nebula ability goes here." },
            { name: "Astral Form", image: "../assets/astral_form.png", description: "Description of Astral Form ability goes here." },
            { name: "Cosmic Divide", image: "../assets/cosmic_divide.png", description: "Description of Cosmic Divide ability goes here." }
        ],
        "KAY/O": [
            { name: "FRAG/ment", image: "../assets/frag_ment.png", description: "Description of FRAG/ment ability goes here." },
            { name: "FLASH/drive", image: "../assets/flash_drive.png", description: "Description of FLASH/drive ability goes here." },
            { name: "ZERO/point", image: "../assets/zero_point.png", description: "Description of ZERO/point ability goes here." },
            { name: "NULL/cmd", image: "../assets/null_cmd.png", description: "Description of NULL/cmd ability goes here." }
        ],
        Chamber: [
            { name: "Trademark", image: "../assets/trademark.png", description: "Description of trademark ability goes here." },
            { name: "Headhunter", image: "../assets/headhunter.png", description: "Description of Headhunter ability goes here." },
            { name: "Rendevous", image: "../assets/rendevous.png", description: "Description of Rendevous ability goes here." },
            { name: "Tour De Force", image: "../assets/tourdeforce.png", description: "Description of Tour De Force ability goes here." }
        ],
        Neon: [
            { name: "Fast Lane", image: "../assets/fast-lane.png", description: "Description of fast lane ability goes here." },
            { name: "Relay Bolt", image: "../assets/relay-bolt.png", description: "Description of relay bolt ability goes here." },
            { name: "High Gear", image: "../assets/high-gear.png", description: "Description of high gear ability goes here." },
            { name: "Overdrive", image: "../assets/overdrive.png", description: "Description of overdrive ability goes here." }
        ],
        Fade: [
            { name: "Prowler", image: "../assets/prowler.png", description: "Description of Prowler ability goes here." },
            { name: "Seize", image: "../assets/seize.png", description: "Description of Seize ability goes here." },
            { name: "Haunt", image: "../assets/haunt.png", description: "Description of Haunt ability goes here." },
            { name: "Nightfall", image: "../assets/nightfall.png", description: "Description of Nightfall ability goes here." }
        ],
        Harbor: [
            { name: "Cascade", image: "../assets/cascade.png", description: "Description of Cascade ability goes here." },
            { name: "Cove", image: "../assets/cove.png", description: "Description of Cove ability goes here." },
            { name: "High Tide", image: "../assets/high_tide.png", description: "Description of High Tide ability goes here." },
            { name: "Reckoning", image: "../assets/reckoning.png", description: "Description of Reckoning ability goes here." }
        ],
        Gekko: [
            { name: "Moshpit", image: "../assets/moshpit.png", description: "Description of Moshpit ability goes here." },
            { name: "Wingman", image: "../assets/wingman.png", description: "Description of Wingman ability goes here." },
            { name: "Dizzy", image: "../assets/dizzy.png", description: "Description of Dizzy ability goes here." },
            { name: "Thrash", image: "../assets/thrash.png", description: "Description of Thrash ability goes here." }
        ],
        Deadlock: [
            { name: "GravNet", image: "../assets/gravnet.png", description: "Description of GravNet ability goes here." },
            { name: "Sonic Sensor", image: "../assets/sonic_sensor.png", description: "Description of Sonic Sensor ability goes here." },
            { name: "Barrier Mesh", image: "../assets/barrier_mesh.png", description: "Description of Barrier Mesh ability goes here." },
            { name: "Annihilation", image: "../assets/annihilation.png", description: "Description of Annihilation ability goes here." }
        ],
        Iso: [
            { name: "Contingency", image: "../assets/contingency.png", description: "Description of Contingency ability goes here." },
            { name: "Undercut", image: "../assets/undercut.png", description: "Description of Undercut ability goes here." },
            { name: "Double Tap", image: "../assets/double_tap.png", description: "Description of Double Tap ability goes here." },
            { name: "Kill Contract", image: "../assets/kill_contract.png", description: "Description of Kill Contract ability goes here." }
        ],
        Clove: [
            { name: "Pick-Me-Up", image: "../assets/pick_me_up.png", description: "Description of Pick-Me-Up ability goes here." },
            { name: "Meddle", image: "../assets/meddle.png", description: "Description of Meddle ability goes here." },
            { name: "Ruse", image: "../assets/ruse.png", description: "Description of Ruse ability goes here." },
            { name: "Not Dead Yet", image: "../assets/not_dead_yet.png", description: "Description of Not Dead Yet ability goes here." }
        ],

    };


    // Function to create the abilities table based on character name
function createAbilitiesTable(characterName) {
    const abilities = abilitiesData[characterName];
    const table = document.createElement('table');

    // Loop through abilities and create table rows
    for (let i = 0; i < abilities.length; i += 2) {
        const row = table.insertRow();
        const cell1 = row.insertCell();
        const cell2 = row.insertCell();

        // Calculate the width for each cell
        const cellWidth = (50 / abilities.length) + '%';

        // Add shadow and other styles to each cell
        cell1.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
        cell2.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
        cell1.style.padding = '10px';
        cell2.style.padding = '10px';
        cell1.style.verticalAlign = 'top'; // Align content to the top
        cell2.style.verticalAlign = 'top'; // Align content to the top

        // Set the width for each cell
        cell1.style.width = cellWidth;
        cell2.style.width = cellWidth;

        // Add ability 1
        const ability1 = abilities[i];
        cell1.innerHTML = `<h4>${ability1.name}</h4><img src="${ability1.image}" alt="${ability1.name}" style="width: 50px; height: 50px; margin-bottom: 10px;"><div class="cell_container"><p>${ability1.description}</p></div>`;

        // Check if there is a second ability for this row
        if (i + 1 < abilities.length) {
            const ability2 = abilities[i + 1];
            cell2.innerHTML = `<h4>${ability2.name}</h4><img src="${ability2.image}" alt="${ability2.name}" style="width: 50px; height: 50px; margin-bottom: 10px;"><div class="cell_container"><p>${ability2.description}</p></div>`;
        }
    }

    return table;
}

    // Get the abilities table container
    const abilitiesTable = document.getElementById('abilitiesTable');

    // Call the function to create abilities table and append it to the container
    abilitiesTable.appendChild(createAbilitiesTable(characterName));
});
