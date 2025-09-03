// ===================================================================
// BLOG POST 1 CONFIGURATION - Gaming Laptop Buying Guide
// ===================================================================
// This file controls all content for the individual blog post page
// Edit this file to customize the blog post content, meta data, and styling

// ========== POST META DATA ==========
const BLOGPOST_META = {
    title: "Ultimate Gaming Laptop Buying Guide 2025: Choose the Perfect Gaming Machine",
    excerpt: "Master the art of choosing the perfect gaming laptop with our comprehensive 2025 buying guide. From GPU selection to display technology, we cover everything you need to make the right choice.",
    category: "Buying Guide",
    categoryColor: "warning",
    date: "December 10, 2024",
    author: "DC's Top 10 Laptop Experts",
    readTime: 8,
    keywords: "gaming laptop buying guide, best gaming laptops 2025, laptop GPU comparison, gaming laptop specs, laptop buying tips",
    
    // Featured Image
    image: "./assets/images/laptop_test/blog1.webp",
    imageAlt: "Gaming laptop buying guide 2025 - choosing the perfect gaming machine",
    
    // Image positioning and scaling
    imageScale: 1.0,
    imagePositioning: {
        objectPosition: 'center',
        objectFit: 'cover'
    },
    
    // Social sharing
    socialImage: "./assets/images/laptop_test/gaming_laptop_buying_guide.webp",
    
    // Tags for the post
    tags: [
        { text: "Buying Guide", type: "warning" },
        { text: "Gaming Laptops", type: "secondary" },
        { text: "GPU Guide", type: "primary" },
        { text: "Performance", type: "success" }
    ]
};

