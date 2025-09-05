/**
 * Streaming Page Configuration
 * Dynamic content management for streaming and video content
 */

// Page title configuration
const STREAMING_PAGE_TITLE = "Live Streams | {{BRAND_NAME}}";

// Hero section configuration
const STREAMING_HERO = {
    logo: {
        type: 'text', // Options: 'text', 'image', 'combined'
        text: 'Laptop World Streams',
        image: {
            src: './assets/images/Test_Logo1.png',
            alt: 'Laptop World Logo',
            scale: 3.0,
            left: 0 // Individual positioning for image (pixels) - positive moves right, negative moves left
        },
        textColor: 'var(--text-primary)',
        scale: 1.0,
        left: 0 // Individual positioning for text (pixels) - positive moves right, negative moves left
    },
    subtitle: 'Watch live gaming laptop reviews, benchmarks, and exclusive tech demonstrations',
    description: 'Join our community for live gaming laptop streams, performance tests, hardware reviews, and exclusive tech analysis from top reviewers.',
    
    // Rotating hero videos/streams
    featuredStreams: {
        enabled: true,
        autoRotate: true,
        rotationInterval: 8000, // 8 seconds
        streams: [
            {
                id: 'hero-stream-1',
                title: 'RTX 4090 Gaming Laptop Benchmarks',
                description: 'Live 4K gaming performance tests', /* keep it short and sweet */
                streamer: 'TechReviewer',
                viewers: '2,847',
                category: 'Gaming Laptops',
                platform: 'Twitch',
                platformIcon: 'fab fa-twitch',
                thumbnail: './assets/images/laptop_test/stream25.png',
                isLive: true,
                tags: ['RTX 4090', 'Benchmarks', 'Gaming'],
                url: 'https://twitch.tv/techreviewer'
            },
            {
                id: 'hero-stream-2', 
                title: 'ASUS ROG Zephyrus G18 Review',
                description: 'Live unboxing and first impressions', /* keep it short and sweet */
                streamer: 'LaptopGuru',
                viewers: '1,592',
                category: 'Laptop Reviews',
                platform: 'Youtube',
                platformIcon: 'fab fa-youtube',
                thumbnail: './assets/images/laptop_test/stream24.jpg',
                isLive: true,
                tags: ['ASUS ROG', 'Unboxing', 'Review'],
                url: 'https://youtube.com/watch?v=asusrog123'
            },
            {
                id: 'hero-stream-3',
                title: 'Intel vs AMD Gaming Performance',
                description: 'CPU comparison in latest games', /* keep it short and sweet */
                streamer: 'CPUBenchmark',
                viewers: '3,256',
                category: 'CPU Testing',
                platform: 'Twitch',
                platformIcon: 'fab fa-twitch',
                thumbnail: './assets/images/laptop_test/stream23.jpg',
                isLive: true,
                tags: ['Intel', 'AMD', 'Comparison'],
                url: 'https://twitch.tv/cpubenchmark'
            }
        ]
    },
    
    stats: {
        enabled: true,
        items: [
            { 
                label: 'Live Streams', 
                value: '50+', 
                icon: '🔴',
                description: 'Active Live Streams'
            },
            { 
                label: 'Content Creators', 
                value: '25+', 
                icon: '👥',
                description: 'Verified Streamers'
            },
            { 
                label: 'Platforms', 
                value: '5', 
                icon: '🌐',
                description: 'Streaming Platforms'
            },
            { 
                label: 'Total Views', 
                value: '10M+', 
                icon: '👁️',
                description: 'Monthly Views'
            }
        ]
    }
};

