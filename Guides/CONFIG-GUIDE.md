# 🔧 Configuration Guide - Complete Setup Tutorial

This guide covers everything you need to know about configuring your affiliate website template using the configuration system.

## 🎯 Quick Start - The "ONE LINE" Approach

The template now uses **6 separate configuration files** for maximum organization:

## 🆕 NEW: Hero Video System

The template now supports videos in the hero section! Configure in `utils/config.js`:

```javascript
// Hero Video Configuration
HERO_CONFIG: {
    video: {
        enabled: true,                                    // ← Enable/disable video
        src: "./assets/videos/your-video.mp4",          // ← Video file path
        type: "video/mp4",                               // ← Video type
        autoplay: false,                                 // ← Auto-play (not recommended)
        muted: true,                                     // ← Start muted (recommended)
        loop: true,                                      // ← Loop video
        poster: "./assets/images/video-poster.jpg",     // ← Video thumbnail
        text: "Watch Our Review Video"                   // ← Placeholder text
    }
}
```

**Supported Formats:** MP4 (recommended), WebM, OGV
**Video Guidelines:** 1920x1080 resolution, under 10MB, 30-60 seconds duration

### 1. **Brand Configuration** (`utils/brand-config.js`)
```javascript
const BRAND_NAME = "Your Brand Name";  // ← CHANGE THIS LINE ONLY!
```

### 2. **Main Configuration** (`utils/config.js`)
```javascript
const NICHE = "Your Niche";                    // ← Your niche (e.g., "Gaming Laptops")
const PRODUCT_TYPE = "Your Product Type";      // ← Product type (e.g., "Gaming Laptops")
const AUDIENCE = "Your Target Audience";       // ← Target audience (e.g., "Gamers")
const CONTACT_EMAIL = "contact@yoursite.com";  // ← Your contact email
const SITE_URL = "https://yoursite.com";       // ← Your website URL
const FAVICON = "./assets/images/favicon.ico"; // ← Your favicon path (browser tab icon)

// 🎥 NEW: Hero Video Configuration
const HERO_CONFIG = {
    video: {
        enabled: true,                          // ← Enable video in hero section
        src: "./assets/videos/your-video.mp4", // ← Your video file path
        type: "video/mp4",                      // ← Video format (mp4/webm/ogg)
        autoplay: false,                        // ← Auto-play video
        muted: false,                           // ← Start muted
        loop: false                             // ← Loop video
    }
};
```

### 3. **Navigation Configuration** (`utils/nav-config.js`)
```javascript
const NAV_LINKS = [
    { text: 'Reviews', href: './index.html#reviews' },
    { text: 'Compare', href: './index.html#comparison' },
    { text: 'Blog', href: './blog.html' },
    { text: 'Contact', href: './contact.html' }
];  // ← ADD/REMOVE/EDIT YOUR NAVIGATION LINKS HERE!
```

### 4. **Contact & FAQ Configuration** (`utils/contact-faq-config.js`)
```javascript
const CONTACT_INFO = {
    email: "{{Contact Email}}",        // ← Your contact email
    phone: "{{Phone Number}}",         // ← Your phone number
    address: "{{Address}}",            // ← Your address
    responseTime: "{{Response Time}}"  // ← Response time
};
```

### 5. **Newsletter Configuration** (`utils/newsletter-config.js`)
```javascript
const NEWSLETTER_CONFIG = {
    content: {
        title: "Stay Updated!",                    // ← Newsletter title
        subtitle: "Get the latest reviews...",     // ← Newsletter subtitle
        buttonText: "Subscribe Now",               // ← Button text
        placeholder: "Enter your email..."         // ← Input placeholder
    }
};
```

### 6. **🆕 Product Card Display Configuration** (`utils/config.js`)
```javascript
// Product card display options - SIMPLIFIED!
productCards: {
    displaySection: 'perks'  // ← 'perks', 'specs', or 'features'
},

// Section titles and icons (automatically configured)
SECTION_TITLES: {
    perks: {
        title: 'Key Perks & Benefits',
        icon: 'fas fa-star'
    },
    specs: {
        title: 'Technical Specifications', 
        icon: 'fas fa-cogs'
    },
    features: {
        title: 'Key Features',
        icon: 'fas fa-list'
    }
}
```

### 7. **🔄 Sort System Configuration** (`utils/config.js`)
```javascript
// Template-aware sort options (automatically adapts to your niche)
sortOptions: {
    enabled: [
        { value: 'rank', label: 'Sort by Rank' },
        { value: 'rating', label: 'Sort by Rating' },
        { value: 'primary', label: 'Sort by {{PRIMARY_FIELD}}' },    // ← Becomes "Sort by Welcome Bonus" for casino sites
        { value: 'secondary', label: 'Sort by {{SECONDARY_FIELD}}' } // ← Becomes "Sort by Welcome Package" for casino sites
    ],
    fieldLabels: {
        casino_websites: {
            primary: 'Welcome Bonus',    // ← Your custom labels
            secondary: 'Welcome Package'
        }
        // Automatically adapts based on TEMPLATE_TYPE
    }
}
```

**That's it!** Everything else automatically updates based on these settings.

## 🎨 Icon System - Manual Assignment

The template uses **manual icon assignment** where you specify each icon directly in the configuration:

