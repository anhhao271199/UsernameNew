import { Bell } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function FacebookBanner() {
  const { lang } = useLanguage();

  return (
    <section
      className="cb-fb-section"
      style={{
        backgroundColor: 'var(--cb-bg-page)',
        padding: '0 24px 60px',
      }}
    >
      <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
        <div
          className="cb-fb-banner"
          style={{
            background: 'linear-gradient(135deg, #A0E4B5 0%, #6FD89E 100%)',
            borderRadius: '20px',
            padding: '32px 40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap',
            boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
          }}
        >
          <div className="cb-fb-text-wrap" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <Bell size={24} color="#0F172A" strokeWidth={2.5} />
              <div
                style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#EF4444',
                  border: '2px solid #fff',
                }}
              />
            </div>
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(14px, 2.2vw, 18px)',
                fontWeight: 700,
                color: '#0F172A',
                letterSpacing: '-0.01em',
              }}
            >
              {lang === 'vi'
                ? 'Theo dõi CorgiBanana trên Facebook để nhận tin mới nhất.'
                : 'Follow CorgiBanana on Facebook to get the latest news.'}
            </div>
          </div>
          <button
            onClick={() => window.open('https://www.facebook.com/CorgiBanana', '_blank')}
            style={{
              padding: '14px 32px',
              borderRadius: '100px',
              border: 'none',
              backgroundColor: '#0F172A',
              color: '#fff',
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'transform 0.2s, box-shadow 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(15,23,42,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {lang === 'vi' ? 'Theo dõi' : 'Follow Us'}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        /* ═══════════════════════════════════════
           FACEBOOK BANNER RESPONSIVE
        ═══════════════════════════════════════ */

        /* --- Mobile ≤768px: stack dọc, căn giữa --- */
        @media (max-width: 768px) {
          .cb-fb-section {
            padding: 0 16px 48px !important;
          }
          .cb-fb-banner {
            padding: 24px 24px !important;
            flex-direction: column !important;
            text-align: center !important;
            align-items: center !important;
            border-radius: 16px !important;
          }
          .cb-fb-text-wrap {
            flex-direction: column !important;
            align-items: center !important;
            gap: 12px !important;
          }
          /* Button full width */
          .cb-fb-banner > button {
            width: 100% !important;
            justify-content: center !important;
          }
        }

        /* --- Rất nhỏ ≤400px --- */
        @media (max-width: 400px) {
          .cb-fb-banner {
            padding: 20px 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
