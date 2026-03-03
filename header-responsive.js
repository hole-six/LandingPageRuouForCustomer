// Enhanced responsive header template
function getResponsiveHeaderTemplate() {
  return `
    <header class="bg-primary border-b border-accent/20 sticky top-0 z-50 shadow-lg">
      <div class="max-w-7xl mx-auto px-3 md:px-4">
        <!-- Top Bar -->
        <div class="flex items-center justify-between py-3 md:py-4 border-b border-white/10">
          <!-- Logo -->
          <div class="flex items-center space-x-2 md:space-x-4">
            <img src="images/logoweb.jpg" alt="HỮU TUẤN Logo" class="h-12 w-12 md:h-16 md:w-16 rounded object-cover flex-shrink-0">
            <div>
              <h1 class="font-display text-accent text-base md:text-2xl font-bold tracking-wider">HỮU TUẤN</h1>
              <p class="text-white/60 text-[9px] md:text-xs tracking-widest uppercase">RƯỢU UY TÍN</p>
            </div>
          </div>
          
          <!-- Right Actions -->
          <div class="flex items-center space-x-2 md:space-x-4">
            <!-- Desktop Contact -->
            <a href="tel:0356781839" class="hidden xl:flex items-center gap-3 text-white hover:text-accent transition-colors">
              <div class="p-2 bg-accent/20 rounded-full">
                <span class="material-symbols-outlined text-accent">call</span>
              </div>
              <div>
                <p class="text-[10px] text-accent font-bold uppercase tracking-tighter">Hotline 24/7</p>
                <p class="text-sm font-bold">0356 781 839</p>
              </div>
            </a>
            
            <!-- Mobile Zalo Button -->
            <a href="https://zalo.me/0356781839" target="_blank" class="xl:hidden p-2 text-accent hover:bg-accent/10 rounded-full transition-colors">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEbElEQVR4nO2Yj2sbZRjHr/qXTJi9q7K6OkU7XEXBCYIKm+jQjdxt1s0yp2UwGXTdSkfRDjcV3UCxyBTqj+HEMrC1ndPZHxuiXR1NOzvX1nZtmve9ND+bn195bk16SXNpLtckBfPAF8LlyeX7ufd53/e5VxBKUYpS/P8CQJnL5XqQc97IGLvIOR/hnHs558hSlDtMv2WMHVNVtaowzl/A3Rtexc6Oyx7VhNlsZXc6ndvp4eTF+717sE6Ucen0ef9qG0eK+lRVXbeq5itseEKS4d57MgTG8moeJMbYHOe8ZlXMl9uwVZKx8HBdDGMTrryb50sQQcsQkg3rRQWqpACf/OArmHmuG4ncy6kRd4kK+sl8TX0UM47CmudL6s1pYlfIkMk86aPv8j5xkUlOp3ObaQBRwXUyv6EWGJtQiwrAOR82ZV5SsCX+9He1hIptHiRVVTeaAWhZK+XDF8UYO5p9+ci4FAfouuJeKwDdZgAm4wCjtwq39vPMspspIX8cIN3y+fLxsPadkQZHVoamvBPtATMAHjMACTOOueU3a7vgw/GzgSQ9/XZEy2/4bCGR1zXgxgfn/Pii04vxKRWdAx4M3XAZAnQt5tP90618OQFMTK+8hF7o9eD+PYD8bghzTo5ZB8e+U8GkUaFWRG9a/3k2Tf6j+2P4ccBjHeDGeOZy6B+aR9XeGJ45HEnAtrYHULEbOH3eh4kpFVf+msdzDRFDgFaD/Oo3qP9SrQFcGzUGoAlObcZjb0Zhv7mUt/lAFNS56nMHhuYNATZnyKdysgTQd20+rfmpGRXPNkTwwGsx9A4mL7WVtUBj29JcINEcMAKozJBPc8ISwLcXvcvMOxlH7Xsh3Lcb+P6X5Dol7WgO4/H6qFYO8Wu0IRoB7MiQ/9NVtzWA1vblOzGtNPTd80ci2hPS66turzYvqIciU0faFjRYqnEjgH6D/Lr3g9YncepNaI3PtAfsOxlMmKInW1kbw5MHo9qDeGR/LGFa/5kn5QNb3oriRLt/2RKeE8BTh6JmNpu8SsgFINuddW0ByHDrAWg4i22ec+4zAzCiB6CaTNdSFFKMsVtmAHpSy+jTDl+xAXqyB1BwLBWg+kAM/0wW79WSMdaUNYBoQ1W6JbL+42AxAaqzBhAElEky7KkAtPP+e7vwo8AYGxTMRoWM7akA1DLPOIpSRq+YBlgchT49wM6WcMHND99U/875xJpOpCUZc2SeWoLUrnNsXMUf9vTdqlVNTqv48JwvcPhMaJNgJUQZNaKC4MEzQXRfdaPjNw9OfePHS81hbU4Q3NZDEdCxO7XAVkzPOrj2FkbN4kN10QCdilsyr4eIj0QmUSP2YlMYTZ8H8HWPFz//7sbQqEsDuz17B44OCegti67/+qcbX3Z60Xw2AKU1hE2v33ntFGXwVTOfUk69K0FYlozL62XcI+QnUFauYJukYHi1jYsKrosydtF/CIUIScFGScZRUUE3AYkyPCYMByQZ0/RbUcE75TZUF8x4KUpRCmFNxX8QRqbiSsmKAQAAAABJRU5ErkJggg==" alt="Zalo" class="w-6 h-6">
            </a>
            
            <!-- Mobile Call Button -->
            <a href="tel:0356781839" class="xl:hidden p-2 text-accent hover:bg-accent/10 rounded-full transition-colors">
              <span class="material-symbols-outlined text-2xl">call</span>
            </a>
            
            <!-- Mobile Menu Button -->
            <button id="menuBtn" class="lg:hidden p-2 text-white hover:text-accent transition-colors">
              <span id="menuIcon" class="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
        
        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center justify-center py-4">
          <ul class="flex items-center space-x-6 xl:space-x-8 text-sm font-semibold tracking-wide text-white/80">
            <li><a class="hover:text-accent transition-colors px-2 py-1" href="/" data-link>TRANG CHỦ</a></li>
            <li><a class="hover:text-accent transition-colors cursor-pointer px-2 py-1" onclick="scrollToSection('gioi-thieu')">GIỚI THIỆU</a></li>
            <li><a class="hover:text-accent transition-colors uppercase cursor-pointer px-2 py-1" onclick="scrollToSection('san-pham')">JAGERMEISTER</a></li>
            <li><a class="hover:text-accent transition-colors uppercase cursor-pointer px-2 py-1" onclick="scrollToSection('san-pham')">SẢN PHẨM</a></li>
            <li><a class="hover:text-accent transition-colors uppercase cursor-pointer px-2 py-1" onclick="scrollToSection('feedback')">TIN TỨC</a></li>
            <li><a class="hover:text-accent transition-colors uppercase px-2 py-1 flex items-center gap-2" href="https://zalo.me/0356781839" target="_blank">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 2.237.738 4.304 1.986 5.97L2.05 21.95l4.098-1.903C7.813 21.315 9.826 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
              ZALO
            </a></li>
            <li><a class="hover:text-accent transition-colors uppercase px-2 py-1 flex items-center gap-2" href="tel:0356781839">
              <span class="material-symbols-outlined text-sm">call</span>
              GỌI
            </a></li>
          </ul>
        </nav>
        
        <!-- Mobile Navigation -->
        <nav id="mobileMenu" class="hidden bg-primary/95 backdrop-blur-sm">
          <ul class="py-2 space-y-1">
            <li>
              <a class="block py-3 px-4 text-white hover:bg-accent/10 hover:text-accent transition-colors rounded-lg font-medium" 
                 href="/" 
                 data-link>
                <span class="material-symbols-outlined text-sm mr-2 align-middle">home</span>
                TRANG CHỦ
              </a>
            </li>
            <li>
              <a class="block py-3 px-4 text-white hover:bg-accent/10 hover:text-accent transition-colors rounded-lg font-medium cursor-pointer" 
                 href="#gioi-thieu"
                 onclick="event.preventDefault(); document.getElementById('mobileMenu').classList.add('hidden'); document.getElementById('menuIcon').textContent='menu'; setTimeout(function(){ var el=document.getElementById('gioi-thieu'); if(el) el.scrollIntoView({behavior:'smooth',block:'start'}); }, 300);">
                <span class="material-symbols-outlined text-sm mr-2 align-middle">info</span>
                GIỚI THIỆU
              </a>
            </li>
            <li>
              <a class="block py-3 px-4 text-white hover:bg-accent/10 hover:text-accent transition-colors rounded-lg font-medium cursor-pointer" 
                 href="#san-pham"
                 onclick="event.preventDefault(); document.getElementById('mobileMenu').classList.add('hidden'); document.getElementById('menuIcon').textContent='menu'; setTimeout(function(){ var el=document.getElementById('san-pham'); if(el) el.scrollIntoView({behavior:'smooth',block:'start'}); }, 300);">
                <span class="material-symbols-outlined text-sm mr-2 align-middle">liquor</span>
                JAGERMEISTER
              </a>
            </li>
            <li>
              <a class="block py-3 px-4 text-white hover:bg-accent/10 hover:text-accent transition-colors rounded-lg font-medium cursor-pointer" 
                 href="#san-pham"
                 onclick="event.preventDefault(); document.getElementById('mobileMenu').classList.add('hidden'); document.getElementById('menuIcon').textContent='menu'; setTimeout(function(){ var el=document.getElementById('san-pham'); if(el) el.scrollIntoView({behavior:'smooth',block:'start'}); }, 300);">
                <span class="material-symbols-outlined text-sm mr-2 align-middle">shopping_bag</span>
                SẢN PHẨM
              </a>
            </li>
            <li>
              <a class="block py-3 px-4 text-white hover:bg-accent/10 hover:text-accent transition-colors rounded-lg font-medium cursor-pointer" 
                 href="#feedback"
                 onclick="event.preventDefault(); document.getElementById('mobileMenu').classList.add('hidden'); document.getElementById('menuIcon').textContent='menu'; setTimeout(function(){ var el=document.getElementById('feedback'); if(el) el.scrollIntoView({behavior:'smooth',block:'start'}); }, 300);">
                <span class="material-symbols-outlined text-sm mr-2 align-middle">star</span>
                TIN TỨC
              </a>
            </li>
            
            <!-- Mobile Contact Section -->
            <li class="pt-3 mt-3 border-t border-white/10">
              <div class="px-4 py-2">
                <p class="text-accent text-xs font-bold uppercase mb-2">Liên hệ ngay:</p>
                <div class="grid grid-cols-2 gap-2">
                  <a href="tel:0356781839" class="flex items-center justify-center gap-2 py-2 px-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium">
                    <span class="material-symbols-outlined text-lg">call</span>
                    Gọi
                  </a>
                  <a href="https://zalo.me/0356781839" target="_blank" class="flex items-center justify-center gap-2 py-2 px-3 bg-[#0068ff] text-white rounded-lg hover:bg-[#0052cc] transition-colors text-sm font-medium">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 2.237.738 4.304 1.986 5.97L2.05 21.95l4.098-1.903C7.813 21.315 9.826 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
                    Zalo
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </nav>
        
      </div>
    </header>
    
    <script>
      // Simple mobile menu toggle
      (function() {
        function setupMenuButton() {
          const menuBtn = document.getElementById('menuBtn');
          if (menuBtn) {
            menuBtn.onclick = function() {
              const menu = document.getElementById('mobileMenu');
              const icon = document.getElementById('menuIcon');
              if (menu && icon) {
                if (menu.classList.contains('hidden')) {
                  menu.classList.remove('hidden');
                  icon.textContent = 'close';
                } else {
                  menu.classList.add('hidden');
                  icon.textContent = 'menu';
                }
              }
            };
          }
        }
        
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', setupMenuButton);
        } else {
          setupMenuButton();
        }
        
        setTimeout(setupMenuButton, 100);
      })();
    </script>
  `;
}

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getResponsiveHeaderTemplate };
}
