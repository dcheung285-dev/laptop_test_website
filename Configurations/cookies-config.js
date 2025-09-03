/*
===========================================
COOKIES POLICY CONFIGURATION
===========================================
🎯 CHANGE YOUR COOKIES POLICY SETTINGS HERE - EDIT THESE LINES ONLY:
Configure your cookies policy page content, styling, and behavior.
*/

// ========== COOKIES PAGE TITLE CONFIGURATION ==========
const COOKIES_PAGE_TITLE = "Cookies Policy | {{BRAND_NAME}}";

// ========== COOKIES HERO SECTION ==========
const COOKIES_HERO = {
    title: "Cookies Policy",
    subtitle: "Learn how we use cookies to improve your experience on our website and protect your privacy.",
    lastUpdated: "December 2024"
};

// ========== COOKIES POLICY CONFIGURATION ==========
const COOKIES_CONFIG = {
    // Enable/disable cookies policy system
    enabled: true,
    
    // Styling and display options
    styling: {
        showLastUpdated: true,          // Show "Last updated" date
        showTableOfContents: true,      // Show table of contents
        enableSmoothScrolling: true,    // Enable smooth scrolling to sections
        accentColor: "var(--primary-color)"  // Color for highlights and links
    },
    
    // Cookies policy sections
    sections: [
        {
            id: "what-are-cookies",
            title: "What Are Cookies?",
            content: `
                <p>Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.</p>
                
                <p>Cookies do not contain any personal information that can identify you directly, but they may store information about your browsing habits and preferences.</p>
            `
        },
        {
            id: "types-of-cookies",
            title: "Types of Cookies We Use",
            content: `
                <h3>Essential Cookies</h3>
                <p>These cookies are necessary for the website to function properly. They enable basic features like page navigation, access to secure areas, and form submissions.</p>
                
                <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                    <thead>
                        <tr style="background: var(--bg-secondary);">
                            <th style="padding: 12px; text-align: left; border: 1px solid var(--border-color);">Cookie Name</th>
                            <th style="padding: 12px; text-align: left; border: 1px solid var(--border-color);">Purpose</th>
                            <th style="padding: 12px; text-align: left; border: 1px solid var(--border-color);">Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 12px; border: 1px solid var(--border-color);">session_id</td>
                            <td style="padding: 12px; border: 1px solid var(--border-color);">Maintains your session while browsing</td>
                            <td style="padding: 12px; border: 1px solid var(--border-color);">Session</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid var(--border-color);">csrf_token</td>
                            <td style="padding: 12px; border: 1px solid var(--border-color);">Security protection</td>
                            <td style="padding: 12px; border: 1px solid var(--border-color);">24 hours</td>
                        </tr>
                    </tbody>
                </table>
                
                <h3>Analytics Cookies</h3>
                <p>These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
                
                <h3>Functional Cookies</h3>
                <p>These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.</p>
                
                <h3>Advertising Cookies</h3>
                <p>These cookies are used to make advertising messages more relevant to you and may be set by our advertising partners.</p>
            `
        },
        {
            id: "how-we-use-cookies",
            title: "How We Use Cookies",
            content: `
                <p>We use cookies for the following purposes:</p>
                
                <ul>
                    <li><strong>Website Functionality:</strong> To ensure our website works properly and provides essential features</li>
                    <li><strong>User Experience:</strong> To remember your preferences and customize your experience</li>
                    <li><strong>Analytics:</strong> To understand how visitors use our website and improve our services</li>
                    <li><strong>Security:</strong> To protect our website and users from malicious activities</li>
                    <li><strong>Advertising:</strong> To show relevant advertisements and measure their effectiveness</li>
                </ul>
            `
        },
        {
            id: "managing-cookies",
            title: "Managing Your Cookie Preferences",
            content: `
                <p>You have control over the cookies we use. Here's how you can manage your preferences:</p>
                
                <h3>Browser Settings</h3>
                <p>Most web browsers allow you to control cookies through their settings. You can:</p>
                <ul>
                    <li>Block all cookies</li>
                    <li>Block third-party cookies</li>
                    <li>Delete existing cookies</li>
                    <li>Receive notifications when cookies are set</li>
                </ul>
                
                <h3>Our Cookie Preferences</h3>
                <p>You can also manage your cookie preferences directly on our website using our cookie consent banner that appears when you first visit.</p>
                
                <div style="background: var(--bg-secondary); padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <p><strong>Note:</strong> Disabling certain cookies may affect the functionality of our website and your user experience.</p>
                </div>
            `
        },
        {
            id: "third-party-cookies",
            title: "Third-Party Cookies",
            content: `
                <p>Our website may contain content from third-party services that may set their own cookies. These include:</p>
                
                <ul>
                    <li><strong>Google Analytics:</strong> For website analytics and performance tracking</li>
                    <li><strong>Social Media Platforms:</strong> For social sharing buttons and embedded content</li>
                    <li><strong>Advertising Networks:</strong> For displaying relevant advertisements</li>
                    <li><strong>Payment Processors:</strong> For secure payment processing</li>
                </ul>
                
                <p>We do not control these third-party cookies. Please refer to the respective privacy policies of these services for more information.</p>
            `
        },
        {
            id: "contact-information",
            title: "Contact Us About Cookies",
            content: `
                <p>If you have any questions about our use of cookies, please contact us:</p>
                
                <div style="background: var(--bg-secondary); padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <p><strong>Email:</strong> privacy@{{DOMAIN}}</p>
                    <p><strong>Contact Page:</strong> <a href="./contact.html" style="color: var(--primary-color);">Get in Touch</a></p>
                </div>
                
                <p>We will respond to your inquiry within 48 hours.</p>
            `
        },
        {
            id: "policy-updates",
            title: "Updates to This Policy",
            content: `
                <p>We may update this Cookies Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.</p>
                
                <p>When we make changes, we will:</p>
                <ul>
                    <li>Update the "Last Updated" date at the top of this page</li>
                    <li>Notify users of significant changes through our website or email</li>
                    <li>Ensure continued compliance with applicable laws and regulations</li>
                </ul>
                
                <p>We encourage you to review this policy periodically to stay informed about our cookie practices.</p>
            `
        }
    ]
};

