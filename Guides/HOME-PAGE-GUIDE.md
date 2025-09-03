# 🏠 HOME PAGE CONFIGURATION GUIDE

## 📋 Overview

The home page is a fully dynamic, crypto casino-themed landing page with scroll-triggered animations, configurable video/ad sections, and interactive crypto animations. Everything is controlled through `utils/home-config.js`.

## 🎯 Quick Start

1. **Navigate to your home page**: `your-domain.com/home.html`
2. **Edit content**: Modify `utils/home-config.js`
3. **Customize theme**: Use existing theme system (`utils/theme-config.js`)
4. **Add images**: Place in `assets/images/` folder

## 📁 File Structure

```
/
├── home.html                    # Main home page HTML
├── utils/home-config.js         # ✅ MAIN CONFIG FILE
├── scripts/home.js              # Home page functionality
├── styles/home.css              # Home page styles & animations
└── assets/images/               # Images for backgrounds/ads
```

## ⚙️ Configuration Sections

### 1. 🎬 Hero Section

Controls the main landing area with animated background:

```javascript
hero: {
    enabled: true,
    title: "Welcome to Top 10 Crypto Casinos",
    subtitle: "Discover the best cryptocurrency gambling platforms", 
    description: "Your ultimate guide to secure, profitable, and exciting crypto casino experiences",
    ctaButton: {
        text: "View Our Top 10 Crypto Casinos",
        link: "index.html",  // ← Link to your reviews page
        icon: "fas fa-coins"
    },
    backgroundType: "animated", // "static", "video", "animated"
    backgroundConfig: {
        animationType: "crypto-rain", // "crypto-rain", "floating-coins", "matrix", "particles"
        primaryColor: "var(--primary-color)",
        secondaryColor: "var(--secondary-color)",
        intensity: "medium" // "low", "medium", "high"
    }
}
```

**Animation Types:**
- `crypto-rain`: Falling crypto symbols
- `floating-coins`: Floating Bitcoin, Ethereum, etc.
- `matrix`: Matrix-style falling characters
- `particles`: Connected particle network

### 2. 📜 Scroll-Triggered Sections

Sections that animate in as you scroll with changing backgrounds:

```javascript
scrollSections: {
    enabled: true,
    sections: [
        {
            id: "section-1",
            trigger: 200, // ← Scroll position in pixels
            backgroundImage: "assets/images/crypto-bg-1.jpg", // ← Your image
            title: "Secure Crypto Transactions",
            description: "Experience lightning-fast deposits and withdrawals",
            animation: "fade-slide-left", // Animation style
            icon: "fas fa-shield-alt" // FontAwesome icon
        }
        // Add more sections...
    ]
}
```

**Available Animations:**
- `fade-slide-left`
- `fade-slide-right` 
- `fade-slide-up`

### 3. 🎥 Video Sections

Configurable video embeds with descriptions:

```javascript
videoSections: [
    {
        enabled: true,
        title: "How Crypto Casinos Work",
        description: "Learn the basics of cryptocurrency gambling",
        videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID", // ← Your video
        thumbnail: "assets/images/video-thumb-1.jpg",
        autoplay: false,
        position: "left" // "left", "right", "center"
    }
]
```

### 4. 📢 Ad Sections

Dynamic advertising banners and cards:

```javascript
adSections: [
    {
        enabled: true,
        type: "banner", // "banner", "card", "popup", "floating"
        title: "🎰 Exclusive Bonus Alert!",
        subtitle: "Get 500% Match Bonus + 200 Free Spins",
        description: "Limited time offer for new crypto casino players",
        ctaText: "Claim Bonus Now",
        ctaLink: "index.html#product1", // ← Link to specific casino
        animation: "pulse-glow",
        backgroundType: "gradient", // "gradient", "image", "animated"
        backgroundConfig: {
            gradient: "linear-gradient(45deg, var(--primary-color), var(--secondary-color))"
        },
        position: "center", // "left", "right", "center"
        size: "large" // "small", "medium", "large"
    }
]
```

