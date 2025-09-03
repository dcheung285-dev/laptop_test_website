/*
===========================================
SPACING OVERRIDE SYSTEM
===========================================
🎯 CUSTOMIZE SPACING AND PADDING FOR ANY ELEMENT

This system allows you to override spacing and padding for:
- Entire website (global overrides)
- Individual pages (page-specific overrides)
- Specific sections within pages (section-specific overrides)

FEATURES:
- Global spacing control
- Page-specific spacing
- Section-specific spacing
- Navigation padding control
- Container width adjustments
- Product grid spacing
- Blog layout spacing
- Responsive spacing overrides

USAGE:
1. Set ENABLE_SPACING_OVERRIDES to true/false to toggle this system
2. Customize spacing in the SPACING_OVERRIDES object
3. Use page-specific overrides for different layouts
4. All spacing uses CSS custom properties for consistency
*/

// ===========================================
// SPACING OVERRIDE TOGGLES
// ===========================================
// Master toggle - Set to true to enable spacing overrides system
// Set to false to disable ALL spacing overrides
const ENABLE_SPACING_OVERRIDES = true; // ← MASTER TOGGLE - CHANGE THIS TO ENABLE/DISABLE ALL

// ===========================================
// SECTION-SPECIFIC TOGGLES
// ===========================================
// Enable/disable specific sections independently
const SPACING_SECTION_TOGGLES = {
    enableGlobalSpacing: true,          // Enable/disable global container and section spacing
    enableNavigationSpacing: true,      // Enable/disable navigation spacing overrides
    enableProductGridSpacing: true,     // Enable/disable product grid spacing overrides
    enableHeroSpacing: true,            // Enable/disable hero section spacing overrides
    enableBlogSpacing: true,            // Enable/disable blog layout spacing overrides
    enableFooterSpacing: true,          // Enable/disable footer spacing overrides
};

// ===========================================
// PAGE-SPECIFIC TOGGLES
// ===========================================
// Enable/disable spacing overrides for specific pages
const SPACING_PAGE_TOGGLES = {
    enableHomepageOverrides: true,      // Enable/disable homepage-specific overrides
    enableBlogPageOverrides: true,      // Enable/disable blog page-specific overrides
    enablePrivacyPageOverrides: true,   // Enable/disable privacy page-specific overrides
    enableDisclaimerPageOverrides: true, // Enable/disable disclaimer page-specific overrides
    enableAllPageOverrides: true,       // Master toggle for all page-specific overrides
};




// ===========================================
// GLOBAL SPACING OVERRIDES
// ===========================================
// These apply to the entire website unless overridden by page-specific settings

