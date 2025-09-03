# 🎯 **Universal Template Type System**

## **Overview**
The template system allows you to switch between different website types (physical products, casino sites, sports betting, software, etc.) by changing **one line of code**. Instead of always showing "Price", your website can show "Welcome Bonus", "Subscription Plan", "Room Rate", etc.

---

## 🚀 **Quick Setup**

### **Step 1: Choose Your Template Type**
In `utils/config.js`, change this line:
```javascript
const TEMPLATE_TYPE = "physical_products"; // ← CHANGE THIS
```

### **Available Template Types:**
- `"physical_products"` - Coffee makers, electronics, appliances
- `"casino_websites"` - Online casinos, gambling sites
- `"sports_betting"` - Sportsbooks, betting platforms
- `"software_saas"` - Software, SaaS platforms, tools
- `"streaming_services"` - Netflix, Disney+, streaming platforms
- `"vpn_services"` - VPN providers, privacy services
- `"crypto_exchanges"` - Cryptocurrency trading platforms
- `"web_hosting"` - Hosting providers, domain services
- `"restaurants"` - Restaurant reviews, food services
- `"hotels_travel"` - Hotels, travel booking sites

### **Step 2: Add Your Data**
Add the relevant fields to your product configurations in `utils/config.js`.

---

## 📋 **Template Type Examples**

### **🎰 Casino Websites**
```javascript
const TEMPLATE_TYPE = "casino_websites";

// In your product config:
product1: {
    name: "BetMGM Casino",
    bonus: "$1000 Welcome Bonus",           // Primary field
    welcomePackage: "100% Match + 200 Spins", // Secondary field
    freeSpins: "200 Free Spins",            // Tertiary field
    // ... other fields
}
```

**What Users See:**
- **Product Cards**: "🎰 $1000 Welcome Bonus" instead of price
- **Detailed Reviews**: Welcome bonus information prominently displayed
- **Comparison Table**: "🎰 Welcome Bonus" column instead of "💰 Price"
- **CTA Buttons**: "Claim Bonus" instead of "Buy Now"

### **⚽ Sports Betting**
```javascript
const TEMPLATE_TYPE = "sports_betting";

// In your product config:
product1: {
    name: "DraftKings Sportsbook",
    signupBonus: "$150 Free Bet",           // Primary field
    oddsBoost: "50% Profit Boost",          // Secondary field
    freeBet: "$25 Risk-Free",               // Tertiary field
    // ... other fields
}
```

### **💻 Software/SaaS**
```javascript
const TEMPLATE_TYPE = "software_saas";

// In your product config:
product1: {
    name: "Adobe Creative Suite",
    monthlyPrice: "$52.99/month",           // Primary field
    yearlyPrice: "$599/year",               // Secondary field
    trialPeriod: "7-day free trial",        // Tertiary field
    // ... other fields
}
```

### **🛡️ VPN Services**
```javascript
const TEMPLATE_TYPE = "vpn_services";

// In your product config:
product1: {
    name: "ExpressVPN",
    monthlyPrice: "$12.95/month",           // Primary field
    serverCount: "3000+ Servers",           // Secondary field
    speedInfo: "Unlimited Bandwidth",       // Tertiary field
    // ... other fields
}
```

### **💰 Crypto Exchanges**
```javascript
const TEMPLATE_TYPE = "crypto_exchanges";

// In your product config:
product1: {
    name: "Coinbase Pro",
    tradingFee: "0.5% Trading Fee",         // Primary field
    supportedCoins: "200+ Cryptocurrencies", // Secondary field
    securityRating: "A+ Security Rating",   // Tertiary field
    // ... other fields
}
```

---

## 🎨 **Visual Differences by Template Type**

### **Physical Products (Default)**
```
[Product Image]
⭐⭐⭐⭐⭐ 4.8/5
$699  $799  13% OFF
[Buy Now]
```

### **Casino Websites**
```
[Product Image]
⭐⭐⭐⭐⭐ 4.8/5
$500 Welcome  100% Match  200 Spins
[Claim Bonus]
```

### **Sports Betting**
```
[Product Image]
⭐⭐⭐⭐⭐ 4.8/5
$100 Free Bet  50% Boost  $25 Risk-Free
[Get Bonus]
```

