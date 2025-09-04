/*
===========================================
AFFILIATE WEBSITE TEMPLATE - CONFIGURATION
===========================================
🎯 CHANGE YOUR MAIN SETTINGS HERE - ONLY EDIT THESE LINES:
*/

// ========== MAIN SETTINGS - EDIT THESE LINES ONLY ==========
const NICHE = "Gaming Laptops";                          // ← Your niche (e.g., "Gaming Laptops", "Coffee Makers")
const PRODUCT_TYPE = "Gaming Laptops";                   // ← Product type eg. "Gaming Laptops"
const AUDIENCE = "Laptop Buyers";                       // ← Target audience eg. "Gamers"
const CONTACT_EMAIL = "contact@laptopworld.com";           // ← Your contact email "eg. contact@yoursite.com"
// const SITE_URL = "{{Site URL}}";                // ← COMMENTED OUT - using smart detection below instead


// 🔧 SMART URL DETECTION (ALTERNATIVE):
// Replace the SITE_URL line above with this code for automatic dev/production switching:

const SITE_URL = (() => {
    // Auto-detect development environment
    if (window.location.hostname === 'localhost' || 
        window.location.hostname === '127.0.0.1' || 
        window.location.hostname.includes('gitpod') ||
        window.location.hostname.includes('codesandbox') ||
        window.location.hostname.includes('stackblitz')) {
        const devUrl = window.location.origin;
        console.log('🔧 Development mode detected - Using URL:', devUrl);
        return devUrl; // Use current development URL
    }
    
    // Production URL - CHANGE THIS to your live domain
    const prodUrl = "https://dctop10x.com";
    console.log('🌍 Production mode detected - Using URL:', prodUrl);
    return prodUrl;
})();


const FAVICON = "./assets/images/laptop_test/tech_icon_logo.png";       // ← Your favicon path (browser tab icon)

// Don't touch INDEX_PAGE_TITLE - it's automatically generated from the settings above
const INDEX_PAGE_TITLE = "Top 10 Gaming Laptops - Best Laptop Reviews 2025"; // ← Homepage browser tab title 

// ========== TRUST INDICATORS - EDIT THESE ==========
const REVIEW_COUNT = "10 million";                      // ← Number of reviews "+"
const USER_COUNT = "1 million";                         // ← Users helped "+"
const LAST_UPDATE = "August 2025";                   // ← Last updated
const NUMBER_TESTED = "1000"                    // ← Products tested "+" this is for the Editor's choice section

// ========== HERO SECTION CONFIGURATION ==========
const HERO_CONFIG = {
    // Hero image settings
    image: {
        src: "./assets/images/laptop_test/laptop_group_pic.webp",  // ← Change this to use different hero image
        alt: "{{PRODUCT_TYPE}} Product Reviews",  // ← Alt text for the hero image (shows what the site reviews)
        fallback: "./assets/images/hero-image.jpg"  // ← Fallback image if main image fails to load
    },
    
    // Optional: Video settings
    video: {
        enabled: false,  // ← Set to true to enable video functionality
        src: "./assets/videos/Monti's_test_video.mp4",        // ← Add your video URL here (MP4, WebM, or OGV)
        type: "video/mp4", // ← Video MIME type (video/mp4, video/webm, video/ogg)
        text: "Watch Our Review Video", // ← Placeholder text when no video URL
        autoplay: false, // ← Set to true for autoplay (not recommended)
        muted: false,    // ← Set to true to start muted
        loop: false,     // ← Set to true to loop video
        poster: "",      // ← Optional: Video poster image URL
        
        // Supported video formats and guidelines:
        // MP4: Best compatibility (recommended) - file.mp4
        // WebM: Good for web, smaller file sizes - file.webm  
        // OGV: Ogg format for Firefox - file.ogv
        // 
        // Video Guidelines:
        // - Recommended size: 1920x1080 (Full HD) or 1280x720 (HD)
        // - Duration: 30-60 seconds for hero videos
        // - File size: Keep under 10MB for good loading speed
        // - Format: MP4 H.264 codec for best compatibility
        // - Add captions/subtitles for accessibility
    }
    
    // HERO IMAGE GUIDELINES:
    // - Should show multiple products grouped together
    // - Represents the product category you review (coffee makers, laptops, etc.)
    // - Builds trust by showing you test multiple products
    // - Recommended size: 800x600px minimum (1200x900px preferred)
    // - Supported formats: .jpg, .webp, .png
    // - Alt text should describe what products you review, not "comparison"
};

// Make HERO_CONFIG globally available
window.HERO_CONFIG = HERO_CONFIG;

