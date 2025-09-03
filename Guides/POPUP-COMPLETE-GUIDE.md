# 🚀 Complete Popup System Guide

## 📋 Table of Contents
1. [Overview & Quick Setup](#overview--quick-setup)
2. [Configuration Sections](#configuration-sections)
3. [Logo Types & Examples](#logo-types--examples)
4. [Animation System](#animation-system)
5. [Advanced Features](#advanced-features)
6. [Customization Examples](#customization-examples)
7. [Troubleshooting](#troubleshooting)
8. [Best Practices](#best-practices)

---

## Overview & Quick Setup

The popup overlay system creates engaging full-screen promotional popups that appear after specified conditions are met. These popups are fully customizable and work across all pages of your website.

### Files Needed
```html
<!-- Include in your HTML -->
<link rel="stylesheet" href="styles/popup.css">
<script src="Configurations/popup-config.js"></script>
<script src="scripts/popup.js"></script>
```

### Quick Test
```javascript
// In browser console - show popup immediately for testing
window.popupManager.forceShow();

// Reset session tracking (for testing)
window.popupManager.reset();
```

---

## Configuration Sections

### 1. Basic Settings
```javascript
window.POPUP_CONFIG = {
    enabled: true,                    // Enable/disable the popup system
    showDelay: 180000,               // Show after 3 minutes (in milliseconds)
    showOnAllPages: true,            // Show on all pages or specific pages only
    maxShowsPerSession: 1,           // Maximum times to show per browser session
    cookieExpiry: 24,                // Hours before popup can show again
    // ... rest of configuration
};
```

**Common Timing Options:**
- `30000` = 30 seconds
- `60000` = 1 minute
- `120000` = 2 minutes
- `180000` = 3 minutes
- `300000` = 5 minutes

### 2. Overlay Styling
Controls the dark background overlay:
```javascript
overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.85)',  // Dark transparent background
    backdropFilter: 'blur(5px)',              // Blur effect behind popup
    zIndex: 10000,                            // Layer priority
    animation: 'fadeIn 0.5s ease-out'        // Entrance animation
}
```

### 3. Container Styling
Controls the popup card appearance:
```javascript
container: {
    maxWidth: '500px',                                        // Maximum width
    borderRadius: '20px',                                     // Rounded corners
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',            // Drop shadow
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // Background gradient
    padding: '0',                                             // Internal padding
    overflow: 'hidden'                                        // Hide overflow
}
```

### 4. Main Content
Configure the popup's main text and highlights:
```javascript
content: {
    title: 'CLAIM YOUR BONUS!',                    // Main title
    titleColor: '#FFFFFF',                         // Title color
    titleSize: '32px',                             // Title font size
    titleWeight: '800',                            // Title font weight
    titleShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Title shadow
    
    // Highlight badges (promotional offers)
    highlights: [
        {
            text: '25% Bonus',                              // Badge text
            color: '#FFD700',                               // Text color
            background: 'rgba(255, 215, 0, 0.2)',         // Background color
            border: '2px solid #FFD700',                   // Border styling
            fontSize: '18px',                              // Font size
            padding: '8px 16px',                           // Internal padding
            borderRadius: '25px'                           // Rounded corners
        },
        {
            text: '10% Weekly Cashback',
            color: '#00FF88',
            background: 'rgba(0, 255, 136, 0.2)',
            border: '2px solid #00FF88',
            fontSize: '18px',
            padding: '8px 16px',
            borderRadius: '25px'
        }
    ],
    
    // Additional descriptive text
    description: 'Unlimited withdrawals | NO KYC\nUp to 25% Bonus on the first deposit',
    descriptionColor: 'rgba(255, 255, 255, 0.9)',  // Description color
    descriptionSize: '14px',                         // Description font size
    descriptionLineHeight: '1.5'                    // Line height
}
```

### 5. Call-to-Action Button
```javascript
cta: {
    text: 'Get Bonus',                                      // Button text
    link: 'https://example.com/signup',                     // Destination URL
    target: '_blank',                                       // Open in new tab
    
    // Button styling
    background: 'linear-gradient(45deg, #00FF88, #00CC6A)', // Background gradient
    color: '#FFFFFF',                                       // Text color
    fontSize: '18px',                                       // Font size
    fontWeight: '700',                                      // Font weight
    padding: '15px 40px',                                   // Button padding
    borderRadius: '30px',                                   // Rounded corners
    border: 'none',                                         // No border
    boxShadow: '0 8px 20px rgba(0, 255, 136, 0.4)',       // Drop shadow
    
    // Animation effects
    animation: {
        hover: 'pulse 2s infinite',    // Hover animation
        click: 'bounce 0.3s ease'      // Click animation
    }
}
```

### 6. Close Button
```javascript
closeButton: {
    size: '40px',                                  // Button size
    background: 'rgba(255, 255, 255, 0.2)',      // Background color
    color: '#FFFFFF',                             // Icon color
    borderRadius: '50%',                          // Circular shape
    position: 'absolute',                         // Positioning type
    top: '15px',                                  // Top position
    right: '15px',                                // Right position
    fontSize: '20px',                             // Icon size
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',  // Drop shadow
    transition: 'all 0.3s ease'                   // Hover transition
}
```

---

## Logo Types & Examples

### 🎯 Logo Type Overview
- **Text**: Emoji/icon + product name below (shows `product.name`)
- **Image**: Single image file only (no text)
- **Combined**: Image + custom text (uses `textContent`, not `product.name`)

### Type 1: Text Logo (Shows Product Name)
```javascript
product: {
    name: 'Betpanda', // This text will appear below the emoji
    logo: {
        type: 'text',
        text: {
            content: '🐼', // Emoji or FontAwesome icon
            size: '24px', // Size of the emoji
            background: 'rgba(255, 255, 255, 0.2)',
            nameTextSize: '16px', // Size of the "Betpanda" text
            nameTextColor: '#FFFFFF' // Color of the "Betpanda" text
        }
    }
}
```
**Result**: Shows emoji (🐼) with "Betpanda" text below it.

**Alternative Text Logos:**
```javascript
// Casino theme
text: { content: '🎰', size: '28px', background: 'rgba(255, 215, 0, 0.3)' }

// Tech theme
text: { content: '⚡', size: '26px', background: 'rgba(102, 126, 234, 0.3)' }

// Crypto theme
text: { content: '₿', size: '30px', background: 'rgba(255, 165, 0, 0.3)' }

// E-commerce theme
text: { content: '🛒', size: '26px', background: 'rgba(0, 255, 136, 0.3)' }
```

### Type 2: Image Logo (No Text)
```javascript
product: {
    name: 'Betpanda', // This will NOT be displayed with image logo
    logo: {
        type: 'image',
        image: {
            src: 'assets/images/betpanda-logo.png',
            alt: 'Betpanda Logo',
            width: '32px',
            height: '32px',
            objectFit: 'contain' // 'contain', 'cover', 'fill'
        }
    }
}
```
**Result**: Shows only the image logo, no text.

**Image Size Examples:**
```javascript
// Small logo
image: { src: 'assets/images/logo.png', width: '24px', height: '24px' }

// Medium logo
image: { src: 'assets/images/logo.png', width: '48px', height: '48px' }

// Large logo
image: { src: 'assets/images/logo.png', width: '64px', height: '64px' }

// Rectangular logo
image: { src: 'assets/images/logo-wide.png', width: '80px', height: '40px' }
```

### Type 3: Combined Logo (Image + Custom Text)
```javascript
product: {
    name: 'Betpanda', // This will NOT be displayed with combined logo
    logo: {
        type: 'combined',
        combined: {
            imageSrc: 'assets/images/betpanda-icon.png',
            imageAlt: 'Betpanda Icon',
            imageWidth: '24px',
            imageHeight: '24px',
            textContent: 'Custom Brand Text', // This text will be displayed instead
            textSize: '16px',
            textColor: '#FFFFFF',
            spacing: '8px'
        }
    }
}
```
**Result**: Shows image with "Custom Brand Text" next to it (not "Betpanda").

### 📁 File Organization
```
assets/
├── images/
│   ├── logos/
│   │   ├── betpanda-logo.png
│   │   ├── techflow-logo.png
│   │   └── crown-logo.png
│   ├── icons/
│   │   ├── bitcoin-icon.png
│   │   ├── crown-icon.png
│   │   └── tech-icon.png
│   └── popup/
│       ├── popup-logo.png
│       └── popup-icon.png
```

**Image Requirements:**
- **Format**: PNG, SVG, or WebP (recommended)
- **Size**: 64x64px minimum, 128x128px recommended
- **Background**: Transparent or solid color
- **File Size**: Keep under 50KB for logos

---

## Animation System

### 🎬 Built-in Animation Types
1. **giftBox** - Animated gift box with floating and spinning effects
2. **trophy** - Golden trophy with floating and rotation
3. **coins** - Spinning coins with floating motion
4. **custom** - Use your own custom CSS animation

### Top Animation Configuration
```javascript
topAnimation: {
    enabled: true,
    type: 'video',  // Options: 'video', 'animation', 'image'
    
    // Video settings (when type is 'video')
    video: {
        src: 'path/to/your/video.mp4',    // Video file path
        autoplay: true,                    // Auto-play video
        loop: true,                        // Loop video
        muted: true,                       // Mute video (required for autoplay)
        preload: 'auto',                   // Preload setting
        playsinline: true,                 // Play inline on mobile
        disablePictureInPicture: true      // Disable PiP mode
    },
    
    // Built-in CSS animations (when type is 'animation')
    animation: {
        type: 'giftBox',  // Options: 'giftBox', 'coins', 'trophy', 'custom'
        colors: ['#FFD700', '#FFA500', '#FF6B35'],  // Animation colors
        scale: 1.2,                                  // Size scaling
        floatHeight: '30px'                         // Float animation height
    },
    
    // Image fallback (when type is 'image')
    image: {
        src: 'assets/images/popup-animation.webp',
        alt: 'Bonus Animation'
    },
    
    // Positioning (partially outside container)
    position: {
        top: '-40px',                    // Negative value to extend outside
        left: '50%',                     // Center horizontally
        transform: 'translateX(-50%)',   // Center alignment
        width: '120px',                  // Animation width
        height: '120px'                  // Animation height
    }
}
```

### 🎨 Creating Custom Animations

#### Step 1: Add CSS Animation
Add to `styles/popup.css` (around line 100-150):
```css
/* Custom Animation Example */
.popup-animation.custom-example {
    background: linear-gradient(45deg, #FF6B35, #F7931E);
    border-radius: 50%;
    animation: customExampleFloat 3s ease-in-out infinite;
    overflow: visible;
}

.popup-animation.custom-example::before {
    content: '🎯'; /* Your custom emoji or icon */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 60px;
    animation: customExampleSpin 4s linear infinite;
    z-index: 1;
}

/* Define your custom keyframes */
@keyframes customExampleFloat {
    0%, 100% {
        transform: translateX(-50%) translateY(0px) scale(1);
    }
    50% {
        transform: translateX(-50%) translateY(-20px) scale(1.1);
    }
}

@keyframes customExampleSpin {
    0% {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}
```

#### Step 2: Update JavaScript Mapping
In `scripts/popup.js` (around line 200):
```javascript
// In createAnimationHTML() method, find this section:
const animTypeMap = {
    'giftBox': 'gift-box',
    'trophy': 'trophy',
    'coins': 'coins',
    'custom': 'custom',
    'custom-example': 'custom-example' // Add your new animation
};
```

#### Step 3: Configure in popup-config.js
```javascript
topAnimation: {
    enabled: true,
    type: 'animation',
    animation: {
        type: 'custom-example', // Your new animation name
        colors: ['#FF6B35', '#F7931E'],
        scale: 1.2,
        floatHeight: '30px'
    }
}
```

### 🏆 Modifying Existing Animations

#### Gift Box Animation
**Location**: `styles/popup.css` (around line 100)

**Change colors:**
```css
.popup-animation.gift-box {
    background: linear-gradient(45deg, #FF6B35, #F7931E); /* Changed from gold to orange */
    box-shadow: 0 8px 25px rgba(255, 107, 53, 0.4); /* Updated shadow color */
}
```

**Change emoji:**
```css
.popup-animation.gift-box::before {
    content: '🎯'; /* Changed from 🎁 to 🎯 */
}
```

**Change animation speed:**
```css
.popup-animation.gift-box {
    animation: giftBoxFloat 2s ease-in-out infinite; /* Changed from 3s to 2s */
}

.popup-animation.gift-box::before {
    animation: giftBoxSpin 2s linear infinite; /* Changed from 4s to 2s */
}
```

---

## Advanced Features

### 🎯 Trigger Conditions
```javascript
advanced: {
    triggers: {
        timeOnPage: true,        // Use showDelay timer
        scrollPercentage: false, // Trigger on scroll percentage
        scrollValue: 50,         // Percentage of page scrolled
        exitIntent: false,       // Show when user tries to leave page
        pageViews: false,        // Show after X page views in session
        pageViewCount: 3         // Number of page views required
    }
}
```

### 🧪 A/B Testing
```javascript
advanced: {
    variants: [
        {
            name: 'default',
            weight: 50  // 50% chance to show this variant
        },
        {
            name: 'alternative',
            weight: 50  // 50% chance to show alternative
        }
    ]
}
```

### 🕹️ Manual Control
```javascript
// Show popup immediately
window.popupManager.forceShow();

// Close popup
window.popupManager.closePopup();

// Reset session tracking (for testing)
window.popupManager.reset();

// Update configuration dynamically
window.popupManager.updateConfig({
    showDelay: 10000,  // Change to 10 seconds
    content: {
        title: 'New Limited Offer!'
    }
});
```

---

## Customization Examples

### 🎰 Casino/Gaming Theme
```javascript
window.POPUP_CONFIG = {
    enabled: true,
    showDelay: 180000,
    
    product: {
        name: 'Royal Casino',
        logo: {
            type: 'combined',
            combined: {
                imageSrc: 'assets/images/crown-logo.png',
                imageAlt: 'Crown Logo',
                imageWidth: '28px',
                imageHeight: '28px',
                textContent: 'ROYAL CASINO',
                textSize: '18px',
                textColor: '#FFD700',
                spacing: '10px'
            }
        }
    },
    
    container: {
        background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
        maxWidth: '500px',
        borderRadius: '20px'
    },
    
    topAnimation: {
        enabled: true,
        type: 'animation',
        animation: {
            type: 'giftBox',
            colors: ['#FFD700', '#FFA500', '#FF6B35']
        }
    },
    
    content: {
        title: 'ROYAL BONUS AWAITS!',
        titleColor: '#FFFFFF',
        highlights: [
            {
                text: '200% Welcome Bonus',
                color: '#FFD700',
                background: 'rgba(255, 215, 0, 0.2)',
                border: '2px solid #FFD700'
            },
            {
                text: 'Free Spins',
                color: '#FF6B35',
                background: 'rgba(247, 147, 30, 0.2)',
                border: '2px solid #FF6B35'
            }
        ]
    },
    
    cta: {
        text: 'CLAIM BONUS',
        link: 'https://royalcasino.com/signup',
        background: 'linear-gradient(45deg, #FFD700, #FFA500)'
    }
};
```

### 💻 Tech/SaaS Theme
```javascript
window.POPUP_CONFIG = {
    enabled: true,
    showDelay: 120000,
    
    product: {
        name: 'TechFlow',
        logo: {
            type: 'image',
            image: {
                src: 'assets/images/techflow-logo.png',
                alt: 'TechFlow Logo',
                width: '40px',
                height: '32px',
                objectFit: 'contain'
            }
        }
    },
    
    container: {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        maxWidth: '450px',
        borderRadius: '15px'
    },
    
    topAnimation: {
        enabled: true,
        type: 'animation',
        animation: {
            type: 'trophy',
            colors: ['#667eea', '#764ba2']
        }
    },
    
    content: {
        title: 'UPGRADE TODAY!',
        titleColor: '#FFFFFF',
        highlights: [
            {
                text: '50% Off Pro Plan',
                color: '#00FF88',
                background: 'rgba(0, 255, 136, 0.2)',
                border: '2px solid #00FF88'
            }
        ]
    },
    
    cta: {
        text: 'Start Free Trial',
        link: 'https://techflow.com/trial',
        background: 'linear-gradient(45deg, #00FF88, #00CC6A)'
    }
};
```

### ₿ Crypto Theme
```javascript
window.POPUP_CONFIG = {
    enabled: true,
    showDelay: 150000,
    
    product: {
        name: 'CryptoVault',
        logo: {
            type: 'combined',
            combined: {
                imageSrc: 'assets/images/bitcoin-icon.png',
                imageAlt: 'Bitcoin Icon',
                imageWidth: '24px',
                imageHeight: '24px',
                textContent: 'CRYPTOVAULT',
                textSize: '16px',
                textColor: '#FFA500',
                spacing: '8px'
            }
        }
    },
    
    container: {
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        maxWidth: '480px',
        borderRadius: '20px'
    },
    
    topAnimation: {
        enabled: true,
        type: 'animation',
        animation: {
            type: 'coins',
            colors: ['#FFD700', '#FFA500', '#FF6B35']
        }
    },
    
    content: {
        title: 'SECURE YOUR CRYPTO!',
        titleColor: '#FFFFFF',
        highlights: [
            {
                text: 'No KYC Required',
                color: '#00FF88',
                background: 'rgba(0, 255, 136, 0.2)',
                border: '2px solid #00FF88'
            },
            {
                text: '0.1% Trading Fees',
                color: '#FFA500',
                background: 'rgba(255, 165, 0, 0.2)',
                border: '2px solid #FFA500'
            }
        ]
    },
    
    cta: {
        text: 'Start Trading',
        link: 'https://cryptovault.com/register',
        background: 'linear-gradient(45deg, #FFA500, #FFD700)'
    }
};
```

---

## Troubleshooting

### 🚫 Popup Not Showing
1. **Check configuration**: Ensure `enabled: true`
2. **Verify file loading**: Check all CSS/JS files are included
3. **Browser console**: Look for JavaScript errors
4. **Timing conditions**: Verify timing and session limits are met
5. **Test manually**: Use `window.popupManager.forceShow()`

### 🎬 Video Not Playing
1. **File path**: Ensure video file path is correct
2. **Format support**: Use MP4 or WebM format
3. **File size**: Keep reasonable for web (under 10MB)
4. **Autoplay**: Set `muted: true` for autoplay to work
5. **Mobile**: Test on mobile devices (autoplay restrictions)

### 🖼️ Logo Not Showing
1. **File path**: Check image path is correct
2. **File existence**: Verify image file exists in specified location
3. **Format support**: Use PNG, SVG, or WebP
4. **Browser console**: Check for 404 errors
5. **File size**: Ensure images are optimized

### 🎨 Styling Issues
1. **CSS loading**: Check if popup.css is loaded
2. **Syntax errors**: Verify custom styling syntax
3. **Browser tools**: Use dev tools to inspect elements
4. **CSS conflicts**: Check for conflicts with existing styles
5. **Cache**: Clear browser cache and hard refresh

### 📱 Mobile Issues
1. **Responsive**: Test on various screen sizes
2. **Touch events**: Ensure touch interactions work
3. **Viewport**: Check mobile viewport meta tag
4. **Performance**: Test on slower mobile connections

---

## Best Practices

### ⏰ Timing & Frequency
- **Don't show too early**: Recommended 2-3 minutes minimum
- **Limit frequency**: Once per session or day maximum
- **Exit intent**: Consider exit-intent triggers for better UX
- **Page views**: Show after multiple page views for engagement

### 🎯 Content & Design
- **Clear offers**: Make value proposition obvious
- **Compelling CTA**: Use action-oriented button text
- **Brand consistency**: Match your site's design and colors
- **Mobile optimization**: Test thoroughly on mobile devices

### 🚀 Performance
- **Optimize images**: Compress and use appropriate formats
- **Video size**: Keep video files under 10MB
- **Lazy loading**: Consider lazy loading for heavy assets
- **CDN**: Use CDN for faster asset delivery

### 🧪 Testing & Analytics
- **A/B testing**: Test different variants to optimize conversion
- **Analytics tracking**: Monitor popup performance
- **User feedback**: Consider user experience impact
- **Regular updates**: Keep offers and content fresh

### ♿ Accessibility
- **Alt text**: Provide meaningful alt text for images
- **Color contrast**: Ensure sufficient contrast ratios
- **Keyboard navigation**: Test with keyboard-only navigation
- **Screen readers**: Test with assistive technologies
- **Reduced motion**: Respect user motion preferences

### 🔒 Privacy & Compliance
- **Cookie policy**: Consider privacy implications
- **GDPR compliance**: Ensure legal compliance if applicable
- **User consent**: Respect user preferences
- **Data collection**: Be transparent about any tracking

This comprehensive guide covers everything you need to create, customize, and optimize popup overlays for your website. Use the quick reference sections for common tasks, and refer to the detailed examples for specific implementations. 