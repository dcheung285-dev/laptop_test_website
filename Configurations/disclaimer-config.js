/*
===========================================
DISCLAIMER PAGE CONFIGURATION
===========================================
🎯 MANAGE YOUR DISCLAIMER SECTIONS HERE - EDIT THESE SECTIONS ONLY:

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

// ========== DISCLAIMER PAGE CONFIGURATION ==========
const DISCLAIMER_CONFIG = {
    enabled: true,
    tabTitle: "Disclaimer | {{BRAND_NAME_TEXT}}",              // ← Browser tab title
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
                <p>This disclaimer governs your use of {{BRAND_NAME_TEXT}} ({{SITE_URL}}). By accessing and using our website, you accept this disclaimer in full.</p>
                <p>The information provided on this website is for general informational purposes only and should not be considered as professional advice.</p>
                <p>{{BRAND_NAME_TEXT}} makes no representations or warranties about the accuracy, completeness, or suitability of the information contained on this website.</p>
            `
        },
        {
            enabled: true,
            title: "Affiliate Marketing Disclosure",
            content: `
                <h3>FTC Compliance</h3>
                <p>{{BRAND_NAME_TEXT}} participates in affiliate marketing programs. This means we may receive a commission when you click on links to {{PRODUCT_TYPE}} and make a purchase, at no additional cost to you.</p>
                
                <h3>Material Connection</h3>
                <p>We want to be transparent about our business model. Some of the links on our website are affiliate links, which means:</p>
                <ul>
                    <li>We receive compensation for referring traffic and business to partner companies</li>
                    <li>This helps support our research, testing, and content creation</li>
                    <li>You pay the same price whether you use our links or not</li>
                    <li>Our affiliate relationships do not influence our reviews or recommendations</li>
                </ul>
                
                <h3>Independence and Integrity</h3>
                <p>We maintain editorial independence and provide honest, unbiased reviews of {{PRODUCT_TYPE}}. Our recommendations are based on:</p>
                <ul>
                    <li>Thorough testing and research</li>
                    <li>Industry expertise and experience</li>
                    <li>User feedback and community input</li>
                    <li>Objective evaluation criteria</li>
                </ul>
            `
        },
        {
            enabled: true,
            title: "Product Reviews and Recommendations",
            content: `
                <h3>Review Process</h3>
                <p>Our team at {{BRAND_NAME_TEXT}} conducts thorough reviews of {{PRODUCT_TYPE}} based on:</p>
                <ul>
                    <li>Personal testing and experience</li>
                    <li>Industry research and analysis</li>
                    <li>User reviews and feedback</li>
                    <li>Expert opinions and professional standards</li>
                </ul>
                
                <h3>Subjective Nature</h3>
                <p>Please note that our reviews and recommendations are based on our experience and research. Your experience may differ based on:</p>
                <ul>
                    <li>Individual preferences and needs</li>
                    <li>Technical specifications and requirements</li>
                    <li>Geographic location and availability</li>
                    <li>Timing and market conditions</li>
                </ul>
                
                <h3>No Guarantees</h3>
                <p>We cannot guarantee specific results or outcomes from using any {{PRODUCT_TYPE}} featured on our website. Performance may vary based on individual circumstances.</p>
            `
        },
        {
            enabled: true,
            title: "Information Accuracy and Updates",
            content: `
                <h3>Best Efforts</h3>
                <p>We strive to provide accurate, up-to-date information about {{PRODUCT_TYPE}} on {{SITE_URL}}. However:</p>
                <ul>
                    <li>Information may become outdated as products and services change</li>
                    <li>Pricing, features, and availability are subject to change</li>
                    <li>We cannot guarantee the accuracy of all third-party information</li>
                    <li>Always verify important details directly with the provider</li>
                </ul>
                
                <h3>Regular Updates</h3>
                <p>We regularly review and update our content, but we cannot guarantee that all information is current at all times. For the most accurate information:</p>
                <ul>
                    <li>Check directly with the {{PRODUCT_TYPE}} provider</li>
                    <li>Read current terms and conditions</li>
                    <li>Verify pricing and availability</li>
                    <li>Contact customer support if needed</li>
                </ul>
            `
        },
        {
            enabled: true,
            title: "Third-Party Links and Content",
            content: `
                <h3>External Links</h3>
                <p>Our website contains links to third-party websites and services. {{BRAND_NAME_TEXT}} is not responsible for:</p>
                <ul>
                    <li>The content or privacy practices of external sites</li>
                    <li>The accuracy of information on third-party websites</li>
                    <li>Any transactions or interactions with external companies</li>
                    <li>Technical issues or problems with third-party services</li>
                </ul>
                
                <h3>Third-Party Content</h3>
                <p>Some content on our website may be provided by third parties, including:</p>
                <ul>
                    <li>User-generated content and reviews</li>
                    <li>Partner-provided information and data</li>
                    <li>Industry reports and research</li>
                    <li>News and press releases</li>
                </ul>
                
                <p>We do not endorse or guarantee the accuracy of third-party content.</p>
            `
        },
        {
            enabled: true,
            title: "Limitation of Liability",
            content: `
                <h3>No Liability for Decisions</h3>
                <p>{{BRAND_NAME_TEXT}} and its team members are not liable for any decisions you make based on information found on our website.</p>
                
                <h3>Use at Your Own Risk</h3>
                <p>Your use of {{SITE_URL}} and any {{PRODUCT_TYPE}} you choose based on our recommendations is at your own risk. We are not responsible for:</p>
                <ul>
                    <li>Financial losses or damages</li>
                    <li>Technical problems or issues</li>
                    <li>Unsatisfactory experiences with products or services</li>
                    <li>Changes in terms, pricing, or availability</li>
                </ul>
                
                <h3>Professional Advice</h3>
                <p>The information on our website is not intended to replace professional advice. For important decisions, consider consulting with qualified professionals in the relevant field.</p>
            `
        },
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
        },
        {
            enabled: true,
            title: "Privacy and Data Collection",
            content: `
                <h3>Privacy Policy Reference</h3>
                <p>Our collection, use, and protection of your personal information is governed by our <a href="./privacy.html">Privacy Policy</a>.</p>
                
                <h3>Cookies and Tracking</h3>
                <p>We use cookies and similar technologies to:</p>
                <ul>
                    <li>Improve your browsing experience</li>
                    <li>Analyze website traffic and usage</li>
                    <li>Track affiliate link performance</li>
                    <li>Deliver relevant advertisements</li>
                </ul>
                
                <p>By using our website, you consent to our use of cookies as described in our Privacy Policy.</p>
            `
        },
        {
            enabled: true,
            title: "Changes to This Disclaimer",
            content: `
                <h3>Updates and Modifications</h3>
                <p>{{BRAND_NAME_TEXT}} reserves the right to update or modify this disclaimer at any time without prior notice.</p>
                
                <h3>Notification of Changes</h3>
                <p>Material changes to this disclaimer will be communicated through:</p>
                <ul>
                    <li>Updates to the "Last updated" date on this page</li>
                    <li>Prominent notices on our website</li>
                    <li>Email notifications to subscribers (for significant changes)</li>
                </ul>
                
                <h3>Continued Use</h3>
                <p>Your continued use of this website after any changes constitutes acceptance of the updated disclaimer.</p>
            `
        },
        {
            enabled: false,
            title: "Contact Information",
            content: `
                <h3>Questions and Concerns</h3>
                <p>If you have any questions about this disclaimer or our website practices, please contact us:</p>
                <div class="contact-info">
                    <p><strong>Email:</strong> {{CONTACT_EMAIL}}</p>
                    <p><strong>Address:</strong> {{CONTACT_ADDRESS}}</p>
                    <p><strong>Website:</strong> <a href="{{SITE_URL}}">{{SITE_URL}}</a></p>
                </div>
                
                <h3>Response Time</h3>
                <p>We strive to respond to all inquiries within 7 business days.</p>
                
                <h3>Legal Issues</h3>
                <p>For legal matters or disputes related to this disclaimer, please contact our legal team at {{CONTACT_EMAIL}}.</p>
            `
        }
    ]
};

/*
===========================================
DISCLAIMER PAGE RENDERER CLASS
===========================================
Automatically handles section rendering, numbering, and styling
*/

class DisclaimerPageRenderer {
    constructor() {
        this.config = DISCLAIMER_CONFIG;
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
        console.log('🔄 Starting disclaimer page setup...');
        console.log('📄 Config loaded:', this.config.tabTitle);
        this.updatePageTitle();
        this.updatePageHeading();
        this.updateMetaDescription();
        this.renderSections();
        this.updateLastUpdated();
        this.replacePlaceholders();
        console.log('✅ Disclaimer page dynamically rendered');
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
        const container = document.querySelector('#disclaimer-sections');
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

// Initialize the disclaimer page renderer
if (typeof window !== 'undefined') {
    window.DISCLAIMER_CONFIG = DISCLAIMER_CONFIG;
    new DisclaimerPageRenderer();
} 