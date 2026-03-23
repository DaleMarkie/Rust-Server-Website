<script setup lang="ts">
import { ref } from "vue";

// Props can be added later if you want dynamic FAQ data
const faqs = ref([
  {
    question: "How do I join the server?",
    answer: "Simply click the 'JOIN DISCORD' button, follow our instructions, and connect using the in-game console with the server IP.",
    open: false
  },
  {
    question: "What is the server wipe schedule?",
    answer: "Our server wipes every 2 weeks to keep the gameplay fresh and fair for all players.",
    open: false
  },
  {
    question: "Can I join as a solo player or only as a clan?",
    answer: "Both solo players and clans are welcome! We encourage team play but respect solo survivalists.",
    open: false
  },
  {
    question: "Are there any rules for raiding?",
    answer: "Yes, raiding is allowed, but griefing, exploiting, or cheating will result in a ban. Play fair!",
    open: false
  }
]);

const toggleFaq = (index: number) => {
  faqs.value[index].open = !faqs.value[index].open;
};
</script>

<template>
  <section id="faq" class="faq-section">
    <h2>Frequently Asked Questions</h2>
    <div class="divider"></div>

    <div class="faq-list">
      <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
        <div class="faq-question" @click="toggleFaq(index)">
          <span>{{ faq.question }}</span>
          <span class="toggle-icon">{{ faq.open ? "-" : "+" }}</span>
        </div>
        <div v-if="faq.open" class="faq-answer">
          <p>{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-section {
  padding: 60px 20px;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  color: #eee;
  font-family: 'Roboto', sans-serif;
  background: url('https://wallpapers.com/images/high/rust-game-iuw5qm29ai120goe.webp') center/cover no-repeat fixed;
  position: relative;
}

.faq-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.6);
  z-index: 0;
}

.faq-section h2 {
  font-size: 3rem;
  color: #f05454;
  position: relative;
  z-index: 1;
}

.divider {
  width: 120px;
  height: 3px;
  background: #f05454;
  margin: 20px auto 40px;
  position: relative;
  z-index: 1;
}

.faq-list {
  position: relative;
  z-index: 1;
}

.faq-item {
  background: rgba(28,28,28,0.9);
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  margin-bottom: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-question {
  padding: 18px 24px;
  font-weight: 600;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  background: linear-gradient(145deg,#1c1c1c,#111);
}

.faq-question:hover {
  background: linear-gradient(145deg,#2a2a2a,#161616);
}

.toggle-icon {
  font-weight: bold;
  font-size: 1.3rem;
  color: #f05454;
}

.faq-answer {
  padding: 16px 24px;
  background: rgba(28,28,28,0.85);
  font-size: 1rem;
  color: #ccc;
  line-height: 1.6;
  animation: fadeIn 0.3s ease forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .faq-section h2 { font-size: 2rem; }
  .faq-question { font-size: 1rem; }
  .faq-answer { font-size: 0.95rem; }
}
</style>