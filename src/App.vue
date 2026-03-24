<script setup lang="ts">
import { ref } from "vue";
import Footer from "./components/Footer.vue";
import About from "./components/About.vue";
import Banner from "./components/Banner.vue";
import Nav from "./components/Nav.vue";
import Members from "./components/Members.vue";
import Wipes from "./components/Wipes.vue";
import Events from "./components/Events.vue";
import Faq from "./components/Faq.vue";

// Clan Data
const clan = {
  name: "🔥 Rust x3: Rusta 🔥",
  tagline: "Survive. Raid. Dominate.",
  bannerImg: "https://i.ibb.co/7J7n0qpr/Rust-Header.webp",
  description: "We are the Red Rust Raiders, a PvP-focused Rust clan. Join epic raids, survive hostile maps, and dominate your enemies in style!",
  discordLink: "#",
  members: [
    { name: "Alpha", role: "Owner", avatar: "https://i.pravatar.cc/150?img=1" },
    { name: "Bravo", role: "Admin", avatar: "https://i.pravatar.cc/150?img=2" },
    { name: "Charlie", role: "Mod", avatar: "https://i.pravatar.cc/150?img=3" },
    { name: "Delta", role: "Support", avatar: "https://i.pravatar.cc/150?img=4" }
  ],
  events: [
    { title: "Server Raid #23", date: "2026-03-25", link: "#" },
    { title: "Clan Meetup", date: "2026-03-28", link: "#" }
  ],
  wipes: {
    lastWipe: "2026-03-15T12:00:00Z",
    nextWipe: "2026-04-01T12:00:00Z"
  }
};
</script>

<template>
  <div class="clan-home">
    <!-- Navigation -->
    <Nav :name="clan.name" :discordLink="clan.discordLink" />

    <!-- Hero Banner -->
    <section class="hero-banner">
      <div class="hero-bg" :style="{ backgroundImage: `url(${clan.bannerImg})` }"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>{{ clan.name }}</h1>
        <p class="tagline">{{ clan.tagline }}</p>
        <p class="description">{{ clan.description }}</p>
        <a :href="clan.discordLink" class="discord-btn">Join Discord</a>
      </div>
    </section>

    <!-- About Section -->
    <About :description="clan.description" />

    <!-- Members Section -->
    <Members :members="clan.members" />

    <!-- Wipes Section -->
    <Wipes :lastWipe="clan.wipes.lastWipe" :nextWipe="clan.wipes.nextWipe" />

    <!-- Events Section -->
    <Events :events="clan.events" />

    <!-- FAQ Section -->
    <Faq :clanName="clan.name" />

    <!-- Footer -->
    <Footer :clanName="clan.name" />
  </div>
</template>

<style scoped>
/* Global font */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
  background: url('https://wallpapers.com/images/high/rust-game-iuw5qm29ai120goe.webp') center/cover no-repeat fixed;
  color: #f05454;
}

/* Hero Banner */
.hero-banner {
  position: relative;
  width: 100%;
  min-height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
  color: #fff;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: brightness(0.3);
  z-index: 0;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, rgba(0,0,0,0.3), rgba(0,0,0,0.9));
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 900px;
  padding: 20px;
}

.hero-content h1 {
  font-size: 4rem;
  letter-spacing: 4px;
  color: #ff4e4e;
  text-shadow: 0 0 20px #000;
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero-content .tagline {
  font-size: 1.8rem;
  color: #ff7b45;
  margin-bottom: 20px;
  font-weight: 700;
}

.hero-content .description {
  font-size: 1.3rem;
  color: #eee;
  margin-bottom: 30px;
  line-height: 1.6;
}

.discord-btn {
  display: inline-block;
  padding: 14px 40px;
  background: #ff4e4e;
  border-radius: 12px;
  font-weight: 700;
  color: #111;
  text-decoration: none;
  box-shadow: 0 0 15px rgba(255,78,78,0.5);
  transition: all 0.3s ease;
}
.discord-btn:hover {
  background: #ff7b45;
  transform: translateY(-3px) scale(1.05);
}

/* Sections spacing */
section {
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Section titles */
h2 {
  font-size: 2.8rem;
  color: #f05454;
  margin-bottom: 30px;
  text-align: center;
}

/* Members */
.members-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 30px;
}

.member-card {
  background: linear-gradient(145deg,#1c1c1c,#111);
  border: 1px solid #2a2a2a;
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}
.member-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 0 18px rgba(212,122,42,0.4);
}
.avatar-wrapper img {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  border: 3px solid #ff4e4e;
}

/* Buttons */
.view-profile-btn {
  padding: 10px 22px;
  background: #f05454;
  color: #111;
  border-radius: 10px;
  border: none;
  font-weight: 600;
}
.view-profile-btn:hover {
  background: #ff7b45;
  transform: translateY(-2px);
  transition: 0.3s;
}

/* Footer */
.footer-section {
  text-align: center;
  padding: 40px 20px;
  color: #aaa;
  border-top: 1px solid rgba(255,255,255,0.1);
}

/* Responsive Hero */
@media (max-width: 768px) {
  .hero-content h1 { font-size: 2.5rem; }
  .hero-content .tagline { font-size: 1.4rem; }
  .hero-content .description { font-size: 1rem; }
  .discord-btn { padding: 12px 28px; font-size: 1rem; }
}
</style>