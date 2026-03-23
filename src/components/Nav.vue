<script setup lang="ts">
import { ref } from 'vue';
defineProps<{
  name: string;
  discordLink: string;
}>();

const showServerPopup = ref(false);
const toggleServerPopup = () => showServerPopup.value = !showServerPopup.value;
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
      <li><button class="server-btn" @click="toggleServerPopup">Server Info</button></li>
    </ul>

    <!-- Server popup -->
    <div v-if="showServerPopup" class="server-popup">
      <h3>Connect to Server</h3>
      <p>IP: <strong>123.45.67.89</strong></p>
      <p>Port: <strong>28015</strong></p>
      <p>Steam console: <code>connect 123.45.67.89:28015</code></p>
      <button class="close-btn" @click="toggleServerPopup">Close</button>
    </div>
  </nav>
</template>

<style scoped>
.top-nav {
  position: sticky;
  top: 0;
  width: 98%;
  background: rgba(27,27,27,0.95);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 30px; /* EXACTLY your original */
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

/* Server info button */
.server-btn {
  background: #d47a2a;
  color: #111;
  padding: 6px 14px;
  border-radius: 8px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}

.server-btn:hover {
  background: #ff7a2a;
  transform: scale(1.05);
}

/* Server popup */
.server-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #1c1c1c;
  border: 2px solid #d47a2a;
  border-radius: 12px;
  padding: 20px 30px;
  width: 300px;
  text-align: center;
  z-index: 500;
  color: #eee;
  box-shadow: 0 0 25px rgba(212,122,42,0.6);
}

.close-btn {
  margin-top: 15px;
  padding: 6px 12px;
  background: #d47a2a;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  color: #111;
}

.close-btn:hover {
  background: #ff7a2a;
  transform: scale(1.05);
}
</style>