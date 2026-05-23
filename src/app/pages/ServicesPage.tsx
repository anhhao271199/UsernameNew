import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';
import { Services } from '../components/Services';
import { useLanguage } from '../contexts/LanguageContext';

const process = {
  vi: [
    { num: '01', title: 'Phân tích & Nghiên cứu', desc: 'Tìm hiểu sâu về doanh nghiệp, thị trường, đối thủ cạnh tranh và insight khách hàng mục tiêu.' },
    { num: '02', title: 'Lập chiến lược', desc: 'Xây dựng kế hoạch tổng thể với KPI rõ ràng, lộ trình thực thi chi tiết và phân bổ ngân sách tối ưu.' },
    { num: '03', title: 'Triển khai & Thực thi', desc: 'Đội ngũ chuyên gia triển khai đồng bộ từ content, ads, SEO đến vận hành TMĐT với quy trình chuẩn hóa.' },
    { num: '04', title: 'Đo lường & Tối ưu', desc: 'Báo cáo định kỳ minh bạch, phân tích dữ liệu chuyên sâu và tối ưu liên tục để cải thiện hiệu quả.' },
  ],
  en: [
    { num: '01', title: 'Analysis & Research', desc: 'Deep-dive into your business, market landscape, competitors, and target customer insights.' },
    { num: '02', title: 'Strategy Planning', desc: 'Build a comprehensive plan with clear KPIs, detailed execution roadmap, and optimal budget allocation.' },
    { num: '03', title: 'Execution & Deployment', desc: 'Our specialist team simultaneously executes content, ads, SEO, and e-commerce operations with standardised processes.' },
    { num: '04', title: 'Measure & Optimise', desc: 'Transparent periodic reporting, deep data analysis, and continuous optimisation to improve performance.' },
  ],
};

const whyUs = {
  vi: [
    '5+ năm kinh nghiệm thực chiến trong Digital Marketing & E-commerce',
    'Đội ngũ chuyên biệt: không outsource, không "one-size-fits-all"',
    'KPI rõ ràng, báo cáo minh bạch từng tuần / tháng',
    'Tích hợp Online–Offline (Omnichannel) chuyên nghiệp',
    'Am hiểu thị trường Việt Nam và khu vực Đông Nam Á',
    'Dịch vụ toàn diện từ Marketing → E-com → Retail trong một đối tác',
  ],
  en: [
    '5+ years of hands-on experience in Digital Marketing & E-commerce',
    'Dedicated team: no outsourcing, no one-size-fits-all approach',
    'Clear KPIs, transparent weekly/monthly reporting',
    'Professional Online–Offline (Omnichannel) integration',
    'Deep understanding of Vietnam and Southeast Asian markets',
    'Full-service from Marketing → E-com → Retail in a single partner',
  ],
};

export function ServicesPage() {
  const { lang } = useLanguage();
  const proc = process[lang];
  const why = whyUs[lang];

  return (
    <div style={{ paddingTop: '64px' }}>
      {/* ── Existing Services component (banner + 3 cards) ── */}
      <Services />

      {/* ── How We Work ── */}
      <section style={{ backgroundColor: 'var(--cb-bg-alt)', padding: '100px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F9A223', marginBottom: '12px' }}>
              {lang === 'vi' ? 'QUY TRÌNH LÀM VIỆC' : 'OUR PROCESS'}
            </p>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--cb-text-primary)', lineHeight: 1.2 }}>
              {lang === 'vi' ? 'Cách Chúng Tôi Làm Việc' : 'How We Work'}
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }} className="process-grid">
            {proc.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                style={{ position: 'relative' }}
              >
                {i < proc.length - 1 && (
                  <div style={{ position: 'absolute', top: '28px', left: '60%', width: '80%', height: '2px', backgroundColor: 'rgba(249,162,35,0.2)', zIndex: 0 }} />
                )}
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: '#F9A223', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', boxShadow: '0 4px 16px rgba(249,162,35,0.3)' }}>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', fontWeight: 800, color: '#fff' }}>{step.num}</span>
                  </div>
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', fontWeight: 700, color: 'var(--cb-text-primary)', marginBottom: '10px' }}>{step.title}</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'var(--cb-text-secondary)', lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 900px) { .process-grid { grid-template-columns: repeat(2, 1fr) !important; } } @media (max-width: 580px) { .process-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* ── Why Choose Us ── */}
      <section style={{ backgroundColor: 'var(--cb-bg-page)', padding: '100px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="why-grid">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F9A223', marginBottom: '14px' }}>
              {lang === 'vi' ? 'TẠI SAO CHỌN CHÚNG TÔI' : 'WHY CHOOSE US'}
            </p>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--cb-text-primary)', lineHeight: 1.2, marginBottom: '20px' }}>
              {lang === 'vi' ? 'Điểm Khác Biệt Của CorgiBanana' : 'What Sets CorgiBanana Apart'}
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'var(--cb-text-secondary)', lineHeight: 1.75 }}>
              {lang === 'vi'
                ? 'Chúng tôi không chỉ cung cấp dịch vụ — chúng tôi là đối tác chiến lược thực sự, đồng hành từ ý tưởng đến kết quả.'
                : 'We don\'t just provide services — we are your true strategic partner, with you from idea to result.'}
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {why.map((item, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <CheckCircle size={20} color="#10B981" strokeWidth={2} style={{ flexShrink: 0, marginTop: '1px' }} />
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'var(--cb-text-secondary)', lineHeight: 1.6 }}>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
        <style>{`@media (max-width: 768px) { .why-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ backgroundColor: '#0F172A', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 800, color: '#fff', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              {lang === 'vi' ? 'Sẵn sàng tăng trưởng cùng CorgiBanana?' : 'Ready to Grow with CorgiBanana?'}
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: '36px' }}>
              {lang === 'vi' ? 'Liên hệ ngay để nhận tư vấn miễn phí và khám phá giải pháp phù hợp với doanh nghiệp của bạn.' : 'Get in touch for a free consultation and discover the right solution for your business.'}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}