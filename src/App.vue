<script setup lang="ts">
import { ref } from "vue";

// Mock clan data
const clan = {
  name: "Red Rust Raiders",
  tagline: "Survive. Raid. Dominate.",
  bannerImg: "https://picsum.photos/seed/clanbanner/1600/400",
  description: "We are the Red Rust Raiders, a PvP-focused Rust clan. Join us on epic raids and community events!",
  discordLink: "#",
  members: [
    { name: "Alpha", role: "Leader", avatar: "https://i.pravatar.cc/150?img=1" },
    { name: "Bravo", role: "Raider", avatar: "https://i.pravatar.cc/150?img=2" },
    { name: "Charlie", role: "Support", avatar: "https://i.pravatar.cc/150?img=3" },
    { name: "Delta", role: "Raider", avatar: "https://i.pravatar.cc/150?img=4" }
  ],
  events: [
    { title: "Server Raid #23", date: "2026-03-25", link: "#" },
    { title: "Clan Meetup", date: "2026-03-28", link: "#" }
  ]
};
</script>

<template>
  <div class="clan-home">

    <!-- Navigation -->
    <nav class="top-nav">
      <div class="nav-logo">{{ clan.name }}</div>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#members">Members</a></li>
        <li><a href="#events">Events</a></li>
        <li><a :href="clan.discordLink" class="discord-link">Discord</a></li>
      </ul>
    </nav>

    <!-- Banner Section -->
    <section class="banner-section">
      <img :src="clan.bannerImg" alt="Clan Banner" class="banner-img" />
      <div class="banner-content">
        <h1>{{ clan.name }}</h1>
        <p>{{ clan.tagline }}</p>
        <a :href="clan.discordLink" class="discord-btn">Join our Discord</a>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about-section">
      <h2>About the Clan</h2>
      <p>{{ clan.description }}</p>
    </section>

    <!-- Members Section -->
    <section id="members" class="members-section">
      <h2>Clan Members</h2>
      <div class="members-grid">
        <div v-for="member in clan.members" :key="member.name" class="member-card">
          <div class="avatar-wrapper">
            <img :src="member.avatar" :alt="member.name" />
            <span class="status-dot online" title="Online"></span>
          </div>
          <h3>{{ member.name }}</h3>
          <p :class="['role-badge', member.role.toLowerCase()]">{{ member.role }}</p>
          <button class="view-profile-btn">View Profile</button>
        </div>
      </div>
    </section>

    <!-- Events Section -->
    <section id="events" class="events-section">
      <h2>Upcoming Events</h2>
      <ul>
        <li v-for="event in clan.events" :key="event.title">
          <strong>{{ event.title }}</strong> - {{ event.date }}
          <a :href="event.link">Details</a>
        </li>
      </ul>
    </section>

    <!-- Footer Section -->
    <footer class="footer-section">
      <p>© 2026 {{ clan.name }}. All rights reserved.</p>
    </footer>

  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

.clan-home {
  font-family: 'Inter', sans-serif;
  color: #eee;
  background: #1b1b1b;
  min-height: 100vh;
  scroll-behavior: smooth;
}

/* Top Navigation */
.top-nav {
  position: sticky;
  top: 0;
  width: 100%;
  background: rgba(27,27,27,0.95);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 40px;
  z-index: 100;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.nav-logo {
  font-size: 1.6rem;
  font-weight: 700;
  color: #f05454;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 24px;
}

.nav-links li a {
  color: #eee;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
}

.nav-links li a:hover {
  color: #f05454;
}

.discord-link {
  background: #7289da;
  padding: 6px 14px;
  border-radius: 8px;
  color: #fff;
}

.discord-link:hover {
  background: #5b6eae;
}

/* Banner Section */
.banner-section {
  position: relative;
  text-align: center;
  margin-top: -1px;
}
.banner-img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  opacity: 0.8;
}
.banner-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.banner-content h1 {
  font-size: 4rem;
  color: #f05454;
  margin-bottom: 10px;
}
.banner-content p {
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 20px;
}
.discord-btn {
  padding: 12px 32px;
  background: #7289da;
  color: #fff;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
}
.discord-btn:hover {
  background: #5b6eae;
}

/* Sections */
section {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
}
h2 {
  font-size: 2.5rem;
  color: #f05454;
  margin-bottom: 20px;
  text-align: center;
}

/* Members Section */
.members-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  justify-items: center;
}

.member-card {
  background: rgba(30,30,30,0.9);
  border-radius: 20px;
  padding: 24px 16px 32px;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.member-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 36px rgba(0,0,0,0.7);
}

.avatar-wrapper {
  position: relative;
  display: inline-block;
}

.avatar-wrapper img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 12px;
  border: 3px solid #f05454;
}

.status-dot {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #1b1b1b;
}

.status-dot.online {
  background: #4cd137;
}

.member-card h3 {
  font-size: 1.5rem;
  margin-bottom: 6px;
}

.role-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: #fff;
}

/* Role Colors */
.role-badge.leader { background: #f05454; }
.role-badge.raider { background: #f5a623; }
.role-badge.support { background: #4fc1ff; }

.view-profile-btn {
  padding: 8px 16px;
  background: #7289da;
  color: #fff;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;
}

.view-profile-btn:hover {
  background: #5b6eae;
}
/* Events Section */
.events-section ul {
  list-style: none;
  padding: 0;
  max-width: 600px;
  margin: 0 auto;
}
.events-section li {
  background: rgba(30,30,30,0.8);
  margin-bottom: 12px;
  padding: 12px 16px;
  border-radius: 12px;
}
.events-section a {
  color: #f05454;
  text-decoration: none;
  margin-left: 8px;
}
.events-section a:hover {
  text-decoration: underline;
}

/* Footer Section */
.footer-section {
  text-align: center;
  padding: 40px 20px;
  color: #888;
  border-top: 1px solid rgba(255,255,255,0.1);
}
</style>