/**
 * AUTO SLIDER JAVASCRIPT
 * 
 * Modular JavaScript for the auto slider system.
 * Creates and manages auto-sliding image carousels.
 */

class AutoSlider {
    constructor(config, containerId) {
        this.config = config;
        this.containerId = containerId;
        this.container = null;
        this.wrapper = null;
        this.isPlaying = true;
        this.animationDuration = 0;
        
        this.init();
    }

    init() {
        this.createSliderHTML();
        this.setupAnimation();
        this.setupEventListeners();
        this.handleResponsive();
    }

    createSliderHTML() {
        // Find or create container
        this.container = document.getElementById(this.containerId);
        if (!this.container) {
            console.error(`Auto Slider: Container with ID '${this.containerId}' not found`);
            return;
        }

        // Apply custom styling from config
        this.applyCustomStyling();

        // Create wrapper
        this.wrapper = document.createElement('div');
        this.wrapper.className = 'auto-slider-wrapper';

        // Create items (duplicate for seamless loop)
        const allImages = [...this.config.images, ...this.config.images];
        
        allImages.forEach((image, index) => {
            const item = document.createElement('div');
            item.className = 'auto-slider-item';
            
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.alt;
            img.style.width = image.width;
            img.style.height = image.height;
            img.loading = 'lazy';
            img.setAttribute('data-loading', 'true');
            img.setAttribute('data-image-index', index);
            
            // Apply individual scale if specified
            if (image.scale && image.scale !== 1.0) {
                img.style.transform = `scale(${image.scale})`;
                img.style.transformOrigin = 'center';
                // Store the original scale for hover effects
                img.setAttribute('data-original-scale', image.scale);
            }
            
            // Apply manual gap from config with responsive scaling for slider 1
            const manualGap = image.gap || 30; // Default to 30px if not specified
            const scaledGap = this.calculateResponsiveGap(manualGap);
            item.style.marginRight = `${scaledGap}px`;
            
            // Add hover event listeners for proper scaling
            img.addEventListener('mouseenter', function() {
                const originalScale = this.getAttribute('data-original-scale') || '1.0';
                const hoverScale = parseFloat(originalScale) * 1.05;
                this.style.transform = `scale(${hoverScale})`;
            });
            
            img.addEventListener('mouseleave', function() {
                const originalScale = this.getAttribute('data-original-scale') || '1.0';
                this.style.transform = `scale(${originalScale})`;
            });
            
            // Handle image load and error
            img.onload = () => {
                img.setAttribute('data-loaded', 'true');
                img.removeAttribute('data-loading');
            };
            
            img.onerror = () => {
                console.warn(`Auto Slider: Failed to load image ${image.src}`);
                img.style.display = 'none';
            };
            
            item.appendChild(img);
            this.wrapper.appendChild(item);
        });

        this.container.appendChild(this.wrapper);

        // Add controls if enabled
        if (this.config.showControls || AUTO_SLIDER_CONFIG.global.showControls) {
            this.createControls();
        }
    }

    applyCustomStyling() {
        const styling = this.config.styling;
        if (!styling) return;

        // Set CSS custom properties for styling
        if (styling.backgroundColor) {
            this.container.style.setProperty('--slider-bg-color', styling.backgroundColor);
            this.container.setAttribute('data-custom-bg', 'true');
        }
        
        if (styling.border) {
            this.container.style.setProperty('--slider-border', styling.border);
            this.container.setAttribute('data-custom-border', 'true');
        }
        
        if (styling.borderRadius) {
            this.container.style.setProperty('--slider-border-radius', styling.borderRadius);
            this.container.setAttribute('data-custom-border', 'true');
        }
        
        if (styling.boxShadow) {
            this.container.style.setProperty('--slider-box-shadow', styling.boxShadow);
            this.container.setAttribute('data-custom-shadow', 'true');
        }
        
        if (styling.padding) {
            this.container.style.setProperty('--slider-padding', styling.padding);
            this.container.setAttribute('data-custom-padding', 'true');
        }
        
        if (styling.margin) {
            this.container.style.setProperty('--slider-margin', styling.margin);
            this.container.setAttribute('data-custom-margin', 'true');
        }

        // Set height
        if (this.config.height) {
            this.container.style.height = this.config.height;
        }
    }

    calculateResponsiveGap(baseGap) {
        const screenWidth = window.innerWidth;
        
        if (this.config.id === 'auto-slider-2') {
            // Slider 2 uses responsive gap values from config
            return this.getConfigResponsiveGap();
        }
        
        // Slider 1 uses proportional scaling of manual gaps
        let scaleFactor = 1.0; // Desktop default
        
        if (screenWidth <= 480) {
            // Extra small: 50% of original gap
            scaleFactor = 0.5;
        } else if (screenWidth <= 768) {
            // Mobile: 67% of original gap
            scaleFactor = 0.67;
        } else if (screenWidth <= 1024) {
            // Tablet: 83% of original gap
            scaleFactor = 0.83;
        }
        
        return Math.round(baseGap * scaleFactor);
    }

