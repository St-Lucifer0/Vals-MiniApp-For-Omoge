# Setup Guide - Omoge Valentine's App 💕

## What You Need To Do Next

### 1. Add Your Music File 🎵
- Download "Under the Influence" by Chris Brown (or any romantic song)
- Place it in the `public` folder
- Rename it to: **music.mp3**

### 2. Add Your Images/Videos 📸
Go to the `public/media` folder and add 7 files:

```
public/media/
├── card1.jpg  (or .mp4 for video)
├── card2.jpg
├── card3.jpg
├── card4.jpg
├── card5.jpg
├── card6.jpg
└── card7.jpg
```

**Tip:** Keep images under 5MB each for best performance

### 3. Customize the Card Text ✏️

Open `src/components/CardReveal.jsx` and edit this part:

```javascript
const reasons = [
  {
    id: 1,
    title: "Reason 1",                    // ← Change to your title
    text: "Your smile lights up my world", // ← Change to your reason
    media: "card1.jpg"                     // ← Your filename
  },
  // ... edit all 7 cards
]
```

### 4. Customize the Date Options 💝

Open `src/components/DateOptions.jsx` and edit this:

```javascript
const dateOptions = [
  {
    id: 1,
    title: "Romantic Dinner",              // ← Change title
    icon: "🍽️",                            // ← Change icon
    description: "A cozy candlelit...",    // ← Change description
    details: "Good food, great company..." // ← Change details
  },
  // ... edit all 3 options
]
```

### 5. Test It Out 🧪

The app is currently running at: **http://localhost:5173/**

Go through the whole experience:
1. Welcome screen
2. Tap card 1 to flip it
3. Read the reason and click "Next Reason"
4. Repeat for all 7 cards (one at a time)
5. Try to click "No" (it runs away!)
6. Click "Yes"
7. Choose a date option

### 6. Build for Deployment 🚀

When everything looks perfect:

```bash
npm run build
```

This creates a `dist` folder you can deploy to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting

---

## Quick Checklist ✅

- [ ] Music file added (`public/music.mp3`)
- [ ] 7 images/videos added (`public/media/card1.jpg`, etc.)
- [ ] Card titles and reasons customized
- [ ] Date options customized
- [ ] Tested on desktop
- [ ] Tested on mobile (important!)
- [ ] Built for production (`npm run build`)
- [ ] Deployed online

---

## Need Help?

Check `README.md` for detailed documentation!
