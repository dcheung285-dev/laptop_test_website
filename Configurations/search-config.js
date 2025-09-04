/**
 * UNIFIED SEARCH CONFIGURATION
 * This file contains ALL searchable content from ALL pages
 * Loaded on every page to enable comprehensive search functionality
 */

// ==========================================
// SEARCH DATABASE - ALL WEBSITE CONTENT
// ==========================================

window.SEARCH_DATABASE = {
    
    // Products from main page
    products: [
        {
            title: "Apple MacBook Pro M4 Max",
            description: "Our #1 Editor's Pick - The MacBook Pro M4 Max stands out with exceptional performance, stunning Liquid Retina XDR display, and industry-leading battery life. Its M4 Max chip delivers unmatched power for creative professionals.",
            icon: "💻",
            url: "index.html#editors-choice-review",
            keywords: ["macbook", "pro", "apple", "m4", "max", "editor", "choice", "best", "top", "pick", "performance", "display", "battery", "creative", "professional"]
        },
        {
            title: "Acer Zenbook Pro 14 OLED",
            description: "OLED 14-inch laptop with stunning design, powerful Intel Core i9 performance, and gorgeous 4K+ OLED display. Perfect for professionals who value both aesthetics and performance.",
            icon: "💻",
            url: "index.html#review-1",
            keywords: ["acer", "zenbook", "pro", "14", "oled", "premium", "intel", "core", "i9", "oled", "display", "professional", "design", "performance"]
        },
        {
            title: "Dell XPS 15 Plus",
            description: "Premium laptop with stunning design, powerful Intel Core i9 performance, and gorgeous 4K+ OLED display. Perfect for professionals who value both aesthetics and performance.",
            icon: "💻",
            url: "index.html#review-2",
            keywords: ["dell", "xps", "15", "plus", "premium", "intel", "core", "i9", "oled", "display", "professional", "design", "performance"]
        },
        {
            title: "Microsoft Surface Laptop Studio 2", 
            description: "Versatile creative powerhouse with unique PixelSense Flow display, Intel Core i7 performance, and innovative 3-in-1 design perfect for digital artists.",
            icon: "💻",
            url: "index.html#review-2",
            keywords: ["microsoft", "surface", "laptop", "studio", "creative", "pixelsense", "intel", "i7", "3-in-1", "digital", "artists", "versatile"]
        },
        {
            title: "Lenovo ThinkPad X1 Carbon Gen 13",
            description: "Legendary business laptop with exceptional keyboard, MIL-STD-810H durability, and reliable Intel Core i7 performance. The gold standard for business professionals.",
            icon: "💻",
            url: "index.html#review-3", 
            keywords: ["lenovo", "thinkpad", "x1", "carbon", "business", "keyboard", "durability", "intel", "i7", "professional", "reliable"]
        },
        {
            title: "ASUS ROG Zephyrus G18",
            description: "Ultimate gaming powerhouse with massive 18-inch 240Hz display, AMD Ryzen 9 processor, and RTX 4080 graphics. Built for serious gamers who demand desktop-class performance.",
            icon: "💻",
            url: "index.html#review-4",
            keywords: ["asus", "rog", "zephyrus", "g18", "gaming", "240hz", "amd", "ryzen", "9", "rtx", "4080", "graphics", "desktop", "performance"]
        },
        {
            title: "HP Spectre x360 14",
            description: "Versatile 2-in-1 convertible with Intel Core i7 performance, stunning OLED display, and excellent 15-hour battery life. Perfect for professionals who need flexibility.",
            icon: "💻",
            url: "index.html#review-5",
            keywords: ["hp", "spectre", "x360", "2-in-1", "convertible", "intel", "i7", "oled", "display", "battery", "professional", "flexible"]
        },
        {
            title: "Razer Blade 16",
            description: "Premium gaming laptop with Intel Core i9, RTX 4090 graphics, and stunning Mini LED 4K display. The ultimate choice for premium gaming performance.",
            icon: "💻",
            url: "index.html#review-6",
            keywords: ["razer", "blade", "16", "premium", "gaming", "intel", "i9", "rtx", "4090", "mini", "led", "4k", "display", "performance"]
        },
        {
            title: "Acer Swift Edge 3",
            description: "Budget-friendly laptop with AMD Ryzen 7, stunning 16-inch OLED display, and lightweight design. Exceptional value with premium features at an affordable price.",
            icon: "💻",
            url: "index.html#review-7",
            keywords: ["acer", "swift", "edge", "budget", "amd", "ryzen", "7", "oled", "16-inch", "lightweight", "value", "affordable", "premium"]
        },
        {
            title: "Samsung Galaxy Book 4 Ultra",
            description: "Premium laptop with seamless Samsung ecosystem integration, Intel Core i7 performance, and gorgeous AMOLED display. Perfect for Samsung users.",
            icon: "💻",
            url: "index.html#review-8",
            keywords: ["samsung", "galaxy", "book", "ultra", "ecosystem", "integration", "intel", "i7", "amoled", "display", "samsung", "users"]
        },
        {
            title: "LG Gram 17",
            description: "Ultra-portable 17-inch laptop weighing just 2.98 pounds with incredible 20-hour battery life. The most portable large-screen laptop available.",
            icon: "💻",
            url: "index.html#review-9",
            keywords: ["lg", "gram", "17", "portable", "lightweight", "2.98", "pounds", "20-hour", "battery", "large", "screen", "portable"]
        }
    ],

    // Blog posts and guides
    blog: [
        {
            title: "Blog - Latest Gaming Laptop News",
            description: "Stay updated with the latest developments in gaming laptops, new product launches, and industry trends on our main blog page.",
            icon: "📰",
            url: "blog.html",
            keywords: ["blog", "news", "gaming", "laptop", "technology", "developments", "launches", "trends", "updates", "industry", "articles", "posts"]
        },
        {
            title: "Blog Post - MacBook Pro M4 Max Review",
            description: "Comprehensive review of the MacBook Pro M4 Max covering performance, display quality, battery life, and creative workflow capabilities.",
            icon: "📰",
            url: "blogpost1.html",
            keywords: ["blog", "post", "macbook", "pro", "m4", "max", "review", "performance", "display", "battery", "creative", "workflow"]
        },
        {
            title: "Blog Post - Dell XPS 15 Plus Review",
            description: "In-depth review of the Dell XPS 15 Plus covering premium design, OLED display, Intel performance, and professional use cases.",
            icon: "📰", 
            url: "blogpost2.html",
            keywords: ["blog", "post", "dell", "xps", "15", "plus", "review", "premium", "design", "oled", "intel", "professional"]
        },
        {
            title: "Blog Post - Gaming Laptop Buying Guide",
            description: "Complete guide to choosing the perfect gaming laptop covering CPU, GPU, display, battery, and performance considerations.",
            icon: "📰",
            url: "blogpost3.html", 
            keywords: ["blog", "post", "gaming", "laptop", "buying", "guide", "cpu", "gpu", "display", "battery", "performance", "considerations"]
        }
    ],

    // Streaming content
    streaming: [
        {
            title: "YouTube - Gaming Laptop Reviews",
            description: "Watch detailed gaming laptop reviews, benchmarks, and performance testing on our YouTube channel.",
            icon: "📺",
            url: "streaming.html",
            keywords: ["youtube", "streaming", "gaming", "laptop", "reviews", "benchmarks", "performance", "testing", "video"]
        },
        {
            title: "Twitch - Live Hardware Testing", 
            description: "Follow our live gaming laptop testing streams on Twitch with real-time benchmarks and community interaction.",
            icon: "🎮",
            url: "streaming.html",
            keywords: ["twitch", "live", "hardware", "testing", "streams", "benchmarks", "community", "interaction", "real-time"]
        },
        {
            title: "X (Twitter) - Daily Laptop News",
            description: "Get daily gaming laptop news, deal alerts, and quick updates on our X (Twitter) account.",
            icon: "🐦",
            url: "streaming.html", 
            keywords: ["twitter", "x", "daily", "updates", "news", "deal", "alerts", "gaming", "laptop", "social"]
        },
        {
            title: "Hardware Deep Dives",
            description: "In-depth hardware analysis including GPU comparisons, memory testing, and thermal performance.",
            icon: "🔧",
            url: "streaming.html",
            keywords: ["hardware", "deep", "dives", "analysis", "gpu", "comparisons", "memory", "testing", "thermal", "performance"]
        },
        {
            title: "Gaming Performance Streams",
            description: "Live gaming benchmarks across different titles testing RTX performance, ray tracing, and FPS.",
            icon: "🎯",
            url: "streaming.html",
            keywords: ["gaming", "performance", "streams", "benchmarks", "rtx", "ray", "tracing", "fps", "testing"]
        }
    ],

    // Podcast content
    podcasts: [
        {
            title: "Gaming Laptop Tech Interviews",
            description: "In-depth audio interviews with gaming laptop manufacturers, hardware developers, and tech innovators.",
            icon: "🎧",
            url: "podcast.html",
            keywords: ["podcast", "gaming", "laptop", "tech", "interviews", "manufacturers", "hardware", "developers", "innovators", "audio"]
        },
        {
            title: "Laptop Tech Deep Dive Podcast",
            description: "Weekly podcast covering latest innovations, benchmarks, and trends in gaming laptop technology.",
            icon: "📻",
            url: "podcast.html", 
            keywords: ["podcast", "laptop", "tech", "deep", "dive", "weekly", "innovations", "benchmarks", "trends", "technology"]
        },
        {
            title: "Gaming Laptop News Podcast",
            description: "Stay updated with the latest gaming laptop releases, reviews, and industry news in weekly summaries.",
            icon: "🎤",
            url: "podcast.html",
            keywords: ["podcast", "gaming", "laptop", "news", "releases", "reviews", "industry", "weekly", "summaries", "updates"]
        },
        {
            title: "Hardware Expert Interview Series",
            description: "Exclusive interviews with CPU designers, GPU engineers, and gaming laptop industry leaders.",
            icon: "🎙️",
            url: "podcast.html",
            keywords: ["podcast", "hardware", "expert", "interview", "series", "cpu", "gpu", "engineers", "gaming", "laptop", "leaders"]
        }
    ],

    // FAQ and support
    faq: [
        {
            title: "How do you test gaming laptops?",
            description: "Learn about our comprehensive testing methodology including benchmarks, thermal testing, and real-world performance evaluation.",
            icon: "❓",
            url: "contact.html#faq",
            keywords: ["faq", "test", "gaming", "laptops", "methodology", "benchmarks", "thermal", "performance", "evaluation"]
        },
        {
            title: "What should I look for in a gaming laptop?",
            description: "Essential guide covering GPU, CPU, display, battery life, and cooling considerations for gaming laptops.",
            icon: "🎁",
            url: "contact.html#faq",
            keywords: ["faq", "gaming", "laptop", "gpu", "cpu", "display", "battery", "cooling", "considerations", "guide"]
        },
        {
            title: "Do gaming laptops have good battery life?",
            description: "Information about gaming laptop battery performance, optimization tips, and what to expect from different models.",
            icon: "✅",
            url: "contact.html#faq",
            keywords: ["faq", "gaming", "laptops", "battery", "life", "performance", "optimization", "tips", "models"]
        },
        {
            title: "How much should I spend on a gaming laptop?",
            description: "Budget guide covering different price ranges and what gaming performance you can expect at each level.",
            icon: "⏰",
            url: "contact.html#faq",
            keywords: ["faq", "budget", "spend", "gaming", "laptop", "price", "ranges", "performance", "levels"]
        },
        {
            title: "Are gaming laptops good for work?",
            description: "Overview of using gaming laptops for professional work, creative tasks, and productivity applications.",
            icon: "⚖️",
            url: "contact.html#faq", 
            keywords: ["faq", "gaming", "laptops", "work", "professional", "creative", "tasks", "productivity", "applications"]
        }
    ],

    // Laptop deals and promotions
    deals: [
        {
            title: "MacBook Pro M4 Max - Editor's Choice",
            description: "Our top-rated gaming laptop with exceptional performance, stunning display, and industry-leading battery life.",
            icon: "💰",
            url: "index.html#editors-choice-review",
            keywords: ["macbook", "pro", "m4", "max", "editors", "choice", "top", "rated", "performance", "display", "battery"]
        },
        {
            title: "ASUS ROG Zephyrus - Best Gaming",
            description: "Ultimate gaming powerhouse with 18-inch 240Hz display and RTX 4080 graphics for serious gamers.",
            icon: "🎮",
            url: "index.html#review-4",
            keywords: ["asus", "rog", "zephyrus", "best", "gaming", "240hz", "rtx", "4080", "graphics", "gamers"]
        },
        {
            title: "Acer Swift Edge - Best Budget",
            description: "Exceptional value laptop with premium features at an affordable price point under £900.",
            icon: "🆓",
            url: "index.html#review-7",
            keywords: ["acer", "swift", "edge", "best", "budget", "value", "premium", "affordable", "price", "900"]
        },
        {
            title: "HP Spectre x360 - Best 2-in-1",
            description: "Versatile convertible laptop perfect for professionals who need flexibility and performance.",
            icon: "👑",
            url: "index.html#review-5",
            keywords: ["hp", "spectre", "x360", "best", "2-in-1", "convertible", "professionals", "flexibility", "performance"]
        }
    ],

    // Features and technology
    features: [
        {
            title: "RTX 4090 Graphics Performance",
            description: "Experience cutting-edge gaming with NVIDIA RTX 4090 graphics cards delivering exceptional ray tracing and DLSS performance.",
            icon: "⚡",
            url: "index.html",
            keywords: ["rtx", "4090", "graphics", "performance", "nvidia", "ray", "tracing", "dlss", "gaming", "cutting", "edge"]
        },
        {
            title: "OLED Display Technology",
            description: "Stunning OLED displays with perfect blacks, vibrant colors, and exceptional contrast for immersive gaming.",
            icon: "🔍",
            url: "index.html",
            keywords: ["oled", "display", "technology", "perfect", "blacks", "vibrant", "colors", "contrast", "immersive", "gaming"]
        },
        {
            title: "Advanced Cooling Systems",
            description: "Innovative thermal management with liquid metal, vapor chambers, and advanced fan designs.",
            icon: "❄️",
            url: "index.html",
            keywords: ["advanced", "cooling", "systems", "thermal", "management", "liquid", "metal", "vapor", "chambers", "fans"]
        },
        {
            title: "240Hz High Refresh Displays",
            description: "Ultra-smooth gaming with high refresh rate displays up to 240Hz for competitive gaming advantage.",
            icon: "📱",
            url: "index.html",
            keywords: ["240hz", "high", "refresh", "displays", "smooth", "gaming", "competitive", "advantage", "ultra"]
        },
        {
            title: "Expert Review Process",
            description: "Comprehensive testing and evaluation by our expert team with detailed benchmarks and real-world testing.",
            icon: "🔧",
            url: "contact.html",
            keywords: ["expert", "review", "process", "comprehensive", "testing", "evaluation", "benchmarks", "real", "world"]
        }
    ],

    // Laptop categories
    categories: [
        {
            title: "Gaming Laptops",
            description: "High-performance laptops designed for gaming with powerful GPUs, fast displays, and advanced cooling.",
            icon: "🎮",
            url: "index.html",
            keywords: ["gaming", "laptops", "high", "performance", "gpus", "fast", "displays", "advanced", "cooling", "powerful"]
        },
        {
            title: "Business Laptops",
            description: "Professional laptops optimized for productivity with excellent keyboards, long battery life, and durability.",
            icon: "💼",
            url: "index.html",
            keywords: ["business", "laptops", "professional", "productivity", "keyboards", "battery", "life", "durability", "optimized"]
        },
        {
            title: "Creative Workstations",
            description: "Powerful laptops for content creation with color-accurate displays, high-end CPUs, and ample memory.",
            icon: "🎨",
            url: "index.html",
            keywords: ["creative", "workstations", "content", "creation", "color", "accurate", "displays", "cpus", "memory"]
        },
        {
            title: "Budget Laptops",
            description: "Affordable laptops that don't compromise on quality, offering great value for money with solid performance.",
            icon: "💰",
            url: "index.html",
            keywords: ["budget", "laptops", "affordable", "quality", "value", "money", "solid", "performance", "compromise"]
        },
        {
            title: "2-in-1 Convertibles",
            description: "Versatile laptops that transform into tablets with touchscreens, stylus support, and flexible designs.",
            icon: "🔄",
            url: "index.html", 
            keywords: ["2-in-1", "convertibles", "versatile", "tablets", "touchscreens", "stylus", "support", "flexible", "designs"]
        }
    ],

    // Website pages and sections
    pages: [
        {
            title: "Home - Top 10 Gaming Laptops",
            description: "Main homepage featuring our top-ranked gaming laptops, editor's choice, and comprehensive laptop reviews.",
            icon: "🏠",
            url: "index.html",
            keywords: ["home", "homepage", "main", "top", "10", "gaming", "laptops", "ranked", "editor", "choice", "reviews"]
        },
        {
            title: "Reviews - Detailed Laptop Reviews",
            description: "In-depth reviews of the best gaming laptops with detailed analysis, ratings, and performance comparisons.",
            icon: "⭐",
            url: "index.html#reviews",
            keywords: ["reviews", "detailed", "laptop", "analysis", "ratings", "comparisons", "in-depth", "gaming", "best", "performance"]
        },
        {
            title: "Compare - Laptop Comparison Tool",
            description: "Compare multiple gaming laptops side by side to find the perfect match for your gaming and work needs.",
            icon: "⚖️",
            url: "index.html#comparison",
            keywords: ["compare", "comparison", "tool", "multiple", "gaming", "laptops", "side", "by", "side", "work", "needs"]
        },
        {
            title: "Top 10 - Laptop Rankings",
            description: "Our comprehensive ranking of the top 10 gaming laptops based on performance, value, features, and user experience.",
            icon: "🏆",
            url: "index.html#top10",
            keywords: ["top", "10", "laptop", "rankings", "comprehensive", "performance", "value", "features", "user", "experience"]
        },
        {
            title: "Contact - Get in Touch",
            description: "Contact us for questions, support, or feedback about gaming laptops and our reviews.",
            icon: "📞",
            url: "contact.html",
            keywords: ["contact", "get", "in", "touch", "questions", "support", "feedback", "gaming", "laptops"]
        },
        {
            title: "Streaming - Live Laptop Content",
            description: "Watch live laptop reviews, benchmarks, hardware testing, and educational gaming laptop content.",
            icon: "📺",
            url: "streaming.html",
            keywords: ["streaming", "live", "laptop", "content", "watch", "reviews", "benchmarks", "hardware", "testing", "educational"]
        },
        {
            title: "Podcast - Audio Content",
            description: "Listen to our gaming laptop podcasts featuring reviews, tech news, and expert interviews.",
            icon: "🎧",
            url: "podcast.html",
            keywords: ["podcast", "audio", "content", "listen", "gaming", "laptop", "reviews", "tech", "news", "expert", "interviews"]
        }
    ],

    // Navigation and menu items
/*    navigation: [
        {
            title: "Menu - Site Navigation",
            description: "Access all website sections including laptop reviews, blog, streaming, podcasts, and contact information.",
            icon: "📋",
            url: "#",
            keywords: ["menu", "navigation", "site", "sections", "access", "laptop", "reviews", "blog", "streaming", "podcasts", "contact"]
        },
        {
            title: "Search - Find Content",
            description: "Search across all website content to quickly find laptop reviews, guides, and information.",
            icon: "🔍",
            url: "#",
            keywords: ["search", "find", "content", "quickly", "laptop", "reviews", "guides", "information"]
        }
    ] */
};

