# 🌐 **Website URL Setup Guide**

## 📋 **Quick Summary**
Your website URL is already configured in the main config file! You just need to update one line in `utils/config.js` to set your domain for both development and production.

---

## 🎯 **1. Setting Your Website URL**

### **Main Configuration File**: `utils/config.js`

```javascript
// ========== MAIN SETTINGS - EDIT THESE LINES ONLY ==========
const SITE_URL = "{{Site URL}}";  // ← CHANGE THIS LINE!
```

### **Examples:**

**🏠 For Development:**
```javascript
const SITE_URL = "http://localhost:3000";  // Local development
// OR
const SITE_URL = "http://127.0.0.1:8080";  // Alternative local
```

**🌍 For Production:**
```javascript
const SITE_URL = "https://myawesomesite.com";  // Your live domain
// OR
const SITE_URL = "https://www.bestreviews2025.com";  // With www
```

---

## 🚀 **2. Choosing Your Domain Name**

### **Domain Name Ideas:**
- **Niche-Based**: `best[niche]reviews.com` (e.g., `bestgaminglaptops.com`)
- **Authority**: `top10[category].com` (e.g., `top10tech.com`)
- **Brand-Based**: `[yourbrand]reviews.com` (e.g., `techexpertreviews.com`)
- **Action-Based**: `find[product].com` (e.g., `findbestlaptops.com`)

### **Domain Tips:**
✅ **Good Practices:**
- Keep it short (under 15 characters)
- Easy to spell and remember
- Include your niche/keyword
- Use `.com` if possible
- Avoid hyphens and numbers

❌ **Avoid:**
- Complex spellings
- Too many words
- Trademark conflicts
- Hard to pronounce names

---

## 🛠 **3. Development vs Production Setup**

### **Method 1: Environment-Based (Recommended)**

Create different configurations for different environments:

```javascript
// In utils/config.js - Smart environment detection
const SITE_URL = (() => {
    // Check if we're in development
    if (window.location.hostname === 'localhost' || 
        window.location.hostname === '127.0.0.1' || 
        window.location.hostname.includes('gitpod') ||
        window.location.hostname.includes('codesandbox')) {
        return window.location.origin; // Use current development URL
    }
    
    // Production URL
    return "https://myawesomesite.com";  // ← Your live domain
})();
```

### **Method 2: Manual Switch (Simple)**

Comment/uncomment based on your current environment:

```javascript
// Development URLs (comment out for production)
// const SITE_URL = "http://localhost:3000";
// const SITE_URL = "http://127.0.0.1:8080";

// Production URL (uncomment for live site)
const SITE_URL = "https://myawesomesite.com";
```

---

## 🔧 **4. Where SITE_URL is Used**

Your `SITE_URL` is automatically used in:

### **SEO & Meta Tags:**
- Canonical URLs
- Open Graph tags
- Twitter Card URLs
- Sitemap generation

### **Analytics & Tracking:**
- Google Analytics domain
- Cookie domain settings
- Form submissions
- Affiliate link tracking

### **Privacy & Legal:**
- Privacy policy content
- Cookie policy references
- Contact information

### **Example Usage:**
```javascript
// Automatically used in templates like:
<link rel="canonical" href="${SITE_URL}/current-page.html">
<meta property="og:url" content="${SITE_URL}/current-page.html">
```

---

## 🌍 **5. Going Live - Deployment Steps**

### **Before Deployment:**

1. **Update config.js:**
   ```javascript
   const SITE_URL = "https://yourdomain.com";  // Your real domain
   ```

2. **Update other URL references:**
   - Newsletter form action URLs
   - Social media links
   - Contact form endpoints
   - Analytics tracking codes

### **Deployment Platforms:**

#### **🔴 Netlify (Recommended for Static Sites):**
1. Connect your GitHub repo
2. Set build command: `npm run build` (if needed)
3. Set publish directory: `./` (root folder)
4. Custom domain: Add your domain in Netlify settings

#### **🟢 Vercel:**
1. Import your GitHub project
2. No build command needed for static sites
3. Add custom domain in project settings

#### **🔵 GitHub Pages:**
1. Go to repository Settings → Pages
2. Select source: Deploy from branch
3. Choose `main` branch, `/ (root)` folder
4. Custom domain: Add CNAME file with your domain

#### **🟡 Traditional Hosting:**
1. Upload files via FTP/cPanel
2. Point domain to hosting folder
3. Update DNS records

---

## ⚙️ **6. Additional Configuration**

### **Update Brand Config:**
```javascript
// In utils/brand-config.js
const BRAND_CONFIG = {
    navigation: {
        homeUrl: "./home.html"  // Relative path (recommended)
        // OR absolute: https://yourdomain.com/home.html
    }
}
```

### **Update Social Links:**
```javascript
// In utils/menu-config.js
social: [
    {
        name: "Twitter",
        icon: "🐦",
        url: "https://twitter.com/yourusername",  // ← Update these
    },
    // ... other social links
]
```

---

## 🔍 **7. Testing Your Setup**

### **Development Testing:**
```bash
# Start local server
python -m http.server 8080
# OR
npx live-server
# OR
php -S localhost:8000
```

### **Production Testing:**
1. Check all links work correctly
2. Verify meta tags show correct URLs
3. Test forms and analytics
4. Check mobile responsiveness
5. Validate SSL certificate

---

## 🎯 **8. Environment Variables (Advanced)**

For more complex setups, you can use environment variables:

```javascript
// utils/config.js
const SITE_URL = process.env.NODE_ENV === 'production' 
    ? "https://myawesomesite.com"  // Production
    : "http://localhost:3000";      // Development
```

---

## 🆘 **Troubleshooting**

### **Common Issues:**

❌ **Links not working after deployment:**
- Check all relative paths (`./` vs `/`)
- Verify domain DNS settings
- Check case sensitivity

❌ **Analytics not tracking:**
- Update tracking codes with new domain
- Check CORS settings
- Verify SITE_URL is correct

❌ **Forms not submitting:**
- Update form action URLs
- Check API endpoints
- Verify HTTPS/HTTP consistency

---

## ✅ **Quick Checklist**

Before going live:
- [ ] Updated `SITE_URL` in `utils/config.js`
- [ ] Updated contact email
- [ ] Updated social media links
- [ ] Updated analytics tracking codes
- [ ] Updated form submission URLs
- [ ] Tested all pages and links
- [ ] Verified mobile responsiveness
- [ ] Checked SEO meta tags
- [ ] Set up SSL certificate
- [ ] Configured domain DNS

---

## 💡 **Pro Tips**

1. **Use HTTPS**: Always use `https://` for production
2. **Test First**: Test on a subdomain before main domain
3. **Backup**: Keep a backup of working configuration
4. **Monitor**: Set up uptime monitoring
5. **Analytics**: Install Google Analytics/Search Console

---

**🎉 That's it! Your website URL system is designed to be simple and flexible for both development and production environments.** 