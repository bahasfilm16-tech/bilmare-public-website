import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

export default function TentangKami() {
  return (
    <div className="w-full">
      {/* HEADER */}
      <section className="bg-deep-navy pt-[72px] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-45deg, transparent, transparent 10px, #ffffff 10px, #ffffff 11px)',
          }}
        />
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-20 py-20 md:py-28 relative z-10">
          <FadeIn>
            <div className="text-mckinsey-blue font-sans text-[11px] tracking-[0.15em] uppercase font-semibold mb-6">
              ABOUT BILMARE
            </div>
            <h1 className="font-georgia text-white text-[clamp(36px,6vw,72px)] leading-[1.1] font-bold mb-7 max-w-4xl">
              Every claim. Verified.
            </h1>
            <p className="font-sans text-white/80 text-base md:text-xl leading-relaxed max-w-3xl">
              Bilmare is a specialist firm focused exclusively on one thing: preparing listed
              companies for PSPK 1/PSPK 2 compliance ahead of the January 2027 deadline. Based
              in Jakarta, Indonesia.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* THE PROBLEM WE SOLVE */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-20">
          <FadeIn>
            <div className="text-text-muted font-sans text-[11px] tracking-[0.15em] uppercase font-semibold mb-4">
              WHY WE EXIST
            </div>
            <h2 className="font-georgia text-text-dark text-[clamp(26px,4vw,48px)] leading-[1.2] font-semibold mb-14 max-w-3xl">
              Sustainability data integrity is no longer optional. It is a fundamental condition
              of doing business.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 font-sans text-text-dark/80 text-base md:text-lg leading-[1.75]">
            <FadeIn delay={0.1}>
              <p className="mb-6">
                Bilmare was built to address a systemic problem. Of the 950+ companies listed on
                the Indonesia Stock Exchange, more than 850 are not ready for the PSPK 1 and PSPK 2
                standards mandated by OJK from 1 January 2027.
              </p>
              <p>
                Many companies still treat sustainability reporting as a public relations exercise.
                Reports are written with convincing narratives, but when measured, the figures are
                inconsistent across the Financial Statements, Annual Report, and Sustainability
                Report.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mb-6">
                Regulators and institutional investors have begun closing the door on unsubstantiated
                disclosures. Yet the market is filled with generalist management consultants and
                creative agencies focused on writing and design, not on claim verification and data
                reconciliation.
              </p>
              <p>
                This is where Bilmare operates. We do not begin work by writing. We begin by
                verifying every figure and ensuring every claim that will be disclosed can be
                defended at the assurance provider's desk.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* WHAT WE ARE & ARE NOT */}
      <section className="bg-subtle-gradient py-20 md:py-32 relative">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <FadeIn>
              <h2 className="font-georgia text-white text-[clamp(26px,3vw,36px)] leading-[1.2] font-semibold mb-8">
                What Bilmare Is
              </h2>
              <ul className="space-y-5">
                {[
                  'A specialist in PSPK 1/2 and GRI Standards disclosure compliance.',
                  'The architect of a single source of truth for the company\'s non-financial data.',
                  'A cross-document verification firm that ensures numerical consistency.',
                  'A strategic partner before external assurance providers are engaged.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-mckinsey-blue font-mono mt-1 shrink-0">+</span>
                    <span className="font-sans text-white/90 text-[16px] md:text-[17px] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="font-georgia text-white text-[clamp(26px,3vw,36px)] leading-[1.2] font-semibold mb-8">
                What Bilmare Is{' '}
                <span className="text-mckinsey-blue underline decoration-2 underline-offset-4">
                  Not
                </span>
              </h2>
              <ul className="space-y-5">
                {[
                  'Not an Assurance Provider: Bilmare does not issue assurance opinions. We ensure the report is ready to pass independent assurance.',
                  'Not a Creative Agency: The focus is not on design. The focus is on the validity of every claim.',
                  'Not a Generalist Consultant: Bilmare declines work outside the scope of disclosure verification.',
                  'Not a Template Provider: The methodology is applied specifically to each company\'s complexity.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-white/40 font-mono mt-1 shrink-0">&times;</span>
                    <span className="font-sans text-white/70 text-[16px] md:text-[17px] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-20">
          <FadeIn>
            <div className="text-text-muted font-sans text-[11px] tracking-[0.15em] uppercase font-semibold mb-4">
              OUR PRINCIPLES
            </div>
            <h2 className="font-georgia text-text-dark text-[clamp(26px,4vw,48px)] leading-[1.2] font-semibold mb-14 max-w-2xl">
              Three principles we do not compromise.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                num: '01',
                title: 'Accountability Above All',
                desc: 'Every claim we help develop must be defensible. There is no grey area in the standards we apply.',
              },
              {
                num: '02',
                title: 'Specialisation, Not Generalisation',
                desc: 'We focus entirely on one domain. Depth is more valuable than breadth when regulatory and reputational risk is at stake.',
              },
              {
                num: '03',
                title: 'Long-Term Partnership',
                desc: 'We build institutional knowledge assets that grow in value with each client engagement. This is not a one-off transaction.',
              },
            ].map((v, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="border-t-2 border-mckinsey-blue pt-6">
                  <div className="font-sans text-text-muted font-semibold tracking-wider text-sm mb-4">
                    {v.num}
                  </div>
                  <h3 className="font-georgia font-bold text-xl md:text-[22px] leading-[1.3] mb-4 text-text-dark">
                    {v.title}
                  </h3>
                  <p className="font-sans text-text-dark/70 text-[15px] leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-deep-navy py-16 md:py-20 border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-20 text-center">
          <FadeIn>
            <h3 className="font-georgia text-white text-xl md:text-2xl font-medium mb-6 max-w-2xl mx-auto">
              Ready to ensure the report can be defended?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/kontak"
                className="bg-mckinsey-blue hover:bg-blue-mid text-white font-sans text-sm font-semibold py-4 px-8 rounded-sm transition-colors inline-block"
              >
                Schedule a Discovery Call
              </Link>
              <Link
                to="/layanan"
                className="border border-white text-white hover:bg-white hover:text-deep-navy font-sans text-sm font-semibold py-4 px-8 rounded-sm transition-colors inline-block"
              >
                See Our Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
