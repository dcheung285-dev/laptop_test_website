/*
===========================================
ENHANCED PRODUCT CARD SYSTEM - SIMPLIFIED
===========================================
This system now uses the simple PRODUCTS_CONFIG from config.js
where each product has its own perks and specs with icons.
*/

/* This is for the index.html page for the product cards grid and list view versions */

// ========== ENHANCED PRODUCT CARD SYSTEM ==========
const ENHANCED_PRODUCT_CONFIG = {
    // Display settings
    display: {
        enableExpansion: true,
        enableHoverScale: true,
        enableCustomIcons: true,
        defaultExpanded: false,
        animationSpeed: '0.3s'
    },
    
    // List view configuration
    listView: {
        showProductImage: false,
        imageSize: 'medium',
        elementsOrder: ['name', 'features', 'cta', 'buttons'],
        maxFeaturesCollapsed: 3,
        maxFeaturesExpanded: 6,
        defaultMinimized: true // List view cards start minimized
    },
    
    // Button configuration
    buttons: {
        primaryText: 'Get Best Deal',
        primaryIcon: '',
        secondaryText: 'Review',
        secondaryIcon: 'fas fa-search',
        expandText: 'Show More',
        minimizeText: 'Show Less',
        expandIcon: 'fas fa-chevron-down',
        minimizeIcon: 'fas fa-chevron-up'
    },
    
    // Get product data from config
    getProductData: function(productId) {
        return window.PRODUCTS_CONFIG?.[productId] || null;
    },
    
    // Get perks, specs, or features based on setting (PRODUCT CARDS ONLY)
    getProductFeatures: function(productId, forceSection = null) {
        const product = this.getProductData(productId);
        if (!product) return [];
        
        // Determine which section to show
        let section = forceSection;
        if (!section) {
            section = window.SECTION_TITLES?.productCards?.displaySection || 'perks';
        }
        
        // Return appropriate data based on section
        switch(section) {
            case 'perks':
                return product.perks || [];
            case 'specs':
                return product.specifications || [];
            case 'features':
                return product.features || [];
            default:
                return product.perks || [];
        }
    },
    
    // Get section title based on display setting (PRODUCT CARDS ONLY)
    getSectionTitle: function(forceSection = null) {
        let section = forceSection;
        if (!section) {
            section = window.SECTION_TITLES?.productCards?.displaySection || 'perks';
        }
        
        // Return appropriate title based on section
        switch(section) {
            case 'perks':
                return window.SECTION_TITLES?.getSection?.('perks')?.title || 'Key Perks & Benefits';
            case 'specs':
                return window.SECTION_TITLES?.getSection?.('specs')?.title || 'Technical Specifications';
            case 'features':
                return window.SECTION_TITLES?.getSection?.('features')?.title || 'Key Features';
            default:
                return window.SECTION_TITLES?.getSection?.('perks')?.title || 'Key Perks & Benefits';
        }
    }
};

/*
===========================================
ENHANCED PRODUCT CARD MANAGER
===========================================
*/

class EnhancedProductCardManager {
    constructor() {
        this.config = ENHANCED_PRODUCT_CONFIG;
        this.originalGridContent = new Map(); // Store original grid content
        this.init();
    }
    
