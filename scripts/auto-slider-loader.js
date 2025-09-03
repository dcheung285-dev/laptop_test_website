/**
 * AUTO SLIDER LOADER
 * 
 * Modular loader for the auto slider system.
 * Similar to nav-loader.js and newsletter-loader.js
 * Use this to easily integrate sliders into any page.
 */

class AutoSliderLoader {
    constructor() {
        this.loaded = false;
        this.cssLoaded = false;
        this.configLoaded = false;
        this.jsLoaded = false;
    }

    /**
     * Load all required files for the auto slider system
     */
    async loadSliderSystem() {
        if (this.loaded) {
            console.log('Auto Slider: System already loaded');
            return;
        }

        try {
            // Load CSS
            await this.loadCSS();
            
            // Load Configuration
            await this.loadConfig();
            
            // Load JavaScript
            await this.loadJS();
            
            this.loaded = true;
            console.log('Auto Slider: System loaded successfully');
            
            // Initialize sliders after everything is loaded
            this.initializeSliders();
            
        } catch (error) {
            console.error('Auto Slider: Failed to load system', error);
        }
    }

    /**
     * Load CSS file
     */
    loadCSS() {
        return new Promise((resolve, reject) => {
            if (this.cssLoaded) {
                resolve();
                return;
            }

            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'styles/auto-slider.css';
            
            link.onload = () => {
                this.cssLoaded = true;
                console.log('Auto Slider: CSS loaded');
                resolve();
            };
            
            link.onerror = () => {
                reject(new Error('Failed to load auto-slider.css'));
            };
            
            document.head.appendChild(link);
        });
    }

    /**
     * Load configuration file
     */
    loadConfig() {
        return new Promise((resolve, reject) => {
            if (this.configLoaded || typeof AUTO_SLIDER_CONFIG !== 'undefined') {
                this.configLoaded = true;
                resolve();
                return;
            }

            const script = document.createElement('script');
            script.src = 'Configurations/auto-slider-config.js';
            
            script.onload = () => {
                this.configLoaded = true;
                console.log('Auto Slider: Configuration loaded');
                resolve();
            };
            
            script.onerror = () => {
                reject(new Error('Failed to load auto-slider-config.js'));
            };
            
            document.head.appendChild(script);
        });
    }

    /**
     * Load JavaScript file
     */
    loadJS() {
        return new Promise((resolve, reject) => {
            if (this.jsLoaded || typeof AutoSlider !== 'undefined') {
                this.jsLoaded = true;
                resolve();
                return;
            }

            const script = document.createElement('script');
            script.src = 'scripts/auto-slider.js';
            
            script.onload = () => {
                this.jsLoaded = true;
                console.log('Auto Slider: JavaScript loaded');
                resolve();
            };
            
            script.onerror = () => {
                reject(new Error('Failed to load auto-slider.js'));
            };
            
            document.head.appendChild(script);
        });
    }

    /**
     * Initialize sliders after all files are loaded
     */
    initializeSliders() {
        // Wait a bit for the scripts to fully execute
        setTimeout(() => {
            if (typeof initializeAutoSliders === 'function') {
                initializeAutoSliders();
                console.log('Auto Slider: Sliders initialized via loader');
            } else {
                console.warn('Auto Slider: initializeAutoSliders function not found');
            }
        }, 100);
    }

    /**
     * Create slider HTML containers
     * Call this before loadSliderSystem() to prepare containers
     */
    createSliderContainers(targetElement, options = {}) {
        const {
            includeSlider1 = true,
            includeSlider2 = true,
            slider1Class = 'auto-slider-container auto-slider-left',
            slider2Class = 'auto-slider-container auto-slider-right',
            wrapperClass = 'auto-slider-section',
            spacing = '2rem'
        } = options;

        // Create wrapper
        const wrapper = document.createElement('div');
        wrapper.className = wrapperClass;
        wrapper.style.margin = spacing + ' 0';

        // Create slider 1 if requested
        if (includeSlider1) {
            const slider1 = document.createElement('div');
            slider1.id = 'auto-slider-1';
            slider1.className = slider1Class;
            wrapper.appendChild(slider1);
        }

        // Add spacing between sliders if both are included
        if (includeSlider1 && includeSlider2) {
            const spacer = document.createElement('div');
            spacer.style.height = '1rem';
            wrapper.appendChild(spacer);
        }

        // Create slider 2 if requested
        if (includeSlider2) {
            const slider2 = document.createElement('div');
            slider2.id = 'auto-slider-2';
            slider2.className = slider2Class;
            wrapper.appendChild(slider2);
        }

        // Append to target element
        if (typeof targetElement === 'string') {
            const target = document.getElementById(targetElement) || document.querySelector(targetElement);
            if (target) {
                target.appendChild(wrapper);
            } else {
                console.error(`Auto Slider: Target element '${targetElement}' not found`);
            }
        } else if (targetElement instanceof Element) {
            targetElement.appendChild(wrapper);
        } else {
            console.error('Auto Slider: Invalid target element');
        }

        return wrapper;
    }

    /**
     * Quick setup method - creates containers and loads system
     */
    async quickSetup(targetElement, options = {}) {
        // Create containers
        this.createSliderContainers(targetElement, options);
        
        // Load and initialize system
        await this.loadSliderSystem();
    }
}

/**
 * GLOBAL LOADER INSTANCE
 */
window.autoSliderLoader = new AutoSliderLoader();

/**
 * CONVENIENCE FUNCTIONS
 */

/**
 * Quick function to add sliders to any page
 * Usage: addAutoSliders('#my-container') or addAutoSliders(document.body)
 */
window.addAutoSliders = async function(targetElement, options = {}) {
    return await window.autoSliderLoader.quickSetup(targetElement, options);
};

/**
 * Load only the slider system without creating containers
 * Usage: loadAutoSliderSystem()
 */
window.loadAutoSliderSystem = async function() {
    return await window.autoSliderLoader.loadSliderSystem();
};

/**
 * AUTO INITIALIZATION
 * Automatically load sliders if containers already exist on the page
 */
document.addEventListener('DOMContentLoaded', function() {
    const slider1Exists = document.getElementById('auto-slider-1');
    const slider2Exists = document.getElementById('auto-slider-2');
    
    if (slider1Exists || slider2Exists) {
        console.log('Auto Slider: Found existing containers, auto-loading system...');
        window.autoSliderLoader.loadSliderSystem();
    }
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AutoSliderLoader;
}
