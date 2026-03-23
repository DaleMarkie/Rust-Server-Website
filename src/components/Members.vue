<script setup lang="ts">
defineProps<{
  members: {
    name: string;
    role: string; // "Owner" | "Admin" | "Mod" | "Support"
    avatar: string;
  }[];
}>();

const sectionDescription = `
Meet the core team behind our server. Each member is dedicated to 
keeping the community thriving, from managing the server and moderating chats 
to providing top-tier support. Together, they ensure every player has 
an unforgettable experience.
`;
</script>

<template>
  <section id="members" class="members-section">
    <!-- Background -->
    <div class="bg"></div>
    <div class="overlay"></div>
    <div class="grain"></div>

    <!-- Smoke -->
    <div class="smoke smoke-1"></div>
    <div class="smoke smoke-2"></div>

    <!-- Content -->
    <div class="content">
      <h2>Our Team</h2>
      <div class="divider"></div>
      <p class="section-description" v-html="sectionDescription"></p>

      <div class="members-grid">
        <div v-for="member in members" :key="member.name" class="member-card">
          
          <!-- Avatar -->
          <div class="avatar-wrapper" :class="member.role.toLowerCase()">
            <img :src="member.avatar" :alt="member.name" />
            <span class="status-dot"></span>
          </div>

          <!-- Info -->
          <h3>{{ member.name }}</h3>
          <p :class="['role-badge', member.role.toLowerCase()]">
            {{ member.role }}
          </p>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.members-section {
  position: relative;
  width: 100%;
  min-height: 550px;
  padding: 80px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: #ddd;
}

/* Background */
.bg {
  position: absolute;
  width: 110%;
  height: 110%;
  background: url('https://images.unsplash.com/photo-1625723427391-164c022d6d3a?auto=format&fit=crop&w=1950&q=80') center/cover;
  filter: brightness(0.25) contrast(1.4);
}

/* Overlay */
.overlay {
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
  opacity: 0.25;
}

/* Smoke */
.smoke {
  position: absolute;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.04), transparent);
  animation: smokeMove 40s linear infinite;
}

.smoke-2 {
  animation-duration: 60s;
  opacity: 0.5;
}

@keyframes smokeMove {
  from { transform: translate(-10%, -10%); }
  to { transform: translate(10%, 10%); }
}

/* Content */
.content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  text-align: center;
}

/* Title */
.members-section h2 {
  font-size: 3rem;
  color: #d47a2a;
  letter-spacing: 3px;
}

/* Section description */
.section-description {
  max-width: 800px;
  margin: 0 auto 40px;
  color: #ffffff;
  font-size: 1.1rem;
  line-height: 1.7;
  text-align: center;
}

/* Divider */
.divider {
  width: 100px;
  height: 3px;
  background: #d47a2a;
  margin: 20px auto 40px;
}

/* Grid */
.members-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 25px;
}

/* Card */
.member-card {
  background: linear-gradient(145deg, #1c1c1c, #111);
  border: 1px solid #2a2a2a;
  padding: 20px;
  transition: all 0.2s ease;
}

.member-card:hover {
  border-color: #d47a2a;
  transform: translateY(-4px);
  box-shadow: 0 0 20px rgba(212,122,42,0.2);
}

/* Avatar */
.avatar-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 10px;
}

.avatar-wrapper img {
  width: 100px;
  height: 100px;
  border: 2px solid #333;
  border-radius: 50%;
}

/* Role highlights */
.avatar-wrapper.owner img {
  border-color: #d47a2a;
}
.avatar-wrapper.admin img {
  border-color: #b86b2c;
}
.avatar-wrapper.mod img {
  border-color: #7289da;
}
.avatar-wrapper.support img {
  border-color: #666;
}

/* Status dot */
.status-dot {
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 10px;
  height: 10px;
  background: #4cd137;
  border-radius: 50%;
}

/* Name */
.member-card h3 {
  margin: 10px 0 5px;
  color: #fff;
}

/* Role */
.role-badge {
  font-size: 0.75rem;
  letter-spacing: 2px;
  color: #888;
  margin-bottom: 10px;
}
.role-badge.owner { color: #d47a2a; }
.role-badge.admin { color: #b86b2c; }
.role-badge.mod { color: #7289da; }
.role-badge.support { color: #aaa; }

/* Button */
.view-profile-btn {
  padding: 10px 20px;
  background: transparent;
  border: 1px solid #444;
  color: #aaa;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.view-profile-btn:hover {
  border-color: #d47a2a;
  color: #d47a2a;
}

/* Mobile */
@media (max-width: 768px) {
  .members-section h2 {
    font-size: 2rem;
  }
}
</style>