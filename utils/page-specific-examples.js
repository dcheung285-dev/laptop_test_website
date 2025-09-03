/*
===========================================
PAGE-SPECIFIC COLOR EXAMPLES
===========================================
🎨 READY-TO-USE PAGE-SPECIFIC CONFIGURATIONS

This file contains pre-made page-specific color configurations.
Copy any configuration to your component-colours.js file to use it.

USAGE:
1. Choose a page configuration below
2. Copy the page object (e.g., '/index.html': { ... })
3. Paste it into the PAGE_SPECIFIC_OVERRIDES object in component-colours.js
4. Set the corresponding ENABLE flag to true in component-colours.js
5. Save and refresh your website
*/

// ===========================================
// HOMEPAGE SPECIFIC EXAMPLES
// ===========================================
const HOMEPAGE_EXAMPLES = {
    '/index.html': {
        
        // Gold gradient Editor's Choice badge for homepage
        badges: {
            editorsChoiceBackground: 'linear-gradient(135deg, #fbbf24, #f59e0b, #d97706)', // Gold gradient background for Editor's Choice badge
            editorsChoiceText: '#ffffff',           // White text color on the Editor's Choice badge
            editorsChoiceIcon: '#ffffff',           // White icon color inside the Editor's Choice badge
            editorsChoiceShadow: 'rgba(251, 191, 36, 0.4)', // Subtle gold shadow around the Editor's Choice badge
        },
        
        // Custom hero section styling for homepage
        hero: {
            titleColor: '#1f2937',                  // Dark gray color for the main hero title text
            subtitleColor: '#6b7280',               // Medium gray color for the hero subtitle text
            backgroundOverlay: 'rgba(0, 0, 0, 0.1)', // Semi-transparent dark overlay on hero background image
        },
        
        // Featured product card styling for homepage
        productCards: {
            cardBackground: '#ffffff',              // White background for featured product cards
            cardBackgroundHover: '#f9fafb',         // Very light gray background when hovering over featured cards
            cardBorder: '#e5e7eb',                  // Light gray border around featured product cards
            cardBorderHover: '#d1d5db',             // Darker gray border when hovering over featured cards
            cardShadow: 'rgba(0, 0, 0, 0.05)',      // Subtle shadow under featured product cards
            cardShadowHover: 'rgba(0, 0, 0, 0.15)', // Stronger shadow when hovering over featured cards
            productTitle: '#1f2937',               // Dark gray color for featured product titles
            productDescription: '#6b7280',         // Medium gray color for featured product descriptions
            productPrice: '#059669',               // Green color for featured product prices
            starActive: '#fbbf24',                 // Gold color for filled rating stars on featured products
            featureIcon: '#10b981',                // Green color for feature icons on featured products
            featureText: '#374151',                // Dark gray color for feature text on featured products
        }
    }
};

