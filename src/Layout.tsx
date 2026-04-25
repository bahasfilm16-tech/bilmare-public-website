import React, { useEffect, useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

// ─── FadeIn ──────────────────────────────────────────────────────────────────
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
  const yOffset = direction === 'up' ? 28 : direction === 'down' ? -28 : 0;
  const xOffset = direction === 'left' ? 28 : direction === 'right' ? -28 : 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, x: xOffset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// ─── Nav config ───────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { to: '/layanan', label: 'Layanan' },
  { to: '/pendekatan', label: 'Pendekatan' },
  { to: '/klien-kami', label: 'Klien Kami' },
  { to: '/insight', label: 'Insight' },
  { to: '/tentang-kami', label: 'Tentang Kami' },
];

const DARK_HERO_PAGES = ['/', '/klien-kami'];

// ─── Layout ───────────────────────────────────────────────────────────────────
export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isDarkHero = DARK_HERO_PAGES.includes(location.pathname);
  const isTransparent = isDarkHero && !isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 64);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
    setIsScrolled(false);
  }, [location.pathname]);

  const navBg = isTransparent
    ? 'bg-transparent'
    : 'bg-white/95 backdrop-blur-md border-b border-[#0d1f33]/8 shadow-[0_1px_12px_rgba(13,31,51,0.06)]';

  const logoFilter = isTransparent ? 'brightness(0) invert(1)' : 'none';
  const linkCls = isTransparent
    ? 'text-white/75 hover:text-white'
    : 'text-[#0d1f33]/60 hover:text-[#0d1f33]';
  const loginCls = isTransparent
    ? 'bg-white/12 text-white border border-white/25 hover:bg-white/22'
    : 'bg-[#0d1f33] text-white hover:bg-[#162c47]';
  const hamburgerColor = isTransparent ? 'text-white' : 'text-[#0d1f33]';

  return (
    <div
      className="min-h-screen bg-white text-[#0d1f33] flex flex-col"
      style={{ fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif" }}
    >
      {/* ── NAVBAR ─────────────────────────────────────────────────────── */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${navBg} ${isScrolled ? 'py-3' : 'py-5'}`}>
        <div className="max-w-[1380px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="z-50 relative shrink-0">
            <img
              src="/logo.png"
              alt="Bilmare"
              className="h-7 w-auto transition-all duration-400"
              style={{ filter: logoFilter }}
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors duration-200 ${linkCls}`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/login"
              className={`ml-1 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase transition-all duration-200 ${loginCls}`}
            >
              Login <ArrowUpRight size={12} />
            </Link>
          </nav>

          <button
            className={`md:hidden p-2 -mr-2 z-50 relative transition-colors ${hamburgerColor}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* ── MOBILE MENU ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0d1f33] flex flex-col justify-center px-8 md:hidden"
          >
            <nav className="flex flex-col gap-7">
              {NAV_LINKS.map(({ to, label }, i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                >
                  <Link
                    to={to}
                    className="text-3xl font-medium tracking-tight text-white/85 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.07, duration: 0.4 }}
              >
                <Link
                  to="/login"
                  className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-white/40 hover:text-white transition-colors mt-4"
                >
                  Login <ArrowUpRight size={14} />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── CONTENT ─────────────────────────────────────────────────────── */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer className="bg-[#0d1f33] text-white pt-20 pb-10 px-6 md:px-12">
        <div className="max-w-[1380px] mx-auto">

          {/* CTA row */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 pb-16 border-b border-white/10">
            <div className="max-w-2xl">
              <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-white/30 mb-4">
                Mulai percakapan
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.2] text-white mb-5">
                Kepercayaan masa depan dimulai dari<br className="hidden md:block" />
                pertanggungjawaban hari ini.
              </h2>
              <p className="text-white/45 font-light leading-relaxed max-w-lg text-[15px]">
                PSPK 1/PSPK 2 berlaku efektif 1 Januari 2027. Jadwalkan asesmen awal — tanpa komitmen di tahap ini.
              </p>
            </div>
            <Link
              to="/layanan"
              className="inline-flex items-center gap-2.5 bg-white text-[#0d1f33] px-7 py-4 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase hover:bg-white/90 transition-colors shrink-0 group"
            >
              Jadwalkan Asesmen
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-14 border-b border-white/10">
            <div>
              <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-white/28 mb-5">Layanan</p>
              <div className="flex flex-col gap-3 text-[13px] text-white/50 font-light">
                <Link to="/layanan" className="hover:text-white/85 transition-colors">PSPK Readiness Assessment</Link>
                <Link to="/layanan" className="hover:text-white/85 transition-colors">Verification &amp; Disclosure</Link>
                <Link to="/layanan" className="hover:text-white/85 transition-colors">Full Report Development</Link>
                <Link to="/layanan" className="hover:text-white/85 transition-colors">Institutional Memory Retainer</Link>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-white/28 mb-5">Firma</p>
              <div className="flex flex-col gap-3 text-[13px] text-white/50 font-light">
                <Link to="/pendekatan" className="hover:text-white/85 transition-colors">Pendekatan</Link>
                <Link to="/klien-kami" className="hover:text-white/85 transition-colors">Klien Kami</Link>
                <Link to="/tentang-kami" className="hover:text-white/85 transition-colors">Tentang Kami</Link>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-white/28 mb-5">Sumber Daya</p>
              <div className="flex flex-col gap-3 text-[13px] text-white/50 font-light">
                <Link to="/insight" className="hover:text-white/85 transition-colors">Insight</Link>
                <Link to="/insight" className="hover:text-white/85 transition-colors">Panduan PSPK 1/2</Link>
                <Link to="/insight" className="hover:text-white/85 transition-colors">GRI &amp; IFRS S1/S2</Link>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-white/28 mb-5">Kontak</p>
              <div className="flex flex-col gap-3 text-[13px] text-white/50 font-light">
                <Link to="/login" className="hover:text-white/85 transition-colors">Client Portal</Link>
                <a href="mailto:hello@bilmare.id" className="hover:text-white/85 transition-colors">hello@bilmare.id</a>
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 pt-10">
            <img
              src="/logo.png"
              alt="Bilmare"
              className="h-6 w-auto"
              style={{ filter: 'brightness(0) invert(1)', opacity: 0.45 }}
            />
            <div className="text-[11px] text-white/28 font-light text-left md:text-right leading-relaxed">
              <p>© {new Date().getFullYear()} Bilmare. Jakarta, Indonesia.</p>
              <p className="mt-0.5">Firma Verifikasi Laporan Keberlanjutan</p>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
