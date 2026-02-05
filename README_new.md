# 💖 Would You Be My Valentine?

A cute and interactive Valentine's Day card built with vanilla HTML, CSS, and JavaScript. Perfect for a special someone!

## ✨ Features

- **Interactive Design**: Beautiful gradient background with smooth animations
- **Playful "No" Button**: The button hilariously escapes your cursor, making it impossible to click
- **Funny Messages**: The "No" button cycles through amusing rejection messages in Italian
- **"Yes" Celebration**: Confetti-like heart animations and a sweet success message when clicked
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Mobile-Friendly**: Touch controls optimized for small screens
- **Cute Decorations**: Heart emojis and smooth transitions throughout

## 🚀 Quick Start

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd my\ valentine\ postcard
   ```

2. Deploy to GitHub Pages:
   - Push to your `main` branch
   - Enable GitHub Pages in repository settings
   - Your card will be live at `https://username.github.io/repository-name`

3. Or open locally:
   - Simply open `index.html` in your browser

## 📁 Project Structure

```
.
├── index.html      # Main page with semantic HTML structure
├── style.css       # Styling with animations and responsive design
├── script.js       # Interactive button logic and animations
└── README.md       # This file
```

## 🎨 Customization

### Change the recipient name
Edit the `<h1>` in `index.html`:
```html
<h1>Daniela, vuoi essere il mio Valentine?</h1>
```

### Customize the "No" messages
Edit the `noMessages` array in `script.js` to add your own funny rejection messages.

### Adjust colors
Modify the color values in `style.css`:
- Primary pink: `#ff1493`
- Background gradient: `#e89faa`, `#ffb6c1`, etc.

## 💝 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Desktop**: Full experience (width > 500px)
- **Tablet**: Optimized layout (500px > width > 350px)
- **Mobile**: Compact design (width ≤ 350px)

## 🎯 How It Works

1. **Yes Button**: Triggers a celebration with floating hearts and an animated background
2. **No Button**: 
   - Desktop: Moves away on hover
   - Mobile: Moves away on tap/click
   - Cycles through funny messages each time

## 💕 Made with Love

Perfect for expressing your feelings in a fun and memorable way. Happy Valentine's Day! 💖