### **Software/SaaS**
```
[Product Image]
⭐⭐⭐⭐⭐ 4.8/5
$29/month  $290/year  30-day trial
[Start Free Trial]
```

---

## 🛠️ **Adding Template-Specific Data**

### **Step 1: Add Fields to Products**
In `utils/config.js`, add the relevant fields to each product:

```javascript
product1: {
    name: "Your Product/Service Name",
    description: "Product description",
    rating: 4.8,
    reviewCount: 1247,
    
    // ========== ADD TEMPLATE-SPECIFIC FIELDS ==========
    // Physical Products
    price: "$699",
    originalPrice: "$799", 
    discount: "13% OFF",
    
    // Casino Websites
    bonus: "$500 Welcome Bonus",
    welcomePackage: "100% Match + 200 Free Spins",
    freeSpins: "200 Free Spins",
    
    // Sports Betting
    signupBonus: "$100 Free Bet",
    oddsBoost: "50% Odds Boost",
    freeBet: "$25 Risk-Free Bet",
    
    // Software/SaaS
    monthlyPrice: "$29/month",
    yearlyPrice: "$290/year",
    trialPeriod: "30-day free trial",
    
    // VPN Services (uses monthlyPrice from SaaS)
    serverCount: "5000+ Servers",
    speedInfo: "10Gbps Speed",
    
    // Crypto Exchanges
    tradingFee: "0.1% Trading Fee",
    supportedCoins: "500+ Coins",
    securityRating: "A+ Security",
    
    // Web Hosting (uses monthlyPrice from SaaS)
    storage: "100GB SSD",
    uptime: "99.9% Uptime",
    
    // Restaurants
    priceRange: "$15-25 per person",
    cuisineType: "Italian Fine Dining",
    specialOffer: "Happy Hour 4-6pm",
    
    // Hotels/Travel
    roomRate: "$150/night",
    amenities: "Pool, Spa, Gym",
    locationScore: "Prime Downtown",
    
    // ... other standard fields
}
```

### **Step 2: Only Add Fields You Need**
You don't need to add ALL fields - only the ones for your template type:

**For Casino Websites:**
```javascript
product1: {
    // Standard fields
    name: "BetMGM Casino",
    rating: 4.8,
    reviewCount: 1247,
    
    // Casino-specific fields only
    bonus: "$1000 Welcome Bonus",
    welcomePackage: "100% Match + 200 Spins", 
    freeSpins: "200 Free Spins",
    
    // Standard fields
    affiliateLink: "https://betmgm.com/affiliate",
    ctaText: "Claim Bonus" // Optional - will default to template setting
}
```

---

## ⚙️ **Advanced Customization**

### **Custom CTA Text**
Each template type has a default CTA button text, but you can override it:

```javascript
// Template defaults:
casino_websites: "Claim Bonus"
sports_betting: "Get Bonus" 
software_saas: "Start Free Trial"
vpn_services: "Get VPN"

// Override in product config:
product1: {
    ctaText: "Join Now" // This overrides the template default
}
```

### **Template Field Configuration**
In `utils/config.js`, you can see how each template maps fields:

```javascript
casino_websites: {
    primaryField: "bonus",          // Main display value
    secondaryField: "welcomePackage", // Secondary info
    tertiaryField: "freeSpins",     // Badge/highlight
    primaryLabel: "Welcome Bonus",   // Label text
    secondaryLabel: "Package",
    tertiaryLabel: "Free Spins", 
    icon: "🎰",                     // Display icon
    ctaDefault: "Claim Bonus"       // Default button text
}
```

---

## 🎯 **Real-World Examples**

### **Casino Review Website**
```javascript
// config.js
const TEMPLATE_TYPE = "casino_websites";

// Products show:
// "🎰 $500 Welcome Bonus" instead of "$699"
// "Claim Bonus" buttons instead of "Buy Now"
// Comparison table shows bonus amounts
```

### **VPN Review Website** 
```javascript
// config.js
const TEMPLATE_TYPE = "vpn_services";

// Products show:
// "🛡️ $9.99/month" with "5000+ Servers" and "10Gbps Speed"
// "Get VPN" buttons
// Comparison table shows pricing, servers, speed
```

### **Restaurant Review Website**
```javascript
// config.js  
const TEMPLATE_TYPE = "restaurants";

// Products show:
// "🍕 $15-25 per person" with "Italian Fine Dining" 
// "Make Reservation" buttons
// Comparison table shows price range, cuisine, offers
```

