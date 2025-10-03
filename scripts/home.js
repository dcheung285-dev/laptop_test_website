/**
 * HOME PAGE FUNCTIONALITY
 * Dynamic content loading, animations, and interactive elements
 */

// Immediate logging to verify script loading
console.log('🏠 Home.js script loading...');
console.log('📋 Available window configs:', Object.keys(window).filter(key => key.includes('CONFIG')));

class HomePage {
    constructor() {
        console.log('🏠 HomePage constructor called');
        
        // Check if already initialized
        if (window.homePageInstance) {
            console.warn('⚠️ HomePage instance already exists! Preventing duplicate initialization.');
            return window.homePageInstance;
        }
        
        this.config = window.HOME_CONFIG || {};
        this.isLoaded = false;
        this.scrollAnimations = new Map();
        this.cryptoAnimationIntervals = [];
        
        console.log('📋 Home config:', this.config);
        
        // Mark this instance as the active one
        window.homePageInstance = this;
        
        this.init();
    }

    init() {
        console.log('🔄 HomePage init called');
        
        if (document.readyState === 'loading') {
            console.log('⏳ Document still loading, waiting...');
            document.addEventListener('DOMContentLoaded', () => this.waitForDependencies());
        } else {
            console.log('✅ Document ready, checking dependencies...');
            this.waitForDependencies();
        }
    }

    waitForDependencies() {
        console.log('🔍 Checking for required dependencies...');
        
        // Check for required configs
        const checkInterval = setInterval(() => {
            const hasHomeConfig = window.HOME_CONFIG && Object.keys(window.HOME_CONFIG).length > 0;
            
            console.log('📋 Dependency Check:');
            console.log('  - HOME_CONFIG:', hasHomeConfig ? '✅' : '❌');
            
            // Only require HOME_CONFIG - theme system is optional
            if (hasHomeConfig) {
                clearInterval(checkInterval);
                console.log('✅ Required dependencies loaded, initializing...');
                this.initialize();
            }
        }, 100);
        
        // Timeout after 3 seconds
        setTimeout(() => {
            clearInterval(checkInterval);
            console.log('⚠️ Dependency timeout - proceeding anyway');
            this.initialize();
        }, 3000);
    }

    initialize() {
        console.log('🚀 HomePage initialize called');
        
        // Prevent multiple initialization
        if (this.isLoaded) {
            console.warn('⚠️ HomePage already initialized, skipping duplicate initialization');
            return;
        }
        
        try {
            // Check if config is available
            if (!this.config || Object.keys(this.config).length === 0) {
                console.error('❌ Home config not found or empty');
                console.log('📋 Available window objects:', Object.keys(window).filter(key => key.includes('CONFIG')));
                // Try to load a basic fallback
                this.loadFallbackContent();
                return;
            }
            
            console.log('🏠 Home page initializing with config...');
            
            // Initialize sections directly without waiting for theme system
            this.initializeHeroSection();
            this.initializeScrollSections();
            this.initializeVideoSections();
            this.initializeVideoSectionsTitle();
            this.initializeAdSections();
            this.initializeCryptoAnimations();
            this.initializeInteractiveElements();
            
            // Setup event listeners
            this.setupEventListeners();
            
            // Apply basic theme colors
            this.applyBasicTheme();
            
            // Start animations
            this.startAnimations();
            
            this.isLoaded = true;
            console.log('✅ Home page loaded successfully');
            
            // Final status report
            this.reportStatus();
        } catch (error) {
            console.error('❌ Error initializing home page:', error);
            this.loadFallbackContent();
        }
    }

    initializeVideoSectionsTitle() {
        const titleEl = document.querySelector('#video-sections .section-title');
        const configuredTitle = this.config.videoSectionsTitle;
        if (titleEl && configuredTitle && typeof configuredTitle === 'string') {
            titleEl.textContent = configuredTitle;
            console.log('✅ Video sections title set:', configuredTitle);
        }
    }

    reportStatus() {
        console.log('📊 Home Page Status Report:');
        console.log('Hero Section:', document.getElementById('hero-title')?.textContent || 'Empty');
        console.log('Scroll Sections:', document.querySelectorAll('.scroll-section').length);
        console.log('Video Sections:', document.querySelectorAll('.video-item').length);
        console.log('Ad Sections:', document.querySelectorAll('[class*="ad-"]').length);
        console.log('Crypto Animations Active:', this.cryptoAnimationIntervals.length);
        console.log('Page Load Status:', this.isLoaded ? 'Complete' : 'Incomplete');
    }

    waitForThemeSystem(callback) {
        // Check if theme system is available
        if (typeof window.ThemeManager !== 'undefined' && document.documentElement.style.getPropertyValue('--primary-color')) {
            console.log('🎨 Theme system ready');
            callback();
        } else {
            console.log('⏳ Waiting for theme system...');
            setTimeout(() => this.waitForThemeSystem(callback), 100);
        }
    }

    applyTheme() {
        // Get current theme colors from CSS variables
        const rootStyles = getComputedStyle(document.documentElement);
        const currentTheme = {
            primaryColor: rootStyles.getPropertyValue('--primary-color').trim(),
            secondaryColor: rootStyles.getPropertyValue('--secondary-color').trim(),
            accentColor: rootStyles.getPropertyValue('--accent-color').trim(),
            textPrimary: rootStyles.getPropertyValue('--text-primary').trim(),
            textSecondary: rootStyles.getPropertyValue('--text-secondary').trim(),
            bgPrimary: rootStyles.getPropertyValue('--bg-primary').trim(),
            bgSecondary: rootStyles.getPropertyValue('--bg-secondary').trim(),
            bgDark: rootStyles.getPropertyValue('--bg-dark').trim()
        };

        console.log('🎨 Applying theme colors:', currentTheme);

        // Update config with current theme colors
        if (this.config.hero?.backgroundConfig) {
            this.config.hero.backgroundConfig.primaryColor = currentTheme.primaryColor;
            this.config.hero.backgroundConfig.secondaryColor = currentTheme.secondaryColor;
        }

        if (this.config.cryptoAnimations?.animations) {
            this.config.cryptoAnimations.animations.forEach(animation => {
                if (animation.color && animation.color.includes('var(--')) {
                    animation.color = currentTheme.primaryColor;
                }
            });
        }

        if (this.config.interactiveElements?.elements) {
            this.config.interactiveElements.elements.forEach(element => {
                if (element.color && element.color.includes('var(--')) {
                    element.color = currentTheme.primaryColor;
                }
            });
        }

        // Apply dynamic theme styles
        this.applyDynamicStyles(currentTheme);
    }

