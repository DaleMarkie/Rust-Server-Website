<script setup lang="ts">
defineProps<{
  events: {
    title: string;
    date: string;
    link: string;
  }[];
}>();
</script>

<template>
  <section id="events" class="events-section">
    <h2>Upcoming Events</h2>
    <div class="events-grid">
      <div v-for="event in events" :key="event.title" class="event-card">
        <div class="event-date">{{ event.date }}</div>
        <h3>{{ event.title }}</h3>
        <a :href="event.link" class="event-btn">Details</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.events-section {
  padding: 60px 20px;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  background: #1b1b1b url('https://images.unsplash.com/photo-1627002222747-7eb799c3f07a?auto=format&fit=crop&w=1950&q=80') no-repeat center/cover;
  border-top: 2px solid #f05454;
  border-bottom: 2px solid #f05454;
}

.events-section h2 {
  font-size: 3rem;
  color: #f05454;
  margin-bottom: 40px;
  text-shadow: 0 0 8px #f05454;
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
}

.event-card {
  position: relative;
  background: rgba(40, 40, 40, 0.85);
  padding: 24px 16px;
  border-radius: 16px;
  color: #eee;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 80, 80, 0.3);
  overflow: hidden;
}

.event-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 0 16px #f05454, 0 6px 20px rgba(0, 0, 0, 0.6);
}

.event-card h3 {
  font-size: 1.5rem;
  margin-bottom: 12px;
  color: #f5a623;
}

.event-date {
  position: absolute;
  top: -10px;
  right: -10px;
  background: #f05454;
  padding: 8px 12px;
  font-weight: bold;
  font-size: 0.9rem;
  border-radius: 12px;
  color: #fff;
  box-shadow: 0 0 8px rgba(240,84,84,0.7);
}

.event-btn {
  display: inline-block;
  margin-top: 10px;
  padding: 8px 16px;
  background: #7289da;
  color: #fff;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s, transform 0.2s;
}

.event-btn:hover {
  background: #5b6eae;
  transform: scale(1.05);
}
</style>