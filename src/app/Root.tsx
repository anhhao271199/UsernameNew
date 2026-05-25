import { useState, useEffect, useRef } from 'react';
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

function ChatbaseButton() {
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Load Chatbase script
    if (!(window as any).chatbase || (window as any).chatbase('getState') !== 'initialized') {
      (window as any).chatbase = (...args: any[]) => {
        if (!(window as any).chatbase.q) (window as any).chatbase.q = [];
        (window as any).chatbase.q.push(args);
      };
      (window as any).chatbase = new Proxy((window as any).chatbase, {
        get(target: any, prop: string) {
          if (prop === 'q') return target.q;
          return (...args: any[]) => target(prop, ...args);
        },
      });
    }
    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.id = 'T_TTBrq4_rAiKf_STUjAS';
    script.setAttribute('domain', 'www.chatbase.co');
    document.body.appendChild(script);

    // Ẩn nút mặc định của Chatbase, chờ nó load xong
    intervalRef.current = setInterval(() => {
      const btn = document.getElementById('chatbase-bubble-button');
      if (btn) {
        btn.style.display = 'none';
        setReady(true);
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, 200);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      const existing = document.getElementById('T_TTBrq4_rAiKf_STUjAS');
      if (existing) existing.remove();
    };
  }, []);

  const handleToggle = () => {
    if (!(window as any).chatbase) return;
    if (open) {
      (window as any).chatbase('close');
    } else {
      (window as any).chatbase('open');
    }
    setOpen(!open);
  };

  return (
    <>
      {/* Nút custom */}
      <button
        onClick={handleToggle}
        aria-label="Mở chat AI"
        style={{
          position: 'fixed',
          bottom: '80px',
          right: '24px',
          zIndex: 1000,
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          border: 'none',
          background: 'linear-gradient(135deg, #F9A223 0%, #e8920f 100%)',
          color: '#fff',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          boxShadow: '0 4px 20px rgba(249,162,35,0.45)',
          transition: 'transform 0.25s cubic-bezier(0.34,1.56,0.64,1)',
          opacity: ready ? 1 : 0,
          pointerEvents: ready ? 'auto' : 'none',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.12)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        {open ? '✕' : '🤖'}
      </button>

      <style>{`
        /* Ẩn nút gốc Chatbase */
        #chatbase-bubble-button { display: none !important; }

        /* Pulse animation */
        @keyframes cbPulse {
          0%   { box-shadow: 0 4px 20px rgba(249,162,35,0.45), 0 0 0 0 rgba(249,162,35,0.6); }
          70%  { box-shadow: 0 4px 20px rgba(249,162,35,0.45), 0 0 0 16px rgba(249,162,35,0); }
          100% { box-shadow: 0 4px 20px rgba(249,162,35,0.45), 0 0 0 0 rgba(249,162,35,0); }
        }
        button[aria-label="Mở chat AI"] {
          animation: cbPulse 2.2s ease-in-out infinite;
        }

        /* Popup Chatbase căn theo nút custom */
        #chatbase-bubble-window {
          bottom: 144px !important;
          right: 24px !important;
          width: 380px !important;
          max-width: calc(100vw - 32px) !important;
          max-height: calc(100vh - 180px) !important;
        }

        /* Mobile */
        @media (max-width: 480px) {
          button[aria-label="Mở chat AI"] {
            bottom: 76px !important;
            right: 16px !important;
            width: 46px !important;
            height: 46px !important;
            font-size: 20px !important;
          }
          #chatbase-bubble-window {
            right: 8px !important;
            left: 8px !important;
            width: auto !important;
            bottom: 134px !important;
          }
        }
      `}</style>
    </>
  );
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
      <ChatbaseButton />
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

        @media (max-width: 767px) {
          .navbar-links { display: none !important; }
        }

        html, body { overflow-x: hidden; }

        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .reveal.visible { opacity: 1; transform: none; }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }

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
