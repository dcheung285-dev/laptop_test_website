/*
===========================================
BLOG CONFIGURATION SYSTEM
===========================================
🎯 CHANGE YOUR BLOG SETTINGS HERE - EDIT THESE LINES ONLY:
Configure individual blog posts with all their content, images, categories, and badges.
*/

// ========== BLOG HERO SECTION ==========
const BLOG_HERO = {
    title: "Gaming Laptop Blog",                                    // ← Blog page main title
    subtitle: "Expert reviews, performance analysis, and the latest trends in gaming laptops. Get insider knowledge to choose the most powerful and reliable gaming machines."  // ← Blog page description
};

// ========== BLOG CTA BANNER CONFIGURATION ==========
const BLOG_CTA_BANNER = {
    enabled: true,                                              // ← Show/hide the CTA banner
    background: {
        type: "gradient",                                          // ← Switch back to image
        imageUrl: "./assets/images/ad_banner_test.jpg",     // ← Test with known working image
        imageOverlay: "rgba(0, 0, 0, 0.4)",                       // ← Image overlay color (when type is "image")
        imageSize: "cover",                                     // ← "cover", "contain", "auto", or "custom"
        imagePosition: "top",                                // ← "center", "top", "bottom", "left", "right"
        customSize: {                                           // ← Custom size settings (when imageSize is "custom")
            width: "100%",                                      // ← Image width ("100%", "800px", "50vw", etc.)
            height: "auto"                                      // ← Image height ("auto", "200px", "50vh", etc.)
        },
        scale: 1.0,                                            // ← Reset to normal scale for testing
    },
    content: {
        icon: "fas fa-laptop",                                  // ← Header icon
        title: "Looking for the Best Gaming Laptops?",      // ← Main headline
        subtitle: "Don't waste hours researching. We've already done the work for you!", // ← Description text
        button: {
            text: "View Our Top 10 Ranked List",              // ← Button text
            icon: "fas fa-trophy",                                // ← Button icon
            link: "./index.html#top10"                         // ← Button link
        }
    }
};

