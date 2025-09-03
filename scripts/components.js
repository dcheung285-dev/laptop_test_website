/*
===========================================
REUSABLE COMPONENTS JAVASCRIPT
===========================================
This file contains reusable JavaScript components that can be used
across different pages of the affiliate website.

COMPONENTS INCLUDED:
- Modal dialogs
- Tooltip system
- Form validation
- Image lazy loading
- Search functionality
- Cookie consent
- Share buttons
- Price comparison tools
- Email validation
- Loading states

USAGE:
Include this file after main.js to use these components.
Most components auto-initialize when the DOM loads.
*/

// ===========================================
// MODAL COMPONENT
// ===========================================

class Modal {
    constructor(modalId) {
        this.modal = document.getElementById(modalId);
        this.content = this.modal?.querySelector('.modal-content');
        this.closeBtn = this.modal?.querySelector('.modal-close');
        this.isOpen = false;
        
        this.init();
    }
    
    init() {
        if (!this.modal) return;
        
        // Close button click
        this.closeBtn?.addEventListener('click', () => this.close());
        
        // Click outside to close
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.close();
            }
        });
        
        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });
    }
    
    open() {
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        this.isOpen = true;
        
        // Focus first focusable element
        const focusable = this.modal.querySelector('button, input, select, textarea, [tabindex]');
        focusable?.focus();
        
        // Track modal open
        if (window.analytics) {
            window.analytics.trackEvent('modal', 'open', this.modal.id);
        }
    }
    
    close() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
        this.isOpen = false;
        
        // Track modal close
        if (window.analytics) {
            window.analytics.trackEvent('modal', 'close', this.modal.id);
        }
    }
    
    setContent(content) {
        const body = this.modal.querySelector('.modal-body');
        if (body) {
            body.innerHTML = content;
        }
    }
    
    setTitle(title) {
        const titleElement = this.modal.querySelector('.modal-title');
        if (titleElement) {
            titleElement.textContent = title;
        }
    }
}

// ===========================================
// TOOLTIP COMPONENT
// ===========================================

class TooltipManager {
    constructor() {
        this.tooltips = [];
        this.init();
    }
    
    init() {
        // Find all elements with data-tooltip attribute
        const tooltipElements = document.querySelectorAll('[data-tooltip]');
        
        tooltipElements.forEach(element => {
            this.createTooltip(element);
        });
    }
    
    createTooltip(element) {
        const tooltipText = element.getAttribute('data-tooltip');
        const position = element.getAttribute('data-tooltip-position') || 'top';
        
        // Create tooltip element
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip-element';
        tooltip.textContent = tooltipText;
        tooltip.style.position = 'absolute';
        tooltip.style.background = '#333';
        tooltip.style.color = 'white';
        tooltip.style.padding = '8px 12px';
        tooltip.style.borderRadius = '4px';
        tooltip.style.fontSize = '14px';
        tooltip.style.pointerEvents = 'none';
        tooltip.style.opacity = '0';
        tooltip.style.transition = 'opacity 0.3s';
        tooltip.style.zIndex = '9999';
        tooltip.style.whiteSpace = 'nowrap';
        
        document.body.appendChild(tooltip);
        
        // Show tooltip on hover
        element.addEventListener('mouseenter', () => {
            this.showTooltip(element, tooltip, position);
        });
        
        // Hide tooltip on leave
        element.addEventListener('mouseleave', () => {
            this.hideTooltip(tooltip);
        });
        
        this.tooltips.push({ element, tooltip });
    }
    
    showTooltip(element, tooltip, position) {
        const rect = element.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        
        let top, left;
        
        switch (position) {
            case 'top':
                top = rect.top - tooltipRect.height - 8;
                left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
                break;
            case 'bottom':
                top = rect.bottom + 8;
                left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
                break;
            case 'left':
                top = rect.top + (rect.height / 2) - (tooltipRect.height / 2);
                left = rect.left - tooltipRect.width - 8;
                break;
            case 'right':
                top = rect.top + (rect.height / 2) - (tooltipRect.height / 2);
                left = rect.right + 8;
                break;
        }
        
        tooltip.style.top = `${top + window.scrollY}px`;
        tooltip.style.left = `${left + window.scrollX}px`;
        tooltip.style.opacity = '1';
    }
    
