import React, { useEffect, useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export const FadeIn = ({
  children,
  delay = 0,
  className = '',
  direction = 'up',
  ...props
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  [key: string]: any;
}) => {
  const y = direction === 'up' ? 32 : direction === 'down' ? -32 : 0;
  const x = direction === 'left' ? 32 : direction === 'right' ? -32 : 0;
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const NAV_LINKS = [
  { to: '/layanan', label: 'Layanan' },
  { to: '/pendekatan', label: 'Pendekatan' },
  { to: '/klien-kami', label: 'Klien Kami' },
  { to: '/insight', label: 'Insight' },
  { to: '/tentang-kami', label: 'Tentang Kami' },
];

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* ── NAVBAR ──────────────────────────────────────────────────── */}
      <header className={`nav-transparent${scrolled ? ' nav-solid' : ''}`}>
        <div className="container-bilmare" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

          {/* Wordmark logo */}
          <Link to="/" style={{ textDecoration: 'none', zIndex: 50, position: 'relative' }}>
            <span style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: '22px',
              fontWeight: 700,
              color: 'white',
              letterSpacing: '-0.01em',
            }}>
              Bilmare
            </span>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: 'none' }} className="md:flex" aria-label="Primary">
            <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: location.pathname === link.to ? 'white' : 'rgba(255,255,255,0.8)',
                    letterSpacing: '0.02em',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/login"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.4)',
                  padding: '8px 20px',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  letterSpacing: '0.02em',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'white';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                Client Login
              </Link>
            </div>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', zIndex: 50, position: 'relative', padding: '8px' }}
          >
            {menuOpen
              ? <X size={22} color="white" />
              : <Menu size={22} color="white" />
            }
          </button>
        </div>
      </header>

      {/* ── MOBILE MENU ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 40,
              background: 'var(--deep-navy)',
              display: 'flex',
              flexDirection: 'column',
              padding: '100px 40px 60px',
            }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              style={{
                position: 'absolute', top: '24px', right: '24px',
                background: 'none', border: 'none', cursor: 'pointer',
              }}
            >
              <X size={24} color="white" />
            </button>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <Link
                    to={link.to}
                    style={{
                      display: 'block',
                      fontFamily: 'Georgia, serif',
                      fontSize: '28px',
                      fontWeight: 700,
                      color: 'white',
                      textDecoration: 'none',
                      padding: '20px 0',
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.06, duration: 0.4 }}
                style={{ marginTop: '32px' }}
              >
                <Link
                  to="/login"
                  className="btn-primary"
                  style={{ justifyContent: 'center' }}
                >
                  Client Login
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main style={{ flexGrow: 1 }}>
        <Outlet />
      </main>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer className="footer-bg">
        <div className="container-bilmare" style={{ paddingTop: '80px', paddingBottom: '40px' }}>

          {/* Top columns */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr',
            gap: '60px',
            paddingBottom: '56px',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            marginBottom: '40px',
          }}
            className="footer-grid"
          >
            {/* Col 1: Brand */}
            <div>
              <div style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: '22px',
                fontWeight: 700,
                color: 'white',
                marginBottom: '16px',
              }}>
                Bilmare
              </div>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontStyle: 'italic',
                fontSize: '14px',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.7,
                marginBottom: '12px',
                maxWidth: '280px',
              }}>
                Kepercayaan masa depan dimulai dari pertanggungjawaban hari ini.
              </p>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                color: 'rgba(255,255,255,0.35)',
              }}>
                Jakarta, Indonesia
              </p>
            </div>

            {/* Col 2: Menu links */}
            <div>
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.35)',
                marginBottom: '24px',
              }}>
                Menu
              </div>
              {NAV_LINKS.slice(0, 3).map((l) => (
                <div key={l.to} style={{ marginBottom: '10px' }}>
                  <Link to={l.to} style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.55)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}>
                    {l.label}
                  </Link>
                </div>
              ))}
            </div>

            {/* Col 3: Company links */}
            <div>
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.35)',
                marginBottom: '24px',
              }}>
                Perusahaan
              </div>
              {NAV_LINKS.slice(3).map((l) => (
                <div key={l.to} style={{ marginBottom: '10px' }}>
                  <Link to={l.to} style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.55)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}>
                    {l.label}
                  </Link>
                </div>
              ))}
              <div style={{ marginBottom: '10px' }}>
                <Link to="/login" style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.55)',
                  textDecoration: 'none',
                }}>
                  Client Portal
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              color: 'rgba(255,255,255,0.3)',
            }}>
              &copy; {new Date().getFullYear()} Bilmare. All rights reserved.
            </p>
            <Link to="/login" style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              color: 'rgba(255,255,255,0.35)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}>
              Client &amp; Team Login →
            </Link>
          </div>
        </div>

        {/* Footer responsive grid CSS */}
        <style>{`
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr;
          }
          @media (max-width: 768px) {
            .footer-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
          }
          .md\\:flex { display: flex !important; }
          @media (max-width: 767px) {
            .md\\:flex { display: none !important; }
            .md\\:hidden { display: block !important; }
          }
          @media (min-width: 768px) {
            .md\\:hidden { display: none !important; }
          }
        `}</style>
      </footer>
    </div>
  );
}
