<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const loading = ref(false);

const handleLogin = async () => {
  loading.value = true;

  // fake delay (replace with real API)
  setTimeout(() => {
    loading.value = false;
    alert(`Logged in as ${email.value}`);
  }, 1200);
};
</script>

<template>
  <section class="login-page">

    <!-- Background -->
    <div class="bg"></div>
    <div class="overlay"></div>
    <div class="grain"></div>

    <!-- Smoke -->
    <div class="smoke smoke-1"></div>
    <div class="smoke smoke-2"></div>

    <!-- Login Box -->
    <div class="login-box">

      <!-- Title -->
      <h1 class="login-title">
        <span v-for="(c,i) in 'LOGIN'.split('')" :key="i" :style="{ animationDelay: i * 0.05 + 's' }">
          {{ c }}
        </span>
      </h1>

      <div class="divider"></div>

      <!-- Form -->
      <form @submit.prevent="handleLogin" class="login-form">

        <!-- Email -->
        <div class="input-group">
          <input
            v-model="email"
            type="email"
            required
            placeholder=" "
          />
          <label>Email</label>
        </div>

        <!-- Password -->
        <div class="input-group">
          <input
            v-model="password"
            type="password"
            required
            placeholder=" "
          />
          <label>Password</label>
        </div>

        <!-- Options -->
        <div class="login-options">
          <label class="remember">
            <input type="checkbox" />
            Remember me
          </label>

          <a href="#" class="forgot">Forgot?</a>
        </div>

        <!-- Button -->
        <button type="submit" class="login-btn" :disabled="loading">
          <span v-if="!loading">ENTER SERVER</span>
          <span v-else class="loader"></span>
        </button>

      </form>

      <!-- Footer -->
      <p class="register">
        Don’t have an account?
        <a href="#">Register</a>
      </p>

    </div>
  </section>
</template>

<style scoped>
.login-page {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-family: 'Arial Black', sans-serif;
}

/* Background */
.bg {
  position: absolute;
  width: 110%;
  height: 110%;
  background: url('https://images.unsplash.com/photo-1549921296-3a6b2dc9f8d4?auto=format&fit=crop&w=1950&q=80') center/cover;
  filter: brightness(0.25) contrast(1.4);
  animation: bgMove 30s linear infinite;
}

@keyframes bgMove {
  50% { transform: scale(1.05) translate(10px,5px); }
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(0,0,0,0.4), rgba(0,0,0,0.95));
}

.grain {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.25;
  background: url("https://www.transparenttextures.com/patterns/asfalt-dark.png");
}

/* Smoke */
.smoke {
  position: absolute;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.04), transparent);
  animation: smokeMove 40s linear infinite;
}
.smoke-2 { animation-duration: 60s; opacity: 0.5; }

@keyframes smokeMove {
  to { transform: translate(10%, 10%); }
}

/* Login Box */
.login-box {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 400px;
  padding: 40px 30px;
  background: linear-gradient(145deg, #1c1c1c, #111);
  border: 1px solid #2a2a2a;
  box-shadow: 0 0 40px rgba(0,0,0,0.8);
  text-align: center;
}

/* Title */
.login-title span {
  display: inline-block;
  opacity: 0;
  transform: translateY(30px);
  animation: reveal 0.6s forwards, flicker 3s infinite;
  color: #d47a2a;
  font-size: 2.5rem;
  letter-spacing: 3px;
}

@keyframes reveal {
  to { opacity: 1; transform: translateY(0); }
}

.divider {
  width: 80px;
  height: 3px;
  background: #d47a2a;
  margin: 15px auto 30px;
}

/* Inputs */
.input-group {
  position: relative;
  margin-bottom: 25px;
}

.input-group input {
  width: 100%;
  padding: 12px;
  background: transparent;
  border: 1px solid #444;
  color: #fff;
  outline: none;
}

.input-group label {
  position: absolute;
  left: 12px;
  top: 12px;
  color: #777;
  font-size: 0.9rem;
  transition: 0.2s;
  pointer-events: none;
}

.input-group input:focus + label,
.input-group input:not(:placeholder-shown) + label {
  top: -8px;
  left: 8px;
  font-size: 0.7rem;
  color: #d47a2a;
  background: #111;
  padding: 0 5px;
}

/* Options */
.login-options {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 0.8rem;
}

.forgot {
  color: #888;
  text-decoration: none;
}
.forgot:hover {
  color: #d47a2a;
}

/* Button */
.login-btn {
  width: 100%;
  padding: 14px;
  background: #d47a2a;
  color: #111;
  font-weight: 800;
  border: none;
  cursor: pointer;
  transition: 0.3s;
}

.login-btn:hover {
  background: #ff9d4d;
  box-shadow: 0 0 20px rgba(212,122,42,0.4);
}

/* Loader */
.loader {
  width: 18px;
  height: 18px;
  border: 2px solid #111;
  border-top: 2px solid transparent;
  border-radius: 50%;
  display: inline-block;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Footer */
.register {
  margin-top: 20px;
  font-size: 0.85rem;
  color: #777;
}

.register a {
  color: #d47a2a;
  text-decoration: none;
}

/* Mobile */
@media (max-width: 500px) {
  .login-box {
    margin: 0 15px;
  }
}
</style>