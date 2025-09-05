/*
===========================================
NEWSLETTER CONFIGURATION
===========================================
🎯 CHANGE YOUR NEWSLETTER SETTINGS HERE - EDIT THESE LINES ONLY:
*/

// ========== NEWSLETTER CONTENT CONFIGURATION ==========
const NEWSLETTER_TITLE = "Stay Updated";                                    // ← Newsletter section title
const NEWSLETTER_SUBTITLE = "Get the latest {{NICHE}} reviews, guides, and exclusive deals delivered to your inbox.";  // ← Newsletter description
const NEWSLETTER_BUTTON_TEXT = "Subscribe";                                 // ← Subscribe button text
const NEWSLETTER_PLACEHOLDER = "Enter your email address";                  // ← Email input placeholder
const NEWSLETTER_BONUS_TEXT = "Plus, get instant access to our <a href='./index.html#top10' class='text-primary'>Top 10 {{NICHE}} Guide</a>!";  // ← Bonus text with link

// ========== NEWSLETTER FORM CONFIGURATION ==========
const NEWSLETTER_FORM_ACTION = "";                                          // ← Legacy endpoint (optional). Leave blank when using destinations.mode below or for eg. "https://formspree.io/f/YOUR_FORM_ID";
const NEWSLETTER_FORM_METHOD = "POST";                                      // ← Form submission method
const NEWSLETTER_SUCCESS_MESSAGE = "Thank you for subscribing!";            // ← Success message
const NEWSLETTER_ERROR_MESSAGE = "Something went wrong. Please try again."; // ← Error message

// ========== NEWSLETTER VISUAL CONFIGURATION ==========
const NEWSLETTER_BACKGROUND_STYLE = "var(--bg-secondary)";                 // ← Newsletter background color
const NEWSLETTER_ICON = "fas fa-paper-plane";                              // ← Newsletter button icon
const NEWSLETTER_ENABLE_ANIMATION = true;                                   // ← Enable subtle animations
const NEWSLETTER_SHOW_BONUS_TEXT = true;                                    // ← Show bonus text below form

/*
===========================================
NEWSLETTER SYSTEM CONFIGURATION
===========================================
⚠️ ADVANCED SETTINGS - Only change if you know what you're doing
*/

const NEWSLETTER_CONFIG = {
    // Content settings
    content: {
        title: NEWSLETTER_TITLE,
        subtitle: NEWSLETTER_SUBTITLE,
        buttonText: NEWSLETTER_BUTTON_TEXT,
        placeholder: NEWSLETTER_PLACEHOLDER,
        bonusText: NEWSLETTER_BONUS_TEXT,
        showBonusText: NEWSLETTER_SHOW_BONUS_TEXT
    },
    
    // Form settings
    form: {
        action: NEWSLETTER_FORM_ACTION,
        method: NEWSLETTER_FORM_METHOD,
        successMessage: NEWSLETTER_SUCCESS_MESSAGE,
        errorMessage: NEWSLETTER_ERROR_MESSAGE
    },
    
    // Visual settings
    styling: {
        backgroundColor: NEWSLETTER_BACKGROUND_STYLE,
        buttonIcon: NEWSLETTER_ICON,
        enableAnimation: NEWSLETTER_ENABLE_ANIMATION,
        sectionPadding: 'var(--spacing-3xl) 0',
        maxWidth: '500px'
    },
    
    // Integration settings
    integration: {
        trackingEnabled: true,
        trackingEvent: 'newsletter_signup',
        validateEmail: true,
        requireDoubleOptIn: false
    },

    // Destination settings (CHOOSE HOW SUBSCRIPTIONS ARE STORED)
    destinations: {
        // 'sheets' | 'file' | 'dual' (sheets + file) | 'legacy' (uses form.action)
        mode: 'dual',

        // Google Sheets (via Apps Script Web App)
        sheets: {
            // Paste your Apps Script Web App URL here (see guide at bottom of this file)
            webAppUrl: 'https://script.google.com/macros/s/AKfycbzsfqdKd21KmvGaoipnnPsGbxgrcRHm4BlB3h75ZsaqUECoTGvji3NXmExMXpJp083W/exec', // https://script.google.com/macros/s/YOUR_WEB_APP_ID/exec
            sheetName: 'Sheet1'
        },

        // Local CSV/JSON (stored in browser localStorage). Export via NewsletterManager.exportCsv()
        file: {
            enabled: true,
            storageKey: 'newsletter_subscribers',
            csvFilename: 'newsletter-subscribers.csv'
        }
    },

    // Fields to capture
    fields: {
        email: true,
        name: false,
        page: true,
        timestamp: true,
        userAgent: true,
        utm: true,
        consent: true
    }
};

