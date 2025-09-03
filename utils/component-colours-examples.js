/*
===========================================
COMPONENT COLOR EXAMPLES
===========================================
🎨 READY-TO-USE COLOR CONFIGURATIONS

This file contains pre-made color configurations for common use cases.
Copy any configuration to your component-colours.js file to use it.

USAGE:
1. Choose a configuration below
2. Copy the COMPONENT_OVERRIDES object
3. Paste it into utils/component-colours.js
4. Set ENABLE_COMPONENT_OVERRIDES = true

===========================================
📋 COMPLETE LIST OF ALL CUSTOMIZABLE COMPONENTS
===========================================

NAVIGATION COMPONENTS:
• navBackground - Main navigation bar background
• navBackgroundScrolled - Navigation background when scrolled
• logoText - Logo/brand text color
• logoTextHover - Logo color on hover
• navLinks - Navigation menu link colors
• navLinksHover - Navigation links on hover
• navLinksActive - Active/current page link color
• mobileMenuBackground - Mobile hamburger menu background
• mobileMenuToggle - Mobile menu toggle button color

BUTTON COMPONENTS:
• primaryBackground - Main action button background
• primaryBackgroundHover - Primary button hover state
• primaryText - Primary button text color
• primaryBorder - Primary button border color
• secondaryBackground - Secondary button background
• secondaryBackgroundHover - Secondary button hover state
• secondaryText - Secondary button text color
• secondaryBorder - Secondary button border color
• outlineBackground - Outline button background
• outlineBackgroundHover - Outline button hover background
• outlineText - Outline button text color
• outlineTextHover - Outline button text on hover
• outlineBorder - Outline button border color
• animatedGlow - Animated button glow effect
• animatedShadow - Animated button shadow
• floatingBackground - Floating CTA button background
• floatingBackgroundHover - Floating CTA hover state
• floatingText - Floating CTA text color
• floatingGlow - Floating CTA glow effect

SECTION BACKGROUNDS:
• heroBackground - Hero section background
• heroOverlay - Hero section overlay
• heroText - Hero title text color
• heroSubtext - Hero subtitle text color
• topPickBackground - Top pick section background
• topPickBadgeBackground - Editor's Choice badge background
• topPickBadgeText - Editor's Choice badge text
• topPickCardBackground - Top pick card background
• topPickCardBorder - Top pick card border
• top10Background - Main top 10 section background
• top10HeaderText - Top 10 section heading color
• top10SubtitleText - Top 10 section subtitle color
• reviewsBackground - Reviews section background
• reviewCardBackground - Individual review card background
• reviewCardBorder - Review card border color
• reviewCardHover - Review card hover state
• footerBackground - Footer background color
• footerText - Footer text color
• footerHeadings - Footer section headings
• footerLinks - Footer link colors
• footerLinksHover - Footer links on hover

PRODUCT CARD COMPONENTS:
• cardBackground - Product card background
• cardBackgroundHover - Product card hover state
• cardBorder - Product card border
• cardBorderHover - Product card border on hover
• cardShadow - Product card shadow
• cardShadowHover - Product card shadow on hover
• rankBadgeBackground - Rank badge background (#1, #2, etc.)
• rankBadgeText - Rank badge text color
• rankNumberBackground - Rank number background
• rankNumberText - Rank number text color
• productTitle - Product name/title color
• productDescription - Product description text
• productPrice - Product price color
• productOriginalPrice - Crossed-out original price
• productDiscount - Discount percentage color
• starActive - Filled rating stars
• starInactive - Empty rating stars
• ratingText - Rating text color
• quickViewBackground - Quick view overlay background
• quickViewText - Quick view button text
• quickViewHover - Quick view hover state
• featureIcon - Feature icons (checkmarks, etc.)
• featureText - Feature description text
• featureBackground - Feature highlight background

FORM COMPONENTS:
• inputBackground - Text input field background
• inputBorder - Input field border
• inputBorderFocus - Input border when focused
• inputText - Input text color
• inputPlaceholder - Input placeholder text
• labelText - Form field label color
• labelRequired - Required field indicator (*)
• selectBackground - Dropdown select background
• selectBorder - Dropdown border
• selectText - Dropdown text color
• selectArrow - Dropdown arrow color
• checkboxBorder - Checkbox border
• checkboxChecked - Checked checkbox color
• checkboxText - Checkbox label text

COMPARISON TABLE COMPONENTS:
• tableBackground - Comparison table background
• tableBorder - Table border color
• tableHeaderBackground - Table header background
• tableHeaderText - Table header text
• tableCellBackground - Table cell background
• tableCellAlternate - Alternating row background
• tableCellText - Table cell text
• tableCellBorder - Table cell borders
• highlightBackground - Highlighted cell background
• highlightBorder - Highlighted cell border
• highlightText - Highlighted cell text
• successIcon - Success/checkmark icons
• failureIcon - Failure/X icons
• neutralIcon - Neutral/dash icons

BLOG COMPONENTS:
• blogBackground - Blog section background
• blogCardBackground - Blog post card background
• blogCardBorder - Blog card border
• blogCardHover - Blog card hover state
• blogTitle - Blog post title color
• blogExcerpt - Blog post excerpt text
• blogMeta - Blog post metadata (date, category)
• blogCategory - Blog category badge
• blogDate - Blog post date color
• blogTags - Blog post tags
• blogCTA - Blog call-to-action elements

LEGAL PAGE COMPONENTS:
• legalBackground - Legal page background
• legalContent - Legal content text
• legalHeadings - Legal section headings
• legalLinks - Legal page links
• legalLinksHover - Legal links on hover
• lastUpdated - Last updated date color
• alertContent - Alert/warning content
• stepContent - Step-by-step content

ALERT COMPONENTS:
• successBackground - Success message background
• successBorder - Success message border
• successText - Success message text
• successIcon - Success icons
• warningBackground - Warning message background
• warningBorder - Warning message border
• warningText - Warning message text
• warningIcon - Warning icons
• errorBackground - Error message background
• errorBorder - Error message border
• errorText - Error message text
• errorIcon - Error icons
• infoBackground - Info message background
• infoBorder - Info message border
• infoText - Info message text
• infoIcon - Info icons

SPECIALTY COMPONENTS:
• spinnerPrimary - Loading spinner color
• spinnerSecondary - Spinner background track
• progressBackground - Progress bar background
• progressFill - Progress bar fill color
• progressText - Progress percentage text
• badgePrimary - Primary badge background
• badgeSecondary - Secondary badge background
• badgeSuccess - Success badge color
• badgeWarning - Warning badge color
• badgeDanger - Danger badge color
• tooltipBackground - Tooltip background
• tooltipText - Tooltip text color
• tooltipBorder - Tooltip border
• tooltipArrow - Tooltip arrow color
• modalBackground - Modal dialog background
• modalOverlay - Modal overlay background
• modalBorder - Modal border
• modalShadow - Modal shadow effect

BADGES:
• editorsChoiceBackground - Editor's Choice badge background
• editorsChoiceText - Editor's Choice badge text
• editorsChoiceIcon - Editor's Choice badge icon
• editorsChoiceShadow - Editor's Choice badge shadow
• bestValueBackground - Best Value badge background
• bestValueText - Best Value badge text
• bestValueIcon - Best Value badge icon
• bestValueShadow - Best Value badge shadow
• newReleaseBackground - New Release badge background
• newReleaseText - New Release badge text
• newReleaseIcon - New Release badge icon
• newReleaseShadow - New Release badge shadow
• popularChoiceBackground - Popular Choice badge background
• popularChoiceText - Popular Choice badge text
• popularChoiceIcon - Popular Choice badge icon
• popularChoiceShadow - Popular Choice badge shadow

TOTAL: 150+ customizable components available!
*/

