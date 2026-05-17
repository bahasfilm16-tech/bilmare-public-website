import { Link } from 'react-router-dom';

export default function Footer() {
  const portalClientUrl = import.meta.env.VITE_PORTAL_CLIENT_URL || '#';
  const portalTimUrl = import.meta.env.VITE_PORTAL_TIM_URL || '#';

  return (
    <footer className="bg-subtle-gradient pt-20 pb-8 border-t border-mid-navy">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="text-white font-georgia text-3xl font-bold tracking-tight block mb-4"
            >
              Bilmare
            </Link>
            <p className="text-white/75 text-sm font-sans italic max-w-xs leading-relaxed">
              Every claim. Verified.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              SERVICES
            </h4>
            <ul className="space-y-3">
              {[
                'PSPK Readiness Assessment',
                'Tier 1: Verification & Readiness',
                'Tier 2: Full Accountable Report',
                'Institutional Memory Retainer',
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/layanan"
                    className="text-white/65 hover:text-white hover:text-mckinsey-blue transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              COMPANY
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/tentang-kami"
                  className="text-white/65 hover:text-white transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/metodologi"
                  className="text-white/65 hover:text-white transition-colors text-sm"
                >
                  Methodology
                </Link>
              </li>
              <li>
                <Link
                  to="/kontak"
                  className="text-white/65 hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              CONTACT
            </h4>
            <ul className="space-y-3">
              <li className="text-white/65 text-sm">Jakarta, Indonesia</li>
              <li>
                <a
                  href="mailto:info@bilmare.com"
                  className="text-white/65 hover:text-white transition-colors text-sm"
                >
                  info@bilmare.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/bilmare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/65 hover:text-white transition-colors text-sm mt-1"
                  aria-label="Bilmare on LinkedIn"
                >
                  <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-mid-navy pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/45 text-xs font-sans">
            &copy; {new Date().getFullYear()} Bilmare. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href={portalClientUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/65 hover:text-white hover:text-mckinsey-blue transition-colors text-sm flex items-center gap-1"
            >
              Client Login
            </a>
            <span className="text-white/20">|</span>
            <a
              href={portalTimUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/65 hover:text-white hover:text-mckinsey-blue transition-colors text-sm flex items-center gap-1"
            >
              Team Login
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