/*
===========================================
NEWSLETTER LOADER SYSTEM
===========================================
*/

class NewsletterLoader {
    constructor() {
        this.config = NEWSLETTER_CONFIG;
        this.init();
    }
    
    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.loadNewsletter());
        } else {
            this.loadNewsletter();
        }
    }
    
    loadNewsletter() {
        const container = document.getElementById('newsletter-container');
        if (!container) return;
        
        // Apply template variables
        const processedConfig = this.applyTemplateVariables(this.config);
        
        // Create newsletter HTML
        const newsletterHTML = this.createNewsletterHTML(processedConfig);
        
        // Insert newsletter
        container.innerHTML = newsletterHTML;
        
        // Initialize form functionality
        this.initializeForm();
        
        // Add animations if enabled
        if (processedConfig.styling.enableAnimation) {
            this.addAnimations();
        }
    }
    
    applyTemplateVariables(config) {
        const processedConfig = JSON.parse(JSON.stringify(config));
        
        // Get template variables from global config
        const niche = (window.NICHE_CONFIG && window.NICHE_CONFIG.niche) || 'Products';
        const productType = (window.NICHE_CONFIG && window.NICHE_CONFIG.productType) || 'Products';
        const brandName = (window.SITE_CONFIG && window.SITE_CONFIG.brandName) || 'Your Brand';
        
        // Replace template variables
        processedConfig.content.subtitle = processedConfig.content.subtitle.replace(/\{\{NICHE\}\}/g, niche);
        processedConfig.content.bonusText = processedConfig.content.bonusText.replace(/\{\{NICHE\}\}/g, niche);
        processedConfig.content.bonusText = processedConfig.content.bonusText.replace(/\{\{PRODUCT_TYPE\}\}/g, productType);
        processedConfig.content.bonusText = processedConfig.content.bonusText.replace(/\{\{BRAND_NAME\}\}/g, brandName);
        
        return processedConfig;
    }
    
    createNewsletterHTML(config) {
        const bonusTextHTML = config.content.showBonusText ? 
            `<p class="newsletter-note">${config.content.bonusText}</p>` : '';
        // Admin export button toggled via URL ?admin=1 or #newsletter?admin=1
        const qp = new URLSearchParams(window.location.search);
        const hash = window.location.hash || '';
        const hp = new URLSearchParams(hash.includes('?') ? hash.split('?')[1] : '');
        const isAdmin = (qp.get('admin') === '1') || (hp.get('admin') === '1');
        const exportBtnHTML = isAdmin ? `<div class="newsletter-admin-tools" style="margin-top: 12px; text-align: center;">
            <button type="button" class="btn btn-secondary" id="download-subscribers-btn">Download Subscribers CSV</button>
        </div>` : '';
        
        return `
            <section class="newsletter-section" style="background: ${config.styling.backgroundColor}; padding: ${config.styling.sectionPadding};">
                <div class="container">
                    <div class="newsletter-content">
                        <h2 class="section-title">${config.content.title}</h2>
                        <p class="section-subtitle">${config.content.subtitle}</p>
                        
                        <form class="newsletter-form" action="${config.form.action}" method="${config.form.method}" data-type="email" data-optional="true">
                            <div class="form-inline">
                                <input type="email" class="form-input" placeholder="${config.content.placeholder}">
                                <button type="submit" class="btn btn-primary">
                                    <i class="${config.styling.buttonIcon}"></i>
                                    ${config.content.buttonText}
                                </button>
                            </div>
                            <div class="newsletter-messages">
                                <div class="newsletter-success" style="display: none;">${config.form.successMessage}</div>
                                <div class="newsletter-error" style="display: none;">${config.form.errorMessage}</div>
                            </div>
                        </form>
                        
                        ${bonusTextHTML}
                        ${exportBtnHTML}
                    </div>
                </div>
            </section>
        `;
    }
    
    initializeForm() {
        const form = document.querySelector('.newsletter-form');
        if (!form) return;
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmission(form);
        });
        
        // Bind export button if visible
        const exportBtn = document.getElementById('download-subscribers-btn');
        if (exportBtn && window.NewsletterManager && typeof window.NewsletterManager.exportCsv === 'function') {
            exportBtn.addEventListener('click', () => window.NewsletterManager.exportCsv());
        }
    }
    
    handleFormSubmission(form) {
        const emailInput = form.querySelector('input[type="email"]');
        const email = emailInput ? emailInput.value.trim() : '';
        const submitButton = form.querySelector('button[type="submit"]');
        const successMessage = form.querySelector('.newsletter-success');
        const errorMessage = form.querySelector('.newsletter-error');
        
        // Validate email if enabled
        if (this.config.integration.validateEmail && !this.isValidEmail(email)) {
            this.showMessage(errorMessage, 'Please enter a valid email address.');
            return;
        }
        
        // Show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Subscribing...';

        const record = this.buildRecord(email, form);
        const mode = (this.config.destinations && this.config.destinations.mode) || 'legacy';

        const tasks = [];
        if (mode === 'legacy' && this.config.form.action) {
            tasks.push(this.submitLegacy(record));
        }
        if ((mode === 'sheets' || mode === 'dual') && this.config.destinations?.sheets?.webAppUrl) {
            tasks.push(this.submitToSheets(record));
        }
        if ((mode === 'file' || mode === 'dual') && this.config.destinations?.file?.enabled) {
            tasks.push(this.saveToLocal(record));
        }

        Promise.allSettled(tasks)
            .then(results => {
                const anySuccess = results.some(r => r.status === 'fulfilled');
                if (anySuccess) {
                    this.showMessage(successMessage, this.config.form.successMessage);
                    form.reset();
                    if (this.config.integration.trackingEnabled && window.gtag) {
                        gtag('event', this.config.integration.trackingEvent, { event_category: 'Newsletter', event_label: 'Subscription' });
                    }
                } else {
                    throw new Error('All newsletter destinations failed');
                }
            })
            .catch(error => {
                console.error('Newsletter submission error:', error);
                this.showMessage(errorMessage, this.config.form.errorMessage);
            })
            .finally(() => {
                submitButton.disabled = false;
                submitButton.innerHTML = `<i class="${this.config.styling.buttonIcon}"></i> ${this.config.content.buttonText}`;
            });
    }

    buildRecord(email, form) {
        const cfg = this.config.fields || {};
        const record = {};
        if (cfg.email) record.email = email;
        if (cfg.name) {
            const nameInput = form.querySelector('input[name="name"], input[data-field="name"]');
            if (nameInput) record.name = nameInput.value.trim();
        }
        if (cfg.page) record.page = window.location.href;
        if (cfg.timestamp) record.timestamp = new Date().toISOString();
        if (cfg.userAgent) record.userAgent = navigator.userAgent;
        if (cfg.utm) {
            const params = new URLSearchParams(window.location.search);
            const utm = {};
            ['utm_source','utm_medium','utm_campaign','utm_term','utm_content'].forEach(k => {
                if (params.has(k)) utm[k] = params.get(k);
            });
            record.utm = utm;
        }
        if (cfg.consent) {
            const consentEl = form.querySelector('input[type="checkbox"][name="consent"], input[type="checkbox"][data-field="consent"]');
            record.consent = consentEl ? !!consentEl.checked : true;
        }
        return record;
    }

    submitLegacy(record) {
        return fetch(this.config.form.action, {
            method: this.config.form.method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(record)
        }).then(r => { if (!r.ok) throw new Error('Legacy endpoint failed'); });
    }

    submitToSheets(record) {
        const { webAppUrl, sheetName } = this.config.destinations.sheets;
        const payload = { ...record, sheet: sheetName || undefined };
        return fetch(webAppUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }).then(() => {});
    }

    saveToLocal(record) {
        try {
            const key = this.config.destinations.file.storageKey || 'newsletter_subscribers';
            const existing = JSON.parse(localStorage.getItem(key) || '[]');
            existing.push(record);
            localStorage.setItem(key, JSON.stringify(existing));
            return Promise.resolve();
        } catch (e) {
            return Promise.reject(e);
        }
    }
    
    showMessage(element, message) {
        element.textContent = message;
        element.style.display = 'block';
        
        // Hide other messages
        const messages = element.parentElement.querySelectorAll('.newsletter-success, .newsletter-error');
        messages.forEach(msg => {
            if (msg !== element) {
                msg.style.display = 'none';
            }
        });
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            element.style.display = 'none';
        }, 5000);
    }
    
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    addAnimations() {
        const newsletterSection = document.querySelector('.newsletter-section');
        if (!newsletterSection) return;
        
        // Add fade-in animation
        newsletterSection.style.opacity = '0';
        newsletterSection.style.transform = 'translateY(20px)';
        newsletterSection.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Trigger animation when in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        });
        
        observer.observe(newsletterSection);
    }
}

