# Omoge - Valentine's Day Web App 💕

A romantic, interactive card-flip web app where you reveal 7 reasons why you love her, ask her to be your Valentine, and let her choose from 3 date options!

## ✨ Features

- **Welcome Screen** - Beautiful introduction
- **7 Flip Cards** - One at a time! Each card reveals a reason with images/videos, then Next button
- **Interactive Question** - "Will you be my Valentine?" with a playful escaping No button
- **7 Funny Messages** - Cycling messages when she tries to click No
- **3 Date Options** - Let her choose from 3 romantic date ideas
- **Background Music** - Plays "Under the Influence" or any song you choose
- **Fully Responsive** - Works perfectly on mobile and desktop
- **Modern Minimal Design** - Beautiful Valentine's aesthetic

## 🚀 Quick Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Add your music file:**
   - Place your music file in the `public` folder
   - Rename it to `music.mp3`
   - Supported formats: MP3, WAV, OGG

3. **Add your images/videos:**
   - Place 7 images or videos in the `public/media` folder
   - Name them: `card1.jpg`, `card2.jpg`, `card3.jpg`, etc.
   - Or use videos: `card1.mp4`, `card2.mp4`, etc.
   - See `public/media/INSTRUCTIONS.txt` for details

4. **Customize the card text:**
   - Edit `src/components/CardReveal.jsx`
   - Change the titles and reasons in the `reasons` array

5. **Run the app:**
```bash
npm run dev
```

6. **Build for production:**
```bash
npm run build
```

## 📝 Detailed Customization

### Card Reasons
Edit [src/components/CardReveal.jsx](src/components/CardReveal.jsx):
```javascript
const reasons = [
  {
    id: 1,
    title: "Your Beautiful Smile",  // ← Change this
    text: "Every time you smile...", // ← Change this
    media: "card1.jpg"               // ← Your image filename
  },
  // ... 6 more cards
]
```

### Date Options
Edit [src/components/DateOptions.jsx](src/components/DateOptions.jsx):
```javascript
const dateOptions = [
  {
    id: 1,
    title: "Romantic Dinner",        // ← Change this
    icon: "🍽️",                      // ← Change emoji
    description: "A cozy dinner...", // ← Change this
    details: "Good food..."          // ← Change this
  },
  // ... 2 more options
]
```

### Funny Messages
Edit [src/components/QuestionScreen.jsx](src/components/QuestionScreen.jsx):
```javascript
const messages = [
  "Will You Be My Valentine?",
  "Are you sure? 🥺",
  // ... 5 more messages
]
```

### Colors & Styling
- Background gradient: `src/App.css`
- Card styling: `src/components/CardReveal.css`
- Date options styling: `src/components/DateOptions.css`
- Question styling: `src/components/QuestionScreen.css`

## 📱 How It Works

1. **Welcome** → She clicks "Start"
2. **Card 1** → She taps the card to flip and reveal your first reason
3. **Next Button** → After reading, she clicks "Next Reason" to continue
4. **Cards 2-7** → Same process for all 7 reasons (one at a time)
5. **Question** → After all cards, the Valentine question appears
6. **Funny Chase** → No button runs away with funny messages
7. **Date Choice** → After saying Yes, she picks from 3 date options
8. **Final Message** → Sweet confirmation message

## 🎨 File Structure

```
Omoge/
├── public/
│   ├── media/              # Add your 7 images/videos here
│   │   ├── card1.jpg
│   │   ├── card2.jpg
│   │   └── ...
│   ├── music.mp3           # Your background music
│   └── heart.svg
├── src/
│   ├── components/
│   │   ├── WelcomeScreen.jsx
│   │   ├── CardReveal.jsx      # 7 flip cards
│   │   ├── QuestionScreen.jsx  # Valentine question
│   │   ├── DateOptions.jsx     # 3 date choices
│   │   └── MusicPlayer.jsx
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

## 🌐 Deployment

Deploy to any static hosting service:

**Vercel:**
```bash
npm run build
# Upload 'dist' folder to Vercel
```

**Netlify:**
```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

**GitHub Pages:**
```bash
npm run build
# Push 'dist' folder to gh-pages branch
```

## 🎵 Music Note

Make sure you have the rights to use the music file. For "Under the Influence" by Chris Brown, download your own copy and place it as `public/music.mp3`.

## 💡 Tips

- Keep images under 5MB for best performance
- Test on mobile before sending to her
- Customize all the text to make it personal
- Make sure music file is in the right location
- The No button cycles through 7 messages infinitely

## 🛠️ Tech Stack

- React 18
- Vite
- CSS3 with 3D transforms and animations
- HTML5 Audio API

---

Made with 💕 for Omoge
