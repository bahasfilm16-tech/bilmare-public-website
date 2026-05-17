import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

export default function Layanan() {
  const services = [
    {
      id: "pspk-assessment",
      badge: "Start Here",
      title: "PSPK Readiness Assessment",
      tagline: "A clear picture of where the report stands.",
      desc: "The first step before any major undertaking is understanding the current position. A focused assessment provides an objective picture of the report's compliance status and identifies gaps across the relevant frameworks. The findings determine what needs to be addressed and in what order.",
      included: [
        "Audit of historical disclosure documentation.",
        "Initial gap mapping against PSPK 1 and PSPK 2.",
        "Analysis of data vulnerability findings across departments.",
        "Executive Report covering gap severity levels and remediation recommendations."
      ],
      idealClient: "Listed companies that have not yet assessed their compliance readiness ahead of the 2027 mandatory requirements.",
      duration: "2–3 weeks",
      bgClass: "bg-white",
      textClass: "text-text-dark",
      accent: "text-mckinsey-blue",
      listIconColor: "text-mckinsey-blue"
    },
    {
      id: "tier-1",
      title: "Tier 1: Verification & Disclosure Readiness",
      tagline: "An independent eye on every disclosure.",
      desc: "Designed for companies that have an internally prepared sustainability report draft and require an independent review for risk mitigation. We verify cross-document consistency and perform gap analysis against the applicable GRI Standards, IFRS S1/S2, and SEOJK 16/2021 requirements, as a final preparation before external assurance.",
      included: [
        "Cross-document verification (Data Integrity check).",
        "Granular gap analysis against 203+ requirements from applicable standards.",
        "Identification and treatment of data anomalies.",
        "Preparation of Audit Trail Documentation for the assurance provider."
      ],
      idealClient: "Mid- to large-cap listed companies and MNC subsidiaries targeting independent assurance.",
      duration: "3–4 weeks",
      bgClass: "bg-subtle-gradient",
      textClass: "text-white",
      accent: "text-white/80",
      listIconColor: "text-white/60"
    },
    {
      id: "tier-2",
      title: "Tier 2: Full Accountable Report Development",
      tagline: "For companies building their reporting foundation from the ground up.",
      desc: "For companies without any formal reporting draft. Bilmare does not begin with narrative text. We begin by verifying source data and building the Master Matrix as the quantitative single source of truth. From that foundation, we develop a report architecture that is fully traceable and defensible.",
      included: [
        "Construction of the Master Matrix for ESG data reconciliation.",
        "Development of all indicators and disclosures aligned with applicable regulations.",
        "Iterative review with the relevant internal committees.",
        "Preparation of the final document, ready for submission to investors and regulators."
      ],
      idealClient: "Pre-IPO companies, family businesses transitioning to formal governance, and companies publishing their first sustainability report.",
      duration: "8–12 weeks",
      bgClass: "bg-white",
      textClass: "text-text-dark",
      accent: "text-mckinsey-blue",
      listIconColor: "text-mckinsey-blue"
    },
    {
      id: "retainer",
      title: "Institutional Memory Retainer",
      tagline: "Institutional knowledge that compounds over time.",
      desc: "The biggest obstacle for listed companies is the loss of institutional memory when advisory teams change year to year. Bilmare retains all client data, including the Master Matrix, time series database, internal metric definitions, and primary source archive, in a managed system. This knowledge asset ensures that the next reporting cycle is significantly more efficient.",
      included: [
        "Management and retention of the annual Master Matrix.",
        "Updates to metric definitions when global regulatory standards change, including IFRS S2.",
        "Primary document archive as an audit trail.",
        "Priority support for the next fiscal year reporting cycle."
      ],
      idealClient: "Clients who have completed Tier 1 or Tier 2 with Bilmare.",
      duration: "Ongoing / Annual Contract",
      bgClass: "bg-vivid-gradient",
      textClass: "text-white",
      accent: "text-white/90",
      listIconColor: "text-white/70"
    }
  ];

  return (
    <div className="w-full">
      {/* HEADER SECTION */}
      <section className="bg-deep-navy pt-40 pb-24 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 relative z-10 text-center">
          <FadeIn>
            <div className="text-mckinsey-blue font-sans text-[11px] tracking-[0.15em] uppercase font-semibold mb-6">OUR SERVICES</div>
            <h1 className="font-georgia text-white text-[clamp(40px,5vw,64px)] leading-[1.1] font-bold mb-8 max-w-4xl mx-auto">
              From Targeted Assessment to Full Retainer.
            </h1>
            <p className="font-sans text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Learn about the methodology and deliverables at each stage, built to ensure every
              claim can be defended.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SERVICES LIST */}
      {services.map((svc) => (
        <section id={svc.id} key={svc.id} className={`${svc.bgClass} py-24 md:py-32 relative border-b border-line/10`}>
          <div className="max-w-[1280px] mx-auto px-6 md:px-20">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start ${svc.textClass}`}>

              <FadeIn>
                {svc.badge && (
                  <div className="mb-6">
                    <span className="bg-mckinsey-blue/10 text-mckinsey-blue border border-mckinsey-blue/20 text-[11px] uppercase tracking-wider font-bold px-4 py-1.5 rounded inline-block">
                      {svc.badge}
                    </span>
                  </div>
                )}
                <h2 className="font-georgia text-[clamp(32px,3vw,44px)] leading-[1.2] font-semibold mb-4">
                  {svc.title}
                </h2>
                <h3 className={`font-sans text-[20px] font-medium leading-relaxed mb-8 ${svc.accent}`}>
                  "{svc.tagline}"
                </h3>
                <p className={`font-sans text-[17px] leading-relaxed mb-8 ${svc.textClass === 'text-white' ? 'text-white/80' : 'text-text-dark/80'}`}>
                  {svc.desc}
                </p>

                <div className={`border-t pt-8 ${svc.textClass === 'text-white' ? 'border-white/20' : 'border-line'}`}>
                  <div className="font-sans mb-4">
                    <span className="font-semibold block mb-1">Engagement Duration:</span>
                    <span className={svc.textClass === 'text-white' ? 'text-white/70' : 'text-text-muted'}>{svc.duration}</span>
                  </div>
                  <div className="font-sans">
                    <span className="font-semibold block mb-1">Ideal Client Profile:</span>
                    <span className={svc.textClass === 'text-white' ? 'text-white/70' : 'text-text-muted'}>{svc.idealClient}</span>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2} className="relative">
                <div className={`${svc.textClass === 'text-white' ? 'bg-deep-navy/30 border-white/10' : 'bg-off-white border-line'} border p-10 h-full`}>
                  <div className="font-sans text-[12px] tracking-[0.1em] uppercase font-bold mb-8">What's Included</div>
                  <ul className="space-y-6">
                    {svc.included.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className={`${svc.listIconColor} mr-4 font-mono mt-1 font-bold`}>+</span>
                        <span className={`font-sans text-[16px] leading-relaxed ${svc.textClass === 'text-white' ? 'text-white/90' : 'text-text-dark/80'}`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-12 pt-8 border-t border-current border-opacity-10">
                    <Link to="/kontak" className={`${svc.textClass === 'text-white' ? 'text-white border-white hover:bg-white hover:text-deep-navy' : 'bg-mckinsey-blue text-white hover:bg-blue-mid border-transparent'} border px-8 py-3 rounded-sm font-sans font-semibold transition-colors inline-block text-sm`}>
                      Schedule a Consultation
                    </Link>
                  </div>
                </div>
              </FadeIn>

            </div>
          </div>
        </section>
      ))}

      {/* FINAL CALL TO ACTION */}
      <section className="bg-deep-navy py-12 border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 text-center">
          <FadeIn>
            <h3 className="font-georgia text-white text-xl md:text-2xl font-medium mb-6">Not sure which service fits your situation?</h3>
            <Link to="/kontak" className="text-mckinsey-blue font-sans text-[15px] font-semibold hover:text-white transition-colors">
              Speak with our team
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
