import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { User, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const allArticles = {
  vi: [
    {
      id: 1,
      category: 'An ninh mạng',
      categoryColor: '#EF4444',
      date: '03 Th10',
      readTime: '5 phút',
      image: 'https://images.unsplash.com/photo-1666401565408-9b6b0741f0d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHNtYXJ0JTIwaG9tZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc4NDczNDgyfDA&ixlib=rb-4.1.0&q=80&w=800',
      title: 'Cảnh báo lỗ hổng "Silent Host": Hàng triệu thiết bị nhà thông minh có nguy cơ bị chiếm quyền điều khiển',
      excerpt: 'Các chuyên gia bảo mật vừa phát hiện một lỗ hổng nghiêm trọng ảnh hưởng đến hàng triệu thiết bị IoT, đặt ra nguy cơ bảo mật lớn cho người dùng nhà thông minh.',
    },
    {
      id: 2,
      category: 'Thị trường',
      categoryColor: '#10B981',
      date: '03 Th10',
      readTime: '6 phút',
      image: 'https://images.unsplash.com/photo-1762330467475-a565d04e1808?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjBjb250ZW50JTIwY3JlYXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3ODQ3MzQ4M3ww&ixlib=rb-4.1.0&q=80&w=800',
      title: 'Bùng nổ "Kinh tế Sáng tạo theo Yêu cầu": Nền tảng AI đang thay đổi cách các doanh nghiệp sản xuất nội dung',
      excerpt: 'Xu hướng AI-generated content đang tạo ra cuộc cách mạng trong ngành sản xuất nội dung, giúp doanh nghiệp giảm chi phí tới 60% trong khi tăng sản lượng content.',
    },
    {
      id: 3,
      category: 'Tin tức',
      categoryColor: '#6366F1',
      date: '03 Th10',
      readTime: '4 phút',
      image: 'https://images.unsplash.com/photo-1674027326254-88c960d8e561?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb29nbGUlMjBBSSUyMHRlY2hub2xvZ3klMjBhc3Npc3RhbnQlMjBmdXR1cmV8ZW58MXx8fHwxNzc4NDczNDg3fDA&ixlib=rb-4.1.0&q=80&w=800',
      title: 'Google ra mắt "Orion AI": Trợ lý AI thế hệ mới có khả năng dự đoán và tự động hóa cuộc sống của bạn',
      excerpt: 'Google chính thức giới thiệu Orion AI — trợ lý thông minh thế hệ mới với khả năng suy luận và hành động tự chủ vượt trội so với các thế hệ trước.',
    },
    {
      id: 4,
      category: 'E-Commerce',
      categoryColor: '#F9A223',
      date: '28 Th9',
      readTime: '7 phút',
      image: 'https://images.unsplash.com/photo-1733503711059-acde98cd7fdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjByZXRhaWwlMjB0ZWNobm9sb2d5JTIwZ3Jvd3RofGVufDF8fHx8MTc3ODU3NTUxOXww&ixlib=rb-4.1.0&q=80&w=800',
      title: 'Xu hướng TikTok Commerce 2025: Livestream và Shopping In-App đang thay đổi hành vi mua sắm tại Việt Nam',
      excerpt: 'TikTok Shop đã trở thành kênh TMĐT tăng trưởng nhanh nhất tại Việt Nam với GMV tăng 3x trong năm 2024, mở ra cơ hội lớn cho thương hiệu tiếp cận thế hệ Gen Z.',
    },
    {
      id: 5,
      category: 'Digital Marketing',
      categoryColor: '#8B5CF6',
      date: '20 Th9',
      readTime: '8 phút',
      image: 'https://images.unsplash.com/photo-1610702877467-6ced616325fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVhbSUyMG9mZmljZSUyMHdvcmtpbmd8ZW58MXx8fHwxNzc4NTc1NTE4fDA&ixlib=rb-4.1.0&q=80&w=800',
      title: 'Omnichannel Marketing 2025: Chiến lược đa kênh giúp thương hiệu tăng 3x doanh thu và trải nghiệm khách hàng',
      excerpt: 'Omnichannel không còn là xu hướng mà đã trở thành yêu cầu bắt buộc. Bài viết phân tích cách xây dựng hệ sinh thái kênh bán hàng đồng bộ và hiệu quả.',
    },
    {
      id: 6,
      category: 'E-Commerce',
      categoryColor: '#F9A223',
      date: '15 Th9',
      readTime: '6 phút',
      image: 'https://images.unsplash.com/photo-1769739576456-0aefcff3f4b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwbWVldGluZyUyMGJvYXJkcm9vbXxlbnwxfHx8fDE3Nzg1NzU1MjJ8MA&ixlib=rb-4.1.0&q=80&w=800',
      title: 'Amazon Brand Registry: Cách bảo vệ thương hiệu và tối ưu hiệu suất bán hàng trên thị trường quốc tế',
      excerpt: 'Hướng dẫn toàn diện về Amazon Brand Registry — từ quy trình đăng ký đến tận dụng các công cụ độc quyền để bảo vệ và phát triển thương hiệu trên Amazon.',
    },
  ],
  en: [
    {
      id: 1,
      category: 'Cybersecurity',
      categoryColor: '#EF4444',
      date: 'Oct 03',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1666401565408-9b6b0741f0d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHNtYXJ0JTIwaG9tZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc4NDczNDgyfDA&ixlib=rb-4.1.0&q=80&w=800',
      title: '"Silent Host" Vulnerability Warning: Millions of Smart Home Devices at Risk of Being Hijacked',
      excerpt: 'Security researchers have uncovered a critical vulnerability affecting millions of IoT devices, posing significant security risks to smart home users.',
    },
    {
      id: 2,
      category: 'Market',
      categoryColor: '#10B981',
      date: 'Oct 03',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1762330467475-a565d04e1808?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjBjb250ZW50JTIwY3JlYXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3ODQ3MzQ4M3ww&ixlib=rb-4.1.0&q=80&w=800',
      title: 'The "On-Demand Creative Economy" Boom: AI Platforms Are Reshaping How Businesses Produce Content',
      excerpt: 'AI-generated content is revolutionising the content production industry, helping businesses cut costs by up to 60% while increasing output.',
    },
    {
      id: 3,
      category: 'News',
      categoryColor: '#6366F1',
      date: 'Oct 03',
      readTime: '4 min',
      image: 'https://images.unsplash.com/photo-1674027326254-88c960d8e561?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb29nbGUlMjBBSSUyMHRlY2hub2xvZ3klMjBhc3Npc3RhbnQlMjBmdXR1cmV8ZW58MXx8fHwxNzc4NDczNDg3fDA&ixlib=rb-4.1.0&q=80&w=800',
      title: 'Google Unveils "Orion AI": Next-Gen AI Assistant Capable of Predicting and Automating Your Life',
      excerpt: 'Google officially unveiled Orion AI — a next-generation intelligent assistant with advanced reasoning and autonomous action capabilities.',
    },
    {
      id: 4,
      category: 'E-Commerce',
      categoryColor: '#F9A223',
      date: 'Sep 28',
      readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1733503711059-acde98cd7fdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjByZXRhaWwlMjB0ZWNobm9sb2d5JTIwZ3Jvd3RofGVufDF8fHx8MTc3ODU3NTUxOXww&ixlib=rb-4.1.0&q=80&w=800',
      title: 'TikTok Commerce Trends 2025: Livestream and In-App Shopping Are Transforming Vietnamese Consumer Behaviour',
      excerpt: 'TikTok Shop has become the fastest-growing e-commerce channel in Vietnam with GMV growing 3x in 2024, opening huge opportunities for brands targeting Gen Z.',
    },
    {
      id: 5,
      category: 'Digital Marketing',
      categoryColor: '#8B5CF6',
      date: 'Sep 20',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1610702877467-6ced616325fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVhbSUyMG9mZmljZSUyMHdvcmtpbmd8ZW58MXx8fHwxNzc4NTc1NTE4fDA&ixlib=rb-4.1.0&q=80&w=800',
      title: 'Omnichannel Marketing 2025: Multi-Channel Strategy That Helps Brands Triple Revenue and Customer Experience',
      excerpt: 'Omnichannel is no longer a trend but a must-have. This article analyses how to build a synchronised and effective sales channel ecosystem.',
    },
    {
      id: 6,
      category: 'E-Commerce',
      categoryColor: '#F9A223',
      date: 'Sep 15',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1769739576456-0aefcff3f4b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwbWVldGluZyUyMGJvYXJkcm9vbXxlbnwxfHx8fDE3Nzg1NzU1MjJ8MA&ixlib=rb-4.1.0&q=80&w=800',
      title: 'Amazon Brand Registry: How to Protect Your Brand and Optimise Sales Performance in International Markets',
      excerpt: 'A comprehensive guide to Amazon Brand Registry — from the registration process to leveraging exclusive tools to protect and grow your brand on Amazon.',
    },
  ],
};

// "All" filter key is always index 0 — use a stable sentinel instead of the translated string
const ALL_KEY = '__ALL__';

const categoryFilters = {
  vi: [
    { key: ALL_KEY,            label: 'Tất cả' },
    { key: 'Digital Marketing', label: 'Digital Marketing' },
    { key: 'E-Commerce',        label: 'E-Commerce' },
    { key: 'Thị trường',        label: 'Thị trường' },
    { key: 'Tin tức',           label: 'Tin tức' },
    { key: 'An ninh mạng',      label: 'An ninh mạng' },
  ],
  en: [
    { key: ALL_KEY,            label: 'All' },
    { key: 'Digital Marketing', label: 'Digital Marketing' },
    { key: 'E-Commerce',        label: 'E-Commerce' },
    { key: 'Market',            label: 'Market' },
    { key: 'News',              label: 'News' },
    { key: 'Cybersecurity',     label: 'Cybersecurity' },
  ],
};

export function NewsPage() {
  const { lang } = useLanguage();
  const articles = allArticles[lang];
  const filters = categoryFilters[lang];

  // ✅ FIX: state holds the stable key, not the translated label
  // Reset to ALL_KEY whenever lang changes so the filter always matches
  const [activeKey, setActiveKey] = useState<string>(ALL_KEY);
  useEffect(() => { setActiveKey(ALL_KEY); }, [lang]);

  const filtered = activeKey === ALL_KEY
    ? articles
    : articles.filter(a => a.category === activeKey);

  return (
    <>
      <style>{`
        .news-page-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        @media (max-width: 900px) {
          .news-page-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 580px) {
          .news-page-grid { grid-template-columns: 1fr !important; }
          .news-filter-bar { gap: 8px !important; }
          .news-filter-bar button { padding: 6px 14px !important; font-size: 12px !important; }
        }
      `}</style>

      {/* ── Header Banner ── */}
      <div style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', padding: '120px 24px 80px', textAlign: 'center' }}>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F9A223', marginBottom: '14px' }}>
          {lang === 'vi' ? 'TIN TỨC' : 'NEWS'}
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
          {lang === 'vi' ? 'Cập Nhật Xu Hướng Digital Marketing' : 'Digital Marketing Trend Updates'}
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
          style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.7)', maxWidth: '460px', margin: '0 auto', lineHeight: 1.7 }}>
          {lang === 'vi' ? 'Kiến thức chuyên sâu, xu hướng mới nhất về Digital Marketing, E-commerce & Retail.' : 'In-depth knowledge and the latest trends in Digital Marketing, E-commerce & Retail.'}
        </motion.p>
      </div>

      {/* ── Content ── */}
      <section style={{ backgroundColor: 'var(--cb-bg-page)', padding: '60px 24px 100px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Category Filter */}
          <div
            className="news-filter-bar"
            style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '48px', justifyContent: 'center' }}
          >
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveKey(f.key)}
                style={{
                  padding: '8px 20px', borderRadius: '100px', border: '1.5px solid',
                  borderColor: activeKey === f.key ? '#F9A223' : 'var(--cb-border)',
                  backgroundColor: activeKey === f.key ? '#F9A223' : 'var(--cb-bg-card)',
                  color: activeKey === f.key ? '#fff' : 'var(--cb-text-secondary)',
                  fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600,
                  cursor: 'pointer', transition: 'all 0.2s',
                }}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="news-page-grid">
            {filtered.map((article, i) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                style={{ borderRadius: '16px', border: '1px solid var(--cb-border)', backgroundColor: 'var(--cb-bg-card)', overflow: 'hidden', cursor: 'pointer' }}
                whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(0,0,0,0.08)' }}
              >
                {/* Thumbnail */}
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div style={{ position: 'absolute', top: '12px', left: '12px', padding: '5px 12px', borderRadius: '8px', backgroundColor: article.categoryColor, fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {article.category}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', gap: '16px', marginBottom: '12px', flexWrap: 'wrap' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'var(--cb-text-muted)' }}>
                      <User size={11} /> CorgiBanana
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'var(--cb-text-muted)' }}>
                      <Clock size={11} /> {article.readTime}
                    </span>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'var(--cb-text-muted)', marginLeft: 'auto' }}>
                      {article.date}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 700, color: 'var(--cb-text-primary)', lineHeight: 1.5, marginBottom: '10px' }}>
                    {article.title}
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'var(--cb-text-secondary)', lineHeight: 1.65, marginBottom: '16px' }}>
                    {article.excerpt}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, color: article.categoryColor }}>
                    {lang === 'vi' ? 'Đọc thêm' : 'Read more'}
                    <ArrowRight size={13} strokeWidth={2.5} />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--cb-text-muted)', fontFamily: 'Inter, sans-serif' }}>
              {lang === 'vi' ? 'Không có bài viết nào trong danh mục này.' : 'No articles in this category.'}
            </div>
          )}
        </div>
      </section>
    </>
  );
}