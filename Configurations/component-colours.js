/*
===========================================
COMPONENT COLOR OVERRIDE SYSTEM
===========================================
🎨 CUSTOMIZE INDIVIDUAL COMPONENT COLORS

This system allows you to override specific component colors while keeping
the base theme intact. You can customize buttons, sections, backgrounds, etc.

USAGE:
1. Set ENABLE_COMPONENT_OVERRIDES to true/false to toggle this system
2. Customize colors in the COMPONENT_OVERRIDES object
3. Colors will override theme defaults when enabled

IMPORTANT: This works alongside your theme system, not instead of it!
*/

// ===========================================
// COMPONENT OVERRIDE TOGGLE
// ===========================================
// Set to true to enable component color overrides
// Set to false to use only theme colors
const ENABLE_COMPONENT_OVERRIDES = true; // ← CHANGE THIS TO ENABLE/DISABLE

// ===========================================
// COMPONENT COLOR OVERRIDES
// ===========================================
// Define custom colors for specific components
// These override theme colors when ENABLE_COMPONENT_OVERRIDES is true

const COMPONENT_OVERRIDES = {
    
    // ===========================================
    // BADGES - EDITOR'S CHOICE ONLY
    // ===========================================
    // Only the Editor's Choice badge is customized by default
    // All other components use theme colors unless you add them here
    
    badges: {
        // Editor's Choice badge - Gold gradient styling
        editorsChoiceBackground: 'linear-gradient(135deg, #fbbf24, #f59e0b, #d97706)', // Gold gradient background for the Editor's Choice badge
        editorsChoiceText: '#ffffff',           // White text color for the Editor's Choice badge
        editorsChoiceIcon: '#ffffff',           // White icon color for the Editor's Choice badge  
        editorsChoiceShadow: 'rgba(251, 191, 36, 0.4)', // Subtle gold shadow for the Editor's Choice badge
    },
    
    // ===========================================
    // EDITOR'S CHOICE SECTION - ALWAYS GOLD
    // ===========================================
    // This ensures the editor's choice section always has gold styling
    // regardless of useManualOverride setting or current theme
    
    editorsChoiceSection: {
        // Card styling within the section
        cardBackground: 'rgba(182, 185, 14, 0.030)', // Subtle overlay
        cardBorder: '#f59e0b',                  // Orange border
    }
    
    // ===========================================
    // ADD MORE COMPONENTS HERE AS NEEDED
    // ===========================================
    // To customize other components, uncomment and modify sections from
    // component-colours-examples.js and paste them here
    
    // Example: To customize navigation, add:
    // navigation: {
    //     navBackground: '#your-color-here',
    //     navBackgroundScrolled: '#your-color-here',
    //     logoText: '#your-color-here',
    //     logoTextHover: '#your-color-here',
    //     navLinks: '#your-color-here',
    //     navLinksHover: '#your-color-here',
    //     navLinksActive: '#your-color-here',
    //     mobileMenuBackground: '#your-color-here',
    //     mobileMenuToggle: '#your-color-here',
    //     searchBackground: '#your-color-here',
    //     searchBorder: '#your-color-here',
    //     searchText: '#your-color-here',
    //     searchPlaceholder: '#your-color-here',
    //     searchButtonHover: '#your-color-here',
    //     menuButtonHover: '#your-color-here',
    // },
    
    // Example: To customize buttons, add:
    // buttons: {
    //     primaryBackground: '#your-color-here',
    //     // ... other button properties  
    // },
    
};

// ===========================================
// PAGE-SPECIFIC OVERRIDE TOGGLES
// ===========================================
// Set to true to enable page-specific overrides for each page
// Set to false to use only global component colors and theme colors

const ENABLE_HOMEPAGE_OVERRIDES = false;     // ← CHANGE THIS TO ENABLE/DISABLE homepage overrides
const ENABLE_BLOG_PAGE_OVERRIDES = false;    // ← CHANGE THIS TO ENABLE/DISABLE blog page overrides
const ENABLE_PRIVACY_PAGE_OVERRIDES = false; // ← CHANGE THIS TO ENABLE/DISABLE privacy page overrides
const ENABLE_DISCLAIMER_PAGE_OVERRIDES = false; // ← CHANGE THIS TO ENABLE/DISABLE disclaimer page overrides

