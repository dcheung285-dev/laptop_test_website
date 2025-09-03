# Image Scaling Guide for Popup Logos

## Understanding Image Scaling

There are two different aspects of image sizing in the popup system:

### 1. **Image Scale** (width/height)
This controls the **actual display size** of the image container.

### 2. **Object Fit** (contain/cover/fill)
This controls **how the image fits** within that container.

## Image Scale Examples

### Small Images
```javascript
// 32x32 pixel container
image: {
    src: 'assets/images/logo.png',
    width: '32px',  // Small container
    height: '32px', // Small container
    objectFit: 'contain'
}
```

### Medium Images
```javascript
// 48x48 pixel container
image: {
    src: 'assets/images/logo.png',
    width: '48px',  // Medium container
    height: '48px', // Medium container
    objectFit: 'contain'
}
```

### Large Images
```javascript
// 64x64 pixel container
image: {
    src: 'assets/images/logo.png',
    width: '64px',  // Large container
    height: '64px', // Large container
    objectFit: 'contain'
}
```

### Extra Large Images
```javascript
// 96x96 pixel container
image: {
    src: 'assets/images/logo.png',
    width: '96px',  // Extra large container
    height: '96px', // Extra large container
    objectFit: 'contain'
}
```

### Custom Aspect Ratios
```javascript
// Wide rectangle
image: {
    src: 'assets/images/logo.png',
    width: '80px',  // Wide
    height: '40px', // Short
    objectFit: 'contain'
}

// Tall rectangle
image: {
    src: 'assets/images/logo.png',
    width: '40px',  // Narrow
    height: '80px', // Tall
    objectFit: 'contain'
}
```

## Object Fit Options

### contain (Recommended)
- **Scales image to fit** within container
- **Maintains aspect ratio**
- **Shows full image** (may have empty space)

```javascript
objectFit: 'contain' // Best for logos
```

### cover
- **Fills entire container**
- **Maintains aspect ratio**
- **May crop image** to fill space

```javascript
objectFit: 'cover' // Good for photos
```

### fill
- **Fills entire container**
- **Ignores aspect ratio**
- **May stretch/distort image**

```javascript
objectFit: 'fill' // Can distort image
```

## Complete Examples

### Logo Scaling Examples

```javascript
// Tiny logo (good for icons)
logo: {
    type: 'image',
    image: {
        src: 'assets/images/icon.png',
        width: '24px',
        height: '24px',
        objectFit: 'contain'
    }
}

// Small logo
logo: {
    type: 'image',
    image: {
        src: 'assets/images/logo.png',
        width: '40px',
        height: '40px',
        objectFit: 'contain'
    }
}

// Medium logo (default size)
logo: {
    type: 'image',
    image: {
        src: 'assets/images/logo.png',
        width: '64px',
        height: '64px',
        objectFit: 'contain'
    }
}

// Large logo (prominent display)
logo: {
    type: 'image',
    image: {
        src: 'assets/images/logo.png',
        width: '80px',
        height: '80px',
        objectFit: 'contain'
    }
}

// Extra large logo (maximum impact)
logo: {
    type: 'image',
    image: {
        src: 'assets/images/logo.png',
        width: '100px',
        height: '100px',
        objectFit: 'contain'
    }
}
```

### Combined Logo Scaling

```javascript
// Small combined logo
logo: {
    type: 'combined',
    combined: {
        imageSrc: 'assets/images/icon.png',
        imageWidth: '24px',  // Small image
        imageHeight: '24px', // Small image
        textContent: 'Brand',
        textSize: '14px',    // Small text
        textColor: '#FFFFFF',
        spacing: '6px'
    }
}

// Large combined logo
logo: {
    type: 'combined',
    combined: {
        imageSrc: 'assets/images/icon.png',
        imageWidth: '64px',  // Large image
        imageHeight: '64px', // Large image
        textContent: 'BRAND NAME',
        textSize: '24px',    // Large text
        textColor: '#FFFFFF',
        spacing: '12px'
    }
}
```

## Responsive Scaling

### Mobile-Friendly Sizes
```javascript
// Good for mobile
image: {
    width: '32px',  // Not too large for small screens
    height: '32px',
    objectFit: 'contain'
}
```

### Desktop Sizes
```javascript
// Good for desktop
image: {
    width: '64px',  // Visible but not overwhelming
    height: '64px',
    objectFit: 'contain'
}
```

### Large Display Sizes
```javascript
// Good for large screens
image: {
    width: '96px',  // Prominent on big displays
    height: '96px',
    objectFit: 'contain'
}
```

## Best Practices

### 1. Start with contain
Always start with `objectFit: 'contain'` for logos to avoid distortion.

### 2. Test different sizes
Try these common sizes: 24px, 32px, 48px, 64px, 80px, 96px

### 3. Maintain proportions
Keep width and height equal for square containers, or use appropriate ratios.

### 4. Consider context
- Small logos: 24-32px (subtle branding)
- Medium logos: 48-64px (balanced presence)
- Large logos: 80-100px (prominent display)

### 5. Test on different screens
Make sure your chosen size works on both mobile and desktop.

## Common Size Combinations

| Use Case | Size | Description |
|----------|------|-------------|
| Subtle branding | 24px | Small, unobtrusive |
| Standard logo | 48px | Balanced visibility |
| Prominent branding | 64px | Clear and visible |
| Hero display | 80px | Strong presence |
| Maximum impact | 100px+ | Dominant branding |

## Your Current Setup

With your current configuration:
```javascript
logo: {
    type: 'text',
    text: {
        content: '🐼',
        size: '50px',           // Large emoji
        nameTextSize: '50px',   // Large text
        nameTextColor: '#000000' // Black text
    }
}
```

You have a large, prominent text logo with both the emoji and "Betpandaaaaaaaaa" text at 50px, which creates a bold, eye-catching display.

The system is now vertically centered, so no matter how long your text gets, it will stay properly centered in the popup. 