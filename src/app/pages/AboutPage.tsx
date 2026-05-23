import { useOutletContext } from 'react-router';
import { motion } from 'motion/react';
import { Target, Users, Award, Globe, Zap, Heart } from 'lucide-react';
import { About } from '../components/About';
import { Stats } from '../components/Stats';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import type { OutletContextType } from '../Root';

const ABOUT_BANNER = 'https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080';

const values = {
  vi: [
    { icon: Target, color: '#F9A223', title: 'Tập trung vào kết quả',  desc: 'Mọi chiến lược đều hướng đến mục tiêu kinh doanh thực tế, đo lường được và bền vững.' },
    { icon: Heart,  color: '#EF4444', title: 'Đồng hành chân thành',   desc: 'Chúng tôi làm việc như một phần của team khách hàng, không chỉ là nhà cung cấp dịch vụ.' },
    { icon: Zap,    color: '#6366F1', title: 'Sáng tạo & đổi mới',    desc: 'Không ngừng tìm kiếm giải pháp mới, ứng dụng công nghệ và xu hướng thị trường mới nhất.' },
    { icon: Globe,  color: '#10B981', title: 'Tầm nhìn quốc tế',      desc: 'Kết nối doanh nghiệp Việt Nam với thị trường toàn cầu thông qua Amazon, e-commerce xuyên biên giới.' },
    { icon: Users,  color: '#8B5CF6', title: 'Đội ngũ chuyên biệt',   desc: '5+ năm kinh nghiệm thực chiến, am hiểu sâu về Digital Marketing, E-commerce & Retail tại VN.' },
    { icon: Award,  color: '#F59E0B', title: 'Chất lượng cam kết',    desc: 'Quy trình làm việc chuẩn hóa, báo cáo minh bạch và cam kết KPI rõ ràng trong từng dự án.' },
  ],
  en: [
    { icon: Target, color: '#F9A223', title: 'Results-focused',       desc: 'Every strategy targets real, measurable, and sustainable business goals.' },
    { icon: Heart,  color: '#EF4444', title: 'Genuine Partnership',   desc: 'We work as an extension of your team, not just a service vendor.' },
    { icon: Zap,    color: '#6366F1', title: 'Creative & Innovative', desc: 'Constantly exploring new solutions, applying the latest technologies and market trends.' },
    { icon: Globe,  color: '#10B981', title: 'Global Vision',         desc: 'Connecting Vietnamese businesses to global markets through Amazon and cross-border e-commerce.' },
    { icon: Users,  color: '#8B5CF6', title: 'Specialist Team',       desc: '5+ years of hands-on experience with deep expertise in Digital Marketing, E-commerce & Retail in Vietnam.' },
    { icon: Award,  color: '#F59E0B', title: 'Quality Commitment',    desc: 'Standardised workflows, transparent reporting, and clear KPI commitments in every project.' },
  ],
};

const milestones = {
  vi: [
    { year: '2019', title: 'Thành lập',           desc: 'CorgiBanana ra đời với sứ mệnh trở thành đối tác Digital Marketing toàn diện cho doanh nghiệp Việt Nam.' },
    { year: '2020', title: 'Mở rộng E-commerce',  desc: 'Bắt đầu triển khai dịch vụ quản lý gian hàng Shopee, Lazada — phục vụ hơn 20 thương hiệu đầu tiên.' },
    { year: '2022', title: 'Amazon Global',        desc: 'Ra mắt dịch vụ Amazon Global, giúp doanh nghiệp Việt xuất khẩu sản phẩm ra thị trường quốc tế.' },
    { year: '2024', title: '200+ đối tác',         desc: 'Vượt mốc 200+ khách hàng và đối tác tin cậy, mở rộng sang thị trường Đông Nam Á và quốc tế.' },
  ],
  en: [
    { year: '2019', title: 'Founded',              desc: 'CorgiBanana was established with a mission to be the all-in-one Digital Marketing partner for Vietnamese businesses.' },
    { year: '2020', title: 'E-commerce Expansion', desc: 'Launched storefront management services for Shopee and Lazada, serving over 20 initial brands.' },
    { year: '2022', title: 'Amazon Global',        desc: 'Launched Amazon Global services, helping Vietnamese businesses export their products to international markets.' },
    { year: '2024', title: '200+ Partners',        desc: 'Surpassed 200+ trusted clients and partners, expanding into Southeast Asia and international markets.' },
  ],
};

