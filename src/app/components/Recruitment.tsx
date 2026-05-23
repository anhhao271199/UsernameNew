import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';
import { useTheme } from '../hooks/useTheme';

const TEAM_PHOTOS = [
  'https://images.unsplash.com/photo-1763550662603-78aa2f2033bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlb3BsZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3ODQ4MjgwMnww&ixlib=rb-4.1.0&q=80&w=400',
  'https://images.unsplash.com/photo-1739298061757-7a3339cee982?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlb3BsZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3ODQ4MjgwMnww&ixlib=rb-4.1.0&q=80&w=400',
  'https://images.unsplash.com/photo-1584940120505-117038d90b05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlb3BsZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3ODQ4MjgwMnww&ixlib=rb-4.1.0&q=80&w=400',
  'https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlb3BsZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3ODQ4MjgwMnww&ixlib=rb-4.1.0&q=80&w=400',
  'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlb3BsZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3ODQ4MjgwMnww&ixlib=rb-4.1.0&q=80&w=400',
  'https://images.unsplash.com/photo-1776781205743-33b4c1106adc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlb3BsZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3ODQ4MjgwMnww&ixlib=rb-4.1.0&q=80&w=400',
];

const LOGO_LIGHT = 'https://res.cloudinary.com/da69eampk/image/upload/v1778481353/Logo_CorgiBanana_nfi848.png';
const LOGO_DARK  = 'https://res.cloudinary.com/da69eampk/image/upload/v1778483160/Logo_CorgiBanana__Stoke_kwj94d.png';

const AVATAR_COLORS = [
  '#F97316', '#3B82F6', '#10B981', '#8B5CF6', '#EC4899', '#F59E0B',
];

const ORBIT_CONFIG = [
  { radius: 110, startAngle: 80,  size: 64,  speed: 0.4   },
  { radius: 110, startAngle: 220, size: 56,  speed: 0.4   },
  { radius: 190, startAngle: 30,  size: 72,  speed: -0.25 },
  { radius: 190, startAngle: 155, size: 60,  speed: -0.25 },
  { radius: 190, startAngle: 270, size: 68,  speed: -0.25 },
  { radius: 270, startAngle: 120, size: 80,  speed: 0.18  },
];

