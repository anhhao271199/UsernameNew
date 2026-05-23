import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

const SALVARITY_LIGHT = 'https://res.cloudinary.com/da69eampk/image/upload/v1778567615/Salvarity_with_logo_white_2_i9lfff.svg';
const SALVARITY_DARK  = 'https://res.cloudinary.com/da69eampk/image/upload/v1778568681/Salvarity_with_logo_dark_2_vjttzx.svg';

const BASE_LOGOS = [
  { src: 'https://res.cloudinary.com/da69eampk/image/upload/v1778567572/max-biocare_little-etoile-logo_jespeo.png', alt: 'Little Etoile', themed: false },
  { src: 'https://res.cloudinary.com/da69eampk/image/upload/v1778567592/max-biocare_mbci-logo_irbplt.png', alt: 'MBCI', themed: false },
  { src: 'https://res.cloudinary.com/da69eampk/image/upload/v1778567602/max-biocare_young-sparksl-logo_iywwvm.png', alt: 'Young Sparks', themed: false },
  { src: 'https://res.cloudinary.com/da69eampk/image/upload/v1778567609/max-biocare_healthy-agegin-central-logo_j5cb3f.png', alt: 'Healthy Ageing Central', themed: false },
  { src: 'https://res.cloudinary.com/da69eampk/image/upload/v1778567612/max-biocare_belmarama-logo_m8nqx2.png', alt: 'Belmarama', themed: false },
  { src: SALVARITY_LIGHT, alt: 'Salvarity', themed: true },
];

interface PartnersProps {
  theme: 'light' | 'dark';
  hideBanner?: boolean;
}

export function Partners({ theme, hideBanner = false }: PartnersProps) {
  const { lang } = useLanguage();
  const t = translations[lang].partners;

  const LOGOS = BASE_LOGOS.map((logo) =>
    logo.themed
      ? { ...logo, src: theme === 'dark' ? SALVARITY_DARK : SALVARITY_LIGHT }
      : logo
  );

  return (
    <section id="customer" style={{ backgroundColor: 'var(--cb-bg-page)' }}>
      {/* Orange header banner — ẩn khi hideBanner=true */}
      {!hideBanner && (
        <div style={{
          backgroundColor: '#F9A223',
          padding: '56px 24px',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            color: 'rgba(255,255,255,0.85)',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            {lang === 'vi' ? 'KHÁCH HÀNG & ĐỐI TÁC' : 'CLIENTS & PARTNERS'}
          </p>
          <h2 style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '16px',
          }}>
            {lang === 'vi' ? 'Đối Tác Chiến Lược – Cùng Nhau Phát Triển' : 'Strategic Partners – Growing Together'}
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            color: 'rgba(255,255,255,0.85)',
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            {lang === 'vi'
              ? 'Chúng tôi cam kết tạo ra giá trị bền vững cho khách hàng và đối tác trong mọi dự án hợp tác.'
              : 'We are committed to creating lasting value for our clients and partners in every collaboration.'}
          </p>
        </div>
      )}

      {/* Logo marquee */}
      <div style={{
        backgroundColor: 'var(--cb-bg-page)',
        padding: '40px 0',
        overflow: 'hidden',       /* ← clip ngang, ẩn phần thừa */
        position: 'relative',
        width: '100%',            /* ← đảm bảo không vượt viewport */
        maxWidth: '100vw',
      }}>
        {/* Fade edges */}
        <div className="partners-fade-left" style={{
          position: 'absolute', top: 0, left: 0, bottom: 0,
          width: '120px',
          background: 'linear-gradient(to right, var(--cb-bg-page), transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }} />
        <div className="partners-fade-right" style={{
          position: 'absolute', top: 0, right: 0, bottom: 0,
          width: '120px',
          background: 'linear-gradient(to left, var(--cb-bg-page), transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }} />

        <div style={{
          display: 'flex',
          flexWrap: 'nowrap',      /* ← QUAN TRỌNG: không cho xuống dòng */
          width: 'max-content',
          animation: 'marquee 28s linear infinite',
          willChange: 'transform', /* ← tăng hiệu năng animation */
        }}>
          {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 40px',
              flexShrink: 0,       /* ← không cho logo item co lại */
              flexGrow: 0,
            }}>
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  height: '40px',
                  width: 'auto',
                  maxWidth: '140px',
                  objectFit: 'contain',
                  opacity: 0.85,
                  transition: 'opacity 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.85')}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        /* ── Partners: đảm bảo section không gây overflow ngang ── */
        #customer {
          overflow: hidden;
          width: 100%;
        }

        /* ── Partners: banner padding nhỏ hơn trên mobile ── */
        @media (max-width: 640px) {
          #customer > div:first-child {
            padding: 40px 16px !important;
          }
          #customer h2 {
            font-size: clamp(22px, 6vw, 36px) !important;
          }
          #customer p {
            font-size: 14px !important;
          }
        }

        /* ── Partners: giảm fade edge trên mobile để không che logo ── */
        @media (max-width: 480px) {
          .partners-fade-left,
          .partners-fade-right {
            width: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}