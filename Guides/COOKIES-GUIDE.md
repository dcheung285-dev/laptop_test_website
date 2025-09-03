# 🍪 Cookies Policy Configuration Guide

## Overview
This guide explains how to customize your website's cookies policy page using the configuration system. The cookies policy page is fully dynamic and can be customized without touching any HTML or CSS code.

## 📁 Files Involved
- **`utils/cookies-config.js`** - Main configuration file (edit this)
- **`cookies.html`** - HTML page (don't edit, content is dynamic)
- **`COOKIES-GUIDE.md`** - This guide

## 🎯 Quick Setup (Most Common Changes)

### 1. Update Basic Information
```javascript
// In utils/cookies-config.js

// Change the page title
const COOKIES_PAGE_TITLE = "Cookies Policy | Your Brand Name";

// Update hero section
const COOKIES_HERO = {
    title: "Cookies Policy",
    subtitle: "Your custom description about how you use cookies",
    lastUpdated: "December 15, 2024"  // ← Update this date
};
```

### 2. Enable/Disable Features
```javascript
// In the COOKIES_CONFIG object
styling: {
    showLastUpdated: true,        // ← Show/hide last updated date
    showTableOfContents: true,    // ← Show/hide table of contents
    enableSmoothScrolling: true,  // ← Enable smooth scrolling
    accentColor: "var(--primary-color)" // ← Change accent color
}
```

## 📝 Editing Content Sections

### Section Structure
Each section has this structure:
```javascript
{
    id: "section-id",              // ← Unique identifier (don't change)
    title: "Section Title",        // ← What appears as the heading
    content: `HTML content here`   // ← The actual content
}
```

### Common Customizations

#### 1. Update Specific Cookies Table
```javascript
// Find the "cookies-we-use" section and update the table
content: `
    <div class="cookies-table">
        <table>
            <thead>
                <tr>
                    <th>Cookie Name</th>
                    <th>Purpose</th>
                    <th>Duration</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>your_cookie_name</td>
                    <td>What this cookie does</td>
                    <td>How long it lasts</td>
                    <td>Cookie type</td>
                </tr>
                <!-- Add more rows as needed -->
            </tbody>
        </table>
    </div>
`
```

#### 2. Update Contact Information
```javascript
// In the "contact-us" section
content: `
    <p>If you have any questions about our use of cookies, please contact us:</p>
    
    <div class="contact-info">
        <p><strong>Email:</strong> privacy@yourdomain.com</p>
        <p><strong>Contact Form:</strong> <a href="./contact.html">Use our contact form</a></p>
        <p><strong>Address:</strong> Your Business Address</p>
    </div>
`
```

#### 3. Update Third-Party Services
```javascript
// In the "third-party-cookies" section, update based on what you actually use
content: `
    <h3>Google Analytics</h3>
    <p>We use Google Analytics to analyze website usage...</p>
    
    <h3>Facebook Pixel</h3>
    <p>We use Facebook Pixel for advertising purposes...</p>
    
    <h3>Your Other Services</h3>
    <p>Description of other third-party services you use...</p>
`
```

## 🔧 Advanced Customization

### Adding New Sections
```javascript
// Add to the sections array in COOKIES_CONFIG
{
    id: "your-new-section",
    title: "Your New Section Title",
    content: `
        <p>Your content here...</p>
        <ul>
            <li>Point 1</li>
            <li>Point 2</li>
        </ul>
    `
}
```

### Removing Sections
Simply delete or comment out the section object from the `sections` array.

### Reordering Sections
Change the order of section objects in the `sections` array.

## 🎨 Styling Options

### Available CSS Classes
- `.cookies-table` - For data tables
- `.contact-info` - For highlighted contact information
- Standard HTML tags: `<h3>`, `<p>`, `<ul>`, `<li>`, `<a>`

### Color Customization
```javascript
styling: {
    accentColor: "#your-color-here" // Use hex, rgb, or CSS variables
}
```

## 📋 Content Templates

### Cookie Table Row Template
```html
<tr>
    <td>cookie_name</td>
    <td>Purpose description</td>
    <td>Duration (e.g., "Session", "30 days", "2 years")</td>
    <td>Type (Essential, Analytics, Marketing, Preference)</td>
</tr>
```

### Contact Info Template
```html
<div class="contact-info">
    <p><strong>Email:</strong> your-email@domain.com</p>
    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
    <p><strong>Address:</strong> Your Business Address</p>
</div>
```

### External Link Template
```html
<a href="https://external-site.com" target="_blank" rel="noopener">Link Text</a>
```

## 🚀 Quick Checklist

### Before Publishing:
- [ ] Update last updated date in `COOKIES_HERO`
- [ ] Review all cookie names and purposes in the table
- [ ] Update contact information
- [ ] Remove/add third-party services you actually use
- [ ] Test all external links
- [ ] Verify table of contents works
- [ ] Check mobile responsiveness

### Legal Compliance:
- [ ] Ensure all cookies are listed
- [ ] Provide clear purposes for each cookie
- [ ] Include opt-out instructions
- [ ] Update third-party service descriptions
- [ ] Review with legal team if required

## 💡 Tips and Best Practices

### Content Writing:
1. **Be Clear**: Use simple, jargon-free language
2. **Be Specific**: List actual cookie names and purposes
3. **Be Honest**: Only include services you actually use
4. **Be Updated**: Keep the policy current with your practices

### Legal Considerations:
1. **Jurisdiction**: Consider your local privacy laws
2. **GDPR**: Include EU requirements if applicable
3. **CCPA**: Include California requirements if applicable
4. **Regular Updates**: Review policy quarterly

### Technical Notes:
1. **Dynamic Content**: All content is rendered via JavaScript
2. **Brand Variables**: Use `{{BRAND_NAME}}` and `{{DOMAIN_NAME}}` for automatic replacement
3. **Responsive**: The page automatically adapts to mobile devices
4. **SEO Friendly**: Proper heading structure for search engines

## 🐛 Troubleshooting

### Common Issues:

**Table of Contents not showing:**
- Check `showTableOfContents: true` in styling options
- Ensure sections have unique `id` values

**Content not updating:**
- Clear browser cache
- Check JavaScript console for errors
- Verify `cookies-config.js` is loading

**Styling looks wrong:**
- Check CSS variable names
- Verify HTML structure in content
- Test in different browsers

**Links not working:**
- Use relative paths for internal links (`./contact.html`)
- Add `target="_blank" rel="noopener"` for external links

## 📞 Need Help?

If you need assistance customizing your cookies policy:
1. Check this guide thoroughly
2. Review the default configuration in `utils/cookies-config.js`
3. Look at similar sections in `disclaimer-config.js` or `privacy-config.js`
4. Test changes in a development environment first

## 🔄 Updates and Maintenance

### Regular Tasks:
- **Monthly**: Review cookie table for accuracy
- **Quarterly**: Update last modified date
- **Annually**: Full legal review
- **As Needed**: Add/remove third-party services

### Version Control:
- Keep backups of your customized config
- Document changes made
- Test thoroughly before deploying

---

**Remember**: This cookies policy affects legal compliance. Always review changes with appropriate legal counsel when required for your jurisdiction and business type. 