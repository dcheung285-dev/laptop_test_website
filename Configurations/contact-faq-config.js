/*
===========================================
CONTACT & FAQ CONFIGURATION
===========================================
🎯 CHANGE YOUR CONTACT PAGE SETTINGS HERE - EDIT THESE LINES ONLY:
*/

// ========== PAGE TITLE CONFIGURATION ==========
const CONTACT_PAGE_TITLE = "Contact Us | {{BRAND_NAME}}";     // ← Contact page browser tab title

// ========== CONTACT PAGE HERO SECTION ==========
const CONTACT_HERO = {
    title: "Get in Touch",                                    // ← Contact page main title
    subtitle: "Have questions about our gaming laptop reviews? Need help choosing the perfect laptop? We're here to help you find the ideal gaming machine for your needs."  // ← Contact page description
};

// ========== CONTACT FORM CONFIGURATION ==========
const CONTACT_FORM = {
    // Where the form gets sent (replace with your actual form handler)
    actionUrl: "https://formspree.io/f/YOUR_FORM_ID",          // ← Your form submission URL
    method: "POST",                                            // ← Form method
    // Optional: Google Apps Script Web App endpoint for Google Sheets logging
    // Deploy a Web App from your sheet and paste the URL below
    sheetsWebhookUrl: "https://script.google.com/macros/s/AKfycbxJWGkLSQ5HJE72ZqMu2_N4Do1SsGgA_7ywD0JTVQFPVLmaeS8Hh0FUg2CbP6sPtC93Uw/exec", 
    
    // Subject dropdown options
    subjectOptions: [
        { value: "", text: "Select a topic" },                // ← Default option
        { value: "laptop-question", text: "Gaming Laptop Question" },
        { value: "performance-inquiry", text: "Performance & Specs Inquiry" },
        { value: "buying-question", text: "Laptop Buying Question" },
        { value: "review-request", text: "Laptop Review Request" },
        { value: "partnership", text: "Brand Partnership Inquiry" },
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
        message: "Tell us about your gaming laptop question or how we can help you find the perfect laptop..."
    },
    
    // Submit button text
    submitText: "Send Message",
    loadingText: "Sending...",
    successText: "Message Sent!"
};

// ========== CTA BOX CONFIGURATION ==========
const CONTACT_CTA_BOX = {
    title: "Ready to Find the Best Gaming Laptops?",              // ← CTA box main title
    subtitle: "Check out our expertly reviewed Top 10 gaming laptop recommendations!", // ← CTA box description
    
    // Icon configuration (FontAwesome classes)
    titleIcon: "fas fa-laptop",                              // ← Icon before title
    buttonIcon: "fas fa-star",                               // ← Icon in button
    
    // Button configuration
    buttonText: "View Our Top 10 Gaming Laptops",                 // ← Button text
    buttonLink: "./index.html#index.html",                       // ← Button destination link
    
    // Styling options
    showTitleIcon: true,                                     // ← Show/hide title icon
    showButtonIcon: true                                     // ← Show/hide button icon
};

/*
🎯 EXAMPLE CUSTOMIZATIONS:

// For a software review site:
title: "Ready to Find the Best Software?",
subtitle: "Discover our top-rated applications and tools!",
titleIcon: "fas fa-laptop-code",
buttonIcon: "fas fa-download",
buttonText: "View Our Top Apps",

// For a restaurant review site:
title: "Hungry for the Best Restaurants?",
subtitle: "Explore our carefully selected dining recommendations!",
titleIcon: "fas fa-utensils",
buttonIcon: "fas fa-map-marker-alt",
buttonText: "Find Great Restaurants",

// Minimal version (no icons):
showTitleIcon: false,
showButtonIcon: false,
title: "Explore Our Reviews",
subtitle: "Find the best options for your needs.",
buttonText: "View All Reviews"
*/

