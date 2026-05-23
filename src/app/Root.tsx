import { useState } from 'react';
import { Outlet, ScrollRestoration } from 'react-router';
import '../styles/fonts.css';
import '../styles/corgi.css';
import { LanguageProvider } from './contexts/LanguageContext';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ThemeIndicator } from './components/ThemeIndicator';
import { ScrollToTop } from './components/ScrollToTop';

export interface OutletContextType {
  onOpenContact: () => void;
  theme: 'light' | 'dark';
}

function RootInner() {
  const [contactOpen, setContactOpen] = useState(false);
  const { theme, source, toggle, resetToAuto, currentTime } = useTheme();

  return (
    <div
      className="cb-root"
      data-theme={theme}
      style={{
        fontFamily: 'Inter, sans-serif',
        backgroundColor: 'var(--cb-bg-page)',
        color: 'var(--cb-text-primary)',
        minHeight: '100vh',
      }}
    >
      <Navbar
        theme={theme}
        onToggleTheme={toggle}
        onOpenContact={() => setContactOpen(true)}
      />

      <main id="main-content">
        <Outlet context={{ onOpenContact: () => setContactOpen(true), theme } satisfies OutletContextType} />
      </main>

      <Footer onOpenContact={() => setContactOpen(true)} theme={theme} />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      <ThemeIndicator
        theme={theme}
        source={source}
        currentTime={currentTime}
        onReset={resetToAuto}
      />

      <ScrollToTop />
      <ScrollRestoration />

      <style>{`
        html { scroll-behavior: smooth; font-family: Inter, sans-serif; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: var(--cb-bg-alt); }
        ::-webkit-scrollbar-thumb { background: var(--cb-border); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: var(--cb-accent); }
        a { text-decoration: none; }
        img { max-width: 100%; }

        /* ── Global mobile baseline ── */
        @media (max-width: 767px) {
          .navbar-links { display: none !important; }
        }

        /* ── Tránh tràn ngang toàn trang ── */
        html, body { overflow-x: hidden; }

        /* ── Reveal animation ── */
        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .reveal.visible { opacity: 1; transform: none; }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }

        /* ── Card hover ── */
        .cb-card-hover { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .cb-card-hover:hover { transform: translateY(-4px); box-shadow: var(--cb-shadow-lg) !important; }
      `}</style>
    </div>
  );
}

export function Root() {
  return (
    <LanguageProvider>
      <RootInner />
    </LanguageProvider>
  );
}