---

## 📊 **Comparison Table Changes**

The comparison table automatically adapts:

**Physical Products:**
```
⭐ Rating    | 4.8/5  | 4.5/5  | 4.7/5
💰 Price     | $699   | $299   | $899  
📝 Reviews   | 1247   | 892    | 654
```

**Casino Websites:**
```
⭐ Rating         | 4.8/5       | 4.5/5       | 4.7/5
🎰 Welcome Bonus  | $500 Bonus  | $200 Bonus  | $1000 Bonus
Package           | 100% Match  | 50% Match   | 200% Match
📝 Reviews        | 1247        | 892         | 654
```

---

## 📋 **Complete Product Configuration Template**

Copy this template and add it to your `utils/config.js` for any product:

```javascript
productX: {
    name: "Your Product/Service Name",
    description: "Product description here",
    productLogo: "./assets/images/Test_LogoX.png",
    productImage: "./assets/images/Test_website_imageX.png",
    logoScale: { grid: 4.0, list: 3.0 },
    detailedReviewScale: { productImage: 1.0, productLogo: 4.0 },
    
    // Standard fields
    rank: X,
    rankBadge: "YOUR BADGE",
    rating: 4.5,
    reviewCount: 1000,
    affiliateLink: "https://your-affiliate-link.com",
    ctaText: "Your CTA Text", // Optional - will use template default
    
    // ========== UNIVERSAL TEMPLATE FIELDS ==========
    // Physical Products (default)
    price: "$299",
    originalPrice: "$399",
    discount: "25% OFF",
    
    // Casino Websites
    bonus: "$500 Welcome Bonus",
    welcomePackage: "100% Match + 200 Free Spins",
    freeSpins: "200 Free Spins",
    
    // Sports Betting
    signupBonus: "$100 Free Bet",
    oddsBoost: "50% Odds Boost",
    freeBet: "$25 Risk-Free Bet",
    
    // Software/SaaS
    monthlyPrice: "$29/month",
    yearlyPrice: "$290/year",
    trialPeriod: "30-day free trial",
    
    // Streaming Services
    contentHighlight: "4K Ultra HD + HDR",
    
    // VPN Services
    serverCount: "5000+ Servers",
    speedInfo: "10Gbps Speed",
    
    // Crypto Exchanges
    tradingFee: "0.1% Trading Fee",
    supportedCoins: "500+ Coins",
    securityRating: "A+ Security",
    
    // Web Hosting
    storage: "100GB SSD",
    uptime: "99.9% Uptime",
    
    // Restaurants
    priceRange: "$15-25 per person",
    cuisineType: "Italian Fine Dining",
    specialOffer: "Happy Hour 4-6pm",
    
    // Hotels/Travel
    roomRate: "$150/night",
    amenities: "Pool, Spa, Gym",
    locationScore: "Prime Downtown",
    
    // CTA configuration
    cta: {
        title: "Ready to Get Started?",
        description: "Get the best deal today!",
        boxInfo: "Limited time offer!"
    },
    
    // Features, perks, specifications...
    features: ["Feature 1", "Feature 2", "Feature 3"],
    perks: [
        { text: "Perk 1", icon: "fas fa-star" },
        { text: "Perk 2", icon: "fas fa-gem" }
    ],
    specifications: [
        { name: "Spec 1", value: "Value 1", icon: "fas fa-cog" },
        { name: "Spec 2", value: "Value 2", icon: "fas fa-gauge" }
    ]
}
```

### **💡 Pro Tips:**

#### **1. You Only Need Relevant Fields**
Don't add ALL template fields - just the ones for your website type:

**Casino Website Example:**
```javascript
product1: {
    name: "BetMGM Casino",
    rating: 4.8,
    reviewCount: 1247,
    
    // Only casino fields needed
    bonus: "$1000 Welcome Bonus",
    welcomePackage: "100% Match + 200 Spins",
    freeSpins: "200 Free Spins",
    
    affiliateLink: "https://betmgm.com/affiliate"
}
```

#### **2. Template System Handles the Rest**
When you set `TEMPLATE_TYPE = "casino_websites"`, the system automatically:
- Shows "🎰 $1000 Welcome Bonus" instead of price
- Changes buttons to "Claim Bonus"
- Updates comparison table headers
- Applies casino-specific styling

