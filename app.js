// Router SPA đỉnh cao cho Netlify
class Router {
  constructor() {
    this.routes = {
      '/': 'home',
      '/chi-tiet': 'detail',
      '/lien-he': 'contact'
    };
    this.currentRoute = '/';
    this.init();
  }

  init() {
    window.addEventListener('popstate', () => this.handleRoute());
    document.addEventListener('DOMContentLoaded', () => this.handleRoute());
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-link]')) {
        e.preventDefault();
        this.navigate(e.target.getAttribute('href'));
      }
    });
  }

  navigate(path) {
    window.history.pushState({}, '', path);
    this.handleRoute();
  }

  handleRoute() {
    const path = window.location.pathname;
    const params = new URLSearchParams(window.location.search);

    if (path === '/' || path === '/index.html') {
      this.renderHome();
    } else if (path === '/chi-tiet' || path.includes('chi-tiet')) {
      const productId = params.get('id') || 'jager-700ml';
      this.renderDetail(productId);
    } else if (path === '/lien-he' || path.includes('lien-he')) {
      this.renderContact();
    } else {
      this.renderHome();
    }

    window.scrollTo(0, 0);
  }

  renderHome() {
    const app = document.getElementById('app');
    app.innerHTML = this.getHomeTemplate();
    app.classList.add('fade-in');
  }

  renderDetail(productId) {
    const product = PRODUCTS_DATA.products.find(p => p.id === productId);
    if (!product) {
      this.renderHome();
      return;
    }
    const app = document.getElementById('app');
    app.innerHTML = this.getDetailTemplate(product);
    app.classList.add('fade-in');
  }

  renderContact() {
    const app = document.getElementById('app');
    app.innerHTML = this.getContactTemplate();
    app.classList.add('fade-in');
  }

  getHeaderTemplate() {
    // Use responsive header if available
    if (typeof getResponsiveHeaderTemplate === 'function') {
      return getResponsiveHeaderTemplate();
    }

    // Fallback to basic header
    return `
      <header class="bg-primary border-b border-accent/20 sticky top-0 z-50 shadow-lg">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex items-center justify-between py-3 md:py-4">
            <div class="flex items-center space-x-4">
              <div class="h-12 w-12 md:h-16 md:w-16 bg-accent flex items-center justify-center rounded">
                <span class="material-symbols-outlined text-primary text-2xl md:text-4xl">liquor</span>
              </div>
              <div>
                <h1 class="font-display text-accent text-lg md:text-2xl font-bold">HỮU TUẤN</h1>
                <p class="text-white/60 text-xs uppercase">RƯỢU UY TÍN</p>
              </div>
            </div>
            <a href="tel:0356781839" class="text-accent hover:text-white transition-colors">
              <span class="material-symbols-outlined text-3xl">call</span>
            </a>
          </div>
        </div>
      </header>
    `;
  }

  getFooterTemplate() {
    return `
      <footer class="bg-primary text-white py-12 border-t-4 border-accent">
        <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h5 class="text-accent font-display text-xl font-bold mb-6">HỮU TUẤN</h5>
            <p class="text-white/60 text-sm leading-loose">
              Đơn vị cung cấp Jagermeister chính hãng tại Vũng Tàu - Bà Rịa. Ship hỏa tốc full map: Vũng Tàu, Bà Rịa, Long Điền, Phước Hải, Phước Tỉnh. Giá siêu ổn: 700ml chỉ 450K | 1000ml chỉ 550K. Xuất xứ Đức - lạnh sâu uống shot là chuẩn, pha Redbull thì quẩy hết nấc!
            </p>
            <div class="flex items-center space-x-4 mt-6">
              <a class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" href="#"><span class="material-symbols-outlined text-sm">share</span></a>
              <a class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" href="#"><span class="material-symbols-outlined text-sm">chat</span></a>
              <a class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" href="#"><span class="material-symbols-outlined text-sm">alternate_email</span></a>
            </div>
          </div>
          <div>
            <h5 class="text-accent font-display text-xl font-bold mb-6 uppercase tracking-wider">Hỗ Trợ Khách Hàng</h5>
            <ul class="space-y-3 text-sm text-white/60">
              <li><a class="hover:text-accent transition-colors" href="#">Hướng dẫn đặt hàng</a></li>
              <li><a class="hover:text-accent transition-colors" href="#">Chính sách vận chuyển</a></li>
              <li><a class="hover:text-accent transition-colors" href="#">Hình thức thanh toán</a></li>
              <li><a class="hover:text-accent transition-colors" href="#">Chính sách đổi trả</a></li>
              <li><a class="hover:text-accent transition-colors" href="#">Câu hỏi thường gặp</a></li>
            </ul>
          </div>
          <div>
            <h5 class="text-accent font-display text-xl font-bold mb-6 uppercase tracking-wider">Thông Tin Liên Hệ</h5>
            <ul class="space-y-4 text-sm text-white/60">
              <li class="flex items-start gap-3">
                <span class="material-symbols-outlined text-accent text-sm">location_on</span>
                <span>Tuấn - Vũng Tàu, Bà Rịa, Long Điền</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="material-symbols-outlined text-accent text-sm">call</span>
                <span>0356 781 839</span>
              </li>
       
            </ul>
          </div>
          <div>
            <h5 class="text-accent font-display text-xl font-bold mb-6 uppercase tracking-wider">Đăng Ký Nhận Tin</h5>
            <p class="text-xs text-white/60 mb-4">Cập nhật những ưu đãi và sản phẩm mới nhất từ chúng tôi.</p>
            <div class="flex">
              <input class="bg-white/5 border border-white/20 rounded-l py-2 px-4 text-sm w-full focus:outline-none focus:ring-1 focus:ring-accent" placeholder="Email của bạn..." type="email" />
              <button class="bg-accent text-primary px-4 font-bold text-xs rounded-r">GỬI</button>
            </div>
          </div>
        </div>
        <div class="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-white/10 text-center text-xs text-white/40">
          <p>© 2025 Hữu Tuấn - Jagermeister Chính Hãng. Ship hỏa tốc Vũng Tàu, Bà Rịa, Long Điền. Rượu không dành cho người dưới 18 tuổi.</p>
        </div>
      </footer>
      <div id="floating-buttons" class="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col space-y-4 z-40 transition-all duration-300">
        <button id="toggle-floating" class="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary hover:scale-110 transition-transform shadow-lg" title="Đóng/Mở menu">
          <span class="material-symbols-outlined">menu</span>
        </button>
        <div id="floating-menu" class="hidden flex-col space-y-4">
          <a href="https://zalo.me/0356781839" target="_blank" class="w-12 h-12 bg-[#0068ff] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg" title="Zalo: 0356 781 839">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEbElEQVR4nO2Yj2sbZRjHr/qXTJi9q7K6OkU7XEXBCYIKm+jQjdxt1s0yp2UwGXTdSkfRDjcV3UCxyBTqj+HEMrC1ndPZHxuiXR1NOzvX1nZtmve9ND+bn195bk16SXNpLtckBfPAF8LlyeX7ufd53/e5VxBKUYpS/P8CQJnL5XqQc97IGLvIOR/hnHs558hSlDtMv2WMHVNVtaowzl/A3Rtexc6Oyx7VhNlsZXc6ndvp4eTF+717sE6Ucen0ef9qG0eK+lRVXbeq5itseEKS4d57MgTG8moeJMbYHOe8ZlXMl9uwVZKx8HBdDGMTrryb50sQQcsQkg3rRQWqpACf/OArmHmuG4ncy6kRd4kK+sl8TX0UM47CmudL6s1pYlfIkMk86aPv8j5xkUlOp3ObaQBRwXUyv6EWGJtQiwrAOR82ZV5SsCX+9He1hIptHiRVVTeaAWhZK+XDF8UYO5p9+ci4FAfouuJeKwDdZgAm4wCjtwq39vPMspspIX8cIN3y+fLxsPadkQZHVoamvBPtATMAHjMACTOOueU3a7vgw/GzgSQ9/XZEy2/4bCGR1zXgxgfn/Pii04vxKRWdAx4M3XAZAnQt5tP90618OQFMTK+8hF7o9eD+PYD8bghzTo5ZB8e+U8GkUaFWRG9a/3k2Tf6j+2P4ccBjHeDGeOZy6B+aR9XeGJ45HEnAtrYHULEbOH3eh4kpFVf+msdzDRFDgFaD/Oo3qP9SrQFcGzUGoAlObcZjb0Zhv7mUt/lAFNS56nMHhuYNATZnyKdysgTQd20+rfmpGRXPNkTwwGsx9A4mL7WVtUBj29JcINEcMAKozJBPc8ISwLcXvcvMOxlH7Xsh3Lcb+P6X5Dol7WgO4/H6qFYO8Wu0IRoB7MiQ/9NVtzWA1vblOzGtNPTd80ci2hPS66turzYvqIciU0faFjRYqnEjgH6D/Lr3g9YncepNaI3PtAfsOxlMmKInW1kbw5MHo9qDeGR/LGFa/5kn5QNb3oriRLt/2RKeE8BTh6JmNpu8SsgFINuddW0ByHDrAWg4i22ec+4zAzCiB6CaTNdSFFKMsVtmAHpSy+jTDl+xAXqyB1BwLBWg+kAM/0wW79WSMdaUNYBoQ1W6JbL+42AxAaqzBhAElEky7KkAtPP+e7vwo8AYGxTMRoWM7akA1DLPOIpSRq+YBlgchT49wM6WcMHND99U/875xJpOpCUZc2SeWoLUrnNsXMUf9vTdqlVNTqv48JwvcPhMaJNgJUQZNaKC4MEzQXRfdaPjNw9OfePHS81hbU4Q3NZDEdCxO7XAVkzPOrj2FkbN4kN10QCdilsyr4eIj0QmUSP2YlMYTZ8H8HWPFz//7sbQqEsDuz17B44OCegti67/+qcbX3Z60Xw2AKU1hE2v33ntFGXwVTOfUk69K0FYlozL62XcI+QnUFauYJukYHi1jYsKrosydtF/CIUIScFGScZRUUE3AYkyPCYMByQZ0/RbUcE75TZUF8x4KUpRCmFNxX8QRqbiSsmKAQAAAABJRU5ErkJggg==" alt="zalo">
            </a>
          <a href="https://www.facebook.com/share/1FRKNhXwZX/?mibextid=wwXIfr" target="_blank" class="w-12 h-12 bg-[#1877f2] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg" title="Facebook: Tuấn">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="tel:0356781839" class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg" title="Gọi: 0356 781 839">
            <span class="material-symbols-outlined">call</span>
          </a>
          <button onclick="alert('JAGERMEISTER – SHIP HỎA TỐC FULL MAP\\n\\nVũng Tàu – Bà Rịa – Long Điền – Phước Hải – Phước Tỉnh\\n\\nLiên hệ:\\n📞 Zalo/SĐT: 0356 781 839\\n📘 Facebook: Tuấn\\n\\nGọi ngay để được tư vấn và giao hàng nhanh!')" class="w-12 h-12 bg-primary border border-accent/30 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg group">
            <span class="material-symbols-outlined group-hover:text-accent">location_on</span>
          </button>
          <a href="#" onclick="window.scrollTo({top: 0, behavior: 'smooth'}); return false;" class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:scale-110 transition-transform shadow-lg border border-slate-200">
            <span class="material-symbols-outlined">expand_less</span>
          </a>
        </div>
      </div>
    `;
  }

  getHomeTemplate() {
    const products = PRODUCTS_DATA.products.map(product => `
      <div class="relative group overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
        <div class="aspect-square bg-slate-50 dark:bg-slate-800 overflow-hidden relative">
          <img alt="${product.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="${product.image}" />
          <div class="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center space-x-2">
            <a href="/chi-tiet?id=${product.id}" data-link class="bg-white text-primary p-3 rounded-full hover:bg-accent hover:text-white transition">
              <span class="material-symbols-outlined">visibility</span>
            </a>
          </div>
        </div>
        <div class="p-4">
          <h3 class="font-bold text-sm mb-2 line-clamp-2 min-h-[40px]">${product.name}</h3>
          <div class="flex items-center justify-between">
            <p class="text-accent font-bold text-lg">${this.formatPrice(product.price)}</p>
            <a href="/chi-tiet?id=${product.id}" data-link class="text-xs text-primary hover:text-accent font-semibold">Chi tiết →</a>
          </div>
        </div>
      </div>
    `).join('');

    return `
      ${this.getHeaderTemplate()}
      <section class="relative h-[650px] flex items-center overflow-hidden">
        <div class="absolute inset-0 hero-gradient"></div>
        <div class="max-w-7xl mx-auto px-4 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-8 animate-fade-in-up">
     
            <h2 class="text-6xl md:text-7xl font-display text-white leading-tight">
              Hương Vị <br /> <span class="italic text-accent">Huyền Bí</span>
            </h2>
            <p class="text-white/70 text-lg max-w-md leading-relaxed border-l-2 border-accent pl-6">
              JAGERMEISTER – SHIP HỎA TỐC FULL MAP Vũng Tàu – Bà Rịa – Long Điền – Phước Hải – Phước Tỉnh. Gọi là có liền! Không cần chờ đợi, chỉ cần một cú alo/Zalo 0356.781.839, rượu Đức chuẩn vị thảo mộc đã có mặt trên bàn nhậu.
            </p>
            <div class="flex flex-col sm:flex-row items-center gap-4 sm:space-x-6">
              <button onclick="scrollToSection('san-pham')" class="w-full sm:w-auto bg-accent text-primary px-10 py-4 font-bold tracking-widest hover:bg-white transition-all transform hover:-translate-y-1 shadow-xl rounded">
                MUA NGAY
              </button>
              <a href="lienhe.html" class="w-full sm:w-auto text-center border-2 border-white/30 text-white px-10 py-4 font-bold tracking-widest hover:bg-white/10 transition-all inline-block rounded">
                LIÊN HỆ
              </a>
            </div>
          </div>
          <div class="hidden lg:flex justify-end items-center relative">
            <div class="relative w-[500px] h-[500px]">
              <img alt="Jagermeister Bottle" class="w-full h-full object-contain filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform rotate-12" src="https://whiskykingdom.vn/wp-content/uploads/2020/12/Ruou-pha-che-cocktail-Jagermeister.jpg" />
              <div class="absolute top-10 right-0 bg-white/10 backdrop-blur-md p-4 rounded border border-white/20 animate-bounce duration-[3000ms]">
                <p class="text-accent font-bold">Hữu Tuấn </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="gioi-thieu" class="bg-primary py-16">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-16">
            <h3 class="font-display text-white text-3xl md:text-4xl uppercase tracking-widest mb-4">Jagermeister - Lựa chọn của sự tinh tế</h3>
            <div class="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p class="text-accent font-display italic text-xl">Chìm đắm trong hương vị đích thực</p>
          </div>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div class="text-center group">
              <div class="w-20 h-20 mx-auto rounded-full border-2 border-accent/30 flex items-center justify-center mb-6 group-hover:bg-accent/10 group-hover:border-accent transition-all duration-300">
                <span class="material-symbols-outlined text-4xl text-accent">liquor</span>
              </div>
              <h4 class="text-white font-bold mb-2 uppercase text-sm tracking-widest">Sản Phẩm Đa Dạng</h4>
              <p class="text-white/50 text-xs">Nhập khẩu & phân phối chính hãng</p>
            </div>
            <div class="text-center group">
              <div class="w-20 h-20 mx-auto rounded-full border-2 border-accent/30 flex items-center justify-center mb-6 group-hover:bg-accent/10 group-hover:border-accent transition-all duration-300">
                <span class="material-symbols-outlined text-4xl text-accent">verified</span>
              </div>
              <h4 class="text-white font-bold mb-2 uppercase text-sm tracking-widest">Cam Kết Chất Lượng</h4>
              <p class="text-white/50 text-xs">Sản phẩm nguyên chai, chính hãng 100%</p>
            </div>
            <div class="text-center group">
              <div class="w-20 h-20 mx-auto rounded-full border-2 border-accent/30 flex items-center justify-center mb-6 group-hover:bg-accent/10 group-hover:border-accent transition-all duration-300">
                <span class="material-symbols-outlined text-4xl text-accent">local_shipping</span>
              </div>
              <h4 class="text-white font-bold mb-2 uppercase text-sm tracking-widest">Giao Hàng Toàn Quốc</h4>
              <p class="text-white/50 text-xs">Linh hoạt giao hàng theo yêu cầu khách hàng</p>
            </div>
            <div class="text-center group">
              <div class="w-20 h-20 mx-auto rounded-full border-2 border-accent/30 flex items-center justify-center mb-6 group-hover:bg-accent/10 group-hover:border-accent transition-all duration-300">
                <span class="material-symbols-outlined text-4xl text-accent">payments</span>
              </div>
              <h4 class="text-white font-bold mb-2 uppercase text-sm tracking-widest">Thanh Toán Tiện Lợi</h4>
              <p class="text-white/50 text-xs">Thanh toán chuyển khoản, tiền mặt</p>
            </div>
          </div>
        </div>
      </section>
      <section id="san-pham" class="py-24 bg-white dark:bg-background-dark">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex flex-col items-center mb-16 text-center">
            <h2 class="text-primary dark:text-white text-4xl font-display font-bold uppercase tracking-widest mb-4">Sản Phẩm Của Chúng Tôi</h2>
            <div class="w-16 h-1 bg-accent mb-8"></div>
            <p class="text-slate-600 dark:text-slate-400 max-w-2xl">Khám phá bộ sưu tập Jagermeister chính hãng với đầy đủ dung tích và phụ kiện cao cấp</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            ${products}
          </div>
        </div>
      </section>
      <section class="py-16 bg-white dark:bg-background-dark">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-primary dark:text-white text-3xl font-display font-bold uppercase tracking-widest mb-4">Khoảnh Khắc Đáng Nhớ</h2>
            <div class="w-16 h-1 bg-accent mx-auto mb-6"></div>
            <p class="text-slate-600 dark:text-slate-400">Những khoảnh khắc tuyệt vời cùng Jagermeister</p>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div class="aspect-square overflow-hidden rounded-lg group cursor-pointer">
              <img alt="Gallery 1" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="images/feedback7.jpg" />
            </div>
            <div class="aspect-square overflow-hidden rounded-lg group cursor-pointer">
              <img alt="Gallery 2" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="images/feedback8.jpg" />
            </div>
            <div class="aspect-square overflow-hidden rounded-lg group cursor-pointer">
              <img alt="Gallery 3" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="images/feedback9.jpg" />
            </div>
            <div class="aspect-square overflow-hidden rounded-lg group cursor-pointer bg-primary flex items-center justify-center">
              <div class="text-center text-white p-6">
                <span class="material-symbols-outlined text-5xl text-accent mb-4 block">photo_camera</span>
                <p class="font-bold text-lg mb-2">1000+</p>
                <p class="text-sm text-white/60">Khách hàng hài lòng</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="feedback" class="py-20 bg-primary">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="font-display text-white text-3xl md:text-4xl uppercase tracking-widest mb-4">Khách Hàng Nói Gì Về Chúng Tôi</h2>
            <div class="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p class="text-white/60 max-w-2xl mx-auto">Hàng ngàn khách hàng hài lòng đã tin tưởng và lựa chọn sản phẩm của chúng tôi</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300 group">
              <div class="aspect-square overflow-hidden">
                <img alt="Feedback khách hàng 1" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="images/feedback1.jpg" />
              </div>
              <div class="p-6">
                <div class="flex text-accent mb-3">
                  <span class="material-symbols-outlined text-sm">star</span>
                  <span class="material-symbols-outlined text-sm">star</span>
                  <span class="material-symbols-outlined text-sm">star</span>
                  <span class="material-symbols-outlined text-sm">star</span>
                  <span class="material-symbols-outlined text-sm">star</span>
                </div>
                <p class="text-white/80 text-sm italic mb-3">"Ship hỏa tốc cực nhanh, gọi là có liền. Rượu chính hãng, giá tốt. Sẽ ủng hộ lâu dài!"</p>
                <p class="text-accent font-semibold text-sm">Anh Minh - Vũng Tàu</p>
              </div>
            </div>
            <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300 group">
              <div class="aspect-square overflow-hidden">
                <img alt="Feedback khách hàng 2" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="images/feedback2.jpg" />
              </div>
              <div class="p-6">
                <div class="flex text-accent mb-3">
                  <span class="material-symbols-outlined text-sm">star</span>
                  <span class="material-symbols-outlined text-sm">star</span>
                  <span class="material-symbols-outlined text-sm">star</span>
                  <span class="material-symbols-outlined text-sm">star</span>
                  <span class="material-symbols-outlined text-sm">star</span>
                </div>
                <p class="text-white/80 text-sm italic mb-3">"Combo quà tặng đẹp lắm, đầu hươu và ly rất sang. Bạn bè khen nức nở!"</p>
                <p class="text-accent font-semibold text-sm">Chị Lan - Bà Rịa</p>
              </div>
            </div>
            <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300 group">
              <div class="aspect-square overflow-hidden">
                <img alt="Feedback khách hàng 3" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="images/feedback3.jpg" />
              </div>
              <div class="p-6">
                <div class="flex text-accent mb-3">
                  <span class="material-symbols-outlined text-sm">star</span>
                  <span class="material-symbols-outlined text-sm">star</span>
                  <span class="material-symbols-outlined text-sm">star</span>
                  <span class="material-symbols-outlined text-sm">star</span>
                  <span class="material-symbols-outlined text-sm">star</span>
                </div>
                <p class="text-white/80 text-sm italic mb-3">"Lạnh sâu uống shot chuẩn vị thảo mộc Đức. Party đêm không thể thiếu Jager!"</p>
                <p class="text-accent font-semibold text-sm">Anh Tuấn - Long Điền</p>
              </div>
            </div>
            <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300 group">
              <div class="aspect-square overflow-hidden">
                <img alt="Feedback khách hàng 4" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="images/feedback4.jpg" />
              </div>
              <div class="p-6">
                <div class="flex text-accent mb-3">
                  <span class="material-symbols-outlined text-sm">star</span>
                  <span class="material-symbols-outlined text-sm">star</span>
                  <span class="material-symbols-outlined text-sm">star</span>
                  <span class="material-symbols-outlined text-sm">star</span>
                  <span class="material-symbols-outlined text-sm">star</span>
                </div>
                <p class="text-white/80 text-sm italic mb-3">"Giá 700ml chỉ 450K, 1000ml 550K quá hời. Pha Redbull quẩy hết nấc!"</p>
                <p class="text-accent font-semibold text-sm">Anh Hùng - Phước Hải</p>
              </div>
            </div>
            <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300 group">
              <div class="aspect-square overflow-hidden">
                <img alt="Feedback khách hàng 5" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="images/feedback5.jpg" />
              </div>
              <div class="p-6">
                <div class="flex text-accent mb-3">
                  <span class="material-symbols-outlined text-sm">star</span>
                  <span class="material-symbols-outlined text-sm">star</span>
                  <span class="material-symbols-outlined text-sm">star</span>
                  <span class="material-symbols-outlined text-sm">star</span>
                  <span class="material-symbols-outlined text-sm">star</span>
                </div>
                <p class="text-white/80 text-sm italic mb-3">"Đầu hươu đẹp xuất sắc, rót rượu sang chảnh hẳn. Đáng đồng tiền bát gạo!"</p>
                <p class="text-accent font-semibold text-sm">Anh Khoa - Vũng Tàu</p>
              </div>
            </div>
            <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300 group">
              <div class="aspect-square overflow-hidden">
                <img alt="Feedback khách hàng 6" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="images/feedback6.jpg" />
              </div>
              <div class="p-6">
                <div class="flex text-accent mb-3">
                  <span class="material-symbols-outlined text-sm">star</span>
                  <span class="material-symbols-outlined text-sm">star</span>
                  <span class="material-symbols-outlined text-sm">star</span>
                  <span class="material-symbols-outlined text-sm">star</span>
                  <span class="material-symbols-outlined text-sm">star</span>
                </div>
                <p class="text-white/80 text-sm italic mb-3">"Mua làm quà tặng sếp, được khen ngợi hết lời. Sẽ quay lại ủng hộ!"</p>
                <p class="text-accent font-semibold text-sm">Chị Hương - Bà Rịa</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      ${this.getFooterTemplate()}
    `;
  }

  getDetailTemplate(product) {
    const relatedProducts = PRODUCTS_DATA.products.filter(p => p.id !== product.id).slice(0, 4).map(p => `
      <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 group">
        <div class="aspect-square bg-slate-50 dark:bg-slate-800 mb-4 overflow-hidden rounded relative">
          <img alt="${p.name}" class="w-full h-full object-cover group-hover:scale-110 transition duration-500" src="${p.image}" />
          <div class="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center space-x-2">
            <button class="bg-white text-primary p-2 rounded-full hover:bg-accent hover:text-white transition"><span class="material-symbols-outlined">shopping_basket</span></button>
            <a href="/chi-tiet?id=${p.id}" data-link class="bg-white text-primary p-2 rounded-full hover:bg-accent hover:text-white transition"><span class="material-symbols-outlined">visibility</span></a>
          </div>
        </div>
        <h3 class="font-bold text-center mb-2">${p.name}</h3>
        <p class="text-accent font-bold text-center">${this.formatPrice(p.price)}</p>
      </div>
    `).join('');

    const stars = Array(5).fill(0).map((_, i) => {
      if (i < Math.floor(product.rating)) {
        return '<span class="material-symbols-outlined text-sm">star</span>';
      } else if (i < product.rating) {
        return '<span class="material-symbols-outlined text-sm">star_half</span>';
      } else {
        return '<span class="material-symbols-outlined text-sm">star_outline</span>';
      }
    }).join('');

    return `
      ${this.getHeaderTemplate()}
      <main class="container mx-auto px-4 py-12">
        <nav class="flex text-sm text-slate-500 mb-8 dark:text-slate-400">
          <a class="hover:text-accent" href="/" data-link>Trang chủ</a>
          <span class="mx-2">/</span>
          <a class="hover:text-accent" href="#">Rượu Mạnh</a>
          <span class="mx-2">/</span>
          <span class="text-slate-900 dark:text-white font-medium">${product.name}</span>
        </nav>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div class="relative group">
            <div class="aspect-[4/5] bg-slate-50 dark:bg-slate-900 flex items-center justify-center overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800">
              <img alt="${product.name}" class="object-cover w-full h-full hover:scale-105 transition duration-700" src="${product.image}" />
            </div>
          </div>
          <div class="flex flex-col">
            <h1 class="font-display text-4xl font-bold mb-4 dark:text-white uppercase tracking-tight">${product.name}</h1>
            <div class="flex items-center space-x-4 mb-6">
              <div class="flex text-accent">
                ${stars}
              </div>
              <span class="text-sm text-slate-500 dark:text-slate-400">(${product.reviews} Đánh giá khách hàng)</span>
            </div>
            <div class="text-3xl font-bold text-accent mb-6">
              ${this.formatPrice(product.price)}
            </div>
            <div class="prose prose-slate dark:prose-invert mb-8">
              <p class="text-lg leading-relaxed">${product.description}</p>
              <ul class="text-sm space-y-2 list-none p-0">
                ${product.features.map(f => `<li class="flex items-center"><span class="material-symbols-outlined text-accent text-sm mr-2">check_circle</span> ${f}</li>`).join('')}
              </ul>
            </div>
            <div class="mb-10">
              <h3 class="text-lg font-bold mb-4 dark:text-white">Chọn Hình Thức Liên Hệ Mua Hàng:</h3>
              <div class="grid grid-cols-1 gap-4">
                <a href="https://zalo.me/0356781839" target="_blank" class="flex items-center justify-center space-x-3 bg-[#0068ff] text-white font-bold py-4 px-6 rounded-lg hover:bg-[#0052cc] transition-all transform hover:scale-105 shadow-lg">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 2.237.738 4.304 1.986 5.97L2.05 21.95l4.098-1.903C7.813 21.315 9.826 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
                  <span>Zalo: 0356 781 839</span>
                </a>
                <a href="https://www.facebook.com/share/1FRKNhXwZX/?mibextid=wwXIfr" target="_blank" class="flex items-center justify-center space-x-3 bg-[#1877f2] text-white font-bold py-4 px-6 rounded-lg hover:bg-[#145dbf] transition-all transform hover:scale-105 shadow-lg">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  <span>Facebook: Tuấn</span>
                </a>
                <button onclick="alert('Địa chỉ: JAGERMEISTER – SHIP HỎA TỐC FULL MAP\\nVũng Tàu – Bà Rịa – Long Điền – Phước Hải – Phước Tỉnh\\n\\nGọi ngay: 0356 781 839')" class="flex items-center justify-center space-x-3 bg-accent text-primary font-bold py-4 px-6 rounded-lg hover:bg-accent/90 transition-all transform hover:scale-105 shadow-lg">
                  <span class="material-symbols-outlined">location_on</span>
                  <span>Xem Địa Chỉ Ship</span>
                </button>
              </div>
              <p class="text-sm text-slate-500 dark:text-slate-400 mt-4 text-center italic">
                💯 Ship hỏa tốc full map | Gọi là có liền | Giá tốt nhất khu vực
              </p>
            </div>
          </div>
        </div>
        <section>
          <div class="flex items-center justify-between mb-8">
            <h2 class="font-display text-2xl font-bold uppercase dark:text-white">Sản phẩm liên quan</h2>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            ${relatedProducts}
          </div>
        </section>
      </main>
      ${this.getFooterTemplate()}
    `;
  }

  getContactTemplate() {
    return `
      ${this.getHeaderTemplate()}
      <section class="relative h-[300px] flex items-center justify-center overflow-hidden">
        <img alt="Premium wine cellar background" class="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1EIAzfOI4zcvzpwFCK3_xlJK_ROaZ7_bN0leTDRbGN_SPzeVmgdjCyu4tiB4Ug12kRqXLKoyojtOipe8osuKND6nwUp-LQIJSQ3365UaULfHEKYJXqf2-Adxrb1sum8jSWPT8CyZ6wjhqn2nCDW1YrY1n5pO83nVKT2ngueqDG_gBlBYFqzeulmAIA6QtOPljmtVth0-F0ByUPydIrJ5yZlnhG62POWGQApL18pNrya8qK5MxLHrc24ZNBAVf5FCs0fBJk7QmXe3f" />
        <div class="absolute inset-0 bg-primary/90"></div>
        <div class="relative z-10 text-center px-4">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-4">Liên Hệ Với Chúng Tôi</h2>
          <div class="flex items-center justify-center space-x-2 text-accent font-medium uppercase text-sm">
            <a class="hover:text-white transition-colors" href="/" data-link>Trang Chủ</a>
            <span class="text-white">/</span>
            <span>Liên Hệ</span>
          </div>
        </div>
      </section>
      <main class="container mx-auto px-4 py-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div class="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-xl border-t-4 border-accent">
            <h3 class="text-2xl font-display font-bold mb-2 text-primary dark:text-white">Gửi Yêu Cầu Tư Vấn</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-8">Quý khách có nhu cầu đặt hàng số lượng lớn hoặc cần tư vấn về các dòng rượu cao cấp, vui lòng điền thông tin bên dưới.</p>
            <form action="#" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Họ và Tên *</label>
                  <input class="w-full bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-md focus:ring-accent focus:border-accent px-4 py-3" placeholder="Nguyễn Văn A" type="text" />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Số Điện Thoại *</label>
                  <input class="w-full bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-md focus:ring-accent focus:border-accent px-4 py-3" placeholder="090x xxx xxx" type="tel" />
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Địa chỉ Email</label>
                <input class="w-full bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-md focus:ring-accent focus:border-accent px-4 py-3" placeholder="example@gmail.com" type="email" />
              </div>
              <div>
                <label class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Nội Dung Cần Tư Vấn *</label>
                <textarea class="w-full bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-md focus:ring-accent focus:border-accent px-4 py-3" placeholder="Nhập yêu cầu của bạn tại đây..." rows="5"></textarea>
              </div>
              <button class="w-full bg-primary hover:bg-opacity-95 text-white font-bold py-4 rounded-md transition-all flex items-center justify-center space-x-2" type="submit">
                <span class="material-symbols-outlined">send</span>
                <span>GỬI YÊU CẦU NGAY</span>
              </button>
            </form>
          </div>
          <div class="space-y-8">
            <div>
              <h3 class="text-2xl font-display font-bold mb-6 text-primary dark:text-white">Thông Tin Liên Hệ</h3>
              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="material-symbols-outlined text-accent">location_on</span>
                  </div>
                  <div>
                    <h4 class="font-bold text-lg dark:text-white">Khu Vực Giao Hàng</h4>
                    <p class="text-gray-600 dark:text-gray-400">Vũng Tàu – Bà Rịa – Long Điền – Phước Hải – Phước Tỉnh</p>
                    <p class="text-xs text-accent italic mt-1">Ship hỏa tốc - Gọi là có liền!</p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="material-symbols-outlined text-accent">call</span>
                  </div>
                  <div>
                    <h4 class="font-bold text-lg dark:text-white">Liên Hệ Đặt Hàng</h4>
                    <p class="text-gray-600 dark:text-gray-400 font-bold text-xl">Zalo: 0356 781 839</p>
                    <p class="text-xs text-accent italic">Hỗ trợ 24/7 - Ship hỏa tốc full map</p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="material-symbols-outlined text-accent">facebook</span>
                  </div>
                  <div>
                    <h4 class="font-bold text-lg dark:text-white">Facebook</h4>
                    <a href="https://www.facebook.com/share/1FRKNhXwZX/?mibextid=wwXIfr" target="_blank" class="text-gray-600 dark:text-gray-400 hover:text-accent">Tuấn - Jagermeister Vũng Tàu</a>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="material-symbols-outlined text-accent">local_shipping</span>
                  </div>
                  <div>
                    <h4 class="font-bold text-lg dark:text-white">Khu Vực Ship Hàng</h4>
                    <p class="text-gray-600 dark:text-gray-400">Vũng Tàu – Bà Rịa – Long Điền – Phước Hải – Phước Tỉnh</p>
                    <p class="text-xs text-accent italic mt-1">Ship hỏa tốc - Gọi là có liền!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      ${this.getFooterTemplate()}
    `;
  }

  formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  }
}

