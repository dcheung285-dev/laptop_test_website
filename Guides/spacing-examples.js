/*
===========================================
SPACING OVERRIDE EXAMPLES & TUTORIALS
===========================================
🎯 CUSTOMIZE SPACING AND PADDING FOR ANY ELEMENT

This system allows you to override spacing and padding for:
- Entire website (global overrides)
- Individual pages (page-specific overrides)
- Specific sections within pages (section-specific overrides)

NEW FEATURES:
- Individual section toggles (enable/disable specific sections)
- Individual page toggles (enable/disable specific pages)
- Granular control over every aspect of spacing

FEATURES:
- Global spacing control
- Page-specific spacing
- Section-specific spacing
- Navigation padding control
- Container width adjustments
- Product grid spacing
- Blog layout spacing
- Responsive spacing overrides
- Individual enable/disable toggles for each section and page

USAGE:
1. Set ENABLE_SPACING_OVERRIDES to true/false to toggle the entire system
2. Use SPACING_SECTION_TOGGLES to enable/disable specific sections
3. Use SPACING_PAGE_TOGGLES to enable/disable specific pages
4. Customize spacing in the SPACING_OVERRIDES object
5. Use page-specific overrides for different layouts
6. All spacing uses CSS custom properties for consistency
*/

// ===========================================
// TUTORIAL 1: INDIVIDUAL TOGGLES SYSTEM
// ===========================================
/*
NEW TOGGLE SYSTEM:

The spacing system now includes individual toggles for maximum control:

SECTION TOGGLES:
- enableGlobalSpacing: true/false       - Controls global container and section spacing
- enableNavigationSpacing: true/false   - Controls navigation bar spacing
- enableProductGridSpacing: true/false  - Controls product card grid spacing
- enableHeroSpacing: true/false         - Controls hero section spacing
- enableBlogSpacing: true/false         - Controls blog layout spacing
- enableFooterSpacing: true/false       - Controls footer spacing

PAGE TOGGLES:
- enableHomepageOverrides: true/false       - Controls homepage-specific overrides
- enableBlogPageOverrides: true/false       - Controls blog page-specific overrides
- enablePrivacyPageOverrides: true/false    - Controls privacy page-specific overrides
- enableDisclaimerPageOverrides: true/false - Controls disclaimer page-specific overrides
- enableAllPageOverrides: true/false        - Master toggle for all page overrides

EXAMPLE CONFIGURATION:
```javascript
// Enable only navigation and product grid spacing
const SPACING_SECTION_TOGGLES = {
    enableGlobalSpacing: false,         // Disable global spacing
    enableNavigationSpacing: true,      // Enable navigation spacing
    enableProductGridSpacing: true,     // Enable product grid spacing
    enableHeroSpacing: false,           // Disable hero spacing
    enableBlogSpacing: false,           // Disable blog spacing
    enableFooterSpacing: false,         // Disable footer spacing
};

// Enable only homepage and blog page overrides
const SPACING_PAGE_TOGGLES = {
    enableHomepageOverrides: true,      // Enable homepage overrides
    enableBlogPageOverrides: true,      // Enable blog page overrides
    enablePrivacyPageOverrides: false,  // Disable privacy page overrides
    enableDisclaimerPageOverrides: false, // Disable disclaimer page overrides
    enableAllPageOverrides: true,       // Master toggle enabled
};
```

CONSOLE COMMANDS:
Use these commands in your browser console for real-time control:

// Toggle individual sections
SpacingManager.toggleSection("global");
SpacingManager.toggleSection("navigation");
SpacingManager.toggleSection("productGrid");
SpacingManager.toggleSection("hero");
SpacingManager.toggleSection("blog");
SpacingManager.toggleSection("footer");

// Toggle individual pages
SpacingManager.togglePage("homepage");
SpacingManager.togglePage("blog");
SpacingManager.togglePage("privacy");
SpacingManager.togglePage("disclaimer");

// Bulk operations
SpacingManager.enableAllSections();
SpacingManager.disableAllSections();
SpacingManager.enableAllPages();
SpacingManager.disableAllPages();

// Debug and info
SpacingManager.debugSpacing();
SpacingManager.getToggleStates();
SpacingManager.showCommands();
```
*/

