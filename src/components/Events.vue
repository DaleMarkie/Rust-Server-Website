<script setup lang="ts">
import { ref, watch } from 'vue';

// Full Rust-inspired events with example images
const events = [
  { 
    title: "Wipe Day: Fresh Start", 
    date: "2026-04-01", 
    image: "https://images.squarespace-cdn.com/content/v1/602d246245658135031e4b2a/49d78f2e-156a-472f-9ce4-590b7d7502c1/V1_Updated.png",
    description: "The server resets. All resources are fresh, bases wiped. Gather, craft, and stake your claim before rivals do. The war for territory begins now." 
  },
  { 
    title: "Airdrop Madness", 
    date: "2026-04-05", 
    image: "https://images.squarespace-cdn.com/content/v1/602d246245658135031e4b2a/49d78f2e-156a-472f-9ce4-590b7d7502c1/V1_Updated.png",
    description: "A mysterious supply plane scatters high-tier loot across the map. Beware: other survivors are hunting the same prizes. Fight, flee, or snipe from a distance." 
  },
  { 
    title: "Raiders on the Move", 
    date: "2026-04-10", 
    image: "https://images.squarespace-cdn.com/content/v1/602d246245658135031e4b2a/49d78f2e-156a-472f-9ce4-590b7d7502c1/V1_Updated.png",
    description: "A notorious raider clan is moving through the territory. Expect heavy PvP and unexpected assaults on bases. Prepare defenses or ambush them first." 
  },
  { 
    title: "Radiation Storm", 
    date: "2026-04-12",
    image: "https://images.squarespace-cdn.com/content/v1/602d246245658135031e4b2a/49d78f2e-156a-472f-9ce4-590b7d7502c1/V1_Updated.png",
    description: "A sudden spike in radiation hits the outskirts. Protective gear is mandatory. Loot radioactive zones for rare crafting components—risk vs reward is real." 
  }
];

// Modal state
const selectedEvent = ref<null | typeof events[0]>(null);
const isModalOpen = ref(false);

const openModal = (event: typeof events[0]) => {
  selectedEvent.value = event;
  isModalOpen.value = true;
};

// Close modal and restore scroll
const closeModal = () => {
  isModalOpen.value = false;
};

watch(isModalOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : '';
});

// Days left calculation
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

    <div class="content">
      <h2>EVENT SCHEDULE</h2>
      <div class="divider"></div>
      <p class="description" v-html="sectionDescription"></p>

      <div class="events-grid">
        <div 
          v-for="event in events" 
          :key="event.title" 
          class="event-card" 
          @click="openModal(event)"
          :style="{ backgroundImage: `url(${event.image})` }"
        >
          <div class="event-date">
            {{ event.date }}<br>
            <small>{{ daysLeft(event.date) }} days left</small>
          </div>
          <h3>{{ event.title }}</h3>
          <p class="event-short">{{ event.description.substring(0, 80) }}...</p>
        </div>
      </div>

      <!-- ✅ NEW BUTTON -->
      <router-link to="/events" class="see-all-events">
        See All Events →
      </router-link>

    </div>
  </section>

  <!-- Modal -->
  <div v-if="isModalOpen" class="modal-backdrop" @click.self="closeModal">
    <div class="modal">
      <img v-if="selectedEvent?.image" :src="selectedEvent.image" class="modal-img"/>
      <h3>{{ selectedEvent?.title }}</h3>
      <p class="modal-date">
        Date: {{ selectedEvent?.date }} 
        ({{ selectedEvent ? daysLeft(selectedEvent.date) : 0 }} days left)
      </p>
      <p class="modal-description">{{ selectedEvent?.description }}</p>
      <button class="close-btn" @click="closeModal">CLOSE</button>
    </div>
  </div>
</template>

<style scoped>
/* Event section */
.events-section { position: relative; width: 100%; min-height: 600px; padding: 80px 20px; display: flex; align-items: center; justify-content: center; overflow: hidden; color: #ddd; }
.bg { position: absolute; width: 110%; height: 110%; background: url('https://images.unsplash.com/photo-1627002222747-7eb799c3f07a?auto=format&fit=crop&w=1950&q=80') center/cover; filter: brightness(0.25) contrast(1.4); }
.overlay { position: absolute; width: 100%; height: 100%; background: radial-gradient(circle, rgba(0,0,0,0.3), rgba(0,0,0,0.95)); }
.grain { position: absolute; width: 100%; height: 100%; background: url("https://www.transparenttextures.com/patterns/asfalt-dark.png"); opacity: 0.25; }
.smoke { position: absolute; width: 200%; height: 200%; background: radial-gradient(circle, rgba(255,255,255,0.04), transparent); animation: smokeMove 40s linear infinite; }
.smoke-2 { animation-duration: 60s; opacity: 0.5; }

@keyframes smokeMove {
  from { transform: translate(-10%, -10%); }
  to { transform: translate(10%, 10%); }
}

.content { position: relative; z-index: 2; width: 90%; max-width: 1200px; text-align: center; margin-left: -50px; }

.events-section h2 { font-size: 3rem; color: #d47a2a; letter-spacing: 3px; }
.divider { width: 100px; height: 3px; background: #d47a2a; margin: 20px auto; }
.description { max-width: 900px; margin: 0 auto 40px; line-height: 1.8; color: #ccc; font-size: 1.15rem; }

.events-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; }

.event-card {
  position: relative;
  background: linear-gradient(145deg, #1c1c1c, #111);
  border: 1px solid #2a2a2a;
  padding: 25px 20px;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-size: cover;
  background-position: center;
}

.event-card:hover {
  border-color: #d47a2a;
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 0 24px rgba(212,122,42,0.3);
}

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

.event-card h3 {
  margin: 15px 0 10px;
  color: #fff;
  font-size: 1.3rem;
}

.event-short {
  font-size: 0.95rem;
  color: #ccc;
  line-height: 1.6;
}

/* ✅ NEW BUTTON STYLE */
.see-all-events {
  display: inline-block;
  margin-top: 40px;
  font-size: 1.1rem;
  font-weight: 700;
  color: #d47a2a;
  text-decoration: none;
  border: 2px solid #d47a2a;
  padding: 10px 20px;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.see-all-events:hover {
  background: #d47a2a;
  color: #111;
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(212,122,42,0.5);
}

/* Modal */
.modal-backdrop {
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background: rgba(0,0,0,0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
}

.modal {
  background: #1c1c1c;
  padding: 30px 25px;
  border-radius: 16px;
  max-width: 500px;
  width: 90%;
  color: #fff;
  text-align: center;
  box-shadow: 0 0 24px rgba(212,122,42,0.5);
}

.modal-img {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
}

.modal h3 {
  margin-bottom: 15px;
  font-size: 1.8rem;
  color: #d47a2a;
}

.modal-date {
  margin-bottom: 20px;
  font-size: 0.9rem;
  color: #ccc;
}

.modal-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #ddd;
}

.close-btn {
  margin-top: 20px;
  padding: 8px 16px;
  border:none;
  border-radius: 12px;
  background: #d47a2a;
  color:#111;
  font-weight:600;
  cursor:pointer;
}

.close-btn:hover {
  background:#ff8c42;
}

/* Mobile */
@media (max-width: 768px) {
  .events-section h2 { font-size: 2rem; }
}
</style>