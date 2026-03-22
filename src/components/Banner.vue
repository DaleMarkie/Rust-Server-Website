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
    <div class="banner-overlay"></div>

    <!-- Sparks / particles for cinematic Rust effect -->
    <div class="sparks" v-for="i in 20" :key="i" :style="{ left: Math.random()*100 + '%', animationDelay: (Math.random()*3)+'s' }"></div>

    <!-- Banner Content -->
    <div class="banner-content">
      <h1 class="banner-title">{{ name }}</h1>
      <p class="banner-tagline">{{ tagline }}</p>
      <a :href="discordLink" target="_blank" class="discord-btn">
        Join our Discord
        <span class="btn-glow"></span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.banner-section {
  position: relative;
  width: 100%;
  height: 550px;
  overflow: hidden;
  perspective: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Background image + parallax */
.banner-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 110%;
  height: 110%;
  background-size: cover;
  background-position: center;
  transform: scale(1.05);
  filter: brightness(0.5) contrast(1.2);
  transition: transform 1s ease;
  z-index: 0;
}

.banner-section:hover .banner-bg {
  transform: scale(1.1) rotate(0.5deg);
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(27,27,27,0.7);
  z-index: 1;
}

/* Sparks effect */
.sparks {
  position: absolute;
  bottom: 0;
  width: 4px;
  height: 12px;
  background: linear-gradient(180deg, #f5a623, transparent);
  border-radius: 50%;
  opacity: 0.8;
  animation: sparkUp 3s linear infinite;
  z-index: 2;
}

@keyframes sparkUp {
  0% { transform: translateY(0) scale(0.5); opacity: 0.7; }
  50% { transform: translateY(-150px) scale(1); opacity: 1; }
  100% { transform: translateY(-300px) scale(0.5); opacity: 0; }
}

/* Banner content */
.banner-content {
  position: relative;
  z-index: 3;
  text-align: center;
  animation: float 6s ease-in-out infinite;
}

.banner-title {
  font-size: 4rem;
  color: #f05454;
  text-shadow: 0 0 20px #f05454, 0 0 40px #f05454, 0 0 60px #f05454;
  margin-bottom: 16px;
  animation: glowTitle 2s infinite alternate;
}

.banner-tagline {
  font-size: 1.8rem;
  color: #fff;
  text-shadow: 0 0 12px rgba(0,0,0,0.7);
  margin-bottom: 24px;
}

/* Discord Button */
.discord-btn {
  position: relative;
  display: inline-block;
  padding: 18px 40px;
  background: #7289da;
  color: #fff;
  font-weight: 700;
  border-radius: 14px;
  text-decoration: none;
  font-size: 1.3rem;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.discord-btn:hover {
  transform: scale(1.08);
  box-shadow: 0 0 32px #7289da, 0 0 48px #7289da inset;
}

.btn-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(114,137,218,0.5) 0%, transparent 70%);
  opacity: 0.7;
  pointer-events: none;
  transition: opacity 0.3s;
}

.discord-btn:hover .btn-glow {
  opacity: 1;
}

/* Animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
}

@keyframes glowTitle {
  0% { text-shadow: 0 0 20px #f05454, 0 0 40px #f05454; }
  50% { text-shadow: 0 0 30px #f05454, 0 0 60px #f05454; }
  100% { text-shadow: 0 0 20px #f05454, 0 0 40px #f05454; }
}

/* Responsive */
@media (max-width: 768px) {
  .banner-title { font-size: 2.8rem; }
  .banner-tagline { font-size: 1.4rem; }
  .discord-btn { padding: 14px 32px; font-size: 1.1rem; }
}
</style>