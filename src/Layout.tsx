import React, { useEffect, useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, ChevronRight } from 'lucide-react';

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
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#FFFFFC] text-[#1C277B] flex flex-col" style={{ fontFamily: '"Aeonik", "Inter", sans-serif' }}>

      {/* ── NAVBAR ─────────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-[#FFFFFC]/90 backdrop-blur-xl border-b border-[#1C277B]/8 py-3 shadow-sm shadow-[#1C277B]/5'
            : 'bg-[#FFFFFC]/70 backdrop-blur-md py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="z-50 relative flex items-center">
            <img
              src="/logo.png"
              alt="Bilmare"
              className="h-7 w-auto"
              style={{ filter: 'brightness(0) saturate(100%) invert(13%) sepia(70%) saturate(1500%) hue-rotate(218deg) brightness(65%) contrast(120%)' }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-[#234CF9]'
                    : 'text-[#1C277B]/70 hover:text-[#1C277B]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/login"
              className="ml-2 inline-flex items-center gap-1.5 bg-[#234CF9] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#1a3de8] transition-colors shadow-md shadow-[#234CF9]/25 group"
            >
              Masuk Portal
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 -mr-2 z-50 relative text-[#1C277B]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* ── MOBILE MENU ────────────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#FFFFFC] pt-24 px-6 md:hidden flex flex-col border-b border-[#1C277B]/10"
          >
            <nav className="flex flex-col gap-6 py-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <Link
                    to={link.to}
                    className="text-3xl font-semibold tracking-tight text-[#1C277B] hover:text-[#234CF9] transition-colors flex items-center gap-3 group"
                  >
                    {link.label}
                    <ChevronRight size={20} className="text-[#1C277B]/20 group-hover:text-[#234CF9] group-hover:translate-x-1 transition-all" />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.06, duration: 0.4 }}
              >
                <Link
                  to="/login"
                  className="inline-flex items-center gap-2 bg-[#234CF9] text-white text-base font-semibold px-6 py-3 rounded-full mt-2"
                >
                  Masuk Portal <ArrowUpRight size={16} />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* ── FOOTER ─────────────────────────────────────────────────── */}
      <footer className="bg-[#1C277B] text-white relative overflow-hidden">
        {/* Mesh gradient */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="mesh-1 absolute -top-32 right-0 w-[500px] h-[500px] rounded-full opacity-15"
            style={{ background: 'radial-gradient(circle, #234CF9 0%, transparent 70%)' }}
          />
          <div
            className="mesh-3 absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #234CF9 0%, transparent 70%)' }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-10">
          {/* CTA row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end pb-16 border-b border-white/10 mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.15] text-white mb-6">
                Siap memastikan laporan Anda tahan pengawasan?
              </h2>
              <Link
                to="/layanan"
                className="inline-flex items-center gap-2 bg-white text-[#1C277B] text-sm font-bold px-6 py-3 rounded-full hover:bg-[#DFE7F7] transition-colors group"
              >
                Diskusikan Keterlibatan Anda
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6 text-sm font-medium text-white/50">
              <div className="flex flex-col gap-3">
                {NAV_LINKS.slice(0, 3).map((l) => (
                  <Link key={l.to} to={l.to} className="hover:text-white transition-colors">{l.label}</Link>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                {NAV_LINKS.slice(3).map((l) => (
                  <Link key={l.to} to={l.to} className="hover:text-white transition-colors">{l.label}</Link>
                ))}
                <Link to="/login" className="hover:text-white transition-colors">Client Portal</Link>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <img
              src="/logo.png"
              alt="Bilmare"
              className="h-8 w-auto"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p className="text-sm text-white/30">
              &copy; {new Date().getFullYear()} Bilmare. Jakarta, Indonesia.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