// ===========================================
// GAMING SITE CONFIGURATION
// ===========================================
const GAMING_SITE_OVERRIDES = {
    
    // Navigation bar styling
    navigation: {
        navBackground: '#0f0f0f',              // Dark background for the main navigation bar
        navBackgroundScrolled: '#000000',      // Even darker background when user scrolls down
        logoText: '#00ff88',                   // Bright green color for the logo/brand text
        logoTextHover: '#00cc66',              // Slightly darker green when hovering over logo
        navLinks: '#ffffff',                   // White color for navigation menu links
        navLinksHover: '#00ff88',              // Bright green color when hovering over nav links
        navLinksActive: '#00cc66',             // Dark green for the currently active page link
        mobileMenuBackground: '#0f0f0f',       // Dark background for mobile hamburger menu
        mobileMenuToggle: '#ffffff',           // White color for the mobile menu toggle button
    },
    
    // Button styling across the site
    buttons: {
        primaryBackground: '#00ff88',          // Bright green background for main action buttons
        primaryBackgroundHover: '#00cc66',     // Darker green when hovering over primary buttons
        primaryText: '#000000',                // Black text color on primary buttons (contrasts with green)
        primaryBorder: '#00ff88',              // Green border color for primary buttons
        secondaryBackground: '#333333',        // Dark gray background for secondary buttons
        secondaryBackgroundHover: '#444444',   // Lighter gray when hovering over secondary buttons
        secondaryText: '#ffffff',              // White text color on secondary buttons
        secondaryBorder: '#333333',            // Gray border color for secondary buttons
        outlineBackground: 'transparent',      // Transparent background for outline-style buttons
        outlineBackgroundHover: '#00ff88',     // Green fill when hovering over outline buttons
        outlineText: '#00ff88',                // Green text color for outline buttons
        outlineTextHover: '#000000',           // Black text when hovering over outline buttons
        outlineBorder: '#00ff88',              // Green border for outline buttons
        animatedGlow: 'rgba(0, 255, 136, 0.3)', // Subtle green glow effect for animated buttons
        animatedShadow: 'rgba(0, 255, 136, 0.5)', // Green shadow for button animation effects
        floatingBackground: '#ff0066',         // Hot pink background for floating call-to-action button
        floatingBackgroundHover: '#cc0052',    // Darker pink when hovering over floating CTA
        floatingText: '#ffffff',               // White text on floating CTA button
        floatingGlow: 'rgba(255, 0, 102, 0.4)', // Pink glow effect around floating button
    },
    
    // Main section backgrounds and text colors
    sections: {
        heroBackground: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)', // Dark gradient for hero section
        heroOverlay: 'rgba(0, 0, 0, 0.3)',     // Semi-transparent overlay on hero background
        heroText: '#ffffff',                   // White color for main hero title text
        heroSubtext: '#cccccc',                // Light gray for hero subtitle/description text
        topPickBackground: '#1a1a1a',          // Dark background for "top pick" featured section
        topPickBadgeBackground: '#ff0066',     // Hot pink background for "Editor's Choice" badge
        topPickBadgeText: '#ffffff',           // White text on the Editor's Choice badge
        topPickCardBackground: '#222222',      // Dark gray background for top pick product card
        topPickCardBorder: '#333333',          // Border color around top pick card
        top10Background: '#0f0f0f',            // Dark background for main top 10 list section
        top10HeaderText: '#ffffff',            // White color for "Top 10" section heading
        top10SubtitleText: '#cccccc',          // Light gray for Top 10 section description
        reviewsBackground: '#1a1a1a',          // Dark background for reviews section
        reviewCardBackground: '#222222',       // Individual review card background color
        reviewCardBorder: '#333333',           // Border color around review cards
        reviewCardHover: '#2a2a2a',            // Slightly lighter background when hovering over review cards
        footerBackground: '#0f0f0f',           // Dark background for website footer
        footerText: '#cccccc',                 // Light gray for general footer text
        footerHeadings: '#00ff88',             // Bright green for footer section headings
        footerLinks: '#ffffff',                // White color for footer links
        footerLinksHover: '#00ff88',           // Green color when hovering over footer links
    },
    
    // Product card styling (main product listings)
    productCards: {
        cardBackground: '#1a1a1a',             // Dark background for individual product cards
        cardBackgroundHover: '#222222',        // Slightly lighter background when hovering over cards
        cardBorder: '#333333',                 // Border color around product cards
        cardBorderHover: '#444444',            // Lighter border color when hovering over cards
        cardShadow: 'rgba(0, 0, 0, 0.3)',      // Shadow effect under product cards
        cardShadowHover: 'rgba(0, 0, 0, 0.5)', // Stronger shadow when hovering over cards
        rankBadgeBackground: '#ff0066',        // Hot pink background for rank number badges (#1, #2, etc.)
        rankBadgeText: '#ffffff',              // White text color for rank numbers
        rankNumberBackground: '#cc0052',       // Darker pink for the circular rank number
        rankNumberText: '#ffffff',             // White text for the rank number itself
        productTitle: '#ffffff',               // White color for product name/title
        productDescription: '#cccccc',         // Light gray for product description text
        productPrice: '#00ff88',               // Bright green for product price display
        productOriginalPrice: '#999999',       // Gray for crossed-out original price
        productDiscount: '#ff0066',            // Hot pink for discount percentage text
        starActive: '#ffaa00',                 // Orange color for filled rating stars
        starInactive: '#444444',               // Dark gray for empty rating stars
        ratingText: '#cccccc',                 // Light gray for rating text (e.g., "4.5 stars")
        quickViewBackground: 'rgba(0, 255, 136, 0.9)', // Semi-transparent green for quick view overlay
        quickViewText: '#000000',              // Black text on quick view button
        quickViewHover: 'rgba(0, 255, 136, 1)', // Solid green when hovering over quick view
        featureIcon: '#00ff88',                // Green color for feature icons (checkmarks, etc.)
        featureText: '#ffffff',                // White text for feature descriptions
        featureBackground: '#1a1a1a',          // Dark background for feature highlight boxes
    },
    
    // Form elements (search, filters, etc.)
    forms: {
        inputBackground: '#222222',            // Dark background for text input fields
        inputBorder: '#444444',                // Border color around input fields
        inputBorderFocus: '#00ff88',           // Green border when input field is focused/active
        inputText: '#ffffff',                  // White text color inside input fields
        inputPlaceholder: '#888888',           // Gray color for placeholder text in inputs
        labelText: '#cccccc',                  // Light gray for form field labels
        labelRequired: '#ff0066',              // Hot pink for required field indicators (*)
        selectBackground: '#222222',           // Dark background for dropdown select menus
        selectBorder: '#444444',               // Border color for dropdown menus
        selectText: '#ffffff',                 // White text in dropdown options
        selectArrow: '#888888',                // Gray color for dropdown arrow icon
        checkboxBorder: '#444444',             // Border color for checkboxes
        checkboxChecked: '#00ff88',            // Green color when checkbox is checked
        checkboxText: '#cccccc',               // Light gray for checkbox labels
    },
    
    // Comparison table styling
    comparison: {
        tableBackground: '#1a1a1a',            // Dark background for comparison table
        tableBorder: '#333333',                // Border color for table cells and edges
        tableHeaderBackground: '#0f0f0f',      // Even darker background for table header row
        tableHeaderText: '#ffffff',            // White text for table column headers
        tableCellBackground: '#1a1a1a',        // Dark background for regular table cells
        tableCellAlternate: '#222222',         // Slightly lighter background for alternating rows
        tableCellText: '#cccccc',              // Light gray text in table cells
        tableCellBorder: '#333333',            // Border color between table cells
        highlightBackground: '#2a2a00',        // Dark yellow background for highlighted comparisons
        highlightBorder: '#ffaa00',            // Orange border for highlighted table cells
        highlightText: '#ffaa00',              // Orange text for highlighted content
        successIcon: '#00ff88',                // Green color for checkmark/success icons
        failureIcon: '#ff0066',                // Hot pink for X/failure icons
        neutralIcon: '#888888',                // Gray for neutral/dash icons
    },
    
    // Alert messages and notifications
    alerts: {
        successBackground: '#0a2e0a',          // Dark green background for success messages
        successBorder: '#00ff88',              // Bright green border for success alerts
        successText: '#00ff88',                // Green text for success message content
        successIcon: '#00ff88',                // Green color for success icons (checkmarks)
        warningBackground: '#2e2e0a',          // Dark yellow background for warning messages
        warningBorder: '#ffaa00',              // Orange border for warning alerts
        warningText: '#ffaa00',                // Orange text for warning message content
        warningIcon: '#ffaa00',                // Orange color for warning icons
        errorBackground: '#2e0a0a',            // Dark red background for error messages
        errorBorder: '#ff0066',                // Hot pink border for error alerts
        errorText: '#ff0066',                  // Pink text for error message content
        errorIcon: '#ff0066',                  // Pink color for error icons
        infoBackground: '#0a0a2e',             // Dark blue background for info messages
        infoBorder: '#0088ff',                 // Blue border for info alerts
        infoText: '#0088ff',                   // Blue text for info message content
        infoIcon: '#0088ff',                   // Blue color for info icons
    },
    
    // Special elements and effects
    specialty: {
        spinnerPrimary: '#00ff88',             // Green color for loading spinner
        spinnerSecondary: '#333333',           // Dark gray for spinner background track
        progressBackground: '#333333',         // Dark background for progress bars
        progressFill: '#00ff88',               // Green fill color for progress bars
        progressText: '#ffffff',               // White text showing progress percentage
        badgePrimary: '#00ff88',               // Green background for primary badges
        badgeSecondary: '#333333',             // Gray background for secondary badges
        badgeSuccess: '#00ff88',               // Green for success badges
        badgeWarning: '#ffaa00',               // Orange for warning badges
        badgeDanger: '#ff0066',                // Pink for danger/error badges
        tooltipBackground: '#000000',          // Black background for tooltip popups
        tooltipText: '#ffffff',                // White text inside tooltips
        tooltipBorder: '#333333',              // Gray border around tooltips
        tooltipArrow: '#000000',               // Black color for tooltip arrow pointer
        modalBackground: '#1a1a1a',            // Dark background for modal dialog boxes
        modalOverlay: 'rgba(0, 0, 0, 0.8)',    // Semi-transparent overlay behind modals
        modalBorder: '#333333',                // Border color around modal windows
        modalShadow: 'rgba(0, 0, 0, 0.9)',     // Strong shadow effect for modals
    }
};

