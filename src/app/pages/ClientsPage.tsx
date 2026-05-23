import { useOutletContext } from 'react-router';
import { motion } from 'motion/react';
import { Quote, Star, Heart, Shirt, BookOpen, Leaf, CreditCard, Cpu } from 'lucide-react';
import { Partners } from '../components/Partners';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import type { OutletContextType } from '../Root';

const CLIENTS_BANNER = 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080';

const testimonials = {
  vi: [
    {
      name: 'Nguyễn Minh Tú',
      role: 'CEO, Little Etoile Vietnam',
      avatar: '#6366F1',
      initials: 'MT',
      quote: 'CorgiBanana đã giúp chúng tôi tăng doanh thu trên Shopee & Lazada gấp 3 lần chỉ sau 6 tháng hợp tác. Đội ngũ chuyên nghiệp, báo cáo minh bạch và luôn đặt kết quả kinh doanh lên hàng đầu.',
      results: ['+280% GMV', '+150% Traffic'],
    },
    {
      name: 'Trần Khánh Linh',
      role: 'Marketing Director, MBCI',
      avatar: '#10B981',
      initials: 'KL',
      quote: 'Từ một thương hiệu chưa có hiện diện kỹ thuật số, CorgiBanana đã xây dựng cho chúng tôi hệ sinh thái Marketing hoàn chỉnh từ website, SEO đến social media. Kết quả vượt kỳ vọng.',
      results: ['+400% Organic Traffic', 'Top 3 Google'],
    },
    {
      name: 'Phạm Quốc Hùng',
      role: 'Founder, Young Sparks',
      avatar: '#F59E0B',
      initials: 'QH',
      quote: 'Dịch vụ Amazon Global của CorgiBanana đã mở ra thị trường quốc tế cho sản phẩm của chúng tôi. Chỉ sau 8 tháng, doanh thu xuất khẩu qua Amazon đã chiếm 40% tổng doanh số.',
      results: ['40% Export Revenue', '+$50K Monthly'],
    },
    {
      name: 'Lê Ngọc Bảo',
      role: 'CMO, Healthy Ageing Central',
      avatar: '#8B5CF6',
      initials: 'NB',
      quote: 'CorgiBanana không chỉ là nhà cung cấp dịch vụ mà là đối tác chiến lược thực sự. Họ hiểu ngành hàng của chúng tôi sâu sắc và luôn đề xuất giải pháp đúng thời điểm.',
      results: ['+200% Brand Awareness', '95% Satisfaction'],
    },
  ],
  en: [
    {
      name: 'Nguyen Minh Tu',
      role: 'CEO, Little Etoile Vietnam',
      avatar: '#6366F1',
      initials: 'MT',
      quote: 'CorgiBanana helped us triple our revenue on Shopee & Lazada in just 6 months. Professional team, transparent reporting, and always putting business results first.',
      results: ['+280% GMV', '+150% Traffic'],
    },
    {
      name: 'Tran Khanh Linh',
      role: 'Marketing Director, MBCI',
      avatar: '#10B981',
      initials: 'KL',
      quote: 'From a brand with no digital presence, CorgiBanana built us a complete marketing ecosystem from website, SEO to social media. The results exceeded all expectations.',
      results: ['+400% Organic Traffic', 'Top 3 Google'],
    },
    {
      name: 'Pham Quoc Hung',
      role: 'Founder, Young Sparks',
      avatar: '#F59E0B',
      initials: 'QH',
      quote: "CorgiBanana's Amazon Global service opened up the international market for our products. After just 8 months, export revenue through Amazon accounted for 40% of total sales.",
      results: ['40% Export Revenue', '+$50K Monthly'],
    },
    {
      name: 'Le Ngoc Bao',
      role: 'CMO, Healthy Ageing Central',
      avatar: '#8B5CF6',
      initials: 'NB',
      quote: 'CorgiBanana is not just a service provider but a true strategic partner. They understand our industry deeply and always propose the right solutions at the right time.',
      results: ['+200% Brand Awareness', '95% Satisfaction'],
    },
  ],
};

const industryIcons = [Heart, Shirt, BookOpen, Leaf, CreditCard, Cpu];
const industryColors = ['#EF4444', '#8B5CF6', '#3B82F6', '#10B981', '#F59E0B', '#6366F1'];

const industries = {
  vi: [
    { name: 'FMCG & Health', count: '30+' },
    { name: 'Thời trang & Lifestyle', count: '25+' },
    { name: 'Giáo dục & Edtech', count: '20+' },
    { name: 'F&B & Thực phẩm', count: '15+' },
    { name: 'Fintech & Tài chính', count: '10+' },
    { name: 'Công nghệ & SaaS', count: '12+' },
  ],
  en: [
    { name: 'FMCG & Health', count: '30+' },
    { name: 'Fashion & Lifestyle', count: '25+' },
    { name: 'Education & Edtech', count: '20+' },
    { name: 'F&B & Food', count: '15+' },
    { name: 'Fintech & Finance', count: '10+' },
    { name: 'Technology & SaaS', count: '12+' },
  ],
};

