# 📞 Contact & FAQ Configuration Guide

This guide covers everything you need to know about configuring your contact page and FAQ section using the `utils/contact-faq-config.js` file.

## 🎯 Quick Start - The "ONE LINE" Approach

For most users, you only need to edit these lines at the top of `utils/contact-faq-config.js`:

```javascript
// ========== CONTACT PAGE HERO SECTION ==========
const CONTACT_HERO = {
    title: "Get in Touch",                    // ← Change page title
    subtitle: "Have questions about..."       // ← Change description
};

// ========== CONTACT FORM CONFIGURATION ==========
const CONTACT_FORM = {
    actionUrl: "https://formspree.io/f/YOUR_FORM_ID",  // ← Where form gets sent
};

// ========== CONTACT INFORMATION ==========
const CONTACT_INFO = {
    email: "{{Contact Email}}",              // ← Your email
    phone: "{{Phone Number}}",               // ← Your phone
    address: "{{Address}}",                  // ← Your address
    responseTime: "{{Response Time}}",       // ← Response time
};

// 🆕 NEW: CTA Box Configuration
const CONTACT_CTA_BOX = {
    title: "Ready to Find the Best Products?",        // ← CTA box title
    subtitle: "Check out our expertly curated Top 10 list!", // ← CTA box subtitle
    buttonText: "View Our Top 10 Rankings",           // ← Button text
    buttonLink: "./index.html#top10",                 // ← Button destination
    titleIcon: "fas fa-trophy",                       // ← Title icon
    buttonIcon: "fas fa-star",                        // ← Button icon
    showTitleIcon: true,                              // ← Show/hide title icon
    showButtonIcon: true                              // ← Show/hide button icon
};
```

**That's it!** Everything else automatically updates based on these settings.

## 📊 Configuration Sections

### 1. **CONTACT_HERO** - Page Header Content

```javascript
const CONTACT_HERO = {
    title: "Get in Touch",                              // ← Main page title
    subtitle: "Have questions about our reviews? Need help choosing the right product? We're here to help you make the best decision."  // ← Page description
};
```

**What it controls:**
- The main heading on the contact page
- The subtitle text below the heading
- Appears in the hero section at the top

### 2. **CONTACT_FORM** - Form Configuration

```javascript
const CONTACT_FORM = {
    // Where the form gets sent
    actionUrl: "https://formspree.io/f/YOUR_FORM_ID",    // ← Your form submission URL
    method: "POST",                                      // ← Form method
    
    // Subject dropdown options
    subjectOptions: [
        { value: "", text: "Select a topic" },          // ← Default option
        { value: "product-question", text: "Product Question" },
        { value: "review-request", text: "Review Request" },
        { value: "partnership", text: "Partnership Inquiry" },
        { value: "technical-issue", text: "Technical Issue" },
        { value: "general-inquiry", text: "General Inquiry" },
        { value: "other", text: "Other" }
    ],
    
    // Form labels and placeholders
    labels: {
        name: "Name *",
        email: "Email *",
        subject: "Subject *",
        message: "Message *"
    },
    
    placeholders: {
        message: "Tell us how we can help you..."
    },
    
    // Submit button text
    submitText: "Send Message",
    loadingText: "Sending...",
    successText: "Message Sent!"
};
```

**What it controls:**
- Form submission URL (where emails get sent)
- Dropdown subject options
- Form field labels
- Placeholder text
- Button text states

### 3. **CONTACT_INFO** - Contact Information Display

```javascript
const CONTACT_INFO = {
    email: "{{Contact Email}}",                         // ← Your email address
    phone: "{{Phone Number}}",                          // ← Your phone number
    address: "{{Address}}",                             // ← Your physical address
    responseTime: "{{Response Time}}",                  // ← How quickly you respond
    
    // Social media links
    socialMedia: {
        facebook: "https://facebook.com/yourpage",      // ← Facebook page
        twitter: "https://twitter.com/yourhandle",      // ← Twitter handle
        instagram: "https://instagram.com/yourprofile", // ← Instagram profile
        youtube: "https://youtube.com/yourchannel"      // ← YouTube channel
    }
};
```

**What it controls:**
- Contact information cards on the right side
- Email, phone, address display
- Response time information
- Social media links

### 4. **FAQ_CONFIG** - Frequently Asked Questions