    hideTooltip(tooltip) {
        tooltip.style.opacity = '0';
    }
}

// ===========================================
// FORM VALIDATION COMPONENT
// ===========================================

class FormValidator {
    constructor(formElement) {
        this.form = formElement;
        this.rules = {};
        this.init();
    }
    
    init() {
        if (!this.form) return;
        
        this.form.addEventListener('submit', (e) => {
            if (!this.validate()) {
                e.preventDefault();
            }
        });
        
        // Real-time validation
        const inputs = this.form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
            
            input.addEventListener('input', () => {
                this.clearError(input);
            });
        });
    }
    
    addRule(fieldName, validatorFunction, errorMessage) {
        this.rules[fieldName] = { validator: validatorFunction, message: errorMessage };
    }
    
    validate() {
        let isValid = true;
        
        Object.keys(this.rules).forEach(fieldName => {
            const field = this.form.querySelector(`[name="${fieldName}"]`);
            if (field && !this.validateField(field)) {
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    validateField(field) {
        const fieldName = field.name;
        const rule = this.rules[fieldName];
        
        if (!rule) return true;
        
        const isValid = rule.validator(field.value, field);
        
        if (!isValid) {
            this.showError(field, rule.message);
        } else {
            this.clearError(field);
        }
        
        return isValid;
    }
    
    showError(field, message) {
        this.clearError(field);
        
        // If this field is inside the newsletter form, show the error in the newsletter error container (below the input)
        const newsletterForm = field.closest('form.newsletter-form');
        if (newsletterForm) {
            const newsletterError = newsletterForm.querySelector('.newsletter-error');
            if (newsletterError) {
                newsletterError.textContent = message;
                newsletterError.style.display = 'block';
            }
            field.classList.add('error');
            return;
        }
        
        field.classList.add('error');
        
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        errorElement.style.color = '#ef4444';
        errorElement.style.fontSize = '14px';
        errorElement.style.marginTop = '4px';
        
        field.parentNode.appendChild(errorElement);
    }
    
    clearError(field) {
        field.classList.remove('error');
        
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
        
        // Also clear the newsletter error container if present
        const newsletterForm = field.closest('form.newsletter-form');
        if (newsletterForm) {
            const newsletterError = newsletterForm.querySelector('.newsletter-error');
            if (newsletterError) {
                newsletterError.style.display = 'none';
                newsletterError.textContent = '';
            }
        }
    }
}

// Common validation rules
const ValidationRules = {
    required: (value) => value.trim() !== '',
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    minLength: (min) => (value) => value.length >= min,
    maxLength: (max) => (value) => value.length <= max,
    numeric: (value) => /^\d+$/.test(value),
    url: (value) => /^https?:\/\/.+/.test(value)
};

// ===========================================
// LAZY LOADING COMPONENT
// ===========================================

class LazyLoader {
    constructor() {
        this.images = document.querySelectorAll('img[data-src]');
        this.imageObserver = null;
        this.init();
    }
    
    init() {
        if ('IntersectionObserver' in window) {
            this.imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.loadImage(entry.target);
                        this.imageObserver.unobserve(entry.target);
                    }
                });
            });
            
            this.images.forEach(img => {
                this.imageObserver.observe(img);
            });
        } else {
            // Fallback for older browsers
            this.images.forEach(img => this.loadImage(img));
        }
    }
    
    loadImage(img) {
        img.src = img.dataset.src;
        img.classList.add('loaded');
        
        img.addEventListener('load', () => {
            img.classList.add('fade-in');
        });
    }
}

// ===========================================
// SEARCH COMPONENT
// ===========================================

class SearchComponent {
    constructor(searchInputId, resultsContainerId) {
        this.searchInput = document.getElementById(searchInputId);
        this.resultsContainer = document.getElementById(resultsContainerId);
        this.searchData = [];
        this.debounceTimeout = null;
        
        this.init();
    }
    
