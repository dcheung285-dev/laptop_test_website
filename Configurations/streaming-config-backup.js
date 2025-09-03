// ===================================================================
// PODCAST PAGE CONFIGURATION
// ===================================================================
// This file controls all content and settings for the podcast page
// Edit this file to customize podcasts, episodes, categories, and styling

// Page Title & Hero Configuration
const PODCAST_PAGE_TITLE = "{{NICHE}} Podcast | Top conversations shaping the {{NICHE}} space";

const PODCAST_HERO = {
    
    subtitle: "Top conversations shaping the {{NICHE}} space",
    description: "Unlock analysis, insights, and expert commentary from industry leaders.",
    logo: {
        type: 'combined', // 'text', 'image', 'combined'
        
        // Text logo (emoji + brand text)
        text: {
            content: '🎧',
            brandText: '{{NICHE}} Podcast',
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
            textContent: "{{NICHE}}",
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
        title: "NEWS INTERVIEWS",
        description: "Interviews with the most interesting leaders, founders and investors in the fields of Cryptocurrency, Decentralized Finance (DeFi), NFTs and the Metaverse.",
        icon: "🎤",
        color: "#ff9800", // This color is used for the category badge background
        episodes: [
            {
                id: "interview-001",
                title: "Privacy Revolution: The Internet Journey With Founder and CEO Fran Villalba Segarra",
                guest: "FRAN VILLALBA SEGARRA",
                guestTitle: "Founder and CEO of Nym Technologies",
                date: "Aug 3, 2025",
                duration: "45:23",
                thumbnail: "assets/images/Test_website_image1.png",
                audioUrl: "assets/videos/Monti's_test_video.mp4", // Placeholder
                description: "Deep dive into privacy technologies and the future of decentralized internet.",
                tags: ["Privacy", "Technology", "DeFi"]
                // No episodeNumber - consistent across all
            },
            {
                id: "interview-002", 
                title: "We're building a new decentralized internet",
                guest: "JASON BRINK",
                guestTitle: "CTO at Nym Network",
                date: "Aug 1, 2025",
                duration: "38:15",
                thumbnail: "assets/images/Test_website_image2.png",
                audioUrl: "assets/videos/Monti's_test_video.mp4",
                description: "Exploring the technical aspects of building decentralized infrastructure.",
                tags: ["Infrastructure", "Development", "Blockchain"]
                // No episodeNumber - consistent across all
            },
            {
                id: "interview-003",
                title: "What do fuel smugglers, banknote holograms, and crypto have in common?",
                guest: "JOE GALLOSO",
                guestTitle: "Fraud Prevention Expert at Authority",
                date: "Aug 1, 2025",
                duration: "42:18",
                thumbnail: "assets/images/Test_website_image3.png",
                audioUrl: "assets/videos/Monti's_test_video.mp4",
                description: "Uncovering the hidden connections between traditional fraud and crypto security.",
                tags: ["Security", "Fraud Prevention", "Analysis"]
                // No episodeNumber - consistent across all
            },
            {
                id: "interview-004",
                title: "Web3 gaming won't win by shouting 'Web3'",
                guest: "DOMENIK MAIER",
                guestTitle: "Blockchain Lead at XLOG Studios",
                date: "Jul 30, 2025",
                duration: "51:07",
                thumbnail: "assets/images/Test_website_image4.png",
                audioUrl: "assets/videos/Monti's_test_video.mp4",
                description: "The future of gaming and blockchain integration strategies.",
                tags: ["Gaming", "Web3", "Strategy"]
                // No episodeNumber - consistent across all
            }
        ]
    },
    {
        id: "token-narratives",
        title: "TOKEN NARRATIVES",
        description: "Join the Bitcoin.com crew as they discuss the hottest narratives in the Bitcoin and cryptoverse.",
        icon: "🏆",
        color: "#00bcd4", // This color is used for the category badge background
        episodes: [
            {
                id: "token-001",
                title: "Token Narratives Ep. 63: Ray Dalio's 15% Bitcoin Allocation | Sponsor: Bitcoin OS",
                guest: "RAY DALIO",
                guestTitle: "15% ALLOCATION?",
                date: "Aug 1, 2025",
                duration: "28:45",
                thumbnail: "assets/images/Test_website_image5.png",
                audioUrl: "assets/videos/Monti's_test_video.mp4",
                description: "Analyzing Ray Dalio's perspective on Bitcoin as a portfolio allocation.",
                tags: ["Bitcoin", "Investment", "Portfolio"],
                episodeNumber: "EP 1"
            },
            {
                id: "token-002",
                title: "Is Bitcoin a Trojan Horse for Global Financial Collapse?",
                guest: "EXPERT PANEL",
                guestTitle: "Financial Analysts",
                date: "Jul 25, 2025", 
                duration: "35:22",
                thumbnail: "assets/images/Test_website_image6.png",
                audioUrl: "assets/videos/Monti's_test_video.mp4",
                description: "Examining Bitcoin's role in traditional financial systems.",
                tags: ["Bitcoin", "Finance", "Economics"],
                episodeNumber: "EP 2"
            },
            {
                id: "token-003",
                title: "ETH Comeback? Genius Act Passed, Pump ICO Mania, and CBDC Doom",
                guest: "CRYPTO ANALYSTS",
                guestTitle: "Market Experts",
                date: "Jul 18, 2025",
                duration: "41:33",
                thumbnail: "assets/images/Test_website_image7.png", 
                audioUrl: "assets/videos/Monti's_test_video.mp4",
                description: "Breaking down recent Ethereum developments and market trends.",
                tags: ["Ethereum", "ICO", "CBDC"],
                episodeNumber: "EP 3"
            },
            {
                id: "token-004",
                title: "Bitcoin 'Too Big to Fail?' ETF Blast-Off, Stable-Coin Trojan Horse & Tokenized Stocks",
                guest: "MARKET TEAM",
                guestTitle: "Trading Specialists",
                date: "Jul 11, 2025",
                duration: "39:18",
                thumbnail: "assets/images/Test_website_image8.png",
                audioUrl: "assets/videos/Monti's_test_video.mp4",
                description: "Analysis of Bitcoin ETFs and the evolving tokenization landscape.",
                tags: ["ETF", "Stablecoins", "Tokenization"],
                episodeNumber: "EP 4"
            }
        ]
    },
    {
        id: "weekly-update",
        title: "WEEKLY UPDATE", 
        description: "Stay in the know with news from the Bitcoin world in an easy-to-digest news summary published every week.",
        icon: "📅",
        color: "#2196f3", // This color is used for the category badge background
        episodes: [
            {
                id: "weekly-001",
                title: "UK Selling $7B in Bitcoin? OG Whale Dumps $9K BTC | The Weekly Recap for July 28",
                guest: "WEEKLY TEAM",
                guestTitle: "News Analysts",
                date: "Jul 28, 2025",
                duration: "22:14",
                thumbnail: "assets/images/Test_website_image9.png",
                audioUrl: "assets/videos/Monti's_test_video.mp4",
                description: "Weekly roundup of major Bitcoin market movements and news.",
                tags: ["Weekly", "Bitcoin", "Market Analysis"]
                // No episodeNumber - consistent across all
            },
            {
                id: "weekly-002",
                title: "Altcoin Season, Genius Act Becomes Law, Bitcoin Treasury Boom",
                guest: "NEWS TEAM",
                guestTitle: "Market Reporters", 
                date: "Jul 22, 2025",
                duration: "25:38",
                thumbnail: "assets/images/Test_website_image10.png",
                audioUrl: "assets/videos/Monti's_test_video.mp4",
                description: "Comprehensive coverage of altcoin trends and regulatory developments.",
                tags: ["Altcoins", "Regulation", "Treasury"]
                // No episodeNumber - consistent across all
            },
            {
                id: "weekly-003",
                title: "$1B Liquidated, Bitcoin > Silver, Altcoin Season? | The Weekly Recap for July 14",
                guest: "ANALYSIS TEAM",
                guestTitle: "Data Scientists",
                date: "Jul 14, 2025",
                duration: "27:45",
                thumbnail: "assets/images/Test_website_image1.png",
                audioUrl: "assets/videos/Monti's_test_video.mp4",
                description: "Breaking down massive liquidation events and market comparisons.",
                tags: ["Liquidation", "Silver", "Market Data"]
                // No episodeNumber - consistent across all
            },
            {
                id: "weekly-004",
                title: "Big Beautiful Bill, Debt Doom & Crypto Chaos | The Weekly Recap for July 7",
                guest: "POLICY TEAM",
                guestTitle: "Regulatory Experts",
                date: "Jul 7, 2025",
                duration: "24:19",
                thumbnail: "assets/images/Test_website_image2.png",
                audioUrl: "assets/videos/Monti's_test_video.mp4",
                description: "Analysis of legislative developments affecting the crypto landscape.",
                tags: ["Legislation", "Debt", "Policy"]
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
        if (document.title.includes('Template')) {
            document.title = PODCAST_PAGE_TITLE;
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
                    <button class="view-all-btn" onclick="podcastManager.viewAllEpisodes('${category.id}')">
                        View all episodes
                    </button>
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
                    <img src="${episode.thumbnail}" alt="${episode.title}">
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
        // Add audio player logic here
        alert(`Playing episode: ${episodeId}\n(Audio player integration would go here)`);
    }

    viewAllEpisodes(categoryId) {
        console.log(`📺 Viewing all episodes for category: ${categoryId}`);
        // Add category filtering logic here
        alert(`Viewing all ${categoryId} episodes\n(Category filtering would be implemented here)`);
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

console.log('🎧 Podcast configuration loaded successfully'); 