// ========== COOKIES POLICY MANAGER CLASS ==========
class CookiesPolicyManager {
    constructor() {
        this.config = COOKIES_CONFIG;
        this.hero = COOKIES_HERO;
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
        this.renderHeroSection();
        this.renderTableOfContents();
        this.renderCookiesSections();
        this.enableSmoothScrolling();
        
        console.log('✅ Cookies policy configuration loaded');
    }
    
    /**
     * Apply dynamic page title
     */
    applyPageTitle() {
        const pageTitle = COOKIES_PAGE_TITLE.replace('{{BRAND_NAME}}', 'Your Brand');
        
        // Update document title
        const title = document.querySelector('title');
        if (title) {
            title.textContent = pageTitle;
        }
    }
    
    /**
     * Render hero section content
     */
    renderHeroSection() {
        const heroContent = document.querySelector('.cookies-hero .hero-content');
        if (!heroContent) return;
        
        let heroHTML = `
            <h1 class="hero-title">${this.hero.title}</h1>
            <p class="hero-subtitle">${this.hero.subtitle}</p>
        `;
        
        if (this.config.styling.showLastUpdated && this.hero.lastUpdated) {
            heroHTML += `
                <p class="last-updated">
                    <i class="fas fa-calendar-alt"></i>
                    Last updated: ${this.hero.lastUpdated}
                </p>
            `;
        }
        
        heroContent.innerHTML = heroHTML;
    }
    
    /**
     * Render table of contents
     */
    renderTableOfContents() {
        if (!this.config.styling.showTableOfContents) return;
        
        const tocSection = document.querySelector('.table-of-contents');
        if (!tocSection) return;
        
        let tocHTML = `
            <div class="container">
                <h2>Table of Contents</h2>
                <ul class="toc-list">
        `;
        
        this.config.sections.forEach(section => {
            tocHTML += `
                <li>
                    <a href="#${section.id}" style="color: ${this.config.styling.accentColor};">
                        ${section.title}
                    </a>
                </li>
            `;
        });
        
        tocHTML += `
                </ul>
            </div>
        `;
        
        tocSection.innerHTML = tocHTML;
    }
    
    /**
     * Render all cookies policy sections
     */
    renderCookiesSections() {
        const sectionsContainer = document.querySelector('.cookies-sections');
        if (!sectionsContainer) return;
        
        let sectionsHTML = '<div class="container">';
        
        this.config.sections.forEach(section => {
            sectionsHTML += `
                <section id="${section.id}" class="cookies-section">
                    <h2>${section.title}</h2>
                    <div class="section-content">
                        ${section.content}
                    </div>
                </section>
            `;
        });
        
        sectionsHTML += '</div>';
        
        sectionsContainer.innerHTML = sectionsHTML;
    }
    
    /**
     * Enable smooth scrolling for navigation links
     */
    enableSmoothScrolling() {
        if (!this.config.styling.enableSmoothScrolling) return;
        
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// ========== COOKIE CONSENT BANNER CONFIGURATION ==========
const COOKIE_CONSENT_CONFIG = {
    // Enable/disable cookie consent banner
    enabled: true,
    
    // Banner content (fully configurable)
    content: {
        message: "We use cookies to improve your experience and for analytics. By continuing to use this site, you agree to our use of cookies.",
        acceptButtonText: "Accept",
        declineButtonText: "Decline",
        policyLinkText: "Privacy Policy",
        policyLinkUrl: "./privacy.html"
    },
    
    // Styling options
    styling: {
        position: "bottom", // "bottom" or "top"
        theme: "auto", // "auto", "light", "dark"
        showPolicyLink: true,
        animation: "slide-up" // "slide-up", "fade-in", "none"
    },
    
    // Behavior settings
    behavior: {
        autoShow: true, // Show automatically on page load
        showDelay: 1000, // Delay before showing (milliseconds)
        rememberChoice: true, // Remember user's choice
        expireDays: 365 // How long to remember the choice
    }
};

// ========== EXPORT CONFIGURATIONS ==========
// Make configurations available globally
if (typeof window !== 'undefined') {
    window.COOKIES_PAGE_TITLE = COOKIES_PAGE_TITLE;
    window.COOKIES_HERO = COOKIES_HERO;
    window.COOKIES_CONFIG = COOKIES_CONFIG;
    window.COOKIE_CONSENT_CONFIG = COOKIE_CONSENT_CONFIG;
    window.CookiesPolicyManager = CookiesPolicyManager;
}

// Initialize cookies policy manager
const cookiesPolicyManager = new CookiesPolicyManager(); 