const SPACING_OVERRIDES = {
    
    // ===========================================
    // GLOBAL CONTAINER SPACING
    // ===========================================
    // Controls the overall layout spacing for the entire website
    
    global: {
        // Container padding (left/right spacing for all content)
        containerPadding: '1rem',           // Default container left/right padding
        containerPaddingMobile: '0.75rem',  // Container padding on mobile devices
        containerMaxWidth: '1300px',        // Maximum container width
        
        // Section spacing (vertical spacing between major sections)
        sectionSpacing: '4rem',             // Space between major sections (hero, top10, etc.)
        sectionSpacingMobile: '2.5rem',     // Section spacing on mobile devices
        
        // Element spacing (spacing between elements within sections)
        elementSpacing: '1.5rem',           // Space between elements (cards, buttons, etc.)
        elementSpacingMobile: '1rem',       // Element spacing on mobile devices
    },
    
    // ===========================================
    // NAVIGATION SPACING
    // ===========================================
    // Controls spacing for the navigation bar
    
    navigation: {
        // Navigation container padding
        navPadding: '1rem 1.5rem',          // Navigation bar internal padding (top/bottom left/right)
        navPaddingMobile: '0.75rem 1rem',   // Navigation padding on mobile
        
        // Navigation element spacing
        logoSpacing: '1rem',                // Space between logo and navigation links
        linkSpacing: '1.5rem',              // Space between navigation links
        linkSpacingMobile: '1rem',          // Link spacing on mobile
        
        // Search bar spacing
        searchSpacing: '1rem',              // Space around search elements
        controlsSpacing: '0.75rem',         // Space between search and menu buttons
    },
    
    // ===========================================
    // PRODUCT GRID SPACING
    // ===========================================
    // Controls spacing for product cards and grid layout
    
    productGrid: {
        // Grid spacing
        gridGap: '1.5rem',                  // Gap between product cards
        gridGapMobile: '1rem',              // Grid gap on mobile devices
        
        // Card internal spacing
        cardPadding: '0rem',              // Internal padding of product cards
        cardPaddingMobile: '0rem',          // Card padding on mobile
        
        // Card element spacing
        cardElementSpacing: '0rem',         // Space between elements inside cards
        cardElementSpacingMobile: '0rem', // Card element spacing on mobile
        
        // Ensures 3-column layout is maintained
        gridMinWidth: '300px',              // Minimum card width for 3-column layout
        gridMaxWidth: '400px',              // Maximum card width for consistency
    },
    
    // ===========================================
    // HERO SECTION SPACING
    // ===========================================
    // Controls spacing for hero sections
    
    hero: {
        // Hero section padding
        heroPadding: '6rem 0',              // Hero section top/bottom padding
        heroPaddingMobile: '4rem 0',        // Hero padding on mobile
        
        // Hero content spacing
        heroContentSpacing: '2rem',         // Space between hero elements
        heroContentSpacingMobile: '1.5rem', // Hero content spacing on mobile
        
        // Hero button spacing
        heroButtonSpacing: '1rem',          // Space between hero buttons
        heroButtonSpacingMobile: '0.75rem', // Hero button spacing on mobile
    },
    
    // ===========================================
    // BLOG LAYOUT SPACING
    // ===========================================
    // Controls spacing for blog pages and cards
    
    blog: {
        // Blog grid spacing
        blogGridGap: '2rem',                // Gap between blog cards
        blogGridGapMobile: '1.5rem',        // Blog grid gap on mobile
        
        // Blog card spacing
        blogCardPadding: '1.5rem',          // Internal padding of blog cards
        blogCardPaddingMobile: '1rem',      // Blog card padding on mobile
        
        // Blog content spacing
        blogContentSpacing: '1rem',         // Space between blog content elements
        blogContentSpacingMobile: '0.75rem', // Blog content spacing on mobile
        
        // Blog section spacing
        blogSectionSpacing: '4rem',         // Space between blog section and newsletter
        blogSectionSpacingMobile: '3rem',   // Blog section spacing on mobile
        
        // Newsletter section spacing
        newsletterTopSpacing: '4rem',       // Space above newsletter section
        newsletterTopSpacingMobile: '3rem', // Newsletter top spacing on mobile
        
        // Maintains blog column layout
        blogCardMinWidth: '300px',          // Minimum blog card width
        blogCardMaxWidth: '400px',          // Maximum blog card width
    },
    
    // ===========================================
    // FOOTER SPACING
    // ===========================================
    // Controls spacing for footer section
    
    footer: {
        // Footer padding
        footerPadding: '3rem 0',            // Footer top/bottom padding
        footerPaddingMobile: '2rem 0',      // Footer padding on mobile
        
        // Footer content spacing
        footerContentSpacing: '2rem',       // Space between footer sections
        footerContentSpacingMobile: '1.5rem', // Footer content spacing on mobile
        
        // Footer element spacing
        footerElementSpacing: '1rem',       // Space between footer elements
        footerElementSpacingMobile: '0.75rem', // Footer element spacing on mobile
    }
};

// ===========================================
// PAGE-SPECIFIC SPACING OVERRIDES
// ===========================================
// Override spacing for specific pages

const PAGE_SPACING_OVERRIDES = {
    
    // ===========================================
    // HOMEPAGE SPACING
    // ===========================================
    '/index.html': {
        // Override global settings for homepage
        hero: {
            heroPadding: '8rem 0',              // Larger hero padding for homepage
            heroContentSpacing: '2.5rem',       // More space between hero elements
        },
        
        productGrid: {
            gridGap: '2rem',                    // Larger gap between product cards
            cardPadding: '0rem',                // More padding inside cards
        },
        
        // Homepage-specific sections
        topPick: {
            sectionPadding: '4rem 0',           // Top pick section padding
            cardPadding: '2rem',                // Top pick card padding
            elementSpacing: '1.5rem',           // Space between top pick elements
        }
    },
    
    // ===========================================
    // BLOG PAGE SPACING
    // ===========================================
    '/blog.html': {
        // Override global settings for blog page
        hero: {
            heroPadding: '5rem 0',              // Smaller hero for blog page
            heroContentSpacing: '1.5rem',       // Tighter hero content spacing
        },
        
        blog: {
            blogGridGap: '2.5rem',              // Larger gap between blog cards
            blogCardPadding: '2rem',            // More padding inside blog cards
            blogContentSpacing: '1.25rem',      // Slightly more content spacing
            blogSectionSpacing: '5rem',         // Extra space before newsletter
            blogSectionSpacingMobile: '3.5rem', // Extra mobile space before newsletter
            newsletterTopSpacing: '5rem',       // Extra space above newsletter
            newsletterTopSpacingMobile: '3.5rem', // Extra mobile space above newsletter
        },
        
        // Blog-specific sections
        blogHeader: {
            headerPadding: '2rem 0',            // Blog header padding
            headerSpacing: '1rem',              // Space between header elements
        }
    },
    
    // ===========================================
    // LEGAL PAGES SPACING
    // ===========================================
    '/privacy.html': {
        // Legal page specific spacing
        legal: {
            contentPadding: '3rem 0',           // Legal content padding
            sectionSpacing: '2rem',             // Space between legal sections
            paragraphSpacing: '1rem',           // Space between paragraphs
        }
    },
    
    '/disclaimer.html': {
        // Disclaimer page specific spacing
        legal: {
            contentPadding: '3rem 0',           // Legal content padding
            sectionSpacing: '2rem',             // Space between legal sections
            paragraphSpacing: '1rem',           // Space between paragraphs
        }
    }
};

