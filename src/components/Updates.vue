<script setup lang="ts">
import { ref, computed } from "vue";

interface ServerUpdate {
  title: string;
  description: string;
  category: string;
  date: string;
  expanded: boolean;
}

// --- Fresh update data ---
const updates = ref<ServerUpdate[]>([
  { title: "New PvP Map Added", description: "Rust+ Map mod installed for raid planning.", category: "Mods", date: "2026-03-22", expanded: false },
  { title: "Server Wipe Frequency Changed", description: "Wipes now every 2 weeks for better gameplay flow.", category: "Server", date: "2026-03-20", expanded: false },
  { title: "New Admins Promoted", description: "Bravo is Admin, Charlie is Moderator.", category: "Staff", date: "2026-03-18", expanded: false },
  { title: "Loot Table Updates", description: "Loot balancing applied for PvP and PvE.", category: "Gameplay", date: "2026-03-17", expanded: false },
  { title: "Bug Fixes Deployed", description: "Base exploits patched, teleport issues fixed.", category: "Fixes", date: "2026-03-16", expanded: false }
]);

// --- Filters ---
const categories = ["All", "Server", "Mods", "Staff", "Gameplay", "Fixes"];
const activeCategory = ref("All");

const toggleUpdate = (i: number) => updates.value[i].expanded = !updates.value[i].expanded;

const filteredUpdates = computed(() => {
  return updates.value.filter(u => activeCategory.value === "All" || u.category === activeCategory.value);
});
</script>

<template>
  <section class="timeline-section">
    <h2>Server Updates Timeline</h2>

    <!-- Category Filters -->
    <div class="timeline-filters">
      <button 
        v-for="cat in categories" 
        :key="cat" 
        :class="{ active: activeCategory === cat }" 
        @click="activeCategory = cat"
      >{{ cat }}</button>
    </div>

    <!-- Timeline -->
    <div class="timeline">
      <div 
        v-for="(update, index) in filteredUpdates" 
        :key="index" 
        class="timeline-item" 
        :class="update.category.toLowerCase()"
      >
        <div class="timeline-dot" @click="toggleUpdate(index)"></div>
        <div class="timeline-card" :class="{ expanded: update.expanded }">
          <div class="card-header" @click="toggleUpdate(index)">
            <h3>{{ update.title }}</h3>
            <span class="toggle">{{ update.expanded ? "−" : "+" }}</span>
          </div>
          <p v-if="update.expanded">{{ update.description }}</p>
          <div class="card-footer">
            <span class="category">{{ update.category }}</span>
            <span class="date">{{ update.date }}</span>
          </div>
        </div>
      </div>
      <p v-if="filteredUpdates.length === 0" class="no-results">No updates for this filter.</p>
    </div>
  </section>
</template>

<style scoped>
.timeline-section {
  max-width: 80px;
  margin: 0 auto;
  padding: 60px 20px;
  font-family: 'Inter', sans-serif;
  color: #eee;
  background: #0c0c0c;
}

h2 {
  text-align: center;
  font-size: 2.8rem;
  color: #ff6f61;
  margin-bottom: 20px;
}

.timeline-filters {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 50px;
}
.timeline-filters button {
  padding: 8px 16px;
  border-radius: 12px;
  border: none;
  background: #1a1a1a;
  color: #ccc;
  cursor: pointer;
  transition: 0.3s;
}
.timeline-filters button.active,
.timeline-filters button:hover {
  background: #ff6f61;
  color: #0c0c0c;
}

/* Timeline Layout */
.timeline {
  position: relative;
  margin-left: 30px;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 4px;
  background: #444;
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
}
.timeline-dot {
  position: absolute;
  left: 12px;
  width: 16px;
  height: 16px;
  background: #ff6f61;
  border-radius: 50%;
  cursor: pointer;
}

.timeline-card {
  background: #1c1c1c;
  padding: 16px 20px;
  border-radius: 12px;
  margin-left: 40px;
  transition: 0.3s;
  cursor: pointer;
}
.timeline-card.expanded {
  background: #ff6f61;
  color: #0c0c0c;
}

.card-header {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
}
.card-footer {
  margin-top: 8px;
  display: flex;
  gap: 12px;
  font-size: 0.8rem;
}
.card-footer .category {
  background: #333;
  color: #fff;
  padding: 2px 8px;
  border-radius: 8px;
}
.card-footer .date {
  color: #bbb;
}

.timeline-item.server .timeline-dot { background: #4fd1c5; }
.timeline-item.mods .timeline-dot { background: #fcbf49; }
.timeline-item.staff .timeline-dot { background: #9b5de5; }
.timeline-item.gameplay .timeline-dot { background: #f15bb5; }
.timeline-item.fixes .timeline-dot { background: #00bbf9; }

.no-results {
  text-align: center;
  color: #ff4d4d;
  margin-top: 20px;
}

/* Mobile */
@media (max-width: 768px) {
  h2 { font-size: 2rem; }
  .timeline-card { margin-left: 30px; }
}
</style>