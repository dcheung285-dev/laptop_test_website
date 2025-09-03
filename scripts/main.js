/*
===========================================
AFFILIATE WEBSITE TEMPLATE - MAIN JAVASCRIPT
===========================================
This file contains all the interactive functionality for the affiliate website.
It handles smooth scrolling, animations, tracking, and user interactions.

FEATURES INCLUDED:
- Smooth scrolling to sections
- Sticky navigation effects
- Mobile menu toggle
- Back to top button
- Floating CTA visibility
- Click tracking for affiliate links
- Review button functionality
- Product filtering and sorting
- Intersection Observer for animations
- Loading states and transitions

CUSTOMIZATION GUIDE:
- Modify tracking functions to match your analytics setup
- Adjust animation durations and easing
- Update affiliate link patterns for your offers
- Customize mobile breakpoints if needed
*/

// ===========================================
// CONFIGURATION AND CONSTANTS
// ===========================================

// CONFIG is now imported from nav-config.js
// The configuration includes scroll behavior, animation settings, and selectors

// ===========================================
// UTILITY FUNCTIONS
// ===========================================

// Utility functions are now imported from Configurations/utilities.js
// This includes: debounce, throttle, isInViewport, getScrollPosition, 
// scrollToElement, log, trackEvent, and animation utilities

// ===========================================
// NAVIGATION FUNCTIONALITY
// ===========================================

class NavigationManager {
    constructor() {
        this.nav = document.querySelector(CONFIG.selectors.nav);
        this.navLinks = document.querySelectorAll(CONFIG.selectors.navLinks);
        this.mobileMenu = document.querySelector(CONFIG.selectors.mobileMenu);
        this.isMenuOpen = false;
        
        // New search functionality
        this.searchBtn = document.getElementById('navSearchBtn');
        this.searchContainer = document.getElementById('navSearchContainer');
        this.searchInput = document.getElementById('navSearchInput');
        this.searchClose = document.getElementById('navSearchClose');
        this.menuBtn = document.getElementById('navMenuBtn');
        this.isSearchOpen = false;
        
        this.init();
    }
    
    init() {
        this.setupScrollEffect();
        this.setupMobileMenu();
        this.setupNavLinks();
        this.setupActiveStates();
        this.setupSearchFunctionality();
    }
    
    /**
     * Setup sticky navigation scroll effect
     */
    setupScrollEffect() {
        if (!this.nav) return;
        
        const handleScroll = throttle(() => {
            const scrolled = getScrollPosition() > 50;
            this.nav.classList.toggle('scrolled', scrolled);
        }, 10);
        
        window.addEventListener('scroll', handleScroll);
        log('Navigation scroll effect initialized');
    }
    
    /**
     * Setup full-screen menu overlay
     */
    setupMobileMenu() {
        if (!this.menuBtn) return;
        
        // Initialize menu overlay
        this.menuOverlay = document.getElementById('menuOverlay');
        if (!this.menuOverlay) {
            console.error('Menu overlay element not found');
            return;
        }
        
        // Setup menu button click handler
        this.menuBtn.addEventListener('click', () => {
            this.toggleFullScreenMenu();
        });
        
        // Close menu when clicking outside menu container
        this.menuOverlay.addEventListener('click', (e) => {
            if (e.target === this.menuOverlay) {
                this.closeFullScreenMenu();
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isMenuOpen) {
                this.closeFullScreenMenu();
            }
        });
        
        // Generate menu content
        this.generateMenuContent();
        
        log('Full-screen menu initialized');
    }
    
    /**
     * Toggle full-screen menu
     */
    toggleFullScreenMenu() {
        if (this.isMenuOpen) {
            this.closeFullScreenMenu();
        } else {
            this.openFullScreenMenu();
        }
    }
    
    /**
     * Open full-screen menu
     */
    openFullScreenMenu() {
        this.isMenuOpen = true;
        this.menuOverlay.classList.add('active');
        
        // Update menu button icon to X
        const icon = this.menuBtn.querySelector('i');
        if (icon) {
            icon.className = 'fas fa-times';
        }
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = 'hidden';
        
        // Call callback if defined
        const config = window.MenuConfig ? window.MenuConfig.get() : null;
        if (config && config.advanced.callbacks.onMenuOpen) {
            config.advanced.callbacks.onMenuOpen();
        }
        
        log('Full-screen menu opened');
    }
    
    /**
     * Close full-screen menu
     */
    closeFullScreenMenu() {
        this.isMenuOpen = false;
        this.menuOverlay.classList.remove('active');
        
        // Update menu button icon back to hamburger
        const icon = this.menuBtn.querySelector('i');
        if (icon) {
            icon.className = 'fas fa-bars';
        }
        
        // Restore body scroll
        document.body.style.overflow = '';
        
        // Call callback if defined
        const config = window.MenuConfig ? window.MenuConfig.get() : null;
        if (config && config.advanced.callbacks.onMenuClose) {
            config.advanced.callbacks.onMenuClose();
        }
        
        log('Full-screen menu closed');
    }
    
    /**
     * Generate menu content from configuration
     */
    generateMenuContent() {
        if (!window.MenuConfig) {
            console.error('Menu configuration not found');
            return;
        }
        
        const config = window.MenuConfig.get();
        if (!config.settings.enabled) {
            return;
        }
        
        const menuContainer = this.menuOverlay.querySelector('.menu-container');
        if (!menuContainer) {
            console.error('Menu container not found');
            return;
        }
        
        // Clear existing content
        menuContainer.innerHTML = '';
        
        // Add custom HTML before promotional box
        if (config.advanced.customHTML.beforePromo) {
            menuContainer.insertAdjacentHTML('beforeend', config.advanced.customHTML.beforePromo);
        }
        
        // Add promotional box
        if (config.settings.showPromotionalBox && config.promotional.enabled) {
            const promoBox = this.createPromotionalBox(config.promotional);
            menuContainer.appendChild(promoBox);
        }
        
        // Add custom HTML after promotional box
        if (config.advanced.customHTML.afterPromo) {
            menuContainer.insertAdjacentHTML('beforeend', config.advanced.customHTML.afterPromo);
        }
        
        // Add custom HTML before columns
        if (config.advanced.customHTML.beforeColumns) {
            menuContainer.insertAdjacentHTML('beforeend', config.advanced.customHTML.beforeColumns);
        }
        
        // Add menu columns
        const enabledColumns = window.MenuConfig.getEnabledColumns();
        if (enabledColumns.length > 0) {
            const columnsContainer = this.createMenuColumns(enabledColumns);
            menuContainer.appendChild(columnsContainer);
        }
        
        // Add custom HTML after columns
        if (config.advanced.customHTML.afterColumns) {
            menuContainer.insertAdjacentHTML('beforeend', config.advanced.customHTML.afterColumns);
        }
        
        // Add custom HTML before social links
        if (config.advanced.customHTML.beforeSocial) {
            menuContainer.insertAdjacentHTML('beforeend', config.advanced.customHTML.beforeSocial);
        }
        
        // Add social links
        if (config.settings.showSocialLinks && config.social.enabled) {
            const socialSection = this.createSocialSection(config.social);
            menuContainer.appendChild(socialSection);
        }
        
        // Add custom HTML after social links
        if (config.advanced.customHTML.afterSocial) {
            menuContainer.insertAdjacentHTML('beforeend', config.advanced.customHTML.afterSocial);
        }
        
        // Inject dynamic promo content into CSS
        this.injectPromoContentIntoCSS();
        
        log('Menu content generated');
    }
    
    /**
     * Inject promotional content from menu config into CSS
     */
    injectPromoContentIntoCSS() {
        const config = window.MenuConfig?.get();
        if (!config?.promotional?.enabled) return;
        
        const subtitle = config.promotional.subtitle || '';
        const description = config.promotional.description || '';
        
        // Create the content string with line break
        const content = `"${subtitle}" "\\A" "${description}"`;
        
        // Find or create a style element for dynamic menu styles
        let dynamicStyleElement = document.getElementById('dynamic-menu-styles');
        if (!dynamicStyleElement) {
            dynamicStyleElement = document.createElement('style');
            dynamicStyleElement.id = 'dynamic-menu-styles';
            document.head.appendChild(dynamicStyleElement);
        }
        
        // CSS rules for all responsive breakpoints
        const cssRules = `
            /* Dynamic menu promo content - Tablet (max-width: 1024px and min-width: 769px) */
            @media (max-width: 1024px) and (min-width: 769px) {
                .menu-promo-content::after {
                    content: ${content} !important;
                }
            }
            
            /* Dynamic menu promo content - Mobile (max-width: 768px and min-width: 481px) */
            @media (max-width: 768px) and (min-width: 481px) {
                .menu-promo-content::after {
                    content: ${content} !important;
                }
            }
            
            /* Dynamic menu promo content - Extra Small (max-width: 480px) */
            @media (max-width: 480px) {
                .menu-promo-content::after {
                    content: ${content} !important;
                }
            }
            
            /* Dynamic menu promo content - Exact 1024px */
            @media (max-width: 1024px) and (min-width: 1024px) {
                .menu-promo-content::after {
                    content: ${content} !important;
                }
            }
        `;
        
        // Update the style element
        dynamicStyleElement.textContent = cssRules;
        
        console.log('✅ Dynamic promo content injected into CSS:', { subtitle, description });
    }
    
    /**
     * Create promotional box element
     */
    createPromotionalBox(promoConfig) {
        const promoBox = document.createElement('div');
        
        // Set background based on configuration
        if (promoConfig.background?.type === 'image' && promoConfig.background.image?.src) {
            // Use image background
            promoBox.className = 'menu-promo-box menu-promo-image-bg';
            promoBox.style.backgroundImage = `url('${promoConfig.background.image.src}')`;
            promoBox.style.backgroundPosition = promoConfig.background.image.position || 'center';
            promoBox.style.backgroundSize = promoConfig.background.image.size || 'cover';
            
            // Add overlay if specified
            if (promoConfig.background.image.overlay) {
                const overlay = document.createElement('div');
                overlay.className = 'menu-promo-overlay';
                overlay.style.background = promoConfig.background.image.overlay;
                promoBox.appendChild(overlay);
            }
        } else {
            // Use gradient background
            promoBox.className = `menu-promo-box ${promoConfig.background?.gradientClass || 'promo-box-gradient'}`;
        }
        
        // Create product logo HTML
        let logoHTML = '';
        if (promoConfig.productLogo?.enabled && promoConfig.productLogo?.src) {
            // Determine responsive scale based on screen size
            const getResponsiveScale = () => {
                const width = window.innerWidth;
                const responsive = promoConfig.productLogo.responsive;
                
                if (responsive) {
                    if (width <= 479) {
                        return responsive.extraSmall?.scale || 1.5;
                    } else if (width <= 768) {
                        return responsive.mobile?.scale || 1.8;
                    } else if (width <= 1023) {
                        return responsive.tablet?.scale || 2.0;
                    } else {
                        return responsive.desktop?.scale || 2.5;
                    }
                } else {
                    // Fallback to legacy scale property
                    return promoConfig.productLogo.scale || 1.0;
                }
            };
            
            const logoScale = getResponsiveScale();
            logoHTML = `
                <div class="menu-promo-logo">
                    <img src="${promoConfig.productLogo.src}" 
                         alt="${promoConfig.productLogo.alt || 'Product Logo'}"
                         class="menu-promo-logo-img"
                         data-responsive-scale="true"
                         style="width: ${promoConfig.productLogo.width || '80px'}; height: ${promoConfig.productLogo.height || '80px'}; transform: scale(${logoScale});">
                </div>
            `;
            
            // Add resize listener to update logo scale on screen size change
            if (promoConfig.productLogo.responsive) {
                window.addEventListener('resize', () => {
                    const logoImg = document.querySelector('.menu-promo-logo-img[data-responsive-scale="true"]');
                    if (logoImg) {
                        const newScale = getResponsiveScale();
                        logoImg.style.transform = `scale(${newScale})`;
                    }
                });
            }
        }
        
        // Create buttons HTML
        let buttonsHTML = '';
        if (promoConfig.reviewButton?.enabled) {
            const reviewIcon = promoConfig.reviewButton.icon || 'fas fa-search';
            buttonsHTML += `
                <a href="${promoConfig.reviewButton.link}" class="menu-promo-btn review-btn ${promoConfig.reviewButton.class || ''}" 
                   onclick="this.closest('.menu-overlay').classList.remove('active'); document.body.style.overflow = '';">
                    <i class="${reviewIcon}"></i>
                    ${promoConfig.reviewButton.text}
                </a>
            `;
        }
        
        const ctaIcon = promoConfig.ctaButton?.icon || 'fas fa-external-link-alt';
        buttonsHTML += `
            <a href="${promoConfig.ctaButton?.link || '#'}" class="menu-promo-btn cta-btn ${promoConfig.ctaButton?.class || ''}" 
               onclick="this.closest('.menu-overlay').classList.remove('active'); document.body.style.overflow = '';">
                <i class="${ctaIcon}"></i>
                ${promoConfig.ctaButton?.text || 'Learn More'}
            </a>
        `;
        
        // Create the horizontal layout
        promoBox.innerHTML = `
            <div class="menu-promo-content">
                ${logoHTML}
                <div class="menu-promo-text">
            <h3 class="menu-promo-title">${promoConfig.title}</h3>
            <h4 class="menu-promo-subtitle">${promoConfig.subtitle}</h4>
            <p class="menu-promo-description">${promoConfig.description}</p>
                </div>
                <div class="menu-promo-buttons">
                    ${buttonsHTML}
                </div>
            </div>
        `;
        
        return promoBox;
    }
    
    /**
     * Create menu columns container
     */
    createMenuColumns(columns) {
        const columnsContainer = document.createElement('div');
        columnsContainer.className = 'menu-columns';
        
        columns.forEach(column => {
            const columnElement = document.createElement('div');
            columnElement.className = 'menu-column';
            
            const linksHTML = column.links.map(link => `
                <li class="menu-link-item">
                    <a href="${link.url}" class="menu-link" ${link.target ? `target="${link.target}" rel="noopener noreferrer"` : ''} onclick="this.handleMenuLinkClick(event, this)">
                        <span class="menu-link-text">${link.text}</span>
                        ${link.description ? `<span class="menu-link-description">${link.description}</span>` : ''}
                    </a>
                </li>
            `).join('');
            
            columnElement.innerHTML = `
                <h4 class="menu-column-title">${column.title}</h4>
                <ul class="menu-links">
                    ${linksHTML}
                </ul>
            `;
            
            columnsContainer.appendChild(columnElement);
        });
        
        // Add click handlers to menu links
        columnsContainer.addEventListener('click', (e) => {
            const menuLink = e.target.closest('.menu-link');
            if (menuLink) {
                this.handleMenuLinkClick(e, menuLink);
            }
        });
        
        return columnsContainer;
    }
    
    /**
     * Create social links section
     */
    createSocialSection(socialConfig) {
        const socialSection = document.createElement('div');
        socialSection.className = 'menu-social';
        
        const socialLinksHTML = socialConfig.links.map(link => `
            <a href="${link.url}" class="menu-social-link" target="_blank" rel="noopener"
               style="border-color: ${link.color}20;">
                <i class="${link.icon}" style="color: ${link.color};"></i>
                <span>${link.text}</span>
            </a>
        `).join('');
        
        socialSection.innerHTML = `
            <h4 class="menu-social-title">${socialConfig.title}</h4>
            <div class="menu-social-links">
                ${socialLinksHTML}
            </div>
        `;
        
        return socialSection;
    }
    
