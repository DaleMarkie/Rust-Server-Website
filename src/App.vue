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
  bannerImg: "https://i.ibb.co/7J7n0qpr/Rust-Header.webp", // Rust style banner
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

body {
  font-family: 'Roboto', sans-serif;
  background: url('https://wallpapers.com/images/high/rust-game-iuw5qm29ai120goe.webp') center/cover no-repeat fixed;
  color: #f80000;
}

/* Banner */
.banner-section {
  position: relative;
  text-align: center;
  overflow: hidden;
}
.banner-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: url('https://i.imgur.com/Nc5MFD6.png') repeat;
  opacity: 1.7;
}
.banner-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
.banner-content h1 {
  font-size: 4rem;
  color: #f05454;
  letter-spacing: 4px;
  text-shadow: 0 0 12px #000;
}
.banner-content p {
  font-size: 1.5rem;
  color: #ff0303;
  margin: 12px 0 20px;
}
.discord-btn {
  padding: 12px 36px;
  background: #f05454;
  border-radius: 12px;
  font-weight: 700;
  text-decoration: none;
  color: #111;
}
.discord-btn:hover {
  background: #ff7b45;
  transform: translateY(-2px);
  transition: 0.3s;
}

/* Members */
.members-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 30px;
}
.member-card {
  background: url('https://i.imgur.com/Nc5MFD6.png') repeat, linear-gradient(145deg,#1c1c1c,#111);
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
  border: 3px solid #f05454;
}

/* Wipes */
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
  opacity: 0.3;
  z-index: 0;
}
.wipe-card.highlight::before {
  background-image: url('https://i.imgur.com/xxF1Xyd.jpg');
}

/* Sections */
section {
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
}
h2 {
  font-size: 2.8rem;
  color: #f05454;
  margin-bottom: 30px;
  text-align: center;
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
</style>