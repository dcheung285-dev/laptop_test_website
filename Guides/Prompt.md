You are configuring a static “Top 10” affiliate website template to a NEW NICHE.

Fill in every text field and phrase so the site reads natively for the new topic, but DO NOT change or invent image/video paths. If a field is an image/video URL, leave it as-is or add a short TODO comment.

Niche inputs (set these first):
- {NICHE}: e.g., “Gaming Chairs”
- {PRODUCT_TYPE}: e.g., “chair”
- {AUDIENCE}: e.g., “PC gamers and streamers”
- {BRAND_NAME}: e.g., “Chair Scout”
- {KEYWORDS}: comma-separated list for SEO/search (top high-intent terms)
- {CTA_TEXT}: e.g., “See Best Deals”
- {TOPICS}: short list of core topics for blog/podcast/streaming sections
- {CONTACT_EMAIL}: eg. contact@yoursite.com"

Golden rules:
- Update TEXT ONLY. Leave image/video paths untouched (I will replace assets later).
- Keep structure and indentation unchanged.
- Replace all “laptop(s)” phrasing with the new {NICHE}/{PRODUCT_TYPE} equivalents.
- Use consistent capitalization and terminology site-wide.
- Prefer action language for CTAs and benefit-led copy.
- Include legal/ethical statements that fit {NICHE} when applicable.
- icons also needs updating

Order and scope:
1) Configurations/config.js (complete this first; main/global configuration)
   - Update site-wide nouns, SEO text, keywords, CTA defaults, section titles.
   - Replace any copy mentioning “laptops/gaming laptops” with {NICHE}/{PRODUCT_TYPE_PLURAL}.
   - Update:
     - INDEX_PAGE_TITLE
     - REVIEW_COUNT
     - USER_COUNT
     - LAST_UPDATE
     - NUMBER_TESTED

     - EDITORS_CHOICE_CONFIG
     - description
     - rating
     - reviewCount

     - Universal template fields

     - rank
     - description
     - boxInfo

     - features
     - fullReview
     - perks
     - specifications
    


     title, tagline, description, default CTA text
     display names, synonyms, emojis/icons, category labels.
     - PRODUCTS_CONFIG (text parts only): category labels, rank badges (“Best Overall”, “Best Value” etc.), feature bullets, benefit wording, pros/cons labels, pricing text placeholders, CTA button text (“Buy Now”, “Read Review”).
     product1 - product10
     name
     description
     rank
     rankBadge
     rating
     reviewCount

     Universal Template Fields

     ctaText
     cta: {
        title
        description
        boxInfo
     }

     features
     fullReview
     perks
     specifications

     - SECTION titles: Top Pick, Top 10 list, Reviews, Comparison, Newsletter, etc.
     - SECTION_TITLES
     perks: {
        title: 
        icon:    
        color:      
    },
    specs: {
        title: 
        icon: '
        color: 
    }, 
    features: {
        title: 
        icon:   
        color:
    },
    reviews: {
        title: 
        icon: 
    }

    comparisonSection: 
        title:

    sectionTitles: 
            perks: {
                icon: 
                color: 
            },
            features: {
                icon: 
                color: 
            },
            specs: {
                icon: 
                color: 
            }   

    TEMPLATE_TYPE  

     - SEO meta defaults and JSON-LD text fragments.
     - TRACKING_CONFIG: keep IDs; no text change unless it mentions niche in event names.
   - Do not add/remove fields; only edit text values. However can you add more paragraphs or sentences or wordsets etc if required

2) Configurations/brand-config.js
   - {BRAND_NAME} (site brand), tagline, short description
   - Leave logo paths; only fix text.

3) Configurations/animated-banner-config.js
   - ANIMATED_BANNER_CONFIG
   
    content:                                    
    brandText:
    textColor: 

    textContent: 

    animatedText:
        // Word sets - each array is one sequence (can have 1, 2, or 3+ words)
        wordSets:

    styling:
        color: '#000000',

    ctaButton: 
        styling:

   - CTA label(s), button text, word sets/rotating phrases to {NICHE}.
   - Leave media.

4) Configurations/popup-config.js
   - Update headline, body copy, value proposition, bullets, CTA(s).
   - Pick color tokens that fit {Niche} (use existing variable names or colours of your choice).
   - Product/Brand info
   - Main content
   - additional info text
   - cta
   - closeButton
   - Leave images.

5) Configurations/auto-slider-config.js
   - SKIP leave media settings and sources for manual handling.

6) Configurations/blog-config.js
   - Blog hero title/subtitle/excerpt boilerplates to {NICHE}.
   - BLOG_CTA_BANNER  
   - BLOG_POSTS - post1 - post6
   post: {
        title: 
        excerpt: 

        date: 
        category: 
        categoryColor: 
        link: 
        badges: [
            { text: "", type: "" },
            { text: "", type: "" }
        ],
        ctaText: 
        ctaMessage: 
    },

   - Category names (Guides, Reviews, News…), intro blurbs, “view all” text.

