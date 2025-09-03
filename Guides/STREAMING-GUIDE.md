# 🎬 Streaming Page Guide

Complete guide for managing and customizing the streaming page with live streams, video content, and platform integrations.

## 📋 Table of Contents
- [Quick Setup](#-quick-setup)
- [Hero Section Configuration](#-hero-section-configuration)
- [Streaming Categories & Content](#-streaming-categories--content)
- [Platform Integration](#-platform-integration)
- [Styling & Colors](#-styling--colors)
- [Search Integration](#-search-integration)
- [Troubleshooting](#-troubleshooting)

---

## 🚀 Quick Setup

### File Locations:
- **Configuration**: `utils/streaming-config.js`
- **Page**: `streaming.html`
- **Styles**: `styles/streaming.css`
- **This Guide**: `STREAMING-GUIDE.md`

### Basic Steps:
1. Edit `utils/streaming-config.js` for content
2. Customize colors and styling within config
3. Add/remove streaming categories and videos
4. Configure platform links (Twitch, YouTube, etc.)
5. Test on `streaming.html`

---

## 🎭 Hero Section Configuration

### Logo Types
Configure the hero logo in `STREAMING_HERO.logo`:

```javascript
logo: {
    type: 'combined',  // Options: 'text', 'image', 'combined'
    text: 'StreamHub',
    image: {
        src: './assets/images/Test_Logo1.png',
        alt: 'StreamHub Logo',
        scale: 1.0,     // Size multiplier
        left: 0         // Position adjustment
    },
    textColor: 'var(--primary-color)',
    scale: 1.0,
    left: 0
}
```

**Logo Type Options:**
- **`text`**: Text-only logo
- **`image`**: Image-only logo  
- **`combined`**: Image + text together

### Hero Content
```javascript
STREAMING_HERO = {
    subtitle: 'Watch live streams, gaming content, and exclusive video series',
    description: 'Join our community for live gaming streams, tutorials, reviews...',
    stats: {
        enabled: true,
        items: [
            { label: 'Live Streams', value: '50+', icon: '🔴' },
            { label: 'Video Series', value: '25+', icon: '📺' },
            // Add more stats...
        ]
    }
}
```

---

## 📺 Streaming Categories & Content

### Adding New Categories
```javascript
STREAMING_CATEGORIES = [
    {
        id: 'live-streams',
        title: 'Live Streams',
        description: 'Current live streams and upcoming scheduled broadcasts',
        icon: '🔴',
        color: 'var(--accent-color)',
        featured: true,  // Show in featured section
        streams: [
            // Stream objects here...
        ]
    }
]
```

### Stream Object Structure
```javascript
{
    id: 'unique-stream-id',
    title: 'Gaming Marathon - Best Crypto Games',
    description: 'Live gameplay of the latest crypto and blockchain games',
    platform: 'twitch',        // 'twitch', 'youtube', 'kick', etc.
    platformUrl: 'https://twitch.tv/your-channel',
    status: 'live',            // 'live', 'scheduled', 'ended'
    viewers: '1.2K',           // Current/peak viewers
    duration: 'LIVE',          // Duration or 'LIVE'
    thumbnail: './assets/images/stream-thumb.png',
    streamer: {
        name: 'StreamMaster',
        avatar: './assets/images/avatar.png',
        verified: true         // Show verification badge
    },
    tags: ['Gaming', 'Crypto', 'Live', 'Interactive'],
    scheduledTime: null,       // For scheduled streams
    startTime: '2 hours ago'   // For ended streams
}
```

### Stream Status Types
- **`live`**: Currently broadcasting (red indicator)
- **`scheduled`**: Upcoming stream (yellow indicator)  
- **`ended`**: Past stream/video (gray indicator)

---

## 🌐 Platform Integration

### Supported Platforms
Configure platform links in `STREAMING_PLATFORMS`:

```javascript
STREAMING_PLATFORMS = [
    {
        name: 'Twitch',
        icon: '💜',
        url: 'https://twitch.tv/your-channel',
        color: '#9146FF',
        description: 'Live gaming streams and interactive content'
    },
    {
        name: 'YouTube',
        icon: '📺', 
        url: 'https://youtube.com/@your-channel',
        color: '#FF0000',
        description: 'Video series, tutorials, and live streams'
    },
    // Add more platforms...
]
```

### Platform-Specific Settings
Each stream links to its platform via `platformUrl`. Users click "Watch Live" or "Watch Now" to go directly to:
- Twitch streams
- YouTube videos
- Kick broadcasts
- Discord voice channels
- Twitter Spaces

---

## 🎨 Styling & Colors

### Dynamic Color System
All colors use CSS variables from `STREAMING_STYLING.colors`:

```javascript
colors: {
    // Hero section
    heroBackground: 'var(--hero-bg-color, var(--background-color))',
    heroText: 'var(--hero-text-color, var(--text-color))',
    heroAccent: 'var(--hero-accent-color, var(--accent-color))',
    
    // Stream cards
    streamCardBackground: 'var(--card-bg-color, #ffffff)',
    streamCardBorder: 'var(--card-border-color, var(--border-color))',
    
    // Status indicators
    liveIndicator: 'var(--live-color, #ff4757)',
    scheduledIndicator: 'var(--scheduled-color, var(--warning-color))',
    endedIndicator: 'var(--ended-color, var(--muted-color))',
    
    // Platform-specific colors
    platformTwitch: '#9146FF',
    platformYoutube: '#FF0000',
    platformKick: '#53FC18',
}
```

### Layout Options
```javascript
layout: {
    showStats: true,           // Show streaming statistics
    showPlatforms: true,       // Show platform links section
    showFeaturedOnly: false,   // Only show featured streams
    cardsPerRow: 3,           // Streams per row (desktop)
    showViewerCount: true,     // Show viewer counts
    showDuration: true,        // Show stream duration
    showTags: true            // Show stream tags
}
```

### Category Badge Colors
Each category can have its own color:
```javascript
{
    id: 'gaming-content',
    title: 'Gaming Content', 
    color: 'var(--primary-color)',  // Badge background color
    // ...
}
```

---

## 🔍 Search Integration

The streaming page is fully integrated with the site's search system. Users can search for:

### Searchable Content:
- **Stream titles**: "Gaming Marathon", "Tech Review Stream"
- **Streamer names**: "StreamMaster", "TechReviewer" 
- **Platform names**: "Twitch", "YouTube", "Kick"
- **Stream tags**: "Gaming", "Crypto", "Live", "Tutorial"
- **Stream status**: "live", "scheduled", "ended"
- **Stream descriptions**: Full content of descriptions

### Search Examples:
- Type `"streaming"` → Shows main streaming page
- Type `"live"` → Shows live streams and content
- Type `"twitch"` → Shows Twitch-related streams
- Type `"gaming"` → Shows gaming content streams
- Type streamer names → Shows specific creator content

---

## 📊 Content Management

### Adding New Streams
1. **Choose Category**: Add to existing or create new category
2. **Set Status**: `live`, `scheduled`, or `ended`
3. **Add Streamer Info**: Name, avatar, verification status
4. **Set Platform**: Choose platform and add direct URL
5. **Add Tags**: For better search/categorization

### Content Best Practices:
- **Thumbnails**: Use 16:9 aspect ratio images
- **Descriptions**: Keep concise but informative
- **Tags**: 3-5 relevant tags per stream
- **Platform URLs**: Direct links to streams/videos
- **Viewer Counts**: Update for live streams

### Managing Live Content:
```javascript
// For currently live streams
status: 'live',
viewers: '1.2K',        // Current viewer count
duration: 'LIVE',       // Show as live
startTime: '2 hours ago'

// For scheduled streams  
status: 'scheduled',
viewers: null,
duration: '90 min',     // Expected duration
scheduledTime: 'Today 8:00 PM'

// For past content
status: 'ended', 
viewers: '5.8K',        // Peak viewers
duration: '28:45',      // Total duration
startTime: '3 days ago'
```

---

## 🛠️ Troubleshooting

### Common Issues:

#### Streams Not Showing
```javascript
// Check category structure:
STREAMING_CATEGORIES = [
    {
        id: 'category-id',        // ← Must be unique
        streams: [                // ← Must be array
            { /* stream object */ }
        ]
    }
]
```

#### Colors Not Applying
- Check CSS variables are properly defined
- Ensure `applyDynamicColors()` method runs
- Verify color fallbacks exist

#### Search Not Working
- Confirm `streaming-config.js` loads on all pages
- Check streaming configs added to `main.js` search system
- Verify `STREAMING_CATEGORIES` exports to `window`

#### Platform Links Broken
```javascript
// Ensure proper URL format:
platformUrl: 'https://twitch.tv/channel-name'  // ✅ Good
platformUrl: 'twitch.tv/channel-name'          // ❌ Missing protocol
```

#### Images Not Loading
- Check image paths are correct
- Ensure images exist in `assets/images/`
- Use proper image formats (PNG, JPG, WebP)

### Debug Console Commands:
```javascript
// Check config loading
console.log(window.STREAMING_CATEGORIES);
console.log(window.STREAMING_PLATFORMS);

// Check page manager
console.log(window.StreamingPageManager);

// Test search integration
// (Type "streaming" in search to test)
```

### File Permissions:
- Ensure `streaming.html` is accessible
- Check `utils/streaming-config.js` loads properly
- Verify `styles/streaming.css` applies

---

## 🎯 Advanced Features

### Custom Stream Cards
Modify `renderStreamCard()` method in `StreamingPageManager` for custom layouts.

### Integration with Analytics
Track stream clicks and popular content:
```javascript
// In event listeners
console.log(`🎬 Stream action clicked: ${streamId}`);
```

### Mobile Optimization
Responsive grid automatically adjusts:
- Desktop: 3 cards per row
- Tablet: 2 cards per row  
- Mobile: 1 card per row

### Animated Banner Integration
Streaming page has custom animated banner (configured in `animated-banner-config.js`):
- Custom StreamHub branding
- Live streaming focused messaging
- Red gradient theme matching live indicators

---

## 📝 Quick Reference

### Essential Files:
- `utils/streaming-config.js` - Main configuration
- `streaming.html` - Page structure
- `styles/streaming.css` - Styling
- `scripts/main.js` - Search integration
- `utils/animated-banner-config.js` - Banner config

### Key Objects:
- `STREAMING_HERO` - Hero section content
- `STREAMING_CATEGORIES` - Categories and streams
- `STREAMING_PLATFORMS` - Platform links
- `STREAMING_STYLING` - Colors and layout
- `StreamingPageManager` - Page functionality

### Color Variables:
- `--streaming-live-color` - Live indicator
- `--streaming-card-bg` - Stream card background
- `--streaming-badge-bg` - Category badge color
- `--streaming-primary-btn` - Primary button color

---

## 🔄 Updates & Maintenance

### Regular Tasks:
1. **Update Live Status**: Change `live` streams to `ended` when finished
2. **Add New Content**: Add upcoming streams as `scheduled`
3. **Update Viewer Counts**: Keep live stream viewer counts current
4. **Check Platform Links**: Ensure all URLs work properly
5. **Update Thumbnails**: Refresh images for new content

### Content Strategy:
- Feature popular streamers in hero stats
- Rotate featured categories based on popularity
- Update platform descriptions as features change
- Add seasonal/event-based streaming categories

---

*For technical support or feature requests, refer to the main project documentation or contact the development team.* 