### **🆕 How It Works**
Icons are manually assigned to:
- **Product features** (🆕 NOW: object with text + icon)
- **Perks** (object with text + icon)
- **Specifications** (object with name + value + icon)

### **🆕 UPDATED Configuration Format**
```javascript
// Features (NEW: now uses objects with icons)
features: [
    { text: "Built-in conical burr grinder", icon: "fas fa-cogs" },
    { text: "15-bar pressure pump system", icon: "fas fa-tachometer-alt" },
    { text: "Milk frother for lattes", icon: "fas fa-coffee" }
],

// Perks (with manual icons)
perks: [
    { text: "Excellent build quality and design", icon: "fas fa-gem" },
    { text: "Professional-quality results at home", icon: "fas fa-home" },
    { text: "Industry Leading Warranty", icon: "fas fa-shield-alt" }
],

// Specifications (with manual icons)
specifications: [
    { name: "grinder", value: "Built-in conical burr grinder", icon: "fas fa-cog" },
    { name: "pressure", value: "15-bar pressure pump", icon: "fas fa-gauge-high" },
    { name: "temperature", value: "Digital temperature control", icon: "fas fa-thermometer-half" }
]
```

### **Available FontAwesome Icons**
Use any FontAwesome 5 icon class:
- **General**: `fas fa-star`, `fas fa-check`, `fas fa-heart`
- **Tech**: `fas fa-cog`, `fas fa-microchip`, `fas fa-plug`
- **Quality**: `fas fa-gem`, `fas fa-crown`, `fas fa-award`
- **Performance**: `fas fa-tachometer-alt`, `fas fa-bolt`, `fas fa-rocket`
- **Safety**: `fas fa-shield-alt`, `fas fa-lock`, `fas fa-certificate`
- **Time**: `fas fa-clock`, `fas fa-calendar`, `fas fa-stopwatch`
- **Money**: `fas fa-dollar-sign`, `fas fa-tags`, `fas fa-percentage`
- **Tools**: `fas fa-wrench`, `fas fa-hammer`, `fas fa-screwdriver`
- **Home**: `fas fa-home`, `fas fa-couch`, `fas fa-kitchen-set`
- **Drinks**: `fas fa-coffee`, `fas fa-glass-whiskey`, `fas fa-mug-hot`

### **Adding Icons to Your Products**
Simply add the `icon` property to each feature, perk, and specification:

```javascript
features: [
    { text: "Your feature text here", icon: "fas fa-list" },
    { text: "Another great feature", icon: "fas fa-check" }
],

perks: [
    { text: "Your perk text here", icon: "fas fa-star" },
    { text: "Another great feature", icon: "fas fa-gem" }
],

specifications: [
    { name: "capacity", value: "12-cup brewing", icon: "fas fa-database" },
    { name: "power", value: "1400W heating", icon: "fas fa-plug" }
]
```

## 🆕 **SIMPLIFIED PRODUCT CARD DISPLAY SYSTEM**

### **One Setting Controls Everything**
The new system uses a **single setting** to control what section appears on product cards:

```javascript
// In utils/config.js
productCards: {
    displaySection: 'perks'  // ← 'perks', 'specs', or 'features'
}
```

### **Display Options**
- **`'perks'`** - Shows Key Perks & Benefits section
- **`'specs'`** - Shows Technical Specifications section  
- **`'features'`** - Shows Key Features section

### **What This Controls**
- ✅ **Grid view product cards** - Shows selected section
- ✅ **List view product cards** - Shows selected section
- ✅ **View consistency** - Same section shown across all views
- ❌ **Detailed review cards** - NOT affected (always shows all sections)

### **Section Titles & Icons**
Section titles and icons are automatically configured but customizable:

```javascript
SECTION_TITLES: {
    perks: {
        title: 'Key Perks & Benefits',    // ← Customizable title
        icon: 'fas fa-star'               // ← Customizable icon
    },
    specs: {
        title: 'Technical Specifications',
        icon: 'fas fa-cogs'
    },
    features: {
        title: 'Key Features',
        icon: 'fas fa-list'
    }
}
```

### **Example Configurations**

**Show Perks on Product Cards:**
```javascript
productCards: { displaySection: 'perks' }
```
Result: Product cards show "Key Perks & Benefits" with star icon

**Show Specifications on Product Cards:**
```javascript
productCards: { displaySection: 'specs' }
```
Result: Product cards show "Technical Specifications" with cogs icon

**Show Features on Product Cards:**
```javascript
productCards: { displaySection: 'features' }
```
Result: Product cards show "Key Features" with list icon

### **Detailed Review Cards**
Detailed review cards are **unaffected** by the `displaySection` setting and **always show all three sections**:
1. **Key Features** (top section)
2. **Key Perks & Benefits** (middle section)  
3. **Technical Specifications** (bottom section)

### **🗑️ Legacy Features Removed**
The following legacy settings have been **removed** and are **no longer supported**:

**❌ REMOVED:**
```javascript
// These settings no longer exist!
productCards: {
    showPerks: true/false,        // ← REMOVED
    defaultSection: 'specs'       // ← REMOVED
}
```

**✅ REPLACED WITH:**
```javascript
// New simplified system
productCards: {
    displaySection: 'perks'       // ← ONE SETTING FOR EVERYTHING
}
```