7) Configurations/blogpost1-config.js
8) Configurations/blogpost2-config.js
9) Configurations/blogpost3-config.js
   - For blogpost config files: 
   - each: title, subtitle, meta description, slugs (if text), author line, category, tags, intro/outro, CTA, table of contents labels, headings, captions PLACEHOLDER text (leave images).
   - BLOGPOST_META
   - ARTICLE_CONTENT - tableOfContents, sections (id: ,title: ,content: ), etc
   - CTA_CONTENT
   - RELATED_POSTS

10) Configurations/contact-faq-config.js
    - Update contact intro, support promises, response time phrasing to {NICHE}.
    - FAQ questions/answers: reword to the new domain (returns, fit/compatibility, choosing {PRODUCT_TYPE}, warranty).
    - Social section: keep links; adjust descriptive text to {AUDIENCE}.
    - CONTACT_PAGE_TITLE
    - CONTACT_HERO
    - CONTACT_FORM
    - CONTACT_CTA_BOX
    
11) Configurations/home-config.js
    - Hero copy: headline, subheadline, trust indicators, CTA copy.
    - Top Pick texts (benefits and summary), badge texts, feature bullets.
    - Section titles/subtitles across the home page.
    - HOME_PAGE_TITLE
    - HOME_CONFIG - hero, scrollSections, videoSections, adSections, cryptoAnimations, interactiveElements

12) Configurations/podcast-config.js
    - Show title/description, episode category names, CTA copy, “where to listen” text.
    - Keep audio assets; reword summaries
    - PODCAST_PAGE_TITLE
    - PODCAST_HERO
    - PODCAST_CATEGORIES
    - FEATURED_EPISODES
    
13) Configurations/streaming-config.js
    - Hero subtitle/description, platform descriptions (Twitch/YouTube/X) to {AUDIENCE}.
    - Category names/descriptions; tag lists for streams aligned with {NICHE} and icnos and color and viewerCount etc
    - Platform titles and small blurbs (e.g., “Best for live reviews”).
    - STREAMING_PAGE_TITLE
    - STREAMING_HERO
    - STREAMING_CATEGORIES
    - FEATURED_CONTENT_VIDEOS
    - TOP_STREAMING_CATEGORIES
    - title: ,description: ,streamer: ,viewers: ,category: , tags, etc
    - Leave thumbnails/URLs unless purely text.

14) Configurations/footer-loader.js
    - Footer column titles, about text, link labels, short legal summary to {NICHE} wording.

16) All of these HTML files:
    - Blog.html
    - blogpost1.html
    - blogpost2.html
    - blogpost3.html
    - home.html
    - index.html
    -podcast.html
    - streaming.html
    All needs the meta content to be changed to the niche chosen and not use placeholders 
    In all HTML pages we need to make sure that the correct niche is being used 
    for all meta data can be checked by putting link in Slack to yourself and it will show you the link preview

15) Configurations/menu-config.js (DO SECOND LAST)
    - Full-screen menu headings, section blurbs, social block heading; short CTA lines.
    - MENU_CONFIG - promotional, ctaButton, reviewButton, columns, links, titles, text, urls, descriptions, etc

16) Configurations/search-config.js (DO LAST)
    - Update searchable titles, synonyms, keywords, and quick links to match new sections/posts.
    - Update category/type tags so search results map correctly.
    - Keep URLs that are anchors (e.g., index sections) but rename display text.
    - SEARCH_DATABASE
    - products
    - blog
    - streaming
    - podcast
    - faq
    - deals
    - features
    - categories
    - pages

Quality bar / acceptance:
- No “laptop(s) OR old niche” remain anywhere in text.
- Section and CTA copy consistently use {NICHE}/{PRODUCT_TYPE}.
- No broken assets introduced (we changed text only).
- Search returns sensible suggestions matching the new sections.

Deliverables:
- For each file, output only edited text values (no structural edits)
- At the end, list any TODOs for me to update images/paths.

-----------------------------------------------------------------------------------------------------------------------

Optionals:

1) Configurations/privacy-config.js (optional)
    - Update any niche references; keep structure/legal tone.

2) Configurations/disclaimer-config.js (optional)
    - Update to explain affiliate relationships in the context of {NICHE}.

3) Configurations/cookies-config.js (optional)
    - Update any niche terms in human-readable sections.    

4) Configurations/newsletter-config.js (optional)
    - Title/subtitle/benefits and CTA copy to the new {NICHE};

5) Configurations/theme-config.js (optional)
    - Only change GLOBAL_THEME if needed; do not overhaul palettes here.    

------------------------------------------------------------------------------------------------------------------------

Manual tasks:

1) change all images and videos on all config pages
2) make sure the meta on all the html pages have been updated
3) adjust where needed
4) set up different gsheets for different websites - 1 gsheet file per website - as many sheets as required (1 - tracking, 2 - email addresses storage (or have it on mailchip or something like that), 3 - contact form data)
5) attach notifications using slack bot or emails or both? already attached to test version atm
slack connection url https://api.slack.com/apps?