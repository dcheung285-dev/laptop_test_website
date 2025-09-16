/*
===========================================
PRIVACY POLICY CONFIGURATION
===========================================
🎯 MANAGE YOUR PRIVACY POLICY SECTIONS HERE - EDIT THESE SECTIONS ONLY:

📝 HOW TO ADD SECTIONS:
   1. Add new object to the 'sections' array
   2. Use title and content properties
   3. Include {{PLACEHOLDERS}} for dynamic content
   4. Styling and separators are automatic!

🗑️ HOW TO REMOVE SECTIONS:
   1. Delete the entire section object
   2. Or set enabled: false to hide temporarily
   3. Separators automatically adjust!

✨ AUTOMATIC FEATURES:
   - Section numbering (1., 2., 3., etc.)
   - Visual separators between sections
   - Responsive styling
   - Placeholder replacement
*/

// ========== PRIVACY PAGE CONFIGURATION ==========
const PRIVACY_CONFIG = {
    enabled: true,
    tabTitle: "Privacy Policy | {{BRAND_NAME_TEXT}}",           // ← Browser tab title
    pageHeading: "Privacy Policy",                              // ← Main page heading (H1)
    metaDescription: "Privacy Policy for {{BRAND_NAME_TEXT}} - How we collect, use, and protect your personal data. GDPR and CCPA compliant.",
    lastUpdated: "January 2025",
    effectiveDate: "January 1, 2025",
    
    // ========== PRIVACY POLICY SECTIONS ==========
    // 📝 Add/remove/reorder sections here - numbering is automatic!
    sections: [
        {
            enabled: true,
            title: "Introduction",
            content: `
                <p>{{BRAND_NAME_TEXT}} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website ({{SITE_URL}}) and use our services.</p>
                <p>Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>
            `
        },
        {
            enabled: true,
            title: "Information We Collect",
            content: `
                <h3>Personal Information</h3>
                <p>We may collect personal information that you voluntarily provide, including:</p>
                <ul>
                    <li>Email address (when subscribing to our newsletter)</li>
                    <li>Name (if provided in contact forms)</li>
                    <li>Any other information you choose to provide</li>
                </ul>
                
                <h3>Automatically Collected Information</h3>
                <p>When you visit our website, we automatically collect certain information:</p>
                <ul>
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Pages visited and time spent</li>
                    <li>Referring websites</li>
                    <li>Device information</li>
                </ul>
            `
        },
        {
            enabled: true,
            title: "How We Use Your Information",
            content: `
                <p>We use the collected information for the following purposes:</p>
                <ul>
                    <li>To provide and maintain our website</li>
                    <li>To send you newsletters and marketing communications (with your consent)</li>
                    <li>To respond to your inquiries and provide customer support</li>
                    <li>To analyze website usage and improve our services</li>
                    <li>To comply with legal obligations</li>
                    <li>To detect and prevent fraud or abuse</li>
                </ul>
            `
        },
        {
            enabled: true,
            title: "Cookies and Tracking Technologies",
            content: `
                <p>We use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small files stored on your device that help us remember your preferences and understand how you use our site.</p>
                
                <h3>Types of Cookies We Use</h3>
                <ul>
                    <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                    <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                    <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                </ul>
                
                <p>You can control cookie settings in your browser preferences.</p>
            `
        },
        {
            enabled: true,
            title: "Information Sharing and Disclosure",
            content: `
                <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
                <ul>
                    <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or asset sale</li>
                    <li><strong>Consent:</strong> With your explicit consent for other purposes</li>
                </ul>
            `
        },
        {
            enabled: true,
            title: "Third-Party Services",
            content: `
                <p>Our website may contain links to third-party websites and services, including:</p>
                <ul>
                    <li>Google Analytics (for website analytics)</li>
                    <li>Meta Pixel (for advertising and analytics)</li>
                    <li>Email marketing platforms (e.g., Mailchimp, ConvertKit)</li>
                    <li>Affiliate partner websites</li>
                </ul>
                <p>These third parties have their own privacy policies, and we are not responsible for their practices.</p>
            `
        },
        {
            enabled: true,
            title: "Data Security",
            content: `
                <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                
                <h3>Security Measures Include:</h3>
                <ul>
                    <li>SSL encryption for data transmission</li>
                    <li>Secure hosting environment</li>
                    <li>Regular security updates and monitoring</li>
                    <li>Limited access to personal data</li>
                </ul>
                
                <p>However, no internet transmission is 100% secure, and we cannot guarantee absolute security.</p>
            `
        },
        {
            enabled: true,
            title: "Data Retention",
            content: `
                <p>We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.</p>
                
                <h3>Retention Periods:</h3>
                <ul>
                    <li><strong>Newsletter subscriptions:</strong> Until you unsubscribe</li>
                    <li><strong>Analytics data:</strong> Up to 26 months (Google Analytics default)</li>
                    <li><strong>Contact form data:</strong> Up to 2 years</li>
                    <li><strong>Legal compliance data:</strong> As required by applicable laws</li>
                </ul>
            `
        },
        {
            enabled: true,
            title: "Your Privacy Rights",
            content: `
                <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                
                <h3>GDPR Rights (EU Residents)</h3>
                <ul>
                    <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                    <li><strong>Rectification:</strong> Request correction of inaccurate personal information</li>
                    <li><strong>Erasure:</strong> Request deletion of your personal information</li>
                    <li><strong>Restriction:</strong> Request limitation of processing of your personal information</li>
                    <li><strong>Portability:</strong> Request transfer of your personal information</li>
                    <li><strong>Objection:</strong> Object to processing of your personal information</li>
                    <li><strong>Withdraw Consent:</strong> Withdraw consent for processing (where applicable)</li>
                </ul>
                
                <h3>CCPA Rights (California Residents)</h3>
                <ul>
                    <li><strong>Right to Know:</strong> Information about data collection and use</li>
                    <li><strong>Right to Delete:</strong> Request deletion of personal data</li>
                    <li><strong>Right to Opt-Out:</strong> Opt-out of sale of personal data</li>
                    <li><strong>Non-Discrimination:</strong> Equal service regardless of privacy choices</li>
                </ul>
                
                <p>To exercise these rights, please contact us using the information provided below.</p>
            `
        },
        {
            enabled: true,
            title: "Children's Privacy",
            content: `
                <p>Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.</p>
                <p>If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.</p>
                <p>If you are a parent or guardian and believe your child has provided personal information to us, please contact us immediately.</p>
            `
        },
        {
            enabled: true,
            title: "International Data Transfers",
            content: `
                <p>Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.</p>
                
                <h3>Safeguards for International Transfers:</h3>
                <ul>
                    <li>Standard Contractual Clauses (SCCs)</li>
                    <li>Adequacy decisions by relevant authorities</li>
                    <li>Certification schemes and codes of conduct</li>
                </ul>
            `
        },
        {
            enabled: true,
            title: "Changes to This Privacy Policy",
            content: `
                <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by:</p>
                <ul>
                    <li>Posting the new Privacy Policy on this page</li>
                    <li>Updating the "Last updated" date</li>
                    <li>Sending an email notification (for significant changes)</li>
                </ul>
                <p>We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.</p>
            `
        },
        {
            enabled: false,
            title: "Contact Information",
            content: `
                <p>If you have any questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:</p>
                <div class="contact-info">
                    <p><strong>Email:</strong> {{CONTACT_EMAIL}}</p>
                    <p><strong>Address:</strong> {{CONTACT_ADDRESS}}</p>
                    <p><strong>Website:</strong> <a href="{{SITE_URL}}">{{SITE_URL}}</a></p>
                </div>
                
                <h3>Data Protection Officer</h3>
                <p>For GDPR-related inquiries, you can also contact our Data Protection Officer at {{CONTACT_EMAIL}}.</p>
                
                <h3>Response Time</h3>
                <p>We will respond to your privacy requests within:</p>
                <ul>
                    <li><strong>GDPR requests:</strong> 30 days</li>
                    <li><strong>CCPA requests:</strong> 45 days</li>
                    <li><strong>General inquiries:</strong> 7 business days</li>
                </ul>
            `
        }
    ]
};