// ========== INDIVIDUAL BLOG POSTS CONFIGURATION ==========
const BLOG_POSTS = {
    // Blog Post 1 - MacBook Pro M4 Max Review
    post1: {
        title: "MacBook Pro M4 Max Review 2025: Why It's Our #1 Pick",
        excerpt: "Discover why the MacBook Pro M4 Max earned our top ranking with exceptional performance, stunning display, and industry-leading battery life. Our comprehensive review covers everything from creative workflows to gaming performance.",
        image: "./assets/images/laptop_test/macbook-pro.jpg",
        imageAlt: "MacBook Pro M4 Max review and analysis",
        
        // Image positioning and scaling settings
        imageScale: 1.0,                                               // Scale for blog post image (1.0 = 100%, 1.2 = 120%, etc.)
        imagePositioning: {
            objectPosition: 'top center',                                  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
            objectFit: 'cover'                                         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
        },
        date: "December 15, 2024",
        category: "Laptop Review",
        categoryColor: "primary",
        link: "./index.html#editors-choice-review",
        badges: [
            { text: "Editor's Pick", type: "primary" },
            { text: "Top Rated", type: "success" }
        ],
        ctaText: "💻 Ready to buy?",
        ctaMessage: "Shop <a href=\"#macbook-pro\" class=\"text-primary\">MacBook Pro M4 Max</a> and save $300 + get free AppleCare+!"
    },

    // Blog Post 2 - Dell XPS 15 Plus Review
    post2: {
        title: "Dell XPS 15 Plus Review: Premium Design Meets Performance",
        excerpt: "The Dell XPS 15 Plus combines stunning premium design with powerful Intel Core i9 performance and gorgeous 4K+ OLED display. Learn why it's the perfect choice for professionals who value aesthetics.",
        image: "./assets/images/laptop_test/Dell_XPS_15_Plus.jpg",
        imageAlt: "Dell XPS 15 Plus comprehensive review",
        
        // Image positioning and scaling settings
        imageScale: 1.0,                                               // Scale for blog post image (1.0 = 100%, 1.2 = 120%, etc.)
        imagePositioning: {
            objectPosition: 'center',                                  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
            objectFit: 'cover'                                         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
        },
        date: "December 12, 2024",
        category: "Laptop Review",
        categoryColor: "accent",
        link: "./index.html#review-2",
        badges: [
            { text: "Premium Design", type: "secondary" },
            { text: "OLED Display", type: "accent" }
        ],
        ctaText: "💎 Shop premium:",
        ctaMessage: "Experience <a href=\"#dell-xps\" class=\"text-primary\">Dell XPS 15 Plus</a> and save 13% + get premium support!"
    },

    // Blog Post 3 - Laptop Buying Guide
    post3: {
        title: "Gaming Laptop Buying Guide: How to Choose the Perfect Machine",
        excerpt: "Learn essential factors when buying a gaming laptop, from choosing the right CPU and GPU to understanding display specifications. Our expert guide covers everything you need to make the perfect choice.",
        image: "./assets/images/laptop_test/blog1.webp",
        imageAlt: "Gaming laptop buying guide",
        
        // Image positioning and scaling settings
        imageScale: 1.0,                                               // Scale for blog post image (1.0 = 100%, 1.2 = 120%, etc.)
        imagePositioning: {
            objectPosition: 'center',                                  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
            objectFit: 'cover'                                         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
        },
        date: "December 10, 2024",
        category: "Buying Guide",
        categoryColor: "primary",
        link: "./blogpost1.html",
        badges: [
            { text: "Buying Guide", type: "primary" },
            { text: "Expert Tips", type: "secondary" }
        ],
        ctaText: "🎯 Need the perfect laptop?",
        ctaMessage: "Find your ideal gaming laptop in our <a href=\"./index.html#top10\" class=\"text-primary\">Top 10 rankings</a>!"
    },

    // Blog Post 4 - Provably Fair Gaming
    post4: {
        title: "RTX 4090 vs RTX 4080: Which GPU Powers the Best Gaming Laptops?",
        excerpt: "Compare the RTX 4090 and RTX 4080 in gaming laptops. Discover performance differences, power consumption, thermal management, and which GPU delivers the best value for high-end gaming laptops.",
        image: "./assets/images/laptop_test/gpu.jpg",
        imageAlt: "RTX 4090 vs RTX 4080 gaming laptop comparison",
        
        // Image positioning and scaling settings
        imageScale: 1.0,                                               // Scale for blog post image (1.0 = 100%, 1.2 = 120%, etc.)
        imagePositioning: {
            objectPosition: 'center',                                  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
            objectFit: 'cover'                                         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
        },
        date: "December 8, 2024",
        category: "GPU Guide",
        categoryColor: "success",
        link: "./blogpost2.html",
        badges: [
            { text: "RTX 4090", type: "secondary" },
            { text: "Performance", type: "success" }
        ],
        ctaText: "🎮 Want top gaming performance?",
        ctaMessage: "Check out <a href=\"#razer-blade\" class=\"text-primary\">RTX 4090 gaming laptops</a> for ultimate performance!"
    },

    // Blog Post 5 - Bonus Guide
    post5: {
        title: "Gaming Laptop Cooling Systems: Thermal Management Guide 2025",
        excerpt: "Master gaming laptop cooling with our comprehensive thermal management guide. Learn about liquid metal cooling, vapor chambers, fan curves, and how to maintain peak performance during intense gaming sessions.",
        image: "./assets/images/laptop_test/cooling.jpg",
        imageAlt: "Gaming laptop cooling system and thermal management guide",
        
        // Image positioning and scaling settings
        imageScale: 1.0,                                               // Scale for blog post image (1.0 = 100%, 1.2 = 120%, etc.)
        imagePositioning: {
            objectPosition: 'center',                                  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
            objectFit: 'cover'                                         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
        },
        date: "December 5, 2024",
        category: "Cooling Guide",
        categoryColor: "success",
        link: "./blogpost3.html",
        badges: [
            { text: "Cooling", type: "success" },
            { text: "Performance", type: "secondary" }
        ],
        ctaText: "🌡️ Keep your laptop cool:",
        ctaMessage: "Find <a href=\"#asus-rog\" class=\"text-primary\">laptops with advanced cooling</a> in our top rankings!"
    },

    // Blog Post 6 - Roobet Review
    post6: {
        title: "Razer Blade 16 Review: Premium Gaming Excellence 2025",
        excerpt: "In-depth review of the Razer Blade 16 gaming laptop. Discover Intel Core i9-14900HX performance, premium build quality, advanced cooling, and why it's the ultimate choice for gaming enthusiasts.",
        image: "./assets/images/laptop_test/Razer_Blade_16.webp",
        imageAlt: "Razer Blade 16 gaming laptop review",
        
        // Image positioning and scaling settings
        imageScale: 1.0,                                               // Scale for blog post image (1.0 = 100%, 1.2 = 120%, etc.)
        imagePositioning: {
            objectPosition: 'top center',                                  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
            objectFit: 'cover'                                         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
        },
        date: "December 3, 2024",
        category: "Laptop Review",
        categoryColor: "accent",
        link: "./index.html#review-7",
        badges: [
            { text: "Premium Gaming", type: "accent" },
            { text: "Intel i9", type: "primary" }
        ],
        ctaText: "🎮 Want premium gaming?",
        ctaMessage: "Check out the <a href=\"./index.html#review-7\" class=\"text-primary\">Razer Blade 16</a> in our top rankings!"
    }
};

