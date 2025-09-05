/*
===========================================
LIGHTWEIGHT TRACKING WRAPPER
===========================================
Bridges legacy calls to the unified AnalyticsManager in utils/analytics.js
Safe to include before/after analytics.js; it buffers calls until analytics initializes.
tracking turn on/off in config.js
*/

(function(){
    const callQueue = [];

    function enqueue(method, args) {
        callQueue.push({ method, args });
    }

    function flush() {
        if (!window.analytics) return;
        while (callQueue.length) {
            const { method, args } = callQueue.shift();
            if (typeof window.analytics[method] === 'function') {
                try { window.analytics[method].apply(window.analytics, args); } catch (_) {}
            }
        }
    }

    // Periodically attempt to flush until analytics is ready
    const flushTimer = setInterval(() => {
        if (window.analytics) {
            clearInterval(flushTimer);
            flush();
        }
    }, 250);

    // Public API
    window.tracking = {
        trackEvent: function(category, action, label, value){
            if (window.analytics) return window.analytics.trackEvent(category, action, label, value);
            enqueue('trackEvent', arguments);
        },
        trackPageView: function(path){
            if (window.analytics) return window.analytics.trackPageView(path);
            enqueue('trackPageView', arguments);
        },
        trackConversion: function(type, value, currency){
            if (window.analytics) return window.analytics.trackConversion(type, value, currency);
            enqueue('trackConversion', arguments);
        },
        trackAffiliateClick: function(productName, linkText, position, url){
            if (window.analytics) return window.analytics.trackAffiliateClick(productName, linkText, position, url);
            enqueue('trackAffiliateClick', arguments);
        },
        flush: flush
    };
})();


