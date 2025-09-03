/*
===========================================
UTILITY FUNCTIONS CONFIGURATION
===========================================
Common utility functions used across the website.
These functions provide reusable functionality for animations,
scroll handling, viewport detection, and performance optimization.
*/

// ===========================================
// PERFORMANCE & THROTTLING UTILITIES
// ===========================================

/**
 * Debounce function to limit function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Delay in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function to limit function calls
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===========================================
// VIEWPORT & SCROLL UTILITIES
// ===========================================

/**
 * Check if element is in viewport
 * @param {Element} element - DOM element to check
 * @returns {boolean} True if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Get current scroll position
 * @returns {number} Current scroll position in pixels
 */
function getScrollPosition() {
    return window.pageYOffset || document.documentElement.scrollTop;
}

/**
 * Smooth scroll to element with configurable offset
 * @param {Element} element - Target element to scroll to
 * @param {number} offset - Scroll offset (uses CONFIG.scrollOffset by default)
 */
function scrollToElement(element, offset = window.CONFIG?.scrollOffset || 100) {
    if (!element) return;
    
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

// ===========================================
// LOGGING & DEBUGGING UTILITIES
// ===========================================

/**
 * Log function for debugging (respects CONFIG.debugMode)
 * @param {string} message - Message to log
 * @param {*} data - Optional data to log
 */
function log(message, data = null) {
    if (window.CONFIG && window.CONFIG.debugMode) {
        if (data) {
            console.log(`[DEBUG] ${message}`, data);
        } else {
            console.log(`[DEBUG] ${message}`);
        }
    }
}

/**
 * Track events (respects CONFIG.enableTracking)
 * @param {string} category - Event category
 * @param {string} action - Event action
 * @param {string} label - Event label
 */
function trackEvent(category, action, label) {
    if (window.CONFIG && window.CONFIG.enableTracking) {
        // Add your tracking implementation here
        // Example: Google Analytics, custom analytics, etc.
        console.log(`[TRACK] ${category} - ${action} - ${label}`);
        
        // Example Google Analytics tracking (uncomment if using)
        // if (typeof gtag !== 'undefined') {
        //     gtag('event', action, {
        //         event_category: category,
        //         event_label: label
        //     });
        // }
    }
}

// ===========================================
// ANIMATION UTILITIES
// ===========================================

/**
 * Add CSS class with animation timing
 * @param {Element} element - Target element
 * @param {string} className - CSS class to add
 * @param {number} duration - Duration in milliseconds
 */
function animateElement(element, className, duration = 2000) {
    if (!element) return;
    
    element.classList.add(className);
    setTimeout(() => {
        element.classList.remove(className);
    }, duration);
}

/**
 * Fade in element
 * @param {Element} element - Element to fade in
 * @param {number} duration - Duration in milliseconds
 */
function fadeIn(element, duration = 300) {
    if (!element) return;
    
    element.style.opacity = '0';
    element.style.display = 'block';
    
    let opacity = 0;
    const timer = setInterval(() => {
        opacity += 0.1;
        element.style.opacity = opacity;
        
        if (opacity >= 1) {
            clearInterval(timer);
            element.style.opacity = '1';
        }
    }, duration / 10);
}

/**
 * Fade out element
 * @param {Element} element - Element to fade out
 * @param {number} duration - Duration in milliseconds
 */
function fadeOut(element, duration = 300) {
    if (!element) return;
    
    let opacity = 1;
    const timer = setInterval(() => {
        opacity -= 0.1;
        element.style.opacity = opacity;
        
        if (opacity <= 0) {
            clearInterval(timer);
            element.style.display = 'none';
            element.style.opacity = '0';
        }
    }, duration / 10);
}

// ===========================================
// MAKE UTILITIES GLOBALLY AVAILABLE
// ===========================================

// Performance utilities
window.debounce = debounce;
window.throttle = throttle;

// Viewport & scroll utilities
window.isInViewport = isInViewport;
window.getScrollPosition = getScrollPosition;
window.scrollToElement = scrollToElement;

// Logging & debugging utilities
window.log = log;
window.trackEvent = trackEvent;

// Animation utilities
window.animateElement = animateElement;
window.fadeIn = fadeIn;
window.fadeOut = fadeOut;

// Export utilities object for organized access
window.Utils = {
    // Performance
    debounce,
    throttle,
    
    // Viewport & scroll
    isInViewport,
    getScrollPosition,
    scrollToElement,
    
    // Logging & debugging
    log,
    trackEvent,
    
    // Animation
    animateElement,
    fadeIn,
    fadeOut
};

console.log('✅ Utilities loaded and available globally');