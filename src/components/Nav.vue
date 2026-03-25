<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>

<template>
  <nav class="top-nav">
    <!-- LOGO -->
    <router-link to="/" class="nav-logo">
      {{ name }}
    </router-link>

    <ul class="nav-links">
      <li><a href="/about">About</a></li>
      <li><a href="/members">Members</a></li>
      <li><a href="/wipes">Wipes</a></li>
      <li><a href="/events">Events</a></li>
      <li><a href="/events">Support</a></li>
      <li><a href="/contact">Contact</a></li>

      <!-- LOGIN BUTTON -->
      <li>
        <router-link to="/login" class="login-btn">
          Login
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.top-nav {
  position: fixed; /* ONLY CHANGE */
  top: 0;
  width: 77%;
  background: rgba(27,27,27,0.95);
  display: flex;
  justify-content: space-between; /* SAME AS YOUR ORIGINAL BEHAVIOUR */
  align-items: center;
  padding: 4px 30px;
  z-index: 9999;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  margin-top: 0px;
}

/* stop page hiding under nav */
:global(body) {
  padding-top: 30px;
}

/* LOGO */
.nav-logo {
  font-size: 2rem;
  font-weight: 900;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 
    0 2px 4px rgba(0,0,0,0.6),
    0 4px 8px rgba(0,0,0,0.4),
    0 0 12px rgba(255,255,255,0.3);
  font-family: 'Roboto', sans-serif;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
}

/* NAV LINKS */
.nav-links {
  list-style: none;
  display: flex;
  gap: 24px;
  align-items: center;
}

/* LINKS */
.nav-links li a {
  color: #eee;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
}

.nav-links li a:hover {
  color: #f05454;
}

/* LOGIN BUTTON */
.login-btn {
  background: linear-gradient(135deg, #d47a2a, #ff7a2a);
  color: #111;
  padding: 6px 16px;
  border-radius: 10px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(212,122,42,0.4);
}

.login-btn:hover {
  transform: scale(1.08);
  box-shadow: 0 0 20px rgba(255,122,42,0.8);
  background: linear-gradient(135deg, #ff7a2a, #ffaa55);
}
</style>