**Migration Guide:**
- **Old:** `showPerks: true` → **New:** `displaySection: 'perks'`
- **Old:** `showPerks: false, defaultSection: 'specs'` → **New:** `displaySection: 'specs'`
- **Old:** `defaultSection: 'features'` → **New:** `displaySection: 'features'`

## 🔄 **TEMPLATE-AWARE SORT SYSTEM**

### **🆕 Dynamic Sort Configuration**
The sort dropdown now automatically adapts to your template type and shows relevant sorting options:

```javascript
// Sort options configuration in utils/config.js
sortOptions: {
    // Configure which sort options to show (reorder or remove as needed)
    enabled: [
        { value: 'rank', label: 'Sort by Rank', field: 'rank' },
        { value: 'rating', label: 'Sort by Rating', field: 'rating' },
        { value: 'primary', label: 'Sort by {{PRIMARY_FIELD}}', field: 'primary' },
        { value: 'secondary', label: 'Sort by {{SECONDARY_FIELD}}', field: 'secondary' }
    ],
    // Field mappings based on template type - customize labels for your niche
    fieldLabels: {
        physical_products: {
            primary: 'Price',
            secondary: 'Original Price'
        },
        casino_websites: {
            primary: 'Welcome Bonus',
            secondary: 'Welcome Package'
        },
        sports_betting: {
            primary: 'Sign Up Bonus',
            secondary: 'Deposit Match'
        },
        software_saas: {
            primary: 'Monthly Price',
            secondary: 'Yearly Price'
        },
        vpn_services: {
            primary: 'Monthly Price',
            secondary: 'Server Count'
        }
        // Add more template types here as needed
    }
}
```

### **🎯 Template-Specific Sort Options**

#### **Physical Products:**
- **Sort by Rank** (1st, 2nd, 3rd...)
- **Sort by Rating** (4.8, 4.5, 4.2...)
- **Sort by Price** (lowest to highest)
- **Sort by Original Price** (highest to lowest)

#### **🎰 Casino Websites:**
- **Sort by Rank** 
- **Sort by Rating**
- **Sort by Welcome Bonus** ($1000, $500, $200...)
- **Sort by Welcome Package** (200% Match, 100% Match...)

#### **⚽ Sports Betting:**
- **Sort by Rank**
- **Sort by Rating** 
- **Sort by Sign Up Bonus** ($150, $100, $50...)
- **Sort by Deposit Match** (100%, 50%, 25%...)

#### **💻 Software/SaaS:**
- **Sort by Rank**
- **Sort by Rating**
- **Sort by Monthly Price** ($99, $49, $29...)
- **Sort by Yearly Price** ($990, $490, $290...)

### **🧠 Intelligent Value Extraction**
The system intelligently extracts sortable values from complex text:

**Casino Bonus Examples:**
- `"$1000 Welcome Bonus"` → **1000**
- `"100% Match + 200 Free Spins"` → **100 × 1.1 = 110** (percentage bonus boost)
- `"$500 Deposit Bonus"` → **500 × 1.05 = 525** (keyword bonus)

**Value Extraction Logic:**
1. **Extract all numbers** from the text
2. **Use largest number** as primary sort value
3. **Apply multipliers** for special cases:
   - **Percentage bonuses:** +10% boost
   - **High-value keywords:** +5% boost ("welcome", "bonus", "match", "deposit")

### **⚙️ Customizing Sort Options**

#### **Add/Remove Sort Options:**
```javascript
enabled: [
    { value: 'rank', label: 'Sort by Rank', field: 'rank' },
    { value: 'rating', label: 'Sort by Rating', field: 'rating' },
    // Remove secondary sorting for simpler interface:
    { value: 'primary', label: 'Sort by {{PRIMARY_FIELD}}', field: 'primary' }
    // Removed secondary option
]
```

#### **Add New Template Types:**
```javascript
fieldLabels: {
    // Add your custom template type
    restaurant_reviews: {
        primary: 'Price Range',
        secondary: 'Cuisine Type'
    },
    hotel_reviews: {
        primary: 'Room Rate',
        secondary: 'Location Score'
    }
}
```

#### **Custom Field Labels:**
```javascript
casino_websites: {
    primary: 'Bonus Amount',      // ← Custom label for primary field
    secondary: 'Package Value'    // ← Custom label for secondary field
}
```

### **🔧 Sort System Features**

#### **✅ Automatic Template Detection:**
- Uses `TEMPLATE_TYPE` constant to detect current template
- Automatically shows correct field labels
- No manual configuration needed

#### **✅ Robust Value Extraction:**
- Handles monetary values: `$1000`, `€500`, `£200`
- Handles percentages: `100%`, `50%`, `25%`
- Handles complex text: `"100% Match + 200 Free Spins"`
- Graceful fallback for missing values

#### **✅ Smart Sorting Logic:**
- **Higher values first** for bonuses and benefits
- **Lower values first** for prices (when applicable)
- **Intelligent comparison** for mixed text/number values

#### **✅ Debug Support:**
- Console logging shows detected values
- Debug output helps troubleshoot sorting issues
- Clear feedback on which selectors work

