// Popup Overlay Manager
class PopupManager {
    constructor() {
        this.config = window.POPUP_CONFIG || {};
        this.isInitialized = false;
        this.isShowing = false;
        this.timers = [];
        this.eventListeners = [];
        this.testMode = this.config.testMode || false;
        
        // Session management
        this.sessionKey = 'popup_shown_session';
        this.lastShownKey = 'popup_last_shown';
        
        this.init();
    }

    init() {
        if (!this.config.enabled || this.isInitialized) return;
        
        this.log('Initializing Popup Manager', { testMode: this.testMode });
        
        // Test mode: Reset tracking on page refresh
        if (this.testMode && this.config.testModeSettings?.resetOnRefresh) {
            this.reset();
        }

        // Test mode: Add test button
        if (this.testMode && this.config.testModeSettings?.showButton) {
            this.addTestButton();
        }

        // Check if popup should be shown
        if (!this.shouldShowPopup()) {
            this.log('Popup conditions not met');
            if (!this.testMode) return;
        }

        this.setupTriggers();
        this.isInitialized = true;
    }

    log(message, data = null) {
        if (this.testMode && this.config.testModeSettings?.consoleLogging) {
            console.log(`[Popup Manager] ${message}`, data || '');
        }
    }

    shouldShowPopup() {
        // Test mode: ignore limits if configured
        if (this.testMode && this.config.testModeSettings?.ignoreSessionLimits) {
            this.log('Test mode: Ignoring session limits');
            return true;
        }

        // Check session limit
        const sessionShown = sessionStorage.getItem(this.sessionKey);
        if (sessionShown && parseInt(sessionShown) >= this.config.maxShowsPerSession) {
            this.log('Session limit reached', { shown: sessionShown, max: this.config.maxShowsPerSession });
            return false;
        }

        // Check cookie expiry
        const lastShown = localStorage.getItem(this.lastShownKey);
        if (lastShown) {
            const hoursSinceLastShown = (Date.now() - parseInt(lastShown)) / (1000 * 60 * 60);
            if (hoursSinceLastShown < this.config.cookieExpiry) {
                this.log('Cookie expiry not reached', { hoursSince: hoursSinceLastShown, required: this.config.cookieExpiry });
                return false;
            }
        }

        return true;
    }

    setupTriggers() {
        const triggers = this.config.advanced?.triggers || {};

        // Test mode: Show immediately if configured
        if (this.testMode && this.config.testModeSettings?.showImmediately) {
            this.log('Test mode: Showing immediately');
            setTimeout(() => this.showPopup(), 100); // Small delay to ensure DOM is ready
            return;
        }

        // Time-based trigger
        if (triggers.timeOnPage !== false) {
            const delay = this.config.showDelay || 0;
            this.log('Setting up time trigger', { delay });
            
            if (delay === 0) {
                // If delay is 0, show immediately after a small timeout
                setTimeout(() => this.showPopup(), 100);
            } else {
                const timer = setTimeout(() => {
                    this.showPopup();
                }, delay);
                this.timers.push(timer);
            }
        }

        // Scroll-based trigger
        if (triggers.scrollPercentage) {
            const scrollHandler = () => {
                const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
                if (scrollPercent >= triggers.scrollValue) {
                    this.showPopup();
                    window.removeEventListener('scroll', scrollHandler);
                }
            };
            window.addEventListener('scroll', scrollHandler);
            this.eventListeners.push({ element: window, event: 'scroll', handler: scrollHandler });
        }

        // Exit intent trigger
        if (triggers.exitIntent) {
            const exitHandler = (e) => {
                if (e.clientY <= 0) {
                    this.showPopup();
                    document.removeEventListener('mouseleave', exitHandler);
                }
            };
            document.addEventListener('mouseleave', exitHandler);
            this.eventListeners.push({ element: document, event: 'mouseleave', handler: exitHandler });
        }

        // Page views trigger
        if (triggers.pageViews) {
            const pageViews = parseInt(sessionStorage.getItem('page_views') || '0') + 1;
            sessionStorage.setItem('page_views', pageViews.toString());
            if (pageViews >= triggers.pageViewCount) {
                const timer = setTimeout(() => this.showPopup(), 1000);
                this.timers.push(timer);
            }
        }
    }