// ===========================================
// TECH REVIEW SITE CONFIGURATION
// ===========================================
const TECH_REVIEW_OVERRIDES = {
    
    // Professional navigation styling
    navigation: {
        navBackground: '#1e293b',              // Dark slate blue background for navigation bar
        navBackgroundScrolled: '#0f172a',      // Even darker blue when scrolled
        logoText: '#3b82f6',                   // Bright blue color for logo/brand text
        logoTextHover: '#2563eb',              // Darker blue when hovering over logo
        navLinks: '#e2e8f0',                   // Light blue-gray for navigation links
        navLinksHover: '#3b82f6',              // Blue color when hovering over nav links
        navLinksActive: '#2563eb',             // Dark blue for currently active page link
        mobileMenuBackground: '#1e293b',       // Dark blue background for mobile menu
        mobileMenuToggle: '#e2e8f0',           // Light color for mobile menu button
    },
    
    // Professional button styling
    buttons: {
        primaryBackground: '#3b82f6',          // Blue background for main action buttons
        primaryBackgroundHover: '#2563eb',     // Darker blue when hovering over primary buttons
        primaryText: '#ffffff',                // White text on primary buttons
        primaryBorder: '#3b82f6',              // Blue border for primary buttons
        secondaryBackground: '#64748b',        // Gray background for secondary buttons
        secondaryBackgroundHover: '#475569',   // Darker gray when hovering over secondary buttons
        secondaryText: '#ffffff',              // White text on secondary buttons
        secondaryBorder: '#64748b',            // Gray border for secondary buttons
        outlineBackground: 'transparent',      // Transparent background for outline buttons
        outlineBackgroundHover: '#3b82f6',     // Blue fill when hovering over outline buttons
        outlineText: '#3b82f6',                // Blue text for outline buttons
        outlineTextHover: '#ffffff',           // White text when hovering over outline buttons
        outlineBorder: '#3b82f6',              // Blue border for outline buttons
        animatedGlow: 'rgba(59, 130, 246, 0.3)', // Blue glow effect for animated buttons
        animatedShadow: 'rgba(59, 130, 246, 0.5)', // Blue shadow for button animations
        floatingBackground: '#ef4444',         // Red background for floating CTA button
        floatingBackgroundHover: '#dc2626',    // Darker red when hovering over floating CTA
        floatingText: '#ffffff',               // White text on floating button
        floatingGlow: 'rgba(239, 68, 68, 0.4)', // Red glow around floating button
    },
    
    // Clean section backgrounds
    sections: {
        heroBackground: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)', // Blue gradient for hero
        heroOverlay: 'rgba(0, 0, 0, 0.2)',     // Light overlay on hero background
        heroText: '#ffffff',                   // White text for hero title
        heroSubtext: '#cbd5e1',                // Light blue-gray for hero subtitle
        topPickBackground: '#f8fafc',          // Very light blue background for top pick section
        topPickBadgeBackground: '#3b82f6',     // Blue background for Editor's Choice badge
        topPickBadgeText: '#ffffff',           // White text on Editor's Choice badge
        topPickCardBackground: '#ffffff',      // White background for top pick card
        topPickCardBorder: '#e2e8f0',          // Light border around top pick card
        top10Background: '#ffffff',            // White background for main list section
        top10HeaderText: '#1e293b',            // Dark blue for section headings
        top10SubtitleText: '#64748b',          // Gray for section descriptions
        reviewsBackground: '#f8fafc',          // Light background for reviews section
        reviewCardBackground: '#ffffff',       // White background for review cards
        reviewCardBorder: '#e2e8f0',           // Light border around review cards
        reviewCardHover: '#f1f5f9',            // Very light blue when hovering over reviews
        footerBackground: '#0f172a',           // Dark blue background for footer
        footerText: '#94a3b8',                 // Light blue-gray for footer text
        footerHeadings: '#3b82f6',             // Blue for footer section headings
        footerLinks: '#cbd5e1',                // Light blue-gray for footer links
        footerLinksHover: '#3b82f6',           // Blue when hovering over footer links
    },
    
    // Clean product card styling
    productCards: {
        cardBackground: '#ffffff',             // White background for product cards
        cardBackgroundHover: '#f8fafc',        // Very light blue when hovering over cards
        cardBorder: '#e2e8f0',                 // Light border around product cards
        cardBorderHover: '#cbd5e1',            // Slightly darker border on hover
        cardShadow: 'rgba(0, 0, 0, 0.05)',     // Subtle shadow under cards
        cardShadowHover: 'rgba(0, 0, 0, 0.1)', // Slightly stronger shadow on hover
        rankBadgeBackground: '#3b82f6',        // Blue background for rank badges
        rankBadgeText: '#ffffff',              // White text for rank numbers
        rankNumberBackground: '#2563eb',       // Darker blue for rank number circle
        rankNumberText: '#ffffff',             // White text for rank numbers
        productTitle: '#1e293b',               // Dark blue for product titles
        productDescription: '#64748b',         // Gray for product descriptions
        productPrice: '#059669',               // Green for product prices
        productOriginalPrice: '#9ca3af',       // Light gray for original prices
        productDiscount: '#dc2626',            // Red for discount percentages
        starActive: '#fbbf24',                 // Yellow/gold for filled rating stars
        starInactive: '#d1d5db',               // Light gray for empty stars
        ratingText: '#64748b',                 // Gray for rating text
        quickViewBackground: 'rgba(59, 130, 246, 0.9)', // Blue overlay for quick view
        quickViewText: '#ffffff',              // White text on quick view button
        quickViewHover: 'rgba(59, 130, 246, 1)', // Solid blue on quick view hover
        featureIcon: '#3b82f6',                // Blue for feature icons
        featureText: '#374151',                // Dark gray for feature text
        featureBackground: '#f0f9ff',          // Very light blue for feature highlights
    }
};

