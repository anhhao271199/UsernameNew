import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onOpenContact: () => void;
}

const navLinks = [
  { label: 'Về chúng tôi', href: '#about-us' },
  { label: 'Dịch vụ', href: '#services' },
  { label: 'Case Study', href: '#case-study' },
  { label: 'Khách hàng', href: '#customer' },
  { label: 'Tuyển dụng', href: '#recruitment' },
  { label: 'Tin tức', href: '#news' },
];

const LOGO_LIGHT = 'https://res.cloudinary.com/da69eampk/image/upload/v1778481353/Logo_CorgiBanana_nfi848.png';
const LOGO_DARK  = 'https://res.cloudinary.com/da69eampk/image/upload/v1778483160/Logo_CorgiBanana__Stoke_kwj94d.png';

export function Navbar({ theme, onToggleTheme, onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  const handleNavClick = (href: string) => {
    setActiveLink(href);
    setDrawerOpen(false);
  };

  return (
    <>
      <header
        role="banner"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
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
          <a
            href="#"
            aria-label="CorgiBanana - Trang chủ"
            style={{
              textDecoration: 'none',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              src={theme === 'dark' ? LOGO_DARK : LOGO_LIGHT}
              alt="CorgiBanana"
              style={{
                height: '48px',
                width: 'auto',
                display: 'block',
              }}
            />
          </a>

          {/* Desktop Nav Links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
            }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{
                  textDecoration: 'none',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: activeLink === link.href ? 600 : 400,
                  color: activeLink === link.href ? 'var(--cb-accent)' : 'var(--cb-text-secondary)',
                  transition: 'color 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cb-text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = activeLink === link.href ? 'var(--cb-accent)' : 'var(--cb-text-secondary)')}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
            {/* Theme Toggle */}
            <button
              onClick={onToggleTheme}
              aria-label={theme === 'light' ? 'Chuyển sang chế độ tối' : 'Chuyển sang chế độ sáng'}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: '1px solid var(--cb-border)',
                backgroundColor: 'var(--cb-bg-card)',
                color: 'var(--cb-text-secondary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            {/* Contact CTA - Desktop */}
            <button
              onClick={onOpenContact}
              aria-label="Liên hệ tư vấn"
              className="hidden-mobile"
              style={{
                padding: '8px 20px',
                borderRadius: '20px',
                border: 'none',
                backgroundColor: 'var(--cb-accent)',
                color: '#fff',
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'background-color 0.2s ease, transform 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--cb-accent-hover)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--cb-accent)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Liên hệ
            </button>

            {/* Hamburger - Mobile */}
            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="Mở menu"
              aria-expanded={drawerOpen}
              className="show-mobile"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                border: '1px solid var(--cb-border)',
                backgroundColor: 'transparent',
                color: 'var(--cb-text-primary)',
                cursor: 'pointer',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      {drawerOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1100,
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
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
          top: 0,
          right: 0,
          bottom: 0,
          width: 'min(320px, 85vw)',
          zIndex: 1200,
          backgroundColor: 'var(--cb-bg-card)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          transform: drawerOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <img
            src={theme === 'dark' ? LOGO_DARK : LOGO_LIGHT}
            alt="CorgiBanana"
            style={{ height: '40px', width: 'auto', display: 'block' }}
          />
          <button
            onClick={() => setDrawerOpen(false)}
            aria-label="Đóng menu"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: '1px solid var(--cb-border)',
              backgroundColor: 'transparent',
              color: 'var(--cb-text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => handleNavClick(link.href)}
            style={{
              textDecoration: 'none',
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              fontWeight: activeLink === link.href ? 600 : 400,
              color: activeLink === link.href ? 'var(--cb-accent)' : 'var(--cb-text-primary)',
              padding: '12px 0',
              borderBottom: '1px solid var(--cb-border)',
            }}
          >
            {link.label}
          </a>
        ))}

        <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button
            onClick={() => { onToggleTheme(); }}
            style={{
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid var(--cb-border)',
              backgroundColor: 'transparent',
              color: 'var(--cb-text-primary)',
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            {theme === 'light' ? 'Chế độ tối' : 'Chế độ sáng'}
          </button>
          <button
            onClick={() => { setDrawerOpen(false); onOpenContact(); }}
            style={{
              padding: '14px',
              borderRadius: '20px',
              border: 'none',
              backgroundColor: 'var(--cb-accent)',
              color: '#fff',
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Liên hệ tư vấn
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 768px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}