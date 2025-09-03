# Privacy Policy Configuration Guide

## 🎯 Overview

The privacy policy page is **fully dynamic** and uses a **dedicated configuration file** for easy section management. All content, placeholders, data collection practices, and GDPR compliance features are automatically managed with **automatic styling and separators**.

## 📁 File Structure

```
privacy.html                 ← Privacy policy page (auto-populated)
utils/privacy-config.js      ← 🆕 DEDICATED Privacy policy configuration  
utils/brand-config.js        ← Brand information
utils/contact-faq-config.js  ← Contact information
utils/config.js              ← Site-wide settings
utils/analytics.js           ← Analytics tracking settings
```

**🎯 SIMPLIFIED SYSTEM:** Each legal page uses only its own dedicated config file!

## 🔧 Primary Configuration: `privacy-config.js`

**📁 DEDICATED CONFIG FILE!** This file contains all the privacy policy content and settings:

```javascript
const PRIVACY_CONFIG = {
    enabled: true,
    tabTitle: "Privacy Policy | {{BRAND_NAME_TEXT}}",           // ← Browser tab title
    pageHeading: "Privacy Policy",                              // ← Main page heading (H1)
    metaDescription: "Privacy Policy for {{BRAND_NAME_TEXT}} - How we collect, use, and protect your personal data.",
    lastUpdated: "January 2025",
    effectiveDate: "January 1, 2025",
    
    // ========== PRIVACY POLICY SECTIONS ==========
    // 📝 Add/remove/reorder sections here - numbering is automatic!
    sections: [
        {
            enabled: true,
            title: "Introduction",
            content: `
                <p>{{BRAND_NAME_TEXT}} ("we," "our," or "us") is committed to protecting your privacy...</p>
                <p>Please read this privacy policy carefully...</p>
            `
        },
        {
            enabled: true,
            title: "Information We Collect",
            content: `
                <h3>Personal Information</h3>
                <p>We may collect personal information that you voluntarily provide...</p>
                <ul>
                    <li>Email address (when subscribing to our newsletter)</li>
                    <li>Name (if provided in contact forms)</li>
                </ul>
                
                <h3>Automatically Collected Information</h3>
                <p>When you visit our website, we automatically collect...</p>
            `
        },
        {
            enabled: true,
            title: "Your Privacy Rights",
            content: `
                <h3>GDPR Rights (EU Residents)</h3>
                <ul>
                    <li><strong>Access:</strong> Request a copy of your data</li>
                    <li><strong>Rectification:</strong> Correct inaccurate data</li>
                    <li><strong>Erasure:</strong> Request deletion of your data</li>
                </ul>
            `
        }
        // ... more sections
    ]
};
```

## ✨ AUTOMATIC FEATURES

### **🔢 Automatic Section Numbering**
- Sections are automatically numbered (1., 2., 3., etc.)
- No need to manually update numbers when adding/removing sections

### **🎨 Automatic Visual Separators**
- Visual lines and spacing between sections are automatic
- CSS handles all styling and responsive design
- No manual separator management needed

### **📱 Automatic Responsive Design**
- All sections automatically adapt to mobile/tablet/desktop
- Typography and spacing automatically adjust
- No additional mobile coding required

## 📝 How to Add New Sections

### **Method 1: Add to Config Array**

Simply add a new section object to the `sections` array:

```javascript
const PRIVACY_CONFIG = {
    sections: [
        // ... existing sections ...
        {
            enabled: true,
            title: "Your New Section Title",
            content: `
                <p>Your new privacy content here with {{BRAND_NAME_TEXT}} placeholders.</p>
                <h3>Subsection Title</h3>
                <ul>
                    <li>Bullet point 1</li>
                    <li>Bullet point 2</li>
                </ul>
                <p>More content with {{CONTACT_EMAIL}} if needed.</p>
            `
        }
    ]
};
```

**✅ Automatic Results:**
- Section gets the next number automatically
- Visual separator appears automatically
- Responsive styling applied automatically
- Placeholder replacement works automatically

### **Method 2: Industry-Specific Sections**

#### **For Gaming/Casino Sites:**
```javascript
{
    enabled: true,
    title: "Age Verification and Responsible Gaming",
    content: `
        <h3>Age Verification</h3>
        <p>We may collect age verification data to ensure compliance with gambling regulations.</p>
        
        <h3>Responsible Gaming Data</h3>
        <ul>
            <li>Gaming behavior monitoring</li>
            <li>Self-exclusion tracking</li>
            <li>Risk assessment data</li>
        </ul>
        
        <p>Gaming data may be shared with regulatory authorities as required by law.</p>
    `
}
```