// ===========================================
// PAGE-SPECIFIC COMPONENT OVERRIDES
// ===========================================
// Define custom colors for specific pages
// These override the global component colors above
// Copy examples from utils/page-specific-examples.js

const PAGE_SPECIFIC_OVERRIDES = {
    
    // ===========================================
    // HOMEPAGE SPECIFIC OVERRIDES
    // ===========================================
    // Only applied if ENABLE_HOMEPAGE_OVERRIDES = true
    '/index.html': ENABLE_HOMEPAGE_OVERRIDES ? {
        // Copy examples from page-specific-examples.js
        // Example: Gold gradient for Editor's Choice badge
        // badges: {
        //     editorsChoiceBackground: 'linear-gradient(135deg, #fbbf24, #f59e0b, #d97706)',
        //     editorsChoiceText: '#ffffff',
        //     editorsChoiceIcon: '#ffffff',
        //     editorsChoiceShadow: 'rgba(251, 191, 36, 0.4)',
        // },
        
        // Example: Custom hero section for homepage
        // hero: {
        //     titleColor: '#1f2937',
        //     subtitleColor: '#6b7280',
        //     backgroundOverlay: 'rgba(0, 0, 0, 0.1)',
        // }
    } : {},
    
    // ===========================================
    // BLOG PAGE SPECIFIC OVERRIDES
    // ===========================================
    // Only applied if ENABLE_BLOG_PAGE_OVERRIDES = true
    '/blog.html': ENABLE_BLOG_PAGE_OVERRIDES ? {
        // Copy examples from page-specific-examples.js
        // Example: Custom blog title styling
        // blogTitle: {
        //     nicheColor: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
        //     nicheTextShadow: '2px 2px 4px rgba(139, 92, 246, 0.3)',
        //     mainTitleColor: '#1f2937',
        //     subtitleColor: '#6b7280',
        // },
        
        // Example: Blog-specific card styling
        // blogCards: {
        //     cardBackground: '#fefefe',
        //     cardHoverBackground: '#f8fafc',
        //     categoryBadgeBackground: '#8b5cf6',
        //     categoryBadgeText: '#ffffff',
        // }
    } : {},
    
    // ===========================================
    // PRIVACY PAGE SPECIFIC OVERRIDES
    // ===========================================
    // Only applied if ENABLE_PRIVACY_PAGE_OVERRIDES = true
    '/privacy.html': ENABLE_PRIVACY_PAGE_OVERRIDES ? {
        // Copy examples from page-specific-examples.js
        // Example: Legal document styling
        // legal: {
        //     headingColor: '#374151',
        //     textColor: '#6b7280',
        //     linkColor: '#3b82f6',
        //     linkHoverColor: '#2563eb',
        // }
    } : {},
    
    // ===========================================
    // DISCLAIMER PAGE SPECIFIC OVERRIDES
    // ===========================================
    // Only applied if ENABLE_DISCLAIMER_PAGE_OVERRIDES = true
    '/disclaimer.html': ENABLE_DISCLAIMER_PAGE_OVERRIDES ? {
        // Copy examples from page-specific-examples.js
        // Example: Legal document styling
        // legal: {
        //     headingColor: '#374151',
        //     textColor: '#6b7280',
        //     linkColor: '#3b82f6',
        //     linkHoverColor: '#2563eb',
        // }
    } : {}
};

// ===========================================
// COMPONENT COLOR MANAGER
// ===========================================
class ComponentColorManager {
    
