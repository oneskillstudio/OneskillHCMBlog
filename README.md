# OneSkill Studio - Oracle Fusion HCM Knowledge Base

Professional Oracle Fusion HCM blog with deep technical guides and functional expertise for enterprise implementations.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-Active-brightgreen)

## 🎯 About

OneSkill Studio is a comprehensive knowledge base dedicated to Oracle Fusion HCM professionals. We provide:

- **Technical Guides** - Fast Formula, HDL, HCM Extract, BI Publisher, OTBI
- **Functional Configuration** - Core HR, Payroll, Absence, Benefits, Time & Labor
- **Implementation Best Practices** - Real-world solutions and patterns
- **Tutorials & Training** - Step-by-step guides for professionals
- **Expert Insights** - Deep dives from 10+ years of implementation experience

## 📝 Featured Articles

### 1. Fast Formula Architecture & Design Patterns
Master the fundamentals of Fast Formula development including types, entry points, database items, and design patterns.
- **Category:** Technical
- **Read Time:** 18 minutes
- **Link:** [Read Full Article](blog-001.html)

### 2. Core HR Configuration & Implementation Guide
Complete step-by-step guide to configuring Core HR module in Oracle Fusion HCM.
- **Category:** Functional
- **Read Time:** 22 minutes
- **Link:** [Read Full Article](blog-002.html)

### 3. HCM Extract & BIE Development Guide
Learn how to create custom HCM extracts using Business Information Exchange tool.
- **Category:** Technical
- **Read Time:** 20 minutes
- **Link:** [Read Full Article](blog-003.html)

### 4. Time & Labor Essentials: Setup & Configuration
Comprehensive guide to Time & Labor module including time entry rules and compliance.
- **Category:** Functional
- **Read Time:** 19 minutes
- **Link:** [Read Full Article](blog-004.html)

## 🚀 Quick Start

### View Locally

1. Clone the repository:
```bash
git clone https://github.com/yourusername/oneskill-hcm-blog.git
cd oneskill-hcm-blog
```

2. Open `index.html` in your browser:
```bash
open index.html
# or
firefox index.html
```

3. Navigate through the site using the menu

### Deploy to Cloudflare Pages

1. Push to GitHub (if not already done):
```bash
git add .
git commit -m "Initial commit: website with 4 blog posts"
git push -u origin main
```

2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)

3. Select **Pages** and click **Create a project**

4. Connect your GitHub repository:
   - Click **Connect to Git**
   - Authorize Cloudflare
   - Select `oneskill-hcm-blog` repository
   - Click **Begin setup**

5. Configure build settings:
   - **Framework:** None (static files)
   - **Build command:** (leave empty)
   - **Build output directory:** (leave empty)
   - Click **Save and Deploy**

6. Your site will be live at: `https://yourusername-oneskill-hcm-blog.pages.dev/`

### Custom Domain (Optional)

1. In Cloudflare Pages, click **Custom domains**
2. Enter your domain (e.g., oneskillhcm.com)
3. Follow DNS configuration instructions
4. Update nameservers at your domain registrar

## 📁 Repository Structure

```
oneskill-hcm-blog/
├── index.html                          # Home page
├── blog-001.html                       # Blog post 1
├── blog-002.html                       # Blog post 2
├── blog-003.html                       # Blog post 3
├── blog-004.html                       # Blog post 4
├── about.html                          # About page
├── blog.html                           # Blog list page
├── css/
│   └── styles.css                      # Global styles
├── js/
│   └── script.js                       # Global scripts
├── images/
│   ├── featured/                       # Featured post images
│   │   ├── 001-fast-formula.jpg        # Post 1 featured image
│   │   ├── 002-core-hr.jpg             # Post 2 featured image
│   │   ├── 003-hcm-extract.jpg         # Post 3 featured image
│   │   └── 004-time-labor.jpg          # Post 4 featured image
│   ├── authors/
│   │   └── vaibhav-chavan.jpg          # Author photo
│   └── content/                        # Content images
│       ├── 001-fast-formula/
│       ├── 002-core-hr/
│       ├── 003-hcm-extract/
│       └── 004-time-labor/
├── posts/                              # Markdown source files
│   ├── 001-fast-formula-architecture.md
│   ├── 002-core-hr-configuration.md
│   ├── 003-hcm-extract-bie-guide.md
│   └── 004-time-labor-essentials.md
├── README.md                           # This file
├── .gitignore                          # Git ignore rules
└── GITHUB-SETUP-GUIDE.md               # GitHub setup instructions
```

## 🖼️ Adding Images

### Featured Images
1. Save image to `images/featured/`
2. Name format: `001-fast-formula.jpg`, `002-core-hr.jpg`, etc.
3. Reference in HTML:
```html
<img src="images/featured/001-fast-formula.jpg" alt="Fast Formula Architecture">
```

### Author Photo
1. Save to `images/authors/vaibhav-chavan.jpg`
2. Replace with your photo
3. Used in sidebar author section

### Content Images
1. Create folder: `images/content/001-fast-formula/`
2. Add images: `diagram-1.jpg`, `screenshot-2.jpg`, etc.
3. Reference in HTML:
```html
<img src="images/content/001-fast-formula/diagram-1.jpg" alt="Description">
```

## 🔧 Configuration

### Update Author Information

1. Edit `about.html` to update:
   - Author name
   - Author bio
   - Years of experience
   - Number of implementations
   - Expertise areas
   - Social links
   - Contact information

