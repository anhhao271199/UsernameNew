import { useState } from 'react';
import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

const LOGO_LIGHT = 'https://res.cloudinary.com/da69eampk/image/upload/v1778481353/Logo_CorgiBanana_nfi848.png';
const LOGO_DARK  = 'https://res.cloudinary.com/da69eampk/image/upload/v1778483160/Logo_CorgiBanana__Stoke_kwj94d.png';

interface FooterProps {
  onOpenContact?: () => void;
  theme?: 'light' | 'dark';
}

export function Footer({ onOpenContact, theme = 'light' }: FooterProps) {
  const { lang } = useLanguage();
  const t = (translations[lang] as any).footer ?? footerFallback[lang];

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer
      className="cb-footer"
      style={{
        backgroundColor: 'var(--cb-bg-alt, #f8f9fa)',
        borderTop: '1px solid var(--cb-border)',
        padding: '60px 24px 0',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '1160px',
          margin: '0 auto',
        }}
      >
        {/* Main footer grid */}
        <div
          className="cb-footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '220px 1fr 1fr 1fr',
            gap: '40px',
            paddingBottom: '48px',
            borderBottom: '1px solid var(--cb-border)',
          }}
        >
          {/* Logo column */}
          <div>
            <img
              src={theme === 'dark' ? LOGO_DARK : LOGO_LIGHT}
              alt="CorgiBanana"
              style={{ height: '44px', width: 'auto', marginBottom: '16px', display: 'block' }}
            />
          </div>

          {/* Solutions */}
          <div>
            <h4 style={{
              fontSize: '14px',
              fontWeight: 700,
              color: 'var(--cb-text-primary)',
              marginBottom: '20px',
              letterSpacing: '0.02em',
            }}>
              {t.solutions.title}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {t.solutions.links.map((link: { label: string; href: string }) => (
                <li key={link.label}>
                  {link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      style={{
                        fontSize: '14px',
                        color: 'var(--cb-text-secondary)',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--cb-accent)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--cb-text-secondary)')}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      style={{
                        fontSize: '14px',
                        color: 'var(--cb-text-secondary)',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--cb-accent)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--cb-text-secondary)')}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{
              fontSize: '14px',
              fontWeight: 700,
              color: 'var(--cb-text-primary)',
              marginBottom: '20px',
              letterSpacing: '0.02em',
            }}>
              {t.company.title}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {t.company.links.map((link: { label: string; href: string; onClick?: string }) => (
                <li key={link.label}>
                  {link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      style={{
                        fontSize: '14px',
                        color: 'var(--cb-text-secondary)',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--cb-accent)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--cb-text-secondary)')}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={link.onClick === 'contact' ? (e) => { e.preventDefault(); onOpenContact?.(); } : undefined}
                      style={{
                        fontSize: '14px',
                        color: 'var(--cb-text-secondary)',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--cb-accent)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--cb-text-secondary)')}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Social */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <h4 style={{
                fontSize: '14px',
                fontWeight: 700,
                color: 'var(--cb-text-primary)',
                marginBottom: '16px',
              }}>
                {t.newsletter.title}
              </h4>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSubscribe()}
                  placeholder={t.newsletter.placeholder}
                  style={{
                    flex: 1,
                    padding: '10px 14px',
                    borderRadius: '10px',
                    border: '1px solid var(--cb-border)',
                    backgroundColor: 'var(--cb-bg-card)',
                    color: 'var(--cb-text-primary)',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    outline: 'none',
                    minWidth: 0,
                  }}
                />
                <button
                  onClick={handleSubscribe}
                  style={{
                    padding: '10px 16px',
                    borderRadius: '10px',
                    border: 'none',
                    backgroundColor: subscribed ? '#10B981' : 'var(--cb-text-primary)',
                    color: 'var(--cb-bg-page)',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'background-color 0.3s',
                    flexShrink: 0,
                  }}
                >
                  {subscribed ? '✓' : t.newsletter.cta}
                </button>
              </div>
            </div>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {/* Facebook */}
              <SocialIcon href="https://www.facebook.com/CorgiBanana" label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </SocialIcon>
              {/* TikTok */}
              <SocialIcon href="https://tiktok.com/@corgibanana" label="TikTok">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.04a8.16 8.16 0 004.77 1.52V7.12a4.85 4.85 0 01-1-.43z" />
                </svg>
              </SocialIcon>
              {/* Email */}
              <SocialIcon href="mailto:hr@corgibanana.com" label="Email">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="cb-footer-bottom"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            padding: '20px 0',
          }}
        >
          {/* Copyright */}
          <p style={{ fontSize: '13px', color: 'var(--cb-text-muted)', margin: 0 }}>
            {t.copyright}{' '}
          </p>

          {/* Address + Phone pill */}
          <div
            className="cb-footer-pill"
            style={{
              display: 'inline-flex',
              alignItems: 'stretch',
              borderRadius: '100px',
              overflow: 'hidden',
              backgroundColor: '#1e293b',
              color: '#fff',
              flexWrap: 'nowrap',
              maxWidth: '100%',
            }}
          >
            <span className="cb-footer-pill-addr" style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '10px 16px',
              fontSize: '13px',
              borderRight: '1px solid rgba(255,255,255,0.15)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              minWidth: 0,
            }}>
              <svg style={{ flexShrink: 0 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {t.address}
            </span>
            <span className="cb-footer-pill-phone" style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '10px 16px',
              fontSize: '13px',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}>
              <svg style={{ flexShrink: 0 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.08 6.08l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              {t.phone}
            </span>
          </div>
        </div>
      </div>

      <style>{`
        /* ═══════════════════════════════════════
           FOOTER RESPONSIVE
        ═══════════════════════════════════════ */

        /* --- Tablet ≤900px: 2 cột --- */
        @media (max-width: 900px) {
          .cb-footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }

        /* --- Mobile ≤600px: 1 cột --- */
        @media (max-width: 600px) {
          .cb-footer {
            padding: 48px 20px 0 !important;
          }
          .cb-footer-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }

        /* --- Bottom bar: stack dọc trên mobile --- */
        @media (max-width: 640px) {
          .cb-footer-bottom {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
          }
        }

        /* --- Pill: full width + stack dọc trên mobile --- */
        @media (max-width: 640px) {
          .cb-footer-pill {
            width: 100% !important;
            border-radius: 16px !important;
            flex-direction: column !important;
          }
          .cb-footer-pill-addr {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.15) !important;
            width: 100% !important;
            font-size: 12px !important;
            /* Cho phép địa chỉ dài wrap xuống dòng thay vì bị cắt */
            white-space: normal !important;
            overflow: visible !important;
            text-overflow: unset !important;
          }
          .cb-footer-pill-phone {
            width: 100% !important;
            font-size: 12px !important;
          }
        }
      `}</style>
    </footer>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        width: 36, height: 36,
        borderRadius: '50%',
        border: '1px solid var(--cb-border)',
        backgroundColor: 'var(--cb-bg-card)',
        color: 'var(--cb-text-secondary)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        textDecoration: 'none',
        transition: 'background-color 0.2s, color 0.2s, border-color 0.2s',
        flexShrink: 0,
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.backgroundColor = 'var(--cb-accent)';
        el.style.borderColor = 'var(--cb-accent)';
        el.style.color = '#fff';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.backgroundColor = 'var(--cb-bg-card)';
        el.style.borderColor = 'var(--cb-border)';
        el.style.color = 'var(--cb-text-secondary)';
      }}
    >
      {children}
    </a>
  );
}