    init() {
        if (!this.searchInput) return;
        
        this.searchInput.addEventListener('input', (e) => {
            clearTimeout(this.debounceTimeout);
            this.debounceTimeout = setTimeout(() => {
                this.performSearch(e.target.value);
            }, 300);
        });
        
        // Hide results when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.searchInput.contains(e.target) && !this.resultsContainer.contains(e.target)) {
                this.hideResults();
            }
        });
    }
    
    setData(data) {
        this.searchData = data;
    }
    
    performSearch(query) {
        if (query.length < 2) {
            this.hideResults();
            return;
        }
        
        const results = this.searchData.filter(item => 
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase())
        );
        
        this.displayResults(results, query);
        
        // Track search
        if (window.analytics) {
            window.analytics.trackEvent('search', 'query', query);
        }
    }
    
    displayResults(results, query) {
        if (!this.resultsContainer) return;
        
        this.resultsContainer.innerHTML = '';
        
        if (results.length === 0) {
            this.resultsContainer.innerHTML = '<div class="search-no-results">No results found</div>';
        } else {
            results.forEach(result => {
                const resultElement = document.createElement('div');
                resultElement.className = 'search-result';
                resultElement.innerHTML = `
                    <h4>${this.highlightQuery(result.title, query)}</h4>
                    <p>${this.highlightQuery(result.description, query)}</p>
                `;
                
                resultElement.addEventListener('click', () => {
                    if (result.url) {
                        window.location.href = result.url;
                    }
                    this.hideResults();
                });
                
                this.resultsContainer.appendChild(resultElement);
            });
        }
        
        this.showResults();
    }
    
    highlightQuery(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<strong>$1</strong>');
    }
    
    showResults() {
        this.resultsContainer.classList.add('active');
    }
    
    hideResults() {
        this.resultsContainer.classList.remove('active');
    }
}

// ===========================================
// COOKIE CONSENT COMPONENT
// ===========================================

class CookieConsent {
    constructor() {
        this.consentKey = 'cookie_consent';
        this.init();
    }
    
    init() {
        if (!this.hasConsent()) {
            this.showConsentBanner();
        }
    }
    
    hasConsent() {
        return localStorage.getItem(this.consentKey) === 'true';
    }
    
    giveConsent() {
        localStorage.setItem(this.consentKey, 'true');
        this.hideConsentBanner();
        
        // Track consent
        if (window.analytics) {
            window.analytics.trackEvent('privacy', 'cookie_consent', 'accepted');
        }
    }
    
    showConsentBanner() {
        // Get configuration from cookies-config.js
        const config = window.COOKIE_CONSENT_CONFIG || {
            content: {
                message: "We use cookies to improve your experience and for analytics. By continuing to use this site, you agree to our use of cookies.",
                acceptButtonText: "Accept",
                declineButtonText: "Decline",
                policyLinkText: "Privacy Policy",
                policyLinkUrl: "./privacy.html"
            },
            styling: {
                showPolicyLink: true
            }
        };
        
        const banner = document.createElement('div');
        banner.id = 'cookie-consent-banner';
        banner.innerHTML = `
            <div class="cookie-consent-content">
                <p>${config.content.message}</p>
                <div class="cookie-consent-buttons">
                    <button id="accept-cookies">${config.content.acceptButtonText}</button>
                    <button id="decline-cookies">${config.content.declineButtonText}</button>
                    ${config.styling.showPolicyLink ? `<a href="${config.content.policyLinkUrl}" class="cookie-policy-link">${config.content.policyLinkText}</a>` : ''}
                </div>
            </div>
        `;
        
        // Banner styling is handled by cookie-consent.css
        document.body.appendChild(banner);
        
        // Add event listeners
        document.getElementById('accept-cookies').addEventListener('click', () => {
            this.giveConsent();
        });
        
        document.getElementById('decline-cookies').addEventListener('click', () => {
            this.hideConsentBanner();
            // Track decline
            if (window.analytics) {
                window.analytics.trackEvent('privacy', 'cookie_consent', 'declined');
            }
        });
    }
    
    hideConsentBanner() {
        const banner = document.getElementById('cookie-consent-banner');
        if (banner) {
            banner.remove();
        }
    }
}

// ===========================================
// SHARE BUTTONS COMPONENT
// ===========================================

class ShareButtons {
    constructor() {
        this.init();
    }
    