// ===========================================
// RESPONSIVE SPACING BREAKPOINTS
// ===========================================
// Define when spacing changes should occur

const SPACING_BREAKPOINTS = {
    mobile: '767px',        // Mobile breakpoint
    tablet: '1023px',       // Tablet breakpoint
    desktop: '1200px',      // Desktop breakpoint
    large: '1400px'         // Large desktop breakpoint
};

// ===========================================
// SPACING MANAGER CLASS
// ===========================================
class SpacingManager {
    
    /**
     * Initialize the spacing override system
     */
    static init() {
        if (ENABLE_SPACING_OVERRIDES) {
            // Set the data attribute on HTML element for CSS targeting
            document.documentElement.setAttribute('data-spacing-overrides', 'true');
            this.applySpacingOverrides();
            console.log('📏 Spacing overrides enabled');
            console.log('📏 Active sections:', this.getActiveSections());
            console.log('📏 Active pages:', this.getActivePages());
            console.log('📏 List view handling: Preserved (1 column forced)');
            console.log('📏 Grid view handling: Maintains 3-column layout');
        } else {
            // Remove the data attribute
            document.documentElement.removeAttribute('data-spacing-overrides');
            this.removeSpacingOverrides();
            console.log('📏 Spacing overrides disabled - using original spacing');
        }
    }
    
    /**
     * Apply spacing overrides
     */
    static applySpacingOverrides() {
        // Create or update the spacing override style element
        let styleElement = document.getElementById('spacing-overrides');
        if (!styleElement) {
            styleElement = document.createElement('style');
            styleElement.id = 'spacing-overrides';
            document.head.appendChild(styleElement);
        }
        
        // Generate CSS from overrides
        const css = this.generateSpacingCSS();
        styleElement.textContent = css;
        
        console.log('📏 Spacing overrides applied');
    }
    
    /**
     * Remove spacing overrides
     */
    static removeSpacingOverrides() {
        const styleElement = document.getElementById('spacing-overrides');
        if (styleElement) {
            styleElement.remove();
        }
        console.log('📏 Spacing override CSS removed');
    }
    
