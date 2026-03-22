<script setup lang="ts">
// Description and rules are now directly inside the component
const description = `Welcome to <strong>Red Rust Raiders</strong>! Survive, raid, and dominate in our PvP-focused Rust server. Join epic raids, build bases, and participate in events!`;

const rules = [
  "No cheating, exploiting, or using third-party hacks/aimbots.",
  "No griefing or harassment of new players.",
  "Raiding is allowed, but offline raiding is limited to server rules.",
  "Respect all players and admins at all times.",
  "Do not spam chat or advertise other servers.",
  "Base building must follow server guidelines (no blocking spawn/roads).",
  "Looting player corpses is allowed but do not threaten or troll repeatedly.",
  "Abide by all event rules and announcements by admins.",
  "Use voice/text chat responsibly; no harassment.",
  "Admins have the final say; disputes should be handled respectfully."
];
</script>

<template>
  <section id="about" class="about-section">
    <div class="overlay"></div>

    <!-- Server Info -->
    <div class="server-info">
      <h2>About the Server</h2>
      <div class="underline"></div>
      <p v-html="description"></p>
    </div>

    <!-- Server Rules -->
    <div class="server-rules">
      <h3>Server Rules</h3>
      <div class="rules-grid">
        <div v-for="(rule, index) in rules" :key="index" class="rule-card">
          <div class="rule-number">#{{ index + 1 }}</div>
          <p>{{ rule }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  position: relative;
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  background: #1b1b1b url('https://images.unsplash.com/photo-1625715043082-0e3fa932ad15?auto=format&fit=crop&w=1950&q=80') no-repeat center/cover;
  border-top: 3px solid #f05454;
  border-bottom: 3px solid #f05454;
  color: #eee;
  overflow: hidden;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(27, 27, 27, 0.75);
  z-index: 0;
}

/* Server Info */
.server-info {
  position: relative;
  z-index: 1;
  margin-bottom: 60px;
}

.server-info h2 {
  font-size: 3rem;
  color: #f05454;
  margin-bottom: 16px;
  text-shadow: 0 0 14px #f05454;
}

.underline {
  width: 80px;
  height: 4px;
  background: #f05454;
  margin: 0 auto 30px auto;
  border-radius: 2px;
  box-shadow: 0 0 14px #f05454;
  animation: pulse 2s infinite alternate;
}

.server-info p {
  font-size: 1.25rem;
  color: #eee;
  max-width: 850px;
  margin: 0 auto;
  line-height: 1.8;
  text-shadow: 0 0 6px rgba(0,0,0,0.5);
}

.server-info p strong {
  color: #f5a623;
  text-shadow: 0 0 8px rgba(245,166,35,0.7);
}

/* Server Rules */
.server-rules {
  position: relative;
  z-index: 1;
  text-align: center;
}

.server-rules h3 {
  font-size: 2.5rem;
  color: #4fc1ff;
  margin-bottom: 30px;
  text-shadow: 0 0 12px #4fc1ff;
}

.rules-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
}

.rule-card {
  background: rgba(30, 30, 30, 0.85);
  padding: 20px 16px;
  border-radius: 20px;
  position: relative;
  border: 1px solid rgba(80, 193, 255, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.rule-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 0 28px rgba(80,193,255,0.7), 0 10px 24px rgba(0,0,0,0.6);
}

.rule-number {
  position: absolute;
  top: -12px;
  left: -12px;
  background: #f05454;
  color: #fff;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: 12px;
  box-shadow: 0 0 8px rgba(240,84,84,0.7);
}

.rule-card p {
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
  text-align: left;
  color: #eee;
}

/* Animations */
@keyframes pulse {
  0% { box-shadow: 0 0 14px #f05454; }
  50% { box-shadow: 0 0 28px #f05454; }
  100% { box-shadow: 0 0 14px #f05454; }
}
</style>