// ========== BLOG DISPLAY SETTINGS ==========
const BLOG_DISPLAY_CONFIG = {
    showAllPosts: true,                     // Show all posts or limit to specific ones
    postsToShow: ['post1', 'post2', 'post3', 'post4', 'post5', 'post6'], // Which posts to display
    gridColumns: "repeat(auto-fit, minmax(350px, 1fr))",  // CSS grid columns
    showCTABanner: true,                    // Show the top 10 CTA banner
    enableHoverEffects: true                // Enable hover animations
};

// ========== CATEGORY COLOR MAPPINGS ==========
const CATEGORY_COLORS = {
    primary: "var(--primary-color)",
    secondary: "var(--secondary-color)", 
    accent: "var(--accent-color)",
    success: "#22c55e",
    warning: "#f59e0b", 
    danger: "#ef4444"
};

// ========== BADGE TYPE MAPPINGS ==========
const BADGE_TYPES = {
    primary: "badge-primary",
    secondary: "badge-secondary",
    accent: "badge-accent",
    success: "badge-success", 
    warning: "badge-warning",
    danger: "badge-danger"
};

/*
===========================================
🚀 BLOG DYNAMIC CONTENT SYSTEM
Everything below automatically uses the settings above.
Don't edit below unless you need advanced customization.
===========================================
*/

