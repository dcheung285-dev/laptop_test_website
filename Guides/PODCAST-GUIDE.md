# 🎧 Podcast Page Configuration Guide

## Overview
This guide explains how to customize the podcast page through the `utils/podcast-config.js` file. The podcast page is fully dynamic, allowing you to add episodes, categories, streaming platforms, and styling without touching HTML or CSS files.

## 📁 Files Involved
- **`utils/podcast-config.js`** - Main configuration file (edit this)
- **`podcast.html`** - Page structure (usually no edits needed)
- **`styles/podcast.css`** - Styling (uses theme colors automatically)
- **`PODCAST-GUIDE.md`** - This guide

---

## 🚀 Quick Setup (Most Common Changes)

### 1. Update Podcast Branding
```javascript
const PODCAST_HERO = {
    subtitle: "Your podcast tagline",     // ← Subtitle/description (no title needed)
    description: "Detailed description of what your podcast is about.",
    logo: {
        type: 'image',                       // ← 'text', 'image', 'combined'
        
        // Text logo (emoji + brand text)
        text: {
            content: '🎧',                   // ← Emoji or icon
            brandText: 'Your Podcast',      // ← Brand name text
            fontSize: '48px',                // ← Text size
            textColor: '#FFFFFF',            // ← Text color
            spacing: '12px',                 // ← Space between emoji and text
            scale: 1.0                       // ← Overall scale multiplier
        },
        
        // Image logo
        image: {
            src: "assets/images/your-logo.png",  // ← Your podcast logo
            scale: 4.0,                          // ← Logo scaling (1.0 = normal size)
            alt: "Your Podcast Name"
        },
        
        // Combined logo (image + text)
        combined: {
            imageSrc: "assets/images/your-logo.png",  // ← Logo image
            imageScale: 2.0,                          // ← Image scale
            textContent: "Your Podcast",             // ← Text next to image
            textColor: '#FFFFFF',                    // ← Text color
            fontSize: '36px',                        // ← Text size
            spacing: '16px',                         // ← Space between image and text
            layout: 'row'                            // ← 'row' or 'column' layout
        }
    },
    streamingPlatforms: [
        {
            name: "Spotify",
            icon: "fab fa-spotify",
            url: "https://open.spotify.com/show/your-podcast",  // ← Your Spotify link
            color: "#1DB954"
        },
        {
            name: "Apple Podcasts", 
            icon: "fab fa-apple",
            url: "https://podcasts.apple.com/your-podcast",     // ← Your Apple Podcasts link
            color: "#A855F7"
        }
    ]
};
```

### 2. Add/Edit Podcast Categories
```javascript
const PODCAST_CATEGORIES = [
    {
        id: "interviews",                    // ← Unique ID for this category
        title: "INTERVIEWS",                 // ← Category display name
        description: "One-on-one conversations with industry leaders.",
        icon: "🎤",                         // ← Emoji icon (no images needed)
        color: "#ff9800",                   // ← Category badge background color
        episodes: [
            // ... episodes array (see episode configuration below)
        ]
    },
    // Add more categories here
];
```

### 3. Add New Episodes
```javascript
// Inside a category's episodes array:
{
    id: "episode-001",                      // ← Unique episode ID
    title: "Episode Title Here",            // ← Episode title
    guest: "GUEST NAME",                    // ← Guest name (uppercase)
    guestTitle: "Guest's job title or company", // ← Guest description
    date: "Aug 15, 2025",                   // ← Release date
    duration: "45:30",                      // ← Episode length
    thumbnail: "assets/images/episode-thumb.jpg", // ← Episode image
    audioUrl: "path/to/audio/file.mp3",     // ← Audio file path
    description: "What this episode is about...", // ← Episode description
    tags: ["Tag1", "Tag2", "Tag3"],         // ← Episode tags
    episodeNumber: "EP 15"                  // ← Optional episode number
}
```

---

## 📝 Detailed Configuration

### Hero Section Configuration
```javascript
const PODCAST_HERO = {
    title: "Bitcoin.com Podcast",
    subtitle: "Top conversations shaping the crypto space",
    description: "Unlock analysis, insights, and expert commentary from industry leaders.",
    logo: {
        src: "assets/images/podcast-logo.png",  // Path to your main logo
        alt: "Podcast Logo Alt Text"            // Accessibility text
    },
    streamingPlatforms: [
        // Add as many platforms as needed
        {
            name: "Spotify",               // Platform name
            icon: "fab fa-spotify",        // Font Awesome icon class
            url: "https://your-link",      // Direct link to your podcast
            color: "#1DB954"               // Platform's brand color
        },
        {
            name: "YouTube",
            icon: "fab fa-youtube", 
            url: "https://youtube.com/your-channel",
            color: "#FF0000"
        },
        {
            name: "Google Podcasts",
            icon: "fab fa-google",
            url: "https://podcasts.google.com/your-podcast", 
            color: "#4285F4"
        }
    ]
};
```