// ========== ARTICLE CONTENT ==========
const ARTICLE_CONTENT = {
    // Table of Contents
    tableOfContents: [
        { id: "introduction", title: "Why Gaming Laptop Choice Matters", level: 1 },
        { id: "gpu-selection", title: "Choosing the Right Graphics Card", level: 1 },
        { id: "cpu-performance", title: "CPU Performance for Gaming", level: 1 },
        { id: "memory-storage", title: "RAM and Storage Requirements", level: 2 },
        { id: "display-technology", title: "Display Technology Guide", level: 2 },
        { id: "cooling-systems", title: "Thermal Management", level: 1 },
        { id: "budget-considerations", title: "Budget vs Performance", level: 1 },
        { id: "conclusion", title: "Making Your Final Decision", level: 1 }
    ],
    
    // Main article sections
    sections: [
        {
            id: "introduction",
            title: "Why Gaming Laptop Choice Matters",
            content: `
                <p>Choosing the right gaming laptop can make or break your gaming experience. Unlike desktop PCs, laptops require careful balance between performance, portability, battery life, and thermal management – all while staying within your budget.</p>
                
                <p>In 2025, gaming laptops have reached incredible performance levels, but with so many options available, making the right choice has become more complex than ever. Understanding key specifications and their real-world impact is essential for any serious gamer.</p>
                
                <div class="highlight-box" style="background: var(--background-secondary); padding: var(--spacing-lg); border-radius: var(--border-radius-md); margin: var(--spacing-lg) 0; border-left: 4px solid var(--warning-color);">
                    <h4 style="color: var(--warning-color); margin-bottom: var(--spacing-sm);">⚠️ Buying Alert</h4>
                    <p style="margin: 0;"><strong>The average gamer keeps their laptop for 3-4 years.</strong> Make sure your choice will handle future games – follow our comprehensive guide to make the right investment.</p>
                </div>
            `
        },
        {
            id: "gpu-selection",
            title: "Choosing the Right Graphics Card",
            content: `
                <p>The GPU is the heart of any gaming laptop, determining your gaming performance more than any other component. Understanding GPU specifications and performance tiers is crucial for making the right choice.</p>
                
                <h4>GPU Performance Tiers:</h4>
                <ul>
                    <li><strong>Entry Level (RTX 4050):</strong> 1080p gaming at medium-high settings, 60+ FPS</li>
                    <li><strong>Mid-Range (RTX 4060/4070):</strong> 1440p gaming at high settings, 60+ FPS</li>
                    <li><strong>High-End (RTX 4080):</strong> 1440p ultra settings, 4K gaming at medium-high</li>
                    <li><strong>Flagship (RTX 4090):</strong> 4K gaming at ultra settings, future-proof performance</li>
                    <li><strong>VRAM Requirements:</strong> 8GB minimum for modern games, 12GB+ for 4K</li>
                </ul>
                
                <div class="pro-tip" style="background: var(--accent-color-light); padding: var(--spacing-md); border-radius: var(--border-radius-md); margin: var(--spacing-lg) 0;">
                    <h4 style="color: var(--accent-color); margin-bottom: var(--spacing-sm);">💡 Pro Tip</h4>
                    <p style="margin: 0;">All laptops in our <a href="./index.html" class="text-primary">Top 10 rankings</a> feature RTX 4060 or better GPUs for excellent gaming performance.</p>
                </div>
            `
        },
        {
            id: "cpu-performance",
            title: "CPU Performance for Gaming",
            content: `
                <p>While the GPU handles graphics, the CPU manages game logic, AI, physics, and background tasks. A balanced CPU-GPU pairing ensures smooth gameplay without bottlenecks.</p>
                
                <h4>Gaming CPU Requirements:</h4>
                <ol>
                    <li><strong>Core Count:</strong> 6-8 cores minimum for modern games, 8+ cores for streaming</li>
                    <li><strong>Clock Speed:</strong> Base clock 3.0GHz+, boost clock 4.5GHz+ for optimal performance</li>
                    <li><strong>Architecture:</strong> Latest generation Intel (13th/14th gen) or AMD (7000 series)</li>
                    <li><strong>Cache:</strong> Larger L3 cache improves gaming performance significantly</li>
                    <li><strong>Power Efficiency:</strong> Balance performance with battery life and thermal output</li>
                </ol>
            `
        },
        {
            id: "memory-storage",
            title: "RAM and Storage Requirements",
            content: `
                <p>Memory and storage directly impact gaming performance, load times, and multitasking capabilities. Understanding these requirements ensures smooth gameplay and future-proofing.</p>
                
                <div class="highlight-box" style="background: var(--primary-color-light); padding: var(--spacing-lg); border-radius: var(--border-radius-md); margin: var(--spacing-lg) 0; border-left: 4px solid var(--primary-color);">
                    <h4 style="color: var(--primary-color); margin-bottom: var(--spacing-sm);">🚀 Performance Impact</h4>
                    <p style="margin: 0;"><strong>16GB RAM and NVMe SSD are minimum requirements for modern gaming.</strong> 32GB RAM recommended for content creation and future-proofing.</p>
                </div>
                
                <h4>Memory and Storage Guidelines:</h4>
                <ul>
                    <li><strong>RAM Amount:</strong> 16GB minimum, 32GB for content creation and streaming</li>
                    <li><strong>RAM Speed:</strong> DDR5-4800 or higher for best performance</li>
                    <li><strong>Storage Type:</strong> NVMe PCIe 4.0 SSD for fastest load times</li>
                    <li><strong>Storage Capacity:</strong> 1TB minimum, 2TB+ for large game libraries</li>
                </ul>
            `
        },
        {
            id: "display-technology",
            title: "Display Technology Guide",
            content: `
                <p>The display is your window into the gaming world. Understanding display technology, refresh rates, and resolution helps you choose the perfect visual experience.</p>
                
                <h4>Key Display Specifications:</h4>
                <ul>
                    <li><strong>Resolution:</strong> 1440p (2560x1440) sweet spot for gaming performance</li>
                    <li><strong>Refresh Rate:</strong> 144Hz minimum, 240Hz for competitive gaming</li>
                    <li><strong>Panel Type:</strong> IPS for color accuracy, OLED for contrast</li>
                    <li><strong>Response Time:</strong> 3ms or lower to minimize motion blur</li>
                </ul>
                
                <p><strong>Display Technology Comparison:</strong></p>
                <ul>
                    <li><strong>IPS Panels:</strong> Excellent color accuracy and viewing angles</li>
                    <li><strong>OLED Displays:</strong> Perfect blacks and infinite contrast ratio</li>
                    <li><strong>Mini-LED:</strong> High brightness with local dimming zones</li>
                    <li><strong>High Refresh:</strong> 144Hz+ for smooth, competitive gaming</li>
                </ul>
            `
        },
        {
            id: "cooling-systems",
            title: "Thermal Management",
            content: `
                <p>Effective cooling is crucial for maintaining peak performance and preventing thermal throttling during intense gaming sessions. Understanding cooling systems helps you choose laptops that stay cool under pressure.</p>
                
                <h4>Cooling Technologies:</h4>
                <ul>
                    <li><strong>Liquid Metal:</strong> Superior thermal conductivity compared to traditional thermal paste</li>
                    <li><strong>Vapor Chambers:</strong> Efficient heat distribution across large surfaces</li>
                    <li><strong>Multiple Heat Pipes:</strong> Direct heat transfer from CPU/GPU to cooling fins</li>
                    <li><strong>Advanced Fans:</strong> High-performance fans with intelligent speed control</li>
                    <li><strong>Thermal Design:</strong> Strategic component placement for optimal airflow</li>
                    <li><strong>User Controls:</strong> Manual fan curves and performance profiles</li>
                </ul>
                
                <div class="info-box" style="background: var(--primary-color-light); padding: var(--spacing-lg); border-radius: var(--border-radius-md); margin: var(--spacing-lg) 0;">
                    <h4 style="color: var(--primary-color); margin-bottom: var(--spacing-sm);">🌡️ Temperature Guidelines</h4>
                    <p style="margin: 0;">Keep CPU under 85°C and GPU under 80°C during gaming for <strong>optimal performance and longevity</strong> of your gaming laptop components.</p>
                </div>
            `
        },
        {
            id: "budget-considerations",
            title: "Budget vs Performance",
            content: `
                <p>Understanding the price-to-performance ratio helps you make informed decisions and get the most gaming power for your budget.</p>
                
                <h4>Budget Categories:</h4>
                <ul>
                    <li><strong>Budget Gaming (£800-1200):</strong> RTX 4050/4060, 1080p gaming</li>
                    <li><strong>Mid-Range (£1200-2000):</strong> RTX 4060/4070, 1440p gaming</li>
                    <li><strong>High-End (£2000-3000):</strong> RTX 4070/4080, 1440p ultra/4K</li>
                    <li><strong>Premium (£3000+):</strong> RTX 4080/4090, 4K ultra gaming</li>
                    <li><strong>Content Creation:</strong> Add £300-500 for 32GB RAM and professional features</li>
                    <li><strong>Future-Proofing:</strong> Invest in higher-tier GPU for longevity</li>
                    <li><strong>Brand Premium:</strong> Expect 10-20% markup for premium brands</li>
                </ul>
                
                <div class="warning-box" style="background: var(--warning-color-light); padding: var(--spacing-lg); border-radius: var(--border-radius-md); margin: var(--spacing-lg) 0;">
                    <h4 style="color: var(--warning-color); margin-bottom: var(--spacing-sm);">💰 Budget Tips:</h4>
                    <ul style="margin: 0;">
                        <li>Prioritize GPU over CPU for gaming performance</li>
                        <li>16GB RAM is sufficient for most gamers</li>
                        <li>Consider previous-generation models for value</li>
                        <li>Factor in warranty and support costs</li>
                    </ul>
                </div>
            `
        },
        {
            id: "conclusion",
            title: "Making Your Final Decision",
            content: `
                <p>Choosing the perfect gaming laptop is a balance of performance, budget, and personal preferences. By understanding these key components and their impact on gaming, you can make an informed decision that will serve you well for years.</p>
                
                <p>Remember that gaming laptops are long-term investments. Prioritize the GPU for gaming performance, ensure adequate cooling for sustained performance, and consider future-proofing with higher-end specifications if your budget allows.</p>
                
                <div class="final-cta">
                    <h4>Ready to Find Your Perfect Gaming Laptop?</h4>
                    <p>Explore our carefully tested selection of the best gaming laptops for every budget and need.</p>
                    <a href="./index.html" class="btn btn-primary">
                        View Top 10 Gaming Laptops
                    </a>
                </div>
            `
        }
    ]
};

