// Enhanced responsive header template
function getResponsiveHeaderTemplate() {
  return `
    <header class="bg-primary border-b border-accent/20 sticky top-0 z-50 shadow-lg">
      <div class="max-w-7xl mx-auto px-3 md:px-4">
        <!-- Top Bar -->
        <div class="flex items-center justify-between py-3 md:py-4 border-b border-white/10">
          <!-- Logo -->
          <div class="flex items-center space-x-2 md:space-x-4">
            <div class="h-12 w-12 md:h-16 md:w-16 bg-accent flex items-center justify-center rounded flex-shrink-0">
              <span class="material-symbols-outlined text-primary text-2xl md:text-4xl">liquor</span>
            </div>
            <div>
              <h1 class="font-display text-accent text-base md:text-2xl font-bold tracking-wider">HỮU TUẤN</h1>
              <p class="text-white/60 text-[9px] md:text-xs tracking-widest uppercase">RƯỢU UY TÍN</p>
            </div>
          </div>
          
          <!-- Desktop Search -->
          <div class="flex-1 max-w-xl mx-4 md:mx-12 hidden lg:block">
            <div class="relative group">
              <input 
                class="w-full bg-white/5 border border-white/20 rounded py-2.5 px-4 text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all" 
                placeholder="Tìm kiếm sản phẩm..." 
                type="text" 
              />
              <button class="absolute right-0 top-0 h-full px-6 bg-accent text-primary font-bold rounded-r flex items-center gap-2 hover:bg-accent/90 transition-colors">
                <span class="material-symbols-outlined text-sm">search</span>
                <span class="text-sm font-semibold">TÌM</span>
              </button>
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
            <li><a class="hover:text-accent transition-colors uppercase px-2 py-1" href="/lien-he" data-link>LIÊN HỆ</a></li>
          </ul>
        </nav>
        
        <!-- Mobile Navigation -->
        <nav id="mobileMenu" class="hidden bg-primary/95 backdrop-blur-sm">
          <ul class="py-2 space-y-1">
            <li>
              <a class="block py-3 px-4 text-white hover:bg-accent/10 hover:text-accent transition-colors rounded-lg font-medium" 
                 href="/" 
                 data-link 
                 onclick="toggleMobileMenu()">
                <span class="material-symbols-outlined text-sm mr-2 align-middle">home</span>
                TRANG CHỦ
              </a>
            </li>
            <li>
              <a class="block py-3 px-4 text-white hover:bg-accent/10 hover:text-accent transition-colors rounded-lg font-medium cursor-pointer" 
                 onclick="toggleMobileMenu(); setTimeout(() => scrollToSection('gioi-thieu'), 300);">
                <span class="material-symbols-outlined text-sm mr-2 align-middle">info</span>
                GIỚI THIỆU
              </a>
            </li>
            <li>
              <a class="block py-3 px-4 text-white hover:bg-accent/10 hover:text-accent transition-colors rounded-lg font-medium cursor-pointer" 
                 onclick="toggleMobileMenu(); setTimeout(() => scrollToSection('san-pham'), 300);">
                <span class="material-symbols-outlined text-sm mr-2 align-middle">liquor</span>
                JAGERMEISTER
              </a>
            </li>
            <li>
              <a class="block py-3 px-4 text-white hover:bg-accent/10 hover:text-accent transition-colors rounded-lg font-medium cursor-pointer" 
                 onclick="toggleMobileMenu(); setTimeout(() => scrollToSection('san-pham'), 300);">
                <span class="material-symbols-outlined text-sm mr-2 align-middle">shopping_bag</span>
                SẢN PHẨM
              </a>
            </li>
            <li>
              <a class="block py-3 px-4 text-white hover:bg-accent/10 hover:text-accent transition-colors rounded-lg font-medium cursor-pointer" 
                 onclick="toggleMobileMenu(); setTimeout(() => scrollToSection('feedback'), 300);">
                <span class="material-symbols-outlined text-sm mr-2 align-middle">star</span>
                TIN TỨC
              </a>
            </li>
            <li>
              <a class="block py-3 px-4 text-white hover:bg-accent/10 hover:text-accent transition-colors rounded-lg font-medium" 
                 href="/lien-he" 
                 data-link 
                 onclick="toggleMobileMenu()">
                <span class="material-symbols-outlined text-sm mr-2 align-middle">contact_mail</span>
                LIÊN HỆ
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
        
        <!-- Mobile Search Bar (Below Header) -->
        <div class="lg:hidden py-2 border-t border-white/10">
          <div class="relative">
            <input 
              class="w-full bg-white/5 border border-white/20 rounded-lg py-2 pl-4 pr-10 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all" 
              placeholder="Tìm kiếm..." 
              type="text" 
            />
            <button class="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-accent">
              <span class="material-symbols-outlined text-xl">search</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  `;
}

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getResponsiveHeaderTemplate };
}