    applyDynamicStyles(theme) {
        // Create dynamic style element for theme-specific adjustments
        let dynamicStyles = document.getElementById('home-dynamic-styles');
        if (!dynamicStyles) {
            dynamicStyles = document.createElement('style');
            dynamicStyles.id = 'home-dynamic-styles';
            document.head.appendChild(dynamicStyles);
        }

        dynamicStyles.textContent = `
            /* Dynamic Home Page Theme Styles */
            .home-page .hero-title {
                background: linear-gradient(45deg, ${theme.primaryColor}, ${theme.secondaryColor});
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            
            .home-page .hero-btn {
                background: linear-gradient(45deg, ${theme.primaryColor}, ${theme.secondaryColor});
            }
            
            .home-page .floating-coin {
                color: ${theme.primaryColor};
            }
            
            .home-page .matrix-char {
                color: ${theme.primaryColor};
            }
            
            .home-page .particle {
                background: ${theme.accentColor};
            }
            
            .home-page .scroll-section-icon {
                color: ${theme.primaryColor};
            }
            
            .home-page .floating-cta {
                background: linear-gradient(45deg, ${theme.primaryColor}, ${theme.secondaryColor});
            }
            
            .home-page .scroll-progress {
                background: linear-gradient(90deg, ${theme.primaryColor}, ${theme.secondaryColor});
                box-shadow: 0 0 10px ${theme.primaryColor};
            }
            
            .home-page .ad-banner.pulse-glow {
                box-shadow: 0 0 20px ${theme.primaryColor};
            }
            
            .home-page .ad-banner.pulse-glow:hover {
                box-shadow: 0 0 40px ${theme.primaryColor}, 0 0 60px ${theme.secondaryColor};
            }
            
            /* Newsletter system integration */
            .home-page #newsletter-container .newsletter-button {
                background: linear-gradient(45deg, ${theme.primaryColor}, ${theme.secondaryColor}) !important;
            }
            
            .home-page #newsletter-container .newsletter-input:focus {
                border-color: ${theme.primaryColor} !important;
                box-shadow: 0 0 10px ${theme.primaryColor}40 !important;
            }
        `;

        console.log('✅ Dynamic theme styles applied');
    }

    initializeHeroSection() {
        console.log('🦸 Initializing hero section...');
        
        const heroConfig = this.config.hero;
        if (!heroConfig) {
            console.error('❌ Hero config not found');
            this.loadBasicHero();
            return;
        }

        console.log('🦸 Hero config found:', heroConfig);

        // Set hero content
        const heroTitle = document.getElementById('hero-title');
        const heroSubtitle = document.getElementById('hero-subtitle');
        const heroDescription = document.getElementById('hero-description');
        const heroButton = document.getElementById('hero-cta-button');
        const heroIcon = document.getElementById('hero-cta-icon');
        const heroText = document.getElementById('hero-cta-text');

        if (heroTitle) {
            heroTitle.textContent = heroConfig.title;
            console.log('✅ Hero title set:', heroConfig.title);
        } else {
            console.error('❌ Hero title element not found');
        }

        if (heroSubtitle) {
            heroSubtitle.textContent = heroConfig.subtitle;
            console.log('✅ Hero subtitle set:', heroConfig.subtitle);
        }

        if (heroDescription) {
            heroDescription.textContent = heroConfig.description;
            console.log('✅ Hero description set:', heroConfig.description);
        }

        if (heroButton && (heroConfig.cta || heroConfig.ctaButton)) {
            const ctaConfig = heroConfig.cta || heroConfig.ctaButton;
            heroButton.href = ctaConfig.link;
            // Open CTA in new tab by default unless explicitly overridden
            heroButton.target = (ctaConfig.target && ctaConfig.target !== '') ? ctaConfig.target : '_blank';
            heroButton.rel = 'noopener noreferrer';
            if (heroIcon) heroIcon.className = ctaConfig.icon;
            if (heroText) heroText.textContent = ctaConfig.text;
            console.log('✅ Hero CTA set:', ctaConfig.text);
        }

        // Initialize hero image box
        if (heroConfig.imageBox?.enabled) {
            this.initializeHeroImageBox(heroConfig.imageBox);
        }

        // Initialize background animation
        if (heroConfig.backgroundType === 'animated' && heroConfig.backgroundConfig) {
            this.initializeHeroAnimation(heroConfig.backgroundConfig);
        }

        console.log('✅ Hero section initialized');
    }

    loadBasicHero() {
        console.log('🔄 Loading basic hero content...');
        
        const heroTitle = document.getElementById('hero-title');
        const heroSubtitle = document.getElementById('hero-subtitle');
        const heroDescription = document.getElementById('hero-description');
        const heroButton = document.getElementById('hero-cta-button');
        const heroIcon = document.getElementById('hero-cta-icon');
        const heroText = document.getElementById('hero-cta-text');
        
        if (heroTitle) heroTitle.textContent = 'Welcome to Top 10 Crypto Casinos';
        if (heroSubtitle) heroSubtitle.textContent = 'Discover the Best Cryptocurrency Gambling Platforms';
        if (heroDescription) heroDescription.textContent = 'Your ultimate guide to secure, profitable, and exciting crypto casino experiences with detailed reviews and exclusive bonuses.';
        
        if (heroButton) {
            heroButton.href = 'index.html';
            heroButton.target = '_blank';
            heroButton.rel = 'noopener noreferrer';
            if (heroIcon) heroIcon.className = 'fas fa-coins';
            if (heroText) heroText.textContent = 'View Our Top 10 Crypto Casinos';
        }
        
        console.log('✅ Basic hero content loaded');
    }

    initializeHeroAnimation(backgroundConfig) {
        console.log('🌟 Initializing hero animation:', backgroundConfig.animationType);
        
        try {
            const heroSection = document.querySelector('.hero-section');
            if (!heroSection) {
                console.error('❌ Hero section not found for animation');
                return;
            }

            // Initialize the appropriate animation based on type
            switch (backgroundConfig.animationType) {
                case 'crypto-rain':
                    this.createCryptoRain(heroSection, backgroundConfig);
                    break;
                case 'floating-coins':
                    this.createFloatingCoins(heroSection, backgroundConfig);
                    break;
                case 'matrix':
                    this.createMatrixEffect(heroSection, backgroundConfig);
                    break;
                case 'particles':
                    this.createParticleNetwork(heroSection, backgroundConfig);
                    break;
                default:
                    console.log('⚠️ Unknown animation type:', backgroundConfig.animationType);
            }
            
            console.log('✅ Hero animation initialized');
        } catch (error) {
            console.error('❌ Error initializing hero animation:', error);
        }
    }

    setupHeroAnimation(config) {
        const heroAnimation = document.getElementById('hero-animation');
        
        switch (config.animationType) {
            case 'crypto-rain':
                this.createCryptoRain(heroAnimation);
                break;
            case 'floating-coins':
                this.createFloatingCoins(heroAnimation);
                break;
            case 'matrix':
                this.createMatrixEffect(heroAnimation);
                break;
            case 'particles':
                this.createParticleNetwork(heroAnimation);
                break;
        }
    }

