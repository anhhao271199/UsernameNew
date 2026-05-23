import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { LayoutGrid, X, SunMedium, MoonStar, ArrowUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onOpenContact: () => void;
}

const LOGO_LIGHT = 'https://res.cloudinary.com/da69eampk/image/upload/v1778481353/Logo_CorgiBanana_nfi848.png';
const LOGO_DARK  = 'https://res.cloudinary.com/da69eampk/image/upload/v1778483160/Logo_CorgiBanana__Stoke_kwj94d.png';

function getScrollContainer(): Element | null {
  const all = Array.from(document.querySelectorAll('div'));
  for (const el of all) {
    if (el.scrollTop > 0) {
      const style = getComputedStyle(el);
      if (style.overflowY === 'auto' || style.overflowY === 'scroll') {
        return el;
      }
    }
  }
  return null;
}

function smoothScrollToTop(container: Element | null) {
  if (container) {
    container.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

export function Navbar({ theme, onToggleTheme, onOpenContact }: NavbarProps) {
  const { lang, toggleLang } = useLanguage();
  const t = translations[lang].navbar;
  const location = useLocation();
  const navigate = useNavigate();

  const [scrolled, setScrolled]           = useState(false);
  const [drawerOpen, setDrawerOpen]       = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const scrollContainerRef = useRef<Element | null>(null);

  useEffect(() => {
    const onScroll = (e?: Event) => {
      const target = e?.target as Element | null;
      const y = target && target !== document
        ? (target as Element).scrollTop
        : window.scrollY || document.documentElement.scrollTop;

      if (target && target !== document && (target as Element).scrollTop > 0) {
        scrollContainerRef.current = target as Element;
      }

      setScrolled(y > 60);
      setShowScrollTop(y > 300);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('scroll', onScroll, { passive: true, capture: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('scroll', onScroll, { capture: true } as any);
    };
  }, []);

  // ── AUTO SCROLL TO TOP KHI ĐỔI TRANG ──
  useEffect(() => {
    const container = scrollContainerRef.current || getScrollContainer();
    if (container) {
      container.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.pathname]);

  useEffect(() => {
    if (drawerOpen) document.body.style.overflow = 'hidden';
    else            document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  useEffect(() => { setDrawerOpen(false); }, [location.pathname]);

  const isActive = (href: string) => location.pathname === href;

  const handleDrawerLink = (href: string) => {
    setDrawerOpen(false);
    navigate(href);
  };

  const scrollToTop = () => {
    const container = scrollContainerRef.current || getScrollContainer();
    smoothScrollToTop(container);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      scrollToTop();
    }
  };

  /* ─── Language Toggle pill ─── */
  const LangToggle = ({ inDrawer = false }: { inDrawer?: boolean }) => (
    <button
      onClick={toggleLang}
      aria-label={`Switch language to ${lang === 'vi' ? 'English' : 'Tiếng Việt'}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: inDrawer ? '0' : '1px',
        padding: inDrawer ? '8px 14px' : '5px 10px',
        borderRadius: '100px',
        border: '1px solid var(--cb-border)',
        backgroundColor: 'var(--cb-bg-card)',
        cursor: 'pointer',
        fontFamily: 'Inter, sans-serif',
        fontSize: inDrawer ? '14px' : '12px',
        letterSpacing: '0.04em',
        userSelect: 'none' as const,
        flexShrink: 0,
        width: inDrawer ? '100%' : 'auto',
        justifyContent: inDrawer ? 'center' : 'flex-start',
      }}
    >
      <span style={{ fontWeight: lang === 'vi' ? 700 : 400, color: lang === 'vi' ? 'var(--cb-accent)' : 'var(--cb-text-muted)', transition: 'color 0.2s, font-weight 0.2s', padding: '0 3px' }}>VI</span>
      <span style={{ color: 'var(--cb-border)', padding: '0 1px' }}>|</span>
      <span style={{ fontWeight: lang === 'en' ? 700 : 400, color: lang === 'en' ? 'var(--cb-accent)' : 'var(--cb-text-muted)', transition: 'color 0.2s, font-weight 0.2s', padding: '0 3px' }}>EN</span>
    </button>
  );

  return (
    <>
      <header
        role="banner"
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          backgroundColor: 'var(--cb-nav-bg)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: scrolled ? '1px solid var(--cb-border)' : '1px solid transparent',
          transition: 'border-color 0.3s ease, background-color 0.7s ease',
        }}
      >
        <nav
          aria-label="Main navigation"
          style={{
            maxWidth: '1160px',
            margin: '0 auto',
            padding: '0 24px',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
            <Link
              to="/"
              aria-label="CorgiBanana"
              onClick={handleLogoClick}
              style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
            >
              <img
                src={theme === 'dark' ? LOGO_DARK : LOGO_LIGHT}
                alt="CorgiBanana"
                style={{ height: '48px', width: 'auto', display: 'block' }}
              />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div
            className="hidden-mobile"
            style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '32px' }}
          >
            {t.links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                style={{
                  textDecoration: 'none',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: isActive(link.href) ? 600 : 400,
                  color: isActive(link.href) ? 'var(--cb-accent)' : 'var(--cb-text-secondary)',
                  transition: 'color 0.2s ease',
                  whiteSpace: 'nowrap',
                  position: 'relative',
                  paddingBottom: '4px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--cb-text-primary)';
                  const bar = e.currentTarget.querySelector('.nav-bar') as HTMLElement;
                  if (bar) bar.style.width = '100%';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isActive(link.href) ? 'var(--cb-accent)' : 'var(--cb-text-secondary)';
                  const bar = e.currentTarget.querySelector('.nav-bar') as HTMLElement;
                  if (bar) bar.style.width = isActive(link.href) ? '100%' : '0%';
                }}
              >
                {link.label}
                <span
                  className="nav-bar"
                  style={{
                    position: 'absolute', bottom: 0, left: 0,
                    height: '2px',
                    width: isActive(link.href) ? '100%' : '0%',
                    backgroundColor: 'var(--cb-accent)',
                    borderRadius: '2px',
                    transition: 'width 0.25s ease',
                  }}
                />
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px' }}>
            <div className="hidden-mobile"><LangToggle /></div>

            <button
              onClick={onToggleTheme}
              aria-label={theme === 'light' ? t.switchToDark : t.switchToLight}
              style={{
                width: '36px', height: '36px', borderRadius: '50%',
                border: '1px solid var(--cb-border)',
                backgroundColor: 'var(--cb-bg-card)',
                color: 'var(--cb-text-secondary)',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {theme === 'light' ? <MoonStar size={16} /> : <SunMedium size={16} />}
            </button>

            <button
              onClick={onOpenContact}
              aria-label={t.contact}
              className="hidden-mobile"
              style={{
                padding: '8px 20px', borderRadius: '20px', border: 'none',
                backgroundColor: 'var(--cb-accent)', color: '#fff',
                fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600,
                cursor: 'pointer', whiteSpace: 'nowrap',
                transition: 'background-color 0.2s ease, transform 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--cb-accent-hover)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--cb-accent)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              {t.contact}
            </button>

            <button
              onClick={() => setDrawerOpen(true)}
              aria-label={t.openMenu}
              aria-expanded={drawerOpen}
              className="show-mobile"
              style={{
                width: '36px', height: '36px', borderRadius: '8px',
                border: '1px solid var(--cb-border)',
                backgroundColor: 'transparent',
                color: 'var(--cb-text-primary)',
                cursor: 'pointer', display: 'none',
                alignItems: 'center', justifyContent: 'center',
              }}
            >
              <LayoutGrid size={20} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      {drawerOpen && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 1100, backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        style={{
          position: 'fixed',
          top: 0, right: 0, bottom: 0,
          width: 'min(320px, 85vw)',
          zIndex: 1200,
          backgroundColor: 'var(--cb-bg-card)',
          padding: '24px',
          display: 'flex', flexDirection: 'column', gap: '8px',
          transform: drawerOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <img src={theme === 'dark' ? LOGO_DARK : LOGO_LIGHT} alt="CorgiBanana" style={{ height: '40px', width: 'auto', display: 'block' }} />
          <button
            onClick={() => setDrawerOpen(false)}
            aria-label={t.closeMenu}
            style={{
              width: '36px', height: '36px', borderRadius: '50%',
              border: '1px solid var(--cb-border)', backgroundColor: 'transparent',
              color: 'var(--cb-text-primary)', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {t.links.map((link) => (
          <button
            key={link.href}
            onClick={() => handleDrawerLink(link.href)}
            style={{
              textAlign: 'left', background: 'none', border: 'none',
              borderBottom: '1px solid var(--cb-border)',
              fontFamily: 'Inter, sans-serif', fontSize: '16px',
              fontWeight: isActive(link.href) ? 600 : 400,
              color: isActive(link.href) ? 'var(--cb-accent)' : 'var(--cb-text-primary)',
              padding: '12px 0', cursor: 'pointer', width: '100%',
            }}
          >
            {link.label}
          </button>
        ))}

        <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <LangToggle inDrawer />
          <button
            onClick={onToggleTheme}
            style={{
              padding: '12px', borderRadius: '8px',
              border: '1px solid var(--cb-border)', backgroundColor: 'transparent',
              color: 'var(--cb-text-primary)', fontFamily: 'Inter, sans-serif',
              fontSize: '14px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '8px',
            }}
          >
            {theme === 'light' ? <MoonStar size={16} /> : <SunMedium size={16} />}
            {theme === 'light' ? t.darkMode : t.lightMode}
          </button>
          <button
            onClick={() => { setDrawerOpen(false); onOpenContact(); }}
            style={{
              padding: '14px', borderRadius: '20px', border: 'none',
              backgroundColor: 'var(--cb-accent)', color: '#fff',
              fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 600, cursor: 'pointer',
            }}
          >
            {t.contactFull}
          </button>
        </div>
      </div>

      {/* ── Scroll-to-top FAB ── */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        style={{
          position: 'fixed',
          bottom: '28px',
          right: '24px',
          zIndex: 9999,
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          border: '1.5px solid var(--cb-border)',
          backgroundColor: 'var(--cb-bg-card)',
          color: 'var(--cb-text-secondary)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          opacity: showScrollTop ? 1 : 0,
          pointerEvents: showScrollTop ? 'auto' : 'none',
          transform: showScrollTop ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.85)',
          transition: 'opacity 0.3s ease, transform 0.3s ease, background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease',
        }}
        onMouseEnter={(e) => {
          const b = e.currentTarget as HTMLButtonElement;
          b.style.backgroundColor = 'var(--cb-accent)';
          b.style.color = '#fff';
          b.style.borderColor = 'var(--cb-accent)';
        }}
        onMouseLeave={(e) => {
          const b = e.currentTarget as HTMLButtonElement;
          b.style.backgroundColor = 'var(--cb-bg-card)';
          b.style.color = 'var(--cb-text-secondary)';
          b.style.borderColor = 'var(--cb-border)';
        }}
      >
        <ArrowUp size={20} strokeWidth={2.2} />
      </button>

      <style>{`
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
        @media (min-width: 768px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}