    /**
     * Generate CSS from spacing overrides
     */
    static generateSpacingCSS() {
        const overrides = SPACING_OVERRIDES;
        const currentPath = window.location.pathname;
        const pageOverrides = PAGE_SPACING_OVERRIDES[currentPath] || {};
        
        // Check if page-specific overrides are enabled
        const shouldApplyPageOverrides = SPACING_PAGE_TOGGLES.enableAllPageOverrides && 
                                       this.isPageOverrideEnabled(currentPath);
        
        // Merge global and page-specific overrides (only if page overrides are enabled)
        const finalOverrides = shouldApplyPageOverrides ? 
                              this.mergeOverrides(overrides, pageOverrides) : 
                              overrides;
        
        let css = `
        /* Spacing Overrides - Generated automatically */
        /* Maintains layout integrity while allowing customization */
        
        :root {
            /* Global spacing variables */
            --spacing-override-xs: 0.25rem;
            --spacing-override-sm: 0.5rem;
            --spacing-override-md: 1rem;
            --spacing-override-lg: 1.5rem;
            --spacing-override-xl: 2rem;
            --spacing-override-2xl: 3rem;
            --spacing-override-3xl: 4rem;
        }
        
        `;
        
        // Global container spacing
        if (finalOverrides.global && SPACING_SECTION_TOGGLES.enableGlobalSpacing) {
            const global = finalOverrides.global;
            css += `
            /* Global Container Spacing */
            html[data-spacing-overrides="true"] .container {
                padding-left: ${global.containerPadding} !important;
                padding-right: ${global.containerPadding} !important;
                max-width: ${global.containerMaxWidth} !important;
            }
            
            html[data-spacing-overrides="true"] .section {
                margin-bottom: ${global.sectionSpacing} !important;
            }
            
            @media (max-width: ${SPACING_BREAKPOINTS.mobile}) {
                html[data-spacing-overrides="true"] .container {
                    padding-left: ${global.containerPaddingMobile} !important;
                    padding-right: ${global.containerPaddingMobile} !important;
                }
                
                html[data-spacing-overrides="true"] .section {
                    margin-bottom: ${global.sectionSpacingMobile} !important;
                }
            }
            `;
        }
        
        // Navigation spacing
        if (finalOverrides.navigation && SPACING_SECTION_TOGGLES.enableNavigationSpacing) {
            const nav = finalOverrides.navigation;
            css += `
            /* Navigation Spacing */
            html[data-spacing-overrides="true"] .nav-container {
                padding: ${nav.navPadding} !important;
            }
            
            html[data-spacing-overrides="true"] .nav-brand {
                margin-right: ${nav.logoSpacing} !important;
            }
            
            html[data-spacing-overrides="true"] .nav-menu {
                gap: ${nav.linkSpacing} !important;
            }
            
            html[data-spacing-overrides="true"] .nav-controls {
                gap: ${nav.controlsSpacing} !important;
            }
            
            @media (max-width: ${SPACING_BREAKPOINTS.mobile}) {
                html[data-spacing-overrides="true"] .nav-container {
                    padding: ${nav.navPaddingMobile} !important;
                }
                
                html[data-spacing-overrides="true"] .nav-menu {
                    gap: ${nav.linkSpacingMobile} !important;
                }
            }
            `;
        }
        
        // Product grid spacing (maintains 3-column layout)
        if (finalOverrides.productGrid && SPACING_SECTION_TOGGLES.enableProductGridSpacing) {
            const grid = finalOverrides.productGrid;
            css += `
            /* Product Grid Spacing - Maintains 3-column layout */
            /* Grid view (default) - 3 columns */
            html[data-spacing-overrides="true"] .products-grid:not(.list-view) {
                gap: ${grid.gridGap} !important;
                grid-template-columns: repeat(auto-fit, minmax(${grid.gridMinWidth}, 1fr)) !important;
            }
            
            /* List view - 1 column (preserves list view functionality) */
            html[data-spacing-overrides="true"] .products-grid.list-view {
                gap: ${grid.gridGap} !important;
                grid-template-columns: 1fr !important;
            }
            
            html[data-spacing-overrides="true"] .product-card {
                padding: ${grid.cardPadding} !important;
                max-width: ${grid.gridMaxWidth} !important;
            }
            
            /* Only apply max-width to grid view, not list view */
            html[data-spacing-overrides="true"] .products-grid.list-view .product-card {
                max-width: none !important;
            }
            
            html[data-spacing-overrides="true"] .product-content > * + * {
                margin-top: ${grid.cardElementSpacing} !important;
            }
            
            @media (max-width: ${SPACING_BREAKPOINTS.mobile}) {
                /* Grid view mobile - single column */
                html[data-spacing-overrides="true"] .products-grid:not(.list-view) {
                    gap: ${grid.gridGapMobile} !important;
                    grid-template-columns: 1fr !important;
                }
                
                /* List view mobile - single column */
                html[data-spacing-overrides="true"] .products-grid.list-view {
                    gap: ${grid.gridGapMobile} !important;
                    grid-template-columns: 1fr !important;
                }
                
                html[data-spacing-overrides="true"] .product-card {
                    padding: ${grid.cardPaddingMobile} !important;
                }
                
                html[data-spacing-overrides="true"] .product-content > * + * {
                    margin-top: ${grid.cardElementSpacingMobile} !important;
                }
            }
            `;
        }
        
        // Hero section spacing
        if (finalOverrides.hero && SPACING_SECTION_TOGGLES.enableHeroSpacing) {
            const hero = finalOverrides.hero;
            css += `
            /* Hero Section Spacing */
            html[data-spacing-overrides="true"] .hero-section {
                padding: ${hero.heroPadding} !important;
            }
            
            html[data-spacing-overrides="true"] .hero-content > * + * {
                margin-top: ${hero.heroContentSpacing} !important;
            }
            
            html[data-spacing-overrides="true"] .hero-cta {
                gap: ${hero.heroButtonSpacing} !important;
            }
            
            @media (max-width: ${SPACING_BREAKPOINTS.mobile}) {
                html[data-spacing-overrides="true"] .hero-section {
                    padding: ${hero.heroPaddingMobile} !important;
                }
                
                html[data-spacing-overrides="true"] .hero-content > * + * {
                    margin-top: ${hero.heroContentSpacingMobile} !important;
                }
                
                html[data-spacing-overrides="true"] .hero-cta {
                    gap: ${hero.heroButtonSpacingMobile} !important;
                }
            }
            `;
        }
        
        // Blog layout spacing (maintains column layout)
        if (finalOverrides.blog && SPACING_SECTION_TOGGLES.enableBlogSpacing) {
            const blog = finalOverrides.blog;
            css += `
            /* Blog Layout Spacing - Maintains column layout */
            html[data-spacing-overrides="true"] .blog-grid {
                gap: ${blog.blogGridGap} !important;
                grid-template-columns: repeat(auto-fit, minmax(${blog.blogCardMinWidth}, 1fr)) !important;
            }
            
            html[data-spacing-overrides="true"] .blog-post {
                max-width: ${blog.blogCardMaxWidth} !important;
            }
            
            html[data-spacing-overrides="true"] .blog-post-content {
                padding: ${blog.blogCardPadding} !important;
            }
            
            html[data-spacing-overrides="true"] .blog-post-content > * + * {
                margin-top: ${blog.blogContentSpacing} !important;
            }
            
            /* Blog section spacing - space between blog posts and newsletter */
            html[data-spacing-overrides="true"] .blog-section {
                margin-bottom: ${blog.blogSectionSpacing} !important;
            }
            
            /* Newsletter section spacing - space above newsletter */
            html[data-spacing-overrides="true"] .newsletter-section {
                margin-top: ${blog.newsletterTopSpacing} !important;
            }
            
            /* Alternative: Add padding to the last blog section */
            html[data-spacing-overrides="true"] .blog-grid {
                margin-bottom: ${blog.blogSectionSpacing} !important;
            }
            
            @media (max-width: ${SPACING_BREAKPOINTS.mobile}) {
                /* Blog mobile - single column */
                html[data-spacing-overrides="true"] .blog-grid {
                    gap: ${blog.blogGridGapMobile} !important;
                    grid-template-columns: 1fr !important;
                    margin-bottom: ${blog.blogSectionSpacingMobile} !important;
                }
                
                html[data-spacing-overrides="true"] .blog-post {
                    max-width: none !important;
                }
                
                html[data-spacing-overrides="true"] .blog-post-content {
                    padding: ${blog.blogCardPaddingMobile} !important;
                }
                
                html[data-spacing-overrides="true"] .blog-post-content > * + * {
                    margin-top: ${blog.blogContentSpacingMobile} !important;
                }
                
                /* Mobile newsletter spacing */
                html[data-spacing-overrides="true"] .newsletter-section {
                    margin-top: ${blog.newsletterTopSpacingMobile} !important;
                }
                
                html[data-spacing-overrides="true"] .blog-section {
                    margin-bottom: ${blog.blogSectionSpacingMobile} !important;
                }
            }
            `;
        }
        
        // Footer spacing
        if (finalOverrides.footer && SPACING_SECTION_TOGGLES.enableFooterSpacing) {
            const footer = finalOverrides.footer;
            css += `
            /* Footer Spacing */
            html[data-spacing-overrides="true"] .footer {
                padding: ${footer.footerPadding} !important;
            }
            
            html[data-spacing-overrides="true"] .footer-content {
                gap: ${footer.footerContentSpacing} !important;
            }
            
            html[data-spacing-overrides="true"] .footer-section > * + * {
                margin-top: ${footer.footerElementSpacing} !important;
            }
            
            @media (max-width: ${SPACING_BREAKPOINTS.mobile}) {
                html[data-spacing-overrides="true"] .footer {
                    padding: ${footer.footerPaddingMobile} !important;
                }
                
                html[data-spacing-overrides="true"] .footer-content {
                    gap: ${footer.footerContentSpacingMobile} !important;
                }
                
                html[data-spacing-overrides="true"] .footer-section > * + * {
                    margin-top: ${footer.footerElementSpacingMobile} !important;
                }
            }
            `;
        }
        
        // Page-specific overrides (only if enabled)
        if (shouldApplyPageOverrides) {
            if (pageOverrides.topPick) {
                const topPick = pageOverrides.topPick;
                css += `
                /* Top Pick Section Spacing */
                html[data-spacing-overrides="true"] .top-pick-section {
                    padding: ${topPick.sectionPadding} !important;
                }
                
                html[data-spacing-overrides="true"] .top-pick-card {
                    padding: ${topPick.cardPadding} !important;
                }
                
                html[data-spacing-overrides="true"] .top-pick-content > * + * {
                    margin-top: ${topPick.elementSpacing} !important;
                }
                `;
            }
            
            if (pageOverrides.legal) {
                const legal = pageOverrides.legal;
                css += `
                /* Legal Page Spacing */
                html[data-spacing-overrides="true"] .legal-content {
                    padding: ${legal.contentPadding} !important;
                }
                
                html[data-spacing-overrides="true"] .legal-section {
                    margin-bottom: ${legal.sectionSpacing} !important;
                }
                
                html[data-spacing-overrides="true"] .legal-section p {
                    margin-bottom: ${legal.paragraphSpacing} !important;
                }
                `;
            }
            
            if (pageOverrides.blogHeader) {
                const blogHeader = pageOverrides.blogHeader;
                css += `
                /* Blog Header Spacing */
                html[data-spacing-overrides="true"] .blog-header {
                    padding: ${blogHeader.headerPadding} !important;
                }
                
                html[data-spacing-overrides="true"] .blog-header > * + * {
                    margin-top: ${blogHeader.headerSpacing} !important;
                }
                `;
            }
        }
        
        // Additional CSS to ensure list view functionality is preserved
        css += `
        /* List View Preservation - Ensures list view always works correctly */
        html[data-spacing-overrides="true"] .products-grid.list-view {
            /* Force single column for list view regardless of other settings */
            grid-template-columns: 1fr !important;
        }
        
        html[data-spacing-overrides="true"] .products-grid.list-view .product-card {
            /* Remove max-width constraint in list view */
            max-width: none !important;
            /* Ensure full width in list view */
            width: 100% !important;
        }
        
        /* Debug: Add visual indicator when spacing overrides are active */
        html[data-spacing-overrides="true"]::before {
            content: "📏 Spacing Overrides Active";
            position: fixed;
            top: 10px;
            right: 10px;
            background: rgba(37, 99, 235, 0.9);
            color: white;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            z-index: 9999;
            pointer-events: none;
            opacity: 0.7;
        }
        
        /* Hide debug indicator on mobile to avoid clutter */
        @media (max-width: ${SPACING_BREAKPOINTS.mobile}) {
            html[data-spacing-overrides="true"]::before {
                display: none;
            }
        }
        `;
        
        return css;
    }
    
