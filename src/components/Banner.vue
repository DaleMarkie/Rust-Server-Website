<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

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

// Banner texts
const bannerTitle = "Welcome To";
const bannerTagline = "x3|Trio|Monthly";
const bannerDescription = "Join the Red Rust Raiders, a hardcore PvP Rust clan. Dominate raids, control the map, and survive with the best!";
const discordLink = "#";

// --- SLIDESHOW IMAGES ---
const bannerImages = [
  "https://wallpapercave.com/wp/wp4063841.png",
  "https://images7.alphacoders.com/697/697355.jpg",
  "https://images6.alphacoders.com/980/980706.png"
];

const currentSlide = ref(0);
const nextSlide = ref(1);

// To trigger fade animation
const fade = ref(false);

let intervalId: number;

onMounted(() => {
  intervalId = setInterval(() => {
    fade.value = true; // start fading out
    setTimeout(() => {
      currentSlide.value = nextSlide.value;
      nextSlide.value = (nextSlide.value + 1) % bannerImages.length;
      fade.value = false; // fade in complete
    }, 1000); // match transition duration
  }, 5000); // 5 seconds per slide
});

onUnmounted(() => {
  clearInterval(intervalId);
});

// Copy server command
const copyCommand = () => {
  navigator.clipboard.writeText(`connect ${serverInfo.ip}:${serverInfo.port}`);
  alert("Copied to clipboard!");
};
</script>

<template>
  <section class="banner-section">
    <!-- Cinematic slideshow background -->
    <div class="banner-bg kenburns" :style="{ backgroundImage: `url(${bannerImages[currentSlide]})` }"></div>
    <div
      class="banner-bg kenburns fade"
      v-if="fade"
      :style="{ backgroundImage: `url(${bannerImages[nextSlide]})` }"
    ></div>

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
        <div class="stat">
          <span class="label">Mods?</span>
          <span class="value">150+</span>
        </div>
      </div>
    </div>

    <!-- Server Info Modal -->
    <div v-if="isServerModalOpen" class="modal-backdrop" @click.self="closeServerModal">
      <div class="modal">
        <h3>Server Info</h3>
        <p><strong>IP:</strong> {{ serverInfo.ip }}</p>
        <p><strong>Port:</strong> {{ serverInfo.port }}</p>

        <div class="connect-box">
          <code>{{ `connect ${serverInfo.ip}:${serverInfo.port}` }}</code>
          <button @click="copyCommand" class="copy-btn">COPY</button>
        </div>

        <p class="instructions">{{ serverInfo.instructions }}</p>
        <button class="close-btn" @click="closeServerModal">CLOSE</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.banner-section { position: relative; width: 100%; height: 500px; overflow: hidden; display: flex; align-items: center; justify-content: center; font-family: 'Arial Black', sans-serif; }

/* Base background */
.banner-bg {
  position: absolute;
  width: 110%;
  height: 110%;
  background-size: cover;
  background-position: center;
  filter: brightness(1.3) contrast(1.4) saturate(0.7);
  transform: scale(1.1);
  transition: opacity 1s ease-in-out;
}

/* Fade overlay for next image */
.banner-bg.fade {
  opacity: 0;
  animation: fadeIn 1s forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Ken Burns effect */
.kenburns {
  animation: kenburns 20s linear infinite;
}

@keyframes kenburns {
  0% { transform: scale(1) translate(0, 0); }
  50% { transform: scale(1.05) translate(10px, 5px); }
  100% { transform: scale(1) translate(0, 0); }
}

/* Effects */
.light-flicker { position: absolute; width: 100%; height: 100%; background: rgba(255,140,60,0.05); animation: flicker 3s infinite; }
@keyframes flicker { 0%,100% { opacity:0.05; } 50% { opacity:0.12; } }
.banner-overlay { position: absolute; width: 100%; height: 100%; background: radial-gradient(circle, rgba(0,0,0,0.3), rgba(0,0,0,0.95)); }
.grain { position: absolute; width: 100%; height: 100%; background: url("https://www.transparenttextures.com/patterns/asfalt-dark.png"); opacity: 1.3; }
.smoke { position: absolute; width: 200%; height: 200%; background: radial-gradient(circle, rgba(255,255,255,0.05), transparent 70%); animation: smokeMove 30s linear infinite; }
.smoke-2 { animation-duration: 45s; opacity: 0.6; }
@keyframes smokeMove { from { transform: translate(-10%, -10%); } to { transform: translate(10%, 10%); } }
.sparks { position: absolute; bottom: 0; width: 2px; height: 8px; background: #ff8c42; animation: sparkUp 5s linear infinite; }
@keyframes sparkUp { 0% { transform: translateY(0); opacity:0.5; } 100% { transform: translateY(-300px); opacity:0; } }

/* Content */
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

/* Modal */
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