    init() {
        const shareButtons = document.querySelectorAll('[data-share]');
        
        shareButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                
                const platform = button.dataset.share;
                const url = button.dataset.url || window.location.href;
                const title = button.dataset.title || document.title;
                
                this.share(platform, url, title);
            });
        });
    }
    
    share(platform, url, title) {
        const shareUrls = {
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
            twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
            pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(title)}`,
            whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`
        };
        
        if (shareUrls[platform]) {
            window.open(shareUrls[platform], '_blank', 'width=600,height=400');
            
            // Track share
            if (window.analytics) {
                window.analytics.trackEvent('social', 'share', platform);
            }
        }
    }
}

// ===========================================
// PRICE COMPARISON COMPONENT
// ===========================================

class PriceComparison {
    constructor() {
        this.products = [];
        this.init();
    }
    
    init() {
        this.loadProductData();
        this.setupSortControls();
        this.setupFilterControls();
    }
    
    loadProductData() {
        // Load product data from configuration
        if (window.PRODUCTS_CONFIG) {
            this.products = Object.values(window.PRODUCTS_CONFIG);
        }
    }
    
    setupSortControls() {
        const sortSelect = document.querySelector('.price-sort-select');
        if (!sortSelect) return;
        
        sortSelect.addEventListener('change', (e) => {
            this.sortProducts(e.target.value);
        });
    }
    
    setupFilterControls() {
        const filterButtons = document.querySelectorAll('.price-filter-btn');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filterType = button.dataset.filter;
                this.filterProducts(filterType);
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
    }
    
    sortProducts(sortBy) {
        const productElements = Array.from(document.querySelectorAll('.product-card'));
        
        productElements.sort((a, b) => {
            const aValue = this.getProductValue(a, sortBy);
            const bValue = this.getProductValue(b, sortBy);
            
            if (sortBy === 'price') {
                return aValue - bValue; // Low to high
            } else if (sortBy === 'rating') {
                return bValue - aValue; // High to low
            } else {
                return aValue - bValue; // Default
            }
        });
        
        const container = document.querySelector('.products-grid');
        productElements.forEach(element => {
            container.appendChild(element);
        });
        
        // Track sort
        if (window.analytics) {
            window.analytics.trackEvent('product', 'sort', sortBy);
        }
    }
    
    filterProducts(filterType) {
        const productElements = document.querySelectorAll('.product-card');
        
        productElements.forEach(element => {
            let show = true;
            
            if (filterType === 'budget') {
                const price = this.getProductValue(element, 'price');
                show = price < 500; // Example budget threshold
            } else if (filterType === 'premium') {
                const price = this.getProductValue(element, 'price');
                show = price > 1000; // Example premium threshold
            } else if (filterType === 'top-rated') {
                const rating = this.getProductValue(element, 'rating');
                show = rating >= 4.5; // High rating threshold
            }
            
            element.style.display = show ? 'block' : 'none';
        });
        
        // Track filter
        if (window.analytics) {
            window.analytics.trackEvent('product', 'filter', filterType);
        }
    }
    
    getProductValue(element, type) {
        switch (type) {
            case 'price':
                const priceText = element.querySelector('.current-price')?.textContent || '0';
                return parseFloat(priceText.replace(/[^0-9.]/g, ''));
            case 'rating':
                const ratingText = element.querySelector('.rating-score')?.textContent || '0';
                return parseFloat(ratingText);
            case 'rank':
                return parseInt(element.dataset.rank) || 999;
            default:
                return 0;
        }
    }
}

// ===========================================
// LOADING STATE COMPONENT
// ===========================================