    getConfigResponsiveGap() {
        // Get the appropriate responsive gap from AUTO_SLIDER_CONFIG
        const screenWidth = window.innerWidth;
        let responsiveConfig;
        
        if (screenWidth <= 480) {
            responsiveConfig = AUTO_SLIDER_CONFIG.responsive.extraSmall;
        } else if (screenWidth <= 768) {
            responsiveConfig = AUTO_SLIDER_CONFIG.responsive.mobile;
        } else if (screenWidth <= 1024) {
            responsiveConfig = AUTO_SLIDER_CONFIG.responsive.tablet;
        } else {
            responsiveConfig = AUTO_SLIDER_CONFIG.responsive.desktop;
        }
        
        // Return the gap value as a number (remove 'px' if present)
        const gapValue = responsiveConfig.gap || '30px';
        return parseInt(gapValue.replace('px', ''));
    }

    setupAnimation() {
        // Add direction class
        this.container.classList.add(`auto-slider-${this.config.direction}`);

        // Calculate animation duration based on speed and content width
        const speed = this.config.animationSpeed || AUTO_SLIDER_CONFIG.global.animationSpeed;
        
        // Estimate total width (number of images * average width + gaps)
        const imageCount = this.config.images.length;
        const estimatedImageWidth = 100; // Rough estimate
        const gap = 30; // Default gap
        const totalWidth = imageCount * (estimatedImageWidth + gap);
        
        // Duration = distance / speed (in seconds)
        this.animationDuration = totalWidth / speed;
        
        // Apply animation
        this.wrapper.style.animationDuration = `${this.animationDuration}s`;
    }

    createControls() {
        const controls = document.createElement('div');
        controls.className = 'auto-slider-controls';

        const playPauseBtn = document.createElement('button');
        playPauseBtn.className = 'auto-slider-control-btn';
        playPauseBtn.textContent = '⏸️';
        playPauseBtn.setAttribute('aria-label', 'Pause slider');
        
        playPauseBtn.addEventListener('click', () => {
            this.togglePlayPause();
        });

        controls.appendChild(playPauseBtn);
        this.container.appendChild(controls);
        
        this.playPauseBtn = playPauseBtn;
    }

    setupEventListeners() {
        // Pause on hover if enabled
        if (this.config.pauseOnHover !== false && AUTO_SLIDER_CONFIG.global.pauseOnHover) {
            this.container.addEventListener('mouseenter', () => {
                this.pause();
            });

            this.container.addEventListener('mouseleave', () => {
                if (this.isPlaying) {
                    this.play();
                }
            });
        }

        // Handle window resize for responsive behavior
        if (this.config.responsive !== false && AUTO_SLIDER_CONFIG.global.responsive) {
            window.addEventListener('resize', () => {
                this.handleResponsive();
            });
        }

        // Handle reduced motion preference
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            this.pause();
            this.isPlaying = false;
        }
    }

    handleResponsive() {
        const width = window.innerWidth;
        let responsiveConfig;

        if (width <= 480) {
            responsiveConfig = AUTO_SLIDER_CONFIG.responsive.extraSmall;
        } else if (width <= 768) {
            responsiveConfig = AUTO_SLIDER_CONFIG.responsive.mobile;
        } else if (width <= 1024) {
            responsiveConfig = AUTO_SLIDER_CONFIG.responsive.tablet;
        } else {
            responsiveConfig = AUTO_SLIDER_CONFIG.responsive.desktop;
        }

        // Apply responsive settings based on slider type
        if (responsiveConfig) {
            // Determine which slider this is
            const isSlider1 = this.containerId === 'auto-slider-1';
            const isSlider2 = this.containerId === 'auto-slider-2';
            
            // Apply appropriate height based on slider type
            if (isSlider1 && responsiveConfig.slider1Height) {
                this.container.style.height = responsiveConfig.slider1Height;
            } else if (isSlider2 && responsiveConfig.slider2Height) {
                this.container.style.height = responsiveConfig.slider2Height;
            } else if (responsiveConfig.sliderHeight) {
                // Fallback to generic height
                this.container.style.height = responsiveConfig.sliderHeight;
            }
            
            // Apply appropriate image height based on slider type
            const images = this.container.querySelectorAll('.auto-slider-item img');
            images.forEach(img => {
                if (isSlider1 && responsiveConfig.slider1ImageHeight) {
                    img.style.height = responsiveConfig.slider1ImageHeight;
                } else if (isSlider2 && responsiveConfig.slider2ImageHeight) {
                    img.style.height = responsiveConfig.slider2ImageHeight;
                } else if (responsiveConfig.imageHeight) {
                    // Fallback to generic image height
                    img.style.height = responsiveConfig.imageHeight;
                }
            });
            
            if (responsiveConfig.gap) {
                this.container.style.setProperty('--slider-gap', responsiveConfig.gap);
            }
        }
    }

    play() {
        this.wrapper.classList.remove('paused');
        if (this.playPauseBtn) {
            this.playPauseBtn.textContent = '⏸️';
            this.playPauseBtn.setAttribute('aria-label', 'Pause slider');
        }
    }

    pause() {
        this.wrapper.classList.add('paused');
        if (this.playPauseBtn) {
            this.playPauseBtn.textContent = '▶️';
            this.playPauseBtn.setAttribute('aria-label', 'Play slider');
        }
    }

    togglePlayPause() {
        if (this.isPlaying) {
            this.pause();
            this.isPlaying = false;
        } else {
            this.play();
            this.isPlaying = true;
        }
    }

    destroy() {
        if (this.container) {
            this.container.innerHTML = '';
            this.container.className = '';
            this.container.removeAttribute('style');
        }
    }
}

