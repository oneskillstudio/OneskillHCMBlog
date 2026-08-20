// ============================================================================
// ONESKILL STUDIO - DYNAMIC BLOG SYSTEM
// Loads posts from /posts/*.md files and renders dynamically
// ============================================================================

(function() {
  'use strict';

  // =========================================================================
  // CONFIGURATION
  // =========================================================================
  
  const config = {
    postsFolder: '/posts/',
    postsExt: '.md',
    featuredCount: 6,
    recentPostsCount: 3,
    currentPage: getCurrentPage(),
  };

  // =========================================================================
  // UTILITIES
  // =========================================================================

  function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('technical')) return 'technical';
    if (path.includes('functional')) return 'functional';
    if (path.includes('trainings')) return 'trainings';
    if (path.includes('blog')) return 'blog';
    return 'home';
  }

  // =========================================================================
  // POST METADATA (Define all posts here)
  // =========================================================================

  const postsMetadata = [
    {
      file: '001-fast-formula-architecture.md',
      title: 'Fast Formula Architecture & Design Patterns',
      date: '2024-12-15',
      author: 'Vaibhav Chavan',
      category: 'Technical',
      tags: ['Fast Formula', 'Technical', 'Oracle Fusion', 'HCM', 'Development'],
      description: 'Master the fundamentals of Fast Formula development including types, entry points, database items, and design patterns.',
      image: '001-fast-formula.jpg',
      readTime: 18,
      draft: false,
      slug: 'fast-formula-architecture'
    },
    {
      file: '002-core-hr-configuration.md',
      title: 'Core HR Configuration & Implementation',
      date: '2024-12-10',
      author: 'Vaibhav Chavan',
      category: 'Functional',
      tags: ['Core HR', 'Configuration', 'Implementation', 'Oracle Fusion', 'HCM'],
      description: 'Complete guide to setting up Core HR including persons, assignments, organizations, and positions.',
      image: '002-core-hr.jpg',
      readTime: 22,
      draft: false,
      slug: 'core-hr-configuration'
    },
    {
      file: '003-hcm-extract-bie-guide.md',
      title: 'HCM Extract & BIE Development Guide',
      date: '2024-12-05',
      author: 'Vaibhav Chavan',
      category: 'Technical',
      tags: ['HCM Extract', 'BIE', 'Data Integration', 'Oracle Fusion', 'Technical'],
      description: 'Create custom HCM extracts using BIE tool for advanced reporting and data integration.',
      image: '003-hcm-extract.jpg',
      readTime: 20,
      draft: false,
      slug: 'hcm-extract-bie'
    },
    {
      file: '004-time-labor-essentials.md',
      title: 'Time & Labor Essentials: Setup & Configuration',
      date: '2024-11-28',
      author: 'Vaibhav Chavan',
      category: 'Functional',
      tags: ['Time & Labor', 'Configuration', 'Oracle Fusion', 'HCM', 'Payroll'],
      description: 'Setup and configure Time & Labor including daily schedules, time entry rules, and labor distribution.',
      image: '004-time-labor.jpg',
      readTime: 19,
      draft: false,
      slug: 'time-labor-essentials'
    }
  ];

  // =========================================================================
  // POST LOADING & PARSING
  // =========================================================================

  async function loadPost(filename) {
    try {
      const response = await fetch(`${config.postsFolder}${filename}`);
      if (!response.ok) throw new Error(`Failed to load ${filename}`);
      return await response.text();
    } catch (error) {
      console.error('Error loading post:', error);
      return null;
    }
  }

  function parseMarkdownWithFrontmatter(content) {
    // Match front matter: ---\n...metadata...\n---
    const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const match = content.match(frontmatterRegex);

    if (!match) {
      return { frontmatter: {}, content: content };
    }

    const [, frontmatterStr, bodyContent] = match;
    const frontmatter = parseFrontmatter(frontmatterStr);

    return {
      frontmatter,
      content: bodyContent
    };
  }

  function parseFrontmatter(str) {
    const data = {};
    const lines = str.split('\n');
    
    for (const line of lines) {
      if (!line.trim()) continue;
      
      const [key, ...valueParts] = line.split(':');
      const keyTrim = key.trim();
      const value = valueParts.join(':').trim();

      // Parse different data types
      if (value.startsWith('[') && value.endsWith(']')) {
        // Array
        data[keyTrim] = value.slice(1, -1).split(',').map(v => v.trim().replace(/"/g, ''));
      } else if (value === 'true' || value === 'false') {
        // Boolean
        data[keyTrim] = value === 'true';
      } else if (!isNaN(value) && value !== '') {
        // Number
        data[keyTrim] = parseInt(value);
      } else {
        // String
        data[keyTrim] = value.replace(/"/g, '').replace(/'/g, '');
      }
    }

    return data;
  }

  // =========================================================================
  // MARKDOWN TO HTML CONVERSION
  // =========================================================================

  function markdownToHtml(markdown) {
    let html = markdown;

    // Headers
    html = html.replace(/^### (.*?)$/gm, '<h3>$1</h3>');
    html = html.replace(/^## (.*?)$/gm, '<h2>$1</h2>');
    html = html.replace(/^# (.*?)$/gm, '<h1>$1</h1>');

    // Bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/__(.*?)__/g, '<strong>$1</strong>');

    // Italic
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    html = html.replace(/_(.*?)_/g, '<em>$1</em>');

    // Links
    html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

    // Code blocks
    html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');

    // Inline code
    html = html.replace(/`([^`]*)`/g, '<code>$1</code>');

    // Blockquote
    html = html.replace(/^> (.*?)$/gm, '<blockquote>$1</blockquote>');

    // Line breaks
    html = html.split('\n\n').map(paragraph => {
      if (paragraph.startsWith('<') || paragraph.startsWith('|')) {
        return paragraph;
      }
      return `<p>${paragraph}</p>`;
    }).join('\n');

    // Unordered lists
    html = html.replace(/^\* (.*?)$/gm, '<li>$1</li>');
    html = html.replace(/(\<li\>.*?\<\/li\>)/s, '<ul>$1</ul>');

    // Ordered lists
    html = html.replace(/^\d+\. (.*?)$/gm, '<li>$1</li>');

    // Tables (basic support)
    html = html.replace(/^\|.*\|$/gm, (match) => {
      const rows = match.split('\n').filter(r => r.trim());
      const tableHtml = rows.map(row => {
        const cells = row.split('|').filter(c => c.trim()).map(c => `<td>${c.trim()}</td>`).join('');
        return `<tr>${cells}</tr>`;
      }).join('');
      return `<table><tr>${rows[0]}</tr></table>`;
    });

    return html;
  }

  // =========================================================================
  // RENDER FUNCTIONS
  // =========================================================================

  function renderFeaturedPost(post, metadata) {
    return `
      <article class="featured-card">
        <div class="featured-image">
          <img src="images/featured/${metadata.image}" alt="${metadata.title}" 
               onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 200%22%3E%3Crect fill=%22%23E8F2F8%22 width=%22400%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 font-size=%2248%22%3E📘%3C/text%3E%3C/svg%3E'">
        </div>
        <div class="featured-content">
          <span class="featured-category">${metadata.category}</span>
          <h3><a href="blog-detail.html?slug=${metadata.slug}">${metadata.title}</a></h3>
          <p>${metadata.description}</p>
          <div class="featured-meta">
            <span>${formatDate(metadata.date)}</span>
            <span>${metadata.readTime} min read</span>
            <a href="blog-detail.html?slug=${metadata.slug}" class="read-more">Read →</a>
          </div>
        </div>
      </article>
    `;
  }

  function renderPostCard(post, metadata) {
    return `
      <div class="blog-post-card">
        <h3><a href="blog-detail.html?slug=${metadata.slug}">${metadata.title}</a></h3>
        <div class="post-meta">
          <span>${formatDate(metadata.date)}</span>
          <span>${metadata.readTime} min</span>
          <span class="badge">${metadata.category}</span>
        </div>
        <p>${metadata.description}</p>
        <a href="blog-detail.html?slug=${metadata.slug}" class="read-more">Read More →</a>
      </div>
    `;
  }

  function renderRecentPostItem(metadata) {
    return `
      <div class="recent-post-item">
        <a href="blog-detail.html?slug=${metadata.slug}">${metadata.title}</a>
        <span class="recent-post-date">${formatDate(metadata.date)}</span>
      </div>
    `;
  }

  // =========================================================================
  // FILTER & SORT FUNCTIONS
  // =========================================================================

  function getPostsByCategory(category) {
    return postsMetadata.filter(post => post.category === category && !post.draft);
  }

  function getAllPosts() {
    return postsMetadata.filter(post => !post.draft).sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  }

  function getFeaturedPosts(count = config.featuredCount) {
    return getAllPosts().slice(0, count);
  }

  function getRecentPosts(count = config.recentPostsCount) {
    return getAllPosts().slice(0, count);
  }

  // =========================================================================
  // PAGE RENDERING
  // =========================================================================

  function renderFeaturedSection() {
    const container = document.querySelector('[data-featured-posts]');
    if (!container) return;

    const featured = getFeaturedPosts();
    container.innerHTML = featured.map(post => renderFeaturedPost(null, post)).join('');
  }

  function renderRecentPostsSidebar() {
    const container = document.querySelector('[data-recent-posts]');
    if (!container) return;

    const recent = getRecentPosts();
    container.innerHTML = recent.map(post => renderRecentPostItem(post)).join('');
  }

  function renderCategoryPage(category) {
    const container = document.querySelector('[data-category-posts]');
    if (!container) return;

    const posts = getPostsByCategory(category);
    container.innerHTML = posts.length > 0 
      ? posts.map(post => renderPostCard(null, post)).join('')
      : '<p>No posts in this category yet.</p>';
  }

  function renderBlogPage() {
    const container = document.querySelector('[data-all-posts]');
    if (!container) return;

    const posts = getAllPosts();
    container.innerHTML = posts.map(post => renderPostCard(null, post)).join('');
  }

  function renderPostDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');
    
    if (!slug) {
      window.location.href = 'blog.html';
      return;
    }

    const metadata = postsMetadata.find(p => p.slug === slug);
    if (!metadata) {
      document.body.innerHTML = '<h1>Post not found</h1>';
      return;
    }

    // Populate post detail page
    document.querySelector('[data-post-title]').textContent = metadata.title;
    document.querySelector('[data-post-date]').textContent = formatDate(metadata.date);
    document.querySelector('[data-post-author]').textContent = metadata.author;
    document.querySelector('[data-post-category]').textContent = metadata.category;
    document.querySelector('[data-post-readtime]').textContent = metadata.readTime;
    document.querySelector('[data-post-description]').textContent = metadata.description;
  }

  // =========================================================================
  // UTILITY FUNCTIONS
  // =========================================================================

  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  // =========================================================================
  // INITIALIZATION
  // =========================================================================

  document.addEventListener('DOMContentLoaded', function() {
    // Render featured posts on home page
    if (config.currentPage === 'home') {
      renderFeaturedSection();
      renderRecentPostsSidebar();
    }

    // Render category pages
    if (config.currentPage === 'technical') {
      renderCategoryPage('Technical');
      renderRecentPostsSidebar();
    }
    if (config.currentPage === 'functional') {
      renderCategoryPage('Functional');
      renderRecentPostsSidebar();
    }
    if (config.currentPage === 'trainings') {
      renderCategoryPage('Training');
      renderRecentPostsSidebar();
    }

    // Render all posts page
    if (config.currentPage === 'blog') {
      renderBlogPage();
      renderRecentPostsSidebar();
    }

    // Hide on scroll header
    setupHeaderScroll();
    
    // Active nav link
    setActiveNavLink();
  });

  function setupHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    let scrollTimeout;
    let lastScrollY = 0;

    window.addEventListener('scroll', function() {
      const scrollY = window.scrollY;

      if (scrollY > 300) {
        if (scrollY < lastScrollY) {
          header.style.transform = 'translateY(0)';
        } else {
          header.style.transform = 'translateY(-100%)';
        }
      }

      lastScrollY = scrollY;
    });
  }

  function setActiveNavLink() {
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav a').forEach(link => {
      const href = link.getAttribute('href');
      if (currentPath.includes(href) || (href === 'index.html' && currentPath === '/')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // =========================================================================
  // EXPORT TO WINDOW
  // =========================================================================

  window.OneSkillStudio = {
    posts: postsMetadata,
    getPostsByCategory,
    getAllPosts,
    getFeaturedPosts,
    getRecentPosts,
    formatDate,
    loadPost,
    parseMarkdownWithFrontmatter,
    markdownToHtml,
  };

})();