**Ad Types:**
- `banner`: Full-width promotional banner
- `card`: Content card with image/text
- `popup`: Modal-style promotion
- `floating`: Floating overlay ad

### 5. 🪙 Crypto Animations

Background crypto-themed animations:

```javascript
cryptoAnimations: {
    enabled: true,
    animations: [
        {
            name: "floating-coins",
            elements: ["bitcoin", "ethereum", "litecoin", "dogecoin"],
            count: 15, // Number of elements
            speed: "slow", // "slow", "medium", "fast"
            direction: "up"
        },
        {
            name: "matrix-rain",
            characters: ["₿", "Ξ", "Ł", "Ð", "₳", "○"],
            density: "medium", // "low", "medium", "high"
            speed: "medium",
            color: "var(--primary-color)"
        }
    ]
}
```

### 6. 🎯 Interactive Elements

Floating CTAs and scroll progress:

```javascript
interactiveElements: {
    enabled: true,
    elements: [
        {
            type: "floating-cta",
            text: "🎯 Find Your Perfect Casino",
            link: "index.html",
            position: "bottom-right", // "bottom-left", "bottom-right", "top-left", "top-right"
            animation: "bounce-fade",
            showAfterScroll: 300 // Show after 300px scroll
        },
        {
            type: "scroll-progress",
            style: "crypto-themed",
            color: "var(--primary-color)",
            position: "top"
        }
    ]
}
```

### 7. 📧 Newsletter Integration

The home page uses the **same newsletter system** as other pages for consistency:

- **Configuration**: Edit `utils/newsletter-config.js` (same as other pages)
- **Styling**: Automatically matches your site theme
- **Functionality**: Same form handling and success messages
- **Content**: Uses the same niche-specific content templates

**To customize the newsletter:**
1. Edit `NEWSLETTER_TITLE` and `NEWSLETTER_SUBTITLE` in `utils/newsletter-config.js`
2. Set your form action URL in `NEWSLETTER_FORM_ACTION`
3. Customize styling via `NEWSLETTER_BACKGROUND_STYLE`

The newsletter section will automatically appear between the ad sections and footer, maintaining consistency with your other pages.

## 🎨 Customization Examples

### Adding New Scroll Section

```javascript
// Add to scrollSections.sections array:
{
    id: "my-new-section",
    trigger: 800,
    backgroundImage: "assets/images/my-background.jpg",
    title: "My Custom Title",
    description: "My custom description",
    animation: "fade-slide-right",
    icon: "fas fa-star"
}
```

### Creating Custom Ad Banner

```javascript
// Add to adSections array:
{
    enabled: true,
    type: "banner",
    title: "🚀 New Casino Alert!",
    subtitle: "Revolutionary Gaming Experience",
    description: "Join thousands of winners today",
    ctaText: "Play Now",
    ctaLink: "index.html#product5",
    animation: "hover-lift-glow",
    backgroundType: "image",
    backgroundConfig: {
        image: "assets/images/my-ad-bg.jpg",
        overlay: "rgba(0,0,0,0.4)"
    },
    position: "center",
    size: "large"
}
```

### Adding New Video

```javascript
// Add to videoSections array:
{
    enabled: true,
    title: "Advanced Crypto Strategies",
    description: "Learn professional gambling techniques",
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    thumbnail: "assets/images/strategy-thumb.jpg",
    autoplay: false,
    position: "left"
}
```

### Newsletter Customization

The home page newsletter uses the same system as other pages. To customize:

```javascript
// In utils/newsletter-config.js:
const NEWSLETTER_TITLE = "Get Exclusive Crypto Casino Updates";
const NEWSLETTER_SUBTITLE = "Join thousands of players getting insider deals and strategies.";
const NEWSLETTER_BUTTON_TEXT = "Join Now";
```

## 🎯 Animation Control

### Available Animation Classes

- `pulse-glow`: Pulsing glow effect
- `hover-lift-glow`: Lift and glow on hover
- `fade-slide-left/right/up`: Directional slide animations
- `bounce-fade`: Bouncing fade-in
- `slide-up-fade`: Slide up with fade

