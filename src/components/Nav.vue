<script setup lang="ts">
defineProps<{
  name: string;
  discordLink: string;
}>();
</script>

<template>
  <nav class="top-nav">
    <div class="nav-logo">{{ name }}</div>
    <ul class="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#members">Members</a></li>
      <li><a href="#wipes">Wipes</a></li>
      <li><a href="#events">Events</a></li>
      <li><a :href="discordLink" class="discord-link">Discord</a></li>
    </ul>
  </nav>
</template>

<style scoped>
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
</style>