    /**
     * Initialize the component color system
     */
    static init() {
        if (ENABLE_COMPONENT_OVERRIDES) {
            // Set the data attribute on HTML element for CSS targeting
            document.documentElement.setAttribute('data-component-overrides', 'true');
            this.applyComponentOverrides();
            console.log('🎨 Component color overrides enabled');
        } else {
            // Remove the data attribute
            document.documentElement.removeAttribute('data-component-overrides');
            this.removeComponentOverrides();
            console.log('🎨 Component color overrides disabled - using theme colors only');
        }
    }
    
    /**
     * Apply component color overrides
     */
    static applyComponentOverrides() {
        // Create or update the component override style element
        let styleElement = document.getElementById('component-color-overrides');
        if (!styleElement) {
            styleElement = document.createElement('style');
            styleElement.id = 'component-color-overrides';
            document.head.appendChild(styleElement);
        }
        
        // Generate CSS from overrides
        const css = this.generateOverrideCSS();
        styleElement.textContent = css;
        
        console.log('✅ Component override CSS applied');
        console.log('📄 Generated CSS length:', css.length);
        console.log('🎯 HTML data attribute:', document.documentElement.getAttribute('data-component-overrides'));
    }
    
    /**
     * Remove component color overrides
     */
    static removeComponentOverrides() {
        const styleElement = document.getElementById('component-color-overrides');
        if (styleElement) {
            styleElement.remove();
        }
        console.log('🧹 Component override CSS removed');
    }
    
