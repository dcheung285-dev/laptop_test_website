/*
===========================================
BRAND CONFIGURATION SYSTEM
===========================================
🎯 CHANGE YOUR BRAND NAME HERE - ONLY ONE LINE TO EDIT:
*/

const BRAND_NAME = "Laptop World";  // ← CHANGE THIS LINE ONLY!

/*
===========================================
Everything below this automatically uses the BRAND_NAME above.
Don't edit anything below unless you need advanced customization.
===========================================
*/

// Brand Configuration Object
const BRAND_CONFIG = {
    // Logo Configuration
    logo: {
        src: "./assets/images/laptop_test/tech_icon_logo.png",
        alt: BRAND_NAME + " Logo",
        width: "auto",
        height: "32px"
    },
    
    // Brand Text Configuration
    text: {
        name: BRAND_NAME,
        tagline: "Find Your Perfect Laptop",
        showText: true,
        showTagline: true
    },
    
    // Navigation Specific Settings
    navigation: {
        showLogo: true,
        showText: true,
        linkToHome: true,
        homeUrl: "./home.html"
    },
    
    // Footer Specific Settings
    footer: {
        showLogo: true,
        showText: true,
        showTagline: true,
        logoHeight: "40px",
        layout: "combined",
        linkToHome: true,
        homeUrl: "./home.html"
    },
    
    // Advanced Settings
    advanced: {
        lazyLoadLogo: false,
        fallbackText: BRAND_NAME,
        usePlaceholders: true,
        customCSS: {
            logoFilter: "",
            textColor: "",
            hoverEffect: true
        }
    }
};