// ===========================================
// E-COMMERCE SITE CONFIGURATION  
// ===========================================
const ECOMMERCE_OVERRIDES = {
    
    // Shopping-focused navigation
    navigation: {
        navBackground: '#ffffff',              // Clean white background for navigation
        navBackgroundScrolled: '#f9fafb',      // Very light gray when scrolled
        logoText: '#dc2626',                   // Red color for brand logo (shopping theme)
        logoTextHover: '#b91c1c',              // Darker red when hovering over logo
        navLinks: '#374151',                   // Dark gray for navigation links
        navLinksHover: '#dc2626',              // Red when hovering over nav links
        navLinksActive: '#b91c1c',             // Dark red for active page link
        mobileMenuBackground: '#ffffff',       // White background for mobile menu
        mobileMenuToggle: '#374151',           // Dark gray for mobile menu toggle
    },
    
    // Shopping-focused buttons
    buttons: {
        primaryBackground: '#dc2626',          // Red background for "Buy Now" buttons
        primaryBackgroundHover: '#b91c1c',     // Darker red when hovering over buy buttons
        primaryText: '#ffffff',                // White text on primary buttons
        primaryBorder: '#dc2626',              // Red border for primary buttons
        secondaryBackground: '#f3f4f6',        // Light gray for secondary buttons
        secondaryBackgroundHover: '#e5e7eb',   // Slightly darker gray on hover
        secondaryText: '#374151',              // Dark gray text on secondary buttons
        secondaryBorder: '#d1d5db',            // Light gray border for secondary buttons
        outlineBackground: 'transparent',      // Transparent background for outline buttons
        outlineBackgroundHover: '#dc2626',     // Red fill when hovering over outline buttons
        outlineText: '#dc2626',                // Red text for outline buttons
        outlineTextHover: '#ffffff',           // White text when hovering over outline buttons
        outlineBorder: '#dc2626',              // Red border for outline buttons
        animatedGlow: 'rgba(220, 38, 38, 0.3)', // Red glow for animated buttons
        animatedShadow: 'rgba(220, 38, 38, 0.5)', // Red shadow for button animations
        floatingBackground: '#f59e0b',         // Orange background for floating "Sale" button
        floatingBackgroundHover: '#d97706',    // Darker orange when hovering over sale button
        floatingText: '#ffffff',               // White text on floating button
        floatingGlow: 'rgba(245, 158, 11, 0.4)', // Orange glow around floating button
    },
    
    // Shopping-themed sections
    sections: {
        heroBackground: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)', // Light red gradient
        heroOverlay: 'rgba(0, 0, 0, 0.1)',     // Very light overlay on hero
        heroText: '#7f1d1d',                   // Dark red for hero title
        heroSubtext: '#991b1b',                // Medium red for hero subtitle
        topPickBackground: '#fffbeb',          // Light yellow background for featured deals
        topPickBadgeBackground: '#dc2626',     // Red background for "Best Deal" badge
        topPickBadgeText: '#ffffff',           // White text on deal badge
        topPickCardBackground: '#ffffff',      // White background for featured product
        topPickCardBorder: '#fecaca',          // Light red border around featured card
        top10Background: '#ffffff',            // White background for product listings
        top10HeaderText: '#1f2937',            // Dark gray for section headings
        top10SubtitleText: '#6b7280',          // Medium gray for section descriptions
        reviewsBackground: '#fef2f2',          // Light red background for reviews
        reviewCardBackground: '#ffffff',       // White background for review cards
        reviewCardBorder: '#fecaca',           // Light red border around reviews
        reviewCardHover: '#fef2f2',            // Light red when hovering over reviews
        footerBackground: '#1f2937',           // Dark gray background for footer
        footerText: '#d1d5db',                 // Light gray for footer text
        footerHeadings: '#dc2626',             // Red for footer section headings
        footerLinks: '#9ca3af',                // Medium gray for footer links
        footerLinksHover: '#dc2626',           // Red when hovering over footer links
    },
    
    // Product cards optimized for shopping
    productCards: {
        cardBackground: '#ffffff',             // White background for product cards
        cardBackgroundHover: '#fef2f2',        // Light red when hovering over products
        cardBorder: '#fecaca',                 // Light red border around products
        cardBorderHover: '#fca5a5',            // Darker red border on hover
        cardShadow: 'rgba(0, 0, 0, 0.05)',     // Subtle shadow under product cards
        cardShadowHover: 'rgba(0, 0, 0, 0.1)', // Stronger shadow when hovering
        rankBadgeBackground: '#dc2626',        // Red background for rank badges
        rankBadgeText: '#ffffff',              // White text for rank numbers
        rankNumberBackground: '#b91c1c',       // Darker red for rank number circle
        rankNumberText: '#ffffff',             // White text for rank numbers
        productTitle: '#1f2937',               // Dark gray for product names
        productDescription: '#6b7280',         // Medium gray for product descriptions
        productPrice: '#dc2626',               // Red for product prices (draws attention)
        productOriginalPrice: '#9ca3af',       // Light gray for crossed-out prices
        productDiscount: '#dc2626',            // Red for discount percentages
        starActive: '#f59e0b',                 // Orange/yellow for filled rating stars
        starInactive: '#d1d5db',               // Light gray for empty stars
        ratingText: '#6b7280',                 // Gray for rating text
        quickViewBackground: 'rgba(220, 38, 38, 0.9)', // Red overlay for quick view
        quickViewText: '#ffffff',              // White text on quick view
        quickViewHover: 'rgba(220, 38, 38, 1)', // Solid red on quick view hover
        featureIcon: '#dc2626',                // Red for feature icons (free shipping, etc.)
        featureText: '#374151',                // Dark gray for feature text
        featureBackground: '#fef2f2',          // Light red for feature highlights
    }
};

