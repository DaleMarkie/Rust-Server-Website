<script setup lang="ts">
defineProps<{
  lastWipe: string;
  nextWipe: string;
}>();
</script>

<template>
  <section id="wipes" class="wipes-section">
    <!-- Background -->
    <div class="bg"></div>
    <div class="overlay"></div>
    <div class="grain"></div>

    <!-- Smoke -->
    <div class="smoke smoke-1"></div>
    <div class="smoke smoke-2"></div>

    <!-- Content -->
    <div class="content">
      <h2>WIPE STATUS</h2>
      <div class="divider"></div>

      <div class="wipe-cards">

        <!-- Last wipe -->
        <div class="wipe-card">
          <div class="wipe-header">
            <span class="wipe-title">LAST WIPE</span>
          </div>
          <div class="wipe-body">
            <p class="wipe-date">{{ lastWipe }}</p>
          </div>
        </div>

        <!-- Next wipe -->
        <div class="wipe-card highlight">
          <div class="wipe-header">
            <span class="wipe-title">NEXT WIPE</span>
          </div>
          <div class="wipe-body">
            <p class="wipe-date">{{ nextWipe }}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.wipes-section {
  position: relative;
  width: 100%;
  min-height: 550px; /* MATCHES OTHER SECTIONS */
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
  background: url('https://images.unsplash.com/photo-1633130275702-5ec9f967dfff?auto=format&fit=crop&w=1950&q=80') center/cover;
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
.wipes-section h2 {
  font-size: 3rem;
  color: #d47a2a;
  letter-spacing: 3px;
}

.divider {
  width: 100px;
  height: 3px;
  background: #d47a2a;
  margin: 20px auto 40px;
}

/* Cards */
.wipe-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.wipe-card {
  flex: 1 1 280px;
  max-width: 350px;

  background: linear-gradient(145deg, #1c1c1c, #111);
  border: 1px solid #2a2a2a;

  padding: 25px;
  text-align: center;

  transition: all 0.2s ease;
}

.wipe-card:hover {
  border-color: #d47a2a;
  transform: translateY(-4px);
  box-shadow: 0 0 20px rgba(212,122,42,0.2);
}

/* Highlight next wipe */
.wipe-card.highlight {
  border-color: #d47a2a;
}

/* Header */
.wipe-header {
  margin-bottom: 10px;
}

.wipe-title {
  font-size: 0.8rem;
  letter-spacing: 2px;
  color: #777;
}

/* Body */
.wipe-date {
  font-size: 1.4rem;
  color: #fff;
  font-weight: bold;
}

/* Mobile */
@media (max-width: 768px) {
  .wipes-section h2 {
    font-size: 2rem;
  }
}
</style>