/**
 * Interactive Product Comparison System
 * Allows users to select 2-3 products and compare their features dynamically
 */

console.log('🔧 COMPARISON.JS LOADING...'); // Debug: File loading check

class ProductComparison {
    constructor() {
        this.selectedProducts = [];
        this.maxProducts = 3;
        this.minProducts = 2;
        this.productData = {};
        this.comparisonContainer = null;
        this.init();
    }

    /**
     * Initialize the comparison system
     */
    init() {
        console.log('🔍 Initializing ProductComparison...');
        this.loadProductData();
        console.log('✅ Product data loaded');
        this.setupComparisonInterface();
        console.log('✅ Comparison interface setup');
        this.bindEvents();
        console.log('✅ Events bound');
        console.log('✅ ProductComparison initialization complete');
    }

    /**
     * Load product data dynamically from config system
     */
    loadProductData() {
        console.log('🔄 Loading product data dynamically...');
        
        // Start with empty data
        this.productData = {};
        
        // Load standard products from PRODUCTS_CONFIG
        if (typeof window.PRODUCTS_CONFIG !== 'undefined') {
            // Copy all products from config
            Object.keys(window.PRODUCTS_CONFIG).forEach(key => {
                const product = window.PRODUCTS_CONFIG[key];
                console.log(`🔍 Loading ${key} comparison data:`, {
                    name: product.name,
                    welcomeBonus: product.welcomeBonus,
                    welcomePackage: product.welcomePackage,
                    addedBonus: product.addedBonus,
                    perksCount: product.perks?.length,
                    samplePerk: product.perks?.[0]
                });
                this.productData[key] = {
                    name: product.name,
                    rating: product.rating,
                    // Physical Products fields
                    price: product.price,
                    originalPrice: product.originalPrice,
                    discount: product.discount,
                                    // Casino Websites fields
                welcomeBonus: product.welcomeBonus, 
                welcomePackage: product.welcomePackage,
                    addedBonus: product.addedBonus,
                    // Sports Betting fields
                    signupBonus: product.signupBonus,
                    oddsBoost: product.oddsBoost,
                    freeBet: product.freeBet,
                    // Software/SaaS fields
                    monthlyPrice: product.monthlyPrice,
                    yearlyPrice: product.yearlyPrice,
                    trialPeriod: product.trialPeriod,
                    // Other fields
                    features: product.features || [], // Simple text array for features
                    pros: product.perks || [], // Full perk objects with text + icon for highlights
                    perks: product.perks || [], // Full perk objects with text + icon
                    specifications: this.extractSpecifications(product),
                    affiliateLink: product.affiliateLink,
                    reviewCount: product.reviewCount,
                    rank: product.rank
                };
            });
            console.log('✅ Loaded', Object.keys(this.productData).length, 'products from PRODUCTS_CONFIG');
        }
        
        // Add manual editor's choice if enabled
        this.addEditorsChoiceToComparison();
        
        // Log final product count
        console.log('📊 Final product data loaded:', Object.keys(this.productData).length, 'products');
        console.log('🎯 Products available for comparison:', Object.keys(this.productData));
    }
    
    /**
     * Extract specifications from product config
     */
    extractSpecifications(product) {
        const specs = {};
        
        // Add basic info - but skip price for casino websites
        const templateType = window.TEMPLATE_TYPE || 'physical_products';
        
        // Only add Price for non-casino templates
        if (templateType !== 'casino_websites') {
            specs["Price"] = product.price;
        }
        
        specs["Rating"] = `${product.rating}/5`;
        specs["Reviews"] = product.reviewCount?.toString() || "N/A";
        
        // Add specifications if they exist
        if (product.specifications && Array.isArray(product.specifications)) {
            product.specifications.forEach(spec => {
                specs[spec.name] = spec.value;
            });
        }
        
        return specs;
    }
    
