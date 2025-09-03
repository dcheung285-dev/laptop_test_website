/*
===========================================
CENTRALIZED THEME CONFIGURATION
===========================================
🎨 CHANGE YOUR WEBSITE THEMES HERE - ONE PLACE FOR ALL PAGES

INSTRUCTIONS:
1. Change GLOBAL_THEME to set the theme for your entire website
2. Set individual page themes in PAGE_THEMES if you want specific pages to have different colors
3. All colors (buttons, banners, backgrounds, text, etc.) will change automatically

AVAILABLE THEMES:

LIGHT THEMES:
- 'default' (professional blue)
- 'purple' (creative purple)
- 'green' (nature green)
- 'orange' (energetic orange)
- 'red' (bold red)
- 'blue-dark' (corporate blue)
- 'minimal' (clean black/white)

DARK THEMES:
- 'dark' (professional dark mode)
- 'purple-dark' (creative purple dark)
- 'green-dark' (nature green dark)
- 'orange-dark' (energetic orange dark)
- 'red-dark' (bold red dark)
- 'blue-dark-dark' (corporate blue dark)
- 'minimal-dark' (clean dark mode)
*/

// ===========================================
// GLOBAL WEBSITE THEME
// ===========================================
// This theme applies to ALL pages unless overridden below
const GLOBAL_THEME = 'purple'; // ← CHANGE THIS TO SET YOUR ENTIRE WEBSITE THEME

// ===========================================
// INDIVIDUAL PAGE THEMES (OPTIONAL)
// ===========================================
// Set specific themes for individual pages
// These override the global theme for specific pages only
const PAGE_THEMES = {
    // Examples (uncomment and modify as needed):
    
    // Homepage specific theme
    // '/index.html': 'orange',
    // '/': 'orange',
    
    // Blog page theme
    // '/blog.html': 'green',
    
    // About page theme  
    // '/about.html': 'purple',
    
    // Privacy/Legal pages theme
    // '/privacy.html': 'minimal',
    // '/terms.html': 'minimal',
    // '/disclaimer.html': 'minimal',
    
    // Product/Review pages theme
    // '/reviews.html': 'blue-dark',
    
    // Contact page theme
    // '/contact.html': 'dark',
};

// ===========================================
// AUTOMATIC THEME APPLICATION
// ===========================================
// This code automatically applies the themes when pages load
// DO NOT MODIFY UNLESS YOU KNOW WHAT YOU'RE DOING

document.addEventListener('DOMContentLoaded', function() {
    // Wait for ThemeManager to be available
    function initializeThemes() {
        if (typeof ThemeManager === 'undefined') {
            // If ThemeManager is not loaded yet, wait a bit and try again
            setTimeout(initializeThemes, 100);
            return;
        }
        
        // Check if user has saved theme preferences that should override config
        const savedGlobalTheme = localStorage.getItem('globalTheme');
        const savedPageTheme = localStorage.getItem('pageTheme');
        const savedPageThemeUrl = localStorage.getItem('pageThemeUrl');
        
        // Get current page path
        const currentPath = window.location.pathname;
        
        // Priority order:
        // 1. Saved page theme for this specific page
        // 2. Saved global theme
        // 3. Config page theme for this page
        // 4. Config global theme
        
        if (savedPageTheme && savedPageThemeUrl === currentPath) {
            // User has a saved page theme for this page
            console.log(`💾 Using saved page theme: ${savedPageTheme} for ${currentPath}`);
            ThemeManager.setPageTheme(savedPageTheme, false);
        } else if (savedGlobalTheme) {
            // User has a saved global theme
            console.log(`💾 Using saved global theme: ${savedGlobalTheme}`);
            ThemeManager.setGlobalTheme(savedGlobalTheme, false);
        } else {
            // No saved themes, use config
            const pageTheme = PAGE_THEMES[currentPath];
            
            if (pageTheme) {
                // Apply page-specific theme from config
                console.log(`📋 Applying config page theme: ${pageTheme} for ${currentPath}`);
                ThemeManager.setPageTheme(pageTheme, false);
            } else {
                // Apply global theme from config
                console.log(`📋 Applying config global theme: ${GLOBAL_THEME}`);
                ThemeManager.setGlobalTheme(GLOBAL_THEME, false);
            }
        }
    }
    
    // Start the initialization process
    initializeThemes();
});