2. Update sidebar in `index.html`:
   - Author name
   - Author bio excerpt
   - Profile photo

### Update Social Links

In footer (all HTML pages):
```html
<a href="https://linkedin.com/in/yourname" target="_blank" class="social-icon">in</a>
<a href="https://twitter.com/yourhandle" target="_blank" class="social-icon">𝕏</a>
<a href="mailto:your@email.com" class="social-icon">✉</a>
```

### Update Navigation Links

In header (all HTML pages):
```html
<a href="index.html">Home</a>
<a href="blog.html">Blog</a>
<a href="technical.html">Technical</a>
<a href="functional.html">Functional</a>
<a href="about.html">About</a>
```

## 📝 Adding New Articles

### Step 1: Create Markdown File

Create `posts/005-new-article.md`:
```markdown
---
title: "Article Title Here"
date: 2024-12-20
author: "Your Name"
category: "Technical"  # or "Functional"
tags: ["Tag1", "Tag2", "Tag3"]
description: "Brief description of the article"
image: "images/featured/005-new-article.jpg"
read_time: 20
draft: false
---

# Article Title

Your content here...

## Section 1
Content...
```

### Step 2: Create HTML Page

Create `blog-005.html` with blog post template:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Article Title - OneSkill Studio</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <!-- Header (copy from index.html) -->
  <!-- Main content (convert markdown to HTML) -->
  <!-- Sidebar -->
  <!-- Footer (copy from index.html) -->
  <script src="js/script.js"></script>
</body>
</html>
```

### Step 3: Update Blog List

Add to `blog.html`:
```html
<article class="featured-card">
  <div class="featured-image">
    <img src="images/featured/005-new-article.jpg" alt="Article Title">
  </div>
  <div class="featured-content">
    <span class="featured-category">Technical</span>
    <h3>Article Title</h3>
    <p>Brief description here...</p>
    <div class="featured-meta">
      <span>Dec 20, 2024</span>
      <a href="blog-005.html" class="read-more">Read →</a>
    </div>
  </div>
</article>
```

### Step 4: Update Home Page

Update featured articles section in `index.html` with new article card

### Step 5: Commit and Push

```bash
git add posts/ blog-005.html images/featured/005-new-article.jpg
git commit -m "Add new article: Article Title"
git push
```

## 🎨 Customization

### Colors

Edit CSS variables in `styles.css`:
```css
:root {
  --primary: #003B66;           /* Deep Oracle Blue */
  --primary-light: #E8F2F8;     /* Light Blue background */
  --accent: #0091B8;            /* Oracle Teal */
  --accent-light: #D0E8F2;      /* Light Teal */
  /* ... more colors ... */
}
```

### Fonts

Update font-family in `styles.css`:
```css
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
}
```

### Layout

Modify `grid-template-columns` in `styles.css` to adjust sidebar width or content area.

## 📊 Analytics

To add Google Analytics:

1. Create Google Analytics account
2. Get your tracking ID
3. Add to `<head>` of all pages:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## 🔒 SEO & Meta Tags

### Update for Each Page

```html
<title>Page Title - OneSkill Studio</title>
<meta name="description" content="Page description for search engines">
<meta name="keywords" content="keyword1, keyword2, keyword3">
<meta name="author" content="Vaibhav Chavan">
```

### Meta Tags for Blog Posts

```html
<meta property="og:title" content="Article Title">
<meta property="og:description" content="Article description">
<meta property="og:image" content="https://domain.com/images/featured/001.jpg">
<meta property="og:url" content="https://domain.com/blog-001.html">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:creator" content="@yourhandle">
```

## 🚀 Performance

### Optimize Images

```bash
# Using ImageMagick
convert image.jpg -quality 80 -resize 1200x630 optimized.jpg

# Using online tools
# https://tinypng.com/
# https://imageoptim.com/
```

### Minify CSS & JS (Optional)

```bash
# Minify CSS
npm install -g csso-cli
csso styles.css -o styles.min.css

# Minify JS
npm install -g uglify-js
uglifyjs script.js -o script.min.js
```

Then update HTML to reference minified files.

## 🤝 Contributing

To contribute articles:

1. Fork the repository
2. Create a feature branch: `git checkout -b article/new-article`
3. Create markdown file in `posts/`
4. Create HTML page
5. Commit: `git commit -m "Add article: Title"`
6. Push: `git push origin article/new-article`
7. Create Pull Request

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## ✉️ Contact

- **Author:** Vaibhav Chavan
- **Email:** vaibhav@oneskillstudio.com
- **LinkedIn:** [linkedin.com/in/vaibhav-chavan](#)
- **Twitter:** [@oneskill](#)
- **Website:** [oneskillstudio.com](#)

## 🙏 Acknowledgments

- Oracle Fusion HCM Community
- All readers and supporters
- Open source community

## 📞 Support

For questions or issues:

1. Check existing [GitHub Issues](../../issues)
2. Create new issue with details
3. Email: vaibhav@oneskillstudio.com

## 🗺️ Roadmap

- [ ] Add more featured articles
- [ ] Create category pages (Technical, Functional)
- [ ] Add search functionality
- [ ] Implement comments system
- [ ] Add newsletter signup
- [ ] Create video tutorials
- [ ] Add downloadable resources
- [ ] Implement dark mode

---

**Made with ❤️ for the HCM Community**

Last Updated: December 2024
