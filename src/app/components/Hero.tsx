import { ArrowRight, Sparkles, TrendingUp, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { useRef, useEffect, useCallback } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

interface HeroProps {
  onOpenContact: () => void;
}

const ease = [0.22, 1, 0.36, 1] as const;

function FloatingCard({
  children,
  delay = 0,
  amplitude = 10,
  duration = 4,
}: {
  children: React.ReactNode;
  delay?: number;
  amplitude?: number;
  duration?: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -amplitude, 0] }}
      transition={{ duration, delay, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop' }}
    >
      {children}
    </motion.div>
  );
}

export function Hero({ onOpenContact }: HeroProps) {
  const { lang } = useLanguage();
  const t = translations[lang].hero;
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const canvas = sectionRef.current?.querySelector('canvas') as any;
    if (canvas?.__mouseRef) {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      canvas.__mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    const canvas = sectionRef.current?.querySelector('canvas') as any;
    if (canvas?.__mouseRef) {
      canvas.__mouseRef.current = { x: -999, y: -999 };
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'visible',
        paddingTop: '80px',
        position: 'relative',
      }}
    >
      <SpotlightBg />

      {/* ── TEXT BLOCK ── */}
      <div style={{ width: '100%', maxWidth: '1160px', padding: '0 24px', boxSizing: 'border-box', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '36px 0 24px' }}>

          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: 0.05 }}
            style={{ marginBottom: '18px', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '8px 18px 8px 12px', borderRadius: '100px',
              border: '1.5px solid rgba(249,162,35,0.28)',
              backgroundColor: 'rgba(249,162,35,0.05)', maxWidth: '90vw',
            }}>
              <span style={{ position: 'relative', width: 18, height: 18, flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <motion.span animate={{ scale: [1, 2.8], opacity: [0.4, 0] }} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut', repeatDelay: 0.3 }}
                  style={{ position: 'absolute', width: 9, height: 9, borderRadius: '50%', backgroundColor: '#F9A223' }} />
                <motion.span animate={{ scale: [1, 2.0], opacity: [0.25, 0] }} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut', delay: 0.8, repeatDelay: 0.3 }}
                  style={{ position: 'absolute', width: 9, height: 9, borderRadius: '50%', backgroundColor: '#F9A223' }} />
                <motion.span animate={{ scale: [0.9, 1.1, 0.9] }} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.3 }}
                  style={{ position: 'relative', width: 8, height: 8, borderRadius: '50%', backgroundColor: '#F9A223', display: 'block', boxShadow: '0 0 8px rgba(249,162,35,0.55)' }} />
              </span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(11px, 2.5vw, 13px)', fontWeight: 600, letterSpacing: '0.04em', color: '#C96B00' }}>
                {t.badge}
              </span>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: 0.12 }}
            className="hero-subtitle"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, color: '#F9A223', margin: '0 0 10px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            {t.subtitle}
          </motion.p>

          {/* Title */}
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.2 }}
            className="hero-title"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.15, margin: '0 0 16px', width: '100%', textAlign: 'center' }}>
            <span style={{ color: '#F9A223' }}>DIGITAL MARKETING</span>
            <span style={{ color: '#0F172A' }}> - E-COMMERCE - </span>
            <span style={{ color: '#475569' }}>RETAIL</span>
          </motion.h1>

          {/* Body */}
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: 0.28 }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(13px, 3vw, 16px)',
              color: '#64748B',
              lineHeight: 1.75,
              margin: 0,
              maxWidth: '620px',
              textAlign: 'center',
            }}>
            {t.body}
          </motion.p>

        </div>
      </div>

      {/* ── IMAGE BLOCK ── */}
      <div className="image-block" style={{ position: 'relative', width: '100vw', alignSelf: 'center', zIndex: 1, lineHeight: 0 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.45 }}
          style={{ position: 'relative', width: '100%' }}
        >
          <img
            src="https://res.cloudinary.com/da69eampk/image/upload/v1778747893/3D_WeAreCorgibanana_zowtwj.png"
            alt="We Are CorgiBanana"
            style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'contain' }}
          />

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: 1.1 }}
            style={{ position: 'absolute', bottom: '8%', left: 0, right: 0, display: 'flex', justifyContent: 'center', zIndex: 2, padding: '0 16px' }}
          >
            <motion.button
              onClick={onOpenContact}
              whileHover={{ scale: 1.06, y: -3 }} whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{
                padding: 'clamp(12px, 2.5vw, 17px) clamp(24px, 5vw, 44px)',
                borderRadius: '100px', border: 'none',
                background: 'linear-gradient(135deg, #F9A223 0%, #F59E0B 100%)',
                color: '#fff', fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(14px, 3vw, 16px)', fontWeight: 700, cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', gap: '10px', whiteSpace: 'nowrap',
                boxShadow: '0 12px 40px rgba(249,162,35,0.55), 0 2px 8px rgba(0,0,0,0.15)',
                letterSpacing: '0.01em',
              }}
            >
              {t.cta1}
              <span style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.25)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ArrowRight size={16} strokeWidth={2.5} />
              </span>
            </motion.button>
          </motion.div>

          {/* Card 1 */}
          <motion.div initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.75 }}
            className="hero-card card-1"
            style={{ position: 'absolute' }}>
            <FloatingCard amplitude={9} duration={4.4} delay={0}>
              <StatPill icon={TrendingUp} text={lang === 'vi' ? 'Tăng trưởng 3x' : '3x Growth'} color="#10B981" />
            </FloatingCard>
          </motion.div>

          {/* Card 2 */}
          <motion.div initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.9 }}
            className="hero-card card-2"
            style={{ position: 'absolute' }}>
            <FloatingCard amplitude={7} duration={3.8} delay={1.0}>
              <StatPill icon={Zap} text={lang === 'vi' ? '50+ Khách hàng' : '50+ Clients'} color="#6366F1" />
            </FloatingCard>
          </motion.div>

          {/* Card 3 */}
          <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease, delay: 1.05 }}
            className="hero-card card-3"
            style={{ position: 'absolute' }}>
            <FloatingCard amplitude={11} duration={5.2} delay={0.5}>
              <StatPill icon={Sparkles} text={lang === 'vi' ? 'Giải pháp toàn diện' : 'Full Solution'} color="#F9A223" />
            </FloatingCard>
          </motion.div>

        </motion.div>
      </div>

      <style>{`
        .hero-subtitle { font-size: clamp(0.62rem, 2.2vw, 0.82rem); }
        .hero-title    { font-size: clamp(1.4rem, 5.5vw, 2.75rem); }
        .image-block   { margin-top: -60px; }

        .card-1 { top: 18%; left: 4%; }
        .card-2 { top: 58%; left: 4%; }
        .card-3 { top: 14%; right: 4%; }

        @media (max-width: 900px) {
          .hero-card { transform: scale(0.82); transform-origin: center; }
          .card-1 { left: 1%; }
          .card-2 { left: 1%; }
          .card-3 { right: 1%; }
        }

        @media (max-width: 640px) {
          section[aria-label="Hero"] { padding-top: 64px !important; }
          .hero-subtitle { font-size: 9px !important; letter-spacing: 0.06em !important; white-space: nowrap !important; }
          .hero-title { font-size: clamp(0.85rem, 4.2vw, 1.1rem) !important; white-space: nowrap !important; overflow: hidden !important; text-overflow: ellipsis !important; }
          .image-block { margin-top: 0; }
          .hero-card { transform: none !important; }
          .hero-card > div { zoom: 0.6; }
          .card-1 { top: 2% !important; left: 2% !important; right: auto !important; }
          .card-2 { top: 2% !important; left: 50% !important; transform: translateX(-50%) !important; right: auto !important; }
          .card-3 { top: 2% !important; right: 2% !important; left: auto !important; }
        }

        @media (max-width: 400px) {
          .hero-subtitle { font-size: 8px !important; }
          .hero-title    { font-size: clamp(0.75rem, 3.8vw, 0.95rem) !important; }
          .hero-card > div { zoom: 0.52; }
        }
      `}</style>
    </section>
  );
}

