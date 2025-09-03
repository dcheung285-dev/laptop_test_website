# 🎯 Complete Animated Banner Configuration Guide

## Overview
This comprehensive guide covers everything you need to know about customizing the animated horizontal banner ad system. The banner features dynamic word animations, customizable logos, entrance animations, and page-specific configurations - all controlled through the `utils/animated-banner-config.js` file.

## ✨ Key Features
- **🎬 Dynamic Word Animation** - Sequential word typing with configurable timing
- **🖼️ Flexible Logo System** - Text, image, or combined logo options with scaling
- **📱 Responsive Design** - Mobile-friendly with automatic width adjustment
- **🎨 Theme Integration** - Uses your website's color scheme from theme-config
- **📄 Page-Specific Content** - Different banners for different pages
- **🎭 Entrance Animation** - Smooth slide-down from navigation bar
- **❌ Close Button** - Small X button for users to dismiss the banner
- **⚙️ Easy Configuration** - All settings in one config file

## 📁 Files Involved
- **`utils/animated-banner-config.js`** - Main configuration file (edit this)
- **HTML pages** - Banner auto-loads on enabled pages
- **`animated-banner-test.html`** - Test page for debugging
- **`ANIMATED-BANNER-GUIDE.md`** - This guide

---

## 🚀 Quick Setup (Most Common Changes)

### 1. Enable/Disable Banner Per Page
```javascript
// Global control
globalEnabled: true,  // ← Enable/disable entire banner system

// Page-specific settings
pageSettings: {
    'home.html': { enabled: true, useDefault: true },      // ← Show on home page
    'index.html': { enabled: true, useDefault: true },     // ← Show on index page
    'top10.html': { enabled: true, useDefault: true },     // ← Show on top 10 page
    'blog.html': { enabled: true, useDefault: true },      // ← Show on blog page
    'contact.html': { enabled: false, useDefault: true },  // ← Hide on contact page
    // Set enabled: true/false for each page as needed
}
```

### 2. Update Brand Information
```javascript
logo: {
    type: 'image',  // ← 'text', 'image', or 'combined'
    
    // Text logo (emoji + brand name)
    text: {
        content: '🐼',           // ← Your emoji/icon
        brandText: 'YourBrand', // ← Your brand name
        fontSize: '30px',        // ← Logo text size
        textColor: '#FFFFFF',    // ← Text color
        spacing: '8px',          // ← Space between emoji and text
        left: '-10px'            // ← Move logo left/right
    },
    
    // Image logo
    image: {
        src: 'assets/images/your-logo.png',  // ← Your logo image path
        width: '32px',                       // ← Base image size
        height: '32px',
        scale: '6.0',                        // ← Size multiplier (6x larger)
        left: '-30px'                        // ← Move image left/right
    },
    
    // Combined logo (image + text)
    combined: {
        useImage: true,
        imageSrc: 'assets/images/your-icon.png',
        imageWidth: '56px',
        imageHeight: '56px',
        scale: '1.0',                        // ← Image scale
        textContent: 'YourBrand',
        textColor: '#FFFFFF',
        fontSize: '30px',
        spacing: '10px',                     // ← Space between image and text
        left: '0px'                          // ← Move entire combo left/right
    }
}
```

### 3. Customize Animated Words
```javascript
animatedText: {
    wordSets: [
        ['Fast', 'Secure', 'Reliable'],              // ← First word sequence
        ['24/7 Support', 'Easy Setup', 'Professional'], // ← Second sequence
        ['Your Words', 'Go Here', 'Customizable']        // ← Add your own
    ],
    
    // Animation timing
    timing: {
        wordDelay: 500,          // ← Delay between words in same set (ms)
        setDisplayTime: 2000,    // ← How long to show complete set (ms)
        pullBackDuration: 600,   // ← Pull back animation speed (ms)
        pauseBetweenSets: 300    // ← Pause between word sets (ms)
    },
    
    // Text styling
    styling: {
        fontSize: '24px',        // ← Text size
        fontWeight: '600',       // ← Text weight
        color: '#FFFFFF',        // ← Text color
        spacing: '15px'          // ← Space between words
    }
}
```