### **🚨 Removed Features**
**❌ "Sort by Features" option removed** - was counting feature items instead of meaningful comparison
**❌ Hardcoded sort options removed** - now dynamically generated from config

## 📊 Configuration System Overview

### **Configuration Files Structure**
```
utils/
├── brand-config.js           # Brand name, logo, colors
├── config.js                 # Main site settings, products, analytics
├── nav-config.js             # Navigation links and behavior
├── contact-faq-config.js     # Contact info and FAQ items
├── newsletter-config.js      # Newsletter content and settings
├── enhanced-product-config.js # Product card enhancements
├── blog-config.js            # Blog system (see BLOG-GUIDE.md)
└── themes.js                 # Color themes and styling
```

## 🔧 Important Configuration Details

### **Page Title Configuration**
Each page now has its own configurable browser tab title:

**Homepage Title** (`utils/config.js`):
```javascript
const INDEX_PAGE_TITLE = "Top 10 {{NICHE}} - Best {{PRODUCT_TYPE}} Reviews 2025";
```

**Blog Page Title** - See `BLOG-GUIDE.md` for complete blog configuration

**Contact Page Title** (`utils/contact-faq-config.js`):
```javascript
const CONTACT_PAGE_TITLE = "Contact Us | {{BRAND_NAME}}";
```

**Legal Pages Titles** (`utils/legal-pages-config.js`):
```javascript
const PRIVACY_PAGE_TITLE = "Privacy Policy | {{BRAND_NAME}}";
const DISCLAIMER_PAGE_TITLE = "Affiliate Disclosure | {{BRAND_NAME}}";
```

**How It Works:**
- ✅ **Automatic replacement:** {{BRAND_NAME}}, {{NICHE}}, {{PRODUCT_TYPE}} are automatically replaced
- ✅ **Page detection:** Each page automatically detects which title to use
- ✅ **Dynamic updates:** Changes apply immediately when you modify the constants
- ✅ **Brand integration:** Uses BRAND_NAME from brand-config.js automatically

### **Favicon Configuration**
The favicon (browser tab icon) is now a constant at the top of `config.js`:

```javascript
const FAVICON = "./assets/images/favicon.ico"; // ← Your favicon path
```

**Favicon Requirements:**
- **Format:** `.ico` format preferred (also supports `.png`)
- **Size:** 16x16px or 32x32px
- **Location:** Save in `./assets/images/` folder
- **Automatic:** Updates across all pages automatically

### **SEO Settings & ogImage**
The `ogImage` in SEO settings is your **social media preview image**:

```javascript
seo: {
    ogImage: "./assets/images/og-image.jpg", // Social media preview image
    // ... other SEO settings
}
```

**What is ogImage?**
- **Purpose:** Image shown when your site is shared on social media
- **Platforms:** Facebook, Twitter, LinkedIn, WhatsApp, etc.
- **Size:** 1200x630px recommended
- **Format:** JPG or PNG
- **Content:** Should include your brand logo, title, and key message

**ogImage Best Practices:**
- Use high-quality, eye-catching visuals
- Include your brand logo and site name
- Add key text like "Best [Product] Reviews 2025"
- Test on different social platforms
- Keep file size under 1MB

### **Logo Override Behavior**
**Important:** The logo in `config.js` **WILL BE OVERRIDDEN** by `brand-config.js`:

```javascript
// config.js
logo: "./assets/images/logo.png", // Will be overridden by brand-config.js

// brand-config.js (takes priority)
logo: {
    src: "./assets/images/template icon_logo.png", // This is used
    alt: BRAND_NAME + " Logo",
    height: "32px"
}
```

**Which logo is used?**
- ✅ **Navigation & Footer:** Uses `brand-config.js` logo
- ✅ **SEO & Meta tags:** Uses `config.js` logo (for fallback)
- ✅ **Social sharing:** Uses `brand-config.js` logo

### **What Each File Controls**

| File | Controls | Key Settings |
|------|----------|--------------|
| `brand-config.js` | Branding | Site name, logo, colors, tagline |
| `config.js` | Main site | Niche, products, analytics, trust indicators |
| `nav-config.js` | Navigation | Menu links, spacing, responsive behavior |
| `contact-faq-config.js` | Contact page | Contact info, form settings, FAQ items |

## 📋 Detailed Configuration Sections

### 1. **BRAND_CONFIG** - Branding & Visual Identity

**File**: `utils/brand-config.js`

```javascript
const BRAND_NAME = "Your Brand Name";  // ← Main brand name
// Logo, colors, and styling are handled automatically
```

**What it controls:**
- Site name throughout the website
- Navigation brand display
- Footer brand information
- Meta tags and SEO

### 2. **SITE_CONFIG** - Main Site Settings

**File**: `utils/config.js`

```javascript
// ========== MAIN SETTINGS ==========
const NICHE = "Your Niche";                    // ← Your niche
const PRODUCT_TYPE = "Your Product Type";      // ← Product type
const AUDIENCE = "Your Target Audience";       // ← Target audience
const CONTACT_EMAIL = "contact@yoursite.com";  // ← Contact email
const SITE_URL = "https://yoursite.com";       // ← Website URL

// ========== TRUST INDICATORS ==========
const REVIEW_COUNT = "500";                    // ← Number of reviews
const USER_COUNT = "10,000";                   // ← Users helped
const LAST_UPDATE = "December 2025";           // ← Last updated
const NUMBER_TESTED = "50";                    // ← Products tested
```