    /**
     * Check if page-specific overrides are enabled for current page
     */
    static isPageOverrideEnabled(currentPath) {
        switch (currentPath) {
            case '/index.html':
            case '/':
                return SPACING_PAGE_TOGGLES.enableHomepageOverrides;
            case '/blog.html':
                return SPACING_PAGE_TOGGLES.enableBlogPageOverrides;
            case '/privacy.html':
                return SPACING_PAGE_TOGGLES.enablePrivacyPageOverrides;
            case '/disclaimer.html':
                return SPACING_PAGE_TOGGLES.enableDisclaimerPageOverrides;
            default:
                return false;
        }
    }
    
    /**
     * Get list of active sections
     */
    static getActiveSections() {
        const active = [];
        if (SPACING_SECTION_TOGGLES.enableGlobalSpacing) active.push('Global');
        if (SPACING_SECTION_TOGGLES.enableNavigationSpacing) active.push('Navigation');
        if (SPACING_SECTION_TOGGLES.enableProductGridSpacing) active.push('Product Grid');
        if (SPACING_SECTION_TOGGLES.enableHeroSpacing) active.push('Hero');
        if (SPACING_SECTION_TOGGLES.enableBlogSpacing) active.push('Blog');
        if (SPACING_SECTION_TOGGLES.enableFooterSpacing) active.push('Footer');
        return active;
    }
    
