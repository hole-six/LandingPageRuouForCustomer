// Dữ liệu sản phẩm đỉnh cao
const PRODUCTS_DATA = {
  categories: [
    {
      id: 'jager-classic',
      name: 'JÄGERMEISTER CLASSIC',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWq2PIf10dTYJqZ-Qtk4EcwfjMY2XJWCABcMVsDygWAW3pS9RLplqrmorvUk27G0ULAX36BO7dNDJApjsqu6cfq3WW1azlCBhSI6Qfkcn2XHE51mVIG0-uQDzMSYx7_0DB-ShwkBxBnRwHmkeiSJ7mp-_Id6HFGVHJuQxD8MG9QMrQ4kUMYczaKX3a71k5K8ao-t29N6twyTTqgVUnTuNLMOY_ZsTCyhAhh5E2u5RSfpf_inYSOM_u3FCkpAbQtPWBkBB1afZgSRJw',
      description: 'Hương vị kinh điển từ 56 loại thảo mộc'
    },
    {
      id: 'jager-manifest',
      name: 'JÄGERMEISTER MANIFEST',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkHjmQN0A6mrycbRJtO36vg9q7lK8TgAWdfHqt-XWBcCeyoh7G7fwaRSZspmx71BEH1bP1XZdhEsyU4zSYO2OrBG-R51jciM19ibU3tyiQOAd2THQPScuB_ga7FSkGoNA54rYgpiygUzT0G2AYfJoVvB20Afs-17-xMF0G5xLJZRCZp84ike2EAW-hGQ3endL6d1jApqz_XRP7CkXwBdaKoNhL3ba7cDBC9v95uBFGU2wpc87cWIln92WSwi-pvyhPaUAQ6_HaTSy0',
      description: 'Phiên bản cao cấp với hương vị tinh tế hơn'
    },
    {
      id: 'gift-sets',
      name: 'HỘP QUÀ TẾT 2026',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXB-GAQvWXSXjJq-S03bFQohs-5nSAiHnjpklgZcOoEJnG_7KW4Cgc-MnxlcCckCMqtl2LwM8ua6zB2MORCESLPgBexa1BxjzW0Lj-Hx2gYvAZoiyoM6AowY7xklwdCT5SYIgiSm-1dB2us0NyTi5uiCe0MXASl3tFHG556B1RFQU7TsmpWVhKk_L-npD8j9S8PuV5s2_Q5v2vdLTJvtOwnBVktLoL7vrS7hWaGGm8gE03ZBOOeEHilSPOG8qv_QmLl6FjooM99gSd',
      description: 'Quà tặng sang trọng cho dịp Tết'
    },
    {
      id: 'limited-edition',
      name: 'LIMITED EDITION',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD10kLpeR4NhYXm-vLXQt40dKvn7Gi1NScZyVJAK3_BhJ6UEWKkmRT5KdUICFCrgv6FkCkh1YI4V_1tcoRGYzhmRhs3H30LStEnSt18L2aJgry8eEgnYGLJT2kAWlc4cF0G_GeNXxn_6offCf4dwIWYGKF4qILIhYI1K0dWBYSgtU2REzA7I4AZoo4HZUzC1Ie0-9wytt-1MuFxtZ4611VzjwO7bTmJw14bM9vwpb_P9I8pcZGLjWEktio9_TQQatCit_vzweWLP6hx',
      description: 'Phiên bản giới hạn độc quyền'
    },
    {
      id: 'cold-brew',
      name: 'COLD BREW COFFEE',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmVBTsaEGK3_NdwtPeh1ah3ujzGJ3KMBkFsRVT8bUxgic_r7Nc3BXSdUBnReA2PRgFmctmrz3rhw1pHtGHIhFNzHDz9KPukKhc5r8_YNxk2e8dCvfiJi_tEOM2PCsMWzW0xtrLbpjSMQr3yQSid41Zv3Xsw8uESsbXvJOEJvTs_98uHGx8vqsuNOiv4N0sH0o-GeeaXRRfdoNqhVIPWO0AEZbZtir4K_Yt1ZS7P5nLX3ama6uMTheiQuVdjlmR8qBpYFHJJ10GmiDE',
      description: 'Sự kết hợp hoàn hảo giữa rượu và cà phê'
    },
    {
      id: 'scharf',
      name: 'JÄGERMEISTER SCHARF',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAysXzIagdUJ8GH-ci6VWMivFfiAZCWieVkLAgh50a9JFT73Hqh983aWvA3x9KtnShF8HnTSGDxZ9oQZ6T1Y73rFLpHwKiIbK3jWJFM3Un0gtfl3krhdAkTii7NS7Z7ELofet-vyXRAd9Gdx2NDLgIhSIp4F2BcfJ0S90mNxLQAH7cMebFaaPa6PDETVw_QBw8De2dxHfJlrB854PUZfamTB1mVf5dXBS-J0l8EmRP9JT9pGXWBsqgQ4awAU1CUq-tosDvwy5BtvWV5',
      description: 'Phiên bản cay nồng đặc biệt'
    },
    {
      id: 'wines',
      name: 'RƯỢU VANG NHẬP KHẨU',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcmdUBq5zykBTWT004BywDmC3ACMGTns5k8upMJ-nPRfyExHtqvcWnZ-SjNyTfDHNvIREVZwjg-8um39v5G8HPIsv1w27V_jh1Ddy_uL93Vh1QTYRNkLYw0DwstUsFRhbjlsPAhp91miw3OAcH31WhKlePYpcAxIev_4uivDdoovbFh1-yT8RSf_geOJtj1kqB9eZrV3LZ1_efsDkWfNg2Y275i3c_0M2ZeoHwGkgcwKAlCKoHyJM4CFFiM7V9c3L7R5NqWpegdc8L',
      description: 'Rượu vang cao cấp từ các vùng nổi tiếng'
    },
    {
      id: 'accessories',
      name: 'PHỤ KIỆN RƯỢU',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVYTMy9xPYrrqXQni3sheOv9ZcIufgsad4mNzm85jPQgrxpDBv4d66jbsVXtSy9jmll7DBU_DBdO4AgAZcMLm9dTvH61Bq_DMeJTDt8GGZYOcq-2b_cdBg-8fE870Kt5gGJFIbVbc3tqolKllcBoj9IN9x2zPliJDKkw2hiBWe_5rjc4TaPrgto_1gNda0T_1Gf7TbTBiT-tqgISwtY_wiTKNGQeX2D4_xpjBqM6lDsq6lL0nf9YtV0KjHTv2geoeqjMgjpwDITgUH',
      description: 'Phụ kiện cao cấp cho người sành rượu'
    }
  ],

  products: [
    {
      id: 'jager-1000ml-35',
      name: 'RƯỢU THẢO MỘC JAGERMEISTER 1000ML 35%',
      category: 'jager-classic',
      price: 550000,
      image: 'images/ruou100ml.jpg',
      rating: 4.8,
      reviews: 156,
      origin: 'Đức',
      volume: '1000ml',
      alcohol: '35%',
      status: 'Còn hàng',
      description: 'Rượu Jagermeister ra đời năm 1934, được làm từ 56 loại thảo mộc khác nhau, trái cây, rễ và gia vị. Khi thưởng thức, người uống sẽ cảm nhận được mùi hương nồng nàn của các loại hoa trái, đan xen là mùi của rễ cây, nhân sâm và vị cay cay của các loại gia vị quế, hồi. Lớp vị đầu tiên ngọt dịu như mật ong hòa quyện với cam thảo, sau đó bùng nổ với các loại thảo mộc ấm nóng như quế, hồi và gừng.',
      features: [
        'Xuất xứ: Đức - Chính hãng 100%',
        'Nồng độ: 35%',
        'Dung tích: 1000ml',
        'Làm từ 56 loại thảo mộc',
        'Giá đã bao gồm VAT'
      ]
    },
    {
      id: 'jager-700ml-35',
      name: 'RƯỢU THẢO MỘC JAGERMEISTER 700ML 35%',
      category: 'jager-classic',
      price: 450000,
      image: 'images/ruou700ml.jpg',
      rating: 4.7,
      reviews: 203,
      origin: 'Đức',
      volume: '700ml',
      alcohol: '35%',
      status: 'Còn hàng',
      description: 'Jagermeister là tên một loại rượu mùi có nguồn gốc từ thảo mộc, nổi tiếng thế giới. Được làm từ 56 loại thảo mộc khác nhau bao gồm Cam Thảo, vỏ Cam Quýt, hoa Hồi, Nghệ Tây, hạt Anh Túc, Gừng, Nhân Sâm và quả Bách Xù. Thành phần chính là các loại thảo mộc nên rượu Jagermeister mang trong mình tính cách mạnh mẽ với hương vị đặc trưng.',
      features: [
        'Xuất xứ: Đức - Chính hãng 100%',
        'Nồng độ: 35%',
        'Dung tích: 700ml',
        'Làm từ 56 loại thảo mộc',
        'Giá đã bao gồm VAT'
      ]
    },
    {
      id: 'combo-jager-700-head-2glass',
      name: 'Combo Rượu Jagermeister 700ML + 1 Vòi Rót Đầu Hươu + 2 Ly Jagermeister',
      category: 'gift-sets',
      price: 750000,
      image: 'images/combo750.jpg',
      rating: 5.0,
      reviews: 89,
      origin: 'Đức',
      volume: '700ml',
      alcohol: '35%',
      status: 'Còn hàng',
      description: 'Combo hoàn hảo cho người yêu thích Jagermeister. Bao gồm rượu Jagermeister 700ml chính hãng, 1 vòi rót đầu hươu đặc trưng và 2 ly Jagermeister cao cấp. Phù hợp làm quà tặng sang trọng hoặc sử dụng cho các bữa tiệc.',
      features: [
        'Rượu Jagermeister 700ml 35%',
        '1 Vòi Rót Đầu Hươu Jagermeister',
        '2 Ly Jagermeister chuyên dụng',
        'Combo tiết kiệm, giá trị cao',
        'Hoàn hảo cho quà tặng'
      ]
    },
    {
      id: 'deer-pourer',
      name: 'Đầu Hươu Jagermeister',
      category: 'accessories',
      price: 90000,
      image: 'images/dauhuou.jpg',
      rating: 4.9,
      reviews: 67,
      origin: 'Phụ kiện chính hãng',
      volume: 'N/A',
      alcohol: 'N/A',
      status: 'Còn hàng',
      description: 'Đầu hươu Jagermeister là phụ kiện đặc biệt không thể thiếu của Fan rượu thảo mộc từ Đức. Chất liệu hợp kim kẽm cao cấp, nút đậy cao su, kích thước miệng chai phù hợp 18-22mm. Phù hợp với rượu Jagermeister 700ml và 1000ml, hoặc rượu vang.',
      features: [
        'Chất liệu: Hợp kim kẽm',
        'Nút đậy: Cao su',
        'Kích thước miệng chai: 18-22mm',
        'Phù hợp với chai 700ml và 1000ml',
        'Thiết kế biểu tượng đầu hươu'
      ]
    },
    {
      id: 'round-base-glass',
      name: 'Ly Rượu Đế Tròn',
      category: 'accessories',
      price: 50000,
      image: 'images/lyruoude.jpg',
      rating: 4.6,
      reviews: 45,
      origin: 'Phụ kiện',
      volume: 'N/A',
      alcohol: 'N/A',
      status: 'Còn hàng',
      description: 'Ly rượu đế tròn cao cấp, thiết kế sang trọng phù hợp với Jagermeister và các loại rượu mạnh khác. Chất liệu thủy tinh cao cấp, bền đẹp.',
      features: [
        'Chất liệu thủy tinh cao cấp',
        'Thiết kế đế tròn sang trọng',
        'Phù hợp với rượu mạnh',
        'Dễ dàng vệ sinh',
        'Giá cả phải chăng'
      ]
    },
    {
      id: 'jager-pourer',
      name: 'Vòi Rót Rượu Jagermeister',
      category: 'accessories',
      price: 90000,
      image: 'images/dauhuou.jpg',
      rating: 4.8,
      reviews: 52,
      origin: 'Phụ kiện chính hãng',
      volume: 'N/A',
      alcohol: 'N/A',
      status: 'Còn hàng',
      description: 'Vòi rót rượu Jagermeister - một phụ kiện đặc biệt không thể thiếu của Fan rượu thảo mộc từ Đức này. Chất liệu hợp kim kẽm, nút đậy cao su, kích thước miệng chai phù hợp 18-22mm. Phù hợp với rượu Jagermeister 700ml và 1000ml, hoặc rượu vang.',
      features: [
        'Chất liệu: Hợp kim kẽm',
        'Nút đậy: Cao su',
        'Kích thước miệng chai: 18-22mm',
        'Phù hợp với chai 700ml và 1000ml',
        'Rót rượu chính xác và tiện lợi'
      ]
    }
  ],

  testimonials: [
    {
      name: 'Anh Minh - Vũng Tàu',
      rating: 5,
      comment: 'Ship hỏa tốc cực nhanh, gọi là có liền. Rượu chính hãng, giá tốt. Sẽ ủng hộ lâu dài!',
      date: '2025-02-28'
    },
    {
      name: 'Chị Lan - Bà Rịa',
      rating: 5,
      comment: 'Combo quà tặng đẹp lắm, đầu hươu và ly rất sang. Bạn bè khen nức nở!',
      date: '2025-02-25'
    },
    {
      name: 'Anh Tuấn - Long Điền',
      rating: 5,
      comment: 'Lạnh sâu uống shot chuẩn vị thảo mộc Đức. Party đêm không thể thiếu Jager!',
      date: '2025-02-20'
    },
    {
      name: 'Anh Hùng - Phước Hải',
      rating: 5,
      comment: 'Giá 700ml chỉ 450K, 1000ml 550K quá hời. Pha Redbull quẩy hết nấc!',
      date: '2025-02-15'
    }
  ]
};

// Export để sử dụng trong app.js
window.PRODUCTS_DATA = PRODUCTS_DATA;