### Category Management
Each category has its own individual configuration, including a unique badge color:

```javascript
const PODCAST_CATEGORIES = [
    {
        id: "news-interviews",               // Must be unique across all categories
        title: "NEWS INTERVIEWS",           // Display name (can use any case)
        description: "Interview show description...", // Longer description
        icon: "🎤",                         // Emoji for category icon
        color: "#ff9800",                   // Badge background color (specific to this category)
        episodes: [
            // Array of episode objects (see episode structure below)
        ]
    }
];
```

**🎨 Category Badge Colors:**
- Each category can have its own unique badge color via the `color` property
- Colors can be hex codes (`#ff9800`), RGB (`rgb(255, 152, 0)`), or CSS color names (`orange`)
- This color is applied to the category badge background automatically
- Text color is controlled globally via `categoryBadgeText` in the styling config

### Episode Structure
```javascript
{
    id: "unique-episode-id",                // Must be unique across all episodes
    title: "Full Episode Title",           // Main episode title
    guest: "GUEST NAME",                   // Guest name (usually uppercase)
    guestTitle: "Guest's Title/Company",   // Guest description
    date: "Aug 1, 2025",                   // Release date (any format)
    duration: "45:23",                     // Episode length (MM:SS or HH:MM:SS)
    thumbnail: "assets/images/thumb.jpg",  // Episode thumbnail image
    audioUrl: "path/to/audio.mp3",         // Path to audio file
    description: "Episode description...", // Longer description (optional)
    tags: ["Tag1", "Tag2"],                // Episode tags (optional)
    episodeNumber: "EP 63"                 // Episode number (optional)
}
```

### Featured Episodes
```javascript
const FEATURED_EPISODES = [
    {
        episodeId: "episode-001",           // Must match an episode ID
        categoryId: "news-interviews",     // Must match a category ID
        featured: true,
        reason: "Latest Interview"          // Why this episode is featured
    }
    // Add more featured episodes
];
```

---

## 🎨 Display & Styling Options

### Display Configuration
```javascript
const PODCAST_DISPLAY_CONFIG = {
    hero: {
        showStreamingPlatforms: true,       // Show/hide platform buttons
        showLogo: true,                     // Show/hide podcast logo
        backgroundStyle: "gradient"         // "gradient", "solid", or "image"
    },
    episodes: {
        showThumbnails: true,               // Show episode images
        showDuration: true,                 // Show episode length
        showTags: true,                     // Show episode tags
        showGuestInfo: true,                // Show guest name/title
        showEpisodeNumbers: true,           // Master control for episode numbers
        episodeNumberStyle: "selective",    // "all", "none", "selective"
                                           // "all" = show numbers on all episodes
                                           // "none" = hide all numbers  
                                           // "selective" = only show if episode has episodeNumber field
        episodesPerPage: 12,                // Episodes per page
        defaultView: "grid"                 // "grid" or "list" view
    },
    categories: {
        showIcons: true,                    // Show category emoji icons
        showDescriptions: true,             // Show category descriptions
        showEpisodeCounts: true,            // Show number of episodes
        allowCategoryFiltering: true        // Enable category filtering
    }
};
```

### Styling Configuration
```javascript
const PODCAST_STYLING = {
    useThemeColors: true,                   // Use theme-config.js colors
    customColors: {
        // Override specific colors (optional)
        episodeCardBackground: "rgba(255, 255, 255, 0.1)",
        episodeCardHover: "rgba(255, 255, 255, 0.2)",
        categoryBadgeBackground: "var(--primary-color)",
        playButtonColor: "var(--accent-color)"
    },
    layout: {
        containerMaxWidth: "1200px",        // Maximum page width
        sectionSpacing: "var(--spacing-lg)", // Space between sections
        cardBorderRadius: "12px",           // Episode card corner radius
        cardShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" // Card shadow
    }
};
```

---

## 🎨 Color & Styling Configuration

### Complete Color Control
All colors on the podcast page can be customized through the `PODCAST_STYLING` configuration:

```javascript
const PODCAST_STYLING = {
    useThemeColors: true, // Use colors from theme-config.js
    colors: {
        // Hero section colors
        heroBackground: "linear-gradient(135deg, var(--primary-color), var(--accent-color))",
        heroTextColor: "#FFFFFF",                        // Hero title and subtitle
        heroDescriptionColor: "rgba(255, 255, 255, 0.8)", // Hero description text
        
        // Section colors
        sectionTitleColor: "var(--primary-color)",       // "Latest Episodes", category titles
        sectionDescriptionColor: "var(--text-muted)",    // Section descriptions
        sectionBackgroundPrimary: "var(--background-color)",    // Featured section background
        sectionBackgroundSecondary: "var(--surface-color)",     // Categories section background
        
        // Episode card colors
        episodeCardBackground: "var(--background-color)", // Episode card backgrounds
        episodeCardHover: "rgba(0, 0, 0, 0.05)",         // Episode card hover effect
        episodeTitleColor: "var(--text-color)",          // Episode titles
        episodeGuestNameColor: "var(--primary-color)",   // Guest names (uppercase)
        episodeGuestTitleColor: "var(--text-muted)",     // Guest titles/descriptions
        episodeDateColor: "var(--text-muted)",           // Episode dates
        
        // Interactive elements
        playButtonBackground: "var(--primary-color)",    // Play button background
        playButtonHover: "var(--accent-color)",          // Play button hover
        viewAllButtonBackground: "var(--primary-color)", // "View all episodes" buttons
        viewAllButtonHover: "var(--accent-color)",       // Button hover state
        
        // Category badges
        categoryBadgeBackground: "var(--primary-color)", // Default badge color (overridden by category.color)
        categoryBadgeText: "#FFFFFF",                    // Badge text color
        
        // Tags and badges
        tagBackground: "var(--surface-color)",           // Episode tag backgrounds
        tagTextColor: "var(--text-muted)",               // Episode tag text
        episodeNumberBackground: "var(--primary-color)", // Episode number badge
        episodeNumberText: "#FFFFFF",                    // Episode number text
        durationBadgeBackground: "rgba(0, 0, 0, 0.8)",   // Duration badge
        durationBadgeText: "#FFFFFF",                    // Duration text
        
        // Streaming platforms
        platformButtonBackground: "rgba(255, 255, 255, 0.2)", // Platform button background
        platformButtonBorder: "rgba(255, 255, 255, 0.3)",     // Platform button border
        platformButtonText: "#FFFFFF"                          // Platform button icons
    }
};
```

### Quick Color Examples

**Using Theme Variables (Recommended):**
```javascript
colors: {
    // These automatically match your theme-config colors
    sectionTitleColor: "var(--primary-color)",           // Uses theme primary
    playButtonBackground: "var(--primary-color)",        // Matches theme
    episodeGuestNameColor: "var(--accent-color)",        // Uses theme accent
    episodeTitleColor: "var(--text-color)",              // Theme text color
    episodeCardBackground: "var(--background-color)",    // Theme background
    tagBackground: "var(--surface-color)",               // Theme surface color
}
```

**Custom Brand Colors (Override theme):**
```javascript
colors: {
    sectionTitleColor: "#ff6b35",        // Custom orange for section titles
    playButtonBackground: "#ff6b35",     // Matching play buttons
    episodeGuestNameColor: "#ff6b35",    // Consistent guest name color
    categoryBadgeBackground: "#ff6b35"   // Default badge color
}
```

**Mixed Approach (Theme + Custom):**
```javascript
colors: {
    // Use theme colors for most elements
    episodeTitleColor: "var(--text-color)",
    episodeCardBackground: "var(--background-color)",
    
    // Custom brand colors for highlights
    sectionTitleColor: "#ff6b35",
    playButtonBackground: "#ff6b35",
    episodeGuestNameColor: "#ff6b35"
}
```

**Dark Theme Integration:**
```javascript
colors: {
    // These will automatically work with dark/light themes
    heroBackground: "linear-gradient(135deg, var(--primary-color), var(--accent-color))",
    episodeTitleColor: "var(--text-color)",              // Auto dark/light text
    episodeCardBackground: "var(--background-color)",    // Auto dark/light cards
    tagBackground: "var(--surface-color)",               // Auto surface colors
}
```

---

## 🎨 Advanced Styling & Layout

### Styling Configuration
```javascript
const PODCAST_STYLING = {
    useThemeColors: true,                   // Use theme-config.js colors
    customColors: {
        // Override specific colors (optional)
        episodeCardBackground: "rgba(255, 255, 255, 0.1)",
        episodeCardHover: "rgba(255, 255, 255, 0.2)",
        categoryBadgeBackground: "var(--primary-color)",
        playButtonColor: "var(--accent-color)"
    },
    layout: {
        containerMaxWidth: "1200px",        // Maximum page width
        sectionSpacing: "var(--spacing-lg)", // Space between sections
        cardBorderRadius: "12px",           // Episode card corner radius
        cardShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" // Card shadow
    }
};
```