// ===========================================
// HEALTH & FITNESS SITE CONFIGURATION
// ===========================================
const FITNESS_OVERRIDES = {
    
    // Health-focused navigation
    navigation: {
        navBackground: '#064e3b',              // Dark green background for navigation
        navBackgroundScrolled: '#022c22',      // Even darker green when scrolled
        logoText: '#10b981',                   // Bright green for logo (health/nature theme)
        logoTextHover: '#059669',              // Darker green when hovering over logo
        navLinks: '#d1fae5',                   // Very light green for navigation links
        navLinksHover: '#10b981',              // Bright green when hovering over nav links
        navLinksActive: '#059669',             // Dark green for active page link
        mobileMenuBackground: '#064e3b',       // Dark green for mobile menu
        mobileMenuToggle: '#d1fae5',           // Light green for mobile toggle
    },
    
    // Health-themed buttons
    buttons: {
        primaryBackground: '#10b981',          // Green background for "Start Now" buttons
        primaryBackgroundHover: '#059669',     // Darker green when hovering over action buttons
        primaryText: '#ffffff',                // White text on primary buttons
        primaryBorder: '#10b981',              // Green border for primary buttons
        secondaryBackground: '#6b7280',        // Gray background for secondary buttons
        secondaryBackgroundHover: '#4b5563',   // Darker gray when hovering over secondary buttons
        secondaryText: '#ffffff',              // White text on secondary buttons
        secondaryBorder: '#6b7280',            // Gray border for secondary buttons
        outlineBackground: 'transparent',      // Transparent background for outline buttons
        outlineBackgroundHover: '#10b981',     // Green fill when hovering over outline buttons
        outlineText: '#10b981',                // Green text for outline buttons
        outlineTextHover: '#ffffff',           // White text when hovering over outline buttons
        outlineBorder: '#10b981',              // Green border for outline buttons
        animatedGlow: 'rgba(16, 185, 129, 0.3)', // Green glow for animated buttons
        animatedShadow: 'rgba(16, 185, 129, 0.5)', // Green shadow for button animations
        floatingBackground: '#f59e0b',         // Orange background for floating "Free Trial" button
        floatingBackgroundHover: '#d97706',    // Darker orange when hovering over trial button
        floatingText: '#ffffff',               // White text on floating button
        floatingGlow: 'rgba(245, 158, 11, 0.4)', // Orange glow around floating button
    },
    
    // Nature/health-themed sections
    sections: {
        heroBackground: 'linear-gradient(135deg, #064e3b 0%, #065f46 100%)', // Dark green gradient
        heroOverlay: 'rgba(0, 0, 0, 0.3)',     // Dark overlay for text readability
        heroText: '#ffffff',                   // White text for hero title
        heroSubtext: '#d1fae5',                // Light green for hero subtitle
        topPickBackground: '#f0fdf4',          // Very light green for featured section
        topPickBadgeBackground: '#10b981',     // Green background for "Top Rated" badge
        topPickBadgeText: '#ffffff',           // White text on rating badge
        topPickCardBackground: '#ffffff',      // White background for featured product
        topPickCardBorder: '#bbf7d0',          // Light green border around featured card
        top10Background: '#ffffff',            // White background for main listings
        top10HeaderText: '#064e3b',            // Dark green for section headings
        top10SubtitleText: '#6b7280',          // Gray for section descriptions
        reviewsBackground: '#f0fdf4',          // Light green background for reviews
        reviewCardBackground: '#ffffff',       // White background for review cards
        reviewCardBorder: '#bbf7d0',           // Light green border around reviews
        reviewCardHover: '#f0fdf4',            // Light green when hovering over reviews
        footerBackground: '#022c22',           // Very dark green for footer
        footerText: '#a7f3d0',                 // Light green for footer text
        footerHeadings: '#10b981',             // Bright green for footer headings
        footerLinks: '#d1fae5',                // Very light green for footer links
        footerLinksHover: '#10b981',           // Bright green when hovering over footer links
    },
    
    // Health product cards
    productCards: {
        cardBackground: '#ffffff',             // White background for product cards
        cardBackgroundHover: '#f0fdf4',        // Light green when hovering over products
        cardBorder: '#bbf7d0',                 // Light green border around products
        cardBorderHover: '#86efac',            // Darker green border on hover
        cardShadow: 'rgba(0, 0, 0, 0.05)',     // Subtle shadow under product cards
        cardShadowHover: 'rgba(0, 0, 0, 0.1)', // Stronger shadow when hovering
        rankBadgeBackground: '#10b981',        // Green background for rank badges
        rankBadgeText: '#ffffff',              // White text for rank numbers
        rankNumberBackground: '#059669',       // Darker green for rank number circle
        rankNumberText: '#ffffff',             // White text for rank numbers
        productTitle: '#064e3b',               // Dark green for product names
        productDescription: '#6b7280',         // Gray for product descriptions
        productPrice: '#059669',               // Dark green for product prices
        productOriginalPrice: '#9ca3af',       // Light gray for original prices
        productDiscount: '#dc2626',            // Red for discount percentages
        starActive: '#f59e0b',                 // Orange for filled rating stars
        starInactive: '#d1d5db',               // Light gray for empty stars
        ratingText: '#6b7280',                 // Gray for rating text
        quickViewBackground: 'rgba(16, 185, 129, 0.9)', // Green overlay for quick view
        quickViewText: '#ffffff',              // White text on quick view
        quickViewHover: 'rgba(16, 185, 129, 1)', // Solid green on quick view hover
        featureIcon: '#10b981',                // Green for feature icons (organic, natural, etc.)
        featureText: '#374151',                // Dark gray for feature text
        featureBackground: '#f0fdf4',          // Light green for feature highlights
    }
};

