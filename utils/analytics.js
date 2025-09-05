/*
===========================================
ANALYTICS & TRACKING UTILITIES
===========================================
This file handles all analytics and tracking functionality for the affiliate website.
It supports multiple tracking platforms and provides detailed conversion tracking.

FEATURES:
- Google Analytics 4 integration
- Meta Pixel tracking
- Custom conversion tracking
- A/B testing support
- User behavior analytics
- Affiliate link tracking
- Email capture tracking
- Performance monitoring

SETUP INSTRUCTIONS:
1. Replace tracking IDs in config.js with your actual IDs
2. Configure your tracking goals and events
3. Set up conversion values for ROI tracking
4. Test all tracking in development before going live

tracking turn on/off in config.js
*/

// ===========================================
// ANALYTICS MANAGER CLASS
// ===========================================

class AnalyticsManager {
    constructor() {
        this.config = window.TRACKING_CONFIG || {};
        this.isInitialized = false;
        this.sessionData = {
            startTime: Date.now(),
            pageViews: 0,
            events: [],
            conversions: []
        };
        
        this.init();
    }
    
    /**
     * Initialize analytics tracking
     */
    init() {
        if (this.isInitialized) return;
        
        this.setupGoogleAnalytics();
        this.setupMetaPixel();
        this.setupCustomTracking();
        this.setupEventListeners();
        this.setupSessionTracking();
        
        this.isInitialized = true;
        this.trackEvent('system', 'analytics_initialized', 'success');
        
        console.log('📊 Analytics Manager initialized');
    }
    