    /**
     * Generate CSS from component overrides
     */
    static generateOverrideCSS() {
        const overrides = COMPONENT_OVERRIDES;
        let css = `
        /* Component Color Overrides - Generated automatically */
        /* This CSS has higher specificity than theme CSS */
        
        `;
        
        // Badge overrides - Global
        if (overrides.badges) {
            const badges = overrides.badges;
            css += `
            /* Badge Overrides - Global */
            html[data-component-overrides="true"] .top-pick-badge {
                background: ${badges.editorsChoiceBackground} !important;
                color: ${badges.editorsChoiceText} !important;
                box-shadow: 0 4px 15px ${badges.editorsChoiceShadow} !important;
            }
            html[data-component-overrides="true"] .top-pick-badge i {
                color: ${badges.editorsChoiceIcon} !important;
            }
            
            /* Hide circle background for manual override editor's choice review card */
            html[data-component-overrides="true"] #editors-choice-review .review-rank-badge {
                background: transparent !important;
                border: none !important;
                backdrop-filter: none !important;
                border-radius: 0 !important;
                width: auto !important;
                height: auto !important;
            }
            
            /* Fix editor's choice badge positioning and sizing - manual on/true */
            html[data-component-overrides="true"] #editors-choice-review .editors-choice-badge {
                position: relative !important;
                top: 0 !important;
                left: 0 !important;
                transform: none !important;
                margin-top: 8px !important;
                padding: 8px 8px !important;
                font-size: 12px !important;
                min-height: 36px !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                border: 2px solid rgba(255, 255, 255, 0.3) !important;
                border-radius: 50px !important;
                backdrop-filter: blur(5px) !important;
            }
            
            /* Fix selected product detailed review card badge positioning */
            html[data-component-overrides="true"] .detailed-review-card.editors-choice-gold .review-rank-badge {
                background: transparent !important;
                border: none !important;
                backdrop-filter: none !important;
                border-radius: 0 !important;
                width: auto !important;
                height: auto !important;
            }
            
            /* Fix selected product badge positioning - manual off/false */
            html[data-component-overrides="true"] .detailed-review-card.editors-choice-gold .editors-choice-badge {
                position: relative !important;
                top: 0 !important;
                left: 0 !important;
                transform: none !important;
                margin-top: 8px !important;
                padding: 8px 8px !important;
                font-size: 12px !important;
                min-height: 36px !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                border: 2px solid rgba(255, 255, 255, 0.3) !important;
                border-radius: 50px !important;
                backdrop-filter: blur(5px) !important;
            }
            `;
        }

        // Editor's Choice Section overrides - Always applied
        if (overrides.editorsChoiceSection) {
            const editors = overrides.editorsChoiceSection;
            css += `
            /* Editor's Choice Section - Always Gold */
            html[data-component-overrides="true"] .top-pick-section {
                background: ${editors.sectionBackground} !important;
                color: ${editors.sectionText} !important;
            }
            html[data-component-overrides="true"] .top-pick-section .top-pick-card {
                background: ${editors.cardBackground} !important;
                border: 2px solid ${editors.cardBorder} !important;
                backdrop-filter: blur(10px) !important;
            }
            html[data-component-overrides="true"] .top-pick-section .top-pick-title {
                color: ${editors.titleColor} !important;
            }
            html[data-component-overrides="true"] .top-pick-section .top-pick-description {
                color: ${editors.descriptionColor} !important;
            }
            html[data-component-overrides="true"] .top-pick-section .current-price {
                color: ${editors.priceColor} !important;
            }
            html[data-component-overrides="true"] .top-pick-section .btn-primary {
                background: ${editors.buttonBackground} !important;
                color: ${editors.buttonText} !important;
                border: none !important;
            }
            html[data-component-overrides="true"] .top-pick-section .btn-primary:hover {
                background: ${editors.buttonHoverBackground} !important;
                transform: translateY(-2px) !important;
            }
            html[data-component-overrides="true"] .top-pick-section .btn-secondary {
                background: ${editors.secondaryButtonBackground} !important;
                color: ${editors.secondaryButtonText} !important;
                border: 2px solid ${editors.secondaryButtonBorder} !important;
            }
            html[data-component-overrides="true"] .top-pick-section .btn-secondary:hover {
                background: ${editors.secondaryButtonHoverBackground} !important;
                border-color: ${editors.secondaryButtonHoverBorder} !important;
            }
            `;
        }
        
        // Navigation overrides
        if (overrides.navigation) {
            const nav = overrides.navigation;
            css += `
            /* Navigation Overrides */
            html[data-component-overrides="true"] .sticky-nav {
                background: ${nav.navBackground || 'var(--bg-card)'} !important;
            }
            html[data-component-overrides="true"] .sticky-nav.scrolled {
                background: ${nav.navBackgroundScrolled || 'var(--bg-card)'} !important;
            }
            html[data-component-overrides="true"] .logo-text {
                color: ${nav.logoText || 'var(--primary-color)'} !important;
            }
            html[data-component-overrides="true"] .logo-text:hover {
                color: ${nav.logoTextHover || 'var(--primary-color)'} !important;
            }
            html[data-component-overrides="true"] .nav-link {
                color: ${nav.navLinks || 'var(--text-primary)'} !important;
            }
            html[data-component-overrides="true"] .nav-link:hover {
                color: ${nav.navLinksHover || 'var(--primary-color)'} !important;
            }
            html[data-component-overrides="true"] .nav-link.active {
                color: ${nav.navLinksActive || 'var(--text-white)'} !important;
            }
            html[data-component-overrides="true"] .nav-menu {
                background: ${nav.mobileMenuBackground || 'var(--bg-card)'} !important;
            }
            html[data-component-overrides="true"] .nav-menu-btn,
            html[data-component-overrides="true"] .nav-search-btn {
                color: ${nav.mobileMenuToggle || 'var(--text-primary)'} !important;
            }
            /* Search Bar Overrides */
            html[data-component-overrides="true"] .nav-search-wrapper {
                background: ${nav.searchBackground || 'var(--bg-primary)'} !important;
                border-color: ${nav.searchBorder || 'var(--primary-color)'} !important;
            }
            html[data-component-overrides="true"] .nav-search-input {
                color: ${nav.searchText || 'var(--text-primary)'} !important;
            }
            html[data-component-overrides="true"] .nav-search-input::placeholder {
                color: ${nav.searchPlaceholder || 'var(--text-secondary)'} !important;
            }
            html[data-component-overrides="true"] .nav-search-btn:hover {
                background: ${nav.searchButtonHover || 'var(--bg-secondary)'} !important;
            }
            html[data-component-overrides="true"] .nav-menu-btn:hover {
                background: ${nav.menuButtonHover || 'var(--bg-secondary)'} !important;
            }
            `;
        }
        
        // Button overrides
        if (overrides.buttons) {
            const btn = overrides.buttons;
            css += `
            /* Button Overrides */
            html[data-component-overrides="true"] .btn-primary {
                background: ${btn.primaryBackground} !important;
                border-color: ${btn.primaryBorder} !important;
                color: ${btn.primaryText} !important;
            }
            html[data-component-overrides="true"] .btn-primary:hover {
                background: ${btn.primaryBackgroundHover} !important;
            }
            html[data-component-overrides="true"] .btn-secondary {
                background: ${btn.secondaryBackground} !important;
                border-color: ${btn.secondaryBorder} !important;
                color: ${btn.secondaryText} !important;
            }
            html[data-component-overrides="true"] .btn-secondary:hover {
                background: ${btn.secondaryBackgroundHover} !important;
            }
            html[data-component-overrides="true"] .floating-cta-link {
                background: ${btn.floatingBackground} !important;
                color: ${btn.floatingText} !important;
            }
            html[data-component-overrides="true"] .floating-cta-link:hover {
                background: ${btn.floatingBackgroundHover} !important;
            }
            `;
        }
        
        // Section overrides
        if (overrides.sections) {
            const sec = overrides.sections;
            css += `
            /* Section Overrides */
            html[data-component-overrides="true"] .hero-section {
                background: ${sec.heroBackground} !important;
            }
            html[data-component-overrides="true"] .hero-title {
                color: ${sec.heroText} !important;
            }
            html[data-component-overrides="true"] .hero-subtitle {
                color: ${sec.heroSubtext} !important;
            }
            html[data-component-overrides="true"] .top-pick-section {
                background: ${sec.topPickBackground} !important;
            }
            html[data-component-overrides="true"] .footer {
                background: ${sec.footerBackground} !important;
            }
            html[data-component-overrides="true"] .footer-section h4 {
                color: ${sec.footerHeadings} !important;
            }
            html[data-component-overrides="true"] .footer-section p {
                color: ${sec.footerText} !important;
            }
            `;
        }
        
        // Product card overrides
        if (overrides.productCards) {
            const card = overrides.productCards;
            css += `
            /* Product Card Overrides */
            html[data-component-overrides="true"] .product-card {
                background: ${card.cardBackground} !important;
                border-color: ${card.cardBorder} !important;
            }
            html[data-component-overrides="true"] .product-card:hover {
                background: ${card.cardBackgroundHover} !important;
                border-color: ${card.cardBorderHover} !important;
            }
            html[data-component-overrides="true"] .rank-badge {
                background: ${card.rankBadgeBackground} !important;
                color: ${card.rankBadgeText} !important;
            }
            html[data-component-overrides="true"] .product-title {
                color: ${card.productTitle} !important;
            }
            html[data-component-overrides="true"] .product-description {
                color: ${card.productDescription} !important;
            }
            html[data-component-overrides="true"] .current-price {
                color: ${card.productPrice} !important;
            }
            html[data-component-overrides="true"] .stars i {
                color: ${card.starActive} !important;
            }
            `;
        }
        
        // Add page-specific overrides
        const currentPath = window.location.pathname;
        const pageOverrides = PAGE_SPECIFIC_OVERRIDES[currentPath];
        
        if (pageOverrides) {
            css += `
            /* Page-Specific Overrides for ${currentPath} */
            `;
            
            // Homepage specific overrides
            if (pageOverrides.badges) {
                const badges = pageOverrides.badges;
                css += `
                /* Editor's Choice Badge - Homepage Only */
                html[data-component-overrides="true"] .top-pick-badge {
                    background: ${badges.editorsChoiceBackground} !important;
                    color: ${badges.editorsChoiceText} !important;
                    box-shadow: 0 4px 15px ${badges.editorsChoiceShadow} !important;
                }
                html[data-component-overrides="true"] .top-pick-badge i {
                    color: ${badges.editorsChoiceIcon} !important;
                }
                `;
            }
            
            if (pageOverrides.hero) {
                const hero = pageOverrides.hero;
                css += `
                /* Hero Section - Homepage Only */
                html[data-component-overrides="true"] .hero-title {
                    color: ${hero.titleColor} !important;
                }
                html[data-component-overrides="true"] .hero-subtitle {
                    color: ${hero.subtitleColor} !important;
                }
                html[data-component-overrides="true"] .hero-section::before {
                    background: ${hero.backgroundOverlay} !important;
                }
                `;
            }
            
            // Blog page specific overrides
            if (pageOverrides.blogTitle) {
                const blog = pageOverrides.blogTitle;
                css += `
                /* Blog Title - Blog Page Only */
                html[data-component-overrides="true"] .hero-title .highlight {
                    background: ${blog.nicheColor} !important;
                    -webkit-background-clip: text !important;
                    -webkit-text-fill-color: transparent !important;
                    background-clip: text !important;
                    text-shadow: ${blog.nicheTextShadow} !important;
                }
                html[data-component-overrides="true"] .hero-title {
                    color: ${blog.mainTitleColor} !important;
                }
                html[data-component-overrides="true"] .hero-subtitle {
                    color: ${blog.subtitleColor} !important;
                }
                `;
            }
            
            if (pageOverrides.blogCards) {
                const cards = pageOverrides.blogCards;
                css += `
                /* Blog Cards - Blog Page Only */
                html[data-component-overrides="true"] .blog-post {
                    background: ${cards.cardBackground} !important;
                }
                html[data-component-overrides="true"] .blog-post:hover {
                    background: ${cards.cardHoverBackground} !important;
                }
                html[data-component-overrides="true"] .blog-category {
                    background: ${cards.categoryBadgeBackground} !important;
                    color: ${cards.categoryBadgeText} !important;
                }
                `;
            }
            
            // Legal pages specific overrides
            if (pageOverrides.legal) {
                const legal = pageOverrides.legal;
                css += `
                /* Legal Page Styling */
                html[data-component-overrides="true"] .legal-content h1,
                html[data-component-overrides="true"] .legal-content h2,
                html[data-component-overrides="true"] .legal-content h3 {
                    color: ${legal.headingColor} !important;
                }
                html[data-component-overrides="true"] .legal-content p,
                html[data-component-overrides="true"] .legal-content li {
                    color: ${legal.textColor} !important;
                }
                html[data-component-overrides="true"] .legal-content a {
                    color: ${legal.linkColor} !important;
                }
                html[data-component-overrides="true"] .legal-content a:hover {
                    color: ${legal.linkHoverColor} !important;
                }
                `;
            }
        }
        
        return css;
    }
    