// Brand Configuration Manager Class
class BrandConfigManager {
    constructor() {
        this.config = {
            text: {
                name: BRAND_CONFIG.text.name,
                tagline: BRAND_CONFIG.text.tagline,
                showText: BRAND_CONFIG.text.showText,
                showTagline: BRAND_CONFIG.text.showTagline
            },
            logo: {
                src: BRAND_CONFIG.logo.src,
                alt: BRAND_CONFIG.logo.alt,
                showLogo: BRAND_CONFIG.navigation.showLogo
            },
            navigation: {
                showLogo: BRAND_CONFIG.navigation.showLogo,
                showText: BRAND_CONFIG.navigation.showText,
                linkToHome: BRAND_CONFIG.navigation.linkToHome,
                homeUrl: BRAND_CONFIG.navigation.homeUrl
            },
            footer: {
                showLogo: BRAND_CONFIG.footer.showLogo,
                showText: BRAND_CONFIG.footer.showText,
                showTagline: BRAND_CONFIG.footer.showTagline,
                layout: BRAND_CONFIG.footer.layout,
                logoHeight: BRAND_CONFIG.footer.logoHeight
            },
            advanced: {
                fallbackText: BRAND_CONFIG.advanced.fallbackText,
                customCSS: BRAND_CONFIG.advanced.customCSS
            }
        };
        
        this.init();
    }
    
    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.apply();
                // Set up default brand after a short delay
                setTimeout(() => {
                    if (this.isPlaceholder(this.config.text.name)) {
                        this.setupDefaultBrand();
                    }
                }, 200);
            });
        } else {
            // Small delay to ensure other components are loaded
            setTimeout(() => {
                this.apply();
                // Set up default brand after a short delay
                setTimeout(() => {
                    if (this.isPlaceholder(this.config.text.name)) {
                        this.setupDefaultBrand();
                    }
                }, 200);
            }, 100);
        }
    }
    
    /**
     * Get current brand configuration
     */
    get() {
        return { ...this.config };
    }
    
    /**
     * Update brand configuration
     * @param {Object} updates - Object with updates to apply
     */
    update(updates) {
        this.config = this.deepMerge(this.config, updates);
        this.apply();
        console.log('Brand configuration updated:', updates);
    }
    
    /**
     * Apply brand configuration to DOM elements
     */
    apply() {
        this.applyToNavigation();
        this.applyToFooter();
        this.applied = true;
        console.log('Brand configuration applied to all elements');
    }
    
    /**
     * Apply brand settings to navigation
     */
    applyToNavigation() {
        const navBrand = document.querySelector('.nav-brand');
        const navLogo = document.querySelector('.nav-logo');
        
        if (!navBrand || !navLogo) {
            // If navigation isn't loaded yet, try again later with exponential backoff
            setTimeout(() => this.applyToNavigation(), 200);
            return;
        }
        
        // Update logo image
        const logoImg = navLogo.querySelector('.logo-img');
        if (logoImg) {
            if (this.config.navigation.showLogo && this.config.logo.src && !this.isPlaceholder(this.config.logo.src)) {
                logoImg.src = this.config.logo.src;
                logoImg.alt = this.config.logo.alt + " Logo Icon";
                logoImg.style.display = 'inline-block';
                logoImg.style.marginRight = '8px';
            } else {
                logoImg.style.display = 'none';
            }
        }
        
        // Update brand text - always show if enabled
        const logoText = navLogo.querySelector('.logo-text');
        if (logoText) {
            if (this.config.navigation.showText && this.config.text.showText) {
                logoText.textContent = this.config.text.name;
                logoText.style.display = 'inline-block';
            } else {
                logoText.style.display = 'none';
            }
        }
        
        // Update navigation link
        if (this.config.navigation.linkToHome) {
            navLogo.href = this.config.navigation.homeUrl;
        }
        
        console.log('Brand applied to navigation:', this.config.text.name);
    }
    
    /**
     * Apply brand settings to footer
     */
    applyToFooter() {
        // Try different footer selectors as footer might be loaded dynamically
        const footerBrand = document.querySelector('.footer-brand') || 
                           document.querySelector('.footer-brand-combined') ||
                           document.querySelector('#footer-container .footer-brand');
        
        if (!footerBrand) {
            // If footer isn't loaded yet, try again later with more aggressive retry
            setTimeout(() => this.applyToFooter(), 200);
            return;
        }
        
        // Clear existing content
        footerBrand.innerHTML = '';
        
        // Apply based on layout setting
        switch (this.config.footer.layout) {
            case 'logo-only':
                this.createFooterLogoOnly(footerBrand);
                break;
            case 'text-only':
                this.createFooterTextOnly(footerBrand);
                break;
            case 'combined':
            default:
                this.createFooterCombined(footerBrand);
                break;
        }
        
        // Update copyright brand name
        const footerBrandName = document.querySelector('.footer-brand-name');
        if (footerBrandName) {
            footerBrandName.textContent = this.config.text.name;
        }
        
        console.log('Brand applied to footer:', this.config.text.name);
    }
    
    /**
     * Create footer with logo only
     */
    createFooterLogoOnly(footerBrand) {
        if (!this.config.footer.showLogo) return;
        
        footerBrand.className = 'footer-brand footer-logo-img-only';
        
        // Create clickable link wrapper
        const brandLink = document.createElement('a');
        brandLink.href = this.config.navigation.homeUrl;
        brandLink.className = 'footer-brand-link';
        brandLink.style.textDecoration = 'none';
        brandLink.style.color = 'inherit';
        
        const logoImg = document.createElement('img');
        logoImg.src = this.config.logo.src;
        logoImg.alt = this.config.logo.alt + " Logo Icon";
        logoImg.className = 'footer-logo-img-only';
        logoImg.style.height = this.config.footer.logoHeight;
        logoImg.style.cursor = 'pointer';
        
        if (this.config.advanced.customCSS.logoFilter) {
            logoImg.style.filter = this.config.advanced.customCSS.logoFilter;
        }
        
        brandLink.appendChild(logoImg);
        footerBrand.appendChild(brandLink);
    }
    
    /**
     * Create footer with text only
     */
    createFooterTextOnly(footerBrand) {
        if (!this.config.footer.showText) return;
        
        footerBrand.className = 'footer-brand';
        
        // Create clickable link wrapper
        const brandLink = document.createElement('a');
        brandLink.href = this.config.navigation.homeUrl;
        brandLink.className = 'footer-brand-link';
        brandLink.style.textDecoration = 'none';
        brandLink.style.color = 'inherit';
        brandLink.style.display = 'block';
        
        const brandTitle = document.createElement('h4');
        brandTitle.textContent = this.config.text.name;
        brandTitle.style.margin = '0 0 8px 0';
        brandTitle.style.cursor = 'pointer';
        
        if (this.config.advanced.customCSS.textColor) {
            brandTitle.style.color = this.config.advanced.customCSS.textColor;
        }
        
        brandLink.appendChild(brandTitle);
        
        // Add tagline on new line if enabled and not a placeholder
        if (this.config.footer.showTagline && this.config.text.showTagline && !this.isPlaceholder(this.config.text.tagline)) {
            const tagline = document.createElement('p');
            tagline.textContent = this.config.text.tagline;
            tagline.style.fontSize = '0.875rem';
            tagline.style.opacity = '0.8';
            tagline.style.margin = '0 0 10px 0';
            tagline.style.cursor = 'pointer';
            brandLink.appendChild(tagline);
        }
        
        footerBrand.appendChild(brandLink);
    }
    
    /**
     * Create footer with combined logo and text
     */
    createFooterCombined(footerBrand) {
        footerBrand.className = 'footer-brand footer-brand-combined';
        
        // Create clickable link wrapper
        const brandLink = document.createElement('a');
        brandLink.href = this.config.navigation.homeUrl;
        brandLink.className = 'footer-brand-link';
        brandLink.style.textDecoration = 'none';
        brandLink.style.color = 'inherit';
        brandLink.style.display = 'block';
        
        // Create container for logo and brand name
        const brandContainer = document.createElement('div');
        brandContainer.className = 'brand-container';
        brandContainer.style.cursor = 'pointer';
        
        // Add logo if enabled and not a placeholder
        if (this.config.footer.showLogo && this.config.logo.src && !this.isPlaceholder(this.config.logo.src)) {
            const logoImg = document.createElement('img');
            logoImg.src = this.config.logo.src;
            logoImg.alt = this.config.logo.alt + " Logo Icon";
            logoImg.className = 'footer-logo-img';
            logoImg.style.height = this.config.footer.logoHeight;
            logoImg.style.cursor = 'pointer';
            
            if (this.config.advanced.customCSS.logoFilter) {
                logoImg.style.filter = this.config.advanced.customCSS.logoFilter;
            }
            
            brandContainer.appendChild(logoImg);
        }
        
        // Add text if enabled
        if (this.config.footer.showText) {
            const brandTitle = document.createElement('h4');
            brandTitle.textContent = this.config.text.name;
            brandTitle.style.margin = '0';
            brandTitle.style.cursor = 'pointer';
            
            if (this.config.advanced.customCSS.textColor) {
                brandTitle.style.color = this.config.advanced.customCSS.textColor;
            }
            
            brandContainer.appendChild(brandTitle);
        }
        
        brandLink.appendChild(brandContainer);
        
        // Add tagline on new line if enabled and not a placeholder
        if (this.config.footer.showTagline && this.config.text.showTagline && !this.isPlaceholder(this.config.text.tagline)) {
            const tagline = document.createElement('p');
            tagline.textContent = this.config.text.tagline;
            tagline.style.fontSize = '0.875rem';
            tagline.style.opacity = '0.8';
            tagline.style.margin = '0 0 10px 0';
            tagline.style.cursor = 'pointer';
            brandLink.appendChild(tagline);
        }
        
        footerBrand.appendChild(brandLink);
    }
    
    /**
     * Deep merge objects
     */
    deepMerge(target, source) {
        const result = { ...target };
        
        for (const key in source) {
            if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
                result[key] = this.deepMerge(result[key] || {}, source[key]);
            } else {
                result[key] = source[key];
            }
        }
        
        return result;
    }
    
    /**
     * Force re-apply brand settings (useful for debugging)
     */
    forceApply() {
        setTimeout(() => this.apply(), 100);
    }

    /**
     * Check if a value is a placeholder
     */
    isPlaceholder(value) {
        return typeof value === 'string' && value.includes('{{') && value.includes('}}');
    }

    /**
     * Set up a default working brand
     */
    setupDefaultBrand() {
        this.update({
            text: { 
                name: BRAND_NAME,
                tagline: BRAND_CONFIG.text.tagline,
                showText: BRAND_CONFIG.text.showText,
                showTagline: BRAND_CONFIG.text.showTagline
            },
            navigation: {
                showLogo: BRAND_CONFIG.navigation.showLogo,
                showText: BRAND_CONFIG.navigation.showText
            },
            footer: {
                showLogo: BRAND_CONFIG.footer.showLogo,
                showText: BRAND_CONFIG.footer.showText,
                showTagline: BRAND_CONFIG.footer.showTagline,
                layout: BRAND_CONFIG.footer.layout
            }
        });
        console.log('Default brand setup applied');
    }
}

