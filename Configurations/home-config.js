/**
 * HOME PAGE CONFIGURATION
 * Dynamic home page settings for animations, ads, videos, and content sections
 */

// ========== PAGE TITLE CONFIGURATION ==========
const HOME_PAGE_TITLE = "Home | {{BRAND_NAME}}";     // ← Home page browser tab title

const HOME_CONFIG = {
    // Hero Section Configuration
    hero: {
        enabled: true,
        title: "Top 10 Gaming Laptops 2025",
        subtitle: "Expert Reviews & Comprehensive Rankings",
        description: "Discover the most powerful gaming laptops with our detailed reviews, performance analysis, and exclusive deals. From MacBook Pro M4 Max to ASUS ROG - find your perfect gaming machine.",
        ctaButton: {
            text: "View Our Top 10 Gaming Laptops",
            link: "index.html",
            icon: "fas fa-laptop"
        },
        backgroundType: "animated", // "static", "video", "animated"
        backgroundConfig: {
            animationType: "matrix", // "crypto-rain", "floating-coins", "matrix", "particles"
            primaryColor: "var(--primary-color)",
            secondaryColor: "var(--secondary-color)",
            intensity: "medium" // "low", "medium", "high"
        },
        imageBox: {
            enabled: true,
            position: "bottom", // "left", "right", "center", "top", "bottom"
            layout: "stacked", // "side-by-side", "stacked", "overlay"
            image: {
                src: "assets/images/laptop_test/laptop_guy.png", // Path to your image
                alt: "Top Gaming Laptop Experience",
                placeholder: "💻", // Emoji or icon if image fails to load
                aspectRatio: "16:9", // "1:1", "4:3", "16:9", "21:9", "auto"
                objectFit: "contain" // "cover", "contain", "fill", "scale-down"
            },
            styling: {
                borderRadius: "20px",
                shadow: "large", // "none", "small", "medium", "large", "glow"
                border: "none", // "none", "thin", "medium", "thick", "gradient"
                animation: "float", // "none", "float", "pulse", "glow", "zoom"
                overlay: "none" // "none", "dark", "light", "gradient", "color"
            },
            size: {
                width: "1000px", // CSS width value
                height: "600px", // CSS height value or "auto"
                maxWidth: "45%", // Maximum width as percentage of container
                minWidth: "800px" // Minimum width
            }
        }
    },

    // Scroll-triggered sections
    scrollSections: {
        enabled: true,
        sections: [
            {
                id: "section-1",
                trigger: 200, // pixels scrolled
                backgroundType: "gradient", // Changed from image to gradient
                backgroundValue: "linear-gradient(135deg, #1f2937, #374151)", // Dark gradient
                title: "Powerful Performance",
                description: "Experience cutting-edge processors and graphics for demanding workflows",
                animation: "fade-slide-left",
                icon: "fas fa-microchip"
            },
            {
                id: "section-2", 
                trigger: 600,
                backgroundType: "gradient",
                backgroundValue: "linear-gradient(135deg, #065f46, #047857)", // Green gradient
                title: "Stunning Displays",
                description: "Crystal-clear screens with high refresh rates and accurate color reproduction",
                animation: "fade-slide-right",
                icon: "fas fa-tv"
            },
            {
                id: "section-3",
                trigger: 1000,
                backgroundType: "gradient",
                backgroundValue: "linear-gradient(135deg, #7c2d12, #9a3412)", // Orange gradient
                title: "All-Day Battery",
                description: "Long-lasting battery life to keep you productive throughout your day",
                animation: "fade-slide-up",
                icon: "fas fa-battery-full"
            }
        ]
    },

    // Video sections
    videoSections: [
        {
            enabled: true,
            title: "How to Choose the Perfect Gaming Laptop",
            description: "Learn the key factors when selecting a gaming laptop. Discover how CPU, GPU, and display specifications impact your gaming and productivity experience.",
            videoUrl: "./assets/videos/laptop_test/laptop_loop1.mp4", // Local video file path
            externalUrl: "https://youtube.com/watch?v=example1", // External URL (YouTube, etc.) - opens in new tab when clicked
            displayType: "video", // "video" or "thumbnail" - choose how to display
            thumbnailImage: "./assets/images/casino_test/casino18.jpg", // Thumbnail image if displayType is "thumbnail"
            placeholder: "🎥 Laptop Buying Guide Video - Add your video URL in home-config.js",
            autoplay: true,
            loop: true, // ← NEW: Video will loop continuously
            muted: true, // Recommended for autoplay to work in browsers
            controls: true, // Show video controls
            clickAction: "external", // "none", "external", "fullscreen" - what happens when video/thumbnail is clicked
            position: "left" // "left", "right", "center"
        },
        {
            enabled: true,
            title: "Gaming Laptop Performance Tests", 
            description: "See real-world performance benchmarks and gaming tests. Learn about frame rates, thermal management, and optimization techniques for maximum performance.",
            videoUrl: "./assets/videos/laptop_test/laptop_loop2.mp4", // Local video file path
            externalUrl: "https://youtube.com/watch?v=example2", // External URL (YouTube, etc.) - opens in new tab when clicked
            displayType: "video", // "video" or "thumbnail" - choose how to display
            thumbnailImage: "./assets/images/casino_test/casino16.webp", // Thumbnail image if displayType is "thumbnail"
            placeholder: "🎯 Performance Testing Video - Add your video URL in home-config.js",
            autoplay: true,
            loop: true, // ← NEW: Video will loop continuously
            muted: true, // Recommended for autoplay to work in browsers
            controls: true, // Show video controls
            clickAction: "external", // "none", "external", "fullscreen" - what happens when video/thumbnail is clicked
            position: "right"
        }
    ],



    // Animated ad sections
    adSections: [
        {
            enabled: true,
            type: "banner", // "banner", "card", "popup", "floating"
            title: "💻 MacBook Pro M4 Max Deal!",
            subtitle: "Save $300 + Free AppleCare+",
            description: "Limited time offer on our #1 ranked gaming laptop",
            ctaText: "Get MacBook Deal",
            ctaLink: "https://www.apple.com/uk/macbook-pro/",
            animation: "pulse-glow-slide", // Enhanced animation
            backgroundType: "animated-gradient", // Enhanced background
            backgroundConfig: {
                gradient: "linear-gradient(45deg, var(--primary-color), var(--secondary-color), var(--accent-color))",
                animationStyle: "moving-gradient", // Moving gradient effect
                animatedBg: "floating-coins"
            },
            position: "center",
            size: "large", // "small", "medium", "large"
            movingElements: {
                enabled: true,
                coins: true,
                sparkles: true,
                glow: true
            }
        },
        {
            enabled: true,
            type: "card",
            title: "🚀 Dell XPS 15 Plus - Most Popular",
            subtitle: "Premium Design Meets Performance", 
            description: "Experience the most popular premium laptop with stunning 4K+ OLED display",
            ctaText: "Shop Dell XPS",
            ctaLink: "https://www.dell.com/en-uk/shop/dell-laptops/scr/laptops/appref=xps-product-line",
            animation: "hover-lift-glow-shake", // Enhanced animation
            backgroundType: "animated-pattern",
            backgroundConfig: {
                pattern: "crypto-circuit", // Animated circuit pattern
                overlay: "rgba(0,0,0,0.2)",
                animationSpeed: "medium"
            },
            position: "right",
            size: "medium",
            movingElements: {
                enabled: true,
                circuit: true,
                particles: true,
                border: true
            }
        },
        {
            enabled: true,
            type: "card",
            title: "💎 ASUS ROG Zephyrus - Best Gaming",
            subtitle: "Ultimate Gaming Performance",
            description: "Enjoy the most powerful gaming laptop with 18-inch 240Hz display and RTX 4080",
            ctaText: "Shop ASUS ROG",
            ctaLink: "https://www.asus.com/uk/laptops/for-gaming/all-series/filter?SubSeries=ROG-Zephyrus",
            animation: "bounce-glow-rotate", // New bouncing animation
            backgroundType: "animated-gradient",
            backgroundConfig: {
                gradient: "linear-gradient(135deg, #ffd700, #ff6b35, #e63946)",
                animationStyle: "rotating-gradient",
                sparkleEffect: true
            },
            position: "left",
            size: "medium",
            movingElements: {
                enabled: true,
                diamonds: true,
                sparkles: true,
                shine: true
            }
        }
    ],

    // Tech-themed animations
    cryptoAnimations: {
        enabled: true,
        animations: [
            {
                name: "floating-icons",
                elements: ["laptop", "microchip", "memory", "battery"],
                count: 15,
                speed: "slow",
                direction: "up"
            },
            {
                name: "matrix-rain", 
                characters: ["💻", "⚡", "🖥️", "🔋", "⚙️", "📱"], //crypto symbols: ₿, Ξ, Ł, Ð, ₳, ○, ◊, △, ฿, ₮, ɱ, ꜩ, Ƀ
                density: "medium",
                speed: "medium",
                color: "var(--primary-color)"
            },
            {
                name: "particle-network",
                particleCount: 50,
                connectionDistance: 100,
                speed: "slow",
                color: "var(--accent-color)"
            }
        ]
    },

    // Interactive elements
    interactiveElements: {
        enabled: true,
        elements: [
            {
                type: "floating-cta",
                text: "🎯 Find Your Perfect Laptop",
                link: "index.html",
                position: "bottom-right",
                animation: "bounce-fade",
                showAfterScroll: 300
            },
            {
                type: "scroll-progress",
                style: "crypto-themed",
                color: "var(--primary-color)",
                position: "top"
            }
        ]
    },

    // Page-specific settings
    pageSettings: {
        fadeInOnLoad: true,
        smoothScrolling: true,
        parallaxEnabled: true,
        lazyLoadImages: true,
        animationSpeed: "medium", // "slow", "medium", "fast"
        mobileOptimized: true
    }
};