// ===========================================
// TUTORIAL 2: BASIC SPACING CUSTOMIZATION
// ===========================================
/*
STEP 1: Enable spacing overrides
- Open utils/spacing-overrides.js
- Set ENABLE_SPACING_OVERRIDES = true

STEP 2: Choose which sections to enable
- Set individual section toggles to true/false
- Example: Only enable navigation spacing
  enableNavigationSpacing: true (others false)

STEP 3: Choose which pages to enable
- Set individual page toggles to true/false
- Set enableAllPageOverrides to true to enable page system

STEP 4: Copy any example configuration
- Choose from the examples below
- Copy the entire SPACING_OVERRIDES object
- Paste it into your spacing-overrides.js file

STEP 5: Customize values
- All values use CSS units (px, rem, em, %, vw, vh)
- rem is recommended for responsive design
- Use specific values for pixel-perfect control

STEP 6: Test and adjust
- Save the file and refresh your website
- Use browser dev tools to inspect changes
- Use console commands to toggle sections on/off
- Adjust values until you achieve desired layout
*/

// ===========================================
// TUTORIAL 3: GRANULAR CONTROL EXAMPLES
// ===========================================
/*
EXAMPLE 1: Navigation Only
Perfect for when you only want to adjust navigation spacing:

```javascript
// In spacing-overrides.js
const SPACING_SECTION_TOGGLES = {
    enableGlobalSpacing: false,
    enableNavigationSpacing: true,      // Only this enabled
    enableProductGridSpacing: false,
    enableHeroSpacing: false,
    enableBlogSpacing: false,
    enableFooterSpacing: false,
};
```

EXAMPLE 2: Product Grid Only
Perfect for when you only want to adjust product card spacing:

```javascript
const SPACING_SECTION_TOGGLES = {
    enableGlobalSpacing: false,
    enableNavigationSpacing: false,
    enableProductGridSpacing: true,     // Only this enabled
    enableHeroSpacing: false,
    enableBlogSpacing: false,
    enableFooterSpacing: false,
};
```

EXAMPLE 3: Homepage Only
Perfect for when you only want special spacing on homepage:

```javascript
const SPACING_PAGE_TOGGLES = {
    enableHomepageOverrides: true,      // Only this enabled
    enableBlogPageOverrides: false,
    enablePrivacyPageOverrides: false,
    enableDisclaimerPageOverrides: false,
    enableAllPageOverrides: true,       // Must be true to enable page system
};
```

EXAMPLE 4: Blog Pages Only
Perfect for when you only want special spacing on blog-related pages:

```javascript
const SPACING_SECTION_TOGGLES = {
    enableGlobalSpacing: false,
    enableNavigationSpacing: false,
    enableProductGridSpacing: false,
    enableHeroSpacing: false,
    enableBlogSpacing: true,            // Only blog spacing enabled
    enableFooterSpacing: false,
};

const SPACING_PAGE_TOGGLES = {
    enableHomepageOverrides: false,
    enableBlogPageOverrides: true,      // Only blog page enabled
    enablePrivacyPageOverrides: false,
    enableDisclaimerPageOverrides: false,
    enableAllPageOverrides: true,
};
```

EXAMPLE 5: Testing Configuration
Perfect for testing different sections without affecting others:

```javascript
// Start with everything disabled
const SPACING_SECTION_TOGGLES = {
    enableGlobalSpacing: false,
    enableNavigationSpacing: false,
    enableProductGridSpacing: false,
    enableHeroSpacing: false,
    enableBlogSpacing: false,
    enableFooterSpacing: false,
};

// Then use console commands to enable one by one:
// SpacingManager.toggleSection("navigation");
// SpacingManager.toggleSection("productGrid");
// etc.
```
*/

