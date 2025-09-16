/*
===========================================
ANIMATED BANNER CONFIGURATION
===========================================
🎯 CHANGE YOUR ANIMATED BANNER SETTINGS HERE - EDIT THESE LINES ONLY:
Configure your animated horizontal banner ad with typing effects and customizable content.

📝 WORD SETS FLEXIBILITY:
Each wordSet array can contain 1, 2, 3, or more words:
- Single word: ['Subscribe']
- Two words: ['Live Streams', 'Gaming Content'] 
- Three words: ['Latest News', 'Expert Tips', 'Industry Insights']
- More words: ['Word1', 'Word2', 'Word3', 'Word4', 'Word5']

The animation automatically adapts to any number of words per set!
*/

// ========== ANIMATED BANNER CONFIGURATION ==========
const ANIMATED_BANNER_CONFIG = {
    // Global banner settings
    globalEnabled: true,                                          // ← Enable banner system globally
    
    // Component visibility controls (global defaults)
    components: {
        logoSection: {
            enabled: true,                                            // ← Enable/disable logo section
            devices: {
                desktop: true,                                        // ← Show logo on desktop
                tablet: true,                                         // ← Show logo on tablet
                mobile: true,                                         // ← Show logo on mobile
                extraSmall: true                                      // ← Show logo on extra small
            }
        },
        textSection: {
            enabled: true,                                            // ← Enable/disable animated text
            devices: {
                desktop: true,                                        // ← Show text on desktop
                tablet: true,                                         // ← Show text on tablet
                mobile: true,                                         // ← Show text on mobile
                extraSmall: true                                     // ← Hide text on extra small (example)
            }
        },
        ctaButton: {
            enabled: true,                                            // ← Enable/disable CTA button
            devices: {
                desktop: true,                                        // ← Show CTA on desktop
                tablet: true,                                         // ← Show CTA on tablet
                mobile: true,                                         // ← Show CTA on mobile
                extraSmall: true                                      // ← Show CTA on extra small
            }
        },
        entireBanner: {
            devices: {
                desktop: true,                                        // ← Show entire banner on desktop
                tablet: true,                                         // ← Show entire banner on tablet
                mobile: true,                                         // ← Show entire banner on mobile
                extraSmall: true                                      // ← Show entire banner on extra small
            }
        }
    },
    
    // Page-specific configurations
    pageSettings: {
        'home.html': { enabled: true, useDefault: true },         // ← Home page settings
        'index.html': { enabled: true, useDefault: true },       // ← Index page settings
        'top10.html': { enabled: true, useDefault: true },       // ← Top 10 page settings
        'newsletter.html': { enabled: true, useDefault: true },  // ← Newsletter page settings
        'blog.html': { 
            enabled: true, 
            useDefault: true,                                    // ← Use custom banner for blog
            customBanner: {
                // Component visibility controls (overrides global defaults)
                components: {
                    logoSection: {
                        enabled: true,                                    // ← Enable logo section
                        devices: {
                            desktop: true,                                // ← Show logo on desktop
                            tablet: true,                                 // ← Show logo on tablet
                            mobile: true,                                 // ← Show logo on mobile
                            extraSmall: true                              // ← Show logo on extra small
                        }
                    },
                    textSection: {
                        enabled: true,                                    // ← Enable animated text
                        devices: {
                            desktop: true,                                // ← Show text on desktop
                            tablet: true,                                 // ← Show text on tablet
                            mobile: true,                                // ← Hide text on mobile (example)
                            extraSmall: true                             // ← Hide text on extra small
                        }
                    },
                    ctaButton: {
                        enabled: true,                                    // ← Enable CTA button
                        devices: {
                            desktop: true,                                // ← Show CTA on desktop
                            tablet: true,                                 // ← Show CTA on tablet
                            mobile: true,                                 // ← Show CTA on mobile
                            extraSmall: true                              // ← Show CTA on extra small
                        }
                    },
                    entireBanner: {
                        devices: {
                            desktop: true,                                // ← Show entire banner on desktop
                            tablet: true,                                 // ← Show entire banner on tablet
                            mobile: true,                                 // ← Show entire banner on mobile
                            extraSmall: true                              // ← Show entire banner on extra small
                        }
                    }
                },
                logo: {
                    type: 'text',
                    text: {
                        content: '📰',
                        brandText: 'Blog News',
                        fontSize: '28px',
                        textColor: '#FFFFFF',
                        spacing: '8px',
                        left: '0px',
                        top: '0px',
                        scale: '1.0'
                    }
                },
                animatedText: {
                    wordSets: [
                    /*  ['Latest News', 'Expert Tips', 'Industry Insights'], // 3 words
                        ['How-To Guides', 'Reviews', 'Tutorials'],
                        ['Stay Updated', 'Learn More', 'Read Now'] */
                        ['Latest News'], // 1 word
                        ['Expert Tips'],
                        ['Industry Insights'],
                        ['How-To Guides'],
                        ['Reviews'],
                        ['Tutorials'],
                        ['Stay Updated'],
                        ['Learn More'],
                        ['Read Now']
                    ],
                    timing: {
                        wordDelay: 500,
                        setDisplayTime: 2000,
                        pullBackDuration: 600,
                        pauseBetweenSets: 300
                    },
                    styling: {
                        fontSize: '24px',
                        fontWeight: '600',
                        color: '#FFFFFF',
                        spacing: '15px',
                        minWidth: '400px',
                        forceCenterText: true
                    }
                },
                ctaButton: {
                    text: 'READ BLOG',
                    url: './blog.html',
                    styling: {
                        backgroundColor: '#2196f3',
                        hoverBackgroundColor: '#1976d2',
                        textColor: '#FFFFFF',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        padding: '12px 24px',
                        borderRadius: '6px',
                        border: 'none'
                    }
                },
                background: {
                    type: 'gradient',
                    gradientStart: '#1976d2',
                    gradientEnd: '#42a5f5',
                    gradientDirection: '90deg',
                    opacity: 0.95
                }
            }
        },
        'contact.html': { 
            enabled: true, 
            useDefault: true,                                    // ← Use custom banner for contact
            customBanner: {
                // Component visibility controls (overrides global defaults)
                components: {
                    logoSection: {
                        enabled: true,                                    // ← Enable logo section
                        devices: {
                            desktop: true,                                // ← Show logo on desktop
                            tablet: true,                                 // ← Show logo on tablet
                            mobile: true,                                 // ← Show logo on mobile
                            extraSmall: true                              // ← Show logo on extra small
                        }
                    },
                    textSection: {
                        enabled: true,                                    // ← Enable animated text
                        devices: {
                            desktop: true,                                // ← Show text on desktop
                            tablet: true,                                 // ← Show text on tablet
                            mobile: true,                                 // ← Show text on mobile
                            extraSmall: true                              // ← Show text on extra small
                        }
                    },
                    ctaButton: {
                        enabled: true,                                    // ← Enable CTA button
                        devices: {
                            desktop: true,                                // ← Show CTA on desktop
                            tablet: true,                                 // ← Show CTA on tablet
                            mobile: true,                                 // ← Show CTA on mobile
                            extraSmall: true                              // ← Show CTA on extra small
                        }
                    },
                    entireBanner: {
                        devices: {
                            desktop: true,                                // ← Show entire banner on desktop
                            tablet: true,                                 // ← Show entire banner on tablet
                            mobile: true,                                 // ← Show entire banner on mobile
                            extraSmall: true                              // ← Show entire banner on extra small
                        }
                    }
                },
                logo: {
                    type: 'text',
                    text: {
                        content: '📞',
                        brandText: 'Contact Us',
                        fontSize: '28px',
                        textColor: '#FFFFFF',
                        spacing: '8px',
                        left: '0px',
                        top: '0px',
                        scale: '1.0'
                    }
                },
                animatedText: {
                    wordSets: [
                        ['24/7 Support', 'Quick Response', 'Expert Help'],
                        ['Live Chat', 'Email Support', 'Phone Support'],
                        ['Get Help Now', 'Contact Us', 'We\'re Here']
                    ],
                    timing: {
                        wordDelay: 500,
                        setDisplayTime: 2000,
                        pullBackDuration: 600,
                        pauseBetweenSets: 300
                    },
                    styling: {
                        fontSize: '24px',
                        fontWeight: '600',
                        color: '#FFFFFF',
                        spacing: '15px',
                        minWidth: '400px',
                        forceCenterText: true
                    }
                },
                ctaButton: {
                    text: 'CONTACT NOW',
                    url: '#contact-form',
                    styling: {
                        backgroundColor: '#ff9800',
                        hoverBackgroundColor: '#f57c00',
                        textColor: '#FFFFFF',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        padding: '12px 24px',
                        borderRadius: '6px',
                        border: 'none'
                    }
                },
                background: {
                    type: 'gradient',
                    gradientStart: '#ff9800',
                    gradientEnd: '#ffb74d',
                    gradientDirection: '90deg',
                    opacity: 0.95
                }
            }
        },
        'privacy.html': { enabled: false, useDefault: true },    // ← Privacy page settings
        'cookies.html': { enabled: false, useDefault: true },     // ← Cookies page settings  
        'podcast.html': { 
            enabled: true, 
            useDefault: true, 
            customBanner: {
                // Component visibility controls (overrides global defaults)
                components: {
                    logoSection: {
                        enabled: true,                                    // ← Enable logo section
                        devices: {
                            desktop: true,                                // ← Show logo on desktop
                            tablet: true,                                 // ← Show logo on tablet
                            mobile: true,                                 // ← Show logo on mobile
                            extraSmall: true                              // ← Show logo on extra small
                        }
                    },
                    textSection: {
                        enabled: true,                                    // ← Enable animated text
                        devices: {
                            desktop: true,                                // ← Show text on desktop
                            tablet: true,                                 // ← Show text on tablet
                            mobile: true,                                 // ← Show text on mobile
                            extraSmall: true                              // ← Show text on extra small
                        }
                    },
                    ctaButton: {
                        enabled: true,                                    // ← Enable CTA button
                        devices: {
                            desktop: true,                                // ← Show CTA on desktop
                            tablet: true,                                 // ← Show CTA on tablet
                            mobile: true,                                 // ← Show CTA on mobile
                            extraSmall: true                              // ← Show CTA on extra small
                        }
                    },
                    entireBanner: {
                        devices: {
                            desktop: true,                                // ← Show entire banner on desktop
                            tablet: true,                                 // ← Show entire banner on tablet
                            mobile: true,                                 // ← Show entire banner on mobile
                            extraSmall: true                              // ← Show entire banner on extra small
                        }
                    }
                },
                logo: {
                    type: 'combined',
                    combined: {
                        useImage: true,                                // Use image + text combined version
                        imageSrc: 'assets/images/podcast_test_image1.png',
                        imageWidth: '32px',
                        imageHeight: '32px',
                        textContent: 'Podcast',
                        textColor: '#FFFFFF',
                        fontSize: '28px',
                        spacing: '8px',                                // Gap between image and text
                        left: '0px',
                        top: '0px',
                        scale: 1.0
                    }
                },
                animatedText: {
                    wordSets: [
                        ['Latest Episodes', 'Expert Insights'], // 2 words
                        ['Deep Conversations', 'Weekly Updates'],
                        ['Breaking News', 'Listen Now']
                    ],
                    timing: {
                        wordDelay: 500,
                        setDisplayTime: 2000,
                        pullBackDuration: 600,
                        pauseBetweenSets: 300
                    },
                    styling: {
                        fontSize: '24px',
                        fontWeight: '600',
                        color: '#FFFFFF',
                        spacing: '15px',
                        minWidth: '400px',
                        forceCenterText: true
                    }
                },
                ctaButton: {
                    text: 'LISTEN NOW',
                    url: '#featured-episodes',
                    styling: {
                        backgroundColor: '#9c27b0',
                        hoverBackgroundColor: '#7b1fa2',
                        textColor: '#FFFFFF',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        padding: '12px 24px',
                        borderRadius: '6px',
                        border: 'none'
                    }
                },
                background: {
                    type: 'gradient',
                    gradientStart: '#9c27b0',
                    gradientEnd: '#e91e63',
                    gradientDirection: '90deg',
                    opacity: 0.95
                }
            }
        },
        'streaming.html': { 
            enabled: true, 
            useDefault: true, 
            customBanner: {
                // Component visibility controls (overrides global defaults)
                components: {
                    logoSection: {
                        enabled: true,                                    // ← Enable logo section
                        devices: {
                            desktop: true,                                // ← Show logo on desktop
                            tablet: true,                                 // ← Show logo on tablet
                            mobile: true,                                 // ← Show logo on mobile
                            extraSmall: true                              // ← Show logo on extra small
                        }
                    },
                    textSection: {
                        enabled: true,                                    // ← Enable animated text
                        devices: {
                            desktop: true,                                // ← Show text on desktop
                            tablet: true,                                 // ← Show text on tablet
                            mobile: true,                                 // ← Show text on mobile
                            extraSmall: true                              // ← Show text on extra small
                        }
                    },
                    ctaButton: {
                        enabled: true,                                    // ← Enable CTA button
                        devices: {
                            desktop: true,                                // ← Show CTA on desktop
                            tablet: true,                                 // ← Show CTA on tablet
                            mobile: true,                                 // ← Show CTA on mobile
                            extraSmall: true                              // ← Show CTA on extra small
                        }
                    },
                    entireBanner: {
                        devices: {
                            desktop: true,                                // ← Show entire banner on desktop
                            tablet: true,                                 // ← Show entire banner on tablet
                            mobile: true,                                 // ← Show entire banner on mobile
                            extraSmall: true                              // ← Show entire banner on extra small
                        }
                    }
                },
                logo: {
                    type: 'text',
                    text: {
                        content: '🎬',
                        brandText: 'StreamHub',
                        fontSize: '28px',
                        textColor: '#FFFFFF',
                        spacing: '8px',
                        left: '0px',
                        top: '0px',
                        scale: '1.0'
                    }
                },
                animatedText: {
                    wordSets: [
                        ['Live Streams', 'Gaming Content'],//mixed word sets
                        ['Twitch Streams'],
                        ['YouTube Videos'],
                        ['Interactive Content'],
                        ['Watch Now', 'Join Live', 'Subscribe']
                    ],
                    timing: {
                        wordDelay: 500,
                        setDisplayTime: 2000,
                        pullBackDuration: 600,
                        pauseBetweenSets: 300
                    },
                    styling: {
                        fontSize: '24px',
                        fontWeight: '600',
                        color: '#FFFFFF',
                        spacing: '15px',
                        minWidth: '400px',
                        forceCenterText: true
                    }
                },
                ctaButton: {
                    text: 'WATCH LIVE',
                    url: '#live-streams',
                    styling: {
                        backgroundColor: '#ff4757',
                        hoverBackgroundColor: '#ff3742',
                        textColor: '#FFFFFF',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        padding: '12px 24px',
                        borderRadius: '6px',
                        border: 'none'
                    }
                },
                background: {
                    type: 'gradient',
                    gradientStart: '#ff4757',
                    gradientEnd: '#9c27b0',
                    gradientDirection: '90deg',
                    opacity: 0.95
                }
            }
        },
        'disclaimer.html': { enabled: false, useDefault: true }  // ← Disclaimer page settings
    },
    
    // Banner positioning
    positioning: {
        showOnTop: true,                                          // ← Show at top of page
        topOffset: '100px',                                        // ← Distance from nav bar (nav height + 10px gap)
        zIndex: 15,                                              // ← Layer order (nav is 20)
        entranceAnimation: true,                                 // ← Enable slide-down entrance animation
        animationDuration: '0.8s'                               // ← Duration of entrance animation
    },
    
    // Background styling
    background: {
        type: 'gradient',                                         // ← 'gradient', 'solid', or 'image'
        gradientStart: '#ffffff',                   // ← Gradient start color (white)
        gradientEnd: '#c0c0c0',                    // ← Gradient end color (silver)
        gradientDirection: '90deg',                               // ← Gradient direction
        solidColor: '#f5f5f5',                                   // ← Solid color fallback (light gray)
        opacity: 0.95                                            // ← Background opacity
    },
    
    // Logo section (left side)
    logo: {
        type: 'image',                                        // ← 'text', 'image', 'combined'
        text: {
            content: '🍎',                                        // ← Logo emoji/icon
            brandText: 'MacBook Pro',                               // ← Brand name
            fontSize: '30px',                                    // ← Logo text size
            textColor: '#000000',                                // ← Logo text color (black)
            spacing: '8px',                                       // ← Space between icon and text
            left: '-10px',                                        // ← Logo image left position
            top: '0px',                                           // ← Logo image top position
            scale: '1.0'
        },
        image: {
            src: 'assets/images/laptop_test/apple_logo_black_text.png',               // ← Logo image path
            width: 'auto',                                       // ← Logo image width
            height: 'auto',                                       // ← Logo image height
            scale: '1.0',                                         // ← Logo image scale
            left: '-40px',                                        // ← Logo image left position
            top: '5px',                                           // ← Logo image top position
        },
        combined: {
            useImage: true,                                      // ← Use image + text
            imageSrc: 'assets/images/laptop_test/apple_logo_black_text.png',     // ← Combined logo image
            imageWidth: '56px',                                  // ← Combined image width
            imageHeight: '56px',                                 // ← Combined image height
            textContent: 'MacBook Pro',                            // ← Combined text
            textColor: '#000000',                               // ← Combined text color (black)
            fontSize: '30px',                                   // ← Combined text size
            spacing: '10px',                                     // ← Space between image and text
            scale: '1.0',                                        // ← Logo image scale
            left: '0px',                                         // ← Logo image left position
            top: '0px',                                           // ← Logo image top position
            scale: '1.0'
        }
    },
    
    // Animated text section (center)
    animatedText: {
        // Word sets - each array is one sequence (can have 1, 2, or 3+ words)
        wordSets: [
            ['M4 Max Chip', 'Exceptional Performance'],                          // ← 2 words
            ['Liquid Retina XDR', 'Stunning Display'],                   // ← 2 words
            ['22-Hour Battery Life'],                                    // ← 1 word
            ['Professional Grade'], 
            ['Creative Powerhouse'],                    // ← 2 words
            ['macOS Sequoia', 'Advanced Features'],                  // ← 2 words
            ['Industry Leading', 'Advanced Favourite'],              // ← 2 words
            ['Best Gaming Laptop 2025'],                  // ← 1 word

        ],
        
        // Animation timing
        timing: {
            wordDelay: 500,                                      // ← Delay between words in same set (ms)
            setDisplayTime: 2000,                                // ← How long to show complete set (ms)
            pullBackDuration: 600,                               // ← Pull back animation duration (ms)
            pauseBetweenSets: 300                                // ← Pause between word sets (ms)
        },
        
        // Styling
        styling: {
            fontSize: '24px',                                    // ← Text size
            fontWeight: '600',                                   // ← Text weight
            color: '#000000',                                    // ← Text color (black)
            spacing: '15px',                                     // ← Space between words
            minWidth: '400px',                                   // ← Minimum text area width
            forceCenterText: true                                // ← Force text to center between logo and CTA
        }
    },
    
    // CTA Button (right side)
    ctaButton: {
        text: 'Buy Now',                                        // ← Button text
        url: 'https://www.apple.com/uk/shop/buy-mac/macbook-pro/14-inch-m4-max',                             // ← Button link
        styling: {
            backgroundColor: '#d1d5db',                          // ← Button background (light gray/silver)
            hoverBackgroundColor: '#9ca3af',                    // ← Button hover background (darker gray)
            textColor: '#000000',                               // ← Button text color (black)
            fontSize: '18px',                                   // ← Button text size
            fontWeight: 'bold',                                 // ← Button text weight
            padding: '12px 24px',                               // ← Button padding
            borderRadius: '6px',                                // ← Button border radius
            border: '1px solid #9ca3af'                                      // ← Button border
        }
    },
    
    // Banner dimensions
    dimensions: {
        height: '70px',                                         // ← Banner height
        width: '70%',                                          // ← Banner width (50% of screen)
        maxWidth: '1000px',                                     // ← Maximum banner width
        padding: '16px 16px',                                  // ← Internal padding
        margin: '0 auto'                                       // ← Center alignment
    },
    
    // Default CTA positioning (desktop)
    ctaPositioning: {
        paddingRight: '0',                                    // ← Default right padding
        paddingLeft: '0',                                     // ← Default left padding
        marginRight: '0',                                     // ← Default right margin
        marginLeft: '0'                                       // ← Default left margin
    },
    
    // Default logo positioning (desktop)
    logoPositioning: {
        paddingRight: '0',                                    // ← Default logo right padding
        paddingLeft: '0',                                     // ← Default logo left padding
        marginRight: '0',                                   // ← Default logo right margin
        marginLeft: '2.5rem',                                     // ← Default logo left margin
        marginTop: '0',
        marginBottom: '0.5rem',
        paddingTop: '0',
        paddingBottom: '0',
        iconTextGap: '-10px'                                    // ← Gap between icon/image and text within logo
    },
    
    // Default animated text positioning (desktop)
    textPositioning: {
        paddingRight: '5rem',                                    // ← Default text right padding
        paddingLeft: '0',                                     // ← Default text left padding
        marginRight: '0',                                   // ← Default text right margin
        marginLeft: '0'                                     // ← Default text left margin
    },
    
    // Responsive settings with comprehensive scaling system
    responsive: {
        desktop: {
            logoScale: 0.05,                                         // ← Desktop logo scaling (reduce from natural size)
            textScale: 1.0,                                         // ← Desktop text scaling
            buttonScale: 1.0                                        // ← Desktop button scaling
        },
        tablet: { //1024px
            scale: 1.0,                                        // ← 85% of desktop size
            height: '50px',                                     // ← Tablet banner height (shorter)
            padding: '8px 8px',                               // ← Tablet padding
            logoFontSize: '24px',                               // ← Tablet logo size
            textFontSize: '16px',                               // ← Tablet text size
            ctaFontSize: '12px',                                // ← Tablet button size
            ctaPadding: '8px 8px',                             // ← Tablet button padding
            containerWidth: '95%',                              // ← Container width
            borderRadius: '10px',                               // ← Rounded corners
            logoScale: 0.05,                                     // ← Logo specific scaling
            textScale: 1.1,                                     // ← Text specific scaling
            buttonScale: 1.0,                                   // ← Button specific scaling
            topOffset: '5.5rem',                                // ← Tablet-specific top offset
            ctaPositioning: {                                   // ← CTA button positioning
                paddingRight: '0',                         // ← Right padding for tablet
                paddingLeft: '0',                             
                marginRight: '0',                             
                marginLeft: '0'                               
            },
            logoPositioning: {                                  // ← Logo positioning
                paddingRight: '0',                              
                paddingLeft: '2.5rem',
                paddingTop: '0',                                // ← Logo top padding for tablet
                paddingBottom: '0',                             // ← Logo bottom padding for tablet
                marginRight: '0',                             
                marginLeft: '0',                               // ← Logo left margin for tablet
                marginTop: '0',                                 // ← Logo top margin for tablet
                marginBottom: '0',                              // ← Logo bottom margin for tablet
                iconTextGap: '0'                              // ← Icon-text gap for tablet
            },
            textPositioning: {                                  // ← Text positioning
                paddingRight: '0',                              // ← Text right padding for tablet
                paddingLeft: '0',                               // ← Text left padding for tablet
                marginRight: '0',                             
                marginLeft: '0'                               
            }
        },
        mobile: { //768px
            scale: 1.0,                                        // ← 65% of desktop size
            height: '3.5rem',                                     // ← Mobile banner height (shorter)
            padding: '12px 12px',                               // ← Mobile padding (reduced)
            logoFontSize: '14px',                               // ← Mobile logo size (smaller)
            textFontSize: '11px',                               // ← Mobile text size (smaller)
            ctaFontSize: '10px',                                // ← Mobile button size (smaller)
            ctaPadding: '6px 6px',                             // ← Mobile button padding (reduced)
            containerWidth: '96%',                              // ← Container width
            borderRadius: '8px',                                // ← Rounded corners
            logoScale: 2.0,                                    // ← Logo specific scaling
            textScale: 1.2,                                     // ← Text specific scaling
            buttonScale: 1.2,                                   // ← Button specific scaling
            topOffset: '4rem',                                  // ← Mobile-specific top offset (nav + banner)
            ctaPositioning: {                                   // ← CTA button positioning
                paddingRight: '0.5rem',                           // ← Right padding for mobile
                paddingLeft: '0',                          
                marginRight: '0',                             
                marginLeft: '0',
                marginTop: '0',
                marginBottom: '0.5rem'
            },
            logoPositioning: {                                  // ← Logo positioning
                paddingRight: '0',                              
                paddingLeft: '0',
                paddingTop: '0',                                // ← Logo top padding for mobile
                paddingBottom: '0',                             // ← Logo bottom padding for mobile
                marginRight: '0',                             
                marginLeft: '2.5rem',                               // ← Logo left margin for mobile
                marginTop: '0',                                 // ← Logo top margin for mobile
                marginBottom: '0.25rem',                           // ← Logo bottom margin for mobile
                iconTextGap: '0'                              // ← Icon-text gap for mobile
            },
            textPositioning: {                                  // ← Text positioning
                paddingRight: '0',                              // ← Text right padding for mobile
                paddingLeft: '0',                               // ← Text left padding for mobile
                marginRight: '0',                            
                marginLeft: '0'                              
            }
        },
        extraSmall: { //480px
            scale: 1.0,                                        // ← 45% of desktop size
            height: '3rem',                                     // ← Extra small banner height (very short)
            padding: '4px 4px',                                // ← Extra small padding (minimal)
            logoFontSize: '10px',                               // ← Extra small logo size (increased for visibility)
            textFontSize: '10px',                               // ← Extra small text size (tiny)
            ctaFontSize: '9px',                                 // ← Extra small button size (tiny)
            ctaPadding: '4px 4px',                              // ← Extra small button padding (minimal)
            containerWidth: '98%',                              // ← Container width
            borderRadius: '6px',                                // ← Rounded corners
            logoScale: 2.0,                                     // ← Logo specific scaling (less aggressive)
            textScale: 1.0,                                    // ← Text specific scaling
            buttonScale: 1.0,                                   // ← Button specific scaling
            topOffset: '3.5rem',                                // ← Extra small-specific top offset
            ctaPositioning: {                                   // ← CTA button positioning
                paddingRight: '2.0rem',                           // ← Right padding for extra small
                paddingLeft: '0',                             
                marginRight: '0',                            
                marginLeft: '0',
                marginTop: '0',
                marginBottom: '0.5rem'
            },
            logoPositioning: {                                  // ← Logo positioning
                paddingRight: '0',                              
                paddingLeft: '0',
                paddingTop: '0',                                // ← Logo top padding for extra small
                paddingBottom: '0',                             // ← Logo bottom padding for extra small
                marginRight: '0',                             
                marginLeft: '2.75rem',                               // ← Logo left margin for extra small
                marginTop: '0',                                // ← Logo top margin for extra small
                marginBottom: '0.5rem',                              // ← Logo bottom margin for extra small
                iconTextGap: '0'                              // ← Icon-text gap for extra small
            },
            textPositioning: {                                  // ← Text positioning
                paddingRight: '0.25rem',                             // ← Text right padding for extra small
                paddingLeft: '0',                               // ← Text left padding for extra small
                marginRight: '0',                             
                marginLeft: '0'                               
            }
        }
    }
};