// Initialize brand configuration manager
const brandConfigManager = new BrandConfigManager();

// Set up a working brand with logo and text immediately
setTimeout(() => {
    BrandHelpers.setupBrand(BRAND_CONFIG.logo.src, BRAND_NAME, BRAND_CONFIG.text.tagline);
    // Force apply after a short delay to ensure navigation is loaded
    setTimeout(() => brandConfigManager.forceApply(), 300);
    setTimeout(() => brandConfigManager.forceApply(), 600);
    setTimeout(() => brandConfigManager.forceApply(), 1000);
}, 50);

// Also listen for navigation loaded events
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        brandConfigManager.forceApply();
    }, 500);
    setTimeout(() => {
        brandConfigManager.forceApply();
    }, 1000);
});

// Force apply when window loads
window.addEventListener('load', () => {
    setTimeout(() => {
        brandConfigManager.forceApply();
    }, 200);
    setTimeout(() => {
        brandConfigManager.forceApply();
    }, 500);
});

// Also try to apply after footer is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Watch for footer container to be populated
    const observer = new MutationObserver(() => {
        const footerBrand = document.querySelector('.footer-brand');
        if (footerBrand) {
            brandConfigManager.forceApply();
            observer.disconnect();
        }
    });
    
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        observer.observe(footerContainer, { childList: true, subtree: true });
    }
});

