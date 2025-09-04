// ===================================================================
// PODCAST PAGE CONFIGURATION
// ===================================================================
// This file controls all content and settings for the podcast page
// Edit this file to customize podcasts, episodes, categories, and styling

// Page Title & Hero Configuration
const PODCAST_PAGE_TITLE = "Podcast | {{BRAND_NAME}}";

const PODCAST_HERO = {
    
    subtitle: "Top conversations shaping the gaming laptop industry",
    description: "Unlock expert analysis, performance insights, and insider commentary from gaming laptop manufacturers and tech reviewers.",
    logo: {
        type: 'combined', // 'text', 'image', 'combined'
        
        // Text logo (emoji + brand text)
        text: {
            content: '🎧',
            brandText: 'Gaming Laptop Podcast',
            fontSize: '48px',
            textColor: '#FFFFFF',
            spacing: '12px',
            scale: 1.0
        },
        
        // Image logo
        image: {
            src: "assets/images/podcast_test_image1.png",
            scale: 4.0,
            alt: "{{NICHE}} Podcast"
        },
        
        // Combined logo (image + text)
        combined: {
            imageSrc: "assets/images/podcast_test_image1.png",
            imageScale: 2.0,
            textContent: "LaptopCast",
            textColor: '#FFFFFF',
            fontSize: '36px',
            spacing: '32px',
            layout: 'row' // 'row' or 'column'
        }
    },
    streamingPlatforms: [
        {
            name: "Spotify",
            icon: "fab fa-spotify",
            url: "https://open.spotify.com/show/your-podcast",
            color: "#1DB954"
        },
        {
            name: "Apple Podcasts",
            icon: "fab fa-apple",
            url: "https://podcasts.apple.com/your-podcast",
            color: "#A855F7"
        }
    ]
};