class LoadingState {
    static show(element, type = 'spinner') {
        if (!element) return;
        
        element.classList.add('loading');
        element.style.position = 'relative';
        
        const loader = document.createElement('div');
        loader.className = 'loading-overlay';
        loader.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(255, 255, 255, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        `;
        
        if (type === 'spinner') {
            loader.innerHTML = '<div class="loading-spinner"></div>';
        } else if (type === 'dots') {
            loader.innerHTML = `
                <div class="loading-dots">
                    <div class="loading-dot"></div>
                    <div class="loading-dot"></div>
                    <div class="loading-dot"></div>
                </div>
            `;
        }
        
        element.appendChild(loader);
    }
    
    static hide(element) {
        if (!element) return;
        
        element.classList.remove('loading');
        const overlay = element.querySelector('.loading-overlay');
        if (overlay) {
            overlay.remove();
        }
    }
}

// ===========================================
// EMAIL VALIDATION COMPONENT
// ===========================================

class EmailValidator {
    static validate(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    
    static validateDomain(email) {
        const domain = email.split('@')[1];
        if (!domain) return false;
        
        // Basic domain validation
        return domain.includes('.') && domain.length > 3;
    }
    
    static suggest(email) {
        const commonDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
        const domain = email.split('@')[1];
        
        if (!domain) return null;
        
        // Simple suggestion logic
        for (const commonDomain of commonDomains) {
            if (this.levenshteinDistance(domain, commonDomain) === 1) {
                return email.replace(domain, commonDomain);
            }
        }
        
        return null;
    }
    
    static levenshteinDistance(str1, str2) {
        const matrix = [];
        
        for (let i = 0; i <= str2.length; i++) {
            matrix[i] = [i];
        }
        
        for (let j = 0; j <= str1.length; j++) {
            matrix[0][j] = j;
        }
        
        for (let i = 1; i <= str2.length; i++) {
            for (let j = 1; j <= str1.length; j++) {
                if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1,
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j] + 1
                    );
                }
            }
        }
        
        return matrix[str2.length][str1.length];
    }
}

// ===========================================
// COMPONENT INITIALIZATION
// ===========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    console.log('🧩 Initializing components...');
    
    // Initialize tooltips
    if (document.querySelectorAll('[data-tooltip]').length > 0) {
        new TooltipManager();
        console.log('✅ Tooltips initialized');
    }
    
    // Initialize lazy loading
    if (document.querySelectorAll('img[data-src]').length > 0) {
        new LazyLoader();
        console.log('✅ Lazy loading initialized');
    }
    
    // Initialize cookie consent
    new CookieConsent();
    console.log('✅ Cookie consent initialized');
    
    // Initialize share buttons
    if (document.querySelectorAll('[data-share]').length > 0) {
        new ShareButtons();
        console.log('✅ Share buttons initialized');
    }
    
    // Initialize price comparison
    if (document.querySelector('.products-grid')) {
        new PriceComparison();
        console.log('✅ Price comparison initialized');
    }
    
    // Initialize search if present
    const searchInput = document.querySelector('#searchInput');
    const searchResults = document.querySelector('#searchResults');
    if (searchInput && searchResults) {
        const search = new SearchComponent('searchInput', 'searchResults');
        
        // Sample search data (replace with your actual data)
        search.setData([
            { title: 'Product 1', description: 'Description 1', url: '#product-1' },
            { title: 'Product 2', description: 'Description 2', url: '#product-2' }
        ]);
        
        console.log('✅ Search initialized');
    }
    
    // Initialize form validation for all forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        // Skip newsletter/optional forms to avoid showing required errors on blur
        if (form.classList.contains('newsletter-form') || form.dataset.optional === 'true') {
            return;
        }

        const validator = new FormValidator(form);
        
        // Add common validation rules
        const emailInputs = form.querySelectorAll('input[type="email"]');
        emailInputs.forEach(input => {
            // Only add rules when the input has a non-empty name
            if (!input.name) return;
            validator.addRule(input.name, ValidationRules.email, 'Please enter a valid email address');
        });
        
        const requiredInputs = form.querySelectorAll('input[required], textarea[required], select[required]');
        requiredInputs.forEach(input => {
            // Only add rules when the input has a non-empty name
            if (!input.name) return;
            validator.addRule(input.name, ValidationRules.required, 'This field is required');
        });
    });
    
    if (forms.length > 0) {
        console.log('✅ Form validation initialized');
    }
    
    console.log('🎉 All components initialized successfully!');
});

// Export components for external use
if (typeof window !== 'undefined') {
    window.Components = {
        Modal,
        TooltipManager,
        FormValidator,
        ValidationRules,
        LazyLoader,
        SearchComponent,
        CookieConsent,
        ShareButtons,
        PriceComparison,
        LoadingState,
        EmailValidator
    };
} 