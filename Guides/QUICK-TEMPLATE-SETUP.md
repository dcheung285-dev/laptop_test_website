# 🚀 **Quick Template Setup Guide**

## **30-Second Setup: Change Your Website Type**

### **Step 1: Choose Template Type**
In `utils/config.js`, change this ONE line:

```javascript
const TEMPLATE_TYPE = "casino_websites"; // ← CHANGE THIS
```

### **Step 2: Add Relevant Fields to Products**
Add only the fields you need for your template type.

---

## 🎰 **Casino Website Setup**

### **Template Type:**
```javascript
const TEMPLATE_TYPE = "casino_websites";
```

### **Add to Each Product:**
```javascript
product1: {
    name: "BetMGM Casino",
    rating: 4.8,
    reviewCount: 1247,
    
    // Casino fields
    bonus: "$1000 Welcome Bonus",
    welcomePackage: "100% Match + 200 Free Spins",
    freeSpins: "200 Free Spins",
    
    affiliateLink: "https://betmgm.com/affiliate"
}
```

### **Result:**
- Product cards show: "🎰 $1000 Welcome Bonus"
- Buttons say: "Claim Bonus"
- Comparison table shows bonus columns
- Gold styling with pulse animations

---

## ⚽ **Sports Betting Setup**

### **Template Type:**
```javascript
const TEMPLATE_TYPE = "sports_betting";
```

### **Add to Each Product:**
```javascript
product1: {
    name: "DraftKings",
    rating: 4.7,
    reviewCount: 892,
    
    // Sports betting fields
    signupBonus: "$150 Free Bet",
    oddsBoost: "50% Profit Boost",
    freeBet: "$25 Risk-Free",
    
    affiliateLink: "https://draftkings.com/affiliate"
}
```

### **Result:**
- Product cards show: "⚽ $150 Free Bet"
- Buttons say: "Get Bonus"
- Green styling with shine effects

---

## 💻 **Software/SaaS Setup**

### **Template Type:**
```javascript
const TEMPLATE_TYPE = "software_saas";
```

### **Add to Each Product:**
```javascript
product1: {
    name: "Adobe Creative Suite",
    rating: 4.6,
    reviewCount: 1456,
    
    // SaaS fields
    monthlyPrice: "$52.99/month",
    yearlyPrice: "$599/year",
    trialPeriod: "7-day free trial",
    
    affiliateLink: "https://adobe.com/affiliate"
}
```

### **Result:**
- Product cards show: "💻 $52.99/month"
- Buttons say: "Start Free Trial"
- Clean blue styling

---

## 🛡️ **VPN Services Setup**

### **Template Type:**
```javascript
const TEMPLATE_TYPE = "vpn_services";
```

### **Add to Each Product:**
```javascript
product1: {
    name: "ExpressVPN",
    rating: 4.8,
    reviewCount: 2341,
    
    // VPN fields
    monthlyPrice: "$12.95/month",
    serverCount: "3000+ Servers",
    speedInfo: "Unlimited Bandwidth",
    
    affiliateLink: "https://expressvpn.com/affiliate"
}
```

### **Result:**
- Product cards show: "🛡️ $12.95/month"
- Secondary info shows server count
- Purple styling theme

---

## 💰 **Crypto Exchange Setup**

### **Template Type:**
```javascript
const TEMPLATE_TYPE = "crypto_exchanges";
```

### **Add to Each Product:**
```javascript
product1: {
    name: "Coinbase Pro",
    rating: 4.4,
    reviewCount: 1789,
    
    // Crypto fields
    tradingFee: "0.5% Trading Fee",
    supportedCoins: "200+ Cryptocurrencies",
    securityRating: "A+ Security Rating",
    
    affiliateLink: "https://coinbase.com/affiliate"
}
```

### **Result:**
- Product cards show: "💰 0.5% Trading Fee"
- Monospace font styling
- Gold color scheme

---

## 🍕 **Restaurant Reviews Setup**

### **Template Type:**
```javascript
const TEMPLATE_TYPE = "restaurants";
```

### **Add to Each Product:**
```javascript
product1: {
    name: "Mario's Italian Bistro",
    rating: 4.7,
    reviewCount: 567,
    
    // Restaurant fields
    priceRange: "$25-35 per person",
    cuisineType: "Authentic Italian",
    specialOffer: "Happy Hour 4-7pm",
    
    affiliateLink: "https://opentable.com/marios"
}
```

### **Result:**
- Product cards show: "🍕 $25-35 per person"
- Buttons say: "Make Reservation"
- Warm color styling

---

## 🏨 **Hotel/Travel Setup**

### **Template Type:**
```javascript
const TEMPLATE_TYPE = "hotels_travel";
```

### **Add to Each Product:**
```javascript
product1: {
    name: "Grand Plaza Hotel",
    rating: 4.5,
    reviewCount: 1234,
    
    // Hotel fields
    roomRate: "$189/night",
    amenities: "Pool, Spa, Gym, WiFi",
    locationScore: "Downtown Prime",
    
    affiliateLink: "https://booking.com/grand-plaza"
}
```

### **Result:**
- Product cards show: "🏨 $189/night"
- Buttons say: "Book Now"
- Elegant styling theme

---

## ✅ **That's It!**

### **What Changes Automatically:**
- ✅ All product cards adapt
- ✅ Detailed reviews update
- ✅ Comparison table changes
- ✅ CTA buttons update
- ✅ Colors and styling adapt
- ✅ Icons and labels change

### **What Stays the Same:**
- ✅ All existing functionality
- ✅ Responsive design
- ✅ Comparison system
- ✅ Editor's choice
- ✅ All animations and effects

**Your website is now perfectly tailored to your industry!** 🎉

### **Need Help?**
- Missing fields show "N/A" (graceful fallback)
- Template system works with existing synonym groups
- All 10 products + editor's choice support all template types
- External link icons removed from all CTA buttons

**Total setup time: 5 minutes maximum!** ⚡ 