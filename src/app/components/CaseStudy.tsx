import { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

// Placeholder avatars
const avatarColors = ['#6366f1', '#10b981', '#f59e0b'];

export function CaseStudy() {
  const ref = useRef<HTMLElement>(null);
  const { lang } = useLanguage();
  const t = translations[lang].caseStudy;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
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
      id="case-study"
      ref={ref}
      aria-label="Testimonials"
      style={{
        backgroundColor: 'var(--cb-bg-page)',
        padding: '100px 0',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="reveal" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            borderRadius: '100px',
            backgroundColor: 'rgba(249,162,35,0.1)',
            marginBottom: '16px',
          }}>
            <Quote size={14} color="#F9A223" strokeWidth={2} />
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#F9A223',
            }}>
              {t.eyebrow}
            </span>
          </div>

          <h2 className="reveal reveal-delay-1" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: 'var(--cb-text-primary)',
            marginBottom: '16px',
            lineHeight: 1.2,
          }}>
            {t.h2}
          </h2>
          <p className="reveal reveal-delay-2" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '15px',
            color: 'var(--cb-text-secondary)',
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            {t.body}
          </p>
        </div>

        {/* Testimonial cards */}
        <div
          className="testimonials-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
          }}
        >
          {t.slides.map((slide, i) => (
            <motion.div
              key={slide.client}
              className="reveal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{
                borderRadius: '20px',
                padding: '32px',
                backgroundColor: 'var(--cb-bg-card)',
                border: '1px solid var(--cb-border)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              {/* Avatar and info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                {/* Avatar placeholder */}
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${avatarColors[i]}, ${avatarColors[i]}cc)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#fff',
                  }}>
                    {slide.client.charAt(0)}
                  </span>
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: 700,
                    color: 'var(--cb-text-primary)',
                    marginBottom: '2px',
                  }}>
                    {slide.client}
                  </div>
                  <div style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    color: 'var(--cb-text-muted)',
                  }}>
                    {slide.category}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                color: 'var(--cb-text-secondary)',
                lineHeight: 1.7,
                fontStyle: 'italic',
              }}>
                "{slide.challenge}"
              </div>

              {/* Stats */}
              <div style={{
                display: 'flex',
                gap: '20px',
                paddingTop: '16px',
                borderTop: '1px solid var(--cb-border)',
              }}>
                {slide.results.map((result) => (
                  <div key={result.label}>
                    <div style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '20px',
                      fontWeight: 700,
                      color: avatarColors[i],
                      letterSpacing: '-0.02em',
                    }}>
                      {result.value}
                    </div>
                    <div style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '11px',
                      color: 'var(--cb-text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginTop: '2px',
                    }}>
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        /* ── CaseStudy: 3 cột → 2 cột → 1 cột ── */
        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
        /* ── CaseStudy: giảm padding mobile ── */
        @media (max-width: 640px) {
          #case-study { padding: 72px 0 !important; }
          #case-study > div { padding: 0 16px !important; }
        }
      `}</style>
    </section>
  );
}