// Streaming categories - Extended with top 10 categories
const STREAMING_CATEGORIES = [
    {
        id: 'gaming-laptops',
        name: 'Gaming Laptops',
        description: 'Live laptop reviews, benchmarks, and comparisons',
        icon: '💻',
        color: '#ff6b6b',
        featured: true,
        url: 'https://twitch.tv/directory/game/Gaming',
        backgroundImage: './assets/images/laptop_test/stream22.avif',    // Explicit image choice for this category
        viewerCount: '195K',                                            // Custom viewer count for this category
        tags: ['Laptops', 'Reviews', 'Live'],                           // Custom tags for this category
        // Background image positioning and scaling settings
        imageScale: 1.0,                                               // Scale for background image (1.0 = 100%, 1.2 = 120%, etc.)
        imagePositioning: {
            backgroundPosition: 'center',                              // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
            backgroundSize: 'cover'                                    // Options: 'cover', 'contain', 'auto', '100% 100%'
        }
    },
    {
        id: 'tech',
        name: 'Hardware Reviews',
        description: 'GPU, CPU, and component reviews and benchmarks',
        icon: '🔧',
        color: '#4ecdc4',
        featured: true,
        url: 'https://youtube.com/results?search_query=hardware+reviews',
        backgroundImage: './assets/images/laptop_test/stream21.avif',    // Explicit image choice for this category
        viewerCount: '67K',                                            // Custom viewer count for this category
        tags: ['Hardware', 'Reviews', 'Benchmarks'],                     // Custom tags for this category
        // Background image positioning and scaling settings
        imageScale: 1.0,                                               // Scale for background image (1.0 = 100%, 1.2 = 120%, etc.)
        imagePositioning: {
            backgroundPosition: 'center',                          // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
            backgroundSize: 'cover'                                    // Options: 'cover', 'contain', 'auto', '100% 100%'
        }
    },
    {
        id: 'gaming-performance',
        name: 'Gaming Performance',
        description: 'Live gaming benchmarks, FPS tests, and performance analysis',
        icon: '🎮',
        color: '#ffe66d',
        featured: true,
        url: 'https://twitch.tv/directory/game/Just%20Chatting?tag=gaming',
        backgroundImage: './assets/images/laptop_test/stream20.jpg',    // Explicit image choice for this category
        viewerCount: '89K',                                            // Custom viewer count for this category
        tags: ['Gaming', 'Benchmarks', 'Performance'],                      // Custom tags for this category
        // Background image positioning and scaling settings
        imageScale: 1.0,                                               // Scale for background image (1.0 = 100%, 1.2 = 120%, etc.)
        imagePositioning: {
            backgroundPosition: 'center',                       // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
            backgroundSize: 'cover'                                    // Options: 'cover', 'contain', 'auto', '100% 100%'
        }
    },
    {
        id: 'laptop-unboxing',
        name: 'Laptop Unboxing',
        description: 'First look at new gaming laptops and accessories',
        icon: '📦',
        color: '#a8e6cf',
        featured: false,
        url: 'https://youtube.com/results?search_query=laptop+unboxing',
        backgroundImage: './assets/images/laptop_test/stream19.jpg',   // Explicit image choice for this category
        viewerCount: '52K',                                           // Custom viewer count for this category
        tags: ['Unboxing', 'New Releases', 'First Look'],                    // Custom tags for this category
        // Background image positioning and scaling settings
        imageScale: 1.0,                                               // Scale for background image (1.0 = 100%, 1.2 = 120%, etc.)
        imagePositioning: {
            backgroundPosition: 'center',                       // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
            backgroundSize: 'cover'                                    // Options: 'cover', 'contain', 'auto', '100% 100%'
        }
    },
    {
        id: 'laptop-tutorials',
        name: 'Laptop Tutorials',
        description: 'Setup guides, optimization tips, and maintenance tutorials',
        icon: '🛠️',
        color: '#ffd93d',
        featured: false,
        url: 'https://youtube.com/results?search_query=laptop+tutorials',
        backgroundImage: './assets/images/laptop_test/stream18.webp',    // Explicit image choice for this category
        viewerCount: '28K',                                           // Custom viewer count for this category
        tags: ['Tutorials', 'Setup', 'Optimization'],                    // Custom tags for this category
        // Background image positioning and scaling settings
        imageScale: 1.0,                                               // Scale for background image (1.0 = 100%, 1.2 = 120%, etc.)
        imagePositioning: {
            backgroundPosition: 'center',                       // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
            backgroundSize: 'cover'                                    // Options: 'cover', 'contain', 'auto', '100% 100%'
        }
    },
    {
        id: 'laptop-modding',
        name: 'Laptop Modding',
        description: 'Hardware modifications, upgrades, and customization',
        icon: '🔧',
        color: '#ff9ff3',
        featured: false,
        url: 'https://youtube.com/results?search_query=laptop+modding',
        backgroundImage: './assets/images/laptop_test/stream17.jpg',    // Explicit image choice for this category
        viewerCount: '98K',                                           // Custom viewer count for this category
        tags: ['Modding', 'Upgrades', 'Customization'],                    // Custom tags for this category
        // Background image positioning and scaling settings
        imageScale: 1.0,                                               // Scale for background image (1.0 = 100%, 1.2 = 120%, etc.)
        imagePositioning: {
            backgroundPosition: 'center',                       // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
            backgroundSize: 'cover'                                    // Options: 'cover', 'contain', 'auto', '100% 100%'
        }
    },
    {
        id: 'laptop-repair',
        name: 'Laptop Repair',
        description: 'Troubleshooting, repair guides, and maintenance tips',
        icon: '🔍',
        color: '#54a0ff',
        featured: false,
        url: 'https://youtube.com/results?search_query=laptop+repair',
        backgroundImage: './assets/images/laptop_test/stream16.jpg',    // Explicit image choice for this category
        viewerCount: '37K',                                           // Custom viewer count for this category
        tags: ['Repair', 'Troubleshooting', 'Maintenance'],                    // Custom tags for this category
        // Background image positioning and scaling settings
        imageScale: 1.0,                                               // Scale for background image (1.0 = 100%, 1.2 = 120%, etc.)
        imagePositioning: {
            backgroundPosition: 'center',                       // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
            backgroundSize: 'cover'                                    // Options: 'cover', 'contain', 'auto', '100% 100%'
        }
    },
    {
        id: 'laptop-accessories',
        name: 'Laptop Accessories',
        description: 'Gaming mice, keyboards, cooling pads, and laptop accessories',
        icon: '🖱️',
        color: '#5f27cd',
        featured: false,
        url: 'https://youtube.com/results?search_query=laptop+accessories',
        backgroundImage: './assets/images/laptop_test/stream15.jpg',    // Explicit image choice for this category
        viewerCount: '94K',                                           // Custom viewer count for this category
        tags: ['Accessories', 'Gaming Mice', 'Keyboards'],                    // Custom tags for this category
        // Background image positioning and scaling settings
        imageScale: 1.0,                                               // Scale for background image (1.0 = 100%, 1.2 = 120%, etc.)
        imagePositioning: {
            backgroundPosition: 'center',                       // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
            backgroundSize: 'cover'                                    // Options: 'cover', 'contain', 'auto', '100% 100%'
        }
    },
    {
        id: 'laptop-buying-guides',
        name: 'Laptop Buying Guides',
        description: 'Expert advice on choosing the perfect gaming laptop',
        icon: '📋',
        color: '#00d2d3',
        featured: false,
        url: 'https://youtube.com/results?search_query=laptop+buying+guide',
        backgroundImage: './assets/images/laptop_test/stream14.jpg',    // Explicit image choice for this category
        viewerCount: '47K',                                           // Custom viewer count for this category
        tags: ['Buying Guide', 'Expert Advice', 'Recommendations'],                    // Custom tags for this category
        // Background image positioning and scaling settings
        imageScale: 1.0,                                               // Scale for background image (1.0 = 100%, 1.2 = 120%, etc.)
        imagePositioning: {
            backgroundPosition: 'center',                       // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
            backgroundSize: 'cover'                                    // Options: 'cover', 'contain', 'auto', '100% 100%'
        }
    },
    {
        id: 'laptop-news',
        name: 'Laptop News',
        description: 'Latest gaming laptop releases, industry news, and announcements',
        icon: '📰',
        color: '#ff6348',
        featured: false,
        url: 'https://youtube.com/results?search_query=laptop+news',
        backgroundImage: './assets/images/laptop_test/stream13.webp',    // Explicit image choice for this category
        viewerCount: '72K',                                           // Custom viewer count for this category
        tags: ['News', 'Releases', 'Industry'],                    // Custom tags for this category
        // Background image positioning and scaling settings
        imageScale: 1.0,                                               // Scale for background image (1.0 = 100%, 1.2 = 120%, etc.)
        imagePositioning: {
            backgroundPosition: 'center',                       // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
            backgroundSize: 'cover'                                    // Options: 'cover', 'contain', 'auto', '100% 100%'
        }
    }
];

// Streaming platforms - Extended list with follower counts
const STREAMING_PLATFORMS = [
    {
        name: 'Twitch',
        url: 'https://twitch.tv/dctop10laptops',
        icon: 'fab fa-twitch',
        color: '#9146ff',
        followers: '12.5K followers',
        description: 'Live gaming laptop reviews and performance testing'
    },
    {
        name: 'YouTube',
        url: 'https://youtube.com/@dctop10laptops',
        icon: 'fab fa-youtube',
        color: '#ff0000',
        followers: '28.3K followers',
        description: 'Gaming laptop reviews, benchmarks, and tutorials'
    },
    {
        name: 'Kick',
        url: 'https://kick.com/dctop10laptops',
        icon: 'fab fa-kickstarter',
        color: '#53fc18',
        followers: '8.1K followers',
        description: 'Unfiltered gaming laptop testing and comparisons'
    },
    {
        name: 'Discord',
        url: 'https://discord.com/invite/dctop10laptops',
        icon: 'fab fa-discord',
        color: '#5865f2',
        followers: '15.7K followers',
        description: 'Gaming laptop community and exclusive reviews'
    },
    {
        name: 'X (Twitter)',
        url: 'https://x.com/dctop10laptops',
        icon: '𝕏',
        color: '#ffffff',
        // Allow per-platform color control for title and icon
        titleColor: 'var(--text-primary)',
        iconColor: 'var(--text-white)',
        followers: '22.9K followers',
        description: 'Daily gaming laptop news and deal alerts'
    }
];

