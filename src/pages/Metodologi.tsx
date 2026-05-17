import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

const layers = [
  {
    num: '01',
    title: 'Data Integrity',
    subtitle: 'No figure is left standing without cross-validation.',
    desc: 'The first layer establishes an absolute foundation. We perform a thorough cross-check across documents: the Annual Report, Sustainability Report, and Audited Financial Statements. Every figure referenced across different documents must be identical, or must have a clearly documented bridging explanation to avoid discrepancies at the audit committee.',
    bgClass: 'bg-white',
    textClass: 'text-text-dark',
    numClass: 'text-mckinsey-blue',
  },
  {
    num: '02',
    title: 'Regulatory Alignment',
    subtitle: 'Mapping every claim to the applicable regulatory framework.',
    desc: 'Disclosure without regulatory alignment risks OJK censure. In the second layer, every claim and metric is reviewed for gaps against the requirements of PSPK 1/PSPK 2 (mandatory from 1 January 2027), GRI Standards 2021, and SEOJK 16/2021. Every deficiency is documented with a severity rating that measures the regulatory risk facing the company.',
    bgClass: 'bg-off-white',
    textClass: 'text-text-dark',
    numClass: 'text-mckinsey-blue/30',
  },
  {
    num: '03',
    title: 'Assurance Readiness',
    subtitle: 'Reports built as though the assurance provider is arriving tomorrow.',
    desc: 'Assurance audits frequently uncover gaps caused by missing source trails. The third layer ensures every claim has a clear audit trail. Every non-financial metric must have a standardised measurement definition that is consistent from year to year. This closes the opportunity for assurance failure.',
    bgClass: 'bg-white',
    textClass: 'text-text-dark',
    numClass: 'text-mckinsey-blue',
  },
  {
    num: '04',
    title: 'Institutional Memory',
    subtitle: 'Ensuring institutional knowledge remains with the company, not the advisor.',
    desc: 'The fourth layer is the structural advantage of working with Bilmare. All verification evidence, records, definitions, and disclosure architecture are stored systematically within the Bilmare Engine per client. The next reporting cycle never starts from zero. This institutional knowledge is managed and grows in value with each engagement.',
    bgClass: 'bg-subtle-gradient',
    textClass: 'text-white',
    numClass: 'text-white/20',
  },
];

export default function Metodologi() {
  return (
    <div className="w-full">
      {/* HEADER */}
      <section className="bg-vivid-gradient pt-[72px] relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-20 py-20 md:py-28 relative z-10">
          <FadeIn>
            <div className="text-white/80 font-sans text-[11px] tracking-[0.15em] uppercase font-semibold mb-6">
              OUR METHODOLOGY
            </div>
            <h1 className="font-georgia text-white text-[clamp(36px,6vw,72px)] leading-[1.1] font-bold mb-7 max-w-4xl">
              Verification that cannot be skipped.
            </h1>
            <p className="font-sans text-white/90 text-base md:text-xl leading-relaxed max-w-3xl">
              What distinguishes Bilmare's approach is a refusal to treat report preparation as a
              creative writing exercise. Bilmare approaches sustainability disclosure the way a
              financial auditor approaches financial statements. We call this The Four Layers.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* THE 4 LAYERS */}
      {layers.map((layer) => (
        <section
          key={layer.num}
          className={`${layer.bgClass} py-20 md:py-28 relative border-b border-line/10`}
        >
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-20">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
              <FadeIn className="md:w-1/4 shrink-0">
                <div className="font-sans text-[11px] tracking-[0.15em] uppercase font-semibold mb-4 text-text-muted">
                  LAYER / {layer.num}
                </div>
                <div
                  className={`font-georgia font-bold leading-none ${layer.numClass}`}
                  style={{ fontSize: 'clamp(72px, 10vw, 120px)' }}
                >
                  {layer.num}
                </div>
              </FadeIn>
              <FadeIn delay={0.2} className="md:w-3/4 pt-0 md:pt-10">
                <h2
                  className={`font-georgia text-[clamp(28px,4vw,48px)] leading-[1.2] font-semibold mb-5 ${layer.textClass}`}
                >
                  {layer.title}
                </h2>
                <h3
                  className={`font-sans text-lg md:text-xl font-medium leading-relaxed mb-7 ${
                    layer.textClass === 'text-white' ? 'text-white/80' : 'text-mckinsey-blue'
                  }`}
                >
                  "{layer.subtitle}"
                </h3>
                <p
                  className={`font-sans text-base md:text-lg leading-relaxed ${
                    layer.textClass === 'text-white' ? 'text-white/70' : 'text-text-dark/70'
                  }`}
                >
                  {layer.desc}
                </p>
              </FadeIn>
            </div>
          </div>
        </section>
      ))}

      {/* CLOSING CTA */}
      <section className="bg-deep-navy py-20 md:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-45deg, transparent, transparent 10px, #ffffff 10px, #ffffff 11px)',
          }}
        />
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-20 relative z-10 text-center">
          <FadeIn>
            <h2 className="font-georgia text-white text-[clamp(28px,4vw,48px)] leading-[1.3] font-semibold mb-7 max-w-4xl mx-auto">
              Every output is defensible to regulators, investors, and assurance providers.
            </h2>
            <Link
              to="/layanan"
              className="bg-mckinsey-blue hover:bg-blue-mid text-white font-sans text-sm font-semibold py-4 px-10 rounded-sm transition-colors inline-block"
            >
              See Our Services
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