    /**
     * Handle menu link clicks
     */
    handleMenuLinkClick(e, link) {
        const config = window.MenuConfig ? window.MenuConfig.get() : null;
        const href = link.getAttribute('href');
        const target = link.getAttribute('target');
        
        // Don't interfere with external links that open in new tabs
        if (target === '_blank') {
            // Let the browser handle the external link naturally
            // Close menu after clicking external link
            if (config && config.settings.closeOnLinkClick) {
                setTimeout(() => this.closeFullScreenMenu(), 100);
            }
            log(`External menu link opened in new tab: ${href}`);
            return;
        }
        
        // Handle internal anchor links with proper scroll offset
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                // Use the same scroll offset as other navigation
                scrollToElement(targetElement, CONFIG.scrollOffset);
                
                // Close menu after scrolling
                if (config && config.settings.closeOnLinkClick) {
                    this.closeFullScreenMenu();
                }
                
                log(`Menu link scrolled to: ${href}`);
            }
        }
        
        // Call callback if defined
        if (config && config.advanced.callbacks.onLinkClick) {
            config.advanced.callbacks.onLinkClick(href, link);
        }
        
        // Close menu for other link types if configured to do so
        if (config && config.settings.closeOnLinkClick && !href.startsWith('#')) {
            // For external links, close after a short delay
            if (!href.startsWith('http')) {
                setTimeout(() => this.closeFullScreenMenu(), 100);
            }
        }
        
        // Track link click
        if (CONFIG.enableTracking) {
            trackEvent('menu', 'link_click', href);
        }
        
        log(`Menu link clicked: ${href}`);
    }
    
    /**
     * Setup navigation links
     */
    setupNavLinks() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                // Skip review buttons - they have their own handlers with center positioning
                if (link.classList.contains('btn-review') || 
                    link.classList.contains('review-btn') || 
                    link.id === 'editors-choice-review-btn') {
                    console.log('🚫 NavigationManager: Skipping review button:', link.id || link.className);
                    return;
                }
                
                // Handle internal links (starting with #)
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const targetElement = document.querySelector(href);
                    
                    if (targetElement) {
                        scrollToElement(targetElement);
                        this.closeFullScreenMenu();
                        
                        // Update active state
                        this.updateActiveLink(link);
                        
                        log(`Navigated to ${href}`);
                    }
                }
            });
        });
    }
    
    /**
     * Setup active states for navigation links
     */
    setupActiveStates() {
        const sections = document.querySelectorAll('section[id]');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    const navLink = document.querySelector(`a[href="#${id}"]`);
                    
                    if (navLink) {
                        this.updateActiveLink(navLink);
                    }
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: `-${CONFIG.scrollOffset}px 0px 0px 0px`
        });
        
        sections.forEach(section => {
            observer.observe(section);
        });
        
        log('Active states setup completed');
    }
    
    /**
     * Update active navigation link
     */
    updateActiveLink(activeLink) {
        this.navLinks.forEach(link => {
            link.classList.remove('active');
        });
        activeLink.classList.add('active');
    }
    
    /**
     * Setup search functionality
     */
    setupSearchFunctionality() {
        if (!this.searchBtn || !this.searchContainer || !this.searchInput || !this.searchClose) return;
        
        // Open search when search button is clicked
        this.searchBtn.addEventListener('click', () => {
            this.openSearch();
        });
        
        // Close search when close button is clicked
        this.searchClose.addEventListener('click', () => {
            this.closeSearch();
        });
        
        // Close search on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isSearchOpen) {
                this.closeSearch();
            }
        });
        
        // Close search when clicking outside
        document.addEventListener('click', (e) => {
            if (this.isSearchOpen && !this.searchContainer.contains(e.target) && !this.searchBtn.contains(e.target)) {
                this.closeSearch();
            }
        });
        
        // Handle search input
        this.searchInput.addEventListener('input', (e) => {
            this.handleSearch(e.target.value);
        });
        
        // Handle search form submission
        this.searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.performSearch(e.target.value);
            }
        });
        
        log('Search functionality initialized');
    }
    
    /**
     * Open search bar
     */
    openSearch() {
        this.searchContainer.classList.add('active');
        this.isSearchOpen = true;
        
        // Show search dropdown
        const searchDropdown = document.getElementById('navSearchDropdown');
        if (searchDropdown) {
            searchDropdown.classList.add('active');
        }
        
        // Focus on search input
        setTimeout(() => {
            this.searchInput.focus();
        }, 100);
        
        // Close mobile menu if open
        if (this.isMenuOpen) {
            this.closeMobileMenu();
        }
        
        log('Search opened');
    }
    
    /**
     * Close search bar
     */
    closeSearch() {
        this.searchContainer.classList.remove('active');
        this.isSearchOpen = false;
        this.searchInput.value = '';
        
        // Hide search dropdown
        const searchDropdown = document.getElementById('navSearchDropdown');
        if (searchDropdown) {
            searchDropdown.classList.remove('active');
        }
        
        // Reset search sections - show popular searches and quick nav, hide search results
        const searchResults = document.getElementById('searchResults');
        const searchResultsList = document.getElementById('searchResultsList');
        const popularSection = document.querySelector('.search-section:not(.search-results)');
        const quickNavSection = document.querySelector('.search-section:nth-child(2)');
        
        if (searchResults) {
            searchResults.style.display = 'none';
            searchResults.style.visibility = 'hidden';
            searchResults.style.opacity = '0';
        }
        if (searchResultsList) {
            searchResultsList.innerHTML = '';
        }
        if (popularSection) {
            popularSection.style.display = 'block';
        }
        if (quickNavSection) {
            quickNavSection.style.display = 'block';
        }
        
        log('Search closed');
    }
    
    /**
     * Handle search input (real-time search suggestions)
     */
    handleSearch(query) {
        const searchResults = document.getElementById('searchResults');
        const searchResultsList = document.getElementById('searchResultsList');
        
        // Get the popular searches and quick navigation sections
        const popularSection = document.querySelector('.search-section:not(.search-results)');
        const quickNavSection = document.querySelector('.search-section:nth-child(2)');
        
        if (!query || query.length < 2) {
            // Show popular searches and quick navigation, hide search results
            if (searchResults) {
                searchResults.style.display = 'none';
                searchResults.style.visibility = 'hidden';
                searchResults.style.opacity = '0';
            }
            if (popularSection) {
                popularSection.style.display = 'block';
            }
            if (quickNavSection) {
                quickNavSection.style.display = 'block';
            }
            return;
        }
        
        // Hide popular searches and quick navigation, show search results
        if (popularSection) {
            popularSection.style.display = 'none';
        }
        if (quickNavSection) {
            quickNavSection.style.display = 'none';
        }
        if (searchResults) {
            searchResults.style.display = 'block';
            searchResults.style.visibility = 'visible';
            searchResults.style.opacity = '1';
            searchResults.style.position = 'relative';
            searchResults.style.zIndex = '1000';
            searchResults.style.backgroundColor = 'var(--bg-primary)';
        }
        
        // Generate search results based on query
        const searchData = this.generateSearchResults(query);
        
        if (searchResultsList) {
            if (searchData.length > 0) {
                // Group results by page
                const groupedResults = this.groupSearchResultsByPage(searchData);
                
                let resultsHTML = '';
                let pageCount = 0;
                
                // Render each page group
                Object.keys(groupedResults).forEach(pageName => {
                    const pageResults = groupedResults[pageName];
                    if (pageResults.length > 0) {
                        pageCount++;
                        
                        // Add page section divider (except for first group)
                        if (pageCount > 1) {
                            resultsHTML += `<div class="search-page-divider"></div>`;
                        }
                        
                        // Add page section header
                        resultsHTML += `<div class="search-page-header">${pageName}</div>`;
                        
                        // Add results for this page
                        pageResults.forEach(result => {
                            resultsHTML += `
                                <a href="${result.url}" class="search-result-item">
                                    <div class="search-result-icon">${result.icon}</div>
                                    <div class="search-result-text">
                                        <div class="search-result-title">${this.cleanSearchTitle(result.title)}</div>
                                        <div class="search-result-description">${this.cleanSearchDescription(result.description)}</div>
                                    </div>
                                </a>
                            `;
                        });
                    }
                });
                
                searchResultsList.innerHTML = resultsHTML;
            } else {
                searchResultsList.innerHTML = '<div style="padding: 20px; text-align: center; color: var(--text-secondary); font-style: italic;">No results found for "' + query + '"</div>';
            }
        }
        
        log('Search query:', query);
    }
    
    /**
     * Group search results by page for better organization
     */
    groupSearchResultsByPage(results) {
        const grouped = {};
        
        results.forEach(result => {
            // Determine page from URL
            let pageName = 'Other';
            
            if (result.url.includes('index.html') || result.url.includes('#')) {
                pageName = 'Products & Reviews';
            } else if (result.url.includes('home.html')) {
                pageName = 'Home';
            } else if (result.url.includes('blog.html') || result.url.includes('blogpost')) {
                pageName = 'Blog';
            } else if (result.url.includes('contact.html')) {
                pageName = 'Contact & FAQ';
            } else if (result.url.includes('podcast.html')) {
                pageName = 'Podcasts';
            } else if (result.url.includes('streaming.html')) {
                pageName = 'Streaming';
            } else if (result.url.includes('privacy.html')) {
                pageName = 'Privacy Policy';
            } else if (result.url.includes('cookies.html')) {
                pageName = 'Cookies Policy';
            } else if (result.url.includes('disclaimer.html')) {
                pageName = 'Disclaimer';
            }
            
            if (!grouped[pageName]) {
                grouped[pageName] = [];
            }
            grouped[pageName].push(result);
        });
        
        // Sort groups by importance
        const sortedGroups = {};
        const pageOrder = [
            'Products & Reviews', 'Home', 'Blog', 'Podcasts', 'Streaming', 
            'Contact & FAQ', 'Privacy Policy', 'Cookies Policy', 'Disclaimer', 'Other'
        ];
        
        pageOrder.forEach(pageName => {
            if (grouped[pageName]) {
                sortedGroups[pageName] = grouped[pageName];
            }
        });
        
        return sortedGroups;
    }
    
    /**
     * Clean search result titles by removing unwanted labels
     */
    cleanSearchTitle(title) {
        // Remove common label patterns
        return title
            .replace(/^Title:\s*/i, '')
            .replace(/^Subtitle:\s*/i, '')
            .replace(/^Description:\s*/i, '')
            .replace(/\s*-\s*Title$/, '')
            .replace(/\s*-\s*Subtitle$/, '')
            .replace(/\s*-\s*Description$/, '')
            .trim();
    }
    
    /**
     * Clean search result descriptions by removing unwanted prefixes
     */
    cleanSearchDescription(description) {
        // Remove common description prefixes and labels
        return description
            .replace(/^Title:\s*/i, '')
            .replace(/^Subtitle:\s*/i, '')
            .replace(/^Description:\s*/i, '')
            .replace(/^Feature:\s*/i, '')
            .replace(/^Specification:\s*/i, '')
            .replace(/^Content:\s*/i, '')
            .replace(/^Section:\s*/i, '')
            .replace(/^Navigation section:\s*/i, '')
            .replace(/^Podcast category:\s*/i, '')
            .replace(/^Streaming category:\s*/i, '')
            .replace(/^Main\s+/i, '')
            .replace(/\s+section$/i, '')
            .trim();
    }
    
    /**
     * Build dynamic search database from config files
     */
    buildDynamicSearchDatabase() {
        const allResults = [];
        
        // Debug: Check which config objects are available
        const requiredConfigs = [
            'PRODUCTS_CONFIG', 'BLOG_POSTS', 'BLOG_HERO', 'BLOG_CTA_BANNER', 
            'DISCLAIMER_CONFIG', 'MENU_CONFIG', 'CONTACT_FAQ_CONFIG', 'HOME_CONFIG', 
            'PRIVACY_CONFIG', 'COOKIES_CONFIG', 'BRAND_CONFIG', 'SECTION_TITLES', 'CONFIG',
            'PODCAST_PAGE_TITLE', 'PODCAST_HERO', 'PODCAST_CATEGORIES',
            'STREAMING_PAGE_TITLE', 'STREAMING_HERO', 'STREAMING_CATEGORIES', 'STREAMING_PLATFORMS'
        ];
        
        const missingConfigs = requiredConfigs.filter(config => !window[config]);
        if (missingConfigs.length > 0) {
            console.log(`🔍 Search: Missing ${missingConfigs.length} configs: ${missingConfigs.join(', ')}`);
        } else {
            console.log(`🔍 Search: All ${requiredConfigs.length} configs loaded successfully`);
        }
        
        // Add products from PRODUCTS_CONFIG with COMPLETE extraction
        if (window.PRODUCTS_CONFIG) {
            Object.keys(window.PRODUCTS_CONFIG).forEach(productKey => {
                const product = window.PRODUCTS_CONFIG[productKey];
                if (product && product.name) {
                    // Main product entry
                    allResults.push({
                        title: product.name,
                        description: product.description || 'Product review and information',
                        icon: '📱',
                        url: `index.html#${productKey}`,
                        keywords: [
                            product.name.toLowerCase().split(' ').filter(w => w.length > 1),
                            product.description ? product.description.toLowerCase().split(' ').filter(w => w.length > 2) : [],
                            'product', 'review', 'ranking', 'casino', 'crypto', 'bonus', 'gambling', 'betting'
                        ].flat()
                    });
                    
                                            // CTA content is now included in main product keywords - no separate entries needed to avoid technical terms
                    
                    // Extract ALL Universal Template Fields (Casino, Sports, SaaS, etc.) with user-friendly names
                    const universalFields = {
                        'price': 'Price',
                        'originalPrice': 'Original Price',
                        'discount': 'Discount',
                        'ctaText': 'Action',
                        'welcomeBonus': 'Welcome Bonus',
                        'welcomePackage': 'Welcome Package',
                        'addedBonus': 'Bonus',
                        'bonusCode': 'Bonus Code',
                        'signupBonus': 'Sign-up Bonus',
                        'oddsBoost': 'Odds Boost',
                        'freeBet': 'Free Bet',
                        'freeSpins': 'Free Spins',
                        'monthlyPrice': 'Monthly Price',
                        'yearlyPrice': 'Annual Price',
                        'trialPeriod': 'Trial Period',
                        'freeTrial': 'Free Trial',
                        'contentHighlight': 'Content',
                        'streamingQuality': 'Quality',
                        'serverCount': 'Servers',
                        'speedInfo': 'Speed',
                        'bandwidth': 'Bandwidth',
                        'tradingFee': 'Trading Fee',
                        'supportedCoins': 'Supported Coins',
                        'securityRating': 'Security Rating',
                        'storage': 'Storage',
                        'uptime': 'Uptime',
                        'hosting': 'Hosting',
                        'priceRange': 'Price Range',
                        'cuisineType': 'Cuisine',
                        'specialOffer': 'Special Offer',
                        'roomRate': 'Room Rate',
                        'amenities': 'Amenities',
                        'locationScore': 'Location',
                        'depositBonus': 'Deposit Bonus',
                        'noDeposit': 'No Deposit',
                        'cashback': 'Cashback',
                        'promotion': 'Promotion'
                    };
                    
                    Object.keys(universalFields).forEach(field => {
                        if (product[field] && typeof product[field] === 'string') {
                            allResults.push({
                                title: `${product.name} - ${universalFields[field]}`,
                                description: product[field],
                                icon: '💰',
                                url: `index.html#${productKey}`,
                                keywords: product[field].toLowerCase().split(' ').filter(w => w.length > 1)
                            });
                        }
                    });
                    
                    // Extract ANY other string fields dynamically (hide technical field names)
                    const skipFields = [...Object.keys(universalFields), 'name', 'description', 'productLogo', 'productImage', 'affiliateLink', 'rank', 'rating', 'reviewCount'];
                    Object.keys(product).forEach(key => {
                        if (typeof product[key] === 'string' && 
                            !skipFields.includes(key) && 
                            product[key].length > 3 &&
                            !key.toLowerCase().includes('url') &&
                            !key.toLowerCase().includes('image') &&
                            !key.toLowerCase().includes('logo')) {
                            allResults.push({
                                title: product[key].length > 50 ? product[key].substring(0, 50) + '...' : product[key],
                                description: `${product.name} information`,
                                icon: '📄',
                                url: `index.html#${productKey}`,
                                keywords: product[key].toLowerCase().split(' ').filter(w => w.length > 1).concat([product.name.toLowerCase()])
                            });
                        }
                    });
                    
                    // Add perks as searchable content
                    if (product.perks && Array.isArray(product.perks)) {
                        product.perks.forEach(perk => {
                            if (perk.text) {
                                allResults.push({
                                    title: `${product.name} - ${perk.text}`,
                                    description: `Feature: ${perk.text}`,
                                    icon: '✨',
                                    url: `index.html#${productKey}`,
                                    keywords: perk.text.toLowerCase().split(' ').filter(w => w.length > 1)
                                });
                            }
                        });
                    }
                    
                    // Add specifications as searchable content
                    if (product.specifications && Array.isArray(product.specifications)) {
                        product.specifications.forEach(spec => {
                            if (spec.name && spec.value) {
                                allResults.push({
                                    title: `${product.name} - ${spec.name}`,
                                    description: `Specification: ${spec.value}`,
                                    icon: '🔧',
                                    url: `index.html#${productKey}`,
                                    keywords: [
                                        spec.name.toLowerCase().split(' '),
                                        spec.value.toLowerCase().split(' ')
                                    ].flat().filter(w => w.length > 1)
                                });
                            }
                        });
                    }
                    
                    // Add features as searchable content
                    if (product.features && Array.isArray(product.features)) {
                        product.features.forEach(feature => {
                            if (feature.text) {
                                allResults.push({
                                    title: `${product.name} - ${feature.text}`,
                                    description: `Feature: ${feature.text}`,
                                    icon: '⭐',
                                    url: `index.html#${productKey}`,
                                    keywords: feature.text.toLowerCase().split(' ').filter(w => w.length > 1)
                                });
                            }
                        });
                    }
                    
                    // Add full review content - consolidated into single entry
                    if (product.fullReview) {
                        let reviewTitle = `${product.name} Review`;
                        let reviewDescription = '';
                        let reviewKeywords = ['review', 'detailed', 'analysis'];
                        
                        // Combine tagline and paragraphs into one comprehensive entry
                        if (product.fullReview.tagline) {
                            reviewDescription += product.fullReview.tagline + ' ';
                            reviewKeywords = reviewKeywords.concat(product.fullReview.tagline.toLowerCase().split(' ').filter(w => w.length > 1));
                        }
                        
                        if (product.fullReview.paragraphs && Array.isArray(product.fullReview.paragraphs)) {
                            const fullReviewText = product.fullReview.paragraphs.join(' ');
                            reviewDescription += fullReviewText;
                            reviewKeywords = reviewKeywords.concat(fullReviewText.toLowerCase().split(' ').filter(w => w.length > 2));
                        }
                        
                        // Only add review entry if we have content
                        if (reviewDescription.trim().length > 0) {
                            allResults.push({
                                title: reviewTitle,
                                description: reviewDescription.substring(0, 150) + '...',
                                icon: '📖',
                                url: `index.html#${productKey}`,
                                keywords: [...new Set(reviewKeywords)] // Remove duplicates
                            });
                        }
                    }
                }
            });
        }
        
        // Add static pages
        const staticPages = [
            { title: 'Home Page', description: 'Main page with product rankings and reviews', icon: '🏠', url: 'home.html', keywords: ['home', 'main', 'start', 'ranking', 'review'] },
            { title: 'Top 10 List', description: 'Complete top 10 product rankings', icon: '🏆', url: 'top10.html', keywords: ['top', 'best', 'list', 'ranking', 'ten', '10'] },
            { title: 'Blog & News', description: 'Latest news, guides and tips', icon: '📰', url: 'blog.html', keywords: ['blog', 'news', 'guide', 'article', 'tips'] },
            { title: 'Contact Support', description: 'Get help and support from our team', icon: '📞', url: 'contact.html', keywords: ['contact', 'support', 'help', 'email', 'team'] },
            { title: 'Privacy Policy', description: 'How we protect your personal data', icon: '🔒', url: 'privacy.html', keywords: ['privacy', 'policy', 'data', 'protection', 'personal'] },
            { title: 'Cookies Policy', description: 'How we use cookies to improve your browsing experience', icon: '🍪', url: 'cookies.html', keywords: ['cookies', 'policy', 'tracking', 'preferences', 'privacy', 'consent'] }
        ];
        
        allResults.push(...staticPages);
        
        // Add content from disclaimer config (affiliate information)
        if (window.DISCLAIMER_CONFIG && window.DISCLAIMER_CONFIG.sections) {
            window.DISCLAIMER_CONFIG.sections.forEach(section => {
                if (section.title && section.content) {
                    const contentText = section.content.replace(/<[^>]*>/g, ' ').toLowerCase();
                    allResults.push({
                        title: `Disclaimer - ${section.title}`,
                        description: contentText.substring(0, 100) + '...',
                        icon: '⚖️',
                        url: 'disclaimer.html',
                        keywords: [
                            section.title.toLowerCase().split(' '),
                            contentText.split(' ').filter(w => w.length > 2)
                        ].flat().filter(w => w.length > 1)
                    });
                }
            });
        }
        
        // Add content from blog config (BLOG_POSTS)
        const addedYears = new Set(); // Track years to avoid duplicates
        if (window.BLOG_POSTS) {
            Object.keys(window.BLOG_POSTS).forEach(postKey => {
                const post = window.BLOG_POSTS[postKey];
                if (post && post.title) {
                    // Extract date information for search
                    const dateKeywords = [];
                    if (post.date) {
                        // Extract year, month, day from date string
                        const dateText = post.date.toLowerCase();
                        const yearMatch = dateText.match(/\b(20\d{2})\b/); // Match years like 2024, 2025
                        const monthMatch = dateText.match(/\b(january|february|march|april|may|june|july|august|september|october|november|december)\b/);
                        const dayMatch = dateText.match(/\b(\d{1,2})\b/);
                        
                        if (yearMatch) dateKeywords.push(yearMatch[1]);
                        if (monthMatch) dateKeywords.push(monthMatch[1]);
                        if (dayMatch) dateKeywords.push(dayMatch[1]);
                        
                        // Also add the full date as keywords
                        dateKeywords.push(...dateText.split(' ').filter(w => w.length > 1));
                    }
                    
                    // ALSO extract years from the title (like "2025" in "Perfect Product in 2025")
                    const titleYearMatches = post.title.match(/\b(20\d{2})\b/g) || [];
                    dateKeywords.push(...titleYearMatches);
                    
                    // Add main post entry with ACTUAL content including date in title
                    const postTitle = post.date ? `${post.title} (${post.date})` : post.title;
                    allResults.push({
                        title: postTitle, // Include date in title for clarity
                        description: post.excerpt || 'Blog post content',
                        icon: '📝',
                        url: `blog.html#${postKey}`,
                        keywords: [
                            post.title.toLowerCase().split(' '),
                            post.excerpt ? post.excerpt.toLowerCase().split(' ') : [],
                            post.category ? [post.category.toLowerCase()] : [],
                            dateKeywords, // Include date keywords
                            ['blog', 'article', 'post'], // Add generic blog keywords
                            post.badges ? post.badges.map(b => b.text.toLowerCase()) : []
                        ].flat().filter(w => w.length > 1)
                    });
                    
                    // Add badges as searchable content (but only if they contain important keywords like "comparison")
                    if (post.badges && Array.isArray(post.badges)) {
                        post.badges.forEach(badge => {
                            if (badge.text && badge.text !== '{{NICHE}}' && 
                                ['comparison', 'review', 'guide', 'tips', 'features'].some(keyword => 
                                    badge.text.toLowerCase().includes(keyword))) {
                                allResults.push({
                                    title: `${post.title} - ${badge.text}`,
                                    description: `${post.title} with focus on ${badge.text.toLowerCase()}`,
                                    icon: '🏷️',
                                    url: `blog.html#${postKey}`,
                                    keywords: [badge.text.toLowerCase(), post.title.toLowerCase().split(' ')].flat()
                                });
                            }
                        });
                    }
                    
                    // CTA content is already included in the main blog post keywords, no need for separate entry
                    
                    // Track unique years for later addition (from both date and title)
                    if (post.date) {
                        const yearMatch = post.date.match(/\b(20\d{2})\b/);
                        if (yearMatch) {
                            addedYears.add(yearMatch[1]);
                        }
                    }
                    
                    // Also track years mentioned in titles
                    const titleYearsList = post.title.match(/\b(20\d{2})\b/g) || [];
                    titleYearsList.forEach(year => addedYears.add(year));
                }
            });
            
            // Add unique year groupings after processing all posts
            addedYears.forEach(year => {
                allResults.push({
                    title: `${year} Articles`,
                    description: `All blog articles published in ${year}`,
                    icon: '📅',
                    url: 'blog.html',
                    keywords: [year, 'blog', 'articles', 'year', 'published']
                });
            });
        }
        
        // Add content from blog hero and CTA banner (use ACTUAL content, not field names)
        if (window.BLOG_HERO) {
            // Add blog hero title
            if (window.BLOG_HERO.title) {
                allResults.push({
                    title: window.BLOG_HERO.title, // Use actual title, not "Blog - title"
                    description: 'Main blog page section',
                    icon: '📰',
                    url: 'blog.html',
                    keywords: window.BLOG_HERO.title.toLowerCase().split(' ').filter(w => w.length > 1).concat(['blog', 'main', 'page'])
                });
            }
            
            // Add blog hero subtitle
            if (window.BLOG_HERO.subtitle) {
                allResults.push({
                    title: 'Expert Reviews & Buying Guides', // User-friendly title
                    description: window.BLOG_HERO.subtitle,
                    icon: '📰',
                    url: 'blog.html',
                    keywords: window.BLOG_HERO.subtitle.toLowerCase().split(' ').filter(w => w.length > 1).concat(['blog', 'expert', 'guide'])
                });
            }
        }
        
        if (window.BLOG_CTA_BANNER && window.BLOG_CTA_BANNER.content) {
            // Add CTA banner title
            if (window.BLOG_CTA_BANNER.content.title) {
                allResults.push({
                    title: window.BLOG_CTA_BANNER.content.title, // Use actual title
                    description: 'Featured call-to-action on blog page',
                    icon: '🎯',
                    url: 'blog.html',
                    keywords: window.BLOG_CTA_BANNER.content.title.toLowerCase().split(' ').filter(w => w.length > 1).concat(['blog', 'featured'])
                });
            }
            
            // Add CTA banner subtitle
            if (window.BLOG_CTA_BANNER.content.subtitle) {
                allResults.push({
                    title: 'Research & Recommendations',
                    description: window.BLOG_CTA_BANNER.content.subtitle,
                    icon: '🎯',
                    url: 'blog.html',
                    keywords: window.BLOG_CTA_BANNER.content.subtitle.toLowerCase().split(' ').filter(w => w.length > 1).concat(['research', 'recommendations'])
                });
            }
            
            // Add CTA button text
            if (window.BLOG_CTA_BANNER.content.button && window.BLOG_CTA_BANNER.content.button.text) {
                allResults.push({
                    title: window.BLOG_CTA_BANNER.content.button.text, // Use actual button text
                    description: 'Navigate to our top-ranked products',
                    icon: '🔗',
                    url: window.BLOG_CTA_BANNER.content.button.link || 'blog.html',
                    keywords: window.BLOG_CTA_BANNER.content.button.text.toLowerCase().split(' ').filter(w => w.length > 1).concat(['top', 'ranked', 'list'])
                });
            }
        }
        
        // Add content from MENU_CONFIG
        if (window.MENU_CONFIG) {
            // Add menu sections
            if (window.MENU_CONFIG.sections && Array.isArray(window.MENU_CONFIG.sections)) {
                window.MENU_CONFIG.sections.forEach(section => {
                    if (section.title) {
                        allResults.push({
                            title: `Menu - ${section.title}`,
                            description: section.description || `Navigation section: ${section.title}`,
                            icon: '📋',
                            url: section.url || 'index.html',
                            keywords: section.title.toLowerCase().split(' ').filter(w => w.length > 1)
                        });
                    }
                    
                    // Add menu items
                    if (section.items && Array.isArray(section.items)) {
                        section.items.forEach(item => {
                            if (item.text) {
                                allResults.push({
                                    title: `Menu - ${item.text}`,
                                    description: item.description || `Menu item: ${item.text}`,
                                    icon: '🔗',
                                    url: item.url || 'index.html',
                                    keywords: [
                                        item.text.toLowerCase().split(' '),
                                        item.description ? item.description.toLowerCase().split(' ') : []
                                    ].flat().filter(w => w.length > 1)
                                });
                            }
                        });
                    }
                });
            }
        }
        
        // Add content from CONTACT_FAQ_CONFIG
        if (window.CONTACT_FAQ_CONFIG) {
            // Add main FAQ section
            allResults.push({
                title: 'Frequently Asked Questions',
                description: 'Find answers to common questions about our products and services',
                icon: '❓',
                url: 'contact.html#faq',
                keywords: ['faq', 'frequently', 'asked', 'questions', 'help', 'answers', 'common', 'support']
            });
            
            // Add FAQ content
            if (window.CONTACT_FAQ_CONFIG.faq && Array.isArray(window.CONTACT_FAQ_CONFIG.faq)) {
                window.CONTACT_FAQ_CONFIG.faq.forEach(faqItem => {
                    if (faqItem.question && faqItem.answer) {
                        allResults.push({
                            title: faqItem.question,
                            description: faqItem.answer.replace(/<[^>]*>/g, ' ').substring(0, 100) + '...',
                            icon: '❓',
                            url: 'contact.html#faq',
                            keywords: [
                                faqItem.question.toLowerCase().split(' '),
                                faqItem.answer.replace(/<[^>]*>/g, ' ').toLowerCase().split(' '),
                                ['faq', 'frequently', 'asked', 'questions'] // Add FAQ keywords to each item
                            ].flat().filter(w => w.length > 1)
                        });
                    }
                });
            }
            
            // Add contact form fields
            if (window.CONTACT_FAQ_CONFIG.form && window.CONTACT_FAQ_CONFIG.form.fields) {
                window.CONTACT_FAQ_CONFIG.form.fields.forEach(field => {
                    if (field.label) {
                        allResults.push({
                            title: field.label,
                            description: field.placeholder || 'Contact form field',
                            icon: '📞',
                            url: 'contact.html',
                            keywords: [
                                field.label.toLowerCase().split(' '),
                                field.placeholder ? field.placeholder.toLowerCase().split(' ') : [],
                                ['contact', 'form']
                            ].flat().filter(w => w.length > 1)
                        });
                    }
                });
            }
        }
        
        // Add content from HOME_CONFIG
        if (window.HOME_CONFIG) {
            // Add hero content - only meaningful content, not technical field names
            if (window.HOME_CONFIG.hero) {
                const hero = window.HOME_CONFIG.hero;
                // Only add specific meaningful fields, not all hero keys
                if (hero.title && hero.title.length > 3) {
                    allResults.push({
                        title: hero.title,
                        description: 'Welcome to our site',
                        icon: '🏠',
                        url: 'home.html',
                        keywords: hero.title.toLowerCase().split(' ').filter(w => w.length > 1).concat(['home', 'welcome'])
                    });
                }
                if (hero.subtitle && hero.subtitle.length > 3) {
                    allResults.push({
                        title: hero.subtitle,
                        description: 'Home page content',
                        icon: '🏠',
                        url: 'home.html',
                        keywords: hero.subtitle.toLowerCase().split(' ').filter(w => w.length > 1).concat(['home'])
                    });
                }
                // Skip other technical fields like 'description', 'content', etc.
            }
            
            // Add sections content - use actual section titles, not "Home - title" format
            if (window.HOME_CONFIG.sections && Array.isArray(window.HOME_CONFIG.sections)) {
                window.HOME_CONFIG.sections.forEach(section => {
                    if (section.title) {
                        allResults.push({
                            title: section.title,
                            description: section.description || section.content || 'Home page section',
                            icon: '📄',
                            url: 'home.html',
                            keywords: [
                                section.title.toLowerCase().split(' '),
                                section.description ? section.description.toLowerCase().split(' ') : [],
                                section.content ? section.content.toLowerCase().split(' ') : [],
                                ['home', 'section']
                            ].flat().filter(w => w.length > 1)
                        });
                    }
                });
            }
        }
        
        // Add content from PRIVACY_CONFIG
        if (window.PRIVACY_CONFIG && window.PRIVACY_CONFIG.sections) {
            window.PRIVACY_CONFIG.sections.forEach(section => {
                if (section.title && section.content) {
                    const contentText = section.content.replace(/<[^>]*>/g, ' ').toLowerCase();
                    allResults.push({
                        title: section.title,
                        description: contentText.substring(0, 100) + '...',
                        icon: '🔒',
                        url: 'privacy.html',
                        keywords: [
                            section.title.toLowerCase().split(' '),
                            contentText.split(' ').filter(w => w.length > 2),
                            ['privacy', 'policy']
                        ].flat().filter(w => w.length > 1)
                    });
                }
            });
        }
        
        // Add content from COOKIES_CONFIG
        if (window.COOKIES_CONFIG && window.COOKIES_CONFIG.sections) {
            window.COOKIES_CONFIG.sections.forEach(section => {
                if (section.title && section.content) {
                    const contentText = section.content.replace(/<[^>]*>/g, ' ').toLowerCase();
                    allResults.push({
                        title: section.title,
                        description: contentText.substring(0, 100) + '...',
                        icon: '🍪',
                        url: 'cookies.html',
                        keywords: [
                            section.title.toLowerCase().split(' '),
                            contentText.split(' ').filter(w => w.length > 2),
                            ['cookies', 'policy', 'tracking', 'consent', 'privacy'] // Add cookies-specific keywords
                        ].flat().filter(w => w.length > 1)
                    });
                }
            });
        }
        
        // Add content from PODCAST_CONFIG
        if (window.PODCAST_PAGE_TITLE || window.PODCAST_HERO || window.PODCAST_CATEGORIES) {
            // Add main podcast page entry
            allResults.push({
                title: 'Podcast',
                description: 'Listen to our podcast episodes with industry experts and insights',
                icon: '🎙️',
                url: 'podcast.html',
                keywords: ['podcast', 'episodes', 'audio', 'listen', 'interviews', 'industry', 'experts']
            });
            
            // Add podcast hero content
            if (window.PODCAST_HERO) {
                if (window.PODCAST_HERO.title) {
                    allResults.push({
                        title: window.PODCAST_HERO.title,
                        description: window.PODCAST_HERO.subtitle || 'Main podcast page section',
                        icon: '🎧',
                        url: 'podcast.html',
                        keywords: window.PODCAST_HERO.title.toLowerCase().split(' ').filter(w => w.length > 1).concat(['podcast', 'hero', 'main'])
                    });
                }
                
                if (window.PODCAST_HERO.subtitle) {
                    allResults.push({
                        title: window.PODCAST_HERO.subtitle,
                        description: 'Main podcast page content',
                        icon: '📻',
                        url: 'podcast.html',
                        keywords: window.PODCAST_HERO.subtitle.toLowerCase().split(' ').filter(w => w.length > 1).concat(['podcast'])
                    });
                }
                
                if (window.PODCAST_HERO.description) {
                    allResults.push({
                        title: 'About Our Podcast',
                        description: window.PODCAST_HERO.description,
                        icon: '📖',
                        url: 'podcast.html',
                        keywords: window.PODCAST_HERO.description.toLowerCase().split(' ').filter(w => w.length > 1).concat(['podcast', 'about'])
                    });
                }
            }
            
            // Add podcast categories and episodes
            if (window.PODCAST_CATEGORIES && Array.isArray(window.PODCAST_CATEGORIES)) {
                window.PODCAST_CATEGORIES.forEach(category => {
                    // Add category entry
                    allResults.push({
                        title: category.title,
                        description: category.description || 'Podcast category',
                        icon: category.icon || '🎤',
                        url: `podcast.html#${category.id}`,
                        keywords: [
                            category.title.toLowerCase().split(' '),
                            category.description ? category.description.toLowerCase().split(' ') : [],
                            ['podcast', 'category', 'episodes']
                        ].flat().filter(w => w.length > 1)
                    });
                    
                    // Add individual episodes
                    if (category.episodes && Array.isArray(category.episodes)) {
                        category.episodes.forEach(episode => {
                            allResults.push({
                                title: episode.title,
                                description: episode.description || `Podcast episode featuring ${episode.guest}`,
                                icon: '🎧',
                                url: `podcast.html#${episode.id}`,
                                keywords: [
                                    episode.title.toLowerCase().split(' '),
                                    episode.guest ? episode.guest.toLowerCase().split(' ') : [],
                                    episode.guestTitle ? episode.guestTitle.toLowerCase().split(' ') : [],
                                    episode.description ? episode.description.toLowerCase().split(' ') : [],
                                    episode.tags ? episode.tags.map(tag => tag.toLowerCase()) : [],
                                    episode.date ? [episode.date.toLowerCase()] : [],
                                    ['podcast', 'episode', 'interview', 'audio']
                                ].flat().filter(w => w.length > 1)
                            });
                            
                            // Add guest-specific entry if guest info exists
                            if (episode.guest && episode.guestTitle) {
                                allResults.push({
                                    title: `${episode.guest} - ${episode.guestTitle}`,
                                    description: `Podcast interview with ${episode.guest}, ${episode.guestTitle}`,
                                    icon: '👤',
                                    url: `podcast.html#${episode.id}`,
                                    keywords: [
                                        episode.guest.toLowerCase().split(' '),
                                        episode.guestTitle.toLowerCase().split(' '),
                                        ['guest', 'interview', 'podcast', 'expert']
                                    ].flat().filter(w => w.length > 1)
                                });
                            }
                            
                            // Add episode tags as searchable content
                            if (episode.tags && Array.isArray(episode.tags)) {
                                episode.tags.forEach(tag => {
                                    allResults.push({
                                        title: `Podcast Topics - ${tag}`,
                                        description: `Episodes about ${tag.toLowerCase()}`,
                                        icon: '🏷️',
                                        url: `podcast.html#${episode.id}`,
                                        keywords: [tag.toLowerCase(), 'podcast', 'topic', 'episodes']
                                    });
                                });
                            }
                        });
                    }
                });
            }
        }
        
        // Add content from STREAMING_CONFIG
        if (window.STREAMING_PAGE_TITLE || window.STREAMING_HERO || window.STREAMING_CATEGORIES || window.STREAMING_PLATFORMS) {
            // Add main streaming page entry
            allResults.push({
                title: 'Live Streams & Videos',
                description: 'Watch live streams, gaming content, and exclusive video series across multiple platforms',
                icon: '🎬',
                url: 'streaming.html',
                keywords: ['streaming', 'live', 'videos', 'gaming', 'content', 'watch', 'streams', 'broadcast']
            });
            
            // Add streaming hero content
            if (window.STREAMING_HERO) {
                if (window.STREAMING_HERO.subtitle) {
                    allResults.push({
                        title: 'Streaming Platform',
                        description: window.STREAMING_HERO.subtitle,
                        icon: '📺',
                        url: 'streaming.html',
                        keywords: window.STREAMING_HERO.subtitle.toLowerCase().split(' ').filter(w => w.length > 1).concat(['streaming', 'platform'])
                    });
                }
                
                if (window.STREAMING_HERO.description) {
                    allResults.push({
                        title: 'About Our Streaming',
                        description: window.STREAMING_HERO.description,
                        icon: '🎥',
                        url: 'streaming.html',
                        keywords: window.STREAMING_HERO.description.toLowerCase().split(' ').filter(w => w.length > 1).concat(['streaming', 'about'])
                    });
                }
            }
            
            // Add streaming platforms
            if (window.STREAMING_PLATFORMS && Array.isArray(window.STREAMING_PLATFORMS)) {
                window.STREAMING_PLATFORMS.forEach(platform => {
                    allResults.push({
                        title: `Watch on ${platform.name}`,
                        description: platform.description || `Stream on ${platform.name}`,
                        icon: platform.icon || '🌐',
                        url: platform.url,
                        keywords: [
                            platform.name.toLowerCase(),
                            platform.description ? platform.description.toLowerCase().split(' ') : [],
                            ['streaming', 'platform', 'watch', 'live']
                        ].flat().filter(w => w.length > 1)
                    });
                });
            }
            
            // Add streaming categories and streams
            if (window.STREAMING_CATEGORIES && Array.isArray(window.STREAMING_CATEGORIES)) {
                window.STREAMING_CATEGORIES.forEach(category => {
                    // Add category entry
                    allResults.push({
                        title: `Streams - ${category.title}`,
                        description: category.description || `Streaming category: ${category.title}`,
                        icon: category.icon || '🎮',
                        url: `streaming.html#${category.id}`,
                        keywords: [
                            category.title.toLowerCase().split(' '),
                            category.description ? category.description.toLowerCase().split(' ') : [],
                            ['streaming', 'category', 'videos', 'content']
                        ].flat().filter(w => w.length > 1)
                    });
                    
                    // Add individual streams
                    if (category.streams && Array.isArray(category.streams)) {
                        category.streams.forEach(stream => {
                            allResults.push({
                                title: stream.title,
                                description: stream.description || `Stream featuring ${stream.streamer?.name || 'content creator'}`,
                                icon: stream.status === 'live' ? '🔴' : stream.status === 'scheduled' ? '📅' : '🎥',
                                url: stream.platformUrl || `streaming.html#${stream.id}`,
                                keywords: [
                                    stream.title.toLowerCase().split(' '),
                                    stream.streamer?.name ? stream.streamer.name.toLowerCase().split(' ') : [],
                                    stream.description ? stream.description.toLowerCase().split(' ') : [],
                                    stream.tags ? stream.tags.map(tag => tag.toLowerCase()) : [],
                                    stream.platform ? [stream.platform.toLowerCase()] : [],
                                    stream.status ? [stream.status.toLowerCase()] : [],
                                    ['streaming', 'video', 'content', 'watch']
                                ].flat().filter(w => w.length > 1)
                            });
                            
                            // Add streamer-specific entry if streamer info exists
                            if (stream.streamer && stream.streamer.name) {
                                allResults.push({
                                    title: `${stream.streamer.name} - Content Creator`,
                                    description: `Watch streams by ${stream.streamer.name}`,
                                    icon: '👤',
                                    url: stream.platformUrl || `streaming.html#${stream.id}`,
                                    keywords: [
                                        stream.streamer.name.toLowerCase().split(' '),
                                        ['streamer', 'creator', 'content', 'streaming']
                                    ].flat().filter(w => w.length > 1)
                                });
                            }
                            
                            // Add stream tags as searchable content
                            if (stream.tags && Array.isArray(stream.tags)) {
                                stream.tags.forEach(tag => {
                                    allResults.push({
                                        title: tag,
                                        description: `Streams about ${tag.toLowerCase()}`,
                                        icon: '🏷️',
                                        url: `streaming.html#${stream.id}`,
                                        keywords: [tag.toLowerCase(), 'streaming', 'topic', 'content', 'videos']
                                    });
                                });
                            }
                        });
                    }
                });
            }
        }
        
        // Add content from BRAND_CONFIG
        if (window.BRAND_CONFIG) {
            Object.keys(window.BRAND_CONFIG).forEach(key => {
                const value = window.BRAND_CONFIG[key];
                if (typeof value === 'string' && value.length > 3) {
                    allResults.push({
                        title: `Brand - ${key}`,
                        description: `Brand setting: ${value}`,
                        icon: '🏷️',
                        url: 'index.html',
                        keywords: value.toLowerCase().split(' ').filter(w => w.length > 1)
                    });
                }
            });
        }
        
        // Add content from comparison section
        if (window.SECTION_TITLES && window.SECTION_TITLES.comparisonSection) {
            const comp = window.SECTION_TITLES.comparisonSection;
            
            // Add main comparison section
            allResults.push({
                title: comp.title || 'Product Comparison',
                description: comp.subtitle || 'Compare products side by side',
                icon: '⚖️',
                url: 'index.html#comparison',
                keywords: ['comparison', 'compare', 'products', 'features', 'side', 'by', 'side', 'versus', 'vs']
            });
            
            // Add comparison functionality keywords
            allResults.push({
                title: 'Compare Products',
                description: 'Select and compare multiple products to find the best option for your needs',
                icon: '🔍',
                url: 'index.html#comparison',
                keywords: ['compare', 'comparison', 'select', 'multiple', 'products', 'best', 'option', 'choice']
            });
            
            // Add comparison results info
            if (comp.resultsTitle) {
                allResults.push({
                    title: comp.resultsTitle,
                    description: 'View detailed comparison results between selected products',
                    icon: '📊',
                    url: 'index.html#comparison',
                    keywords: ['results', 'comparison', 'detailed', 'between', 'products']
                });
            }
        }
        
        // Add Editor's Choice content
        if (window.EDITORS_CHOICE_CONFIG && window.EDITORS_CHOICE_CONFIG.manualOverride && window.EDITORS_CHOICE_CONFIG.useManualOverride) {
            const product = window.EDITORS_CHOICE_CONFIG.manualOverride;
            allResults.push({
                title: `Editor's Choice - ${product.name}`,
                description: product.description || "Our #1 recommended choice",
                icon: '👑',
                url: 'index.html#top-pick',
                keywords: [
                    product.name.toLowerCase().split(' '),
                    'editor', 'choice', 'recommended', 'top', 'pick', 'best', 'casino', 'crypto',
                    product.description ? product.description.toLowerCase().split(' ').filter(w => w.length > 2) : []
                ].flat().filter(w => w && w.length > 0)
            });
        }
        
        // Add Streaming content
        if (window.STREAMING_PLATFORMS && Array.isArray(window.STREAMING_PLATFORMS)) {
            window.STREAMING_PLATFORMS.forEach(platform => {
                if (platform.name) {
                    allResults.push({
                        title: `Streaming - ${platform.name}`,
                        description: platform.description || `Watch on ${platform.name}`,
                        icon: '📺',
                        url: 'streaming.html',
                        keywords: [
                            platform.name.toLowerCase().split(' '),
                            platform.description ? platform.description.toLowerCase().split(' ').filter(w => w.length > 2) : [],
                            'streaming', 'platform', 'watch', 'live', 'casino', 'crypto'
                        ].flat().filter(w => w && w.length > 0)
                    });
                }
            });
        }
        
        // Add Streaming Categories
        if (window.TOP_STREAMING_CATEGORIES && Array.isArray(window.TOP_STREAMING_CATEGORIES)) {
            window.TOP_STREAMING_CATEGORIES.forEach(category => {
                if (category.name) {
                    allResults.push({
                        title: `Streaming - ${category.name}`,
                        description: category.description || `${category.name} streaming content`,
                        icon: '📂',
                        url: 'streaming.html',
                        keywords: [
                            category.name.toLowerCase().split(' '),
                            category.description ? category.description.toLowerCase().split(' ').filter(w => w.length > 2) : [],
                            category.tags ? category.tags.map(tag => tag.toLowerCase()) : [],
                            'category', 'streaming', 'live', 'casino', 'crypto'
                        ].flat().filter(w => w && w.length > 0)
                    });
                }
            });
        }
        
        // Add Podcast content
        if (window.PODCAST_CATEGORIES && Array.isArray(window.PODCAST_CATEGORIES)) {
            window.PODCAST_CATEGORIES.forEach(category => {
                if (category.name) {
                    allResults.push({
                        title: `Podcast - ${category.name}`,
                        description: category.description || `${category.name} podcasts`,
                        icon: '🎧',
                        url: 'podcast.html',
                        keywords: [
                            category.name.toLowerCase().split(' '),
                            category.description ? category.description.toLowerCase().split(' ').filter(w => w.length > 2) : [],
                            'podcast', 'category', 'audio', 'episode', 'casino', 'crypto'
                        ].flat().filter(w => w && w.length > 0)
                    });
                    
                    // Add individual episodes
                    if (category.episodes && Array.isArray(category.episodes)) {
                        category.episodes.forEach(episode => {
                            if (episode.title) {
                                allResults.push({
                                    title: episode.title,
                                    description: episode.description || `${category.name} podcast episode`,
                                    icon: '🎤',
                                    url: 'podcast.html',
                                    keywords: [
                                        episode.title.toLowerCase().split(' '),
                                        episode.description ? episode.description.toLowerCase().split(' ').filter(w => w.length > 2) : [],
                                        category.name.toLowerCase().split(' '),
                                        'podcast', 'episode', 'audio', 'listen', 'casino', 'crypto'
                                    ].flat().filter(w => w && w.length > 0)
                                });
                            }
                        });
                    }
                }
            });
        }
        
        // Add Blog Posts from BLOG_POSTS config
        if (window.BLOG_POSTS && Array.isArray(window.BLOG_POSTS)) {
            window.BLOG_POSTS.forEach(post => {
                if (post.title) {
                    allResults.push({
                        title: post.title,
                        description: post.excerpt || post.description || 'Blog post',
                        icon: '📝',
                        url: post.link || 'blog.html',
                        keywords: [
                            post.title.toLowerCase().split(' '),
                            post.excerpt ? post.excerpt.toLowerCase().split(' ').filter(w => w.length > 2) : [],
                            post.category ? post.category.toLowerCase().split(' ') : [],
                            'blog', 'post', 'article', 'guide', 'casino', 'crypto', 'bonus'
                        ].flat().filter(w => w && w.length > 0)
                    });
                }
            });
        }
        
        // Add individual blog post pages content
        const blogPostConfigs = ['BLOGPOST1_CONFIG', 'BLOGPOST2_CONFIG', 'BLOGPOST3_CONFIG'];
        blogPostConfigs.forEach((configName, index) => {
            if (window[configName]) {
                const config = window[configName];
                const pageNum = index + 1;
                
                if (config.title) {
                    allResults.push({
                        title: config.title,
                        description: config.subtitle || config.description || 'Detailed blog post guide',
                        icon: '📄',
                        url: `blogpost${pageNum}.html`,
                        keywords: [
                            config.title.toLowerCase().split(' '),
                            config.subtitle ? config.subtitle.toLowerCase().split(' ').filter(w => w.length > 2) : [],
                            config.description ? config.description.toLowerCase().split(' ').filter(w => w.length > 2) : [],
                            'blog', 'post', 'guide', 'detailed', 'article', 'casino', 'crypto', 'security', 'bonus'
                        ].flat().filter(w => w && w.length > 0)
                    });
                }
                
                // Add blog post sections
                if (config.sections && Array.isArray(config.sections)) {
                    config.sections.forEach(section => {
                        if (section.title && section.content) {
                            allResults.push({
                                title: `${config.title} - ${section.title}`,
                                description: section.content.substring(0, 100) + '...',
                                icon: '📝',
                                url: `blogpost${pageNum}.html`,
                                keywords: [
                                    section.title.toLowerCase().split(' '),
                                    section.content.toLowerCase().split(' ').filter(w => w.length > 2).slice(0, 20),
                                    config.title.toLowerCase().split(' '),
                                    'guide', 'section', 'information'
                                ].flat().filter(w => w && w.length > 0)
                            });
                        }
                    });
                }
            }
        });
        
        // Add Contact FAQ content
        if (window.CONTACT_FAQ_CONFIG && window.CONTACT_FAQ_CONFIG.faq) {
            window.CONTACT_FAQ_CONFIG.faq.forEach(faqItem => {
                if (faqItem.question && faqItem.answer) {
                    allResults.push({
                        title: faqItem.question,
                        description: faqItem.answer.substring(0, 100) + '...',
                        icon: '❓',
                        url: 'contact.html#faq',
                        keywords: [
                            faqItem.question.toLowerCase().split(' '),
                            faqItem.answer.toLowerCase().split(' ').filter(w => w.length > 2).slice(0, 15),
                            'faq', 'question', 'answer', 'help', 'support', 'contact'
                        ].flat().filter(w => w && w.length > 0)
                    });
                }
            });
        }
        
        // Add Popup content
        if (window.POPUP_CONFIG) {
            const popup = window.POPUP_CONFIG;
            
            if (popup.title) {
                allResults.push({
                    title: popup.title,
                    description: popup.description || 'Special offer popup',
                    icon: '🎁',
                    url: popup.cta?.link || 'index.html',
                    keywords: [
                        popup.title.toLowerCase().split(' '),
                        popup.description ? popup.description.toLowerCase().split(' ').filter(w => w.length > 2) : [],
                        'popup', 'offer', 'special', 'promotion', 'bonus', 'casino'
                    ].flat().filter(w => w && w.length > 0)
                });
            }
            
            if (popup.cta && popup.cta.text) {
                allResults.push({
                    title: popup.cta.text,
                    description: 'Special promotional offer',
                    icon: '🚀',
                    url: popup.cta.link || 'index.html',
                    keywords: [
                        popup.cta.text.toLowerCase().split(' ').filter(w => w.length > 1),
                        'cta', 'offer', 'promotion', 'bonus', 'casino'
                    ].flat().filter(w => w && w.length > 0)
                });
            }
        }
        
        return allResults;
    }

    /**
     * Helper function to extract searchable content from any object (hide technical terms)
     */
    extractFromAnyObject(obj, configName, allResults, prefix = '') {
        // Map technical config names to user-friendly names
        const friendlyConfigNames = {
            'MENU_CONFIG': 'Navigation',
            'CONTACT_FAQ_CONFIG': 'Contact',
            'HOME_CONFIG': 'Home',
            'PRIVACY_CONFIG': 'Privacy',
            'BRAND_CONFIG': 'Brand',
            'DISCLAIMER_CONFIG': 'Legal',
            'COMPARISON_CONFIG': 'Comparison',
            'THEME_CONFIG': 'Theme',
            'NEWSLETTER_CONFIG': 'Newsletter',
            'FOOTER_CONFIG': 'Footer'
        };
        
        const displayConfigName = friendlyConfigNames[configName] || configName.replace('_CONFIG', '');
        
        Object.keys(obj).forEach(key => {
            const value = obj[key];
            
            if (typeof value === 'string' && value.length > 3) {
                // Skip technical fields and paths
                if (!key.toLowerCase().includes('url') && 
                    !key.toLowerCase().includes('email') && 
                    !key.toLowerCase().includes('image') && 
                    !key.toLowerCase().includes('logo') &&
                    !key.toLowerCase().includes('config') &&
                    !key.toLowerCase().includes('api') &&
                    !value.startsWith('http') && 
                    !value.startsWith('./assets')) {
                    
                    allResults.push({
                        title: `${displayConfigName} - Content`,
                        description: value,
                        icon: '🔧',
                        url: this.getUrlForConfig(configName),
                        keywords: value.toLowerCase().split(' ').filter(w => w.length > 1)
                    });
                }
            } else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                // Recursively extract from nested objects
                this.extractFromAnyObject(value, configName, allResults, prefix);
            } else if (Array.isArray(value)) {
                // Extract from arrays
                value.forEach((item, index) => {
                    if (typeof item === 'string' && item.length > 3) {
                        allResults.push({
                            title: `${displayConfigName} - Content`,
                            description: item,
                            icon: '📋',
                            url: this.getUrlForConfig(configName),
                            keywords: item.toLowerCase().split(' ').filter(w => w.length > 1)
                        });
                    } else if (typeof item === 'object' && item !== null) {
                        this.extractFromAnyObject(item, configName, allResults, prefix);
                    }
                });
            }
        });
    }
    
    /**
     * Get appropriate URL for config type
     */
    getUrlForConfig(configName) {
        const urlMap = {
            'MENU_CONFIG': 'home.html',
            'CONTACT_FAQ_CONFIG': 'contact.html',
            'HOME_CONFIG': 'home.html',
            'PRIVACY_CONFIG': 'privacy.html',
            'COOKIES_CONFIG': 'cookies.html',
            'BRAND_CONFIG': 'home.html',
            'DISCLAIMER_CONFIG': 'disclaimer.html',
            'BLOG_CONFIG': 'blog.html'
        };
        return urlMap[configName] || 'index.html';
    }

    /**
     * Generate search results based on query with intelligent matching
     * Reads from actual config files for dynamic content
     */
    generateSearchResults(query) {
        // Use the unified search system
        if (window.performSearch) {
            const results = window.performSearch(query);
            console.log(`🔍 Search: Found ${results.length} results for "${query}"`);
            return results;
        } else {
            console.error('🔍 Search: Unified search database not loaded');
            return [];
        }
    }
    
    /**
     * Perform search when Enter is pressed
     */
    performSearch(query) {
        if (!query || query.length < 2) return;
        
        // Track search event
        if (typeof trackEvent === 'function') {
            trackEvent('Search', 'perform', query);
        }
        
        // Close search
        this.closeSearch();
        
        // Implement your search logic here
        // For example:
        // - Redirect to search results page
        // - Filter products on current page
        // - Show search results modal
        
        // Simple implementation: scroll to products section and highlight matching products
        const productsSection = document.getElementById('top10');
        if (productsSection) {
            scrollToElement(productsSection);
            this.highlightSearchResults(query);
        }
        
        log('Search performed:', query);
    }
    
    /**
     * Highlight search results (simple implementation)
     */
    highlightSearchResults(query) {
        const productCards = document.querySelectorAll('.product-card');
        const searchTerms = query.toLowerCase().split(' ');
        
        productCards.forEach(card => {
            const title = card.querySelector('.product-title')?.textContent.toLowerCase() || '';
            const description = card.querySelector('.product-description')?.textContent.toLowerCase() || '';
            const features = card.querySelector('.product-features')?.textContent.toLowerCase() || '';
            
            const content = `${title} ${description} ${features}`;
            const hasMatch = searchTerms.some(term => content.includes(term));
            
            if (hasMatch) {
                card.style.order = '-1'; // Move matching products to top
                card.classList.add('search-highlight');
                
                // Remove highlight after 3 seconds
                setTimeout(() => {
                    card.classList.remove('search-highlight');
                }, 3000);
            }
        });
    }
}

