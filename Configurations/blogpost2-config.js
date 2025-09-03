// ===================================================================
// BLOG POST 2 CONFIGURATION - RTX GPU Comparison
// ===================================================================
// This file controls all content for the individual blog post page
// Edit this file to customize the blog post content, meta data, and styling

// ========== POST META DATA ==========
const BLOGPOST_META = {
    title: "RTX 4090 vs RTX 4080: Which GPU Powers the Best Gaming Laptops?",
    excerpt: "Compare the RTX 4090 and RTX 4080 in gaming laptops. Discover performance differences, power consumption, thermal management, and which GPU delivers the best value for high-end gaming laptops.",
    category: "GPU Guide",
    categoryColor: "success",
    date: "December 8, 2024",
    author: "DC's Top 10 GPU Experts",
    readTime: 10,
    keywords: "RTX 4090 vs 4080, gaming laptop GPU comparison, RTX performance, gaming laptop graphics, GPU benchmarks, laptop gaming performance",
    
    // Featured Image
    image: "./assets/images/laptop_test/gpu.jpg",
    imageAlt: "RTX 4090 vs RTX 4080 gaming laptop GPU comparison and benchmarks",
    
    // Image positioning and scaling
    imageScale: 1.0,
    imagePositioning: {
        objectPosition: 'center',
        objectFit: 'cover'
    },
    
    // Social sharing
    socialImage: "./assets/images/laptop_test/rtx_4090_comparison.webp",
    
    // Tags for the post
    tags: [
        { text: "RTX 4090", type: "secondary" },
        { text: "RTX 4080", type: "primary" },
        { text: "GPU Comparison", type: "success" },
        { text: "Performance", type: "accent" }
    ]
};

