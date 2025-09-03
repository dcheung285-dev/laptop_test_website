# Auto Slider Integration Guide

This guide shows you how to integrate the auto slider system into any page on your website.

## 📁 Files Created

The auto slider system consists of these files:

### Configuration
- `Configurations/auto-slider-config.js` - Slider configuration and settings

### Styles  
- `styles/auto-slider.css` - All CSS styling for the sliders

### Scripts
- `scripts/auto-slider.js` - Core slider functionality
- `scripts/auto-slider-loader.js` - Easy integration loader (like nav-loader.js)

### Testing
- `auto-slider-test.html` - Test page to see the sliders in action
- `SLIDER_INTEGRATION_GUIDE.md` - This guide

## 🚀 Quick Integration Methods

### Method 1: Manual Integration (Most Control)

Add these to your HTML `<head>`:

```html
<!-- CSS -->
<link rel="stylesheet" href="styles/auto-slider.css">

<!-- JavaScript (in order) -->
<script src="Configurations/auto-slider-config.js"></script>
<script src="scripts/auto-slider.js"></script>
```

Add slider containers to your HTML body where you want them:

```html
<!-- Slider 1 (moves left) -->
<div id="auto-slider-1" class="auto-slider-container auto-slider-left"></div>

<!-- Slider 2 (moves right) -->
<div id="auto-slider-2" class="auto-slider-container auto-slider-right"></div>
```

### Method 2: Loader Integration (Easy)

Just include the loader and use the convenience function:

```html
<!-- Include the loader -->
<script src="scripts/auto-slider-loader.js"></script>

<script>
// Add sliders to any element
document.addEventListener('DOMContentLoaded', function() {
    // Add both sliders to the main content area
    addAutoSliders('#main-content');
    
    // Or add to a specific section
    addAutoSliders('.hero-section');
    
    // Or add to document body
    addAutoSliders(document.body);
});
</script>
```

### Method 3: Auto-Detection (Easiest)

1. Include the loader:
```html
<script src="scripts/auto-slider-loader.js"></script>
```

2. Create containers manually:
```html
<div id="auto-slider-1" class="auto-slider-container auto-slider-left"></div>
<div id="auto-slider-2" class="auto-slider-container auto-slider-right"></div>
```

The system will automatically detect the containers and initialize!

## 🏠 Adding to home.html

Here's how to add the sliders to your home.html page:

### Option A: Add to existing section

Find a good location in home.html (e.g., after the hero section) and add:

```html
<!-- Auto Slider Section -->
<section class="auto-slider-section">
    <div class="container">
        <!-- Slider 1 - Moving Left -->
        <div id="auto-slider-1" class="auto-slider-container auto-slider-left"></div>
        
        <!-- Spacing -->
        <div style="height: 1rem;"></div>
        
        <!-- Slider 2 - Moving Right -->
        <div id="auto-slider-2" class="auto-slider-container auto-slider-right"></div>
    </div>
</section>
```

Then add to the `<head>` section:

```html
<!-- Auto Slider System -->
<link rel="stylesheet" href="styles/auto-slider.css">
<script src="scripts/auto-slider-loader.js"></script>
```

### Option B: Use the loader method

Add only this to home.html head:

```html
<script src="scripts/auto-slider-loader.js"></script>
```

Then add this script before closing `</body>`:

```html
<script>
document.addEventListener('DOMContentLoaded', function() {
    // Find where to add sliders (after hero section)
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        // Create a container after hero section
        const sliderContainer = document.createElement('section');
        sliderContainer.className = 'auto-slider-section';
        heroSection.insertAdjacentElement('afterend', sliderContainer);
        
        // Add sliders to the container
        addAutoSliders(sliderContainer);
    }
});
</script>
```

## ⚙️ Configuration

Edit `Configurations/auto-slider-config.js` to customize:

### Change Images
```javascript
images: [
    {
        src: 'path/to/your/image.jpg',
        alt: 'Your Alt Text',
        width: 'auto',
        height: '60px',
        scale: 1.2 // Optional: Scale factor (1.0 = 100%, 1.2 = 120%, 0.8 = 80%)
    }
    // ... more images
]
```

