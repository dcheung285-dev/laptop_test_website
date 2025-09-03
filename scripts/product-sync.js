/**
 * Product Data Synchronization System
 * Syncs Top 10 product boxes with detailed review card data
 * Makes detailed review cards the single source of truth
 */

class ProductDataSync {
    constructor() {
        this.reviewCards = [];
        this.productBoxes = [];
        this.syncMappings = {};
        this.init();
    }

    /**
     * Initialize the synchronization system
     */
    init() {
        this.findReviewCards();
        this.findProductBoxes();
        this.createSyncMappings();
        this.syncAllProducts();
        this.setupObserver();
    }

    /**
     * Find all detailed review cards
     */
    findReviewCards() {
        // Find all review cards but exclude hidden template cards
        const allReviewCards = document.querySelectorAll('.detailed-review-card');
        this.reviewCards = Array.from(allReviewCards).filter(card => {
            // Exclude cards that are hidden (templates)
            const isHidden = card.style.display === 'none' || 
                           card.closest('[style*="display: none"]') ||
                           card.closest('.review-card-template');
            return !isHidden;
        });
        console.log(`Found ${this.reviewCards.length} detailed review cards`);
    }

    /**
     * Find all top 10 product boxes
     */
    findProductBoxes() {
        // Look for various product box selectors
        const selectors = [
            '.product-card',
            '.product-item',
            '.top10-product',
            '[data-product]',
            '.product-box'
        ];
        
        selectors.forEach(selector => {
            const boxes = document.querySelectorAll(selector);
            boxes.forEach(box => {
                if (!this.productBoxes.includes(box)) {
                    this.productBoxes.push(box);
                }
            });
        });
        
        console.log(`Found ${this.productBoxes.length} product boxes`);
    }

    /**
     * Create mappings between review cards and product boxes
     */
    createSyncMappings() {
        this.reviewCards.forEach((card, index) => {
            const productBox = this.productBoxes[index];
            if (productBox) {
                this.syncMappings[index] = {
                    reviewCard: card,
                    productBox: productBox,
                    productKey: `product${index + 1}`
                };
            }
        });
        
        console.log(`Created ${Object.keys(this.syncMappings).length} sync mappings`);
    }

    /**
     * Sync all products from review cards to product boxes
     */
    syncAllProducts() {
        Object.values(this.syncMappings).forEach(mapping => {
            this.syncProduct(mapping);
        });
    }

    /**
     * Sync individual product data
     */
    syncProduct(mapping) {
        const { reviewCard, productBox } = mapping;
        
        try {
            // Extract data from review card
            const productData = this.extractReviewCardData(reviewCard);
            
            // Update product box with extracted data
            this.updateProductBox(productBox, productData);
            
            console.log(`Synced product: ${productData.name}`);
        } catch (error) {
            console.error('Error syncing product:', error);
        }
    }

    /**
     * Extract all data from a review card
     */
    extractReviewCardData(reviewCard) {
        return {
            name: this.extractProductName(reviewCard),
            rating: this.extractRating(reviewCard),
            price: this.extractPrice(reviewCard),
            originalPrice: this.extractOriginalPrice(reviewCard),
            discount: this.extractDiscount(reviewCard),
            image: this.extractImage(reviewCard),
            perks: this.extractPerks(reviewCard),
            features: this.extractFeatures(reviewCard),
            specifications: this.extractSpecifications(reviewCard),
            affiliateLink: this.extractAffiliateLink(reviewCard),
            ctaText: this.extractCTAText(reviewCard),
            description: this.extractDescription(reviewCard),
            highlights: this.extractHighlights(reviewCard)
        };
    }

    /**
     * Extract product name from review card
     */
    extractProductName(card) {
        const titleElement = card.querySelector('.review-card-title, h3, h2, .product-title');
        if (titleElement) {
            return titleElement.textContent.trim().replace(' - Detailed Review', '');
        }
        return 'Product Name';
    }

    /**
     * Extract rating from review card
     */
    extractRating(card) {
        const ratingElement = card.querySelector('.rating-score, .rating-value');
        if (ratingElement) {
            return parseFloat(ratingElement.textContent) || 4.5;
        }
        return 4.5;
    }

    /**
     * Extract price from review card
     */
    extractPrice(card) {
        const priceElement = card.querySelector('.current-price, .price');
        if (priceElement) {
            return priceElement.textContent.trim();
        }
        return '$99';
    }

    /**
     * Extract original price from review card
     */
    extractOriginalPrice(card) {
        const originalPriceElement = card.querySelector('.original-price, .old-price');
        if (originalPriceElement) {
            return originalPriceElement.textContent.trim();
        }
        return '$129';
    }

    /**
     * Extract discount from review card
     */
    extractDiscount(card) {
        const discountElement = card.querySelector('.discount-badge, .discount');
        if (discountElement) {
            return discountElement.textContent.trim();
        }
        return '23%';
    }