```javascript
const FAQ_CONFIG = {
    title: "Frequently Asked Questions",               // ← FAQ section title
    subtitle: "Quick answers to common questions",     // ← FAQ section subtitle
    
    // FAQ items - add/edit/remove as needed
    items: [
        {
            question: "How do you test products?",
            answer: "We thoroughly test each product for weeks, evaluating performance, durability, features, and value. Our reviews are based on real-world usage, not just specifications."
        },
        {
            question: "Are your reviews unbiased?",
            answer: "Yes, our reviews are completely honest and unbiased. We only recommend products we genuinely believe in, regardless of affiliate commissions. Our reputation depends on your trust."
        }
        // ... add more FAQ items
    ]
};
```

**What it controls:**
- FAQ section title and subtitle
- All FAQ questions and answers
- Number of FAQ items displayed

## 🚀 Setup Examples

### Example 1: Coffee Equipment Review Site
```javascript
const CONTACT_HERO = {
    title: "Contact Coffee Experts",
    subtitle: "Questions about coffee makers? Need brewing advice? Our coffee experts are here to help you find the perfect equipment for your daily brew."
};

const CONTACT_INFO = {
    email: "hello@coffeeexperts.com",
    phone: "+1 (555) COFFEE-1",
    address: "123 Brew Street, Coffee City, CA 90210",
    responseTime: "12 hours"
};
```

### Example 2: Gaming Laptop Reviews
```javascript
const CONTACT_HERO = {
    title: "Get Gaming Advice",
    subtitle: "Need help choosing the perfect gaming laptop? Our gaming experts have tested hundreds of laptops and can help you find your ideal setup."
};

const CONTACT_INFO = {
    email: "support@gaminglaptops.com",
    phone: "+1 (555) GAME-PRO",
    address: "456 Gaming Blvd, Tech Valley, TX 75001",
    responseTime: "6 hours"
};
```

### Example 3: Fitness Equipment Reviews
```javascript
const CONTACT_HERO = {
    title: "Fitness Equipment Help",
    subtitle: "Building a home gym? Need equipment recommendations? Our fitness experts can help you choose the right gear for your fitness goals."
};

const CONTACT_INFO = {
    email: "info@fitnessgear.com",
    phone: "+1 (555) FIT-GEAR",
    address: "789 Fitness Ave, Muscle City, FL 33101",
    responseTime: "24 hours"
};
```

## 📧 Form Submission Setup