// ========== EDITOR'S CHOICE CONFIGURATION ==========
const EDITORS_CHOICE_CONFIG = {
    // =============================================
    // CHOOSE YOUR EDITOR'S CHOICE PRODUCT
    // =============================================
    // Option 1: Use any product from your product list
    // Change this to any product key: 'product1', 'product2', 'product3', etc.
    selectedProduct: 'product2',  // ← CHANGE THIS LINE TO SWITCH PRODUCTS
    
    // =============================================
    // EDITOR'S CHOICE BADGE CONFIGURATION
    // =============================================
    badgeSettings: {
        // For product cards: add editor's choice badge next to existing badge
        addToProductCard: true,              // ← Show "EDITOR'S CHOICE" badge on product cards
        replaceProductBadge: false,          // ← Replace product badge with editor's choice badge (set true to replace, false to show both)
        
        // Badge text and styling
        badgeText: "EDITOR'S CHOICE",        // ← Text for the editor's choice badge
        badgeIcon: "fas fa-crown"            // ← Icon for the editor's choice badge
    },
    
    // Option 2: Manual override (set useManualOverride to true)
    useManualOverride: true,     // ← Set to true to use manual data below instead of product data
    
    // Manual override data (only used if useManualOverride is true)
    manualOverride: {
        name: "Apple MacBook Pro M4 Max",
        
        // =============================================
        // TITLE DISPLAY CONFIGURATION
        // =============================================
        titleDisplay: {
            type: 'combined',                    // ← 'text', 'image', or 'combined'
            logoImage: './assets/images/laptop_test/apple_logo.png', // ← Logo image path
            logoScale: 2.0,                  // ← Logo scaling (1.0 = 100%, 1.5 = 150%, etc.)
            logoAlt: 'Apple MacBook Pro Logo', // ← Alt text for logo
            gap: '24px'                      // ← Gap between logo and text in combined mode (e.g., '24px', '-10px', '2rem', '-50px' for overlapping)
        },
        description: "Our #1 Editor's Pick - The MacBook Pro M4 Max stands out with exceptional performance, stunning Liquid Retina XDR display, and industry-leading battery life. Its M4 Max chip delivers unmatched power for creative professionals.",
        productLogo: "./assets/images/laptop_test/apple_logo_black_text.png",
        productImage: "./assets/images/laptop_test/macbook-pro.jpg",
        rating: 4.9,
        reviewCount: 2547,

        // =============================================
        // RANK BADGE DISPLAY SETTINGS
        // =============================================
        badgeSettings: {
            showOnProductCard: true,     // ← Show/hide rank badge on product cards (true/false)
            showOnDetailedReview: true   // ← Show/hide rank badge on detailed review cards (true/false)
        },
        
        // ========== UNIVERSAL TEMPLATE FIELDS ==========
        // Physical Products (default)
        price: "£3,999",
        originalPrice: "£4,299",
        discount: "7% OFF",
        
        // Casino Websites
        welcomeBonus: "Free AppleCare+ for 1 Year",
        welcomePackage: "M4 Max + 32GB RAM + 1TB SSD",
        addedBonus: "21-Hour Battery Life",
        
        // Sports Betting
        signupBonus: "£100 Free Bet",
        oddsBoost: "50% Odds Boost",
        freeBet: "£25 Risk-Free Bet",
        
        // Software/SaaS
        monthlyPrice: "£166/month",
        yearlyPrice: "£1,999/year",
        trialPeriod: "14-day free trial",
        
        affiliateLink: "https://www.apple.com/uk/shop/buy-mac/macbook-pro/14-inch-m4-max",
        ctaText: "Buy Now",
        
        /*
        logoScale: {
            grid: 1.0,  // Scale for grid view (1.0 = 100%, 1.2 = 120%, etc.)
            list: 1.0   // Scale for list view
        }, */
        
        // Product image scaling settings for product cards
        imageScale: {
            grid: 1.0,       // Scale for product image in grid view
            list: 1.0        // Scale for product image in list view
        },
        
        // Product image positioning settings for product cards
        imagePositioning: {
            grid: {
                objectPosition: 'center',  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'cover'         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Logo positioning settings for product cards
        logoPositioning: {
            grid: {
                left: '0px',     // Horizontal positioning for grid view
                top: '0px'       // Vertical positioning for grid view
            },
            list: {
                left: '0px',     // Horizontal positioning for list view
                top: '0px'       // Vertical positioning for list view
            }
        },
        
        // Detailed review scaling settings
        detailedReviewScale: {
            productImage: 1.0,  // Scale for product image in detailed reviews
            productLogo: 2.0    // Scale for product logo in detailed reviews
        },
        
        // Detailed review positioning settings
        detailedReviewPositioning: {
            productLogo: {
                left: '0px',     // Horizontal positioning for detailed review logo
                top: '-0.5rem'       // Vertical positioning for detailed review logo
            },
            productImage: {
                left: '0px',           // Horizontal positioning for detailed review image
                top: '0px',            // Vertical positioning for detailed review image
                objectPosition: 'top left', // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'fill'     // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Product ranking and affiliate data
        rank: "1st",
        rankBadge: "EDITOR'S PICK",

        // CTA section configuration for detailed reviews
        cta: {
            title: "Get the Ultimate Creative Powerhouse!",
            description: "Experience unmatched performance with the M4 Max MacBook Pro!",
            boxInfo: "Best laptop for creative professionals - unmatched performance and battery life!",
            // CTA box display controls
            display: {
                showTitle: false,        // Show/hide CTA title
                showDescription: false,  // Show/hide CTA description  
                showBoxInfo: false,      // Show/hide additional box info
                showPricingInfo: true   // Show/hide pricing info section
            }
        },
        
        // Features for product cards (short list) - LAPTOP FEATURES
        features: [
            { text: "M4 Max 16-Core CPU", icon: "fas fa-microchip" },
            { text: "40-Core GPU Performance", icon: "fas fa-desktop" },
            { text: "16-inch Liquid Retina XDR", icon: "fas fa-tv" },
            { text: "21-Hour Battery Life", icon: "fas fa-battery-full" },
            { text: "32GB Unified Memory", icon: "fas fa-memory" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "The ultimate creative powerhouse with groundbreaking M4 Max performance",
            paragraphs: [
                "The MacBook Pro M4 Max represents the pinnacle of laptop technology. After extensive testing, we've confirmed this laptop offers performance that surpasses any other laptop in its class, making it our clear Editor's Choice.",
                "What makes this MacBook truly exceptional is its revolutionary M4 Max chip with 16-core CPU and 40-core GPU, delivering unprecedented performance for video editing, 3D rendering, and creative workflows that professionals demand.",
                "Our comprehensive testing confirmed the MacBook Pro M4 Max delivers unmatched performance, exceptional build quality, and industry-leading 21-hour battery life that exceeds all expectations for a high-performance laptop."
            ]
        },
        
        // Perks for product cards and detailed reviews - LAPTOP PERKS
        perks: [
            { text: "M4 Max Chip Performance", icon: "fas fa-rocket" },
            { text: "Premium Aluminum Build", icon: "fas fa-shield-alt" },
            { text: "Liquid Retina XDR Display", icon: "fas fa-tv" },
            { text: "21-Hour Battery Life", icon: "fas fa-battery-full" },
            { text: "Thunderbolt 5 Ports", icon: "fas fa-bolt" },
            { text: "Studio-Quality Mics", icon: "fas fa-microphone" },
            { text: "1080p FaceTime Camera", icon: "fas fa-camera" },
            { text: "AppleCare+ Available", icon: "fas fa-headset" }
        ],
        
        // Technical specifications - LAPTOP SPECS
        specifications: [
            { name: "Processor", value: "Apple M4 Max (16-core CPU, 40-core GPU)", icon: "fas fa-microchip" },
            { name: "Memory", value: "32GB unified memory, up to 128GB available", icon: "fas fa-memory" },
            { name: "Storage", value: "1TB SSD, configurable up to 8TB", icon: "fas fa-hdd" },
            { name: "Display", value: "16-inch Liquid Retina XDR, 120Hz ProMotion", icon: "fas fa-tv" },
            { name: "Battery", value: "100Wh lithium-polymer, up to 21 hours", icon: "fas fa-battery-full" },
            { name: "Connectivity", value: "Thunderbolt 5, HDMI, MagSafe 3, Wi-Fi 7", icon: "fas fa-wifi" }
        ]
    }
    
    // =============================================
    // HOW THE SYSTEM WORKS:
    // =============================================
    // 1. PRODUCT SELECTION: If useManualOverride = false, the system uses 
    //    the product specified in selectedProduct (e.g., 'product2')
    //    
    // 2. MANUAL OVERRIDE: If useManualOverride = true, the system uses
    //    the custom data from manualOverride object
    //    
    // 3. GOLD STYLING: The selected product gets gold gradient styling
    //    that overrides any theme, making it stand out as editor's choice
    //    
    // 4. SMART SCROLLING: The "Read Full Review" button automatically
    //    scrolls to the correct review section:
    //    - For product selection: scrolls to that product's review
    //    - For manual override: scrolls to special editor's choice review
    //    
    // 5. DYNAMIC REVIEW CARDS: If manual override is used, a special
    //    gold-themed review card is created automatically
    //    
    // EXAMPLES:
    // - selectedProduct: 'product1' → Uses product1 data, scrolls to review-1
    // - selectedProduct: 'product8' → Uses product8 data, scrolls to review-8  
    // - useManualOverride: true → Uses custom data, creates special review card
};

// Make EDITORS_CHOICE_CONFIG globally available
window.EDITORS_CHOICE_CONFIG = EDITORS_CHOICE_CONFIG;

// ========== PRODUCT DATA CONFIGURATION ==========
const PRODUCTS_CONFIG = {
    // Product 1 Configuration - #1 Ranked Gaming Laptop - ASUS ZenBook Pro 14 OLED
    product1: {
        name: "ASUS ZenBook Pro 14 OLED",
        description: "The ZenBook Pro 14 OLED combines Intel Core i9 performance with a stunning 14.5-inch OLED touchscreen, delivering exceptional creative power in an ultra-portable design.",
        productLogo: "./assets/images/laptop_test/ASUS_logo_white.png",     // Product logo for content area
        productImage: "./assets/images/laptop_test/ASUS_ZenBook_Pro_14_OLED.png",          // Main product image for grid view and reviews
        logoScale: {
            grid: 2.0,    // Scale for grid view (1.0 = 100%, 1.2 = 120%, etc.)
            list: 1.5,    // Scale for list view
            tablet: {
                grid: 1.5,  // Scale for tablet grid view
                list: 1.0   // Scale for tablet list view
            }
        },
        
        // Product image scaling settings for product cards
        imageScale: {
            grid: 1.0,       // Scale for product image in grid view
            list: 1.0        // Scale for product image in list view
        },
        
        // Product image positioning settings for product cards
        imagePositioning: {
            grid: {
                objectPosition: 'center',  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'cover'         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Logo positioning settings for product cards
        logoPositioning: {
            grid: {
                left: '0px',     // Horizontal positioning for grid view
                top: '0px'       // Vertical positioning for grid view
            },
            list: {
                left: '0px',     // Horizontal positioning for list view
                top: '0px'       // Vertical positioning for list view
            }
        },
        
        // Detailed review scaling settings
        detailedReviewScale: {
            productImage: 1.0,  // Scale for product image in detailed reviews
            productLogo: 2.0    // Scale for product logo in detailed reviews
        },
        
        // Detailed review positioning settings
        detailedReviewPositioning: {
            productLogo: {
                left: '0px',     // Horizontal positioning for detailed review logo
                top: '-0.5rem'   // Vertical positioning for detailed review logo
            },
            productImage: {
                left: '0px',           // Horizontal positioning for detailed review image
                top: '0px',            // Vertical positioning for detailed review image
                objectPosition: 'center', // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'cover'     // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Product ranking and affiliate data
        rank: 1,
        rankBadge: "TOP RATED",
        rating: 4.8,
        reviewCount: 3156,
        
        // =============================================
        // RANK BADGE DISPLAY SETTINGS
        // =============================================
        badgeSettings: {
            showOnProductCard: true,     // ← Show/hide rank badge on product cards (true/false)
            showOnDetailedReview: true   // ← Show/hide rank badge on detailed review cards (true/false)
        },
        
        // ========== UNIVERSAL TEMPLATE FIELDS ==========
        // Physical Products (default)
        price: "£2,299",
        originalPrice: "£2,699",
        discount: "15% OFF",
        
        // Casino Websites
        welcomeBonus: "Free ASUS Pen 2.0 Included",
        welcomePackage: "Intel Core i9 + 32GB RAM + 1TB SSD",
        addedBonus: "14.5-inch OLED Touchscreen",
        
        // Sports Betting
        signupBonus: "£100 Free Bet",
        oddsBoost: "50% Odds Boost",
        freeBet: "£25 Risk-Free Bet",
        
        // Software/SaaS
        monthlyPrice: "£29/month",
        yearlyPrice: "£290/year",
        trialPeriod: "30-day free trial",
        
        // Streaming Services
        // monthlyPrice: "£12.99/month", (same as SaaS)
        // trialPeriod: "7-day free trial", (same as SaaS)
        contentHighlight: "4K Ultra HD + HDR",
        
        // VPN Services
        // monthlyPrice: "£9.99/month", (same as SaaS)
        serverCount: "5000+ Servers",
        speedInfo: "10Gbps Speed",
        
        // Crypto Exchanges
        tradingFee: "0.1% Trading Fee",
        supportedCoins: "500+ Coins",
        securityRating: "A+ Security",
        
        // Web Hosting
        // monthlyPrice: "£5.99/month", (same as SaaS)
        storage: "100GB SSD",
        uptime: "99.9% Uptime",
        
        // Restaurants
        priceRange: "£15-25 per person",
        cuisineType: "Italian Fine Dining",
        specialOffer: "Happy Hour 4-6pm",
        
        // Hotels/Travel
        roomRate: "£150/night",
        amenities: "Pool, Spa, Gym",
        locationScore: "Prime Downtown",
        
        affiliateLink: "https://www.asus.com/uk/laptops/for-creators/zenbook/zenbook-pro-14-oled-ux6404/",
        ctaText: "Buy Now", // This will be overridden by template config if needed
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Creative Powerhouse Awaits!",
            description: "Experience stunning OLED visuals and powerful performance with the ZenBook Pro 14 OLED!",
            boxInfo: "Free ASUS Pen 2.0 included - Perfect for creative professionals!",
            // CTA box display controls
            display: {
                showTitle: false,        // Show/hide CTA title
                showDescription: false,  // Show/hide CTA description  
                showBoxInfo: false,      // Show/hide additional box info
                showPricingInfo: true   // Show/hide pricing info section
            }
        },
        
        // Features for product cards (short list)
        features: [
            { text: "Intel Core i9-13900H", icon: "fas fa-microchip" },
            { text: "14.5-inch OLED Touchscreen", icon: "fas fa-tv" },
            { text: "NVIDIA RTX 4070", icon: "fas fa-desktop" },
            { text: "32GB DDR5 Memory", icon: "fas fa-memory" },
            { text: "ASUS Pen 2.0 Included", icon: "fas fa-pen" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "The ultimate OLED creative laptop with stunning visuals and powerful performance",
            paragraphs: [
                "The ASUS ZenBook Pro 14 OLED represents the perfect blend of creativity and performance. After extensive testing, we've confirmed this laptop offers exceptional OLED visuals and powerful Intel Core i9 performance, making it our clear #1 choice.",
                "This laptop impressed our testing team with its stunning 14.5-inch OLED touchscreen and powerful Intel Core i9-13900H processor. The NVIDIA RTX 4070 graphics and included ASUS Pen 2.0 provide exceptional value for creative professionals.",
                "After extensive testing across video editing, digital art, and demanding creative workflows, the ZenBook Pro 14 OLED proved to be the best choice for users seeking OLED brilliance and powerful performance in a portable package."
            ]
        },
        
        // Perks for product cards and detailed reviews - Simple format: text + icon
        perks: [
            { text: "14.5-inch OLED Touchscreen", icon: "fas fa-tv" },
            { text: "Intel Core i9 Performance", icon: "fas fa-rocket" },
            { text: "NVIDIA RTX 4070 Graphics", icon: "fas fa-desktop" },
            { text: "ASUS Pen 2.0 Included", icon: "fas fa-pen" },
            { text: "Thunderbolt 4 Ports", icon: "fas fa-bolt" },
            { text: "Premium Build Quality", icon: "fas fa-shield-alt" },
            { text: "NumberPad 2.0", icon: "fas fa-calculator" },
            { text: "Harman Kardon Audio", icon: "fas fa-volume-up" }
        ],
        
        // Technical specifications - Simple format: name + value + icon
        specifications: [
            { name: "Processor", value: "Intel Core i9-13900H (14-core, up to 5.4GHz)", icon: "fas fa-microchip" },
            { name: "Graphics", value: "NVIDIA GeForce RTX 4070, 8GB GDDR6", icon: "fas fa-desktop" },
            { name: "Memory", value: "32GB DDR5-4800, dual-channel", icon: "fas fa-memory" },
            { name: "Storage", value: "1TB PCIe 4.0 SSD, upgradeable", icon: "fas fa-hdd" },
            { name: "Display", value: "14.5-inch OLED, 2880x1800, 120Hz, touch", icon: "fas fa-tv" },
            { name: "Battery", value: "96Wh lithium-polymer, up to 15 hours", icon: "fas fa-battery-full" }
        ]
    },
    
    // Product 2 Configuration - #2 Ranked Gaming Laptop - Dell XPS 15 Plus
    product2: {
        name: "Dell XPS 15 Plus",
        description: "The Dell XPS 15 Plus combines stunning design with powerful performance, featuring Intel Core i9-14900H and a gorgeous 4K+ OLED Infinity Edge display.",
        productLogo: "./assets/images/laptop_test/Dell_logo.png",
        productImage: "./assets/images/laptop_test/Dell_XPS_15_Plus.jpg",
        logoScale: {
            grid: 1.5,
            list: 1.0,
            tablet: {
                grid: 1.5,  // Scale for tablet grid view
                list: 1.0   // Scale for tablet list view
            }
        },
        
        // Product image scaling settings for product cards
        imageScale: {
            grid: 1.0,       // Scale for product image in grid view
            list: 1.0        // Scale for product image in list view
        },
        
        // Product image positioning settings for product cards
        imagePositioning: {
            grid: {
                objectPosition: 'center',  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'cover'         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Logo positioning settings for product cards
        logoPositioning: {
            grid: {
                left: '0px',    // Horizontal positioning for grid view
                top: '0rem'    // Vertical positioning for grid view
            },
            list: {
                left: '0px',     // Horizontal positioning for list view
                top: '0rem'       // Vertical positioning for list view
            }
        },
        
        // Detailed review scaling settings
        detailedReviewScale: {
            productImage: 1.0,  // Scale for product image in detailed reviews
            productLogo: 1.5    // Scale for product logo in detailed reviews
        },
        
        // Detailed review positioning settings
        detailedReviewPositioning: {
            productLogo: {
                left: '0px',    // Horizontal positioning for detailed review logo
                top: '-0.55rem'   // Vertical positioning for detailed review logo
            },
            productImage: {
                left: '0px',           // Horizontal positioning for detailed review image
                top: '0px',            // Vertical positioning for detailed review image
                objectPosition: 'center', // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'cover'     // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Product ranking and affiliate data
        rank: 2,
        rankBadge: "BEST PREMIUM DESIGN",
        rating: 4.7,
        reviewCount: 2156,
        
        // =============================================
        // RANK BADGE DISPLAY SETTINGS
        // =============================================
        badgeSettings: {
            showOnProductCard: true,     // ← Show/hide rank badge on product cards (true/false)
            showOnDetailedReview: true   // ← Show/hide rank badge on detailed review cards (true/false)
        },
        
        // ========== UNIVERSAL TEMPLATE FIELDS ==========
        // Physical Products (default)
        price: "£2,799",
        originalPrice: "£3,199",
        discount: "13% OFF",
        
        // Casino Websites
        welcomeBonus: "Free Dell Premium Support",
        welcomePackage: "Intel Core i9 + 32GB RAM + 1TB SSD",
        addedBonus: "4K+ OLED Display",
        
        // Sports Betting
        signupBonus: "£75 Free Bet",
        oddsBoost: "25% Odds Boost",
        freeBet: "£15 Risk-Free Bet",
        
        // Software/SaaS
        monthlyPrice: "£19/month",
        yearlyPrice: "£190/year",
        trialPeriod: "14-day free trial",
        
        // Streaming Services
        contentHighlight: "HD + 4K Content",
        
        // VPN Services
        serverCount: "3000+ Servers",
        speedInfo: "5Gbps Speed",
        
        // Crypto Exchanges
        tradingFee: "0.25% Trading Fee",
        supportedCoins: "300+ Coins",
        securityRating: "A Security",
        
        // Web Hosting
        storage: "50GB SSD",
        uptime: "99.8% Uptime",
        
        // Restaurants
        priceRange: "£12-18 per person",
        cuisineType: "American Comfort Food",
        specialOffer: "Weekend Brunch Special",
        
        // Hotels/Travel
        roomRate: "£120/night",
        amenities: "Free WiFi, Breakfast",
        locationScore: "Near Downtown",
        
        affiliateLink: "https://www.dell.com/en-uk/shop/scc/scr/laptops/appref=xps-product-line,all-intel-processors-processor-brand?gacd=9685798-5479-5761040-270826046-0&dgc=st&SA360CID=71700000105902657&gclsrc=aw.ds&&gad_source=1&gad_campaignid=19643557631&gbraid=0AAAAAD77IkeyT7jNIUiUnv4AWgT9hUczt&gclid=Cj0KCQjwn8XFBhCxARIsAMyH8BuAj_oNpY1oCE9EKocx-LLG4UhT-67RxXkWlhgWtSxWVN5Lcj94faIaAkygEALw_wcB",
        ctaText: "Buy Now",
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Experience Premium Design Excellence!",
            description: "Get the Dell XPS 15 Plus with stunning 4K+ OLED display!",
            boxInfo: "Premium laptop with exceptional design and powerful performance!",
            // CTA box display controls
            display: {
                showTitle: false,        // Show/hide CTA title
                showDescription: false,  // Show/hide CTA description  
                showBoxInfo: false,      // Show/hide additional box info
                showPricingInfo: true   // Show/hide pricing info section
            }
        },
        
        // Features for product cards (short list)
        features: [
            { text: "Intel Core i9-14900H", icon: "fas fa-microchip" },
            { text: "32GB DDR5 Memory", icon: "fas fa-memory" },
            { text: "15.6-inch 4K+ OLED", icon: "fas fa-tv" },
            { text: "18-Hour Battery Life", icon: "fas fa-battery-full" },
            { text: "Infinity Edge Design", icon: "fas fa-expand" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "Premium design meets exceptional performance in a stunning package",
            paragraphs: [
                "The Dell XPS 15 Plus stands out with its premium design and powerful Intel Core i9-14900H processor. Our testing revealed exceptional build quality and a stunning 4K+ OLED Infinity Edge display that rivals any premium laptop.",
                "This laptop impressed our team with its sleek design, excellent keyboard, and outstanding display quality. The 18-hour battery life and premium materials make it an excellent choice for professionals who value both performance and aesthetics.",
                "After extensive testing, the XPS 15 Plus proved to be an outstanding choice for users seeking a premium Windows laptop with exceptional design, powerful performance, and a gorgeous display."
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "Premium Build Quality", icon: "fas fa-gem" },
            { text: "4K+ OLED Display", icon: "fas fa-tv" },
            { text: "Infinity Edge Design", icon: "fas fa-expand" },
            { text: "18-Hour Battery Life", icon: "fas fa-battery-full" },
            { text: "Thunderbolt 4 Ports", icon: "fas fa-bolt" },
            { text: "Precision Touchpad", icon: "fas fa-hand-pointer" },
            { text: "Windows Hello", icon: "fas fa-fingerprint" },
            { text: "Dell Premium Support", icon: "fas fa-headset" }
        ],
        
        // Technical specifications
        specifications: [
            { name: "Processor", value: "Intel Core i9-14900H (14-core, up to 5.4GHz)", icon: "fas fa-microchip" },
            { name: "Memory", value: "32GB DDR5-4800, up to 64GB available", icon: "fas fa-memory" },
            { name: "Storage", value: "1TB PCIe 4.0 SSD, up to 2TB available", icon: "fas fa-hdd" },
            { name: "Display", value: "15.6-inch 4K+ OLED Infinity Edge, HDR 400", icon: "fas fa-tv" },
            { name: "Battery", value: "86Wh lithium-polymer, up to 18 hours", icon: "fas fa-battery-full" },
            { name: "Connectivity", value: "Thunderbolt 4, USB-C, Wi-Fi 7, Bluetooth 5.3", icon: "fas fa-wifi" }
        ]
    },
    
    // Product 3 Configuration - #3 Ranked Crypto Casino - BC.Game
    product3: {
        name: "Microsoft Surface Laptop Studio 2",
        description: "The Surface Laptop Studio 2 offers versatile design perfect for digital artists with Intel Core i7-14800H and unique PixelSense Flow display.",
        productLogo: "./assets/images/laptop_test/microsoft_logo_grey.png",
        productImage: "./assets/images/laptop_test/Microsoft_Surface_Laptop_Studio_2.avif",
        logoScale: {
            grid: 4.0,
            list: 2.5,
            tablet: {
                grid: 3.2,  // Scale for tablet grid view
                list: 1.0   // Scale for tablet list view
            }
        },
        
        // Product image scaling settings for product cards
        imageScale: {
            grid: 1.0,       // Scale for product image in grid view
            list: 1.0        // Scale for product image in list view
        },
        
        // Product image positioning settings for product cards
        imagePositioning: {
            grid: {
                objectPosition: 'center',  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'cover'         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Logo positioning settings for product cards
        logoPositioning: {
            grid: {
                left: '0px',     // Horizontal positioning for grid view
                top: '0px'       // Vertical positioning for grid view
            },
            list: {
                left: '0px',     // Horizontal positioning for list view
                top: '0px'       // Vertical positioning for list view
            }
        },
        
        // Detailed review scaling settings
        detailedReviewScale: {
            productImage: 1.0,  // Scale for product image in detailed reviews
            productLogo: 2.0    // Scale for product logo in detailed reviews
        },
        
        // Detailed review positioning settings
        detailedReviewPositioning: {
            productLogo: {
                left: '0px',     // Horizontal positioning for detailed review logo
                top: '-0.25rem'       // Vertical positioning for detailed review logo
            },
            productImage: {
                left: '0px',           // Horizontal positioning for detailed review image
                top: '0px',            // Vertical positioning for detailed review image
                objectPosition: 'top left', // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'fill'     // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Product ranking and affiliate data
        rank: 3,
        rankBadge: "BEST FOR CREATIVITY",
        rating: 4.6,
        reviewCount: 1843,
        
        // =============================================
        // RANK BADGE DISPLAY SETTINGS
        // =============================================
        badgeSettings: {
            showOnProductCard: true,     // ← Show/hide rank badge on product cards (true/false)
            showOnDetailedReview: true   // ← Show/hide rank badge on detailed review cards (true/false)
        },
        
        // ========== UNIVERSAL TEMPLATE FIELDS ==========
        // Physical Products (default)
        price: "£2,399",
        originalPrice: "£2,699",
        discount: "11% OFF",
        
        // Casino Websites
        welcomeBonus: "Free Surface Pen Included",
        welcomePackage: "Intel Core i7 + 32GB RAM + 1TB SSD",
        addedBonus: "PixelSense Flow Touch",
        
        // Sports Betting
        signupBonus: "£50 Free Bet",
        oddsBoost: "20% Odds Boost",
        freeBet: "£10 Risk-Free Bet",
        
        // Software/SaaS
        monthlyPrice: "£9/month",
        yearlyPrice: "£90/year",
        trialPeriod: "7-day free trial",
        
        // Streaming Services
        contentHighlight: "HD Content Library",
        
        // VPN Services
        serverCount: "1500+ Servers",
        speedInfo: "2Gbps Speed",
        
        // Crypto Exchanges
        tradingFee: "0.5% Trading Fee",
        supportedCoins: "150+ Coins",
        securityRating: "B+ Security",
        
        // Web Hosting
        storage: "25GB SSD",
        uptime: "99.5% Uptime",
        
        // Restaurants
        priceRange: "£8-15 per person",
        cuisineType: "Fast Casual",
        specialOffer: "Lunch Combo Deal",
        
        // Hotels/Travel
        roomRate: "£89/night",
        amenities: "Free WiFi, Parking",
        locationScore: "Airport Area",
        
        affiliateLink: "https://www.microsoft.com/en-gb/d/surface-laptop-studio-2-for-business/935xfv68l29f?activetab=pivot:overviewtab",
        ctaText: "Buy Now",
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Unleash Your Creative Potential!",
            description: "Get the versatile Surface Laptop Studio 2 for digital creativity!",
            boxInfo: "Perfect laptop for digital artists and creative professionals!",
            // CTA box display controls - Example with some elements hidden
            display: {
                showTitle: false,         // Show CTA title
                showDescription: false,  // Hide CTA description  
                showBoxInfo: false,       // Show additional box info
                showPricingInfo: true   // Hide pricing info section
            }
        },
        
        // Features for product cards (short list)
        features: [
            { text: "Intel Core i7-14800H", icon: "fas fa-microchip" },
            { text: "32GB LPDDR5 Memory", icon: "fas fa-memory" },
            { text: "14.4-inch PixelSense Flow", icon: "fas fa-tv" },
            { text: "17-Hour Battery Life", icon: "fas fa-battery-full" },
            { text: "Versatile 3-in-1 Design", icon: "fas fa-laptop" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "The ultimate creative workstation with versatile design and touch capabilities",
            paragraphs: [
                "The Surface Laptop Studio 2 excels as a creative powerhouse with its unique versatile design that transforms from laptop to studio to tablet. Our testing confirmed exceptional performance for digital art, design, and creative workflows.",
                "This laptop impressed our team with its innovative PixelSense Flow display, excellent Surface Pen integration, and solid Intel Core i7-14800H performance. The 17-hour battery life ensures productivity throughout long creative sessions.",
                "After extensive testing across various creative applications, the Surface Laptop Studio 2 proved to be the best choice for digital artists and creative professionals who need versatility and touch capabilities."
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "Versatile 3-in-1 Design", icon: "fas fa-laptop" },
            { text: "PixelSense Flow Display", icon: "fas fa-tv" },
            { text: "Surface Pen Included", icon: "fas fa-pen" },
            { text: "17-Hour Battery Life", icon: "fas fa-battery-full" },
            { text: "Thunderbolt 4 Support", icon: "fas fa-bolt" },
            { text: "Windows Studio Effects", icon: "fas fa-camera" },
            { text: "Precision Haptics", icon: "fas fa-hand-paper" },
            { text: "Microsoft Complete", icon: "fas fa-shield-alt" }
        ],
        
        // Technical specifications
        specifications: [
            { name: "Processor", value: "Intel Core i7-14800H (20-core, up to 5.2GHz)", icon: "fas fa-microchip" },
            { name: "Memory", value: "32GB LPDDR5, up to 64GB available", icon: "fas fa-memory" },
            { name: "Storage", value: "1TB PCIe 4.0 SSD, up to 2TB available", icon: "fas fa-hdd" },
            { name: "Display", value: "14.4-inch PixelSense Flow, 120Hz, 2400x1600", icon: "fas fa-tv" },
            { name: "Battery", value: "58Wh lithium-polymer, up to 17 hours", icon: "fas fa-battery-full" },
            { name: "Connectivity", value: "Thunderbolt 4, USB-A, Surface Connect, Wi-Fi 7", icon: "fas fa-wifi" }
        ]
    },
    
    // Product 4 Configuration - #4 Ranked Crypto Casino - Gamdom
    product4: {
        name: "Lenovo ThinkPad X1 Carbon Gen 13",
        description: "The ThinkPad X1 Carbon Gen 13 offers exceptional durability and performance for business professionals with Intel Core i7-14700U and outstanding keyboard.",
        productLogo: "./assets/images/laptop_test/Lenovo_logo.png",
        productImage: "./assets/images/laptop_test/Lenovo_ThinkPad_X1_Carbon_Gen_13.avif",
        logoScale: {
            grid: 3.0,
            list: 2.5,
            tablet: {
                grid: 2.5,  // Scale for tablet grid view
                list: 1.2   // Scale for tablet list view
            }
        },
        
        // Product image scaling settings for product cards
        imageScale: {
            grid: 1.0,       // Scale for product image in grid view
            list: 1.0        // Scale for product image in list view
        },
        
        // Product image positioning settings for product cards
        imagePositioning: {
            grid: {
                objectPosition: 'top left',  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'cover'         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Logo positioning settings for product cards
        logoPositioning: {
            grid: {
                left: '0px',     // Horizontal positioning for grid view
                top: '0rem'      // Vertical positioning for grid view
            },
            list: {
                left: '0px',     // Horizontal positioning for list view
                top: '0rem'      // Vertical positioning for list view
            }
        },
        
        // Detailed review scaling settings
        detailedReviewScale: {
            productImage: 1.0,  // Scale for product image in detailed reviews
            productLogo: 2.5    // Scale for product logo in detailed reviews
        },
        
        // Detailed review positioning settings
        detailedReviewPositioning: {
            productLogo: {
                left: '0px',     // Horizontal positioning for detailed review logo
                top: '-0.25rem'      // Vertical positioning for detailed review logo
            },
            productImage: {
                left: '0px',           // Horizontal positioning for detailed review image
                top: '0px',            // Vertical positioning for detailed review image
                objectPosition: 'top left', // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'fill'     // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Product ranking and affiliate data
        rank: 4,
        rankBadge: "BEST FOR BUSINESS",
        rating: 4.5,
        reviewCount: 1967,

        // =============================================
        // RANK BADGE DISPLAY SETTINGS
        // =============================================
        badgeSettings: {
            showOnProductCard: true,     // ← Show/hide rank badge on product cards (true/false)
            showOnDetailedReview: true   // ← Show/hide rank badge on detailed review cards (true/false)
        },
        
        // ========== UNIVERSAL TEMPLATE FIELDS ==========
        // Physical Products (default)
        price: "£1,899",
        originalPrice: "£2,199",
        discount: "14% OFF",
        
        // Casino Websites
        welcomeBonus: "3-Year Premier Support",
        welcomePackage: "Intel Core i7 + 32GB RAM + 1TB SSD",
        addedBonus: "MIL-STD-810H Tested",
        
        // Sports Betting
        signupBonus: "£75 Free Bet",
        oddsBoost: "25% Odds Boost",
        freeBet: "£15 Risk-Free Bet",
        
        // Software/SaaS
        monthlyPrice: "£29/month",
        yearlyPrice: "£290/year",
        trialPeriod: "14-day free trial",
        
        affiliateLink: "https://www.lenovo.com/gb/en/p/laptops/thinkpad/thinkpadx1/thinkpad-x1-carbon-gen-13-aura-edition-14-inch-intel/21nscto1wwgb3",
        ctaText: "Buy Now",
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Professional Excellence Awaits!",
            description: "Get the legendary ThinkPad X1 Carbon for business success!",
            boxInfo: "The most trusted business laptop with legendary keyboard and durability!",
            // CTA box display controls
            display: {
                showTitle: false,        // Show/hide CTA title
                showDescription: false,  // Show/hide CTA description  
                showBoxInfo: false,      // Show/hide additional box info
                showPricingInfo: true   // Show/hide pricing info section
            }
        },
        
        // Features for product cards (short list)
        features: [
            { text: "Intel Core i7-14700U", icon: "fas fa-microchip" },
            { text: "32GB LPDDR5 Memory", icon: "fas fa-memory" },
            { text: "14-inch 2.8K OLED", icon: "fas fa-tv" },
            { text: "19-Hour Battery Life", icon: "fas fa-battery-full" },
            { text: "Legendary ThinkPad Keyboard", icon: "fas fa-keyboard" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "The legendary business laptop with unmatched durability and performance",
            paragraphs: [
                "The ThinkPad X1 Carbon Gen 13 continues the legendary ThinkPad tradition with exceptional build quality, outstanding keyboard, and reliable Intel Core i7-14700U performance. Our testing confirmed its status as the ultimate business laptop.",
                "This laptop impressed our team with its legendary keyboard feel, robust construction that passes MIL-STD-810H testing, and excellent 19-hour battery life. The 2.8K OLED display provides crisp visuals for professional work.",
                "After extensive testing in various business scenarios, the X1 Carbon Gen 13 proved to be the best choice for business professionals who demand reliability, exceptional keyboard experience, and long battery life."
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "Legendary ThinkPad Keyboard", icon: "fas fa-keyboard" },
            { text: "MIL-STD-810H Durability", icon: "fas fa-shield-alt" },
            { text: "2.8K OLED Display", icon: "fas fa-tv" },
            { text: "19-Hour Battery Life", icon: "fas fa-battery-full" },
            { text: "Thunderbolt 4 Ports", icon: "fas fa-bolt" },
            { text: "TrackPoint Navigation", icon: "fas fa-mouse-pointer" },
            { text: "Windows Hello IR Camera", icon: "fas fa-camera" },
            { text: "Premier Support Available", icon: "fas fa-headset" }
        ],
        
        // Technical specifications
        specifications: [
            { name: "Processor", value: "Intel Core i7-14700U (12-core, up to 5.2GHz)", icon: "fas fa-microchip" },
            { name: "Memory", value: "32GB LPDDR5-5600, soldered", icon: "fas fa-memory" },
            { name: "Storage", value: "1TB PCIe 4.0 SSD, user replaceable", icon: "fas fa-hdd" },
            { name: "Display", value: "14-inch 2.8K OLED, 400 nits, HDR 500", icon: "fas fa-tv" },
            { name: "Battery", value: "57Wh lithium-polymer, up to 19 hours", icon: "fas fa-battery-full" },
            { name: "Connectivity", value: "Thunderbolt 4, USB-A, HDMI, Wi-Fi 7, 5G option", icon: "fas fa-wifi" }
        ]
    },
    
    // Product 5 Configuration - #5 Ranked Crypto Casino - Betpanda
    product5: {
        name: "ASUS ROG Zephyrus G18",
        description: "The ROG Zephyrus G18 delivers top-notch gaming performance with AMD Ryzen 9 7950HX and cutting-edge graphics in an 18-inch powerhouse.",
        productLogo: "./assets/images/laptop_test/ASUS_logo_white.png",
        productImage: "./assets/images/laptop_test/ASUS_ROG_Zephyrus_G18.jpg",
        logoScale: {
            grid: 2.0,
            list: 1.5,
            tablet: {
                grid: 1.5,  // Scale for tablet grid view
                list: 1.0   // Scale for tablet list view
            }
        },
        
        // Product image scaling settings for product cards
        imageScale: {
            grid: 1.0,       // Scale for product image in grid view
            list: 1.0        // Scale for product image in list view
        },
        
        // Product image positioning settings for product cards
        imagePositioning: {
            grid: {
                objectPosition: 'center',  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'cover'         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Logo positioning settings for product cards
        logoPositioning: {
            grid: {
                left: '0px',     // Horizontal positioning for grid view
                top: '0rem'      // Vertical positioning for grid view
            },
            list: {
                left: '0px',     // Horizontal positioning for list view
                top: '0rem'      // Vertical positioning for list view
            }
        },
        
        // Detailed review scaling settings
        detailedReviewScale: {
            productImage: 1.0,  // Scale for product image in detailed reviews
            productLogo: 2.0    // Scale for product logo in detailed reviews
        },
        
        // Detailed review positioning settings
        detailedReviewPositioning: {
            productLogo: {
                left: '0px',     // Horizontal positioning for detailed review logo
                top: '-0.25rem'      // Vertical positioning for detailed review logo
            },
            productImage: {
                left: '0px',           // Horizontal positioning for detailed review image
                top: '0px',            // Vertical positioning for detailed review image
                objectPosition: 'center', // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'cover'     // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Product ranking and affiliate data
        rank: 5,
        rankBadge: "BEST GAMING",
        rating: 4.4,
        reviewCount: 1654,

        // =============================================
        // RANK BADGE DISPLAY SETTINGS
        // =============================================
        badgeSettings: {
            showOnProductCard: true,     // ← Show/hide rank badge on product cards (true/false)
            showOnDetailedReview: true   // ← Show/hide rank badge on detailed review cards (true/false)
        },
        
        // ========== UNIVERSAL TEMPLATE FIELDS ==========
        // Physical Products (default)
        price: "£3,299",
        originalPrice: "£3,799",
        discount: "13% OFF",
        
        // Casino Websites
        welcomeBonus: "Free ROG Gaming Mouse",
        welcomePackage: "AMD Ryzen 9 + 32GB RAM + 2TB SSD",
        addedBonus: "240Hz Gaming Display",
        
        // Sports Betting
        signupBonus: "£40 Free Bet",
        oddsBoost: "15% Odds Boost",
        freeBet: "£8 Risk-Free Bet",
        
        // Software/SaaS
        monthlyPrice: "£19/month",
        yearlyPrice: "£190/year",
        trialPeriod: "7-day free trial",
        
        affiliateLink: "https://uk.store.asus.com/rog-strix-g18-2024-g814-237046335-90nr0id6-m000h0.html",
        ctaText: "Buy Now",
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Ultimate Gaming Power!",
            description: "Experience next-level gaming with the ROG Zephyrus G18's incredible performance.",
            boxInfo: "Free ROG gaming mouse included - Premium gaming setup ready!",
            // CTA box display controls
            display: {
                showTitle: false,        // Show/hide CTA title
                showDescription: false,  // Show/hide CTA description  
                showBoxInfo: false,      // Show/hide additional box info
                showPricingInfo: true   // Show/hide pricing info section
            }
        },
        
        // Features for product cards (short list)
        features: [
            { text: "AMD Ryzen 9 7950HX", icon: "fas fa-microchip" },
            { text: "32GB DDR5 Memory", icon: "fas fa-memory" },
            { text: "18-inch 240Hz Display", icon: "fas fa-tv" },
            { text: "Liquid Metal Cooling", icon: "fas fa-snowflake" },
            { text: "ROG Nebula HDR Display", icon: "fas fa-eye" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "The ultimate gaming powerhouse with ROG excellence and cutting-edge performance",
            paragraphs: [
                "The ASUS ROG Zephyrus G18 stands as the pinnacle of gaming laptops, delivering unprecedented performance with its Intel Core i9-14900HX processor and NVIDIA RTX 4090 graphics. Our extensive testing confirmed this laptop offers the best gaming experience available today.",
                "What sets the Zephyrus G18 apart is its massive 18-inch ROG Nebula HDR display with 240Hz refresh rate and advanced liquid metal cooling system that maintains peak performance during intense gaming sessions. The premium build quality and ROG ecosystem integration create an unmatched gaming experience.",
                "After comprehensive testing across the most demanding games and creative applications, the ROG Zephyrus G18 proved to be the ultimate choice for serious gamers and content creators who demand the absolute best performance and display quality available."
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "240Hz Gaming Display", icon: "fas fa-tv" },
            { text: "Liquid Metal Thermal", icon: "fas fa-snowflake" },
            { text: "ROG Keystone II", icon: "fas fa-key" },
            { text: "90Wh Battery", icon: "fas fa-battery-full" },
            { text: "Dolby Vision HDR", icon: "fas fa-eye" },
            { text: "Wi-Fi 7 Ready", icon: "fas fa-wifi" },
            { text: "USB4 Thunderbolt", icon: "fas fa-bolt" },
            { text: "ROG Armoury Crate", icon: "fas fa-cog" }
        ],
        
        // Technical specifications
        specifications: [
            { name: "Processor", value: "AMD Ryzen 9 7950HX (16-core, up to 5.7GHz)", icon: "fas fa-microchip" },
            { name: "Memory", value: "32GB DDR5-4800, upgradeable to 64GB", icon: "fas fa-memory" },
            { name: "Storage", value: "2TB PCIe 4.0 SSD, dual M.2 slots", icon: "fas fa-hdd" },
            { name: "Display", value: "18-inch ROG Nebula HDR, 240Hz, 2560x1600", icon: "fas fa-tv" },
            { name: "Battery", value: "90Wh lithium-polymer, up to 10 hours", icon: "fas fa-battery-full" },
            { name: "Graphics", value: "NVIDIA GeForce RTX 4080, 12GB GDDR6X", icon: "fas fa-tv" }
        ]
    },
    
    // Product 6 Configuration - #6 Ranked Crypto Casino - LuckyBlock
    product6: {
        name: "HP Spectre x360 14",
        description: "The HP Spectre x360 14 combines elegant design with versatile 2-in-1 functionality, featuring Intel Core i7-1365U and premium build quality.",
        productLogo: "./assets/images/laptop_test/hp_logo.png",
        productImage: "./assets/images/laptop_test/HP_Spectre_x360_14.jpg",
        logoScale: {
            grid: 2.0,
            list: 1.7,
            tablet: {
                grid: 2.0,  // Scale for tablet grid view
                list: 1.5   // Scale for tablet list view
            }
        },
        
        // Product image scaling settings for product cards
        imageScale: {
            grid: 1.0,       // Scale for product image in grid view
            list: 1.0        // Scale for product image in list view
        },
        
        // Product image positioning settings for product cards
        imagePositioning: {
            grid: {
                objectPosition: 'top center',  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'cover'         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Logo positioning settings for product cards
        logoPositioning: {
            grid: {
                left: '0px',     // Horizontal positioning for grid view
                top: '0rem'      // Vertical positioning for grid view
            },
            list: {
                left: '0px',     // Horizontal positioning for list view
                top: '0rem'      // Vertical positioning for list view
            }
        },
        
        // Detailed review scaling settings
        detailedReviewScale: {
            productImage: 1.0,  // Scale for product image in detailed reviews
            productLogo: 2.0    // Scale for product logo in detailed reviews
        },
        
        // Detailed review positioning settings
        detailedReviewPositioning: {
            productLogo: {
                left: '0px',     // Horizontal positioning for detailed review logo
                top: '-0.25rem'      // Vertical positioning for detailed review logo
            },
            productImage: {
                left: '0px',           // Horizontal positioning for detailed review image
                top: '0px',            // Vertical positioning for detailed review image
                objectPosition: 'center', // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'cover'     // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Product ranking and affiliate data
        rank: 6,
        rankBadge: "BEST 2-IN-1",
        rating: 4.3,
        reviewCount: 1245,

        // =============================================
        // RANK BADGE DISPLAY SETTINGS
        // =============================================
        badgeSettings: {
            showOnProductCard: false,     // ← Show/hide rank badge on product cards (true/false)
            showOnDetailedReview: false   // ← Show/hide rank badge on detailed review cards (true/false)
        },
        
        // ========== UNIVERSAL TEMPLATE FIELDS ==========
        // Physical Products (default)
        price: "£1,599",
        originalPrice: "£1,899",
        discount: "16% OFF",
        
        // Casino Websites
        welcomeBonus: "Free HP Pen Included",
        welcomePackage: "Intel Core i7 + 32GB RAM + 1TB SSD",
        addedBonus: "360° Convertible Design",
        
        // Sports Betting
        signupBonus: "£25 Free Bet",
        oddsBoost: "10% Odds Boost",
        freeBet: "£5 Risk-Free Bet",
        
        // Software/SaaS
        monthlyPrice: "£9/month",
        yearlyPrice: "£90/year",
        trialPeriod: "3-day free trial",
        
        affiliateLink: "https://www.hp.com/us-en/shop/mdp/envy---omen/hp-spectre-x360-14-3074457345617526676--1",
        ctaText: "Buy Now",
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Affordable Excellence!",
            description: "Get professional brewing results without breaking the bank.",
            boxInfo: "Budget-friendly choice - 17% off with 1-year warranty!",
            // CTA box display controls
            display: {
                showTitle: false,        // Show/hide CTA title
                showDescription: false,  // Show/hide CTA description  
                showBoxInfo: false,      // Show/hide additional box info
                showPricingInfo: true   // Show/hide pricing info section
            }
        },
        
        // Features for product cards (short list)
        features: [
            { text: "Intel Core i7-1365U", icon: "fas fa-microchip" },
            { text: "32GB LPDDR5 Memory", icon: "fas fa-memory" },
            { text: "13.5-inch OLED Touch", icon: "fas fa-tv" },
            { text: "360° Convertible Design", icon: "fas fa-sync-alt" },
            { text: "HP Pen Included", icon: "fas fa-pen" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "The perfect blend of versatility and premium design with convertible excellence",
            paragraphs: [
                "The HP Spectre x360 14 represents the pinnacle of 2-in-1 convertible laptops, delivering exceptional versatility with its 360° hinge design and premium Intel Core i7-14700H performance. Our testing confirmed this laptop offers the best convertible experience available.",
                "What sets the Spectre x360 14 apart is its stunning 2.8K OLED touchscreen that transforms seamlessly from laptop to tablet mode, combined with included HP Pen support and all-day battery life. The premium gem-cut design and durable construction create an elegant yet functional device.",
                "After comprehensive testing across productivity, creative, and entertainment scenarios, the HP Spectre x360 14 proved to be the ultimate choice for users who need the flexibility of a tablet with the power of a premium laptop."
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "13.5-inch OLED Display", icon: "fas fa-tv" },
            { text: "360° Convertible Hinge", icon: "fas fa-sync-alt" },
            { text: "HP Pen Included", icon: "fas fa-pen" },
            { text: "Thunderbolt 4 Ports", icon: "fas fa-bolt" },
            { text: "Bang & Olufsen Audio", icon: "fas fa-volume-up" },
            { text: "Wi-Fi 6E Ready", icon: "fas fa-wifi" },
            { text: "Windows Hello IR", icon: "fas fa-camera" },
            { text: "Premium Build Quality", icon: "fas fa-star" }
        ],
        
        // Technical specifications
        specifications: [
            { name: "Processor", value: "Intel Core i7-1365U (12-core, up to 5.2GHz)", icon: "fas fa-microchip" },
            { name: "Memory", value: "32GB LPDDR5-5200, soldered", icon: "fas fa-memory" },
            { name: "Storage", value: "1TB PCIe 4.0 SSD, user replaceable", icon: "fas fa-hdd" },
            { name: "Display", value: "13.5-inch OLED Touch, 3000x2000, 400 nits", icon: "fas fa-tv" },
            { name: "Battery", value: "68Wh lithium-polymer, up to 16 hours", icon: "fas fa-battery-full" },
            { name: "Connectivity", value: "Thunderbolt 4, USB-A, Wi-Fi 6E, Bluetooth 5.3", icon: "fas fa-wifi" }
        ]
    },
    
    // Product 7 Configuration - #7 Ranked Crypto Casino - Bitcasino
    product7: {
        name: "Razer Blade 16",
        description: "The Razer Blade 16 delivers ultimate gaming performance with Intel Core i9-14900HX and premium build quality in a sleek design.",
        productLogo: "./assets/images/laptop_test/alienware_logo.png",
        productImage: "./assets/images/laptop_test/Razer_Blade_16.webp",
        logoScale: {
            grid: 1.5,
            list: 1.5,
            tablet: {
                grid: 1.0,  // Scale for tablet grid view
                list: 1.0   // Scale for tablet list view
            }
        },
        
        // Product image scaling settings for product cards
        imageScale: {
            grid: 1.0,       // Scale for product image in grid view
            list: 1.0        // Scale for product image in list view
        },
        
        // Product image positioning settings for product cards
        imagePositioning: {
            grid: {
                objectPosition: 'top left',  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'fill'         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },

        // Logo positioning settings for product cards
        logoPositioning: {
            grid: {
                left: '0px',     // Horizontal positioning for grid view
                top: '0rem'      // Vertical positioning for grid view
            },
            list: {
                left: '0px',     // Horizontal positioning for list view
                top: '0rem'      // Vertical positioning for list view
            }
        },
        
        // Detailed review scaling settings
        detailedReviewScale: {
            productImage: 1.0,  // Scale for product image in detailed reviews
            productLogo: 2.0    // Scale for product logo in detailed reviews
        },

        // Detailed review positioning settings
        detailedReviewPositioning: {
            productLogo: {
                left: '0px',     // Horizontal positioning for detailed review logo
                top: '-0.25rem'      // Vertical positioning for detailed review logo
            },
            productImage: {
                left: '0px',           // Horizontal positioning for detailed review image
                top: '0px',            // Vertical positioning for detailed review image
                objectPosition: 'top center', // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'fill'     // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Product ranking and affiliate data
        rank: 7,
        rankBadge: "BEST GAMING PREMIUM",
        rating: 4.6,
        reviewCount: 1876,

        // =============================================
        // RANK BADGE DISPLAY SETTINGS
        // =============================================
        badgeSettings: {
            showOnProductCard: false,     // ← Show/hide rank badge on product cards (true/false)
            showOnDetailedReview: false   // ← Show/hide rank badge on detailed review cards (true/false)
        },
        
        // ========== UNIVERSAL TEMPLATE FIELDS ==========
        // Physical Products (default)
        price: "£4,299",
        originalPrice: "£4,999",
        discount: "14% OFF",
        
        // Casino Websites
        welcomeBonus: "Free Razer DeathAdder V3",
        welcomePackage: "Intel Core i9 + 32GB RAM + 2TB SSD",
        addedBonus: "240Hz OLED Display",
        
        // Sports Betting
        signupBonus: "£60 Free Bet",
        oddsBoost: "20% Odds Boost",
        freeBet: "£12 Risk-Free Bet",
        
        // Software/SaaS
        monthlyPrice: "£39/month",
        yearlyPrice: "£390/year",
        trialPeriod: "21-day free trial",
        
        affiliateLink: "https://razer.com/blade-16/",
        ctaText: "Buy Now",
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Gaming Excellence Awaits!",
            description: "Experience premium gaming with the Razer Blade 16's unmatched performance.",
            boxInfo: "Free Razer DeathAdder V3 included - Ultimate gaming setup ready!",
            // CTA box display controls
            display: {
                showTitle: false,        // Show/hide CTA title
                showDescription: false,  // Show/hide CTA description  
                showBoxInfo: false,      // Show/hide additional box info
                showPricingInfo: true   // Show/hide pricing info section
            }
        },
        
        // Features for product cards (short list)
        features: [
            { text: "Intel Core i9-14900HX", icon: "fas fa-microchip" },
            { text: "32GB DDR5 Memory", icon: "fas fa-memory" },
            { text: "16-inch 240Hz OLED", icon: "fas fa-tv" },
            { text: "RTX 4090 Graphics", icon: "fas fa-tv" },
            { text: "Vapor Chamber Cooling", icon: "fas fa-snowflake" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "The ultimate premium gaming laptop with uncompromising performance and design",
            paragraphs: [
                "The Razer Blade 16 represents the pinnacle of premium gaming laptops, combining exceptional Intel Core i9-14900HX performance with NVIDIA RTX 4090 graphics in a sleek, professional design. Our extensive testing confirmed this laptop delivers unmatched gaming performance with premium aesthetics.",
                "What sets the Razer Blade 16 apart is its stunning 16-inch 240Hz display, advanced vapor chamber cooling system, and premium CNC-machined aluminum construction. The Razer ecosystem integration with Chroma RGB lighting creates a sophisticated gaming experience that rivals desktop setups.",
                "After comprehensive testing across the most demanding games and professional applications, the Razer Blade 16 proved to be the ultimate choice for users who demand the absolute best in gaming performance without compromising on premium design and build quality."
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "240Hz OLED Display", icon: "fas fa-tv" },
            { text: "RTX 4090 Graphics", icon: "fas fa-tv" },
            { text: "Vapor Chamber Cooling", icon: "fas fa-snowflake" },
            { text: "Per-Key RGB Lighting", icon: "fas fa-keyboard" },
            { text: "THX Spatial Audio", icon: "fas fa-volume-up" },
            { text: "Thunderbolt 5 Ready", icon: "fas fa-bolt" },
            { text: "CNC Aluminum Build", icon: "fas fa-shield-alt" },
            { text: "Razer Synapse", icon: "fas fa-cog" }
        ],
        
        // Technical specifications
        specifications: [
            { name: "Processor", value: "Intel Core i9-14900HX (24-core, up to 5.8GHz)", icon: "fas fa-microchip" },
            { name: "Memory", value: "32GB DDR5-5600, upgradeable to 64GB", icon: "fas fa-memory" },
            { name: "Storage", value: "2TB PCIe 4.0 SSD, dual M.2 slots", icon: "fas fa-hdd" },
            { name: "Display", value: "16-inch 240Hz OLED, 2560x1600, HDR 400", icon: "fas fa-tv" },
            { name: "Graphics", value: "NVIDIA GeForce RTX 4090, 16GB GDDR6X", icon: "fas fa-tv" },
            { name: "Battery", value: "95.2Wh lithium-polymer, up to 8 hours", icon: "fas fa-battery-full" }
        ]
    },
    
    // Product 8 Configuration - #8 Ranked Crypto Casino - Vave
    product8: {
        name: "Acer Swift Edge 3",
        description: "The Acer Swift Edge 3 provides excellent value with AMD Ryzen 7 7735U performance and premium features at an affordable price point.",
        productLogo: "./assets/images/laptop_test/acer_logo.png",
        productImage: "./assets/images/laptop_test/Acer_Swift_Edge_3.webp",
        logoScale: {
            grid: 2.0,
            list: 2.0,
            tablet: {
                grid: 1.8,  // Scale for tablet grid view
                list: 0.8   // Scale for tablet list view
            }
        },
        
        // Product image scaling settings for product cards
        imageScale: {
            grid: 1.0,       // Scale for product image in grid view
            list: 1.0        // Scale for product image in list view
        },
        
        // Product image positioning settings for product cards
        imagePositioning: {
            grid: {
                objectPosition: 'top center',  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'cover'         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },

        // Logo positioning settings for product cards
        logoPositioning: {
            grid: {
                left: '0px',     // Horizontal positioning for grid view
                top: '0rem'      // Vertical positioning for grid view
            },
            list: {
                left: '0px',     // Horizontal positioning for list view
                top: '0rem'      // Vertical positioning for list view
            }
        },
        
        // Detailed review scaling settings
        detailedReviewScale: {
            productImage: 1.0,  // Scale for product image in detailed reviews
            productLogo: 2.0    // Scale for product logo in detailed reviews
        },

        // Detailed review positioning settings
        detailedReviewPositioning: {
            productLogo: {
                left: '0px',     // Horizontal positioning for detailed review logo
                top: '-0.25rem'      // Vertical positioning for detailed review logo
            },
            productImage: {
                left: '0px',           // Horizontal positioning for detailed review image
                top: '0px',            // Vertical positioning for detailed review image
                objectPosition: 'top center', // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'cover'     // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Product ranking and affiliate data
        rank: 8,
        rankBadge: "BEST BUDGET",
        rating: 4.2,
        reviewCount: 1567,

        // =============================================
        // RANK BADGE DISPLAY SETTINGS
        // =============================================
        badgeSettings: {
            showOnProductCard: true,     // ← Show/hide rank badge on product cards (true/false)
            showOnDetailedReview: true   // ← Show/hide rank badge on detailed review cards (true/false)
        },
        
        // ========== UNIVERSAL TEMPLATE FIELDS ==========
        // Physical Products (default)
        price: "£899",
        originalPrice: "£1,099",
        discount: "18% OFF",
        
        // Casino Websites
        welcomeBonus: "Free Wireless Mouse",
        welcomePackage: "AMD Ryzen 7 + 16GB RAM + 1TB SSD",
        addedBonus: "16-inch OLED Display",
        
        // Sports Betting
        signupBonus: "£30 Free Bet",
        oddsBoost: "12% Odds Boost",
        freeBet: "£6 Risk-Free Bet",
        
        // Software/SaaS
        monthlyPrice: "£15/month",
        yearlyPrice: "£150/year",
        trialPeriod: "5-day free trial",
        
        affiliateLink: "https://www.acer.com/gb-en/laptops/swift/swift-3-intel",
        ctaText: "Buy Now",
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Exceptional Value Choice!",
            description: "Get premium laptop features at an unbeatable price with the Swift Edge 3.",
            boxInfo: "Best budget pick - Free wireless mouse included!",
            // CTA box display controls
            display: {
                showTitle: false,        // Show/hide CTA title
                showDescription: false,  // Show/hide CTA description  
                showBoxInfo: false,      // Show/hide additional box info
                showPricingInfo: true   // Show/hide pricing info section
            }
        },
        
        // Features for product cards (short list)
        features: [
            { text: "AMD Ryzen 7 7735U", icon: "fas fa-microchip" },
            { text: "16GB LPDDR5 Memory", icon: "fas fa-memory" },
            { text: "16-inch OLED Display", icon: "fas fa-tv" },
            { text: "1TB PCIe SSD", icon: "fas fa-hdd" },
            { text: "All-Day Battery Life", icon: "fas fa-battery-full" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "The exceptional budget laptop that delivers premium features without the premium price",
            paragraphs: [
                "The Acer Swift Edge 3 stands out as the best budget laptop available, delivering exceptional value with its 16-inch OLED display and powerful AMD Ryzen 7 7735U processor. Our extensive testing confirmed this laptop offers premium features at an unbeatable price point.",
                "What sets the Swift Edge 3 apart is its stunning 16-inch OLED display that rivals laptops costing twice as much, combined with excellent build quality and all-day battery life. The lightweight design and comprehensive port selection make it perfect for students and professionals on a budget.",
                "After thorough testing across productivity, entertainment, and everyday computing tasks, the Acer Swift Edge 3 proved to be the ultimate choice for users who want premium laptop features without the premium price tag."
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "16-inch OLED Display", icon: "fas fa-tv" },
            { text: "AMD Ryzen 7 Performance", icon: "fas fa-microchip" },
            { text: "All-Day Battery Life", icon: "fas fa-battery-full" },
            { text: "Lightweight Design", icon: "fas fa-feather-alt" },
            { text: "Fast SSD Storage", icon: "fas fa-hdd" },
            { text: "Wi-Fi 6E Ready", icon: "fas fa-wifi" },
            { text: "USB-C Charging", icon: "fas fa-plug" },
            { text: "Excellent Value", icon: "fas fa-dollar-sign" }
        ],
        
        // Technical specifications
        specifications: [
            { name: "Processor", value: "AMD Ryzen 7 7735U (8-core, up to 4.75GHz)", icon: "fas fa-microchip" },
            { name: "Memory", value: "16GB LPDDR5-6400, soldered", icon: "fas fa-memory" },
            { name: "Storage", value: "1TB PCIe 4.0 SSD, user replaceable", icon: "fas fa-hdd" },
            { name: "Display", value: "16-inch OLED, 3200x2000, 400 nits", icon: "fas fa-tv" },
            { name: "Battery", value: "76Wh lithium-polymer, up to 12 hours", icon: "fas fa-battery-full" },
            { name: "Connectivity", value: "USB-C, USB-A, HDMI, Wi-Fi 6E, Bluetooth 5.2", icon: "fas fa-wifi" }
        ]
    },
    
    // Product 9 Configuration - #9 Ranked Crypto Casino - Shuffle
    product9: {
        name: "Samsung Galaxy Book 4 Ultra",
        description: "The Galaxy Book 4 Ultra integrates seamlessly with Samsung ecosystem while delivering powerful Intel Core i9-14900HX performance.",
        productLogo: "./assets/images/laptop_test/samsung_logo.png",
        productImage: "./assets/images/laptop_test/Samsung_Galaxy_Book_4_Ultra.webp",
        logoScale: {
            grid: 2.8,
            list: 2.5,
            tablet: {
                grid: 2.3,  // Scale for tablet grid view
                list: 2.0   // Scale for tablet list view
            }
        },
        
        // Product image scaling settings for product cards
        imageScale: {
            grid: 1.0,       // Scale for product image in grid view
            list: 1.0        // Scale for product image in list view
        },
        
        // Product image positioning settings for product cards
        imagePositioning: {
            grid: {
                objectPosition: 'center',  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'cover'         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },

        // Logo positioning settings for product cards
        logoPositioning: {
            grid: {
                left: '0px',     // Horizontal positioning for grid view
                top: '0rem'      // Vertical positioning for grid view
            },
            list: {
                left: '0px',     // Horizontal positioning for list view
                top: '0rem'      // Vertical positioning for list view
            }
        },
        
        // Detailed review scaling settings
        detailedReviewScale: {
            productImage: 1.0,  // Scale for product image in detailed reviews
            productLogo: 2.5    // Scale for product logo in detailed reviews
        },

        // Detailed review positioning settings
        detailedReviewPositioning: {
            productLogo: {
                left: '0px',     // Horizontal positioning for detailed review logo
                top: '-0.25rem'      // Vertical positioning for detailed review logo
            },
            productImage: {
                left: '0px',           // Horizontal positioning for detailed review image
                top: '0px',            // Vertical positioning for detailed review image
                objectPosition: 'top left', // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'fill'     // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Product ranking and affiliate data
        rank: 9,
        rankBadge: "BEST ECOSYSTEM",
        rating: 4.4,
        reviewCount: 1834,

        // =============================================
        // RANK BADGE DISPLAY SETTINGS
        // =============================================
        badgeSettings: {
            showOnProductCard: false,     // ← Show/hide rank badge on product cards (true/false)
            showOnDetailedReview: false   // ← Show/hide rank badge on detailed review cards (true/false)
        },
        
        // ========== UNIVERSAL TEMPLATE FIELDS ==========
        // Physical Products (default)
        price: "£2,199",
        originalPrice: "£2,599",
        discount: "15% OFF",
        
        // Casino Websites
        welcomeBonus: "Free Galaxy Buds Pro",
        welcomePackage: "Intel Core i9 + 32GB RAM + 1TB SSD",
        addedBonus: "Samsung Ecosystem Integration",
        
        // Sports Betting
        signupBonus: "£20 Free Bet",
        oddsBoost: "8% Odds Boost",
        freeBet: "£4 Risk-Free Bet",
        
        // Software/SaaS
        monthlyPrice: "£8/month",
        yearlyPrice: "£80/year",
        trialPeriod: "2-day free trial",
        
        affiliateLink: "https://www.samsung.com/us/computing/galaxy-books/galaxy-book4-series/buy/galaxy-book4-ultra-16-intelcore-ultra-7-1tb-moonstone-gray-np960xgl-xg2us/",
        ctaText: "Buy Now",
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Samsung Ecosystem Power!",
            description: "Experience seamless integration with your Samsung devices and ecosystem.",
            boxInfo: "Free Galaxy Buds Pro included - Complete Samsung setup!",
            // CTA box display controls
            display: {
                showTitle: false,        // Show/hide CTA title
                showDescription: false,  // Show/hide CTA description  
                showBoxInfo: false,      // Show/hide additional box info
                showPricingInfo: true   // Show/hide pricing info section
            }
        },
        
        // Features for product cards (short list)
        features: [
            { text: "Intel Core i9-14900HX", icon: "fas fa-microchip" },
            { text: "32GB LPDDR5 Memory", icon: "fas fa-memory" },
            { text: "16-inch Dynamic AMOLED", icon: "fas fa-tv" },
            { text: "Samsung Ecosystem Sync", icon: "fas fa-sync-alt" },
            { text: "S Pen Pro Included", icon: "fas fa-pen" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "The ultimate Samsung ecosystem laptop with seamless integration and premium performance",
            paragraphs: [
                "The Samsung Galaxy Book 4 Ultra represents the pinnacle of Samsung's laptop engineering, delivering exceptional Intel Core i9-14900HX performance with seamless integration across the Samsung ecosystem. Our extensive testing confirmed this laptop offers the best ecosystem experience available.",
                "What sets the Galaxy Book 4 Ultra apart is its stunning 16-inch Dynamic AMOLED display and seamless integration with Samsung devices including Galaxy phones, tablets, and earbuds. The included S Pen Pro and ecosystem features create a unified, productive workflow.",
                "After comprehensive testing across productivity, creative, and ecosystem integration scenarios, the Samsung Galaxy Book 4 Ultra proved to be the ultimate choice for users invested in the Samsung ecosystem who demand premium performance and seamless device connectivity."
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "Dynamic AMOLED Display", icon: "fas fa-tv" },
            { text: "Samsung Ecosystem Sync", icon: "fas fa-sync-alt" },
            { text: "S Pen Pro Included", icon: "fas fa-pen" },
            { text: "Intel Core i9 Power", icon: "fas fa-microchip" },
            { text: "Galaxy Buds Pro", icon: "fas fa-headphones" },
            { text: "Thunderbolt 4 Ports", icon: "fas fa-bolt" },
            { text: "Wi-Fi 7 Ready", icon: "fas fa-wifi" },
            { text: "Premium Build Quality", icon: "fas fa-star" }
        ],
        
        // Technical specifications
        specifications: [
            { name: "Processor", value: "Intel Core i9-14900HX (24-core, up to 5.8GHz)", icon: "fas fa-microchip" },
            { name: "Memory", value: "32GB LPDDR5-7500, soldered", icon: "fas fa-memory" },
            { name: "Storage", value: "1TB PCIe 4.0 SSD, user replaceable", icon: "fas fa-hdd" },
            { name: "Display", value: "16-inch Dynamic AMOLED, 2880x1800, 120Hz", icon: "fas fa-tv" },
            { name: "Battery", value: "76Wh lithium-polymer, up to 14 hours", icon: "fas fa-battery-full" },
            { name: "Connectivity", value: "Thunderbolt 4, USB-C, HDMI, Wi-Fi 7, 5G", icon: "fas fa-wifi" }
        ]
    },
    
    // Product 10 Configuration - #10 Ranked Crypto Casino - Rainbet
    product10: {
        name: "LG Gram 17",
        description: "The LG Gram 17 offers exceptional portability despite its large 17-inch display, with Intel Core i7-1360P and all-day battery life.",
        productLogo: "./assets/images/laptop_test/lg_logo.png",
        productImage: "./assets/images/laptop_test/LG_Gram_17.jpg",
        logoScale: {
            grid: 2.0,
            list: 2.0,
            tablet: {
                grid: 2.5,  // Scale for tablet grid view
                list: 1.0   // Scale for tablet list view
            }
        },
        
        // Product image scaling settings for product cards
        imageScale: {
            grid: 1.0,       // Scale for product image in grid view
            list: 1.0        // Scale for product image in list view
        },
        
        // Product image positioning settings for product cards
        imagePositioning: {
            grid: {
                objectPosition: 'top center',  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'cover'         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },

        // Logo positioning settings for product cards
        logoPositioning: {
            grid: {
                left: '0px',     // Horizontal positioning for grid view
                top: '0rem'      // Vertical positioning for grid view
            },
            list: {
                left: '0px',     // Horizontal positioning for list view
                top: '0rem'      // Vertical positioning for list view
            }
        },
        
        // Detailed review scaling settings
        detailedReviewScale: {
            productImage: 1.0,  // Scale for product image in detailed reviews
            productLogo: 2.0    // Scale for product logo in detailed reviews
        },

        // Detailed review positioning settings
        detailedReviewPositioning: {
            productLogo: {
                left: '0px',     // Horizontal positioning for detailed review logo
                top: '-0.25rem'      // Vertical positioning for detailed review logo
            },
            productImage: {
                left: '0px',           // Horizontal positioning for detailed review image
                top: '0px',            // Vertical positioning for detailed review image
                objectPosition: 'top left', // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'fill'     // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Product ranking and affiliate data
        rank: 10,
        rankBadge: "BEST PORTABLE",
        rating: 4.2,
        reviewCount: 1456,

        // =============================================
        // RANK BADGE DISPLAY SETTINGS
        // =============================================
        badgeSettings: {
            showOnProductCard: true,     // ← Show/hide rank badge on product cards (true/false)
            showOnDetailedReview: true   // ← Show/hide rank badge on detailed review cards (true/false)
        },
        
        // ========== UNIVERSAL TEMPLATE FIELDS ==========
        // Physical Products (default)
        price: "£1,299",
        originalPrice: "£1,499",
        discount: "13% OFF",
        
        // Casino Websites
        welcomeBonus: "Free LG Wireless Mouse",
        welcomePackage: "Intel Core i7 + 16GB RAM + 512GB SSD",
        addedBonus: "Ultra-Light 2.98 lbs Design",
        
        // Sports Betting
        signupBonus: "£15 Free Bet",
        oddsBoost: "5% Odds Boost",
        freeBet: "£3 Risk-Free Bet",
        
        // Software/SaaS
        monthlyPrice: "£5/month",
        yearlyPrice: "£50/year",
        trialPeriod: "1-day free trial",
        
        affiliateLink: "https://www.lg.com/uk/laptops/gram/17z90t-g-ad88a1/?srsltid=AfmBOooNBTLH4gfl7hR8cPdurSZC3VO5HyeVaGJEtpIlGF-JioAeno-O",
        ctaText: "Buy Now",
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Ultra-Portable Powerhouse!",
            description: "Experience the perfect balance of large screen and lightweight design with the LG Gram 17.",
            boxInfo: "Free wireless mouse included - Ultra-portable at just 2.98 lbs!",
            // CTA box display controls
            display: {
                showTitle: false,        // Show/hide CTA title
                showDescription: false,  // Show/hide CTA description  
                showBoxInfo: false,      // Show/hide additional box info
                showPricingInfo: true   // Show/hide pricing info section
            }
        },
        
        // Features for product cards (short list)
        features: [
            { text: "Intel Core i7-1360P", icon: "fas fa-microchip" },
            { text: "16GB LPDDR5 Memory", icon: "fas fa-memory" },
            { text: "17-inch WQXGA Display", icon: "fas fa-tv" },
            { text: "Ultra-Light 2.98 lbs", icon: "fas fa-feather-alt" },
            { text: "22-Hour Battery Life", icon: "fas fa-battery-full" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "The ultimate ultra-portable powerhouse with exceptional battery life and lightweight design",
            paragraphs: [
                "The LG Gram 17 stands as the ultimate ultra-portable laptop, delivering exceptional Intel Core i7-1360P performance in an incredibly lightweight 2.98-pound design. Our extensive testing confirmed this laptop offers the best combination of large display and portability available.",
                "What sets the LG Gram 17 apart is its remarkable 17-inch WQXGA display packed into an ultra-lightweight chassis with industry-leading 22-hour battery life. The military-grade durability testing ensures reliability despite its featherweight construction.",
                "After comprehensive testing across mobility, productivity, and endurance scenarios, the LG Gram 17 proved to be the ultimate choice for users who need a large display laptop without sacrificing portability or battery life."
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "Ultra-Light 2.98 lbs", icon: "fas fa-feather-alt" },
            { text: "17-inch Large Display", icon: "fas fa-tv" },
            { text: "22-Hour Battery Life", icon: "fas fa-battery-full" },
            { text: "Thunderbolt 4 Ready", icon: "fas fa-bolt" },
            { text: "Military-Grade Durability", icon: "fas fa-shield-alt" },
            { text: "Backlit Keyboard", icon: "fas fa-keyboard" },
            { text: "Wi-Fi 6E Support", icon: "fas fa-wifi" },
            { text: "Exceptional Portability", icon: "fas fa-suitcase" }
        ],
        
        // Technical specifications
        specifications: [
            { name: "Processor", value: "Intel Core i7-1360P (12-core, up to 5.0GHz)", icon: "fas fa-microchip" },
            { name: "Memory", value: "16GB LPDDR5-5200, soldered", icon: "fas fa-memory" },
            { name: "Storage", value: "512GB PCIe 4.0 SSD, upgradeable to 2TB", icon: "fas fa-hdd" },
            { name: "Display", value: "17-inch WQXGA IPS, 2560x1600, anti-glare", icon: "fas fa-tv" },
            { name: "Battery", value: "80Wh lithium-polymer, up to 22 hours", icon: "fas fa-battery-full" },
            { name: "Weight", value: "Ultra-light 2.98 lbs (1.35kg) design", icon: "fas fa-feather-alt" }
        ]
    }
};

// ========== SECTION TITLES CONFIGURATION ==========
const SECTION_TITLES = {
    // Section titles and icons (easily customizable for your niche) - FOR DETAILED REVIEW CARDS and comparison section titles
    perks: {
        title: 'Key Features', // ← CHANGEABLE: Title when showing perks in product cards
        icon: 'fas fa-truck',   // ← CHANGEABLE: Icon for perks in detailed review cards
        color: '#f472b6'        // ← CHANGEABLE: Color for perks icons in detailed review cards
    },
    specs: {
        title: 'Technical Specifications', // ← CHANGEABLE: Title when showing specs in product cards
        icon: 'fas fa-cogs',    // ← CHANGEABLE: Icon for specs in detailed review cards
        color: '#06b6d4'        // ← CHANGEABLE: Color for specs icons in detailed review cards
    },
    features: {
        title: 'Bonus Features', // ← CHANGEABLE: Title when showing features in product cards
        icon: 'fas fa-list',    // ← CHANGEABLE: Icon for features in detailed review cards
        color: '#10b981'        // ← CHANGEABLE: Color for features icons in detailed review cards
    },
    reviews: {
        title: 'Detailed Reviews',
        icon: 'fas fa-star'
    },
    comparison: 'Product Comparison',                  // ← Gets overridden by the comparison section Below
    
    // Helper function to get section info with backward compatibility
    getSection: function(sectionName) {
        const section = this[sectionName];
        if (typeof section === 'string') {
            // Backward compatibility for old string format
            return { title: section, icon: 'fas fa-star' };
        } else if (section && section.title) {
            // New object format
            return section;
        } else {
            // Fallback defaults
            const defaults = {
                perks: { title: 'Perks', icon: 'fas fa-star' },
                specs: { title: 'Specs', icon: 'fas fa-cogs' },
                features: { title: 'Features', icon: 'fas fa-list' },
                reviews: { title: 'Detailed Reviews', icon: 'fas fa-star' }
            };
            return defaults[sectionName] || { title: 'Section', icon: 'fas fa-star' };
        }
    },
    
    // Product card display options
    productCards: {
        displaySection: 'features'                        // ← 'perks', 'specs', or 'features'
    },
    
    // Sort options configuration
    sortOptions: {
        // Configure which sort options to show (reorder or remove as needed)
        enabled: [
            { value: 'rank', label: 'Sort by Rank', field: 'rank' },
            { value: 'rating', label: 'Sort by Rating', field: 'rating' },
            { value: 'primary', label: 'Sort by {{PRIMARY_FIELD}}', field: 'primary' },
            { value: 'secondary', label: 'Sort by {{SECONDARY_FIELD}}', field: 'secondary' }
        ],
        // Field mappings based on template type - customize labels for your niche
        fieldLabels: {
            physical_products: {
                primary: 'Price',
                secondary: 'Original Price'
            },
            casino_websites: {
                primary: 'Welcome Bonus',
                secondary: 'Welcome Package'
            },
            sports_betting: {
                primary: 'Sign Up Bonus',
                secondary: 'Deposit Match'
            }
            // Add more template types here as needed
        }
    },
    
    // Editor's Choice section configuration
    editorsChoice: {
        title: 'Editor\'s Choice',                          // ← Title for editor's choice section
        subtitle: 'Our top recommendation',                 // ← Subtitle
        ctaText: 'Get Started',                            // ← Call-to-action button text
        featureCount: 5,                                   // ← CONFIGURABLE: Number of features/specs/perks to show (3, 4, 5, 7, etc.)
        displaySection: 'features',                          // ← 'perks', 'features', or 'specs' to show in editor's choice
    },
    
    // Editor's Pick Cards configuration
    editorsPicks: {
        title: 'Editor\'s Picks',                          // ← Title for editor's picks section
        subtitle: 'Handpicked recommendations',            // ← Subtitle 
        featureCount: 5,                                   // ← CONFIGURABLE: Number of features/specs/perks to show in each pick card (3, 4, 5, 7, etc.)
        displaySection: 'features',                          // ← 'perks', 'features', or 'specs' to show in pick cards
    },

    // Comparison section configuration
    comparisonSection: {
        title: 'Laptop Comparison',                       // ← Title for comparison section
        subtitle: 'Select 2-3 laptops to compare their features and specifications side by side', // ← Subtitle
        placeholderTitle: 'Select products to compare',   // ← Placeholder title when no products selected
        placeholderDescription: 'Choose 2-3 products from the dropdowns above to see a detailed comparison', // ← Placeholder description
        resultsTitle: 'Comparison Results',               // ← Title shown above comparison results
        resultsSubtitle: 'Comparing {count} products',    // ← Subtitle for results (use {count} for product count)
        featureCount: 5,                                  // ← CONFIGURABLE: Max features/specs/perks to show per product in comparison (5, 7, 10, etc.)
        
        // Dropdown configuration
        dropdownLabels: {
            product1: 'Product 1:',                       // ← Label for first dropdown
            product2: 'Product 2:',                       // ← Label for second dropdown
            product3: 'Product 3 (Optional):'            // ← Label for third dropdown
        },
        dropdownPlaceholder: 'Select a product...',      // ← Placeholder text in dropdown options
        
        // Comparison table header icons and colors (separate from detailed review cards)
        sectionTitles: { //titles for comparison chosen in const SECTION_TITLES = { up above in the detailed review titles part
            perks: {
                icon: 'fas fa-star',                      // ← CHANGEABLE: Icon for perks section in comparison table (CHANGED FROM BOLT TO STAR)
                color: '#fbbf24'                          // ← CHANGEABLE: Color for perks icons in comparison table
            },
            features: {
                icon: 'fas fa-heart',                     // ← CHANGEABLE: Icon for features section in comparison table (CHANGED FROM GIFT TO HEART)
                color: '#a855f7'                          // ← CHANGEABLE: Color for features icons in comparison table
            },
            specs: {
                icon: 'fas fa-cog',                       // ← CHANGEABLE: Icon for specs section in comparison table (CHANGED FROM WRENCH TO COG)
                color: '#ef4444'                          // ← CHANGEABLE: Color for specs icons in comparison table
            }
        }
    }
};

// Make configurations globally available
window.PRODUCTS_CONFIG = PRODUCTS_CONFIG;
window.SECTION_TITLES = SECTION_TITLES;



// ========== TEMPLATE TYPE CONFIGURATION ==========
// Choose your template type to customize what displays in place of pricing
const TEMPLATE_TYPE = "physical_products"; // ← CHANGE THIS TO MATCH YOUR WEBSITE TYPE

// Available template types:
// "physical_products"    - Shows price, original price, discount (default)
// "casino_websites"      - Shows bonus offers, welcome packages, free spins
// "sports_betting"       - Shows sign-up bonuses, odds boosts, free bets
// "software_saas"        - Shows subscription plans, trial info, monthly/yearly pricing
// "streaming_services"   - Shows subscription cost, trial period, content highlights
// "vpn_services"         - Shows pricing plans, server count, speed info
// "crypto_exchanges"     - Shows trading fees, supported coins, security features
// "web_hosting"          - Shows hosting plans, storage, bandwidth, uptime
// "restaurants"          - Shows price range, cuisine type, special offers
// "hotels_travel"        - Shows room rates, amenities, location highlights

// Template type display configurations
const TEMPLATE_DISPLAY_CONFIG = {
    physical_products: {
        primaryField: "price",
        secondaryField: "originalPrice", 
        tertiaryField: "discount",
        primaryLabel: "Price",
        secondaryLabel: "Original Price",
        tertiaryLabel: "Discount",
        icon: "💰",
        ctaDefault: "Buy Now",
        fieldsToShow: 3, // Show all 3 fields
        // New flexible field selection
        displayFields: ["primary", "secondary", "tertiary"], // Which fields to show
        secondaryFieldCrossthrough: true // Enable crossthrough styling for secondary field
    },
    casino_websites: {
        primaryField: "welcomeBonus",
        secondaryField: "welcomePackage",
        tertiaryField: "addedBonus", // Remove free spins - not needed
        primaryLabel: "Welcome Bonus",
        secondaryLabel: "Welcome Package",
        tertiaryLabel: "Added Bonus",
        icon: "🎰",
        ctaDefault: "Claim Bonus",
        fieldsToShow: 3, // Show only 2 fields
        // New flexible field selection
        displayFields: ["primary", "secondary", "tertiary"], // Only show Welcome Bonus and Welcome Package
        secondaryFieldCrossthrough: false // No crossthrough for casino welcome packages
    },
    sports_betting: {
        primaryField: "signupBonus",
        secondaryField: "oddsBoost", 
        tertiaryField: "freeBet",
        primaryLabel: "Sign-up Bonus",
        secondaryLabel: "Odds Boost",
        tertiaryLabel: "Free Bet",
        icon: "⚽",
        ctaDefault: "Get Bonus",
        fieldsToShow: 3, // Show all 3 fields
        // New flexible field selection
        displayFields: ["primary", "secondary", "tertiary"], // Which fields to show
        secondaryFieldCrossthrough: false // No crossthrough for sports betting
    },
    software_saas: {
        primaryField: "monthlyPrice",
        secondaryField: "yearlyPrice",
        tertiaryField: "trialPeriod",
        primaryLabel: "Monthly Price",
        secondaryLabel: "Yearly Price",
        tertiaryLabel: "Free Trial",
        icon: "💻",
        ctaDefault: "Start Free Trial",
        fieldsToShow: 3, // Show all 3 fields
        // New flexible field selection
        displayFields: ["primary", "secondary", "tertiary"], // Which fields to show
        secondaryFieldCrossthrough: false // No crossthrough for SaaS yearly pricing
    },
    streaming_services: {
        primaryField: "monthlyPrice",
        secondaryField: "trialPeriod",
        tertiaryField: "contentHighlight",
        primaryLabel: "Monthly Price",
        secondaryLabel: "Free Trial",
        tertiaryLabel: "4K Content",
        icon: "📺",
        ctaDefault: "Start Watching",
        fieldsToShow: 3, // Show all 3 fields
        // New flexible field selection
        displayFields: ["primary", "secondary", "tertiary"], // Which fields to show
        secondaryFieldCrossthrough: false // No crossthrough for streaming services
    },
    vpn_services: {
        primaryField: "monthlyPrice",
        secondaryField: "serverCount",
        tertiaryField: "speedInfo",
        primaryLabel: "Monthly Price",
        secondaryLabel: "Server Network",
        tertiaryLabel: "High Speed",
        icon: "🛡️",
        ctaDefault: "Get VPN",
        fieldsToShow: 3, // Show all 3 fields
        // New flexible field selection
        displayFields: ["primary", "secondary", "tertiary"], // Which fields to show
        secondaryFieldCrossthrough: false // No crossthrough for VPN services
    },
    crypto_exchanges: {
        primaryField: "tradingFee",
        secondaryField: "supportedCoins",
        tertiaryField: "securityRating",
        primaryLabel: "Trading Fee",
        secondaryLabel: "Coin Support",
        tertiaryLabel: "Security Rating",
        icon: "💰",
        ctaDefault: "Start Trading",
        fieldsToShow: 3, // Show all 3 fields
        // New flexible field selection
        displayFields: ["primary", "secondary", "tertiary"], // Which fields to show
        secondaryFieldCrossthrough: false // No crossthrough for crypto exchanges
    },
    web_hosting: {
        primaryField: "monthlyPrice",
        secondaryField: "storage",
        tertiaryField: "uptime",
        primaryLabel: "Monthly Price",
        secondaryLabel: "Storage",
        tertiaryLabel: "Uptime Guarantee",
        icon: "🌐",
        ctaDefault: "Get Hosting",
        fieldsToShow: 3, // Show all 3 fields
        // New flexible field selection
        displayFields: ["primary", "secondary", "tertiary"], // Which fields to show
        secondaryFieldCrossthrough: false // No crossthrough for web hosting
    },
    restaurants: {
        primaryField: "priceRange",
        secondaryField: "specialOffer",
        tertiaryField: null, // Only show 2 fields
        primaryLabel: "Price Range",
        secondaryLabel: "Special Offers",
        tertiaryLabel: null,
        icon: "🍕",
        ctaDefault: "Make Reservation",
        fieldsToShow: 2, // Only show 2 fields
        // New flexible field selection
        displayFields: ["primary", "secondary"], // Only show primary and secondary
        secondaryFieldCrossthrough: false // No crossthrough for restaurants
    },
    hotels_travel: {
        primaryField: "roomRate",
        secondaryField: "amenities",
        tertiaryField: null, // Only show 2 fields
        primaryLabel: "Room Rate",
        secondaryLabel: "Premium Amenities",
        tertiaryLabel: null,
        icon: "🏨",
        ctaDefault: "Book Now",
        fieldsToShow: 2, // Only show 2 fields
        // New flexible field selection
        displayFields: ["primary", "secondary"], // Only show primary and secondary
        secondaryFieldCrossthrough: false // No crossthrough for hotels
    }
};

// Make template configuration globally available
window.TEMPLATE_TYPE = TEMPLATE_TYPE;
window.TEMPLATE_DISPLAY_CONFIG = TEMPLATE_DISPLAY_CONFIG;
window.CURRENT_TEMPLATE_CONFIG = TEMPLATE_DISPLAY_CONFIG[TEMPLATE_TYPE];

/*
===========================================
Everything below automatically uses the settings above.
Don't edit below unless you need advanced customization.
===========================================
*/

// ===========================================
// MAIN SITE CONFIGURATION
// ===========================================

const SITE_CONFIG = {
    // Basic Site Information
    brand: {
        name: "Brand Name", // Will be overridden by brand-config.js
        tagline: "Brand Tagline", // Will be overridden by brand-config.js
        description: `We review and rank the best ${PRODUCT_TYPE.toLowerCase()} to help you make informed decisions.`,
        logo: "./assets/images/logo.png", // Will be overridden by brand-config.js
        favicon: FAVICON // Browser tab icon
    },
    
    // SEO Settings
    seo: {
        title: `Top 10 ${NICHE} - Best ${PRODUCT_TYPE} Reviews 2025`,
        description: `Discover the best ${PRODUCT_TYPE.toLowerCase()} with our comprehensive reviews. Compare features, prices, and user ratings.`,
        keywords: `${NICHE.toLowerCase()}, best ${PRODUCT_TYPE.toLowerCase()}, reviews, top 10, comparison, 2025`,
        ogImage: "./assets/images/og-image.jpg", // Social media preview image (1200x630px recommended)
        siteUrl: SITE_URL,
        author: "Brand Name", // Will be overridden by brand-config.js
        language: "en-US"
    },
    
    // Legal Pages
    legal: {
        privacyPolicy: "./privacy.html",
        termsOfService: "./terms.html",
        affiliateDisclosure: "./disclaimer.html",
        cookiePolicy: "./cookies.html",
        contactPage: "./contact.html"
    }
};

// ===========================================
// NICHE-SPECIFIC CONFIGURATION
// ===========================================

const NICHE_CONFIG = {
    // Main Topic Settings
    niche: NICHE,
    productType: PRODUCT_TYPE,
    audience: AUDIENCE,
    
    // Hero Section Content
    hero: {
        title: `The Top 10 ${NICHE} Reviewed & Ranked for 2025`,
        subtitle: `We've tested ${NUMBER_TESTED} ${PRODUCT_TYPE.toLowerCase()} and ranked the best ones. Save hours of research with our expert recommendations.`,
        ctaText: "See Our Top Pick",
        secondaryCtaText: "Compare All Options",
        
        // Trust Indicators
        trustIndicators: {
            reviewCount: REVIEW_COUNT,
            userCount: USER_COUNT,
            lastUpdate: LAST_UPDATE,
            numberTested: NUMBER_TESTED
        }
    },
    
    // Navigation Menu
    navigation: {
        menuItems: [
            { text: "Home", url: "#home" },
            { text: `🏆 Top 10 ${NICHE}`, url: "#top10", highlight: true },
            { text: "Reviews", url: "#reviews" },
            { text: "Compare", url: "#comparison" },
            { text: "Blog", url: "./blog.html" },
            { text: "Contact", url: "#contact" }
        ]
    },
    
    // Top Pick Section
    topPick: {
        badge: "EDITOR'S CHOICE",
        title: "Breville Barista Express",
        description: "The perfect balance of convenience and quality. This coffee maker delivers exceptional espresso with built-in grinder and milk frother.",
        rating: "4.8",
        reviewCount: "1,247",
        price: "£699",
        priceNote: "Starting at",
        features: [
            "Built-in conical burr grinder",
            "15-bar pressure pump",
            "Milk frother for lattes"
        ],
        ctaText: "Get Best Price",
        affiliateLink: "https://example.com/affiliate-link-1" // REPLACE WITH YOUR ACTUAL AFFILIATE LINK
    }
};

// ===========================================
// STYLING CONFIGURATION
// ===========================================

const STYLE_CONFIG = {
    // Color Scheme - Change these to match your brand
    colors: {
        primary: "#2563eb",        // Main brand color
        primaryHover: "#1d4ed8",   // Darker shade for hover
        secondary: "#64748b",      // Secondary color
        accent: "#10b981",         // Accent color (green)
        warning: "#f59e0b",        // Warning color (yellow)
        danger: "#ef4444",         // Danger color (red)
        success: "#10b981",        // Success color
        
        // Background colors
        bgPrimary: "#ffffff",      // Main background
        bgSecondary: "#f9fafb",    // Secondary background
        bgDark: "#1f2937",         // Dark background
        bgCard: "#ffffff",         // Card backgrounds
        
        // Text colors
        textPrimary: "#1f2937",    // Main text
        textSecondary: "#6b7280",  // Secondary text
        textLight: "#9ca3af",      // Light text
        textWhite: "#ffffff"       // White text
    },
    
    // Typography
    fonts: {
        primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        secondary: "'Georgia', serif",
        monospace: "'Fira Code', monospace"
    },
    
    // Spacing (in rem)
    spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
        "3xl": "4rem"
    },
    
    // Border radius
    borderRadius: {
        sm: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem"
    },
    
    // Animations
    animations: {
        fast: "0.15s ease-in-out",
        normal: "0.3s ease-in-out",
        slow: "0.5s ease-in-out"
    }
};

// ===========================================
// TRACKING CONFIGURATION
// ===========================================

const TRACKING_CONFIG = {
    // Analytics Settings
    analytics: {
        googleAnalytics: {
            enabled: true,
            trackingId: "G-BQKJMHS9XZ", // REPLACE WITH YOUR GA4 MEASUREMENT ID
            anonymizeIp: true,
            cookieDomain: "auto"
        },
        
        metaPixel: {
            enabled: true,
            pixelId: "YOUR_PIXEL_ID", // REPLACE WITH YOUR META PIXEL ID
            advancedMatching: true
        },
        
        // Add other tracking services as needed
        customTracking: {
            enabled: false,
            // Replace this with your Google Apps Script Web App URL after deployment
            endpointUrl: "https://script.google.com/macros/s/AKfycbx36STHE0byk1X2HPKF-alEWYL4iakVnYygBT58A96Y5KpbKqOLfGb4VNnGaPKsemgEYA/exec"
        }
    },
    
    // Event Tracking Settings
    events: {
        affiliateClicks: true,
        emailCapture: true,
        scrollDepth: true,
        timeOnPage: true,
        exitIntent: true
    },
    
    // Conversion Tracking
    conversions: {
        primaryGoal: "affiliate_click",
        secondaryGoal: "email_capture",
        conversionValue: 0.50 // Average value per conversion
    }
};

// ===========================================
// FEATURE FLAGS
// ===========================================

const FEATURE_FLAGS = {
    // Enable/disable features
    mobileMenu: true,
    backToTop: true,
    floatingCTA: true,
    emailCapture: true,
    socialSharing: true,
    darkMode: false,
    animations: true,
    lazyLoading: true,
    
    // A/B Testing flags
    testVariants: {
        heroLayout: "default", // "default", "minimal", "video"
        ctaStyle: "default",   // "default", "animated", "minimal"
        productLayout: "grid"  // "grid", "list", "cards"
    }
};

// ===========================================
// THIRD-PARTY INTEGRATIONS
// ===========================================

const INTEGRATIONS = {
    // Email Marketing
    emailService: {
        provider: "mailchimp", // "mailchimp", "convertkit", "klaviyo", "custom"
        apiKey: "YOUR_API_KEY",
        listId: "YOUR_LIST_ID",
        apiUrl: "https://api.mailchimp.com/3.0/"
    },
    
    // Form Handling
    formService: {
        provider: "netlify", // "netlify", "formspree", "custom"
        actionUrl: "https://formspree.io/f/YOUR_FORM_ID"
    },
    
    // CDN and Performance
    cdn: {
        images: "https://your-cdn.com/images/",
        assets: "https://your-cdn.com/assets/"
    },
    
    // Reviews and Ratings
    reviews: {
        provider: "trustpilot", // "trustpilot", "google", "custom"
        accountId: "YOUR_ACCOUNT_ID"
    }
};

// ===========================================
// RESPONSIVE BREAKPOINTS
// ===========================================

const BREAKPOINTS = {
    mobile: "767px",
    tablet: "1023px",
    desktop: "1024px",
    large: "1200px",
    xlarge: "1400px"
};

// ===========================================
// EXPORT CONFIGURATION
// ===========================================

// Make configurations available globally
if (typeof window !== 'undefined') {
    window.SITE_CONFIG = SITE_CONFIG;
    window.NICHE_CONFIG = NICHE_CONFIG;
    window.PRODUCTS_CONFIG = PRODUCTS_CONFIG;
    window.STYLE_CONFIG = STYLE_CONFIG;
    window.TRACKING_CONFIG = TRACKING_CONFIG;
    window.FEATURE_FLAGS = FEATURE_FLAGS;
    window.INTEGRATIONS = INTEGRATIONS;
    window.BREAKPOINTS = BREAKPOINTS;
}

// Export for Node.js/modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SITE_CONFIG,
        NICHE_CONFIG,
        PRODUCTS_CONFIG,
        STYLE_CONFIG,
        TRACKING_CONFIG,
        FEATURE_FLAGS,
        INTEGRATIONS,
        BREAKPOINTS
    };
}

// ===========================================
// CONFIGURATION HELPERS
// ===========================================

/**
 * Helper function to get configuration value
 */
function getConfig(path, defaultValue = null) {
    const keys = path.split('.');
    let value = window;
    
    for (const key of keys) {
        value = value?.[key];
        if (value === undefined) {
            return defaultValue;
        }
    }
    
    return value;
}

/**
 * Helper function to update configuration
 */
function updateConfig(path, newValue) {
    const keys = path.split('.');
    const lastKey = keys.pop();
    let target = window;
    
    for (const key of keys) {
        if (!target[key]) {
            target[key] = {};
        }
        target = target[key];
    }
    
    target[lastKey] = newValue;
}

/**
 * Replace placeholders in DOM elements
 */
function replacePlaceholdersInDOM() {
    // Replace all text content that contains placeholders
    const allElements = document.querySelectorAll('*');
    
    allElements.forEach(element => {
        // Skip script and style elements
        if (element.tagName === 'SCRIPT' || element.tagName === 'STYLE') {
            return;
        }
        
        // Replace text content
        if (element.childNodes.length > 0) {
            element.childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE && node.textContent.includes('{{')) {
                    node.textContent = replacePlaceholders(node.textContent);
                }
            });
        }
        
        // Replace attributes that might contain placeholders
        const attributes = ['href', 'src', 'alt', 'title', 'placeholder'];
        attributes.forEach(attr => {
            if (element.hasAttribute(attr)) {
                const value = element.getAttribute(attr);
                if (value && value.includes('{{')) {
                    element.setAttribute(attr, replacePlaceholders(value));
                }
            }
        });
    });
    
    // Handle data attributes
    const elementsWithDataConfig = document.querySelectorAll('[data-config]');
    elementsWithDataConfig.forEach(element => {
        const configPath = element.getAttribute('data-config');
        const value = getConfig(configPath);
        if (value !== null) {
            element.textContent = value;
        }
    });
    
    console.log('✅ Placeholders replaced in DOM');
}

// Helper function to get editor's choice product
function getEditorsChoiceProduct() {
    const editorsConfig = window.EDITORS_CHOICE_CONFIG || EDITORS_CHOICE_CONFIG;
    
    // Check if manual override is enabled
    if (editorsConfig.useManualOverride) {
        return editorsConfig.manualOverride;
    }
    
    // Otherwise use selected product from config
    const selectedProductKey = editorsConfig.selectedProduct || 'product1';
    return PRODUCTS_CONFIG[selectedProductKey] || PRODUCTS_CONFIG.product1;
}

// Helper functions to get template-aware values for top pick section
function getTopPickPrimaryValue() {
    const product = getEditorsChoiceProduct();
    const templateConfig = TEMPLATE_DISPLAY_CONFIG[TEMPLATE_TYPE];
    
    if (templateConfig && templateConfig.primaryField) {
        return product[templateConfig.primaryField] || product.price || '£699';
    }
    return product.price || '£699';
}

function getTopPickSecondaryValue() {
    const product = getEditorsChoiceProduct();
    const templateConfig = TEMPLATE_DISPLAY_CONFIG[TEMPLATE_TYPE];
    
    if (templateConfig && templateConfig.secondaryField) {
        return product[templateConfig.secondaryField] || product.originalPrice || '£799';
    }
    return product.originalPrice || '£799';
}

function getTopPickTertiaryValue() {
    const product = getEditorsChoiceProduct();
    const templateConfig = TEMPLATE_DISPLAY_CONFIG[TEMPLATE_TYPE];
    
    if (templateConfig && templateConfig.tertiaryField) {
        return product[templateConfig.tertiaryField] || product.discount || '13% OFF';
    }
    return product.discount || '13% OFF';
}

// Helper functions for feature text/icons removed - now handled dynamically by TopPickManager


/**
 * Helper function to replace placeholders in text
 */
function replacePlaceholders(text, config = {}) {
    const allConfig = {
        // Basic settings
        SITE_NAME: SITE_CONFIG.brand.name,
        SITE_TAGLINE: SITE_CONFIG.brand.tagline,
        NICHE: NICHE,
        PRODUCT_TYPE: PRODUCT_TYPE,
        AUDIENCE: AUDIENCE,
        CONTACT_EMAIL: CONTACT_EMAIL,
        SITE_URL: SITE_URL,
        REVIEW_COUNT: REVIEW_COUNT,
        USER_COUNT: USER_COUNT,
        LAST_UPDATE: LAST_UPDATE,
        NUMBER_TESTED: NUMBER_TESTED,
        
        // Product 1 placeholders
        PRODUCT_1_NAME: PRODUCTS_CONFIG.product1?.name || 'Product 1',
        PRODUCT_1_DESCRIPTION: PRODUCTS_CONFIG.product1?.description || 'Product description',
        RATING_1: PRODUCTS_CONFIG.product1?.rating || '4.5',
        REVIEW_COUNT_1: PRODUCTS_CONFIG.product1?.reviewCount || '100',
        PRICE_1: PRODUCTS_CONFIG.product1?.price || '£99',
        ORIGINAL_PRICE_1: PRODUCTS_CONFIG.product1?.originalPrice || '£129',
        DISCOUNT_1: PRODUCTS_CONFIG.product1?.discount || '23% OFF',
        AFFILIATE_LINK_1: PRODUCTS_CONFIG.product1?.affiliateLink || '#',
        CTA_TEXT_1: PRODUCTS_CONFIG.product1?.ctaText || 'Get Best Price',
        
        // Product 2 placeholders
        PRODUCT_2_NAME: PRODUCTS_CONFIG.product2?.name || 'Product 2',
        PRODUCT_2_DESCRIPTION: PRODUCTS_CONFIG.product2?.description || 'Product description',
        RATING_2: PRODUCTS_CONFIG.product2?.rating || '4.3',
        REVIEW_COUNT_2: PRODUCTS_CONFIG.product2?.reviewCount || '85',
        PRICE_2: PRODUCTS_CONFIG.product2?.price || '£79',
        ORIGINAL_PRICE_2: PRODUCTS_CONFIG.product2?.originalPrice || '£99',
        DISCOUNT_2: PRODUCTS_CONFIG.product2?.discount || '20% OFF',
        AFFILIATE_LINK_2: PRODUCTS_CONFIG.product2?.affiliateLink || '#',
        CTA_TEXT_2: PRODUCTS_CONFIG.product2?.ctaText || 'Get Best Price',
        
        // Product 3 placeholders
        PRODUCT_3_NAME: PRODUCTS_CONFIG.product3?.name || 'Product 3',
        PRODUCT_3_DESCRIPTION: PRODUCTS_CONFIG.product3?.description || 'Product description',
        RATING_3: PRODUCTS_CONFIG.product3?.rating || '4.2',
        REVIEW_COUNT_3: PRODUCTS_CONFIG.product3?.reviewCount || '72',
        PRICE_3: PRODUCTS_CONFIG.product3?.price || '£149',
        ORIGINAL_PRICE_3: PRODUCTS_CONFIG.product3?.originalPrice || '£179',
        DISCOUNT_3: PRODUCTS_CONFIG.product3?.discount || '17% OFF',
        AFFILIATE_LINK_3: PRODUCTS_CONFIG.product3?.affiliateLink || '#',
        CTA_TEXT_3: PRODUCTS_CONFIG.product3?.ctaText || 'Get Best Price',
        
        // Product 4 placeholders
        PRODUCT_4_NAME: PRODUCTS_CONFIG.product4?.name || 'Product 4',
        PRODUCT_4_DESCRIPTION: PRODUCTS_CONFIG.product4?.description || 'Product description',
        RATING_4: PRODUCTS_CONFIG.product4?.rating || '4.4',
        REVIEW_COUNT_4: PRODUCTS_CONFIG.product4?.reviewCount || '567',
        PRICE_4: PRODUCTS_CONFIG.product4?.price || '£179',
        ORIGINAL_PRICE_4: PRODUCTS_CONFIG.product4?.originalPrice || '£219',
        DISCOUNT_4: PRODUCTS_CONFIG.product4?.discount || '18% OFF',
        AFFILIATE_LINK_4: PRODUCTS_CONFIG.product4?.affiliateLink || '#',
        CTA_TEXT_4: PRODUCTS_CONFIG.product4?.ctaText || 'Get Best Price',
        
        // Product 5 placeholders
        PRODUCT_5_NAME: PRODUCTS_CONFIG.product5?.name || 'Product 5',
        PRODUCT_5_DESCRIPTION: PRODUCTS_CONFIG.product5?.description || 'Product description',
        RATING_5: PRODUCTS_CONFIG.product5?.rating || '4.2',
        REVIEW_COUNT_5: PRODUCTS_CONFIG.product5?.reviewCount || '743',
        PRICE_5: PRODUCTS_CONFIG.product5?.price || '£89',
        ORIGINAL_PRICE_5: PRODUCTS_CONFIG.product5?.originalPrice || '£119',
        DISCOUNT_5: PRODUCTS_CONFIG.product5?.discount || '25% OFF',
        AFFILIATE_LINK_5: PRODUCTS_CONFIG.product5?.affiliateLink || '#',
        CTA_TEXT_5: PRODUCTS_CONFIG.product5?.ctaText || 'Get Best Price',
        
        // Product 6 placeholders
        PRODUCT_6_NAME: PRODUCTS_CONFIG.product6?.name || 'Product 6',
        PRODUCT_6_DESCRIPTION: PRODUCTS_CONFIG.product6?.description || 'Product description',
        RATING_6: PRODUCTS_CONFIG.product6?.rating || '4.3',
        REVIEW_COUNT_6: PRODUCTS_CONFIG.product6?.reviewCount || '789',
        PRICE_6: PRODUCTS_CONFIG.product6?.price || '£149',
        ORIGINAL_PRICE_6: PRODUCTS_CONFIG.product6?.originalPrice || '£179',
        DISCOUNT_6: PRODUCTS_CONFIG.product6?.discount || '17% OFF',
        AFFILIATE_LINK_6: PRODUCTS_CONFIG.product6?.affiliateLink || '#',
        CTA_TEXT_6: PRODUCTS_CONFIG.product6?.ctaText || 'Get Best Price',
        
        // Product 7 placeholders
        PRODUCT_7_NAME: PRODUCTS_CONFIG.product7?.name || 'Product 7',
        PRODUCT_7_DESCRIPTION: PRODUCTS_CONFIG.product7?.description || 'Product description',
        RATING_7: PRODUCTS_CONFIG.product7?.rating || '4.0',
        REVIEW_COUNT_7: PRODUCTS_CONFIG.product7?.reviewCount || '334',
        PRICE_7: PRODUCTS_CONFIG.product7?.price || '£39',
        ORIGINAL_PRICE_7: PRODUCTS_CONFIG.product7?.originalPrice || '£59',
        DISCOUNT_7: PRODUCTS_CONFIG.product7?.discount || '34% OFF',
        AFFILIATE_LINK_7: PRODUCTS_CONFIG.product7?.affiliateLink || '#',
        CTA_TEXT_7: PRODUCTS_CONFIG.product7?.ctaText || 'Get Best Price',
        
        // Product 8 placeholders
        PRODUCT_8_NAME: PRODUCTS_CONFIG.product8?.name || 'Product 8',
        PRODUCT_8_DESCRIPTION: PRODUCTS_CONFIG.product8?.description || 'Product description',
        RATING_8: PRODUCTS_CONFIG.product8?.rating || '4.1',
        REVIEW_COUNT_8: PRODUCTS_CONFIG.product8?.reviewCount || '256',
        PRICE_8: PRODUCTS_CONFIG.product8?.price || '£49',
        ORIGINAL_PRICE_8: PRODUCTS_CONFIG.product8?.originalPrice || '£69',
        DISCOUNT_8: PRODUCTS_CONFIG.product8?.discount || '29% OFF',
        AFFILIATE_LINK_8: PRODUCTS_CONFIG.product8?.affiliateLink || '#',
        CTA_TEXT_8: PRODUCTS_CONFIG.product8?.ctaText || 'Get Best Price',
        
        // Product 9 placeholders
        PRODUCT_9_NAME: PRODUCTS_CONFIG.product9?.name || 'Product 9',
        PRODUCT_9_DESCRIPTION: PRODUCTS_CONFIG.product9?.description || 'Product description',
        RATING_9: PRODUCTS_CONFIG.product9?.rating || '4.6',
        REVIEW_COUNT_9: PRODUCTS_CONFIG.product9?.reviewCount || '189',
        PRICE_9: PRODUCTS_CONFIG.product9?.price || '£159',
        ORIGINAL_PRICE_9: PRODUCTS_CONFIG.product9?.originalPrice || '£189',
        DISCOUNT_9: PRODUCTS_CONFIG.product9?.discount || '16% OFF',
        AFFILIATE_LINK_9: PRODUCTS_CONFIG.product9?.affiliateLink || '#',
        CTA_TEXT_9: PRODUCTS_CONFIG.product9?.ctaText || 'Get Best Price',
        
        // Product 10 placeholders
        PRODUCT_10_NAME: PRODUCTS_CONFIG.product10?.name || 'Product 10',
        PRODUCT_10_DESCRIPTION: PRODUCTS_CONFIG.product10?.description || 'Product description',
        RATING_10: PRODUCTS_CONFIG.product10?.rating || '4.2',
        REVIEW_COUNT_10: PRODUCTS_CONFIG.product10?.reviewCount || '167',
        PRICE_10: PRODUCTS_CONFIG.product10?.price || '£129',
        ORIGINAL_PRICE_10: PRODUCTS_CONFIG.product10?.originalPrice || '£159',
        DISCOUNT_10: PRODUCTS_CONFIG.product10?.discount || '19% OFF',
        AFFILIATE_LINK_10: PRODUCTS_CONFIG.product10?.affiliateLink || '#',
        CTA_TEXT_10: PRODUCTS_CONFIG.product10?.ctaText || 'Get Best Price',
        
        // Top pick placeholders (using EDITORS_CHOICE_CONFIG) - consistent with product naming
        TOP_PICK_NAME: getEditorsChoiceProduct()?.name || 'Top Pick Product',
        TOP_PICK_DESCRIPTION: getEditorsChoiceProduct()?.description || 'Top pick description',
        TOP_PICK_RATING: getEditorsChoiceProduct()?.rating || '4.8',
        TOP_PICK_REVIEW_COUNT: getEditorsChoiceProduct()?.reviewCount || '1247',
        TOP_PICK_AFFILIATE_LINK: getEditorsChoiceProduct()?.affiliateLink || '#',
        TOP_PICK_CTA_TEXT: getEditorsChoiceProduct()?.ctaText || 'Get Best Price',
        
        // Top pick features are now handled dynamically by TopPickManager
        
        // Hero section placeholders
        HERO_IMAGE_SRC: HERO_CONFIG?.image?.src || './assets/images/hero-image.jpg',
        HERO_IMAGE_ALT: HERO_CONFIG?.image?.alt || '{{PRODUCT_TYPE}} Reviews',
        HERO_VIDEO_TEXT: HERO_CONFIG?.video?.text || 'Watch Our Review Video',
        
        // Spread all config objects
        ...SITE_CONFIG.brand,
        ...SITE_CONFIG.seo,
        ...SITE_CONFIG.contact,
        ...NICHE_CONFIG,
        ...NICHE_CONFIG.hero,
        ...NICHE_CONFIG.hero.trustIndicators,
        ...NICHE_CONFIG.topPick,
        ...SECTION_TITLES.comparisonSection, // Add comparison section config
        ...config
    };
    
    return text.replace(/\{\{([^}]+)\}\}/g, (match, key) => {
        // Handle nested properties
        const keys = key.trim().split('.');
        let value = allConfig;
        
        for (const k of keys) {
            value = value?.[k];
            if (value === undefined) {
                break;
            }
        }
        
        return value !== undefined ? value : match;
    });
}

/**
 * Apply configuration to page elements
 */
function applyConfigToPage() {
    // Update page title for homepage
    const currentPage = window.location.pathname.toLowerCase();
    const title = document.querySelector('title');
    if (title && (currentPage.includes('index.html') || currentPage === '/' || currentPage === '')) {
        title.textContent = replacePlaceholders(INDEX_PAGE_TITLE);
    }
    
    // Update favicon
    let favicon = document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]');
    if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'icon';
        document.head.appendChild(favicon);
    }
    favicon.href = FAVICON;
    
    // Update meta descriptions
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', replacePlaceholders(metaDescription.getAttribute('content') || ''));
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
        metaKeywords.setAttribute('content', replacePlaceholders(metaKeywords.getAttribute('content') || ''));
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
        ogTitle.setAttribute('content', replacePlaceholders(ogTitle.getAttribute('content') || ''));
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
        ogDescription.setAttribute('content', replacePlaceholders(ogDescription.getAttribute('content') || ''));
    }
    
    // Update Open Graph image
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
        ogImage.setAttribute('content', SITE_CONFIG.seo.ogImage);
    }
    
    console.log('✅ Configuration applied to page elements');
}

/**
 * Initialize configuration and replace placeholders
 */
function initializeConfig() {
    console.log('🎯 Affiliate Template Configuration Loading...');
    console.log('📊 Niche:', NICHE_CONFIG.niche);
    console.log('🎨 Brand:', SITE_CONFIG.brand.name);
    console.log('📈 Tracking:', TRACKING_CONFIG.analytics.googleAnalytics.enabled ? 'Enabled' : 'Disabled');
    
    // Apply configuration to page
    applyConfigToPage();
    
    // Replace placeholders in HTML
    replacePlaceholdersInDOM();
    
    console.log('✅ Configuration initialization complete');
}

// Make helpers available globally
if (typeof window !== 'undefined') {
    window.getConfig = getConfig;
    window.updateConfig = updateConfig;
    window.replacePlaceholders = replacePlaceholders;
    window.applyConfigToPage = applyConfigToPage;
    window.initializeConfig = initializeConfig;
}

/**

 * Top pick icons are now managed directly through product.features in config
 * Edit the manual override product.features array to change icons
 */

// Initialize when DOM is loaded
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initializeConfig);
} 