    createCryptoRain(container, backgroundConfig) {
        // Pull config from HOME_CONFIG.cryptoAnimations where name === 'crypto-rain',
        // then fall back to any characters/speed/density provided on backgroundConfig,
        // then finally fall back to a sensible default.
        const animList = (window.HOME_CONFIG && window.HOME_CONFIG.cryptoAnimations && window.HOME_CONFIG.cryptoAnimations.animations) || [];
        const animCfg = animList.find(a => (a.name || '').toLowerCase() === 'crypto-rain');

        const defaultSymbols = ['₿', 'Ξ', 'Ł', 'Ð', '₳', '○', '◊', '△'];
        const symbols = (animCfg && Array.isArray(animCfg.characters) && animCfg.characters.length)
            ? animCfg.characters
            : (backgroundConfig && Array.isArray(backgroundConfig.characters) && backgroundConfig.characters.length)
                ? backgroundConfig.characters
                : defaultSymbols;

        const speedSetting = (animCfg && animCfg.speed) || (backgroundConfig && backgroundConfig.speed) || 'medium';
        const densitySetting = (animCfg && animCfg.density) || (backgroundConfig && backgroundConfig.density) || 'medium';

        const baseDuration = this.getSpeedValue(speedSetting); // seconds baseline
        const intervalMs = this.getDensityValue(densitySetting); // ms between drops

        const resolvedColor = (() => {
            // Prefer explicit color from config if present
            const color = (animCfg && animCfg.color) || (backgroundConfig && backgroundConfig.color);
            if (color && !color.includes('var(--')) return color;
            // Resolve CSS variable to concrete color
            return getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
        })();

        const createRainDrop = () => {
            const drop = document.createElement('div');
            drop.className = 'matrix-char';
            drop.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            drop.style.left = Math.random() * 100 + '%';
            // Add small randomization around base duration
            drop.style.animationDuration = (Math.random() * 2 + baseDuration) + 's';
            drop.style.opacity = Math.random() * 0.5 + 0.2;
            drop.style.fontSize = (Math.random() * 20 + 15) + 'px';
            drop.style.color = resolvedColor;

            container.appendChild(drop);

            setTimeout(() => {
                if (drop.parentNode) {
                    drop.parentNode.removeChild(drop);
                }
            }, (baseDuration + 4) * 1000);
        };

        // Create rain drops continuously with density-based interval
        const rainInterval = setInterval(() => {
            if (this.isLoaded) {
                createRainDrop();
            }
        }, intervalMs);

        this.cryptoAnimationIntervals.push(rainInterval);
    }

    createFloatingCoins(container) {
        const coins = ['₿', 'Ξ', 'Ł', 'Ð'];
        
        const createCoin = () => {
            const coin = document.createElement('div');
            coin.className = 'floating-coin';
            coin.textContent = coins[Math.floor(Math.random() * coins.length)];
            coin.style.left = Math.random() * 100 + '%';
            coin.style.animationDuration = (Math.random() * 10 + 10) + 's';
            coin.style.animationDelay = Math.random() * 5 + 's';
            
            // Use resolved theme color instead of CSS variable
            const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
            coin.style.color = primaryColor;
            
            container.appendChild(coin);
            
            setTimeout(() => {
                if (coin.parentNode) {
                    coin.parentNode.removeChild(coin);
                }
            }, 15000);
        };

        // Create floating coins
        const coinInterval = setInterval(() => {
            if (this.isLoaded) {
                createCoin();
            }
        }, 1000);
        
        this.cryptoAnimationIntervals.push(coinInterval);
    }

    initializeScrollSections() {
        console.log('📜 Initializing scroll sections...');
        
        const scrollConfig = this.config.scrollSections;
        if (!scrollConfig?.enabled) {
            console.log('⚠️ Scroll sections disabled or not configured');
            return;
        }

        const container = document.getElementById('scroll-sections');
        if (!container) {
            console.error('❌ Scroll sections container not found');
            return;
        }
        
        // Clear any existing scroll sections to prevent duplicates
        container.innerHTML = '';
        this.scrollAnimations.clear();
        
        console.log(`📜 Creating ${scrollConfig.sections.length} scroll sections`);
        
        scrollConfig.sections.forEach((section, index) => {
            console.log(`📜 Creating section: ${section.title}`);
            
            const sectionElement = document.createElement('div');
            sectionElement.className = `scroll-section ${section.animation}`;
            sectionElement.id = section.id;
            
            // Set background based on type
            if (section.backgroundType === 'gradient') {
                sectionElement.style.background = section.backgroundValue;
                sectionElement.style.backgroundAttachment = 'scroll';
                sectionElement.style.backgroundPosition = 'center center';
            } else if (section.backgroundImage) {
                sectionElement.style.backgroundImage = `url(${section.backgroundImage})`;
                sectionElement.style.backgroundSize = 'cover';
                sectionElement.style.backgroundPosition = 'center center';
                sectionElement.style.backgroundAttachment = 'scroll';
                sectionElement.style.backgroundRepeat = 'no-repeat';
            }
            
            sectionElement.innerHTML = `
                <div class="scroll-section-content">
                    <div class="scroll-section-icon">
                        <i class="${section.icon}"></i>
                    </div>
                    <h2 class="scroll-section-title">${section.title}</h2>
                    <p class="scroll-section-description">${section.description}</p>
                </div>
            `;
            
            container.appendChild(sectionElement);
            
            // Store animation config with enhanced detection
            this.scrollAnimations.set(section.id, {
                element: sectionElement,
                trigger: section.trigger,
                animation: section.animation,
                triggered: false,
                // Add offset for better trigger timing
                offset: window.innerHeight * 0.7 // Trigger when 70% of viewport height from top
            });
            
            console.log(`✅ Created scroll section: ${section.title}`);
        });
        
        // Setup enhanced scroll detection
        this.setupScrollObserver();
        
        console.log('✅ Scroll sections initialized');
    }