// ===========================================
// TUTORIAL 4: UNDERSTANDING SPACING PROPERTIES
// ===========================================
/*
GLOBAL SPACING:
- containerPadding: Left/right padding for all content areas
- containerMaxWidth: Maximum width of content containers
- sectionSpacing: Vertical space between major sections
- elementSpacing: Space between elements within sections

NAVIGATION SPACING:
- navPadding: Internal padding of navigation bar
- logoSpacing: Space between logo and navigation links
- linkSpacing: Space between navigation menu items
- controlsSpacing: Space between search and menu buttons

PRODUCT GRID SPACING:
- gridGap: Space between product cards
- cardPadding: Internal padding of product cards
- cardElementSpacing: Space between elements inside cards
- gridMinWidth: Minimum card width (maintains 3-column layout)

BLOG LAYOUT SPACING:
- blogGridGap: Space between blog cards
- blogCardPadding: Internal padding of blog cards
- blogContentSpacing: Space between blog content elements
- blogCardMinWidth: Minimum blog card width (maintains columns)

HERO SECTION SPACING:
- heroPadding: Top/bottom padding of hero sections
- heroContentSpacing: Space between hero elements
- heroButtonSpacing: Space between hero buttons

FOOTER SPACING:
- footerPadding: Top/bottom padding of footer
- footerContentSpacing: Space between footer sections
- footerElementSpacing: Space between footer elements
*/

// ===========================================
// EXAMPLE 1: COMPACT LAYOUT
// ===========================================
// Perfect for content-heavy websites that need to fit more information
const COMPACT_LAYOUT_OVERRIDES = {
    
    global: {
        containerPadding: '0.75rem',        // Tighter container padding
        containerPaddingMobile: '0.5rem',   // Even tighter on mobile
        containerMaxWidth: '1400px',        // Wider container for more content
        sectionSpacing: '2.5rem',           // Reduced space between sections
        sectionSpacingMobile: '1.5rem',     // Compact mobile spacing
        elementSpacing: '1rem',             // Tighter element spacing
        elementSpacingMobile: '0.75rem',    // Compact mobile element spacing
    },
    
    navigation: {
        navPadding: '0.75rem 1rem',         // Compact navigation padding
        navPaddingMobile: '0.5rem 0.75rem', // Tight mobile navigation
        logoSpacing: '0.75rem',             // Less space after logo
        linkSpacing: '1rem',                // Tighter link spacing
        linkSpacingMobile: '0.75rem',       // Compact mobile links
        searchSpacing: '0.75rem',           // Compact search spacing
        controlsSpacing: '0.5rem',          // Tight control spacing
    },
    
    productGrid: {
        gridGap: '1rem',                    // Smaller gaps between cards
        gridGapMobile: '0.75rem',           // Tight mobile grid
        cardPadding: '1rem',                // Compact card padding
        cardPaddingMobile: '0.75rem',       // Tight mobile card padding
        cardElementSpacing: '0.75rem',      // Compact card elements
        cardElementSpacingMobile: '0.5rem', // Tight mobile card elements
        gridMinWidth: '280px',              // Smaller minimum width
        gridMaxWidth: '350px',              // Smaller maximum width
    },
    
    hero: {
        heroPadding: '4rem 0',              // Reduced hero padding
        heroPaddingMobile: '2.5rem 0',      // Compact mobile hero
        heroContentSpacing: '1.5rem',       // Tighter hero content
        heroContentSpacingMobile: '1rem',   // Compact mobile hero content
        heroButtonSpacing: '0.75rem',       // Tighter button spacing
        heroButtonSpacingMobile: '0.5rem',  // Compact mobile buttons
    },
    
    blog: {
        blogGridGap: '1.5rem',              // Smaller blog grid gaps
        blogGridGapMobile: '1rem',          // Tight mobile blog grid
        blogCardPadding: '1rem',            // Compact blog card padding
        blogCardPaddingMobile: '0.75rem',   // Tight mobile blog cards
        blogContentSpacing: '0.75rem',      // Compact blog content
        blogContentSpacingMobile: '0.5rem', // Tight mobile blog content
        blogSectionSpacing: '2.5rem',       // Compact section spacing
        blogSectionSpacingMobile: '2rem',   // Compact mobile section spacing
        newsletterTopSpacing: '2.5rem',     // Compact newsletter spacing
        newsletterTopSpacingMobile: '2rem', // Compact mobile newsletter spacing
        blogCardMinWidth: '280px',          // Smaller blog card minimum
        blogCardMaxWidth: '350px',          // Smaller blog card maximum
    },
    
    footer: {
        footerPadding: '2rem 0',            // Reduced footer padding
        footerPaddingMobile: '1.5rem 0',    // Compact mobile footer
        footerContentSpacing: '1.5rem',     // Tighter footer content
        footerContentSpacingMobile: '1rem', // Compact mobile footer content
        footerElementSpacing: '0.75rem',    // Compact footer elements
        footerElementSpacingMobile: '0.5rem', // Tight mobile footer elements
    }
};