**What it controls:**
- SEO settings (title, description, keywords)
- Hero section content
- Trust indicators
- Product configurations
- Analytics settings

### 3. **NAV_CONFIG** - Navigation System

**File**: `utils/nav-config.js`

```javascript
const NAV_LINKS = [
    { text: 'Reviews', href: './index.html#reviews' },
    { text: 'Compare', href: './index.html#comparison' },
    { text: 'Blog', href: './blog.html' },
    { text: 'Contact', href: './contact.html' }
];
```

**What it controls:**
- Navigation menu links
- Responsive spacing
- Mobile menu behavior
- Active link states

### 4. **NEWSLETTER_CONFIG** - Newsletter System

**File**: `utils/newsletter-config.js`

```javascript
const NEWSLETTER_CONFIG = {
    content: {
        title: "Stay Updated!",
        subtitle: "Get the latest reviews and recommendations delivered to your inbox.",
        buttonText: "Subscribe Now",
        placeholder: "Enter your email address"
    },
    form: {
        action: "https://your-newsletter-service.com/subscribe",
        method: "POST",
        successMessage: "Thanks for subscribing!",
        errorMessage: "Something went wrong. Please try again."
    },
    visual: {
        backgroundColor: "var(--bg-secondary)",
        showIcon: true,
        icon: "fas fa-envelope",
        enableAnimations: true
    }
};
```

**What it controls:**
- Newsletter content and messaging
- Form submission handling
- Visual styling and animations
- Success/error message display

### 5. **ENHANCED_PRODUCT_CONFIG** - List View Settings

**File**: `utils/enhanced-product-config.js`

```javascript
const ENHANCED_PRODUCT_CONFIG = {
    // List view layout settings
    LIST_VIEW_LAYOUT: {
        showProductImage: false,      // Hide product images in list view
        expandedByDefault: false      // Cards start collapsed
    },
    
    // Button and UI icons
    BUTTON_ICONS: {
        primaryIcon: 'fas fa-external-link-alt',
        secondaryIcon: 'fas fa-search',
        expandIcon: 'fas fa-chevron-down',
        minimizeIcon: 'fas fa-chevron-up'
    }
};
```

**What it controls:**
- List view specific settings
- Product image display in list view
- Expansion/collapse functionality
- Button icons and UI elements

**Note:** Product card content display (perks/specs/features) is now configured in `utils/config.js` under `productCards.displaySection`.

### 8. **Blog Configuration** - See `BLOG-GUIDE.md` for complete blog configuration

### 9. **CONTACT_CONFIG** - Contact Page & FAQ

**File**: `utils/contact-faq-config.js`

```javascript
// Contact page hero
const CONTACT_HERO = {
    title: "Get in Touch",
    subtitle: "Have questions about our reviews?..."
};

// Contact information
const CONTACT_INFO = {
    email: "{{Contact Email}}",
    phone: "{{Phone Number}}",
    address: "{{Address}}",
    responseTime: "{{Response Time}}"
};

// FAQ items
const FAQ_CONFIG = {
    items: [
        {
            question: "How do you test products?",
            answer: "We thoroughly test each product..."
        }
    ]
};
```

**What it controls:**
- Contact page content
- Contact form settings
- Contact information display
- FAQ questions and answers

## 🚀 Quick Setup Examples

### Example 1: Coffee Maker Review Site
```javascript
// brand-config.js
const BRAND_NAME = "Coffee Expert Reviews";

// config.js
const TEMPLATE_TYPE = "physical_products";  // ← Uses price-based sorting
const NICHE = "Coffee Makers";
const PRODUCT_TYPE = "Coffee Makers";
const AUDIENCE = "Coffee Lovers";
const CONTACT_EMAIL = "hello@coffeeexpert.com";
const SITE_URL = "https://coffeeexpert.com";

// Sort options will show:
// - Sort by Rank
// - Sort by Rating  
// - Sort by Price
// - Sort by Original Price

// newsletter-config.js
const NEWSLETTER_CONFIG = {
    content: {
        title: "Coffee Updates!",
        subtitle: "Get the latest coffee maker reviews and brewing tips.",
        buttonText: "Get Coffee Tips",
        placeholder: "Enter your email for coffee updates"
    }
};

// contact-faq-config.js
const CONTACT_INFO = {
    email: "hello@coffeeexpert.com",
    phone: "+1 (555) COFFEE-1",
    address: "123 Brew Street, Coffee City, CA",
    responseTime: "12 hours"
};
```

### Example 2: Casino Review Site
```javascript
// brand-config.js
const BRAND_NAME = "Casino Expert Reviews";

// config.js
const TEMPLATE_TYPE = "casino_websites";  // ← Uses bonus-based sorting
const NICHE = "Online Casinos";
const PRODUCT_TYPE = "Casino Sites";
const AUDIENCE = "Casino Players";
const CONTACT_EMAIL = "contact@casinoexpert.com";
const SITE_URL = "https://casinoexpert.com";

// Sort options will show:
// - Sort by Rank
// - Sort by Rating
// - Sort by Welcome Bonus  ($1000, $500, $200...)
// - Sort by Welcome Package (200% Match, 100% Match...)

// newsletter-config.js
const NEWSLETTER_CONFIG = {
    content: {
        title: "Casino Updates!",
        subtitle: "Get the latest casino bonuses and exclusive offers.",
        buttonText: "Get Bonuses",
        placeholder: "Enter your email for casino updates"
    }
};

// contact-faq-config.js
const CONTACT_INFO = {
    email: "contact@casinoexpert.com",
    phone: "+1 (555) CASINO-1",
    address: "456 Gaming Blvd, Las Vegas, NV",
    responseTime: "6 hours"
};
```