### Speed Controls

```javascript
pageSettings: {
    animationSpeed: "medium", // "slow", "medium", "fast"
    fadeInOnLoad: true,       // Fade in entire page
    smoothScrolling: true,    // Enable smooth scroll
    parallaxEnabled: true,    // Enable parallax effects
    mobileOptimized: true     // Optimize for mobile
}
```

## 📱 Mobile Optimization

The home page automatically adjusts for mobile:

- Reduces animation intensity
- Stacks video/ad sections vertically
- Simplifies floating elements
- Optimizes touch interactions

## 🎨 Theme Integration

### Automatic Theme Detection

The home page automatically detects and applies your current theme from `utils/theme-config.js`:

- **Waits for theme system to load** before initializing
- **Reads current CSS variables** from the active theme
- **Applies colors dynamically** to animations and elements
- **Updates in real-time** when theme changes

### Current Theme: `green-dark`

Your site is currently using the `green-dark` theme. The home page will automatically use:
- **Primary Color**: Green theme primary color
- **Secondary Color**: Green theme secondary color  
- **Background**: Dark theme backgrounds
- **Text**: Light text for dark backgrounds

### Changing Home Page Theme

To change the home page theme:

1. **Global Theme Change**: Edit `GLOBAL_THEME` in `utils/theme-config.js`
2. **Home Page Only**: Add to `PAGE_THEMES` in `utils/theme-config.js`:
   ```javascript
   const PAGE_THEMES = {
       '/home.html': 'purple-dark', // Your preferred theme
   };
   ```

### Color System Integration

The home page uses these CSS variables from your theme:
- `--primary-color`: Main brand color (animations, buttons)
- `--secondary-color`: Secondary color (gradients)
- `--accent-color`: Accent color (particles, highlights)
- `--text-primary`: Main text color
- `--text-white`: White text for dark backgrounds
- `--bg-primary`: Main background
- `--bg-secondary`: Secondary background
- `--bg-dark`: Dark background

## 🔧 Troubleshooting

### Common Issues

**Colors not updating:**
- Check console for theme loading messages
- Verify `utils/themes.js` is loaded before `scripts/home.js`
- Ensure your browser supports CSS custom properties

**Animations showing wrong colors:**
- Refresh the page to reload theme system
- Check that theme files are properly linked in HTML
- Verify no caching issues with CSS files

**Theme not detected:**
- Confirm `GLOBAL_THEME` is set in `utils/theme-config.js`
- Check browser console for JavaScript errors
- Ensure theme system initializes before home page

## 🎯 Integration with Main Site

### Navigation

The home page is automatically added to your navigation. Users can access it via the "Home" link.

### Theme Consistency

The home page uses your existing theme configuration:
- Colors from `utils/theme-config.js`
- Fonts and spacing from `styles/main.css`
- Brand elements from `utils/brand-config.js`

### Performance

- Images are lazy-loaded
- Animations pause when tab is not visible
- Mobile optimizations reduce resource usage
- Smooth scroll behavior for better UX

## 🔧 Troubleshooting

### Common Issues

**Animations not showing:**
- Check `cryptoAnimations.enabled` is `true`
- Verify script loads: `scripts/home.js`
- Check browser console for errors

**Videos not loading:**
- Ensure YouTube URLs use `/embed/` format
- Check video privacy settings
- Verify HTTPS if site uses SSL

**Scroll sections not triggering:**
- Adjust `trigger` values (scroll positions)
- Check `scrollSections.enabled` is `true`
- Verify background images exist

**Theme not applying:**
- Check `utils/theme-config.js` is loaded
- Verify CSS custom properties are defined
- Ensure proper script load order

## 🚀 Advanced Customization

### Custom Animations

Add your own CSS animations in `styles/home.css`:

```css
@keyframes my-custom-animation {
    0% { opacity: 0; transform: scale(0.5); }
    100% { opacity: 1; transform: scale(1); }
}

.my-custom-class {
    animation: my-custom-animation 1s ease-out;
}
```

### Dynamic Content Loading

Modify content dynamically with JavaScript:

