import { motion } from 'motion/react';
import { CheckCircle, BarChart2, Search, Layers } from 'lucide-react';
import { CaseStudy } from '../components/CaseStudy';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const CASE_BANNER = 'https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080';

const methodology = {
  vi: [
    { icon: Search,    color: '#6366F1', title: 'Phân tích vấn đề',      desc: 'Chẩn đoán chính xác điểm nghẽn, xác định nguyên nhân gốc rễ thay vì chữa triệu chứng.' },
    { icon: Layers,    color: '#10B981', title: 'Giải pháp tùy chỉnh',   desc: 'Không có công thức chung, mỗi dự án là một bộ giải pháp được thiết kế riêng cho từng bài toán.' },
    { icon: BarChart2, color: '#F9A223', title: 'Đo lường & Chứng minh', desc: 'Mọi kết quả đều được đo lường bằng dữ liệu thực, báo cáo minh bạch và có thể kiểm chứng.' },
  ],
  en: [
    { icon: Search,    color: '#6366F1', title: 'Problem Diagnosis',  desc: 'Accurately identify bottlenecks and root causes rather than treating symptoms.' },
    { icon: Layers,    color: '#10B981', title: 'Custom Solutions',   desc: 'No one-size-fits-all template — every project gets a bespoke solution designed for its unique challenge.' },
    { icon: BarChart2, color: '#F9A223', title: 'Measure & Prove',    desc: 'All results are measured with real data, transparent reporting, and full verifiability.' },
  ],
};

const highlights = {
  vi: [
    { value: '15+', label: 'Case studies thành công' },
    { value: '3x',  label: 'Tăng trưởng trung bình' },
    { value: '95%', label: 'Khách hàng tái ký hợp đồng' },
    { value: '6',   label: 'Lĩnh vực đa dạng' },
  ],
  en: [
    { value: '15+', label: 'Successful case studies' },
    { value: '3x',  label: 'Average growth' },
    { value: '95%', label: 'Client renewal rate' },
    { value: '6',   label: 'Diverse industries' },
  ],
};

export function CaseStudyPage() {
  const { lang } = useLanguage();
  const meth = methodology[lang];
  const high = highlights[lang];

  return (
    <div style={{ paddingTop: '64px' }}>

      {/* ── Page Banner ── */}
      <div style={{ position: 'relative', minHeight: '480px', overflow: 'hidden' }}>
        {/* Background image — absolute fill */}
        <ImageWithFallback
          src={CASE_BANNER}
          alt="Case Study Banner"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 40%',
          }}
        />

        {/* Overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(15,23,42,0.92) 0%, rgba(30,41,59,0.80) 60%, rgba(15,23,42,0.6) 100%)',
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
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F9A223', marginBottom: '14px' }}>
            CASE STUDY
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(1.8rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>
            {lang === 'vi' ? 'Câu Chuyện Thành Công' : 'Success Stories'}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.2 }}
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, maxWidth: '540px', margin: '0 auto' }}>
            {lang === 'vi'
              ? 'Những kết quả thực tế từ các dự án CorgiBanana đã triển khai trên nhiều ngành hàng.'
              : 'Real results from CorgiBanana projects delivered across multiple industries.'}
          </motion.p>

          {/* Highlight stats */}
          <div className="case-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px 48px', marginTop: '48px', width: '100%', maxWidth: '400px' }}>
            {high.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 800, color: '#F9A223', letterSpacing: '-0.02em' }}>{h.value}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginTop: '4px', lineHeight: 1.4 }}>{h.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Existing Case Study cards ── */}
      <CaseStudy />

      {/* ── Methodology ── */}
      <section style={{ backgroundColor: 'var(--cb-bg-alt)', padding: '100px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F9A223', marginBottom: '12px' }}>
              {lang === 'vi' ? 'PHƯƠNG PHÁP LUẬN' : 'METHODOLOGY'}
            </p>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--cb-text-primary)', lineHeight: 1.2 }}>
              {lang === 'vi' ? 'Cách Chúng Tôi Tạo Ra Kết Quả' : 'How We Create Results'}
            </h2>
          </div>

          <div className="meth-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
            {meth.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
                  style={{ padding: '36px', borderRadius: '20px', backgroundColor: 'var(--cb-bg-card)', border: '1px solid var(--cb-border)', textAlign: 'center' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: m.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <Icon size={28} color={m.color} strokeWidth={2} />
                  </div>
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', fontWeight: 700, color: 'var(--cb-text-primary)', marginBottom: '12px' }}>{m.title}</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'var(--cb-text-secondary)', lineHeight: 1.7 }}>{m.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: '#F9A223', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 800, color: '#fff', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            {lang === 'vi' ? 'Doanh nghiệp của bạn có thể là case study tiếp theo' : 'Your business could be the next success story'}
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: '32px' }}>
            {lang === 'vi' ? 'Hãy cùng chúng tôi xây dựng một câu chuyện thành công cho thương hiệu của bạn.' : "Let's build a success story together for your brand."}
          </p>
          <CheckCircle size={0} style={{ display: 'none' }} />
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .meth-grid { grid-template-columns: 1fr !important; }
          .case-stats-grid { gap: 20px 32px !important; max-width: 320px !important; }
        }
      `}</style>
    </div>
  );
}