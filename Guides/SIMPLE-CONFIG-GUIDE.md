# 🎯 Simple Configuration Guide - Quick Setup

This is the simplified guide for quickly configuring your affiliate website template. For detailed configuration, see [CONFIG-GUIDE.md](CONFIG-GUIDE.md).

## 🚀 "ONE LINE" Configuration Approach

Your website template uses **4 simple configuration files**. You only need to edit a few lines in each file to customize your entire website.

## 📁 Configuration Files Overview

| File | What It Controls | Lines to Edit |
|------|------------------|---------------|
| `utils/brand-config.js` | Brand name, logo, colors | 1 line |
| `utils/config.js` | Site content, products, analytics | 7 lines |
| `utils/nav-config.js` | Navigation menu links | 4 links |
| `utils/contact-faq-config.js` | Contact page, FAQ | 4 lines |

**Total customization**: ~16 lines of code for a complete website!

## 1️⃣ Brand Configuration

**File**: `utils/brand-config.js`

```javascript
const BRAND_NAME = "Your Brand Name";  // ← CHANGE THIS LINE ONLY!
```

**Examples**:
- `"Coffee Expert Reviews"`
- `"Gaming Rig Reviews"`
- `"Fitness Gear Pro"`

## 2️⃣ Main Site Configuration

**File**: `utils/config.js`

```javascript
// ========== MAIN SETTINGS - EDIT THESE LINES ONLY ==========
const NICHE = "Your Niche";                    // ← Your niche
const PRODUCT_TYPE = "Your Product Type";      // ← Product type
const AUDIENCE = "Your Target Audience";       // ← Target audience
const CONTACT_EMAIL = "contact@yoursite.com";  // ← Your email
const SITE_URL = "https://yoursite.com";       // ← Your website URL

// ========== TRUST INDICATORS - EDIT THESE ==========
const REVIEW_COUNT = "500";                    // ← Number of reviews
const USER_COUNT = "10,000";                   // ← Users helped
```

**Example Setup**:
```javascript
const NICHE = "Coffee Makers";
const PRODUCT_TYPE = "Coffee Makers";
const AUDIENCE = "Coffee Lovers";
const CONTACT_EMAIL = "hello@coffeeexperts.com";
const SITE_URL = "https://coffeeexperts.com";
const REVIEW_COUNT = "750";
const USER_COUNT = "25,000";
```

## 3️⃣ Navigation Configuration

**File**: `utils/nav-config.js`

```javascript
const NAV_LINKS = [
    { text: 'Reviews', href: './index.html#reviews' },
    { text: 'Compare', href: './index.html#comparison' },
    { text: 'Blog', href: './blog.html' },
    { text: 'Contact', href: './contact.html' }
];  // ← ADD/REMOVE/EDIT YOUR NAVIGATION LINKS HERE!
```

**To add more links**:
```javascript
const NAV_LINKS = [
    { text: 'Reviews', href: './index.html#reviews' },
    { text: 'Compare', href: './index.html#comparison' },
    { text: 'Blog', href: './blog.html' },
    { text: 'About', href: './about.html' },      // ← New link
    { text: 'Contact', href: './contact.html' }
];
```

## 4️⃣ Contact & FAQ Configuration

**File**: `utils/contact-faq-config.js`

```javascript
// ========== CONTACT INFORMATION ==========
const CONTACT_INFO = {
    email: "contact@yoursite.com",              // ← Your email
    phone: "+1 (555) 123-4567",                // ← Your phone
    address: "123 Main St, City, State",       // ← Your address
    responseTime: "24 hours"                    // ← Response time
};
```

**Example Setup**:
```javascript
const CONTACT_INFO = {
    email: "hello@coffeeexperts.com",
    phone: "+1 (555) COFFEE-1",
    address: "123 Brew Street, Coffee City, CA",
    responseTime: "12 hours"
};
```

## 🎯 Quick Setup Examples

### Coffee Maker Review Site
```javascript
// brand-config.js
const BRAND_NAME = "Coffee Expert Reviews";

// config.js
const NICHE = "Coffee Makers";
const PRODUCT_TYPE = "Coffee Makers";
const AUDIENCE = "Coffee Lovers";
const CONTACT_EMAIL = "hello@coffeeexperts.com";

// contact-faq-config.js
const CONTACT_INFO = {
    email: "hello@coffeeexperts.com",
    phone: "+1 (555) COFFEE-1",
    address: "123 Brew Street, Coffee City, CA",
    responseTime: "12 hours"
};
```