## 🔧 Advanced Configuration

### Product Configuration
**File**: `utils/config.js`

```javascript
const PRODUCTS_CONFIG = {
    product1: {
        rank: 1,
        rankBadge: "BEST OVERALL",
        name: "Your Product Name",
        price: "$699",
        affiliateLink: "https://your-affiliate-link.com",
        
        // Features (🆕 NOW: objects with icons)
        features: [
            { text: "High performance processor", icon: "fas fa-microchip" },
            { text: "Premium build quality", icon: "fas fa-gem" },
            { text: "2-year warranty included", icon: "fas fa-shield-alt" }
        ],
        
        // Perks (with manual icons)
        perks: [
            { text: "Excellent build quality and design", icon: "fas fa-gem" },
            { text: "Fast and efficient performance", icon: "fas fa-tachometer-alt" },
            { text: "Great value for money", icon: "fas fa-dollar-sign" }
        ],
        
        // Specifications (with manual icons)
        specifications: [
            { name: "processor", value: "Intel Core i7", icon: "fas fa-microchip" },
            { name: "memory", value: "16GB DDR4", icon: "fas fa-memory" },
            { name: "storage", value: "512GB SSD", icon: "fas fa-hdd" }
        ]
    }
    // ... up to 10 products
};

### 📝 **EXAMPLE: Product card badge section **

### **Before:**
```javascript
// Product ranking and affiliate data
rank: 4,
rankBadge: "BEST VARIETY",
rating: 4.6,
reviewCount: 1856,

// ========== UNIVERSAL TEMPLATE FIELDS ==========
```

### **After:**
```javascript
// Product ranking and affiliate data
rank: 4,
rankBadge: "BEST VARIETY", 
rating: 4.6,
reviewCount: 1856,

// =============================================
// RANK BADGE DISPLAY SETTINGS
// =============================================
badgeSettings: {
    showOnProductCard: true,     // ← Show/hide rank badge on product cards (true/false)
    showOnDetailedReview: true   // ← Show/hide rank badge on detailed review cards (true/false)
},

// ========== UNIVERSAL TEMPLATE FIELDS ==========
```

---

## 🎨 **BADGE CONTROL OPTIONS**

### **✅ Show Badge Everywhere (Default)**
```javascript
badgeSettings: {
    showOnProductCard: true,     // Badge shows on product cards
    showOnDetailedReview: true   // Badge shows on detailed review cards
},
```

### **🔲 Hide Badge on Product Cards Only**
```javascript
badgeSettings: {
    showOnProductCard: false,    // Badge hidden on product cards
    showOnDetailedReview: true   // Badge still shows on detailed review cards
},
```

### **🔲 Hide Badge on Detailed Reviews Only**
```javascript
badgeSettings: {
    showOnProductCard: true,     // Badge still shows on product cards
    showOnDetailedReview: false  // Badge hidden on detailed review cards
},
```

### **❌ Hide Badge Completely**
```javascript
badgeSettings: {
    showOnProductCard: false,    // Badge hidden on product cards
    showOnDetailedReview: false  // Badge hidden on detailed review cards
},
```
```

## 🆕 **NEW FEATURES** - Advanced Configuration Options

### CTA Box Display Controls
**File**: `utils/config.js`

Control which elements appear in the detailed review CTA boxes:

```javascript
const PRODUCTS_CONFIG = {
    product1: {
        // ... other product configuration ...
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Ready to Get Started?",
            description: "Get the best deal on this premium product today!",
            boxInfo: "Limited time offer - Free shipping included!",
            
            // 🆕 CTA box display controls
            display: {
                showTitle: true,        // Show/hide CTA title
                showDescription: true,  // Show/hide CTA description  
                showBoxInfo: true,      // Show/hide additional box info
                showPricingInfo: true   // Show/hide pricing info section
            }
        }
    }
};
```

**Example Configurations:**
```javascript
// Show everything
display: {
    showTitle: true,
    showDescription: true,
    showBoxInfo: true,
    showPricingInfo: true
}

// Only show title and pricing
display: {
    showTitle: true,
    showDescription: false,
    showBoxInfo: false,
    showPricingInfo: true
}

// Minimal - only pricing
display: {
    showTitle: false,
    showDescription: false,
    showBoxInfo: false,
    showPricingInfo: true
}
```

### Flexible Field Selection
**File**: `utils/config.js`

Choose exactly which pricing/bonus fields to display:

```javascript
const TEMPLATE_DISPLAY_CONFIG = {
    physical_products: {
        primaryField: "price",
        secondaryField: "originalPrice", 
        tertiaryField: "discount",
        primaryLabel: "Price",
        secondaryLabel: "Original Price",
        tertiaryLabel: "Discount",
        
        // 🆕 Flexible field selection (replaces fieldsToShow number)
        displayFields: ["primary", "secondary", "tertiary"], // Show all 3 fields
        
        // 🆕 Crossthrough control for secondary field
        secondaryFieldCrossthrough: true // Enable/disable crossthrough styling
    },
    casino_websites: {
        primaryField: "welcomeBonus",
        secondaryField: "welcomePackage",
        tertiaryField: "addedBonus",
        primaryLabel: "Welcome Bonus",
        secondaryLabel: "Welcome Package",
        tertiaryLabel: "Free Spins",
        
        // 🆕 Choose specific fields to show
        displayFields: ["primary", "tertiary"], // Only show bonus and free spins
        
        // 🆕 No crossthrough for casino packages
        secondaryFieldCrossthrough: false
    }
};
```

**Field Selection Examples:**
```javascript
// Show only primary field (price/bonus)
displayFields: ["primary"]

// Show primary and tertiary (skip secondary)
displayFields: ["primary", "tertiary"]

// Show all three fields
displayFields: ["primary", "secondary", "tertiary"]

// Show only secondary and tertiary
displayFields: ["secondary", "tertiary"]
```

### Crossthrough Text Control
**File**: `utils/config.js`

Control whether secondary fields show with strikethrough text:

```javascript
const TEMPLATE_DISPLAY_CONFIG = {
    physical_products: {
        // Enable crossthrough for original prices
        secondaryFieldCrossthrough: true  // ✅ Shows: $199 (crossed out)
    },
    casino_websites: {
        // Disable crossthrough for welcome packages
        secondaryFieldCrossthrough: false // ✅ Shows: "100% Match + 200 Free Spins" (normal text)
    },
    sports_betting: {
        // Enable crossthrough for comparison
        secondaryFieldCrossthrough: true  // ✅ Shows crossed out text when needed
    }
};
```

### Template System Improvements

#### Welcome Bonus Display
The comparison section now shows actual values instead of Yes/No:

**Before:**
```
Welcome Bonus    | Yes    | No     | Yes
Welcome Package  | N/A    | N/A    | N/A
Free Spins       | N/A    | N/A    | N/A
```

**After:**
```
Welcome Bonus    | $500 Bonus      | $300 Bonus      | $2000 Bonus
Welcome Package  | 100% + 200 Spins| 50% + 100 Spins | 200% + 500 Spins
Free Spins       | 200 Free Spins  | 100 Free Spins  | 500 Free Spins
```

#### List View Improvements
List view product cards now display pricing fields in separate rows:

**Before:** `$500 Welcome Bonus 100% Match + 200 Free Spins 200 Free Spins` (all in one line)

**After:**
```
$500 Welcome Bonus
100% Match + 200 Free Spins  
200 Free Spins
```

### Analytics Configuration
**File**: `utils/config.js`

```javascript
const TRACKING_CONFIG = {
    analytics: {
        googleAnalytics: {
            enabled: true,
            trackingId: "G-XXXXXXXXXX"  // ← Your GA4 ID
        },
        metaPixel: {
            enabled: true,
            pixelId: "YOUR_PIXEL_ID"    // ← Your Meta Pixel ID
        }
    }
};
```

### Navigation Customization
**File**: `utils/nav-config.js`

```javascript
// Add more navigation links
const NAV_LINKS = [
    { text: 'Home', href: './index.html' },
    { text: 'Reviews', href: './index.html#reviews' },
    { text: 'Compare', href: './index.html#comparison' },
    { text: 'Blog', href: './blog.html' },
    { text: 'About', href: './about.html' },
    { text: 'Contact', href: './contact.html' }
];
```

## 🎨 Visual Customization

### Colors and Styling
**File**: `utils/config.js`

```javascript
const STYLE_CONFIG = {
    colors: {
        primary: "#2563eb",        // ← Your brand color
        secondary: "#64748b",      // ← Secondary color
        accent: "#10b981",         // ← Accent color
        success: "#22c55e",
        warning: "#f59e0b",
        error: "#ef4444"
    }
};
```

### Typography
```javascript
const STYLE_CONFIG = {
    typography: {
        fontFamily: "Inter, sans-serif",
        headingFont: "Inter, sans-serif",
        fontSize: {
            base: "16px",
            small: "14px",
            large: "18px"
        }
    }
};
```

## 📊 Analytics & Tracking Setup

### Google Analytics 4
1. Get your GA4 tracking ID
2. Update `utils/config.js`:
```javascript
const TRACKING_CONFIG = {
    analytics: {
        googleAnalytics: {
            enabled: true,
            trackingId: "G-XXXXXXXXXX"  // ← Your actual GA4 ID
        }
    }
};
```

### Meta Pixel (Facebook)
1. Get your Pixel ID from Facebook Business Manager
2. Update `utils/config.js`:
```javascript
const TRACKING_CONFIG = {
    analytics: {
        metaPixel: {
            enabled: true,
            pixelId: "YOUR_ACTUAL_PIXEL_ID"  // ← Your actual Pixel ID
        }
    }
};
```

## 🔗 Affiliate Links Setup

### Adding Your Affiliate Links
**File**: `utils/config.js`