#### **For Health/Wellness Sites:**
```javascript
{
    enabled: true,
    title: "Health Information Disclaimer",
    content: `
        <p>Information on {{BRAND_NAME_TEXT}} is for educational purposes only.</p>
        <p>{{PRODUCT_TYPE}} recommendations are not medical advice.</p>
        <p>Always consult healthcare professionals before making health decisions.</p>
        
        <h3>Health Data Collection</h3>
        <ul>
            <li>No medical records or health data collected</li>
            <li>General wellness preferences only</li>
            <li>Age verification for supplement recommendations</li>
        </ul>
    `
}
```

## 🗑️ How to Remove Sections

### **Method 1: Delete the Section**

Simply delete the entire section object:

```javascript
// DELETE THIS ENTIRE BLOCK:
// {
//     enabled: true,
//     title: "Section to Remove",
//     content: `<p>Content to remove...</p>`
// },
```

### **Method 2: Temporarily Disable**

Set `enabled: false` to hide without deleting:

```javascript
{
    enabled: false,  // ← Section hidden but can be restored easily
    title: "Children's Privacy",
    content: `<p>Content is hidden but still in config...</p>`
}
```

**✅ Automatic Results:**
- Section numbering automatically adjusts
- Visual separators automatically adjust
- No broken styling or gaps

## 🔄 How to Reorder Sections

Simply **cut and paste** entire section objects in the array:

```javascript
sections: [
    // Move this section UP:
    {
        enabled: true,
        title: "Contact Information",  // Now section 1
        content: `...`
    },
    {
        enabled: true,
        title: "Introduction",  // Now section 2
        content: `...`
    }
    // Numbers automatically update!
]
```

## 🎨 Dynamic Placeholders

All placeholders are **automatically replaced** throughout all sections:

| Placeholder | Replaced With | Source File |
|-------------|---------------|-------------|
| `{{BRAND_NAME_TEXT}}` | Your brand name | `brand-config.js` |
| `{{CONTACT_EMAIL}}` | Your email address | `contact-faq-config.js` |
| `{{CONTACT_ADDRESS}}` | Your business address | `contact-faq-config.js` |
| `{{SITE_URL}}` | Your website URL | `config.js` |
| `{{PRODUCT_TYPE}}` | Your product type | `config.js` |
| `{{NICHE}}` | Your business niche | `config.js` |

## 🌍 Regional Compliance Examples

### **GDPR Compliance Section:**
```javascript
{
    enabled: true,
    title: "GDPR Compliance (EU Residents)",
    content: `
        <p>{{BRAND_NAME_TEXT}} complies with the General Data Protection Regulation (GDPR).</p>
        
        <h3>Lawful Basis for Processing</h3>
        <ul>
            <li><strong>Legitimate Interest:</strong> Website analytics and improvement</li>
            <li><strong>Consent:</strong> Newsletter subscriptions and marketing</li>
            <li><strong>Contract:</strong> Service delivery and customer support</li>
        </ul>
        
        <h3>Data Controller Information</h3>
        <p><strong>Data Controller:</strong> {{BRAND_NAME_TEXT}}</p>
        <p><strong>Contact:</strong> {{CONTACT_EMAIL}}</p>
        <p><strong>Address:</strong> {{CONTACT_ADDRESS}}</p>
        
        <h3>Data Protection Officer</h3>
        <p>For GDPR-related inquiries, contact our DPO at {{CONTACT_EMAIL}}.</p>
    `
}
```

### **CCPA Compliance Section:**
```javascript
{
    enabled: true,
    title: "California Consumer Privacy Act (CCPA)",
    content: `
        <p>California residents have specific privacy rights under CCPA:</p>
        
        <h3>Your California Rights</h3>
        <ul>
            <li><strong>Right to Know:</strong> Information about data collection and use</li>
            <li><strong>Right to Delete:</strong> Request deletion of personal data</li>
            <li><strong>Right to Opt-Out:</strong> Opt-out of sale of personal data</li>
            <li><strong>Non-Discrimination:</strong> Equal service regardless of privacy choices</li>
        </ul>
        
        <p><strong>Important:</strong> {{BRAND_NAME_TEXT}} does not sell personal data to third parties.</p>
        <p>To exercise your CCPA rights, contact us at {{CONTACT_EMAIL}}.</p>
    `
}
```

## 🍪 Cookie Policy Integration

```javascript
{
    enabled: true,
    title: "Cookies and Tracking Technologies",
    content: `
        <p>We use cookies and similar tracking technologies to enhance your browsing experience.</p>
        
        <h3>Types of Cookies We Use</h3>
        <ul>
            <li><strong>Essential Cookies:</strong> Necessary for website function</li>
            <li><strong>Analytics Cookies:</strong> Help us understand visitor behavior</li>
            <li><strong>Marketing Cookies:</strong> Used for relevant advertisements</li>
            <li><strong>Preference Cookies:</strong> Remember your settings</li>
        </ul>
        
        <h3>Cookie Management</h3>
        <p>You can control cookie settings in your browser preferences.</p>
        <p>Visit our cookie settings page to customize your preferences.</p>
    `
}
```