    /**
     * Extract product image from review card
     */
    extractImage(card) {
        const imageElement = card.querySelector('.product-image img, .review-image img, img');
        if (imageElement) {
            return imageElement.src;
        }
        return './assets/images/template_icon_logo.png';
    }

    /**
     * Extract perks from review card
     */
    extractPerks(card) {
        const perkElements = card.querySelectorAll('.perk-item span, .perks-grid .perk-item span');
        return Array.from(perkElements).map(el => el.textContent.trim());
    }

    /**
     * Extract features from review card
     */
    extractFeatures(card) {
        const featureElements = card.querySelectorAll('.feature-item strong, .features-grid .feature-item strong');
        return Array.from(featureElements).map(el => el.textContent.trim());
    }

    /**
     * Extract specifications from review card
     */
    extractSpecifications(card) {
        const specs = {};
        const featureItems = card.querySelectorAll('.feature-item, .features-grid .feature-item');
        
        featureItems.forEach(item => {
            const name = item.querySelector('strong')?.textContent.trim();
            const description = item.querySelector('span')?.textContent.trim();
            if (name && description) {
                specs[name] = description;
            }
        });
        
        return specs;
    }

    /**
     * Extract affiliate link from review card
     */
    extractAffiliateLink(card) {
        const linkElement = card.querySelector('a[data-product], .btn[href], .cta-link');
        if (linkElement) {
            return linkElement.href;
        }
        return '#';
    }

    /**
     * Extract CTA text from review card
     */
    extractCTAText(card) {
        const ctaElement = card.querySelector('.btn-primary, .cta-button');
        if (ctaElement) {
            // Extract just the main text, not the expand text
            const mainText = ctaElement.childNodes[0]?.textContent?.trim();
            if (mainText) {
                return mainText;
            }
            return ctaElement.textContent.trim().split('\n')[0].trim();
        }
        return 'Get Best Deal';
    }

    /**
     * Extract description paragraphs from review card
     */
    extractDescription(card) {
        const paragraphs = card.querySelectorAll('.review-content p, .review-text p');
        return Array.from(paragraphs).map(p => p.textContent.trim()).slice(0, 2);
    }

    /**
     * Extract highlights from review card
     */
    extractHighlights(card) {
        const highlights = [];
        
        // Get top perks as highlights
        const perks = this.extractPerks(card);
        highlights.push(...perks.slice(0, 3));
        
        // Get top features as highlights
        const features = this.extractFeatures(card);
        highlights.push(...features.slice(0, 2));
        
        return highlights.slice(0, 4); // Limit to 4 highlights
    }

    /**
     * Update product box with extracted data
     */
    updateProductBox(productBox, data) {
        // Update product name
        this.updateElement(productBox, '.product-name, .product-title, h3, h4', data.name);
        
        // Update rating
        this.updateElement(productBox, '.rating-score, .rating-value', data.rating.toString());
        // Update rating in overlay specifically
        this.updateElement(productBox, '.product-overlay .rating-score', data.rating.toString());
        this.updateStars(productBox, data.rating);
        
        // Update price
        this.updateElement(productBox, '.current-price, .price', data.price);
        this.updateElement(productBox, '.original-price, .old-price', data.originalPrice);
        this.updateElement(productBox, '.discount-badge, .discount', data.discount);
        
        // Update image
        this.updateImage(productBox, data.image);
        
        // Update affiliate link
        this.updateAffiliateLink(productBox, data.affiliateLink);
        
        // Update CTA text
        this.updateElement(productBox, '.btn-primary, .cta-button', data.ctaText);
        
        // Update features based on product box configuration
        this.updateProductFeatures(productBox, data);
        
        // Add data attributes for comparison system
        productBox.setAttribute('data-product-name', data.name);
        productBox.setAttribute('data-product-rating', data.rating);
        productBox.setAttribute('data-product-price', data.price);
    }

    /**
     * Update text content of an element
     */
    updateElement(container, selector, content) {
        const element = container.querySelector(selector);
        if (element && content) {
            element.textContent = content;
        }
    }

    /**
     * Update star rating display
     */
    updateStars(container, rating) {
        // Update stars in overlay
        const overlayStarsContainer = container.querySelector('.product-overlay .stars');
        if (overlayStarsContainer) {
            overlayStarsContainer.innerHTML = this.generateStars(rating);
        }
        
        // Update stars in content area (if visible)
        const contentStarsContainer = container.querySelector('.product-content .stars');
        if (contentStarsContainer) {
            contentStarsContainer.innerHTML = this.generateStars(rating);
        }
        
        // Fallback for any other star containers
        const starsContainer = container.querySelector('.rating-stars, .stars');
        if (starsContainer && !overlayStarsContainer && !contentStarsContainer) {
            starsContainer.innerHTML = this.generateStars(rating);
        }
    }

