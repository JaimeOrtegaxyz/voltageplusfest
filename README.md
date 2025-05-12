# Voltage+ Festival Website Blueprint

A **ready-to-use, open-source template** for electronic music festival websites and digital posters.

[Live Demo → voltageplusfest.vercel.app](https://voltageplusfest.vercel.app/)

---

## What is this?

Voltage+ is a modern, desktop-first React template designed for music festivals, events, and digital posters.  
It's built to be **bold, minimal, and easy to remix**—perfect for organizers, designers, or anyone who wants web presence for their event.

---

## 🎛️ Features

- **Poster-like Layout:**  
  Big, bold typography and a clean, grid-based structure.
- **Dynamic Halftone Animation:** 
  Standalone HTML/JS header animation featuring a multi-layered, randomized pattern-shifting effect that creates unique visuals on each page load.
  - **Number of Layers (K):** Controls how many different offset patterns are applied simultaneously (`numOffsetLayers`).
  - **Dots per Layer (M):** Controls how many dots are included in the random subset for each layer (`dotsPerLayer`).
  - **Customization Options:**
    - `allowedKValues`: Array of possible layer counts (e.g., `[0, 1, 2, 3]`). Set to `[3]` to fix K.
    - `allowedMValues`: Array of possible dots per layer (e.g., `[50, 100, 500, 1000]`). Set to `[100]` to fix M.
    - `updateIntervalFrames`: Frame rate for pattern updates (lower = more frequent changes).
  - **Performance Note:** Higher K values increase visual complexity and per-frame cost. Higher M values create denser patterns with higher update costs.
- **SVG Arrows:**  
  Custom, themeable SVG navigation arrows with smooth transitions.
- **Easy Customization:**  
  Change event details, colors, and assets.
- **Accessible & Fast:**  
  Semantic HTML, keyboard navigation, and instant load with Vite.

---

## 🛠️ Tech Stack

- **React** + **Vite** (lightning-fast dev)
- **Tailwind CSS** (utility-first styling)
- **shadcn/ui** + **Radix UI** (accessible UI primitives)
- **Standalone HTML/JS animation** (can be used in any project)

---

## 🚀 Quick Start

```bash
git clone https://github.com/yourusername/voltageplusfest.git
cd voltageplusfest
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🖌️ Customizing

- **Event Info:**  
  Edit `src/components/Poster.tsx` for lineup, links, and details.
- **Animation:**  
  The animated header is `/public/halftone_animation.html`—use it anywhere.
- **Branding:**  
  Swap SVGs in `/public`, tweak colors in Tailwind config, or adjust fonts as you like.

---

## 📱 Mobile & Desktop

- **Mobile:**  
  No scaling down, big headings, and vertical scroll for a true poster feel.
- **Desktop:**  
  Centered, scaled card for a classic web poster look.

---

## 🧩 Reuse & License

- **Open Source:**  
  Use, remix, and share for any event or project.
- **Animation:**  
  The animation is a standalone script—drop it into any HTML page.
- **Contributions welcome!**

---

## 🙏 Credits

Made with love while I was bored.  
Feel free to fork, remix, and make it your own.

---