### Option 1: Formspree (Recommended)
1. Go to [formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form
4. Copy your form endpoint
5. Update the config:

```javascript
const CONTACT_FORM = {
    actionUrl: "https://formspree.io/f/xpzgkqyw",  // ← Your actual Formspree endpoint
    method: "POST"
};
```

### Option 2: Netlify Forms
```javascript
const CONTACT_FORM = {
    actionUrl: "/contact",  // ← Netlify handles this automatically
    method: "POST"
};
```

### Option 3: Custom Form Handler
```javascript
const CONTACT_FORM = {
    actionUrl: "https://yourapi.com/contact",  // ← Your custom API endpoint
    method: "POST"
};
```

## 🎨 Customizing Subject Options

### Default Options
```javascript
subjectOptions: [
    { value: "", text: "Select a topic" },
    { value: "product-question", text: "Product Question" },
    { value: "review-request", text: "Review Request" },
    { value: "partnership", text: "Partnership Inquiry" },
    { value: "technical-issue", text: "Technical Issue" },
    { value: "general-inquiry", text: "General Inquiry" },
    { value: "other", text: "Other" }
]
```

### Custom Options Example
```javascript
subjectOptions: [
    { value: "", text: "How can we help?" },
    { value: "product-recommendation", text: "Product Recommendation" },
    { value: "technical-support", text: "Technical Support" },
    { value: "business-inquiry", text: "Business Inquiry" },
    { value: "media-press", text: "Media & Press" },
    { value: "feedback", text: "Website Feedback" },
    { value: "other", text: "Something Else" }
]
```

## ❓ Managing FAQ Items

### Adding New FAQ Items
```javascript
items: [
    // Existing items...
    {
        question: "Do you accept product samples?",
        answer: "Yes, we accept product samples from manufacturers. However, receiving a sample doesn't guarantee a review or positive coverage. All reviews remain unbiased."
    },
    {
        question: "How can I advertise on your site?",
        answer: "We offer various advertising opportunities including sponsored content, banner ads, and newsletter placements. Contact us for our media kit and pricing."
    }
]
```

### FAQ Categories Example
```javascript
items: [
    // Product Reviews
    {
        question: "How do you test products?",
        answer: "We conduct thorough testing over several weeks..."
    },
    {
        question: "Are your reviews unbiased?",
        answer: "Yes, all our reviews are completely honest..."
    },
    
    // Business Inquiries
    {
        question: "Do you offer partnerships?",
        answer: "We're open to partnerships with quality brands..."
    },
    {
        question: "Can brands sponsor content?",
        answer: "We offer sponsored content opportunities..."
    },
    
    // Technical Support
    {
        question: "Why isn't the website loading?",
        answer: "If you're experiencing technical issues..."
    }
]
```

## 🎯 Social Media Configuration

### Complete Social Setup
```javascript
socialMedia: {
    facebook: "https://facebook.com/yourpage",
    twitter: "https://twitter.com/yourhandle",
    instagram: "https://instagram.com/yourprofile",
    youtube: "https://youtube.com/yourchannel",
    linkedin: "https://linkedin.com/company/yourcompany",
    tiktok: "https://tiktok.com/@yourhandle"
}
```

### Minimal Social Setup
```javascript
socialMedia: {
    twitter: "https://twitter.com/yourhandle",
    youtube: "https://youtube.com/yourchannel"
    // Only include the platforms you actually use
}
```

## 🔧 Advanced Customization

### Custom Form Labels
```javascript
labels: {
    name: "Full Name *",
    email: "Email Address *",
    subject: "Inquiry Type *",
    message: "Your Message *"
}
```

### Custom Placeholders
```javascript
placeholders: {
    message: "Please describe your question or request in detail..."
}
```

### Custom Button Text
```javascript
submitText: "Send My Message",
loadingText: "Submitting...",
successText: "Thanks! We'll be in touch soon."
```

## 🚨 Common Issues & Solutions

### Issue: Form not submitting
**Solution**: Check your `actionUrl` in the CONTACT_FORM configuration:
```javascript
// Make sure this is your actual form endpoint, not the placeholder
actionUrl: "https://formspree.io/f/YOUR_ACTUAL_FORM_ID"
```

### Issue: Contact info not showing
**Solution**: Make sure you've replaced the placeholder values:
```javascript
// Replace these placeholders with actual values
email: "contact@yoursite.com",  // Not "{{Contact Email}}"
phone: "+1 (555) 123-4567",     // Not "{{Phone Number}}"
```

### Issue: FAQ items not appearing
**Solution**: Check the FAQ_CONFIG.items array syntax:
```javascript
items: [
    {
        question: "Your question?",
        answer: "Your answer."
    },  // ← Don't forget the comma between items
    {
        question: "Another question?",
        answer: "Another answer."
    }   // ← No comma after the last item
]
```

## 📝 Testing Your Configuration

### Console Commands
Open browser console on the contact page and test:
```javascript
// Check if config is loaded
console.log(window.CONTACT_HERO);
console.log(window.CONTACT_FORM);
console.log(window.CONTACT_INFO);
console.log(window.FAQ_CONFIG);

// Test form submission URL
console.log('Form will submit to:', window.CONTACT_FORM.actionUrl);
```

### Quick Test Checklist
- [ ] Hero title and subtitle appear correctly
- [ ] Contact information displays properly
- [ ] Subject dropdown has your custom options
- [ ] FAQ items show your questions and answers
- [ ] Social media links work
- [ ] Form submission URL is configured
- [ ] All placeholder text is replaced

## 🎯 Best Practices

### 1. **Keep FAQ Items Relevant**
- Focus on questions your actual customers ask
- Update regularly based on common inquiries
- Keep answers concise but helpful

### 2. **Optimize Response Times**
- Set realistic response time expectations
- Update if your response times change
- Consider different response times for different inquiry types

### 3. **Professional Contact Information**
- Use a professional email address
- Include a real phone number if possible
- Keep address information current

### 4. **Form Optimization**
- Use clear, specific subject options
- Keep the form simple and focused
- Test form submission regularly

## 🆕 NEW: Contact CTA Box Configuration

The contact page now includes a configurable CTA (Call-to-Action) box that appears after the FAQ section.

### CTA Box Configuration

Configure in `utils/contact-faq-config.js`:

```javascript
const CONTACT_CTA_BOX = {
    title: "Ready to Find the Best Products?",        // Main CTA title
    subtitle: "Check out our expertly curated Top 10 list!", // CTA description
    
    // Button configuration
    buttonText: "View Our Top 10 Rankings",           // Button text
    buttonLink: "./index.html#top10",                 // Button destination URL
    
    // Icon configuration (FontAwesome classes)
    titleIcon: "fas fa-trophy",                       // Icon before title
    buttonIcon: "fas fa-star",                        // Icon in button
    
    // Visibility toggles
    showTitleIcon: true,                              // Show/hide title icon
    showButtonIcon: true                              // Show/hide button icon
};
```

### CTA Box Customization Examples

**For Software Reviews:**
```javascript
title: "Ready to Find the Best Software?",
subtitle: "Discover our top-rated applications and tools!",
titleIcon: "fas fa-laptop-code",
buttonIcon: "fas fa-download",
buttonText: "View Our Top Apps",
buttonLink: "./index.html#software-reviews"
```

**For Restaurant Reviews:**
```javascript
title: "Hungry for the Best Restaurants?",
subtitle: "Explore our carefully selected dining recommendations!",
titleIcon: "fas fa-utensils",
buttonIcon: "fas fa-map-marker-alt",
buttonText: "Find Great Restaurants",
buttonLink: "./index.html#restaurant-guide"
```

**Minimal Version (No Icons):**
```javascript
title: "Explore Our Reviews",
subtitle: "Find the best options for your needs.",
buttonText: "View All Reviews",
showTitleIcon: false,
showButtonIcon: false
```

### Available FontAwesome Icons

**Common CTA Icons:**
- `fas fa-trophy` - Trophy (awards, rankings)
- `fas fa-star` - Star (ratings, favorites)
- `fas fa-chart-bar` - Chart (comparisons, analytics)
- `fas fa-thumbs-up` - Thumbs up (recommendations)
- `fas fa-crown` - Crown (premium, best)
- `fas fa-rocket` - Rocket (fast, innovative)
- `fas fa-fire` - Fire (hot deals, trending)
- `fas fa-gem` - Gem (premium quality)

**Industry-Specific Icons:**
- `fas fa-laptop-code` - Software/Tech
- `fas fa-utensils` - Restaurants/Food
- `fas fa-gamepad` - Gaming
- `fas fa-car` - Automotive
- `fas fa-home` - Real Estate/Home
- `fas fa-plane` - Travel
- `fas fa-dumbbell` - Fitness/Sports
- `fas fa-graduation-cap` - Education

### CTA Box Features

**Automatic Integration:**
- ✅ Dynamically inserted into contact page
- ✅ Fully responsive design
- ✅ Matches site theme colors
- ✅ Smooth hover animations
- ✅ Accessible keyboard navigation

**Customization Options:**
- ✅ Custom title and subtitle text
- ✅ Configurable button text and link
- ✅ FontAwesome icon support
- ✅ Icon visibility toggles
- ✅ Multiple pre-built examples

**Design Features:**
- ✅ Gradient background using theme colors
- ✅ Card-style layout with rounded corners
- ✅ Icon and text alignment
- ✅ Hover effects for engagement
- ✅ Mobile-optimized layout

## 💡 Pro Tips

- **Start simple**: Begin with basic settings, then customize
- **Test frequently**: Check changes in browser after each edit
- **Use real data**: Replace all placeholder values
- **Monitor submissions**: Check that form submissions work
- **Update regularly**: Keep FAQ items and contact info current
- **CTA placement**: The CTA box appears after FAQ to capture engaged users
- **Icon consistency**: Use icons that match your brand and industry
- **Button destination**: Link to your most important conversion page

## 🔗 Integration with Other Configs

The contact-faq-config.js works alongside:
- **brand-config.js**: For brand name and colors
- **nav-config.js**: For navigation links
- **config.js**: For main site settings

All configs work together automatically!

---

**Need help?** Check the browser console for any error messages, and make sure all your placeholder values are replaced with real information before going live! 