// Podcast Categories/Shows Configuration
const PODCAST_CATEGORIES = [
    {
        id: "news-interviews",
        title: "TECH INTERVIEWS",
        description: "Interviews with the most interesting leaders, founders and innovators in gaming laptop technology, hardware development, and the future of mobile gaming.",
        icon: "🎤",
        color: "#ff9800", // This color is used for the category badge background
        viewAllUrl: "https://www.youtube.com/watch?v=ZZ5LpwO-An4&list=PLV2ewAgCPCq0DVamOw2sQSAVdFVjA6x78",
        episodes: [
            {
                id: "interview-001",
                title: "The Future of Gaming Laptops: RTX 4090 Performance Revolution",
                guest: "JENSEN HUANG",
                guestTitle: "CEO of NVIDIA",
                date: "Dec 15, 2024",
                duration: "45:23",
                thumbnail: "assets/images/laptop_test/stream1.jpg",
                audioUrl: "assets/audio/casino_test_audio/podcast_test_audio.mp3", // Placeholder
                linkType: 'audio',  // 'audio' for inline player, 'external' for external links
                externalUrl: null,  // Set this for Spotify/Apple Podcasts links
                description: "Deep dive into RTX 4090 mobile architecture and how it's revolutionizing gaming laptop performance.",
                tags: ["RTX 4090", "Gaming", "Performance"],
                // No episodeNumber - consistent across all
                // Image positioning and scaling settings
                imageScale: 1.0,                                               // Scale for episode thumbnail (1.0 = 100%, 1.2 = 120%, etc.)
                imagePositioning: {
                    objectPosition: 'center',                                  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                    objectFit: 'cover'                                         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
                }
            },
            {
                id: "interview-002", 
                title: "Intel vs AMD: The CPU Battle for Gaming Supremacy",
                guest: "PAT GELSINGER",
                guestTitle: "CEO of Intel",
                date: "Dec 12, 2024",
                duration: "38:15",
                thumbnail: "assets/images/laptop_test/stream2.jpg",
                audioUrl: "assets/audio/casino_test_audio/podcast_test_audio.mp3",
                // Audio/Link Configuration:
                // - audioUrl: Direct path to MP3/audio file for inline player
                // - externalUrl: External link (Spotify, Apple Podcasts, etc.) - opens in new tab
                // - linkType: 'audio' (plays inline) or 'external' (opens link)
                linkType: 'audio',  // 'audio' for inline player, 'external' for external links
                externalUrl: null,  // Set this for Spotify/Apple Podcasts links
                description: "Exploring Intel's 14th gen mobile processors and the competitive landscape with AMD in gaming laptops.",
                tags: ["Intel", "AMD", "CPU Performance"],
                // No episodeNumber - consistent across all
                // Image positioning and scaling settings
                imageScale: 1.0,                                               // Scale for episode thumbnail (1.0 = 100%, 1.2 = 120%, etc.)
                imagePositioning: {
                    objectPosition: 'top center',                             // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                    objectFit: 'cover'                                         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
                }
            },
            {
                id: "interview-003",
                title: "OLED vs Mini-LED: The Display Technology Revolution",
                guest: "DAVID HSIEH",
                guestTitle: "VP of Gaming at Samsung Display",
                date: "Dec 8, 2024",
                duration: "42:18",
                thumbnail: "assets/images/laptop_test/stream3.jpg",
                audioUrl: "assets/videos/Monti's_test_video.mp4",
                // Audio/Link Configuration:
                linkType: 'external',  // 'audio' for inline player, 'external' for external links
                externalUrl: 'https://open.spotify.com/show/6Ka35NtQo9IIGkfojlThI1',  // Example Spotify link
                description: "Discussing OLED and Mini-LED display technologies and their impact on gaming laptop visual experiences.",
                tags: ["OLED", "Mini-LED", "Display Tech"]
                // No episodeNumber - consistent across all
            },
            {
                id: "interview-004",
                title: "Liquid Metal Cooling: The Future of Gaming Laptop Thermals",
                guest: "FRANK AZOR",
                guestTitle: "Chief Gaming Officer at AMD",
                date: "Dec 5, 2024",
                duration: "51:07",
                thumbnail: "assets/images/laptop_test/stream4.png",
                audioUrl: "assets/videos/Monti's_test_video.mp4",
                // Audio/Link Configuration:
                linkType: 'external',  // 'audio' for inline player, 'external' for external links
                externalUrl: 'https://open.spotify.com/show/6Ka35NtQo9IIGkfojlThI1',  // Example Apple Podcasts link
                description: "The future of gaming laptop cooling technology and how liquid metal is revolutionizing thermal management.",
                tags: ["Cooling", "Liquid Metal", "Thermal Tech"]
                // No episodeNumber - consistent across all
            }
        ]
    },
    {
        id: "token-narratives",
        title: "LAPTOP TECH DEEP DIVE",
        description: "Join our tech experts as they discuss the latest innovations, benchmarks, and trends in gaming laptop technology.",
        icon: "🏆",
        color: "#00bcd4", // This color is used for the category badge background
        viewAllUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        episodes: [
            {
                id: "token-001",
                title: "RTX 4090 vs RTX 4080: The Ultimate Gaming Laptop GPU Showdown",
                guest: "TECH PANEL",
                guestTitle: "GPU Performance Experts",
                date: "Dec 1, 2024",
                duration: "28:45",
                thumbnail: "assets/images/laptop_test/stream5.jpg",
                audioUrl: "assets/videos/Monti's_test_video.mp4",
                linkType: 'external',  // 'audio' for inline player, 'external' for external links
                externalUrl: 'https://open.spotify.com/show/6Ka35NtQo9IIGkfojlThI1',  // Set this for Spotify/Apple Podcasts links
                description: "Analyzing RTX 4090 vs RTX 4080 performance differences in gaming laptops and which offers better value.",
                tags: ["RTX 4090", "RTX 4080", "GPU Comparison"],
                episodeNumber: "EP 1"
            },
            {
                id: "token-002",
                title: "DDR5 vs DDR4: Is Memory the Gaming Performance Bottleneck?",
                guest: "MEMORY EXPERTS",
                guestTitle: "RAM Performance Analysts",
                date: "Nov 28, 2024", 
                duration: "35:22",
                thumbnail: "assets/images/laptop_test/stream6.jpg",
                audioUrl: "assets/videos/Monti's_test_video.mp4",
                linkType: 'external',  // 'audio' for inline player, 'external' for external links
                externalUrl: 'https://open.spotify.com/show/6Ka35NtQo9IIGkfojlThI1',  // Set this for Spotify/Apple Podcasts links
                description: "Examining DDR5 vs DDR4 memory performance in gaming laptops and whether faster RAM makes a difference.",
                tags: ["DDR5", "Memory", "Performance"],
                episodeNumber: "EP 2"
            },
            {
                id: "token-003",
                title: "Intel 14th Gen vs AMD 7000 Series: The Ultimate CPU Battle",
                guest: "CPU ANALYSTS",
                guestTitle: "Processor Experts",
                date: "Nov 25, 2024",
                duration: "41:33",
                thumbnail: "assets/images/laptop_test/stream7.jpg", 
                audioUrl: "assets/videos/Monti's_test_video.mp4",
                linkType: 'external',  // 'audio' for inline player, 'external' for external links
                externalUrl: 'https://open.spotify.com/show/6Ka35NtQo9IIGkfojlThI1',  // Set this for Spotify/Apple Podcasts links
                description: "Breaking down Intel 14th gen vs AMD 7000 series processor performance in gaming laptops.",
                tags: ["Intel", "AMD", "CPU Battle"],
                episodeNumber: "EP 3"
            },
            {
                id: "token-004",
                title: "240Hz vs 165Hz vs 144Hz: Does Refresh Rate Matter for Gaming?",
                guest: "DISPLAY TEAM",
                guestTitle: "Gaming Display Specialists",
                date: "Nov 22, 2024",
                duration: "39:18",
                thumbnail: "assets/images/laptop_test/stream8.png",
                audioUrl: "assets/videos/Monti's_test_video.mp4",
                linkType: 'external',  // 'audio' for inline player, 'external' for external links
                externalUrl: 'https://open.spotify.com/show/6Ka35NtQo9IIGkfojlThI1',  // Set this for Spotify/Apple Podcasts links
                description: "Analysis of high refresh rate displays and their impact on competitive gaming performance.",
                tags: ["Refresh Rate", "144Hz", "240Hz"],
                episodeNumber: "EP 4"
            }
        ]
    },
    {
        id: "weekly-update",
        title: "GAMING LAPTOP NEWS", 
        description: "Stay in the know with the latest gaming laptop releases, reviews, and industry news in an easy-to-digest summary published every week.",
        icon: "📅",
        color: "#2196f3", // This color is used for the category badge background
        viewAllUrl: "https://www.youtube.com/watch?v=uPudE8nDog0",
        episodes: [
            {
                id: "weekly-001",
                title: "ASUS ROG Zephyrus G18 Review, RTX 4090 Price Drops | Gaming Laptop News Dec 15",
                guest: "NEWS TEAM",
                guestTitle: "Gaming Laptop Analysts",
                date: "Dec 15, 2024",
                duration: "22:14",
                thumbnail: "assets/images/laptop_test/stream9.png",
                audioUrl: "assets/videos/Monti's_test_video.mp4",
                linkType: 'external',  // 'audio' for inline player, 'external' for external links
                externalUrl: 'https://open.spotify.com/show/6Ka35NtQo9IIGkfojlThI1',  // Set this for Spotify/Apple Podcasts links
                description: "Weekly roundup of major gaming laptop releases, reviews, and price changes.",
                tags: ["Weekly", "ASUS ROG", "RTX 4090"]
                // No episodeNumber - consistent across all
            },
            {
                id: "weekly-002",
                title: "Razer Blade 16 Launch, Intel 14th Gen Benchmarks, Gaming Laptop Sales Boom",
                guest: "TECH TEAM",
                guestTitle: "Hardware Reporters", 
                date: "Dec 8, 2024",
                duration: "25:38",
                thumbnail: "assets/images/laptop_test/stream10.jpg",
                audioUrl: "assets/videos/Monti's_test_video.mp4",
                linkType: 'external',  // 'audio' for inline player, 'external' for external links
                externalUrl: 'https://open.spotify.com/show/6Ka35NtQo9IIGkfojlThI1',  // Set this for Spotify/Apple Podcasts links
                description: "Comprehensive coverage of Razer Blade 16 launch and Intel's latest gaming laptop processors.",
                tags: ["Razer Blade", "Intel 14th Gen", "Sales"]
                // No episodeNumber - consistent across all
            },
            {
                id: "weekly-003",
                title: "Dell XPS 15 Plus Discontinued, OLED Gaming Laptops Surge | Gaming News Dec 1",
                guest: "MARKET TEAM",
                guestTitle: "Industry Analysts",
                date: "Dec 1, 2024",
                duration: "27:45",
                thumbnail: "assets/images/laptop_test/stream11.png",
                audioUrl: "assets/videos/Monti's_test_video.mp4",
                linkType: 'external',  // 'audio' for inline player, 'external' for external links
                externalUrl: 'https://open.spotify.com/show/6Ka35NtQo9IIGkfojlThI1',  // Set this for Spotify/Apple Podcasts links
                description: "Breaking down Dell's XPS 15 Plus discontinuation and the rise of OLED gaming displays.",
                tags: ["Dell XPS", "OLED", "Market Trends"]
                // No episodeNumber - consistent across all
            },
            {
                id: "weekly-004",
                title: "MSI Vector GP78 Review, AMD 7000 Series Mobile Launch | Gaming News Nov 24",
                guest: "REVIEW TEAM",
                guestTitle: "Gaming Hardware Experts",
                date: "Nov 24, 2024",
                duration: "24:19",
                thumbnail: "assets/images/laptop_test/stream12.jpg",
                audioUrl: "assets/videos/Monti's_test_video.mp4",
                linkType: 'external',  // 'audio' for inline player, 'external' for external links
                externalUrl: 'https://open.spotify.com/show/6Ka35NtQo9IIGkfojlThI1',  // Set this for Spotify/Apple Podcasts links
                description: "Analysis of MSI Vector GP78 performance and AMD's latest mobile processor lineup.",
                tags: ["MSI Vector", "AMD Mobile", "Reviews"]
                // No episodeNumber - consistent across all
            }
        ]
    }
];