export function ClientsPage() {
  const { theme } = useOutletContext<OutletContextType>();
  const { lang } = useLanguage();
  const tests = testimonials[lang];
  const inds = industries[lang];

  return (
    <div style={{ paddingTop: '64px' }}>

      {/* ── Page Banner ── */}
      <div style={{ position: 'relative', minHeight: '480px', overflow: 'hidden' }}>
        {/* Background image — absolute fill */}
        <ImageWithFallback
          src={CLIENTS_BANNER}
          alt="CorgiBanana Clients"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 30%',
          }}
        />

        {/* Overlay — dark enough to show text but not fully opaque */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(15,23,42,0.90) 0%, rgba(30,41,59,0.78) 60%, rgba(249,162,35,0.30) 100%)',
        }} />

        {/* Content — relative so it sits above overlay */}
        <div style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 24px',
          textAlign: 'center',
          minHeight: '480px',
          boxSizing: 'border-box',
        }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F9A223', marginBottom: '12px' }}>
            {lang === 'vi' ? 'KHÁCH HÀNG & ĐỐI TÁC' : 'CLIENTS & PARTNERS'}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', lineHeight: 1.15, marginBottom: '14px', maxWidth: '680px' }}>
            {lang === 'vi' ? 'Đối Tác Chiến Lược – Cùng Nhau Phát Triển' : 'Strategic Partners – Growing Together'}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.85)', maxWidth: '480px', marginBottom: '40px', lineHeight: 1.7 }}>
            {lang === 'vi'
              ? 'Chúng tôi tự hào đồng hành cùng hơn 200+ thương hiệu và doanh nghiệp trên hành trình tăng trưởng số.'
              : 'We are proud to partner with 200+ brands and businesses on their digital growth journey.'}
          </motion.p>

          {/* Quick stats */}
          <div className="clients-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px 40px', width: '100%', maxWidth: '420px' }}>
            {[
              { value: '200+', label: lang === 'vi' ? 'Khách hàng & đối tác' : 'Clients & partners' },
              { value: '95%',  label: lang === 'vi' ? 'Tái ký hợp đồng' : 'Contract renewal' },
              { value: '5+',   label: lang === 'vi' ? 'Năm kinh nghiệm' : 'Years experience' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 + i * 0.08 }}
                style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(1.5rem, 3vw, 1.9rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>{s.value}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.75)', marginTop: '3px', lineHeight: 1.4 }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Partners Marquee ── */}
      <Partners theme={theme} hideBanner />

      {/* ── Industries ── */}
      <section style={{ backgroundColor: 'var(--cb-bg-alt)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F9A223', marginBottom: '12px' }}>
              {lang === 'vi' ? 'NGÀNH HÀNG' : 'INDUSTRIES'}
            </p>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--cb-text-primary)', lineHeight: 1.2 }}>
              {lang === 'vi' ? 'Đa Dạng Lĩnh Vực Hợp Tác' : 'Diverse Industries We Serve'}
            </h2>
          </div>

          <div className="ind-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {inds.map((ind, i) => {
              const Icon = industryIcons[i];
              const color = industryColors[i];
              return (
                <motion.div
                  key={ind.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  whileHover={{ y: -4 }}
                  style={{
                    padding: '22px 24px',
                    borderRadius: '14px',
                    backgroundColor: 'var(--cb-bg-card)',
                    border: '1px solid var(--cb-border)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    transition: 'box-shadow 0.2s',
                  }}
                >
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '12px',
                    backgroundColor: color + '15',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={20} color={color} strokeWidth={1.75} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 700, color: 'var(--cb-text-primary)', marginBottom: '3px' }}>{ind.name}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#F9A223', fontWeight: 600 }}>{ind.count} {lang === 'vi' ? 'thương hiệu' : 'brands'}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section style={{ backgroundColor: 'var(--cb-bg-page)', padding: '100px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F9A223', marginBottom: '12px' }}>
              {lang === 'vi' ? 'ĐÁNH GIÁ TỪ KHÁCH HÀNG' : 'CLIENT REVIEWS'}
            </p>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--cb-text-primary)', lineHeight: 1.2 }}>
              {lang === 'vi' ? 'Khách Hàng Nói Gì Về Chúng Tôi' : 'What Our Clients Say'}
            </h2>
          </div>

          <div className="test-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '28px' }}>
            {tests.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1 }}
                style={{ padding: '36px', borderRadius: '20px', backgroundColor: 'var(--cb-bg-card)', border: '1px solid var(--cb-border)', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
                <Quote size={28} color="#F9A223" strokeWidth={1.5} style={{ marginBottom: '20px', opacity: 0.7 }} />
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'var(--cb-text-secondary)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '24px' }}>
                  "{t.quote}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: t.avatar, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 700, color: '#fff', flexShrink: 0 }}>
                      {t.initials}
                    </div>
                    <div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 700, color: 'var(--cb-text-primary)' }}>{t.name}</div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'var(--cb-text-muted)' }}>{t.role}</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {t.results.map((r) => (
                      <span key={r} style={{ padding: '4px 10px', borderRadius: '100px', backgroundColor: 'rgba(249,162,35,0.1)', color: '#F9A223', fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 700 }}>
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '3px', marginTop: '16px' }}>
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} fill="#F9A223" color="#F9A223" strokeWidth={1} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: '#0F172A', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 800, color: '#fff', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            {lang === 'vi' ? 'Trở thành đối tác chiến lược tiếp theo' : 'Become Our Next Strategic Partner'}
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: '32px' }}>
            {lang === 'vi' ? 'Hãy cùng xây dựng câu chuyện thành công của bạn với CorgiBanana.' : "Let's build your success story together with CorgiBanana."}
          </p>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .ind-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .test-grid { grid-template-columns: 1fr !important; }
          .clients-stats-grid { gap: 12px 24px !important; max-width: 340px !important; }
        }
        @media (max-width: 580px) {
          .ind-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}