// ===========================================
// LUXURY SITE CONFIGURATION
// ===========================================
const LUXURY_OVERRIDES = {
    
    // Elegant navigation styling
    navigation: {
        navBackground: '#000000',              // Pure black background for luxury feel
        navBackgroundScrolled: '#1a1a1a',      // Very dark gray when scrolled
        logoText: '#d4af37',                   // Gold color for luxury brand logo
        logoTextHover: '#b8941f',              // Darker gold when hovering over logo
        navLinks: '#ffffff',                   // White color for navigation links
        navLinksHover: '#d4af37',              // Gold when hovering over nav links
        navLinksActive: '#b8941f',             // Dark gold for active page link
        mobileMenuBackground: '#000000',       // Black background for mobile menu
        mobileMenuToggle: '#d4af37',           // Gold color for mobile toggle
    },
    
    // Premium button styling
    buttons: {
        primaryBackground: '#d4af37',          // Gold background for premium buttons
        primaryBackgroundHover: '#b8941f',     // Darker gold when hovering over buttons
        primaryText: '#000000',                // Black text on gold buttons (high contrast)
        primaryBorder: '#d4af37',              // Gold border for primary buttons
        secondaryBackground: '#1a1a1a',        // Dark gray for secondary buttons
        secondaryBackgroundHover: '#2a2a2a',   // Lighter gray when hovering over secondary
        secondaryText: '#ffffff',              // White text on secondary buttons
        secondaryBorder: '#333333',            // Dark gray border for secondary buttons
        outlineBackground: 'transparent',      // Transparent background for outline buttons
        outlineBackgroundHover: '#d4af37',     // Gold fill when hovering over outline buttons
        outlineText: '#d4af37',                // Gold text for outline buttons
        outlineTextHover: '#000000',           // Black text when hovering over outline buttons
        outlineBorder: '#d4af37',              // Gold border for outline buttons
        animatedGlow: 'rgba(212, 175, 55, 0.4)', // Gold glow for animated buttons
        animatedShadow: 'rgba(212, 175, 55, 0.6)', // Gold shadow for button animations
        floatingBackground: '#8b0000',         // Dark red background for exclusive offers
        floatingBackgroundHover: '#660000',    // Darker red when hovering over exclusive button
        floatingText: '#ffffff',               // White text on floating button
        floatingGlow: 'rgba(139, 0, 0, 0.4)',  // Red glow around floating button
    },
    
    // Luxury section styling
    sections: {
        heroBackground: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)', // Black gradient
        heroOverlay: 'rgba(0, 0, 0, 0.5)',     // Dark overlay for elegance
        heroText: '#ffffff',                   // White text for hero title
        heroSubtext: '#cccccc',                // Light gray for hero subtitle
        topPickBackground: '#0a0a0a',          // Very dark background for featured section
        topPickBadgeBackground: '#d4af37',     // Gold background for "Premium Choice" badge
        topPickBadgeText: '#000000',           // Black text on gold badge
        topPickCardBackground: '#1a1a1a',      // Dark background for featured product
        topPickCardBorder: '#333333',          // Dark border around featured card
        top10Background: '#000000',            // Black background for main listings
        top10HeaderText: '#ffffff',            // White for section headings
        top10SubtitleText: '#cccccc',          // Light gray for section descriptions
        reviewsBackground: '#0a0a0a',          // Very dark background for reviews
        reviewCardBackground: '#1a1a1a',       // Dark background for review cards
        reviewCardBorder: '#333333',           // Dark border around reviews
        reviewCardHover: '#2a2a2a',            // Lighter dark when hovering over reviews
        footerBackground: '#000000',           // Pure black for footer
        footerText: '#cccccc',                 // Light gray for footer text
        footerHeadings: '#d4af37',             // Gold for footer headings
        footerLinks: '#ffffff',                // White for footer links
        footerLinksHover: '#d4af37',           // Gold when hovering over footer links
    },
    
    // Premium product cards
    productCards: {
        cardBackground: '#1a1a1a',             // Dark background for product cards
        cardBackgroundHover: '#2a2a2a',        // Lighter dark when hovering over products
        cardBorder: '#333333',                 // Dark border around products
        cardBorderHover: '#444444',            // Lighter border on hover
        cardShadow: 'rgba(0, 0, 0, 0.8)',      // Strong shadow for luxury feel
        cardShadowHover: 'rgba(212, 175, 55, 0.2)', // Gold shadow when hovering
        rankBadgeBackground: '#d4af37',        // Gold background for rank badges
        rankBadgeText: '#000000',              // Black text for rank numbers
        rankNumberBackground: '#b8941f',       // Darker gold for rank number circle
        rankNumberText: '#000000',             // Black text for rank numbers
        productTitle: '#ffffff',               // White for product names
        productDescription: '#cccccc',         // Light gray for product descriptions
        productPrice: '#d4af37',               // Gold for product prices (luxury pricing)
        productOriginalPrice: '#888888',       // Gray for original prices
        productDiscount: '#8b0000',            // Dark red for exclusive discounts
        starActive: '#d4af37',                 // Gold for filled rating stars
        starInactive: '#444444',               // Dark gray for empty stars
        ratingText: '#cccccc',                 // Light gray for rating text
        quickViewBackground: 'rgba(212, 175, 55, 0.9)', // Gold overlay for quick view
        quickViewText: '#000000',              // Black text on quick view
        quickViewHover: 'rgba(212, 175, 55, 1)', // Solid gold on quick view hover
        featureIcon: '#d4af37',                // Gold for feature icons (premium, exclusive, etc.)
        featureText: '#ffffff',                // White for feature text
        featureBackground: '#1a1a1a',          // Dark background for feature highlights
    }
};

// ===========================================
// COMPLETE COMPONENT REFERENCE
// ===========================================
/*
🎨 EVERY SINGLE COMPONENT THAT CAN BE CUSTOMIZED
This is the COMPLETE reference showing ALL 150+ components available.
Copy any section or individual properties you want to customize.
*/