```javascript
// Update hero title
window.homePage.updateConfig({
    hero: {
        title: "New Dynamic Title"
    }
});
```

### External API Integration

Connect newsletter to your email service:

```javascript
// In scripts/home.js, modify handleNewsletterSubmission()
async handleNewsletterSubmission() {
    const email = document.getElementById('newsletter-email').value;
    
    try {
        const response = await fetch('/api/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });
        
        if (response.ok) {
            // Handle success
        }
    } catch (error) {
        // Handle error
    }
}
```

## 📊 Analytics Integration

Track user interactions:

```javascript
// Add to scripts/home.js
trackEvent(category, action, label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label
        });
    }
}

// Track CTA clicks
document.addEventListener('click', (e) => {
    if (e.target.matches('.hero-btn')) {
        this.trackEvent('HomePage', 'HeroCTAClick', 'ViewCasinos');
    }
});
```

## 💡 Best Practices

1. **Image Optimization**: Use WebP format, optimize file sizes
2. **Content Strategy**: Keep hero text concise and compelling
3. **Mobile First**: Test on mobile devices regularly
4. **Performance**: Monitor loading times and animation smoothness
5. **A/B Testing**: Test different CTA text and ad placements
6. **SEO**: Update meta tags and structured data
7. **Accessibility**: Ensure animations can be disabled for users who prefer reduced motion

---

**🎉 Your dynamic crypto casino home page is ready!** 

Visit `home.html` to see your new landing page with crypto animations, scroll effects, and dynamic content sections. 

## Ad Sections Configuration

### Basic Ad Configuration
```javascript
adSections: [
    {
        enabled: true,
        type: "banner", // "banner", "card", "popup", "floating"
        title: "🎰 Exclusive Bonus Alert!",
        subtitle: "Get 500% Match Bonus + 200 Free Spins",
        description: "Limited time offer for new crypto casino players",
        ctaText: "Claim Bonus Now",
        ctaLink: "index.html#product1",
        animation: "pulse-glow-slide", // Animation type
        backgroundType: "animated-gradient", // Background style
        backgroundConfig: {
            gradient: "linear-gradient(45deg, var(--primary-color), var(--secondary-color), var(--accent-color))",
            animationStyle: "moving-gradient", // Moving effect
        },
        position: "center", // "left", "right", "center"
        size: "large", // "small", "medium", "large"
        movingElements: {
            enabled: true,
            coins: true,        // Floating crypto coins
            sparkles: true,     // Sparkling effects
            glow: true         // Glow effects
        }
    }
]
```

### Animation Types
- **`pulse-glow-slide`**: Pulsing glow with subtle slide movement
- **`hover-lift-glow-shake`**: Shake and glow effect on hover
- **`bounce-glow-rotate`**: Bouncing with rotation and glow
- **`custom`**: Define your own CSS animation

### Background Types
- **`animated-gradient`**: Moving gradient backgrounds
  - `moving-gradient`: Gradient slides left to right
  - `rotating-gradient`: Gradient rotates in circular motion
- **`animated-pattern`**: Animated pattern backgrounds
  - `crypto-circuit`: Moving circuit board pattern
  - `particle-field`: Floating particle effects
- **`gradient`**: Static gradient background
- **`image`**: Static image background

### Moving Elements
Configure dynamic moving elements within ads:

```javascript
movingElements: {
    enabled: true,
    coins: true,        // ₿ Ξ Ł ₳ floating around
    sparkles: true,     // ✨ sparkling effects
    diamonds: true,     // 💎 rotating diamonds
    circuit: true,      // Circuit board flowing dots
    particles: true,    // Small floating particles
    border: true,       // Animated border effects
    shine: true,        // Shine/gleam effects
    glow: true         // Pulsing glow effects
}
```

### Advanced Configuration Examples