// ===========================================
// SCROLL FUNCTIONALITY
// ===========================================

class ScrollManager {
    constructor() {
        this.backToTopButton = document.querySelector(CONFIG.selectors.backToTop);
        this.floatingCTA = document.querySelector(CONFIG.selectors.floatingCTA);
        this.reviewButtons = document.querySelectorAll(CONFIG.selectors.reviewButtons);
        
        this.init();
    }
    
    init() {
        this.setupBackToTop();
        this.setupFloatingCTA();
        this.setupReviewButtons();
        this.setupScrollVisibility();
    }
    
    /**
     * Setup back to top button
     */
    setupBackToTop() {
        if (!this.backToTopButton) return;
        
        this.backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // Track back to top click
            if (CONFIG.enableTracking) {
                trackEvent('scroll', 'back_to_top', 'click');
            }
            
            log('Back to top clicked');
        });
        
        log('Back to top button initialized');
    }
    
    /**
     * Setup floating CTA
     */
    setupFloatingCTA() {
        if (!this.floatingCTA) return;
        
        this.floatingCTA.addEventListener('click', () => {
            if (CONFIG.enableTracking) {
                trackEvent('cta', 'floating_cta', 'click');
            }
            log('Floating CTA clicked');
        });
        
        log('Floating CTA initialized');
    }
    
    /**
     * Setup review button functionality using event delegation
     */
    setupReviewButtons() {
        // Prevent multiple event listeners
        if (this.reviewButtonsSetup) {
            log('Review buttons already setup, skipping');
            return;
        }
        
        // Use event delegation to handle both existing and dynamically created review buttons
        document.addEventListener('click', (e) => {
            // Check if clicked element is a review button
            if (e.target.classList.contains('review-btn') || e.target.closest('.review-btn')) {
                const button = e.target.classList.contains('review-btn') ? e.target : e.target.closest('.review-btn');
                e.preventDefault();
                
                const targetId = button.getAttribute('data-target');
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // Use the same scrollToElement function as other navigation
                    scrollToElement(targetElement, CONFIG.scrollOffset);
                    
                    // Apply consistent expand animation for both grid and list view
                    targetElement.classList.add('expand-highlight-animation');
                    setTimeout(() => {
                        targetElement.classList.remove('expand-highlight-animation');
                    }, 2000);
                    
                    console.log('📍 Scrolled to review:', targetId, '- Applied expand animation');
                }
            }
        });
        
        this.reviewButtonsSetup = true;
        log('Review buttons setup complete with event delegation');
    }
    
    /**
     * Setup scroll-based visibility for floating elements
     */
    setupScrollVisibility() {
        const handleScroll = throttle(() => {
            const scrolled = getScrollPosition() > CONFIG.scrollThreshold;
            
            // Show/hide back to top button
            if (this.backToTopButton) {
                this.backToTopButton.classList.toggle('visible', scrolled);
            }
            
            // Show/hide floating CTA - only show from reviews section and below
            if (this.floatingCTA) {
                const reviewsSection = document.querySelector('#reviews');
                
                if (reviewsSection) {
                    const reviewsTop = reviewsSection.offsetTop;
                    const currentScroll = getScrollPosition();
                    
                    // Show floating CTA only when at or past the reviews section
                    const showFloatingCTA = currentScroll >= reviewsTop;
                    
                    this.floatingCTA.classList.toggle('visible', showFloatingCTA);
                }
            }
        }, 10);
        
        window.addEventListener('scroll', handleScroll);
        log('Scroll visibility setup completed');
    }
}

