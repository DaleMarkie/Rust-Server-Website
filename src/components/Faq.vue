<script setup lang="ts">
import { ref, computed } from "vue";

// FAQ Data
const faqs = ref([
  { question: "How do I join the server?", answer: "Open Rust, press F1, type `connect 123.456.789.0:28015` and press Enter.", category: "Server", open: false },
  { question: "When is the next wipe?", answer: "Next wipe is scheduled for 2026-04-01.", category: "Wipes", open: false },
  { question: "How do I become an admin?", answer: "Admins are chosen by the owner based on activity and contribution.", category: "Staff", open: false },
  { question: "Where can I report bugs?", answer: "Report bugs in our Discord support channel.", category: "Support", open: false },
  { question: "Are raids allowed?", answer: "PvP raids are allowed according to server rules.", category: "Gameplay", open: false },
  { question: "How do I claim a base?", answer: "Use authorized tools and follow server claiming rules.", category: "Gameplay", open: false },
  { question: "What are the server rules?", answer: "No cheating, griefing, or exploiting. Full rules are on Discord.", category: "Rules", open: false },
  { question: "How can I contact support?", answer: "Use the Discord support channel or ping the support role.", category: "Support", open: false }
]);

const categories = ["All", "Server", "Wipes", "Staff", "Support", "Gameplay", "Rules"];
const activeCategory = ref("All");
const searchQuery = ref("");

const setCategory = (cat: string) => {
  activeCategory.value = cat;
};

const toggleFaq = (index: number) => {
  faqs.value[index].open = !faqs.value[index].open;
};

const filteredFaqs = computed(() => {
  return faqs.value.filter(faq => {
    const matchesCategory = activeCategory.value === "All" || faq.category === activeCategory.value;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.value.toLowerCase()) || faq.answer.toLowerCase().includes(searchQuery.value.toLowerCase());
    return matchesCategory && matchesSearch;
  });
});
</script>

<template>
  <section id="faq" class="faq-section">
    <h2>Frequently Asked Questions</h2>
    <p class="faq-description">
      Got questions about our Rust server? From joining the server, understanding wipes, to gameplay tips and rules, we've got you covered. 
      Use the filters or search to quickly find what you need and stay ahead in the world of Rust!
    </p>
    <div class="divider"></div>

    <!-- Category Filters -->
    <div class="faq-filters">
      <button
        v-for="cat in categories"
        :key="cat"
        :class="['filter-btn', { active: activeCategory === cat }]"
        @click="setCategory(cat)"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Search Bar -->
    <div class="faq-search">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search questions..."
      />
    </div>

    <!-- FAQ List -->
    <div class="faq-list">
      <div v-for="(faq, index) in filteredFaqs" :key="index" class="faq-item">
        <div class="faq-question" @click="toggleFaq(index)">
          <span>{{ faq.question }}</span>
          <span class="toggle-icon">{{ faq.open ? "-" : "+" }}</span>
        </div>
        <div v-if="faq.open" class="faq-answer">
          <p>{{ faq.answer }}</p>
          <span class="category-tag">{{ faq.category }}</span>
        </div>
      </div>
      <p v-if="filteredFaqs.length === 0" class="no-results">No FAQs match your search.</p>
    </div>
  </section>
</template>

<style scoped>
.faq-section {
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
  color: #eee;
  font-family: 'Roboto', sans-serif;
  position: relative;
}

/* Title & Description */
h2 {
  font-size: 2.8rem;
  text-align: center;
  color: #f05454;
  margin-bottom: 12px;
}
.faq-description {
  max-width: 800px;
  margin: 0 auto 30px;
  font-size: 1.1rem;
  color: #ccc;
  text-align: center;
  line-height: 1.6;
}

/* Divider */
.divider {
  width: 120px;
  height: 3px;
  background: #d47a2a;
  margin: 20px auto 30px;
}

/* Filters */
.faq-filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-bottom: 20px;
}
.filter-btn {
  padding: 8px 16px;
  background: #1c1c1c;
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  cursor: pointer;
  color: #ccc;
  transition: 0.3s;
}
.filter-btn.active, .filter-btn:hover {
  background: #d47a2a;
  color: #111;
}

/* Search */
.faq-search {
  text-align: center;
  margin-bottom: 30px;
}
.faq-search input {
  padding: 10px 16px;
  border-radius: 12px;
  border: 1px solid #555;
  background: #1c1c1c;
  color: #eee;
  width: 300px;
  max-width: 100%;
}

/* FAQ Items */
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.faq-item {
  background: #1c1c1c;
  border-radius: 12px;
  padding: 16px 20px;
  border: 1px solid #2a2a2a;
  transition: 0.3s;
}
.faq-item:hover {
  border-color: #d47a2a;
}
.faq-question {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  cursor: pointer;
}
.faq-answer {
  margin-top: 10px;
  color: #ccc;
}
.category-tag {
  display: inline-block;
  margin-top: 6px;
  font-size: 0.75rem;
  color: #fff;
  background: #d47a2a;
  padding: 2px 8px;
  border-radius: 8px;
}

/* No results */
.no-results {
  text-align: center;
  color: #ff5e5e;
  margin-top: 20px;
}

/* Mobile */
@media (max-width: 768px) {
  h2 { font-size: 2rem; }
  .faq-description { font-size: 1rem; }
  .filter-btn { padding: 6px 12px; }
}
</style>