// ===========================================
// EXAMPLE 2: SPACIOUS LAYOUT
// ===========================================
// Perfect for premium websites that want breathing room and elegance
const SPACIOUS_LAYOUT_OVERRIDES = {
    
    global: {
        containerPadding: '2rem',           // Generous container padding
        containerPaddingMobile: '1.5rem',   // Spacious mobile padding
        containerMaxWidth: '1200px',        // Standard container width
        sectionSpacing: '6rem',             // Large space between sections
        sectionSpacingMobile: '4rem',       // Spacious mobile sections
        elementSpacing: '2rem',             // Generous element spacing
        elementSpacingMobile: '1.5rem',     // Spacious mobile elements
    },
    
    navigation: {
        navPadding: '1.5rem 2rem',          // Generous navigation padding
        navPaddingMobile: '1rem 1.5rem',    // Spacious mobile navigation
        logoSpacing: '1.5rem',              // More space after logo
        linkSpacing: '2rem',                // Generous link spacing
        linkSpacingMobile: '1.5rem',        // Spacious mobile links
        searchSpacing: '1.5rem',            // Generous search spacing
        controlsSpacing: '1rem',            // Spacious control spacing
    },
    
    productGrid: {
        gridGap: '2.5rem',                  // Large gaps between cards
        gridGapMobile: '1.5rem',            // Spacious mobile grid
        cardPadding: '2.5rem',              // Generous card padding
        cardPaddingMobile: '1.5rem',        // Spacious mobile card padding
        cardElementSpacing: '1.5rem',       // Generous card elements
        cardElementSpacingMobile: '1rem',   // Spacious mobile card elements
        gridMinWidth: '320px',              // Larger minimum width
        gridMaxWidth: '420px',              // Larger maximum width
    },
    
    hero: {
        heroPadding: '8rem 0',              // Large hero padding
        heroPaddingMobile: '5rem 0',        // Spacious mobile hero
        heroContentSpacing: '3rem',         // Generous hero content
        heroContentSpacingMobile: '2rem',   // Spacious mobile hero content
        heroButtonSpacing: '1.5rem',        // Generous button spacing
        heroButtonSpacingMobile: '1rem',    // Spacious mobile buttons
    },
    
    blog: {
        blogGridGap: '3rem',                // Large blog grid gaps
        blogGridGapMobile: '2rem',          // Spacious mobile blog grid
        blogCardPadding: '2.5rem',          // Generous blog card padding
        blogCardPaddingMobile: '1.5rem',    // Spacious mobile blog cards
        blogContentSpacing: '1.5rem',       // Generous blog content
        blogContentSpacingMobile: '1rem',   // Spacious mobile blog content
        blogSectionSpacing: '6rem',         // Large section spacing
        blogSectionSpacingMobile: '4rem',   // Spacious mobile section spacing
        newsletterTopSpacing: '6rem',       // Large newsletter spacing
        newsletterTopSpacingMobile: '4rem', // Spacious mobile newsletter spacing
        blogCardMinWidth: '320px',          // Larger blog card minimum
        blogCardMaxWidth: '420px',          // Larger blog card maximum
    },
    
    footer: {
        footerPadding: '4rem 0',            // Large footer padding
        footerPaddingMobile: '3rem 0',      // Spacious mobile footer
        footerContentSpacing: '3rem',       // Generous footer content
        footerContentSpacingMobile: '2rem', // Spacious mobile footer content
        footerElementSpacing: '1.5rem',     // Generous footer elements
        footerElementSpacingMobile: '1rem', // Spacious mobile footer elements
    }
};

