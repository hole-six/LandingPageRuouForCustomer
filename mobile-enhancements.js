// ===== MOBILE ENHANCEMENTS =====

// Mobile menu toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const body = document.body;
  const menuButton = document.querySelector('[onclick*="toggleMobileMenu"]');
  
  console.log('toggleMobileMenu called');
  console.log('menu:', menu);
  console.log('menuButton:', menuButton);
  
  if (menu) {
    const isHidden = menu.classList.contains('hidden');
    console.log('isHidden:', isHidden);
    
    if (isHidden) {
      menu.classList.remove('hidden');
      body.style.overflow = 'hidden';
      // Change icon to close
      if (menuButton) {
        const icon = menuButton.querySelector('span');
        if (icon) {
          icon.textContent = 'close';
          console.log('Icon changed to close');
        }
      }
    } else {
      menu.classList.add('hidden');
      body.style.overflow = '';
      // Change icon back to menu
      if (menuButton) {
        const icon = menuButton.querySelector('span');
        if (icon) {
          icon.textContent = 'menu';
          console.log('Icon changed to menu');
        }
      }
    }
  } else {
    console.log('Menu not found!');
  }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
  const menu = document.getElementById('mobile-menu');
  const menuButton = event.target.closest('[onclick*="toggleMobileMenu"]');
  const isInsideMenu = event.target.closest('#mobile-menu');
  
  if (menu && !isInsideMenu && !menuButton && !menu.classList.contains('hidden')) {
    menu.classList.add('hidden');
    document.body.style.overflow = '';
  }
});

// Enhanced scroll to section with mobile menu close
window.scrollToSection = function(sectionId) {
  // Close mobile menu if open
  const menu = document.getElementById('mobile-menu');
  if (menu && !menu.classList.contains('hidden')) {
    menu.classList.add('hidden');
    document.body.style.overflow = '';
  }
  
  // Navigate if not on home page
  if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
    window.location.href = '/#' + sectionId;
    return;
  }
  
  // Scroll to section
  setTimeout(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const targetPosition = section.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }, 100);
};

// Handle hash on page load
window.addEventListener('load', () => {
  if (window.location.hash) {
    const sectionId = window.location.hash.substring(1);
    setTimeout(() => scrollToSection(sectionId), 300);
  }
});

// Prevent zoom on double tap for iOS
let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
  const now = Date.now();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
  lastTouchEnd = now;
}, false);

// Add touch feedback to buttons
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('button, a');
  
  buttons.forEach(button => {
    button.addEventListener('touchstart', function() {
      this.style.opacity = '0.7';
    });
    
    button.addEventListener('touchend', function() {
      this.style.opacity = '1';
    });
    
    button.addEventListener('touchcancel', function() {
      this.style.opacity = '1';
    });
  });
});

// Lazy load images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      }
    });
  });

  // Observe all images with data-src
  document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
  });
}

// Smooth scroll polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
  const smoothScrollTo = (element, duration = 500) => {
    const targetPosition = element.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = currentTime => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  // Override scrollToSection for older browsers
  const originalScrollToSection = window.scrollToSection;
  window.scrollToSection = function(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      smoothScrollTo(section);
    } else if (originalScrollToSection) {
      originalScrollToSection(sectionId);
    }
  };
}

// Add pull-to-refresh indicator (optional)
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', e => {
  touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

document.addEventListener('touchend', e => {
  touchEndY = e.changedTouches[0].screenY;
  handleSwipe();
}, { passive: true });

function handleSwipe() {
  // Pull down to refresh (only at top of page)
  if (window.scrollY === 0 && touchEndY > touchStartY + 100) {
    // Optional: Add refresh logic here
    console.log('Pull to refresh triggered');
  }
}

// Optimize performance on scroll
let ticking = false;
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  lastScrollY = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      handleScroll(lastScrollY);
      ticking = false;
    });

    ticking = true;
  }
}, { passive: true });

function handleScroll(scrollY) {
  // Add scroll-based effects here
  const header = document.querySelector('header');
  if (header) {
    if (scrollY > 100) {
      header.classList.add('shadow-lg');
    } else {
      header.classList.remove('shadow-lg');
    }
  }
}

// Detect if user is on mobile
window.isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Detect if user is on iOS
window.isIOS = () => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
};

// Add device class to body
document.addEventListener('DOMContentLoaded', () => {
  if (window.isMobile()) {
    document.body.classList.add('is-mobile');
  }
  if (window.isIOS()) {
    document.body.classList.add('is-ios');
  }
});

// Service Worker for offline support (optional)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Uncomment to enable service worker
    // navigator.serviceWorker.register('/sw.js')
    //   .then(registration => console.log('SW registered'))
    //   .catch(err => console.log('SW registration failed'));
  });
}

console.log('Mobile enhancements loaded ✓');