#### Casino Bonus Banner
```javascript
{
    enabled: true,
    type: "banner",
    title: "🎰 MEGA JACKPOT ALERT!",
    subtitle: "Win Up To $1,000,000",
    description: "Progressive jackpot reaching record highs!",
    ctaText: "Play Now",
    ctaLink: "index.html#top-jackpot",
    animation: "pulse-glow-slide",
    backgroundType: "animated-gradient",
    backgroundConfig: {
        gradient: "linear-gradient(45deg, #ff6b35, #ffd700, #ff6b35)",
        animationStyle: "moving-gradient"
    },
    position: "center",
    size: "large",
    movingElements: {
        enabled: true,
        coins: true,
        sparkles: true,
        glow: true
    }
}
```

#### VIP Membership Card
```javascript
{
    enabled: true,
    type: "card",
    title: "💎 VIP EXCLUSIVE",
    subtitle: "Premium Benefits Await",
    description: "Unlock exclusive bonuses and priority support",
    ctaText: "Join VIP",
    ctaLink: "index.html#vip",
    animation: "bounce-glow-rotate",
    backgroundType: "animated-gradient",
    backgroundConfig: {
        gradient: "linear-gradient(135deg, #ffd700, #ff6b35, #e63946)",
        animationStyle: "rotating-gradient",
        sparkleEffect: true
    },
    position: "right",
    size: "medium",
    movingElements: {
        enabled: true,
        diamonds: true,
        sparkles: true,
        shine: true
    }
}
```

#### Tech/Innovation Showcase
```javascript
{
    enabled: true,
    type: "card",
    title: "🚀 BLOCKCHAIN INNOVATION",
    subtitle: "Next-Gen Gaming Technology",
    description: "Experience the future of cryptocurrency gambling",
    ctaText: "Explore Tech",
    ctaLink: "index.html#technology",
    animation: "hover-lift-glow-shake",
    backgroundType: "animated-pattern",
    backgroundConfig: {
        pattern: "crypto-circuit",
        overlay: "rgba(0,0,0,0.2)",
        animationSpeed: "medium"
    },
    position: "left",
    size: "medium",
    movingElements: {
        enabled: true,
        circuit: true,
        particles: true,
        border: true
    }
}
```

### Performance Considerations

#### Mobile Optimization
- Moving elements automatically hide on mobile devices
- Reduced animation complexity for better performance
- Optimized animation timing for smooth experience

#### Customization Tips
1. **Color Coordination**: Use CSS variables for theme consistency
2. **Animation Timing**: Stagger animations to avoid overwhelming users
3. **Element Count**: Limit moving elements for better performance
4. **Hover Effects**: Ensure hover states are intuitive and responsive

#### Common Issues
- **Animation Conflicts**: Don't use multiple intensive animations simultaneously
- **Performance**: Monitor CPU usage with many moving elements
- **Accessibility**: Provide reduced motion options for users who prefer it 

## Hero Section Configuration

The hero section is the main banner area with dynamic content and optional image box.

### Basic Hero Configuration
```javascript
hero: {
    enabled: true,
    title: "Welcome to Top 10 Crypto Casinos",
    subtitle: "Discover the best cryptocurrency gambling platforms", 
    description: "Your ultimate guide to secure, profitable, and exciting crypto casino experiences",
    ctaButton: {
        text: "View Our Top 10 Crypto Casinos",
        link: "index.html",
        icon: "fas fa-coins"
    },
    backgroundType: "animated",
    backgroundConfig: {
        animationType: "crypto-rain",
        primaryColor: "var(--primary-color)",
        secondaryColor: "var(--secondary-color)",
        intensity: "medium"
    }
}
```

### Hero Image Box Configuration

Add a dynamic image to your hero section with full customization options:

```javascript
hero: {
    // ... other hero config
    imageBox: {
        enabled: true,
        position: "right", // "left", "right", "center", "top", "bottom"
        layout: "side-by-side", // "side-by-side", "stacked", "overlay"
        image: {
            src: "assets/images/Test_website_image1.png",
            alt: "Top Crypto Casino Experience",
            placeholder: "🎰", // Fallback if image fails to load
            aspectRatio: "16:9", // "1:1", "4:3", "16:9", "21:9", "auto"
            objectFit: "cover" // "cover", "contain", "fill", "scale-down"
        },
        styling: {
            borderRadius: "20px",
            shadow: "large", // "none", "small", "medium", "large", "glow"
            border: "none", // "none", "thin", "medium", "thick", "gradient"
            animation: "float", // "none", "float", "pulse", "glow", "zoom"
            overlay: "none" // "none", "dark", "light", "gradient", "color"
        },
        size: {
            width: "400px",
            height: "300px", // or "auto"
            maxWidth: "45%", // Maximum width as percentage
            minWidth: "300px"
        }
    }
}
```