// Make functions available globally
window.BrandConfig = {
    get: () => brandConfigManager.get(),
    update: (updates) => brandConfigManager.update(updates),
    apply: () => brandConfigManager.forceApply()
};

// Helper functions for common operations
const BrandHelpers = {
    /**
     * Quick brand setup - replaces placeholders with real values
     */
    setupBrand(logoPath, brandName, tagline = "") {
        brandConfigManager.update({
            logo: { 
                src: logoPath,
                alt: brandName
            },
            text: { 
                name: brandName,
                tagline: tagline,
                showTagline: tagline.length > 0
            },
            navigation: {
                showLogo: logoPath && logoPath.length > 0,
                showText: true
            },
            footer: {
                showLogo: logoPath && logoPath.length > 0,
                showText: true,
                showTagline: tagline.length > 0,
                layout: logoPath && logoPath.length > 0 ? "combined" : "text-only"
            }
        });
        console.log(`Brand setup complete: ${brandName}`);
    },
    
    /**
     * Set up brand with just text (no logo)
     */
    setupTextOnlyBrand(brandName, tagline = "") {
        brandConfigManager.update({
            text: { 
                name: brandName,
                tagline: tagline,
                showTagline: tagline.length > 0
            },
            navigation: {
                showLogo: false,
                showText: true
            },
            footer: {
                showLogo: false,
                showText: true,
                showTagline: tagline.length > 0,
                layout: "text-only"
            }
        });
        console.log(`Text-only brand setup complete: ${brandName}`);
    },
    
    /**
     * Toggle brand elements
     */
    toggleElements(showLogo = true, showText = true, showTagline = false) {
        brandConfigManager.update({
            navigation: { showLogo, showText },
            footer: { showLogo, showText, showTagline }
        });
    },
    
    /**
     * Set footer layout
     */
    setFooterLayout(layout) {
        const validLayouts = ['combined', 'logo-only', 'text-only'];
        if (validLayouts.includes(layout)) {
            brandConfigManager.update({
                footer: { layout }
            });
        } else {
            console.warn(`Invalid layout. Use: ${validLayouts.join(', ')}`);
        }
    }
};

// Make helpers available globally
window.BrandHelpers = BrandHelpers;
window.BRAND_NAME = BRAND_NAME;
window.BRAND_CONFIG = BRAND_CONFIG;

console.log('Brand configuration system initialized. Use BrandConfig.* and BrandHelpers.* commands in console.'); 