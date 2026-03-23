<script setup lang="ts">
// Full event list with Rust-inspired descriptions
const events = [
  {
    title: "Wipe Day: Fresh Start",
    date: "2026-04-01",
    link: "/events/wipe-day",
    description: "The server resets. All resources are fresh, bases wiped. Gather, craft, and stake your claim before rivals do. The war for territory begins now."
  },
  {
    title: "Airdrop Madness",
    date: "2026-04-05",
    link: "/events/airdrop-madness",
    description: "A mysterious supply plane scatters high-tier loot across the map. Beware: other survivors are hunting the same prizes. Fight, flee, or snipe from a distance."
  },
  {
    title: "Raiders on the Move",
    date: "2026-04-10",
    link: "/events/raider-invasion",
    description: "A notorious raider clan is moving through the territory. Expect heavy PvP and unexpected assaults on bases. Prepare defenses or ambush them first."
  },
  {
    title: "Radiation Storm",
    date: "2026-04-12",
    link: "/events/radiation-storm",
    description: "A sudden spike in radiation hits the outskirts. Protective gear is mandatory. Loot radioactive zones for rare crafting components—risk vs reward is real."
  },
  {
    title: "Supply Run Challenge",
    date: "2026-04-15",
    link: "/events/supply-run",
    description: "Teams compete to secure the most resources in limited time. PvP allowed. Only the fastest and strongest survive. Gather, defend, and dominate the leaderboards."
  },
  {
    title: "Helicopter Hunt",
    date: "2026-04-18",
    link: "/events/helicopter-hunt",
    description: "A patrol helicopter spawns over high-risk zones. Take it down to claim explosive loot—but the alarm draws everyone’s attention. Strategy, skill, and timing are everything."
  },
  {
    title: "Night of the Wiped",
    date: "2026-04-22",
    link: "/events/night-of-wiped",
    description: "The server plunges into darkness. Night vision or torchlight is your only ally. Expect ambushes, stealth raids, and survival horror-style encounters as you fight for every scrap."
  },
  {
    title: "Elite Loot Cache",
    date: "2026-04-25",
    link: "/events/elite-loot",
    description: "Rare crates spawn randomly across the map. The contents are legendary—but only those with speed and cunning will claim them. PvP chaos guaranteed."
  },
  {
    title: "Final Wipe Countdown",
    date: "2026-04-30",
    link: "/events/final-wipe",
    description: "The end of the season approaches. Fortify, loot, and raid like there’s no tomorrow. The final push for dominance is here—who will rise, and who will fall?"
  }
];

// Function to calculate days left
const daysLeft = (eventDate: string) => {
  const now = new Date();
  const event = new Date(eventDate);
  const diff = event.getTime() - now.getTime();
  return diff > 0 ? Math.ceil(diff / (1000 * 60 * 60 * 24)) : 0;
};

const sectionDescription = `
Never miss an event! Stay updated on raids, wipe events, airdrops, and deadly radiation storms. 
Prepare your gear, team up, and dominate the server together. Rust never sleeps. 
`;
</script>

<template>
  <section id="events" class="events-section">
    <!-- Background layers -->
    <div class="bg"></div>
    <div class="overlay"></div>
    <div class="grain"></div>

    <!-- Smoke effects -->
    <div class="smoke smoke-1"></div>
    <div class="smoke smoke-2"></div>

    <!-- Content -->
    <div class="content">
      <h2>EVENT SCHEDULE</h2>
      <div class="divider"></div>
      <p class="description" v-html="sectionDescription"></p>

      <div class="events-grid">
        <div v-for="event in events" :key="event.title" class="event-card">
          
          <!-- Date Tag -->
          <div class="event-date">
            {{ event.date }}<br>
            <small>{{ daysLeft(event.date) }} days left</small>
          </div>

          <!-- Event Title -->
          <h3>{{ event.title }}</h3>

          <!-- Short Description -->
          <p class="event-short">{{ event.description }}</p>

          <!-- Button -->
          <a :href="event.link" class="event-btn">
            VIEW DETAILS
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.events-section {
  position: relative;
  width: 100%;
  min-height: 600px;
  padding: 80px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: #ddd;
}

/* Background layers */
.bg {
  position: absolute;
  width: 110%;
  height: 110%;
  background: url('https://images.unsplash.com/photo-1627002222747-7eb799c3f07a?auto=format&fit=crop&w=1950&q=80') center/cover;
  filter: brightness(0.25) contrast(1.4);
}
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(0,0,0,0.3), rgba(0,0,0,0.95));
}
.grain {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("https://www.transparenttextures.com/patterns/asfalt-dark.png");
  opacity: 0.25;
}

/* Smoke animations */
.smoke {
  position: absolute;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.04), transparent);
  animation: smokeMove 40s linear infinite;
}
.smoke-2 {
  animation-duration: 60s;
  opacity: 0.5;
}
@keyframes smokeMove {
  from { transform: translate(-10%, -10%); }
  to { transform: translate(10%, 10%); }
}

/* Content */
.content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  text-align: center;
}

/* Title and description */
.events-section h2 {
  font-size: 3rem;
  color: #d47a2a;
  letter-spacing: 3px;
}
.divider {
  width: 100px;
  height: 3px;
  background: #d47a2a;
  margin: 20px auto 20px;
}
.description {
  max-width: 900px;
  margin: 0 auto 40px;
  line-height: 1.8;
  color: #ccc;
  font-size: 1.15rem;
}

/* Grid */
.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

/* Event Cards */
.event-card {
  position: relative;
  background: linear-gradient(145deg, #1c1c1c, #111);
  border: 1px solid #2a2a2a;
  padding: 25px 20px;
  border-radius: 16px;
  transition: all 0.3s ease;
}
.event-card:hover {
  border-color: #d47a2a;
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 0 24px rgba(212,122,42,0.3);
}

/* Date tag */
.event-date {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #d47a2a;
  color: #111;
  padding: 6px 12px;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 6px;
  box-shadow: 0 0 6px rgba(212,122,42,0.6);
  line-height: 1.2;
}

/* Event Title */
.event-card h3 {
  margin: 15px 0 10px;
  color: #fff;
  font-size: 1.3rem;
  text-shadow: 0 0 6px rgba(0,0,0,0.5);
}

/* Short Description */
.event-short {
  font-size: 0.95rem;
  color: #ccc;
  margin-bottom: 15px;
  line-height: 1.6;
}

/* Button */
.event-btn {
  display: inline-block;
  padding: 10px 18px;
  background: linear-gradient(145deg, #7289da, #5b6eae);
  color: #fff;
  font-weight: 600;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
}
.event-btn:hover {
  transform: scale(1.05);
  background: linear-gradient(145deg, #5b6eae, #7289da);
  box-shadow: 0 0 16px rgba(114,137,218,0.6);
}

/* Mobile */
@media (max-width: 768px) {
  .events-section h2 { font-size: 2rem; }
  .description { font-size: 1rem; }
  .event-card { padding: 20px 15px; }
  .event-card h3 { font-size: 1.1rem; }
  .event-short { font-size: 0.9rem; }
  .event-btn { padding: 8px 14px; font-size: 0.85rem; }
}
</style>