// Fallback translations
const footerFallback: Record<string, any> = {
  vi: {
    solutions: {
      title: 'Giải pháp',
      links: [
        { label: 'EcomRise', href: '#' },
        { label: 'Fontify', href: '#' },
        { label: 'Nitro Lookbook', href: '#' },
      ],
    },
    company: {
      title: 'Công ty',
      links: [
        { label: 'Về chúng tôi', href: '#about' },
        { label: 'Liên hệ', href: '#', onClick: 'contact' },
        { label: 'Phúc lợi', href: '#' },
        { label: 'Tuyển dụng', href: '#recruitment' },
      ],
    },
    newsletter: {
      title: 'Nhận cập nhật mới nhất qua email.',
      placeholder: 'Địa chỉ email',
      cta: 'Đăng ký',
    },
    copyright: '© 2025 CorgiBanana. All rights reserved.',
    address: 'Bắc Sơn, TP. Thái Nguyên',
    phone: '0965 091 093',
  },
  en: {
    solutions: {
      title: 'Solutions',
      links: [
        { label: 'EcomRise', href: '#' },
        { label: 'Fontify', href: '#' },
        { label: 'Nitro Lookbook', href: '#' },
      ],
    },
    company: {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Contact us', href: '#', onClick: 'contact' },
        { label: 'Benefits', href: '#' },
        { label: 'Careers', href: '#recruitment' },
      ],
    },
    newsletter: {
      title: 'Get updates delivered to your inbox.',
      placeholder: 'Email address',
      cta: 'Subscribe',
    },
    copyright: '© 2025 CorgiBanana. All rights reserved.',
    address: 'Bắc Sơn, TP. Thái Nguyên',
    phone: '0965 091 093',
  },
};