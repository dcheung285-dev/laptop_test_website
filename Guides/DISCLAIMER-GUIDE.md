# Disclaimer Page Configuration Guide

## 🎯 Overview

The disclaimer page is **fully dynamic** and uses a **dedicated configuration file** for easy section management. All content, placeholders, and styling are automatically managed with **automatic styling and separators**.

## 📁 File Structure

```
disclaimer.html               ← Disclaimer page (auto-populated)
utils/disclaimer-config.js    ← 🆕 DEDICATED Disclaimer configuration  
utils/brand-config.js         ← Brand information
utils/contact-faq-config.js   ← Contact information
utils/config.js               ← Site-wide settings
```

**🎯 SIMPLIFIED SYSTEM:** Each legal page uses only its own dedicated config file!

**🎯 NEW SYSTEM:** Disclaimer page now has its own dedicated config file with automatic section management!

## 🔧 Primary Configuration: `disclaimer-config.js`

**📁 DEDICATED CONFIG FILE!** This file contains all the disclaimer content and settings:

```javascript
const DISCLAIMER_CONFIG = {
    enabled: true,
    tabTitle: "Disclaimer | {{BRAND_NAME_TEXT}}",               // ← Browser tab title
    pageHeading: "Disclaimer & Affiliate Disclosure",          // ← Main page heading (H1)
    metaDescription: "Disclaimer for {{BRAND_NAME_TEXT}} - {{PRODUCT_TYPE}} reviews, affiliate links, and legal information.",
    lastUpdated: "January 2025",
    effectiveDate: "January 1, 2025",
    
    // ========== DISCLAIMER SECTIONS ==========
    // 📝 Add/remove/reorder sections here - numbering is automatic!
    sections: [
        {
            enabled: true,
            title: "General Information",
            content: `
                <p>This disclaimer governs your use of {{BRAND_NAME_TEXT}} ({{SITE_URL}})...</p>
                <p>The information provided is for general informational purposes only...</p>
            `
        },
        {
            enabled: true,
            title: "Affiliate Marketing Disclosure",
            content: `
                <h3>FTC Compliance</h3>
                <p>{{BRAND_NAME_TEXT}} participates in affiliate marketing programs...</p>
                <ul>
                    <li>We receive compensation for referring traffic</li>
                    <li>This helps support our research and content creation</li>
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
const DISCLAIMER_CONFIG = {
    sections: [
        // ... existing sections ...
        {
            enabled: true,
            title: "Your New Disclaimer Section",
            content: `
                <p>New disclaimer content with {{PRODUCT_TYPE}} placeholders.</p>
                <h3>Subsection Title</h3>
                <p>Additional details about your {{NICHE}} business.</p>
                <ul>
                    <li>Important point 1</li>
                    <li>Important point 2</li>
                </ul>
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

### **Method 2: Industry-Specific Disclaimers**

#### **Gaming/Casino Site:**
```javascript
{
    enabled: true,
    title: "Gambling Disclaimer",
    content: `
        <h3>Entertainment Purposes Only</h3>
        <p>{{BRAND_NAME_TEXT}} provides information about {{PRODUCT_TYPE}} for entertainment purposes.</p>
        
        <h3>Responsible Gaming</h3>
        <ul>
            <li>Gambling can be addictive. Please gamble responsibly.</li>
            <li>Players must be 18+ and comply with local laws.</li>
            <li>If you have a gambling problem, seek help immediately.</li>
        </ul>
        
        <h3>Regulatory Compliance</h3>
        <p>Gaming laws vary by jurisdiction. Ensure you comply with local regulations.</p>
    `
}
```

#### **Software Reviews:**
```javascript
{
    enabled: true,
    title: "Software Testing Disclaimer", 
    content: `
        <h3>Independent Testing</h3>
        <p>{{BRAND_NAME_TEXT}} reviews and tests {{PRODUCT_TYPE}} independently.</p>
        
        <h3>System Compatibility</h3>
        <ul>
            <li>Software performance may vary based on your system configuration</li>
            <li>Always backup your data before installing new software</li>
            <li>Check system requirements before purchase</li>
        </ul>
        
        <h3>No Warranties</h3>
        <p>We cannot guarantee software will work perfectly on all systems.</p>
    `
}
```

#### **Health/Wellness Products:**
```javascript
{
    enabled: true,
    title: "Medical Disclaimer",
    content: `
        <h3>Not Medical Advice</h3>
        <p>Information on {{BRAND_NAME_TEXT}} is for educational purposes only.</p>
        <p>{{PRODUCT_TYPE}} recommendations are not medical advice.</p>
        
        <h3>Professional Consultation</h3>
        <ul>
            <li>Consult healthcare professionals before making health decisions</li>
            <li>Always read product labels and warnings</li>
            <li>Stop use if you experience adverse reactions</li>
        </ul>
        
        <h3>FDA Disclaimer</h3>
        <p>Statements have not been evaluated by the FDA. Products are not intended to diagnose, treat, cure, or prevent any disease.</p>
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
    title: "Third-Party Links",
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
        title: "General Information",  // Now section 2
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

## 🔗 Advanced Disclaimer Examples

### **Affiliate Marketing Section:**
```javascript
{
    enabled: true,
    title: "Affiliate Marketing Disclosure",
    content: `
        <h3>FTC Compliance</h3>
        <p>{{BRAND_NAME_TEXT}} participates in affiliate marketing programs. When you click on links to {{PRODUCT_TYPE}} and make a purchase, we may receive a commission.</p>
        
        <h3>Material Connection</h3>
        <ul>
            <li>We receive compensation for referring traffic and business</li>
            <li>This helps support our research, testing, and content creation</li>
            <li>You pay the same price whether you use our links or not</li>
            <li>Our affiliate relationships do not influence our reviews</li>
        </ul>
        
        <h3>Editorial Independence</h3>
        <p>We maintain editorial independence and provide honest, unbiased reviews based on:</p>
        <ul>
            <li>Thorough testing and research</li>
            <li>Industry expertise and experience</li>
            <li>User feedback and community input</li>
            <li>Objective evaluation criteria</li>
        </ul>
    `
}
```

### **Limitation of Liability:**
```javascript
{
    enabled: true,
    title: "Limitation of Liability",
    content: `
        <h3>No Liability for Decisions</h3>
        <p>{{BRAND_NAME_TEXT}} and its team members are not liable for any decisions you make based on information found on our website.</p>
        
        <h3>Use at Your Own Risk</h3>
        <p>Your use of {{SITE_URL}} and any {{PRODUCT_TYPE}} you choose is at your own risk. We are not responsible for:</p>
        <ul>
            <li>Financial losses or damages</li>
            <li>Technical problems or issues</li>
            <li>Unsatisfactory experiences with products or services</li>
            <li>Changes in terms, pricing, or availability</li>
        </ul>
        
        <h3>Professional Advice</h3>
        <p>The information on our website is not intended to replace professional advice. For important decisions, consider consulting with qualified professionals.</p>
    `
}
```

### **Intellectual Property:**
```javascript
{
    enabled: true,
    title: "Intellectual Property",
    content: `
        <h3>Our Content</h3>
        <p>All content on {{BRAND_NAME_TEXT}}, including text, images, logos, and design elements, is protected by copyright and other intellectual property laws.</p>
        
        <h3>Permitted Use</h3>
        <p>You may:</p>
        <ul>
            <li>View and read our content for personal use</li>
            <li>Share links to our articles and reviews</li>
            <li>Quote brief excerpts with proper attribution</li>
        </ul>
        
        <h3>Prohibited Use</h3>
        <p>You may not:</p>
        <ul>
            <li>Copy or reproduce substantial portions of our content</li>
            <li>Use our content for commercial purposes without permission</li>
            <li>Remove or alter copyright notices or attributions</li>
            <li>Create derivative works based on our content</li>
        </ul>
    `
}
```

## ⚙️ Page Configuration Options

### **🏷️ Page Titles & Headings:**

```javascript
const DISCLAIMER_CONFIG = {
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
  - `"Disclaimer | {{BRAND_NAME_TEXT}}"`
  - `"Legal Notice | {{BRAND_NAME_TEXT}}"`
  - `"Terms & Conditions | {{BRAND_NAME_TEXT}}"`

#### **Page Heading (`pageHeading`):**
- ✅ **Shows as main H1 heading on the page**
- ✅ **What visitors see as the page title**
- ✅ **Can be different from tab title**
- ✅ **Examples:**
  - `"Disclaimer & Affiliate Disclosure"`
  - `"Legal Notice"`
  - `"Terms of Use"`

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

1. **✅ Open `utils/disclaimer-config.js`**
2. **✅ Update `lastUpdated` and `effectiveDate`**
3. **✅ Customize sections for your industry/niche**
4. **✅ Add/remove sections as needed**
5. **✅ Set `enabled: false` for sections you don't need**
6. **✅ Test all placeholder replacements**
7. **✅ Verify responsive design**

## 🚨 Legal Considerations by Industry

### **Required Disclaimers:**

#### **Affiliate Marketing (All Sites):**
- ✅ **FTC Compliance**: Clear affiliate link disclosure
- ✅ **Material Connection**: Explain compensation
- ✅ **Product Testing**: Describe review process

#### **Gambling/Gaming Sites:**
- ✅ **Age Restrictions**: 18+ requirements
- ✅ **Jurisdiction Compliance**: Local gambling laws
- ✅ **Responsible Gaming**: Addiction resources

#### **Health/Medical Content:**
- ✅ **Medical Disclaimer**: Not medical advice
- ✅ **FDA Compliance**: Supplement disclaimers
- ✅ **Professional Consultation**: Recommend expert advice

### **Regular Updates:**
```javascript
// Set regular review schedule
const DISCLAIMER_CONFIG = {
    lastUpdated: "January 2025",
    nextReview: "July 2025",     // 6-month review cycle
    version: "2.1"               // Track version changes
};
```

## 🎯 Best Practices

### **Content Guidelines:**
- ✅ **Clear Language**: Avoid legal jargon when possible
- ✅ **Specific Examples**: Use concrete scenarios
- ✅ **Regular Updates**: Review every 6 months
- ✅ **Mobile Friendly**: Test on small screens

### **Legal Compliance:**
- ✅ **Professional Review**: Have lawyer review annually
- ✅ **Industry Standards**: Follow niche-specific requirements
- ✅ **Jurisdiction Laws**: Comply with local regulations
- ✅ **Record Keeping**: Track changes and update dates

### **User Experience:**
- ✅ **Logical Flow**: Start with general info, end with contact
- ✅ **Scannable Content**: Use headings and bullet points
- ✅ **Contact Integration**: Make it easy to ask questions
- ✅ **Cross-References**: Link to privacy policy where relevant

**The new dynamic disclaimer system ensures legal compliance while providing maximum flexibility and automatic styling! 🎯✨** 