### Gaming Laptop Reviews
```javascript
// brand-config.js
const BRAND_NAME = "Gaming Rig Reviews";

// config.js
const NICHE = "Gaming Laptops";
const PRODUCT_TYPE = "Gaming Laptops";
const AUDIENCE = "Gamers";
const CONTACT_EMAIL = "contact@gamingrig.com";

// contact-faq-config.js
const CONTACT_INFO = {
    email: "contact@gamingrig.com",
    phone: "+1 (555) GAME-PRO",
    address = "456 Gaming Blvd, Tech Valley, TX",
    responseTime: "6 hours"
};
```

### Fitness Equipment Reviews
```javascript
// brand-config.js
const BRAND_NAME = "Fitness Gear Pro";

// config.js
const NICHE = "Home Gym Equipment";
const PRODUCT_TYPE = "Fitness Equipment";
const AUDIENCE = "Fitness Enthusiasts";
const CONTACT_EMAIL = "info@fitgearpro.com";

// contact-faq-config.js
const CONTACT_INFO = {
    email: "info@fitgearpro.com",
    phone: "+1 (555) FIT-GEAR",
    address: "789 Fitness Ave, Muscle City, FL",
    responseTime: "24 hours"
};
```

## 📊 Optional: Analytics Setup

If you want to track visitors, add these to `utils/config.js`:

```javascript
const TRACKING_CONFIG = {
    analytics: {
        googleAnalytics: {
            enabled: true,
            trackingId: "G-XXXXXXXXXX"  // ← Your Google Analytics ID
        },
        metaPixel: {
            enabled: true,
            pixelId: "YOUR_PIXEL_ID"    // ← Your Meta Pixel ID
        }
    }
};
```

## 🔗 Optional: Affiliate Links Setup

To add your affiliate links, edit `utils/config.js`:

```javascript
const PRODUCTS_CONFIG = {
    product1: {
        affiliateLink: "https://amazon.com/dp/PRODUCT_ID/?tag=YOUR_AFFILIATE_TAG"
    }
};
```

## ✅ Quick Setup Checklist

### Step 1: Brand Setup
- [ ] Edit `utils/brand-config.js` - change brand name

### Step 2: Site Content
- [ ] Edit `utils/config.js` - change niche, product type, audience
- [ ] Update contact email and site URL
- [ ] Update trust indicators (review count, user count)

### Step 3: Navigation
- [ ] Edit `utils/nav-config.js` - customize navigation links
- [ ] Add/remove links as needed

### Step 4: Contact Page
- [ ] Edit `utils/contact-faq-config.js` - add contact information
- [ ] Update phone, address, response time

### Step 5: Optional Enhancements
- [ ] Add Google Analytics tracking ID
- [ ] Add Meta Pixel ID
- [ ] Update affiliate links

### Step 6: Test Everything
- [ ] Open `index.html` in browser
- [ ] Check brand name appears correctly
- [ ] Test navigation links work
- [ ] Visit contact page and verify information
- [ ] Test contact form (if configured)

## 🚨 Common Mistakes to Avoid

### ❌ Don't Do This
```javascript
// Leaving placeholder values
const NICHE = "{{Niche}}";
const CONTACT_EMAIL = "{{Contact Email}}";

// Using wrong link format
{ text: 'Reviews', href: '#reviews' }  // Won't work from other pages
```

### ✅ Do This Instead
```javascript
// Use real values
const NICHE = "Coffee Makers";
const CONTACT_EMAIL = "hello@coffeeexperts.com";

// Use proper link format
{ text: 'Reviews', href: './index.html#reviews' }  // Works from all pages
```

## 🎯 What Happens Automatically

When you edit these configuration files, the template automatically updates:

- **Site title and descriptions** throughout the website
- **Navigation menu** on all pages
- **Footer information** on all pages
- **Contact page content** and form
- **SEO meta tags** for search engines
- **Social media sharing** information

## 💡 Pro Tips

1. **Start with brand name**: Set this first, everything else builds on it
2. **Use consistent naming**: Keep your niche and product type consistent
3. **Test as you go**: Check changes in browser after each file edit
4. **Replace all placeholders**: Don't leave any `{{placeholder}}` values
5. **Keep it simple**: You can always add more complexity later

## 🚀 Ready to Launch?

Once you've edited these configuration files:

1. **Test locally**: Open `index.html` in your browser
2. **Check all pages**: Visit blog, contact, privacy, disclaimer pages
3. **Verify links**: Make sure all navigation and footer links work
4. **Test contact form**: Submit a test message (if configured)
5. **Deploy**: Upload to your web hosting service

## 📚 Need More Help?

- **[CONFIG-GUIDE.md](CONFIG-GUIDE.md)** - Complete configuration guide
- **[CONTACT-FAQ-GUIDE.md](CONTACT-FAQ-GUIDE.md)** - Contact page setup
- **[MENU-GUIDE.md](MENU-GUIDE.md)** - Navigation customization

---

**That's it!** With just a few line edits across 4 files, you have a completely customized affiliate website ready to go! 