// Featured/Latest Episodes (cross-category highlights)
const FEATURED_EPISODES = [
    {
        episodeId: "interview-001",
        categoryId: "news-interviews",
        featured: true,
        reason: "Latest Interview"
    },
    {
        episodeId: "token-001", 
        categoryId: "token-narratives",
        featured: true,
        reason: "Trending Topic"
    },
    {
        episodeId: "weekly-001",
        categoryId: "weekly-update", 
        featured: true,
        reason: "This Week"
    },
    {
        episodeId: "interview-004",
        categoryId: "news-interviews",
        featured: true,
        reason: "Popular Episode"
    }
];

// Page Display Settings
const PODCAST_DISPLAY_CONFIG = {
    hero: {
        showStreamingPlatforms: true,
        showLogo: true,
        backgroundStyle: "gradient" // "gradient", "solid", "image"
    },
    episodes: {
        showThumbnails: true,
        showDuration: true,
        showTags: true,
        showGuestInfo: true,
        showEpisodeNumbers: true,        // Master control for ALL episode numbers
        episodeNumberStyle: "selective", // "all", "none", "selective" (only shows if episode has episodeNumber field)
        episodesPerPage: 12,
        defaultView: "grid" // "grid", "list"
    },
    categories: {
        showIcons: true,
        showDescriptions: true,
        showEpisodeCounts: true,
        allowCategoryFiltering: true
    },
    pagination: {
        enabled: true,
        itemsPerPage: 8,
        showPageNumbers: true
    }
};

