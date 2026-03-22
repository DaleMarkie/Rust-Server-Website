<script setup lang="ts">
defineProps<{
  name: string;
  tagline: string;
  bannerImg: string;
  discordLink: string;
}>();
</script>

<template>
  <section class="banner-section">
    <!-- Background -->
    <div class="banner-bg" :style="{ backgroundImage: `url(${bannerImg})` }"></div>

    <!-- Lighting flicker overlay -->
    <div class="light-flicker"></div>

    <!-- Dark vignette -->
    <div class="banner-overlay"></div>

    <!-- Grain -->
    <div class="grain"></div>

    <!-- Smoke layers -->
    <div class="smoke smoke-1"></div>
    <div class="smoke smoke-2"></div>

    <!-- Sparks -->
    <div
      class="sparks"
      v-for="i in 20"
      :key="i"
      :style="{
        left: Math.random()*100 + '%',
        animationDelay: (Math.random()*5)+'s'
      }"
    ></div>

    <!-- Content -->
    <div class="banner-content">
      <h1 class="banner-title">{{ name }}</h1>

      <div class="divider"></div>

      <p class="banner-tagline">{{ tagline }}</p>

      <div class="actions">
        <a :href="discordLink" target="_blank" class="discord-btn">
          JOIN DISCORD
        </a>

        <button class="secondary-btn">
          VIEW SERVER INFO
        </button>
      </div>

      <!-- Fake server stats (for immersion) -->
      <div class="server-stats">
        <div class="stat">
          <span class="label">PLAYERS</span>
          <span class="value">128 / 200</span>
        </div>
        <div class="stat">
          <span class="label">WIPE</span>
          <span class="value">2 DAYS AGO</span>
        </div>
        <div class="stat">
          <span class="label">MAP</span>
          <span class="value">PROCEDURAL</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.banner-section {
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Arial Black', sans-serif;
}

/* Background */
.banner-bg {
  position: absolute;
  width: 110%;
  height: 110%;
  background-size: cover;
  background-position: center;
  filter: brightness(0.3) contrast(1.4) saturate(0.7);
  transform: scale(1.1);
}

/* Flicker */
.light-flicker {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255,140,60,0.05);
  animation: flicker 3s infinite;
}

@keyframes flicker {
  0%,100% { opacity: 0.05; }
  50% { opacity: 0.12; }
}

/* Overlay */
.banner-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(0,0,0,0.3), rgba(0,0,0,0.95));
}

/* Grain */
.grain {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("https://www.transparenttextures.com/patterns/asfalt-dark.png");
  opacity: 0.3;
}

/* Smoke */
.smoke {
  position: absolute;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.05), transparent 70%);
  animation: smokeMove 30s linear infinite;
}

.smoke-2 {
  animation-duration: 45s;
  opacity: 0.6;
}

@keyframes smokeMove {
  from { transform: translate(-10%, -10%); }
  to { transform: translate(10%, 10%); }
}

/* Sparks */
.sparks {
  position: absolute;
  bottom: 0;
  width: 2px;
  height: 8px;
  background: #ff8c42;
  animation: sparkUp 5s linear infinite;
}

@keyframes sparkUp {
  0% { transform: translateY(0); opacity: 0.5; }
  100% { transform: translateY(-300px); opacity: 0; }
}

/* Content */
.banner-content {
  position: relative;
  text-align: center;
  z-index: 5;
  max-width: 900px;
}

.banner-title {
  font-size: 4.5rem;
  color: #d47a2a;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-shadow: 0 3px 10px rgba(0,0,0,0.9);
}

.divider {
  width: 120px;
  height: 3px;
  background: #d47a2a;
  margin: 20px auto;
}

.banner-tagline {
  font-size: 1.4rem;
  color: #bbb;
}

.actions {
  margin-top: 30px;
  display: flex;
  gap: 20px;
  justify-content: center;
}

.discord-btn {
  padding: 14px 34px;
  background: #d47a2a;
  color: #111;
  font-weight: 800;
  text-decoration: none;
  border: none;
}

.discord-btn:hover {
  background: #ff9d4d;
}

.secondary-btn {
  padding: 14px 34px;
  background: transparent;
  border: 2px solid #555;
  color: #aaa;
  font-weight: 700;
}

.secondary-btn:hover {
  border-color: #d47a2a;
  color: #d47a2a;
}

/* Stats */
.server-stats {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 40px;
}

.stat {
  text-align: center;
}

.label {
  display: block;
  font-size: 0.8rem;
  color: #777;
}

.value {
  font-size: 1.2rem;
  color: #fff;
  font-weight: bold;
}

@media (max-width: 768px) {
  .banner-title { font-size: 2.5rem; }
  .server-stats { flex-direction: column; gap: 10px; }
}
</style>
