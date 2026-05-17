import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

const navLinks = [
  { name: 'Layanan', path: '/layanan' },
  { name: 'Metodologi', path: '/metodologi' },
  { name: 'Tentang Kami', path: '/tentang-kami' },
  { name: 'Kontak', path: '/kontak' },
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 ${
          isScrolled || mobileMenuOpen ? 'bg-deep-navy shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-20 flex justify-between items-center w-full">
          <Link
            to="/"
            className="text-white font-georgia text-xl sm:text-2xl font-bold tracking-tight shrink-0"
          >
            Bilmare
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-mckinsey-blue'
                    : 'text-white hover:text-mckinsey-blue'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => navigate('/login')}
              className="border border-white text-white px-5 py-2 rounded-sm text-sm font-semibold uppercase hover:bg-white hover:text-deep-navy transition-colors whitespace-nowrap"
            >
              Login
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-1 -mr-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[72px] bg-deep-navy z-40 flex flex-col items-center justify-start pt-8 pb-12 px-6 overflow-y-auto"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.25 }}
                className="w-full"
              >
                <Link
                  to={link.path}
                  className={`block text-center text-2xl font-georgia py-5 border-b border-white/10 transition-colors ${
                    location.pathname === link.path
                      ? 'text-mckinsey-blue'
                      : 'text-white hover:text-mckinsey-blue'
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 + 0.05, duration: 0.25 }}
              className="mt-8 w-full"
            >
              <button
                onClick={() => { setMobileMenuOpen(false); navigate('/login'); }}
                className="block w-full text-center border border-white text-white py-4 rounded-sm font-semibold text-sm uppercase tracking-wider hover:bg-white hover:text-deep-navy transition-colors"
              >
                Login
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
