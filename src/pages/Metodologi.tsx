import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

const layers = [
  {
    num: '01',
    title: 'Data Integrity',
    subtitle: 'Tidak ada angka yang dibiarkan berdiri sendiri tanpa validasi silang.',
    desc: 'Layer pertama kami membangun landasan yang absolut. Kami melakukan cross-check secara menyeluruh lintas dokumen: Annual Report, Sustainability Report, dan Laporan Keuangan Audited. Setiap angka yang dirujuk dalam dokumen yang berbeda harus identik, atau harus memiliki bridging explanation yang terdokumentasi dengan jelas menghindari diskrepansi di meja komite audit.',
    bgClass: 'bg-white',
    textClass: 'text-text-dark',
    numClass: 'text-mckinsey-blue',
  },
  {
    num: '02',
    title: 'Regulatory Alignment',
    subtitle: 'Memetakan setiap klaim ke kerangka standar wajib.',
    desc: 'Pengungkapan tanpa kepatuhan standar berpotensi mengundang teguran OJK. Pada layer kedua, setiap klaim dan metrik yang diungkapkan diperiksa gap-nya terhadap persyaratan ketat dari PSPK 1/PSPK 2 (yang wajib pada 1 Jan 2027), GRI Standards 2021, dan SEOJK 16/2021. Setiap defisiensi didokumentasikan dengan tingkat severity yang mengukur risiko regulasi yang dihadapi emiten.',
    bgClass: 'bg-off-white',
    textClass: 'text-text-dark',
    numClass: 'text-mckinsey-blue/30',
  },
  {
    num: '03',
    title: 'Assurance Readiness',
    subtitle: 'Laporan yang dibangun seolah assurance provider datang besok.',
    desc: 'Assurance audit sering menemukan celah akibat hilangnya jejak sumber data. Fokus layer ketiga kami memastikan setiap klaim memiliki jejak sumber audit (audit trail) yang jelas. Setiap metrik non-finansial harus memiliki definisi pengukuran yang baku dan konsisten secara periodik (Year-on-Year). Ini menutup peluang assurance failure.',
    bgClass: 'bg-white',
    textClass: 'text-text-dark',
    numClass: 'text-mckinsey-blue',
  },
  {
    num: '04',
    title: 'Institutional Memory',
    subtitle: 'Membongkar proteksionisme data agar aset pengetahuan ada di tangan perusahaan.',
    desc: 'Layer keempat adalah moat sistem kami yang akan ditanamkan di perusahaan Anda. Seluruh bukti verifikasi, rekam jejak, definisi, dan arsitektur pengungkapan disimpan secara terstruktur di dalam sistem Bilmare per entitas klien. Tahun depan, pembuatan laporan tidak akan pernah mulai dari nol lagi. Pengetahuan institusional ini dikelola dan berkembang nilainya setiap tahun.',
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
              METODOLOGI KAMI
            </div>
            <h1 className="font-georgia text-white text-[clamp(36px,6vw,72px)] leading-[1.1] font-bold mb-7 max-w-4xl">
              Verifikasi yang tidak bisa dilewati.
            </h1>
            <p className="font-sans text-white/90 text-base md:text-xl leading-relaxed max-w-3xl">
              Apa yang membuat pendekatan Bilmare berbeda adalah kami menolak menjadikan pembuatan
              laporan sebagai kerja penulisan kreatif semata. Bilmare mendekati pengungkapan
              keberlanjutan layaknya audit finansial. Kami menyebutnya "The Four Layers".
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
              Setiap output dapat dipertanggungjawabkan di hadapan regulator, investor, dan
              assurance provider.
            </h2>
            <Link
              to="/layanan"
              className="bg-mckinsey-blue hover:bg-blue-mid text-white font-sans text-sm font-semibold py-4 px-10 rounded-sm transition-colors inline-block"
            >
              Lihat Layanan Kami <span className="ml-2 font-mono">&rarr;</span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