// Khởi tạo router khi DOM ready
const router = new Router();

// Hàm cuộn mượt đến section
function scrollToSection(sectionId) {
  // Nếu không ở trang chủ, chuyển về trang chủ trước
  if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
    window.location.href = '/#' + sectionId;
    return;
  }

  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Xử lý hash khi load trang
window.addEventListener('load', () => {
  if (window.location.hash) {
    const sectionId = window.location.hash.substring(1);
    setTimeout(() => scrollToSection(sectionId), 100);
  }
});


// MOBILE MENU TOGGLE - Đơn giản nhất
(function initMobileMenu() {
  function setupMenu() {
    const btn = document.getElementById('menuBtn');
    const menu = document.getElementById('mobileMenu');
    const icon = document.getElementById('menuIcon');
    
    if (btn && menu && icon) {
      // Xóa event cũ nếu có
      btn.onclick = null;
      
      btn.onclick = function() {
        if (menu.classList.contains('hidden')) {
          menu.classList.remove('hidden');
          icon.textContent = 'close';
          document.body.style.overflow = 'hidden';
        } else {
          menu.classList.add('hidden');
          icon.textContent = 'menu';
          document.body.style.overflow = '';
        }
      };
      
      console.log('✅ Mobile menu initialized');
    } else {
      console.log('⏳ Waiting for mobile menu...');
    }
  }
  
  // Setup ngay lập tức
  setupMenu();
  
  // Setup sau khi DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupMenu);
  }
  
  // Setup lại nhiều lần để đảm bảo
  setTimeout(setupMenu, 100);
  setTimeout(setupMenu, 300);
  setTimeout(setupMenu, 500);
  setTimeout(setupMenu, 1000);
  
  // Quan sát DOM để setup khi element xuất hiện
  if (typeof MutationObserver !== 'undefined') {
    const observer = new MutationObserver(() => {
      const btn = document.getElementById('menuBtn');
      if (btn) {
        setupMenu();
      }
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
})();

// FLOATING BUTTONS TOGGLE - Đơn giản nhất
(function initFloatingButtons() {
  function setupFloatingButtons() {
    const toggleBtn = document.getElementById('toggle-floating');
    const floatingMenu = document.getElementById('floating-menu');
    
    if (toggleBtn && floatingMenu) {
      const icon = toggleBtn.querySelector('span');
      
      // Xóa event cũ nếu có
      toggleBtn.onclick = null;
      toggleBtn.ontouchend = null;
      
      function toggleMenu(e) {
        e.preventDefault();
        e.stopPropagation();
        
        if (floatingMenu.classList.contains('hidden')) {
          // Mở menu
          floatingMenu.classList.remove('hidden');
          floatingMenu.classList.add('flex');
          if (icon) icon.textContent = 'close';
        } else {
          // Đóng menu
          floatingMenu.classList.add('hidden');
          floatingMenu.classList.remove('flex');
          if (icon) icon.textContent = 'menu';
        }
      }
      
      // Hỗ trợ cả click và touch
      toggleBtn.onclick = toggleMenu;
      toggleBtn.ontouchend = toggleMenu;
      
      console.log('✅ Floating buttons initialized');
    } else {
      console.log('⏳ Waiting for floating buttons...');
    }
  }
  
  // Setup ngay lập tức
  setupFloatingButtons();
  
  // Setup sau khi DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupFloatingButtons);
  }
  
  // Setup lại nhiều lần để đảm bảo
  setTimeout(setupFloatingButtons, 100);
  setTimeout(setupFloatingButtons, 300);
  setTimeout(setupFloatingButtons, 500);
  setTimeout(setupFloatingButtons, 1000);
  
  // Setup lại mỗi khi route thay đổi
  window.addEventListener('popstate', () => {
    setTimeout(setupFloatingButtons, 300);
  });
  
  // Quan sát DOM để setup khi element xuất hiện
  if (typeof MutationObserver !== 'undefined') {
    const observer = new MutationObserver(() => {
      const toggleBtn = document.getElementById('toggle-floating');
      if (toggleBtn) {
        setupFloatingButtons();
      }
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
})();
