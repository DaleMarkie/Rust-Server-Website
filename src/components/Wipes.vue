<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  lastWipe: string;
  nextWipe: string;
}>();

// 🔥 Convert to Date
const last = new Date(props.lastWipe);
const next = new Date(props.nextWipe);
const now = new Date();

// Progress %
const progress = computed(() => {
  const total = next.getTime() - last.getTime();
  const current = now.getTime() - last.getTime();
  return Math.min(100, Math.max(0, (current / total) * 100));
});

// Countdown
const timeLeft = computed(() => {
  const diff = next.getTime() - now.getTime();
  if (diff <= 0) return "WIPING NOW";

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  return `${days}d ${hours}h`;
});

const description = `
Stay ahead of the game. Our server wipes keep the world fresh, competitive, and fair.
Every wipe resets the battlefield — giving everyone a chance to dominate from scratch.
Track wipe cycles, prepare your team, and strike at the perfect moment.
`;
</script>

<template>
  <section id="wipes" class="wipes-section">

    <!-- Background -->
    <div class="bg"></div>
    <div class="overlay"></div>
    <div class="grain"></div>

    <div class="smoke smoke-1"></div>
    <div class="smoke smoke-2"></div>

    <div class="content">

      <!-- 🔥 Animated Title -->
      <h2 class="section-title">
        <span v-for="(c,i) in 'WIPE STATUS'.split('')" :key="i" :style="{ animationDelay: i*0.05+'s' }">
          {{ c }}
        </span>
      </h2>

      <div class="divider"></div>

      <p class="description" v-html="description"></p>

      <!-- 🔥 EXTRA INFO BAR -->
      <div class="wipe-info">
        <div><strong>TYPE:</strong> Monthly</div>
        <div><strong>BP WIPE:</strong> Yes</div>
        <div><strong>MAP SIZE:</strong> 4500</div>
        <div><strong>GROUP LIMIT:</strong> Trio</div>
      </div>

      <!-- 🔥 PROGRESS BAR -->
      <div class="progress-wrapper">
        <div class="progress-bar" :style="{ width: progress + '%' }"></div>
      </div>

      <p class="progress-label">{{ Math.floor(progress) }}% THROUGH WIPE</p>

      <!-- CARDS -->
      <div class="wipe-cards">

        <!-- LAST WIPE -->
        <div class="wipe-card">
          <div class="wipe-card-bg last-wipe-bg"></div>
          <div class="wipe-header">
            <span class="wipe-title">LAST WIPE</span>
          </div>
          <div class="wipe-body">
            <p class="wipe-date">{{ lastWipe }}</p>
          </div>
        </div>

        <!-- NEXT WIPE -->
        <div class="wipe-card highlight">
          <div class="wipe-card-bg next-wipe-bg"></div>
          <div class="wipe-header">
            <span class="wipe-title">NEXT WIPE</span>
          </div>
          <div class="wipe-body">
            <p class="wipe-date">{{ nextWipe }}</p>

            <!-- 🔥 Countdown -->
            <p class="countdown">{{ timeLeft }}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.wipes-section {
  position: relative;
  width: 100%;
  min-height: 550px;
  padding: 80px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: #fff;
}

/* Background */
.bg {
  position: absolute;
  width: 110%;
  height: 110%;
  background: url('https://images.unsplash.com/photo-1633130275702-5ec9f967dfff?auto=format&fit=crop&w=1950&q=80') center/cover;
  filter: brightness(0.25) contrast(1.4);
  animation: bgMove 30s linear infinite;
}

@keyframes bgMove {
  50% { transform: scale(1.05) translate(10px,5px); }
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
  opacity: 0.25;
  background: url("https://www.transparenttextures.com/patterns/asfalt-dark.png");
}

/* Smoke */
.smoke {
  position: absolute;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.04), transparent);
  animation: smokeMove 40s linear infinite;
}
.smoke-2 { animation-duration: 60s; opacity: 0.5; }

@keyframes smokeMove {
  to { transform: translate(10%, 10%); }
}

/* Content */
.content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  text-align: center;
}

/* 🔥 Title */
.section-title span {
  display: inline-block;
  opacity: 0;
  transform: translateY(30px);
  animation: reveal 0.6s forwards, flicker 3s infinite;
  color: #d47a2a;
  font-size: 3rem;
  letter-spacing: 3px;
}

@keyframes reveal {
  to { opacity: 1; transform: translateY(0); }
}

/* Divider */
.divider {
  width: 100px;
  height: 3px;
  background: #d47a2a;
  margin: 20px auto;
}

/* Description */
.description {
  max-width: 850px;
  margin: 0 auto 30px;
  line-height: 1.8;
  color: #ccc;
}

/* 🔥 Info bar */
.wipe-info {
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
  margin-bottom: 30px;
  font-size: 0.9rem;
  color: #aaa;
}

/* 🔥 Progress */
.progress-wrapper {
  width: 100%;
  max-width: 600px;
  height: 6px;
  background: #222;
  margin: 0 auto;
}

.progress-bar {
  height: 100%;
  background: #d47a2a;
  transition: width 0.5s ease;
}

.progress-label {
  margin-top: 10px;
  font-size: 0.8rem;
  color: #777;
}

/* Cards */
.wipe-cards {
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-top: 40px;
  flex-wrap: wrap;
}

.wipe-card {
  position: relative;
  flex: 1 1 280px;
  max-width: 350px;
  background: linear-gradient(145deg, #1c1c1c, #111);
  border: 1px solid #2a2a2a;
  padding: 25px;
  transition: 0.3s;
}

.wipe-card:hover {
  transform: translateY(-6px);
  border-color: #d47a2a;
  box-shadow: 0 0 25px rgba(212,122,42,0.3);
}

.highlight {
  border-color: #d47a2a;
}

/* Background image */
.wipe-card-bg {
  position: absolute;
  inset: 0;
  opacity: 0.5;
  background-size: cover;
  filter: brightness(0.5);
}

.last-wipe-bg {
  background-image: url('https://cdn.mos.cms.futurecdn.net/BNcWMgdZzv8aEWQGQKGRKb.jpg');
}
.next-wipe-bg {
  background-image: url('https://cdn.mos.cms.futurecdn.net/BNcWMgdZzv8aEWQGQKGRKb.jpg');
}

.wipe-header, .wipe-body {
  position: relative;
}

.wipe-title {
  font-size: 0.8rem;
  letter-spacing: 2px;
  color: #777;
}

.wipe-date {
  font-size: 1.4rem;
  font-weight: bold;
}

/* 🔥 Countdown */
.countdown {
  margin-top: 10px;
  font-size: 1rem;
  color: #d47a2a;
  letter-spacing: 1px;
}

/* Mobile */
@media (max-width: 768px) {
  .section-title span { font-size: 2rem; }
}
</style>