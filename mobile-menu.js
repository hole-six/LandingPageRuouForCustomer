// Simple Mobile Menu Toggle - No dependencies
(function() {
  'use strict';
  
  console.log('🚀 Mobile menu script loading...');
  
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  function init() {
    console.log('✅ Initializing mobile menu...');
    
    // Find menu button
    const menuButton = document.querySelector('[data-mobile-menu-button]');
    if (!menuButton) {
      console.warn('⚠️ Menu button not found. Add data-mobile-menu-button attribute to button.');
      return;
    }
    
    // Find menu
    const menu = document.querySelector('[data-mobile-menu]');
    if (!menu) {
      console.warn('⚠️ Menu not found. Add data-mobile-menu attribute to nav.');
      return;
    }
    
    console.log('✅ Menu button found:', menuButton);
    console.log('✅ Menu found:', menu);
    
    // Get icon element
    const icon = menuButton.querySelector('span');
    
    // Click handler
    menuButton.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      console.log('🔘 Menu button clicked');
      
      const isHidden = menu.classList.contains('hidden');
      console.log('Current state - hidden:', isHidden);
      
      if (isHidden) {
        // Show menu
        menu.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        if (icon) icon.textContent = 'close';
        console.log('✅ Menu opened');
      } else {
        // Hide menu
        menu.classList.add('hidden');
        document.body.style.overflow = '';
        if (icon) icon.textContent = 'menu';
        console.log('❌ Menu closed');
      }
    });
    
    // Close on outside click
    document.addEventListener('click', function(e) {
      if (!menu.classList.contains('hidden')) {
        if (!menu.contains(e.target) && !menuButton.contains(e.target)) {
          menu.classList.add('hidden');
          document.body.style.overflow = '';
          if (icon) icon.textContent = 'menu';
          console.log('🖱️ Menu closed by outside click');
        }
      }
    });
    
    // Close on menu item click
    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        menu.classList.add('hidden');
        document.body.style.overflow = '';
        if (icon) icon.textContent = 'menu';
        console.log('🔗 Menu closed by link click');
      });
    });
    
    console.log('✅ Mobile menu initialized successfully');
  }
})();
