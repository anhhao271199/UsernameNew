import { useEffect, useRef } from 'react';
import { Rocket, Target } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { lang } = useLanguage();
  const t = translations[lang].about;

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

  return (
    <section
      id="about-us"
      ref={ref}
      aria-label="Về CorgiBanana"
      style={{
        backgroundColor: 'var(--cb-bg-alt)',
        padding: '120px 0',
      }}
    >
      <div
        className="about-grid"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: '45% 1fr',
          gap: '80px',
          alignItems: 'center',
        }}
      >
        {/* Left - Graph Visual */}
        <div className="reveal" style={{ position: 'relative' }}>
          <div style={{
            backgroundColor: 'var(--cb-bg-card)',
            borderRadius: '24px',
            padding: '48px 36px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
            border: '1px solid var(--cb-border)',
          }}>
            {/* Graph illustration */}
            <svg width="100%" height="300" viewBox="0 0 400 300" style={{ overflow: 'visible' }}>
              {/* Grid lines */}
              {[0, 1, 2, 3, 4].map((i) => (
                <line
                  key={i}
                  x1="40"
                  y1={250 - i * 50}
                  x2="380"
                  y2={250 - i * 50}
                  stroke="var(--cb-border)"
                  strokeWidth="1"
                  opacity="0.3"
                />
              ))}

              {/* X-axis labels */}
              {['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'].map((month, i) => (
                <text
                  key={month}
                  x={60 + i * 50}
                  y="275"
                  fill="var(--cb-text-muted)"
                  fontSize="11"
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                  fontWeight="500"
                >
                  {month}
                </text>
              ))}

              {/* Curve path */}
              <motion.path
                d="M 60 220 Q 110 200, 110 180 T 160 140 T 210 100 T 260 60 T 310 30"
                fill="none"
                stroke="#F9A223"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: 'easeOut' }}
                viewport={{ once: true }}
              />

              {/* Gradient fill under curve */}
              <defs>
                <linearGradient id="curveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#F9A223" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#F9A223" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 60 220 Q 110 200, 110 180 T 160 140 T 210 100 T 260 60 T 310 30 L 310 250 L 60 250 Z"
                fill="url(#curveGradient)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                viewport={{ once: true }}
              />

              {/* Highlight point */}
              <motion.circle
                cx="310"
                cy="30"
                r="6"
                fill="#F9A223"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 1.5 }}
                viewport={{ once: true }}
              />
              <motion.circle
                cx="310"
                cy="30"
                r="10"
                fill="none"
                stroke="#F9A223"
                strokeWidth="2"
                opacity="0.3"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 1.5 }}
                viewport={{ once: true }}
              />

              {/* Tooltip */}
              <motion.g
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.7 }}
                viewport={{ once: true }}
              >
                <rect x="270" y="-5" width="80" height="28" rx="6" fill="#F9A223" />
                <text x="310" y="14" fill="#fff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="Inter, sans-serif">
                  MAY ▲
                </text>
              </motion.g>
            </svg>

            {/* Stats below graph */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
              marginTop: '32px',
              paddingTop: '24px',
              borderTop: '1px solid var(--cb-border)',
            }}>
              {[
                { label: 'Revenue', value: '+140%', color: '#10b981' },
                { label: 'Growth', value: '+85%', color: '#F9A223' },
                { label: 'Clients', value: '+200', color: '#6366f1' },
              ].map((stat) => (
                <div key={stat.label} style={{ textAlign: 'center' }}>
                  <div style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '20px',
                    fontWeight: 700,
                    color: stat.color,
                    marginBottom: '4px',
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    color: 'var(--cb-text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Content */}
        <div>
          <div className="reveal" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--cb-accent)',
            marginBottom: '16px',
          }}>
            {t.eyebrow}
          </div>

          <h2 className="reveal reveal-delay-1" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: 'var(--cb-text-primary)',
            lineHeight: 1.15,
            marginBottom: '24px',
          }}>
            {t.h2}
          </h2>

          <p className="reveal reveal-delay-2" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '17px',
            color: 'var(--cb-text-secondary)',
            lineHeight: 1.75,
            marginBottom: '32px',
          }}>
            {t.body}
          </p>

          {/* Cards - Mission & Goal */}
          <div className="reveal reveal-delay-3" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}>
            {[
              { Icon: Rocket, title: t.mission.title, desc: t.mission.desc },
              { Icon: Target, title: t.goal.title, desc: t.goal.desc },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                  padding: '20px',
                  borderRadius: '12px',
                  border: '1px solid var(--cb-border)',
                  backgroundColor: 'var(--cb-bg-card)',
                  boxShadow: 'var(--cb-shadow-sm)',
                }}
              >
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--cb-accent-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <item.Icon size={20} strokeWidth={1.75} color="var(--cb-accent)" />
                </div>
                <div>
                  <div style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '15px',
                    fontWeight: 600,
                    color: 'var(--cb-text-primary)',
                    marginBottom: '4px',
                  }}>
                    {item.title}
                  </div>
                  <div style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    color: 'var(--cb-text-secondary)',
                    lineHeight: 1.6,
                  }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        /* ── About: 2 cột → 1 cột khi ≤900px ── */
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
        /* ── About: giảm padding trên mobile ── */
        @media (max-width: 640px) {
          #about-us { padding: 72px 0 !important; }
        }
      `}</style>
    </section>
  );
}