// ==========================================
// SEARCH FUNCTIONALITY
// ==========================================

/**
 * Perform comprehensive search across all content
 */
window.performSearch = function(query) {
    if (!query || query.length < 2) return [];
    
    const queryLower = query.toLowerCase();
    const queryWords = queryLower.split(' ').filter(word => word.length > 1);
    const allResults = [];
    
    // Search through all categories
    Object.values(window.SEARCH_DATABASE).forEach(category => {
        if (Array.isArray(category)) {
            category.forEach(item => {
                let score = 0;
                
                // Title matching
                if (item.title.toLowerCase().includes(queryLower)) score += 100;
                
                // Description matching  
                if (item.description.toLowerCase().includes(queryLower)) score += 50;
                
                // Keyword matching
                queryWords.forEach(word => {
                    if (item.title.toLowerCase().includes(word)) score += 20;
                    if (item.description.toLowerCase().includes(word)) score += 10;
                    if (item.keywords.some(keyword => keyword.includes(word))) score += 15;
                    if (item.keywords.includes(word)) score += 25;
                });
                
                // Bonus for title starting with query
                if (item.title.toLowerCase().startsWith(queryLower)) score += 30;
                
                if (score > 0) {
                    allResults.push({
                        ...item,
                        score: score
                    });
                }
            });
        }
    });
    
    // Sort by score (highest first) and return top 20 results
    return allResults
        .sort((a, b) => b.score - a.score)
        .slice(0, 20)
        .map(result => {
            const { score, ...resultWithoutScore } = result;
            return resultWithoutScore;
        });
};

console.log('🔍 Gaming Laptop Search Database loaded with', 
    Object.values(window.SEARCH_DATABASE).reduce((total, category) => 
        total + (Array.isArray(category) ? category.length : 0), 0
    ), 'searchable items');
