<script setup lang="ts">
defineProps<{ clanName: string }>()

const images = [
  {
    id: 1,
    url: "https://www.thesun.co.uk/wp-content/uploads/2025/05/new-rust-1.jpg?strip=all&w=960",
    title: "Base Defense",
    desc: "Holding down the compound during an intense raid."
  },
  {
    id: 2,
    url: "https://www.thesun.co.uk/wp-content/uploads/2025/05/new-rust-1.jpg?strip=all&w=960",
    title: "Raid Night",
    desc: "Full squad pushing enemy territory."
  },
  {
    id: 3,
    url: "https://www.thesun.co.uk/wp-content/uploads/2025/05/new-rust-1.jpg?strip=all&w=960",
    title: "Loot Run",
    desc: "Stacked inventory after a successful roam."
  },
  {
    id: 4,
    url: "https://www.thesun.co.uk/wp-content/uploads/2025/05/new-rust-1.jpg?strip=all&w=960",
    title: "Sniper Position",
    desc: "Watching over the battlefield from above."
  },
  {
    id: 5,
    url: "https://www.thesun.co.uk/wp-content/uploads/2025/05/new-rust-1.jpg?strip=all&w=960",
    title: "Night Ops",
    desc: "Stealth plays under the cover of darkness."
  },
  {
    id: 6,
    url: "https://www.thesun.co.uk/wp-content/uploads/2025/05/new-rust-1.jpg?strip=all&w=960",
    title: "Clan Victory",
    desc: "Another domination secured."
  }
]
</script>

<template>
  <section class="gallery">
    <div class="gallery-header">
      <h2>{{ clanName }} Gallery</h2>
      <p>Moments from raids, wipes, and pure domination. This is what we do.</p>
    </div>

    <div class="gallery-grid">
      <div
        v-for="img in images"
        :key="img.id"
        v-memo="[img]"
        class="gallery-item"
      >
        <img
          :src="img.url"
          :alt="img.title"
          loading="lazy"
          decoding="async"
        />

        <div class="overlay">
          <h3>{{ img.title }}</h3>
          <p>{{ img.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery {
  width: 80%;
  overflow: hidden;
  text-align: center;
}

.gallery-header {
  margin-bottom: 30px;
}

.gallery-header h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.gallery-header p {
  color: #aaa;
  font-size: 0.95rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
}

/* ITEM */
.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid #2a2a2a;
  cursor: pointer;

  /* smoother GPU rendering */
  transform: translateZ(0);
  will-change: transform;
}

/* IMAGE */
.gallery-item img {
  width: 100%;
  height: 220px;
  object-fit: cover;

  transition: transform 0.35s ease;
  will-change: transform;
}

/* Hover = GPU-friendly */
.gallery-item:hover img {
  transform: scale(1.06);
}

/* OVERLAY */
.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.2));

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 12px;

  opacity: 0;
  transition: opacity 0.25s ease;

  /* avoids repaint issues */
  will-change: opacity;
}

.gallery-item:hover .overlay {
  opacity: 1;
}

.overlay h3 {
  margin: 0;
  font-size: 1.1rem;
}

.overlay p {
  margin: 2px 0 0;
  font-size: 0.85rem;
  color: #ccc;
}

/* Tablet */
@media (min-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .gallery-item img {
    height: 240px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .gallery-header h2 {
    font-size: 2.6rem;
  }

  .gallery-header p {
    font-size: 1.1rem;
  }

  .gallery-item img {
    height: 260px;
  }
}
</style>