/*
===========================================
🚀 ANIMATED BANNER DYNAMIC RENDERING SYSTEM
Everything below automatically uses the settings above.
Don't edit below unless you need advanced customization.
===========================================
*/

class AnimatedBannerManager {
    constructor() {
        this.config = ANIMATED_BANNER_CONFIG;
        this.currentSetIndex = 0;
        this.currentWordIndex = 0;
        this.animationTimeout = null;
        this.isAnimating = false;
        this.init();
    }
    
    init() {
        console.log('🎯 AnimatedBannerManager init() called');
        console.log('🎯 Config globalEnabled:', this.config.globalEnabled);
        
        if (!this.config.globalEnabled) {
            console.log('🎯 Banner globally disabled');
            return;
        }
        
        // Check if banner should be enabled on current page
        const currentPage = this.getCurrentPageName();
        console.log('🎯 Current page detected:', currentPage);
        console.log('🎯 Available pageSettings:', Object.keys(this.config.pageSettings));
        
        const pageConfig = this.config.pageSettings[currentPage];
        console.log('🎯 Page config for', currentPage, ':', pageConfig);
        
        if (!pageConfig || !pageConfig.enabled) {
            console.log(`🎯 Animated Banner disabled for page: ${currentPage}`);
            return;
        }
        
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }
    
