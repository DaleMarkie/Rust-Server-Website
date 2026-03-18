<script setup lang="ts">
import { ref, onMounted } from "vue";

const query = ref("");

const placeholderTexts = [
  "Search Google or type a URL",
  "Vue.js tutorials",
  "OpenAI ChatGPT",
  "JavaScript tips"
];

let placeholderIndex = 0;
let charIndex = 0;
const placeholder = ref("");

const typePlaceholder = () => {
  if (charIndex <= placeholderTexts[placeholderIndex].length) {
    placeholder.value = placeholderTexts[placeholderIndex].substring(0, charIndex);
    charIndex++;
    setTimeout(typePlaceholder, 100);
  } else {
    setTimeout(() => {
      charIndex = 0;
      placeholderIndex = (placeholderIndex + 1) % placeholderTexts.length;
      typePlaceholder();
    }, 1800);
  }
};

const search = () => {
  if (query.value.trim() !== "") {
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query.value)}`;
  }
};

onMounted(() => {
  typePlaceholder();
});
</script>

<template>
  <div class="home">
    <!-- Top nav fixed -->
    <header class="top-nav">
      <div class="nav-right">
        <a href="https://mail.google.com" target="_blank">Gmail</a>
        <a href="https://www.google.com/imghp" target="_blank">Images</a>
        <div class="avatar">
          <img src="https://www.google.com/images/branding/product/ico/googleg_lodp.ico" alt="Google Account"/>
        </div>
      </div>
    </header>

    <!-- Main content -->
    <main class="content">
      <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" class="logo-img"/>

      <div class="search-bar">
        <input v-model="query" :placeholder="placeholder" @keyup.enter="search"/>
        <span class="mic">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="#4285F4">
            <path d="M12 14c1.654 0 3-1.346 3-3V5c0-1.654-1.346-3-3-3S9 3.346 9 5v6c0 1.654 1.346 3 3 3zm5-3c0 2.761-2.239 5-5 5s-5-2.239-5-5H7c0 3.309 2.691 6 6 6s6-2.691 6-6h-1z"/>
          </svg>
        </span>
      </div>

      <div class="buttons">
        <button @click="search">Google Search</button>
        <button @click="() => window.location.href='https://www.google.com/doodles'">I'm Feeling Lucky</button>
      </div>
    </main>
  </div>
</template>

<style scoped>
html, body, #app {
  margin:0; padding:0; height:100%; width:100%; font-family:'Roboto', sans-serif; background:#fff; overflow:hidden;
}

.home { position:relative; width:100%; height:100%; }

/* TOP NAV FIXED AT TOP-RIGHT */
.top-nav {
  position:fixed;
  top:0; right:0; left:0;
  display:flex;
  justify-content:flex-end;
  align-items:center;
  padding:12px 24px;
  background:transparent; /* keeps it minimal like Google */
  z-index:1000;
}
.nav-right {
  display:flex;
  align-items:center;
}
.nav-right a {
  margin-left:16px;
  font-size:14px;
  color:#5f6368;
  text-decoration:none;
  transition:color 0.2s;
}
.nav-right a:hover { color:#202124; }
.avatar {
  margin-left:16px;
  width:32px;
  height:32px;
  border-radius:50%;
  overflow:hidden;
  cursor:pointer;
}
.avatar img { width:100%; height:100%; }

/* MAIN CONTENT */
.content {
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  text-align:center;
  width:600px;
}

.logo-img { width:272px; margin-bottom:24px; }

.search-bar {
  display:flex;
  align-items:center;
  position:relative;
  border:1px solid #dfe1e5;
  border-radius:24px;
  padding:0 12px;
  height:44px;
  box-shadow:0 1px 6px rgba(32,33,36,0.28);
  background:#fff;
  transition:box-shadow 0.2s, transform 0.2s;
}
.search-bar:hover { box-shadow:0 3px 12px rgba(32,33,36,0.3); transform:scale(1.01); }
.search-bar input {
  flex:1;
  border:none;
  outline:none;
  font-size:16px;
  padding:0 8px;
  color:#202124;
  background:#fff;
}
.search-bar input::placeholder { color:rgba(0,0,0,0.54); }
.mic { position:absolute; right:12px; cursor:pointer; display:flex; align-items:center; }

/* Buttons below search bar */
.buttons { margin-top:24px; }
.buttons button {
  margin:0 4px;
  padding:10px 20px;
  font-size:14px;
  background:#f8f9fa;
  border:1px solid #f8f9fa;
  border-radius:4px;
  cursor:pointer;
  transition:background 0.2s, box-shadow 0.2s;
}
.buttons button:hover { background:#f1f3f4; box-shadow:0 1px 1px rgba(0,0,0,0.1); }

/* Responsive */
@media (max-width:640px) {
  .content { width:90%; }
  .logo-img { width:200px; margin-bottom:16px; }
  .buttons button { padding:8px 16px; font-size:13px; }
}
</style>