// ========== CONTACT INFORMATION ==========
const CONTACT_INFO = {
    email: "contact@LaptopWorld.com",                            // ← Your contact email "eg. contact@yoursite.com"
    phone: "020 7946 0000",                              // ← Your phone number "eg. +1 (555) 123-4567"
    address: "888 Main St, London, UK",               // ← Your address "eg. 123 Main St, City, State 12345"
    responseTime: "1-2 hours",                                 // ← Typical response time "eg. 24 hours"
    
    // Social media links
    socialMedia: {
        facebook: "https://facebook.com/yourpage",           // ← Your Facebook page
        x: "https://x.com/yourhandle",                       // ← Your X (formerly Twitter) handle
        instagram: "https://instagram.com/yourprofile",      // ← Your Instagram profile
        youtube: "https://youtube.com/yourchannel"           // ← Your YouTube channel
    }
};

// ========== FAQ CONFIGURATION ==========
const FAQ_CONFIG = {
    title: "Frequently Asked Questions",                     // ← FAQ section title
    subtitle: "Quick answers to common gaming laptop questions",           // ← FAQ section subtitle
    
    // FAQ items - add/edit/remove as needed
    items: [
        {
            question: "How do you test gaming laptops?",
            answer: "We thoroughly test each gaming laptop for performance, build quality, display quality, battery life, thermal management, and user experience. Our reviews include benchmark testing, real-world gaming sessions, and long-term reliability assessment."
        },
        {
            question: "Are your laptop reviews unbiased?",
            answer: "Yes, our reviews are completely honest and unbiased. We only recommend laptops that meet our strict performance and quality standards, regardless of affiliate commissions. We test every laptop extensively before making recommendations."
        },
        {
            question: "What should I look for in a gaming laptop?",
            answer: "Key factors include a powerful GPU (RTX 4060 or better), sufficient RAM (16GB minimum), fast storage (SSD), good cooling system, high refresh rate display (144Hz+), and reliable build quality. We evaluate all these aspects in our reviews."
        },
        {
            question: "How much should I spend on a gaming laptop?",
            answer: "Gaming laptops range from £800 for entry-level to £4000+ for premium models. For solid 1080p gaming, expect £1200-2000. For 1440p/4K gaming, budget £2000-3500. We provide clear value recommendations in each price category."
        },
        {
            question: "Which brands make the best gaming laptops?",
            answer: "Top gaming laptop brands include ASUS ROG, MSI, Razer, Dell Alienware, HP Omen, Acer Predator, and Lenovo Legion. Each has strengths in different areas - we highlight the best models from each manufacturer in our reviews."
        },
        {
            question: "How important is display quality for gaming?",
            answer: "Display quality is crucial for gaming. Look for high refresh rates (144Hz-240Hz), low input lag, good color accuracy, and appropriate resolution. We test display performance extensively and recommend the best gaming displays in each category."
        },
        {
            question: "Do gaming laptops have good battery life?",
            answer: "Gaming laptops typically have 3-6 hours of general use and 1-3 hours while gaming. Some ultrabooks with gaming capability offer 8+ hours for productivity tasks. We clearly indicate battery performance in each review."
        },
        {
            question: "Can you review a specific gaming laptop?",
            answer: "Absolutely! We love hearing from our community. Send us your suggestions using the form above, and we'll consider it for our next review cycle if it meets our testing criteria and availability."
        }
    ]
};

/*
===========================================
Everything below automatically uses the settings above.
Don't edit below unless you need advanced customization.
===========================================
*/

// ===========================================
// CONTACT PAGE FUNCTIONALITY
// ===========================================