---

## 📊 Content Management Examples

### Adding a New Category
1. **Create the category object:**
```javascript
{
    id: "tech-talks",
    title: "TECH TALKS", 
    description: "Deep dives into technology and innovation.",
    icon: "💻",
    iconImage: "assets/images/tech-badge.png",
    color: "#2196f3",
    episodes: []  // Start with empty array
}
```

2. **Add it to PODCAST_CATEGORIES array**
3. **Add episodes to the episodes array**

### Adding Episodes to Existing Category
1. **Find your category in PODCAST_CATEGORIES**
2. **Add new episode object to its episodes array:**
```javascript
{
    id: "tech-001",
    title: "The Future of AI in Blockchain",
    guest: "DR. JANE SMITH",
    guestTitle: "AI Research Director at TechCorp", 
    date: "Aug 20, 2025",
    duration: "52:15",
    thumbnail: "assets/images/ai-blockchain-thumb.jpg",
    audioUrl: "assets/audio/tech-001.mp3",
    description: "Exploring how AI will transform blockchain technology.",
    tags: ["AI", "Blockchain", "Future Tech"],
    episodeNumber: "TECH 01"
}
```

### Making an Episode Featured
1. **Add to FEATURED_EPISODES array:**
```javascript
{
    episodeId: "tech-001",        // Must match your episode ID
    categoryId: "tech-talks",     // Must match your category ID
    featured: true,
    reason: "Hot Topic"
}
```

---

## 🔧 Advanced Customization

### Custom Streaming Platforms
```javascript
streamingPlatforms: [
    {
        name: "Custom Platform",
        icon: "fas fa-podcast",           // Any Font Awesome icon
        url: "https://your-custom-platform.com",
        color: "#YOUR_COLOR"
    }
]
```

### Episode Tags & Categories
```javascript
// Use tags for filtering and organization
tags: [
    "Bitcoin",           // Topic tags
    "Interview",         // Format tags  
    "Expert Analysis",   // Content type tags
    "2025"              // Time-based tags
]
```

### Custom Episode Metadata
```javascript
{
    // Standard fields...
    id: "special-001",
    title: "Special Episode",
    
    // Custom fields (will be ignored by default display but available for custom features)
    isSpecial: true,
    season: 2,
    transcript: "path/to/transcript.txt",
    videoUrl: "path/to/video.mp4",
    sponsors: ["Sponsor 1", "Sponsor 2"]
}
```

---

## 🚀 Quick Checklists

### Before Publishing:
- [ ] Update podcast title and description
- [ ] Add your logo image
- [ ] Update streaming platform links
- [ ] Add at least 3-4 episodes per category
- [ ] Set featured episodes
- [ ] Test on mobile and desktop
- [ ] Verify all audio links work
- [ ] Check image paths are correct

### Adding New Episode:
- [ ] Create unique episode ID
- [ ] Add high-quality thumbnail image (16:9 ratio recommended)
- [ ] Include guest information
- [ ] Add relevant tags
- [ ] Set correct category
- [ ] Test audio file plays correctly
- [ ] Consider featuring if it's a highlight

### Content Organization:
- [ ] Keep categories focused and distinct
- [ ] Use consistent naming conventions
- [ ] Organize episodes chronologically (newest first)
- [ ] Update featured episodes regularly
- [ ] Keep episode titles descriptive but concise

---

## 🛠️ Troubleshooting

### Episodes Not Showing
- Check that episode IDs are unique
- Verify image paths are correct
- Ensure category IDs match in featured episodes
- Check browser console for JavaScript errors

### Images Not Loading
- Verify image files exist in specified paths
- Check image file formats (JPG, PNG, WebP recommended)
- Ensure images aren't too large (< 500KB recommended)
- Test image URLs directly in browser

### Styling Issues
- Ensure theme-config.js is loaded
- Check that CSS custom properties are defined
- Verify responsive breakpoints work on mobile
- Test with different browser sizes

### Audio Not Playing
- Verify audio file formats (MP3, OGG, WAV supported)
- Check file paths are correct
- Ensure audio files are accessible
- Test audio controls in different browsers

---

## 📞 Support

This podcast page uses:
- **Dynamic rendering** from podcast-config.js
- **Theme-based styling** from theme-config.js  
- **Responsive design** that works on all devices
- **Accessible markup** for screen readers
- **SEO-friendly structure** for search engines

To modify the page appearance beyond the config options, edit `styles/podcast.css` while maintaining the CSS custom properties for theme compatibility.

**Pro Tip**: The podcast page automatically uses your theme colors, so changing your theme will update the podcast page styling too! 🎨 