    /**
     * Toggle component overrides on/off
     */
    static toggle(enabled = null) {
        const currentState = ENABLE_COMPONENT_OVERRIDES;
        const newState = enabled !== null ? enabled : !currentState;
        
        // Update the constant (this is for runtime only)
        window.ENABLE_COMPONENT_OVERRIDES = newState;
        
        if (newState) {
            document.documentElement.setAttribute('data-component-overrides', 'true');
            this.applyComponentOverrides();
            console.log('🎨 Component overrides enabled via toggle');
        } else {
            document.documentElement.removeAttribute('data-component-overrides');
            this.removeComponentOverrides();
            console.log('🎨 Component overrides disabled via toggle');
        }
        
        return newState;
    }
    
    /**
     * Get current override status
     */
    static isEnabled() {
        return document.documentElement.hasAttribute('data-component-overrides');
    }
    
    /**
     * Update specific component colors
     */
    static updateComponent(category, property, value) {
        if (!COMPONENT_OVERRIDES[category]) {
            console.warn(`Category "${category}" not found in component overrides`);
            return false;
        }
        
        COMPONENT_OVERRIDES[category][property] = value;
        
        if (this.isEnabled()) {
            this.applyComponentOverrides();
        }
        
        console.log(`Updated ${category}.${property} to ${value}`);
        return true;
    }
}