    getCurrentPageName() {
        const path = window.location.pathname;
        const filename = path.split('/').pop() || 'index.html';
        return filename;
    }
    
    getPageConfig() {
        const currentPage = this.getCurrentPageName();
        const pageConfig = this.config.pageSettings[currentPage];
        
        console.log('🎯 getPageConfig() - currentPage:', currentPage);
        console.log('🎯 getPageConfig() - pageConfig:', pageConfig);
        console.log('🎯 getPageConfig() - useDefault:', pageConfig?.useDefault);
        
        if (pageConfig && !pageConfig.useDefault) {
            console.log('🎯 Using custom configuration for', currentPage);
            
            if (pageConfig.customBanner) {
                console.log('🎯 Found customBanner config');
                console.log('🎯 Custom banner config:', pageConfig.customBanner);
                
                // Create a clean base config without any default banner properties
                const baseConfig = {
                    globalEnabled: this.config.globalEnabled,
                    components: this.config.components,
                    pageSettings: this.config.pageSettings,
                    positioning: this.config.positioning,
                    dimensions: this.config.dimensions,
                    responsive: this.config.responsive
                };
                
                // Apply custom banner settings directly
                const customConfig = {
                    ...baseConfig,
                    logo: pageConfig.customBanner.logo,
                    animatedText: pageConfig.customBanner.animatedText,
                    ctaButton: pageConfig.customBanner.ctaButton,
                    background: pageConfig.customBanner.background,
                    components: pageConfig.customBanner.components || this.config.components
                };
                
                console.log(`🎯 Using custom banner for ${currentPage}:`, customConfig);
                console.log(`🎯 Custom logo:`, customConfig.logo);
                console.log(`🎯 Custom background:`, customConfig.background);
                return customConfig;
            } else if (pageConfig.customConfig) {
                console.log('🎯 Found legacy customConfig');
                // Merge custom config with default config (legacy support)
                return { ...this.config, ...pageConfig.customConfig };
            }
        }
        
        console.log('🎯 Using default config for', currentPage);
        return this.config;
    }
    