// ===========================================
// EXAMPLE 3: MOBILE-FIRST LAYOUT
// ===========================================
// Optimized for mobile devices with desktop as secondary
const MOBILE_FIRST_OVERRIDES = {
    
    global: {
        containerPadding: '1rem',           // Standard container padding
        containerPaddingMobile: '1rem',     // Same padding on mobile
        containerMaxWidth: '100%',          // Full width on all devices
        sectionSpacing: '3rem',             // Moderate section spacing
        sectionSpacingMobile: '2rem',       // Optimized mobile sections
        elementSpacing: '1.5rem',           // Standard element spacing
        elementSpacingMobile: '1rem',       // Optimized mobile elements
    },
    
    navigation: {
        navPadding: '1rem 1rem',            // Equal padding all around
        navPaddingMobile: '1rem 1rem',      // Same on mobile
        logoSpacing: '1rem',                // Standard logo spacing
        linkSpacing: '1.5rem',              // Standard link spacing
        linkSpacingMobile: '1rem',          // Optimized mobile links
        searchSpacing: '1rem',              // Standard search spacing
        controlsSpacing: '0.75rem',         // Compact control spacing
    },
    
    productGrid: {
        gridGap: '1.5rem',                  // Standard grid gaps
        gridGapMobile: '1rem',              // Optimized mobile grid
        cardPadding: '1.5rem',              // Standard card padding
        cardPaddingMobile: '1rem',          // Optimized mobile card padding
        cardElementSpacing: '1rem',         // Standard card elements
        cardElementSpacingMobile: '0.75rem', // Optimized mobile card elements
        gridMinWidth: '300px',              // Standard minimum width
        gridMaxWidth: '100%',               // Full width cards on mobile
    },
    
    hero: {
        heroPadding: '5rem 0',              // Standard hero padding
        heroPaddingMobile: '3rem 0',        // Optimized mobile hero
        heroContentSpacing: '2rem',         // Standard hero content
        heroContentSpacingMobile: '1.5rem', // Optimized mobile hero content
        heroButtonSpacing: '1rem',          // Standard button spacing
        heroButtonSpacingMobile: '0.75rem', // Optimized mobile buttons
    },
    
    blog: {
        blogGridGap: '2rem',                // Standard blog grid gaps
        blogGridGapMobile: '1.5rem',        // Optimized mobile blog grid
        blogCardPadding: '1.5rem',          // Standard blog card padding
        blogCardPaddingMobile: '1rem',      // Optimized mobile blog cards
        blogContentSpacing: '1rem',         // Standard blog content
        blogContentSpacingMobile: '0.75rem', // Optimized mobile blog content
        blogCardMinWidth: '300px',          // Standard blog card minimum
        blogCardMaxWidth: '100%',           // Full width blog cards on mobile
    },
    
    footer: {
        footerPadding: '3rem 0',            // Standard footer padding
        footerPaddingMobile: '2rem 0',      // Optimized mobile footer
        footerContentSpacing: '2rem',       // Standard footer content
        footerContentSpacingMobile: '1.5rem', // Optimized mobile footer content
        footerElementSpacing: '1rem',       // Standard footer elements
        footerElementSpacingMobile: '0.75rem', // Optimized mobile footer elements
    }
};