    /**
     * Get list of active pages
     */
    static getActivePages() {
        const active = [];
        if (!SPACING_PAGE_TOGGLES.enableAllPageOverrides) return ['None - Page overrides disabled'];
        if (SPACING_PAGE_TOGGLES.enableHomepageOverrides) active.push('Homepage');
        if (SPACING_PAGE_TOGGLES.enableBlogPageOverrides) active.push('Blog');
        if (SPACING_PAGE_TOGGLES.enablePrivacyPageOverrides) active.push('Privacy');
        if (SPACING_PAGE_TOGGLES.enableDisclaimerPageOverrides) active.push('Disclaimer');
        return active.length > 0 ? active : ['None'];
    }
    
    /**
     * Merge global and page-specific overrides
     */
    static mergeOverrides(global, page) {
        const merged = { ...global };
        
        // Deep merge page overrides
        Object.keys(page).forEach(key => {
            if (merged[key] && typeof merged[key] === 'object') {
                merged[key] = { ...merged[key], ...page[key] };
            } else {
                merged[key] = page[key];
            }
        });
        
        return merged;
    }
    
    /**
     * Toggle spacing overrides
     */
    static toggle(enabled = null) {
        if (enabled === null) {
            enabled = !ENABLE_SPACING_OVERRIDES;
        }
        
        // Update the constant (for this session)
        window.ENABLE_SPACING_OVERRIDES = enabled;
        
        if (enabled) {
            this.applySpacingOverrides();
        } else {
            this.removeSpacingOverrides();
        }
        
        console.log(`📏 Spacing overrides ${enabled ? 'enabled' : 'disabled'}`);
    }
    
    /**
     * Toggle a specific section
     */
    static toggleSection(sectionName, enabled = null) {
        const toggleKey = `enable${sectionName.charAt(0).toUpperCase() + sectionName.slice(1)}Spacing`;
        
        if (SPACING_SECTION_TOGGLES.hasOwnProperty(toggleKey)) {
            if (enabled === null) {
                enabled = !SPACING_SECTION_TOGGLES[toggleKey];
            }
            
            SPACING_SECTION_TOGGLES[toggleKey] = enabled;
            
            if (ENABLE_SPACING_OVERRIDES) {
                this.applySpacingOverrides();
            }
            
            console.log(`📏 ${sectionName} spacing ${enabled ? 'enabled' : 'disabled'}`);
        } else {
            console.warn(`📏 Unknown section: ${sectionName}`);
            console.log('📏 Available sections:', Object.keys(SPACING_SECTION_TOGGLES));
        }
    }
    