// ===========================================
// INITIALIZATION
// ===========================================
// Initialize when DOM is ready or immediately if already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        ComponentColorManager.init();
    });
} else {
    // DOM is already loaded, initialize immediately
    ComponentColorManager.init();
}

// ===========================================
// GLOBAL ACCESS
// ===========================================
// Make available globally for console testing
window.ComponentColorManager = ComponentColorManager;
window.COMPONENT_OVERRIDES = COMPONENT_OVERRIDES;

// Console helper functions
window.enableComponentOverrides = () => ComponentColorManager.toggle(true);
window.disableComponentOverrides = () => ComponentColorManager.toggle(false);
window.toggleComponentOverrides = () => ComponentColorManager.toggle();

// Page-specific override helpers
window.updatePageOverride = (category, property, value) => {
    const currentPath = window.location.pathname;
    if (!PAGE_SPECIFIC_OVERRIDES[currentPath]) {
        PAGE_SPECIFIC_OVERRIDES[currentPath] = {};
    }
    if (!PAGE_SPECIFIC_OVERRIDES[currentPath][category]) {
        PAGE_SPECIFIC_OVERRIDES[currentPath][category] = {};
    }
    PAGE_SPECIFIC_OVERRIDES[currentPath][category][property] = value;
    
    if (ComponentColorManager.isEnabled()) {
        ComponentColorManager.applyComponentOverrides();
    }
    
    console.log(`Updated page-specific ${category}.${property} to ${value} for ${currentPath}`);
};