// Initialize newsletter loader when script loads
window.NewsletterLoader = NewsletterLoader;

// Auto-initialize if not already done
if (typeof window.newsletterLoader === 'undefined') {
    window.newsletterLoader = new NewsletterLoader();
}

/*
===========================================
CONSOLE COMMANDS FOR NEWSLETTER MANAGEMENT
===========================================
*/

// Newsletter management commands
window.NewsletterManager = {
    // Update newsletter content
    updateContent: function(newContent) {
        Object.assign(NEWSLETTER_CONFIG.content, newContent);
        window.newsletterLoader.loadNewsletter();
        console.log('Newsletter content updated:', newContent);
    },
    
    // Update form settings
    updateForm: function(newFormSettings) {
        Object.assign(NEWSLETTER_CONFIG.form, newFormSettings);
        console.log('Newsletter form settings updated:', newFormSettings);
    },
    
    // Toggle bonus text
    toggleBonusText: function() {
        NEWSLETTER_CONFIG.content.showBonusText = !NEWSLETTER_CONFIG.content.showBonusText;
        window.newsletterLoader.loadNewsletter();
        console.log('Bonus text toggled:', NEWSLETTER_CONFIG.content.showBonusText);
    },
    
    // Get current config
    getConfig: function() {
        return NEWSLETTER_CONFIG;
    },
    
    // Export locally saved subscribers as CSV (matches Google Sheets columns/order)
    exportCsv: function() {
        const key = NEWSLETTER_CONFIG.destinations?.file?.storageKey || 'newsletter_subscribers';
        const filename = NEWSLETTER_CONFIG.destinations?.file?.csvFilename || 'newsletter-subscribers.csv';
        const rows = JSON.parse(localStorage.getItem(key) || '[]');
        if (!rows.length) {
            console.warn('No locally stored subscribers to export');
            return;
        }
        const headers = ['Email','Timestamp','Page','UserAgent','UTM Source','UTM Medium','UTM Campaign','UTM Term','UTM Content','Consent'];
        const toCell = (v) => {
            const s = v == null ? '' : String(v);
            return /[",\n]/.test(s) ? '"' + s.replace(/"/g,'""') + '"' : s;
        };
        const lines = rows.map(r => {
            const utm = r.utm || {};
            return [
                r.email || r.emailAddress || '',
                r.timestamp || '',
                r.page || '',
                r.userAgent || '',
                utm.utm_source || '',
                utm.utm_medium || '',
                utm.utm_campaign || '',
                utm.utm_term || '',
                utm.utm_content || '',
                (r.consent === false ? 'FALSE' : 'TRUE')
            ].map(toCell).join(',');
        });
        const csv = [headers.join(',')].concat(lines).join('\n');
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = filename; a.click();
        URL.revokeObjectURL(url);
    },
    
    // Test form submission
    testForm: function() {
        const form = document.querySelector('.newsletter-form');
        if (form) {
            const testEvent = new Event('submit');
            form.dispatchEvent(testEvent);
        }
    }
};

console.log('📧 Newsletter system loaded! Use NewsletterManager.* commands to manage newsletter settings.'); 