// ===========================================
// PRODUCT FILTERING AND SORTING
// ===========================================

class ProductManager {
    constructor() {
        this.productsGrid = document.getElementById('productsGrid');
        this.filterButtons = document.querySelectorAll(CONFIG.selectors.filterButtons);
        this.sortSelect = document.querySelector(CONFIG.selectors.sortSelect);
        this.products = document.querySelectorAll(CONFIG.selectors.productCards);
        
        this.init();
    }
    
    init() {
        this.setupViewToggle();
        this.setupSorting();
        this.setupResizeListener();
    }
    
    /**
     * Setup view toggle (grid/list)
     */
    setupViewToggle() {
        this.filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                this.filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Toggle view
                const view = button.getAttribute('data-view');
                if (this.productsGrid) {
                    this.productsGrid.classList.toggle('list-view', view === 'list');
                    
                    // Activate enhanced list view if switching to list
                    if (view === 'list' && window.enhancedProductManager) {
                        console.log('🔄 Activating enhanced list view...');
                        window.enhancedProductManager.activateListView();
                    } else if (view === 'grid' && window.enhancedProductManager) {
                        console.log('🔄 Activating enhanced grid view...');
                        window.enhancedProductManager.activateGridView();
                    }
                    
                    // Update logo scaling for the new view (with a small delay to let DOM update)
                    setTimeout(() => {
                        this.updateLogoScaling(view);
                    }, 100);
                }
                
                // Track view change
                if (CONFIG.enableTracking) {
                    trackEvent('filter', 'view_toggle', view);
                }
                
                log(`View changed to: ${view}`);
            });
        });
        
        log('View toggle initialized');
    }
    
    /**
     * Update logo scaling for all product cards based on current view
     */
    updateLogoScaling(view) {
        if (!this.productsGrid) return;
        
        // Detect if we're on tablet (767px - 1023px)
        const isTablet = window.innerWidth >= 767 && window.innerWidth <= 1023;
        
        const productCards = this.productsGrid.querySelectorAll('.product-card');
        productCards.forEach(card => {
            // Get product data to find the correct scale
            const productId = card.id.replace('product-', '');
            const productKey = `product${productId}`;
            const product = window.PRODUCTS_CONFIG?.[productKey];
            
            if (!product || !product.logoScale) return;
            
            // Get the appropriate scale for the current view and device
            let scale;
            if (isTablet && product.logoScale.tablet) {
                // Use tablet-specific scaling
                scale = view === 'list' ? 
                    (product.logoScale.tablet.list || 1.0) : 
                    (product.logoScale.tablet.grid || 1.0);
            } else {
                // Use desktop/mobile scaling
                scale = view === 'list' ? 
                    (product.logoScale.list || 1.0) : 
                    (product.logoScale.grid || 1.0);
            }
            
            // Update both grid and list view logo elements if they exist
            const gridLogo = card.querySelector('.product-logo-image');
            const listLogo = card.querySelector('.list-view-image img');
            
            // Also try alternative selectors for list view
            const listViewCard = card.querySelector('.list-view-card');
            const listViewImage = card.querySelector('.list-view-image');
            const allImages = card.querySelectorAll('img');
            
            console.log(`🔍 Product ${productId}: gridLogo found: ${!!gridLogo}, listLogo found: ${!!listLogo}`);
            console.log(`   List view card found: ${!!listViewCard}, list view image container: ${!!listViewImage}`);
            console.log(`   Total images in card: ${allImages.length}`);
            
            if (gridLogo) console.log(`   Grid logo class: ${gridLogo.className}, src: ${gridLogo.src}`);
            if (listLogo) console.log(`   List logo class: ${listLogo.className}, src: ${listLogo.src}`);
            
            // Log all images for debugging
            allImages.forEach((img, index) => {
                console.log(`   Image ${index + 1}: class="${img.className}", src="${img.src}", parent="${img.parentElement?.className}"`);
            });
            
            [gridLogo, listLogo].forEach((logoElement, index) => {
                if (!logoElement) {
                    const elementType = index === 0 ? 'grid' : 'list';
                    console.log(`⚠️ ${elementType} logo element not found for product ${productId}`);
                    return;
                }
                
                const elementType = index === 0 ? 'grid' : 'list';
                console.log(`🔍 Applying scale ${scale} to ${elementType} logo for product ${productId}`);
                
                // Update the CSS custom property
                logoElement.style.setProperty('--logo-scale-current', scale);
                
                // For list view images, we need to override the inline transform directly
                // because the enhanced-product-config.js creates them with inline styles
                const isListViewImage = logoElement.closest('.list-view-image');
                
                if (isListViewImage) {
                    console.log(`🎯 List view image found for product ${productId}, applying scale ${scale}`);
                    console.log(`   Current transform: ${logoElement.style.transform}`);
                    console.log(`   Current CSS scale var: ${logoElement.style.getPropertyValue('--logo-scale-current')}`);
                    
                    // Apply positioning for list view (override inline styles)
                    if (product.logoPositioning?.list) {
                        const left = product.logoPositioning.list.left || '0px';
                        const top = product.logoPositioning.list.top || '0px';
                        logoElement.style.transform = `scale(${scale}) translate(${left}, ${top})`;
                        console.log(`   Applied transform with positioning: scale(${scale}) translate(${left}, ${top})`);
                    } else {
                        logoElement.style.transform = `scale(${scale})`;
                        console.log(`   Applied transform: scale(${scale})`);
                    }
                    
                    // Force the CSS custom property update with !important
                    logoElement.style.setProperty('--logo-scale-current', scale, 'important');
                    console.log(`   Updated CSS variable --logo-scale-current to ${scale} with !important`);
                    
                    // Also update object positioning for list view
                    if (product.imagePositioning?.list) {
                        logoElement.style.objectPosition = product.imagePositioning.list.objectPosition || 'center';
                        logoElement.style.objectFit = product.imagePositioning.list.objectFit || 'cover';
                    }
                    
                    console.log(`   Final transform after update: ${logoElement.style.transform}`);
                    console.log(`   Final CSS scale var after update: ${logoElement.style.getPropertyValue('--logo-scale-current')}`);
                } else {
                    // Grid view - apply positioning for the current view
                    if (product.logoPositioning) {
                        const positioning = view === 'list' ? 
                            product.logoPositioning.list : 
                            product.logoPositioning.grid;
                        
                        if (positioning) {
                            const left = positioning.left || '0px';
                            const top = positioning.top || '0px';
                            logoElement.style.transform = `scale(${scale}) translate(${left}, ${top})`;
                        } else {
                            logoElement.style.transform = `scale(${scale})`;
                        }
                    } else {
                        logoElement.style.transform = `scale(${scale})`;
                    }
                }
                
                logoElement.style.position = 'relative';
            });
        });
        
        const deviceType = isTablet ? 'tablet' : (window.innerWidth <= 768 ? 'mobile' : 'desktop');
        log(`🎯 Logo scaling updated for ${view} view on ${deviceType} (${window.innerWidth}px)`);
    }
    
    /**
     * Setup resize listener to handle device type changes
     */
    setupResizeListener() {
        let resizeTimeout;
        window.addEventListener('resize', () => {
            // Debounce resize events
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                // Get current view (grid or list)
                const currentView = this.productsGrid?.classList.contains('list-view') ? 'list' : 'grid';
                // Re-apply logo scaling for new device type
                this.updateLogoScaling(currentView);
            }, 250);
        });
    }
    
    /**
     * Setup sorting functionality
     */
    setupSorting() {
        if (!this.sortSelect) return;
        
        // Populate sort options from config
        this.populateSortOptions();
        
        this.sortSelect.addEventListener('change', (e) => {
            const sortBy = e.target.value;
            this.sortProducts(sortBy);
            
            // Track sort change
            if (CONFIG.enableTracking) {
                trackEvent('filter', 'sort_change', sortBy);
            }
            
            log(`Products sorted by: ${sortBy}`);
        });
        
        log('Sorting functionality initialized');
    }
    
    /**
     * Populate sort options from config
     */
    populateSortOptions() {
        if (!window.SECTION_TITLES?.sortOptions) return;
        
        // Clear existing options
        this.sortSelect.innerHTML = '';
        
        // Get current template type from TEMPLATE_TYPE constant
        const templateType = window.TEMPLATE_TYPE || 'physical_products';
        
        // Get field labels for current template type
        const fieldLabels = window.SECTION_TITLES.sortOptions.fieldLabels[templateType] || 
                           window.SECTION_TITLES.sortOptions.fieldLabels.physical_products;
        
        // Add enabled sort options
        window.SECTION_TITLES.sortOptions.enabled.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option.value;
            
            // Replace placeholders with actual field names
            let label = option.label;
            label = label.replace('{{PRIMARY_FIELD}}', fieldLabels.primary);
            label = label.replace('{{SECONDARY_FIELD}}', fieldLabels.secondary);
            
            optionElement.textContent = label;
            this.sortSelect.appendChild(optionElement);
        });
        
        log('Sort options populated from config');
        log(`Template type detected: ${templateType}`);
        log(`Field labels:`, fieldLabels);
    }
    
    /**
     * Sort products based on selected criteria
     */
    sortProducts(sortBy) {
        const productsArray = Array.from(this.products);
        
        console.log(`\n=== Sorting by: ${sortBy} ===`);
        
        // Log values for debugging
        if (sortBy === 'primary' || sortBy === 'secondary') {
            productsArray.forEach((product, index) => {
                const productName = product.querySelector('.product-name')?.textContent || `Product ${index + 1}`;
                const primaryValue = this.getPrimaryFieldValue(product);
                const secondaryValue = this.getSecondaryFieldValue(product);
                console.log(`${productName}: Primary=${primaryValue}, Secondary=${secondaryValue}`);
            });
        }
        
        productsArray.sort((a, b) => {
            let result = 0;
            switch (sortBy) {
                case 'rank':
                    result = parseInt(a.dataset.rank) - parseInt(b.dataset.rank);
                    break;
                case 'primary':
                    result = this.getPrimaryFieldValue(b) - this.getPrimaryFieldValue(a); // Higher values first
                    break;
                case 'secondary':
                    result = this.getSecondaryFieldValue(b) - this.getSecondaryFieldValue(a); // Higher values first
                    break;
                case 'rating':
                    result = this.getRating(b) - this.getRating(a); // Higher ratings first
                    break;
                default:
                    result = 0;
            }
            return result;
        });
        
        // Re-append sorted products
        productsArray.forEach(product => {
            this.productsGrid.appendChild(product);
        });
        
        // Add animation class
        this.productsGrid.style.opacity = '0.5';
        setTimeout(() => {
            this.productsGrid.style.opacity = '1';
        }, 300);
        
        console.log('Sorting complete\n');
    }
    
    /**
     * Get primary field value (price, bonus, etc.)
     */
    getPrimaryFieldValue(productCard) {
        // Try multiple selectors for different templates
        const primarySelectors = [
            '.primary-value',           // Template renderer primary field
            '.primary-value-large',     // Detailed review primary field
            '.current-price',           // Legacy price field
            '.price-value',             // Alternative price field
            '.bonus-amount'             // Alternative bonus field
        ];
        
        for (const selector of primarySelectors) {
            const element = productCard.querySelector(selector);
            if (element) {
                const text = element.textContent;
                const value = this.extractSortableValue(text);
                console.log(`Primary field found with selector "${selector}": "${text}" → ${value}`);
                return value;
            }
        }
        console.log('No primary field found in product card:', productCard);
        return 0;
    }
    
    /**
     * Get secondary field value (original price, welcome package, etc.)
     */
    getSecondaryFieldValue(productCard) {
        // Try multiple selectors for different templates
        const secondarySelectors = [
            '.secondary-value',                    // Template renderer secondary field
            '.secondary-value-crossthrough',       // Template renderer secondary field with crossthrough
            '.secondary-value-large',              // Detailed review secondary field
            '.secondary-value-large-crossthrough', // Detailed review secondary field with crossthrough
            '.original-price',                     // Legacy original price field
            '.secondary-price',                    // Alternative secondary field
            '.welcome-package-value',              // Alternative casino field
            '.package-value'                       // Alternative package field
        ];
        
        for (const selector of secondarySelectors) {
            const element = productCard.querySelector(selector);
            if (element) {
                const text = element.textContent;
                const value = this.extractSortableValue(text);
                console.log(`Secondary field found with selector "${selector}": "${text}" → ${value}`);
                return value;
            }
        }
        console.log('No secondary field found in product card:', productCard);
        return 0;
    }
    
    /**
     * Extract sortable numeric value from text (handles bonuses, prices, etc.)
     */
    extractSortableValue(text) {
        // Handle different value formats
        if (!text || text === 'N/A' || text === '') return 0;
        
        // Extract all numbers from the text
        const numbers = text.match(/\d+(\.\d+)?/g);
        if (!numbers || numbers.length === 0) return 0;
        
        // For casino bonuses and similar, use the largest number as primary sort value
        // e.g., "$1000 Bonus + 200 Free Spins" → use 1000
        // e.g., "100% Match + 50 Spins" → use 100
        const numericValues = numbers.map(num => parseFloat(num));
        const primaryValue = Math.max(...numericValues);
        
        // Bonus multipliers for different value types
        let multiplier = 1;
        
        // Check for percentage bonuses (often more valuable)
        if (text.includes('%')) {
            // Percentage bonuses get slight boost for sorting
            multiplier *= 1.1;
        }
        
        // Check for special keywords that indicate higher value
        const highValueKeywords = ['welcome', 'bonus', 'match', 'deposit'];
        const hasHighValueKeyword = highValueKeywords.some(keyword => 
            text.toLowerCase().includes(keyword)
        );
        
        if (hasHighValueKeyword) {
            multiplier *= 1.05;
        }
        
        return primaryValue * multiplier;
    }
    
    /**
     * Get rating from product card
     */
    getRating(productCard) {
        const ratingElement = productCard.querySelector('.rating-score');
        if (ratingElement) {
            return parseFloat(ratingElement.textContent) || 0;
        }
        return 0;
    }
}

