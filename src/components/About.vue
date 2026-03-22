<script setup lang="ts">
const description = `Welcome to <strong>Red Rust Raiders</strong> — a brutal, no-hand-holding survival experience. Build, raid, dominate, and fight for control in a harsh world where only the strongest survive.`;

const rules = [
  "No cheating, exploiting, or using third-party hacks.",
  "Respect new players — no excessive griefing.",
  "Raiding is allowed — follow wipe & raid rules.",
  "Respect admins — their word is final.",
  "No spam or advertising.",
  "No blocking monuments, roads, or spawns.",
  "Looting is allowed — repeated harassment is not.",
  "Follow event-specific rules.",
  "No voice/chat abuse.",
  "Play hard, but play fair."
];
</script>

<template>
  <section id="about" class="about-section">
    <!-- Background -->
    <div class="bg"></div>
    <div class="overlay"></div>
    <div class="grain"></div>

    <!-- Smoke -->
    <div class="smoke smoke-1"></div>
    <div class="smoke smoke-2"></div>

    <!-- Content -->
    <div class="content">

      <!-- About -->
      <div class="server-info">
        <h2>SERVER BRIEFING</h2>
        <div class="divider"></div>
        <p v-html="description"></p>
      </div>

      <!-- Rules -->
      <div class="server-rules">
        <h3>RULES & PROTOCOL</h3>

        <div class="rules-grid">
          <div v-for="(rule, index) in rules" :key="index" class="rule-card">
            <div class="rule-header">
              <span class="rule-number">{{ index + 1 }}</span>
              <span class="rule-title">RULE</span>
            </div>

            <div class="rule-body">
              <p>{{ rule }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.about-section {
  position: relative;
  width: 100%;
  min-height: 550px; /* MATCHES BANNER */
  padding: 80px 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #ddd;
  overflow: hidden;
}

/* Background */
.bg {
  position: absolute;
  width: 110%;
  height: 110%;
  background: url('https://images.unsplash.com/photo-1625715043082-0e3fa932ad15?auto=format&fit=crop&w=1950&q=80') center/cover;
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

/* Content wrapper (FIXED WIDTH LIKE YOUR ORIGINAL) */
.content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
}

/* About */
.server-info {
  text-align: center;
  margin-bottom: 60px;
}

.server-info h2 {
  font-size: 3rem;
  color: #d47a2a;
  letter-spacing: 3px;
}

.divider {
  width: 100px;
  height: 3px;
  background: #d47a2a;
  margin: 20px auto;
}

.server-info p {
  max-width: 800px;
  margin: auto;
  line-height: 1.8;
  color: #bbb;
}

.server-info strong {
  color: #fff;
}

/* Rules */
.server-rules h3 {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 30px;
  color: #d47a2a;
}

/* GRID */
.rules-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

/* Rule card */
.rule-card {
  background: linear-gradient(145deg, #1c1c1c, #111);
  border: 1px solid #2a2a2a;
  padding: 18px;
  transition: all 0.2s ease;
}

.rule-card:hover {
  border-color: #d47a2a;
  transform: translateY(-4px);
  box-shadow: 0 0 15px rgba(212,122,42,0.2);
}

/* Header */
.rule-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}

.rule-number {
  background: #d47a2a;
  color: #111;
  padding: 4px 10px;
  font-weight: bold;
}

.rule-title {
  font-size: 0.75rem;
  color: #777;
  letter-spacing: 2px;
}

/* Text */
.rule-body p {
  margin: 0;
  font-size: 0.95rem;
  color: #ccc;
}

/* Mobile */
@media (max-width: 768px) {
  .server-info h2 {
    font-size: 2rem;
  }
}
</style>