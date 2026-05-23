import { useEffect, useRef } from 'react';
import { Package, Edit3, Heart, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

const statIcons = [Package, Edit3, Heart, Clock];
const statColors = ['#6366F1', '#10B981', '#F59E0B', '#EC4899'];

export function Stats() {
  const ref = useRef<HTMLElement>(null);
  const { lang } = useLanguage();
  const t = translations[lang].stats;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: '500+', label: t.items[0].label, desc: t.items[0].desc, Icon: statIcons[0] },
    { value: '200+', label: t.items[1].label, desc: t.items[1].desc, Icon: statIcons[1] },
    { value: '95%', label: t.items[2].label, desc: t.items[2].desc, Icon: statIcons[2] },
    { value: '24/7', label: t.items[3].label, desc: t.items[3].desc, Icon: statIcons[3] },
  ];

  return (
    <section
      ref={ref}
      aria-label="Thống kê thành công"
      style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        opacity: 0.4,
        pointerEvents: 'none',
      }} />

      {/* Gradient orb */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(249,162,35,0.12) 0%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div className="reveal" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#F9A223',
            marginBottom: '16px',
          }}>
            {t.eyebrow}
          </div>
          <h2 className="reveal reveal-delay-1" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#FFFFFF',
            lineHeight: 1.2,
            marginBottom: '20px',
          }}>
            {t.h2}
          </h2>
          <p className="reveal reveal-delay-2" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '17px',
            color: 'rgba(255,255,255,0.7)',
            lineHeight: 1.75,
            maxWidth: '640px',
            margin: '0 auto',
          }}>
            {t.body}
          </p>
        </div>

        {/* Stats cards */}
        <div className="stats-grid-cards" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
        }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="reveal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '20px',
                padding: '40px 28px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top gradient line */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: `linear-gradient(90deg, ${statColors[i]}, ${statColors[i]}80)`,
              }} />

              {/* Icon */}
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                backgroundColor: statColors[i] + '20',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
              }}>
                <stat.Icon size={32} color={statColors[i]} strokeWidth={1.75} />
              </div>

              {/* Value */}
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '40px',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                marginBottom: '12px',
              }}>
                {stat.value}
              </div>

              {/* Label */}
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.9)',
                marginBottom: '16px',
                lineHeight: 1.4,
              }}>
                {stat.label}
              </div>

              {/* Description */}
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.6,
              }}>
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        /* ── Stats: 4 cột → 2 cột → 1 cột ── */
        @media (max-width: 900px) {
          .stats-grid-cards { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .stats-grid-cards { grid-template-columns: 1fr !important; }
        }
        /* ── Stats: giảm padding và font size trên mobile ── */
        @media (max-width: 640px) {
          section[aria-label="Thống kê thành công"] { padding: 72px 0 !important; }
          .stats-grid-cards > div { padding: 28px 20px !important; }
        }
      `}</style>
    </section>
  );
}