    addTestButton() {
        // Create test button
        const testButton = document.createElement('button');
        testButton.id = 'popup-test-button';
        testButton.innerHTML = '🎯 Test Popup';
        testButton.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            z-index: 99999;
            background: #ff4444;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 12px;
            font-weight: bold;
            box-shadow: 0 2px 10px rgba(0,0,0,0.3);
            transition: all 0.3s ease;
        `;
        
        testButton.addEventListener('click', () => {
            this.log('Test button clicked');
            this.forceShow();
        });

        testButton.addEventListener('mouseenter', () => {
            testButton.style.background = '#ff6666';
            testButton.style.transform = 'scale(1.05)';
        });

        testButton.addEventListener('mouseleave', () => {
            testButton.style.background = '#ff4444';
            testButton.style.transform = 'scale(1)';
        });

        document.body.appendChild(testButton);
        this.log('Test button added');

        // Add reset button
        const resetButton = document.createElement('button');
        resetButton.innerHTML = '🔄 Reset';
        resetButton.style.cssText = testButton.style.cssText.replace('right: 10px', 'right: 140px').replace('#ff4444', '#4444ff');
        
        resetButton.addEventListener('click', () => {
            this.log('Reset button clicked');
            this.reset();
            this.closePopup();
        });

        resetButton.addEventListener('mouseenter', () => {
            resetButton.style.background = '#6666ff';
            resetButton.style.transform = 'scale(1.05)';
        });

        resetButton.addEventListener('mouseleave', () => {
            resetButton.style.background = '#4444ff';
            resetButton.style.transform = 'scale(1)';
        });

        document.body.appendChild(resetButton);
    }

    createPopupHTML() {
        const config = this.config;
        
        return `
            <div class="popup-overlay ${config.advanced?.customClasses?.overlay || ''}" id="popup-overlay">
                <div class="popup-container ${config.advanced?.customClasses?.container || ''}">
                    ${this.createAnimationHTML()}
                    
                    <div class="popup-content ${config.advanced?.customClasses?.content || ''}">
                        ${this.createProductHTML()}
                        ${this.createTitleHTML()}
                        ${this.createHighlightsHTML()}
                        ${this.createDescriptionHTML()}
                        ${this.createCTAHTML()}
                    </div>
                    
                    ${this.createCloseButtonHTML()}
                </div>
            </div>
        `;
    }

    createAnimationHTML() {
        const animConfig = this.config.topAnimation;
        if (!animConfig?.enabled) return '';

        const position = animConfig.position;
        const animation = animConfig.animation || {};
        
        // Apply scale and floatHeight from animation config
        const scale = animation.scale || 1.0;
        const floatHeight = animation.floatHeight || '15px';
        
        const style = `
            top: ${position.top};
            left: ${position.left};
            transform: ${position.transform || 'translateX(-50%)'};
            width: ${position.width};
            height: ${position.height};
            --float-height: ${floatHeight};
            --animation-scale: ${scale};
        `;

        let content = '';
        
        if (animConfig.type === 'video' && animConfig.video.src) {
            content = `
                <video autoplay ${animConfig.video.loop ? 'loop' : ''} 
                       ${animConfig.video.muted ? 'muted' : ''}
                       preload="${animConfig.video.preload}"
                       ${animConfig.video.playsinline ? 'playsinline' : ''}
                       ${animConfig.video.disablePictureInPicture ? 'disablepictureinpicture' : ''}
                       style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">
                    <source src="${animConfig.video.src}" type="video/mp4">
                </video>
            `;
        } else if (animConfig.type === 'image' && animConfig.image.src) {
            content = `<img src="${animConfig.image.src}" alt="${animConfig.image.alt}" />`;
        } else if (animConfig.type === 'animation') {
            // Map config animation types to CSS class names
            const animTypeMap = {
                'giftBox': 'gift-box',
                'trophy': 'trophy',
                'coins': 'coins',
                'custom': 'custom'
            };
            const animType = animTypeMap[animConfig.animation?.type] || 'gift-box';
            return `<div class="popup-animation ${animType}" style="${style}"></div>`;
        } else {
            // Fallback to gift box animation
            return `<div class="popup-animation gift-box" style="${style}"></div>`;
        }

        return `<div class="popup-animation" style="${style}">${content}</div>`;
    }

    createProductHTML() {
        const product = this.config.product;
        if (!product?.name) return '';

        // Handle both old and new logo formats
        let logoConfig = product.logo || {};
        let logoType = 'text';
        
        // Debug logging
        if (this.testMode && this.config.testModeSettings?.consoleLogging) {
            console.log('[Popup] Logo config:', product.logo);
            console.log('[Popup] Logo type:', typeof product.logo);
        }
        
        // Check if using old format (logo is a string)
        if (typeof product.logo === 'string') {
            logoConfig = {
                type: 'text',
                text: {
                    content: product.logo,
                    size: product.logoSize || '24px',
                    background: product.logoBackground || 'rgba(255, 255, 255, 0.2)'
                }
            };
        } else if (product.logo && typeof product.logo === 'object') {
            logoType = logoConfig.type || 'text';
        } else {
            // Fallback to default text logo
            logoConfig = {
                type: 'text',
                text: {
                    content: '🐼',
                    size: '24px',
                    background: 'rgba(255, 255, 255, 0.2)'
                }
            };
        }
        
        let logoHTML = '';
        
        switch (logoType) {
            case 'image':
                if (logoConfig.image?.src) {
                    const scale = logoConfig.image.scale || 1.0;
                    const background = logoConfig.image.background || 'rgba(255, 255, 255, 0.2)';
                    const isTransparent = background === 'transparent' || background === 'none';
                    
                    logoHTML = `
                        <div class="popup-product-logo-image">
                            <img src="${logoConfig.image.src}" 
                                 alt="${logoConfig.image.alt || 'Logo'}" 
                                 style="transform: scale(${scale});" />
                        </div>
                    `;
                }
                break;
                
            case 'combined':
                if (logoConfig.combined?.imageSrc) {
                    const combinedScale = logoConfig.combined.imageScale || 1.0;
                    const combinedBaseWidth = parseInt(logoConfig.combined.imageWidth) || 48;
                    const combinedBaseHeight = parseInt(logoConfig.combined.imageHeight) || 48;
                    const combinedScaledWidth = Math.round(combinedBaseWidth * combinedScale);
                    const combinedScaledHeight = Math.round(combinedBaseHeight * combinedScale);
                    const combinedLayout = logoConfig.combined.layout || 'row';
                    const combinedSpacing = logoConfig.combined.spacing || '8px';
                    const combinedBackground = logoConfig.combined.background || 'rgba(255, 255, 255, 0.2)';
                    const isCombinedTransparent = combinedBackground === 'transparent' || combinedBackground === 'none';
                    
                    // Create layout-specific styling
                    const combinedLayoutStyle = combinedLayout === 'row' 
                        ? `display: flex; flex-direction: row; align-items: center; gap: ${combinedSpacing};`
                        : `display: flex; flex-direction: column; align-items: center; gap: ${combinedSpacing};`;
                    
                    logoHTML = `
                        <div class="popup-product-logo-combined" style="${combinedLayoutStyle}">
                            <img src="${logoConfig.combined.imageSrc}" 
                                 alt="${logoConfig.combined.imageAlt || 'Logo'}" 
                                 style="width: ${combinedScaledWidth}px; height: ${combinedScaledHeight}px;" />
                            <span class="popup-product-logo-text" 
                                  style="font-size: ${logoConfig.combined.textSize}; color: ${logoConfig.combined.textColor};">
                                ${logoConfig.combined.textContent}
                            </span>
                        </div>
                    `;
                }
                break;
                
            case 'text':
            default:
                const textConfig = logoConfig.text || {};
                
                // Debug logging
                if (this.testMode && this.config.testModeSettings?.consoleLogging) {
                    console.log('[Popup] Text config:', textConfig);
                    console.log('[Popup] Text content:', textConfig.content);
                }
                
                // Ensure we have a valid string for the logo content
                const logoContent = (textConfig.content && typeof textConfig.content === 'string') 
                    ? textConfig.content 
                    : '🐼';
                
                // Check if background is transparent
                const background = textConfig.background || 'rgba(255, 255, 255, 0.2)';
                const isTransparent = background === 'transparent' || background === 'none';
                const layout = textConfig.layout || 'column';
                const spacing = textConfig.spacing || '8px';
                
                // Create layout-specific styling
                const layoutStyle = layout === 'row' 
                    ? `display: flex; flex-direction: row; align-items: center; gap: ${spacing};`
                    : `display: flex; flex-direction: column; align-items: center; gap: ${spacing};`;
                
                logoHTML = `
                    <div class="popup-product-text-layout" style="${layoutStyle}">
                        <div class="popup-product-logo ${isTransparent ? 'transparent-bg' : ''}" 
                             style="font-size: ${textConfig.size || '24px'}; background: ${background};">
                            ${logoContent}
                        </div>
                        <div class="popup-product-name" 
                             style="font-size: ${textConfig.nameTextSize || '16px'}; color: ${textConfig.nameTextColor || '#FFFFFF'};">
                            ${product.name}
                        </div>
                    </div>
                `;
                break;
        }

        // Add transparent class to container if needed
        let containerClass = 'popup-product';
        if ((logoType === 'text' && logoHTML.includes('transparent-bg')) ||
            (logoType === 'image' && logoConfig.image?.background === 'transparent') ||
            (logoType === 'combined' && logoConfig.combined?.background === 'transparent')) {
            containerClass = 'popup-product transparent-container';
        }
        
        // Add special class for image logos to remove all padding/spacing
        if (logoType === 'image') {
            containerClass += ' image-logo-only';
        }

        return `
            <div class="${containerClass}">
                ${logoHTML}
            </div>
        `;
    }

    createTitleHTML() {
        const content = this.config.content;
        if (!content?.title) return '';

        const style = `
            color: ${content.titleColor};
            font-size: ${content.titleSize};
            font-weight: ${content.titleWeight};
            text-shadow: ${content.titleShadow};
        `;

        return `<h2 class="popup-title" style="${style}">${content.title}</h2>`;
    }

    createHighlightsHTML() {
        const highlights = this.config.content?.highlights;
        if (!highlights || !highlights.length) return '';

        const highlightItems = highlights.map((highlight, index) => {
            const style = `
                color: ${highlight.color};
                background: ${highlight.background};
                border: ${highlight.border};
                font-size: ${highlight.fontSize};
                padding: ${highlight.padding};
                border-radius: ${highlight.borderRadius};
            `;
            return `<div class="popup-highlight" style="${style}">${highlight.text}</div>`;
        }).join('');

        return `<div class="popup-highlights">${highlightItems}</div>`;
    }

    createDescriptionHTML() {
        const content = this.config.content;
        if (!content?.description) return '';

        const style = `
            color: ${content.descriptionColor};
            font-size: ${content.descriptionSize};
            line-height: ${content.descriptionLineHeight};
        `;

        return `<div class="popup-description" style="${style}">${content.description}</div>`;
    }

    createCTAHTML() {
        const cta = this.config.cta;
        if (!cta?.text) return '';

        const style = `
            background: ${cta.background};
            color: ${cta.color};
            font-size: ${cta.fontSize};
            font-weight: ${cta.fontWeight};
            padding: ${cta.padding};
            border-radius: ${cta.borderRadius};
            box-shadow: ${cta.boxShadow};
        `;

        const target = cta.target ? `target="${cta.target}"` : '';
        const href = cta.link ? `href="${cta.link}"` : 'href="#"';

        return `<a class="popup-cta" ${href} ${target} style="${style}">${cta.text}</a>`;
    }

    createCloseButtonHTML() {
        const closeBtn = this.config.closeButton;
        
        const style = `
            width: ${closeBtn.size};
            height: ${closeBtn.size};
            background: ${closeBtn.background};
            color: ${closeBtn.color};
            border-radius: ${closeBtn.borderRadius};
            top: ${closeBtn.top};
            right: ${closeBtn.right};
            font-size: ${closeBtn.fontSize};
            box-shadow: ${closeBtn.boxShadow};
            transition: ${closeBtn.transition};
        `;

        return `<button class="popup-close" style="${style}" onclick="window.popupManager.closePopup()">&times;</button>`;
    }

    showPopup() {
        if (this.isShowing) {
            this.log('Popup already showing, skipping');
            return;
        }

        this.log('Showing popup');
        this.isShowing = true;

        // Create and inject popup HTML
        const popupHTML = this.createPopupHTML();
        document.body.insertAdjacentHTML('beforeend', popupHTML);

        // Apply custom styling from config
        this.applyCustomStyling();

        // Show popup with animation
        const overlay = document.getElementById('popup-overlay');
        if (overlay) {
            this.log('Popup HTML created, showing with animation');
            // Force reflow
            overlay.offsetHeight;
            overlay.classList.add('visible');

            // Setup event listeners
            this.setupPopupEventListeners();

            // Track showing
            this.updateSessionTracking();
        } else {
            this.log('ERROR: Popup overlay element not found');
        }
    }

    applyCustomStyling() {
        const overlay = document.getElementById('popup-overlay');
        if (!overlay) return;

        // Apply overlay styling
        const overlayConfig = this.config.overlay;
        Object.assign(overlay.style, {
            backgroundColor: overlayConfig.backgroundColor,
            backdropFilter: overlayConfig.backdropFilter,
            zIndex: overlayConfig.zIndex,
            animation: overlayConfig.animation
        });

        // Apply container styling
        const container = overlay.querySelector('.popup-container');
        const containerConfig = this.config.container;
        if (container && containerConfig) {
            Object.assign(container.style, {
                maxWidth: containerConfig.maxWidth,
                borderRadius: containerConfig.borderRadius,
                boxShadow: containerConfig.boxShadow,
                background: containerConfig.background,
                padding: containerConfig.padding,
                overflow: containerConfig.overflow
            });
            
            // Apply border styling if configured
            if (containerConfig.border) {
                Object.assign(container.style, {
                    border: `${containerConfig.border.width} ${containerConfig.border.style} ${containerConfig.border.color}`
                });
            }
        }

        // Apply close button styling
        const closeButton = overlay.querySelector('.popup-close');
        const closeConfig = this.config.closeButton;
        if (closeButton && closeConfig) {
            Object.assign(closeButton.style, {
                width: closeConfig.size,
                height: closeConfig.size,
                background: closeConfig.background,
                color: closeConfig.color,
                fontSize: closeConfig.fontSize
            });

            // Set hover styles using CSS custom properties
            closeButton.style.setProperty('--hover-background', closeConfig.hoverBackground);
            closeButton.style.setProperty('--hover-color', closeConfig.hoverColor);
        }

        // Apply top section styling using CSS custom properties
        const topSectionConfig = this.config.topSection;
        if (container && topSectionConfig && topSectionConfig.enabled) {
            container.style.setProperty('--popup-top-height', topSectionConfig.height);
            container.style.setProperty('--popup-top-background', topSectionConfig.background);
            container.style.setProperty('--popup-top-border-radius', topSectionConfig.borderRadius);
        }

        // Apply CTA button styling using CSS custom properties
        const ctaButton = overlay.querySelector('.popup-cta');
        const ctaConfig = this.config.cta;
        if (ctaButton && ctaConfig) {
            Object.assign(ctaButton.style, {
                background: ctaConfig.background,
                color: ctaConfig.color,
                fontSize: ctaConfig.fontSize,
                fontWeight: ctaConfig.fontWeight,
                padding: ctaConfig.padding,
                borderRadius: ctaConfig.borderRadius,
                border: ctaConfig.border,
                boxShadow: ctaConfig.boxShadow,
                transition: ctaConfig.hover?.transition || 'all 0.3s ease'
            });

            // Set configurable hover properties using CSS custom properties
            if (ctaConfig.hover) {
                const hover = ctaConfig.hover;
                const glowColor = hover.glowColor || '#9ca3af';
                
                // Convert hex color to RGB values for CSS rgba() function
                const hexToRgb = (hex) => {
                    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                    return result ? {
                        r: parseInt(result[1], 16),
                        g: parseInt(result[2], 16),
                        b: parseInt(result[3], 16)
                    } : { r: 156, g: 163, b: 175 }; // Default to silver RGB
                };
                
                const rgbColor = hexToRgb(glowColor);
                
                ctaButton.style.setProperty('--popup-cta-hover-glow-color', glowColor);
                ctaButton.style.setProperty('--popup-cta-hover-glow-color-rgb', `${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}`);
                ctaButton.style.setProperty('--popup-cta-hover-glow-intensity', hover.glowIntensity || '0.8');
                ctaButton.style.setProperty('--popup-cta-hover-glow-size', hover.glowSize || '25px');
                ctaButton.style.setProperty('--popup-cta-hover-background', hover.backgroundHover || ctaConfig.background);
                ctaButton.style.setProperty('--popup-cta-hover-transform', hover.transform || 'translateY(-22px)');
                
                // Debug log to verify properties are being set
                if (this.testMode) {
                    console.log('🎨 CTA Hover Properties Set:', {
                        glowColor: glowColor,
                        glowRGB: `${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}`,
                        intensity: hover.glowIntensity || '0.8',
                        size: hover.glowSize || '25px',
                        transform: hover.transform || 'translateY(-22px)'
                    });
                }
            } else {
                // Fallback to default hover shadow for backwards compatibility
                ctaButton.style.setProperty('--popup-cta-hover-shadow', ctaConfig.boxShadow.replace('0 8px 20px', '0 12px 25px'));
            }
        }
    }

    setupPopupEventListeners() {
        const overlay = document.getElementById('popup-overlay');
        if (!overlay) return;

        // Close on overlay click
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                this.closePopup();
            }
        });

        // Close on ESC key
        const escHandler = (e) => {
            if (e.key === 'Escape') {
                this.closePopup();
            }
        };
        document.addEventListener('keydown', escHandler);
        this.eventListeners.push({ element: document, event: 'keydown', handler: escHandler });

        // CTA click tracking
        const ctaButton = overlay.querySelector('.popup-cta');
        if (ctaButton) {
            ctaButton.addEventListener('click', () => {
                this.log('Popup CTA clicked');
                this.trackConversion();
                
                // Close popup after a short delay if it's not opening in new tab
                if (!this.config.cta.target || this.config.cta.target !== '_blank') {
                    setTimeout(() => this.closePopup(), 300);
                }
            });
        }
    }

    closePopup() {
        if (!this.isShowing) return;

        this.log('Closing popup');
        const overlay = document.getElementById('popup-overlay');
        if (overlay) {
            overlay.classList.remove('visible');
            
            // Remove after animation
            setTimeout(() => {
                if (overlay.parentNode) {
                    overlay.parentNode.removeChild(overlay);
                }
            }, 500);
        }

        this.isShowing = false;
        this.cleanup();
    }

    updateSessionTracking() {
        // Update session counter
        const currentCount = parseInt(sessionStorage.getItem(this.sessionKey) || '0');
        sessionStorage.setItem(this.sessionKey, (currentCount + 1).toString());

        // Update last shown timestamp
        localStorage.setItem(this.lastShownKey, Date.now().toString());
    }

    trackConversion() {
        // Track conversion for analytics
        if (window.gtag) {
            window.gtag('event', 'popup_conversion', {
                event_category: 'popup',
                event_label: 'cta_click'
            });
        }

        // Custom tracking if needed
        if (typeof window.trackPopupConversion === 'function') {
            window.trackPopupConversion();
        }
    }

    cleanup() {
        // Clear timers
        this.timers.forEach(timer => clearTimeout(timer));
        this.timers = [];

        // Remove event listeners
        this.eventListeners.forEach(({ element, event, handler }) => {
            element.removeEventListener(event, handler);
        });
        this.eventListeners = [];
    }

    // Public methods for external control
    forceShow() {
        if (!this.isShowing) {
            this.showPopup();
        }
    }

    reset() {
        sessionStorage.removeItem(this.sessionKey);
        localStorage.removeItem(this.lastShownKey);
        sessionStorage.removeItem('page_views');
        this.log('Popup tracking reset');
    }

    updateConfig(newConfig) {
        this.config = { ...this.config, ...newConfig };
        if (this.isShowing) {
            this.closePopup();
            setTimeout(() => this.showPopup(), 500);
        }
    }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for other scripts to load
    setTimeout(() => {
        if (window.POPUP_CONFIG?.enabled) {
            window.popupManager = new PopupManager();
        }
    }, 1000);
});

// Make it globally accessible
window.PopupManager = PopupManager; 