    setup() {
        // Get page-specific configuration
        this.activeConfig = this.getPageConfig();
        
        this.createBannerHTML();
        this.applyStyles();
        
        // Add a small delay to ensure page content is fully loaded
        setTimeout(() => {
            this.adjustPageLayout();
        }, 50);
        
        this.triggerEntranceAnimation();
        
        // Delay word animation until entrance animation completes
        const entranceDelay = parseFloat(this.activeConfig.positioning.animationDuration || '0.8s') * 1000 + 200; // Convert to ms + 200ms buffer
        setTimeout(() => {
            this.startAnimation();
        }, entranceDelay);
        
        console.log(`🎯 Animated Banner initialized. Word animation will start in ${entranceDelay}ms`);
        
        // Add resize event listener for responsive component visibility
        this.setupResizeHandler();
    }
    
    /**
     * Refresh banner with updated scaling
     */
    refreshBanner() {
        console.log('🔄 Refreshing animated banner with updated scaling...');
        
        // Remove existing banner
        const existingBanner = document.querySelector('.animated-banner-container');
        if (existingBanner) {
            existingBanner.remove();
        }
        
        // Remove existing styles
        const existingStyles = document.getElementById('animated-banner-styles');
        if (existingStyles) {
            existingStyles.remove();
        }
        
        // Reinitialize banner
        this.createBanner();
        this.applyStyles();
        
        console.log('✅ Banner refreshed with new scaling');
    }
    