// Styling Configuration (works with theme-config.js)
const PODCAST_STYLING = {
    useThemeColors: true, // Use colors from theme-config.js
    colors: {
        // Hero section colors
        heroBackground: "linear-gradient(135deg, var(--primary-color), var(--accent-color))",
        heroTextColor: "var(--text-on-primary, #FFFFFF)",
        heroDescriptionColor: "var(--text-on-primary-muted, rgba(255, 255, 255, 0.8))",
        
        // Section colors
        sectionTitleColor: "var(--primary-color)",
        sectionDescriptionColor: "var(--text-muted, var(--color-text-muted))",
        sectionBackgroundPrimary: "var(--background-color, var(--color-background))",
        sectionBackgroundSecondary: "var(--surface-color, var(--color-surface))",
        
        // Episode card colors
        episodeCardBackground: "var(--background-color, var(--color-background))",
        episodeCardHover: "var(--surface-hover, rgba(0, 0, 0, 0.05))",
        episodeTitleColor: "var(--text-color, var(--color-text))",
        episodeGuestNameColor: "var(--primary-color)",
        episodeGuestTitleColor: "var(--text-muted, var(--color-text-muted))",
        episodeDateColor: "var(--text-muted, var(--color-text-muted))",
        
        // Interactive elements
        playButtonBackground: "var(--primary-color)",
        playButtonHover: "var(--accent-color)",
        viewAllButtonBackground: "var(--primary-color)",
        viewAllButtonHover: "var(--accent-color)",
        
        // Category badges
        categoryBadgeBackground: "var(--primary-color)", // Default, overridden by category.color
        categoryBadgeText: "var(--text-on-primary, #FFFFFF)",
        
        // Tags and badges
        tagBackground: "var(--surface-color, var(--color-surface))",
        tagTextColor: "var(--text-muted, var(--color-text-muted))",
        episodeNumberBackground: "var(--primary-color)",
        episodeNumberText: "var(--text-on-primary, #FFFFFF)",
        durationBadgeBackground: "var(--overlay-background, rgba(0, 0, 0, 0.8))",
        durationBadgeText: "var(--text-on-overlay, #FFFFFF)",
        
        // Episode card borders
        episodeCardBorder: "var(--border-color, #dee2e6)",
        
        // Streaming platforms
        platformButtonBackground: "var(--overlay-light, rgba(255, 255, 255, 0.2))",
        platformButtonBorder: "var(--overlay-border, rgba(255, 255, 255, 0.3))",
        platformButtonText: "var(--text-on-primary, #FFFFFF)"
    },
    layout: {
        containerMaxWidth: "1200px",
        sectionSpacing: "var(--spacing-xl)",
        cardBorderRadius: "12px",
        cardShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        categoryBadgeRadius: "25px",
        buttonBorderRadius: "25px"
    }
};

// ===================================================================
// PODCAST PAGE MANAGER CLASS
// ===================================================================
class PodcastPageManager {
    constructor() {
        this.config = {
            hero: PODCAST_HERO,
            categories: PODCAST_CATEGORIES,
            featured: FEATURED_EPISODES,
            display: PODCAST_DISPLAY_CONFIG,
            styling: PODCAST_STYLING
        };
        this.currentPage = 1;
        this.currentCategory = 'all';
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
        this.applyPageTitle();
        this.renderHeroSection();
        this.renderFeaturedEpisodes();
        this.renderCategoryShowcases();
        this.setupInteractions();
        console.log('🎧 Podcast page initialized successfully');
    }