/*
===========================================
PRIVACY PAGE RENDERER CLASS
===========================================
Automatically handles section rendering, numbering, and styling
*/

class PrivacyPageRenderer {
    constructor() {
        this.config = PRIVACY_CONFIG;
        this.init();
    }
    
    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }
    
    setup() {
        console.log('🔄 Starting privacy page setup...');
        console.log('📄 Config loaded:', this.config.tabTitle);
        this.updatePageTitle();
        this.updatePageHeading();
        this.updateMetaDescription();
        this.renderSections();
        this.updateLastUpdated();
        this.replacePlaceholders();
        console.log('✅ Privacy page dynamically rendered');
    }
    
    updatePageTitle() {
        const titleElement = document.querySelector('title');
        if (titleElement && this.config.tabTitle) {
            titleElement.textContent = this.replacePlaceholdersInText(this.config.tabTitle);
        }
    }
    
    updatePageHeading() {
        const headingElement = document.querySelector('#page-title');
        if (headingElement && this.config.pageHeading) {
            headingElement.textContent = this.config.pageHeading;
        }
        
        // Also update last updated display
        const lastUpdatedElement = document.querySelector('#last-updated');
        if (lastUpdatedElement && this.config.lastUpdated) {
            lastUpdatedElement.textContent = `Last updated: ${this.config.lastUpdated}`;
        }
    }
    
    updateMetaDescription() {
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && this.config.metaDescription) {
            metaDesc.setAttribute('content', this.replacePlaceholdersInText(this.config.metaDescription));
        }
    }
    
    renderSections() {
        const container = document.querySelector('#privacy-sections');
        if (!container) return;
        
        // Clear existing content
        container.innerHTML = '';
        
        // Filter enabled sections and render
        const enabledSections = this.config.sections.filter(section => section.enabled !== false);
        
        enabledSections.forEach((section, index) => {
            const sectionElement = this.createSectionElement(section, index + 1);
            container.appendChild(sectionElement);
        });
    }
    
    createSectionElement(section, number) {
        const sectionDiv = document.createElement('section');
        sectionDiv.className = 'legal-section';
        
        const title = document.createElement('h2');
        title.textContent = `${number}. ${section.title}`;
        
        const contentDiv = document.createElement('div');
        contentDiv.innerHTML = section.content;
        
        sectionDiv.appendChild(title);
        sectionDiv.appendChild(contentDiv);
        
        return sectionDiv;
    }
    
    updateLastUpdated() {
        const lastUpdatedElement = document.querySelector('.last-updated');
        if (lastUpdatedElement && this.config.lastUpdated) {
            lastUpdatedElement.textContent = `Last updated: ${this.config.lastUpdated}`;
        }
    }
    
    replacePlaceholders() {
        // Wait for all config files to load
        setTimeout(() => {
            const contentElement = document.querySelector('.legal-content');
            if (!contentElement) return;
            
            let html = contentElement.innerHTML;
            
            // Replace placeholders with actual values
            const replacements = {
                '{{BRAND_NAME_TEXT}}': this.getBrandName(),
                '{{CONTACT_EMAIL}}': this.getContactEmail(),
                '{{CONTACT_ADDRESS}}': this.getContactAddress(),
                '{{SITE_URL}}': this.getSiteUrl(),
                '{{PRODUCT_TYPE}}': this.getProductType(),
                '{{NICHE}}': this.getNiche()
            };
            
            Object.entries(replacements).forEach(([placeholder, value]) => {
                const regex = new RegExp(placeholder.replace(/[{}]/g, '\\$&'), 'g');
                html = html.replace(regex, value || placeholder);
            });
            
            contentElement.innerHTML = html;
        }, 100);
    }
    
    replacePlaceholdersInText(text) {
        const replacements = {
            '{{BRAND_NAME_TEXT}}': this.getBrandName(),
            '{{CONTACT_EMAIL}}': this.getContactEmail(),
            '{{CONTACT_ADDRESS}}': this.getContactAddress(),
            '{{SITE_URL}}': this.getSiteUrl(),
            '{{PRODUCT_TYPE}}': this.getProductType(),
            '{{NICHE}}': this.getNiche()
        };
        
        let result = text;
        Object.entries(replacements).forEach(([placeholder, value]) => {
            const regex = new RegExp(placeholder.replace(/[{}]/g, '\\$&'), 'g');
            result = result.replace(regex, value || placeholder);
        });
        
        return result;
    }
    
    // Helper methods to get values from various config files
    getBrandName() {
        return window.BRAND_CONFIG?.text?.name || 'Your Brand';
    }
    
    getContactEmail() {
        return window.CONTACT_INFO?.email || 'contact@yoursite.com';
    }
    
    getContactAddress() {
        return window.CONTACT_INFO?.address || 'Your Business Address';
    }
    
    getSiteUrl() {
        return window.CONFIG?.siteUrl || window.location.origin;
    }
    
    getProductType() {
        return window.CONFIG?.display?.productType || 'products';
    }
    
    getNiche() {
        return window.CONFIG?.display?.niche || 'your niche';
    }
}

// Initialize the privacy page renderer
if (typeof window !== 'undefined') {
    window.PRIVACY_CONFIG = PRIVACY_CONFIG;
    new PrivacyPageRenderer();
} 