const COMPLETE_COMPONENT_REFERENCE = {
    
    // 🧭 NAVIGATION COMPONENTS (9 properties)
    navigation: {
        navBackground: '#1e293b',              // Main navigation bar background color
        navBackgroundScrolled: '#0f172a',      // Navigation background when user scrolls down
        logoText: '#3b82f6',                   // Logo/brand text color
        logoTextHover: '#2563eb',              // Logo color when hovering with mouse
        navLinks: '#ffffff',                   // Navigation menu link colors
        navLinksHover: '#3b82f6',              // Navigation links when hovering with mouse
        navLinksActive: '#2563eb',             // Currently active/selected page link color
        mobileMenuBackground: '#1e293b',       // Mobile hamburger menu background
        mobileMenuToggle: '#ffffff',           // Mobile menu toggle button color
    },
    
    // 🔘 BUTTON COMPONENTS (19 properties)
    buttons: {
        primaryBackground: '#3b82f6',          // Main action button background (Buy Now, Get Started)
        primaryBackgroundHover: '#2563eb',     // Primary button background when hovering
        primaryText: '#ffffff',                // Text color on primary buttons
        primaryBorder: '#3b82f6',              // Border color around primary buttons
        secondaryBackground: '#64748b',        // Secondary button background (Learn More, Compare)
        secondaryBackgroundHover: '#475569',   // Secondary button background when hovering
        secondaryText: '#ffffff',              // Text color on secondary buttons
        secondaryBorder: '#64748b',            // Border color around secondary buttons
        outlineBackground: 'transparent',      // Outline-style button background (transparent)
        outlineBackgroundHover: '#3b82f6',     // Outline button background when hovering
        outlineText: '#3b82f6',                // Text color for outline buttons
        outlineTextHover: '#ffffff',           // Outline button text when hovering
        outlineBorder: '#3b82f6',              // Border color for outline buttons
        animatedGlow: 'rgba(59, 130, 246, 0.3)', // Glow effect around animated buttons
        animatedShadow: 'rgba(59, 130, 246, 0.5)', // Shadow effect for button animations
        floatingBackground: '#10b981',         // Floating call-to-action button background
        floatingBackgroundHover: '#059669',    // Floating CTA button when hovering
        floatingText: '#ffffff',               // Text color on floating CTA button
        floatingGlow: 'rgba(16, 185, 129, 0.4)', // Glow effect around floating button
    },
    
    // 🎭 SECTION BACKGROUNDS (21 properties)
    sections: {
        heroBackground: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)', // Hero section background
        heroOverlay: 'rgba(0, 0, 0, 0.3)',     // Semi-transparent overlay on hero background
        heroText: '#ffffff',                   // Hero section title text color
        heroSubtext: '#e2e8f0',                // Hero section subtitle/description text color
        topPickBackground: '#f8fafc',          // "Our #1 Pick" featured section background
        topPickBadgeBackground: '#3b82f6',     // "Editor's Choice" badge background color
        topPickBadgeText: '#ffffff',           // Text color on Editor's Choice badge
        topPickCardBackground: '#ffffff',      // Background of the top pick product card
        topPickCardBorder: '#e2e8f0',          // Border color around top pick card
        top10Background: '#ffffff',            // Main "Top 10" product listing section background
        top10HeaderText: '#1e293b',            // "Top 10" section heading text color
        top10SubtitleText: '#64748b',          // Top 10 section subtitle/description text color
        reviewsBackground: '#f8fafc',          // Product reviews section background
        reviewCardBackground: '#ffffff',       // Individual review card background color
        reviewCardBorder: '#e2e8f0',           // Border color around review cards
        reviewCardHover: '#f1f5f9',            // Review card background when hovering
        footerBackground: '#1e293b',           // Website footer background color
        footerText: '#cbd5e1',                 // General footer text color
        footerHeadings: '#3b82f6',             // Footer section headings color
        footerLinks: '#ffffff',                // Footer link colors
        footerLinksHover: '#3b82f6',           // Footer links when hovering
    },
    
    // 🃏 PRODUCT CARD COMPONENTS (25 properties)
    productCards: {
        cardBackground: '#ffffff',             // Individual product card background
        cardBackgroundHover: '#f8fafc',        // Product card background when hovering
        cardBorder: '#e2e8f0',                 // Border color around product cards
        cardBorderHover: '#cbd5e1',            // Product card border when hovering
        cardShadow: 'rgba(0, 0, 0, 0.1)',      // Shadow effect under product cards
        cardShadowHover: 'rgba(0, 0, 0, 0.15)', // Product card shadow when hovering
        rankBadgeBackground: '#3b82f6',        // Rank badge background (#1, #2, #3, etc.)
        rankBadgeText: '#ffffff',              // Text color for rank badges
        rankNumberBackground: '#2563eb',       // Circular rank number background
        rankNumberText: '#ffffff',             // Rank number text color
        productTitle: '#1e293b',               // Product name/title text color
        productDescription: '#64748b',         // Product description text color
        productPrice: '#059669',               // Product price text color
        productOriginalPrice: '#9ca3af',       // Crossed-out original price color
        productDiscount: '#dc2626',            // Discount percentage text color
        starActive: '#f59e0b',                 // Filled/active rating stars color
        starInactive: '#d1d5db',               // Empty/inactive rating stars color
        ratingText: '#64748b',                 // Rating text color (e.g., "4.5 stars")
        quickViewBackground: 'rgba(59, 130, 246, 0.9)', // Quick view overlay background
        quickViewText: '#ffffff',              // Quick view button text color
        quickViewHover: 'rgba(59, 130, 246, 1)', // Quick view background when hovering
        featureIcon: '#10b981',                // Feature icons color (checkmarks, etc.)
        featureText: '#374151',                // Feature description text color
        featureBackground: '#f0fdf4',          // Feature highlight box background
    },
    
    // 📝 FORM COMPONENTS (13 properties)
    forms: {
        inputBackground: '#ffffff',            // Text input field background color
        inputBorder: '#d1d5db',                // Border color around input fields
        inputBorderFocus: '#3b82f6',           // Input border color when focused/active
        inputText: '#1f2937',                  // Text color inside input fields
        inputPlaceholder: '#9ca3af',           // Placeholder text color in input fields
        labelText: '#374151',                  // Form field label text color
        labelRequired: '#dc2626',              // Required field indicator (*) color
        selectBackground: '#ffffff',           // Dropdown select menu background
        selectBorder: '#d1d5db',               // Dropdown menu border color
        selectText: '#1f2937',                 // Text color in dropdown options
        selectArrow: '#6b7280',                // Dropdown arrow icon color
        checkboxBorder: '#d1d5db',             // Checkbox border color
        checkboxChecked: '#3b82f6',            // Checkbox color when checked/selected
        checkboxText: '#374151',               // Checkbox label text color
    },
    
    // 📊 COMPARISON TABLE COMPONENTS (13 properties)
    comparison: {
        tableBackground: '#ffffff',            // Comparison table background color
        tableBorder: '#e5e7eb',                // Border color for table cells and edges
        tableHeaderBackground: '#f9fafb',      // Table header row background color
        tableHeaderText: '#1f2937',            // Table column header text color
        tableCellBackground: '#ffffff',        // Regular table cell background color
        tableCellAlternate: '#f9fafb',         // Alternating table row background color
        tableCellText: '#374151',              // Text color in table cells
        tableCellBorder: '#e5e7eb',            // Border color between table cells
        highlightBackground: '#fef3c7',        // Highlighted table cell background
        highlightBorder: '#f59e0b',            // Border color for highlighted cells
        highlightText: '#92400e',              // Text color for highlighted content
        successIcon: '#10b981',                // Success/checkmark icon color
        failureIcon: '#ef4444',                // Failure/X icon color
        neutralIcon: '#6b7280',                // Neutral/dash icon color
    },
    
    // 📰 BLOG COMPONENTS (11 properties)
    blog: {
        blogBackground: '#ffffff',             // Blog section background color
        blogCardBackground: '#ffffff',         // Individual blog post card background
        blogCardBorder: '#e5e7eb',             // Blog post card border color
        blogCardHover: '#f9fafb',              // Blog card background when hovering
        blogTitle: '#1f2937',                  // Blog post title text color
        blogExcerpt: '#6b7280',                // Blog post excerpt/preview text color
        blogMeta: '#9ca3af',                   // Blog post metadata (date, author) color
        blogCategory: '#3b82f6',               // Blog category badge color
        blogDate: '#6b7280',                   // Blog post date text color
        blogTags: '#6b7280',                   // Blog post tags text color
        blogCTA: '#3b82f6',                    // Blog call-to-action element color
    },
    
    // ⚖️ LEGAL PAGE COMPONENTS (9 properties)
    legal: {
        legalBackground: '#ffffff',            // Legal page background color
        legalContent: '#374151',               // Legal content text color
        legalHeadings: '#1f2937',              // Legal section heading color
        legalLinks: '#3b82f6',                 // Legal page link color
        legalLinksHover: '#2563eb',            // Legal page links when hovering
        lastUpdated: '#6b7280',                // "Last updated" date text color
        alertContent: '#92400e',               // Alert/warning content text color
        stepContent: '#374151',                // Step-by-step instruction text color
        contactInfo: '#1f2937',                // Contact information text color
    },
    
    // 🚨 ALERT COMPONENTS (16 properties)
    alerts: {
        successBackground: '#d1fae5',          // Success message background color
        successBorder: '#10b981',              // Success message border color
        successText: '#065f46',                // Success message text color
        successIcon: '#10b981',                // Success icon color (checkmarks)
        warningBackground: '#fef3c7',          // Warning message background color
        warningBorder: '#f59e0b',              // Warning message border color
        warningText: '#92400e',                // Warning message text color
        warningIcon: '#f59e0b',                // Warning icon color
        errorBackground: '#fee2e2',            // Error message background color
        errorBorder: '#ef4444',                // Error message border color
        errorText: '#991b1b',                  // Error message text color
        errorIcon: '#ef4444',                  // Error icon color
        infoBackground: '#dbeafe',             // Info message background color
        infoBorder: '#3b82f6',                 // Info message border color
        infoText: '#1e40af',                   // Info message text color
        infoIcon: '#3b82f6',                   // Info icon color
    },
    
    // 🎨 SPECIALTY COMPONENTS (20 properties)
    specialty: {
        spinnerPrimary: '#3b82f6',             // Loading spinner primary color
        spinnerSecondary: '#e5e7eb',           // Loading spinner background track color
        progressBackground: '#e5e7eb',         // Progress bar background color
        progressFill: '#3b82f6',               // Progress bar fill color
        progressText: '#1f2937',               // Progress percentage text color
        badgePrimary: '#3b82f6',               // Primary badge background color
        badgeSecondary: '#6b7280',             // Secondary badge background color
        badgeSuccess: '#10b981',               // Success badge background color
        badgeWarning: '#f59e0b',               // Warning badge background color
        badgeDanger: '#ef4444',                // Danger/error badge background color
        tooltipBackground: '#1f2937',          // Tooltip popup background color
        tooltipText: '#ffffff',                // Tooltip text color
        tooltipBorder: '#374151',              // Tooltip border color
        tooltipArrow: '#1f2937',               // Tooltip arrow pointer color
        modalBackground: '#ffffff',            // Modal dialog background color
        modalOverlay: 'rgba(0, 0, 0, 0.5)',    // Modal overlay background (behind modal)
        modalBorder: '#e5e7eb',                // Modal window border color
        modalShadow: 'rgba(0, 0, 0, 0.25)',    // Modal shadow effect
        loadingOverlay: 'rgba(255, 255, 255, 0.8)', // Loading overlay background
        loadingSpinner: '#3b82f6',             // Loading spinner color
    },
    
    // 🏆 BADGE COMPONENTS (16 properties)
    badges: {
        editorsChoiceBackground: 'linear-gradient(135deg, #fbbf24, #f59e0b, #d97706)', // Editor's Choice badge background
        editorsChoiceText: '#ffffff',          // Editor's Choice badge text color
        editorsChoiceIcon: '#ffffff',          // Editor's Choice badge icon color
        editorsChoiceShadow: 'rgba(251, 191, 36, 0.4)', // Editor's Choice badge shadow
        bestValueBackground: 'linear-gradient(135deg, #10b981, #059669)', // Best Value badge background
        bestValueText: '#ffffff',              // Best Value badge text color
        bestValueIcon: '#ffffff',              // Best Value badge icon color
        bestValueShadow: 'rgba(16, 185, 129, 0.4)', // Best Value badge shadow
        newReleaseBackground: 'linear-gradient(135deg, #8b5cf6, #7c3aed)', // New Release badge background
        newReleaseText: '#ffffff',             // New Release badge text color
        newReleaseIcon: '#ffffff',             // New Release badge icon color
        newReleaseShadow: 'rgba(139, 92, 246, 0.4)', // New Release badge shadow
        popularChoiceBackground: 'linear-gradient(135deg, #ef4444, #dc2626)', // Popular Choice badge background
        popularChoiceText: '#ffffff',          // Popular Choice badge text color
        popularChoiceIcon: '#ffffff',          // Popular Choice badge icon color
        popularChoiceShadow: 'rgba(239, 68, 68, 0.4)', // Popular Choice badge shadow
    }
};