### 4. Update Call-to-Action Button
```javascript
ctaButton: {
    text: 'GET STARTED',     // ← Button text
    url: 'https://your-link.com', // ← Where button links to
    styling: {
        backgroundColor: '#00c853',      // ← Button background color
        hoverBackgroundColor: '#00a847', // ← Button hover color
        textColor: '#FFFFFF',           // ← Button text color
        fontSize: '18px',               // ← Button text size
        fontWeight: 'bold',             // ← Button text weight
        padding: '12px 24px',           // ← Button size (vertical horizontal)
        borderRadius: '6px'             // ← Button corner roundness
    }
}
```

---

## 🎨 Advanced Styling & Layout

### Banner Positioning & Layout
```javascript
positioning: {
    showOnTop: true,              // ← Show at top of page
    topOffset: '100px',           // ← Distance from nav bar
    zIndex: 15,                   // ← Layer order (nav is usually 20)
    entranceAnimation: true,      // ← Enable slide-down entrance animation
    animationDuration: '0.8s'     // ← Animation speed
},

dimensions: {
    height: '70px',              // ← Banner height
    width: '70%',               // ← Banner width (percentage of screen)
    maxWidth: '1000px',         // ← Maximum banner width
    padding: '15px 25px'        // ← Internal spacing
}
```

### Background Styling
```javascript
background: {
    type: 'gradient',                    // ← 'gradient', 'solid', or 'image'
    gradientStart: 'var(--primary-color)',  // ← Start color (uses theme)
    gradientEnd: 'var(--accent-color)',     // ← End color (uses theme)
    gradientDirection: '90deg',             // ← Direction (0deg=vertical, 90deg=horizontal)
    solidColor: '#1a2a6c',                  // ← Solid color fallback
    opacity: 0.95                           // ← Transparency (0.0-1.0)
}
```

### Responsive Design
```javascript
responsive: {
    mobile: {
        height: '60px',          // ← Mobile banner height
        padding: '10px 15px',    // ← Mobile padding
        logoFontSize: '16px',    // ← Mobile logo size
        textFontSize: '14px',    // ← Mobile text size
        ctaFontSize: '12px',     // ← Mobile button size
        ctaPadding: '8px 16px'   // ← Mobile button padding
    }
}
```

---

## 📝 Logo Configuration Guide

### Text Logo (Emoji + Text)
```javascript
logo: {
    type: 'text',
    text: {
        content: '🚀',          // ← Emoji or icon
        brandText: 'MyBrand',   // ← Brand name
        fontSize: '30px',       // ← Text size
        textColor: '#FFFFFF',   // ← Text color
        spacing: '8px',         // ← Space between emoji and text
        left: '-10px'           // ← Move entire logo left/right
    }
}
```

### Image Logo
```javascript
logo: {
    type: 'image',
    image: {
        src: 'assets/images/logo.png',  // ← Logo image path
        width: '32px',                  // ← Base image width
        height: '32px',                 // ← Base image height
        scale: '6.0',                   // ← Size multiplier (1.0 = normal, 6.0 = 6x larger)
        left: '-30px'                   // ← Move image left/right for positioning
    }
}
```

### Combined Logo (Image + Text)
```javascript
logo: {
    type: 'combined',
    combined: {
        useImage: true,                      // ← Use image + text combination
        imageSrc: 'assets/images/icon.png',  // ← Icon image path
        imageWidth: '56px',                  // ← Icon size
        imageHeight: '56px',
        scale: '1.0',                        // ← Image scale multiplier
        textContent: 'BrandName',            // ← Text next to icon
        textColor: '#FFFFFF',                // ← Text color
        fontSize: '30px',                    // ← Text size
        spacing: '10px',                     // ← Space between icon and text
        left: '0px'                          // ← Move entire combo left/right
    }
}
```

---

## 🎬 Animation Configuration

### Word Animation Behavior
The banner follows this sequence:
1. **Word 1** appears (slide up + fade in)
2. **Word 2** appears next to Word 1 
3. **Word 3** appears next to Word 2
4. All words show together for `setDisplayTime`
5. All words "pull back" (slide left + fade out)
6. Process repeats with next word set