// ===========================================
// TRACKING AND ANALYTICS
// ===========================================

/**
 * Track events for analytics
 */
function trackEvent(category, action, label = null, value = null) {
    if (!CONFIG.enableTracking) return;
    
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value
        });
    }
    
    // Meta Pixel
    if (typeof fbq !== 'undefined') {
        fbq('track', 'Custom', {
            category: category,
            action: action,
            label: label
        });
    }
    
    // Custom tracking (you can add your own tracking service here)
    if (window.customTracker) {
        window.customTracker.track(category, action, label, value);
    }
    
    log(`Event tracked: ${category} - ${action} - ${label}`);
}

/**
 * Track affiliate link clicks
 */
function trackAffiliateClick(link) {
    const productName = link.closest('.product-card')?.querySelector('.product-title')?.textContent || 'unknown';
    const linkText = link.textContent.trim();
    
    trackEvent('affiliate', 'click', productName, {
        link_text: linkText,
        link_url: link.href
    });
    
    log(`Affiliate link clicked: ${productName} - ${linkText}`);
}

// ===========================================
// ANIMATIONS AND SCROLL EFFECTS
// ===========================================

class AnimationManager {
    constructor() {
        this.animatedElements = document.querySelectorAll('.product-card, .review-item, .top-pick-card');
        this.init();
    }
    
    init() {
        this.setupScrollAnimations();
        this.setupHoverEffects();
    }
    
    /**
     * Setup scroll-triggered animations
     */
    setupScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add staggered animation delay
                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                    }, index * CONFIG.animationDelay);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: CONFIG.intersectionThreshold,
            rootMargin: '0px 0px -100px 0px'
        });
        
        this.animatedElements.forEach(element => {
            element.classList.add('animate-on-scroll');
            observer.observe(element);
        });
        
        log('Scroll animations initialized');
    }
    
    /**
     * Setup hover effects
     */
    setupHoverEffects() {
        const productCards = document.querySelectorAll('.product-card');
        
        productCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-8px)';
                card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '';
            });
        });
        
        log('Hover effects initialized');
    }
}

// ===========================================
// FORM HANDLING
// ===========================================

class FormManager {
    constructor() {
        this.emailForms = document.querySelectorAll('form[data-type="email"]');
        this.contactForms = document.querySelectorAll('form[data-type="contact"]');
        
        this.init();
    }
    
    init() {
        this.setupEmailCapture();
        this.setupContactForms();
    }
    
    /**
     * Setup email capture forms
     */
    setupEmailCapture() {
        this.emailForms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const email = form.querySelector('input[type="email"]').value;
                
                if (this.validateEmail(email)) {
                    this.submitEmailCapture(email, form);
                } else {
                    this.showError(form, 'Please enter a valid email address');
                }
            });
        });
        
        log('Email capture forms initialized');
    }
    
    /**
     * Setup contact forms
     */
    setupContactForms() {
        this.contactForms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.submitContactForm(form);
            });
        });
        
        log('Contact forms initialized');
    }
    
    /**
     * Validate email address
     */
    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    /**
     * Submit email capture
     */
    async submitEmailCapture(email, form) {
        try {
            this.showLoading(form);
            
            // Here you would integrate with your email service
            // Example: await fetch('/api/email-capture', { method: 'POST', body: JSON.stringify({ email }) });
            
            // For demo purposes, we'll simulate a successful submission
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            this.showSuccess(form, 'Thank you for subscribing!');
            
            // Track email capture
            trackEvent('email', 'capture', email);
            
            log(`Email captured: ${email}`);
            
        } catch (error) {
            this.showError(form, 'Something went wrong. Please try again.');
            log('Email capture error:', error);
        }
    }
    
    /**
     * Submit contact form
     */
    async submitContactForm(form) {
        try {
            this.showLoading(form);
            
            const formData = new FormData(form);
            
            // Here you would integrate with your form handling service
            // Example: await fetch('/api/contact', { method: 'POST', body: formData });
            
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            this.showSuccess(form, 'Thank you for your message!');
            
            // Track contact form submission
            trackEvent('contact', 'submit', 'contact_form');
            
            log('Contact form submitted');
            
        } catch (error) {
            this.showError(form, 'Something went wrong. Please try again.');
            log('Contact form error:', error);
        }
    }
    
    /**
     * Show loading state
     */
    showLoading(form) {
        const button = form.querySelector('button[type="submit"]');
        if (button) {
            button.disabled = true;
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        }
    }
    
    /**
     * Show success message
     */
    showSuccess(form, message) {
        const button = form.querySelector('button[type="submit"]');
        if (button) {
            button.disabled = false;
            button.innerHTML = '<i class="fas fa-check"></i> Success!';
            button.classList.add('success');
        }
        
        // Reset form
        form.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            if (button) {
                button.innerHTML = 'Subscribe';
                button.classList.remove('success');
            }
        }, 3000);
    }
    
    /**
     * Show error message
     */
    showError(form, message) {
        const button = form.querySelector('button[type="submit"]');
        if (button) {
            button.disabled = false;
            button.innerHTML = 'Try Again';
            button.classList.add('error');
        }
        
        // Reset button after 3 seconds
        setTimeout(() => {
            if (button) {
                button.innerHTML = 'Subscribe';
                button.classList.remove('error');
            }
        }, 3000);
    }
}

// ===========================================
// PRODUCT RENDERING SYSTEM
// ===========================================

class ProductRenderer {
    constructor() {
        this.productsGrid = document.getElementById('productsGrid');
        this.detailedReviewsGrid = document.getElementById('detailedReviewsGrid');
        this.config = window.PRODUCTS_CONFIG || {};
        this.init();
    }
    
    /**
     * Initialize all pricing sections with template renderer data
     */
    initializePricingSections() {
        // Initialize product card pricing sections (including top-pick-pricing)
        const pricingSections = document.querySelectorAll('.product-pricing[data-product-id], .top-pick-pricing[data-product-id]');
        console.log(`🔍 Found ${pricingSections.length} pricing sections with data-product-id`);
        
        pricingSections.forEach(section => {
            const productId = section.getAttribute('data-product-id');
            let product;
            
            // Handle special case for Editor's Choice
            if (productId === 'editors-choice') {
                // Get Editor's Choice product using the same logic as TopPickManager
                const editorsConfig = window.EDITORS_CHOICE_CONFIG || {};
                if (editorsConfig.useManualOverride) {
                    product = editorsConfig.manualOverride;
        } else {
                    const selectedProductKey = editorsConfig.selectedProduct || 'product1';
                    product = window.PRODUCTS_CONFIG?.[selectedProductKey];
                }
            } else {
                product = window.PRODUCTS_CONFIG?.[productId];
            }
            
            console.log(`🔍 Processing ${productId}:`, {
                hasProduct: !!product,
                hasTemplateRenderer: !!window.templateRenderer,
                productName: product?.name,
                isEditorsChoice: productId === 'editors-choice'
            });
            
            if (product && window.templateRenderer) {
                const renderedHTML = window.templateRenderer.renderPrimaryInfo(product);
                section.innerHTML = renderedHTML;
                console.log(`✅ Updated ${productId} pricing section`);
            } else {
                console.log(`❌ Skipped ${productId} - missing product or template renderer`);
            }
        });
        
        // Initialize detailed review pricing sections
        const detailedPricingSections = document.querySelectorAll('.pricing-info[data-product-id]');
        detailedPricingSections.forEach(section => {
            const productId = section.getAttribute('data-product-id');
            let product;
            
            // Handle special case for Editor's Choice
            if (productId === 'editors-choice') {
                const editorsConfig = window.EDITORS_CHOICE_CONFIG || {};
                if (editorsConfig.useManualOverride) {
                    product = editorsConfig.manualOverride;
                } else {
                    const selectedProductKey = editorsConfig.selectedProduct || 'product1';
                    product = window.PRODUCTS_CONFIG?.[selectedProductKey];
                }
            } else {
                product = window.PRODUCTS_CONFIG?.[productId];
            }
            
            if (product && window.templateRenderer) {
                section.innerHTML = window.templateRenderer.renderDetailedPrimaryInfo(product);
            }
        });
        
        console.log('✅ Pricing sections initialized with template renderer');
    }

    /**
     * Initialize the product renderer and set up all functionality
     */
    init() {
        console.log('🎯 ProductRenderer initializing...');
        
        // Initialize template renderer
        if (typeof TemplateRenderer !== 'undefined') {
            window.templateRenderer = new TemplateRenderer();
            console.log('✅ Template renderer initialized');
        }
        
        // Debug: Initialize pricing sections to test template renderer
        this.initializePricingSections();
        
        // Render all products (this will handle pricing via template renderer)
        this.renderAllProducts();
        
        // Set up review button functionality
        this.setupReviewButtons();
        
        // Note: View toggle and scroll functionality are handled by other managers
        
        console.log('✅ ProductRenderer initialization complete');
    }
    
    /**
     * Update section titles from SECTION_TITLES configuration
     */
    updateSectionTitles() {
        // Update reviews section title
        const reviewsSectionTitle = document.getElementById('reviews-section-title');
        if (reviewsSectionTitle && window.SECTION_TITLES?.reviews) {
            reviewsSectionTitle.textContent = window.SECTION_TITLES.reviews;
        }
        
        // Update comparison section title if it exists
        const comparisonSectionTitle = document.getElementById('comparison-section-title');
        if (comparisonSectionTitle && window.SECTION_TITLES?.comparison) {
            comparisonSectionTitle.textContent = window.SECTION_TITLES.comparison;
        }
    }
    
    /**
     * Populate existing product cards with data from config
     */
    populateProductCards() {
        if (!this.productsGrid) return;
        
        // Get all existing product cards
        const productCards = this.productsGrid.querySelectorAll('.product-card');
        
        // Populate each card with data from config
        Object.entries(this.config).forEach(([key, product]) => {
            const productIndex = product.rank - 1; // Convert to 0-based index
            const card = productCards[productIndex];
            
            console.log(`Populating card ${productIndex} with product ${key}:`, {
                name: product.name,
                rank: product.rank,
                productImage: product.productImage,
                productLogo: product.productLogo
            });
            
            if (card && product) {
                this.populateProductCard(card, product);
            }
        });
        
        log('Product cards populated successfully', Object.keys(this.config).length);
        
        // Ensure product 1 card uses correct data
        this.fixProduct1Card();
    }
    
