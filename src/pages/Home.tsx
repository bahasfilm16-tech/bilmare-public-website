import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <div className="w-full">
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden pt-[72px]">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-45deg, transparent, transparent 10px, #ffffff 10px, #ffffff 11px)',
          }}
        />
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-mckinsey-blue opacity-[0.15] blur-[100px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-20 relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-12 py-16 md:py-24">
          <div className="w-full md:w-[60%] lg:w-[55%]">
            <FadeIn>
              <h1 className="font-georgia text-white text-[clamp(36px,6vw,84px)] leading-[1.1] font-bold mb-7">
                Every claim defensible.
              </h1>
              <p className="font-sans text-white/80 text-base md:text-xl leading-relaxed mb-9 max-w-2xl">
                PSPK 1 and PSPK 2 take effect January 2027. Bilmare works with listed companies to
                ensure their reports are audit-ready before the deadline. Not after the findings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/layanan"
                  className="bg-mckinsey-blue text-white font-sans text-sm font-semibold py-4 px-8 rounded-sm hover:-translate-y-1 transition-transform inline-flex justify-center border border-transparent"
                >
                  Start Your Assessment
                </Link>
                <Link
                  to="/metodologi"
                  className="bg-transparent text-white font-sans text-sm font-semibold py-4 px-8 rounded-sm border border-white hover:bg-white hover:text-deep-navy transition-colors inline-flex justify-center items-center"
                >
                  See How We Work
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Abstract visual */}
          <div className="w-full md:w-[35%] hidden sm:block">
            <FadeIn delay={0.2}>
              <div
                className="aspect-[4/5] w-full max-w-[360px] mx-auto relative border border-white/10 p-6"
              >
                <div
                  className="w-full h-full relative"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                >
                  <div className="absolute top-[20%] left-[40%] w-2 h-2 rounded-full bg-mckinsey-blue shadow-[0_0_15px_5px_rgba(34,81,255,0.6)]" />
                  <div className="absolute top-[60%] left-[80%] w-2 h-2 rounded-full bg-white shadow-[0_0_15px_5px_rgba(255,255,255,0.6)]" />
                  <div className="absolute top-[80%] left-[20%] w-2 h-2 rounded-full bg-mckinsey-blue shadow-[0_0_15px_5px_rgba(34,81,255,0.6)]" />
                  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <line
                      x1="40%"
                      y1="20%"
                      x2="80%"
                      y2="60%"
                      stroke="rgba(34,81,255,0.5)"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                    <line
                      x1="40%"
                      y1="20%"
                      x2="20%"
                      y2="80%"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="1"
                    />
                  </svg>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 2 — URGENCY */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-20">
          <FadeIn>
            <div className="text-text-muted font-sans text-[11px] tracking-[0.15em] uppercase font-semibold mb-4">
              MARKET CONTEXT
            </div>
            <h2 className="font-georgia text-text-dark text-[clamp(26px,4vw,48px)] leading-[1.2] font-semibold mb-14 max-w-3xl">
              Most listed companies are not ready. The deadline is fixed.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 mb-16">
            {[
              { num: '956', desc: 'Listed companies on IDX' },
              { num: '6%', desc: 'Have assurance-ready sustainability reports' },
              { num: '850+', desc: 'Not yet compliant with PSPK 1/2' },
              { num: '2027', desc: 'The year compliance becomes mandatory' },
            ].map((stat, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="pb-4 border-b-2 border-mckinsey-blue/20">
                  <div className="font-georgia text-mckinsey-blue text-[clamp(36px,5vw,60px)] font-bold mb-3 leading-none">
                    {stat.num}
                  </div>
                  <div className="font-sans text-text-muted text-sm leading-relaxed">{stat.desc}</div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 font-sans text-text-dark/80 leading-[1.75] text-base md:text-lg">
            <FadeIn delay={0.2}>
              <p>
                PSPK 1 and PSPK 2 are sustainability disclosure standards mandated by OJK, aligned
                with IFRS S1/S2 and GRI 2021. They require quantitative data, business risk
                analysis, and disclosures that can withstand independent scrutiny.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p>
                The consequences of non-compliance extend beyond regulatory penalties. Institutional
                investors now require verified ESG data before making investment decisions. A report
                that cannot be defended is a report that cannot be trusted.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 3 — METHODOLOGY */}
      <section className="bg-subtle-gradient py-20 md:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-45deg, transparent, transparent 10px, #ffffff 10px, #ffffff 11px)',
          }}
        />
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-20 relative z-10">
          <FadeIn>
            <div className="text-mckinsey-blue font-sans text-[11px] tracking-[0.15em] uppercase font-semibold mb-4">
              BILMARE METHODOLOGY
            </div>
            <h2 className="font-georgia text-white text-[clamp(26px,4vw,48px)] leading-[1.2] font-semibold mb-16 max-w-3xl">
              The Four Layers of Verification.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative">
            <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-white/20 z-0" />
            {[
              {
                step: '01',
                title: 'Data Integrity',
                desc: 'Every figure is verified across the Annual Report, Sustainability Report, and Audited Financial Statements.',
              },
              {
                step: '02',
                title: 'Regulatory Alignment',
                desc: 'Every disclosure is reviewed against current regulatory and reporting frameworks, including PSPK 1/PSPK 2 and GRI Standards.',
              },
              {
                step: '03',
                title: 'Assurance Readiness',
                desc: 'Reports are prepared to the standard an assurance provider would expect. Every claim has a documented source.',
              },
              {
                step: '04',
                title: 'Institutional Memory',
                desc: 'All verification records are stored systematically in the Bilmare Engine. Each engagement builds on the last.',
              },
            ].map((layer, i) => (
              <FadeIn key={i} delay={0.1 * i} className="relative z-10">
                <div className="flex sm:flex-col items-start gap-5 sm:gap-0">
                  <div className="w-14 h-14 rounded-full bg-deep-navy border border-mckinsey-blue flex items-center justify-center font-serif text-white text-xl font-bold sm:mb-8 shrink-0">
                    {layer.step}
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-white text-lg sm:text-xl mb-3">
                      {layer.title}
                    </h3>
                    <p className="font-sans text-white/75 leading-relaxed text-sm md:text-base">
                      {layer.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — SERVICES */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-20">
          <FadeIn>
            <div className="text-text-muted font-sans text-[11px] tracking-[0.15em] uppercase font-semibold mb-4">
              SERVICES
            </div>
            <h2 className="font-georgia text-text-dark text-[clamp(26px,4vw,48px)] leading-[1.2] font-semibold mb-12 max-w-2xl">
              From assessment to a report that holds.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                badge: 'Start Here',
                title: 'PSPK Readiness Assessment',
                tagline: 'A clear picture of where the report stands.',
                desc: 'A structured assessment of where the report stands against current regulatory requirements. The findings determine what comes next.',
                duration: '2–3 weeks',
                ideal: 'Listed companies that have not assessed their compliance readiness',
                label: 'Start Assessment',
                featured: true,
              },
              {
                title: 'Tier 1: Verification & Readiness',
                tagline: 'An independent eye on every disclosure.',
                desc: 'For companies with an existing draft that requires independent verification. Bilmare reviews cross-document consistency and alignment with applicable GRI, IFRS, and regulatory requirements.',
                duration: '3–4 weeks',
                ideal: 'Listed companies, MNC subsidiaries, and companies preparing for assurance',
                label: 'See Tier 1',
                featured: false,
              },
              {
                title: 'Tier 2: Full Accountable Report',
                tagline: 'For companies building their reporting foundation from the ground up.',
                desc: 'For companies without an existing draft. Bilmare builds the Master Matrix as a single source of truth, then develops the report with each claim traceable to its source.',
                duration: '8–12 weeks',
                ideal: 'Pre-IPO companies, family businesses in transition, and first-time reporters',
                label: 'See Tier 2',
                featured: false,
              },
              {
                title: 'Institutional Memory Retainer',
                tagline: 'Institutional knowledge that compounds over time.',
                desc: 'All client data, including the Master Matrix, time series records, metric definitions, and source archives, is maintained as a living baseline for each reporting cycle.',
                duration: 'Ongoing / Annual',
                ideal: 'Existing Tier 1 or Tier 2 clients',
                label: 'See Retainer',
                featured: false,
              },
            ].map((svc, i) => (
              <FadeIn key={i} delay={0.1 * (i + 1)}>
                <div
                  className={`bg-white border-t-4 ${
                    svc.featured ? 'border-t-mckinsey-blue' : 'border-t-line hover:border-t-mckinsey-blue'
                  } border border-line p-7 md:p-10 hover:shadow-xl transition-all duration-300 h-full flex flex-col`}
                >
                  {svc.badge && (
                    <div className="mb-4">
                      <span className="bg-mckinsey-blue/10 text-mckinsey-blue text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded inline-block">
                        {svc.badge}
                      </span>
                    </div>
                  )}
                  {!svc.badge && <div className="mb-4 h-6" />}
                  <h3 className="font-georgia font-bold text-xl md:text-2xl mb-3">{svc.title}</h3>
                  <p className="font-sans text-mckinsey-blue font-medium mb-5 text-[15px]">{svc.tagline}</p>
                  <div className="font-sans text-text-dark/70 text-[15px] leading-relaxed mb-6 flex-grow">
                    {svc.desc}
                  </div>
                  <div className="border-t border-line pt-5 font-sans text-sm mb-5">
                    <div className="font-semibold text-text-dark mb-1">
                      Duration: <span className="font-normal text-text-muted">{svc.duration}</span>
                    </div>
                    <div className="font-semibold text-text-dark">
                      Ideal For: <span className="font-normal text-text-muted">{svc.ideal}</span>
                    </div>
                  </div>
                  <Link
                    to="/layanan"
                    className="text-mckinsey-blue font-sans font-semibold text-[15px] hover:text-blue-mid inline-flex items-center mt-auto w-fit"
                  >
                    {svc.label}
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHO WE SERVE */}
      <section className="bg-vivid-gradient py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-20">
          <FadeIn>
            <div className="text-white/80 font-sans text-[11px] tracking-[0.15em] uppercase font-semibold mb-4">
              WHO WE WORK WITH
            </div>
            <h2 className="font-georgia text-white text-[clamp(24px,4vw,44px)] leading-[1.3] font-semibold mb-12 max-w-4xl">
              Bilmare works with listed companies and regulated institutions where disclosure quality
              is not optional.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Emiten BEI Mid-Cap',
                desc: 'Listed companies yet to undergo sustainability assurance. Bilmare identifies exactly where the gaps are before regulators do.',
                contact: 'Corporate Secretary / Head of Finance',
              },
              {
                title: 'Perusahaan Calon IPO (Series B+)',
                desc: 'Pre-IPO companies where investor due diligence requires disclosures that are accurate, consistent, and fully traceable.',
                contact: 'CFO / Head of Corporate Finance',
              },
              {
                title: 'Perbankan & Asuransi',
                desc: 'Financial institutions under OJK oversight that require rigorous verification across sustainability and governance disclosures.',
                contact: 'Corporate Secretary / Compliance Director',
              },
              {
                title: 'Bisnis Keluarga Transisi',
                desc: 'Family-owned businesses moving toward formal governance, building their first sustainability report on a foundation that holds.',
                contact: 'Board of Directors / Sustainability Lead',
              },
            ].map((segment, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="bg-deep-navy/30 backdrop-blur-sm border border-white/10 p-7 md:p-8 h-full flex flex-col hover:bg-deep-navy/40 transition-colors">
                  <h3 className="font-georgia text-white text-lg md:text-xl font-bold mb-4">
                    {segment.title}
                  </h3>
                  <p className="font-sans text-white/80 text-[15px] leading-relaxed mb-5 flex-grow">
                    {segment.desc}
                  </p>
                  <div className="font-sans text-white/50 text-[13px] border-t border-white/10 pt-4 mt-auto">
                    Primary Contact: <span className="text-white">{segment.contact}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — WHY BILMARE */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-20">
          <FadeIn>
            <div className="text-text-muted font-sans text-[11px] tracking-[0.15em] uppercase font-semibold mb-4">
              WHY BILMARE
            </div>
            <h2 className="font-georgia text-text-dark text-[clamp(24px,4vw,48px)] leading-[1.2] font-semibold mb-16 max-w-3xl">
              Bilmare does one thing. Pre-assurance verification for sustainability and annual
              reports in Indonesia.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {[
              {
                num: '01',
                title: 'Single Focus',
                desc: 'Bilmare works exclusively on disclosure readiness and cross-document verification for sustainability and annual reports. Full focus, every engagement.',
              },
              {
                num: '02',
                title: 'Independent Verification',
                desc: 'Every claim in the report is traceable to its source and defensible under independent scrutiny. The work is structured, documented, and built to withstand review.',
              },
              {
                num: '03',
                title: 'Institutional Memory',
                desc: 'All client data, verification records, and source documentation are retained in the Bilmare Engine. Each reporting cycle builds on the last, accumulating institutional knowledge that stays with the client.',
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="border-t-2 border-mckinsey-blue pt-6">
                  <div className="font-sans text-text-muted font-semibold tracking-wider text-sm mb-4">
                    {item.num}
                  </div>
                  <h3 className="font-georgia font-bold text-xl md:text-[22px] leading-[1.3] mb-4 text-text-dark">
                    {item.title}
                  </h3>
                  <p className="font-sans text-text-dark/70 text-[15px] leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — CTA / CONTACT FORM */}
      <section className="bg-deep-navy py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[600px] h-[400px] md:w-[800px] md:h-[500px] rounded-full bg-mckinsey-blue opacity-[0.2] blur-[150px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-20 relative z-10 flex flex-col items-center">
          <FadeIn className="text-center mb-10 md:mb-12">
            <div className="text-mckinsey-blue font-sans text-[11px] tracking-[0.15em] uppercase font-semibold mb-4">
              GET STARTED
            </div>
            <h2 className="font-georgia text-white text-[clamp(28px,5vw,56px)] leading-[1.1] font-bold mb-5">
              Start with a conversation.
            </h2>
            <p className="font-sans text-white/80 text-base md:text-[17px] leading-relaxed max-w-2xl mx-auto">
              Schedule a discovery call to understand where the report stands against current
              regulatory requirements.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="w-full max-w-[640px]">
            <ContactForm source="home" />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