```javascript
const PRODUCTS_CONFIG = {
    product1: {
        affiliateLink: "https://amazon.com/dp/PRODUCT_ID/?tag=YOUR_AFFILIATE_TAG"
    }
};
```

### Amazon Associates Example
```javascript
affiliateLink: "https://amazon.com/dp/B08N5WRWNW/?tag=yoursite-20"
```

## 🎥 Hero Video System - Complete Guide

### Video Configuration Options

All video settings are configured in `utils/config.js` under `HERO_CONFIG.video`:

```javascript
const HERO_CONFIG = {
    video: {
        enabled: true,                                    // Enable video system
        src: "./assets/videos/product-demo.mp4",         // Video file path
        type: "video/mp4",                               // MIME type
        text: "Watch Our Review Video",                  // Placeholder text
        autoplay: false,                                 // Auto-play on load
        muted: false,                                    // Start muted
        loop: false,                                     // Loop playback
        poster: "./assets/images/video-thumbnail.jpg",  // Video poster image
    }
}
```

### Video Format Support

| Format | Extension | MIME Type | Browser Support | Recommendation |
|--------|-----------|-----------|-----------------|----------------|
| **MP4** | `.mp4` | `video/mp4` | All browsers | ✅ **Recommended** |
| **WebM** | `.webm` | `video/webm` | Chrome, Firefox | ✅ Good alternative |
| **OGV** | `.ogv` | `video/ogg` | Firefox only | ⚠️ Limited support |

### Video Optimization Guidelines

**Technical Specs:**
- **Resolution:** 1920x1080 (Full HD) or 1280x720 (HD)
- **Duration:** 30-60 seconds for hero videos
- **File Size:** Under 10MB for fast loading
- **Codec:** H.264 for MP4 (best compatibility)
- **Frame Rate:** 30fps or 24fps

**Best Practices:**
- Include audio but start muted for better UX
- Add captions/subtitles for accessibility
- Use a compelling poster image
- Keep content engaging and concise
- Test on mobile devices

### Video System Modes

**Mode 1: Video Disabled**
```javascript
video: { enabled: false }
```
Result: Shows hero image only

**Mode 2: Video Placeholder**
```javascript
video: { enabled: true, src: "" }
```
Result: Shows placeholder with play button

**Mode 3: Video Player**
```javascript
video: { enabled: true, src: "./assets/videos/demo.mp4" }
```
Result: Shows actual video player with controls

### Example Configurations

**Basic Video:**
```javascript
video: {
    enabled: true,
    src: "./assets/videos/product-review.mp4",
    type: "video/mp4"
}
```

**Autoplay Video (Muted):**
```javascript
video: {
    enabled: true,
    src: "./assets/videos/intro.mp4",
    type: "video/mp4",
    autoplay: true,
    muted: true,
    loop: true
}
```

**Video with Poster:**
```javascript
video: {
    enabled: true,
    src: "./assets/videos/demo.mp4",
    type: "video/mp4",
    poster: "./assets/images/video-poster.jpg",
    text: "Watch Product Demo"
}
```

### Video File Organization

Recommended folder structure:
```
assets/
├── videos/
│   ├── hero-video.mp4          // Main hero video
│   ├── product-demos/          // Product demonstration videos
│   ├── reviews/                // Review videos
│   └── testimonials/           // Customer testimonials
└── images/
    └── video-posters/          // Video thumbnail images
```

### Troubleshooting Video Issues

**Video Not Showing:**
1. Check `HERO_CONFIG.video.enabled = true`
2. Verify video file path in `src`
3. Ensure video file exists in specified location
4. Check browser console for error messages

**Video Not Playing:**
1. Verify video format compatibility
2. Check video file is not corrupted
3. Test video file in browser directly
4. Ensure proper MIME type setting

**Slow Loading:**
1. Reduce video file size (compress video)
2. Use appropriate resolution (don't use 4K)
3. Consider using video poster image
4. Add `preload="metadata"` attribute

## 🎮 Console Commands

### Product Card Management
```javascript
// Toggle between perks and specs
togglePerksSpecs()

// Update section titles
updateSectionTitles()

// Toggle list view image display
toggleListViewImages()
```

### Newsletter Management
```javascript
// Test newsletter functionality
testNewsletter()

// Update newsletter content
updateNewsletterContent()
```

## 📚 Related Guides

- **[BLOG-GUIDE.md](BLOG-GUIDE.md)** - Complete blog system configuration
- **[CONTACT-FAQ-GUIDE.md](CONTACT-FAQ-GUIDE.md)** - Detailed contact & FAQ configuration
- **[SIMPLE-CONFIG-GUIDE.md](SIMPLE-CONFIG-GUIDE.md)** - Simple configuration guide
- **[MENU-GUIDE.md](MENU-GUIDE.md)** - Menu system guide
- **[NAV-GUIDE.md](NAV-GUIDE.md)** - Navigation system guide
- **[FOOTER-GUIDE.md](FOOTER-GUIDE.md)** - Footer configuration guide
- **[PRODUCT-SYSTEM-GUIDE.md](PRODUCT-SYSTEM-GUIDE.md)** - Advanced product system guide

---

**Need help?** Check the browser console for any error messages, and make sure all your configuration values are properly set before going live!