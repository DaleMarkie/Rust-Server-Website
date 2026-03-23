<script setup lang="ts">
import { ref } from 'vue';

// Modal state
const isServerModalOpen = ref(false);

const openServerModal = () => { isServerModalOpen.value = true; };
const closeServerModal = () => { isServerModalOpen.value = false; };

// Server info
const serverInfo = {
  ip: "123.456.789.0",
  port: "28015",
  instructions: "Open Rust, press F1, type `connect 123.456.789.0:28015` and hit Enter."
};

// --- EDIT THESE TEXTS HERE ---
const bannerTitle = "Welcome To";
const bannerTagline = "x3|Trio|Monthly";
const bannerDescription = "Join the Red Rust Raiders, a hardcore PvP Rust clan. Dominate raids, control the map, and survive with the best!";
const bannerImg = "https://picsum.photos/seed/clanbanner/1600/400";
const discordLink = "#";
</script>

<template>
  <section class="banner-section">
    <!-- Background & Effects -->
    <div class="banner-bg" :style="{ backgroundImage: `url(${bannerImg})` }"></div>
    <div class="light-flicker"></div>
    <div class="banner-overlay"></div>
    <div class="grain"></div>
    <div class="smoke smoke-1"></div>
    <div class="smoke smoke-2"></div>
    <div class="sparks" v-for="i in 20" :key="i" :style="{ left: Math.random()*100 + '%', animationDelay: (Math.random()*5)+'s' }"></div>

    <!-- Content -->
    <div class="banner-content">
      <h1 class="banner-title">{{ bannerTitle }}</h1>
      <div class="divider"></div>
      <p class="banner-tagline">{{ bannerTagline }}</p>
      <p class="banner-description">{{ bannerDescription }}</p>

      <div class="actions">
        <a :href="discordLink" target="_blank" class="discord-btn">JOIN DISCORD</a>
        <button class="secondary-btn" @click="openServerModal">SERVER INFO</button>
      </div>

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

    <!-- Server Info Modal -->
    <div v-if="isServerModalOpen" class="modal-backdrop" @click.self="closeServerModal">
      <div class="modal">
        <h3>Server Info</h3>
        <p><strong>IP:</strong> {{ serverInfo.ip }}</p>
        <p><strong>Port:</strong> {{ serverInfo.port }}</p>
        <p class="instructions">{{ serverInfo.instructions }}</p>
        <button class="close-btn" @click="closeServerModal">CLOSE</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Banner styles remain the same as before */
.banner-section { position: relative; width: 100%; height: 500px; overflow: hidden; display: flex; align-items: center; justify-content: center; font-family: 'Arial Black', sans-serif; }
.banner-bg { position: absolute; width: 110%; height: 110%; background-size: cover; background-position: center; filter: brightness(1.3) contrast(1.4) saturate(0.7); transform: scale(1.1); }
.light-flicker { position: absolute; width: 100%; height: 100%; background: rgba(255,140,60,0.05); animation: flicker 3s infinite; }
@keyframes flicker { 0%,100% { opacity:0.05; } 50% { opacity:0.12; } }
.banner-overlay { position: absolute; width: 100%; height: 100%; background: radial-gradient(circle, rgba(0,0,0,0.3), rgba(0,0,0,0.95)); }
.grain { position: absolute; width: 100%; height: 100%; background: url("https://www.transparenttextures.com/patterns/asfalt-dark.png"); opacity: 1.3; }
.smoke { position: absolute; width: 200%; height: 200%; background: radial-gradient(circle, rgba(255,255,255,0.05), transparent 70%); animation: smokeMove 30s linear infinite; }
.smoke-2 { animation-duration: 45s; opacity: 0.6; }
@keyframes smokeMove { from { transform: translate(-10%, -10%); } to { transform: translate(10%, 10%); } }
.sparks { position: absolute; bottom: 0; width: 2px; height: 8px; background: #ff8c42; animation: sparkUp 5s linear infinite; }
@keyframes sparkUp { 0% { transform: translateY(0); opacity:0.5; } 100% { transform: translateY(-300px); opacity:0; } }

.banner-content { position: relative; text-align: center; z-index: 5; max-width: 900px; }
.banner-title { font-size: 4.5rem; color: #d47a2a; text-transform: uppercase; letter-spacing: 4px; text-shadow: 0 3px 10px rgba(0,0,0,0.9); }
.divider { width: 120px; height: 3px; background: #d47a2a; margin: 20px auto; }
.banner-tagline { font-size: 1.4rem; color: #bbb; margin-bottom: 15px; }
.banner-description { font-size: 1.1rem; color: #ccc; max-width: 700px; margin: 0 auto; line-height: 1.6; }

.actions { margin-top: 30px; display: flex; gap: 20px; justify-content: center; }
.discord-btn { padding: 14px 34px; background: #d47a2a; color: #111; font-weight: 800; text-decoration: none; border: none; }
.discord-btn:hover { background: #ff9d4d; }
.secondary-btn { padding: 14px 34px; background: transparent; border: 2px solid #555; color: #aaa; font-weight: 700; cursor: pointer; }
.secondary-btn:hover { border-color: #d47a2a; color: #d47a2a; }

.server-stats { margin-top: 40px; display: flex; justify-content: center; gap: 40px; }
.stat { text-align: center; }
.label { display: block; font-size: 0.8rem; color: #777; }
.value { font-size: 1.2rem; color: #fff; font-weight: bold; }

.modal-backdrop { position: fixed; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,0.8); display:flex; align-items:center; justify-content:center; z-index:1000; }
.modal { background:#1c1c1c; padding:30px 25px; border-radius:16px; max-width:500px; width:90%; color:#fff; text-align:center; box-shadow:0 0 24px rgba(212,122,42,0.5); animation: modalFade 0.3s ease; }
@keyframes modalFade { from {opacity:0; transform:scale(0.95);} to {opacity:1; transform:scale(1);} }
.modal h3 { margin-bottom:15px; font-size:1.8rem; color:#d47a2a; }
.modal p { font-size:1rem; margin:8px 0; color:#ddd; }
.instructions { margin-top:10px; font-style:italic; font-size:0.95rem; color:#bbb; }
.close-btn { margin-top:20px; padding:8px 16px; border:none; border-radius:12px; background:#d47a2a; color:#111; font-weight:600; cursor:pointer; transition:all 0.3s ease; }
.close-btn:hover { background:#ff8c42; }

@media (max-width:768px) {
  .banner-title { font-size:2.5rem; }
  .server-stats { flex-direction: column; gap: 10px; }
}
</style>