// ===========================================
// BLOG PAGE SPECIFIC EXAMPLES
// ===========================================
const BLOG_PAGE_EXAMPLES = {
    '/blog.html': {
        
        // Purple gradient blog title styling
        blogTitle: {
            nicheColor: 'linear-gradient(135deg, #8b5cf6, #7c3aed)', // Purple gradient for the blog niche highlight text
            nicheTextShadow: '2px 2px 4px rgba(139, 92, 246, 0.3)', // Purple shadow effect on the niche text
            mainTitleColor: '#1f2937',              // Dark gray color for the main blog title
            subtitleColor: '#6b7280',               // Medium gray color for the blog subtitle
        },
        
        // Blog-specific card styling
        blogCards: {
            cardBackground: '#fefefe',              // Very light background for blog post cards
            cardBackgroundHover: '#f8fafc',         // Slightly blue-tinted background when hovering over blog cards
            cardBorder: '#e5e7eb',                  // Light gray border around blog post cards
            cardBorderHover: '#d1d5db',             // Darker gray border when hovering over blog cards
            cardShadow: 'rgba(0, 0, 0, 0.05)',      // Subtle shadow under blog post cards
            cardShadowHover: 'rgba(0, 0, 0, 0.1)',  // Stronger shadow when hovering over blog cards
            categoryBadgeBackground: '#8b5cf6',     // Purple background for blog category badges
            categoryBadgeText: '#ffffff',           // White text color on category badges
            postTitle: '#1f2937',                   // Dark gray color for blog post titles
            postExcerpt: '#6b7280',                 // Medium gray color for blog post excerpts
            postDate: '#9ca3af',                    // Light gray color for blog post dates
            readMoreLink: '#8b5cf6',                // Purple color for "Read More" links
            readMoreLinkHover: '#7c3aed',           // Darker purple when hovering over "Read More" links
        },
        
        // Blog navigation styling
        navigation: {
            navBackground: '#ffffff',               // White background for blog page navigation
            navBackgroundScrolled: '#f8fafc',       // Very light blue background when scrolled on blog page
            logoText: '#8b5cf6',                    // Purple color for logo on blog page
            logoTextHover: '#7c3aed',               // Darker purple when hovering over logo on blog page
            navLinks: '#374151',                    // Dark gray for navigation links on blog page
            navLinksHover: '#8b5cf6',               // Purple when hovering over nav links on blog page
            navLinksActive: '#7c3aed',              // Dark purple for active nav link on blog page
        }
    }
};

// ===========================================
// PRIVACY PAGE SPECIFIC EXAMPLES
// ===========================================
const PRIVACY_PAGE_EXAMPLES = {
    '/privacy.html': {
        
        // Legal document styling for privacy page
        legal: {
            headingColor: '#374151',                // Dark gray color for privacy policy headings (h1, h2, h3)
            textColor: '#6b7280',                   // Medium gray color for privacy policy body text
            linkColor: '#3b82f6',                   // Blue color for links within privacy policy
            linkHoverColor: '#2563eb',              // Darker blue when hovering over privacy policy links
            highlightBackground: '#eff6ff',         // Light blue background for highlighted sections
            highlightBorder: '#3b82f6',             // Blue border for highlighted sections
            lastUpdated: '#9ca3af',                 // Light gray color for "Last Updated" date
            sectionDivider: '#e5e7eb',              // Light gray color for section dividers
        },
        
        // Privacy page navigation
        navigation: {
            navBackground: '#f8fafc',               // Very light background for privacy page navigation
            navBackgroundScrolled: '#f1f5f9',       // Slightly darker light background when scrolled
            logoText: '#1f2937',                    // Dark gray for logo on privacy page
            logoTextHover: '#374151',               // Darker gray when hovering over logo
            navLinks: '#6b7280',                    // Medium gray for navigation links on privacy page
            navLinksHover: '#1f2937',               // Dark gray when hovering over nav links
            navLinksActive: '#374151',              // Dark gray for active nav link on privacy page
        }
    }
};

// ===========================================
// DISCLAIMER PAGE SPECIFIC EXAMPLES
// ===========================================
const DISCLAIMER_PAGE_EXAMPLES = {
    '/disclaimer.html': {
        
        // Legal document styling for disclaimer page
        legal: {
            headingColor: '#374151',                // Dark gray color for disclaimer headings (h1, h2, h3)
            textColor: '#6b7280',                   // Medium gray color for disclaimer body text
            linkColor: '#3b82f6',                   // Blue color for links within disclaimer
            linkHoverColor: '#2563eb',              // Darker blue when hovering over disclaimer links
            warningBackground: '#fef3c7',           // Light yellow background for warning sections
            warningBorder: '#f59e0b',               // Orange border for warning sections
            warningText: '#92400e',                 // Dark orange text for warning content
            importantBackground: '#fee2e2',         // Light red background for important notices
            importantBorder: '#ef4444',             // Red border for important notices
            importantText: '#991b1b',               // Dark red text for important content
            lastUpdated: '#9ca3af',                 // Light gray color for "Last Updated" date
            sectionDivider: '#e5e7eb',              // Light gray color for section dividers
        },
        
        // Disclaimer page navigation
        navigation: {
            navBackground: '#f8fafc',               // Very light background for disclaimer page navigation
            navBackgroundScrolled: '#f1f5f9',       // Slightly darker light background when scrolled
            logoText: '#1f2937',                    // Dark gray for logo on disclaimer page
            logoTextHover: '#374151',               // Darker gray when hovering over logo
            navLinks: '#6b7280',                    // Medium gray for navigation links on disclaimer page
            navLinksHover: '#1f2937',               // Dark gray when hovering over nav links
            navLinksActive: '#374151',              // Dark gray for active nav link on disclaimer page
        }
    }
};