## ⚙️ Page Configuration Options

### **🏷️ Page Titles & Headings:**

```javascript
const PRIVACY_CONFIG = {
    tabTitle: "Custom Tab Title | {{BRAND_NAME_TEXT}}",         // ← What shows in browser tab
    pageHeading: "Custom Page Heading",                        // ← What shows as H1 on page
    metaDescription: "Your meta description here...",
    lastUpdated: "January 2025",
    effectiveDate: "January 1, 2025"
};
```

#### **Tab Title (`tabTitle`):**
- ✅ **Shows in browser tab/window title**
- ✅ **Used for SEO and bookmarks**
- ✅ **Supports placeholders** like `{{BRAND_NAME_TEXT}}`
- ✅ **Examples:**
  - `"Privacy Policy | {{BRAND_NAME_TEXT}}"`
  - `"Data Protection | {{BRAND_NAME_TEXT}}"`
  - `"Privacy Notice | {{BRAND_NAME_TEXT}}"`

#### **Page Heading (`pageHeading`):**
- ✅ **Shows as main H1 heading on the page**
- ✅ **What visitors see as the page title**
- ✅ **Can be different from tab title**
- ✅ **Examples:**
  - `"Privacy Policy"`
  - `"Data Protection Notice"`
  - `"How We Protect Your Privacy"`

### **Section Management:**
```javascript
sections: [
    {
        enabled: true,               // Show this section
        title: "Section Title",
        content: `...`
    },
    {
        enabled: false,              // Hide this section
        title: "Hidden Section",
        content: `...`
    }
]
```

## 🎨 Automatic Styling Features

### **Visual Separators:**
```css
/* Automatically applied to all sections */
.legal-section {
    margin-bottom: var(--spacing-2xl);  /* Auto space between sections */
}

.legal-section h2 {
    border-bottom: 2px solid var(--primary-color);  /* Auto underline */
    padding-bottom: var(--spacing-sm);
}
```

### **Responsive Design:**
```css
/* Automatically applied on mobile */
@media (max-width: 768px) {
    .legal-content {
        padding: var(--spacing-xl);
        margin: 0 var(--spacing-md);
    }
    
    .legal-section h2 {
        font-size: var(--font-size-xl);
    }
}
```

## 📚 Quick Setup Steps

1. **✅ Open `utils/privacy-config.js`**
2. **✅ Update `lastUpdated` and `effectiveDate`**
3. **✅ Customize sections for your industry**
4. **✅ Add/remove sections as needed**
5. **✅ Set `enabled: false` for sections you don't need**
6. **✅ Test all placeholder replacements**
7. **✅ Verify responsive design**

## 🔥 Advanced Examples

### **Data Retention Policy:**
```javascript
{
    enabled: true,
    title: "Data Retention",
    content: `
        <p>We retain your personal information only as long as necessary.</p>
        
        <h3>Retention Periods</h3>
        <ul>
            <li><strong>Newsletter subscriptions:</strong> Until you unsubscribe</li>
            <li><strong>Analytics data:</strong> Up to 26 months (Google Analytics default)</li>
            <li><strong>Contact form data:</strong> Up to 2 years</li>
            <li><strong>Legal compliance data:</strong> As required by applicable laws</li>
        </ul>
        
        <h3>Data Deletion</h3>
        <p>You can request deletion of your data by contacting {{CONTACT_EMAIL}}.</p>
    `
}
```

### **International Data Transfers:**
```javascript
{
    enabled: true,
    title: "International Data Transfers",
    content: `
        <p>Your information may be transferred to and processed in countries other than your own.</p>
        
        <h3>Safeguards for International Transfers</h3>
        <ul>
            <li>Standard Contractual Clauses (SCCs)</li>
            <li>Adequacy decisions by relevant authorities</li>
            <li>Certification schemes and codes of conduct</li>
        </ul>
        
        <p>We ensure that such transfers comply with applicable data protection laws.</p>
    `
}
```

## 🎯 Best Practices

### **Content Guidelines:**
- ✅ **Use Clear Language:** Avoid complex legal jargon
- ✅ **Include Examples:** Use concrete scenarios  
- ✅ **Regular Updates:** Review every 6 months
- ✅ **Mobile-First:** Test on small screens

### **Legal Compliance:**
- ✅ **Professional Review:** Have lawyer review annually
- ✅ **Industry Standards:** Follow niche-specific requirements
- ✅ **Jurisdiction Laws:** Comply with local regulations
- ✅ **Record Keeping:** Track changes and update dates

### **User Experience:**
- ✅ **Logical Order:** Start with data collection, end with contact
- ✅ **Scannable Content:** Use headings and bullet points
- ✅ **Contact Integration:** Make it easy to ask questions
- ✅ **Search Functionality:** Consider adding search for long policies

**The new dynamic privacy policy system ensures legal compliance while providing maximum flexibility and automatic styling! 🎯✨** 