/**
 * AUTO SLIDER CONFIGURATION
 * 
 * This file configures the auto slider system that can be integrated into any page.
 * Similar to the nav bar and newsletter system, this creates modular sliders.
 */

const AUTO_SLIDER_CONFIG = {
    // Global slider settings
    global: {
        animationSpeed: 30, // Speed of animation in pixels per second
        pauseOnHover: true, // Pause animation when hovering
        showControls: false, // Show play/pause controls
        responsive: true, // Enable responsive behavior
        // NOTE: Gaps are now set manually for each image using the 'gap' property
    },

    // Slider 1 - Top slider (moving left) - Text Logos
    slider1: {
        id: 'auto-slider-1',
        direction: 'left', // 'left' or 'right'
        height: '120px', // Height of the slider
        animationSpeed: 35, // Override global speed if needed
        images: [
            {
                src: 'assets/images/laptop_test/apple_logo_black_text.png',
                alt: 'Apple',
                width: 'auto', // 'auto' or specific width like '120px'
                height: '60px', // Height of individual images
                scale: 1.2, // Scale factor (1.0 = 100%, 1.2 = 120%, 0.8 = 80%, etc.)
                gap: 70     // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/laptop_test/ASUS_logo_white.png',
                alt: 'Asus',
                width: 'auto', // 'auto' or specific width like '120px'
                height: '60px', // Height of individual images
                scale: 1.3, // Scale factor (1.0 = 100%, 1.2 = 120%, 0.8 = 80%, etc.)
                gap: 50 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/laptop_test/Dell_logo.png',
                alt: 'Dell',
                width: 'auto',
                height: '60px',
                scale: 1.0,
                gap: 95 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/laptop_test/microsoft_logo_grey.png',
                alt: 'Microsoft',
                width: 'auto',
                height: '60px',
                scale: 2.0,
                gap: 145   // Larger gap for scaled image
            },
            {
                src: 'assets/images/laptop_test/samsung_logo.png',
                alt: 'Samsung',
                width: 'auto',
                height: '60px',
                scale: 3.0,
                gap: 115    // Larger gap for scaled image
            },
            {
                src: 'assets/images/laptop_test/hp_logo.png',
                alt: 'HP',
                width: 'auto',
                height: '60px',
                scale: 1.5,
                gap: 100    // Larger gap for scaled image
            },
            {
                src: 'assets/images/laptop_test/Lenovo_logo.png',
                alt: 'Lenovo',
                width: 'auto',
                height: '60px',
                scale: 2.0,
                gap: 110    // Larger gap for scaled image
            },
            {
                src: 'assets/images/laptop_test/alienware_logo.png',
                alt: 'Alienware',
                width: 'auto',
                height: '60px',
                scale: 1.5,
                gap: 60 // Much larger gap for heavily scaled image
            },
            {
                src: 'assets/images/laptop_test/acer_logo.png',
                alt: 'Acer',
                width: 'auto',
                height: '60px',
                scale: 1.0,
                gap: 60 // Medium gap for moderately scaled image
            },
            {
                src: 'assets/images/laptop_test/lg_logo.png',
                alt: 'LG',
                width: 'auto',
                height: '60px',
                scale: 1.4,
                gap: 85    // Large gap for heavily scaled image
            }
        ],
        styling: {
            backgroundColor: 'transparent',
            borderRadius: '12px',
            padding: '10px 0',
            margin: '20px 0',
            boxShadow: 'none',
            border: 'none'
        }
    },

    // Slider 2 - Bottom slider (moving right) - Bigger with Casino Images
    slider2: {
        id: 'auto-slider-2',
        direction: 'right', // 'left' or 'right'
        height: '360px', // Bigger height for the slider
        animationSpeed: 25, // Different speed for variety
        images: [
            {
                src: 'assets/images/laptop_test/stream1.jpg',
                alt: 'Stream1',
                width: 'auto',
                height: '180px', // Bigger images
                scale: 1.0, // Scale factor for individual sizing adjustments
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/laptop_test/stream2.jpg',
                alt: 'Stream2',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/laptop_test/stream3.jpg',
                alt: 'Stream3',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/laptop_test/stream4.png',
                alt: 'Stream4',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/laptop_test/stream5.jpg',
                alt: 'Stream5',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/laptop_test/stream6.jpg',
                alt: 'Stream6',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/laptop_test/stream7.jpg',
                alt: 'Stream7',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/laptop_test/stream8.png',
                alt: 'Stream8',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/laptop_test/stream9.png',
                alt: 'Stream9',
                width: 'auto',
                height: '180px',
                scale: 1.0
            },
            {
                src: 'assets/images/laptop_test/stream10.jpg',
                alt: 'Stream10',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/laptop_test/stream11.png',
                alt: 'Stream11',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/laptop_test/stream12.jpg',
                alt: 'Stream12',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/laptop_test/stream13.webp',
                alt: 'Stream13',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/laptop_test/stream14.jpg',
                alt: 'Stream14',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/laptop_test/stream15.jpg',
                alt: 'Stream15',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/laptop_test/stream16.jpg',
                alt: 'Stream16',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/laptop_test/stream17.jpg',
                alt: 'Stream17',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/laptop_test/stream18.webp',
                alt: 'Stream18',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/laptop_test/stream19.jpg',
                alt: 'Stream19',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/laptop_test/stream20.jpg',
                alt: 'Stream20',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/laptop_test/stream21.avif',
                alt: 'Stream21',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/laptop_test/stream22.avif',
                alt: 'Stream22',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/laptop_test/stream23.jpg',
                alt: 'Stream23',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/laptop_test/stream24.jpg',
                alt: 'Stream24',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/laptop_test/stream25.png',
                alt: 'Stream25',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
        ],
        styling: {
            backgroundColor: 'transparent',
            borderRadius: '12px',
            padding: '10px 0',
            margin: '20px 0',
            boxShadow: 'none',
            border: 'none'
        }
    },
/*
    // Slider 3 - Top slider (moving left) - crypto icons
    slider3: {
        id: 'auto-slider-3',
        direction: 'left', // 'left' or 'right'
        height: '120px', // Height of the slider
        animationSpeed: 35, // Override global speed if needed
        images: [
            {
                src: 'assets/images/casino_test/tether.webp',
                alt: 'Tether',
                width: 'auto', // 'auto' or specific width like '120px'
                height: '60px', // Height of individual images
                scale: 1.5, // Scale factor (1.0 = 100%, 1.2 = 120%, 0.8 = 80%, etc.)
                gap: 20     // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/bitcoin.jpg',
                alt: 'Bitcoin',
                width: 'auto', // 'auto' or specific width like '120px'
                height: '60px', // Height of individual images
                scale: 1.5, // Scale factor (1.0 = 100%, 1.2 = 120%, 0.8 = 80%, etc.)
                gap: 20 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/eth.webp',
                alt: 'Ethereum',
                width: 'auto',
                height: '60px',
                scale: 1.5,
                gap: 20 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/solana.webp',
                alt: 'Solana',
                width: 'auto',
                height: '60px',
                scale: 1.5,
                gap: 20    // Larger gap for scaled image
            },
            {
                src: 'assets/images/casino_test/doge.webp',
                alt: 'Dogecoin',
                width: 'auto',
                height: '60px',
                scale: 1.5,
                gap: 20    // Larger gap for scaled image
            },
            {
                src: 'assets/images/casino_test/litecoin.webp',
                alt: 'Litecoin',
                width: 'auto',
                height: '60px',
                scale: 1.2,
                gap: 20    // Larger gap for scaled image
            },
            {
                src: 'assets/images/casino_test/tether.webp',
                alt: 'Tether',
                width: 'auto', // 'auto' or specific width like '120px'
                height: '60px', // Height of individual images
                scale: 1.5, // Scale factor (1.0 = 100%, 1.2 = 120%, 0.8 = 80%, etc.)
                gap: 20     // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/bitcoin.jpg',
                alt: 'Bitcoin',
                width: 'auto', // 'auto' or specific width like '120px'
                height: '60px', // Height of individual images
                scale: 1.5, // Scale factor (1.0 = 100%, 1.2 = 120%, 0.8 = 80%, etc.)
                gap: 20 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/eth.webp',
                alt: 'Ethereum',
                width: 'auto',
                height: '60px',
                scale: 1.5,
                gap: 20 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/solana.webp',
                alt: 'Solana',
                width: 'auto',
                height: '60px',
                scale: 1.5,
                gap: 20    // Larger gap for scaled image
            },
            {
                src: 'assets/images/casino_test/doge.webp',
                alt: 'Dogecoin',
                width: 'auto',
                height: '60px',
                scale: 1.5,
                gap: 20    // Larger gap for scaled image
            },
            {
                src: 'assets/images/casino_test/litecoin.webp',
                alt: 'Litecoin',
                width: 'auto',
                height: '60px',
                scale: 1.2,
                gap: 20    // Larger gap for scaled image
            },
        ],
        styling: {
            backgroundColor: 'transparent',
            borderRadius: '12px',
            padding: '10px 0',
            margin: '20px 0',
            boxShadow: 'none',
            border: 'none'
        }
    }, */

    // Responsive settings for different screen sizes
    responsive: {
        desktop: {
            // Top slider (text logos)
            slider1Height: '120px',
            slider1ImageHeight: '60px',
            // Bottom slider (casino images - bigger)
            slider2Height: '360px',
            slider2ImageHeight: '180px',
            // Crypto slider (same as text logos)
            slider3Height: '120px',
            slider3ImageHeight: '60px',
            gap: '30px'
        },
        tablet: {
            // Top slider (text logos)
            slider1Height: '70px',
            slider1ImageHeight: '35px',
            // Bottom slider (casino images)
            slider2Height: '100px',
            slider2ImageHeight: '75px',
            // Crypto slider (same as text logos)
            slider3Height: '70px',
            slider3ImageHeight: '35px',
            gap: '20px'
        },
        mobile: {
            // Top slider (text logos)
            slider1Height: '60px',
            slider1ImageHeight: '30px',
            // Bottom slider (casino images)
            slider2Height: '80px',
            slider2ImageHeight: '60px',
            // Crypto slider (same as text logos)
            slider3Height: '60px',
            slider3ImageHeight: '30px',
            gap: '15px'
        },
        extraSmall: {
            // Top slider (text logos)
            slider1Height: '50px',
            slider1ImageHeight: '25px',
            // Bottom slider (casino images)
            slider2Height: '70px',
            slider2ImageHeight: '50px',
            // Crypto slider (same as text logos)
            slider3Height: '50px',
            slider3ImageHeight: '25px',
            gap: '10px'
        }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AUTO_SLIDER_CONFIG;
}