### Animation Timing
```javascript
timing: {
    wordDelay: 500,          // ← Delay between words in same set (ms)
    setDisplayTime: 2000,    // ← How long to show complete set (ms)
    pullBackDuration: 600,   // ← Pull back animation speed (ms)
    pauseBetweenSets: 300    // ← Pause between word sets (ms)
}

// Examples:
// Slower, more dramatic
timing: {
    wordDelay: 800,          // Slower word appearance
    setDisplayTime: 3000,    // Longer display time
    pullBackDuration: 800,   // Slower pull-back
    pauseBetweenSets: 500    // Longer pause
}

// Faster, more energetic
timing: {
    wordDelay: 300,          // Faster word appearance
    setDisplayTime: 1500,    // Shorter display time
    pullBackDuration: 400,   // Faster pull-back
    pauseBetweenSets: 200    // Shorter pause
}
```

### Entrance Animation
```javascript
positioning: {
    entranceAnimation: true,     // ← Enable slide-down from nav bar
    animationDuration: '0.8s'    // ← Duration (0.5s = fast, 1.2s = slow)
}
```

When a page loads, the banner:
1. **Starts hidden** above the viewport
2. **Slides down smoothly** to its final position
3. **Fades in** simultaneously for natural appearance

---

## 👤 User Interaction Features

### Close Button
The banner includes a small X button in the top-right corner that allows users to dismiss the banner:

**🎨 Visual Appearance:**
- Small circular button with semi-transparent white background
- White X icon (Font Awesome `fa-times`)
- Hover effect: becomes more opaque and slightly larger
- Positioned in top-right corner with 10px margin

**⚡ Behavior:**
- **Click Action**: Smoothly slides banner up and fades out (0.6s animation)
- **Persistence**: Banner stays closed until page refresh or navigation
- **Animation**: Banner slides straight up with cubic-bezier easing
- **Cleanup**: Completely removes banner from DOM after animation

**🔧 Technical Implementation:**
```html
<div class="banner-close-button" onclick="animatedBannerManager.closeBanner()" title="Close Banner">
    <i class="fas fa-times"></i>
</div>
```

**🎯 User Experience:**
- Non-intrusive - small and positioned out of main content flow
- Provides user control without being overly prominent
- Smooth animation feels natural and responsive
- No configuration needed - works automatically on all banners

---

## 📄 Page-Specific Configuration

### Basic Page Control
```javascript
pageSettings: {
    'home.html': { enabled: true, useDefault: true },        // ← Use default config
    'blog.html': { enabled: true, useDefault: true },        // ← Use default config
    'contact.html': { enabled: false, useDefault: true },    // ← Hide banner completely
}
```

### Custom Page Configurations

#### Option 1: Minor Customizations (Legacy)
```javascript
pageSettings: {
    'blog.html': { 
        enabled: true, 
        useDefault: false,  // ← Use custom config below
        customConfig: {
            // Only customize specific parts (inherits rest from default)
            animatedText: {
                wordSets: [
                    ['Latest News', 'Expert Tips', 'Industry Insights']
                ]
            },
            ctaButton: {
                text: 'READ BLOG',
                url: '#latest-posts'
            }
        }
    }
}
```

