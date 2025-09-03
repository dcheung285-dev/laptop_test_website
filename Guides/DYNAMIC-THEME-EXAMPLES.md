# 🎨 **Dynamic Theme + Template Examples**

## **How Theme Colors Adapt to Template Types**

### **Example 1: Purple Theme + Casino Website**

#### **Theme Settings:**
```javascript
// utils/theme-config.js
const GLOBAL_THEME = 'purple-dark';

// utils/config.js  
const TEMPLATE_TYPE = "casino_websites";
```

#### **Result:**
- **Welcome Bonus**: Purple gradient text effect
- **Free Spins Badge**: Purple accent with pulse animation
- **Claim Bonus Button**: Purple gradient background
- **Overall Feel**: Sophisticated, premium casino experience

---

### **Example 2: Green Theme + Sports Betting**

#### **Theme Settings:**
```javascript
// utils/theme-config.js
const GLOBAL_THEME = 'green';

// utils/config.js
const TEMPLATE_TYPE = "sports_betting";
```

#### **Result:**
- **Free Bet Amount**: Green success color
- **Odds Boost Badge**: Green gradient with shine effect
- **Get Bonus Button**: Green gradient background
- **Overall Feel**: Fresh, energetic sports platform

---

### **Example 3: Blue Theme + Software Reviews**

#### **Theme Settings:**
```javascript
// utils/theme-config.js
const GLOBAL_THEME = 'blue-dark';

// utils/config.js
const TEMPLATE_TYPE = "software_saas";
```

#### **Result:**
- **Monthly Price**: Professional blue color
- **Free Trial Badge**: Blue accent gradient
- **Start Trial Button**: Blue gradient background
- **Overall Feel**: Clean, corporate software site

---

### **Example 4: Orange Theme + Restaurant Reviews**

#### **Theme Settings:**
```javascript
// utils/theme-config.js
const GLOBAL_THEME = 'orange';

// utils/config.js
const TEMPLATE_TYPE = "restaurants";
```

#### **Result:**
- **Price Range**: Orange primary color
- **Special Offer Badge**: Orange gradient
- **Make Reservation Button**: Orange gradient background
- **Overall Feel**: Warm, inviting restaurant guide

---

## **🔄 Dynamic Color Mapping**

### **How Colors Are Applied:**

| Template Type | Primary Field | Secondary Field | Badge/Tertiary |
|---------------|--------------|-----------------|----------------|
| **Casino** | `var(--primary-color)` gradient | `var(--secondary-color)` | `var(--accent-color)` |
| **Sports Betting** | `var(--success-color)` | `var(--primary-color)` | `var(--success-color)` |
| **Software/SaaS** | `var(--primary-color)` | `var(--secondary-color)` | `var(--primary-color)` |
| **VPN Services** | `var(--accent-color)` | `var(--primary-color)` | `var(--accent-color)` |
| **Crypto** | `var(--warning-color)` | `var(--accent-color)` | `var(--warning-color)` |
| **Restaurants** | `var(--primary-color)` | `var(--secondary-color)` | `var(--secondary-color)` |
| **Hotels** | `var(--primary-color)` | `var(--secondary-color)` | `var(--primary-color)` |
| **Streaming** | `var(--accent-color)` | `var(--primary-color)` | `var(--accent-color)` |
| **Web Hosting** | `var(--info-color)` | `var(--primary-color)` | `var(--info-color)` |

---

## **✨ Visual Examples**

### **Same Template, Different Themes:**

#### **Casino Website with Different Themes:**

**Purple Theme:**
```
🎰 $500 Welcome Bonus (Purple gradient)
[Claim Bonus] (Purple button)
```

**Red Theme:**
```
🎰 $500 Welcome Bonus (Red gradient) 
[Claim Bonus] (Red button)
```

**Green Theme:**
```
🎰 $500 Welcome Bonus (Green gradient)
[Claim Bonus] (Green button)
```

### **Same Theme, Different Templates:**

#### **Green Theme with Different Template Types:**

**Sports Betting:**
```
⚽ $100 Free Bet (Green success color)
[Get Bonus] (Green button)
```

**Software:**
```
💻 $29/month (Green primary color)
[Start Trial] (Green button)
```

**VPN:**
```
🛡️ $9.99/month (Green accent color)
[Get VPN] (Green button)
```

---

## **🎯 Benefits**

### **✅ Perfect Harmony**
- Template colors always match your website theme
- No color clashing between elements
- Professional, cohesive appearance

### **✅ Easy Customization**
- Change theme → All template colors update
- Change template type → Colors adapt to new industry
- No manual color adjustments needed

### **✅ Brand Consistency**
- All elements use your brand colors
- Consistent experience across all pages
- Professional appearance regardless of industry

### **✅ Developer Friendly**
- Uses standard CSS variables
- Easy to customize further if needed
- Follows web standards and best practices

**Your template system now perfectly adapts to any theme and any industry!** 🌈 