// ===========================================
// COMPARISON PAGE SPECIFIC EXAMPLES
// ===========================================
const COMPARISON_PAGE_EXAMPLES = {
    '/comparison.html': {
        
        // Enhanced comparison table styling
        comparison: {
            tableBackground: '#ffffff',             // White background for comparison table
            tableBorder: '#e5e7eb',                 // Light gray border for table cells
            tableHeaderBackground: '#f9fafb',       // Very light gray background for table headers
            tableHeaderText: '#1f2937',             // Dark gray text for table column headers
            tableCellBackground: '#ffffff',         // White background for regular table cells
            tableCellAlternate: '#f9fafb',          // Very light gray for alternating table rows
            tableCellText: '#374151',               // Dark gray text in table cells
            tableCellBorder: '#e5e7eb',             // Light gray border between table cells
            winnerBackground: '#f0fdf4',            // Light green background for winning product cells
            winnerBorder: '#16a34a',                // Green border for winning product cells
            winnerText: '#15803d',                  // Dark green text for winning product content
            winnerBadge: '#10b981',                 // Green background for "Winner" badge
            winnerBadgeText: '#ffffff',             // White text on "Winner" badge
            highlightBackground: '#fef3c7',         // Light yellow background for highlighted features
            highlightBorder: '#f59e0b',             // Orange border for highlighted features
            highlightText: '#92400e',               // Dark orange text for highlighted content
            prosBackground: '#f0fdf4',              // Light green background for pros sections
            prosIcon: '#10b981',                    // Green color for checkmark icons in pros
            prosText: '#15803d',                    // Dark green text for pros content
            consBackground: '#fef2f2',              // Light red background for cons sections
            consIcon: '#ef4444',                    // Red color for X icons in cons
            consText: '#991b1b',                    // Dark red text for cons content
        },
        
        // Comparison page hero section
        hero: {
            titleColor: '#1f2937',                  // Dark gray for comparison page title
            subtitleColor: '#6b7280',               // Medium gray for comparison page subtitle
            backgroundOverlay: 'rgba(0, 0, 0, 0.05)', // Very light overlay on comparison page hero
        }
    }
};

// ===========================================
// ABOUT PAGE SPECIFIC EXAMPLES
// ===========================================
const ABOUT_PAGE_EXAMPLES = {
    '/about.html': {
        
        // About page team section styling
        team: {
            cardBackground: '#ffffff',              // White background for team member cards
            cardBackgroundHover: '#f9fafb',         // Light gray when hovering over team cards
            cardBorder: '#e5e7eb',                  // Light gray border around team cards
            cardShadow: 'rgba(0, 0, 0, 0.05)',      // Subtle shadow under team cards
            memberName: '#1f2937',                  // Dark gray for team member names
            memberRole: '#6b7280',                  // Medium gray for team member roles
            memberBio: '#9ca3af',                   // Light gray for team member bios
            socialIcon: '#3b82f6',                  // Blue color for social media icons
            socialIconHover: '#2563eb',             // Darker blue when hovering over social icons
        },
        
        // About page mission section
        mission: {
            sectionBackground: '#f8fafc',           // Very light background for mission section
            titleColor: '#1f2937',                  // Dark gray for mission section title
            textColor: '#374151',                   // Dark gray for mission text content
            highlightColor: '#3b82f6',              // Blue color for highlighted mission points
            iconColor: '#10b981',                   // Green color for mission icons
        },
        
        // About page navigation
        navigation: {
            navBackground: '#ffffff',               // White background for about page navigation
            navBackgroundScrolled: '#f8fafc',       // Very light background when scrolled
            logoText: '#1f2937',                    // Dark gray for logo on about page
            logoTextHover: '#374151',               // Darker gray when hovering over logo
            navLinks: '#6b7280',                    // Medium gray for navigation links
            navLinksHover: '#1f2937',               // Dark gray when hovering over nav links
            navLinksActive: '#374151',              // Dark gray for active nav link
        }
    }
};