    setupScrollObserver() {
        // Use Intersection Observer for better performance and accuracy
        const observerOptions = {
            root: null,
            rootMargin: '-30% 0px -30% 0px', // Trigger when section is 30% visible
            threshold: 0.1
        };

        this.scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    const animationData = this.scrollAnimations.get(sectionId);
                    
                    if (animationData && !animationData.triggered) {
                        console.log(`🎬 Triggering animation for: ${sectionId}`);
                        
                        // Add visible class to trigger animations
                        entry.target.classList.add('visible');
                        animationData.triggered = true;
                        
                        // Update the animation data
                        this.scrollAnimations.set(sectionId, animationData);
                    }
                }
            });
        }, observerOptions);

        // Observe all scroll sections
        this.scrollAnimations.forEach((animationData, id) => {
            this.scrollObserver.observe(animationData.element);
        });

        console.log('✅ Scroll observer setup complete');
    }

    initializeVideoSections() {
        console.log('🎥 Initializing video sections...');
        
        const videoSections = this.config.videoSections;
        if (!videoSections?.length) {
            console.log('⚠️ No video sections configured');
            return;
        }

        const container = document.getElementById('video-content');
        if (!container) {
            console.error('❌ Video content container not found');
            return;
        }
        
        console.log(`🎥 Creating ${videoSections.length} video sections`);
        
        videoSections.forEach((video, index) => {
            if (!video.enabled) return;
            
            console.log(`🎥 Creating video: ${video.title}`);
            
            const videoElement = document.createElement('div');
            videoElement.className = `video-item position-${video.position}`;
            
            // Create video player or placeholder based on displayType
            let videoPlayerHTML;
            
            if (video.displayType === 'thumbnail' && video.thumbnailImage) {
                // Display as clickable thumbnail
                videoPlayerHTML = `
                    <div class="video-player video-thumbnail-container" 
                         data-external-url="${video.externalUrl || ''}" 
                         data-click-action="${video.clickAction || 'none'}"
                         style="cursor: ${video.clickAction === 'external' ? 'pointer' : 'default'};">
                        <img src="${video.thumbnailImage}" 
                             alt="${video.title} thumbnail" 
                             class="video-thumbnail"
                             style="width: 100%; height: 300px; object-fit: cover; border-radius: 15px;">
                        <div class="video-play-overlay" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: rgba(0,0,0,0.7); color: white; padding: 15px; border-radius: 50%; font-size: 24px; pointer-events: none;">
                            <i class="fas fa-play"></i>
                        </div>
                    </div>
                `;
            } else if (video.videoUrl && video.videoUrl.trim() !== '') {
                // Display as video with loop and click functionality
                const videoAttributes = [
                    video.autoplay ? 'autoplay' : '',
                    video.loop ? 'loop' : '',
                    video.muted ? 'muted' : '',
                    video.controls !== false ? 'controls' : '',
                    'preload="metadata"'
                ].filter(attr => attr).join(' ');
                
                videoPlayerHTML = `
                    <div class="video-player video-container" 
                         data-external-url="${video.externalUrl || ''}" 
                         data-click-action="${video.clickAction || 'none'}"
                         style="position: relative; cursor: ${video.clickAction === 'external' ? 'pointer' : 'default'}; height: 100%;">
                        <video class="video-element" 
                               ${videoAttributes}
                               style="width: 100%; height: 100%; object-fit: cover; border-radius: 15px; display: block;">
                            <source src="${video.videoUrl}" type="video/mp4">
                            <source src="${video.videoUrl}" type="video/webm">
                            <source src="${video.videoUrl}" type="video/ogg">
                            Your browser does not support the video tag.
                        </video>
                        ${video.clickAction === 'external' ? '<div class="video-click-overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 10; pointer-events: auto; background: transparent;"></div>' : ''}
                    </div>
                `;
            } else {
                // Placeholder
                videoPlayerHTML = `
                    <div class="video-player" style="background: var(--bg-secondary, #f9fafb); height: 300px; border-radius: 15px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; color: var(--text-secondary, #6b7280); text-align: center; padding: 2rem;">
                        <div>
                            <div style="font-size: 3rem; margin-bottom: 1rem;">${video.placeholder.split(' ')[0]}</div>
                            <div>${video.placeholder}</div>
                        </div>
                    </div>
                `;
            }
            
            videoElement.innerHTML = `
                <div class="video-info">
                    <h3>${video.title}</h3>
                    <p>${video.description}</p>
                </div>
                ${videoPlayerHTML}
            `;
            
            container.appendChild(videoElement);
            
            // Add click event listeners for external links
            this.setupVideoClickHandlers(videoElement, video);
            
            console.log(`✅ Created video section: ${video.title}`);
        });
        
        console.log('✅ Video sections initialized');
    }

    setupVideoClickHandlers(videoElement, videoConfig) {
        console.log(`🎯 Setting up click handlers for: ${videoConfig.title}`);
        
        // Find clickable elements
        const clickableElements = videoElement.querySelectorAll('[data-click-action="external"]');
        
        clickableElements.forEach(element => {
            const externalUrl = element.getAttribute('data-external-url');
            
            if (externalUrl && externalUrl.trim() !== '') {
                element.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    console.log(`🔗 Opening external URL: ${externalUrl}`);
                    
                    // Open in new tab
                    window.open(externalUrl, '_blank', 'noopener,noreferrer');
                });
                
                // Add visual feedback for clickable elements
                element.addEventListener('mouseenter', () => {
                    element.style.transform = 'scale(1.02)';
                    element.style.transition = 'transform 0.2s ease';
                });
                
                element.addEventListener('mouseleave', () => {
                    element.style.transform = 'scale(1)';
                });
                
                console.log(`✅ Click handler added for external URL: ${externalUrl}`);
            }
        });
        
        // Handle video click overlay specifically
        const videoClickOverlay = videoElement.querySelector('.video-click-overlay');
        if (videoClickOverlay) {
            const externalUrl = videoClickOverlay.parentElement.getAttribute('data-external-url');
            
            if (externalUrl && externalUrl.trim() !== '') {
                videoClickOverlay.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    console.log(`🎥 Video clicked, opening: ${externalUrl}`);
                    window.open(externalUrl, '_blank', 'noopener,noreferrer');
                });
            }
        }
    }

    initializeAdSections() {
        console.log('📢 Initializing animated ad sections...');
        
        const adSections = this.config.adSections;
        if (!adSections?.length) {
            console.log('⚠️ No ad sections configured');
            return;
        }

        const container = document.getElementById('ad-content');
        if (!container) {
            console.error('❌ Ad content container not found');
            return;
        }
        
        console.log(`📢 Creating ${adSections.length} animated ad sections`);
        
        adSections.forEach((ad, index) => {
            if (!ad.enabled) {
                console.log(`⏭️ Skipping disabled ad: ${ad.title}`);
                return;
            }
            
            console.log(`📢 Creating animated ad: ${ad.title}`);
            
            const adElement = document.createElement('div');
            adElement.className = `ad-${ad.type} ${ad.animation} position-${ad.position} size-${ad.size} moving-ad`;
            adElement.setAttribute('data-animation', ad.animation);
            
            // Set background based on type
            this.setupAdBackground(adElement, ad);
            
            // Create the main ad content
            const contentHtml = `
                <div class="ad-${ad.type}-content">
                    <h3 class="ad-title">${ad.title}</h3>
                    <h4 class="ad-subtitle">${ad.subtitle}</h4>
                    <p class="ad-description">${ad.description}</p>
                    <a href="${ad.ctaLink}" class="ad-cta-btn" target="_blank" rel="noopener noreferrer">${ad.ctaText}</a>
                </div>
            `;
            
            adElement.innerHTML = contentHtml;
            
            // Add moving elements if enabled
            if (ad.movingElements?.enabled) {
                this.addMovingElements(adElement, ad.movingElements, ad.backgroundConfig);
            }
            
            container.appendChild(adElement);
            
            // Initialize ad-specific animations
            this.initializeAdAnimations(adElement, ad);
            // Enforce opening in new tab for ad CTAs unless explicitly overridden
            const ctaLinkEl = adElement.querySelector('.ad-cta-btn');
            if (ctaLinkEl) {
                const newTab = (typeof ad.openInNewTab === 'boolean') ? ad.openInNewTab : true;
                ctaLinkEl.target = newTab ? '_blank' : '_self';
                ctaLinkEl.rel = 'noopener noreferrer';
            }
            // Apply customizable glow if provided
            this.applyAdGlow(adElement, ad);
            
            console.log(`✅ Created animated ad: ${ad.title}`);
        });
        
        console.log('✅ Animated ad sections initialized');
    }

    setupAdBackground(element, ad) {
        switch (ad.backgroundType) {
            case 'animated-gradient':
                element.style.background = ad.backgroundConfig.gradient;
                element.classList.add('animated-gradient', ad.backgroundConfig.animationStyle);
                // Allow CSS keyframes to pick up card-specific glow colors
                if (ad.glow && ad.glow.color) {
                    element.style.setProperty('--ad-glow-1', this.resolveGlow(ad.glow.color, 0.6));
                    element.style.setProperty('--ad-glow-2', this.resolveGlow(ad.glow.hoverColor || ad.glow.color, 0.8));
                    element.style.setProperty('--ad-glow-3', this.resolveGlow(ad.glow.color, 0.7));
                    element.style.setProperty('--ad-glow-4', this.resolveGlow(ad.glow.hoverColor || ad.glow.color, 0.9));
                }
                break;
            case 'animated-pattern':
                element.classList.add('animated-pattern', ad.backgroundConfig.pattern);
                if (ad.backgroundConfig.overlay) {
                    element.style.position = 'relative';
                    const overlay = document.createElement('div');
                    overlay.className = 'ad-overlay';
                    overlay.style.cssText = `
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: ${ad.backgroundConfig.overlay};
                        z-index: 1;
                    `;
                    element.appendChild(overlay);
                }
                break;
            case 'gradient':
                element.style.background = ad.backgroundConfig.gradient;
                break;
        }
    }

    addMovingElements(adElement, movingConfig, backgroundConfig) {
        // Create moving elements container
        const movingContainer = document.createElement('div');
        movingContainer.className = 'moving-elements-container';
        movingContainer.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 2;
        `;
        
        // Add different types of moving elements
        if (movingConfig.coins) {
            this.createMovingCoins(movingContainer);
        }
        
        if (movingConfig.sparkles) {
            this.createMovingSparkles(movingContainer);
        }
        
        if (movingConfig.diamonds) {
            this.createMovingDiamonds(movingContainer);
        }
        
        if (movingConfig.circuit) {
            this.createMovingCircuit(movingContainer);
        }
        
        if (movingConfig.particles) {
            this.createMovingParticles(movingContainer);
        }
        
        adElement.appendChild(movingContainer);
    }

    createMovingCoins(container) {
        for (let i = 0; i < 5; i++) {
            const coin = document.createElement('div');
            coin.className = 'moving-coin';
            // Use more reliable crypto symbols and fallbacks
            const symbols = ['🪙', '💰', '🔶', '🟡']; // More reliable emoji symbols
            coin.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
            coin.style.cssText = `
                position: absolute;
                font-size: ${Math.random() * 20 + 18}px;
                color: #ffd700;
                animation: float-around ${Math.random() * 3 + 4}s ease-in-out infinite;
                animation-delay: ${Math.random() * 2}s;
                left: ${Math.random() * 80}%;
                top: ${Math.random() * 80}%;
                opacity: 0.8;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
                text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
            `;
            container.appendChild(coin);
        }
    }

    createMovingSparkles(container) {
        for (let i = 0; i < 8; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'moving-sparkle';
            sparkle.innerHTML = '✨';
            sparkle.style.cssText = `
                position: absolute;
                font-size: ${Math.random() * 10 + 12}px;
                animation: sparkle-move ${Math.random() * 2 + 3}s ease-in-out infinite;
                animation-delay: ${Math.random() * 2}s;
                left: ${Math.random() * 90}%;
                top: ${Math.random() * 90}%;
                opacity: 0.8;
            `;
            container.appendChild(sparkle);
        }
    }

    createMovingDiamonds(container) {
        for (let i = 0; i < 6; i++) {
            const diamond = document.createElement('div');
            diamond.className = 'moving-diamond';
            diamond.innerHTML = '💎';
            diamond.style.cssText = `
                position: absolute;
                font-size: ${Math.random() * 15 + 18}px;
                animation: diamond-rotate ${Math.random() * 4 + 5}s linear infinite;
                animation-delay: ${Math.random() * 3}s;
                left: ${Math.random() * 85}%;
                top: ${Math.random() * 85}%;
                opacity: 0.9;
            `;
            container.appendChild(diamond);
        }
    }

    createMovingCircuit(container) {
        for (let i = 0; i < 10; i++) {
            const dot = document.createElement('div');
            dot.className = 'circuit-dot';
            dot.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: var(--primary-color, #2563eb);
                border-radius: 50%;
                animation: circuit-flow ${Math.random() * 3 + 4}s linear infinite;
                animation-delay: ${Math.random() * 2}s;
                left: ${Math.random() * 95}%;
                top: ${Math.random() * 95}%;
                box-shadow: 0 0 10px var(--primary-color, #2563eb);
            `;
            container.appendChild(dot);
        }
    }

    createMovingParticles(container) {
        for (let i = 0; i < 12; i++) {
            const particle = document.createElement('div');
            particle.className = 'floating-particle';
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 3 + 2}px;
                height: ${Math.random() * 3 + 2}px;
                background: var(--accent-color, #10b981);
                border-radius: 50%;
                animation: particle-float ${Math.random() * 5 + 6}s ease-in-out infinite;
                animation-delay: ${Math.random() * 3}s;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                opacity: 0.6;
            `;
            container.appendChild(particle);
        }
    }

    initializeAdAnimations(adElement, adConfig) {
        // Add hover effects and interaction animations
        adElement.addEventListener('mouseenter', () => {
            adElement.classList.add('ad-hover');
        });
        
        adElement.addEventListener('mouseleave', () => {
            adElement.classList.remove('ad-hover');
        });
        
        // Add click animations
        const ctaButton = adElement.querySelector('.ad-cta-btn');
        if (ctaButton) {
            ctaButton.addEventListener('click', (e) => {
                // Add click ripple effect
                const ripple = document.createElement('div');
                ripple.className = 'click-ripple';
                ripple.style.cssText = `
                    position: absolute;
                    background: rgba(255,255,255,0.6);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple-effect 0.6s ease-out;
                    left: ${e.offsetX - 10}px;
                    top: ${e.offsetY - 10}px;
                    width: 20px;
                    height: 20px;
                `;
                ctaButton.style.position = 'relative';
                ctaButton.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        }
    }

    applyAdGlow(adElement, adConfig) {
        // Support customizable glow from HOME_CONFIG.adSections[n].glow
        if (!adConfig || !adConfig.glow) return;
        const glow = adConfig.glow;
        const baseColor = glow.color || 'var(--primary-color)';
        const hoverColor = glow.hoverColor || 'var(--secondary-color)';
        const baseBlur = glow.blur || '20px';
        const hoverBlur = glow.hoverBlur || '40px';

        // Apply base glow
        adElement.style.boxShadow = `0 0 ${baseBlur} ${baseColor}`;
        // Also set CSS vars used by keyframes
        adElement.style.setProperty('--ad-glow-1', this.resolveGlow(baseColor, 0.6));
        adElement.style.setProperty('--ad-glow-2', this.resolveGlow(hoverColor, 0.8));
        adElement.style.setProperty('--ad-glow-3', this.resolveGlow(baseColor, 0.7));
        adElement.style.setProperty('--ad-glow-4', this.resolveGlow(hoverColor, 0.9));

        // Enhance hover glow
        adElement.addEventListener('mouseenter', () => {
            adElement.style.boxShadow = `0 0 ${hoverBlur} ${hoverColor}, 0 0 calc(${hoverBlur} * 1.5) ${baseColor}`;
        });
        adElement.addEventListener('mouseleave', () => {
            adElement.style.boxShadow = `0 0 ${baseBlur} ${baseColor}`;
        });
    }

    resolveGlow(color, alphaFallback) {
        // If a hex color is provided, convert to rgba with provided alpha
        if (typeof color === 'string' && color.startsWith('#')) {
            const hex = color.replace('#', '');
            const bigint = parseInt(hex.length === 3 ? hex.split('').map(c => c + c).join('') : hex, 16);
            const r = (bigint >> 16) & 255;
            const g = (bigint >> 8) & 255;
            const b = bigint & 255;
            return `rgba(${r}, ${g}, ${b}, ${alphaFallback ?? 0.7})`;
        }
        // If already rgba or css var, pass through
        return color;
    }

    initializeCryptoAnimations() {
        console.log('🪙 Initializing crypto animations...');
        
        // Clean up any existing floating coins
        this.cleanupFloatingCoins();
        
        const cryptoConfig = this.config.cryptoAnimations;
        if (!cryptoConfig?.enabled) {
            console.log('⚠️ Crypto animations disabled or not configured');
            return;
        }

        const container = document.getElementById('crypto-animations');
        if (!container) {
            console.error('❌ Crypto animations container not found');
            return;
        }
        
        console.log('🪙 Crypto animations container found but no overlay animations needed');
        console.log('✅ Crypto animations initialized (hero section animations handled separately)');
    }

    cleanupFloatingCoins() {
        // Remove any existing floating coins
        const existingCoins = document.querySelectorAll('.floating-coin');
        existingCoins.forEach(coin => coin.remove());
        
        // Remove the crypto keyframes styles
        const cryptoKeyframes = document.getElementById('crypto-keyframes');
        if (cryptoKeyframes) {
            cryptoKeyframes.remove();
        }
        
        console.log('🧹 Cleaned up floating coin overlays');
    }

    // Cleanup method for proper disposal
    cleanup() {
        // Dispose of scroll observer
        if (this.scrollObserver) {
            this.scrollObserver.disconnect();
            this.scrollObserver = null;
            console.log('🧹 Scroll observer cleaned up');
        }
        
        // Clear animation intervals
        this.cryptoAnimationIntervals.forEach(interval => {
            clearInterval(interval);
        });
        this.cryptoAnimationIntervals = [];
        
        // Clear scroll animations map
        this.scrollAnimations.clear();
        
        console.log('🧹 HomePage cleanup complete');
    }

    initializeInteractiveElements() {
        console.log('🎮 Initializing interactive elements...');
        // Simple placeholder - can be expanded later
        console.log('✅ Interactive elements initialized');
    }

    createFloatingCTA(container, config) {
        const cta = document.createElement('a');
        cta.className = `floating-cta ${config.animation}`;
        cta.href = config.link;
        cta.target = (config.target && config.target !== '') ? config.target : '_blank';
        cta.rel = 'noopener noreferrer';
        cta.textContent = config.text;
        cta.style.position = 'fixed';
        
        const positions = config.position.split('-');
        positions.forEach(pos => {
            cta.style[pos] = '2rem';
        });
        
        container.appendChild(cta);
        
        // Show after scroll
        if (config.showAfterScroll) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > config.showAfterScroll) {
                    cta.classList.add('visible');
                } else {
                    cta.classList.remove('visible');
                }
            });
        }
    }

    setupScrollProgress(config) {
        const progressBar = document.getElementById('scroll-progress');
        if (!progressBar) return;
        
        // Resolve theme color if using CSS variable
        const resolvedColor = config.color.includes('var(--') 
            ? getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim()
            : config.color;
        const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color').trim();
        
        progressBar.style.background = `linear-gradient(90deg, ${resolvedColor}, ${secondaryColor})`;
        progressBar.style.boxShadow = `0 0 10px ${resolvedColor}`;
        
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }

    setupEventListeners() {
        console.log('👂 Setting up event listeners...');
        
        // Setup scroll listeners for parallax effects
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });
        
        console.log('✅ Event listeners set up');
    }

    handleScroll() {
        const scrollY = window.scrollY;
        
        // Fallback scroll detection for browsers that don't support Intersection Observer
        if (!this.scrollObserver) {
            this.scrollAnimations.forEach((animation, id) => {
                if (!animation.triggered && scrollY >= animation.trigger) {
                    console.log(`🎬 Fallback animation trigger for: ${id}`);
                    animation.element.classList.add('visible');
                    animation.triggered = true;
                }
            });
        }
        
        // Parallax effects disabled to prevent background movement
    }

    startAnimations() {
        console.log('🎬 Starting animations...');
        // Animations will be started by the crypto animation initialization
        console.log('✅ Animations started');
    }

    handleResize() {
        // Handle responsive adjustments
        this.adjustForMobile();
    }

    handleVisibilityChange() {
        if (document.hidden) {
            // Pause animations when tab is not visible
            this.pauseAnimations();
        } else {
            // Resume animations when tab becomes visible
            this.resumeAnimations();
        }
    }

    adjustForMobile() {
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            // Reduce animation intensity on mobile
            document.querySelectorAll('.floating-coin, .matrix-char').forEach(el => {
                el.style.display = 'none';
            });
        }
    }

    pauseAnimations() {
        this.cryptoAnimationIntervals.forEach(interval => {
            clearInterval(interval);
        });
    }

    resumeAnimations() {
        if (this.config.cryptoAnimations?.enabled) {
            this.initializeCryptoAnimations();
        }
    }

    getSpeedValue(speed) {
        switch (speed) {
            case 'slow': return 8;
            case 'medium': return 5;
            case 'fast': return 3;
            default: return 5;
        }
    }

    getDensityValue(density) {
        switch (density) {
            case 'low': return 1000;
            case 'medium': return 500;
            case 'high': return 200;
            default: return 500;
        }
    }

    // Public methods for external control
    updateConfig(newConfig) {
        this.config = { ...this.config, ...newConfig };
        this.initialize();
    }

    destroy() {
        // Clean up intervals and event listeners
        this.cryptoAnimationIntervals.forEach(interval => {
            clearInterval(interval);
        });
        
        this.cryptoAnimationIntervals = [];
        this.scrollAnimations.clear();
        this.isLoaded = false;
    }

    loadFallbackContent() {
        console.log('🔄 Loading fallback content for home page');
        
        // Add basic hero content
        const heroTitle = document.getElementById('hero-title');
        const heroSubtitle = document.getElementById('hero-subtitle');
        const heroDescription = document.getElementById('hero-description');
        const heroButton = document.getElementById('hero-cta-button');
        
        if (heroTitle) heroTitle.textContent = 'Welcome to Top 10 Crypto Casinos';
        if (heroSubtitle) heroSubtitle.textContent = 'Discover the Best Cryptocurrency Gambling Platforms';
        if (heroDescription) heroDescription.textContent = 'Your ultimate guide to secure, profitable, and exciting crypto casino experiences with detailed reviews and exclusive bonuses.';
        if (heroButton) {
            heroButton.href = 'index.html';
            heroButton.innerHTML = '<i class="fas fa-coins"></i> <span>View Our Top 10 Crypto Casinos</span>';
        }
        
        // Add basic ad content
        this.loadFallbackAds();
        
        console.log('✅ Fallback content loaded');
    }

    loadFallbackAds() {
        const adContent = document.getElementById('ad-content');
        if (!adContent) return;
        
        adContent.innerHTML = `
            <div class="ad-banner pulse-glow position-center size-large" style="background: linear-gradient(45deg, var(--primary-color, #2563eb), var(--secondary-color, #64748b)); color: white; padding: 4rem; border-radius: 20px; text-align: center; margin-bottom: 3rem;">
                <div class="ad-banner-content">
                    <h3>🎰 Exclusive Bonus Alert!</h3>
                    <h4>Get 500% Match Bonus + 200 Free Spins</h4>
                    <p>Limited time offer for new crypto casino players</p>
                    <a href="index.html#product1" class="btn" style="background: rgba(255,255,255,0.2); color: white; padding: 1rem 2rem; border-radius: 50px; text-decoration: none; display: inline-block; margin-top: 1rem;">Claim Bonus Now</a>
                </div>
            </div>
            
            <div class="ad-card position-left size-medium" style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; background: var(--bg-primary, #ffffff); border-radius: 20px; padding: 3rem; box-shadow: 0 20px 60px rgba(0,0,0,0.1); margin-bottom: 3rem;">
                <div class="ad-card-info">
                    <h3>🚀 New Bitcoin Casino Launch</h3>
                    <h4 style="color: var(--primary-color, #2563eb);">Revolutionary Gaming Platform</h4>
                    <p style="color: var(--text-secondary, #6b7280);">Experience next-generation crypto gambling with cutting-edge technology</p>
                    <a href="index.html#product2" class="btn" style="background: var(--primary-color, #2563eb); color: white; padding: 1rem 2rem; border-radius: 50px; text-decoration: none; display: inline-block;">Explore Now</a>
                </div>
                <div class="ad-card-visual" style="background: var(--bg-secondary, #f9fafb); height: 200px; border-radius: 15px; display: flex; align-items: center; justify-content: center; font-size: 3rem;">
                    🎲
                </div>
            </div>
        `;
    }

    applyBasicTheme() {
        // Get current theme colors from CSS variables
        const rootStyles = getComputedStyle(document.documentElement);
        const currentTheme = {
            primaryColor: rootStyles.getPropertyValue('--primary-color').trim(),
            secondaryColor: rootStyles.getPropertyValue('--secondary-color').trim(),
            accentColor: rootStyles.getPropertyValue('--accent-color').trim(),
            textPrimary: rootStyles.getPropertyValue('--text-primary').trim(),
            textSecondary: rootStyles.getPropertyValue('--text-secondary').trim(),
            bgPrimary: rootStyles.getPropertyValue('--bg-primary').trim(),
            bgSecondary: rootStyles.getPropertyValue('--bg-secondary').trim(),
            bgDark: rootStyles.getPropertyValue('--bg-dark').trim()
        };

        console.log('🎨 Applying basic theme colors:', currentTheme);

        // Update config with current theme colors
        if (this.config.hero?.backgroundConfig) {
            this.config.hero.backgroundConfig.primaryColor = currentTheme.primaryColor;
            this.config.hero.backgroundConfig.secondaryColor = currentTheme.secondaryColor;
        }

        if (this.config.cryptoAnimations?.animations) {
            this.config.cryptoAnimations.animations.forEach(animation => {
                if (animation.color && animation.color.includes('var(--')) {
                    animation.color = currentTheme.primaryColor;
                }
            });
        }

        if (this.config.interactiveElements?.elements) {
            this.config.interactiveElements.elements.forEach(element => {
                if (element.color && element.color.includes('var(--')) {
                    element.color = currentTheme.primaryColor;
                }
            });
        }

        // Apply dynamic theme styles
        this.applyDynamicStyles(currentTheme);
    }

    initializeHeroImageBox(imageBoxConfig) {
        console.log('🖼️ Initializing hero image box...');
        
        const heroLayout = document.getElementById('hero-layout');
        const imageBoxContainer = document.getElementById('hero-image-box');
        
        if (!heroLayout || !imageBoxContainer) {
            console.error('❌ Hero layout elements not found');
            return;
        }

        // Apply layout classes
        heroLayout.className = `hero-layout ${imageBoxConfig.layout} position-${imageBoxConfig.position}`;

        // Create image element or placeholder
        let imageElement;
        
        if (imageBoxConfig.image.src) {
            imageElement = document.createElement('img');
            imageElement.src = imageBoxConfig.image.src;
            imageElement.alt = imageBoxConfig.image.alt || 'Hero Image';
            imageElement.style.objectFit = imageBoxConfig.image.objectFit || 'cover';
            
            // Handle image load error with placeholder
            imageElement.onerror = () => {
                console.warn('⚠️ Hero image failed to load, using placeholder');
                this.createImagePlaceholder(imageBoxContainer, imageBoxConfig.image.placeholder);
            };
        } else {
            // Create placeholder if no image source
            this.createImagePlaceholder(imageBoxContainer, imageBoxConfig.image.placeholder);
            return;
        }

        // Apply styling configurations
        this.applyImageBoxStyling(imageBoxContainer, imageElement, imageBoxConfig);
        
        // Set image dimensions
        this.setImageBoxDimensions(imageBoxContainer, imageBoxConfig.size);

        // Add image to container
        imageBoxContainer.appendChild(imageElement);

        console.log('✅ Hero image box initialized');
    }

    createImagePlaceholder(container, placeholder) {
        const placeholderDiv = document.createElement('div');
        placeholderDiv.className = 'hero-image-placeholder';
        placeholderDiv.textContent = placeholder || '🎰';
        container.appendChild(placeholderDiv);
    }

    applyImageBoxStyling(container, imageElement, config) {
        const styling = config.styling;
        
        // Apply border radius
        if (styling.borderRadius) {
            imageElement.style.borderRadius = styling.borderRadius;
            container.style.borderRadius = styling.borderRadius;
        }

        // Apply shadow
        if (styling.shadow && styling.shadow !== 'none') {
            container.classList.add(`shadow-${styling.shadow}`);
        }

        // Apply border
        if (styling.border && styling.border !== 'none') {
            container.classList.add(`border-${styling.border}`);
        }

        // Apply animation
        if (styling.animation && styling.animation !== 'none') {
            container.classList.add(`animation-${styling.animation}`);
        }

        // Apply overlay
        if (styling.overlay && styling.overlay !== 'none') {
            container.classList.add(`overlay-${styling.overlay}`);
        }
    }

    setImageBoxDimensions(container, sizeConfig) {
        // Apply size configurations
        if (sizeConfig.width) {
            container.style.width = sizeConfig.width;
        }
        
        if (sizeConfig.height) {
            container.style.height = sizeConfig.height;
        }
        
        if (sizeConfig.maxWidth) {
            container.style.maxWidth = sizeConfig.maxWidth;
        }
        
        if (sizeConfig.minWidth) {
            container.style.minWidth = sizeConfig.minWidth;
        }

        // Apply aspect ratio if specified
        const aspectRatio = container.querySelector('img')?.dataset?.aspectRatio;
        if (aspectRatio && aspectRatio !== 'auto') {
            container.style.aspectRatio = aspectRatio.replace(':', '/');
        }
    }

    // Matrix Effect Animation
    createMatrixEffect(container, backgroundConfig) {
        console.log('🌟 Creating Matrix Effect');
        
        // Clear any existing animations in this container only
        const existingAnimations = container.querySelectorAll('.matrix-animation');
        existingAnimations.forEach(anim => anim.remove());
        
        // Create matrix container
        const matrixContainer = document.createElement('div');
        matrixContainer.className = 'matrix-animation';
        matrixContainer.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 1;
            pointer-events: none;
        `;
        
        // Matrix characters (tech/laptop themed)
        const matrixChars = ['0', '1', '💻', '⚡', '🖥️', '🔋', '⚙️', '📱', '🎮', '💾', '🔌', '📡', '0', '1', '0', '1'];
        
        const createMatrixColumn = () => {
            const column = document.createElement('div');
            column.style.cssText = `
                position: absolute;
                top: -100px;
                left: ${Math.random() * 100}%;
                width: 20px;
                height: 100px;
                color: ${backgroundConfig.primaryColor || 'var(--primary-color)'};
                font-family: 'Courier New', monospace;
                font-size: ${Math.random() * 10 + 12}px;
                opacity: ${Math.random() * 0.7 + 0.3};
                animation: matrix-fall ${Math.random() * 3 + 4}s linear infinite;
                pointer-events: none;
            `;
            
            // Add random characters
            let text = '';
            for (let i = 0; i < 5; i++) {
                text += matrixChars[Math.floor(Math.random() * matrixChars.length)] + '<br>';
            }
            column.innerHTML = text;
            
            matrixContainer.appendChild(column);
            
            // Remove column after animation
            setTimeout(() => {
                if (column.parentNode) {
                    column.parentNode.removeChild(column);
                }
            }, 7000);
        };
        
        // Create initial columns
        for (let i = 0; i < 15; i++) {
            setTimeout(() => createMatrixColumn(), i * 200);
        }
        
        // Continue creating columns
        const matrixInterval = setInterval(createMatrixColumn, 300);
        
        container.appendChild(matrixContainer);
        
        // Store interval for cleanup
        container.dataset.matrixInterval = matrixInterval;
        
        console.log('✅ Matrix Effect created');
    }

    // Particle Network Animation
    createParticleNetwork(container, backgroundConfig) {
        console.log('🌟 Creating Particle Network');
        
        // Clear any existing particle animations in this container only
        const existingCanvases = container.querySelectorAll('canvas');
        existingCanvases.forEach(canvas => canvas.remove());
        
        // Create canvas for particles
        const canvas = document.createElement('canvas');
        canvas.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
        `;
        
        const ctx = canvas.getContext('2d');
        
        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = container.offsetWidth || window.innerWidth;
            canvas.height = container.offsetHeight || window.innerHeight;
        };
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        // Particle system
        const particles = [];
        const particleCount = 50;
        const connectionDistance = 120;
        
        // Particle class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 2;
                this.vy = (Math.random() - 0.5) * 2;
                this.radius = Math.random() * 3 + 1;
                this.opacity = Math.random() * 0.8 + 0.2;
            }
            
            update() {
                this.x += this.vx;
                this.y += this.vy;
                
                // Bounce off edges
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
                
                // Keep within bounds
                this.x = Math.max(0, Math.min(canvas.width, this.x));
                this.y = Math.max(0, Math.min(canvas.height, this.y));
            }
            
            draw() {
                ctx.globalAlpha = this.opacity;
                ctx.fillStyle = backgroundConfig.primaryColor || '#3b82f6';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1;
            }
        }
        
        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
        
        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Update and draw particles
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            
            // Draw connections
            ctx.strokeStyle = backgroundConfig.secondaryColor || '#64748b';
            ctx.lineWidth = 1;
            
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < connectionDistance) {
                        ctx.globalAlpha = (1 - distance / connectionDistance) * 0.3;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                        ctx.globalAlpha = 1;
                    }
                }
            }
            
            requestAnimationFrame(animate);
        };
        
        container.appendChild(canvas);
        animate();
        
        console.log('✅ Particle Network created');
    }
}

// Initialize home page when DOM is ready
let homePage;

// Prevent multiple instances
if (window.homePage) {
    console.log('⚠️ HomePage already initialized, skipping...');
} else {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            if (!window.homePage) {
                homePage = new HomePage();
                window.homePage = homePage;
            }
        });
    } else {
        if (!window.homePage) {
            homePage = new HomePage();
            window.homePage = homePage;
        }
    }
}

// Export for external access
window.HomePage = HomePage; 