window.showPageOverrides = () => {
    const currentPath = window.location.pathname;
    const overrides = PAGE_SPECIFIC_OVERRIDES[currentPath];
    if (overrides) {
        console.log(`Page-specific overrides for ${currentPath}:`, overrides);
    } else {
        console.log(`No page-specific overrides found for ${currentPath}`);
    }
};

// Make page overrides available globally
window.PAGE_SPECIFIC_OVERRIDES = PAGE_SPECIFIC_OVERRIDES;

// Debug helper
window.debugComponentOverrides = () => {
    console.log('🔍 Component Override Debug Info:');
    console.log('   ENABLE_COMPONENT_OVERRIDES:', ENABLE_COMPONENT_OVERRIDES);
    console.log('   HTML data attribute:', document.documentElement.getAttribute('data-component-overrides'));
    console.log('   Style element exists:', !!document.getElementById('component-color-overrides'));
    console.log('   Current page:', window.location.pathname);
    console.log('   Page-specific enable flags:');
    console.log('     ENABLE_HOMEPAGE_OVERRIDES:', ENABLE_HOMEPAGE_OVERRIDES);
    console.log('     ENABLE_BLOG_PAGE_OVERRIDES:', ENABLE_BLOG_PAGE_OVERRIDES);
    console.log('     ENABLE_PRIVACY_PAGE_OVERRIDES:', ENABLE_PRIVACY_PAGE_OVERRIDES);
    console.log('     ENABLE_DISCLAIMER_PAGE_OVERRIDES:', ENABLE_DISCLAIMER_PAGE_OVERRIDES);
    console.log('   Page overrides for current page:', PAGE_SPECIFIC_OVERRIDES[window.location.pathname]);
    console.log('   Global overrides:', COMPONENT_OVERRIDES);
    
    const styleElement = document.getElementById('component-color-overrides');
    if (styleElement) {
        console.log('   CSS length:', styleElement.textContent.length);
        console.log('   First 500 chars of CSS:', styleElement.textContent.substring(0, 500));
    }
};

console.log('🎨 Component Color System Loaded!');
console.log('💡 Use enableComponentOverrides() or disableComponentOverrides() in console');
console.log('📄 Use updatePageOverride(category, property, value) for page-specific changes');
console.log('🔍 Use showPageOverrides() to see current page overrides');
console.log('🐛 Use debugComponentOverrides() to see debug info');
console.log('🔧 Edit global colors in utils/component-colours.js');
console.log('📝 Copy page-specific examples from utils/page-specific-examples.js'); 