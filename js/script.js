/* ════════════════════════════════════════════════════════════
   ONESKILL STUDIO - GLOBAL SCRIPTS
   ════════════════════════════════════════════════════════════ */

// ═══════════════════════════════════════════════════════════
// HEADER HIDE ON SCROLL
// ═══════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  let lastScrollTop = 0;
  const header = document.querySelector('.site-header');

  if (header) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > 300) {
        if (scrollTop > lastScrollTop) {
          // Scrolling DOWN
          header.classList.add('hide');
        } else {
          // Scrolling UP
          header.classList.remove('hide');
        }
      } else {
        // Near top
        header.classList.remove('hide');
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
  }
});

// ═══════════════════════════════════════════════════════════
// SET ACTIVE NAV LINK
// ═══════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  const currentLocation = location.pathname;
  const navLinks = document.querySelectorAll('.nav a');

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentLocation ||
        link.getAttribute('href') === currentLocation + 'index.html') {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// ═══════════════════════════════════════════════════════════
// SEARCH FUNCTIONALITY
// ═══════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.querySelector('.search-form');

  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      const searchInput = searchForm.querySelector('input[type="text"]');
      if (searchInput && searchInput.value.trim() === '') {
        e.preventDefault();
        searchInput.focus();
      }
    });
  }
});

// ═══════════════════════════════════════════════════════════
// SMOOTH SCROLL FOR INTERNAL LINKS
// ═══════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// ═══════════════════════════════════════════════════════════
// TABLE OF CONTENTS AUTO-GENERATION (For Blog Posts)
// ═══════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  const tocContainer = document.querySelector('.table-of-contents');

  if (tocContainer) {
    const postContent = document.querySelector('.post-content');
    if (postContent) {
      const headings = postContent.querySelectorAll('h2, h3');
      const toc = document.createElement('ol');

      headings.forEach((heading, index) => {
        // Add ID if not present
        if (!heading.id) {
          heading.id = `heading-${index}`;
        }

        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent;

        // Add indentation for h3
        if (heading.tagName === 'H3') {
          li.style.marginLeft = '2rem';
        }

        li.appendChild(link);
        toc.appendChild(li);
      });

      tocContainer.appendChild(toc);
    }
  }
});

// ═══════════════════════════════════════════════════════════
// CODE BLOCK COPY FUNCTIONALITY
// ═══════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  const codeBlocks = document.querySelectorAll('.post-content pre');

  codeBlocks.forEach((block, index) => {
    // Create copy button
    const button = document.createElement('button');
    button.className = 'copy-button';
    button.innerHTML = '📋 Copy';
    button.style.cssText = `
      position: absolute;
      top: 10px;
      right: 10px;
      padding: 0.5rem 1rem;
      background: var(--accent);
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.85rem;
      font-weight: 600;
    `;

    // Wrap pre in relative container
    block.style.position = 'relative';
    block.parentNode.insertBefore(button, block.nextSibling);
    block.parentNode.style.position = 'relative';
    block.parentNode.insertBefore(button, block.nextSibling);

    // Add click event
    button.addEventListener('click', () => {
      const text = block.textContent;
      navigator.clipboard.writeText(text).then(() => {
        button.innerHTML = '✓ Copied!';
        setTimeout(() => {
          button.innerHTML = '📋 Copy';
        }, 2000);
      });
    });
  });
});

// ═══════════════════════════════════════════════════════════
// LAZY LOADING FOR IMAGES
// ═══════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img[data-src]');

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for older browsers
    images.forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
  }
});

// ═══════════════════════════════════════════════════════════
// ANALYTICS TRACKING (Optional - Replace with your analytics)
// ═══════════════════════════════════════════════════════════

function trackPageView(pageName) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'page_view', {
      'page_title': document.title,
      'page_path': window.location.pathname
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  trackPageView(document.title);
});

// ═══════════════════════════════════════════════════════════
// READING TIME ESTIMATOR
// ═══════════════════════════════════════════════════════════

function calculateReadingTime(text) {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
}

document.addEventListener('DOMContentLoaded', () => {
  const postContent = document.querySelector('.post-content');
  const readingTimeEl = document.querySelector('[data-reading-time]');

  if (postContent && readingTimeEl) {
    const readingTime = calculateReadingTime(postContent.textContent);
    readingTimeEl.textContent = `${readingTime} min read`;
  }
});

// ═══════════════════════════════════════════════════════════
// RELATED POSTS WIDGET
// ═══════════════════════════════════════════════════════════

function getRelatedPosts(currentPostTags, allPosts) {
  // Filter posts that share tags with current post
  return allPosts.filter(post => {
    return post.tags.some(tag => currentPostTags.includes(tag));
  }).slice(0, 3);
}

// ═══════════════════════════════════════════════════════════
// FORM VALIDATION
// ═══════════════════════════════════════════════════════════

function validateForm(formElement) {
  const requiredFields = formElement.querySelectorAll('[required]');
  let isValid = true;

  requiredFields.forEach(field => {
    if (field.value.trim() === '') {
      field.style.borderColor = 'red';
      isValid = false;
    } else {
      field.style.borderColor = '';
    }
  });

  return isValid;
}

// ═══════════════════════════════════════════════════════════
// COMMENT FORM (If enabled)
// ═══════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  const commentForm = document.querySelector('.comment-form');

  if (commentForm) {
    commentForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!validateForm(commentForm)) {
        alert('Please fill in all required fields');
        return;
      }

      // Send form data
      const formData = new FormData(commentForm);
      fetch('/api/comments', {
        method: 'POST',
        body: formData
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            alert('Comment submitted successfully!');
            commentForm.reset();
          } else {
            alert('Error submitting comment. Please try again.');
          }
        })
        .catch(error => {
          console.error('Error:', error);
          alert('Error submitting comment. Please try again.');
        });
    });
  }
});

// ═══════════════════════════════════════════════════════════
// DARK MODE TOGGLE (Optional)
// ═══════════════════════════════════════════════════════════

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

document.addEventListener('DOMContentLoaded', () => {
  // Check if user previously enabled dark mode
  const darkMode = localStorage.getItem('darkMode') === 'true';
  if (darkMode) {
    document.body.classList.add('dark-mode');
  }

  // Set up dark mode toggle button (if it exists)
  const darkModeToggle = document.querySelector('[data-toggle-dark-mode]');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
  }
});

// ═══════════════════════════════════════════════════════════
// UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════

// Format date
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

// Truncate text
function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
}

// Get URL parameters
function getUrlParameter(name) {
  const url = new URLSearchParams(window.location.search);
  return url.get(name);
}

// Scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Export functions for use in other scripts
window.OneSkillStudio = {
  formatDate,
  truncateText,
  getUrlParameter,
  scrollToTop,
  calculateReadingTime,
  validateForm
};