    /**
     * Toggle a specific page
     */
    static togglePage(pageName, enabled = null) {
        const toggleKey = `enable${pageName.charAt(0).toUpperCase() + pageName.slice(1)}PageOverrides`;
        
        if (SPACING_PAGE_TOGGLES.hasOwnProperty(toggleKey)) {
            if (enabled === null) {
                enabled = !SPACING_PAGE_TOGGLES[toggleKey];
            }
            
            SPACING_PAGE_TOGGLES[toggleKey] = enabled;
            
            if (ENABLE_SPACING_OVERRIDES) {
                this.applySpacingOverrides();
            }
            
            console.log(`📏 ${pageName} page overrides ${enabled ? 'enabled' : 'disabled'}`);
        } else {
            console.warn(`📏 Unknown page: ${pageName}`);
            console.log('📏 Available pages:', Object.keys(SPACING_PAGE_TOGGLES));
        }
    }
    
    /**
     * Toggle all page overrides
     */
    static toggleAllPageOverrides(enabled = null) {
        if (enabled === null) {
            enabled = !SPACING_PAGE_TOGGLES.enableAllPageOverrides;
        }
        
        SPACING_PAGE_TOGGLES.enableAllPageOverrides = enabled;
        
        if (ENABLE_SPACING_OVERRIDES) {
            this.applySpacingOverrides();
        }
        
        console.log(`📏 All page overrides ${enabled ? 'enabled' : 'disabled'}`);
    }
    
    /**
     * Enable all sections
     */
    static enableAllSections() {
        Object.keys(SPACING_SECTION_TOGGLES).forEach(key => {
            SPACING_SECTION_TOGGLES[key] = true;
        });
        
        if (ENABLE_SPACING_OVERRIDES) {
            this.applySpacingOverrides();
        }
        
        console.log('📏 All sections enabled');
    }
    
    /**
     * Disable all sections
     */
    static disableAllSections() {
        Object.keys(SPACING_SECTION_TOGGLES).forEach(key => {
            SPACING_SECTION_TOGGLES[key] = false;
        });
        
        if (ENABLE_SPACING_OVERRIDES) {
            this.applySpacingOverrides();
        }
        
        console.log('📏 All sections disabled');
    }
    
    /**
     * Enable all pages
     */
    static enableAllPages() {
        Object.keys(SPACING_PAGE_TOGGLES).forEach(key => {
            SPACING_PAGE_TOGGLES[key] = true;
        });
        
        if (ENABLE_SPACING_OVERRIDES) {
            this.applySpacingOverrides();
        }
        
        console.log('📏 All pages enabled');
    }
    
    /**
     * Disable all pages
     */
    static disableAllPages() {
        Object.keys(SPACING_PAGE_TOGGLES).forEach(key => {
            SPACING_PAGE_TOGGLES[key] = false;
        });
        
        if (ENABLE_SPACING_OVERRIDES) {
            this.applySpacingOverrides();
        }
        
        console.log('📏 All pages disabled');
    }
    
    /**
     * Get current toggle states
     */
    static getToggleStates() {
        return {
            masterEnabled: ENABLE_SPACING_OVERRIDES,
            sections: { ...SPACING_SECTION_TOGGLES },
            pages: { ...SPACING_PAGE_TOGGLES },
            activeSections: this.getActiveSections(),
            activePages: this.getActivePages()
        };
    }
    
    /**
     * Check if spacing overrides are enabled
     */
    static isEnabled() {
        return ENABLE_SPACING_OVERRIDES;
    }
    
    /**
     * Check if a specific section is enabled
     */
    static isSectionEnabled(sectionName) {
        const toggleKey = `enable${sectionName.charAt(0).toUpperCase() + sectionName.slice(1)}Spacing`;
        return SPACING_SECTION_TOGGLES[toggleKey] || false;
    }
    
    /**
     * Check if a specific page is enabled
     */
    static isPageEnabled(pageName) {
        const toggleKey = `enable${pageName.charAt(0).toUpperCase() + pageName.slice(1)}PageOverrides`;
        return SPACING_PAGE_TOGGLES[toggleKey] || false;
    }
    
    /**
     * Check if list view is currently active
     */
    static isListViewActive() {
        const productsGrid = document.querySelector('.products-grid');
        return productsGrid ? productsGrid.classList.contains('list-view') : false;
    }
    
    /**
     * Get current view mode
     */
    static getCurrentViewMode() {
        return this.isListViewActive() ? 'list' : 'grid';
    }
    
