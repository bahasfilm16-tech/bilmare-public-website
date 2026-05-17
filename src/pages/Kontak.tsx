import FadeIn from '../components/FadeIn';
import ContactForm from '../components/ContactForm';

export default function Kontak() {
  return (
    <div className="w-full pt-[72px] min-h-screen bg-deep-navy relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, transparent, transparent 10px, #ffffff 10px, #ffffff 11px)',
        }}
      />
      <div className="absolute top-[15%] right-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-mckinsey-blue opacity-[0.2] blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-20 relative z-10 flex flex-col items-center py-16 md:py-24">
        <FadeIn className="text-center mb-12 md:mb-16">
          <div className="text-mckinsey-blue font-sans text-[11px] tracking-[0.15em] uppercase font-semibold mb-4">
            CONTACT
          </div>
          <h1 className="font-georgia text-white text-[clamp(36px,5vw,64px)] leading-[1.1] font-bold mb-5">
            Start with a conversation.
          </h1>
          <p className="font-sans text-white/80 text-base md:text-[17px] leading-relaxed max-w-2xl mx-auto mb-4">
            Schedule a discovery call to understand where the report stands against current
            regulatory requirements.
          </p>
          <p className="font-sans text-white/50 text-sm">Jakarta, Indonesia</p>
        </FadeIn>

        <FadeIn delay={0.2} className="w-full max-w-[640px]">
          <ContactForm source="kontak" />
        </FadeIn>
      </div>
    </div>
  );
}
