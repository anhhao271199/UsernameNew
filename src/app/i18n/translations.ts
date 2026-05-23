export type Lang = 'vi' | 'en';

export const translations = {
  vi: {
    navbar: {
      links: [
        { label: 'Về chúng tôi', href: '/ve-chung-toi' },
        { label: 'Dịch vụ',      href: '/dich-vu' },
        { label: 'Case Study',   href: '/case-study' },
        { label: 'Khách hàng',  href: '/khach-hang' },
        { label: 'Tuyển dụng',  href: '/tuyen-dung' },
        { label: 'Tin tức',     href: '/tin-tuc' },
      ],
      contact:     'Liên hệ',
      contactFull: 'Liên hệ tư vấn',
      darkMode:    'Chế độ tối',
      lightMode:   'Chế độ sáng',
      openMenu:    'Mở menu',
      closeMenu:   'Đóng menu',
      switchToDark: 'Chuyển sang chế độ tối',
      switchToLight: 'Chuyển sang chế độ sáng',
    },

    hero: {
      badge:    'CORGIBANANA — Đối tác tăng trưởng số',
      title:    'Digital Marketing\nE-commerce & Retail',
      subtitle: 'Giải Pháp Toàn Diện — Đồng Hành Tăng Trưởng Bền Vững',
      body:     'Từ chiến lược marketing, vận hành thương mại điện tử đến giải pháp bán lẻ — chúng tôi là đối tác tin cậy giúp doanh nghiệp phát triển toàn diện và bền vững.',
      cta1:     'Tư vấn miễn phí',
      cta2:     'Xem How We Work',
      features: [
        { title: 'Giải pháp 3 trong 1',        desc: 'Marketing · E-com · Retail trong một hệ sinh thái', statLabel: 'hiệu quả' },
        { title: 'Quản lý gian hàng TMĐT',      desc: 'Shopee, Lazada, TikTok Shop — đa sàn chuyên nghiệp', statLabel: 'sàn TMĐT' },
        { title: 'Đội ngũ chuyên gia 5+ năm',   desc: 'Thực chiến, am hiểu thị trường Việt Nam & khu vực', statLabel: 'thương hiệu' },
        { title: 'Tích hợp đa kênh liền mạch',  desc: 'Online & Offline đồng bộ, tối ưu mọi điểm chạm', statLabel: 'đồng bộ' },
      ],
    },

    about: {
      eyebrow: 'VỀ CORGIBANANA',
      h2:      'Đối Tác Toàn Diện Digital Marketing, E-commerce & Retail',
      body:    'CorgiBanana được thành lập với sứ mệnh trở thành đối tác chiến lược và đáng tin cậy, đồng hành cùng doanh nghiệp trong hành trình xây dựng thương hiệu – mở rộng thị trường – tăng trưởng bền vững.',
      imgAlt:  'Đội ngũ CorgiBanana làm việc sáng tạo',
      mission: {
        title: 'Sứ mệnh',
        desc:  '5+ năm kinh nghiệm trong ngành Marketing & Thương mại điện tử',
      },
      goal: {
        title: 'Mục tiêu',
        desc:  'Đồng hành tăng trưởng bền vững cho doanh nghiệp Việt Nam và quốc tế',
      },
    },

    stats: {
      eyebrow: 'THÀNH TÍCH',
      h2:      'Con Số Nói Lên Tất Cả',
      items: [
        { label: 'Dự án',    desc: 'Dự án đã triển khai thành công trên nhiều lĩnh vực' },
        { label: 'Hợp tác',  desc: 'Đối tác và khách hàng tin tưởng đồng hành' },
        { label: 'Hài lòng', desc: 'Tỷ lệ khách hàng hài lòng với kết quả' },
        { label: 'Hỗ trợ',   desc: 'Đội ngũ hỗ trợ sẵn sàng mọi lúc mọi nơi' },
      ],
    },

    services: {
      eyebrow: 'Giải Pháp Toàn Diện — Đồng Hành Tăng Trưởng Bền Vững',
      h2:      'Digital Marketing E-commerce & Retail',
      body:    'Từ chiến lược marketing, vận hành thương mại điện tử đến giải pháp bán lẻ — chúng tôi là đối tác tin cậy giúp doanh nghiệp phát triển toàn diện và bền vững.',
      more:    'Xem thêm',
      items: [
        {
          number: '01',
          title: 'Digital Marketing',
          desc:  'Giải pháp end-to-end từ chiến lược → thực thi → tối ưu, mang lại kết quả kinh doanh thực tế và bền vững.',
          items: [
            'Digital Marketing tổng thể: nghiên cứu thị trường, insight, kế hoạch truyền thông đa kênh',
            'SEO & Content Marketing: onpage/offpage/technical, blog, PR, video, social content',
            'Performance Ads: Google, Meta, TikTok, Zalo, YouTube — KPI rõ ràng',
            'Thiết kế & Nhận diện thương hiệu: logo, bộ nhận diện, banner, video',
            'Phát triển Website: website, landing page, tracking, analytics',
          ],
        },
        {
          number: '02',
          title: 'E-Commerce',
          desc:  'Tối ưu toàn bộ chuỗi giá trị TMĐT từ vận hành gian hàng đến phát triển doanh số, giúp thương hiệu mở rộng thị trường trong và ngoài nước.',
          items: [
            'Amazon Global: quản lý tài khoản, tối ưu Listing/Store/Advertising, nghiên cứu sản phẩm ngành hàng tiềm năng',
            'Shopee, Lazada, TikTok Shop: gian hàng chuẩn, traffic & conversion, chương trình khuyến mãi',
            'Quản lý đa kênh (Omnichannel): đồng bộ online–offline, kho và đơn hàng',
          ],
        },
        {
          number: '03',
          title: 'Retail',
          desc:  'Cung cấp giải pháp retail & fulfillment toàn diện, giúp doanh nghiệp yên tâm từ khâu mua hàng quốc tế đến phân phối sản phẩm đến tay khách hàng.',
          items: [
            'Xuất nhập khẩu: thủ tục mua hàng quốc tế, phân phối hàng trọn gói',
            'Kho vận: quản lý nhập–xuất–tồn, bảo quản, điều phối hàng hóa',
            'Xử lý đơn hàng: tiếp nhận, đóng gói, giao nhận, chăm sóc sau bán',
          ],
        },
      ],
    },

    caseStudy: {
      eyebrow:        'CASE STUDY',
      h2:             'Câu Chuyện Thành Công',
      body:           'Những kết quả thực tế từ các dự án CorgiBanana đã triển khai.',
      challengeLabel: 'Thách thức',
      solutionLabel:  'Giải pháp',
      prevLabel:      'Case study trước',
      nextLabel:      'Case study tiếp theo',
      slides: [
        {
          client:    'Edutech Plus',
          category:  'Giáo dục trực tuyến',
          desc:      'Nền tảng cung cấp khóa học kỹ năng mềm trực tuyến.',
          challenge: 'Tỷ lệ học viên bỏ học giữa chừng cao, thiếu sự tương tác và động lực học tập.',
          solution:  'Áp dụng Gamification (game hóa) vào lộ trình học và xây dựng cộng đồng học viên trên ứng dụng.',
          results: [
            { value: '+70%',  label: 'Hoàn thành khóa học' },
            { value: '+200%', label: 'Tương tác cộng đồng' },
          ],
        },
        {
          client:    'S-Marketing Agency',
          category:  'Digital Marketing',
          desc:      'Dịch vụ quảng cáo và truyền thông kỹ thuật số.',
          challenge: 'Khó khăn trong việc theo dõi và báo cáo hiệu quả của nhiều chiến dịch quảng cáo đa kênh.',
          solution:  'Xây dựng một hệ thống Dashboard tập trung, tự động tổng hợp dữ liệu từ Google Ads, Facebook Ads.',
          results: [
            { value: '-80%', label: 'Thời gian báo cáo' },
            { value: '+50%', label: 'Tốc độ ra quyết định' },
          ],
        },
        {
          client:    'App Vay Nhanh',
          category:  'Fintech',
          desc:      'Công nghệ tài chính - Cho vay tiêu dùng P2P.',
          challenge: 'Tỷ lệ người dùng hoàn tất hồ sơ vay thấp do quy trình phức tạp, khó hiểu.',
          solution:  'Tối ưu hóa luồng UI/UX trên ứng dụng, đơn giản hóa các bước và tích hợp AI chấm điểm tín dụng.',
          results: [
            { value: '+45%', label: 'Duyệt hồ sơ thành công' },
            { value: '-60%', label: 'Thời gian chờ đợi' },
          ],
        },
      ],
    },

    partners: {
      eyebrow: 'ĐỐI TÁC',
      h2:      'Khách Hàng & Đối Tác Tin Cậy',
    },

    recruitment: {
      badge: 'ĐANG TUYỂN DỤNG',
      companyIntro: 'CorgiBanana đang tìm kiếm những tài năng trẻ, nhiệt huyết và sáng tạo để cùng nhau xây dựng đội ngũ vững mạnh trong lĩnh vực Digital Marketing, E-commerce và Retail.',
      highlights: ['Mức lương hấp dẫn', 'Văn hóa cởi mở', 'Phát triển rõ ràng', 'Đào tạo chuyên nghiệp'],
      title: 'Cơ Hội Phát Triển Sự Nghiệp Cùng CorgiBanana',
      description: 'Chúng tôi tin rằng con người là tài sản quý giá nhất. Tại CorgiBanana, bạn sẽ được làm việc trong môi trường năng động, sáng tạo và có nhiều cơ hội thăng tiến.',
      cta: 'Xem vị trí tuyển dụng',
      ctaHref: '/tuyen-dung',
    },

    news: {
      eyebrow: 'TIN TỨC',
      h2:      'Cập Nhật Xu Hướng Digital Marketing',
      noComments: 'No Comments',
      articles: [
        {
          category:      'an ninh mạng',
          date:          '03 Th10',
          categoryColor: '#ef4444',
          title:         'Cảnh báo lỗ hổng "Silent Host": Hàng triệu thiết bị nhà thông minh có nguy cơ bị chiếm quyền điều khiển',
        },
        {
          category:      'thị trường',
          date:          '03 Th10',
          categoryColor: '#10b981',
          title:         'Bùng nổ "Kinh tế Sáng tạo theo Yêu cầu": Nền tảng AI đang thay đổi cách các doanh nghiệp sản xuất nội dung',
        },
        {
          category:      'tin tức',
          date:          '03 Th10',
          categoryColor: '#6366f1',
          title:         'Google ra mắt "Orion AI": Trợ lý AI thế hệ mới có khả năng dự đoán và tự động hóa cuộc sống của bạn',
        },
      ],
    },

    footer: {
      solutions: {
        title: 'Giải pháp',
        links: [
          { label: 'Digital Marketing', href: '/dich-vu' },
          { label: 'E-Commerce', href: '/dich-vu' },
          { label: 'Retail Solutions', href: '/dich-vu' },
        ],
      },
      company: {
        title: 'Công ty',
        links: [
          { label: 'Về chúng tôi', href: '/ve-chung-toi' },
          { label: 'Liên hệ', href: '#', onClick: 'contact' },
          { label: 'Case Study', href: '/case-study' },
          { label: 'Tuyển dụng', href: '/tuyen-dung' },
        ],
      },
      newsletter: {
        title: 'Nhận tin tức mới nhất',
        placeholder: 'Email của bạn',
        cta: 'Đăng ký',
      },
      copyright: '© 2025 CorgiBanana. All rights reserved.',
      address: 'Số 318 đường Quang Trung, P.Phan Đình Phùng, Thái Nguyên, Việt Nam',
      phone: '+84 901 234 567',
    },

    contact: {
      title:       'Yêu cầu tư vấn',
      subtitle:    'Chúng tôi sẽ phản hồi trong vòng 24 giờ',
      close:       'Đóng',
      name:        'Họ tên',
      namePlaceholder: 'Nguyễn Văn A',
      phone:       'Số điện thoại',
      phonePlaceholder: '0901 234 567',
      email:       'Email',
      company:     'Công ty',
      companyPlaceholder: 'Tên công ty của bạn',
      services:    'Dịch vụ quan tâm',
      message:     'Lời nhắn',
      messagePlaceholder: 'Mô tả nhu cầu của bạn...',
      submit:      'Gửi yêu cầu tư vấn',
    },
  },

  // ─────────────────── ENGLISH ───────────────────
  en: {
    navbar: {
      links: [
        { label: 'About Us',    href: '/ve-chung-toi' },
        { label: 'Services',    href: '/dich-vu' },
        { label: 'Case Study',  href: '/case-study' },
        { label: 'Clients',     href: '/khach-hang' },
        { label: 'Careers',     href: '/tuyen-dung' },
        { label: 'News',        href: '/tin-tuc' },
      ],
      contact:     'Contact',
      contactFull: 'Get in Touch',
      darkMode:    'Dark mode',
      lightMode:   'Light mode',
      openMenu:    'Open menu',
      closeMenu:   'Close menu',
      switchToDark: 'Switch to dark mode',
      switchToLight: 'Switch to light mode',
    },

    hero: {
      badge:    'CORGIBANANA — Your Digital Growth Partner',
      title:    'Digital Marketing\nE-commerce & Retail',
      subtitle: 'Complete Solutions — Sustainable Growth Together',
      body:     'From marketing strategy and e-commerce operations to retail solutions — we are the trusted partner helping businesses grow comprehensively and sustainably.',
      cta1:     'Free Consultation',
      cta2:     'See How We Work',
      features: [
        { title: '3-in-1 Solution',             desc: 'Marketing · E-com · Retail in one ecosystem', statLabel: 'efficiency' },
        { title: 'E-commerce Store Management', desc: 'Shopee, Lazada, TikTok Shop — multi-platform', statLabel: 'platforms' },
        { title: '5+ Years Expert Team',        desc: 'Battle-tested, deep knowledge of Vietnam & regional markets', statLabel: 'brands' },
        { title: 'Seamless Omnichannel',        desc: 'Online & Offline sync, optimise every touchpoint', statLabel: 'sync rate' },
      ],
    },

    about: {
      eyebrow: 'ABOUT CORGIBANANA',
      h2:      'Your Complete Partner for Digital Marketing, E-commerce & Retail',
      body:    'CorgiBanana was founded with a mission to be a strategic and reliable partner, accompanying businesses on their journey of brand building – market expansion – sustainable growth.',
      imgAlt:  'CorgiBanana team working creatively',
      mission: {
        title: 'Mission',
        desc:  '5+ years of experience in Marketing & E-commerce industry',
      },
      goal: {
        title: 'Vision',
        desc:  'Driving sustainable growth for businesses in Vietnam and internationally',
      },
    },

    stats: {
      eyebrow: 'ACHIEVEMENTS',
      h2:      'Numbers That Speak for Themselves',
      items: [
        { label: 'Projects',     desc: 'Successfully delivered projects across multiple industries' },
        { label: 'Partners',     desc: 'Trusted partners and clients walking alongside us' },
        { label: 'Satisfaction', desc: 'Client satisfaction rate with delivered results' },
        { label: 'Support',      desc: 'Our team ready to assist anytime, anywhere' },
      ],
    },

    services: {
      eyebrow: 'Complete Solutions — Sustainable Growth Together',
      h2:      'Digital Marketing E-commerce & Retail',
      body:    'From marketing strategy and e-commerce operations to retail solutions — we are the trusted partner helping businesses grow comprehensively and sustainably.',
      more:    'Learn more',
      items: [
        {
          number: '01',
          title: 'Digital Marketing',
          desc:  'End-to-end solutions from strategy → execution → optimisation, delivering real and sustainable business outcomes.',
          items: [
            'Holistic Digital Marketing: market research, insights, multi-channel communication plans',
            'SEO & Content Marketing: on-page/off-page/technical, blog, PR, video, social content',
            'Performance Ads: Google, Meta, TikTok, Zalo, YouTube — clear KPIs',
            'Brand Design & Identity: logo, brand kit, banners, video',
            'Web Development: website, landing page, tracking, analytics',
          ],
        },
        {
          number: '02',
          title: 'E-Commerce',
          desc:  'Optimise the entire e-commerce value chain from store operations to revenue growth, helping brands expand domestically and internationally.',
          items: [
            'Amazon Global: account management, Listing/Store/Advertising optimisation, product research in high-potential categories',
            'Shopee, Lazada, TikTok Shop: optimised storefronts, traffic & conversion, promotional campaigns',
            'Omnichannel Management: online–offline sync, inventory & order management',
          ],
        },
        {
          number: '03',
          title: 'Retail',
          desc:  'Providing comprehensive retail & fulfillment solutions, letting businesses focus on growth while we handle everything from international sourcing to last-mile delivery.',
          items: [
            'Import & Export: international procurement procedures, full-package distribution',
            'Warehousing & Logistics: inbound/outbound/stock management, storage, goods coordination',
            'Order Fulfilment: intake, packing, delivery, after-sales care',
          ],
        },
      ],
    },

    caseStudy: {
      eyebrow:        'CASE STUDY',
      h2:             'Success Stories',
      body:           'Real results from projects CorgiBanana has delivered.',
      challengeLabel: 'Challenge',
      solutionLabel:  'Solution',
      prevLabel:      'Previous case study',
      nextLabel:      'Next case study',
      slides: [
        {
          client:    'Edutech Plus',
          category:  'Online Education',
          desc:      'Platform providing online soft-skills courses.',
          challenge: 'High learner drop-off rate mid-course due to lack of engagement and motivation.',
          solution:  'Applied Gamification to the learning path and built a learner community inside the app.',
          results: [
            { value: '+70%',  label: 'Course completion' },
            { value: '+200%', label: 'Community engagement' },
          ],
        },
        {
          client:    'S-Marketing Agency',
          category:  'Digital Marketing',
          desc:      'Digital advertising and communications services.',
          challenge: 'Difficulty tracking and reporting campaign performance across multiple ad channels.',
          solution:  'Built a centralised Dashboard that automatically aggregates data from Google Ads and Facebook Ads.',
          results: [
            { value: '-80%', label: 'Reporting time' },
            { value: '+50%', label: 'Decision-making speed' },
          ],
        },
        {
          client:    'App Vay Nhanh',
          category:  'Fintech',
          desc:      'Financial technology – P2P consumer lending.',
          challenge: 'Low loan application completion rate due to a complex, confusing process.',
          solution:  'Optimised the in-app UI/UX flow, simplified steps, and integrated AI credit scoring.',
          results: [
            { value: '+45%', label: 'Successful approvals' },
            { value: '-60%', label: 'Wait time' },
          ],
        },
      ],
    },

    partners: {
      eyebrow: 'PARTNERS',
      h2:      'Trusted Clients & Partners',
    },

    recruitment: {
      badge: 'NOW HIRING',
      companyIntro: 'CorgiBanana is looking for young, passionate, and creative talents to build a strong team in Digital Marketing, E-commerce, and Retail.',
      highlights: ['Competitive Salary', 'Open Culture', 'Clear Growth Path', 'Professional Training'],
      title: 'Career Growth Opportunities with CorgiBanana',
      description: 'We believe people are our most valuable asset. At CorgiBanana, you will work in a dynamic, creative environment with many opportunities for advancement.',
      cta: 'View open positions',
      ctaHref: '/tuyen-dung',
    },

    news: {
      eyebrow: 'NEWS',
      h2:      'Digital Marketing Trend Updates',
      noComments: 'No Comments',
      articles: [
        {
          category:      'cybersecurity',
          date:          'Oct 03',
          categoryColor: '#ef4444',
          title:         '"Silent Host" Vulnerability Warning: Millions of Smart Home Devices at Risk of Being Hijacked',
        },
        {
          category:      'market',
          date:          'Oct 03',
          categoryColor: '#10b981',
          title:         'The "On-Demand Creative Economy" Boom: AI Platforms Are Reshaping How Businesses Produce Content',
        },
        {
          category:      'news',
          date:          'Oct 03',
          categoryColor: '#6366f1',
          title:         'Google Unveils "Orion AI": Next-Gen AI Assistant Capable of Predicting and Automating Your Life',
        },
      ],
    },

    footer: {
      solutions: {
        title: 'Solutions',
        links: [
          { label: 'Digital Marketing', href: '/dich-vu' },
          { label: 'E-Commerce', href: '/dich-vu' },
          { label: 'Retail Solutions', href: '/dich-vu' },
        ],
      },
      company: {
        title: 'Company',
        links: [
          { label: 'About Us', href: '/ve-chung-toi' },
          { label: 'Contact', href: '#', onClick: 'contact' },
          { label: 'Case Study', href: '/case-study' },
          { label: 'Careers', href: '/tuyen-dung' },
        ],
      },
      newsletter: {
        title: 'Get the latest news',
        placeholder: 'Your email',
        cta: 'Subscribe',
      },
      copyright: '© 2025 CorgiBanana. All rights reserved.',
      address: 'No. 318 Quang Trung Street, Phan Dinh Phung Ward, Thai Nguyen, Vietnam',
      phone: '+84 901 234 567',
    },

    contact: {
      title:       'Request a Consultation',
      subtitle:    'We will respond within 24 hours',
      close:       'Close',
      name:        'Full name',
      namePlaceholder: 'John Smith',
      phone:       'Phone number',
      phonePlaceholder: '+1 234 567 890',
      email:       'Email',
      company:     'Company',
      companyPlaceholder: 'Your company name',
      services:    'Services of interest',
      message:     'Message',
      messagePlaceholder: 'Describe your needs...',
      submit:      'Send consultation request',
    },
  },
} as const;

export type Translations = typeof translations['vi'];