### Image Box Layout Options

#### Side-by-Side Layout
```javascript
layout: "side-by-side",
position: "right" // Image on right, text on left
```

#### Stacked Layout  
```javascript
layout: "stacked",
position: "top" // Image above text
```

#### Overlay Layout
```javascript
layout: "overlay",
position: "right" // Image overlays on top of text area
```

### Image Box Positioning

- **`left`**: Image appears on the left side
- **`right`**: Image appears on the right side  
- **`center`**: Image appears centered (works with stacked layout)
- **`top`**: Image appears above text (stacked layout)
- **`bottom`**: Image appears below text (stacked layout)

### Styling Options

#### Shadows
- **`none`**: No shadow
- **`small`**: Subtle shadow (4px blur)
- **`medium`**: Medium shadow (8px blur)  
- **`large`**: Large shadow (15px blur)
- **`glow`**: Colored glow effect

#### Borders
- **`none`**: No border
- **`thin`**: 1px white border
- **`medium`**: 2px white border
- **`thick`**: 4px white border
- **`gradient`**: Gradient colored border

#### Animations
- **`none`**: No animation
- **`float`**: Gentle floating motion
- **`pulse`**: Scaling pulse effect
- **`glow`**: Pulsing glow effect
- **`zoom`**: Scale on hover

#### Overlays
- **`none`**: No overlay
- **`dark`**: Dark overlay (30% black)
- **`light`**: Light overlay (20% white)
- **`gradient`**: Colored gradient overlay

### Size Configuration

```javascript
size: {
    width: "400px",        // Fixed width
    height: "300px",       // Fixed height or "auto"
    maxWidth: "45%",       // Max width as % of container
    minWidth: "300px"      // Minimum width
}
```

### Responsive Behavior

The image box automatically adapts for mobile:
- **Desktop**: Follows configured layout
- **Mobile**: Always stacked with image above text
- **Image size**: Constrained to 90% width on mobile

### Advanced Examples

#### Gaming Screenshot Showcase
```javascript
imageBox: {
    enabled: true,
    position: "right",
    layout: "side-by-side",
    image: {
        src: "assets/images/casino-gameplay.jpg",
        alt: "Live Casino Gaming Experience",
        aspectRatio: "16:9",
        objectFit: "cover"
    },
    styling: {
        borderRadius: "15px",
        shadow: "glow",
        border: "gradient",
        animation: "float",
        overlay: "dark"
    },
    size: {
        width: "500px",
        height: "300px",
        maxWidth: "50%"
    }
}
```

#### Promotional Banner Style
```javascript
imageBox: {
    enabled: true,
    position: "center",
    layout: "stacked",
    image: {
        src: "assets/images/promo-banner.png",
        alt: "Special Promotion",
        aspectRatio: "21:9",
        objectFit: "contain"
    },
    styling: {
        borderRadius: "25px",
        shadow: "large",
        animation: "pulse",
        overlay: "gradient"
    },
    size: {
        width: "600px",
        height: "auto",
        maxWidth: "80%"
    }
}
```

### Troubleshooting

#### Image Not Loading
- Check file path in `src` property
- Ensure image exists in specified location
- Verify image format (jpg, png, webp supported)
- Placeholder will show if image fails

#### Layout Issues
- Use `side-by-side` for desktop layouts
- Use `stacked` for mobile-first designs
- Use `overlay` for space-efficient designs

#### Performance Tips
- Optimize image sizes (recommend < 500KB)
- Use WebP format for better compression
- Set appropriate `maxWidth` to prevent oversized images 