    /**
     * Populate a single product card with data
     */
    populateProductCard(card, product) {
        // Ensure we're using the correct product data, not editor's choice data
        const cardId = card.getAttribute('id');
        
        // Special handling for product 1 to ensure it uses its own data
        if (cardId === 'product-1') {
            const product1Data = window.PRODUCTS_CONFIG?.product1;
            if (product1Data) {
                product = product1Data;
                console.log('✅ Using correct product1 data for product 1 card');
            }
        }
        
        // Update basic product info
        const title = card.querySelector('.product-title');
        if (title) title.textContent = product.name;
        
        const description = card.querySelector('.product-description');
        if (description) description.textContent = product.description;
        
        // Update rank and badge
        const rankNumber = card.querySelector('.rank-number');
        if (rankNumber) rankNumber.textContent = product.rank;
        
        const rankBadge = card.querySelector('.rank-badge');
        if (rankBadge) {
            // Check badge settings - show/hide based on configuration
            const badgeSettings = product.badgeSettings || {};
            if (badgeSettings.showOnProductCard !== false) { // Default to true if not specified
                rankBadge.textContent = product.rankBadge;
                rankBadge.style.display = '';
            } else {
                rankBadge.style.display = 'none';
            }
        }
        
        // Add editor's choice badge to product cards
        this.addEditorsChoiceBadgeToCard(card, product);
        
        // Update rating scores (both in content and overlay)
        const ratingScores = card.querySelectorAll('.rating-score');
        ratingScores.forEach(score => {
            score.textContent = product.rating;
        });
        
        // Update review counts
        const reviewCounts = card.querySelectorAll('.review-count');
        reviewCounts.forEach(count => {
            // Check if it's in the overlay or content area
            const isInOverlay = count.closest('.product-overlay');
            if (isInOverlay) {
                count.textContent = `(${product.reviewCount})`;
            } else {
                count.textContent = `(${product.reviewCount} reviews)`;
            }
        });
        
        // Update stars based on rating
        const starsContainers = card.querySelectorAll('.stars');
        starsContainers.forEach(container => {
            container.innerHTML = this.generateStars(product.rating);
        });
        
        // Update pricing/bonus info using template renderer
        if (window.templateRenderer) {
            window.templateRenderer.updateProductCard(card, product);
        } else {
            // Fallback to traditional pricing
            const currentPrice = card.querySelector('.current-price');
            if (currentPrice) currentPrice.textContent = product.price;
            
            const originalPrice = card.querySelector('.original-price');
            if (originalPrice) originalPrice.textContent = product.originalPrice || '';
            
            const discount = card.querySelector('.discount');
            if (discount) discount.textContent = product.discount || '';
            
            // Update CTA button
            const ctaButton = card.querySelector('.btn-primary');
            if (ctaButton) {
                ctaButton.href = product.affiliateLink;
                ctaButton.innerHTML = product.ctaText;
            }
        }
        
        // Update affiliate links
        const affiliateLinks = card.querySelectorAll('[href*="{{AFFILIATE_LINK"]');
        affiliateLinks.forEach(link => {
            link.href = product.affiliateLink;
        });
        
        // Update product image
        const productImage = card.querySelector('.product-image img');
        if (productImage) {
            // Use productImage from config (all products have productImage defined)
            productImage.src = product.productImage;
            productImage.alt = product.name;
            
            // Apply image scaling and positioning if defined
            if (product.imageScale?.grid || product.imagePositioning?.grid) {
                const scale = product.imageScale?.grid || 1.0;
                const objectPosition = product.imagePositioning?.grid?.objectPosition || 'center';
                const objectFit = product.imagePositioning?.grid?.objectFit || 'cover';
                
                productImage.style.transform = `scale(${scale})`;
                productImage.style.objectPosition = objectPosition;
                productImage.style.objectFit = objectFit;
                productImage.style.position = 'relative';
            }
        }
        
        // Update product logo in content area
        const productLogo = card.querySelector('.product-logo-image');
        if (productLogo && product.productLogo) {
            productLogo.src = product.productLogo;
            productLogo.alt = product.name + ' Logo';
            // Apply logo scaling and positioning if defined
            if (product.logoScale?.grid || product.logoPositioning?.grid) {
                // Detect if we're on tablet for initial scaling
                const isTablet = window.innerWidth >= 767 && window.innerWidth <= 1023;
                
                let scale;
                if (isTablet && product.logoScale.tablet) {
                    scale = product.logoScale.tablet.grid || 1.0;
                } else {
                    scale = product.logoScale?.grid || 1.0;
                }
                
                const left = product.logoPositioning?.grid?.left || '0px';
                const top = product.logoPositioning?.grid?.top || '0px';
                productLogo.style.setProperty('--logo-scale-grid', scale);
                productLogo.style.setProperty('--logo-scale-current', scale); // Set current scale for initial grid view
                productLogo.style.transform = `scale(${scale}) translate(${left}, ${top})`;
                productLogo.style.position = 'relative';
            }
        }
        
        // Populate features
        this.populateFeatures(card, product);
        
        // Update review button target
        const reviewButton = card.querySelector('.review-btn');
        if (reviewButton) {
            reviewButton.setAttribute('data-target', `review-${product.rank}`);
        }
    }
    
    /**
     * Populate features section of a product card
     */
    populateFeatures(card, product) {
        const featuresContainer = card.querySelector('.product-features');
        if (!featuresContainer) return;
        
                // Get display section setting from config (PRODUCT CARDS ONLY)
        let section = window.SECTION_TITLES?.productCards?.displaySection || 'perks';
        
        let featuresToShow = [];
        
        // Get data based on section
        switch(section) {
            case 'perks':
            featuresToShow = product.perks || [];
                break;
            case 'specs':
            featuresToShow = product.specifications || [];
                break;
            case 'features':
                featuresToShow = product.features || [];
                break;
            default:
                featuresToShow = product.perks || [];
        }
        
        if (featuresToShow.length === 0) return;
        
        const featuresList = document.createElement('ul');
        featuresList.className = 'features-list';
        
        // Show first 4 features in product cards
        const maxFeatures = 4;
        featuresToShow.slice(0, maxFeatures).forEach(feature => {
            const li = document.createElement('li');
            li.className = 'feature-item';
            
            if (section === 'perks') {
                // For perks: show text with icon
                li.innerHTML = `<i class="${feature.icon}"></i> <span>${feature.text}</span>`;
            } else if (section === 'specs') {
                // For specifications: show name and value
                li.innerHTML = `<i class="${feature.icon}"></i> <strong>${feature.name}:</strong> ${feature.value}`;
            } else if (section === 'features') {
                // For features: show text with icon (same format as perks)
                li.innerHTML = `<i class="${feature.icon}"></i> <span>${feature.text}</span>`;
            }
            
            featuresList.appendChild(li);
        });
        
        featuresContainer.innerHTML = '';
        featuresContainer.appendChild(featuresList);
    }
    
    /**
     * Generate star rating HTML
     */
    generateStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let starsHTML = '';
        
        // Full stars
        for (let i = 0; i < fullStars; i++) {
            starsHTML += '<i class="fas fa-star"></i>';
        }
        
        // Half star
        if (hasHalfStar) {
            starsHTML += '<i class="fas fa-star-half-alt"></i>';
        }
        
        // Empty stars
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            starsHTML += '<i class="far fa-star"></i>';
        }
        
        return starsHTML;
    }
    
    /**
     * Render detailed review cards
     */
    renderDetailedReviews() {
        if (!this.detailedReviewsGrid) return;

        // Clear existing reviews
        this.detailedReviewsGrid.innerHTML = '';

        // Generate review cards for each product
        Object.entries(this.config).forEach(([key, product]) => {
            const reviewCard = this.createDetailedReviewCard(product);
            this.detailedReviewsGrid.appendChild(reviewCard);
        });

        // Apply editor's choice gold styling after rendering
        this.applyEditorsChoiceGoldStyling();
        
        // Create manual editor's choice review card if needed
        this.createManualEditorsChoiceReview();

        log('Detailed reviews rendered successfully');
    }
    
    /**
     * Create manual editor's choice review card if manual override is enabled
     */
    createManualEditorsChoiceReview() {
        const editorsConfig = window.EDITORS_CHOICE_CONFIG || {};
        
        if (editorsConfig.useManualOverride && editorsConfig.manualOverride) {
            console.log('🎯 Creating manual editor\'s choice review card');
            
            const product = editorsConfig.manualOverride;
            const editorsReviewCard = this.createEditorsChoiceReviewHTML(product);
            
            // Add gold styling immediately
            editorsReviewCard.classList.add('editors-choice-gold');
            
            // Insert at the beginning of the reviews grid
            this.detailedReviewsGrid.insertBefore(editorsReviewCard, this.detailedReviewsGrid.firstChild);
            
            console.log('✅ Manual editor\'s choice review card created successfully with gold styling');
        }
    }
    
    /**
     * Create HTML for manual editor's choice review card
     */
    createEditorsChoiceReviewHTML(product) {
        const reviewHTML = `
            <div class="detailed-review-card editors-choice-review-card" id="editors-choice-review">
                <!-- Title at top center -->
                <div class="review-card-header">
                    <h3 class="review-card-title">${product.name}</h3>
                    <div class="review-rank-badge">
                        <div class="editors-choice-badge">
                            <i class="fas fa-crown"></i>
                            <span>EDITOR'S CHOICE</span>
                        </div>
                    </div>
                </div>
                
                <!-- Product Image Box -->
                <div class="review-product-image-container">
                    <img src="${product.productImage}" alt="${product.name}" class="review-product-image"
                         style="transform: scale(${product.detailedReviewScale?.productImage || 1.0}) translate(${product.detailedReviewPositioning?.productImage?.left || '0px'}, ${product.detailedReviewPositioning?.productImage?.top || '0px'}); object-position: ${product.detailedReviewPositioning?.productImage?.objectPosition || 'center'}; object-fit: ${product.detailedReviewPositioning?.productImage?.objectFit || 'cover'}; position: relative;">
                    <div class="review-rating-overlay">
                        <div class="stars">
                            ${this.generateStars(product.rating)}
                        </div>
                        <span class="rating-score">${product.rating}/5</span>
                        <span class="review-count">(${product.reviewCount})</span>
                    </div>
                </div>
                
                <!-- Product Logo Section -->
                <div class="review-product-logo-section">
                    <img src="${product.productLogo}" alt="${product.name} Logo" class="review-product-logo"
                         style="transform: scale(${product.detailedReviewScale?.productLogo || 1.0}) translate(${product.detailedReviewPositioning?.productLogo?.left || '0px'}, ${product.detailedReviewPositioning?.productLogo?.top || '0px'}); position: relative;">
                    <p class="review-product-tagline">${product.fullReview?.tagline || product.description}</p>
                </div>
                
                <!-- Review Content Section -->
                <div class="review-content-section">
                    <div class="review-text">
                        ${product.fullReview?.paragraphs?.map(p => `<p>${p}</p>`).join('') || `<p>${product.description}</p>`}
                    </div>
                </div>
                
                <!-- Perks Section -->
                <div class="review-perks-section">
                    <h5 class="perks-title">
                        <i class="${window.SECTION_TITLES?.getSection?.('perks')?.icon || 'fas fa-star'}" style="color: ${window.SECTION_TITLES?.getSection?.('perks')?.color || window.SECTION_TITLES?.perks?.color || '#f472b6'};"></i>
                        ${window.SECTION_TITLES?.getSection?.('perks')?.title || 'Key Features'}
                    </h5>
                    <div class="perks-box">
                        <div class="perks-grid">
                            ${product.perks?.map(perk => `
                                <div class="perk-item">
                                    <i class="${perk.icon}"></i>
                                    <span>${perk.text}</span>
                                </div>
                            `).join('') || ''}
                        </div>
                    </div>
                </div>
                
                <!-- Key Features Section -->
                <div class="review-features-section">
                    <h5 class="features-title">
                        <i class="${window.SECTION_TITLES?.getSection?.('features')?.icon || 'fas fa-list'}" style="color: ${window.SECTION_TITLES?.getSection?.('features')?.color || window.SECTION_TITLES?.features?.color || '#10b981'};"></i>
                        ${window.SECTION_TITLES?.getSection?.('features')?.title || 'Key Features'}
                    </h5>
                    <div class="features-grid">
                        ${product.features?.map(feature => `
                            <div class="feature-item">
                                <i class="${feature.icon}"></i>
                                <span>${feature.text}</span>
                            </div>
                        `).join('') || ''}
                    </div>
                </div>
                
                <!-- Technical Specifications Section -->
                <div class="review-specs-section">
                    <h5 class="specs-title">
                        <i class="${window.SECTION_TITLES?.getSection?.('specs')?.icon || 'fas fa-cogs'}" style="color: ${window.SECTION_TITLES?.getSection?.('specs')?.color || window.SECTION_TITLES?.specs?.color || '#06b6d4'};"></i>
                        ${window.SECTION_TITLES?.getSection?.('specs')?.title || 'Technical Specifications'}
                    </h5>
                    <div class="specs-grid">
                        ${product.specifications?.map(spec => `
                            <div class="spec-item">
                                <i class="${spec.icon}"></i>
                                <div class="spec-content">
                                    <strong>${spec.name}:</strong>
                                    <span>${spec.value}</span>
                                </div>
                            </div>
                        `).join('') || ''}
                    </div>
                </div>
                
                <!-- CTA Section -->
                <div class="review-cta-section">
                    <div class="cta-box">
                        <div class="cta-content">
                            ${window.templateRenderer?.shouldShowCTAElement(product, 'title') !== false ? 
                                `<h6 class="cta-title">${product.cta?.title || 'Ready to Get Started?'}</h6>` : ''}
                            ${window.templateRenderer?.shouldShowCTAElement(product, 'description') !== false ? 
                                `<p class="cta-description">${product.cta?.description || `Get the best deal on ${product.name} today!`}</p>` : ''}
                            ${window.templateRenderer?.shouldShowCTAElement(product, 'boxInfo') !== false && product.cta?.boxInfo ? 
                                `<p class="cta-box-info">${product.cta.boxInfo}</p>` : ''}
                            ${window.templateRenderer?.shouldShowCTAElement(product, 'pricingInfo') !== false ? `
                            <div class="pricing-info">
                                ${window.templateRenderer ? window.templateRenderer.renderDetailedPrimaryInfo(product) : `
                                    <span class="current-price">${product.price}</span>
                                    ${product.originalPrice ? `<span class="original-price">${product.originalPrice}</span>` : ''}
                                    ${product.discount ? `<span class="discount-badge">${product.discount}</span>` : ''}
                                `}
                            </div>
                            ` : ''}
                        </div>
                        <a href="${product.affiliateLink}" class="btn btn-primary btn-large btn-animated btn-shake" 
                           target="_blank" rel="noopener">
                            ${window.templateRenderer ? window.templateRenderer.getCTAText(product) : product.ctaText}
                        </a>
                    </div>
                </div>
            </div>
        `;
        
        const div = document.createElement('div');
        div.innerHTML = reviewHTML;
        return div.firstElementChild;
    }
    
    /**
     * Apply editor's choice gold styling to rendered cards
     */
    applyEditorsChoiceGoldStyling() {
        const editorsConfig = window.EDITORS_CHOICE_CONFIG || {};
        
        if (!editorsConfig.useManualOverride) {
            const selectedKey = editorsConfig.selectedProduct || 'product1';
            const productNumber = selectedKey.replace('product', '');
            
            // Apply gold styling to the selected product's review card
            const reviewCard = document.getElementById(`review-${productNumber}`);
            if (reviewCard) {
                reviewCard.classList.add('editors-choice-gold');
            }
        }
    }
    
    /**
     * Create detailed review card
     */
    createDetailedReviewCard(product) {
        // Use productImage from config (all products have productImage defined)
        const productImageSrc = product.productImage;
        
        // Check if this product is the selected editor's choice
        const editorsConfig = window.EDITORS_CHOICE_CONFIG || {};
        const isEditorsChoice = !editorsConfig.useManualOverride && 
                               editorsConfig.selectedProduct === `product${product.rank}`;
        
        const reviewHTML = `
            <div class="detailed-review-card" id="review-${product.rank}">
                <!-- Title at top center -->
                <div class="review-card-header">
                    <h3 class="review-card-title">${product.name}</h3>
                    <div class="review-rank-badge">
                        ${isEditorsChoice ? `
                            <div class="editors-choice-badge">
                                <i class="fas fa-crown"></i>
                                <span>EDITOR'S CHOICE</span>
                            </div>
                        ` : `
                            <span class="rank-number">#${product.rank}</span>
                            ${(() => {
                                const badgeSettings = product.badgeSettings || {};
                                const showBadge = badgeSettings.showOnDetailedReview !== false; // Default to true if not specified
                                return showBadge ? `<span class="rank-badge-text">${product.rankBadge}</span>` : '';
                            })()}
                        `}
                    </div>
                </div>
                
                <!-- Product Image Box -->
                <div class="review-product-image-container">
                    <img src="${productImageSrc}" alt="${product.name}" class="review-product-image" 
                         style="transform: scale(${product.detailedReviewScale?.productImage || 1.0}) translate(${product.detailedReviewPositioning?.productImage?.left || '0px'}, ${product.detailedReviewPositioning?.productImage?.top || '0px'}); object-position: ${product.detailedReviewPositioning?.productImage?.objectPosition || 'center'}; object-fit: ${product.detailedReviewPositioning?.productImage?.objectFit || 'cover'}; position: relative;">
                    <div class="review-rating-overlay">
                        <div class="stars">
                            ${this.generateStars(product.rating)}
                        </div>
                        <span class="rating-score">${product.rating}/5</span>
                        <span class="review-count">(${product.reviewCount})</span>
                    </div>
                </div>
                
                <!-- Product Logo Section (replacing product name) -->
                <div class="review-product-logo-section">
                    <img src="${product.productLogo}" alt="${product.name} Logo" class="review-product-logo"
                         style="transform: scale(${product.detailedReviewScale?.productLogo || 1.0}) translate(${product.detailedReviewPositioning?.productLogo?.left || '0px'}, ${product.detailedReviewPositioning?.productLogo?.top || '0px'}); position: relative;">
                    <p class="review-product-tagline">${product.fullReview?.tagline || product.description}</p>
                </div>
                
                <!-- Review Content Paragraphs -->
                <div class="review-content-section">
                    <div class="review-text">
                        ${product.fullReview?.paragraphs?.map(p => `<p>${p}</p>`).join('') || `<p>${product.description}</p>`}
                    </div>
                </div>
                
                <!-- Perks Title and Box -->
                <div class="review-perks-section">
                    <h5 class="perks-title">
                        <i class="${window.SECTION_TITLES?.getSection?.('perks')?.icon || 'fas fa-star'}" style="color: ${window.SECTION_TITLES?.getSection?.('perks')?.color || window.SECTION_TITLES?.perks?.color || '#f472b6'};"></i>
                        ${window.SECTION_TITLES?.getSection?.('perks')?.title || 'Key Features'}
                    </h5>
                    <div class="perks-box">
                        <div class="perks-grid">
                            ${product.perks?.map(perk => `
                                <div class="perk-item">
                                    <i class="${perk.icon}"></i>
                                    <span>${perk.text}</span>
                                </div>
                            `).join('') || ''}
                        </div>
                    </div>
                </div>
                
                <!-- Key Features Section -->
                <div class="review-features-section">
                    <h5 class="features-title">
                        <i class="${window.SECTION_TITLES?.getSection?.('features')?.icon || 'fas fa-list'}" style="color: ${window.SECTION_TITLES?.getSection?.('features')?.color || window.SECTION_TITLES?.features?.color || '#10b981'};"></i>
                        ${window.SECTION_TITLES?.getSection?.('features')?.title || 'Key Features'}
                    </h5>
                    <div class="features-grid">
                        ${product.features?.map(feature => `
                            <div class="feature-item">
                                <i class="${feature.icon}"></i>
                                <span>${feature.text}</span>
                            </div>
                        `).join('') || ''}
                    </div>
                </div>
                
                <!-- Technical Specifications Section -->
                <div class="review-specs-section">
                    <h5 class="specs-title">
                        <i class="${window.SECTION_TITLES?.getSection?.('specs')?.icon || 'fas fa-cogs'}" style="color: ${window.SECTION_TITLES?.getSection?.('specs')?.color || window.SECTION_TITLES?.specs?.color || '#06b6d4'};"></i>
                        ${window.SECTION_TITLES?.getSection?.('specs')?.title || 'Technical Specifications'}
                    </h5>
                    <div class="specs-grid">
                        ${product.specifications?.map(spec => `
                            <div class="spec-item">
                                <i class="${spec.icon}"></i>
                                <div class="spec-content">
                                    <strong>${spec.name}:</strong>
                                    <span>${spec.value}</span>
                                </div>
                            </div>
                        `).join('') || ''}
                    </div>
                </div>
                
                <!-- Affiliate Link Box with Configurable CTA -->
                <div class="review-cta-section">
                    <div class="cta-box">
                        <div class="cta-content">
                            ${window.templateRenderer?.shouldShowCTAElement(product, 'title') !== false ? 
                                `<h6 class="cta-title">${product.cta?.title || 'Ready to Get Started?'}</h6>` : ''}
                            ${window.templateRenderer?.shouldShowCTAElement(product, 'description') !== false ? 
                                `<p class="cta-description">${product.cta?.description || `Get the best deal on ${product.name} today!`}</p>` : ''}
                            ${window.templateRenderer?.shouldShowCTAElement(product, 'boxInfo') !== false && product.cta?.boxInfo ? 
                                `<p class="cta-box-info">${product.cta.boxInfo}</p>` : ''}
                            ${window.templateRenderer?.shouldShowCTAElement(product, 'pricingInfo') !== false ? `
                            <div class="pricing-info">
                                ${window.templateRenderer ? window.templateRenderer.renderDetailedPrimaryInfo(product) : `
                                    <span class="current-price">${product.price}</span>
                                    ${product.originalPrice ? `<span class="original-price">${product.originalPrice}</span>` : ''}
                                    ${product.discount ? `<span class="discount-badge">${product.discount}</span>` : ''}
                                `}
                            </div>
                            ` : ''}
                        </div>
                        <a href="${product.affiliateLink}" class="btn btn-primary btn-large btn-animated btn-shake" 
                           target="_blank" rel="noopener">
                            ${window.templateRenderer ? window.templateRenderer.getCTAText(product) : product.ctaText}
                        </a>
                    </div>
                </div>
            </div>
        `;
        
        const div = document.createElement('div');
        div.innerHTML = reviewHTML;
        return div.firstElementChild;
    }
    
    /**
     * Update the first review with actual data
     */
    updateFirstReview() {
        const firstReview = document.getElementById('review-1');
        if (!firstReview || !this.config.product1) return;
        
        const product = this.config.product1;
        // Use productImage from config (all products have productImage defined)
        const productImageSrc = product.productImage;
        
        // Update review content
        firstReview.querySelector('.review-product-title').textContent = product.name;
        firstReview.querySelector('.review-rating span').textContent = `${product.rating}/5`;
        
        // Update image
        const img = firstReview.querySelector('.review-product-image');
        if (img) {
            img.src = productImageSrc;
            img.alt = product.name;
        }
        
        // Update pros and cons
        const prosContainer = firstReview.querySelector('.pros ul');
        const consContainer = firstReview.querySelector('.cons ul');
        
        if (prosContainer && product.pros) {
            prosContainer.innerHTML = product.pros.map(pro => `<li>${pro}</li>`).join('');
        }
        
        if (consContainer && product.cons) {
            consContainer.innerHTML = product.cons.map(con => `<li>${con}</li>`).join('');
        }
        
        // Update full review
        const fullReviewElement = firstReview.querySelector('.review-details p');
        if (fullReviewElement) {
            fullReviewElement.textContent = product.fullReview;
        }
        
        // Update key features
        const featuresList = firstReview.querySelector('.feature-list');
        if (featuresList && product.keyFeatures) {
            featuresList.innerHTML = Object.entries(product.keyFeatures)
                .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
                .join('');
        }
        
        // Update affiliate links
        const affiliateLinks = firstReview.querySelectorAll('a[href*="{{AFFILIATE_LINK_1}}"], a[href*="example.com"]');
        affiliateLinks.forEach(link => {
            link.href = product.affiliateLink;
        });
    }
    
    /**
     * Generate star rating HTML
     */
    generateStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let starsHTML = '';
        
        // Full stars
        for (let i = 0; i < fullStars; i++) {
            starsHTML += '<i class="fas fa-star"></i>';
        }
        
        // Half star
        if (hasHalfStar) {
            starsHTML += '<i class="fas fa-star-half-alt"></i>';
        }
        
        // Empty stars
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            starsHTML += '<i class="far fa-star"></i>';
        }
        
        return starsHTML;
    }
    
    /**
     * Setup review button functionality
     */
    setupReviewButtons() {
        const reviewButtons = document.querySelectorAll('.review-btn');
        reviewButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = button.getAttribute('data-target');
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // Use the same scrollToElement function as other navigation
                    scrollToElement(targetElement, CONFIG.scrollOffset);
                    
                    // Apply consistent expand animation for both grid and list view
                    targetElement.classList.add('expand-highlight-animation');
                    setTimeout(() => {
                        targetElement.classList.remove('expand-highlight-animation');
                    }, 2000);
                    
                    console.log('📍 Scrolled to review:', targetId, '- Applied expand animation');
                }
            });
        });
        
        log('Review buttons setup complete');
    }
    
    /**
     * Update placeholder content in HTML
     */
    updatePlaceholders() {
        // Update placeholders in the document
        const placeholderElements = document.querySelectorAll('[data-placeholder]');
        placeholderElements.forEach(element => {
            const placeholder = element.getAttribute('data-placeholder');
            const [productKey, field] = placeholder.split('.');
            
            if (this.config[productKey] && this.config[productKey][field]) {
                element.textContent = this.config[productKey][field];
            }
        });
    }

    /**
     * Fix product 1 card to ensure it uses correct data
     */
    fixProduct1Card() {
        const product1Card = document.getElementById('product-1');
        if (product1Card) {
            const product1Data = window.PRODUCTS_CONFIG?.product1;
            if (product1Data) {
                this.populateProductCard(product1Card, product1Data);
                console.log('✅ Product 1 card data fixed');
            } else {
                console.warn('Product 1 data not found in window.PRODUCTS_CONFIG');
            }
        } else {
            console.warn('Product 1 card element not found');
        }
    }

    /**
     * Add editor's choice badge to product cards
     */
    addEditorsChoiceBadgeToCard(card, product) {
        const editorsConfig = window.EDITORS_CHOICE_CONFIG || {};
        const badgeSettings = editorsConfig.badgeSettings || {};
        
        // Check if we should add badges to product cards
        if (!badgeSettings.addToProductCard) return;
        
        // Check if this product is the selected editor's choice
        const isSelectedProduct = !editorsConfig.useManualOverride && 
                                 editorsConfig.selectedProduct === `product${product.rank}`;
        
        // Only add badge if this is the selected product (not for manual override)
        if (!isSelectedProduct) return;
        
        // Check if editor's choice badge already exists to prevent duplicates
        const existingEditorsBadge = card.querySelector('.editors-choice-product-badge');
        if (existingEditorsBadge) {
            console.log('✅ Editor\'s choice badge already exists on product card');
            return;
        }
        
        // Find the rank badge area to add editor's choice badge
        const rankBadgeContainer = card.querySelector('.rank-badge')?.parentElement;
        if (!rankBadgeContainer) return;
        
        // Check if we should replace the existing badge or add alongside it
        const existingRankBadge = card.querySelector('.rank-badge');
        
        if (badgeSettings.replaceProductBadge && existingRankBadge) {
            // Replace the existing badge
            existingRankBadge.innerHTML = `
                <i class="${badgeSettings.badgeIcon || 'fas fa-crown'}"></i>
                ${badgeSettings.badgeText || 'EDITOR\'S CHOICE'}
            `;
            existingRankBadge.classList.add('editors-choice-product-badge');
        } else {
            // Add editor's choice badge next to existing badge
            const editorsChoiceBadge = document.createElement('div');
            editorsChoiceBadge.className = 'editors-choice-product-badge';
            editorsChoiceBadge.innerHTML = `
                <i class="${badgeSettings.badgeIcon || 'fas fa-crown'}"></i>
                ${badgeSettings.badgeText || 'EDITOR\'S CHOICE'}
            `;
            
            // Insert after the rank badge
            if (existingRankBadge) {
                existingRankBadge.parentNode.insertBefore(editorsChoiceBadge, existingRankBadge.nextSibling);
            } else {
                rankBadgeContainer.appendChild(editorsChoiceBadge);
            }
        }
    }

    /**
     * Render all products - populate cards and detailed reviews
     */
    renderAllProducts() {
        console.log('🎯 Rendering all products...');
        
        // Populate existing product cards with data
        this.populateProductCards();
        
        // Render detailed review cards
        this.renderDetailedReviews();
        
        console.log('✅ All products rendered successfully');
    }
}