// ===========================================
// USAGE INSTRUCTIONS
// ===========================================
/*
To use any of these configurations:

1. Copy the entire configuration object (e.g., GAMING_SITE_OVERRIDES)
2. Open utils/component-colours.js
3. Replace the COMPONENT_OVERRIDES object with your chosen configuration
4. Set ENABLE_COMPONENT_OVERRIDES = true at the top of the file
5. Save and refresh your website

FOR BEGINNERS - COPY & PASTE EXAMPLES:
- Want gaming theme? Copy GAMING_SITE_OVERRIDES
- Want tech review theme? Copy TECH_REVIEW_OVERRIDES  
- Want ecommerce theme? Copy ECOMMERCE_OVERRIDES
- Want fitness theme? Copy FITNESS_OVERRIDES
- Want luxury theme? Copy LUXURY_OVERRIDES
- Want to see ALL options? Copy COMPLETE_COMPONENT_REFERENCE

ADVANCED USERS - MIX & MATCH:
You can copy individual sections from COMPLETE_COMPONENT_REFERENCE:
- Only want custom buttons? Copy just the "buttons" section
- Only want custom navigation? Copy just the "navigation" section
- Want custom product cards? Copy just the "productCards" section

TOTAL CUSTOMIZABLE COMPONENTS: 152 properties across 10 categories!

Example:
// In component-colours.js
const COMPONENT_OVERRIDES = GAMING_SITE_OVERRIDES;

You can also mix and match sections:
const COMPONENT_OVERRIDES = {
    navigation: GAMING_SITE_OVERRIDES.navigation,
    buttons: TECH_REVIEW_OVERRIDES.buttons,
    sections: LUXURY_OVERRIDES.sections,
    // ... etc
};
*/