// Featured content videos (separate from live streams)
const FEATURED_CONTENT_VIDEOS = {
    title: 'Featured Content',
    description: 'Top gaming laptop video content and recorded streams',
    viewAllUrl: 'https://youtube.com/playlist?list=gaming-laptops-featured',
    videos: [
        {
            id: 'content-1',
            title: 'Ultimate Gaming Laptop Buying Guide 2025',
            description: 'Complete guide to choosing the best gaming laptop',
            streamer: 'LaptopGamingPro',
            viewers: '45.2K',
            category: 'Tutorial',
            thumbnail: './assets/images/laptop_test/stream4.png',
            isLive: false,
            duration: '12:45',
            platform: 'Kick',
            platformIcon: 'fab fa-kickstarter',
            tags: ['Gaming Laptops', 'Buying Guide', 'Tutorial'],
            url: 'https://youtube.com/watch?v=laptop-buying-guide-2025',
            // Image positioning and scaling settings
            imageScale: 1.0,                                               // Scale for video thumbnail (1.0 = 100%, 1.2 = 120%, etc.)
            imagePositioning: {
                objectPosition: 'center',                                  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'cover'                                         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        {
            id: 'content-2',
            title: 'ASUS ROG Zephyrus G18 Review & Benchmarks',
            description: 'In-depth review and gaming performance testing',
            streamer: 'LaptopReviewer',
            viewers: '28.7K',
            category: 'Review',
            thumbnail: './assets/images/laptop_test/stream3.jpg',
            isLive: false,
            duration: '18:32',
            platform: 'Discord',
            platformIcon: 'fab fa-discord',
            tags: ['ASUS ROG', 'Review', 'Benchmarks'],
            url: 'https://youtube.com/watch?v=asus-rog-zephyrus-review',
            // Image positioning and scaling settings
            imageScale: 1.0,                                               // Scale for video thumbnail (1.0 = 100%, 1.2 = 120%, etc.)
            imagePositioning: {
                objectPosition: 'top center',                             // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'cover'                                         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        {
            id: 'content-3',
            title: 'RTX 4090 Gaming Performance Highlights',
            description: 'Best gaming moments from RTX 4090 laptop testing',
            streamer: 'RTXHighlights',
            viewers: '67.1K',
            category: 'Highlights',
            thumbnail: './assets/images/laptop_test/stream2.jpg',
            isLive: false,
            duration: '8:15',
            platform: 'Twitch',
            platformIcon: 'fab fa-twitch',
            tags: ['RTX 4090', 'Gaming', 'Highlights'],
            url: 'https://twitch.tv/videos/rtx-4090-highlights',
            // Image positioning and scaling settings
            imageScale: 1.0,                                               // Scale for video thumbnail (1.0 = 100%, 1.2 = 120%, etc.)
            imagePositioning: {
                objectPosition: 'top center',                             // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'cover'                                         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        {
            id: 'content-4',
            title: 'Gaming Laptop Maintenance Tips',
            description: 'Essential maintenance practices for gaming laptops',
            streamer: 'LaptopCareFirst',
            viewers: '19.8K',
            category: 'Education',
            thumbnail: './assets/images/laptop_test/stream1.jpg',
            isLive: false,
            duration: '15:22',
            platform: 'Youtube',
            platformIcon: 'fab fa-youtube',
            tags: ['Maintenance', 'Care', 'Tips'],
            url: 'https://youtube.com/watch?v=laptop-maintenance',
            // Image positioning and scaling settings
            imageScale: 1.0,                                               // Scale for video thumbnail (1.0 = 100%, 1.2 = 120%, etc.)
            imagePositioning: {
                objectPosition: 'center',                                  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'cover'                                         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        {
            id: 'content-5',
            title: 'DLSS 3 Technology Explained',
            description: 'Understanding NVIDIA DLSS 3 in gaming laptops',
            streamer: 'TechExplained',
            viewers: '33.4K',
            category: 'Education',
            thumbnail: './assets/images/laptop_test/stream5.jpg',
            isLive: false,
            duration: '21:07',
            platform: 'X',
            platformIcon: 'fab fa-x-twitter',
            tags: ['DLSS 3', 'NVIDIA', 'Education'],
            url: 'https://youtube.com/watch?v=dlss3-explained',
            // Image positioning and scaling settings
            imageScale: 1.0,                                               // Scale for video thumbnail (1.0 = 100%, 1.2 = 120%, etc.)
            imagePositioning: {
                objectPosition: 'center',                                  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'cover'                                         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        }
    ]
};

// Featured streams for the main content area
const TOP_STREAMING_CATEGORIES = [
    {
        title: 'Featured Streams',
        description: 'Top trending gaming laptop review streams right now',
        viewAllUrl: 'https://twitch.tv/directory/game/Gaming',
        streams: [
            {
                id: 'featured-1',
                title: 'RTX 4090 Gaming Laptop Benchmarks',
                description: 'Live 4K gaming performance tests on flagship laptops',
                streamer: 'LaptopBenchmark',
                viewers: '4.2K',
                category: 'Gaming Laptops',
                thumbnail: './assets/images/laptop_test/stream19.jpg',
                isLive: true,
                duration: null,
                platform: 'Twitch',
                platformIcon: 'fab fa-twitch',
                tags: ['RTX 4090', 'Benchmarks', 'Live'],
                url: 'https://twitch.tv/laptopbenchmark',
                // Image positioning and scaling settings
                imageScale: 1.0,                                               // Scale for stream thumbnail (1.0 = 100%, 1.2 = 120%, etc.)
                imagePositioning: {
                    objectPosition: 'center',                                  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                    objectFit: 'cover'                                         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
                }
            },
            {
                id: 'featured-2',
                title: 'Dell XPS 15 Plus Deep Dive Review',
                description: 'Complete teardown and performance analysis',
                streamer: 'LaptopTeardown',
                viewers: '2.8K',
                category: 'Laptop Reviews',
                thumbnail: './assets/images/laptop_test/stream18.webp',
                isLive: true,
                duration: null,
                platform: 'Youtube',
                platformIcon: 'fab fa-youtube',
                tags: ['Dell XPS', 'Teardown', 'Review'],
                url: 'https://youtube.com/watch?v=dell-xps-review'
            },
            {
                id: 'featured-3',
                title: 'Razer Blade 16 Thermal Testing',
                description: 'Live stress testing and thermal performance analysis',
                streamer: 'ThermalTester',
                viewers: '3.1K',
                category: 'Hardware Testing',
                thumbnail: './assets/images/laptop_test/stream17.jpg',
                isLive: true,
                duration: null,
                platform: 'Kick',
                platformIcon: 'fab fa-kickstarter',
                tags: ['Razer Blade', 'Thermal', 'Testing'],
                url: 'https://kick.com/thermaltester'
            },
            {
                id: 'featured-4',
                title: 'MSI Vector GP78 Gaming Tests',
                description: 'Live gaming benchmarks across multiple titles',
                streamer: 'GameBenchmark',
                viewers: '1.9K',
                category: 'Gaming Performance',
                thumbnail: './assets/images/laptop_test/stream16.jpg',
                isLive: true,
                duration: null,
                platform: 'Discord',
                platformIcon: 'fab fa-discord',
                tags: ['MSI Vector', 'Gaming', 'Benchmarks'],
                url: 'https://discord.com/gamebenchmark'
            },
            {
                id: 'featured-5',
                title: 'OLED vs IPS Display Comparison',
                description: 'Live comparison of gaming laptop display technologies',
                streamer: 'DisplayExpert',
                viewers: '1.5K',
                category: 'Display Tech',
                thumbnail: './assets/images/laptop_test/stream15.jpg',
                isLive: true,
                duration: null,
                platform: 'X',
                platformIcon: 'X',
                tags: ['OLED', 'IPS', 'Display'],
                url: 'https://x.com/displayexpert'
            }
        ]
    },
    {
        title: 'Hardware Deep Dives',
        description: 'In-depth hardware analysis and component testing',
        viewAllUrl: 'https://twitch.tv/directory/game/Hardware',
        streams: [
            {
                id: 'gaming-1',
                title: 'RTX 4080 vs RTX 4070 Comparison',
                description: 'Live gaming performance comparison across titles',
                streamer: 'GPUCompare',
                viewers: '3.7K',
                category: 'GPU Testing',
                thumbnail: './assets/images/laptop_test/stream14.jpg',
                isLive: true,
                duration: null,
                platform: 'Twitch',
                platformIcon: 'fab fa-twitch',
                tags: ['RTX 4080', 'RTX 4070', 'Comparison'],
                url: 'https://twitch.tv/gpucompare'
            },
            {
                id: 'gaming-2',
                title: 'DDR5 Memory Speed Testing',
                description: 'Testing different DDR5 speeds in gaming laptops',
                streamer: 'MemoryTester',
                viewers: '1.2K',
                category: 'Memory Testing',
                thumbnail: './assets/images/laptop_test/stream13.webp',
                isLive: true,
                duration: null,
                platform: 'Youtube',
                platformIcon: 'fab fa-youtube',
                tags: ['DDR5', 'Memory', 'Testing'],
                url: 'https://youtube.com/watch?v=memory-testing'
            },
            {
                id: 'gaming-3',
                title: 'NVMe SSD Speed Benchmarks',
                description: 'Testing PCIe 4.0 vs 3.0 SSD performance',
                streamer: 'StorageExpert',
                viewers: '2.1K',
                category: 'Storage Testing',
                thumbnail: './assets/images/laptop_test/stream12.jpg',
                isLive: true,
                duration: null,
                platform: 'Twitch',
                platformIcon: 'fab fa-twitch',
                tags: ['NVMe', 'SSD', 'Benchmarks'],
                url: 'https://twitch.tv/storageexpert'
            },
            {
                id: 'gaming-4',
                title: 'Cooling System Comparison',
                description: 'Testing different laptop cooling solutions',
                streamer: 'CoolingGuru',
                viewers: '845',
                category: 'Thermal Testing',
                thumbnail: './assets/images/laptop_test/stream11.png',
                isLive: true,
                duration: null,
                platform: 'Kick',
                platformIcon: 'fab fa-kickstarter',
                tags: ['Cooling', 'Thermal', 'Testing'],
                url: 'https://kick.com/coolingguru'
            },
            {
                id: 'gaming-5',
                title: 'Battery Life Testing Marathon',
                description: 'Real-world battery performance across laptops',
                streamer: 'BatteryTester',
                viewers: '1.8K',
                category: 'Battery Testing',
                thumbnail: './assets/images/laptop_test/stream10.jpg',
                isLive: true,
                duration: null,
                platform: 'Youtube',
                platformIcon: 'fab fa-youtube',
                tags: ['Battery', 'Testing', 'Performance'],
                url: 'https://youtube.com/watch?v=battery-testing'
            }
        ]
    },
    {
        title: 'Gaming Performance',
        description: 'Live gaming benchmarks and performance analysis',
        viewAllUrl: 'https://youtube.com/results?search_query=gaming+laptop+benchmarks',
        streams: [
            {
                id: 'tech-1',
                title: 'Cyberpunk 2077 RTX Performance',
                description: 'Live ray tracing benchmarks across laptops',
                streamer: 'RTXBenchmark',
                viewers: '2.4K',
                category: 'Gaming Benchmarks',
                thumbnail: './assets/images/laptop_test/stream9.png',
                isLive: true,
                duration: null,
                platform: 'Twitch',
                platformIcon: 'fab fa-twitch',
                tags: ['Cyberpunk', 'RTX', 'Benchmarks'],
                url: 'https://twitch.tv/rtxbenchmark'
            },
            {
                id: 'tech-2',
                title: 'Call of Duty MW3 Performance',
                description: 'Testing gaming laptops in competitive titles',
                streamer: 'FPSBenchmark',
                viewers: '1.1K',
                category: 'FPS Testing',
                thumbnail: './assets/images/laptop_test/stream8.png',
                isLive: false,
                duration: '45:22',
                platform: 'Youtube',
                platformIcon: 'fab fa-youtube',
                tags: ['Call of Duty', 'FPS', 'Performance'],
                url: 'https://youtube.com/watch?v=cod-performance'
            },
            {
                id: 'tech-3',
                title: 'Forza Horizon 5 Graphics Test',
                description: 'Ultra settings gaming across different laptops',
                streamer: 'GraphicsTest',
                viewers: '876',
                category: 'Graphics Testing',
                thumbnail: './assets/images/laptop_test/stream7.jpg',
                isLive: true,
                duration: null,
                platform: 'Youtube',
                platformIcon: 'fab fa-youtube',
                tags: ['Forza', 'Graphics', 'Ultra Settings'],
                url: 'https://youtube.com/watch?v=forza-graphics'
            },
            {
                id: 'tech-4',
                title: 'Apex Legends 240Hz Testing',
                description: 'High refresh rate gaming performance analysis',
                streamer: 'HighRefresh',
                viewers: '1.5K',
                category: 'High Refresh Gaming',
                thumbnail: './assets/images/laptop_test/stream6.jpg',
                isLive: true,
                duration: null,
                platform: 'Twitch',
                platformIcon: 'fab fa-twitch',
                tags: ['Apex Legends', '240Hz', 'High Refresh'],
                url: 'https://twitch.tv/highrefresh'  
            },
            {
                id: 'tech-5',
                title: 'Valorant Competitive Settings',
                description: 'Optimizing gaming laptops for esports',
                streamer: 'EsportsOptimize',
                viewers: '723',
                category: 'Esports Gaming',
                thumbnail: './assets/images/laptop_test/stream5.jpg',
                isLive: false,
                duration: '38:15',
                platform: 'Youtube',
                platformIcon: 'fab fa-youtube',
                tags: ['Valorant', 'Esports', 'Optimization'],
                url: 'https://youtube.com/watch?v=valorant-esports'
            }
        ]
    }
];

// Styling configuration
const STREAMING_STYLING = {
    useThemeColors: true, // Use colors from theme-config.js
    heroGradient: { start: '#667eea', end: '#764ba2', direction: '135deg' },
    accentColor: '#ff6b6b',
    textColor: '#ffffff',
    
    // Card colors (theme-aware like podcast page)
    colors: {
        // Stream card colors
        streamCardBackground: "var(--bg-card, var(--background-color))",
        streamCardBorder: "var(--border-color)",
        streamCardHover: "var(--bg-secondary, rgba(255, 255, 255, 0.05))",
        streamCardText: "var(--text-primary, var(--text-color))",
        
        // Stream info section
        streamInfoBackground: "var(--bg-card, var(--background-color))",
        streamTitleColor: "var(--text-primary, var(--text-color))",
        streamDescriptionColor: "var(--text-secondary, var(--text-muted))",
        
        // Interactive elements
        playButtonBackground: "var(--primary-color)",
        playButtonText: "var(--text-white, #ffffff)",
        
        // Status indicators
        liveStatusColor: "#ff4757",
        scheduledStatusColor: "var(--warning-color, #fbbf24)",
        endedStatusColor: "var(--muted-color, #6b7280)"
    },
    
    // Stream meta icon colors (configurable)
    streamMetaIcons: {
        streamer: '#9ca3af',    // Grey for streamer (was white)
        viewers: '#ff6b6b',     // Red for viewers  
        category: '#a8e6cf'     // Green for category
    },
    
    // Platform-specific colors (fixed by platform)
    platformColors: {
        'Twitch': '#9146ff',     // Twitch purple
        'Youtube': '#ff0000',    // YouTube red
        'Kick': '#53fc18',       // Kick green
        'Discord': '#5865f2',    // Discord blue
        'Twitter': '#1da1f2',    // Twitter blue
        'X': '#000000',          // X (Twitter) black
        'default': '#6b7280'     // Default gray
    }
};

// Streaming Page Manager Class
class StreamingPageManager {
    constructor() {
        this.hero = STREAMING_HERO;
        this.categories = STREAMING_CATEGORIES;
        this.platforms = STREAMING_PLATFORMS;
        this.styling = STREAMING_STYLING;
        this.topCategories = TOP_STREAMING_CATEGORIES;
        this.topCategoriesViewAllUrl = 'https://twitch.tv/directory';
        this.currentStreamIndex = 0;
        this.rotationTimer = null;
        this.heroVideoRendered = false; // CRITICAL: Prevent duplicate rendering
    }

    renderHeroSection() {
        const heroContent = document.querySelector('.hero-content');
        if (!heroContent) return;
        
        // Logo section
        const logoElement = document.querySelector('.hero-logo');
        if (logoElement && this.hero.logo) {
            this.renderLogo(logoElement, this.hero.logo);
        }
        
        // Subtitle
        const subtitleElement = document.querySelector('.hero-subtitle');
        if (subtitleElement && this.hero.subtitle) {
            subtitleElement.textContent = this.hero.subtitle;
        }
        
        // Description
        const descriptionElement = document.querySelector('.hero-description');
        if (descriptionElement && this.hero.description) {
            descriptionElement.textContent = this.hero.description;
        }
        
        console.log('🎬 Hero section rendered');
    }
    
    renderHeroVideo() {
        // CRITICAL FIX: Check if already rendered to prevent duplicates
        if (this.heroVideoRendered) {
            console.log('🎬 Hero video already rendered, preventing duplicate');
            return;
        }
        
        if (!this.hero.featuredStreams || !this.hero.featuredStreams.enabled) return;
        
        const heroContainer = document.querySelector('.hero-container');
        if (!heroContainer) return;
        
        // Double check DOM for existing section
        const existingVideoSection = heroContainer.querySelector('.hero-video-section');
        if (existingVideoSection) {
            console.log('🎬 Hero video section already exists in DOM, marking as rendered');
            this.heroVideoRendered = true;
            return;
        }
        
        // Create the hero video section ONLY ONCE
        const heroVideoSection = document.createElement('div');
        heroVideoSection.className = 'hero-video-section';
        heroVideoSection.innerHTML = `
            <div class="hero-video-container">
                <div class="hero-video-carousel">
                    <button class="hero-nav-arrow hero-nav-left" onclick="streamingPageManager.previousStream();">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <div class="hero-video-thumbnails hero-video-left" id="heroVideoLeft"></div>
                    <div class="hero-video-main" id="heroVideoMain"></div>
                    <div class="hero-video-thumbnails hero-video-right" id="heroVideoRight"></div>
                    <button class="hero-nav-arrow hero-nav-right" onclick="streamingPageManager.nextStream();">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
                <div class="hero-video-navigation">
                    <div class="hero-video-dots" id="heroVideoDots"></div>
                </div>
            </div>
        `;
        
        heroContainer.appendChild(heroVideoSection);
        this.heroVideoRendered = true; // Mark as rendered
        
        // Populate with stream content
        this.updateHeroVideo();
        
        // Start rotation if enabled
        if (this.hero.featuredStreams.autoRotate) {
            this.startHeroVideoRotation();
        }
        

        
        console.log('🎬 Hero video section created ONCE and populated');
    }

    renderLogo(container, logoConfig) {
        container.innerHTML = '';
        
        const logoWrapper = document.createElement('div');
        logoWrapper.className = 'logo-wrapper';
        logoWrapper.style.cssText = `
            display: flex;
            align-items: center;
            gap: 10px;
        `;
        
        if (logoConfig.type === 'text' || logoConfig.type === 'combined') {
            const textElement = document.createElement('span');
            textElement.className = 'logo-text';
            textElement.textContent = logoConfig.text;
            textElement.style.cssText = `
                color: ${logoConfig.textColor} !important;
                font-size: calc(2.5rem * ${logoConfig.scale}) !important;
                font-weight: bold !important;
                display: inline-block !important;
                visibility: visible !important;
                transform: translateX(${logoConfig.left}px) !important;
            `;
            logoWrapper.appendChild(textElement);
        }
        
        if (logoConfig.type === 'image' || logoConfig.type === 'combined') {
            const imgElement = document.createElement('img');
            imgElement.src = logoConfig.image.src;
            imgElement.alt = logoConfig.image.alt;
            imgElement.className = 'logo-image';
            imgElement.style.cssText = `
                height: calc(3rem * ${logoConfig.image.scale}) !important;
                width: auto !important;
                max-height: none !important;
                max-width: none !important;
                display: inline-block !important;
                visibility: visible !important;
                transform: translateX(${logoConfig.image.left || logoConfig.left}px) !important;
            `;
            
            if (logoConfig.type === 'combined') {
                logoWrapper.insertBefore(imgElement, logoWrapper.firstChild);
            } else {
                logoWrapper.appendChild(imgElement);
            }
        }
        
        container.appendChild(logoWrapper);
    }
    
    updateHeroVideo() {
        const mainVideo = document.getElementById('heroVideoMain');
        const leftThumbnail = document.getElementById('heroVideoLeft');
        const rightThumbnail = document.getElementById('heroVideoRight');
        const dots = document.getElementById('heroVideoDots');
        
        if (!mainVideo || !leftThumbnail || !rightThumbnail || !dots) return;
        
        const streams = this.hero.featuredStreams.streams;
        const currentStream = streams[this.currentStreamIndex];
        
        // Update main video
        mainVideo.innerHTML = `
            <div class="main-stream-container" onclick="window.open('${currentStream.url || '#'}', '_blank')" style="cursor: pointer;">
                <img src="${currentStream.thumbnail}" alt="${currentStream.title}" class="main-stream-image">
                <div class="play-overlay" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: rgba(0,0,0,0.7); border-radius: 50%; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                    <button class="play-btn" style="background: none; border: none; color: white; font-size: 1.5rem;"><i class="fas fa-play"></i></button>
                </div>
            </div>
            <div class="main-stream-info">
                <div class="live-badge ${currentStream.isLive ? 'live' : ''}">
                    <div class="live-dot ${currentStream.isLive ? 'animate' : ''}"></div>
                    ${currentStream.isLive ? 'LIVE' : 'OFFLINE'}
                </div>
                <h3 class="stream-title">${currentStream.title}</h3>
                ${currentStream.description ? `
                    <div class="stream-description">
                        ${currentStream.description}
                    </div>
                ` : ''}
                <div class="stream-meta">
                    <span class="streamer"><i class="fas fa-user" style="color: ${this.styling.streamMetaIcons.streamer} !important;"></i> ${currentStream.streamer}</span>
                    <span class="viewers"><i class="fas fa-eye" style="color: ${this.styling.streamMetaIcons.viewers} !important;"></i> ${currentStream.viewers} watching</span>
                    <span class="platform"><i class="${currentStream.platformIcon || 'fas fa-tv'}" style="color: ${this.styling.platformColors[currentStream.platform] || this.styling.platformColors.default} !important;"></i> ${currentStream.platform}</span>
                    <span class="category"><i class="fas fa-tag" style="color: ${this.styling.streamMetaIcons.category} !important;"></i> ${currentStream.category}</span>
                </div>
                <div class="stream-tags">
                    ${currentStream.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="stream-actions">
                    <button class="watch-now-btn" onclick="window.open('${currentStream.url || '#'}', '_blank')" style="cursor: pointer;">
                        <i class="fas fa-play"></i>
                        Watch Now
                        <div class="corner-highlight top-left"></div>
                        <div class="corner-highlight top-right"></div>
                        <div class="corner-highlight bottom-left"></div>
                        <div class="corner-highlight bottom-right"></div>
                    </button>
                </div>
            </div>
        `;
        
        // Calculate left and right thumbnail indices
        const totalStreams = streams.length;
        const leftIndex = (this.currentStreamIndex - 1 + totalStreams) % totalStreams;
        const rightIndex = (this.currentStreamIndex + 1) % totalStreams;
        
        // Update left thumbnail
        const leftStream = streams[leftIndex];
        leftThumbnail.innerHTML = `
            <div class="hero-thumbnail hero-thumbnail-side" onclick="streamingPageManager.switchToStream(${leftIndex});" style="cursor: pointer;">
                <img src="${leftStream.thumbnail}" alt="${leftStream.title}">
                <div class="thumbnail-overlay">
                    <div class="live-indicator ${leftStream.isLive ? 'live' : ''}">
                        ${leftStream.isLive ? 'LIVE' : 'OFFLINE'}
                    </div>
                </div>
            </div>
        `;
        
        // Update right thumbnail
        const rightStream = streams[rightIndex];
        rightThumbnail.innerHTML = `
            <div class="hero-thumbnail hero-thumbnail-side" onclick="streamingPageManager.switchToStream(${rightIndex});" style="cursor: pointer;">
                <img src="${rightStream.thumbnail}" alt="${rightStream.title}">
                <div class="thumbnail-overlay">
                    <div class="live-indicator ${rightStream.isLive ? 'live' : ''}">
                        ${rightStream.isLive ? 'LIVE' : 'OFFLINE'}
                    </div>
                </div>
            </div>
        `;
        
        // Update navigation dots
        dots.innerHTML = streams.map((stream, index) => `
            <button class="hero-nav-dot ${index === this.currentStreamIndex ? 'active' : ''}" 
                    onclick="streamingPageManager.switchToStream(${index});">
            </button>
        `).join('');
    }

    switchToStream(index, isAutoRotation = false) {
        if (index === this.currentStreamIndex) return;
        
        // Reset auto-rotation timer for manual navigation
        if (!isAutoRotation) {
            this.startHeroVideoRotation();
        }
        
        const mainVideo = document.getElementById('heroVideoMain');
        const leftThumbnail = document.getElementById('heroVideoLeft');
        const rightThumbnail = document.getElementById('heroVideoRight');
        
        // Determine animation type and direction
        let animationClass;
        if (isAutoRotation) {
            animationClass = 'flip-auto';
        } else {
            const direction = index > this.currentStreamIndex ? 'right' : 'left';
            animationClass = `flip-${direction}`;
        }
        
        // Add flip animation to main video
        if (mainVideo) {
            mainVideo.classList.add(animationClass);
            const animationDuration = isAutoRotation ? 1400 : 1200;
            setTimeout(() => {
                mainVideo.classList.remove(animationClass);
            }, animationDuration);
        }
        
        // Add shifting animation to thumbnails
        if (leftThumbnail) {
            leftThumbnail.classList.add('shifting');
            setTimeout(() => {
                leftThumbnail.classList.remove('shifting');
            }, 800);
        }
        
        if (rightThumbnail) {
            rightThumbnail.classList.add('shifting');
            setTimeout(() => {
                rightThumbnail.classList.remove('shifting');
            }, 800);
        }
        
        // Update content after a short delay to sync with animation
        const updateDelay = isAutoRotation ? 700 : 600;
        setTimeout(() => {
            this.currentStreamIndex = index;
            this.updateHeroVideo();
        }, updateDelay);
    }

    previousStream() {
        const totalStreams = this.hero.featuredStreams.streams.length;
        const newIndex = (this.currentStreamIndex - 1 + totalStreams) % totalStreams;
        this.switchToStream(newIndex);
    }

    nextStream() {
        const totalStreams = this.hero.featuredStreams.streams.length;
        const newIndex = (this.currentStreamIndex + 1) % totalStreams;
        this.switchToStream(newIndex);
    }

    startHeroVideoRotation() {
        if (this.rotationTimer) clearInterval(this.rotationTimer);
        
        this.rotationTimer = setInterval(() => {
            const totalStreams = this.hero.featuredStreams.streams.length;
            const nextIndex = (this.currentStreamIndex + 1) % totalStreams;
            this.switchToStream(nextIndex, true); // true indicates auto-rotation
        }, this.hero.featuredStreams.rotationInterval);
    }

    renderStreamingStats() {
        const statsContainer = document.getElementById('streamingStats');
        if (!statsContainer || !this.hero.stats.enabled) return;
        
        statsContainer.innerHTML = `
            <div class="stats-grid">
                ${this.hero.stats.items.map(stat => `
            <div class="stat-item">
                <div class="stat-icon">${stat.icon}</div>
                <div class="stat-content">
                    <div class="stat-value">${stat.value}</div>
                    <div class="stat-label">${stat.label}</div>
                            <div class="stat-description">${stat.description}</div>
                </div>
            </div>
                `).join('')}
            </div>
            <div class="section-divider"></div>
        `;
    }

    renderTopCategories() {
        const categoriesContainer = document.getElementById('topCategories');
        if (!categoriesContainer) return;
        
        categoriesContainer.innerHTML = `
                        <div class="section-header">
                <h2>Top Live Categories</h2>
                <div class="section-actions">
                    <a href="${this.topCategoriesViewAllUrl}" target="_blank" class="view-all-link">View all</a>
                    </div>
                </div>
            <div class="top-categories-container">
                <div class="top-categories-scroll-wrapper">
                    <button class="scroll-arrow scroll-arrow-left" onclick="scrollTopCategories('left')">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <div class="top-categories-grid" id="topCategoriesGrid">
                                                ${this.categories.slice(0, 10).map((category, index) => `
                            <div class="top-category-card" data-rank="${index + 1}" style="--category-color: ${category.color}; cursor: pointer;" onclick="window.open('${category.url || '#'}', '_blank')">
                                <div class="live-category-rank">${index + 1}</div>
                                <div class="live-category-background" style="background-image: url('${this.getCategoryBackgroundImage(category, index)}') !important; 
                                    ${category.imagePositioning?.backgroundSize ? `background-size: ${category.imagePositioning.backgroundSize} !important;` : 'background-size: cover !important;'}
                                    ${category.imagePositioning?.backgroundPosition ? `background-position: ${category.imagePositioning.backgroundPosition} !important;` : 'background-position: center !important;'}
                                    ${category.imageScale ? `transform: scale(${category.imageScale}) !important;` : ''}
                                    background-blend-mode: overlay !important;">
                                    <i class="live-category-icon ${category.icon}"></i>
                </div>
                                <div class="live-category-info">
                                    <div class="live-category-content">
                                        <h3 class="live-category-name">${category.name}</h3>
                                        <div class="live-category-stats">
                                            <span class="live-category-viewers">${category.viewerCount || this.generateViewerCount() + 'K'}</span>
                                            <span class="live-category-watching">watching</span>
            </div>
                                        <div class="live-category-tags">
                                            ${(category.tags || this.generateCategoryTags(category)).map(tag => `<span class="tag">${tag}</span>`).join('')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <button class="scroll-arrow scroll-arrow-right" onclick="scrollTopCategories('right')">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
            <div class="section-divider"></div>
        `;

        // Initialize scroll functionality after rendering
        this.initializeScrollArrows();
    }

    generateViewerCount() {
        return Math.floor(Math.random() * 80) + 20; // Random between 20-100K
    }

    generateCategoryTags(category) {
        const tagMap = {
            'gaming': ['Action', 'Live'],
            'tech': ['Reviews', 'Tutorial'],
            'crypto': ['Trading', 'Analysis'],
            'lifestyle': ['IRL', 'Casual'],
            'education': ['Learning', 'Tutorial'],
            'music': ['Live', 'Performance'],
            'art': ['Creative', 'Digital'],
            'fitness': ['Health', 'Workout'],
            'cooking': ['Food', 'Recipe'],
            'science': ['Education', 'Research']
        };
        return tagMap[category.id] || ['Live', 'Popular'];
    }

    getCategoryBackgroundImage(category, index) {
        console.log(`🔍 getCategoryBackgroundImage called for: ${category.name}`);
        console.log(`📋 Category object:`, category);
        console.log(`🖼️ backgroundImage property:`, category.backgroundImage);
        
        // Check if category has explicit backgroundImage property first
        if (category.backgroundImage) {
            console.log(`🎯 Using explicit image for ${category.name}: ${category.backgroundImage}`);
            return category.backgroundImage;
        }
        // Otherwise use the existing test images in rotation as fallback
        const imageIndex = (index % 3) + 1;
        const fallbackImage = `./assets/images/Test_website_image${imageIndex}.png`;
        console.log(`🔄 Using fallback image for ${category.name}: ${fallbackImage}`);
        return fallbackImage;
    }
    
    renderFeaturedStreams() {
        const featuredContainer = document.getElementById('featuredStreams');
        const featuredVideos = window.FEATURED_CONTENT_VIDEOS || FEATURED_CONTENT_VIDEOS;
        if (!featuredContainer || !featuredVideos) return;
        
        featuredContainer.innerHTML = `
            <div class="section-header">
                <h2>${featuredVideos.title}</h2>
                <div class="section-actions">
                    <p>${featuredVideos.description}</p>
                    <a href="${featuredVideos.viewAllUrl}" target="_blank" class="view-all-link">View all</a>
                </div>
            </div>
            <div class="featured-streams-grid">
                ${featuredVideos.videos.slice(0, 5).map(video => this.createStreamCard(video)).join('')}
            </div>
            <div class="section-divider"></div>
        `;
        
        console.log('🎬 Featured content rendered with', featuredVideos.videos.length, 'videos');
    }
    
    renderStreamCategories() {
        const categoriesContainer = document.getElementById('streamingCategories');
        if (!categoriesContainer || !this.topCategories) return;

        categoriesContainer.innerHTML = this.topCategories.map((category, index) => `
            <div class="stream-category">
                    <div class="category-header">
                        <div class="category-info">
                        <h3 class="category-title">${category.title}</h3>
                        <span class="category-badge">${category.streams.length} Videos</span>
                        </div>
                    <div class="section-actions">
                        <p class="category-description">${category.description}</p>
                        <a href="${category.viewAllUrl || '#'}" target="_blank" class="view-all-link">View all</a>
                    </div>
                    </div>
                    <div class="streams-grid">
                    ${category.streams.map(stream => this.createStreamCard(stream)).join('')}
                    </div>
                ${index < this.topCategories.length - 1 ? '<div class="section-divider"></div>' : ''}
            </div>
        `).join('');
        
        console.log('🎬 Stream categories rendered with', this.topCategories.length, 'categories');
    }

    renderPlatformLinks() {
        const platformsContainer = document.getElementById('streamingPlatforms');
        if (!platformsContainer) return;

        platformsContainer.innerHTML = `
            <div class="section-header">
                <h2>Watch on Your Favorite Platform</h2>
                <div class="section-actions">
                    <p>Connect with us across your favorite streaming and social media platforms</p>
                        </div>
                    </div>
            <div class="platforms-grid">
                ${this.platforms.map(platform => {
                    const iconStyle = platform.iconColor ? `color: ${platform.iconColor} !important;` : '';
                    const titleStyle = platform.titleColor ? `color: ${platform.titleColor} !important;` : '';
                    const textIconBase = 'font-size: 1.5em; font-weight: normal; font-style: normal;';
                    return `
                    <a href="${platform.url}" class="platform-link" 
                       style="--platform-color: ${platform.color}" 
                       target="_blank" rel="noopener noreferrer">
                        <div class="platform-icon">
                            ${platform.icon.startsWith('fab ') || platform.icon.startsWith('fas ') ? 
                                `<i class=\"${platform.icon}\" style=\"${iconStyle}\"></i>` : 
                                `<span class=\"platform-text-icon\" style=\"${textIconBase} ${iconStyle}\">${platform.icon}</span>`
                            }
                </div>
                        <div class="platform-info">
                            <h3 class=\"platform-name\" style=\"${titleStyle}\">${platform.name}</h3>
                            <div class="platform-followers">${platform.followers}</div>
                            <p>${platform.description}</p>
            </div>
                    </a>`;
                }).join('')}
                </div>
            <div class="section-divider"></div>
        `;
        
        console.log('🎬 Platform links rendered with', this.platforms.length, 'platforms');
    }

    createStreamCard(stream) {
        const statusClass = stream.isLive ? 'live' : 'offline';
        const statusText = stream.isLive ? 'LIVE' : stream.duration || 'OFFLINE';
        const viewerText = stream.isLive ? `${stream.viewers} watching` : `${stream.viewers} views`;
        
        return `
            <div class="stream-card" data-stream-id="${stream.id}" onclick="window.open('${stream.url || '#'}', '_blank')" style="cursor: pointer;">
                <div class="stream-thumbnail">
                    <img src="${stream.thumbnail}" alt="${stream.title}" loading="lazy" style="
                        ${stream.imageScale ? `transform: scale(${stream.imageScale});` : ''}
                        ${stream.imagePositioning?.objectPosition ? `object-position: ${stream.imagePositioning.objectPosition};` : 'object-position: center;'}
                        ${stream.imagePositioning?.objectFit ? `object-fit: ${stream.imagePositioning.objectFit};` : 'object-fit: cover;'}
                    ">
                    <div class="stream-overlay">
                        <div class="play-button">
                            <i class="fas fa-play"></i>
                        </div>
                        <div class="stream-status ${statusClass}">
                            ${stream.isLive ? '<i class="fas fa-circle"></i>' : '<i class="fas fa-clock"></i>'} ${statusText}
                        </div>
                    </div>
                </div>
                <div class="stream-info">
                    <h4 class="stream-title">${stream.title}</h4>
                    <p class="stream-description">${stream.description}</p>
                    <div class="stream-meta">
                        <span class="streamer">
                            <i class="fas fa-user" style="color: ${this.styling.streamMetaIcons.streamer} !important;"></i> ${stream.streamer}
                        </span>
                        <span class="viewers">
                            <i class="fas fa-eye" style="color: ${this.styling.streamMetaIcons.viewers} !important;"></i> ${viewerText}
                        </span>
                        <span class="platform">
                            <i class="${stream.platformIcon || 'fas fa-tv'}" style="color: ${this.styling.platformColors[stream.platform] || this.styling.platformColors.default} !important;"></i> ${stream.platform}
                        </span>
                        </div>
                    <div class="stream-tags">
                        ${stream.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                <div class="corner-highlight top-left"></div>
                <div class="corner-highlight top-right"></div>
                <div class="corner-highlight bottom-left"></div>
                <div class="corner-highlight bottom-right"></div>
            </div>
        `;
    }
    
    applyDynamicColors() {
        const root = document.documentElement;
        root.style.setProperty('--streaming-hero-bg', this.styling.heroGradient.start);
        root.style.setProperty('--streaming-hero-accent', this.styling.accentColor);
        root.style.setProperty('--streaming-hero-text', this.styling.textColor);
    }

    addCategoryScrollFunctionality() {
        console.log('🎬 Category scroll functionality added');
    }

    addCornerHighlights() {
        console.log('🎬 Corner highlights added');
    }

    setupEventListeners() {
        console.log('🎬 Event listeners setup complete');
    }

    applyPageTitle() {
        // Only apply streaming page title if we're actually on the streaming page
        const currentPage = window.location.pathname.toLowerCase();
        const isStreamingPage = currentPage.includes('streaming.html') || currentPage.includes('streaming');
        
        if (!isStreamingPage) {
            return; // Don't apply streaming title to other pages
        }
        
        const title = document.querySelector('title');
        if (title) {
            // Replace {{BRAND_NAME}} with actual brand name
            let pageTitle = STREAMING_PAGE_TITLE;
            let brandName = 'DC\'s Top 10'; // Default fallback
            
            // Try to get brand name from brand-config.js
            if (typeof window.BRAND_NAME !== 'undefined') {
                brandName = window.BRAND_NAME;
                console.log('🎬 Using BRAND_NAME:', brandName);
            } else if (typeof window.BrandManager !== 'undefined') {
                const brandConfig = window.BrandManager.get();
                brandName = brandConfig.text.name;
                console.log('🎬 Using BrandManager name:', brandName);
            } else {
                console.log('🎬 Using fallback brand name:', brandName);
            }
            
            pageTitle = pageTitle.replace('{{BRAND_NAME}}', brandName);
            title.textContent = pageTitle;
            
            console.log('🎬 Streaming page title set to:', pageTitle);
        }
    }

    // Initialize streaming page
    init() {
        console.log('🎬 StreamingPageManager: Initializing...');
        
        // Apply page title with a small delay to ensure it runs after other scripts
        setTimeout(() => this.applyPageTitle(), 100);
        this.applyDynamicColors();
        this.renderHeroSection();
        this.renderStreamingStats();
        this.renderHeroVideo(); // Called ONLY ONCE during initialization
        this.renderTopCategories();
        this.addCategoryScrollFunctionality();
        this.renderFeaturedStreams();
        this.renderStreamCategories();
        this.renderPlatformLinks();
        this.setupEventListeners();
        
        // Add corner highlights after all content is rendered
        setTimeout(() => {
            this.addCornerHighlights();
        }, 100);
        
        console.log('✅ StreamingPageManager: Initialization complete');
    }

    // Initialize scroll arrows functionality
    initializeScrollArrows() {
        const grid = document.getElementById('topCategoriesGrid');
        const leftArrow = document.querySelector('.scroll-arrow-left');
        const rightArrow = document.querySelector('.scroll-arrow-right');
        
        if (!grid || !leftArrow || !rightArrow) return;

        // Create global scroll function
        window.scrollTopCategories = (direction) => {
            // Responsive scroll amount based on screen size
            let scrollAmount = 300; // Default for desktop
            const screenWidth = window.innerWidth;
            
            if (screenWidth <= 480) { 
                // Extra small screens - scroll by card width + gap
                scrollAmount = 220 + 16; // card width + gap
            } else if (screenWidth <= 768) { 
                // Mobile screens - scroll by card width + gap
                scrollAmount = 250 + 16; // card width + gap
            } else if (screenWidth <= 1024) { 
                // Tablet screens
                scrollAmount = 280 + 16; // card width + gap
            }
            
            if (direction === 'left') {
                grid.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                grid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
            setTimeout(() => this.updateScrollArrows(), 100);
        };

        // Initial arrow state update
        this.updateScrollArrows();

        // Listen for scroll events to update arrow states
        grid.addEventListener('scroll', () => {
            this.updateScrollArrows();
        });
    }

    // Update scroll arrow visibility based on scroll position
    updateScrollArrows() {
        const grid = document.getElementById('topCategoriesGrid');
        const leftArrow = document.querySelector('.scroll-arrow-left');
        const rightArrow = document.querySelector('.scroll-arrow-right');
        
        if (!grid || !leftArrow || !rightArrow) return;

        const isAtStart = grid.scrollLeft <= 0;
        const isAtEnd = grid.scrollLeft >= (grid.scrollWidth - grid.clientWidth);

        leftArrow.classList.toggle('disabled', isAtStart);
        rightArrow.classList.toggle('disabled', isAtEnd);
    }
}



// Export configurations to window object for global access
if (typeof window !== 'undefined') {
    window.STREAMING_PAGE_TITLE = STREAMING_PAGE_TITLE;
    window.STREAMING_HERO = STREAMING_HERO;
    window.STREAMING_CATEGORIES = STREAMING_CATEGORIES;
    window.STREAMING_PLATFORMS = STREAMING_PLATFORMS;
    window.STREAMING_STYLING = STREAMING_STYLING;
    window.TOP_STREAMING_CATEGORIES = TOP_STREAMING_CATEGORIES;
    window.FEATURED_CONTENT_VIDEOS = FEATURED_CONTENT_VIDEOS;
    window.StreamingPageManager = StreamingPageManager;
    
    console.log('🎬 Streaming configuration loaded globally');
}

// Auto-initialize if on streaming page
document.addEventListener('DOMContentLoaded', () => {
    if (document.body.classList.contains('streaming-page') || 
        window.location.pathname.includes('streaming.html')) {
        const manager = new StreamingPageManager();
        window.streamingPageManager = manager;
        manager.init();
    }
}); 