/*
===========================================
THEME SWITCHING UTILITY
===========================================
This utility provides functions to change color themes globally or per page.
All colors (buttons, banners, backgrounds, etc.) change automatically.

USAGE EXAMPLES:
1. Change global theme: ThemeManager.setGlobalTheme('dark')
2. Change page theme: ThemeManager.setPageTheme('purple')
3. Reset to default: ThemeManager.resetTheme()
4. Get current theme: ThemeManager.getCurrentTheme()

AVAILABLE THEMES:
- default (blue)
- dark (dark mode)
- purple (creative)
- green (nature)
- orange (energetic)
- red (bold)
- blue-dark (corporate)
- minimal (clean)
*/

class ThemeManager {
    
    /**
     * Available theme configurations
     * Add new themes here by copying existing structure
     */
    static themes = {
        // Light Themes
        'default': {
            name: 'Default Blue',
            description: 'Professional blue theme',
            category: 'light'
        },
        'purple': {
            name: 'Purple Creative',
            description: 'Creative and modern purple theme',
            category: 'light'
        },
        'green': {
            name: 'Green Nature',
            description: 'Eco-friendly green theme',
            category: 'light'
        },
        'orange': {
            name: 'Orange Energy',
            description: 'Energetic warm orange theme',
            category: 'light'
        },
        'red': {
            name: 'Red Bold',
            description: 'Bold and powerful red theme',
            category: 'light'
        },
        'blue-dark': {
            name: 'Blue Corporate',
            description: 'Professional dark blue theme',
            category: 'light'
        },
        'minimal': {
            name: 'Minimal Clean',
            description: 'Clean and simple black/white theme',
            category: 'light'
        },
        
        // Dark Themes
        'dark': {
            name: 'Dark Mode',
            description: 'Professional dark theme',
            category: 'dark'
        },
        'purple-dark': {
            name: 'Purple Dark',
            description: 'Creative purple dark mode',
            category: 'dark'
        },
        'green-dark': {
            name: 'Green Dark',
            description: 'Nature-inspired dark mode',
            category: 'dark'
        },
        'orange-dark': {
            name: 'Orange Dark',
            description: 'Energetic orange dark mode',
            category: 'dark'
        },
        'red-dark': {
            name: 'Red Dark',
            description: 'Bold red dark mode',
            category: 'dark'
        },
        'blue-dark-dark': {
            name: 'Blue Dark Mode',
            description: 'Professional blue dark mode',
            category: 'dark'
        },
        'minimal-dark': {
            name: 'Minimal Dark',
            description: 'Clean dark mode',
            category: 'dark'
        }
    };

    /**
     * Set global theme for entire website
     * This affects all pages and is persistent across navigation
     * 
     * @param {string} themeName - Name of theme to apply
     * @param {boolean} persist - Whether to save theme to localStorage (default: true)
     */
    static setGlobalTheme(themeName, persist = true) {
        // Validate theme exists
        if (!this.themes[themeName]) {
            console.warn(`Theme "${themeName}" not found. Available themes:`, Object.keys(this.themes));
            return false;
        }

        // Clear all existing theme attributes first
        this.clearAllThemes();
        
        // Apply to HTML element (affects entire site)
        document.documentElement.setAttribute('data-theme', themeName);
        
        // Save to localStorage for persistence
        if (persist) {
            localStorage.setItem('globalTheme', themeName);
            localStorage.removeItem('pageTheme'); // Clear page-specific theme
            localStorage.removeItem('pageThemeUrl'); // Clear page URL
        }
        
        // Trigger custom event for other scripts to listen to
        this.triggerThemeChangeEvent('global', themeName);
        
        console.log(`✅ Global theme changed to: ${this.themes[themeName].name}`);
        return true;
    }

    /**
     * Set theme for current page only
     * This overrides global theme but only for this page
     * 
     * @param {string} themeName - Name of theme to apply
     * @param {boolean} persist - Whether to save theme to localStorage (default: true)
     */
    static setPageTheme(themeName, persist = true) {
        // Validate theme exists
        if (!this.themes[themeName]) {
            console.warn(`Theme "${themeName}" not found. Available themes:`, Object.keys(this.themes));
            return false;
        }

        // Clear all existing theme attributes first
        this.clearAllThemes();
        
        // Apply to body element (affects only current page)
        document.body.setAttribute('data-theme', themeName);
        
        // Save to localStorage for persistence
        if (persist) {
            localStorage.setItem('pageTheme', themeName);
            localStorage.setItem('pageThemeUrl', window.location.pathname);
        }
        
        // Trigger custom event
        this.triggerThemeChangeEvent('page', themeName);
        
        console.log(`✅ Page theme changed to: ${this.themes[themeName].name}`);
        return true;
    }

    /**
     * Reset to default theme (removes all theme attributes)
     */
    static resetTheme() {
        // Clear all theme attributes
        this.clearAllThemes();
        
        // Clear localStorage
        localStorage.removeItem('globalTheme');
        localStorage.removeItem('pageTheme');
        localStorage.removeItem('pageThemeUrl');
        
        // Trigger event
        this.triggerThemeChangeEvent('reset', 'default');
        
        console.log('✅ Theme reset to default');
        return true;
    }

    /**
     * Clear all theme attributes from DOM
     * This ensures clean theme switching
     * @private
     */
    static clearAllThemes() {
        // Remove theme attributes from HTML and body
        document.documentElement.removeAttribute('data-theme');
        document.body.removeAttribute('data-theme');
        
        // Force a reflow to ensure attributes are cleared
        document.documentElement.offsetHeight;
        
        console.log('🧹 Cleared all existing theme attributes');
    }

