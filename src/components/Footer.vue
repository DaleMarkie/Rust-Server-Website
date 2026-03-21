<script setup lang="ts">
defineProps<{ clanName: string }>();
</script>

<template>
  <footer class="footer-section">
    <p>© 2026 {{ clanName }}. All rights reserved.</p>
  </footer>
</template>

<style scoped>
.footer-section {
  text-align: center;
  padding: 40px 20px;
  color: #888;
  border-top: 1px solid rgba(255,255,255,0.1);
}
</style>