class BlogContentManager {
    constructor() {
        this.init();
    }
    
    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }
    
    setup() {
        this.loadHeroContent();
        this.loadCTABanner();
        this.generateBlogPosts();
        this.updatePageTitle();
        console.log('✅ Blog content system loaded with', Object.keys(BLOG_POSTS).length, 'posts');
    }
    
    /**
     * Load hero section content
     */
    loadHeroContent() {
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        
        if (heroTitle) {
            heroTitle.innerHTML = this.replacePlaceholders(BLOG_HERO.title);
        }
        
        if (heroSubtitle) {
            heroSubtitle.innerHTML = this.replacePlaceholders(BLOG_HERO.subtitle);
        }
    }
    
    /**
     * Load and generate CTA banner dynamically
     */
    loadCTABanner() {
        const ctaBannerContainer = document.querySelector('.top10-ad-box');
        
        if (!BLOG_CTA_BANNER.enabled) {
            // Remove banner if disabled
            if (ctaBannerContainer) {
                ctaBannerContainer.remove();
            }
            return;
        }
        
        if (!ctaBannerContainer) {
            console.warn('CTA banner container not found');
            return;
        }
        
        // Build banner HTML
        const bannerHTML = this.createCTABannerHTML();
        ctaBannerContainer.outerHTML = bannerHTML;
        
        console.log('✅ CTA banner loaded with dynamic configuration');
    }
    
    /**
     * Create CTA banner HTML from configuration
     */
    createCTABannerHTML() {
        const config = BLOG_CTA_BANNER;
        const content = config.content;
        const background = config.background;
        
        // Determine CSS class based on background type
        let cssClass = 'top10-ad-box';
        let additionalStyle = '';
        
        if (background.type === 'image') {
            cssClass += ' top10-ad-box-image';
            
            // Build image styles
            let imageStyles = [`background-image: url(${background.imageUrl})`];
            
            // Add image size handling
            if (background.imageSize === 'custom' && background.customSize) {
                imageStyles.push(`background-size: ${background.customSize.width} ${background.customSize.height}`);
            } else {
                let baseSize = background.imageSize || 'cover';
                
                // Apply scale if specified and not using custom size
                if (background.scale && background.scale !== 1.0) {
                    if (baseSize === 'cover' || baseSize === 'contain') {
                        // For cover/contain, scale using percentage
                        const scalePercent = Math.round(background.scale * 100);
                        baseSize = `${scalePercent}%`;
                    } else if (baseSize === 'auto') {
                        // For auto, we'll use CSS transform on the container
                        cssClass += ' top10-ad-box-scaled';
                        additionalStyle += ` transform: scale(${background.scale});`;
                    }
                }
                
                imageStyles.push(`background-size: ${baseSize}`);
            }
            
            // Add image position
            if (background.imagePosition) {
                imageStyles.push(`background-position: ${background.imagePosition}`);
            }
            
            // Add repeat setting
            imageStyles.push('background-repeat: no-repeat');
            
            additionalStyle = imageStyles.join('; ') + ';';
            
            // Add overlay if specified
            if (background.imageOverlay) {
                additionalStyle += ` background-blend-mode: multiply; background-color: ${background.imageOverlay};`;
            }
        } else if (background.type === 'solid') {
            cssClass += ' top10-ad-box-solid';
        } else {
            cssClass += ' top10-ad-box-gradient'; // Default gradient
        }
        
        return `
            <div class="${cssClass}" style="${additionalStyle}">
                <h3>
                    <i class="${content.icon}"></i>
                    ${this.replacePlaceholders(content.title)}
                </h3>
                <p>
                    ${this.replacePlaceholders(content.subtitle)}
                </p>
                <a href="${content.button.link}" class="btn btn-secondary">
                    <i class="${content.button.icon}"></i>
                    ${content.button.text}
                </a>
            </div>
        `;
    }
    
    /**
     * Generate blog posts dynamically
     */
    generateBlogPosts() {
        const blogGrid = document.querySelector('.blog-grid');
        if (!blogGrid) {
            console.warn('Blog grid container not found');
            return;
        }
        
        // Clear existing content
        blogGrid.innerHTML = '';
        
        // Generate posts based on configuration
        const postsToRender = BLOG_DISPLAY_CONFIG.showAllPosts ? 
            Object.keys(BLOG_POSTS) : 
            BLOG_DISPLAY_CONFIG.postsToShow;
            
        postsToRender.forEach(postKey => {
            const post = BLOG_POSTS[postKey];
            if (!post) {
                console.warn(`Blog post ${postKey} not found in configuration`);
                return;
            }
            
            const blogPostHTML = this.createBlogPostHTML(post);
            blogGrid.insertAdjacentHTML('beforeend', blogPostHTML);
        });
        
        // Apply grid styling
        if (BLOG_DISPLAY_CONFIG.gridColumns) {
            blogGrid.style.gridTemplateColumns = BLOG_DISPLAY_CONFIG.gridColumns;
        }
    }
    
    /**
     * Create HTML for individual blog post
     */
    createBlogPostHTML(post) {
        const categoryColor = CATEGORY_COLORS[post.categoryColor] || CATEGORY_COLORS.primary;
        const badgesHTML = post.badges.map(badge => 
            `<span class="badge ${BADGE_TYPES[badge.type] || 'badge-secondary'}">${this.replacePlaceholders(badge.text)}</span>`
        ).join('');
        
        // Determine if link is external (starts with http/https) or internal
        const isExternalLink = post.link.startsWith('http://') || post.link.startsWith('https://');
        const linkAttributes = isExternalLink ? 'target="_blank" rel="noopener noreferrer"' : '';
        
        return `
            <article class="blog-post">
                <div class="blog-post-image">
                    <img src="${post.image}" 
                         alt="${this.replacePlaceholders(post.imageAlt)}" 
                         loading="lazy"
                         style="transform: scale(${post.imageScale || 1.0}); 
                                object-position: ${post.imagePositioning?.objectPosition || 'center'}; 
                                object-fit: ${post.imagePositioning?.objectFit || 'cover'};">
                </div>
                <div class="blog-post-content">
                    <div class="blog-post-meta">
                        <span class="blog-date">${post.date}</span>
                        <span class="blog-category" style="background: ${categoryColor};">${post.category}</span>
                    </div>
                    <h2 class="blog-post-title">
                        <a href="${post.link}" ${linkAttributes}>${this.replacePlaceholders(post.title)}</a>
                    </h2>
                    <p class="blog-post-excerpt">
                        ${this.replacePlaceholders(post.excerpt)}
                    </p>
                    
                    <!-- Internal Link CTA -->
                    <div class="blog-cta-inline">
                        <p><strong>${post.ctaText}</strong> ${this.replacePlaceholders(post.ctaMessage)}</p>
                    </div>
                    
                    <div class="blog-post-footer">
                        <a href="${post.link}" ${linkAttributes} class="btn btn-outline">Read More</a>
                        <div class="blog-post-tags">
                            ${badgesHTML}
                        </div>
                    </div>
                </div>
            </article>
        `;
    }
    
    /**
     * Update page title
     */
    updatePageTitle() {
        const titleElement = document.querySelector('title');
        if (titleElement) {
            const currentTitle = titleElement.textContent;
            titleElement.textContent = this.replacePlaceholders(currentTitle);
        }
    }
    
    /**
     * Replace placeholders with actual values
     */
    replacePlaceholders(text) {
        if (!text) return '';
        
        let result = text;
        
        // Replace from global config
        if (typeof window !== 'undefined') {
            if (window.NICHE_CONFIG && window.NICHE_CONFIG.niche) {
                result = result.replace(/\{\{NICHE\}\}/g, window.NICHE_CONFIG.niche);
            }
            if (window.NICHE_CONFIG && window.NICHE_CONFIG.productType) {
                result = result.replace(/\{\{PRODUCT_TYPE\}\}/g, window.NICHE_CONFIG.productType);
            }
            if (window.BRAND_NAME_TEXT) {
                result = result.replace(/\{\{BRAND_NAME_TEXT\}\}/g, window.BRAND_NAME_TEXT);
            }
            
            // Try brand config
            if (window.BrandManager) {
                const brandConfig = window.BrandManager.get();
                result = result.replace(/\{\{BRAND_NAME_TEXT\}\}/g, brandConfig.text.name);
            }
        }
        
        return result;
    }
}

// Initialize the blog content manager
const blogContentManager = new BlogContentManager();

// Make configurations available globally
if (typeof window !== 'undefined') {
    window.BLOG_HERO = BLOG_HERO;
    window.BLOG_CTA_BANNER = BLOG_CTA_BANNER;
    window.BLOG_POSTS = BLOG_POSTS;
    window.BLOG_DISPLAY_CONFIG = BLOG_DISPLAY_CONFIG;
    window.CATEGORY_COLORS = CATEGORY_COLORS;
    window.BADGE_TYPES = BADGE_TYPES;
    window.blogContentManager = blogContentManager;
}

// Export for Node.js environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        BLOG_HERO,
        BLOG_CTA_BANNER,
        BLOG_POSTS,
        BLOG_DISPLAY_CONFIG,
        CATEGORY_COLORS,
        BADGE_TYPES,
        BlogContentManager
    };
} 