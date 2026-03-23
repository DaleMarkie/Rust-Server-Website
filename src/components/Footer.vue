<script setup lang="ts">
defineProps<{ clanName: string }>();
</script>

<template>
  <footer class="footer-section">
    <p>© 2026 {{ clanName }}. All rights reserved.</p>

    <div class="social-icons">
      <!-- Discord -->
      <a href="#" target="_blank" aria-label="Discord" class="discord">
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 245 240">
          <path d="M104.4 0C46.7 0 0 46.7 0 104.4s46.7 104.4 104.4 104.4c57.7 0 104.4-46.7 104.4-104.4S162.1 0 104.4 0zm43.3 160c-5.5 0-10-5-10-10 0-5 4.5-10 10-10s10 5 10 10c0 5-4.5 10-10 10zm-86.6 0c-5.5 0-10-5-10-10 0-5 4.5-10 10-10s10 5 10 10c0 5-4.5 10-10 10z"/>
        </svg>
      </a>

      <!-- Twitter -->
      <a href="#" target="_blank" aria-label="Twitter" class="twitter">
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.6c-.9.4-1.8.6-2.8.8 1-.6 1.7-1.5 2-2.6-.9.6-2 .9-3.1 1.1-.9-.9-2.2-1.4-3.6-1.4-2.7 0-4.8 2.2-4.8 4.8 0 .4 0 .8.1 1.2C7.7 8 4.1 6 1.7 3.2c-.5.9-.8 1.9-.8 3 0 2 1 3.8 2.5 4.8-.9 0-1.8-.3-2.6-.7v.1c0 2.8 2 5.1 4.7 5.6-.5.1-1 .2-1.5.2-.4 0-.8 0-1.2-.1.8 2.5 3.2 4.4 6 4.5-2.2 1.7-5 2.7-8 2.7-.5 0-1 0-1.5-.1 2.8 1.8 6.1 2.8 9.7 2.8 11.7 0 18.1-9.7 18.1-18.1 0-.3 0-.5 0-.8 1.2-.9 2.2-2.1 3-3.4z"/>
        </svg>
      </a>

      <!-- YouTube -->
      <a href="#" target="_blank" aria-label="YouTube" class="youtube">
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.5 6.2s-.2-1.7-.8-2.5c-.7-.9-1.5-.9-1.9-1C18.2 2.5 12 2.5 12 2.5h0s-6.2 0-8.8.2c-.4 0-1.2.1-1.9 1-.6.8-.8 2.5-.8 2.5S0 8 0 9.8v2.4c0 1.8.2 3.6.2 3.6s.2 1.7.8 2.5c.7.9 1.6.9 2 .9 1.5.2 6.5.2 6.5.2s6.2 0 8.8-.2c.4 0 1.2-.1 1.9-.9.6-.8.8-2.5.8-2.5s.2-1.8.2-3.6V9.8c0-1.8-.2-3.6-.2-3.6zM9.6 15.3V8.7l6.2 3.3-6.2 3.3z"/>
        </svg>
      </a>
    </div>

    <!-- Credit Line -->
    <p class="credit">
      Developed By 
      <a 
        href="https://github.com/DaleMarkie/Rust-Server-Website/blob/main/README.md?plain=1" 
        target="_blank"
      >
        MarkieWebworks &lt;3
      </a>
    </p>
  </footer>
</template>

<style scoped>
.footer-section {
  text-align: center;
  padding: 40px 20px;
  color: #888;
  border-top: 1px solid rgba(255,255,255,0.1);
}

.social-icons {
  margin-top: 16px;
  display: flex;
  justify-content: center;
  gap: 16px;
}

.social-icons a {
  color: #eee;
  transition: color 0.2s;
}

/* Brand Colors on Hover */
.social-icons a.discord:hover {
  color: #7289da;
}
.social-icons a.twitter:hover {
  color: #1da1f2;
}
.social-icons a.youtube:hover {
  color: #ff0000;
}

/* Credit styling */
.credit {
  margin-top: 20px;
  font-size: 0.9rem;
}

.credit a {
  color: #aaa;
  text-decoration: none;
  transition: color 0.2s;
}

.credit a:hover {
  color: #fff;
}
</style>