/**
 * Hero Media Manager - Handles hero section image/video with fallback
 */
class HeroMediaManager {
    constructor() {
        this.heroConfig = window.HERO_CONFIG || {};
        this.videoElement = null;
        this.isVideoPlaying = false;
        this.init();
    }
    
    init() {
        this.setupHeroMedia();
        this.setupVideoControls();
    }
    
    /**
     * Setup hero media (image or video) based on configuration
     */
    setupHeroMedia() {
        const heroImage = document.getElementById('heroImage');
        const videoPlaceholder = document.getElementById('videoPlaceholder');
        const videoContainer = document.getElementById('heroVideoContainer');
        const videoElement = document.getElementById('heroVideo');
        const videoSource = document.getElementById('videoSource');
        
        console.log('🎥 Setting up hero media...');
        console.log('Video config:', this.heroConfig.video);
        
        // Set up image fallback
        if (heroImage) {
        heroImage.addEventListener('error', () => {
            if (this.heroConfig.image?.fallback && heroImage.src !== this.heroConfig.image.fallback) {
                console.log('Hero image failed to load, using fallback');
                heroImage.src = this.heroConfig.image.fallback;
            }
        });
        
        heroImage.addEventListener('load', () => {
            log('Hero image loaded successfully');
        });
        }
        
        // Check if video is enabled and configured
        if (this.heroConfig.video?.enabled) {
            console.log('✅ Video is enabled in config');
            
            if (this.heroConfig.video.src && this.heroConfig.video.src.trim() !== '') {
                // Video URL is provided - show actual video
                console.log('🎬 Video URL provided, showing video element');
                this.showVideo(videoContainer, videoElement, videoSource, heroImage);
            } else {
                // Video enabled but no URL - show placeholder
                console.log('📝 No video URL, showing placeholder');
                this.showVideoPlaceholder(videoPlaceholder, heroImage);
            }
        } else {
            console.log('❌ Video is disabled, showing image only');
            // Video disabled - show only image
            if (heroImage) heroImage.style.display = 'block';
            if (videoPlaceholder) videoPlaceholder.style.display = 'none';
            if (videoContainer) videoContainer.style.display = 'none';
        }
    }
    
    /**
     * Show actual video element
     */
    showVideo(videoContainer, videoElement, videoSource, heroImage) {
        if (!videoContainer || !videoElement || !videoSource) return;
        
        // Hide image and placeholder
        if (heroImage) heroImage.style.display = 'none';
        const videoPlaceholder = document.getElementById('videoPlaceholder');
        if (videoPlaceholder) videoPlaceholder.style.display = 'none';
        
        // Configure video element
        videoSource.src = this.heroConfig.video.src;
        videoSource.type = this.heroConfig.video.type || 'video/mp4';
        
        // Set video attributes
        videoElement.autoplay = this.heroConfig.video.autoplay || false;
        videoElement.muted = this.heroConfig.video.muted || false;
        videoElement.loop = this.heroConfig.video.loop || false;
        
        if (this.heroConfig.video.poster) {
            videoElement.poster = this.heroConfig.video.poster;
        }
        
        // Show video container
        videoContainer.style.display = 'block';
        this.videoElement = videoElement;
        
        // Load the video
        videoElement.load();
        
        console.log('🎥 Video element configured and shown');
    }
    
    /**
     * Show video placeholder
     */
    showVideoPlaceholder(videoPlaceholder, heroImage) {
        if (!videoPlaceholder) return;
        
        // Hide image and video container
        if (heroImage) heroImage.style.display = 'none';
        const videoContainer = document.getElementById('heroVideoContainer');
        if (videoContainer) videoContainer.style.display = 'none';
        
        // Show placeholder
        videoPlaceholder.style.display = 'flex';
        
        // Add click handler to placeholder
        videoPlaceholder.addEventListener('click', () => {
            console.log('📹 Video placeholder clicked');
            this.handleVideoPlaceholderClick();
        });
        
        console.log('📝 Video placeholder shown');
    }
    
    /**
     * Setup video control buttons
     */
    setupVideoControls() {
        const videoToggle = document.getElementById('videoToggle');
        const videoMute = document.getElementById('videoMute');
        
        if (videoToggle) {
            videoToggle.addEventListener('click', () => {
                this.togglePlayPause();
            });
        }
        
        if (videoMute) {
            videoMute.addEventListener('click', () => {
                this.toggleMute();
            });
        }
        
        // Listen for video events
        document.addEventListener('click', (e) => {
            if (e.target.id === 'heroVideo') {
                this.togglePlayPause();
            }
        });
    }
    
    /**
     * Toggle video play/pause
     */
    togglePlayPause() {
        if (!this.videoElement) return;
        
        if (this.videoElement.paused) {
            this.videoElement.play();
            this.isVideoPlaying = true;
            const toggleBtn = document.getElementById('videoToggle');
            if (toggleBtn) {
                toggleBtn.innerHTML = '<i class="fas fa-pause"></i>';
            }
            console.log('▶️ Video playing');
        } else {
            this.videoElement.pause();
            this.isVideoPlaying = false;
            const toggleBtn = document.getElementById('videoToggle');
            if (toggleBtn) {
                toggleBtn.innerHTML = '<i class="fas fa-play"></i>';
            }
            console.log('⏸️ Video paused');
        }
    }
    
    /**
     * Toggle video mute/unmute
     */
    toggleMute() {
        if (!this.videoElement) return;
        
        this.videoElement.muted = !this.videoElement.muted;
        const muteBtn = document.getElementById('videoMute');
        if (muteBtn) {
            muteBtn.innerHTML = this.videoElement.muted ? 
                '<i class="fas fa-volume-mute"></i>' : 
                '<i class="fas fa-volume-up"></i>';
        }
        console.log(this.videoElement.muted ? '🔇 Video muted' : '🔊 Video unmuted');
    }
    
    /**
     * Handle video placeholder click
     */
    handleVideoPlaceholderClick() {
        alert('Please add a video URL to HERO_CONFIG.video.src in Configurations/config.js to enable video playback.');
        console.log('💡 To add a video: Set HERO_CONFIG.video.src to your video URL in Configurations/config.js');
    }
}

/**
 * Top Pick Manager - Handles the Editor's Choice section
 */
class TopPickManager {
    constructor() {
        this.topPickSection = document.querySelector('.top-pick-section');
        this.config = window.PRODUCTS_CONFIG || {};
        this.editorsChoiceConfig = window.EDITORS_CHOICE_CONFIG || {};
        this.init();
    }
    
    init() {
        if (this.topPickSection) {
            this.populateTopPick();
            this.updateTopPickImage();
            this.setupReviewButton();
            this.applyEditorsChoiceGoldStyling();
        }
    }
    
    /**
     * Get the product data for editor's choice
     */
    getEditorsChoiceProduct() {
        const editorsConfig = this.editorsChoiceConfig;
        
        // Check if manual override is enabled
        if (editorsConfig.useManualOverride) {
            return editorsConfig.manualOverride;
        }
        
        // Otherwise use selected product from config
        const selectedProductKey = editorsConfig.selectedProduct || 'product1';
        return this.config[selectedProductKey] || this.config.product1;
    }
    
    /**
     * Get the selected product key for editor's choice
     */
    getSelectedProductKey() {
        const editorsConfig = this.editorsChoiceConfig;
        
        if (editorsConfig.useManualOverride) {
            return 'editors-choice-manual';
        }
        
        return editorsConfig.selectedProduct || 'product1';
    }
    