    /**
     * Add manual editor's choice to comparison options
     */
    addEditorsChoiceToComparison() {
        const editorsConfig = window.EDITORS_CHOICE_CONFIG || {};
        
        console.log('🔍 Checking editor\'s choice config:', {
            configExists: !!editorsConfig,
            useManualOverride: editorsConfig.useManualOverride,
            manualOverrideExists: !!editorsConfig.manualOverride,
            manualOverrideName: editorsConfig.manualOverride?.name
        });
        
        if (editorsConfig.useManualOverride && editorsConfig.manualOverride) {
            const manualProduct = editorsConfig.manualOverride;
            
            // Add editor's choice to product data with consistent structure
            this.productData['editors-choice'] = {
                name: `${manualProduct.name} (Editor's Choice)`,
                rating: manualProduct.rating,
                // Physical Products fields
                price: manualProduct.price,
                originalPrice: manualProduct.originalPrice,
                discount: manualProduct.discount,
                // Casino Websites fields
                welcomeBonus: manualProduct.welcomeBonus, 
                welcomePackage: manualProduct.welcomePackage,
                addedBonus: manualProduct.addedBonus,
                // Sports Betting fields
                signupBonus: manualProduct.signupBonus,
                oddsBoost: manualProduct.oddsBoost,
                freeBet: manualProduct.freeBet,
                // Software/SaaS fields
                monthlyPrice: manualProduct.monthlyPrice,
                yearlyPrice: manualProduct.yearlyPrice,
                trialPeriod: manualProduct.trialPeriod,
                // Other fields
                features: manualProduct.features || [], // Keep full feature objects with icons (same as regular products)
                pros: manualProduct.perks || [], // Full perk objects with text + icon for highlights
                perks: manualProduct.perks || [], // Full perk objects with text + icon
                specifications: this.extractSpecifications(manualProduct),
                affiliateLink: manualProduct.affiliateLink,
                reviewCount: manualProduct.reviewCount,
                rank: "Editor's Choice"
            };
            
            console.log('✅ Manual editor\'s choice added to comparison options:', this.productData['editors-choice']);
            console.log('📊 Total products in comparison data:', Object.keys(this.productData).length);
        } else {
            // If not using manual override: label the selected product itself, do not duplicate
            const selectedProductKey = editorsConfig.selectedProduct || 'product1';
            const selectedProduct = window.PRODUCTS_CONFIG?.[selectedProductKey];

            if (selectedProduct && this.productData[selectedProductKey]) {
                const currentName = this.productData[selectedProductKey].name || selectedProduct.name || selectedProductKey;
                if (!/\(Editor\'s Choice\)/i.test(currentName)) {
                    this.productData[selectedProductKey].name = `${currentName} (Editor's Choice)`;
                }
                this.productData[selectedProductKey].rank = "Editor's Choice";

                // Ensure no separate 'editors-choice' ghost entry remains
                if (this.productData['editors-choice']) {
                    delete this.productData['editors-choice'];
                }
                console.log(`✅ Labeled ${selectedProductKey} as Editor's Choice without duplication.`);
            } else if (selectedProduct) {
                // Fallback: if for some reason the product wasn't loaded, add a single entry
                this.productData[selectedProductKey] = {
                    name: `${selectedProduct.name} (Editor's Choice)`,
                    rating: selectedProduct.rating,
                    price: selectedProduct.price,
                    originalPrice: selectedProduct.originalPrice,
                    discount: selectedProduct.discount,
                    welcomeBonus: selectedProduct.welcomeBonus,
                    welcomePackage: selectedProduct.welcomePackage,
                    addedBonus: selectedProduct.addedBonus,
                    signupBonus: selectedProduct.signupBonus,
                    oddsBoost: selectedProduct.oddsBoost,
                    freeBet: selectedProduct.freeBet,
                    monthlyPrice: selectedProduct.monthlyPrice,
                    yearlyPrice: selectedProduct.yearlyPrice,
                    trialPeriod: selectedProduct.trialPeriod,
                    features: selectedProduct.features || [],
                    pros: selectedProduct.perks || [],
                    perks: selectedProduct.perks || [],
                    specifications: this.extractSpecifications(selectedProduct),
                    affiliateLink: selectedProduct.affiliateLink,
                    reviewCount: selectedProduct.reviewCount,
                    rank: "Editor's Choice"
                };
                console.log(`✅ Added fallback single entry for ${selectedProductKey} labeled as Editor's Choice.`);
            } else {
                console.log('❌ Selected product not found for editor\'s choice:', selectedProductKey);
            }

            console.log('❌ Manual editor\'s choice not added - useManualOverride:', editorsConfig.useManualOverride, 'manualOverride exists:', !!editorsConfig.manualOverride);
        }
    }

    /**
     * Create fallback product data if config is not available
     */
    createFallbackData() {
        this.productData = {
            product1: {
                name: "Product 1",
                rating: 4.5,
                price: "$99",
                features: ["Feature 1", "Feature 2", "Feature 3"],
                pros: ["Pro 1", "Pro 2", "Pro 3"],
                cons: ["Con 1", "Con 2"],
                specifications: {
                    "Spec 1": "Value 1",
                    "Spec 2": "Value 2"
                }
            },
            product2: {
                name: "Product 2",
                rating: 4.3,
                price: "$129",
                features: ["Feature 1", "Feature 3", "Feature 4"],
                pros: ["Pro 1", "Pro 3", "Pro 4"],
                cons: ["Con 1", "Con 3"],
                specifications: {
                    "Spec 1": "Value 1",
                    "Spec 2": "Value 3"
                }
            },
            product3: {
                name: "Product 3",
                rating: 4.7,
                price: "$159",
                features: ["Feature 2", "Feature 4", "Feature 5"],
                pros: ["Pro 2", "Pro 4", "Pro 5"],
                cons: ["Con 2", "Con 4"],
                specifications: {
                    "Spec 1": "Value 2",
                    "Spec 2": "Value 4"
                }
            }
        };
    }

    /**
     * Setup the comparison interface
     */
    setupComparisonInterface() {
        const comparisonSection = document.getElementById('comparison');
        if (!comparisonSection) return;

        // Get comparison configuration from SECTION_TITLES
        const comparisonConfig = window.SECTION_TITLES?.comparisonSection || {};
        
        const comparisonHTML = `
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">${comparisonConfig.title || 'Product Comparison'}</h2>
                    <p class="section-subtitle">${comparisonConfig.subtitle || 'Select 2-3 products to compare their features side by side'}</p>
                </div>
                
                <div class="comparison-controls">
                    <div class="product-selectors">
                        <div class="selector-group">
                            <label for="product1-select">${comparisonConfig.dropdownLabels?.product1 || 'Product 1:'}</label>
                            <select id="product1-select" class="product-select">
                                <option value="">${comparisonConfig.dropdownPlaceholder || 'Select a product...'}</option>
                                ${this.generateProductOptions()}
                            </select>
                        </div>
                        
                        <div class="selector-group">
                            <label for="product2-select">${comparisonConfig.dropdownLabels?.product2 || 'Product 2:'}</label>
                            <select id="product2-select" class="product-select">
                                <option value="">${comparisonConfig.dropdownPlaceholder || 'Select a product...'}</option>
                                ${this.generateProductOptions()}
                            </select>
                        </div>
                        
                        <div class="selector-group">
                            <label for="product3-select">${comparisonConfig.dropdownLabels?.product3 || 'Product 3 (Optional):'}</label>
                            <select id="product3-select" class="product-select">
                                <option value="">${comparisonConfig.dropdownPlaceholder || 'Select a product...'}</option>
                                ${this.generateProductOptions()}
                            </select>
                        </div>
                    </div>
                    
                    <div class="comparison-actions">
                        <button id="compare-btn" class="btn btn-primary" disabled>
                            <i class="fas fa-balance-scale"></i>
                            Compare Products
                        </button>
                        <button id="clear-comparison" class="btn btn-secondary">
                            <i class="fas fa-times"></i>
                            Clear Selection
                        </button>
                    </div>
                </div>
                
                <div class="comparison-results" id="comparison-results">
                    <div class="comparison-placeholder">
                        <i class="fas fa-search"></i>
                        <h3>${comparisonConfig.placeholderTitle || 'Select products to compare'}</h3>
                        <p>${comparisonConfig.placeholderDescription || 'Choose 2-3 products from the dropdowns above to see a detailed comparison'}</p>
                    </div>
                </div>
            </div>
        `;

        comparisonSection.innerHTML = comparisonHTML;
        this.comparisonContainer = document.getElementById('comparison-results');
    }

    /**
     * Generate product options for select dropdowns
     */
    generateProductOptions() {
        return Object.keys(this.productData).map(key => {
            const product = this.productData[key];
            return `<option value="${key}">${product.name || key}</option>`;
        }).join('');
    }

    /**
     * Bind event listeners
     */
    bindEvents() {
        // Bind selection change events
        document.addEventListener('change', (e) => {
            if (e.target.classList.contains('product-select')) {
                console.log('🔍 Product selection changed:', e.target.value);
                this.handleProductSelection();
            }
        });

        // Bind compare button
        document.addEventListener('click', (e) => {
            if (e.target.id === 'compare-btn') {
                console.log('🔍 Compare button clicked!');
                e.preventDefault();
                this.compareProducts();
            }
            if (e.target.id === 'clear-comparison') {
                console.log('🔍 Clear comparison button clicked!');
                this.clearSelection();
            }
        });
        
        console.log('✅ Comparison event listeners bound');
    }

    /**
     * Handle product selection changes
     */
    handleProductSelection() {
        const selects = document.querySelectorAll('.product-select');
        this.selectedProducts = [];
        
        selects.forEach(select => {
            if (select.value) {
                this.selectedProducts.push(select.value);
            }
        });

        // Remove duplicates
        this.selectedProducts = [...new Set(this.selectedProducts)];

        // Update compare button state
        const compareBtn = document.getElementById('compare-btn');
        if (compareBtn) {
            compareBtn.disabled = this.selectedProducts.length < this.minProducts;
        }

        // Update select options to prevent duplicates
        this.updateSelectOptions();
    }

    /**
     * Update select options to prevent duplicate selections
     */
    updateSelectOptions() {
        const selects = document.querySelectorAll('.product-select');
        
        selects.forEach(select => {
            const currentValue = select.value;
            const options = select.querySelectorAll('option');
            
            options.forEach(option => {
                if (option.value === '') return; // Skip empty option
                
                if (this.selectedProducts.includes(option.value) && option.value !== currentValue) {
                    option.disabled = true;
                } else {
                    option.disabled = false;
                }
            });
        });
    }

    /**
     * Compare selected products
     */
    compareProducts() {
        console.log('🔍 compareProducts called with:', this.selectedProducts);
        
        if (this.selectedProducts.length < this.minProducts) {
            alert(`Please select at least ${this.minProducts} products to compare.`);
            return;
        }

        try {
            console.log('🔍 Building comparison table...');
            const comparisonHTML = this.buildComparisonTable();
            console.log('✅ Comparison HTML built successfully');
            
            this.comparisonContainer.innerHTML = comparisonHTML;
            console.log('✅ Comparison HTML inserted into container');
            
            // Setup clickable summary cards after rendering
            this.setupSummaryCardClicks();
            
            // Setup collapsible section headers
            this.setupCollapsibleHeaders();
            
            console.log('✅ Comparison setup complete');
        } catch (error) {
            console.error('❌ Error in compareProducts:', error);
            this.comparisonContainer.innerHTML = `
                <div class="comparison-error">
                    <h3>⚠️ Comparison Error</h3>
                    <p>There was an error building the comparison. Please try again.</p>
                    <p><strong>Error:</strong> ${error.message}</p>
                </div>
            `;
        }
    }

    /**
     * Build the comparison table HTML
     */
    buildComparisonTable() {
        const products = this.selectedProducts.map(key => ({
            key,
            data: this.productData[key]
        }));

        // Get comparison configuration from SECTION_TITLES
        const comparisonConfig = window.SECTION_TITLES?.comparisonSection || {};
        const resultsSubtitle = (comparisonConfig.resultsSubtitle || 'Comparing {count} products')
            .replace('{count}', products.length);

        return `
            <div class="comparison-table-wrapper">
                <div class="comparison-header">
                    <h3>${comparisonConfig.resultsTitle || 'Comparison Results'}</h3>
                    <p>${resultsSubtitle}</p>
                </div>
                
                <div class="comparison-cards">
                    ${products.map(product => this.buildProductCard(product)).join('')}
                </div>
                
                <div class="comparison-table-container">
                    <table class="comparison-table">
                        <thead>
                            <tr>
                                <th class="feature-column">Details</th>
                                ${products.map(product => {
                                    console.log('🔍 Product header debug:', {
                                        productKey: product.key,
                                        productData: product.data,
                                        dataName: product.data.name,
                                        dataNameType: typeof product.data.name,
                                        fullProduct: product
                                    });
                                    // Ensure we get a string value, not an object
                                    const productName = String(product.data.name || product.key || 'Unknown Product');
                                    console.log('🔍 Final product name:', productName, typeof productName);
                                    return `<th>${productName}</th>`;
                                }).join('')}
                            </tr>
                        </thead>
                        <tbody>
                            ${this.buildComparisonRows(products)}
                        </tbody>
                    </table>
                </div>
                
                <div class="comparison-summary">
                    ${this.buildComparisonSummary(products)}
                </div>
            </div>
        `;
    }

    /**
     * Build individual product card for comparison
     */
    buildProductCard(product) {
        const data = product.data;
        return `
            <div class="comparison-product-card">
                <div class="product-header">
                    <h4>${data.name || product.key}</h4>
                    <div class="product-rating">
                        <span class="rating-score">${data.rating || 'N/A'}</span>
                        <div class="rating-stars">
                            ${this.generateStars(data.rating || 0)}
                        </div>
                    </div>
                    <div class="product-price">
                        ${window.templateRenderer ? window.templateRenderer.renderPrimaryInfo(data) : (data.price || 'N/A')}
                    </div>
                </div>
                
                <div class="product-highlights">
                    ${this.renderHighlightsSection(data, product.key)}
                </div>
                
                ${data.affiliateLink ? `
                    <div class="product-cta">
                        <a href="${data.affiliateLink}" class="btn btn-primary btn-sm" target="_blank" rel="noopener">
                            View Product
                        </a>
                    </div>
                ` : ''}
            </div>
        `;
    }

    /**
     * Render highlights section respecting displaySection setting
     */
    renderHighlightsSection(data, productKey) {
        // Get display section setting from config (same as product cards)
        const displaySection = window.SECTION_TITLES?.productCards?.displaySection || 'perks';
        let sectionData = [];
        let sectionTitle = '';
        let sectionIcon = '';
        
        // Get data based on displaySection setting
        if (displaySection === 'perks') {
            sectionData = data.perks || [];
            
            // Debug logging to see what's available
            console.log('🔍 DEBUG - Comparison section title lookup:', {
                comparisonSectionTitles: window.SECTION_TITLES?.comparisonSection?.sectionTitles,
                getSection: window.SECTION_TITLES?.getSection,
                mainPerks: window.SECTION_TITLES?.perks,
                fullSectionTitles: window.SECTION_TITLES
            });
            
            const sectionInfo = window.SECTION_TITLES?.comparisonSection?.sectionTitles?.perks || 
                              window.SECTION_TITLES?.getSection?.('perks') || 
                              window.SECTION_TITLES?.perks || 
                              { title: 'Key Features', icon: window.SECTION_TITLES?.perks?.icon || 'fas fa-star' };
            
            console.log('🎯 DEBUG - Selected section info:', sectionInfo);
            sectionTitle = sectionInfo.title;
            sectionIcon = sectionInfo.icon;
            
            // Icons and titles now properly use config values
            console.log('✅ Section configured:', { sectionTitle, sectionIcon });
        } else if (displaySection === 'specs') {
            sectionData = data.specifications || [];
            const sectionInfo = window.SECTION_TITLES?.comparisonSection?.sectionTitles?.specs || 
                              window.SECTION_TITLES?.getSection?.('specs') || 
                              window.SECTION_TITLES?.specs || 
                              { title: 'Technical Specifications', icon: window.SECTION_TITLES?.specs?.icon || 'fas fa-cogs' };
            sectionTitle = sectionInfo.title;
            sectionIcon = sectionInfo.icon;
        } else if (displaySection === 'features') {
            sectionData = data.features || [];
            const sectionInfo = window.SECTION_TITLES?.comparisonSection?.sectionTitles?.features || 
                              window.SECTION_TITLES?.getSection?.('features') || 
                              window.SECTION_TITLES?.features || 
                              { title: 'Bonus Features', icon: window.SECTION_TITLES?.features?.icon || 'fas fa-list' };
            sectionTitle = sectionInfo.title;
            sectionIcon = sectionInfo.icon;
        }
        
        console.log(`🔍 Comparison card ${productKey} using section "${displaySection}":`, {
            sectionData: sectionData.slice(0, window.SECTION_TITLES?.comparisonSection?.featureCount || 3),
            sectionTitle,
            dataLength: sectionData.length,
            isEditorsChoice: productKey === 'editors-choice',
            firstItemStructure: sectionData[0]
        });
        
        // Fallback to pros if configured section has no data
        if (!sectionData || sectionData.length === 0) {
            console.log(`⚠️ No ${displaySection} data found for ${productKey}, falling back to pros`);
            sectionData = data.pros || [];
            sectionTitle = 'Key Highlights';
            sectionIcon = 'fas fa-check';
        }
        
        if (!sectionData || sectionData.length === 0) {
            return `
                <h5>${sectionTitle}</h5>
                <ul><li><i class="fas fa-info-circle"></i> No data available</li></ul>
            `;
        }
        
        const itemsHTML = sectionData.slice(0, window.SECTION_TITLES?.comparisonSection?.featureCount || 3).map((item, index) => {
            let itemText = '';
            let iconClass = '';
            
            if (displaySection === 'specs') {
                // Specifications format: { name: "...", value: "...", icon: "..." }
                itemText = `${item.name}: ${item.value}`;
                iconClass = item.icon || 'fas fa-cogs';
            } else {
                // Features/Perks format: { text: "...", icon: "..." } or string
                if (typeof item === 'object' && item.text && item.icon) {
                    itemText = item.text;
                    iconClass = item.icon;
                } else {
                    // Fallback for string format or missing icon
                    itemText = typeof item === 'object' ? item.text || item : item;
                    iconClass = sectionIcon;
                }
            }
            
            console.log(`✅ Comparison card ${productKey} item ${index + 1}: ${itemText} with icon ${iconClass}`);
            return `<li><i class="${iconClass}"></i> ${itemText}</li>`;
        }).join('');
        
        return `
            <h5>${sectionTitle}</h5>
            <ul>${itemsHTML}</ul>
        `;
    }

    /**
     * Smart feature matching - Groups similar features across products
     */
    smartFeatureMatching(allItems, type = 'features') {
        // Common words to ignore during matching
        const stopWords = new Set([
            'and', 'the', 'a', 'an', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by',
            'from', 'up', 'about', 'into', 'through', 'during', 'before', 'after', 'above', 'below',
            'between', 'among', 'under', 'over', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
            'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may',
            'might', 'must', 'can', 'this', 'that', 'these', 'those', 'i', 'you', 'he', 'she', 'it',
            'we', 'they', 'me', 'him', 'her', 'us', 'them', 'my', 'your', 'his', 'her', 'its', 'our', 'their'
        ]);

        // Common synonyms for all product types - Universal Template System
        const synonymGroups = {
            // === PHYSICAL PRODUCTS ===
            // Capacity/Size related
            'capacity': ['capacity', 'size', 'volume', 'tank', 'reservoir', 'cup', 'cups', 'carafe', 'oz', 'liter', 'liters', 'storage', 'space'],
            'grinder': ['grinder', 'grinding', 'burr', 'blade', 'mill', 'crush', 'chopping'],
            'pressure': ['pressure', 'bar', 'pump', 'extraction', 'force', 'compression'],
            'temperature': ['temperature', 'temp', 'heat', 'heating', 'thermal', 'hot', 'cold', 'warm', 'cooling'],
            'timer': ['timer', 'programmable', 'schedule', 'auto', 'automatic', 'clock', 'time', 'delayed'],
            'frother': ['frother', 'froth', 'foam', 'milk', 'steam', 'wand', 'frothing'],
            'filter': ['filter', 'filtration', 'permanent', 'paper', 'mesh', 'purification'],
            'carafe': ['carafe', 'pot', 'jug', 'vessel', 'container', 'glass', 'thermal'],
            'control': ['control', 'controls', 'setting', 'settings', 'adjustment', 'adjustable', 'customizable'],
            'display': ['display', 'screen', 'lcd', 'digital', 'indicator', 'light', 'monitor'],
            'cleaning': ['cleaning', 'clean', 'self-cleaning', 'maintenance', 'wash', 'dishwasher', 'easy-clean'],
            'warranty': ['warranty', 'guarantee', 'coverage', 'protection', 'year', 'years', 'lifetime'],
            'quality': ['quality', 'premium', 'professional', 'commercial', 'grade', 'build', 'construction'],
            'design': ['design', 'style', 'aesthetic', 'look', 'finish', 'construction', 'build'],
            'efficiency': ['efficiency', 'efficient', 'energy', 'power', 'consumption', 'eco', 'saving', 'green'],
            'quiet': ['quiet', 'silent', 'noise', 'low-noise', 'whisper', 'sound', 'decibel', 'db'],
            'speed': ['speed', 'fast', 'quick', 'rapid', 'brewing', 'brew', 'processing'],
            'strength': ['strength', 'bold', 'strong', 'intensity', 'concentration', 'power'],
            'versatile': ['versatile', 'multi', 'multiple', 'various', 'different', 'options', 'flexible'],
            'compact': ['compact', 'small', 'space-saving', 'countertop', 'portable', 'mini'],
            'durable': ['durable', 'sturdy', 'robust', 'reliable', 'long-lasting', 'solid', 'tough'],

            // === TECHNOLOGY & ELECTRONICS ===
            'processor': ['processor', 'cpu', 'chip', 'chipset', 'intel', 'amd', 'ryzen', 'core', 'ghz'],
            'memory': ['memory', 'ram', 'gb', 'ddr', 'storage', 'capacity', 'space'],
            'storage': ['storage', 'ssd', 'hdd', 'drive', 'disk', 'tb', 'gb', 'nvme'],
            'graphics': ['graphics', 'gpu', 'video', 'card', 'nvidia', 'radeon', 'integrated'],
            'battery': ['battery', 'power', 'hours', 'life', 'charging', 'charge', 'mah'],
            'connectivity': ['connectivity', 'wifi', 'bluetooth', 'wireless', 'ethernet', 'usb', 'ports'],
            'camera': ['camera', 'webcam', 'megapixel', 'mp', 'video', 'recording', 'lens'],
            'audio': ['audio', 'sound', 'speakers', 'headphones', 'microphone', 'mic', 'stereo'],
            'resolution': ['resolution', 'pixels', 'hd', 'full-hd', '4k', 'uhd', 'display'],
            'refresh': ['refresh', 'hz', 'rate', 'frequency', 'smooth', 'gaming'],

            // === DIGITAL SERVICES & WEBSITES ===
            'security': ['security', 'secure', 'ssl', 'encryption', 'protected', 'safety', 'safe', 'verified'],
            'support': ['support', 'customer-service', 'help', 'assistance', '24/7', 'live-chat', 'phone'],
            'mobile': ['mobile', 'app', 'smartphone', 'tablet', 'ios', 'android', 'responsive'],
            'payment': ['payment', 'deposit', 'withdrawal', 'banking', 'credit-card', 'paypal', 'crypto'],
            'bonus': ['bonus', 'offer', 'promotion', 'welcome', 'free', 'reward', 'incentive'],
            'license': ['license', 'licensed', 'regulated', 'authority', 'legal', 'certified'],
            'interface': ['interface', 'ui', 'design', 'user-friendly', 'navigation', 'layout'],
            'speed': ['speed', 'fast', 'quick', 'instant', 'loading', 'performance', 'optimization'],

            // === CASINO & GAMBLING SPECIFIC ===
            'games': ['games', 'slots', 'table-games', 'poker', 'blackjack', 'roulette', 'variety'],
            'jackpot': ['jackpot', 'progressive', 'mega', 'prize', 'payout', 'win'],
            'live': ['live', 'dealer', 'streaming', 'real-time', 'interactive', 'broadcast'],
            'rtp': ['rtp', 'return', 'payout', 'percentage', 'rate', 'odds'],
            'withdrawal': ['withdrawal', 'cashout', 'payout', 'withdraw', 'cash', 'money'],
            'verification': ['verification', 'kyc', 'identity', 'documents', 'confirm'],
            'limits': ['limits', 'minimum', 'maximum', 'betting', 'deposit', 'withdrawal'],

            // === SPORTS BETTING SPECIFIC ===
            'odds': ['odds', 'betting', 'lines', 'spread', 'moneyline', 'over-under'],
            'sports': ['sports', 'football', 'basketball', 'baseball', 'soccer', 'tennis'],
            'live-betting': ['live-betting', 'in-play', 'real-time', 'during-game', 'live-odds'],
            'markets': ['markets', 'betting-options', 'props', 'futures', 'specials'],
            'streaming': ['streaming', 'live-stream', 'watch', 'broadcast', 'video'],
            'cash-out': ['cash-out', 'early-payout', 'settle', 'close-bet'],

            // === SOFTWARE & APPS ===
            'features': ['features', 'functionality', 'capabilities', 'tools', 'options'],
            'integration': ['integration', 'api', 'connect', 'sync', 'compatible'],
            'analytics': ['analytics', 'reporting', 'data', 'insights', 'metrics', 'tracking'],
            'automation': ['automation', 'automated', 'auto', 'scheduled', 'workflow'],
            'collaboration': ['collaboration', 'team', 'sharing', 'multi-user', 'workspace'],
            'backup': ['backup', 'sync', 'cloud', 'storage', 'recovery', 'save'],
            'customization': ['customization', 'custom', 'personalize', 'configure', 'settings'],

            // === SUBSCRIPTION & PRICING ===
            'pricing': ['pricing', 'cost', 'price', 'fee', 'subscription', 'plan'],
            'trial': ['trial', 'free', 'demo', 'test', 'evaluation', 'preview'],
            'subscription': ['subscription', 'monthly', 'yearly', 'recurring', 'plan'],
            'value': ['value', 'worth', 'benefit', 'advantage', 'cost-effective'],

            // === CUSTOMER EXPERIENCE ===
            'reviews': ['reviews', 'ratings', 'feedback', 'testimonials', 'comments'],
            'reputation': ['reputation', 'trusted', 'reliable', 'established', 'credible'],
            'experience': ['experience', 'user-experience', 'ux', 'usability', 'ease'],
            'satisfaction': ['satisfaction', 'happy', 'pleased', 'content', 'positive'],

            // === PERFORMANCE & RELIABILITY ===
            'uptime': ['uptime', 'availability', 'reliable', 'stable', 'consistent'],
            'performance': ['performance', 'fast', 'speed', 'optimization', 'efficient'],
            'scalability': ['scalability', 'scalable', 'growth', 'expand', 'flexible'],
            'reliability': ['reliability', 'dependable', 'consistent', 'stable', 'trustworthy']
        };

        // Extract keywords from text
        const extractKeywords = (text) => {
            // Handle different input types safely
            let textString = '';
            
            if (typeof text === 'string') {
                textString = text;
            } else if (typeof text === 'object' && text !== null) {
                // For objects, extract text from common properties
                textString = text.text || text.name || text.value || JSON.stringify(text);
            } else {
                // For other types, convert to string
                textString = String(text || '');
            }
            
            return textString.toLowerCase()
                .replace(/[^\w\s-]/g, ' ') // Remove punctuation except hyphens
                .split(/\s+/)
                .filter(word => word.length > 2 && !stopWords.has(word))
                .filter(word => !word.match(/^\d+$/)); // Remove pure numbers
        };

        // Find synonym group for a word
        const findSynonymGroup = (word) => {
            for (const [group, synonyms] of Object.entries(synonymGroups)) {
                if (synonyms.includes(word)) {
                    return group;
                }
            }
            return word;
        };

        // Group similar items
        const groupedItems = new Map();
        const itemsArray = Array.from(allItems);

        itemsArray.forEach(item => {
            const keywords = extractKeywords(item);
            const normalizedKeywords = keywords.map(findSynonymGroup);
            
            let bestMatch = null;
            let bestScore = 0;

            // Check against existing groups
            for (const [groupKey, groupItems] of groupedItems.entries()) {
                const groupKeywords = extractKeywords(groupKey);
                const normalizedGroupKeywords = groupKeywords.map(findSynonymGroup);
                
                // Calculate similarity score
                const commonKeywords = normalizedKeywords.filter(k => 
                    normalizedGroupKeywords.includes(k)
                );
                const score = commonKeywords.length / Math.max(normalizedKeywords.length, normalizedGroupKeywords.length);
                
                if (score > bestScore && score > 0.3) { // 30% similarity threshold
                    bestMatch = groupKey;
                    bestScore = score;
                }
            }

            if (bestMatch) {
                // Add to existing group
                groupedItems.get(bestMatch).add(item);
            } else {
                // Create new group
                groupedItems.set(item, new Set([item]));
            }
        });

        // Convert back to comparison format
        const comparisonItems = new Set();
        for (const [groupKey, groupItems] of groupedItems.entries()) {
            if (groupItems.size > 1) {
                // Multiple similar items - use the shortest/clearest name
                const sortedItems = Array.from(groupItems).sort((a, b) => a.length - b.length);
                const selectedItem = sortedItems[0];
                // Ensure we add a string, not an object
                const itemText = typeof selectedItem === 'object' ? selectedItem.text : selectedItem;
                comparisonItems.add(itemText);
            } else {
                // Unique item - ensure we add a string, not an object
                const itemText = typeof groupKey === 'object' ? groupKey.text : groupKey;
                comparisonItems.add(itemText);
            }
        }

        return comparisonItems;
    }

    /**
     * Check if product has similar feature/perk/spec
     */
    hasCompatibleItem(product, targetItem, dataType) {
        const productItems = product.data[dataType] || [];
        
        // Handle different data types
        const itemTexts = productItems.map(item => {
            if (typeof item === 'object') {
                return item.text; // Extract text from feature/perk objects
            }
            return item; // For strings or other types
        });
        
        if (itemTexts.includes(targetItem)) {
            return true;
        }

        // Check for similar items using keyword matching
        console.log('🔍 targetItem type check:', typeof targetItem, targetItem);
        const targetKeywords = String(targetItem || '').toLowerCase()
            .replace(/[^\w\s-]/g, ' ')
            .split(/\s+/)
            .filter(word => word.length > 2);

        return itemTexts.some(itemText => {
            console.log('🔍 itemText type check:', typeof itemText, itemText);
            const itemKeywords = String(itemText || '').toLowerCase()
                .replace(/[^\w\s-]/g, ' ')
                .split(/\s+/)
                .filter(word => word.length > 2);
            
            const commonKeywords = targetKeywords.filter(k => 
                itemKeywords.some(ik => ik.includes(k) || k.includes(ik))
            );
            
            return commonKeywords.length >= Math.min(2, targetKeywords.length * 0.5);
        });
    }

    /**
     * Build comparison table rows with smart matching
     */
    buildComparisonRows(products) {
        const allFeatures = new Set();
        const allSpecs = new Set();
        const allPerks = new Set();

        // Collect all features, specifications, and perks
        products.forEach(product => {
            if (product.data.features) {
                product.data.features.forEach(feature => {
                    // Extract text from feature objects for comparison matching
                    const featureText = typeof feature === 'object' ? feature.text : feature;
                    allFeatures.add(featureText);
                });
            }
            if (product.data.specifications) {
                Object.keys(product.data.specifications).forEach(spec => {
                    // Filter out basic info fields that are already shown in Basic Information section
                    if (spec !== 'Price' && spec !== 'Rating' && spec !== 'Reviews') {
                        allSpecs.add(spec);
                    }
                });
            }
            if (product.data.perks) {
                product.data.perks.forEach(perk => {
                    // Extract text from perk objects for comparison matching
                    const perkText = typeof perk === 'object' ? perk.text : perk;
                    allPerks.add(perkText);
                });
            }
        });

        // Apply smart matching to group similar items
        const smartFeatures = this.smartFeatureMatching(allFeatures, 'features');
        const smartPerks = this.smartFeatureMatching(allPerks, 'perks');
        
        console.log('🔍 Smart matching results:', {
            originalFeatures: Array.from(allFeatures),
            smartFeatures: Array.from(smartFeatures),
            featuresType: typeof Array.from(smartFeatures)[0]
        });
        // Specs are already grouped by name, so no smart matching needed

        let rows = '';

        // Get section titles from config
        const sectionTitles = window.SECTION_TITLES || {};
        
        // FIX: Use clean section titles to avoid [object Object] issue
        const cleanSectionTitles = {
            perks: window.SECTION_TITLES?.getSection?.('perks')?.title || window.SECTION_TITLES?.perks?.title || 'Key Features',
            features: window.SECTION_TITLES?.getSection?.('features')?.title || window.SECTION_TITLES?.features?.title || 'Bonus Features', 
            specs: window.SECTION_TITLES?.getSection?.('specs')?.title || window.SECTION_TITLES?.specs?.title || 'Technical Specifications'
        };
        
        // FIX: Use comparison headers config for separate comparison table icons/colors
        const cleanSectionIcons = {
            perks: window.SECTION_TITLES?.comparisonSection?.sectionTitles?.perks?.icon || 'fas fa-star',
            features: window.SECTION_TITLES?.comparisonSection?.sectionTitles?.features?.icon || 'fas fa-list', 
            specs: window.SECTION_TITLES?.comparisonSection?.sectionTitles?.specs?.icon || 'fas fa-cogs'
        };
        
        const cleanSectionColors = {
            perks: window.SECTION_TITLES?.comparisonSection?.sectionTitles?.perks?.color || '#fbbf24',
            features: window.SECTION_TITLES?.comparisonSection?.sectionTitles?.features?.color || '#a855f7', 
            specs: window.SECTION_TITLES?.comparisonSection?.sectionTitles?.specs?.color || '#ef4444'
        };
        
        console.log('🎯 COMPARISON SECTION TITLES, ICONS & COLORS FIXED:', { cleanSectionTitles, cleanSectionIcons, cleanSectionColors });

        // Basic info section with header
        rows += `<tr class="section-header basic-header collapsible-header" data-section="basic" data-collapsed="false">
            <td colspan="100%">
                <div class="header-content">
                    <span class="header-text">Basic Information</span>
                    <i class="fas fa-chevron-up collapse-icon"></i>
                </div>
            </td>
        </tr>`;
        const basicRows = this.buildBasicInfoRows(products);
        const basicRowsArray = basicRows.split('</tr>').filter(row => row.trim());
        basicRowsArray.forEach(row => {
            if (row.trim()) {
                rows += row + '</tr>';
                rows = rows.replace('<tr>', '<tr class="section-row" data-section="basic">');
            }
        });

        // Smart Perks comparison section
        if (smartPerks.size > 0) {
            const perksTitle = cleanSectionTitles.perks;
            const perksIcon = cleanSectionIcons.perks;
            const perksColor = cleanSectionColors.perks;
            rows += `<tr class="section-header perks-header collapsible-header" data-section="perks" data-collapsed="false">
                <td colspan="100%">
                    <div class="header-content">
                        <i class="${perksIcon}" style="color: ${perksColor}; margin-right: 8px;"></i>
                        <span class="header-text">${perksTitle}</span>
                        <i class="fas fa-chevron-up collapse-icon"></i>
                    </div>
                </td>
            </tr>`;
            smartPerks.forEach(perk => {
                rows += `<tr class="section-row" data-section="perks">
                    <td><strong>${perk}</strong></td>
                    ${products.map(product => {
                        const hasPerk = this.hasCompatibleItem(product, perk, 'perks');
                        return `<td class="feature-cell ${hasPerk ? 'has-feature' : 'no-feature'}">
                            <i class="fas fa-${hasPerk ? 'check' : 'times'}"></i>
                            <span>${hasPerk ? 'Yes' : 'No'}</span>
                        </td>`;
                    }).join('')}
                </tr>`;
            });
        }

        // Smart Features comparison section
        if (smartFeatures.size > 0) {
            const featuresTitle = cleanSectionTitles.features;
            const featuresIcon = cleanSectionIcons.features;
            const featuresColor = cleanSectionColors.features;
            rows += `<tr class="section-header features-header collapsible-header" data-section="features" data-collapsed="false">
                <td colspan="100%">
                    <div class="header-content">
                        <i class="${featuresIcon}" style="color: ${featuresColor}; margin-right: 8px;"></i>
                        <span class="header-text">${featuresTitle}</span>
                        <i class="fas fa-chevron-up collapse-icon"></i>
                    </div>
                </td>
            </tr>`;
            smartFeatures.forEach(feature => {
                rows += `<tr class="section-row" data-section="features">
                    <td><strong>${feature}</strong></td>
                    ${products.map(product => {
                        const hasFeature = this.hasCompatibleItem(product, feature, 'features');
                        return `<td class="feature-cell ${hasFeature ? 'has-feature' : 'no-feature'}">
                            <i class="fas fa-${hasFeature ? 'check' : 'times'}"></i>
                            <span>${hasFeature ? 'Yes' : 'No'}</span>
                        </td>`;
                    }).join('')}
                </tr>`;
            });
        }

        // Specifications rows (already grouped by name)
        if (allSpecs.size > 0) {
            const specsTitle = cleanSectionTitles.specs;
            const specsIcon = cleanSectionIcons.specs;
            const specsColor = cleanSectionColors.specs;
            rows += `<tr class="section-header specs-header collapsible-header" data-section="specs" data-collapsed="false">
                <td colspan="100%">
                    <div class="header-content">
                        <i class="${specsIcon}" style="color: ${specsColor}; margin-right: 8px;"></i>
                        <span class="header-text">${specsTitle}</span>
                        <i class="fas fa-chevron-up collapse-icon"></i>
                    </div>
                </td>
            </tr>`;
            allSpecs.forEach(spec => {
                // Skip basic info fields that are already shown in Basic Information section
                if (spec !== 'Price' && spec !== 'Rating' && spec !== 'Reviews') {
                    rows += `<tr class="section-row" data-section="specs">
                        <td><strong>${spec}</strong></td>
                        ${products.map(product => {
                            const value = product.data.specifications && product.data.specifications[spec] || 'N/A';
                            return `<td>${value}</td>`;
                        }).join('')}
                    </tr>`;
                }
            });
        }

        return rows;
    }

    /**
     * Build basic info rows (rating, price, etc.)
     */
    buildBasicInfoRows(products) {
        // Use template renderer if available
        if (window.templateRenderer) {
            return window.templateRenderer.renderComparisonBasicInfo(products);
        }
        
        // Fallback layout - adapt based on template type
        const templateType = window.TEMPLATE_TYPE || 'physical_products';
        let rows = `
            <tr>
                <td><strong>⭐ Rating</strong></td>
                ${products.map(product => `<td><strong>${product.data.rating || 'N/A'}/5</strong></td>`).join('')}
            </tr>
        `;
        
        // Only add Price row for non-casino templates
        if (templateType !== 'casino_websites') {
            rows += `
                <tr>
                    <td><strong>💰 Price</strong></td>
                    ${products.map(product => `<td><strong style="color: var(--primary-color); font-size: var(--font-size-md);">${product.data.price || 'N/A'}</strong></td>`).join('')}
                </tr>
            `;
        }
        
        rows += `
            <tr>
                <td><strong>📝 Reviews</strong></td>
                ${products.map(product => `<td>${product.data.reviewCount || 'N/A'} reviews</td>`).join('')}
            </tr>
        `;
        
        return rows;
    }

    /**
     * Build comparison summary
     */
    buildComparisonSummary(products) {
        const bestOverall = this.findBestOverall(products);
        const bestValue = this.findBestValue(products);
        const mostFeatures = this.findMostFeatures(products);
        
        return `
            <div class="summary-cards">
                <div class="summary-card clickable-summary-card" data-product-name="${bestOverall.name}" data-product-key="${bestOverall.key}">
                    <h4>Best Overall</h4>
                    <p>${bestOverall.name}</p>
                    <div class="card-click-hint">
                        <i class="fas fa-eye"></i>
                        <span>Click to view review</span>
                    </div>
                </div>
                <div class="summary-card clickable-summary-card" data-product-name="${bestValue.name}" data-product-key="${bestValue.key}">
                    <h4>Best Value</h4>
                    <p>${bestValue.name}</p>
                    <div class="card-click-hint">
                        <i class="fas fa-eye"></i>
                        <span>Click to view review</span>
                    </div>
                </div>
                <div class="summary-card clickable-summary-card" data-product-name="${mostFeatures.name}" data-product-key="${mostFeatures.key}">
                    <h4>Most Features</h4>
                    <p>${mostFeatures.name}</p>
                    <div class="card-click-hint">
                        <i class="fas fa-eye"></i>
                        <span>Click to view review</span>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Find best overall product
     */
    findBestOverall(products) {
        const best = products.reduce((best, current) => {
            return (current.data.rating || 0) > (best.data.rating || 0) ? current : best;
        });
        return { name: best.data.name || best.key, key: best.key };
    }

    /**
     * Find best value product
     */
    findBestValue(products) {
        const templateType = (window.TEMPLATE_TYPE || 'physical_products').toLowerCase();

        // Website-review templates: score based on universal template fields
        if (templateType === 'sports_betting' || templateType === 'casino_websites') {
            const scored = products.map(p => ({ product: p, score: this.computeWebsiteValueScore(p.data, templateType) }));
            if (scored.length === 0) return { name: 'Unable to determine', key: null };
            const bestEntry = scored.reduce((best, curr) => (curr.score > best.score ? curr : best), scored[0]);
            const best = bestEntry.product;
            return { name: best.data.name || best.key, key: best.key };
        }

        // Default: highest rating-to-price ratio
        const withPrices = products.filter(p => p.data.price);
        if (withPrices.length === 0) return { name: 'Unable to determine', key: null };
        
        const best = withPrices.reduce((best, current) => {
            const currentPrice = parseFloat(String(current.data.price).replace(/[^0-9.]/g, '')) || Infinity;
            const bestPrice = parseFloat(String(best.data.price).replace(/[^0-9.]/g, '')) || Infinity;
            const currentRating = current.data.rating || 0;
            const bestRating = best.data.rating || 0;
            
            const currentValue = currentPrice > 0 ? currentRating / currentPrice : 0;
            const bestValue = bestPrice > 0 ? bestRating / bestPrice : 0;
            
            return currentValue > bestValue ? current : best;
        });
        
        return { name: best.data.name || best.key, key: best.key };
    }

    /**
     * Compute value score for website-review templates
     */
    computeWebsiteValueScore(productData, templateType) {
        const rating = productData.rating || 0;
        let fields = [];
        if (templateType === 'sports_betting') {
            fields = [productData.signupBonus, productData.oddsBoost, productData.freeBet];
        } else {
            fields = [productData.welcomeBonus, productData.welcomePackage, productData.addedBonus];
        }

        let score = rating * 10; // baseline influence from quality
        const weights = [1.0, 0.8, 0.6];
        fields.forEach((text, idx) => {
            score += this.parseOfferScore(String(text || ''), templateType) * weights[idx];
        });
        return score;
    }

    /**
     * Parse offer string into a numeric score
     */
    parseOfferScore(text, templateType) {
        if (!text) return 0;
        let score = 0;

        // Percentages
        const percentMatches = text.match(/(\d{1,3})\s*%/g);
        if (percentMatches) {
            const percents = percentMatches.map(m => parseFloat(m));
            score += Math.max(...percents);
        }

        // Currency or token amounts
        const amountMatches = text.match(/(?:\$|€|£|USDT|USD|EUR|BTC|ETH|USDC)?\s*([0-9]{1,3}(?:,[0-9]{3})*|[0-9]+(?:\.[0-9]+)?)\s*(?:USDT|USD|EUR|BTC|ETH|USDC)?/gi);
        if (amountMatches) {
            const numeric = amountMatches
                .map(m => parseFloat(m.replace(/[^0-9.]/g, '')))
                .filter(n => !isNaN(n) && isFinite(n));
            if (numeric.length) {
                const maxAmount = Math.max(...numeric);
                score += Math.sqrt(maxAmount); // dampen
            }
        }

        // Free spins
        const fsMatch = text.match(/(\d{1,4})\s*(?:FS|free\s*spins?)/i);
        if (fsMatch) score += parseFloat(fsMatch[1]) * 0.2;

        // Keywords
        const keywords = [
            { re: /(no\s*wager|no\s*wagering|low\s*rollover)/i, points: 25 },
            { re: /(cash\s*out)/i, points: 10 },
            { re: /(daily|weekly|monthly)\s*bonuses?/i, points: 12 },
            { re: /(vip|loyalty|rewards?)/i, points: 8 },
            { re: /(odds\s*boost|price\s*boost)/i, points: 14 }
        ];
        keywords.forEach(k => { if (k.re.test(text)) score += k.points; });

        if (score === 0 && text.trim().length > 0) score += 5;
        return score;
    }

    /**
     * Find product with most features
     */
    findMostFeatures(products) {
        const best = products.reduce((best, current) => {
            const currentFeatures = (current.data.features || []).length + (current.data.pros || []).length;
            const bestFeatures = (best.data.features || []).length + (best.data.pros || []).length;
            return currentFeatures > bestFeatures ? current : best;
        });
        return { name: best.data.name || best.key, key: best.key };
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
     * Clear all selections
     */
    clearSelection() {
        document.querySelectorAll('.product-select').forEach(select => {
            select.value = '';
        });
        
        this.selectedProducts = [];
        this.updateSelectOptions();
        
        const compareBtn = document.getElementById('compare-btn');
        if (compareBtn) {
            compareBtn.disabled = true;
        }
        
        // Reset results
        this.comparisonContainer.innerHTML = `
            <div class="comparison-placeholder">
                <i class="fas fa-search"></i>
                <h3>Select products to compare</h3>
                <p>Choose 2-3 products from the dropdowns above to see a detailed comparison</p>
            </div>
        `;
    }

    /**
     * Refresh comparison options (useful if config loads after initialization)
     */
    refreshComparisonOptions() {
        console.log('🔄 Refreshing comparison options...');
        
        // Reload product data completely
        this.loadProductData();
        
        // Regenerate product options in all select dropdowns
        const selects = document.querySelectorAll('.product-select');
        const newOptions = this.generateProductOptions();
        const comparisonConfig = window.SECTION_TITLES?.comparisonSection || {};
        const placeholder = comparisonConfig.dropdownPlaceholder || 'Select a product...';
        
        selects.forEach(select => {
            const currentValue = select.value;
            select.innerHTML = `<option value="">${placeholder}</option>${newOptions}`;
            
            // Restore previous selection if it still exists
            if (currentValue && this.productData[currentValue]) {
                select.value = currentValue;
            }
        });
        
        console.log('✅ Comparison options refreshed with', Object.keys(this.productData).length, 'products');
    }
    
    /**
     * Setup click handlers for summary cards to scroll to detailed reviews
     */
    setupSummaryCardClicks() {
        const summaryCards = document.querySelectorAll('.clickable-summary-card');
        
        summaryCards.forEach(card => {
            card.addEventListener('click', () => {
                const productKey = card.getAttribute('data-product-key');
                const productName = card.getAttribute('data-product-name');
                
                if (!productKey || productKey === 'null') {
                    console.log('❌ No product key available for', productName);
                    return;
                }
                
                // Determine the target review ID
                let targetId = null;
                
                if (productKey === 'editors-choice') {
                    // Manual editor's choice
                    targetId = 'editors-choice-review';
                } else {
                    // Regular product - extract rank from product data
                    const productData = this.productData[productKey];
                    if (productData && productData.rank) {
                        targetId = `review-${productData.rank}`;
                    }
                }
                
                if (targetId) {
                    console.log('🎯 Scrolling to review:', targetId, 'for product:', productName);
                    this.scrollToReview(targetId, productName);
                } else {
                    console.log('❌ Could not determine target review ID for', productName);
                }
            });
            
            // Add hover effect
            card.style.cursor = 'pointer';
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-2px)';
                card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '';
            });
        });
        
        console.log('✅ Summary card click handlers setup complete');
    }
    
    /**
     * Scroll to a specific review card
     */
    scrollToReview(targetId, productName) {
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            // Use the same scrollToElement function as other navigation
            if (typeof scrollToElement === 'function') {
                const scrollOffset = window.CONFIG?.scrollOffset || 100;
                scrollToElement(targetElement, scrollOffset);
            } else {
                // Fallback to manual scroll if scrollToElement not available
                const elementPosition = targetElement.getBoundingClientRect().top;
                const scrollOffset = window.CONFIG?.scrollOffset || 100;
                const offsetPosition = elementPosition + window.pageYOffset - scrollOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
            
            // Apply consistent expand animation for both grid and list view
            targetElement.classList.add('expand-highlight-animation');
            setTimeout(() => {
                targetElement.classList.remove('expand-highlight-animation');
            }, 2000);
            
            console.log('📍 Comparison scrolled to:', targetId, '- Applied expand animation');
            
            console.log('✅ Scrolled to review for:', productName);
        } else {
            console.log('❌ Review element not found:', targetId, 'for product:', productName);
            
            // Fallback: try to find the review by searching for the product name
            const allReviews = document.querySelectorAll('.detailed-review-card');
            let foundReview = null;
            
            allReviews.forEach(review => {
                const reviewTitle = review.querySelector('.review-card-title');
                if (reviewTitle && reviewTitle.textContent.includes(productName.replace(' (Editor\'s Choice)', ''))) {
                    foundReview = review;
                }
            });
            
            if (foundReview) {
                // Use the same scrollToElement function as other navigation
                if (typeof scrollToElement === 'function') {
                    const scrollOffset = window.CONFIG?.scrollOffset || 100;
                    scrollToElement(foundReview, scrollOffset);
                } else {
                    // Fallback to manual scroll if scrollToElement not available
                    const elementPosition = foundReview.getBoundingClientRect().top;
                    const scrollOffset = window.CONFIG?.scrollOffset || 100;
                    const offsetPosition = elementPosition + window.pageYOffset - scrollOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
                
                // Apply consistent expand animation for both grid and list view
                foundReview.classList.add('expand-highlight-animation');
                setTimeout(() => {
                    foundReview.classList.remove('expand-highlight-animation');
                }, 2000);
                
                console.log('📍 Comparison fallback scrolled to review - CSS :target will handle animation');
                
                console.log('✅ Found and scrolled to review via fallback search for:', productName);
            }
        }
    }
    
    /**
     * Setup collapsible header functionality
     */
    setupCollapsibleHeaders() {
        const headers = document.querySelectorAll('.collapsible-header');
        
        headers.forEach(header => {
            header.addEventListener('click', () => {
                const section = header.getAttribute('data-section');
                const isCollapsed = header.getAttribute('data-collapsed') === 'true';
                const sectionRows = document.querySelectorAll(`.section-row[data-section="${section}"]`);
                const collapseIcon = header.querySelector('.collapse-icon');
                
                if (isCollapsed) {
                    // Expand section
                    sectionRows.forEach(row => {
                        row.style.display = '';
                    });
                    header.setAttribute('data-collapsed', 'false');
                    collapseIcon.className = 'fas fa-chevron-up collapse-icon';
                    header.classList.remove('collapsed');
                } else {
                    // Collapse section
                    sectionRows.forEach(row => {
                        row.style.display = 'none';
                    });
                    header.setAttribute('data-collapsed', 'true');
                    collapseIcon.className = 'fas fa-chevron-down collapse-icon';
                    header.classList.add('collapsed');
                }
            });
            
            // Add hover effect for clickable indication
            header.style.cursor = 'pointer';
            header.addEventListener('mouseenter', () => {
                header.style.transform = 'scale(1.02)';
            });
            
            header.addEventListener('mouseleave', () => {
                header.style.transform = 'scale(1)';
            });
        });
        
        console.log('✅ Collapsible headers setup complete');
    }
}

// Initialize comparison system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('🔍 DOMContentLoaded event fired. Initializing ProductComparison...');
    window.productComparison = new ProductComparison();
    console.log('✅ ProductComparison initialized.');
});

// Export for use in other scripts
window.ProductComparison = ProductComparison;