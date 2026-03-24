<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  name: string;
}>();

const showServerPopup = ref(false);
const copied = ref(false);

const toggleServerPopup = () => {
  showServerPopup.value = !showServerPopup.value;
};

const connectToServer = async () => {
  const ip = "123.45.67.89:28015";

  // Copy IP
  await navigator.clipboard.writeText(ip);
  copied.value = true;

  // Try opening Steam
  window.location.href = `steam://connect/${ip}`;

  // Fallback message
  setTimeout(() => {
    alert("If Steam didn’t open, paste the IP into your console.");
  }, 1500);

  // Reset text
  setTimeout(() => {
    copied.value = false;
  }, 2500);
};
</script>

<template>
  <nav class="top-nav">
    <div class="nav-logo">{{ name }}</div>

    <ul class="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#members">Members</a></li>
      <li><a href="#wipes">Wipes</a></li>
      <li><a href="#events">Events</a></li>
      <li><a href="#faq">Faq</a></li>

      <!-- Discord -->
      <li>
        <a href="https://discord.gg/4Q6qxmAqkA" target="_blank" class="discord-link">
          Discord
        </a>
      </li>

      <!-- Server button -->
      <li>
        <button class="server-btn" @click="toggleServerPopup">
          Server Info
        </button>
      </li>
    </ul>

    <!-- BACKDROP -->
    <transition name="fade">
      <div
        v-if="showServerPopup"
        class="backdrop"
        @click="toggleServerPopup"
      ></div>
    </transition>

    <!-- POPUP -->
    <transition name="popup">
      <div v-if="showServerPopup" class="server-popup">
        <h3>Connect to Server</h3>

        <p>IP: <strong>123.45.67.89</strong></p>
        <p>Port: <strong>28015</strong></p>

        <p>
          Steam console:
          <code>connect 123.45.67.89:28015</code>
        </p>

        <!-- 🚀 One-click connect -->
        <button class="copy-btn" @click="connectToServer">
          {{ copied ? "Copied! Opening Steam..." : "Connect via Steam" }}
        </button>

        <button class="close-btn" @click="toggleServerPopup">
          Close
        </button>
      </div>
    </transition>
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
  padding: 12px 30px;
  z-index: 100;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.nav-logo {
  font-size: 2.0rem;                  /* big and commanding */
  font-weight: 900;                    /* solid, heavy presence */
  color: #ffffff;                      /* pure white text */
  text-transform: uppercase;           /* professional branding style */
  letter-spacing: 3px;                 /* cinematic spacing */
  text-shadow: 
    0 2px 4px rgba(0,0,0,0.6),        /* subtle depth */
    0 4px 8px rgba(0,0,0,0.4),        /* stronger shadow for realism */
    0 0 12px rgba(255,255,255,0.3);   /* soft white glow */
  font-family: 'Roboto', sans-serif;
  transition: all 0.3s ease;
  cursor: default;
}

.nav-logo:hover {
  text-shadow: 
    0 2px 6px rgba(0,0,0,0.7),
    0 4px 12px rgba(0,0,0,0.5),
    0 0 20px rgba(255,255,255,0.6);
  transform: scale(1.08) rotate(-0.5deg); /* subtle movement */
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

/* BACKDROP */
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  z-index: 400;
}

/* POPUP */
.server-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
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

/* Connect button */
.copy-btn {
  margin-top: 10px;
  padding: 8px 14px;
  background: #4caf50;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  color: #fff;
  font-weight: 600;
  transition: 0.2s;
}

.copy-btn:hover {
  transform: scale(1.05);
}

/* Close button */
.close-btn {
  margin-top: 12px;
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

/* ANIMATIONS */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.popup-enter-active {
  transition: all 0.25s ease;
}

.popup-leave-active {
  transition: all 0.2s ease;
}

.popup-enter-from {
  opacity: 0;
  transform: translate(-50%, -60%) scale(0.9);
}

.popup-leave-to {
  opacity: 0;
  transform: translate(-50%, -60%) scale(0.9);
}
</style>