// ===========================================
// CONTACT PAGE SPECIFIC EXAMPLES
// ===========================================
const CONTACT_PAGE_EXAMPLES = {
    '/contact.html': {
        
        // Contact form styling
        forms: {
            inputBackground: '#ffffff',             // White background for contact form inputs
            inputBorder: '#d1d5db',                 // Light gray border for form inputs
            inputBorderFocus: '#3b82f6',            // Blue border when input is focused
            inputText: '#1f2937',                   // Dark gray text inside form inputs
            inputPlaceholder: '#9ca3af',            // Light gray for placeholder text
            labelText: '#374151',                   // Dark gray for form field labels
            labelRequired: '#ef4444',               // Red color for required field indicators
            submitButton: '#3b82f6',                // Blue background for submit button
            submitButtonHover: '#2563eb',           // Darker blue when hovering over submit button
            submitButtonText: '#ffffff',            // White text on submit button
            errorText: '#ef4444',                   // Red color for form error messages
            successText: '#10b981',                 // Green color for form success messages
        },
        
        // Contact info section
        contactInfo: {
            sectionBackground: '#f9fafb',           // Very light background for contact info section
            iconColor: '#3b82f6',                   // Blue color for contact icons (phone, email, etc.)
            titleColor: '#1f2937',                  // Dark gray for contact info titles
            textColor: '#6b7280',                   // Medium gray for contact info text
            linkColor: '#3b82f6',                   // Blue color for contact links
            linkHoverColor: '#2563eb',              // Darker blue when hovering over contact links
        },
        
        // Contact page navigation
        navigation: {
            navBackground: '#ffffff',               // White background for contact page navigation
            navBackgroundScrolled: '#f8fafc',       // Very light background when scrolled
            logoText: '#1f2937',                    // Dark gray for logo on contact page
            logoTextHover: '#374151',               // Darker gray when hovering over logo
            navLinks: '#6b7280',                    // Medium gray for navigation links
            navLinksHover: '#1f2937',               // Dark gray when hovering over nav links
            navLinksActive: '#374151',              // Dark gray for active nav link
        }
    }
};

// ===========================================
// USAGE INSTRUCTIONS
// ===========================================
/*
To use any of these page-specific configurations:

1. Copy the page object you want (e.g., '/blog.html': { ... })
2. Open utils/component-colours.js
3. Paste it into the PAGE_SPECIFIC_OVERRIDES object
4. Set the corresponding ENABLE flag to true
5. Save and refresh your website

Example:
// In component-colours.js
const PAGE_SPECIFIC_OVERRIDES = {
    '/blog.html': {
        blogTitle: {
            nicheColor: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
            // ... other properties
        }
    }
};

// And set the enable flag
const ENABLE_BLOG_PAGE_OVERRIDES = true;

You can also mix and match sections from different examples:
const PAGE_SPECIFIC_OVERRIDES = {
    '/index.html': {
        badges: HOMEPAGE_EXAMPLES['/index.html'].badges,
        hero: HOMEPAGE_EXAMPLES['/index.html'].hero,
    },
    '/blog.html': {
        blogTitle: BLOG_PAGE_EXAMPLES['/blog.html'].blogTitle,
    }
};
*/ 