class ContactPageManager {
    constructor() {
        this.init();
    }
    
    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }
    
    setup() {
        this.applyPageTitle();
        this.loadContactContent();
        this.setupContactForm();
        this.loadContactInfo();
        this.loadFAQContent();
        
        console.log('✅ Contact page configuration loaded');
    }
    
    /**
     * Apply page title to browser tab
     */
    applyPageTitle() {
        // Only apply contact page title if we're actually on the contact page
        const currentPage = window.location.pathname.toLowerCase();
        const isContactPage = currentPage.includes('contact.html') || currentPage.includes('contact');
        
        if (!isContactPage) {
            return; // Don't apply contact title to other pages
        }
        
        const title = document.querySelector('title');
        if (title) {
            // Replace {{BRAND_NAME}} with actual brand name
            let pageTitle = CONTACT_PAGE_TITLE;
            
            // Try to get brand name from brand-config.js
            if (typeof window.BRAND_NAME !== 'undefined') {
                pageTitle = pageTitle.replace('{{BRAND_NAME}}', window.BRAND_NAME);
            } else if (typeof window.BrandManager !== 'undefined') {
                const brandConfig = window.BrandManager.get();
                pageTitle = pageTitle.replace('{{BRAND_NAME}}', brandConfig.text.name);
            } else if (typeof window.BRAND_CONFIG !== 'undefined') {
                pageTitle = pageTitle.replace('{{BRAND_NAME}}', window.BRAND_CONFIG.text.name);
            } else {
                // Last resort: remove placeholder
                pageTitle = pageTitle.replace(' | {{BRAND_NAME}}', '');
            }
            
            title.textContent = pageTitle;
        }
    }
    
    /**
     * Load contact page content (hero section)
     */
    loadContactContent() {
        // Update hero title
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            heroTitle.textContent = CONTACT_HERO.title;
        }
        
        // Update hero subtitle
        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroSubtitle) {
            heroSubtitle.textContent = CONTACT_HERO.subtitle;
        }
    }
    
    /**
     * Setup contact form with configuration
     */
    setupContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;
        
        // Set form action and method
        form.action = CONTACT_FORM.actionUrl;
        form.method = CONTACT_FORM.method;
        
        // Update subject dropdown options
        const subjectSelect = document.getElementById('subject');
        if (subjectSelect) {
            subjectSelect.innerHTML = '';
            CONTACT_FORM.subjectOptions.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option.value;
                optionElement.textContent = option.text;
                subjectSelect.appendChild(optionElement);
            });
        }
        
        // Update form labels
        this.updateFormLabels();
        
        // Update placeholders
        const messageField = document.getElementById('message');
        if (messageField) {
            messageField.placeholder = CONTACT_FORM.placeholders.message;
        }
        
        // Update submit button text
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            const icon = submitBtn.querySelector('i');
            const iconHTML = icon ? icon.outerHTML : '<i class="fas fa-paper-plane"></i>';
            submitBtn.innerHTML = `${iconHTML} ${CONTACT_FORM.submitText}`;
        }
    }
    
    /**
     * Update form labels
     */
    updateFormLabels() {
        const labels = {
            name: document.querySelector('label[for="name"]'),
            email: document.querySelector('label[for="email"]'),
            subject: document.querySelector('label[for="subject"]'),
            message: document.querySelector('label[for="message"]')
        };
        
        Object.keys(labels).forEach(key => {
            if (labels[key] && CONTACT_FORM.labels[key]) {
                labels[key].textContent = CONTACT_FORM.labels[key];
            }
        });
    }
    
    /**
     * Load contact information from config
     */
    loadContactInfo() {
        // Update email
        const emailElement = document.getElementById('contact-email');
        if (emailElement && CONTACT_INFO.email) {
            emailElement.textContent = CONTACT_INFO.email;
            emailElement.href = `mailto:${CONTACT_INFO.email}`;
        }
        
        // Update phone
        const phoneElement = document.getElementById('contact-phone');
        if (phoneElement && CONTACT_INFO.phone) {
            phoneElement.textContent = CONTACT_INFO.phone;
            phoneElement.href = `tel:${CONTACT_INFO.phone}`;
        }
        
        // Update address
        const addressElement = document.getElementById('contact-address');
        if (addressElement && CONTACT_INFO.address) {
            addressElement.textContent = CONTACT_INFO.address;
        }
        
        // Update response time
        const responseTimeElement = document.querySelector('.contact-info-item:nth-child(4) p:last-child');
        if (responseTimeElement && CONTACT_INFO.responseTime) {
            responseTimeElement.textContent = CONTACT_INFO.responseTime;
        }
        
        // Update social media links
        this.loadSocialLinks();
    }
    
    /**
     * Load social media links
     */
    loadSocialLinks() {
        const socialContainer = document.getElementById('contact-social');
        if (!socialContainer || !CONTACT_INFO.socialMedia) return;
        
        const socialLinks = [];
        
        if (CONTACT_INFO.socialMedia.facebook) {
            socialLinks.push(`<a href="${CONTACT_INFO.socialMedia.facebook}" target="_blank" style="color: var(--primary-color); font-size: var(--font-size-lg);"><i class="fab fa-facebook"></i></a>`);
        }
        
        if (CONTACT_INFO.socialMedia.x) {
            socialLinks.push(`<a href="${CONTACT_INFO.socialMedia.x}" target="_blank" style="color: var(--primary-color); font-size: var(--font-size-lg); font-weight: bold; text-decoration: none;">𝕏</a>`);
        }
        
        if (CONTACT_INFO.socialMedia.instagram) {
            socialLinks.push(`<a href="${CONTACT_INFO.socialMedia.instagram}" target="_blank" style="color: var(--primary-color); font-size: var(--font-size-lg);"><i class="fab fa-instagram"></i></a>`);
        }
        
        if (CONTACT_INFO.socialMedia.youtube) {
            socialLinks.push(`<a href="${CONTACT_INFO.socialMedia.youtube}" target="_blank" style="color: var(--primary-color); font-size: var(--font-size-lg);"><i class="fab fa-youtube"></i></a>`);
        }
        
        socialContainer.innerHTML = socialLinks.join('');
    }
    
    /**
     * Load FAQ content
     */
    loadFAQContent() {
        // Update FAQ title - use more specific selector
        const faqTitle = document.querySelector('.faq-section .section-title, .contact-faq .section-title');
        if (faqTitle) {
            faqTitle.textContent = FAQ_CONFIG.title;
        }
        
        // Update FAQ subtitle - use more specific selector
        const faqSubtitle = document.querySelector('.faq-section .section-subtitle, .contact-faq .section-subtitle');
        if (faqSubtitle) {
            faqSubtitle.textContent = FAQ_CONFIG.subtitle;
        }
        
        // Generate FAQ items
        this.generateFAQItems();
    }
    
    /**
     * Generate FAQ items from configuration
     */
    generateFAQItems() {
        const faqGrid = document.querySelector('.faq-grid');
        if (!faqGrid) return;
        
        // Clear existing FAQ items
        faqGrid.innerHTML = '';
        
        // Generate new FAQ items
        FAQ_CONFIG.items.forEach(item => {
            const faqItem = document.createElement('div');
            faqItem.className = 'faq-item';
            faqItem.style.cssText = 'background: white; padding: var(--spacing-xl); border-radius: var(--border-radius-lg); box-shadow: var(--shadow-sm);';
            
            faqItem.innerHTML = `
                <h3 style="margin-bottom: var(--spacing-md); color: var(--primary-color);">
                    <i class="fas fa-question-circle"></i>
                    ${item.question}
                </h3>
                <p style="color: var(--text-secondary); line-height: 1.6;">
                    ${item.answer}
                </p>
            `;
            
            faqGrid.appendChild(faqItem);
        });
    }
}

// Initialize contact page manager
const contactPageManager = new ContactPageManager();

// Make configurations available globally
if (typeof window !== 'undefined') {
    window.CONTACT_PAGE_TITLE = CONTACT_PAGE_TITLE;
    window.CONTACT_HERO = CONTACT_HERO;
    window.CONTACT_FORM = CONTACT_FORM;
    window.CONTACT_INFO = CONTACT_INFO;
    window.FAQ_CONFIG = FAQ_CONFIG;
    window.CONTACT_CTA_BOX = CONTACT_CTA_BOX;
    window.ContactPageManager = ContactPageManager;
    
    // Unified object for search system compatibility
    window.CONTACT_FAQ_CONFIG = {
        faq: FAQ_CONFIG.items, // Use items array as faq array
        form: CONTACT_FORM,
        hero: CONTACT_HERO,
        info: CONTACT_INFO,
        cta: CONTACT_CTA_BOX
    };
}

// Export for Node.js/modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CONTACT_PAGE_TITLE,
        CONTACT_HERO,
        CONTACT_FORM,
        CONTACT_INFO,
        FAQ_CONFIG,
        CONTACT_CTA_BOX,
        ContactPageManager
    };
} 