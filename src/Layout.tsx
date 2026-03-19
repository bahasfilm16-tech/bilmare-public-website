import React, { useEffect, useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';

export const FadeIn = ({ children, delay = 0, className = '', direction = 'up', ...props }: { children: React.ReactNode, delay?: number, className?: string, direction?: 'up' | 'down' | 'left' | 'right' | 'none', [key: string]: any }) => {
  const yOffset = direction === 'up' ? 40 : direction === 'down' ? -40 : 0;
  const xOffset = direction === 'left' ? 40 : direction === 'right' ? -40 : 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, x: xOffset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      {/* Sleek Navigation */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-xl py-4 border-b border-white/10' : 'bg-transparent py-8'}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="text-2xl font-medium tracking-tighter z-50 relative">
            BILMARE
          </Link>
          
          <nav className="hidden md:flex items-center space-x-10 text-xs font-medium tracking-widest uppercase">
            <Link to="/layanan" className="hover:text-neutral-400 transition-colors">Layanan</Link>
            <Link to="/pendekatan" className="hover:text-neutral-400 transition-colors">Pendekatan</Link>
            <Link to="/klien-kami" className="hover:text-neutral-400 transition-colors">Klien Kami</Link>
            <Link to="/insight" className="hover:text-neutral-400 transition-colors">Insight</Link>
            <Link to="/tentang-kami" className="hover:text-neutral-400 transition-colors">Tentang Kami</Link>
            <Link to="/login" className="ml-4 px-6 py-2.5 bg-white text-black rounded-full hover:bg-neutral-200 transition-colors flex items-center gap-2">
              Login <ArrowRight size={14} />
            </Link>
          </nav>

          <button className="md:hidden p-2 -mr-2 z-50 relative text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-black pt-32 px-6 md:hidden flex flex-col"
          >
            <nav className="flex flex-col space-y-8 text-4xl font-medium tracking-tighter">
              <Link to="/layanan" className="hover:text-neutral-400 transition-colors">Layanan</Link>
              <Link to="/pendekatan" className="hover:text-neutral-400 transition-colors">Pendekatan</Link>
              <Link to="/klien-kami" className="hover:text-neutral-400 transition-colors">Klien Kami</Link>
              <Link to="/insight" className="hover:text-neutral-400 transition-colors">Insight</Link>
              <Link to="/tentang-kami" className="hover:text-neutral-400 transition-colors">Tentang Kami</Link>
              <Link to="/login" className="text-neutral-500 hover:text-white transition-colors">Login</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Massive Footer */}
      <footer className="bg-black text-white pt-32 pb-12 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
            <div>
              <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-8">Siap memastikan laporan Anda tahan pengawasan?</h2>
              <Link to="/layanan" className="inline-flex items-center space-x-3 text-sm font-medium tracking-widest uppercase border-b border-white pb-2 hover:text-neutral-400 hover:border-neutral-400 transition-colors group">
                <span>Diskusikan Keterlibatan Anda</span>
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 text-sm font-medium tracking-wide text-neutral-400">
              <div className="flex flex-col space-y-4">
                <Link to="/layanan" className="hover:text-white transition-colors">Layanan</Link>
                <Link to="/pendekatan" className="hover:text-white transition-colors">Pendekatan</Link>
                <Link to="/klien-kami" className="hover:text-white transition-colors">Klien Kami</Link>
              </div>
              <div className="flex flex-col space-y-4">
                <Link to="/insight" className="hover:text-white transition-colors">Insight</Link>
                <Link to="/tentang-kami" className="hover:text-white transition-colors">Tentang Kami</Link>
                <Link to="/login" className="hover:text-white transition-colors">Client Portal</Link>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-12">
            <div className="text-[12vw] md:text-[8vw] font-medium tracking-tighter leading-none mb-8 md:mb-0">
              BILMARE
            </div>
            <div className="text-sm text-neutral-500 text-right">
              <p>&copy; {new Date().getFullYear()} Bilmare.</p>
              <p>Jakarta, Indonesia.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