    /**
     * Generate star rating HTML
     */
    generateStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        let stars = '';
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star"></i>';
        }
        return stars;
    }

    /**
     * Update product image
     */
    updateImage(container, imageSrc) {
        const imageElement = container.querySelector('.product-image img, img');
        if (imageElement && imageSrc) {
            imageElement.src = imageSrc;
            imageElement.alt = this.extractProductName(container) + ' Image';
        }
    }

    /**
     * Update affiliate link
     */
    updateAffiliateLink(container, link) {
        const linkElements = container.querySelectorAll('a[href], .btn[href]');
        linkElements.forEach(linkEl => {
            if (link && link !== '#') {
                linkEl.href = link;
            }
        });
    }

    /**
     * Sync product data with enhanced configuration
     */
    syncWithEnhancedConfig() {
        // This method can be used to sync with enhanced product configuration
        // if needed for backward compatibility
        console.log('Product sync with enhanced configuration');
    }

    /**
     * Update product features based on configuration
     */
    updateProductFeatures(container, data) {
        const featuresContainer = container.querySelector('.product-features, .product-highlights');
        if (!featuresContainer) return;

        // Get product index from container
        const productCards = document.querySelectorAll('.product-card');
        const productIndex = Array.from(productCards).indexOf(container.closest('.product-card'));
        const productId = `product${productIndex + 1}`;
        
        // Get product data from config
        const productData = window.PRODUCTS_CONFIG?.[productId];
        if (!productData) return;

        // Check if this product should show perks or specifications
        const showPerks = window.SECTION_TITLES?.productCards?.showPerks !== false;
        const features = showPerks ? productData.perks : productData.specifications;
        
        if (features && features.length > 0) {
            const maxFeatures = 4; // Show up to 4 features in product cards
            const featuresToShow = features.slice(0, maxFeatures);
            
            let featuresList = '';
            if (showPerks) {
                // Show perks with icons
                featuresList = featuresToShow.map(perk => 
                    `<li><i class="${perk.icon}"></i> ${perk.text}</li>`
                ).join('');
            } else {
                // Show specifications with icons
                featuresList = featuresToShow.map(spec => 
                    `<li><i class="${spec.icon}"></i> <strong>${spec.name}:</strong> ${spec.value}</li>`
                ).join('');
            }
            
            featuresContainer.innerHTML = `<ul class="features-list">${featuresList}</ul>`;
        }
    }

    /**
     * Setup mutation observer to watch for changes in review cards
     */
    setupObserver() {
        if (typeof MutationObserver === 'undefined') return;

        const observer = new MutationObserver((mutations) => {
            let shouldResync = false;
            
            mutations.forEach((mutation) => {
                // Check if any review card content changed
                if (mutation.target.closest('.detailed-review-card')) {
                    shouldResync = true;
                }
            });
            
            if (shouldResync) {
                // Debounce the resync to avoid excessive updates
                clearTimeout(this.resyncTimeout);
                this.resyncTimeout = setTimeout(() => {
                    this.syncAllProducts();
                }, 500);
            }
        });

        // Observe changes in review cards
        this.reviewCards.forEach(card => {
            observer.observe(card, {
                childList: true,
                subtree: true,
                characterData: true
            });
        });

        console.log('Product sync observer initialized');
    }

    /**
     * Manually trigger a resync of all products
     */
    resync() {
        console.log('Manual resync triggered');
        this.syncAllProducts();
    }

    /**
     * Get product data for comparison system
     */
    getProductDataForComparison() {
        const productData = {};
        
        // Only include products that exist in PRODUCTS_CONFIG (limit to 10 products)
        if (typeof window.PRODUCTS_CONFIG !== 'undefined') {
            Object.keys(window.PRODUCTS_CONFIG).forEach(productKey => {
                const product = window.PRODUCTS_CONFIG[productKey];
                productData[productKey] = {
                    name: product.name,
                    rating: product.rating,
                    price: product.price,
                    features: product.features,
                    pros: product.perks,
                    specifications: product.specifications,
                    affiliateLink: product.affiliateLink
                };
            });
        } else {
            // Fallback to sync mappings but limit to 10 products
            Object.values(this.syncMappings).slice(0, 10).forEach((mapping, index) => {
                const data = this.extractReviewCardData(mapping.reviewCard);
                productData[`product${index + 1}`] = {
                    name: data.name,
                    rating: data.rating,
                    price: data.price,
                    features: data.features,
                    pros: data.perks,
                    specifications: data.specifications,
                    affiliateLink: data.affiliateLink
                };
            });
        }
        
        return productData;
    }
}

// Initialize product sync when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.productSync = new ProductDataSync();
});

// Export for use in other scripts
window.ProductDataSync = ProductDataSync; 