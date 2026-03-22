<script setup lang="ts">
defineProps<{
  members: {
    name: string;
    role: string;
    avatar: string;
  }[];
}>();
</script>

<template>
  <section id="members" class="members-section">
    <h2>Clan Members</h2>
    <div class="members-grid">
      <div v-for="member in members" :key="member.name" class="member-card">
        <div class="avatar-wrapper" :class="member.role.toLowerCase()">
          <img :src="member.avatar" :alt="member.name" />
          <span class="status-dot online" title="Online"></span>
        </div>
        <h3>{{ member.name }}</h3>
        <p :class="['role-badge', member.role.toLowerCase()]">{{ member.role }}</p>
        <button class="view-profile-btn">View Profile</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.members-section {
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  background: #1b1b1b url('https://images.unsplash.com/photo-1625723427391-164c022d6d3a?auto=format&fit=crop&w=1950&q=80') no-repeat center/cover;
  border-top: 3px solid #f05454;
  border-bottom: 3px solid #f05454;
}

.members-section h2 {
  font-size: 3rem;
  color: #f05454;
  margin-bottom: 40px;
  text-shadow: 0 0 12px #f05454;
}

.members-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 30px;
  justify-items: center;
}

.member-card {
  background: rgba(30, 30, 30, 0.85);
  border-radius: 24px;
  padding: 24px 16px 32px;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(240, 84, 84, 0.4);
}

.member-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 12px 36px rgba(0,0,0,0.7), 0 0 12px #f05454;
}

.avatar-wrapper {
  position: relative;
  display: inline-block;
  border-radius: 50%;
  padding: 4px;
  transition: box-shadow 0.3s ease;
}

.avatar-wrapper img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid #f05454;
}

.avatar-wrapper.leader img {
  box-shadow: 0 0 12px #f05454;
}

.avatar-wrapper.raider img {
  box-shadow: 0 0 12px #f5a623;
}

.avatar-wrapper.support img {
  box-shadow: 0 0 12px #4fc1ff;
}

.status-dot {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #1b1b1b;
  background: #4cd137;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% { transform: scale(0.9); opacity: 0.7; }
  50% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(0.9); opacity: 0.7; }
}

.member-card h3 {
  font-size: 1.5rem;
  margin-bottom: 6px;
  color: #fff;
  text-shadow: 0 0 6px rgba(0,0,0,0.5);
}

.role-badge {
  display: inline-block;
  padding: 6px 14px;
  border-radius: 14px;
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: #fff;
  text-shadow: 0 0 4px rgba(0,0,0,0.5);
}

/* Role Colors */
.role-badge.leader { background: #f05454; }
.role-badge.raider { background: #f5a623; }
.role-badge.support { background: #4fc1ff; }

.view-profile-btn {
  padding: 10px 20px;
  background: linear-gradient(145deg, #7289da, #5b6eae);
  color: #fff;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.3s ease;
}

.view-profile-btn:hover {
  transform: scale(1.05);
  background: linear-gradient(145deg, #5b6eae, #7289da);
  box-shadow: 0 0 16px rgba(114,137,218,0.7);
}
</style>