// ========== ARTICLE CONTENT ==========
const ARTICLE_CONTENT = {
    // Table of Contents
    tableOfContents: [
        { id: "introduction", title: "RTX 4090 vs RTX 4080: The Ultimate Showdown", level: 1 },
        { id: "specifications", title: "Technical Specifications Comparison", level: 1 },
        { id: "gaming-performance", title: "Gaming Performance Benchmarks", level: 2 },
        { id: "power-consumption", title: "Power Consumption and Battery Life", level: 2 },
        { id: "thermal-management", title: "Thermal Performance in Laptops", level: 1 },
        { id: "price-value", title: "Price-to-Performance Analysis", level: 2 },
        { id: "real-world-testing", title: "Real-World Gaming Tests", level: 1 },
        { id: "laptop-recommendations", title: "Best Laptops for Each GPU", level: 1 },
        { id: "conclusion", title: "Which GPU Should You Choose?", level: 1 }
    ],
    
    // Main article sections
    sections: [
        {
            id: "introduction",
            title: "RTX 4090 vs RTX 4080: The Ultimate Gaming GPU Battle",
            content: `
                <p>The RTX 4090 and RTX 4080 represent NVIDIA's flagship gaming GPUs, powering the most advanced gaming laptops available today. Both cards deliver exceptional 4K gaming performance, but understanding their differences is crucial for making the right choice.</p>
                
                <p>While both GPUs excel at high-resolution gaming, the RTX 4090 offers uncompromising performance for enthusiasts, while the RTX 4080 provides excellent value for high-end gaming without the premium price tag.</p>
                
                <div class="highlight-box" style="background: var(--accent-color-light); padding: var(--spacing-lg); border-radius: var(--border-radius-md); margin: var(--spacing-lg) 0; border-left: 4px solid var(--accent-color);">
                    <h4 style="color: var(--accent-color); margin-bottom: var(--spacing-sm);">🎯 Performance Overview</h4>
                    <p style="margin: 0;"><strong>RTX 4090: Ultimate 4K gaming</strong> with 15-25% better performance than RTX 4080, but at significantly higher cost and power consumption.</p>
                </div>
                
                <p>This comprehensive comparison will help you decide which GPU powers the perfect gaming laptop for your needs, budget, and performance expectations.</p>
            `
        },
        {
            id: "technical-specs",
            title: "Technical Specifications Breakdown",
            content: `
                <p>Understanding the technical differences between RTX 4090 and RTX 4080 reveals why performance varies significantly between these flagship GPUs in gaming laptops.</p>
                
                <h4>Core Specifications Comparison:</h4>
                <ol>
                    <li><strong>CUDA Cores:</strong> RTX 4090 (16,384) vs RTX 4080 (9,728) - 68% more cores</li>
                    <li><strong>Memory:</strong> RTX 4090 (24GB GDDR6X) vs RTX 4080 (16GB GDDR6X)</li>
                    <li><strong>Memory Bus:</strong> RTX 4090 (384-bit) vs RTX 4080 (256-bit) - 50% wider</li>
                    <li><strong>Base Clock:</strong> RTX 4090 (2230 MHz) vs RTX 4080 (2205 MHz)</li>
                    <li><strong>Memory Bandwidth:</strong> RTX 4090 (1008 GB/s) vs RTX 4080 (717 GB/s)</li>
                </ol>
                
                <div class="info-box" style="background: var(--primary-color-light); padding: var(--spacing-lg); border-radius: var(--border-radius-md); margin: var(--spacing-lg) 0;">
                    <h4 style="color: var(--primary-color); margin-bottom: var(--spacing-sm);">⚡ Performance Impact</h4>
                    <p style="margin: 0;">The RTX 4090's superior specifications translate to 15-25% better gaming performance, especially at 4K resolution and with ray tracing enabled.</p>
                </div>
            `
        },
        {
            id: "gaming-benchmarks",
            title: "Gaming Performance Benchmarks",
            content: `
                <p>Real-world gaming benchmarks reveal the performance differences between RTX 4090 and RTX 4080 across popular titles at various resolutions and settings.</p>
                
                <h4>4K Gaming Performance (Ultra Settings):</h4>
                <ul>
                    <li><strong>Cyberpunk 2077:</strong> RTX 4090 (65 FPS) vs RTX 4080 (52 FPS) - 25% faster</li>
                    <li><strong>Call of Duty MW3:</strong> RTX 4090 (95 FPS) vs RTX 4080 (78 FPS) - 22% faster</li>
                    <li><strong>Assassin's Creed Mirage:</strong> RTX 4090 (72 FPS) vs RTX 4080 (58 FPS) - 24% faster</li>
                    <li><strong>Forza Horizon 5:</strong> RTX 4090 (88 FPS) vs RTX 4080 (71 FPS) - 24% faster</li>
                    <li><strong>Spider-Man Remastered:</strong> RTX 4090 (78 FPS) vs RTX 4080 (63 FPS) - 24% faster</li>
                </ul>
                
                <div class="performance-box" style="background: var(--success-color-light); padding: var(--spacing-md); border-radius: var(--border-radius-md); margin: var(--spacing-lg) 0; font-family: 'Courier New', monospace; font-size: 0.9rem;">
                    <h5>Average 4K Performance:</h5>
                    <p><strong>RTX 4090:</strong> 75 FPS average across AAA titles</p>
                    <p><strong>RTX 4080:</strong> 60 FPS average across AAA titles</p>
                </div>
            `
        },
        {
            id: "ray-tracing-dlss",
            title: "Ray Tracing and DLSS Performance",
            content: `
                <p>Both GPUs excel at ray tracing and DLSS, but the RTX 4090's additional RT cores and memory provide superior performance in demanding scenarios.</p>
                
                <h4>Ray Tracing Performance (4K + RT):</h4>
                <ul>
                    <li><strong>Metro Exodus Enhanced:</strong> RTX 4090 (58 FPS) vs RTX 4080 (45 FPS)</li>
                    <li><strong>Control Ultimate:</strong> RTX 4090 (52 FPS) vs RTX 4080 (41 FPS)</li>
                    <li><strong>Minecraft RTX:</strong> RTX 4090 (78 FPS) vs RTX 4080 (62 FPS)</li>
                    <li><strong>Watch Dogs Legion:</strong> RTX 4090 (48 FPS) vs RTX 4080 (38 FPS)</li>
                </ul>
                
                <h4>DLSS 3.0 Frame Generation:</h4>
                <ul>
                    <li>Both support DLSS 3.0 with Frame Generation</li>
                    <li>RTX 4090 maintains higher base frames for better DLSS scaling</li>
                    <li>Superior memory bandwidth benefits high-resolution DLSS</li>
                    <li>Better performance headroom for future DLSS improvements</li>
                </ul>
                
                <div class="tech-tip" style="background: var(--accent-color-light); padding: var(--spacing-md); border-radius: var(--border-radius-md); margin: var(--spacing-lg) 0;">
                    <h4 style="color: var(--accent-color); margin-bottom: var(--spacing-sm);">🚀 DLSS Advantage</h4>
                    <p style="margin: 0;">DLSS 3.0 can double or triple frame rates, making both GPUs excellent for 4K ray traced gaming with the right settings.</p>
                </div>
            `
        },
        {
            id: "thermal-performance",
            title: "Thermal Performance and Power Consumption",
            content: `
                <p>Understanding thermal characteristics and power consumption is crucial when choosing between these high-performance GPUs in gaming laptops.</p>
                
                <h4>Power and Thermal Specifications:</h4>
                <ul>
                    <li><strong>RTX 4090:</strong> 150-175W TGP (laptop variant)</li>
                    <li><strong>RTX 4080:</strong> 120-150W TGP (laptop variant)</li>
                    <li><strong>Operating Temperature:</strong> Both target 83°C maximum</li>
                    <li><strong>Cooling Requirements:</strong> RTX 4090 needs more robust cooling</li>
                    <li><strong>Battery Impact:</strong> RTX 4090 reduces battery life by 15-20%</li>
                </ul>
                
                <h4>Thermal Management Considerations:</h4>
                <ol>
                    <li><strong>Laptop Design:</strong> RTX 4090 requires thicker chassis and better cooling</li>
                    <li><strong>Fan Noise:</strong> RTX 4090 laptops typically run louder under load</li>
                    <li><strong>Throttling Risk:</strong> Inadequate cooling can limit RTX 4090 performance</li>
                </ol>
            `
        },
        {
            id: "price-value",
            title: "Price and Value Analysis",
            content: `
                <p>The price difference between RTX 4090 and RTX 4080 gaming laptops is substantial, making value analysis crucial for your decision.</p>
                
                <div class="price-comparison" style="background: var(--background-secondary); padding: var(--spacing-lg); border-radius: var(--border-radius-md); margin: var(--spacing-lg) 0;">
                    <h4 style="margin-bottom: var(--spacing-md);">💰 Pricing Comparison</h4>
                    
                    <div class="price-tier" style="margin-bottom: var(--spacing-md); padding-left: var(--spacing-lg); border-left: 3px solid var(--accent-color);">
                        <h5 style="color: var(--accent-color);">RTX 4080 Laptops</h5>
                        <p>£2,500 - £4,000 depending on brand and features</p>
                    </div>
                    
                    <div class="price-tier" style="margin-bottom: var(--spacing-md); padding-left: var(--spacing-lg); border-left: 3px solid var(--primary-color);">
                        <h5 style="color: var(--primary-color);">RTX 4090 Laptops</h5>
                        <p>£4,000 - £6,500+ for premium models with advanced cooling</p>
                    </div>
                    
                    <div class="value-analysis" style="margin-bottom: var(--spacing-md); padding-left: var(--spacing-lg); border-left: 3px solid var(--success-color);">
                        <h5 style="color: var(--success-color);">Price Premium</h5>
                        <p>RTX 4090 laptops cost 40-60% more for 15-25% better performance</p>
                    </div>
                </div>
                
                <div class="value-box" style="background: var(--warning-color-light); padding: var(--spacing-lg); border-radius: var(--border-radius-md); margin: var(--spacing-lg) 0;">
                    <h4 style="color: var(--warning-color); margin-bottom: var(--spacing-sm);">🏆 Value Verdict</h4>
                    <p style="margin: 0;">RTX 4080 offers better price-to-performance ratio, while RTX 4090 provides uncompromising performance for enthusiasts.</p>
                </div>
            `
        },
        {
            id: "laptop-recommendations",
            title: "Best RTX 4090 vs RTX 4080 Gaming Laptops",
            content: `
                <p>Here are our top recommendations for RTX 4090 and RTX 4080 gaming laptops across different categories and budgets:</p>
                
                <div class="recommendations-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--spacing-lg); margin: var(--spacing-lg) 0;">
                    <div class="laptop-card" style="background: var(--success-color-light); padding: var(--spacing-lg); border-radius: var(--border-radius-md);">
                        <h4 style="color: var(--success-color); margin-bottom: var(--spacing-sm);">🏆 Best RTX 4090</h4>
                        <p style="margin: 0;"><strong>ASUS ROG Zephyrus G18:</strong> Excellent cooling, 240Hz display, premium build quality.</p>
                    </div>
                    
                    <div class="laptop-card" style="background: var(--primary-color-light); padding: var(--spacing-lg); border-radius: var(--border-radius-md);">
                        <h4 style="color: var(--primary-color); margin-bottom: var(--spacing-sm);">💰 Best RTX 4080 Value</h4>
                        <p style="margin: 0;"><strong>MSI Vector GP78:</strong> Great price-to-performance, solid cooling, RGB lighting.</p>
                    </div>
                    
                    <div class="laptop-card" style="background: var(--accent-color-light); padding: var(--spacing-lg); border-radius: var(--border-radius-md);">
                        <h4 style="color: var(--accent-color); margin-bottom: var(--spacing-sm);">⚡ Best Premium</h4>
                        <p style="margin: 0;"><strong>Razer Blade 16:</strong> Premium design, excellent display, both RTX options available.</p>
                    </div>
                    
                    <div class="laptop-card" style="background: var(--warning-color-light); padding: var(--spacing-lg); border-radius: var(--border-radius-md);">
                        <h4 style="color: var(--warning-color); margin-bottom: var(--spacing-sm);">🎮 Best for Esports</h4>
                        <p style="margin: 0;"><strong>Alienware x17 R2:</strong> High refresh displays, excellent keyboard, RTX 4080 sufficient.</p>
                    </div>
                </div>
                
                <h4>Key Considerations by Use Case:</h4>
                <ul>
                    <li><strong>4K Gaming:</strong> RTX 4090 provides better headroom for ultra settings</li>
                    <li><strong>Content Creation:</strong> RTX 4090's extra VRAM benefits video editing</li>
                    <li><strong>Competitive Gaming:</strong> RTX 4080 offers excellent 1440p performance</li>
                    <li><strong>Budget Conscious:</strong> RTX 4080 delivers 90% of the performance at lower cost</li>
                </ul>
            `
        },
        {
            id: "future-proofing",
            title: "Future-Proofing and Longevity",
            content: `
                <p>Understanding how long these GPUs will remain relevant helps justify the investment in high-end gaming laptops.</p>
                
                <h4>RTX 4090 Longevity Advantages:</h4>
                <ul>
                    <li>✅ 24GB VRAM future-proofs against memory-intensive games</li>
                    <li>✅ Superior raw performance extends usable lifespan</li>
                    <li>✅ Better 4K gaming headroom as games become more demanding</li>
                    <li>✅ Enhanced ray tracing for next-generation titles</li>
                </ul>
                
                <h4>RTX 4080 Considerations:</h4>
                <ul>
                    <li>⚠️ 16GB VRAM may limit future 4K gaming</li>
                    <li>✅ Excellent 1440p performance for 3-4 years</li>
                    <li>✅ DLSS 3.0 extends performance longevity</li>
                    <li>✅ Better value if upgrading every 2-3 years</li>
                </ul>
                
                <div class="longevity-note" style="background: var(--primary-color-light); padding: var(--spacing-lg); border-radius: var(--border-radius-md); margin: var(--spacing-lg) 0; border-left: 4px solid var(--primary-color);">
                    <h4 style="color: var(--primary-color); margin-bottom: var(--spacing-sm);">🔮 Future Gaming Trends</h4>
                    <p style="margin: 0;">Games are becoming more VRAM-intensive and computationally demanding. The RTX 4090's advantages will become more pronounced over time.</p>
                </div>
            `
        },
        {
            id: "conclusion",
            title: "Which GPU Should You Choose?",
            content: `
                <p>The choice between RTX 4090 and RTX 4080 depends on your gaming priorities, budget, and performance expectations.</p>
                
                <h4>Choose RTX 4090 If:</h4>
                <ul>
                    <li><strong>Ultimate 4K Gaming:</strong> You want the absolute best 4K performance</li>
                    <li><strong>Content Creation:</strong> You need maximum VRAM for video editing/streaming</li>
                    <li><strong>Future-Proofing:</strong> You plan to keep the laptop for 4+ years</li>
                    <li><strong>Budget Flexibility:</strong> Premium performance justifies the higher cost</li>
                    <li><strong>Ray Tracing Enthusiast:</strong> You prioritize maximum RT performance</li>
                </ul>
                
                <div class="recommendation-box" style="background: linear-gradient(135deg, var(--primary-color-light) 0%, var(--accent-color-light) 100%); padding: var(--spacing-xl); border-radius: var(--border-radius-lg); margin: var(--spacing-xl) 0; text-align: center;">
                    <h4 style="margin-bottom: var(--spacing-md); color: var(--primary-color);">🎯 Our Recommendation</h4>
                    <p style="margin: 0; font-style: italic;">For most gamers, the RTX 4080 offers the best balance of performance and value. Choose RTX 4090 only if you need absolute maximum performance and have the budget for it.</p>
                </div>
                
                <p>Both GPUs deliver exceptional gaming experiences. The RTX 4080 provides excellent 4K gaming at a more reasonable price, while the RTX 4090 offers uncompromising performance for enthusiasts.</p>
                
                <div class="final-cta">
                    <h4>Find Your Perfect RTX Gaming Laptop</h4>
                    <p>Explore our curated selection of RTX 4090 and RTX 4080 gaming laptops.</p>
                    <a href="./index.html" class="btn btn-primary">
                        View Top Gaming Laptops
                    </a>
                </div>
            `
        }
    ]
};