### Change Speed
```javascript
animationSpeed: 30, // Pixels per second (lower = slower)
```

### Individual Image Scaling
Each image can have its own scale factor to ensure consistent sizing:

```javascript
images: [
    {
        src: 'assets/images/casino_test/stake_text_logo_black.svg',
        alt: 'Stake Casino',
        width: 'auto',
        height: '60px',
        scale: 1.0 // Normal size
    },
    {
        src: 'assets/images/casino_test/small_logo.png',
        alt: 'Small Logo',
        width: 'auto',
        height: '60px',
        scale: 1.5 // 50% larger to match other logos
    },
    {
        src: 'assets/images/casino_test/large_logo.png',
        alt: 'Large Logo',
        width: 'auto',
        height: '60px',
        scale: 0.8 // 20% smaller to match other logos
    }
]
```

**Scale Examples:**
- `1.0` = 100% (normal size)
- `1.2` = 120% (20% larger)
- `0.8` = 80% (20% smaller)
- `1.5` = 150% (50% larger)
- `0.5` = 50% (half size)

### Manual Gap Control
Each image now has its own **manual gap setting** for precise spacing control:

```javascript
// In image configuration
{
    src: 'assets/images/logo.png',
    alt: 'Logo',
    width: 'auto',
    height: '60px',
    scale: 1.5,
    gap: 50 // Manual gap after this image (in pixels)
}
```

**Benefits:**
- ✅ **Complete control** over spacing between each image
- ✅ **No complex calculations** that can go wrong
- ✅ **Predictable results** - you set exactly what you want
- ✅ **Easy to adjust** - just change the number
- ✅ **Works immediately** - no waiting for image loading

**Gap Examples:**
- `gap: 20` = Small spacing (tight layout)
- `gap: 30` = Normal spacing (default)
- `gap: 50` = Large spacing (for scaled-up images)
- `gap: 80` = Extra large spacing (for heavily scaled images)

**Recommended Approach:**
1. Start with `gap: 30` for all images
2. Increase gap for larger scaled images (e.g., `scale: 2.0` → `gap: 50`)
3. Test and adjust visually until spacing looks perfect

### Change Direction
```javascript
direction: 'left', // or 'right'
```

### Change Height
```javascript
height: '80px', // Slider container height
```

### Responsive Settings
```javascript
responsive: {
    mobile: {
        sliderHeight: '60px',
        imageHeight: '40px',
        gap: '20px'
    }
    // ... other breakpoints
}
```

## 🎨 Styling

The sliders use CSS custom properties for easy customization:

```css
.auto-slider-container {
    --slider-gap: 30px; /* Space between images */
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    /* ... other styles */
}
```

You can override these in your page-specific CSS.

## 🎮 JavaScript API

Access the slider manager:

```javascript
// Pause all sliders
window.autoSliderManager.pauseAll();

// Play all sliders
window.autoSliderManager.playAll();

// Destroy all sliders
window.autoSliderManager.destroyAll();
```

## 🔧 Troubleshooting

### Sliders not appearing?
1. Check browser console for errors
2. Ensure all files are loaded correctly
3. Verify container IDs are correct (`auto-slider-1`, `auto-slider-2`)

### Images not loading?
1. Check image paths in the config
2. Ensure images exist in the specified directories
3. Check browser network tab for 404 errors

### Animation not smooth?
1. Reduce `animationSpeed` in config
2. Check if `prefers-reduced-motion` is enabled
3. Ensure hardware acceleration is working

## 📱 Responsive Behavior

The sliders automatically adapt to different screen sizes:
- **Desktop**: Full size with larger images
- **Tablet**: Medium size with adjusted spacing
- **Mobile**: Compact size with smaller images
- **Extra Small**: Ultra-compact for tiny screens

## ♿ Accessibility

The sliders include accessibility features:
- Respects `prefers-reduced-motion` setting
- Keyboard navigation support
- Proper ARIA labels
- Screen reader friendly alt texts

## 🚀 Performance

The sliders are optimized for performance:
- Hardware acceleration enabled
- Efficient CSS animations
- Lazy loading for images
- Minimal DOM manipulation

---

**Ready to test?** Open `auto-slider-test.html` in your browser to see the sliders in action!