#### Option 2: Completely Different Banner (Recommended)
```javascript
pageSettings: {
    'blog.html': { 
        enabled: true, 
        useDefault: false,  // ← Use completely different banner
        customBanner: {
            logo: {
                type: 'text',
                text: {
                    content: '📰',
                    brandText: 'Blog News',
                    fontSize: '28px',
                    textColor: '#FFFFFF',
                    spacing: '8px',
                    left: '0px'
                }
            },
            animatedText: {
                wordSets: [
                    ['Latest News', 'Expert Tips', 'Industry Insights'],
                    ['How-To Guides', 'Reviews', 'Tutorials'],
                    ['Stay Updated', 'Learn More', 'Read Now']
                ],
                timing: {
                    wordDelay: 500,
                    setDisplayTime: 2000,
                    pullBackDuration: 600,
                    pauseBetweenSets: 300
                },
                styling: {
                    fontSize: '24px',
                    fontWeight: '600',
                    color: '#FFFFFF',
                    spacing: '15px',
                    minWidth: '400px',
                    forceCenterText: true
                }
            },
            ctaButton: {
                text: 'READ BLOG',
                url: './blog.html',
                styling: {
                    backgroundColor: '#2196f3',
                    hoverBackgroundColor: '#1976d2',
                    textColor: '#FFFFFF',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    padding: '12px 24px',
                    borderRadius: '6px',
                    border: 'none'
                }
            },
            background: {
                type: 'gradient',
                gradientStart: '#1976d2',
                gradientEnd: '#42a5f5',
                gradientDirection: '90deg',
                opacity: 0.95
            }
        }
    },
    'contact.html': {
        enabled: true,
        useDefault: false,
        customBanner: {
            logo: {
                type: 'text',
                text: {
                    content: '📞',
                    brandText: 'Contact Us',
                    fontSize: '28px',
                    textColor: '#FFFFFF'
                }
            },
            animatedText: {
                wordSets: [
                    ['24/7 Support', 'Quick Response', 'Expert Help'],
                    ['Live Chat', 'Email Support', 'Phone Support'],
                    ['Get Help Now', 'Contact Us', 'We\'re Here']
                ]
            },
            ctaButton: {
                text: 'CONTACT NOW',
                url: '#contact-form',
                styling: {
                    backgroundColor: '#ff9800',
                    hoverBackgroundColor: '#f57c00'
                }
            },
            background: {
                type: 'gradient',
                gradientStart: '#ff9800',
                gradientEnd: '#ffb74d'
            }
        }
    }
}
```

**Configuration Types:**
- **Default Banner**: `{ enabled: true, useDefault: true }` - Uses the main banner config
- **Custom Banner**: `{ enabled: true, useDefault: false, customBanner: {...} }` - Completely different banner
- **Legacy Custom**: `{ enabled: true, useDefault: false, customConfig: {...} }` - Partial customization
- **No Banner**: `{ enabled: false, useDefault: true }` - Banner hidden on this page

---

## 📐 Layout & Positioning

### Page Layout System
The banner uses built-in hero section spacing for proper positioning:

**How It Works:**
- **10px gap** between navigation bar and banner
- **Hero sections** have adequate built-in padding for proper spacing
- **No automatic adjustments** - pages use their natural CSS spacing

**Page Structure:**
- Home/Index pages: Hero sections with proper padding
- Blog pages: `.blog-hero` with adequate spacing
- Contact pages: `.contact-hero` with sufficient padding
- Legal pages: `.privacy-hero`, `.disclaimer-hero`, `.cookies-hero` with built-in spacing

### Logo & Text Positioning
```javascript
// Fix image whitespace issues
image: { left: '-30px' }  // Move left if image has invisible padding

// Adjust text spacing
text: { spacing: '8px' }   // Tight spacing between emoji and text
text: { spacing: '20px' }  // Loose spacing between emoji and text

// Fine-tune combined logos
combined: { 
    spacing: '10px',   // Space between image and text
    left: '0px'        // Move whole combo for better centering
}
```

---

## 💡 Content Ideas & Examples

### Word Set Examples

**For SaaS/Software:**
```javascript
wordSets: [
    ['Fast Setup', 'Easy Integration', 'Powerful Features'],
    ['24/7 Support', 'Secure Cloud', 'Auto Scaling'],
    ['Free Trial', 'No Contracts', 'Cancel Anytime']
]
```

**For E-commerce:**
```javascript
wordSets: [
    ['Free Shipping', 'Easy Returns', 'Secure Checkout'],
    ['Best Prices', 'Quality Guaranteed', 'Fast Delivery'],
    ['New Arrivals', 'Limited Time', 'Shop Now']
]
```

**For Gaming/Crypto:**
```javascript
wordSets: [
    ['Anonymous', 'No Limits', 'VPN Friendly'],
    ['Provably Fair', 'Instant Play', 'Crypto Only'],
    ['24/7 Support', 'Fast Payouts', 'Mobile Ready']
]
```

### Button Color Examples
```javascript
// Green button (default)
backgroundColor: '#00c853',
hoverBackgroundColor: '#00a847',

// Blue button
backgroundColor: '#2196f3',
hoverBackgroundColor: '#1976d2',

// Orange button
backgroundColor: '#ff9800',
hoverBackgroundColor: '#f57c00',

// Red button
backgroundColor: '#f44336',
hoverBackgroundColor: '#d32f2f',
```