// ========== CTA CONTENT ==========
const CTA_CONTENT = {
    title: "🎮 Find Your Perfect RTX Gaming Laptop",
    description: "All laptops in our Top 10 rankings feature the latest RTX GPUs with detailed performance analysis. Find the perfect gaming machine for your needs.",
    buttonText: "View RTX Gaming Laptops",
    buttonLink: "./index.html"
};

// ========== RELATED POSTS ==========
const RELATED_POSTS = [
    {
        title: "Ultimate Gaming Laptop Buying Guide 2025: Choose the Perfect Gaming Machine",
        excerpt: "Master the art of choosing the perfect gaming laptop with our comprehensive guide.",
        image: "./assets/images/laptop_test/blog1.webp",
        imageScale: 1.0,
        imagePositioning: {
            objectPosition: 'center',
            objectFit: 'cover'
        },
        link: "./blogpost1.html",
        category: "Buying Guide",
        date: "December 10, 2024"
    },
    {
        title: "Gaming Laptop Cooling Systems: Thermal Management Guide 2025",
        excerpt: "Master gaming laptop cooling with our comprehensive thermal management guide.",
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
class BlogPost2Manager {
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
        console.log('✅ Blog Post 2 content system loaded');
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
const blogPost2Manager = new BlogPost2Manager();

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        BLOGPOST_META,
        ARTICLE_CONTENT,
        CTA_CONTENT,
        RELATED_POSTS,
        BlogPost2Manager
    };
}

console.log('🎯 Blog Post 2 configuration loaded successfully');