export function AboutPage() {
  useOutletContext<OutletContextType>();
  const { lang } = useLanguage();
  const vals = values[lang];
  const miles = milestones[lang];

  return (
    <div style={{ paddingTop: '64px' }}>

      {/* ── Page Hero Banner ── */}
      <div style={{ position: 'relative', minHeight: '420px', overflow: 'hidden' }}>
        {/* Background image — absolute fill */}
        <ImageWithFallback
          src={ABOUT_BANNER}
          alt="CorgiBanana Team"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 30%',
          }}
        />

        {/* Overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.5) 60%, rgba(15,23,42,0.2) 100%)',
        }} />

        {/* Content — relative so it flows with content */}
        <div style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: 'clamp(64px, 10vw, 90px) clamp(24px, 6vw, 100px)',
          maxWidth: '1200px',
          margin: '0 auto',
          minHeight: '420px',
          boxSizing: 'border-box',
        }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F9A223', marginBottom: '14px' }}
          >
            {lang === 'vi' ? 'VỀ CORGIBANANA' : 'ABOUT CORGIBANANA'}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(1.6rem, 4vw, 3.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', lineHeight: 1.15, maxWidth: '680px', marginBottom: '16px' }}
          >
            {lang === 'vi'
              ? 'Đối Tác Toàn Diện Digital Marketing, E-commerce & Retail'
              : 'Your Complete Partner for Digital Marketing, E-commerce & Retail'}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, maxWidth: '520px' }}
          >
            {lang === 'vi'
              ? 'CorgiBanana được thành lập với sứ mệnh trở thành đối tác chiến lược đáng tin cậy, đồng hành cùng doanh nghiệp trong hành trình phát triển bền vững.'
              : 'CorgiBanana was founded with the mission of being a trusted strategic partner, accompanying businesses on their sustainable growth journey.'}
          </motion.p>
        </div>
      </div>

      {/* ── Existing About section ── */}
      <About />

      {/* ── Timeline / Milestones ── */}
      <section style={{ backgroundColor: 'var(--cb-bg-page)', padding: '100px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F9A223', marginBottom: '12px' }}>
              {lang === 'vi' ? 'HÀNH TRÌNH' : 'OUR JOURNEY'}
            </p>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--cb-text-primary)', lineHeight: 1.2 }}>
              {lang === 'vi' ? 'Từng Bước Phát Triển' : 'Every Step of Growth'}
            </h2>
          </div>

          <div className="timeline-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
            {miles.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                style={{ position: 'relative', paddingTop: '20px' }}
              >
                {/* Connector line */}
                {i < miles.length - 1 && (
                  <div
                    className="timeline-connector"
                    style={{
                      position: 'absolute', top: '36px', left: '50%',
                      width: '100%', height: '2px',
                      background: 'linear-gradient(to right, #F9A223, rgba(249,162,35,0.2))',
                      zIndex: 0,
                    }}
                  />
                )}
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '50%',
                    backgroundColor: '#F9A223',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 16px',
                    boxShadow: '0 4px 16px rgba(249,162,35,0.3)',
                  }}>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 800, color: '#fff' }}>{m.year}</span>
                  </div>
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 700, color: 'var(--cb-text-primary)', marginBottom: '8px' }}>{m.title}</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'var(--cb-text-secondary)', lineHeight: 1.65 }}>{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section style={{ backgroundColor: 'var(--cb-bg-alt)', padding: '100px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F9A223', marginBottom: '12px' }}>
              {lang === 'vi' ? 'GIÁ TRỊ CỐT LÕI' : 'CORE VALUES'}
            </p>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--cb-text-primary)', lineHeight: 1.2 }}>
              {lang === 'vi' ? 'Những Giá Trị Chúng Tôi Sống' : 'The Values We Live By'}
            </h2>
          </div>

          <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {vals.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  style={{
                    padding: '32px', borderRadius: '20px',
                    backgroundColor: 'var(--cb-bg-card)',
                    border: '1px solid var(--cb-border)',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                  }}
                >
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '14px',
                    backgroundColor: v.color + '18',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '20px',
                  }}>
                    <Icon size={24} color={v.color} strokeWidth={2} />
                  </div>
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', fontWeight: 700, color: 'var(--cb-text-primary)', marginBottom: '10px' }}>{v.title}</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'var(--cb-text-secondary)', lineHeight: 1.7 }}>{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <Stats />

      {/* ── CTA ── */}
      <section style={{ backgroundColor: 'var(--cb-bg-page)', padding: '100px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F9A223', marginBottom: '16px' }}>
              {lang === 'vi' ? 'SẴN SÀNG HỢP TÁC?' : 'READY TO COLLABORATE?'}
            </p>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--cb-text-primary)', lineHeight: 1.2, marginBottom: '20px' }}>
              {lang === 'vi' ? 'Hãy Nói Chuyện Với Chúng Tôi' : "Let's Talk About Your Business"}
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: 'var(--cb-text-secondary)', lineHeight: 1.7, marginBottom: '36px' }}>
              {lang === 'vi'
                ? 'Từ 30 phút tư vấn miễn phí, chúng tôi sẽ hiểu rõ bài toán kinh doanh và đề xuất giải pháp phù hợp nhất.'
                : 'In a free 30-minute consultation, we will understand your business challenges and propose the best solution.'}
            </p>
          </motion.div>
        </div>
      </section>

      <style>{`
        /* Timeline */
        @media (max-width: 768px) {
          .timeline-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 40px 24px !important; }
          .timeline-connector { display: none !important; }
        }
        @media (max-width: 420px) {
          .timeline-grid { grid-template-columns: 1fr !important; }
        }
        /* Values */
        @media (max-width: 900px) { .values-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 580px) { .values-grid { grid-template-columns: 1fr !important; } }
        /* About banner padding mobile */
        @media (max-width: 640px) {
          .about-banner-content { padding: 56px 24px !important; }
        }
      `}</style>
    </div>
  );
}