// ===========================================
// THEME PREVIEW FUNCTIONS (FOR TESTING)
// ===========================================
// Use these functions in browser console to preview themes
// These are temporary and won't be saved

window.previewTheme = function(themeName) {
    if (typeof ThemeManager === 'undefined') {
        console.error('❌ ThemeManager not loaded yet. Please wait a moment and try again.');
        return;
    }
    console.log(`👀 Previewing theme: ${themeName}`);
    ThemeManager.setGlobalTheme(themeName, false);
    console.log('💡 This is just a preview. To make it permanent, update GLOBAL_THEME in Configurations/theme-config.js');
};

window.previewPageTheme = function(themeName) {
    if (typeof ThemeManager === 'undefined') {
        console.error('❌ ThemeManager not loaded yet. Please wait a moment and try again.');
        return;
    }
    console.log(`👀 Previewing page theme: ${themeName}`);
    ThemeManager.setPageTheme(themeName, false);
    console.log('💡 This is just a preview. To make it permanent, update PAGE_THEMES in utils/theme-config.js');
};

// ===========================================
// QUICK PREVIEW COMMANDS
// ===========================================
// Use these in browser console for quick testing:

// Light Themes
window.previewDefault = () => previewTheme('default');
window.previewPurple = () => previewTheme('purple');
window.previewGreen = () => previewTheme('green');
window.previewOrange = () => previewTheme('orange');
window.previewRed = () => previewTheme('red');
window.previewBlueDark = () => previewTheme('blue-dark');
window.previewMinimal = () => previewTheme('minimal');

// Dark Themes
window.previewDark = () => previewTheme('dark');
window.previewPurpleDark = () => previewTheme('purple-dark');
window.previewGreenDark = () => previewTheme('green-dark');
window.previewOrangeDark = () => previewTheme('orange-dark');
window.previewRedDark = () => previewTheme('red-dark');
window.previewBlueDarkDark = () => previewTheme('blue-dark-dark');
window.previewMinimalDark = () => previewTheme('minimal-dark');

console.log('🎨 Theme Configuration Loaded!');
console.log(`🌐 Global Theme: ${GLOBAL_THEME}`);
console.log('📱 Page Themes:', PAGE_THEMES);
console.log('💡 Light themes: previewDefault(), previewPurple(), previewGreen(), etc.');
console.log('🌙 Dark themes: previewDark(), previewPurpleDark(), previewGreenDark(), etc.');

/*
===========================================
QUICK SETUP EXAMPLES
===========================================

🌞 LIGHT THEMES:
🔵 PROFESSIONAL BUSINESS SITE:
const GLOBAL_THEME = 'blue-dark';

🎨 CREATIVE/DESIGN SITE:
const GLOBAL_THEME = 'purple';

🌿 ECO/NATURE SITE:
const GLOBAL_THEME = 'green';

🔥 ENERGETIC/MARKETING SITE:
const GLOBAL_THEME = 'orange';

💪 BOLD/FITNESS SITE:
const GLOBAL_THEME = 'red';

⚪ MINIMAL/CLEAN SITE:
const GLOBAL_THEME = 'minimal';

🌙 DARK THEMES:
🌙 TECH/DEVELOPER SITE:
const GLOBAL_THEME = 'dark';

🎨 CREATIVE DARK SITE:
const GLOBAL_THEME = 'purple-dark';

🌿 ECO DARK SITE:
const GLOBAL_THEME = 'green-dark';

🔥 ENERGETIC DARK SITE:
const GLOBAL_THEME = 'orange-dark';

💪 BOLD DARK SITE:
const GLOBAL_THEME = 'red-dark';

🔵 PROFESSIONAL DARK SITE:
const GLOBAL_THEME = 'blue-dark-dark';

⚫ MINIMAL DARK SITE:
const GLOBAL_THEME = 'minimal-dark';

🏢 MIXED LIGHT/DARK SITE:
const GLOBAL_THEME = 'default';
const PAGE_THEMES = {
    '/': 'orange',                  // Homepage: energetic light
    '/blog.html': 'green-dark',     // Blog: nature dark
    '/products.html': 'blue-dark',  // Products: professional light
    '/about.html': 'purple-dark',   // About: creative dark
    '/contact.html': 'minimal'      // Contact: clean light
};
*/ 