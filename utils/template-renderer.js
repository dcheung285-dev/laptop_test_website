/*
===========================================
UNIVERSAL TEMPLATE RENDERER
===========================================
Dynamically renders pricing/bonus/subscription info based on template type
*/

class TemplateRenderer {
    constructor() {
        this.templateType = window.TEMPLATE_TYPE || 'physical_products';
        this.config = window.CURRENT_TEMPLATE_CONFIG || window.TEMPLATE_DISPLAY_CONFIG?.physical_products;
    }

    /**
     * Render the primary info section (replaces pricing section)
     */
    renderPrimaryInfo(product) {
        if (!this.config) return this.renderFallbackPricing(product);

        const displayFields = this.config.displayFields || ["primary", "secondary", "tertiary"];
        const primaryValue = product[this.config.primaryField] || '';
        const secondaryValue = product[this.config.secondaryField] || '';
        const tertiaryValue = product[this.config.tertiaryField] || '';

        let html = `<div class="product-primary-info" data-template-type="${this.templateType}">`;
        
        // Show primary field if included in displayFields
        if (displayFields.includes("primary") && primaryValue) {
            html += `<span class="primary-value" title="${this.config.primaryLabel}">${primaryValue}</span>`;
        }
        
        // Show secondary field if included in displayFields
        if (displayFields.includes("secondary") && secondaryValue) {
            const crossthrough = this.config.secondaryFieldCrossthrough ? 'secondary-value-crossthrough' : 'secondary-value';
            html += `<span class="${crossthrough}" title="${this.config.secondaryLabel}">${secondaryValue}</span>`;
        }
        
        // Show tertiary field if included in displayFields
        if (displayFields.includes("tertiary") && tertiaryValue) {
            html += `<span class="tertiary-value" title="${this.config.tertiaryLabel}">${tertiaryValue}</span>`;
        }
        
        html += `</div>`;
        return html;
    }

    /**
     * Render primary info for detailed reviews (larger format)
     */
    renderDetailedPrimaryInfo(product) {
        if (!this.config) return this.renderFallbackPricing(product);

        const displayFields = this.config.displayFields || ["primary", "secondary", "tertiary"];
        const primaryValue = product[this.config.primaryField] || '';
        const secondaryValue = product[this.config.secondaryField] || '';
        const tertiaryValue = product[this.config.tertiaryField] || '';

        let html = `<div class="detailed-primary-info" data-template-type="${this.templateType}">`;
        
        // Show primary field if included in displayFields
        if (displayFields.includes("primary") && primaryValue) {
            html += `
                <div class="primary-info-item">
                    <span class="info-label">${this.config.primaryLabel}</span>
                    <span class="primary-value-large">${primaryValue}</span>
                </div>
            `;
        }
        
        // Show secondary field if included in displayFields
        if (displayFields.includes("secondary") && secondaryValue) {
            const valueClass = this.config.secondaryFieldCrossthrough ? 'secondary-value-large-crossthrough' : 'secondary-value-large';
            html += `
                <div class="secondary-info-item">
                    <span class="info-label">${this.config.secondaryLabel}</span>
                    <span class="${valueClass}">${secondaryValue}</span>
                </div>
            `;
        }
        
        // Show tertiary field if included in displayFields
        if (displayFields.includes("tertiary") && tertiaryValue) {
            html += `
                <div class="tertiary-info-item">
                    <span class="info-label">${this.config.tertiaryLabel}</span>
                    <span class="tertiary-value-large">${tertiaryValue}</span>
                </div>
            `;
        }
        
        html += `</div>`;
        return html;
    }

    /**
     * Get the appropriate CTA text based on template type
     */
    getCTAText(product) {
        // Use product-specific CTA if available, otherwise use template default
        return product.ctaText || this.config?.ctaDefault || 'Learn More';
    }

    /**
     * Check if CTA element should be displayed based on product configuration
     */
    shouldShowCTAElement(product, element) {
        const ctaDisplay = product.cta?.display;
        if (!ctaDisplay) return true; // Show by default if no config
        
        switch (element) {
            case 'title':
                return ctaDisplay.showTitle !== false;
            case 'description':
                return ctaDisplay.showDescription !== false;
            case 'boxInfo':
                return ctaDisplay.showBoxInfo !== false;
            case 'pricingInfo':
                return ctaDisplay.showPricingInfo !== false;
            default:
                return true;
        }
    }