    /**
     * Get currently active theme
     * @returns {object} Current theme info
     */
    static getCurrentTheme() {
        const pageTheme = document.body.getAttribute('data-theme');
        const globalTheme = document.documentElement.getAttribute('data-theme');
        
        const activeTheme = pageTheme || globalTheme || 'default';
        
        return {
            active: activeTheme,
            scope: pageTheme ? 'page' : 'global',
            info: this.themes[activeTheme] || this.themes['default']
        };
    }

    /**
     * Load saved theme from localStorage on page load
     */
    static loadSavedTheme() {
        const globalTheme = localStorage.getItem('globalTheme');
        const pageTheme = localStorage.getItem('pageTheme');
        const pageThemeUrl = localStorage.getItem('pageThemeUrl');
        
        // Check if page-specific theme exists and matches current page
        if (pageTheme && pageThemeUrl === window.location.pathname) {
            this.setPageTheme(pageTheme, false); // Don't persist again
            console.log(`📱 Loaded page theme: ${pageTheme}`);
        } 
        // Otherwise load global theme
        else if (globalTheme) {
            this.setGlobalTheme(globalTheme, false); // Don't persist again
            console.log(`🌐 Loaded global theme: ${globalTheme}`);
        }
    }

    /**
     * Create theme selector dropdown
     * @param {string} containerId - ID of container element
     * @param {object} options - Configuration options
     */
    static createThemeSelector(containerId, options = {}) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn(`Container "${containerId}" not found`);
            return;
        }

        const config = {
            showGlobalOption: true,
            showPageOption: true,
            showResetOption: true,
            ...options
        };

        const selector = document.createElement('select');
        selector.className = 'theme-selector';
        selector.style.cssText = `
            padding: 8px 12px;
            border: 1px solid var(--border-color);
            border-radius: var(--border-radius-md);
            background: var(--bg-card);
            color: var(--text-primary);
            font-family: var(--font-family);
            cursor: pointer;
        `;

        // Add options
        if (config.showResetOption) {
            const resetOption = document.createElement('option');
            resetOption.value = 'reset';
            resetOption.textContent = '🔄 Reset to Default';
            selector.appendChild(resetOption);
        }

        // Add theme options
        Object.entries(this.themes).forEach(([key, theme]) => {
            if (config.showGlobalOption) {
                const globalOption = document.createElement('option');
                globalOption.value = `global:${key}`;
                globalOption.textContent = `🌐 ${theme.name} (Global)`;
                selector.appendChild(globalOption);
            }

            if (config.showPageOption) {
                const pageOption = document.createElement('option');
                pageOption.value = `page:${key}`;
                pageOption.textContent = `📱 ${theme.name} (Page Only)`;
                selector.appendChild(pageOption);
            }
        });

        // Add event listener
        selector.addEventListener('change', (e) => {
            const value = e.target.value;
            
            if (value === 'reset') {
                this.resetTheme();
            } else {
                const [scope, theme] = value.split(':');
                if (scope === 'global') {
                    this.setGlobalTheme(theme);
                } else if (scope === 'page') {
                    this.setPageTheme(theme);
                }
            }
        });

        container.appendChild(selector);
        console.log('✅ Theme selector created');
    }

    /**
     * Trigger custom theme change event
     * @private
     */
    static triggerThemeChangeEvent(scope, themeName) {
        const event = new CustomEvent('themeChanged', {
            detail: {
                scope: scope,
                theme: themeName,
                timestamp: new Date().toISOString()
            }
        });
        document.dispatchEvent(event);
    }

    /**
     * Get list of available themes
     * @returns {array} Array of theme objects
     */
    static getAvailableThemes() {
        return Object.entries(this.themes).map(([key, theme]) => ({
            key: key,
            ...theme
        }));
    }

    /**
     * Check if a theme exists
     * @param {string} themeName - Theme to check
     * @returns {boolean} Whether theme exists
     */
    static themeExists(themeName) {
        return this.themes.hasOwnProperty(themeName);
    }
}

/**
 * AUTO-INITIALIZATION
 * Automatically loads saved theme when page loads
 */
document.addEventListener('DOMContentLoaded', () => {
    ThemeManager.loadSavedTheme();
});

/**
 * EXAMPLE EVENT LISTENER
 * Listen for theme changes to perform custom actions
 */
document.addEventListener('themeChanged', (event) => {
    console.log('🎨 Theme changed:', event.detail);
    
    // Example: Update analytics or perform other actions
    // Analytics.track('theme_changed', {
    //     theme: event.detail.theme,
    //     scope: event.detail.scope
    // });
});

/**
 * GLOBAL ACCESS
 * Make ThemeManager available globally for easy access
 */
window.ThemeManager = ThemeManager;

/**
 * QUICK ACCESS FUNCTIONS
 * Convenient functions for common operations
 */

// Quick theme switchers
window.setDarkTheme = () => ThemeManager.setGlobalTheme('dark');
window.setLightTheme = () => ThemeManager.resetTheme();
window.setPurpleTheme = () => ThemeManager.setGlobalTheme('purple');
window.setGreenTheme = () => ThemeManager.setGlobalTheme('green');

console.log('🎨 Theme Manager loaded successfully!');
console.log('💡 Quick usage: ThemeManager.setGlobalTheme("dark")');
console.log('📚 Available themes:', Object.keys(ThemeManager.themes)); 