    /**
     * Setup Google Analytics 4
     */
    setupGoogleAnalytics() {
        const gaConfig = this.config.analytics?.googleAnalytics;
        
        if (!gaConfig?.enabled || !gaConfig?.trackingId) {
            console.log('⚠️ Google Analytics not configured');
            return;
        }
        
        // Create Google Analytics script
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${gaConfig.trackingId}`;
        document.head.appendChild(script);
        
        // Initialize gtag
        window.dataLayer = window.dataLayer || [];
        window.gtag = function() {
            window.dataLayer.push(arguments);
        };
        
        gtag('js', new Date());
        gtag('config', gaConfig.trackingId, {
            anonymize_ip: gaConfig.anonymizeIp,
            cookie_domain: gaConfig.cookieDomain,
            custom_map: {
                'custom_dimension_1': 'niche',
                'custom_dimension_2': 'user_type'
            }
        });
        
        console.log('✅ Google Analytics 4 initialized');
    }
    
    /**
     * Setup Meta Pixel
     */
    setupMetaPixel() {
        const pixelConfig = this.config.analytics?.metaPixel;
        
        if (!pixelConfig?.enabled || !pixelConfig?.pixelId) {
            console.log('⚠️ Meta Pixel not configured');
            return;
        }
        
        // Meta Pixel code
        !function(f,b,e,v,n,t,s) {
            if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)
        }(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        
        fbq('init', pixelConfig.pixelId);
        fbq('track', 'PageView');
        
        console.log('✅ Meta Pixel initialized');
    }
    
    /**
     * Setup custom tracking
     */
    setupCustomTracking() {
        const customConfig = this.config.analytics?.customTracking;
        
        if (!customConfig?.enabled) {
            return;
        }
        
        // Initialize custom tracking endpoint
        this.customTrackingEndpoint = customConfig.endpointUrl;
        console.log('✅ Custom tracking initialized');
    }
    
    /**
     * Setup event listeners for automatic tracking
     */
    setupEventListeners() {
        // Track affiliate link clicks
        this.setupAffiliateTracking();
        
        // Track form submissions
        this.setupFormTracking();
        
        // Track scroll depth
        this.setupScrollTracking();
        
        // Track time on page
        this.setupTimeTracking();
        
        // Track exit intent
        this.setupExitIntentTracking();
        
        // Track CTA clicks
        this.setupCTATracking();
    }
    
    /**
     * Setup session tracking
     */
    setupSessionTracking() {
        // Track session start
        this.trackEvent('session', 'start', 'page_load');
        
        // Track page visibility changes
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.trackEvent('session', 'tab_hidden', 'visibility_change');
            } else {
                this.trackEvent('session', 'tab_visible', 'visibility_change');
            }
        });
        
        // Track session end on beforeunload
        window.addEventListener('beforeunload', () => {
            this.trackSessionEnd();
        });
    }
    
    /**
     * Track affiliate link clicks
     */
    setupAffiliateTracking() {
        const affiliateLinks = document.querySelectorAll('[href*="affiliate"], [href*="partner"], [data-affiliate]');
        
        affiliateLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const productName = this.getProductName(link);
                const linkPosition = this.getLinkPosition(link);
                const linkText = link.textContent.trim();
                
                this.trackAffiliateClick(productName, linkText, linkPosition, link.href);
            });
        });
        
        console.log(`🔗 Tracking ${affiliateLinks.length} affiliate links`);
    }
    
    /**
     * Setup form tracking
     */
    setupFormTracking() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                const formType = form.dataset.type || 'unknown';
                const formId = form.id || 'unnamed';
                
                this.trackFormSubmission(formType, formId);
            });
        });
    }
    
    /**
     * Setup scroll depth tracking
     */
    setupScrollTracking() {
        let maxScrollDepth = 0;
        let scrollMilestones = [25, 50, 75, 100];
        let trackedMilestones = [];
        
        const trackScrollDepth = this.throttle(() => {
            const scrollDepth = Math.round(
                (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
            );
            
            if (scrollDepth > maxScrollDepth) {
                maxScrollDepth = scrollDepth;
                
                // Track milestone scroll depths
                scrollMilestones.forEach(milestone => {
                    if (scrollDepth >= milestone && !trackedMilestones.includes(milestone)) {
                        this.trackEvent('scroll', `depth_${milestone}`, 'milestone', scrollDepth);
                        trackedMilestones.push(milestone);
                    }
                });
            }
        }, 1000);
        
        window.addEventListener('scroll', trackScrollDepth);
    }
    
    /**
     * Setup time tracking
     */
    setupTimeTracking() {
        const timeThresholds = [30, 60, 120, 300, 600]; // 30s, 1m, 2m, 5m, 10m
        let trackedTimes = [];
        
        timeThresholds.forEach(threshold => {
            setTimeout(() => {
                if (!trackedTimes.includes(threshold)) {
                    this.trackEvent('engagement', `time_${threshold}s`, 'milestone', threshold);
                    trackedTimes.push(threshold);
                }
            }, threshold * 1000);
        });
    }
    
    /**
     * Setup exit intent tracking
     */
    setupExitIntentTracking() {
        let exitIntentTriggered = false;
        
        document.addEventListener('mouseleave', (e) => {
            if (e.clientY <= 0 && !exitIntentTriggered) {
                exitIntentTriggered = true;
                this.trackEvent('engagement', 'exit_intent', 'mouse_leave');
            }
        });
    }
    
    /**
     * Setup CTA tracking
     */
    setupCTATracking() {
        const ctaButtons = document.querySelectorAll('.btn-primary, .btn-animated, [data-cta]');
        
        ctaButtons.forEach(button => {
            button.addEventListener('click', () => {
                const ctaText = button.textContent.trim();
                const ctaType = button.dataset.cta || 'unknown';
                const ctaPosition = this.getElementPosition(button);
                
                this.trackCTAClick(ctaText, ctaType, ctaPosition);
            });
        });
    }
    
    /**
     * Track affiliate link clicks
     */
    trackAffiliateClick(productName, linkText, position, url) {
        const eventData = {
            product_name: productName,
            link_text: linkText,
            link_position: position,
            link_url: url,
            timestamp: Date.now()
        };
        
        // Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'affiliate_click', {
                event_category: 'affiliate',
                event_label: productName,
                custom_parameter_1: linkText,
                custom_parameter_2: position,
                value: this.config.conversions?.conversionValue || 0
            });
        }
        
        // Meta Pixel
        if (typeof fbq !== 'undefined') {
            fbq('track', 'Lead', {
                content_name: productName,
                content_category: 'affiliate_click',
                value: this.config.conversions?.conversionValue || 0,
                currency: 'USD'
            });
        }
        
        // Custom tracking
        this.sendCustomEvent('affiliate_click', eventData);
        
        // Store in session
        this.sessionData.conversions.push({
            type: 'affiliate_click',
            data: eventData
        });
        
        console.log('💰 Affiliate click tracked:', productName);
    }
    
    /**
     * Track form submissions
     */
    trackFormSubmission(formType, formId) {
        const eventData = {
            form_type: formType,
            form_id: formId,
            timestamp: Date.now()
        };
        
        // Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submit', {
                event_category: 'form',
                event_label: formType,
                value: formType === 'email' ? 1 : 0
            });
        }
        
        // Meta Pixel
        if (typeof fbq !== 'undefined') {
            if (formType === 'email') {
                fbq('track', 'Lead');
            } else {
                fbq('track', 'Contact');
            }
        }
        
        // Custom tracking
        this.sendCustomEvent('form_submission', eventData);
        
        console.log('📧 Form submission tracked:', formType);
    }
    
    /**
     * Track CTA clicks
     */
    trackCTAClick(ctaText, ctaType, position) {
        const eventData = {
            cta_text: ctaText,
            cta_type: ctaType,
            cta_position: position,
            timestamp: Date.now()
        };
        
        // Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'cta_click', {
                event_category: 'cta',
                event_label: ctaText,
                custom_parameter_1: ctaType,
                custom_parameter_2: position
            });
        }
        
        // Meta Pixel
        if (typeof fbq !== 'undefined') {
            fbq('track', 'InitiateCheckout', {
                content_name: ctaText,
                content_category: 'cta'
            });
        }
        
        // Custom tracking
        this.sendCustomEvent('cta_click', eventData);
        
        console.log('👆 CTA click tracked:', ctaText);
    }
    
    /**
     * Generic event tracking
     */
    trackEvent(category, action, label = null, value = null) {
        const eventData = {
            category,
            action,
            label,
            value,
            timestamp: Date.now()
        };
        
        // Google Analytics
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
                event_category: category,
                event_action: action,
                event_label: label
            });
        }
        
        // Custom tracking
        this.sendCustomEvent('generic_event', eventData);
        
        // Store in session
        this.sessionData.events.push(eventData);
    }
    
    /**
     * Track page views
     */
    trackPageView(page = window.location.pathname) {
        this.sessionData.pageViews++;
        
        // Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('config', this.config.analytics?.googleAnalytics?.trackingId, {
                page_path: page
            });
        }
        
        // Meta Pixel
        if (typeof fbq !== 'undefined') {
            fbq('track', 'PageView');
        }
        
        // Custom tracking
        this.sendCustomEvent('page_view', {
            page: page,
            referrer: document.referrer,
            timestamp: Date.now()
        });
        
        console.log('📄 Page view tracked:', page);
    }
    
    /**
     * Track conversions
     */
    trackConversion(conversionType, value = 0, currency = 'USD') {
        const eventData = {
            conversion_type: conversionType,
            value: value,
            currency: currency,
            timestamp: Date.now()
        };
        
        // Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'conversion', {
                event_category: 'conversion',
                event_label: conversionType,
                value: value,
                currency: currency
            });
        }
        
        // Meta Pixel
        if (typeof fbq !== 'undefined') {
            fbq('track', 'Purchase', {
                value: value,
                currency: currency
            });
        }
        
        // Custom tracking
        this.sendCustomEvent('conversion', eventData);
        
        // Store in session
        this.sessionData.conversions.push({
            type: conversionType,
            data: eventData
        });
        
        console.log('🎯 Conversion tracked:', conversionType, value);
    }
    
    /**
     * Send custom tracking event
     */
    async sendCustomEvent(eventType, data) {
        if (!this.customTrackingEndpoint) return;
        const payload = JSON.stringify({
            event_type: eventType,
            data: data,
            session_id: this.getSessionId(),
            user_agent: navigator.userAgent,
            url: window.location.href,
            timestamp: Date.now()
        });
        
        // Prefer sendBeacon to avoid CORS preflight and allow background sending
        try {
            if (navigator.sendBeacon) {
                const blob = new Blob([payload], { type: 'text/plain' });
                const ok = navigator.sendBeacon(this.customTrackingEndpoint, blob);
                if (ok) return; // Successfully queued
            }
        } catch (e) {
            // fall through to fetch
        }
        
        // Fallback: no-cors POST with a simple content-type to bypass preflight
        try {
            await fetch(this.customTrackingEndpoint, {
                method: 'POST',
                mode: 'no-cors',
                keepalive: true,
                headers: {
                    'Content-Type': 'text/plain'
                },
                body: payload
            });
        } catch (error) {
            console.error('Custom tracking error:', error);
        }
    }
    
    /**
     * Track session end
     */
    trackSessionEnd() {
        const sessionDuration = Date.now() - this.sessionData.startTime;
        
        this.trackEvent('session', 'end', 'duration', Math.round(sessionDuration / 1000));
        
        // Send session summary (sendBeacon-friendly)
        this.sendCustomEvent('session_summary', {
            duration: sessionDuration,
            page_views: this.sessionData.pageViews,
            events_count: this.sessionData.events.length,
            conversions_count: this.sessionData.conversions.length,
            max_scroll_depth: this.getMaxScrollDepth(),
            timestamp: Date.now()
        });
    }
    
    /**
     * Utility functions
     */
    getProductName(element) {
        const productCard = element.closest('.product-card');
        if (productCard) {
            const titleElement = productCard.querySelector('.product-title');
            return titleElement ? titleElement.textContent.trim() : 'Unknown Product';
        }
        return 'Unknown Product';
    }
    
    getLinkPosition(element) {
        const positions = ['header', 'hero', 'top-pick', 'products', 'reviews', 'footer'];
        
        for (const position of positions) {
            if (element.closest(`.${position}-section, .${position}`)) {
                return position;
            }
        }
        
        return 'unknown';
    }
    
    getElementPosition(element) {
        const rect = element.getBoundingClientRect();
        return {
            x: rect.left,
            y: rect.top,
            section: this.getLinkPosition(element)
        };
    }
    
    getSessionId() {
        let sessionId = sessionStorage.getItem('analytics_session_id');
        if (!sessionId) {
            sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            sessionStorage.setItem('analytics_session_id', sessionId);
        }
        return sessionId;
    }
    
    getMaxScrollDepth() {
        return Math.round(
            (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
        );
    }
    
    throttle(func, limit) {
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
}

// ===========================================
// A/B TESTING UTILITIES
// ===========================================

class ABTestManager {
    constructor() {
        this.tests = {};
        this.userVariants = {};
        this.init();
    }
    
    init() {
        this.loadUserVariants();
        this.applyVariants();
    }
    
    /**
     * Create A/B test
     */
    createTest(testName, variants, weights = null) {
        if (!weights) {
            weights = variants.map(() => 1 / variants.length);
        }
        
        this.tests[testName] = {
            variants: variants,
            weights: weights
        };
        
        // Assign user to variant if not already assigned
        if (!this.userVariants[testName]) {
            this.userVariants[testName] = this.assignVariant(testName);
            this.saveUserVariants();
        }
        
        return this.userVariants[testName];
    }
    
    /**
     * Assign user to variant
     */
    assignVariant(testName) {
        const test = this.tests[testName];
        if (!test) return null;
        
        const random = Math.random();
        let cumulativeWeight = 0;
        
        for (let i = 0; i < test.variants.length; i++) {
            cumulativeWeight += test.weights[i];
            if (random <= cumulativeWeight) {
                return test.variants[i];
            }
        }
        
        return test.variants[0];
    }
    
    /**
     * Get user's variant for a test
     */
    getVariant(testName) {
        return this.userVariants[testName] || null;
    }
    
    /**
     * Track test conversion
     */
    trackTestConversion(testName, conversionType = 'default') {
        const variant = this.getVariant(testName);
        if (!variant) return;
        
        if (window.analytics) {
            window.analytics.trackEvent('ab_test', `${testName}_conversion`, variant);
        }
        
        console.log(`A/B Test conversion: ${testName} - ${variant} - ${conversionType}`);
    }
    
    /**
     * Load user variants from localStorage
     */
    loadUserVariants() {
        const stored = localStorage.getItem('ab_test_variants');
        if (stored) {
            try {
                this.userVariants = JSON.parse(stored);
            } catch (e) {
                this.userVariants = {};
            }
        }
    }
    
    /**
     * Save user variants to localStorage
     */
    saveUserVariants() {
        localStorage.setItem('ab_test_variants', JSON.stringify(this.userVariants));
    }
    
    /**
     * Apply variants to DOM
     */
    applyVariants() {
        Object.keys(this.userVariants).forEach(testName => {
            const variant = this.userVariants[testName];
            document.body.classList.add(`ab-${testName}-${variant}`);
        });
    }
}

// ===========================================
// PERFORMANCE MONITORING
// ===========================================

class PerformanceMonitor {
    constructor() {
        this.metrics = {};
        this.init();
    }
    
    init() {
        this.trackLoadTime();
        this.trackResourceTiming();
        this.trackUserTiming();
        this.trackLCP();
        this.trackFID();
        this.trackCLS();
    }
    
    /**
     * Track page load time
     */
    trackLoadTime() {
        window.addEventListener('load', () => {
            const loadTime = performance.now();
            this.metrics.loadTime = loadTime;
            
            if (window.analytics) {
                window.analytics.trackEvent('performance', 'page_load_time', 'milliseconds', Math.round(loadTime));
            }
        });
    }
    
    /**
     * Track resource timing
     */
    trackResourceTiming() {
        window.addEventListener('load', () => {
            const resources = performance.getEntriesByType('resource');
            const slowResources = resources.filter(resource => resource.duration > 1000);
            
            if (slowResources.length > 0 && window.analytics) {
                window.analytics.trackEvent('performance', 'slow_resources', 'count', slowResources.length);
            }
        });
    }
    
    /**
     * Track user timing
     */
    trackUserTiming() {
        const measures = performance.getEntriesByType('measure');
        measures.forEach(measure => {
            if (window.analytics) {
                window.analytics.trackEvent('performance', 'user_timing', measure.name, Math.round(measure.duration));
            }
        });
    }
    
    /**
     * Track Largest Contentful Paint
     */
    trackLCP() {
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const lastEntry = entries[entries.length - 1];
                
                this.metrics.lcp = lastEntry.startTime;
                
                if (window.analytics) {
                    window.analytics.trackEvent('performance', 'lcp', 'milliseconds', Math.round(lastEntry.startTime));
                }
            });
            
            observer.observe({ entryTypes: ['largest-contentful-paint'] });
        }
    }
    
    /**
     * Track First Input Delay
     */
    trackFID() {
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const firstEntry = entries[0];
                
                this.metrics.fid = firstEntry.processingStart - firstEntry.startTime;
                
                if (window.analytics) {
                    window.analytics.trackEvent('performance', 'fid', 'milliseconds', Math.round(this.metrics.fid));
                }
            });
            
            observer.observe({ entryTypes: ['first-input'] });
        }
    }
    
    /**
     * Track Cumulative Layout Shift
     */
    trackCLS() {
        if ('PerformanceObserver' in window) {
            let clsValue = 0;
            
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                
                entries.forEach(entry => {
                    if (!entry.hadRecentInput) {
                        clsValue += entry.value;
                    }
                });
                
                this.metrics.cls = clsValue;
                
                if (window.analytics) {
                    window.analytics.trackEvent('performance', 'cls', 'score', Math.round(clsValue * 1000));
                }
            });
            
            observer.observe({ entryTypes: ['layout-shift'] });
        }
    }
    
    /**
     * Get all metrics
     */
    getMetrics() {
        return this.metrics;
    }
}

// ===========================================
// INITIALIZE ANALYTICS
// ===========================================

// Initialize analytics when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.analytics = new AnalyticsManager();
    window.abTests = new ABTestManager();
    window.performanceMonitor = new PerformanceMonitor();
    
    console.log('📊 Analytics system initialized');
});

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        AnalyticsManager,
        ABTestManager,
        PerformanceMonitor
    };
} 