<script setup lang="ts">
defineProps<{
  lastWipe: string;
  nextWipe: string;
}>();
</script>

<template>
  <section id="wipes" class="wipes-section">
    <h2>Server Wipes</h2>
    <div class="wipe-cards">
      <div class="wipe-card">
        <div class="wipe-icon">🗓️</div>
        <p class="wipe-label">Last Wipe</p>
        <p class="wipe-date">{{ lastWipe }}</p>
      </div>
      <div class="wipe-card next">
        <div class="wipe-icon">⏳</div>
        <p class="wipe-label">Next Wipe</p>
        <p class="wipe-date">{{ nextWipe }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.wipes-section {
  padding: 60px 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  background: #1b1b1b url('https://images.unsplash.com/photo-1633130275702-5ec9f967dfff?auto=format&fit=crop&w=1950&q=80') no-repeat center/cover;
  border-top: 3px solid #f05454;
  border-bottom: 3px solid #f05454;
}

.wipes-section h2 {
  font-size: 3rem;
  color: #f05454;
  margin-bottom: 40px;
  text-shadow: 0 0 12px #f05454;
}

.wipe-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
}

.wipe-card {
  flex: 1 1 250px;
  background: linear-gradient(145deg, rgba(245,84,84,0.9), rgba(240,60,60,0.8));
  padding: 24px;
  border-radius: 20px;
  color: #fff;
  position: relative;
  box-shadow: 0 0 16px rgba(245,84,84,0.6), 0 8px 20px rgba(0,0,0,0.6);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.wipe-card.next {
  background: linear-gradient(145deg, rgba(114,137,218,0.85), rgba(80,100,180,0.8));
  box-shadow: 0 0 16px rgba(114,137,218,0.6), 0 8px 20px rgba(0,0,0,0.6);
}

.wipe-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 0 32px rgba(245,84,84,0.9), 0 12px 36px rgba(0,0,0,0.8);
}

.wipe-icon {
  font-size: 2.5rem;
  margin-bottom: 12px;
  display: inline-block;
  animation: glow 2s infinite alternate;
}

.wipe-label {
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 6px;
}

.wipe-date {
  font-size: 1.4rem;
  font-weight: 600;
}

@keyframes glow {
  from { text-shadow: 0 0 8px rgba(255,255,255,0.5); }
  to { text-shadow: 0 0 16px rgba(255,255,255,1); }
}
</style>