#### **3. Fallback Support**
If a field is missing, the system gracefully falls back:
- Missing bonus → Shows "N/A" 
- Missing ctaText → Uses template default ("Claim Bonus")
- Missing template fields → Falls back to price fields

---

## 🎯 **Quick Setup Examples**

### **Casino Website (5 minutes)**
1. Change: `TEMPLATE_TYPE = "casino_websites"`
2. Add to products: `bonus`, `welcomePackage`, `freeSpins`
3. Done! All cards show bonuses instead of prices

### **Sports Betting (5 minutes)**
1. Change: `TEMPLATE_TYPE = "sports_betting"`
2. Add to products: `signupBonus`, `oddsBoost`, `freeBet`
3. Done! All cards show betting bonuses

### **SaaS Software (5 minutes)**
1. Change: `TEMPLATE_TYPE = "software_saas"`
2. Add to products: `monthlyPrice`, `yearlyPrice`, `trialPeriod`
3. Done! All cards show subscription info

**Your website transforms instantly with just these changes!** ✨

---

## 🎨 **Dynamic Theme Integration**

### **Automatic Color Adaptation**
The template system now **automatically adapts to your chosen theme colors**! No more hardcoded colors - everything uses your theme configuration.

#### **How It Works:**
1. **Choose Your Theme** in `utils/theme-config.js`:
   ```javascript
   const GLOBAL_THEME = 'purple-dark'; // ← Your website theme
   ```

2. **Choose Template Type** in `utils/config.js`:
   ```javascript
   const TEMPLATE_TYPE = "casino_websites"; // ← Your website type
   ```

3. **Colors Adapt Automatically**:
   - **Casino websites** use `var(--primary-color)` and `var(--accent-color)`
   - **Sports betting** uses `var(--success-color)` 
   - **Software/SaaS** uses `var(--primary-color)` and `var(--secondary-color)`
   - **VPN services** uses `var(--accent-color)`
   - **Crypto exchanges** uses `var(--warning-color)`

#### **Theme Color Mapping:**

**Purple Theme + Casino Template:**
```css
/* Uses your purple theme colors */
.casino-primary-value {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    /* Results in purple gradient */
}
```

**Green Theme + Sports Betting:**
```css
/* Uses your green theme colors */
.sports-primary-value {
    color: var(--success-color);
    /* Results in green color that matches your theme */
}
```

**Blue Theme + Software:**
```css
/* Uses your blue theme colors */
.software-primary-value {
    color: var(--primary-color);
    /* Results in blue color that matches your theme */
}
```

### **Benefits of Dynamic Theming:**

#### **✅ Perfect Color Harmony**
- Template styling always matches your chosen theme
- No clashing colors between template type and website theme
- Professional, cohesive appearance

#### **✅ Easy Theme Changes**
- Change website theme → Template colors update automatically
- No need to manually adjust template-specific colors
- One theme change affects entire website including template features

#### **✅ Consistent Branding**
- All elements use the same color palette
- Brand consistency across all template types
- Professional appearance regardless of industry

### **Example Combinations:**

#### **Dark Purple Theme + Casino:**
- Primary values: Purple gradient text
- Buttons: Purple gradients with pulse animation
- Badges: Purple accent colors
- **Result**: Sophisticated dark casino site

#### **Green Theme + Sports Betting:**
- Primary values: Green success colors  
- Buttons: Green gradients with shine effects
- Badges: Green accent highlights
- **Result**: Fresh, energetic sports site

#### **Blue Theme + Software:**
- Primary values: Professional blue
- Buttons: Blue gradients
- Badges: Blue accent colors
- **Result**: Clean, corporate software site

### **Color Variable Reference:**

The template system uses these CSS variables from your theme:

```css
var(--primary-color)    /* Main brand color */
var(--secondary-color)  /* Secondary brand color */
var(--accent-color)     /* Accent highlights */
var(--success-color)    /* Success states (green-ish) */
var(--warning-color)    /* Warning states (yellow/orange-ish) */
var(--info-color)       /* Info states (blue-ish) */
var(--text-primary)     /* Primary text color */
var(--text-secondary)   /* Secondary text color */
```

**All template types automatically use these variables for perfect theme integration!** 🎨 