---

## 🧪 Testing & Debugging

### Test Page
Use `animated-banner-test.html` for testing:
- **"Test Image Scale"** - Cycles through scale values
- **"Test Text Color"** - Cycles through text colors
- **"Test Spacing"** - Tests spacing between elements
- **"Test Left Position"** - Tests logo positioning
- **"Test Word Lengths"** - Tests different word combinations
- **"Test Entrance Animation"** - Replays slide-down animation
- **"Test Close Button"** - Tests the X button close functionality and animation

### Browser Console Debugging
Open browser console (F12) to see:
- Banner initialization messages
- Animation status
- Error messages

### Manual Testing
Access the banner manager in browser console:
```javascript
// In browser console
window.animatedBannerManager.restartAnimation()
```

---

## 🔧 Troubleshooting

### Common Issues

**Banner not showing:**
- Check `globalEnabled: true` and page `enabled: true`
- Verify script is loaded in HTML
- Check browser console for errors

**Content overlapping banner:**
- Check that hero sections have proper padding set in their CSS
- Verify `topOffset` accounts for navigation height
- Ensure pages have adequate spacing built-in

**Text not animating:**
- Ensure `wordSets` arrays have content
- Check timing values are reasonable numbers
- Verify no JavaScript errors in console

**Images not showing/scaling:**
- Check image paths are correct
- Verify `scale` property is set
- Ensure images exist in specified folders

**Mobile layout issues:**
- Check responsive settings in config
- Test on actual mobile devices
- Adjust mobile-specific values

**Entrance animation not working:**
- Check `entranceAnimation: true`
- Verify `animationDuration` is set
- Clear browser cache and reload

### Performance Tips
1. **Optimize Images**: Keep logo images small (< 50KB)
2. **Limit Word Sets**: 3-4 sets work best for performance
3. **Reasonable Timing**: Don't make animations too fast/slow
4. **Test Mobile**: Always verify mobile performance

---

## 📋 Quick Checklist

### Before Going Live:
- [ ] Update brand name and logo
- [ ] Customize word sets for your business
- [ ] Set correct CTA button link and text
- [ ] Test on desktop and mobile
- [ ] Verify banner doesn't overlap content
- [ ] Check all animations work smoothly
- [ ] Confirm banner matches your theme colors
- [ ] Test entrance animation on page refresh
- [ ] Test close button functionality

### Content Review:
- [ ] Word sets are relevant to your business
- [ ] CTA button text is action-oriented
- [ ] Logo is high quality and properly sized
- [ ] Colors match your brand guidelines
- [ ] Animation timing feels natural
- [ ] All external links work correctly

---

## ✅ Quick Reference: Page-Specific Banners

### Configuration Types
```javascript
// 1. Default Banner (same on all pages)
'home.html': { enabled: true, useDefault: true }

// 2. Custom Banner (completely different)
'blog.html': { 
    enabled: true, 
    useDefault: false, 
    customBanner: {
        logo: { type: 'text', text: { content: '📰', brandText: 'Blog News' } },
        animatedText: { wordSets: [['Latest News', 'Expert Tips', 'Insights']] },
        ctaButton: { text: 'READ BLOG', styling: { backgroundColor: '#2196f3' } },
        background: { gradientStart: '#1976d2', gradientEnd: '#42a5f5' }
    }
}

// 3. No Banner (hidden)
'contact.html': { enabled: false, useDefault: true }
```

### Quick Setup Checklist
- [ ] **Global Setup**: Set `globalEnabled: true`
- [ ] **Page Control**: Configure each page in `pageSettings`
- [ ] **Custom Content**: Create unique `customBanner` configs
- [ ] **Test Each Page**: Verify banners work per page
- [ ] **Mobile Check**: Test responsive behavior
- [ ] **Layout Test**: Ensure content spacing works

---

## 📞 Need Help?

If you need assistance:
1. Check this guide thoroughly
2. Use the test page for debugging
3. Check browser console for error messages
4. Test changes in a development environment first

---

**Pro Tip**: The banner uses your theme configuration automatically, so changing your theme colors will also update the banner background gradient!

This single guide now covers everything you need to configure and customize your animated banner system! 🎯 