    /**
     * Setup window resize handler for dynamic component visibility
     */
    setupResizeHandler() {
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.updateComponentVisibility();
            }, 150); // Debounce resize events
        });
    }
    
    /**
     * Update component visibility based on current screen size
     */
    updateComponentVisibility() {
        const banner = document.getElementById('animated-banner-container');
        if (!banner) return;
        
        // Check if entire banner should be visible on current device
        if (!this.shouldShowBannerOnDevice()) {
            banner.style.display = 'none';
            return;
        } else {
            banner.style.display = '';
        }
        
        // Update individual component visibility
        const logoSection = banner.querySelector('.banner-logo-section');
        const textSection = banner.querySelector('.banner-text-section');
        const ctaSection = banner.querySelector('.banner-cta-section');
        
        if (logoSection) {
            logoSection.style.display = this.shouldShowComponent('logoSection') ? '' : 'none';
        }
        if (textSection) {
            textSection.style.display = this.shouldShowComponent('textSection') ? '' : 'none';
        }
        if (ctaSection) {
            ctaSection.style.display = this.shouldShowComponent('ctaButton') ? '' : 'none';
        }
    }
    
    createBannerHTML() {
        // Check if banner should be shown on current device
        if (!this.shouldShowBannerOnDevice()) {
            return; // Don't create banner if disabled for this device
        }
        
        // Create banner container
        const bannerContainer = document.createElement('div');
        bannerContainer.id = 'animated-banner-container';
        bannerContainer.className = 'animated-banner-container';
        
        // Create banner content with conditional components
        const bannerHTML = `
            <div class="animated-banner-content">
                <div class="banner-close-button" onclick="animatedBannerManager.closeBanner()" title="Close Banner">
                    <i class="fas fa-times"></i>
                </div>
                ${this.shouldShowComponent('logoSection') ? `
                <div class="banner-logo-section">
                    ${this.generateLogoHTML()}
                </div>` : ''}
                ${this.shouldShowComponent('textSection') ? `
                <div class="banner-text-section">
                    <div class="animated-text-container" id="animatedTextContainer">
                        <!-- Words will be dynamically inserted here -->
                    </div>
                </div>` : ''}
                ${this.shouldShowComponent('ctaButton') ? `
                <div class="banner-cta-section">
                    <button class="banner-cta-button" onclick="window.open('${this.activeConfig.ctaButton.url}', '_blank')">
                        ${this.activeConfig.ctaButton.text}
                    </button>
                </div>` : ''}
            </div>
        `;
        
        bannerContainer.innerHTML = bannerHTML;
        
        // Insert banner at top of page, after navigation
        const body = document.body;
        const nav = document.querySelector('#navigation-container') || document.querySelector('nav');
        
        if (nav && nav.nextSibling) {
            body.insertBefore(bannerContainer, nav.nextSibling);
        } else {
            body.insertBefore(bannerContainer, body.firstChild);
        }
        
        // Add top padding to body to account for banner
        this.adjustPageLayout();
    }
    
    /**
     * Check if banner should be shown on current device
     */
    shouldShowBannerOnDevice() {
        const deviceType = this.getCurrentDeviceType();
        return this.activeConfig.components?.entireBanner?.devices?.[deviceType] !== false;
    }
    
    /**
     * Check if a specific component should be shown
     */
    shouldShowComponent(componentName) {
        const component = this.activeConfig.components?.[componentName];
        if (!component || component.enabled === false) {
            return false;
        }
        
        const deviceType = this.getCurrentDeviceType();
        return component.devices?.[deviceType] !== false;
    }
    
    /**
     * Get current device type based on screen width
     */
    getCurrentDeviceType() {
        const width = window.innerWidth;
        
        if (width <= 480) {
            return 'extraSmall';
        } else if (width <= 768) {
            return 'mobile';
        } else if (width <= 1024) {
            return 'tablet';
        } else {
            return 'desktop';
        }
    }
    
    generateLogoHTML() {
        const logo = this.activeConfig.logo;
        
        switch (logo.type) {
            case 'image':
                const imageLeft = logo.image.left || '0px';
                const imageTop = logo.image.top || '0px';
                const imageContainerStyle = `position: relative; left: ${imageLeft}; top: ${imageTop};`;
                return `<div style="${imageContainerStyle}"><img src="${logo.image.src}" alt="Logo" style="width: ${logo.image.width}; height: ${logo.image.height};"></div>`;
                
            case 'combined':
                if (logo.combined.useImage) {
                    const combinedTextColor = logo.combined.textColor || '#FFFFFF';
                    const combinedFontSize = logo.combined.fontSize || '20px';
                    const combinedSpacing = logo.combined.spacing || '10px';
                    const combinedLeft = logo.combined.left || '0px';
                    const combinedTop = logo.combined.top || '0px';
                    const combinedContainerStyle = `display: flex; align-items: center; gap: ${combinedSpacing}; position: relative; left: ${combinedLeft}; top: ${combinedTop};`;
                    return `
                        <div class="logo-combined" style="${combinedContainerStyle}">
                            <img src="${logo.combined.imageSrc}" alt="Logo" style="width: ${logo.combined.imageWidth}; height: ${logo.combined.imageHeight};">
                            <span class="logo-text" style="color: ${combinedTextColor}; font-size: ${combinedFontSize};">${logo.combined.textContent}</span>
                        </div>
                    `;
                } else {
                    const textColor = logo.text.textColor || '#FFFFFF';
                    const fontSize = logo.text.fontSize || '20px';
                    const textSpacing = logo.text.spacing || '8px';
                    const textLeft = logo.text.left || '0px';
                    const textTop = logo.text.top || '0px';
                    const textContainerStyle = `display: flex; align-items: center; gap: ${textSpacing}; position: relative; left: ${textLeft}; top: ${textTop};`;
                    return `
                        <div class="logo-combined" style="${textContainerStyle}">
                            <span class="logo-icon" style="color: ${textColor}; font-size: ${fontSize};">${logo.text.content}</span>
                            <span class="logo-text" style="color: ${textColor}; font-size: ${fontSize};">${logo.text.brandText}</span>
                        </div>
                    `;
                }
                
            case 'text':
            default:
                const textColor = logo.text.textColor || '#FFFFFF';
                const fontSize = logo.text.fontSize || '20px';
                const textSpacing = logo.text.spacing || '8px';
                const textLeft = logo.text.left || '0px';
                const textTop = logo.text.top || '0px';
                const textContainerStyle = `display: flex; align-items: center; gap: ${textSpacing}; position: relative; left: ${textLeft}; top: ${textTop};`;
                return `
                    <div class="logo-text-only" style="${textContainerStyle}">
                        <span class="logo-icon" style="color: ${textColor}; font-size: ${fontSize};">${logo.text.content}</span>
                        <span class="logo-text" style="color: ${textColor}; font-size: ${fontSize};">${logo.text.brandText}</span>
                    </div>
                `;
        }
    }
    
    /**
     * Generate CSS for icon-text spacing (handles positive and negative values)
     */
    generateIconTextSpacing(spacingValue) {
        const numericValue = parseFloat(spacingValue);
        
        if (isNaN(numericValue)) {
            return 'gap: 8px;'; // fallback
        }
        
        if (numericValue >= 0) {
            // Positive values: use gap
            return `gap: ${spacingValue};`;
        } else {
            // Negative values: no gap, use negative margin on text
            return `gap: 0;`;
        }
    }
    
    /**
     * Generate CSS for negative text spacing (for overlapping text)
     */
    generateNegativeTextSpacing(spacingValue, selector) {
        const numericValue = parseFloat(spacingValue);
        
        if (numericValue < 0) {
            return `
                ${selector} .logo-text {
                    margin-left: ${spacingValue} !important;
                }
                ${selector} .logo-icon:not(:first-child) {
                    margin-left: ${spacingValue} !important;
                }`;
        }
        return '';
    }
    
    /**
     * Generate responsive spacing override (for both positive and negative)
     */
    generateResponsiveSpacing(spacingValue, mediaQuery) {
        const numericValue = parseFloat(spacingValue);
        
        if (isNaN(numericValue)) {
            return '';
        }
        
        if (numericValue >= 0) {
            // Positive values: override gap
            return `
            ${mediaQuery} {
                .animated-banner-container .logo-combined, 
                .animated-banner-container .logo-text-only {
                    gap: ${spacingValue} !important;
                }
                
                /* Reset any negative margins */
                .animated-banner-container .logo-combined .logo-text,
                .animated-banner-container .logo-text-only .logo-text,
                .animated-banner-container .logo-combined .logo-icon:not(:first-child),
                .animated-banner-container .logo-text-only .logo-icon:not(:first-child) {
                    margin-left: 0 !important;
                }
            }`;
        } else {
            // Negative values: use margin approach
            return `
            ${mediaQuery} {
                .animated-banner-container .logo-combined, 
                .animated-banner-container .logo-text-only {
                    gap: 0 !important;
                }
                
                .animated-banner-container .logo-combined .logo-text,
                .animated-banner-container .logo-text-only .logo-text {
                    margin-left: ${spacingValue} !important;
                }
                
                .animated-banner-container .logo-combined .logo-icon:not(:first-child),
                .animated-banner-container .logo-text-only .logo-icon:not(:first-child) {
                    margin-left: ${spacingValue} !important;
                }
            }`;
        }
    }
    
    /**
     * Generate CSS for component visibility based on device settings
     */
    generateComponentVisibilityCSS() {
        let css = '';
        const components = this.activeConfig.components || {};
        
        // Desktop visibility
        css += '@media (min-width: 1025px) {\n';
        if (components.logoSection?.devices?.desktop === false) {
            css += '    .animated-banner-container .banner-logo-section { display: none !important; }\n';
        }
        if (components.textSection?.devices?.desktop === false) {
            css += '    .animated-banner-container .banner-text-section { display: none !important; }\n';
        }
        if (components.ctaButton?.devices?.desktop === false) {
            css += '    .animated-banner-container .banner-cta-section { display: none !important; }\n';
        }
        if (components.entireBanner?.devices?.desktop === false) {
            css += '    .animated-banner-container { display: none !important; }\n';
        }
        css += '}\n';
        
        // Tablet visibility
        css += '@media (max-width: 1024px) and (min-width: 769px) {\n';
        if (components.logoSection?.devices?.tablet === false) {
            css += '    .animated-banner-container .banner-logo-section { display: none !important; }\n';
        }
        if (components.textSection?.devices?.tablet === false) {
            css += '    .animated-banner-container .banner-text-section { display: none !important; }\n';
        }
        if (components.ctaButton?.devices?.tablet === false) {
            css += '    .animated-banner-container .banner-cta-section { display: none !important; }\n';
        }
        if (components.entireBanner?.devices?.tablet === false) {
            css += '    .animated-banner-container { display: none !important; }\n';
        }
        css += '}\n';
        
        // Mobile visibility
        css += '@media (max-width: 768px) and (min-width: 481px) {\n';
        if (components.logoSection?.devices?.mobile === false) {
            css += '    .animated-banner-container .banner-logo-section { display: none !important; }\n';
        }
        if (components.textSection?.devices?.mobile === false) {
            css += '    .animated-banner-container .banner-text-section { display: none !important; }\n';
        }
        if (components.ctaButton?.devices?.mobile === false) {
            css += '    .animated-banner-container .banner-cta-section { display: none !important; }\n';
        }
        if (components.entireBanner?.devices?.mobile === false) {
            css += '    .animated-banner-container { display: none !important; }\n';
        }
        css += '}\n';
        
        // Extra small visibility
        css += '@media (max-width: 480px) {\n';
        if (components.logoSection?.devices?.extraSmall === false) {
            css += '    .animated-banner-container .banner-logo-section { display: none !important; }\n';
        }
        if (components.textSection?.devices?.extraSmall === false) {
            css += '    .animated-banner-container .banner-text-section { display: none !important; }\n';
        }
        if (components.ctaButton?.devices?.extraSmall === false) {
            css += '    .animated-banner-container .banner-cta-section { display: none !important; }\n';
        }
        if (components.entireBanner?.devices?.extraSmall === false) {
            css += '    .animated-banner-container { display: none !important; }\n';
        }
        css += '}\n';
        
        // Global component visibility (applies to all devices)
        if (components.logoSection?.enabled === false) {
            css += '.animated-banner-container .banner-logo-section { display: none !important; }\n';
        }
        if (components.textSection?.enabled === false) {
            css += '.animated-banner-container .banner-text-section { display: none !important; }\n';
        }
        if (components.ctaButton?.enabled === false) {
            css += '.animated-banner-container .banner-cta-section { display: none !important; }\n';
        }
        
        return css;
    }
    
    applyStyles() {
        // Remove any existing banner styles first
        const existingStyle = document.getElementById('animated-banner-styles');
        if (existingStyle) {
            existingStyle.remove();
            console.log('🎯 Removed existing banner styles');
        }
        
        const style = document.createElement('style');
        style.id = 'animated-banner-styles';
        
        const bg = this.activeConfig.background;
        const backgroundStyle = bg.type === 'gradient' 
            ? `linear-gradient(${bg.gradientDirection}, ${bg.gradientStart}, ${bg.gradientEnd})`
            : bg.solidColor;
        
        style.textContent = `
            .animated-banner-container {
                position: fixed;
                top: calc(${this.activeConfig.positioning.topOffset} - 150px);
                left: 50%;
                transform: translateX(-50%);
                width: ${this.activeConfig.dimensions.width};
                max-width: ${this.activeConfig.dimensions.maxWidth};
                z-index: ${this.activeConfig.positioning.zIndex};
                background: ${backgroundStyle};
                opacity: 0;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                backdrop-filter: blur(5px);
                border-radius: 12px;
                transition: top ${this.activeConfig.positioning.animationDuration || '0.8s'} cubic-bezier(0.4, 0, 0.2, 1), 
                           opacity ${this.activeConfig.positioning.animationDuration || '0.8s'} cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .animated-banner-container.banner-entrance {
                top: ${this.activeConfig.positioning.topOffset};
                opacity: ${bg.opacity};
            }
            
            .animated-banner-content {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                height: ${this.activeConfig.dimensions.height};
                padding: ${this.activeConfig.dimensions.padding};
                margin: ${this.activeConfig.dimensions.margin};
                color: white;
                font-family: var(--font-family-primary, sans-serif);
                position: relative;
            }
            
            .banner-close-button {
                position: absolute;
                top: 3px;
                right: 5px;
                background-color: rgba(255, 255, 255, 0.2);
                border-radius: 25%;
                width: 15px;
                height: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                z-index: 10;
                color: white;
                font-size: 10px;
                transition: all 0.3s ease;
                border: none;
            }

            .banner-close-button:hover {
                background-color: rgba(255, 255, 255, 0.4);
                transform: scale(1.1);
            }
            
            .banner-logo-section {
                display: flex;
                align-items: center;
                flex-shrink: 0;
                overflow: visible;
                z-index: 5;
                max-width: 40%;
                margin: 0 8px;
                box-sizing: border-box;
                padding-right: ${this.activeConfig.logoPositioning?.paddingRight || '0'};
                padding-left: ${this.activeConfig.logoPositioning?.paddingLeft || '0'};
                padding-top: ${this.activeConfig.logoPositioning?.paddingTop || '0'};
                padding-bottom: ${this.activeConfig.logoPositioning?.paddingBottom || '0'};
                margin-right: ${this.activeConfig.logoPositioning?.marginRight || '8px'};
                margin-left: ${this.activeConfig.logoPositioning?.marginLeft || '8px'};
                margin-top: ${this.activeConfig.logoPositioning?.marginTop || '0'};
                margin-bottom: ${this.activeConfig.logoPositioning?.marginBottom || '0'};
                pointer-events: none; /* Prevent logo container from blocking clicks */
            }
            
            .animated-banner-container .logo-combined, 
            .animated-banner-container .logo-text-only {
                display: flex;
                align-items: center;
                font-size: ${this.activeConfig.logo.text?.fontSize || this.activeConfig.logo.combined?.fontSize || '30px'};
                font-weight: bold;
                overflow: visible;
                position: relative;
                ${this.generateIconTextSpacing(this.activeConfig.logoPositioning?.iconTextGap || '8px')}
            }
            
            .animated-banner-container .logo-combined img, 
            .animated-banner-container .banner-logo-section img {
                transform-origin: left center;
                transition: transform 0.3s ease;
            }
            
            .animated-banner-container .logo-text, 
            .animated-banner-container .logo-icon {
                font-size: ${this.activeConfig.logo.text?.fontSize || this.activeConfig.logo.combined?.fontSize || '30px'};
                font-weight: bold;
                white-space: nowrap;
                transform: scale(${this.activeConfig.responsive?.desktop?.logoScale || 1.0});
            }
            
            /* Target image logos specifically for desktop */
            .animated-banner-container .banner-logo-section img {
                transform: scale(${this.activeConfig.responsive?.desktop?.logoScale || 1.0});
                pointer-events: none; /* Prevent scaled images from blocking clicks */
            }
            
            .banner-text-section {
                position: absolute !important;
                left: 55% !important;
                top: 50% !important;
                transform: translate(-55%, -50%) !important;
                display: flex !important;
                justify-content: center !important;
                align-items: center !important;
                min-width: ${this.activeConfig.animatedText.styling.minWidth || '400px'} !important;
                max-width: calc(100% - 200px) !important;
                z-index: 10 !important;
                margin-left: 10px !important;
                padding-right: ${this.activeConfig.textPositioning?.paddingRight || '0'} !important;
                padding-left: ${this.activeConfig.textPositioning?.paddingLeft || '0'} !important;
                margin-right: ${this.activeConfig.textPositioning?.marginRight || '8px'} !important;
            }
            
            .animated-text-container {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: ${this.activeConfig.animatedText.styling.spacing || '15px'};
                font-size: ${this.activeConfig.animatedText.styling.fontSize || '24px'};
                font-weight: ${this.activeConfig.animatedText.styling.fontWeight || '600'};
                color: ${this.activeConfig.animatedText.styling.color || '#FFFFFF'};
                min-height: 30px;
                white-space: nowrap;
                flex-wrap: nowrap;
            }
            
            .animated-word {
                opacity: 0;
                transform: translateY(20px);
                transition: all 0.4s ease;
                white-space: nowrap;
            }
            
            .animated-word.show {
                opacity: 1;
                transform: translateY(0);
            }
            
            .animated-word.pull-back {
                opacity: 0;
                transform: translateX(-50px) scale(0.8);
                transition: all 0.6s ease;
            }
            
            .banner-cta-section {
                flex-shrink: 0;
                z-index: 5;
                max-width: 30%;
                margin: 0 8px;
                box-sizing: border-box;
                padding-right: ${this.activeConfig.ctaPositioning?.paddingRight || '0px'};
                padding-left: ${this.activeConfig.ctaPositioning?.paddingLeft || '0px'};
                padding-top: ${this.activeConfig.ctaPositioning?.paddingTop || '0px'};
                padding-bottom: ${this.activeConfig.ctaPositioning?.paddingBottom || '0px'};
                margin-right: ${this.activeConfig.ctaPositioning?.marginRight || '8px'};
                margin-left: ${this.activeConfig.ctaPositioning?.marginLeft || '8px'};
                margin-top: ${this.activeConfig.ctaPositioning?.marginTop || '0px'};
                margin-bottom: ${this.activeConfig.ctaPositioning?.marginBottom || '0px'};
            }
            
            .banner-cta-button {
                background-color: ${this.activeConfig.ctaButton.styling.backgroundColor || '#00c853'};
                color: ${this.activeConfig.ctaButton.styling.textColor || '#FFFFFF'};
                font-size: ${this.activeConfig.ctaButton.styling.fontSize || '18px'};
                font-weight: ${this.activeConfig.ctaButton.styling.fontWeight || 'bold'};
                padding: ${this.activeConfig.ctaButton.styling.padding || '12px 24px'};
                border-radius: ${this.activeConfig.ctaButton.styling.borderRadius || '6px'};
                border: ${this.activeConfig.ctaButton.styling.border || 'none'};
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .banner-cta-button:hover {
                background-color: ${this.activeConfig.ctaButton.styling.hoverBackgroundColor || '#00a847'};
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            }
            
            /* Ensure proper centering on all screen sizes */
            .animated-banner-container {
                left: 50% !important;
                margin-left: 0 !important;
                margin-right: 0 !important;
            }
            
            /* Enhanced Responsive styles with scaling system */
            @media (max-width: 1024px) {
                .animated-banner-container {
                    width: ${this.activeConfig.responsive.tablet?.containerWidth || '90%'};
                    max-width: 900px;
                    border-radius: ${this.activeConfig.responsive.tablet?.borderRadius || '10px'};
                    transform: translateX(-50%) scale(${this.activeConfig.responsive.tablet?.scale || 0.85});
                    transform-origin: center top;
                }
                
                .animated-banner-container.banner-entrance {
                    top: ${this.activeConfig.responsive.tablet?.topOffset || this.activeConfig.positioning.topOffset};
                }
                
                .animated-banner-content {
                    height: ${this.activeConfig.responsive.tablet?.height || '50px'};
                    padding: ${this.activeConfig.responsive.tablet?.padding || '8px 16px'};
                }
                
                .animated-banner-container .logo-text, 
                .animated-banner-container .logo-icon {
                    font-size: ${this.activeConfig.responsive.tablet?.logoFontSize || '18px'} !important;
                    transform: scale(${this.activeConfig.responsive.tablet?.logoScale || 0.9});
                }
                
                /* Target logo containers - keep normal spacing for tablet */
                .animated-banner-container .logo-text-only, 
                .animated-banner-container .logo-combined {
                    /* No container scaling - individual elements handle it */
                }
                
                /* Target image logos specifically */
                .animated-banner-container .banner-logo-section img {
                    transform: scale(${this.activeConfig.responsive.tablet?.logoScale || 0.9});
                    pointer-events: none; /* Prevent scaled images from blocking clicks */
                }
                
                .animated-text-container {
                    font-size: ${this.activeConfig.responsive.tablet?.textFontSize || '16px'} !important;
                    min-width: 180px;
                    gap: 8px;
                    transform: scale(${this.activeConfig.responsive.tablet?.textScale || 0.9});
                }
                
                .banner-cta-button {
                    font-size: ${this.activeConfig.responsive.tablet?.ctaFontSize || '13px'} !important;
                    padding: ${this.activeConfig.responsive.tablet?.ctaPadding || '8px 18px'} !important;
                    transform: scale(${this.activeConfig.responsive.tablet?.buttonScale || 0.85});
                }
                
                .banner-cta-button:hover {
                    transform: scale(${this.activeConfig.responsive.tablet?.buttonScale || 0.85}) translateY(-2px);
                }
                
                .banner-cta-section {
                    transform: scale(${this.activeConfig.responsive.tablet?.buttonScale || 0.85});
                    margin: 0 6px;
                    padding-right: ${this.activeConfig.responsive.tablet?.ctaPositioning?.paddingRight || '0px'} !important;
                    padding-left: ${this.activeConfig.responsive.tablet?.ctaPositioning?.paddingLeft || '0px'} !important;
                    padding-top: ${this.activeConfig.responsive.tablet?.ctaPositioning?.paddingTop || '0px'} !important;
                    padding-bottom: ${this.activeConfig.responsive.tablet?.ctaPositioning?.paddingBottom || '0px'} !important;
                    margin-right: ${this.activeConfig.responsive.tablet?.ctaPositioning?.marginRight || '0px'} !important;
                    margin-left: ${this.activeConfig.responsive.tablet?.ctaPositioning?.marginLeft || '0px'} !important;
                    margin-top: ${this.activeConfig.responsive.tablet?.ctaPositioning?.marginTop || '0px'} !important;
                    margin-bottom: ${this.activeConfig.responsive.tablet?.ctaPositioning?.marginBottom || '0px'} !important;
                }
                
                .banner-logo-section {
                    padding-right: ${this.activeConfig.responsive.tablet?.logoPositioning?.paddingRight || '0'} !important;
                    padding-left: ${this.activeConfig.responsive.tablet?.logoPositioning?.paddingLeft || '0'} !important;
                    padding-top: ${this.activeConfig.responsive.tablet?.logoPositioning?.paddingTop || '0'} !important;
                    padding-bottom: ${this.activeConfig.responsive.tablet?.logoPositioning?.paddingBottom || '0'} !important;
                    margin-right: ${this.activeConfig.responsive.tablet?.logoPositioning?.marginRight || '6px'} !important;
                    margin-left: ${this.activeConfig.responsive.tablet?.logoPositioning?.marginLeft || '6px'} !important;
                    margin-top: ${this.activeConfig.responsive.tablet?.logoPositioning?.marginTop || '0'} !important;
                    margin-bottom: ${this.activeConfig.responsive.tablet?.logoPositioning?.marginBottom || '0'} !important;
                }
                
                .banner-text-section {
                    padding-right: ${this.activeConfig.responsive.tablet?.textPositioning?.paddingRight || '0'} !important;
                    padding-left: ${this.activeConfig.responsive.tablet?.textPositioning?.paddingLeft || '0'} !important;
                    margin-right: ${this.activeConfig.responsive.tablet?.textPositioning?.marginRight || '6px'} !important;
                }
                
                .animated-banner-container .logo-combined, 
                .animated-banner-container .logo-text-only {
                    ${this.generateIconTextSpacing(this.activeConfig.responsive.tablet?.logoPositioning?.iconTextGap || '6px')} !important;
                }
            }
            
            @media (max-width: 768px) {
                .animated-banner-container {
                    width: ${this.activeConfig.responsive.mobile.containerWidth || '90%'};
                    max-width: calc(100vw - 10vw);
                    border-radius: ${this.activeConfig.responsive.mobile.borderRadius || '8px'};
                    transform: translateX(-50%) scale(${this.activeConfig.responsive.mobile.scale || 0.65});
                    transform-origin: center top;
                    left: 50% !important;
                    margin: 0 !important;
                }
                
                .animated-banner-container.banner-entrance {
                    top: ${this.activeConfig.responsive.mobile?.topOffset || this.activeConfig.positioning.topOffset};
                }
                
                .animated-banner-content {
                    height: ${this.activeConfig.responsive.mobile.height || '45px'};
                    padding: ${this.activeConfig.responsive.mobile.padding || '4px 8px'};
                    flex-wrap: nowrap;
                    min-width: 0;
                    overflow: hidden;
                }
                
                .banner-text-section {
                    max-width: calc(100% - 140px);
                    left: 50% !important;
                    transform: translate(-50%, -50%) scale(${this.activeConfig.responsive.mobile.textScale || 0.7}) !important;
                }
                
                .animated-banner-container .logo-text, 
                .animated-banner-container .logo-icon {
                    font-size: ${this.activeConfig.responsive.mobile.logoFontSize || '14px'} !important;
                    transform: scale(${this.activeConfig.responsive.mobile.logoScale || 0.75});
                }
                
                /* Target logo containers - adjust spacing for mobile */
                .animated-banner-container .logo-text-only, 
                .animated-banner-container .logo-combined {
                    gap: 4px !important;  /* Slightly larger gap for mobile readability */
                }
                
                /* Target image logos specifically */
                .animated-banner-container .banner-logo-section img {
                    transform: scale(${this.activeConfig.responsive.mobile.logoScale || 0.75});
                    pointer-events: none; /* Prevent scaled images from blocking clicks */
                }
                
                .animated-text-container {
                    font-size: ${this.activeConfig.responsive.mobile.textFontSize || '12px'} !important;
                    min-width: 100px;
                    gap: 4px;
                    flex-wrap: wrap;
                    text-align: center;
                    transform: scale(${this.activeConfig.responsive.mobile.textScale || 0.7});
                }
                
                .banner-cta-button {
                    font-size: ${this.activeConfig.responsive.mobile.ctaFontSize || '10px'} !important;
                    padding: ${this.activeConfig.responsive.mobile.ctaPadding || '6px 12px'} !important;
                    white-space: nowrap;
                    transform: scale(${this.activeConfig.responsive.mobile.buttonScale || 0.65});
                }
                
                .banner-cta-button:hover {
                    transform: scale(${this.activeConfig.responsive.mobile.buttonScale || 0.65}) translateY(-2px);
                }
                
                .banner-logo-section {
                    max-width: 35%;  /* Increase width for mobile too */
                    flex-shrink: 1;
                    margin: 0 3px;
                    min-width: 0;
                    /* Remove container scaling - let individual elements handle scaling */
                }
                
                .banner-cta-section {
                    max-width: 20%;
                    flex-shrink: 0;
                    transform: scale(${this.activeConfig.responsive.mobile.buttonScale || 0.65});
                    margin: 0 3px;
                    min-width: 0;
                    padding-right: ${this.activeConfig.responsive.mobile?.ctaPositioning?.paddingRight || '0px'} !important;
                    padding-left: ${this.activeConfig.responsive.mobile?.ctaPositioning?.paddingLeft || '0px'} !important;
                    padding-top: ${this.activeConfig.responsive.mobile?.ctaPositioning?.paddingTop || '0px'} !important;
                    padding-bottom: ${this.activeConfig.responsive.mobile?.ctaPositioning?.paddingBottom || '0px'} !important;
                    margin-right: ${this.activeConfig.responsive.mobile?.ctaPositioning?.marginRight || '0px'} !important;
                    margin-left: ${this.activeConfig.responsive.mobile?.ctaPositioning?.marginLeft || '0px'} !important;
                    margin-top: ${this.activeConfig.responsive.mobile?.ctaPositioning?.marginTop || '0px'} !important;
                    margin-bottom: ${this.activeConfig.responsive.mobile?.ctaPositioning?.marginBottom || '0px'} !important;
                }
                
                .banner-logo-section {
                    padding-right: ${this.activeConfig.responsive.mobile?.logoPositioning?.paddingRight || '0'} !important;
                    padding-left: ${this.activeConfig.responsive.mobile?.logoPositioning?.paddingLeft || '0'} !important;
                    padding-top: ${this.activeConfig.responsive.mobile?.logoPositioning?.paddingTop || '0'} !important;
                    padding-bottom: ${this.activeConfig.responsive.mobile?.logoPositioning?.paddingBottom || '0'} !important;
                    margin-right: ${this.activeConfig.responsive.mobile?.logoPositioning?.marginRight || '3px'} !important;
                    margin-left: ${this.activeConfig.responsive.mobile?.logoPositioning?.marginLeft || '3px'} !important;
                    margin-top: ${this.activeConfig.responsive.mobile?.logoPositioning?.marginTop || '0'} !important;
                    margin-bottom: ${this.activeConfig.responsive.mobile?.logoPositioning?.marginBottom || '0'} !important;
                }
                
                .banner-text-section {
                    padding-right: ${this.activeConfig.responsive.mobile?.textPositioning?.paddingRight || '0'} !important;
                    padding-left: ${this.activeConfig.responsive.mobile?.textPositioning?.paddingLeft || '0'} !important;
                    margin-right: ${this.activeConfig.responsive.mobile?.textPositioning?.marginRight || '3px'} !important;
                }
                
                .animated-banner-container .logo-combined, 
                .animated-banner-container .logo-text-only {
                    ${this.generateIconTextSpacing(this.activeConfig.responsive.mobile?.logoPositioning?.iconTextGap || '4px')} !important;
                }
                
                .animated-banner-container .logo-combined img, 
                .animated-banner-container .banner-logo-section img {
                    max-height: 16px;
                    width: auto;
                }
            }
            
            @media (max-width: 480px) {
                .animated-banner-container {
                    width: ${this.activeConfig.responsive.extraSmall?.containerWidth || '90%'};
                    max-width: calc(100vw - 10vw);
                    border-radius: ${this.activeConfig.responsive.extraSmall?.borderRadius || '6px'};
                    transform: translateX(-50%) scale(${this.activeConfig.responsive.extraSmall?.scale || 0.45});
                    transform-origin: center top;
                    left: 50% !important;
                    margin: 0 !important;
                }
                
                .animated-banner-container.banner-entrance {
                    top: ${this.activeConfig.responsive.extraSmall?.topOffset || this.activeConfig.positioning.topOffset};
                }
                
                .animated-banner-content {
                    height: ${this.activeConfig.responsive.extraSmall?.height || '35px'};
                    padding: ${this.activeConfig.responsive.extraSmall?.padding || '2px 6px'};
                    min-width: 0;
                    overflow: hidden;
                }
                
                .banner-text-section {
                    max-width: calc(100% - 100px);
                    left: 50% !important;
                    transform: translate(-50%, -50%) scale(${this.activeConfig.responsive.extraSmall?.textScale || 0.55}) !important;
                }
                
                .animated-text-container {
                    gap: 2px;
                    min-width: 60px;
                    font-size: ${this.activeConfig.responsive.extraSmall?.textFontSize || '10px'} !important;
                    justify-content: center;
                    transform: scale(${this.activeConfig.responsive.extraSmall?.textScale || 0.55});
                }
                
                .banner-cta-button {
                    padding: ${this.activeConfig.responsive.extraSmall?.ctaPadding || '4px 8px'} !important;
                    font-size: ${this.activeConfig.responsive.extraSmall?.ctaFontSize || '9px'} !important;
                    transform: scale(${this.activeConfig.responsive.extraSmall?.buttonScale || 0.5});
                }
                
                .banner-cta-button:hover {
                    transform: scale(${this.activeConfig.responsive.extraSmall?.buttonScale || 0.5}) translateY(-2px);
                }
                
                .animated-banner-container .logo-text, 
                .animated-banner-container .logo-icon {
                    font-size: ${this.activeConfig.responsive.extraSmall?.logoFontSize || '10px'} !important;
                    transform: scale(${this.activeConfig.responsive.extraSmall?.logoScale || 2.0});
                }
                
                /* Target image logos specifically for extraSmall */
                .animated-banner-container .banner-logo-section img {
                    transform: scale(${this.activeConfig.responsive.extraSmall?.logoScale || 2.0});
                    pointer-events: none; /* Prevent scaled images from blocking clicks */
                }
                
                .banner-logo-section {
                    max-width: 35%;  /* Increase width to accommodate icon + text */
                    flex-shrink: 1;
                    margin: 0 2px;
                    min-width: 0;
                    /* Remove container scaling - let individual elements handle scaling */
                }
                
                .banner-cta-section {
                    max-width: 16%;
                    flex-shrink: 0;
                    transform: scale(${this.activeConfig.responsive.extraSmall?.buttonScale || 0.5});
                    margin: 0 2px;
                    min-width: 0;
                    padding-right: ${this.activeConfig.responsive.extraSmall?.ctaPositioning?.paddingRight || '0px'} !important;
                    padding-left: ${this.activeConfig.responsive.extraSmall?.ctaPositioning?.paddingLeft || '0px'} !important;
                    padding-top: ${this.activeConfig.responsive.extraSmall?.ctaPositioning?.paddingTop || '0px'} !important;
                    padding-bottom: ${this.activeConfig.responsive.extraSmall?.ctaPositioning?.paddingBottom || '0px'} !important;
                    margin-right: ${this.activeConfig.responsive.extraSmall?.ctaPositioning?.marginRight || '0px'} !important;
                    margin-left: ${this.activeConfig.responsive.extraSmall?.ctaPositioning?.marginLeft || '0px'} !important;
                    margin-top: ${this.activeConfig.responsive.extraSmall?.ctaPositioning?.marginTop || '0px'} !important;
                    margin-bottom: ${this.activeConfig.responsive.extraSmall?.ctaPositioning?.marginBottom || '0px'} !important;
                }
                
                .banner-logo-section {
                    padding-right: ${this.activeConfig.responsive.extraSmall?.logoPositioning?.paddingRight || '0'} !important;
                    padding-left: ${this.activeConfig.responsive.extraSmall?.logoPositioning?.paddingLeft || '0'} !important;
                    padding-top: ${this.activeConfig.responsive.extraSmall?.logoPositioning?.paddingTop || '0'} !important;
                    padding-bottom: ${this.activeConfig.responsive.extraSmall?.logoPositioning?.paddingBottom || '0'} !important;
                    margin-right: ${this.activeConfig.responsive.extraSmall?.logoPositioning?.marginRight || '2px'} !important;
                    margin-left: ${this.activeConfig.responsive.extraSmall?.logoPositioning?.marginLeft || '2px'} !important;
                    margin-top: ${this.activeConfig.responsive.extraSmall?.logoPositioning?.marginTop || '0'} !important;
                    margin-bottom: ${this.activeConfig.responsive.extraSmall?.logoPositioning?.marginBottom || '0'} !important;
                }
                
                .banner-text-section {
                    padding-right: ${this.activeConfig.responsive.extraSmall?.textPositioning?.paddingRight || '0'} !important;
                    padding-left: ${this.activeConfig.responsive.extraSmall?.textPositioning?.paddingLeft || '0'} !important;
                    margin-right: ${this.activeConfig.responsive.extraSmall?.textPositioning?.marginRight || '2px'} !important;
                }
                
                .animated-banner-container .logo-combined, 
                .animated-banner-container .logo-text-only {
                    ${this.generateIconTextSpacing(this.activeConfig.responsive.extraSmall?.logoPositioning?.iconTextGap || '2px')} !important;
                }
                

                
                /* Target logo containers - reduce spacing for tight layout */
                .animated-banner-container .logo-text-only, 
                .animated-banner-container .logo-combined {
                    gap: 2px !important;  /* Reduce gap between icon and text */
                    white-space: nowrap;   /* Prevent text wrapping */
                }
                
                .animated-banner-container .logo-combined img, 
                .animated-banner-container .banner-logo-section img {
                    max-height: 12px;
                    width: auto;
                }
            }
            
            /* Responsive spacing overrides for icon-text gap */
            ${this.generateNegativeTextSpacing(this.activeConfig.logoPositioning?.iconTextGap || '8px', '.animated-banner-container .logo-combined, .animated-banner-container .logo-text-only')}
            
            ${this.generateResponsiveSpacing(this.activeConfig.responsive.tablet?.logoPositioning?.iconTextGap || '-0.5rem', '@media (max-width: 1024px)')}
            
            ${this.generateResponsiveSpacing(this.activeConfig.responsive.mobile?.logoPositioning?.iconTextGap || '10rem', '@media (max-width: 768px)')}
            
            ${this.generateResponsiveSpacing(this.activeConfig.responsive.extraSmall?.logoPositioning?.iconTextGap || '10rem', '@media (max-width: 480px)')}
            
            /* Component visibility controls */
            ${this.generateComponentVisibilityCSS()}
        `;
        
        try {
        document.head.appendChild(style);
            console.log('🎯 Banner styles applied successfully');
        } catch (error) {
            console.error('🚨 Error applying banner styles:', error);
            // Fallback: try inserting styles using textContent
            try {
                const fallbackStyle = document.createElement('style');
                fallbackStyle.id = 'animated-banner-styles';
                fallbackStyle.textContent = style.textContent;
                document.head.appendChild(fallbackStyle);
                console.log('🎯 Banner styles applied using fallback method');
            } catch (fallbackError) {
                console.error('🚨 Fallback style insertion also failed:', fallbackError);
            }
        }
    }
    
    adjustPageLayout() {
        // Layout adjustments are no longer needed as all pages now have proper hero section spacing
        console.log(`🎯 Layout adjustment disabled - all pages have proper spacing built-in`);
        
        // Clean up any existing layout adjustments from previous versions
        this.cleanupExistingAdjustments();
    }
    
    /**
     * Clean up any existing layout adjustments from previous versions
     */
    cleanupExistingAdjustments() {
        const adjustedElements = document.querySelectorAll('[data-banner-adjusted="true"]');
        
        if (adjustedElements.length > 0) {
            console.log(`🧹 Cleaning up ${adjustedElements.length} existing layout adjustments`);
            
            adjustedElements.forEach(element => {
                // Remove the adjustment attribute
                element.removeAttribute('data-banner-adjusted');
                
                // Reset any inline padding-top that was added
                if (element.style.paddingTop) {
                    element.style.paddingTop = '';
                    console.log(`🧹 Removed padding adjustment from:`, element.tagName.toLowerCase() + (element.id ? `#${element.id}` : '') + (element.className ? `.${Array.from(element.classList).join('.')}` : ''));
                }
                
                // Remove transition if it was added
                if (element.style.transition && element.style.transition.includes('padding-top')) {
                    element.style.transition = '';
                }
            });
            
            console.log(`✅ Layout adjustment cleanup complete`);
        } else {
            console.log(`🧹 No existing layout adjustments found to clean up`);
        }
    }
    
    triggerEntranceAnimation() {
        if (!this.activeConfig.positioning.entranceAnimation) return;
        
        const banner = document.getElementById('animated-banner-container');
        if (banner) {
            // Small delay to ensure CSS is applied
            setTimeout(() => {
                banner.classList.add('banner-entrance');
            }, 100);
        }
    }
    
    startAnimation() {
        this.showNextWordSet();
    }
    
    showNextWordSet() {
        if (this.isAnimating) return;
        
        this.isAnimating = true;
        const currentSet = this.activeConfig.animatedText.wordSets[this.currentSetIndex];
        const container = document.getElementById('animatedTextContainer');
        
        // Clear previous words
        container.innerHTML = '';
        
        // Add words one by one
        currentSet.forEach((word, index) => {
            setTimeout(() => {
                this.addWord(word, container);
                
                // If this is the last word in the set, start the pull-back sequence
                if (index === currentSet.length - 1) {
                    setTimeout(() => {
                        this.pullBackWords(container);
                    }, this.activeConfig.animatedText.timing.setDisplayTime);
                }
            }, index * this.activeConfig.animatedText.timing.wordDelay);
        });
    }
    
    addWord(word, container) {
        const wordElement = document.createElement('span');
        wordElement.className = 'animated-word';
        wordElement.textContent = word;
        container.appendChild(wordElement);
        
        // Trigger show animation
        setTimeout(() => {
            wordElement.classList.add('show');
        }, 50);
    }
    
    pullBackWords(container) {
        const words = container.querySelectorAll('.animated-word');
        
        words.forEach((word, index) => {
            setTimeout(() => {
                word.classList.add('pull-back');
            }, index * 100);
        });
        
        // After pull-back animation, move to next set
        setTimeout(() => {
            this.currentSetIndex = (this.currentSetIndex + 1) % this.activeConfig.animatedText.wordSets.length;
            this.isAnimating = false;
            
            setTimeout(() => {
                this.showNextWordSet();
            }, this.activeConfig.animatedText.timing.pauseBetweenSets);
        }, this.activeConfig.animatedText.timing.pullBackDuration);
    }
    
    forceLayoutAdjustment() {
        console.log('🔧 Forcing layout adjustment...');
        this.adjustPageLayout();
    }
    
    destroy() {
        // Clean up banner and styles
        const banner = document.getElementById('animated-banner-container');
        const styles = document.getElementById('animated-banner-styles');
        
        // Remove banner adjustments from elements
        const adjustedElements = document.querySelectorAll('[data-banner-adjusted="true"]');
        adjustedElements.forEach(element => {
            element.removeAttribute('data-banner-adjusted');
            element.style.paddingTop = '';
            element.style.transition = '';
        });
        
        if (banner) banner.remove();
        if (styles) styles.remove();
        
        if (this.animationTimeout) {
            clearTimeout(this.animationTimeout);
        }
    }

    closeBanner() {
        const banner = document.getElementById('animated-banner-container');
        if (banner) {
            // Stop any ongoing animations
            if (this.animationTimeout) {
                clearTimeout(this.animationTimeout);
            }
            
            // Animate banner out (slide up and fade)
            banner.style.transform = 'translateX(-50%) translateY(-100%)';
            banner.style.opacity = '0';
            banner.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            
            // Remove banner after animation completes
            setTimeout(() => {
                this.destroy();
            }, 600);
        }
    }
}

// Initialize the animated banner manager
const animatedBannerManager = new AnimatedBannerManager();

// Make configurations globally available
if (typeof window !== 'undefined') {
    window.ANIMATED_BANNER_CONFIG = ANIMATED_BANNER_CONFIG;
    window.AnimatedBannerManager = AnimatedBannerManager;
    window.animatedBannerManager = animatedBannerManager;
    
    // Global helper function to refresh banner scaling
    window.refreshBannerScaling = function() {
        if (window.animatedBannerManager) {
            window.animatedBannerManager.refreshBanner();
        } else {
            console.error('❌ Animated banner manager not found');
        }
    };
}

// Export for Node.js/modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ANIMATED_BANNER_CONFIG,
        AnimatedBannerManager
    };
} 