// ===========================================
// EXAMPLE 4: NAVIGATION-FOCUSED LAYOUT
// ===========================================
// Perfect for websites with complex navigation needs
const NAVIGATION_FOCUSED_OVERRIDES = {
    
    global: {
        containerPadding: '1.5rem',         // Standard container padding
        containerPaddingMobile: '1rem',     // Standard mobile padding
        containerMaxWidth: '1200px',        // Standard container width
        sectionSpacing: '4rem',             // Standard section spacing
        sectionSpacingMobile: '2.5rem',     // Standard mobile sections
        elementSpacing: '1.5rem',           // Standard element spacing
        elementSpacingMobile: '1rem',       // Standard mobile elements
    },
    
    navigation: {
        navPadding: '1.5rem 2rem',          // Extra navigation padding
        navPaddingMobile: '1rem 1.5rem',    // Generous mobile navigation
        logoSpacing: '2rem',                // Extra space after logo
        linkSpacing: '2.5rem',              // Extra space between links
        linkSpacingMobile: '1.5rem',        // Generous mobile link spacing
        searchSpacing: '1.5rem',            // Extra search spacing
        controlsSpacing: '1rem',            // Extra control spacing
    },
    
    productGrid: {
        gridGap: '1.5rem',                  // Standard grid gaps
        gridGapMobile: '1rem',              // Standard mobile grid
        cardPadding: '1.5rem',              // Standard card padding
        cardPaddingMobile: '1rem',          // Standard mobile card padding
        cardElementSpacing: '1rem',         // Standard card elements
        cardElementSpacingMobile: '0.75rem', // Standard mobile card elements
        gridMinWidth: '300px',              // Standard minimum width
        gridMaxWidth: '400px',              // Standard maximum width
    },
    
    hero: {
        heroPadding: '6rem 0',              // Standard hero padding
        heroPaddingMobile: '4rem 0',        // Standard mobile hero
        heroContentSpacing: '2rem',         // Standard hero content
        heroContentSpacingMobile: '1.5rem', // Standard mobile hero content
        heroButtonSpacing: '1rem',          // Standard button spacing
        heroButtonSpacingMobile: '0.75rem', // Standard mobile buttons
    },
    
    blog: {
        blogGridGap: '2rem',                // Standard blog grid gaps
        blogGridGapMobile: '1.5rem',        // Standard mobile blog grid
        blogCardPadding: '1.5rem',          // Standard blog card padding
        blogCardPaddingMobile: '1rem',      // Standard mobile blog cards
        blogContentSpacing: '1rem',         // Standard blog content
        blogContentSpacingMobile: '0.75rem', // Standard mobile blog content
        blogCardMinWidth: '300px',          // Standard blog card minimum
        blogCardMaxWidth: '400px',          // Standard blog card maximum
    },
    
    footer: {
        footerPadding: '3rem 0',            // Standard footer padding
        footerPaddingMobile: '2rem 0',      // Standard mobile footer
        footerContentSpacing: '2rem',       // Standard footer content
        footerContentSpacingMobile: '1.5rem', // Standard mobile footer content
        footerElementSpacing: '1rem',       // Standard footer elements
        footerElementSpacingMobile: '0.75rem', // Standard mobile footer elements
    }
};

// ===========================================
// EXAMPLE 5: CONTENT-HEAVY LAYOUT
// ===========================================
// Optimized for blogs and content-rich websites
const CONTENT_HEAVY_OVERRIDES = {
    
    global: {
        containerPadding: '1rem',           // Compact container padding
        containerPaddingMobile: '0.75rem',  // Tight mobile padding
        containerMaxWidth: '1400px',        // Wider container for more content
        sectionSpacing: '3rem',             // Moderate section spacing
        sectionSpacingMobile: '2rem',       // Compact mobile sections
        elementSpacing: '1.25rem',          // Moderate element spacing
        elementSpacingMobile: '1rem',       // Compact mobile elements
    },
    
    navigation: {
        navPadding: '1rem 1.5rem',          // Moderate navigation padding
        navPaddingMobile: '0.75rem 1rem',   // Compact mobile navigation
        logoSpacing: '1rem',                // Standard logo spacing
        linkSpacing: '1.5rem',              // Standard link spacing
        linkSpacingMobile: '1rem',          // Compact mobile links
        searchSpacing: '1rem',              // Standard search spacing
        controlsSpacing: '0.75rem',         // Compact control spacing
    },
    
    productGrid: {
        gridGap: '1.25rem',                 // Moderate grid gaps
        gridGapMobile: '1rem',              // Compact mobile grid
        cardPadding: '1.25rem',             // Moderate card padding
        cardPaddingMobile: '1rem',          // Compact mobile card padding
        cardElementSpacing: '1rem',         // Standard card elements
        cardElementSpacingMobile: '0.75rem', // Compact mobile card elements
        gridMinWidth: '280px',              // Smaller minimum width for more cards
        gridMaxWidth: '380px',              // Smaller maximum width
    },
    
    hero: {
        heroPadding: '5rem 0',              // Moderate hero padding
        heroPaddingMobile: '3rem 0',        // Compact mobile hero
        heroContentSpacing: '1.5rem',       // Moderate hero content
        heroContentSpacingMobile: '1.25rem', // Compact mobile hero content
        heroButtonSpacing: '1rem',          // Standard button spacing
        heroButtonSpacingMobile: '0.75rem', // Compact mobile buttons
    },
    
    blog: {
        blogGridGap: '1.5rem',              // Moderate blog grid gaps
        blogGridGapMobile: '1rem',          // Compact mobile blog grid
        blogCardPadding: '1.25rem',         // Moderate blog card padding
        blogCardPaddingMobile: '1rem',      // Compact mobile blog cards
        blogContentSpacing: '1rem',         // Standard blog content
        blogContentSpacingMobile: '0.75rem', // Compact mobile blog content
        blogCardMinWidth: '280px',          // Smaller blog card minimum
        blogCardMaxWidth: '380px',          // Smaller blog card maximum
    },
    
    footer: {
        footerPadding: '2.5rem 0',          // Moderate footer padding
        footerPaddingMobile: '2rem 0',      // Compact mobile footer
        footerContentSpacing: '1.5rem',     // Moderate footer content
        footerContentSpacingMobile: '1.25rem', // Compact mobile footer content
        footerElementSpacing: '1rem',       // Standard footer elements
        footerElementSpacingMobile: '0.75rem', // Compact mobile footer elements
    }
};