    /**
     * Setup the Read Full Review button with dynamic linking
     */
    setupReviewButton() {
        const reviewButton = document.getElementById('editors-choice-review-btn');
        if (!reviewButton) return;
        
        const selectedKey = this.getSelectedProductKey();
        
        if (selectedKey === 'editors-choice-manual') {
            // For manual override, link to special editor's choice review
            reviewButton.href = '#editors-choice-review';
            this.createEditorsChoiceReviewCard();
        } else {
            // For product selection, link to that product's review
            const productNumber = selectedKey.replace('product', '');
            reviewButton.href = `#review-${productNumber}`;
        }
        
        // CRITICAL: Remove ALL existing event listeners by cloning the button
        const newButton = reviewButton.cloneNode(true);
        reviewButton.parentNode.replaceChild(newButton, reviewButton);
        
        // Add our specific event listener with high priority
        newButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation(); // Stop ALL other event handlers
            
            const targetId = newButton.href.split('#')[1];
            
            console.log('🎯 BUTTON CLICK DEBUG: Editor\'s Choice button clicked, scrolling to:', targetId);
            console.log('🔧 BUTTON CLICK DEBUG: Ensuring card exists before scroll attempt');
            console.log('🔍 BUTTON CLICK DEBUG: Button href:', newButton.href);
            console.log('🔍 BUTTON CLICK DEBUG: Extracted targetId:', targetId);
            
            // First, ensure the editor's choice review card exists
            const ensureCardExists = () => {
                console.log('🔍 BUTTON CLICK DEBUG: ensureCardExists called');
                let targetElement = document.getElementById(targetId);
                console.log('🔍 BUTTON CLICK DEBUG: targetElement found:', !!targetElement);
                console.log('🔍 BUTTON CLICK DEBUG: targetId check:', targetId === 'editors-choice-review');
                
                if (!targetElement && targetId === 'editors-choice-review') {
                    console.log('📝 BUTTON CLICK DEBUG: Editor\'s choice card not found, creating it now...');
                    
                    // Ensure detailed reviews grid exists first
                    const detailedReviewsGrid = document.getElementById('detailedReviewsGrid');
                    if (!detailedReviewsGrid) {
                        console.log('❌ detailedReviewsGrid not found, cannot create card');
                        return;
                    }
                    
                    // Get editor's choice config
                    const editorsConfig = window.EDITORS_CHOICE_CONFIG || {};
                    if (!editorsConfig.useManualOverride || !editorsConfig.manualOverride) {
                        console.log('❌ Manual override not configured');
                        return;
                    }
                    
                    // Create the card using ProductRenderer
                    const productRenderer = new ProductRenderer();
                    productRenderer.createManualEditorsChoiceReview();
                    
                    console.log('🔄 Card creation initiated, waiting for completion...');
                    
                    // Wait for creation to complete, then use SAME delay as handleAnchorScrolling
                    setTimeout(() => {
                        targetElement = document.getElementById(targetId);
            if (targetElement) {
                            console.log('✅ Editor\'s choice card created successfully');
                            // Use EXACT same delay as handleAnchorScrolling (800ms total)
                            setTimeout(performEnhancedScroll, 800);
                        } else {
                            console.log('❌ Failed to create editor\'s choice card');
                        }
                    }, 100);
                } else if (targetElement) {
                    console.log('✅ BUTTON CLICK DEBUG: Editor\'s choice card already exists');
                    // Use SAME delay as handleAnchorScrolling even when card exists
                    console.log('🔍 BUTTON CLICK DEBUG: Setting 800ms timeout for performEnhancedScroll');
                    setTimeout(performEnhancedScroll, 800);
                } else {
                    console.log('❌ BUTTON CLICK DEBUG: Target element not found and not editor\'s choice');
                }
            };
            
            // Function to perform the enhanced scroll - EXACT SAME METHOD AS WORKING PAGE REFRESH
            const performEnhancedScroll = () => {
                console.log('🔍 BUTTON CLICK DEBUG: performEnhancedScroll called');
                const targetElement = document.getElementById(targetId);
                console.log('🔍 BUTTON CLICK DEBUG: targetElement in performEnhancedScroll:', !!targetElement);
                
                if (targetElement) {
                    console.log('📐 BUTTON CLICK DEBUG: Target element found, using EXACT SAME method as working page refresh...');
                    
                    // Force layout recalculation before scroll positioning
                    targetElement.offsetHeight; // Trigger reflow
                    
                    // Use EXACT SAME calculation as handleAnchorScrolling() - the working method
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const extraSpacing = 0; // Extra spacing for editor's choice card
                    const enhancedOffset = CONFIG.scrollOffset + extraSpacing;
                    const offsetPosition = elementPosition + window.pageYOffset - enhancedOffset;
                    
                    console.log('🔍 BUTTON CLICK - Detailed scroll debugging:', {
                        elementPosition: elementPosition,
                        pageYOffset: window.pageYOffset,
                        CONFIG_scrollOffset: CONFIG.scrollOffset,
                        extraSpacing: extraSpacing,
                        enhancedOffset: enhancedOffset,
                        finalOffsetPosition: offsetPosition,
                        targetElementRect: targetElement.getBoundingClientRect(),
                        windowHeight: window.innerHeight,
                        documentHeight: document.documentElement.scrollHeight
                    });
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                    
                    console.log('📍 Editor\'s Choice BUTTON CLICK scrolled using EXACT SAME working method as page refresh');
                
                // Apply consistent expand animation for Editor's Choice
                targetElement.classList.add('expand-highlight-animation');
                setTimeout(() => {
                    targetElement.classList.remove('expand-highlight-animation');
                }, 2000);
                
                console.log('📍 Editor\'s Choice scrolled to:', targetId, '- Applied expand animation');
            } else {
                    console.log('❌ Target element still not found after creation attempt');
            }
            };
            
            // Start the process
            console.log('🔍 BUTTON CLICK DEBUG: About to call ensureCardExists');
            ensureCardExists();
        }, { capture: true }); // Use capture phase to ensure we run first
        
        console.log('✅ Editor\'s Choice button setup complete with exclusive event handler');
    }
    
    /**
     * Create a special review card for manual override editor's choice
     */
    createEditorsChoiceReviewCard() {
        const editorsConfig = this.editorsChoiceConfig;
        console.log('🔍 createEditorsChoiceReviewCard called with config:', editorsConfig);
        
        if (!editorsConfig.useManualOverride) {
            console.log('❌ Manual override not enabled, skipping review card creation');
            return;
        }
        
        const product = editorsConfig.manualOverride;
        console.log('📝 Creating review card for manual product:', product);
        
        const detailedReviewsGrid = document.getElementById('detailedReviewsGrid');
        
        if (!detailedReviewsGrid) {
            console.log('❌ detailedReviewsGrid not found, retrying in 100ms');
            setTimeout(() => this.createEditorsChoiceReviewCard(), 100);
            return;
        }
        
        // Check if editor's choice review already exists
        let editorsReviewCard = document.getElementById('editors-choice-review');
        
        if (!editorsReviewCard) {
            // Create new editor's choice review card using ProductRenderer
            const productRenderer = new ProductRenderer();
            editorsReviewCard = productRenderer.createEditorsChoiceReviewHTML(product);
            // Insert at the beginning of the reviews grid
            detailedReviewsGrid.insertBefore(editorsReviewCard, detailedReviewsGrid.firstChild);
            console.log('✅ Editor\'s choice review card created and inserted');
        } else {
            // Update existing card using ProductRenderer
            const productRenderer = new ProductRenderer();
            const newCard = productRenderer.createEditorsChoiceReviewHTML(product);
            editorsReviewCard.replaceWith(newCard);
            console.log('✅ Editor\'s choice review card updated');
        }
        
        // Force apply gold styling after creation
        setTimeout(() => {
            const reviewCard = document.getElementById('editors-choice-review');
            if (reviewCard) {
                reviewCard.classList.add('editors-choice-gold');
                console.log('✅ Gold styling applied to editor\'s choice review card');
            }
        }, 100);
    }
    
    /**
     * Apply gold gradient styling to editor's choice elements
     */
    applyEditorsChoiceGoldStyling() {
        const selectedKey = this.getSelectedProductKey();
        
        // Top pick section styling is now handled by component override system
        // No need to apply editors-choice-gold class to top pick section
        console.log('✅ Top pick section styling handled by component override system');
        
        // If it's one of the 10 products, apply gold styling to that product card and review
        if (selectedKey !== 'editors-choice-manual') {
            const productNumber = selectedKey.replace('product', '');
            
            // Style the product card
            const productCard = document.getElementById(`product-${productNumber}`);
            if (productCard) {
                productCard.classList.add('editors-choice-gold');
                console.log(`✅ Gold styling applied to product card ${productNumber}`);
            }
            
            // Style the detailed review card
            const reviewCard = document.getElementById(`review-${productNumber}`);
            if (reviewCard) {
                reviewCard.classList.add('editors-choice-gold');
                console.log(`✅ Gold styling applied to review card ${productNumber}`);
            }
        } else {
            console.log('✅ Manual override mode - top pick section styled by component system');
        }
    }
    
    /**
     * Populate top pick section with selected product data
     */
    populateTopPick() {
        const product = this.getEditorsChoiceProduct();
        if (!product) {
            console.error('❌ No product data found for top pick');
            return;
        }
        
        console.log('🎯 Editor\'s Choice Product:', {
            name: product.name,
            hasPerks: !!product.perks,
            perksCount: product.perks?.length || 0,
            samplePerk: product.perks?.[0],
            perkStructure: product.perks?.slice(0, 2)
        });
        
        if (!product) {
            console.error('❌ No product found for Editor\'s Choice');
            return;
        }
        
        // Update title based on display configuration
        this.updateTopPickTitle(product);
        
        // Update rating stars
        const starsContainer = this.topPickSection.querySelector('.stars');
        if (starsContainer) {
            starsContainer.innerHTML = this.generateStars(product.rating);
        }
        
        // Populate section content dynamically (respects displaySection setting)
        const featuresContainer = this.topPickSection.querySelector('.top-pick-features');
        console.log('🔍 Editor\'s Choice section debug:', {
            hasTopPickSection: !!this.topPickSection,
            hasContainer: !!featuresContainer,
            displaySection: window.SECTION_TITLES?.productCards?.displaySection,
            productName: product.name,
            usingProductCardsDisplaySection: true
        });
        
        if (!featuresContainer) {
            console.error('❌ Features container not found! Looking for .top-pick-features');
            return;
        }
        
        // Get display section setting from productCards for consistency (not separate editorsChoice setting)
        const displaySection = window.SECTION_TITLES?.productCards?.displaySection || 'perks';
        let sectionData = [];
        let sectionTitle = '';
        let sectionIcon = '';
        
        // Get data based on displaySection setting
        if (displaySection === 'perks') {
            sectionData = product.perks || [];
            sectionTitle = window.SECTION_TITLES?.getSection?.('perks')?.title || window.SECTION_TITLES?.perks?.title || 'Key Features';
            sectionIcon = window.SECTION_TITLES?.getSection?.('perks')?.icon || window.SECTION_TITLES?.perks?.icon || 'fas fa-star';
        } else if (displaySection === 'specs') {
            sectionData = product.specifications || [];
            sectionTitle = window.SECTION_TITLES?.getSection?.('specs')?.title || window.SECTION_TITLES?.specs?.title || 'Technical Specifications';
            sectionIcon = window.SECTION_TITLES?.getSection?.('specs')?.icon || window.SECTION_TITLES?.specs?.icon || 'fas fa-cogs';
        } else if (displaySection === 'features') {
            sectionData = product.features || [];
            sectionTitle = window.SECTION_TITLES?.getSection?.('features')?.title || window.SECTION_TITLES?.features?.title || 'Key Features';
            sectionIcon = window.SECTION_TITLES?.getSection?.('features')?.icon || window.SECTION_TITLES?.features?.icon || 'fas fa-list';
        }
        
        console.log(`🔍 Editor's Choice using section "${displaySection}" (from productCards.displaySection):`, {
            sectionData: sectionData.slice(0, window.SECTION_TITLES?.editorsChoice?.featureCount || 3),
            sectionTitle,
            sectionIcon,
            dataLength: sectionData.length
        });
        
        if (!sectionData || sectionData.length === 0) {
            console.error(`❌ No ${displaySection} data found in product:`, product.name);
            featuresContainer.innerHTML = `<p style="color: red;">No ${displaySection} available</p>`;
            return;
        }
        
        if (featuresContainer && sectionData) {
            let sectionHTML = '';
            
            // Get configurable feature count from SECTION_TITLES.editorsChoice (default: 3)
            const maxItems = window.SECTION_TITLES?.editorsChoice?.featureCount || 3;
            const itemsToShow = sectionData.slice(0, maxItems);
            
            itemsToShow.forEach((item, index) => {
                let itemText = '';
                let iconClass = '';
                
                if (displaySection === 'specs') {
                    // Specifications format: { name: "...", value: "...", icon: "..." }
                    itemText = `${item.name}: ${item.value}`;
                    iconClass = item.icon || 'fas fa-cogs';
                    console.log(`🔧 Spec item ${index + 1}: "${itemText}" with icon "${iconClass}" (from item.icon: ${item.icon})`);
                } else {
                    // Features/Perks format: { text: "...", icon: "..." } or string
                    if (typeof item === 'object' && item.icon) {
                        // Item has both text and icon - use them!
                        itemText = item.text || `${displaySection} ${index + 1}`;
                        iconClass = item.icon;
                        console.log(`✅ ${displaySection} item ${index + 1}: "${itemText}" with CUSTOM icon "${iconClass}"`);
                    } else if (typeof item === 'object' && item.text) {
                        // Item has text but no icon - use fallback
                        itemText = item.text;
                        iconClass = sectionIcon;
                        console.log(`⚠️ ${displaySection} item ${index + 1}: "${itemText}" with FALLBACK icon "${iconClass}" (no item.icon found)`);
                    } else {
                        // Item is just a string - use fallback
                        itemText = item;
                        iconClass = sectionIcon;
                        console.log(`⚠️ ${displaySection} item ${index + 1}: "${itemText}" with FALLBACK icon "${iconClass}" (string item, no icon property)`);
                    }
                }
                
                sectionHTML += `
                    <div class="feature">
                        <i class="${iconClass}"></i>
                        <span>${itemText}</span>
                    </div>
                `;
                
                console.log(`✅ Added ${displaySection} item ${index + 1}: ${itemText} with icon ${iconClass}`);
            });
            
            featuresContainer.innerHTML = sectionHTML;
            console.log(`✅ ${sectionTitle} populated in Editor's Choice section`);
        } else {
            console.error(`❌ Failed to populate ${displaySection} - missing container or data`);
        }
        
        // Template renderer will handle the pricing section automatically via initializePricingSections()
        
        log('Top pick section populated with selected product data');
    }
    

    
    /**
     * Update top pick title based on display configuration
     */
    updateTopPickTitle(product) {
        const titleElement = this.topPickSection.querySelector('.top-pick-title');
        if (!titleElement || !product) return;
        
        const titleDisplay = product.titleDisplay;
        if (!titleDisplay) {
            // Default to text if no configuration
            titleElement.innerHTML = product.name;
            return;
        }
        
        console.log('🎯 Updating top pick title:', {
            type: titleDisplay.type,
            logoImage: titleDisplay.logoImage,
            logoScale: titleDisplay.logoScale,
            productName: product.name
        });
        
        switch (titleDisplay.type) {
            case 'image':
                titleElement.innerHTML = `<img src="${titleDisplay.logoImage}" alt="${titleDisplay.logoAlt || product.name}" class="top-pick-title-logo" style="transform: scale(${titleDisplay.logoScale || 1.0}); max-height: 60px; object-fit: contain;">`;
                break;
                
            case 'combined':
                const gap = titleDisplay.gap || 'var(--spacing-md)';
                const isNegativeGap = gap.startsWith('-');
                
                if (isNegativeGap) {
                    // For negative gaps, use margin-left on text instead of CSS gap
                    titleElement.innerHTML = `
                        <div class="top-pick-title-combined" style="gap: 0;">
                            <img src="${titleDisplay.logoImage}" alt="${titleDisplay.logoAlt || product.name}" class="top-pick-title-logo" style="transform: scale(${titleDisplay.logoScale || 1.0}); max-height: 40px; object-fit: contain;">
                            <span class="top-pick-title-text" style="margin-left: ${gap};">${product.name}</span>
                        </div>
                    `;
                } else {
                    // For positive gaps, use CSS gap property
                    titleElement.innerHTML = `
                        <div class="top-pick-title-combined" style="gap: ${gap};">
                            <img src="${titleDisplay.logoImage}" alt="${titleDisplay.logoAlt || product.name}" class="top-pick-title-logo" style="transform: scale(${titleDisplay.logoScale || 1.0}); max-height: 40px; object-fit: contain;">
                            <span class="top-pick-title-text">${product.name}</span>
                        </div>
                    `;
                }
                break;
                
            case 'text':
            default:
                titleElement.innerHTML = product.name;
                break;
        }
    }
    
    /**
     * Update top pick image with selected product
     */
    updateTopPickImage() {
        const product = this.getEditorsChoiceProduct();
        if (!product) return;
        
        const topPickImage = this.topPickSection.querySelector('.top-pick-image img');
        if (topPickImage) {
            // Use productImage from config (all products have productImage defined)
            const productImageSrc = product.productImage;
            topPickImage.src = productImageSrc;
            topPickImage.alt = product.name;
            
            // Apply image scaling if configured
            if (product.imageScale && product.imageScale.grid) {
                const scale = product.imageScale.grid;
                topPickImage.style.setProperty('--top-pick-image-scale', scale);
                
                // Also update the card container to accommodate the scaled image
                const topPickCard = this.topPickSection.querySelector('.top-pick-card');
                if (topPickCard) {
                    topPickCard.style.setProperty('--top-pick-image-scale', scale);
                }
                
                log(`Top pick image scaling applied: ${scale}`);
            }
        }
    }
    
    /**
     * Generate star rating HTML
     */
    generateStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let starsHTML = '';
        
        // Full stars
        for (let i = 0; i < fullStars; i++) {
            starsHTML += '<i class="fas fa-star"></i>';
        }
        
        // Half star
        if (hasHalfStar) {
            starsHTML += '<i class="fas fa-star-half-alt"></i>';
        }
        
        // Empty stars
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            starsHTML += '<i class="far fa-star"></i>';
        }
        
        return starsHTML;
    }
}

// ===========================================
// INITIALIZATION
// ===========================================

/**
 * Initialize all components when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
    log('DOM loaded, initializing components...');
    
    // Initialize all managers
    const navigation = new NavigationManager();
    const scrollManager = new ScrollManager();
    const productManager = new ProductManager();
    const animationManager = new AnimationManager();
    const formManager = new FormManager();
    const productRenderer = new ProductRenderer();
    
    // Initialize TopPickManager after ProductRenderer to ensure template renderer is available
    setTimeout(() => {
        console.log('🎯 Initializing TopPickManager...');
        const topPickManager = new TopPickManager(); 
        console.log('✅ TopPickManager initialized after ProductRenderer');
    }, 200);
    const heroMediaManager = new HeroMediaManager(); // Initialize Hero Media Manager (image/video)
    
    // Setup affiliate link tracking
    setupAffiliateTracking();
    
    // Setup keyboard navigation
    setupKeyboardNavigation();
    
    // Setup performance monitoring
    setupPerformanceMonitoring();
    
    // Handle anchor scrolling when page loads with hash
    handleAnchorScrolling();
    
    // Fix product 1 card to ensure it uses correct data
    productRenderer.fixProduct1Card();
    
    log('All components initialized successfully!');
    
    // Final safety check to ensure product 1 uses correct data
    setTimeout(() => {
        const productRenderer = new ProductRenderer();
        productRenderer.fixProduct1Card();
        
        // Also ensure manual editor's choice review card is created if needed
        const editorsConfig = window.EDITORS_CHOICE_CONFIG || {};
        if (editorsConfig.useManualOverride && editorsConfig.manualOverride) {
            const existingCard = document.getElementById('editors-choice-review');
            if (!existingCard) {
                console.log('🔄 Creating missing manual editor\'s choice review card');
                productRenderer.createManualEditorsChoiceReview();
            } else {
                // Ensure gold styling is applied
                existingCard.classList.add('editors-choice-gold');
                console.log('✅ Applied gold styling to existing manual review card');
            }
        }
        
        // Refresh comparison options to ensure manual editor's choice is included
        if (window.productComparison && typeof window.productComparison.refreshComparisonOptions === 'function') {
            window.productComparison.refreshComparisonOptions();
        }
        
        console.log('🔒 Final product 1 data verification complete');
    }, 500);
});

/**
 * Handle smooth scrolling to anchor when page loads with hash in URL
 */
function handleAnchorScrolling() {
    // Check if URL has an anchor
    const hash = window.location.hash;
    if (hash) {
        // Wait a bit for all content to load
        setTimeout(() => {
            const targetElement = document.querySelector(hash);
            if (targetElement) {
                // Check if this is the editor's choice review card
                if (hash === '#editors-choice-review') {
                    // RESTORE ORIGINAL WORKING METHOD - Use enhanced scroll behavior for editor's choice
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const extraSpacing = 0; // Extra spacing for editor's choice card
                    const enhancedOffset = CONFIG.scrollOffset + extraSpacing;
                    const offsetPosition = elementPosition + window.pageYOffset - enhancedOffset;
                    
                    console.log('🔍 PAGE REFRESH - Detailed scroll debugging:', {
                        elementPosition: elementPosition,
                        pageYOffset: window.pageYOffset,
                        CONFIG_scrollOffset: CONFIG.scrollOffset,
                        extraSpacing: extraSpacing,
                        enhancedOffset: enhancedOffset,
                        finalOffsetPosition: offsetPosition,
                        targetElementRect: targetElement.getBoundingClientRect(),
                        windowHeight: window.innerHeight,
                        documentHeight: document.documentElement.scrollHeight
                    });
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                    
                    console.log(`📍 PAGE REFRESH - Auto-scrolled to editor's choice with ORIGINAL WORKING enhanced positioning: ${hash}`);
                } else {
                    // Use regular scroll behavior for other elements
                scrollToElement(targetElement);
                log(`Auto-scrolled to anchor: ${hash}`);
                }
                
                // Track anchor navigation
                if (CONFIG.enableTracking) {
                    trackEvent('navigation', 'anchor_scroll', hash);
                }
            } else {
                console.warn(`Anchor target not found: ${hash}`);
            }
        }, 800); // Delay to ensure all content is loaded
    }
}

/**
 * Setup affiliate link tracking
 */
function setupAffiliateTracking() {
    const affiliateLinks = document.querySelectorAll(CONFIG.selectors.affiliateLinks);
    
    affiliateLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Small delay to ensure tracking fires before redirect
            e.preventDefault();
            
            trackAffiliateClick(link);
            
            // Add visual feedback
            link.style.transform = 'scale(0.95)';
            setTimeout(() => {
                link.style.transform = 'scale(1)';
            }, 100);
            
            // Redirect after short delay
            setTimeout(() => {
                window.open(link.href, '_blank', 'noopener,noreferrer');
            }, 100);
        });
    });
    
    log(`Affiliate tracking setup for ${affiliateLinks.length} links`);
}

/**
 * Setup keyboard navigation
 */
function setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Check if user is typing in an input field
        const activeElement = document.activeElement;
        const isTyping = activeElement && (
            activeElement.tagName === 'INPUT' ||
            activeElement.tagName === 'TEXTAREA' ||
            activeElement.tagName === 'SELECT' ||
            activeElement.isContentEditable ||
            activeElement.getAttribute('contenteditable') === 'true'
        );
        
        // If user is typing, don't trigger keyboard shortcuts
        if (isTyping) {
            return;
        }
        
        // Press 'T' to go to top
        if (e.key === 't' || e.key === 'T') {
            if (!e.ctrlKey && !e.metaKey) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                trackEvent('keyboard', 'scroll_to_top', 'hotkey');
            }
        }
        
        // Press 'H' to go to home/hero
        if (e.key === 'h' || e.key === 'H') {
            if (!e.ctrlKey && !e.metaKey) {
                e.preventDefault();
                const heroSection = document.querySelector('.hero-section');
                if (heroSection) {
                    scrollToElement(heroSection, 0);
                    trackEvent('keyboard', 'scroll_to_hero', 'hotkey');
                }
            }
        }
    });
    
    log('Keyboard navigation setup completed');
}

/**
 * Setup performance monitoring
 */
function setupPerformanceMonitoring() {
    // Track page load time
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        trackEvent('performance', 'page_load', 'load_time', Math.round(loadTime));
        log(`Page loaded in ${Math.round(loadTime)}ms`);
    });
    
    // Track scroll depth
    let maxScrollDepth = 0;
    const trackScrollDepth = throttle(() => {
        const scrollDepth = Math.round(
            (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
        );
        
        if (scrollDepth > maxScrollDepth) {
            maxScrollDepth = scrollDepth;
            
            // Track milestone scroll depths
            if (scrollDepth >= 25 && scrollDepth < 50) {
                trackEvent('scroll', 'depth_25', 'scroll_depth');
            } else if (scrollDepth >= 50 && scrollDepth < 75) {
                trackEvent('scroll', 'depth_50', 'scroll_depth');
            } else if (scrollDepth >= 75 && scrollDepth < 100) {
                trackEvent('scroll', 'depth_75', 'scroll_depth');
            } else if (scrollDepth >= 100) {
                trackEvent('scroll', 'depth_100', 'scroll_depth');
            }
        }
    }, 1000);
    
    window.addEventListener('scroll', trackScrollDepth);
    
    log('Performance monitoring setup completed');
}

// ===========================================
// EXPORT FOR TESTING
// ===========================================

// Export classes for testing purposes
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        NavigationManager,
        ScrollManager,
        ProductManager,
        AnimationManager,
        FormManager,
        trackEvent,
        CONFIG
    };
} 