// hideCta={true}  → ẩn nút (dùng trong RecruitmentPage)
// hideCta={false} → hiện nút (mặc định, dùng ở trang chủ)
export function Recruitment({ hideCta = false }: { hideCta?: boolean }) {
  const { lang } = useLanguage();
  const { theme } = useTheme();
  const t = (translations[lang] as any).recruitment ?? recruitmentFallback[lang];

  const animRef  = useRef<number>(0);
  const startRef = useRef<number | null>(null);
  const [angles, setAngles] = useState(ORBIT_CONFIG.map(o => o.startAngle));

  const CX = 300, CY = 300, SVG_SIZE = 600;

  useEffect(() => {
    const animate = (ts: number) => {
      if (startRef.current === null) startRef.current = ts;
      const elapsed = ts - startRef.current;
      setAngles(ORBIT_CONFIG.map(o => (o.startAngle + o.speed * elapsed * 0.06) % 360));
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <section
      id="recruitment"
      style={{ padding: '100px 24px', backgroundColor: 'var(--cb-bg-page)', overflow: 'hidden' }}
    >
      <div
        className="cb-recruit-grid"
        style={{
          maxWidth: '1160px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }}
      >
        {/* ── LEFT: Orbital Animation ── */}
        <div
          className="cb-recruit-orbit"
          style={{ position: 'relative', width: '100%', maxWidth: SVG_SIZE, aspectRatio: '1', margin: '0 auto' }}
        >
          {/* Dashed orbit rings — SVG layer */}
          <svg
            viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
          >
            <circle cx={CX} cy={CY} r={110} fill="none" stroke="var(--cb-border)" strokeWidth="1.5" strokeDasharray="6 5" />
            <circle cx={CX} cy={CY} r={190} fill="none" stroke="var(--cb-border)" strokeWidth="1.5" strokeDasharray="6 5" />
            <circle cx={CX} cy={CY} r={270} fill="none" stroke="var(--cb-border)" strokeWidth="1.5" strokeDasharray="6 5" />
          </svg>

          {/* Center logo */}
          <div style={{
            position: 'absolute',
            left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '16.67%',
            height: '16.67%',
            borderRadius: '50%',
            backgroundColor: 'var(--cb-bg-card)',
            border: '3px solid var(--cb-border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            zIndex: 10,
            padding: '2.5%',
            boxSizing: 'border-box',
          }}>
            <img
              src={theme === 'dark' ? LOGO_DARK : LOGO_LIGHT}
              alt="CorgiBanana Logo"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>

          {/* Avatar bubbles */}
          {ORBIT_CONFIG.map((o, i) => {
            const rad     = (angles[i] * Math.PI) / 180;
            const px      = CX + o.radius * Math.cos(rad);
            const py      = CY + o.radius * Math.sin(rad);
            const leftPct = (px / SVG_SIZE) * 100;
            const topPct  = (py / SVG_SIZE) * 100;
            const sizePct = (o.size / SVG_SIZE) * 100;
            const initials = ['LN', 'TH', 'MT', 'PQ', 'DT', 'HV'][i % 6];

            return (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  left:   `${leftPct}%`,
                  top:    `${topPct}%`,
                  width:  `${sizePct}%`,
                  height: `${sizePct}%`,
                  transform: 'translate(-50%, -50%)',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '3px solid var(--cb-bg-page)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                  zIndex: 5,
                  backgroundColor: AVATAR_COLORS[i % AVATAR_COLORS.length],
                  flexShrink: 0,
                }}
              >
                <AvatarImg
                  src={TEAM_PHOTOS[i % TEAM_PHOTOS.length]}
                  alt={`Team member ${i + 1}`}
                  fallbackColor={AVATAR_COLORS[i % AVATAR_COLORS.length]}
                  initials={initials}
                />
              </div>
            );
          })}
        </div>

        {/* ── RIGHT: Text Content ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 14px', borderRadius: '100px',
            border: '1px solid var(--cb-border)',
            width: 'fit-content', fontSize: '12px', fontWeight: 600,
            color: 'var(--cb-text-muted)', letterSpacing: '0.06em',
            textTransform: 'uppercase' as const,
          }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1.5L8.5 5H12L9.5 7.5L10.5 11L7 9L3.5 11L4.5 7.5L2 5H5.5L7 1.5Z" fill="#F97316" />
            </svg>
            {t.badge}
          </div>

          {/* Company Info Block */}
          <div style={{
            padding: '20px 24px', borderRadius: '16px',
            backgroundColor: 'var(--cb-bg-card)',
            border: '1px solid var(--cb-border)',
            display: 'flex', flexDirection: 'column', gap: '12px',
          }}>
            <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--cb-text-secondary)', margin: 0 }}>
              {t.companyIntro}
            </p>
            <div className="cb-recruit-highlights" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {t.highlights.map((h: string, i: number) => (
                <span key={i} style={{
                  padding: '4px 12px', borderRadius: '100px',
                  backgroundColor: 'rgba(249, 115, 22, 0.1)',
                  color: '#F97316', fontSize: '12px', fontWeight: 600,
                }}>
                  {h}
                </span>
              ))}
            </div>
          </div>

          {/* Headline */}
          <h2 style={{
            fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800,
            lineHeight: 1.15, color: 'var(--cb-text-primary)', margin: 0,
          }}>
            {t.title}
          </h2>

          {/* Description */}
          <p style={{ fontSize: '16px', lineHeight: '1.65', color: 'var(--cb-text-secondary)', margin: 0 }}>
            {t.description}
          </p>

          {/* CTA Button */}
          {!hideCta && (
            <div>
              <Link
                to={t.ctaHref ?? '/tuyen-dung'}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '13px 28px', borderRadius: '100px',
                  backgroundColor: 'var(--cb-text-primary)',
                  color: 'var(--cb-bg-page)',
                  fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'opacity 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = '0.85';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = '1';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                }}
              >
                {t.cta}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>

      <style>{`
        /* 2 col → stack on tablet */
        @media (max-width: 900px) {
          .cb-recruit-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          /* Orbit container: show above text, capped size */
          .cb-recruit-orbit {
            max-width: 360px !important;
            margin: 0 auto !important;
          }
        }
        @media (max-width: 640px) {
          #recruitment { padding: 72px 20px !important; }
          .cb-recruit-orbit { max-width: 280px !important; }
        }
        @media (max-width: 400px) {
          .cb-recruit-orbit { max-width: 240px !important; }
        }
      `}</style>
    </section>
  );
}

/* ── Avatar image với fallback initials ── */
function AvatarImg({
  src, alt, fallbackColor, initials,
}: {
  src: string; alt: string; fallbackColor: string; initials: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div style={{
        width: '100%', height: '100%',
        backgroundColor: fallbackColor,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#fff', fontWeight: 700, fontSize: '30%',
        fontFamily: 'Inter, sans-serif',
      }}>
        {initials}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
      }}
    />
  );
}

const recruitmentFallback: Record<string, any> = {
  vi: {
    badge: 'ĐANG TUYỂN DỤNG',
    companyIntro: 'CorgiBanana là đội ngũ chuyên về Digital Marketing, E-commerce & Retail, giúp doanh nghiệp phát triển toàn diện trong kỷ nguyên số. Chúng tôi tin vào văn hóa làm việc cởi mở, sáng tạo và luôn học hỏi.',
    highlights: ['Mức lương hấp dẫn', 'Văn hóa cởi mở', 'Phát triển rõ ràng', 'Đào tạo chuyên nghiệp'],
    title: 'Gia nhập CorgiBanana ngay hôm nay',
    description: 'Nhiều vị trí hấp dẫn với mức lương cạnh tranh đang chờ bạn tại CorgiBanana. Hy vọng sớm được đón bạn là đồng nghiệp.',
    cta: 'Xem vị trí tuyển dụng',
    ctaHref: '/tuyen-dung',
  },
  en: {
    badge: 'NOW HIRING',
    companyIntro: 'CorgiBanana specializes in Digital Marketing, E-commerce & Retail, helping businesses thrive comprehensively in the digital age. We believe in an open, creative, and always-learning work culture.',
    highlights: ['Competitive Salary', 'Open Culture', 'Clear Growth Path', 'Professional Training'],
    title: 'Join CorgiBanana today',
    description: 'Many positions with attractive salaries are waiting for you at CorgiBanana. Hope to see you as our colleague.',
    cta: 'View open positions',
    ctaHref: '/tuyen-dung',
  },
};