    /**
     * Render comparison table basic info based on template type
     */
    renderComparisonBasicInfo(products) {
        if (!this.config) return this.renderFallbackComparisonInfo(products);

        const rows = [];
        const displayFields = this.config.displayFields || ["primary", "secondary", "tertiary"];

        // Always show rating
        rows.push(`
            <tr>
                <td><strong>Rating</strong></td>
                ${products.map(product => `<td><strong>${product.data.rating || 'N/A'}/5</strong></td>`).join('')}
            </tr>
        `);

        // Primary field - show if included in displayFields
        if (displayFields.includes("primary") && this.config.primaryField) {
            rows.push(`
                <tr>
                    <td><strong>${String(this.config.primaryLabel || 'Primary Field')}</strong></td>
                    ${products.map(product => {
                        const fieldValue = product.data[this.config.primaryField];
                        return `<td><strong style="color: var(--primary-color); font-size: var(--font-size-md);">${fieldValue || 'N/A'}</strong></td>`;
                    }).join('')}
                </tr>
            `);
        }

        // Secondary field - show if included in displayFields
        if (displayFields.includes("secondary") && this.config.secondaryField) {
            rows.push(`
                <tr>
                    <td><strong>${String(this.config.secondaryLabel || 'Secondary Field')}</strong></td>
                    ${products.map(product => `<td><strong style="color: var(--primary-color); font-size: var(--font-size-md);">${product.data[this.config.secondaryField] || 'N/A'}</strong></td>`).join('')}
                </tr>
            `);
        }

        // Tertiary field - show if included in displayFields and field exists
        if (displayFields.includes("tertiary") && this.config.tertiaryField && this.config.tertiaryLabel) {
            rows.push(`
                <tr>
                    <td><strong>${String(this.config.tertiaryLabel || 'Tertiary Field')}</strong></td>
                    ${products.map(product => {
                        const fieldValue = product.data[this.config.tertiaryField];
                        const hasValue = fieldValue && 
                                        fieldValue !== 'N/A' &&
                                        fieldValue.trim() !== '';
                        
                        // For casino websites, show the actual added bonus value if it exists
                        if (hasValue && this.templateType === 'casino_websites' && this.config.tertiaryField === 'addedBonus') {
                            return `<td><span style="color: var(--success-color); font-weight: 600;">${fieldValue}</span></td>`;
                        }
                        
                        // For other template types or when no value, show Yes/No
                        return `<td><span style="color: ${hasValue ? 'var(--success-color)' : 'var(--text-secondary)'}; font-weight: 600;">${hasValue ? 'Yes' : 'No'}</span></td>`;
                    }).join('')}
                </tr>
            `);
        }

        // Always show reviews (without "reviews" text)
        rows.push(`
            <tr>
                <td><strong>Reviews</strong></td>
                ${products.map(product => `<td>${product.data.reviewCount || 'N/A'}</td>`).join('')}
            </tr>
        `);

        return rows.join('');
    }

    /**
     * Fallback pricing for backward compatibility
     */
    renderFallbackPricing(product) {
        // Use secondary-value class instead of original-price to avoid hardcoded crossthrough
        return `
            <div class="product-pricing">
                <span class="primary-value">${product.price || 'N/A'}</span>
                ${product.originalPrice ? `<span class="secondary-value">${product.originalPrice}</span>` : ''}
                ${product.discount ? `<span class="tertiary-value">${product.discount}</span>` : ''}
            </div>
        `;
    }

    /**
     * Fallback comparison info for backward compatibility
     */
    renderFallbackComparisonInfo(products) {
        return `
            <tr>
                <td><strong>Rating</strong></td>
                ${products.map(product => `<td><strong>${product.data.rating || 'N/A'}/5</strong></td>`).join('')}
            </tr>
            <tr>
                <td><strong>Price</strong></td>
                ${products.map(product => `<td><strong style="color: var(--primary-color); font-size: var(--font-size-md);">${product.data.price || 'N/A'}</strong></td>`).join('')}
            </tr>
            <tr>
                <td><strong>Reviews</strong></td>
                ${products.map(product => `<td>${product.data.reviewCount || 'N/A'}</td>`).join('')}
            </tr>
        `;
    }