/**
 * AUTO SLIDER MANAGER
 * Manages multiple sliders on a page
 */
class AutoSliderManager {
    constructor() {
        this.sliders = new Map();
    }

    createSlider(sliderId, containerId) {
        const config = AUTO_SLIDER_CONFIG[sliderId];
        if (!config) {
            console.error(`Auto Slider: Configuration for '${sliderId}' not found`);
            return null;
        }

        const slider = new AutoSlider(config, containerId);
        this.sliders.set(sliderId, slider);
        return slider;
    }

    destroySlider(sliderId) {
        const slider = this.sliders.get(sliderId);
        if (slider) {
            slider.destroy();
            this.sliders.delete(sliderId);
        }
    }

    pauseAll() {
        this.sliders.forEach(slider => slider.pause());
    }

    playAll() {
        this.sliders.forEach(slider => slider.play());
    }

    destroyAll() {
        this.sliders.forEach(slider => slider.destroy());
        this.sliders.clear();
    }

    recalculateGaps() {
        this.sliders.forEach(slider => {
            const items = slider.wrapper.querySelectorAll('.auto-slider-item');
            
            if (slider.config.id === 'auto-slider-1') {
                // Slider 1: Recalculate proportional gaps
                items.forEach((item, index) => {
                    const imageConfig = slider.config.images[index % slider.config.images.length];
                    if (imageConfig && imageConfig.gap !== undefined) {
                        const manualGap = imageConfig.gap;
                        const scaledGap = slider.calculateResponsiveGap(manualGap);
                        item.style.marginRight = `${scaledGap}px`;
                    }
                });
            } else if (slider.config.id === 'auto-slider-2') {
                // Slider 2: Apply config responsive gap to all items
                const configGap = slider.getConfigResponsiveGap();
                items.forEach(item => {
                    item.style.marginRight = `${configGap}px`;
                });
            }
        });
    }
}

/**
 * INITIALIZE SLIDERS
 * Call this function to initialize all sliders on a page
 */
function initializeAutoSliders() {
    const manager = new AutoSliderManager();
    
    // Create slider 1 if container exists
    const slider1Container = document.getElementById('auto-slider-1');
    if (slider1Container) {
        manager.createSlider('slider1', 'auto-slider-1');
        console.log('Auto Slider 1 initialized');
    }
    
    // Create slider 2 if container exists
    const slider2Container = document.getElementById('auto-slider-2');
    if (slider2Container) {
        manager.createSlider('slider2', 'auto-slider-2');
        console.log('Auto Slider 2 initialized');
    }
    
    // Create slider 3 if container exists
    const slider3Container = document.getElementById('auto-slider-3');
    if (slider3Container) {
        manager.createSlider('slider3', 'auto-slider-3');
        console.log('Auto Slider 3 initialized');
    }
    
    // Store manager globally for external access
    window.autoSliderManager = manager;
    
    // Add resize listener to recalculate gaps for slider 1
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            manager.recalculateGaps();
        }, 150); // Debounce resize events
    });
    
    return manager;
}

/**
 * AUTO INITIALIZATION
 * Initialize sliders when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function() {
    // Only initialize if AUTO_SLIDER_CONFIG is available
    if (typeof AUTO_SLIDER_CONFIG !== 'undefined') {
        initializeAutoSliders();
    } else {
        console.warn('Auto Slider: Configuration not loaded. Make sure to include auto-slider-config.js before auto-slider.js');
    }
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AutoSlider, AutoSliderManager, initializeAutoSliders };
}