// ========== CTA CONTENT ==========
const CTA_CONTENT = {
    title: "🎮 Find Your Perfect Gaming Laptop",
    description: "All laptops in our Top 10 rankings are thoroughly tested for performance, build quality, and value to help you make the perfect choice.",
    buttonText: "View Top Gaming Laptops",
    buttonLink: "./index.html"
};

// ========== RELATED POSTS ==========
const RELATED_POSTS = [
    {
        title: "RTX 4090 vs RTX 4080: Which GPU Powers the Best Gaming Laptops?",
        excerpt: "Compare the RTX 4090 and RTX 4080 in gaming laptops for performance and value.",
        image: "./assets/images/laptop_test/gpu.jpg",
        imageScale: 1.0,                                               // Scale for related post image (1.0 = 100%, 1.2 = 120%, etc.)
        imagePositioning: {
            objectPosition: 'center',                            // Options: 'top left', 'top center', 'top right', 'center left', 'center center', 'center right', 'bottom left', 'bottom center', 'bottom right'
            objectFit: 'cover'                                         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
        },
        link: "./blogpost2.html",
        category: "GPU Guide",
        date: "December 8, 2024"
    },
    {
        title: "Gaming Laptop Cooling Systems: Thermal Management Guide 2025",
        excerpt: "Master gaming laptop cooling with our comprehensive thermal guide.",
        image: "./assets/images/laptop_test/cooling.jpg",
        imageScale: 1.0,
        imagePositioning: {
            objectPosition: 'center',
            objectFit: 'fill'
        },
        link: "./blogpost3.html",
        category: "Cooling Guide",
        date: "December 5, 2024"
    }
    /* you can add more related posts here */
];

