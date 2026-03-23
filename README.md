# 🛢️ Rust Server Website (Vue 3 + TypeScript + Vite)

A fully custom **Rust-style server website** built with Vue 3, TypeScript, and Vite.
Designed specifically for **server owners**, not generic users — focused on control, clarity, and a cinematic game-style UI.https://i.ibb.co/q36B66Gp/Screenshot-2026-03-23-12-04-45.png

---
![Preview](https://i.ibb.co/NdHC2pwX/Screenshot-2026-03-23-11-14-35.png)
![Preview](https://i.ibb.co/CpnfnbxD/Screenshot-2026-03-23-12-07-48.png)
![Preview](https://i.ibb.co/wrPnH4dV/Screenshot-2026-03-23-12-10-33.png)
![Preview](https://i.ibb.co/CpnfnbxD/Screenshot-2026-03-23-12-07-48.png)
![Preview](https://i.ibb.co/CpnfnbxD/Screenshot-2026-03-23-12-07-48.png)
## 🔥 Features

- ⚙️ Vue 3 + `<script setup>` + TypeScript
- 🎮 Rust / Steam-inspired UI
- 🌫️ Animated smoke & atmosphere effects
- 🎞️ Film grain overlay for gritty visuals
- 🎨 Dark industrial design with orange accent theme

---

## 🧩 Sections Included

### 🏠 Banner / Hero

- Full-screen cinematic header
- Background image with overlay
- Animated particles / sparks
- Discord join button

---

### 📖 About & Rules

- Server description
- Styled rules grid
- Clean readable layout with Rust-style UI

---

### 🧑‍💼 Our Team (Staff Only)

- Built specifically for:

  - Owner
  - Admin
  - Mod
  - Support

- Role-based styling
- Clean card layout with avatars
- Designed for **staff display only (not full player list)**

---

### 🔄 Wipe Status

- Last wipe + next wipe display
- Highlighted next wipe
- Clean minimal UI
- Consistent section height with rest of site

---

### 📅 Events System

- Event cards with:

  - Title
  - Date
  - Short description
  - Link button

- Dynamic **“days left” countdown**
- Rust-style corner date tags
- Hover animations

---

## 🚀 Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

---

## 🧠 Customisation

### 🔹 Edit Server Info

Update description and rules inside your About component.

---

### 🔹 Edit Team (Staff Only)

Example:

```ts
members: [
  { name: "OwnerName", role: "owner", avatar: "/img/owner.png" },
  { name: "AdminName", role: "admin", avatar: "/img/admin.png" },
  { name: "ModName", role: "mod", avatar: "/img/mod.png" },
  { name: "SupportName", role: "support", avatar: "/img/support.png" },
];
```

---

### 🔹 Edit Wipe Dates

```vue
<Wipes :lastWipe="'March 1'" :nextWipe="'April 1'" />
```

---

### 🔹 Edit Events

```ts
events: [
  {
    title: "Raid Night",
    date: "2026-04-01",
    description: "Massive PvP raid event with rewards.",
    link: "#",
  },
];
```

---

## 🎨 Design Style

This project is designed to feel like:

- Rust main menu
- Steam game page
- Dark survival UI

### Core Visual Elements:

- Orange accent (#d47a2a)
- Heavy shadows & contrast
- Subtle animations (not flashy)
- Industrial / gritty feel

---

## 🛠 Recommended Setup

- VS Code
- Volar (Vue extension)
- Disable Vetur

---

## ⚙️ TypeScript Support

- Uses `vue-tsc` for type checking
- Volar provides `.vue` IntelliSense

---

## ⚠️ Notes

- All sections use **consistent height and layout**
- Fully responsive
- Built for **server owners managing communities**
- Clean structure for easy expansion

---

## 💡 Future Improvements

- Live server stats (players, map, uptime)
- Discord integration widget
- Admin panel to edit events
- Server status indicator (online/offline)
- Map wipe countdown timer

---

## 🛢️ Final

Survive. Build. Raid. Dominate.
