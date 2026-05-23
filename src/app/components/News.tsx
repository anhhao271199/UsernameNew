import { useEffect, useRef } from 'react';
import { User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

const newsImages = [
  'https://images.unsplash.com/photo-1666401565408-9b6b0741f0d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHNtYXJ0JTIwaG9tZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc4NDczNDgyfDA&ixlib=rb-4.1.0&q=80&w=800',
  'https://images.unsplash.com/photo-1762330467475-a565d04e1808?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjBjb250ZW50JTIwY3JlYXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3ODQ3MzQ4M3ww&ixlib=rb-4.1.0&q=80&w=800',
  'https://images.unsplash.com/photo-1674027326254-88c960d8e561?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb29nbGUlMjBBSSUyMHRlY2hub2xvZ3klMjBhc3Npc3RhbnQlMjBmdXR1cmV8ZW58MXx8fHwxNzc4NDczNDg3fDA&ixlib=rb-4.1.0&q=80&w=800',
];

function NewsCard({ article, delay }: { article: { category: string; date: string; image: string; title: string; categoryColor: string; noComments: string }; delay: string }) {
  return (
    <article
      className={`reveal ${delay} cb-card-hover`}
      style={{
        borderRadius: '12px',
        border: '1px solid var(--cb-border)',
        backgroundColor: 'var(--cb-bg-card)',
        boxShadow: 'var(--cb-shadow-md)',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'relative', height: '240px', overflow: 'hidden', backgroundColor: 'var(--cb-bg-alt)' }}>
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
        <div style={{
          position: 'absolute', top: '12px', left: '12px',
          padding: '5px 12px', borderRadius: '8px',
          backgroundColor: article.categoryColor,
          fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 700, color: '#fff',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>
          {article.category}
        </div>
      </div>

      <div style={{ padding: '24px' }}>
        <div style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '12px',
          color: 'var(--cb-text-muted)',
          marginBottom: '12px',
        }}>
          {article.date}
        </div>

        <h3 style={{
          fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 700,
          color: 'var(--cb-text-primary)', lineHeight: 1.5, marginBottom: '16px',
          minHeight: '48px',
        }}>
          {article.title}
        </h3>

        <div style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'var(--cb-text-muted)',
        }}>
          <User size={12} />
          <span>CorgiBanana</span>
          <span>·</span>
          <span>{article.noComments}</span>
        </div>
      </div>
    </article>
  );
}

export function News() {
  const ref = useRef<HTMLElement>(null);
  const { lang } = useLanguage();
  const t = translations[lang].news;

  const articles = t.articles.map((a, i) => ({
    ...a,
    image: newsImages[i],
    noComments: t.noComments,
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="news"
      ref={ref}
      aria-label="Tin tức"
      style={{ backgroundColor: 'var(--cb-bg-page)', padding: '96px 0' }}
    >
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="reveal" style={{
            fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'var(--cb-accent)', marginBottom: '12px',
          }}>
            {t.eyebrow}
          </div>
          <h2 className="reveal reveal-delay-1" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(1.6rem, 3vw, 2.25rem)',
            fontWeight: 700, letterSpacing: '-0.02em',
            color: 'var(--cb-text-primary)',
          }}>
            {t.h2}
          </h2>
        </div>

        <div className="news-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {articles.map((article, i) => (
            <NewsCard key={article.title} article={article} delay={i === 0 ? '' : `reveal-delay-${i}`} />
          ))}
        </div>
      </div>

      <style>{`
        /* ── News: 3 cột → 2 cột → 1 cột ── */
        @media (max-width: 900px) {
          .news-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .news-grid { grid-template-columns: 1fr !important; }
        }
        /* ── News: padding mobile ── */
        @media (max-width: 640px) {
          #news { padding: 72px 0 !important; }
          #news > div { padding: 0 16px !important; }
        }
      `}</style>
    </section>
  );
}