    /**
     * Get appropriate scale for current device type and view
     */
    getApropriateScale(productData, view) {
        // Detect if we're on tablet (767px - 1023px)
        const isTablet = window.innerWidth >= 767 && window.innerWidth <= 1023;
        
        let scale;
        if (isTablet && productData.logoScale?.tablet) {
            // Use tablet-specific scaling
            scale = view === 'list' ? 
                (productData.logoScale.tablet.list || 1.0) : 
                (productData.logoScale.tablet.grid || 1.0);
            console.log(`📱 Using tablet scale for ${view} view: ${scale}`);
        } else {
            // Use desktop/mobile scaling
            scale = view === 'list' ? 
                (productData.logoScale?.list || 1.0) : 
                (productData.logoScale?.grid || 1.0);
            console.log(`🖥️ Using desktop/mobile scale for ${view} view: ${scale}`);
        }
        
        return scale;
    }
    
    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.enhance();
                this.setupResizeListener();
            });
        } else {
            this.enhance();
            this.setupResizeListener();
        }
        
        // Listen for view changes
        this.setupViewChangeListener();
    }
    
    /**
     * Setup resize listener to update scaling when device type changes
     */
    setupResizeListener() {
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.updateExistingListViewScaling();
            }, 250);
        });
    }
    
    /**
     * Update scaling for existing list view images when device type changes
     */
    updateExistingListViewScaling() {
        const listViewImages = document.querySelectorAll('.list-view-image img');
        console.log(`🔄 Updating ${listViewImages.length} existing list view images for device change`);
        
        listViewImages.forEach((img, index) => {
            const card = img.closest('.product-card');
            if (card) {
                const productId = card.id.replace('product-', '');
                const productKey = `product${productId}`;
                const productData = window.PRODUCTS_CONFIG?.[productKey];
                
                if (productData && productData.logoScale) {
                    const newScale = this.getApropriateScale(productData, 'list');
                    
                    // Update the CSS custom property and transform
                    img.style.setProperty('--logo-scale-current', newScale);
                    
                    // Update the inline transform (preserving positioning)
                    if (productData.logoPositioning?.list) {
                        const left = productData.logoPositioning.list.left || '0px';
                        const top = productData.logoPositioning.list.top || '0px';
                        img.style.transform = `scale(${newScale}) translate(${left}, ${top})`;
                    } else {
                        img.style.transform = `scale(${newScale})`;
                    }
                    
                    console.log(`   Updated list view image ${index + 1} (product ${productId}) to scale ${newScale}`);
                }
            }
        });
    }
    
    enhance() {
        // Store original grid content before any modifications
        this.storeOriginalGridContent();
        
        // Enhance product cards with dynamic content
        this.enhanceProductCards();
        
        // Enhance detailed reviews
        this.enhanceDetailedReviews();
        
        // Enhance editor's picks
        this.enhanceEditorsPicks();
        
        // Setup expand/minimize functionality
        this.setupExpandMinimize();
    }
    
    storeOriginalGridContent() {
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach((card, index) => {
            const productId = `product${index + 1}`;
            const cardId = card.id || `card-${productId}`;
            card.id = cardId;
            
            // Store the original HTML content
            this.originalGridContent.set(cardId, card.innerHTML);
        });
    }
    
    setupEnhancedCards() {
        this.enhanceProductCards();
        this.enhanceDetailedReviews();
        this.setupExpandMinimize();
        this.setupListView();
    }
    
    setupViewChangeListener() {
        // Listen for view toggle button clicks
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-view]')) {
                setTimeout(() => {
                    this.handleViewChange();
                }, 100);
            }
        });
    }
    
    handleViewChange() {
        const productsGrid = document.querySelector('.products-grid');
        const isListView = productsGrid?.classList.contains('list-view');
        
        if (isListView) {
            this.activateListView();
        } else {
            this.activateGridView();
        }
    }
    
    activateListView() {
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach((card, index) => {
            const productId = `product${index + 1}`;
            this.createListViewCard(card, productId);
        });
        
        // Update scaling for newly created list view images
        setTimeout(() => {
            this.updateExistingListViewScaling();
        }, 50);
        
        // Review buttons are handled automatically by ProductRenderer event delegation
    }
    
    restoreGridViewCard(card, productId) {
        const cardId = card.id || `card-${productId}`;
        
        // Restore original grid content from stored HTML
        if (this.originalGridContent.has(cardId)) {
            card.innerHTML = this.originalGridContent.get(cardId);
        }
        
        // Re-enhance the restored card
        this.updateProductCard(card, productId);
        this.addExpansionButton(card);
        this.applyLogoScaling(card, productId);
    }
    
    activateGridView() {
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach((card, index) => {
            const productId = `product${index + 1}`;
            this.restoreGridViewCard(card, productId);
        });
        
        // Review buttons are handled automatically by ProductRenderer event delegation
    }
    
    createListViewCard(card, productId) {
        const cardId = card.id || `card-${productId}`;
        const productData = this.config.getProductData(productId);
        
        if (!productData) return;
        
        const listViewHTML = `
            <div class="list-view-card">
                <div class="list-view-header">
                    <div class="list-view-rank">
                        <span class="rank-number">${productData.rank}</span>
                        <span class="rank-badge">${productData.rankBadge}</span>
                    </div>
                    <div class="list-view-title">
                        <h3>${productData.name}</h3>
                    </div>
                    <div class="list-view-rating">
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <span class="rating-score">${productData.rating}</span>
                        <span class="review-count">(${productData.reviewCount})</span>
                    </div>
                </div>
                
                <div class="list-view-body minimized">
                    <div class="list-view-content">
                        <div class="list-view-image">
                            <img src="${productData.productLogo}" alt="${productData.name}" 
                                 style="--logo-scale-current: ${this.getApropriateScale(productData, 'list')}; transform: scale(var(--logo-scale-current)) translate(${productData.logoPositioning?.list?.left || '0px'}, ${productData.logoPositioning?.list?.top || '0px'}); object-position: ${productData.imagePositioning?.list?.objectPosition || 'center'}; object-fit: ${productData.imagePositioning?.list?.objectFit || 'cover'}; position: relative;"
                                 onerror="this.src='./assets/images/template_icon_logo.png'">
                        </div>
                        
                        <div class="list-view-features">
                            ${this.generateFeaturesList(productData, productId)}
                        </div>
                        
                        <div class="list-view-pricing">
                            ${window.templateRenderer ? window.templateRenderer.renderListViewPrimaryInfo(productData) : `
                                <div class="primary-value">${productData.price}</div>
                                <div class="secondary-value">${productData.originalPrice}</div>
                                <div class="tertiary-value">${productData.discount}</div>
                            `}
                        </div>
                        
                        <div class="list-view-actions">
                            <a href="${productData.affiliateLink}" class="btn btn-primary" 
                               target="_blank" rel="noopener">
                                ${productData.ctaText}
                            </a>
                            <button class="btn btn-secondary review-btn" data-target="review-${productData.rank}">
                                Review
                            </button>
                            <button class="list-view-expand-btn" data-card-id="${cardId}">
                                <i class="fas fa-chevron-down"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Replace card content with list view
        card.innerHTML = listViewHTML;
    }
    
    generateFeaturesList(productData, productId) {
        // Get features based on current product card setting
        const features = this.config.getProductFeatures(productId);
        if (!features || features.length === 0) return '';
        
        // Determine section type to format correctly
        let section = window.SECTION_TITLES?.productCards?.displaySection || 'perks';
        
        const maxFeaturesCollapsed = 3; // Show 3 features when minimized in list view
        
        return `
            <ul class="features-list">
                ${features.slice(0, maxFeaturesCollapsed).map(feature => {
                    if (section === 'perks') {
                        // For perks: show text with icon
                        return `
                            <li class="feature-item">
                                <i class="${feature.icon}"></i>
                                <span>${feature.text}</span>
                            </li>
                        `;
                    } else if (section === 'specs') {
                        // For specifications: show name and value
                        return `
                            <li class="feature-item">
                                <i class="${feature.icon}"></i>
                                <strong>${feature.name}:</strong> ${feature.value}
                            </li>
                        `;
                    } else if (section === 'features') {
                        // For features: show text with icon (same format as perks)
                        return `
                    <li class="feature-item">
                                <i class="${feature.icon}"></i>
                                <span>${feature.text}</span>
                    </li>
                        `;
                    }
                    return '';
                }).join('')}
            </ul>
        `;
    }
    
    updateProductCard(card, productId) {
        const productData = this.config.getProductData(productId);
        if (!productData) return;
        
        // Update product image in grid view
        const productImage = card.querySelector('.product-image img');
        if (productImage && productData.productImage) {
            productImage.src = productData.productImage;
            productImage.alt = productData.name;
        }
        
        // Update product features based on config setting (PRODUCT CARDS ONLY)
        const featuresContainer = card.querySelector('.product-features');
        if (featuresContainer) {
            const features = this.config.getProductFeatures(productId);
            if (features && features.length > 0) {
                // Determine section type to format correctly
                let section = window.SECTION_TITLES?.productCards?.displaySection || 'perks';
                
                const maxFeatures = 4; // Show first 4 features in product cards (minimized state)
            
            featuresContainer.innerHTML = `
                <ul class="features-list">
                        ${features.slice(0, maxFeatures).map(feature => {
                            if (section === 'perks') {
                                // For perks: show text with icon
                                return `
                                    <li class="feature-item">
                                        <i class="${feature.icon}"></i>
                                        <span>${feature.text}</span>
                                    </li>
                                `;
                            } else if (section === 'specs') {
                                // For specifications: show name and value
                                return `
                                    <li class="feature-item">
                                        <i class="${feature.icon}"></i>
                                        <strong>${feature.name}:</strong> ${feature.value}
                                    </li>
                                `;
                            } else if (section === 'features') {
                                // For features: show text with icon (same format as perks)
                                return `
                        <li class="feature-item">
                                        <i class="${feature.icon}"></i>
                                        <span>${feature.text}</span>
                        </li>
                                `;
                            }
                            return '';
                        }).join('')}
                </ul>
            `;
            }
        }
    }
    
    enhanceProductCards() {
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach((card, index) => {
            const productId = `product${index + 1}`;
            this.updateProductCard(card, productId);
            this.addExpansionButton(card);
            this.applyLogoScaling(card, productId);
        });
    }
    
    enhanceDetailedReviews() {
        const reviewCards = document.querySelectorAll('.detailed-review-card');
        reviewCards.forEach((card, index) => {
            const productId = `product${index + 1}`;
            this.updateDetailedReview(card, productId);
        });
    }
    
    updateDetailedReview(card, productId) {
        const productData = this.config.getProductData(productId);
        if (!productData) return;
        
        // Update product image in detailed review
        const reviewImage = card.querySelector('.review-product-image img');
        if (reviewImage && productData.productImage) {
            reviewImage.src = productData.productImage;
            reviewImage.alt = productData.name;
        }
        
        // Update features section (unaffected by productCards setting)
        const featuresSection = card.querySelector('.review-features-section');
        if (featuresSection && productData.features) {
            const featuresTitle = featuresSection.querySelector('.features-title');
            const featuresGrid = featuresSection.querySelector('.features-grid');
            
            if (featuresTitle) {
                const featuresSectionInfo = window.SECTION_TITLES?.getSection?.('features') || { title: 'Key Features', icon: 'fas fa-list' };
                featuresTitle.innerHTML = `
                    <i class="${featuresSectionInfo.icon}"></i>
                    ${featuresSectionInfo.title}
                `;
            }
            
            if (featuresGrid) {
                featuresGrid.innerHTML = productData.features.map(feature => `
                    <div class="feature-item">
                        <i class="${feature.icon}"></i>
                        <span>${feature.text}</span>
                    </div>
                `).join('');
            }
        }
        
        // Update perks section (unaffected by productCards setting)
        const perksSection = card.querySelector('.review-perks-section');
        if (perksSection && productData.perks) {
            const perksTitle = perksSection.querySelector('.perks-title');
            const perksGrid = perksSection.querySelector('.perks-grid');
            
            if (perksTitle) {
                const perksSectionInfo = window.SECTION_TITLES?.getSection?.('perks') || { title: 'Key Perks & Benefits', icon: 'fas fa-star' };
                perksTitle.innerHTML = `
                    <i class="${perksSectionInfo.icon}"></i>
                    ${perksSectionInfo.title}
                `;
            }
            
            if (perksGrid) {
                perksGrid.innerHTML = productData.perks.map(perk => `
                    <div class="perk-item">
                        <i class="${perk.icon}"></i>
                        <span>${perk.text}</span>
                    </div>
                `).join('');
            }
        }
        
        // Update specifications section (unaffected by productCards setting)
        const specsSection = card.querySelector('.review-specs-section');
        if (specsSection && productData.specifications) {
            const specsTitle = specsSection.querySelector('.specs-title');
            const specsGrid = specsSection.querySelector('.specs-grid');
            
            if (specsTitle) {
                const specsSectionInfo = window.SECTION_TITLES?.getSection?.('specs') || { title: 'Technical Specifications', icon: 'fas fa-cogs' };
                specsTitle.innerHTML = `
                    <i class="${specsSectionInfo.icon}"></i>
                    ${specsSectionInfo.title}
                `;
            }
            
            if (specsGrid) {
                specsGrid.innerHTML = productData.specifications.map(spec => `
                    <div class="spec-item">
                        <i class="${spec.icon}"></i>
                        <div class="spec-content">
                            <strong>${spec.name}:</strong>
                            <span>${spec.value}</span>
                        </div>
                    </div>
                `).join('');
            }
        }
    }
    

    
    enhanceEditorsPicks() {
        const editorsPicks = document.querySelectorAll('.editors-pick-card');
        editorsPicks.forEach((card, index) => {
            const productId = `product${index + 1}`;
            this.updateEditorsPickCard(card, productId);
        });
    }
    
    updateEditorsPickCard(card, productId) {
        const productData = this.config.getProductData(productId);
        if (!productData) return;
        
        // Update editor's pick features
        const featuresContainer = card.querySelector('.pick-features');
        if (featuresContainer && productData.perks) {
            // Get configurable feature count from SECTION_TITLES.editorsPicks (default: 3)
            const maxFeatures = window.SECTION_TITLES?.editorsPicks?.featureCount || 3;
            featuresContainer.innerHTML = `
                <ul class="features-list">
                    ${productData.perks.slice(0, maxFeatures).map(perk => `
                        <li class="feature-item">
                            <i class="${perk.icon}"></i>
                            <span>${perk.text}</span>
                        </li>
                    `).join('')}
                </ul>
            `;
        }
    }
    
    applyLogoScaling(card, productId) {
        const productData = this.config.getProductData(productId);
        if (!productData?.logoScale) return;
        
        const logoImage = card.querySelector('.product-logo-image');
        if (logoImage && productData.productLogo) {
            logoImage.src = productData.productLogo;
            logoImage.style.setProperty('--logo-scale-grid', productData.logoScale.grid || 1.0);
            logoImage.style.transform = 'scale(var(--logo-scale-grid))';
        }
    }
    
    addExpansionButton(card) {
        const cardContent = card.querySelector('.product-content');
        if (!cardContent) return;
        
        // Check if expansion button already exists
        if (card.querySelector('.expansion-btn')) {
            return;
        }
        
        const productFeatures = card.querySelector('.product-features');
        const productPricing = card.querySelector('.product-pricing');
        if (!productFeatures || !productPricing) return;
        
        // Create expansion button container for proper centering
        const expansionContainer = document.createElement('div');
        expansionContainer.className = 'expansion-container';
        
        // Create expansion button (icon only, no text)
        const expansionBtn = document.createElement('button');
        expansionBtn.className = 'expansion-btn';
        expansionBtn.type = 'button';
        expansionBtn.setAttribute('aria-label', 'Toggle features');
        expansionBtn.style.cursor = 'pointer';
        expansionBtn.innerHTML = `<i class="fas fa-chevron-down"></i>`;
        
        // Add button to container
        expansionContainer.appendChild(expansionBtn);
        
        // Insert expansion container between features and pricing
        productPricing.parentNode.insertBefore(expansionContainer, productPricing);
        
        // Mark card as having expansion capability (no initial class needed)
        card.setAttribute('data-expandable', 'true');
    }
    
    setupListView() {
        // This will be called when list view is activated
        const productsGrid = document.querySelector('.products-grid');
        if (productsGrid?.classList.contains('list-view')) {
            this.activateListView();
        }
    }
    
    // ========== NEW CLEAN EXPAND/MINIMIZE SYSTEM ==========
    
    setupExpandMinimize() {
        // Single event listener for all expand/minimize functionality
        document.addEventListener('click', (e) => {
            // Handle grid view expansion buttons
            if (e.target.closest('.expansion-btn')) {
                const button = e.target.closest('.expansion-btn');
                const card = button.closest('.product-card');
                this.toggleGridExpansion(card);
            }
            
            // Handle list view expansion buttons
            if (e.target.closest('.list-view-expand-btn')) {
                const button = e.target.closest('.list-view-expand-btn');
                const cardId = button.getAttribute('data-card-id');
                this.toggleListExpansion(cardId);
            }
        });
    }
    
    toggleGridExpansion(card) {
        if (!card) return;
        
        const featuresContainer = card.querySelector('.product-features');
        const button = card.querySelector('.expansion-btn');
        const icon = button?.querySelector('i');
        
        if (!featuresContainer || !button || !icon) return;
        
        // Get product data
        const allCards = Array.from(document.querySelectorAll('.product-card'));
        const cardIndex = allCards.indexOf(card);
        const productId = `product${cardIndex + 1}`;
        const productData = this.config.getProductData(productId);
        
        // Get features based on current displaySection setting (same as list view)
        const features = this.config.getProductFeatures(productId);
        
        if (!features || features.length === 0) return;
        
        // Check current state - default state (no classes) is considered minimized
        const isExpanded = card.classList.contains('expanded');
        
        if (isExpanded) {
            // Minimize: show 4 features, remove expanded class (back to default)
            this.updateGridFeatures(featuresContainer, features, 4);
            icon.className = 'fas fa-chevron-down';
            card.classList.remove('expanded');
        } else {
            // Expand: show all features, add expanded class
            this.updateGridFeatures(featuresContainer, features, features.length);
            icon.className = 'fas fa-chevron-up';
            card.classList.add('expanded');
        }
    }
    
    toggleListExpansion(cardId) {
        const card = document.getElementById(cardId);
        if (!card) return;
        
        const featuresContainer = card.querySelector('.list-view-features');
        const button = card.querySelector('.list-view-expand-btn');
        const icon = button?.querySelector('i');
        const body = card.querySelector('.list-view-body');
        
        if (!featuresContainer || !button || !icon || !body) return;
        
        // Get product data
        const allCards = Array.from(document.querySelectorAll('.product-card'));
        const cardIndex = allCards.indexOf(card);
        const productId = `product${cardIndex + 1}`;
        const productData = this.config.getProductData(productId);
        
        // Get features based on current product card setting
        const features = this.config.getProductFeatures(productId);
        
        if (!features || features.length === 0) return;
        
        // Check current state - default state (minimized class) is considered minimized
        const isExpanded = body.classList.contains('expanded');
        
        if (isExpanded) {
            // Minimize: show 3 features, remove expanded class (back to minimized)
            this.updateListFeatures(featuresContainer, features, 3);
            icon.className = 'fas fa-chevron-down';
            body.classList.remove('expanded');
            body.classList.add('minimized');
        } else {
            // Expand: show all features, add expanded class
            this.updateListFeatures(featuresContainer, features, features.length);
            icon.className = 'fas fa-chevron-up';
            body.classList.remove('minimized');
            body.classList.add('expanded');
        }
    }
    
    updateGridFeatures(container, features, count) {
        const featuresList = container.querySelector('.features-list');
        if (!featuresList) return;
        
        // Determine section type to format correctly (same logic as list view)
        let section = window.SECTION_TITLES?.productCards?.displaySection || 'perks';
        
        featuresList.innerHTML = features.slice(0, count).map(feature => {
            if (section === 'perks') {
                // For perks: show text with icon
                return `
                    <li class="feature-item">
                        <i class="${feature.icon}"></i>
                        <span>${feature.text}</span>
                    </li>
                `;
            } else if (section === 'specs') {
                // For specifications: show name and value
                return `
                    <li class="feature-item">
                        <i class="${feature.icon}"></i>
                        <strong>${feature.name}:</strong> ${feature.value}
                    </li>
                `;
            } else if (section === 'features') {
                // For features: show text with icon
                return `
            <li class="feature-item">
                        <i class="${feature.icon}"></i>
                        <span>${feature.text}</span>
            </li>
                `;
            }
            return '';
        }).join('');
    }
    
    updateListFeatures(container, features, count) {
        const featuresList = container.querySelector('.features-list');
        if (!featuresList) return;
        
        // Determine section type to format correctly
        let section = window.SECTION_TITLES?.productCards?.displaySection || 'perks';
        
        featuresList.innerHTML = features.slice(0, count).map(feature => {
            if (section === 'perks') {
                // For perks: show text with icon
                return `
                    <li class="feature-item">
                        <i class="${feature.icon}"></i>
                        <span>${feature.text}</span>
                    </li>
                `;
            } else if (section === 'specs') {
                // For specifications: show name and value
                return `
                    <li class="feature-item">
                        <i class="${feature.icon}"></i>
                        <strong>${feature.name}:</strong> ${feature.value}
                    </li>
                `;
            } else if (section === 'features') {
                // For features: show text with icon
                return `
            <li class="feature-item">
                        <i class="${feature.icon}"></i>
                        <span>${feature.text}</span>
            </li>
                `;
            }
            return '';
        }).join('');
    }
}

// Initialize the enhanced product card system
window.enhancedProductManager = new EnhancedProductCardManager();

// Console commands for easy management
window.EnhancedProductManager = {
    // Toggle card expansion
    toggleCard: function(cardId) {
        const card = document.getElementById(cardId);
        if (card && window.enhancedProductManager) {
            window.enhancedProductManager.toggleGridExpansion(card);
        }
    },
    
    // Toggle list view expansion
    toggleListCard: function(cardId) {
        if (window.enhancedProductManager) {
            window.enhancedProductManager.toggleListExpansion(cardId);
        }
    },
    
    // Refresh all cards
    refresh: function() {
        if (window.enhancedProductManager) {
            window.enhancedProductManager.setupEnhancedCards();
        }
    },
    
    // Force list view activation
    activateListView: function() {
        if (window.enhancedProductManager) {
            window.enhancedProductManager.activateListView();
        }
    },
    
    // Force grid view activation
    activateGridView: function() {
        if (window.enhancedProductManager) {
            window.enhancedProductManager.activateGridView();
        }
    }
};

// Initialize the Enhanced Product Card Manager when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initializing Enhanced Product Card Manager...');
    
    // Create the manager instance
    window.enhancedProductManager = new EnhancedProductCardManager();
    
    // Set up enhanced cards immediately
    window.enhancedProductManager.setupEnhancedCards();
    
    console.log('✅ Enhanced Product Card Manager initialized');
}); 