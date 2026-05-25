import React from 'react';
import { ArrowRight, TrendingUp, ShoppingCart, Package, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';
import { ImageWithFallback } from './figma/ImageWithFallback';

const SERVICES_BANNER = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080';

const serviceColors = ['#F9A223', '#10b981', '#6366f1'];
const serviceIcons = [TrendingUp, ShoppingCart, Package];

export function Services() {
  const { lang } = useLanguage();
  const t = translations[lang].services;

  return (
    <section
      id="services"
      aria-label="Our Services"
      style={{
        backgroundColor: 'var(--cb-bg-page)',
        padding: '0 0 120px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Banner Image ── */}
      <div
        className="services-banner"
        style={{
          width: '100%',
          minHeight: '340px',
          position: 'relative',
          overflow: 'hidden',
          marginBottom: '80px',
        }}
      >
        <ImageWithFallback
          src={SERVICES_BANNER}
          alt="Digital Marketing E-commerce Banner"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 40%',
            display: 'block',
          }}
        />

        {/* Dark gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.1) 100%)',
          }}
        />

        {/* Text overlay */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: 'clamp(48px, 8vw, 80px) clamp(24px, 6vw, 100px)',
            maxWidth: '1200px',
            margin: '0 auto',
            minHeight: '340px',
            boxSizing: 'border-box',
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#F9A223',
              marginBottom: '14px',
            }}
          >
            {t.eyebrow}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(1.4rem, 3.2vw, 2.8rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
              lineHeight: 1.2,
              marginBottom: '18px',
              whiteSpace: 'normal',
            }}
          >
            {t.h2}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(13px, 1.4vw, 16px)',
              color: 'rgba(255,255,255,0.82)',
              lineHeight: 1.7,
              maxWidth: '660px',
            }}
          >
            {t.body}
          </motion.p>
        </div>
      </div>

      {/* ── Cards ── */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '28px',
          }}
        >
          {t.items.map((svc, i) => {
            const Icon = serviceIcons[i];
            const color = serviceColors[i];

            return (
              <motion.div
                key={svc.number}
                initial={{ opacity: 0, y: 60, scale: 0.93 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -10,
                  scale: 1.025,
                  transition: { duration: 0.28, ease: 'easeOut' },
                }}
                style={{
                  borderRadius: '20px',
                  border: '1px solid var(--cb-border)',
                  backgroundColor: 'var(--cb-bg-card)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 50px ${color}28`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.05)';
                }}
              >
                {/* Card header */}
                <div
                  style={{
                    padding: '32px 32px 24px',
                    background: `linear-gradient(135deg, ${color}12 0%, ${color}04 100%)`,
                    borderBottom: '1px solid var(--cb-border)',
                    position: 'relative',
                  }}
                >
                  {/* Number badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--cb-bg-card)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      fontWeight: 800,
                      color: color,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                    }}
                  >
                    {svc.number}
                  </div>

                  {/* Icon */}
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '16px',
                      backgroundColor: `${color}18`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '18px',
                    }}
                  >
                    <Icon size={28} color={color} strokeWidth={1.75} />
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '20px',
                      fontWeight: 700,
                      color: 'var(--cb-text-primary)',
                      marginBottom: '12px',
                      lineHeight: 1.3,
                    }}
                  >
                    {svc.title}
                  </h3>

                  {/* Stars */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        size={13}
                        fill={j < 4 ? '#F9A223' : 'var(--cb-border)'}
                        color={j < 4 ? '#F9A223' : 'var(--cb-border)'}
                        strokeWidth={1}
                      />
                    ))}
                    <span
                      style={{
                        marginLeft: '6px',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: 'var(--cb-text-muted)',
                      }}
                    >
                      4.0
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div style={{ padding: '26px 32px 30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      color: 'var(--cb-text-secondary)',
                      lineHeight: 1.7,
                      marginBottom: '20px',
                    }}
                  >
                    {svc.desc}
                  </p>

                  {/* Items */}
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: '0 0 auto',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '9px',
                    }}
                  >
                    {svc.items.slice(0, 3).map((item, j) => (
                      <li
                        key={j}
                        style={{
                          display: 'flex',
                          gap: '10px',
                          alignItems: 'flex-start',
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '13px',
                          color: 'var(--cb-text-muted)',
                          lineHeight: 1.6,
                        }}
                      >
                        <span
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: color,
                            flexShrink: 0,
                            marginTop: '7px',
                          }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Footer */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '20px',
                      marginTop: '20px',
                      borderTop: '1px solid var(--cb-border)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: color,
                      }}
                    >
                      {t.more}
                    </span>
                    <ArrowRight size={16} color={color} strokeWidth={2.5} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .services-banner { min-height: 0 !important; }
        }
        @media (max-width: 1024px) and (min-width: 641px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 20px !important; }
        }
        @media (max-width: 640px) {
          .services-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
          #services { padding-bottom: 72px !important; }
          #services > div:last-child { padding: 0 16px !important; }
          .services-banner { margin-bottom: 48px !important; }
        }
      `}</style>
    </section>
  );
}