    applyPageTitle() {
        // Only apply podcast page title if we're actually on the podcast page
        const currentPage = window.location.pathname.toLowerCase();
        const isPodcastPage = currentPage.includes('podcast.html') || currentPage.includes('podcast');
        
        if (!isPodcastPage) {
            return; // Don't apply podcast title to other pages
        }
        
        const title = document.querySelector('title');
        if (title) {
            // Replace {{BRAND_NAME}} with actual brand name
            let pageTitle = PODCAST_PAGE_TITLE;
            
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

    renderHeroSection() {
        const heroElement = document.querySelector('#podcast-hero .hero-content');
        if (!heroElement) return;

        const { subtitle, description, logo, streamingPlatforms } = this.config.hero;
        
        let streamingHTML = '';
        if (this.config.display.hero.showStreamingPlatforms) {
            streamingHTML = `
                <div class="streaming-platforms">
                    <span class="stream-label">Stream on</span>
                    <div class="platform-buttons">
                        ${streamingPlatforms.map(platform => `
                            <a href="${platform.url}" class="platform-btn" target="_blank" 
                               style="--platform-color: ${platform.color}">
                                <i class="${platform.icon}"></i>
                            </a>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        let logoHTML = '';
        if (this.config.display.hero.showLogo && logo) {
            const logoType = logo.type || 'image';
            
            switch (logoType) {
                case 'text':
                    const textConfig = logo.text;
                    const textLayoutStyle = `display: flex; align-items: center; justify-content: center; gap: ${textConfig.spacing}; transform: scale(${textConfig.scale || 1.0});`;
                    logoHTML = `
                        <div class="podcast-logo-text-layout" style="${textLayoutStyle}">
                            <div class="podcast-logo-icon" style="font-size: ${textConfig.fontSize}; color: ${textConfig.textColor};">
                                ${textConfig.content}
                            </div>
                            <div class="podcast-logo-brand-text" style="font-size: ${textConfig.fontSize}; color: ${textConfig.textColor}; font-weight: 600;">
                                ${textConfig.brandText}
                            </div>
                        </div>
                    `;
                    break;
                    
                case 'combined':
                    const combinedConfig = logo.combined;
                    const combinedLayoutStyle = `display: flex; align-items: center; justify-content: center; gap: ${combinedConfig.spacing}; flex-direction: ${combinedConfig.layout === 'column' ? 'column' : 'row'};`;
                    logoHTML = `
                        <div class="podcast-logo-combined-layout" style="${combinedLayoutStyle}">
                            <img src="${combinedConfig.imageSrc}" alt="Logo" class="podcast-logo-combined-image" 
                                 style="transform: scale(${combinedConfig.imageScale || 1.0}); transform-origin: center;">
                            <span class="podcast-logo-combined-text" style="font-size: ${combinedConfig.fontSize}; color: ${combinedConfig.textColor}; font-weight: 600;">
                                ${combinedConfig.textContent}
                            </span>
                        </div>
                    `;
                    break;
                    
                case 'image':
                default:
                    const imageConfig = logo.image;
                    const logoScale = imageConfig.scale || 1.0;
                    const logoStyle = `transform: scale(${logoScale}); transform-origin: center;`;
                    logoHTML = `<img src="${imageConfig.src}" alt="${imageConfig.alt}" class="podcast-logo" style="${logoStyle}">`;
                    break;
            }
        }

        heroElement.innerHTML = `
            ${logoHTML}
            <h2 class="hero-subtitle">${subtitle}</h2>
            <p class="hero-description">${description}</p>
            ${streamingHTML}
        `;

        // Apply dynamic colors to hero section
        this.applyDynamicColors();
    }

    applyDynamicColors() {
        const colors = this.config.styling.colors;
        
        // Create dynamic CSS with configuration colors
        // NOTE: Navigation colors are intentionally excluded to maintain consistency across pages
        const dynamicCSS = `
            <style id="podcast-dynamic-colors">
                .podcast-hero {
                    background: ${colors.heroBackground} !important;
                    color: ${colors.heroTextColor} !important;
                }
                .podcast-hero .hero-subtitle {
                    color: ${colors.heroTextColor} !important;
                }
                .podcast-hero .hero-description {
                    color: ${colors.heroDescriptionColor} !important;
                }
                .section-title {
                    color: ${colors.sectionTitleColor} !important;
                }
                .section-description {
                    color: ${colors.sectionDescriptionColor} !important;
                }
                .featured-section {
                    background: ${colors.sectionBackgroundPrimary} !important;
                }
                .categories-section {
                    background: ${colors.sectionBackgroundSecondary} !important;
                }
                .category-showcase {
                    background: ${colors.episodeCardBackground} !important;
                }
                .episode-card {
                    background: ${colors.episodeCardBackground} !important;
                    border: 1px solid ${colors.episodeCardBorder} !important;
                }
                .episode-card:hover {
                    background: ${colors.episodeCardHover} !important;
                }
                .episode-title {
                    color: ${colors.episodeTitleColor} !important;
                }
                .guest-name {
                    color: ${colors.episodeGuestNameColor} !important;
                }
                .guest-title {
                    color: ${colors.episodeGuestTitleColor} !important;
                }
                .episode-date {
                    color: ${colors.episodeDateColor} !important;
                }
                .play-btn {
                    background: ${colors.playButtonBackground} !important;
                    color: ${colors.categoryBadgeText} !important;
                }
                .play-btn:hover {
                    background: ${colors.playButtonHover} !important;
                }
                .view-all-btn {
                    background: ${colors.viewAllButtonBackground} !important;
                    color: ${colors.categoryBadgeText} !important;
                }
                .view-all-btn:hover {
                    background: ${colors.viewAllButtonHover} !important;
                }
                .category-badge {
                    background: var(--badge-color, ${colors.categoryBadgeBackground}) !important;
                    color: ${colors.categoryBadgeText} !important;
                }
                .tag {
                    background: ${colors.tagBackground} !important;
                    color: ${colors.tagTextColor} !important;
                }
                .episode-number {
                    background: ${colors.episodeNumberBackground} !important;
                    color: ${colors.episodeNumberText} !important;
                }
                .episode-duration {
                    background: ${colors.durationBadgeBackground} !important;
                    color: ${colors.durationBadgeText} !important;
                }
                .stream-label {
                    color: ${colors.heroDescriptionColor} !important;
                }
                .platform-btn {
                    background: ${colors.platformButtonBackground} !important;
                    border-color: ${colors.platformButtonBorder} !important;
                    color: ${colors.platformButtonText} !important;
                }
            </style>
        `;
        
        // Remove existing dynamic styles and add new ones
        const existingStyles = document.getElementById('podcast-dynamic-colors');
        if (existingStyles) {
            existingStyles.remove();
        }
        
        document.head.insertAdjacentHTML('beforeend', dynamicCSS);
    }

    renderFeaturedEpisodes() {
        const featuredContainer = document.getElementById('featured-episodes');
        if (!featuredContainer) return;

        const featuredEpisodes = this.getFeaturedEpisodes();
        
        featuredContainer.innerHTML = `
            <h2 class="section-title">Latest Episodes</h2>
            <p class="section-description">Dive into our most recent episodes to stay on top of the latest conversations and developments</p>
            <div class="episodes-grid">
                ${featuredEpisodes.map(episode => this.createEpisodeHTML(episode)).join('')}
            </div>
        `;
    }

    renderCategoryShowcases() {
        const showcaseContainer = document.getElementById('category-showcases');
        if (!showcaseContainer) return;

        showcaseContainer.innerHTML = this.config.categories.map(category => `
            <div class="category-showcase" data-category="${category.id}">
                <div class="category-header">
                    <div class="category-badge" style="--badge-color: ${category.color}">
                        <span class="category-icon">${category.icon}</span>
                        <span class="category-title">${category.title}</span>
                    </div>
                    <a class="view-all-btn" href="${category.viewAllUrl || defaultViewAll}" target="_blank" rel="noopener">
                        View all episodes
                    </a>
                </div>
                <p class="category-description">${category.description}</p>
                <div class="episodes-grid">
                    ${category.episodes.slice(0, 4).map(episode => this.createEpisodeHTML(episode, category)).join('')}
                </div>
            </div>
        `).join('');
    }

    createEpisodeHTML(episode, category = null) {
        const duration = this.config.display.episodes.showDuration ? `<span class="episode-duration">${episode.duration}</span>` : '';
        
        // Episode number logic - respect configuration
        let episodeNumber = '';
        if (this.config.display.episodes.showEpisodeNumbers) {
            const style = this.config.display.episodes.episodeNumberStyle;
            if (style === "all" || (style === "selective" && episode.episodeNumber)) {
                episodeNumber = episode.episodeNumber ? 
                    `<span class="episode-number">${episode.episodeNumber}</span>` : 
                    (style === "all" ? `<span class="episode-number">EP</span>` : '');
            }
        }
        
        const tags = this.config.display.episodes.showTags && episode.tags ? 
            `<div class="episode-tags">${episode.tags.slice(0, 2).map(tag => `<span class="tag">${tag}</span>`).join('')}</div>` : '';

        const guestInfo = this.config.display.episodes.showGuestInfo ? 
            `<div class="guest-info">
                <h4 class="guest-name">${episode.guest}</h4>
                <p class="guest-title">${episode.guestTitle}</p>
            </div>` : '';

        return `
            <div class="episode-card" data-episode="${episode.id}">
                <div class="episode-thumbnail">
                    <img src="${episode.thumbnail}" alt="${episode.title}" style="
                        ${episode.imageScale ? `transform: scale(${episode.imageScale});` : ''}
                        ${episode.imagePositioning?.objectPosition ? `object-position: ${episode.imagePositioning.objectPosition};` : 'object-position: center;'}
                        ${episode.imagePositioning?.objectFit ? `object-fit: ${episode.imagePositioning.objectFit};` : 'object-fit: cover;'}
                    ">
                    <div class="play-overlay">
                        <button class="play-btn" onclick="podcastManager.playEpisode('${episode.id}')">
                            <i class="fas fa-play"></i>
                        </button>
                    </div>
                    ${episodeNumber}
                    ${duration}
                </div>
                <div class="episode-content">
                    <h3 class="episode-title">${episode.title}</h3>
                    ${guestInfo}
                    <div class="episode-meta">
                        <span class="episode-date">${episode.date}</span>
                    </div>
                    ${tags}
                </div>
            </div>
        `;
    }

    getFeaturedEpisodes() {
        const featured = [];
        this.config.featured.forEach(item => {
            const category = this.config.categories.find(cat => cat.id === item.categoryId);
            const episode = category?.episodes.find(ep => ep.id === item.episodeId);
            if (episode) {
                featured.push({ ...episode, category: category });
            }
        });
        return featured;
    }

    setupInteractions() {
        // Add event listeners for play buttons, category filters, etc.
        document.addEventListener('click', (e) => {
            if (e.target.closest('.play-btn')) {
                const episodeCard = e.target.closest('.episode-card');
                const episodeId = episodeCard?.dataset.episode;
                if (episodeId) this.playEpisode(episodeId);
            }
        });
    }

    playEpisode(episodeId) {
        console.log(`🎧 Playing episode: ${episodeId}`);
        
        // Find the episode in all categories
        let episode = null;
        for (const category of Object.values(PODCAST_CATEGORIES)) {
            episode = category.episodes.find(ep => ep.id === episodeId);
            if (episode) break;
        }
        
        if (!episode) {
            console.error(`Episode ${episodeId} not found`);
            return;
        }
        
        // Handle different link types
        if (episode.linkType === 'external' && episode.externalUrl) {
            // Open external link (Spotify, Apple Podcasts, etc.) in new tab
            window.open(episode.externalUrl, '_blank', 'noopener,noreferrer');
            console.log(`🔗 Opening external link: ${episode.externalUrl}`);
        } else if (episode.linkType === 'audio' && episode.audioUrl) {
            // Play audio using HTML5 audio player
            this.playAudioFile(episode);
        } else {
            // Fallback: try to play audio if audioUrl exists
            if (episode.audioUrl) {
                this.playAudioFile(episode);
            } else {
                alert(`No audio source available for episode: ${episode.title}`);
            }
        }
    }
    
    playAudioFile(episode) {
        // Remove any existing audio player
        this.removeExistingPlayer();
        
        // Create audio player modal/overlay
        const playerOverlay = document.createElement('div');
        playerOverlay.id = 'podcast-player-overlay';
        playerOverlay.innerHTML = `
            <div class="podcast-player-modal">
                <div class="podcast-player-header">
                    <div class="episode-info">
                        <img src="${episode.thumbnail}" alt="${episode.title}" class="episode-thumbnail">
                        <div class="episode-details">
                            <h3>${episode.title}</h3>
                            <p>${episode.guest} - ${episode.guestTitle}</p>
                            <p class="episode-duration">${episode.duration}</p>
                        </div>
                    </div>
                    <button class="close-player" onclick="podcastManager.closePlayer()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="podcast-player-controls">
                    <!-- Native HTML5 Audio Controls -->
                    <audio id="podcast-audio" controls preload="auto" style="width: 100%; border-radius: 8px;" crossorigin="anonymous">
                        <source src="${episode.audioUrl}" type="audio/mpeg">
                        <source src="${episode.audioUrl}" type="audio/mp3">
                        <source src="${episode.audioUrl}" type="audio/mp4">
                        <source src="${episode.audioUrl}" type="audio/wav">
                        Your browser does not support the audio element.
                    </audio>
                </div>
                <div class="episode-description">
                    <p>${episode.description}</p>
                </div>
            </div>
        `;
        
        // Add CSS styles for the player
        const playerStyles = document.createElement('style');
        playerStyles.id = 'podcast-player-styles';
        playerStyles.textContent = `
            #podcast-player-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
                backdrop-filter: blur(5px);
            }
            
            .podcast-player-modal {
                background: var(--background-color, #fff);
                border-radius: 12px;
                padding: 20px;
                max-width: 500px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                color: var(--text-color, #333);
            }
            
            .podcast-player-header {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                margin-bottom: 20px;
                gap: 15px;
            }
            
            .episode-info {
                display: flex;
                gap: 15px;
                flex: 1;
            }
            
            .episode-thumbnail {
                width: 80px;
                height: 80px;
                border-radius: 8px;
                object-fit: cover;
            }
            
            .episode-details h3 {
                margin: 0 0 5px 0;
                font-size: 1.1em;
                line-height: 1.3;
            }
            
            .episode-details p {
                margin: 0 0 3px 0;
                font-size: 0.9em;
                opacity: 0.8;
            }
            
            .episode-duration {
                font-weight: bold;
                color: var(--primary-color, #007bff) !important;
            }
            
            .close-player {
                background: none;
                border: none;
                font-size: 20px;
                cursor: pointer;
                padding: 5px;
                border-radius: 50%;
                width: 35px;
                height: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: background 0.3s;
            }
            
            .close-player:hover {
                background: rgba(0, 0, 0, 0.1);
            }
            
            .podcast-player-controls {
                margin-bottom: 20px;
            }
            
            .episode-description {
                font-size: 0.9em;
                line-height: 1.5;
                opacity: 0.8;
            }
            
            @media (max-width: 600px) {
                .podcast-player-modal {
                    margin: 20px;
                    max-height: calc(100vh - 40px);
                }
                
                .episode-info {
                    flex-direction: column;
                    text-align: center;
                }
                
                .episode-thumbnail {
                    width: 100px;
                    height: 100px;
                    margin: 0 auto;
                }
            }
        `;
        
        // Add to page
        document.head.appendChild(playerStyles);
        document.body.appendChild(playerOverlay);
        
        // Focus on audio element and try to load
        const audioElement = document.getElementById('podcast-audio');
        
        // Debug: Log audio element state
        console.log('🎵 Audio element found:', !!audioElement);
        console.log('🎵 Audio element src will be:', episode.audioUrl);
        
        // Set the source directly first - but handle it more robustly
        console.log('🎵 Setting audio source to:', episode.audioUrl);
        
        // Clear any existing source first
        audioElement.src = '';
        audioElement.load(); // Reset the element
        
        // Set new source
        audioElement.src = episode.audioUrl;
        console.log('🎵 Audio src set to:', audioElement.src);
        
        // Fix seek functionality and add proper event handlers
        this.setupAudioEventHandlers(audioElement, episode);
        
        audioElement.addEventListener('loadstart', () => {
            console.log(`🎵 Loading audio: ${episode.audioUrl}`);
        });
        
        // Enhanced error handling with recovery
        let errorRetryCount = 0;
        const maxRetries = 2;
        
        audioElement.addEventListener('error', (e) => {
            console.error(`❌ Audio loading error:`, e);
            console.error(`❌ Audio error details:`, {
                error: audioElement.error,
                networkState: audioElement.networkState,
                readyState: audioElement.readyState,
                src: audioElement.src,
                currentSrc: audioElement.currentSrc,
                retryCount: errorRetryCount
            });
            
            // Handle different error types
            if (audioElement.error) {
                switch(audioElement.error.code) {
                    case 1: // MEDIA_ERR_ABORTED
                        console.log('🔄 Media aborted, attempting reload...');
                        if (errorRetryCount < maxRetries) {
                            errorRetryCount++;
                            setTimeout(() => {
                                audioElement.load();
                            }, 1000);
                        }
                        break;
                    case 2: // MEDIA_ERR_NETWORK
                        console.log('🔄 Network error, attempting reload...');
                        if (errorRetryCount < maxRetries) {
                            errorRetryCount++;
                            setTimeout(() => {
                                audioElement.src = episode.audioUrl;
                                audioElement.load();
                            }, 2000);
                        }
                        break;
                    case 3: // MEDIA_ERR_DECODE
                        console.error('❌ Audio decode error - file may be corrupted');
                        alert('Audio file appears to be corrupted. Please check the file.');
                        break;
                    case 4: // MEDIA_ERR_SRC_NOT_SUPPORTED
                        console.error('❌ Audio format not supported');
                        alert('Audio format not supported by your browser.');
                        break;
                    default:
                        console.error('❌ Unknown audio error');
                        if (errorRetryCount < maxRetries) {
                            errorRetryCount++;
                            setTimeout(() => {
                                audioElement.load();
                            }, 1000);
                        }
                }
            }
        });
        
        audioElement.addEventListener('canplay', () => {
            console.log(`✅ Audio ready to play: ${episode.title}`);
        });
        
        audioElement.addEventListener('loadedmetadata', () => {
            console.log(`📊 Audio metadata loaded - Duration: ${audioElement.duration}s`);
        });
        
        // Close player when clicking outside
        playerOverlay.addEventListener('click', (e) => {
            if (e.target === playerOverlay) {
                this.closePlayer();
            }
        });
    }
    
    setupAudioEventHandlers(audioElement, episode) {
        // Simple setup for native HTML5 controls
        console.log(`🎵 Setting up native audio controls for: ${episode.title}`);
        
        // Basic event listeners for logging and debugging
        audioElement.addEventListener('loadedmetadata', () => {
            console.log(`🎵 Audio duration: ${audioElement.duration} seconds`);
        });

        audioElement.addEventListener('play', () => {
            console.log(`▶️ Playing: ${episode.title}`);
        });

        audioElement.addEventListener('pause', () => {
            console.log(`⏸️ Paused: ${episode.title}`);
        });

        audioElement.addEventListener('ended', () => {
            console.log(`🏁 Finished playing: ${episode.title}`);
        });

        audioElement.addEventListener('seeking', () => {
            console.log(`⏩ Seeking to: ${audioElement.currentTime}s`);
        });

        audioElement.addEventListener('seeked', () => {
            console.log(`✅ Seek completed at: ${audioElement.currentTime}s`);
        });

        audioElement.addEventListener('loadstart', () => {
            console.log(`🔄 Audio loading started`);
        });
        
        audioElement.addEventListener('canplay', () => {
            console.log(`✅ Audio ready to play: ${episode.title}`);
        });

        // Add buffering progress tracking
        audioElement.addEventListener('progress', () => {
            if (audioElement.buffered.length > 0) {
                const bufferedEnd = audioElement.buffered.end(audioElement.buffered.length - 1);
                const duration = audioElement.duration;
                if (duration > 0) {
                    const bufferedPercent = (bufferedEnd / duration) * 100;
                    console.log(`📊 Buffered: ${bufferedPercent.toFixed(1)}% (${bufferedEnd.toFixed(1)}s / ${duration.toFixed(1)}s)`);
                }
            }
        });
        
        // Initialize volume to 80%
        audioElement.volume = 0.8;
        
        console.log(`🎵 Native audio player ready with src: ${audioElement.src}`);
    }
    
    closePlayer() {
        this.removeExistingPlayer();
    }
    
    removeExistingPlayer() {
        // Remove player overlay
        const existingOverlay = document.getElementById('podcast-player-overlay');
        if (existingOverlay) {
            existingOverlay.remove();
        }
        
        // Remove player styles
        const existingStyles = document.getElementById('podcast-player-styles');
        if (existingStyles) {
            existingStyles.remove();
        }
    }

    // Test function to verify audio file accessibility
    testAudioFile(audioUrl) {
        console.log(`🧪 Testing audio file: ${audioUrl}`);
        
        const testAudio = new Audio();
        testAudio.preload = 'metadata';
        
        testAudio.addEventListener('loadedmetadata', () => {
            console.log(`✅ Audio file test PASSED: ${audioUrl}`);
            console.log(`📊 Duration: ${testAudio.duration}s`);
        });
        
        testAudio.addEventListener('error', (e) => {
            console.error(`❌ Audio file test FAILED: ${audioUrl}`, e);
            console.error(`Error details:`, testAudio.error);
        });
        
        testAudio.src = audioUrl;
        testAudio.load();
        
        return testAudio;
    }

    viewAllEpisodes(categoryId) {
        const category = (this.config.categories || []).find(c => c.id === categoryId);
        const url = (category && category.viewAllUrl) || defaultViewAll;
        window.open(url, '_blank', 'noopener');
    }
}

// ===================================================================
// EXPORTS & INITIALIZATION
// ===================================================================
// Export configurations to global scope for access by other scripts
window.PODCAST_HERO = PODCAST_HERO;
window.PODCAST_CATEGORIES = PODCAST_CATEGORIES;
window.FEATURED_EPISODES = FEATURED_EPISODES;
window.PODCAST_DISPLAY_CONFIG = PODCAST_DISPLAY_CONFIG;
window.PODCAST_STYLING = PODCAST_STYLING;
window.PODCAST_PAGE_TITLE = PODCAST_PAGE_TITLE;

// Initialize the podcast page manager
const podcastManager = new PodcastPageManager();
window.podcastManager = podcastManager;

/*
===========================================
🎵 AUDIO & LINK CONFIGURATION GUIDE
===========================================

Each episode supports two types of playback:

1. INLINE AUDIO PLAYER (for MP3/audio files):
   linkType: 'audio'
   audioUrl: 'path/to/your/audio.mp3'
   externalUrl: null

2. EXTERNAL LINKS (for Spotify, Apple Podcasts, etc.):
   linkType: 'external'
   externalUrl: 'https://open.spotify.com/episode/...'
   audioUrl: null (optional - can keep for fallback)

Example Episode Configurations:

// Inline Audio Player
{
    id: "episode-001",
    title: "Your Episode Title",
    audioUrl: "assets/audio/episode001.mp3",
    linkType: 'audio',
    externalUrl: null
}

// External Link (Spotify)
{
    id: "episode-002", 
    title: "Your Episode Title",
    linkType: 'external',
    externalUrl: 'https://open.spotify.com/episode/abc123'
}

// External Link (Apple Podcasts)
{
    id: "episode-003",
    title: "Your Episode Title", 
    linkType: 'external',
    externalUrl: 'https://podcasts.apple.com/us/podcast/your-podcast/id123456'
}

// External Link (YouTube)
{
    id: "episode-004",
    title: "Your Episode Title",
    linkType: 'external', 
    externalUrl: 'https://www.youtube.com/watch?v=abc123'
}

Popular Podcast Platform URLs:
- Spotify: https://open.spotify.com/episode/[EPISODE_ID]
- Apple Podcasts: https://podcasts.apple.com/us/podcast/[PODCAST_NAME]/id[PODCAST_ID]
- Google Podcasts: https://podcasts.google.com/feed/[FEED_URL]
- YouTube: https://www.youtube.com/watch?v=[VIDEO_ID]
- Anchor: https://anchor.fm/[PODCAST_NAME]/episodes/[EPISODE_NAME]

===========================================
*/

console.log('🎧 Podcast configuration loaded successfully'); 