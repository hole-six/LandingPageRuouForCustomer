// ===== MOBILE ENHANCEMENTS =====
console.log('🚀 Mobile enhancements script loading...');

// Mobile menu toggle - Works for both index.html and lienhe.html
window.toggleMobileMenu = function() {
  console.log('🔘 toggleMobileMenu() called');
  
  // Try both possible menu IDs
  const menu = document.getElementById('mobile-menu') || document.getElementById('mobile-nav');
  const menuButton = document.querySelector('button[onclick*="toggleMobileMenu"]');
  
  console.log('📱 Menu element:', menu);
  console.log('🔘 Button element:', menuButton);
  
  if (!menu) {
    console.error('❌ Mobile menu not found! Looking for #mobile-menu or #mobile-nav');
    console.log('Available elements with id:', document.querySelectorAll('[id]'));
    return;
  }
  
  const isHidden = menu.classList.contains('hidden');
  console.log('👁️ Menu is currently hidden:', isHidden);
  console.log('📋 Menu classes:', menu.classList.toString());
  
  if (isHidden) {
    // Open menu
    console.log('✅ Opening menu...');
    menu.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    console.log('📋 Menu classes after open:', menu.classList.toString());
    
    // Change icon to close
    if (menuButton) {
      const icon = menuButton.querySelector('span');
      if (icon) {
        console.log('🔄 Changing icon from', icon.textContent, 'to close');
        icon.textContent = 'close';
      } else {
        console.warn('⚠️ Icon span not found in button');
      }
    } else {
      console.warn('⚠️ Menu button not found');
    }
  } else {
    // Close menu
    console.log('❌ Closing menu...');
    menu.classList.add('hidden');
    document.body.style.overflow = '';
    console.log('📋 Menu classes after close:', menu.classList.toString());
    
    // Change icon back to menu
    if (menuButton) {
      const icon = menuButton.querySelector('span');
      if (icon) {
        console.log('🔄 Changing icon from', icon.textContent, 'to menu');
        icon.textContent = 'menu';
      }
    }
  }
  
  console.log('✨ toggleMobileMenu() completed');
};

console.log('✅ toggleMobileMenu function defined on window object');
console.log('🔍 Testing if function is accessible:', typeof window.toggleMobileMenu);

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
  const menu = document.getElementById('mobile-menu') || document.getElementById('mobile-nav');
  const menuButton = event.target.closest('button[onclick*="toggleMobileMenu"]');
  const isInsideMenu = event.target.closest('#mobile-menu') || event.target.closest('#mobile-nav');
  
  if (menu && !isInsideMenu && !menuButton && !menu.classList.contains('hidden')) {
    console.log('🖱️ Click outside detected, closing menu');
    menu.classList.add('hidden');
    document.body.style.overflow = '';
    
    // Reset icon
    const btn = document.querySelector('button[onclick*="toggleMobileMenu"]');
    if (btn) {
      const icon = btn.querySelector('span');
      if (icon) icon.textContent = 'menu';
    }
  }
});

// Enhanced scroll to section with mobile menu close
window.scrollToSection = function(sectionId) {
  console.log('📜 scrollToSection called for:', sectionId);
  
  // Close mobile menu if open
  const menu = document.getElementById('mobile-menu') || document.getElementById('mobile-nav');
  if (menu && !menu.classList.contains('hidden')) {
    console.log('🔒 Closing menu before scroll');
    menu.classList.add('hidden');
    document.body.style.overflow = '';
    
    // Reset icon
    const btn = document.querySelector('button[onclick*="toggleMobileMenu"]');
    if (btn) {
      const icon = btn.querySelector('span');
      if (icon) icon.textContent = 'menu';
    }
  }
  
  // Navigate if not on home page
  if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
    console.log('🔀 Redirecting to home page with hash:', sectionId);
    window.location.href = '/#' + sectionId;
    return;
  }
  
  // Scroll to section
  setTimeout(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      console.log('✅ Section found, scrolling to:', sectionId);
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const targetPosition = section.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    } else {
      console.warn('⚠️ Section not found:', sectionId);
    }
  }, 100);
};

// Handle hash on page load
window.addEventListener('load', () => {
  console.log('📄 Page loaded');
  if (window.location.hash) {
    const sectionId = window.location.hash.substring(1);
    console.log('🔗 Hash detected on load:', sectionId);
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
  console.log('🎯 DOMContentLoaded event fired');
  console.log('📱 Is mobile:', window.isMobile());
  console.log('🍎 Is iOS:', window.isIOS());
  
  if (window.isMobile()) {
    document.body.classList.add('is-mobile');
  }
  if (window.isIOS()) {
    document.body.classList.add('is-ios');
  }
  
  // Check if menu exists
  const menu = document.getElementById('mobile-menu') || document.getElementById('mobile-nav');
  console.log('🔍 Menu check on DOMContentLoaded:', menu ? 'Found' : 'Not found');
  if (menu) {
    console.log('📋 Menu ID:', menu.id);
    console.log('📋 Menu classes:', menu.classList.toString());
  }
  
  // Check if button exists
  const btn = document.querySelector('button[onclick*="toggleMobileMenu"]');
  console.log('🔘 Button check on DOMContentLoaded:', btn ? 'Found' : 'Not found');
  if (btn) {
    console.log('🔘 Button onclick:', btn.getAttribute('onclick'));
  }
});

console.log('✅ Mobile enhancements loaded successfully');
