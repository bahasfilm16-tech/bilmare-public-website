import React, { useEffect, useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const FadeIn = ({
  children, delay = 0, className = '', direction = 'up', ...props
}: {
  children: React.ReactNode; delay?: number; className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'; [key: string]: any;
}) => {
  const y = direction === 'up' ? 24 : direction === 'down' ? -24 : 0;
  const x = direction === 'left' ? 24 : direction === 'right' ? -24 : 0;
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-6%' }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const NAV = [
  { to: '/layanan', label: 'Layanan' },
  { to: '/pendekatan', label: 'Pendekatan' },
  { to: '/klien-kami', label: 'Klien Kami' },
  { to: '/insight', label: 'Insight' },
  { to: '/tentang-kami', label: 'Tentang Kami' },
];

const DARK_PAGES = ['/', '/klien-kami'];

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const darkHero = DARK_PAGES.includes(location.pathname);
  const transparent = darkHero && !scrolled;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 56);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
    setScrolled(false);
  }, [location.pathname]);

  return (
    <div style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", background: '#fff', color: '#0D1F33' }}>

      {/* NAV */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'all 0.4s ease',
        background: transparent ? 'transparent' : 'rgba(255,255,255,0.97)',
        borderBottom: transparent ? 'none' : '1px solid rgba(13,31,51,0.07)',
        backdropFilter: transparent ? 'none' : 'blur(16px)',
        padding: scrolled ? '12px 0' : '20px 0',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/">
            <img src="/logo.png" alt="Bilmare" style={{
              height: 28, width: 'auto',
              filter: transparent ? 'brightness(0) invert(1)' : 'none',
              transition: 'filter 0.4s ease'
            }} />
          </Link>

          {/* Desktop */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="hidden-mobile">
            {NAV.map(({ to, label }) => (
              <Link key={to} to={to} style={{
                fontSize: 11, fontWeight: 600, letterSpacing: '0.16em',
                textTransform: 'uppercase', textDecoration: 'none',
                color: transparent ? 'rgba(255,255,255,0.65)' : 'rgba(13,31,51,0.55)',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = transparent ? '#fff' : '#0D1F33')}
                onMouseLeave={e => (e.currentTarget.style.color = transparent ? 'rgba(255,255,255,0.65)' : 'rgba(13,31,51,0.55)')}
              >{label}</Link>
            ))}
            <Link to="/login" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '10px 22px', borderRadius: 100,
              fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase', textDecoration: 'none',
              background: transparent ? 'rgba(255,255,255,0.12)' : '#0D1F33',
              color: '#fff',
              border: transparent ? '1px solid rgba(255,255,255,0.22)' : '1px solid transparent',
              transition: 'all 0.2s',
            }}>
              Login <ArrowUpRight size={12} />
            </Link>
          </nav>

          {/* Mobile burger */}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: 8,
            color: transparent ? '#fff' : '#0D1F33', display: 'none',
          }} className="show-mobile">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, zIndex: 99, background: '#0D1F33', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 40px' }}>
            {NAV.map(({ to, label }, i) => (
              <motion.div key={to} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
                <Link to={to} style={{ display: 'block', fontSize: 32, fontWeight: 600, color: 'rgba(255,255,255,0.8)', textDecoration: 'none', marginBottom: 24, letterSpacing: '-0.01em' }}>{label}</Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
              <Link to="/login" style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', marginTop: 16, display: 'inline-block' }}>Login →</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main><Outlet /></main>

      {/* FOOTER */}
      <footer style={{ background: '#0D1F33', color: '#fff', padding: '80px 40px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {/* Top CTA */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'end', paddingBottom: 56, borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: 56 }}
            className="footer-cta-grid">
            <div>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginBottom: 16 }}>Mulai Percakapan</p>
              <h2 style={{ fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 700, lineHeight: 1.18, letterSpacing: '-0.02em', color: '#fff', marginBottom: 16, maxWidth: 560 }}>
                Kepercayaan masa depan dimulai dari pertanggungjawaban hari ini.
              </h2>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.42)', fontWeight: 300, lineHeight: 1.7, maxWidth: 440 }}>
                PSPK 1/PSPK 2 berlaku efektif 1 Januari 2027. Jadwalkan asesmen awal — tanpa komitmen di tahap ini.
              </p>
            </div>
            <Link to="/layanan" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#fff', color: '#0D1F33', padding: '14px 28px', borderRadius: 100,
              fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
              textDecoration: 'none', whiteSpace: 'nowrap',
            }}>Jadwalkan Asesmen <ArrowUpRight size={13} /></Link>
          </div>

          {/* Links */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40, marginBottom: 56 }} className="footer-links-grid">
            {[
              { title: 'Layanan', links: [['Layanan', '/layanan'], ['PSPK Readiness Assessment', '/layanan'], ['Verification & Disclosure', '/layanan'], ['Full Report Development', '/layanan']] },
              { title: 'Firma', links: [['Pendekatan', '/pendekatan'], ['Klien Kami', '/klien-kami'], ['Tentang Kami', '/tentang-kami']] },
              { title: 'Sumber Daya', links: [['Insight', '/insight'], ['Panduan PSPK 1/2', '/insight'], ['GRI & IFRS S1/S2', '/insight']] },
              { title: 'Kontak', links: [['Client Portal', '/login'], ['hello@bilmare.id', '#'], ['Jakarta, Indonesia', '#']] },
            ].map(col => (
              <div key={col.title}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>{col.title}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {col.links.map(([label, to]) => (
                    <Link key={label} to={to} style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', fontWeight: 300, textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.82)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                    >{label}</Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <img src="/logo.png" alt="Bilmare" style={{ height: 22, opacity: 0.35, filter: 'brightness(0) invert(1)' }} />
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', fontWeight: 300 }}>
              © {new Date().getFullYear()} Bilmare · Jakarta, Indonesia · Firma Verifikasi Laporan Keberlanjutan
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { -webkit-font-smoothing: antialiased; }
        .hidden-mobile { display: flex !important; }
        .show-mobile { display: none !important; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
          .footer-cta-grid { grid-template-columns: 1fr !important; }
          .footer-links-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}