/**
 * HOME PAGE TITLE MANAGER
 * Handles browser tab title for home page
 */
class HomePageManager {
    constructor() {
        this.init();
    }
    
    init() {
        // Wait for DOM to be ready and add a small delay to ensure all configs are loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setTimeout(() => this.applyPageTitle(), 100);
            });
        } else {
            setTimeout(() => this.applyPageTitle(), 100);
        }
    }
    
    /**
     * Apply page title to browser tab
     */
    applyPageTitle() {
        // Only apply home page title if we're actually on the home page
        const currentPage = window.location.pathname.toLowerCase();
        const isHomePage = currentPage.includes('home.html') || currentPage.includes('home');
        
        if (!isHomePage) {
            return; // Don't apply home title to other pages
        }
        
        const title = document.querySelector('title');
        if (title) {
            // Replace {{BRAND_NAME}} with actual brand name
            let pageTitle = HOME_PAGE_TITLE;
            
            // Try to get brand name from brand-config.js
            if (typeof window.BRAND_NAME !== 'undefined') {
                pageTitle = pageTitle.replace('{{BRAND_NAME}}', window.BRAND_NAME);
            } else if (typeof window.BrandManager !== 'undefined') {
                const brandConfig = window.BrandManager.get();
                pageTitle = pageTitle.replace('{{BRAND_NAME}}', brandConfig.text.name);
            } else {
                // Fallback to default brand name
                pageTitle = pageTitle.replace('{{BRAND_NAME}}', 'DC\'s Top 10');
            }
            
            title.textContent = pageTitle;
        }
    }
}

// Export for use in other files
if (typeof window !== 'undefined') {
    window.HOME_CONFIG = HOME_CONFIG;
    window.HOME_PAGE_TITLE = HOME_PAGE_TITLE;
    window.HomePageManager = HomePageManager;
    
    // Auto-initialize page title manager
    new HomePageManager();
    
    console.log('✅ HOME_CONFIG loaded successfully:', HOME_CONFIG);
    console.log('📊 Config sections available:', Object.keys(HOME_CONFIG));
} else {
    console.log('⚠️ Window object not available');
}

// Export for Node.js environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        HOME_CONFIG,
        HOME_PAGE_TITLE
    };
} 