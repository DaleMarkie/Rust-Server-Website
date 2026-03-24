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
  name: "Rust x3: Rusta",
  tagline: "Survive. Raid. Dominate.",
  bannerImg: "https://i.ibb.co/7J7n0qpr/Rust-Header.webp",
  description: "We are the Red Rust Raiders, a PvP-focused Rust clan. Join epic raids and events!",
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
    lastWipe: "2026-03-15",
    nextWipe: "2026-04-01"
  }
};
</script>

<template>
  <div class="clan-home">
    <Nav :name="clan.name" :discordLink="clan.discordLink" />

    <Banner
      :name="clan.name"
      :tagline="clan.tagline"
      :bannerImg="clan.bannerImg"
      :discordLink="clan.discordLink"
    />

    <About :description="clan.description" />

    <Members :members="clan.members" />

    <Wipes :lastWipe="clan.wipes.lastWipe" :nextWipe="clan.wipes.nextWipe" />

    <Events :events="clan.events" />

    <Faq :clanName="clan.name" />

    <Footer :clanName="clan.name" />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

/* ========================= */
/* Main cinematic background  */
/* ========================= */
.clan-home {
  position: relative;
  min-height: 100vh;
  width: 100%;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;

  /* Background image + dark overlay */
  background: 
    linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.85)),
    url('https://images4.alphacoders.com/980/thumb-1920-980708.png') center/cover no-repeat;
  background-attachment: fixed;
  background-blend-mode: overlay;
  z-index: 0;
  overflow: hidden;
  transition: background 0.5s ease;
}

/* Subtle particle overlay */
.clan-home::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(circle, rgba(255,255,255,0.02) 1px, transparent 2px) repeat;
  background-size: 50px 50px;
  animation: moveParticles 60s linear infinite;
  z-index: 1;
}

@keyframes moveParticles {
  0% { transform: translate(0,0); }
  100% { transform: translate(100px,100px); }
}

/* Cinematic vignette */
.clan-home::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(circle, rgba(0,0,0,0) 70%, rgba(0,0,0,0.7) 100%);
  z-index: 2;
}

/* ========================= */
/* Ensure text is readable   */
/* ========================= */
.clan-home * {
  color: #ffffff !important;
}

/* ========================= */
/* Banner improvements       */
/* ========================= */
.banner-content h1 {
  font-size: 5rem;
  font-weight: 900;
  color: #ffffff;
  text-shadow: 
    0 0 8px #000,
    0 0 15px rgba(255,255,255,0.5),
    2px 2px 2px #000;
  letter-spacing: 6px;
  line-height: 1.1;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.banner-content h1:hover {
  color: #f0f0f0;
  text-shadow: 
    0 0 10px #000,
    0 0 20px rgba(255,255,255,0.8),
    2px 2px 3px #000;
  transform: scale(1.05);
}

.banner-content p {
  font-size: 1.5rem;
  color: #ffffff;
  margin: 12px 0 20px;
}

/* ========================= */
/* Members, wipes, sections  */
/* ========================= */
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
  box-shadow: 0 0 18px rgba(255,255,255,0.2);
}

.avatar-wrapper img {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  border: 3px solid #ffffff;
}

.wipe-card {
  position: relative;
  background: linear-gradient(145deg, #1c1c1c, #111);
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  padding: 25px;
  text-align: center;
  overflow: hidden;
  transition: all 0.3s ease;
}

.wipe-card::before {
  content:"";
  position: absolute;
  inset: 0;
  background: url('https://i.imgur.com/7oVXLkB.jpg') center/cover no-repeat;
  opacity: 0.2;
  z-index: 0;
}

.wipe-card.highlight::before {
  background-image: url('https://i.imgur.com/xxF1Xyd.jpg');
}

section {
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  font-size: 2.8rem;
  color: #ffffff;
  margin-bottom: 30px;
  text-align: center;
}

.footer-section {
  text-align: center;
  padding: 40px 20px;
  color: #ccc;
  border-top: 1px solid rgba(255,255,255,0.1);
}
</style>