// ===========================================
// PAGE-SPECIFIC EXAMPLES
// ===========================================

// Homepage with extra emphasis
const HOMEPAGE_EMPHASIS_OVERRIDES = {
    '/index.html': {
        hero: {
            heroPadding: '10rem 0',             // Extra large hero padding
            heroContentSpacing: '3rem',         // Extra space between hero elements
            heroButtonSpacing: '1.5rem',        // Extra space between buttons
        },
        
        topPick: {
            sectionPadding: '5rem 0',           // Extra padding for top pick section
            cardPadding: '3rem',                // Extra padding inside top pick card
            elementSpacing: '2rem',             // Extra space between elements
        },
        
        productGrid: {
            gridGap: '2rem',                    // Extra space between product cards
            cardPadding: '2rem',                // Extra padding inside product cards
        }
    }
};

// Blog page with reading focus
const BLOG_READING_FOCUS_OVERRIDES = {
    '/blog.html': {
        hero: {
            heroPadding: '4rem 0',              // Smaller hero for blog
            heroContentSpacing: '1.5rem',       // Tighter hero content
        },
        
        blog: {
            blogGridGap: '2.5rem',              // Extra space between blog cards
            blogCardPadding: '2rem',            // Extra padding for readability
            blogContentSpacing: '1.25rem',      // Comfortable reading spacing
        },
        
        blogHeader: {
            headerPadding: '2rem 0',            // Header section padding
            headerSpacing: '1rem',              // Space between header elements
        }
    }
};

// Legal pages with document focus
const LEGAL_DOCUMENT_OVERRIDES = {
    '/privacy.html': {
        legal: {
            contentPadding: '4rem 0',           // Extra padding for legal content
            sectionSpacing: '2.5rem',           // Extra space between sections
            paragraphSpacing: '1.25rem',        // Comfortable paragraph spacing
        }
    },
    
    '/disclaimer.html': {
        legal: {
            contentPadding: '4rem 0',           // Extra padding for legal content
            sectionSpacing: '2.5rem',           // Extra space between sections
            paragraphSpacing: '1.25rem',        // Comfortable paragraph spacing
        }
    }
};

// ===========================================
// TUTORIAL 3: HOW TO USE THESE EXAMPLES
// ===========================================
/*
STEP 1: Choose your layout style
- COMPACT_LAYOUT_OVERRIDES: For content-heavy sites
- SPACIOUS_LAYOUT_OVERRIDES: For premium, elegant sites
- MOBILE_FIRST_OVERRIDES: For mobile-optimized sites
- NAVIGATION_FOCUSED_OVERRIDES: For complex navigation
- CONTENT_HEAVY_OVERRIDES: For blogs and content sites

STEP 2: Copy the configuration
- Copy the entire object (including the const declaration)
- Paste it into your spacing-overrides.js file
- Replace the existing SPACING_OVERRIDES object

STEP 3: Customize page-specific overrides
- Copy any page-specific examples you need
- Add them to your PAGE_SPACING_OVERRIDES object
- Modify values to match your design needs

STEP 4: Test and refine
- Enable spacing overrides in your main file
- Test on different screen sizes
- Adjust values as needed
- Use browser dev tools to fine-tune

STEP 5: Advanced customization
- Mix and match properties from different examples
- Create your own custom spacing combinations
- Use CSS calc() for dynamic spacing
- Consider using CSS custom properties for themes
*/