    /**
     * Update existing DOM elements with template-specific content
     */
    updateProductCard(card, product) {
        // Update primary info section - handle both old and new structures
        let pricingSection = card.querySelector('.product-pricing');
        
        // If it has data-product-id, it's already been converted
        if (pricingSection && pricingSection.hasAttribute('data-product-id')) {
            pricingSection.innerHTML = this.renderPrimaryInfo(product);
        } else if (pricingSection) {
            // Legacy structure - update individual elements
            pricingSection.innerHTML = this.renderPrimaryInfo(product);
        }

        // Update CTA button text
        const ctaButton = card.querySelector('.btn-primary');
        if (ctaButton) {
            const ctaText = this.getCTAText(product);
            ctaButton.innerHTML = ctaText;
        }
    }

    /**
     * Update detailed review with template-specific content
     */
    updateDetailedReview(reviewElement, product) {
        // Update pricing info in CTA section
        const pricingInfo = reviewElement.querySelector('.pricing-info');
        if (pricingInfo) {
            pricingInfo.innerHTML = this.renderDetailedPrimaryInfo(product);
        }

        // Update CTA button text
        const ctaButton = reviewElement.querySelector('.btn-primary');
        if (ctaButton) {
            const ctaText = this.getCTAText(product);
            ctaButton.textContent = ctaText;
        }
    }

    /**
     * Render primary info for list view (separate rows)
     */
    renderListViewPrimaryInfo(product) {
        if (!this.config) return this.renderFallbackListViewPricing(product);

        const displayFields = this.config.displayFields || ["primary", "secondary", "tertiary"];
        const primaryValue = product[this.config.primaryField] || '';
        const secondaryValue = product[this.config.secondaryField] || '';
        const tertiaryValue = product[this.config.tertiaryField] || '';

        let html = '';
        
        // Show primary field if included in displayFields
        if (displayFields.includes("primary") && primaryValue) {
            html += `<div class="primary-value" title="${this.config.primaryLabel}">${primaryValue}</div>`;
        }
        
        // Show secondary field if included in displayFields
        if (displayFields.includes("secondary") && secondaryValue) {
            const crossthrough = this.config.secondaryFieldCrossthrough ? 'secondary-value-crossthrough' : 'secondary-value';
            html += `<div class="${crossthrough}" title="${this.config.secondaryLabel}">${secondaryValue}</div>`;
        }
        
        // Show tertiary field if included in displayFields
        if (displayFields.includes("tertiary") && tertiaryValue) {
            html += `<div class="tertiary-value" title="${this.config.tertiaryLabel}">${tertiaryValue}</div>`;
        }
        
        return html;
    }

    /**
     * Fallback list view pricing for backward compatibility
     */
    renderFallbackListViewPricing(product) {
        return `
            <div class="primary-value">${product.price || 'N/A'}</div>
            ${product.originalPrice ? `<div class="secondary-value">${product.originalPrice}</div>` : ''}
            ${product.discount ? `<div class="tertiary-value">${product.discount}</div>` : ''}
        `;
    }

    /**
     * Get template type examples for documentation
     */
    static getTemplateExamples() {
        return {
            physical_products: {
                fields: { price: "$699", originalPrice: "$799", discount: "13% OFF" },
                example: "Coffee makers, electronics, appliances"
            },
            casino_websites: {
                fields: { bonus: "$500 Welcome", welcomePackage: "100% Match", freeSpins: "200 Spins" },
                example: "Online casinos, gambling sites"
            },
            sports_betting: {
                fields: { signupBonus: "$100 Free Bet", oddsBoost: "50% Boost", freeBet: "$25 Risk-Free" },
                example: "Sportsbooks, betting sites"
            },
            software_saas: {
                fields: { monthlyPrice: "$29/mo", yearlyPrice: "$290/yr", trialPeriod: "30-day trial" },
                example: "Software, SaaS platforms, tools"
            },
            streaming_services: {
                fields: { monthlyPrice: "$12.99/mo", trialPeriod: "7-day trial", contentHighlight: "4K Ultra HD" },
                example: "Netflix, Disney+, streaming platforms"
            },
            vpn_services: {
                fields: { monthlyPrice: "$9.99/mo", serverCount: "5000+ Servers", speedInfo: "10Gbps" },
                example: "VPN providers, privacy services"
            }
        };
    }
}

// Make TemplateRenderer globally available
window.TemplateRenderer = TemplateRenderer;

// Initialize global instance
window.templateRenderer = new TemplateRenderer(); 