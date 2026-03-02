# Jagermeister Specialist - Landing Page

Landing page cao cấp cho Jagermeister với SPA routing, dễ dàng deploy lên Netlify.

## 🚀 Tính năng

- ✅ SPA (Single Page Application) với routing đỉnh cao
- ✅ Không cần build, deploy trực tiếp
- ✅ Responsive design hoàn hảo
- ✅ Dark mode support
- ✅ SEO friendly
- ✅ Dữ liệu sản phẩm có cấu trúc
- ✅ Tối ưu cho Netlify

## 📁 Cấu trúc dự án

```
├── index.html          # File HTML chính
├── app.js             # Router và logic SPA
├── data.js            # Dữ liệu sản phẩm
├── _redirects         # Cấu hình redirect cho Netlify
├── netlify.toml       # Cấu hình Netlify
└── README.md          # Tài liệu
```

## 🎯 Routes

- `/` - Trang chủ
- `/chi-tiet?id=<product-id>` - Chi tiết sản phẩm
- `/lien-he` - Liên hệ

## 🛠️ Deploy lên Netlify

### Cách 1: Drag & Drop
1. Truy cập https://app.netlify.com/drop
2. Kéo thả toàn bộ thư mục vào
3. Xong! Website đã live

### Cách 2: Git Deploy
1. Push code lên GitHub
2. Kết nối repository với Netlify
3. Deploy tự động

### Cách 3: Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

## 📦 Dữ liệu sản phẩm

Tất cả dữ liệu được quản lý trong `data.js`:
- Categories: 8 danh mục sản phẩm
- Products: 6 sản phẩm chi tiết
  1. Jagermeister 1000ml 35% - 550.000đ
  2. Jagermeister 700ml 35% - 450.000đ
  3. Combo Jager 700ml + Đầu Hươu + 2 Ly - 750.000đ
  4. Đầu Hươu Jagermeister - 90.000đ
  5. Ly Rượu Đế Tròn - 50.000đ
  6. Vòi Rót Rượu Jagermeister - 90.000đ
- Testimonials: 4 đánh giá khách hàng

## 🎨 Customization

### Thêm sản phẩm mới
Chỉnh sửa file `data.js`:
```javascript
PRODUCTS_DATA.products.push({
  id: 'product-id',
  name: 'Tên sản phẩm',
  category: 'category-id',
  price: 500000,
  // ... các thuộc tính khác
});
```

### Thay đổi màu sắc
Chỉnh sửa trong `index.html`:
```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#0D1B3E",
        accent: "#C5A059",
      }
    }
  }
}
```

## 📱 Responsive

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- Không cần build process
- CDN cho Tailwind CSS
- Lazy loading images
- Optimized animations

## 🔧 Maintenance

Để cập nhật nội dung:
1. Chỉnh sửa `data.js` cho dữ liệu
2. Chỉnh sửa `app.js` cho logic
3. Push changes hoặc re-deploy

## 📞 Support

Hotline: 0356 781 839
Email: contact@jager-specialist.com

---

Made with ❤️ for Jagermeister Specialist