// ===========================================
// TUTORIAL 4: RESPONSIVE SPACING TIPS
// ===========================================
/*
MOBILE-FIRST APPROACH:
1. Start with mobile spacing values
2. Add desktop values that scale up appropriately
3. Test on actual devices, not just browser resize
4. Consider thumb-friendly touch targets (minimum 44px)

COMMON RESPONSIVE PATTERNS:
- Container padding: 1rem mobile, 1.5rem desktop
- Section spacing: 2rem mobile, 4rem desktop
- Card padding: 1rem mobile, 1.5rem desktop
- Grid gaps: 1rem mobile, 1.5rem desktop

BREAKPOINT CONSIDERATIONS:
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+
- Large desktop: 1200px+

TESTING CHECKLIST:
□ Test on iPhone SE (375px)
□ Test on iPad (768px)
□ Test on desktop (1200px)
□ Test on large desktop (1400px+)
□ Verify 3-column product grid maintains
□ Verify blog columns don't break
□ Check navigation doesn't overflow
□ Ensure touch targets are adequate
*/

// ===========================================
// TUTORIAL 5: TROUBLESHOOTING COMMON ISSUES
// ===========================================
/*
ISSUE: Product cards break out of 3-column layout
SOLUTION: Check gridMinWidth and gridMaxWidth values
- gridMinWidth should be around 280px-320px
- gridMaxWidth should be around 380px-420px
- Ensure gridGap isn't too large for container

ISSUE: Blog cards stack incorrectly
SOLUTION: Verify blog card spacing settings
- blogCardMinWidth should be around 280px-320px
- blogCardMaxWidth should be around 380px-420px
- Check blogGridGap isn't too large

ISSUE: Navigation overflows on mobile
SOLUTION: Reduce navigation spacing values
- Decrease navPadding on mobile
- Reduce linkSpacing on mobile
- Check logoSpacing and controlsSpacing

ISSUE: Content feels too cramped
SOLUTION: Increase spacing values gradually
- Start with containerPadding
- Increase sectionSpacing
- Adjust cardPadding and elementSpacing

ISSUE: Content feels too spread out
SOLUTION: Decrease spacing values
- Reduce sectionSpacing first
- Adjust containerPadding
- Fine-tune cardPadding and elementSpacing

ISSUE: Spacing inconsistent across pages
SOLUTION: Use page-specific overrides
- Define consistent base spacing
- Override specific pages as needed
- Test all pages after changes

DEBUGGING COMMANDS:
- debugSpacing() - Shows current spacing settings
- SpacingManager.toggle() - Toggle spacing on/off
- SpacingManager.isEnabled() - Check if enabled
*/

// ===========================================
// USAGE INSTRUCTIONS
// ===========================================
/*
To use any of these configurations:

1. Copy the entire configuration object (e.g., COMPACT_LAYOUT_OVERRIDES)
2. Open utils/spacing-overrides.js
3. Replace the SPACING_OVERRIDES object with your chosen configuration
4. Set ENABLE_SPACING_OVERRIDES = true at the top of the file
5. Save and refresh your website

For page-specific overrides:
1. Copy the page-specific configuration (e.g., HOMEPAGE_EMPHASIS_OVERRIDES)
2. Add it to your PAGE_SPACING_OVERRIDES object in spacing-overrides.js
3. Merge with existing page overrides if needed

For custom combinations:
1. Start with a base configuration
2. Mix and match properties from different examples
3. Create your own custom spacing values
4. Test thoroughly on different screen sizes

Remember: All spacing values use CSS units (px, rem, em, %, vw, vh)
Recommended: Use rem for responsive design and accessibility
*/ 