// ========== DYNAMIC CONTENT SYSTEM ==========
class BlogPost1Manager {
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
        this.updatePageMeta();
        this.populateContent();
        this.generateTableOfContents();
        this.populateTags();
        this.populateCTA();
        this.populateRelatedPosts();
        console.log('✅ Blog Post 1 content system loaded');
    }
    
    updatePageMeta() {
        // Update page title
        document.title = this.replacePlaceholders(BLOGPOST_META.title + " | {{BRAND_NAME}}");
        
        // Update meta tags
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) metaDescription.content = BLOGPOST_META.excerpt;
        
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) metaKeywords.content = BLOGPOST_META.keywords;
        
        // Update Open Graph tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.content = BLOGPOST_META.title;
        
        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) ogDescription.content = BLOGPOST_META.excerpt;
        
        const ogImage = document.querySelector('meta[property="og:image"]');
        if (ogImage) ogImage.content = BLOGPOST_META.socialImage;
    }
    
    populateContent() {
        // Update hero section
        const categoryBadge = document.getElementById('category-badge');
        if (categoryBadge) {
            categoryBadge.textContent = BLOGPOST_META.category;
            categoryBadge.className = `badge badge-${BLOGPOST_META.categoryColor}`;
        }
        
        const postTitle = document.getElementById('post-title');
        if (postTitle) postTitle.textContent = BLOGPOST_META.title;
        
        const postDate = document.getElementById('post-date');
        if (postDate) postDate.textContent = BLOGPOST_META.date;
        
        const readTime = document.getElementById('read-time');
        if (readTime) readTime.textContent = `${BLOGPOST_META.readTime} min read`;
        
        const postAuthor = document.getElementById('post-author');
        if (postAuthor) postAuthor.textContent = BLOGPOST_META.author;
        
        const postExcerpt = document.getElementById('post-excerpt');
        if (postExcerpt) postExcerpt.textContent = BLOGPOST_META.excerpt;
        
        // Update featured image
        const featuredImage = document.getElementById('featured-image');
        if (featuredImage) {
            featuredImage.src = BLOGPOST_META.image;
            featuredImage.alt = BLOGPOST_META.imageAlt;
            featuredImage.style.transform = `scale(${BLOGPOST_META.imageScale || 1.0})`;
            featuredImage.style.objectPosition = BLOGPOST_META.imagePositioning?.objectPosition || 'center';
            featuredImage.style.objectFit = BLOGPOST_META.imagePositioning?.objectFit || 'cover';
        }
        
        // Populate article content
        const articleContent = document.getElementById('article-content');
        if (articleContent) {
            let contentHTML = '';
            
            ARTICLE_CONTENT.sections.forEach(section => {
                contentHTML += `
                    <section id="${section.id}" style="margin-bottom: var(--spacing-xl);">
                        <h2 style="color: var(--text-primary); margin-bottom: var(--spacing-lg); padding-bottom: var(--spacing-sm); border-bottom: 2px solid var(--primary-color);">
                            ${section.title}
                        </h2>
                        <div class="section-content" style="line-height: 1.8; color: var(--text-secondary);">
                            ${section.content}
                        </div>
                    </section>
                `;
            });
            
            articleContent.innerHTML = contentHTML;
        }
    }
    
    generateTableOfContents() {
        const tocContainer = document.createElement('div');
        tocContainer.className = 'table-of-contents';
        tocContainer.style.cssText = `
            background: var(--background-secondary);
            padding: var(--spacing-lg);
            border-radius: var(--border-radius-lg);
            margin-bottom: var(--spacing-xl);
            border-left: 4px solid var(--primary-color);
        `;
        
        let tocHTML = '<h3 style="margin-bottom: var(--spacing-md); color: var(--text-primary);">📋 Table of Contents</h3><ul style="list-style: none; padding: 0;">';
        
        ARTICLE_CONTENT.tableOfContents.forEach((item, index) => {
            const indent = item.level === 2 ? 'margin-left: var(--spacing-lg);' : '';
            tocHTML += `
                <li style="${indent} margin-bottom: var(--spacing-sm);">
                    <a href="#${item.id}" style="color: var(--primary-color); text-decoration: none; display: block; padding: var(--spacing-xs) 0; border-radius: var(--border-radius-sm); transition: all 0.3s ease;">
                        ${index + 1}. ${item.title}
                    </a>
                </li>
            `;
        });
        
        tocHTML += '</ul>';
        tocContainer.innerHTML = tocHTML;
        
        const articleContent = document.getElementById('article-content');
        if (articleContent) {
            articleContent.insertBefore(tocContainer, articleContent.firstChild);
        }
    }
    
    populateTags() {
        const tagsContainer = document.getElementById('tags-container');
        if (tagsContainer) {
            const tagsHTML = BLOGPOST_META.tags.map(tag => 
                `<span class="badge badge-${tag.type}" style="font-size: 0.9rem;">${tag.text}</span>`
            ).join('');
            tagsContainer.innerHTML = tagsHTML;
        }
    }
    
    populateCTA() {
        const ctaContent = document.getElementById('post-cta-content');
        if (ctaContent) {
            ctaContent.innerHTML = `
                <h3 style="margin-bottom: var(--spacing-md); color: var(--text-primary);">${CTA_CONTENT.title}</h3>
                <p style="margin-bottom: var(--spacing-lg); color: var(--text-secondary);">${CTA_CONTENT.description}</p>
                <a href="${CTA_CONTENT.buttonLink}" class="btn btn-primary" style="display: inline-block; padding: var(--spacing-md) var(--spacing-lg); text-decoration: none; border-radius: var(--border-radius-md); font-weight: 600;">
                    ${CTA_CONTENT.buttonText}
                </a>
            `;
        }
    }
    
    populateRelatedPosts() {
        const relatedGrid = document.getElementById('related-posts-grid');
        if (relatedGrid) {
            const postsHTML = RELATED_POSTS.map(post => `
                <article class="related-post-card" style="background: var(--background-primary); border-radius: var(--border-radius-lg); overflow: hidden; box-shadow: var(--shadow-md); transition: transform 0.3s ease, box-shadow 0.3s ease; cursor: pointer;" onclick="window.location.href='${post.link}'">
                    <div class="post-image" style="height: 200px; overflow: hidden;">
                        <img src="${post.image}" alt="${post.title}" style="width: 100%; height: 100%; object-fit: ${post.imagePositioning?.objectFit || 'cover'}; object-position: ${post.imagePositioning?.objectPosition || 'center center'}; transform: scale(${post.imageScale || 1.0}); transition: transform 0.3s ease;">
                    </div>
                    <div class="post-content" style="padding: var(--spacing-lg);">
                        <div class="post-meta" style="margin-bottom: var(--spacing-sm);">
                            <span class="category" style="font-size: 0.85rem; color: var(--primary-color); font-weight: 600;">${post.category}</span>
                            <span style="margin: 0 var(--spacing-xs); color: var(--text-light);">•</span>
                            <span class="date" style="font-size: 0.85rem; color: var(--text-light);">${post.date}</span>
                        </div>
                        <h4 style="margin-bottom: var(--spacing-sm); color: var(--text-primary); font-size: 1.1rem; line-height: 1.4;">${post.title}</h4>
                        <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.5; margin: 0;">${post.excerpt}</p>
                    </div>
                </article>
            `).join('');
            
            relatedGrid.innerHTML = postsHTML;
        }
    }
    
    replacePlaceholders(text) {
        return text
            .replace(/\{\{BRAND_NAME\}\}/g, (window.BRAND_CONFIG && window.BRAND_CONFIG.name) || 'DC\'s Top 10')
            .replace(/\{\{NICHE\}\}/g, (window.NICHE_CONFIG && window.NICHE_CONFIG.niche) || 'Products')
            .replace(/\{\{PRODUCT_TYPE\}\}/g, (window.NICHE_CONFIG && window.NICHE_CONFIG.productType) || 'products');
    }
}

// Initialize the blog post manager
const blogPost1Manager = new BlogPost1Manager();

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        BLOGPOST_META,
        ARTICLE_CONTENT,
        CTA_CONTENT,
        RELATED_POSTS,
        BlogPost1Manager
    };
}

console.log('🎯 Blog Post 1 configuration loaded successfully');