/* ── Spotlight Background ── */
function SpotlightBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);
  const mouseRef  = useRef({ x: -999, y: -999 });
  const currentRef = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const canvas = canvasRef.current as any;
    if (canvas) canvas.__mouseRef = mouseRef;
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let W = 0, H = 0;

    const resize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width  = W * devicePixelRatio;
      canvas.height = H * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      const target = mouseRef.current;
      const cur    = currentRef.current;

      // Smooth follow
      cur.x += (target.x - cur.x) * 0.08;
      cur.y += (target.y - cur.y) * 0.08;

      const active = target.x > 0;

      if (active) {
        const r = Math.min(W, H) * 0.6;

        // Subtle dark vignette over whole canvas
        ctx.fillStyle = 'rgba(15,23,42,0.04)';
        ctx.fillRect(0, 0, W, H);

        // Punch a transparent hole at cursor (erase the vignette)
        ctx.save();
        ctx.globalCompositeOperation = 'destination-out';
        const punch = ctx.createRadialGradient(cur.x, cur.y, 0, cur.x, cur.y, r);
        punch.addColorStop(0,   'rgba(0,0,0,0.04)');
        punch.addColorStop(0.5, 'rgba(0,0,0,0.02)');
        punch.addColorStop(1,   'rgba(0,0,0,0)');
        ctx.beginPath();
        ctx.arc(cur.x, cur.y, r, 0, Math.PI * 2);
        ctx.fillStyle = punch;
        ctx.fill();
        ctx.restore();

        // Warm amber glow at cursor center
        const glow = ctx.createRadialGradient(cur.x, cur.y, 0, cur.x, cur.y, r * 0.65);
        glow.addColorStop(0,   'rgba(249,162,35,0.07)');
        glow.addColorStop(0.45, 'rgba(249,162,35,0.025)');
        glow.addColorStop(1,   'rgba(249,162,35,0)');
        ctx.beginPath();
        ctx.arc(cur.x, cur.y, r * 0.65, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Center dot
        ctx.beginPath();
        ctx.arc(cur.x, cur.y, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(249,162,35,0.5)';
        ctx.fill();

        // Inner ring
        ctx.beginPath();
        ctx.arc(cur.x, cur.y, 16, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(249,162,35,0.16)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Outer ring
        ctx.beginPath();
        ctx.arc(cur.x, cur.y, 38, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(249,162,35,0.06)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    const onTouchMove = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const t = e.touches[0];
      mouseRef.current = { x: t.clientX - rect.left, y: t.clientY - rect.top };
    };
    const onTouchEnd = () => { mouseRef.current = { x: -999, y: -999 }; };

    const section = canvas.closest('section');
    section?.addEventListener('touchmove', onTouchMove, { passive: true });
    section?.addEventListener('touchend', onTouchEnd);

    resize();
    window.addEventListener('resize', resize);
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      section?.removeEventListener('touchmove', onTouchMove);
      section?.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 0,
      }}
    />
  );
}

function StatPill({ icon: Icon, text, color }: { icon: React.ElementType; text: string; color: string }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: '12px',
      padding: '12px 18px', borderRadius: '18px', backgroundColor: '#fff',
      border: '1px solid rgba(0,0,0,0.06)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)',
      whiteSpace: 'nowrap',
    }}>
      <div style={{ width: 36, height: 36, borderRadius: '10px', backgroundColor: `${color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: `1.5px solid ${color}25` }}>
        <Icon size={16} color={color} strokeWidth={2} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 700, color: '#0F172A', lineHeight: 1.2 }}>{text}</span>
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 500, color: '#94A3B8', lineHeight: 1 }}>CorgiBanana</span>
      </div>
    </div>
  );
}