    /**
     * Update a specific spacing property
     */
    static updateSpacing(category, property, value) {
        if (SPACING_OVERRIDES[category]) {
            SPACING_OVERRIDES[category][property] = value;
            this.applySpacingOverrides();
            console.log(`📏 Updated ${category}.${property} to ${value}`);
        }
    }
    
    /**
     * Debug function to show current spacing settings
     */
    static debugSpacing() {
        console.group('📏 Spacing Override Debug Info');
        console.log('Master Enabled:', ENABLE_SPACING_OVERRIDES);
        console.log('Current Path:', window.location.pathname);
        console.log('Current View Mode:', this.getCurrentViewMode());
        console.log('List View Active:', this.isListViewActive());
        console.log('Section Toggles:', SPACING_SECTION_TOGGLES);
        console.log('Page Toggles:', SPACING_PAGE_TOGGLES);
        console.log('Active Sections:', this.getActiveSections());
        console.log('Active Pages:', this.getActivePages());
        console.log('Global Overrides:', SPACING_OVERRIDES);
        console.log('Page Overrides:', PAGE_SPACING_OVERRIDES[window.location.pathname]);
        console.groupEnd();
    }
    
    /**
     * Show available commands
     */
    static showCommands() {
        console.group('📏 Available Spacing Commands');
        console.log('🔧 Master Controls:');
        console.log('  SpacingManager.toggle()              - Toggle master on/off');
        console.log('  SpacingManager.isEnabled()           - Check if enabled');
        console.log('');
        console.log('🎯 Section Controls:');
        console.log('  SpacingManager.toggleSection("global")      - Toggle global spacing');
        console.log('  SpacingManager.toggleSection("navigation")  - Toggle navigation spacing');
        console.log('  SpacingManager.toggleSection("productGrid") - Toggle product grid spacing');
        console.log('  SpacingManager.toggleSection("hero")        - Toggle hero spacing');
        console.log('  SpacingManager.toggleSection("blog")        - Toggle blog spacing');
        console.log('  SpacingManager.toggleSection("footer")      - Toggle footer spacing');
        console.log('  SpacingManager.enableAllSections()          - Enable all sections');
        console.log('  SpacingManager.disableAllSections()         - Disable all sections');
        console.log('');
        console.log('📄 Page Controls:');
        console.log('  SpacingManager.togglePage("homepage")       - Toggle homepage overrides');
        console.log('  SpacingManager.togglePage("blog")           - Toggle blog page overrides');
        console.log('  SpacingManager.togglePage("privacy")        - Toggle privacy page overrides');
        console.log('  SpacingManager.togglePage("disclaimer")     - Toggle disclaimer page overrides');
        console.log('  SpacingManager.toggleAllPageOverrides()     - Toggle all page overrides');
        console.log('  SpacingManager.enableAllPages()             - Enable all pages');
        console.log('  SpacingManager.disableAllPages()            - Disable all pages');
        console.log('');
        console.log('🔍 Debug & Info:');
        console.log('  SpacingManager.debugSpacing()               - Show debug info');
        console.log('  SpacingManager.getToggleStates()            - Get current states');
        console.log('  SpacingManager.showCommands()               - Show this help');
        console.log('  SpacingManager.getCurrentViewMode()         - Get current view mode (list/grid)');
        console.log('  SpacingManager.isListViewActive()           - Check if list view is active');
        console.log('');
        console.log('⚙️ Advanced:');
        console.log('  SpacingManager.updateSpacing(category, property, value)');
        console.log('  SpacingManager.isSectionEnabled("global")');
        console.log('  SpacingManager.isPageEnabled("homepage")');
        console.groupEnd();
    }
}

// ===========================================
// INITIALIZATION
// ===========================================

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        SpacingManager.init();
    });
} else {
    // DOM is already loaded
    SpacingManager.init();
}

// Make functions available globally for debugging
window.SpacingManager = SpacingManager;
window.debugSpacing = () => SpacingManager.debugSpacing();
window.showSpacingCommands = () => SpacingManager.showCommands();

// Quick access functions for common operations
window.toggleSpacing = (enabled) => SpacingManager.toggle(enabled);
window.toggleSection = (section, enabled) => SpacingManager.toggleSection(section, enabled);
window.togglePage = (page, enabled) => SpacingManager.togglePage(page, enabled);
window.getSpacingStates = () => SpacingManager.getToggleStates();

// View mode detection functions
window.getCurrentViewMode = () => SpacingManager.getCurrentViewMode();
window.isListViewActive = () => SpacingManager.isListViewActive();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        SpacingManager, 
        SPACING_OVERRIDES, 
        PAGE_SPACING_OVERRIDES,
        SPACING_SECTION_TOGGLES,
        SPACING_PAGE_TOGGLES
    };
} 