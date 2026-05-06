import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

export default function Layanan() {
  const services = [
    {
      id: "pspk-assessment",
      badge: "Mulai Di Sini",
      title: "PSPK Readiness Assessment",
      tagline: "Tahu gap Anda sebelum terlambat.",
      desc: "Langkah pertama sebelum melakukan perombakan besar adalah memahami posisi Anda. Klien tidak perlu commit besar dulu. Mereka membayar untuk mengetahui status kepatuhan dan gap laporan yang ada saat ini secara objektif. Setelah pemetaan selesai, langkah natural berikutnya adalah menugaskan Bilmare untuk menyelesaikan semua gap tersebut.",
      included: [
        "Audit kelengkapan dokumen pengungkapan historis.",
        "Pemetaan gap awal terhadap PSPK 1 dan PSPK 2.",
        "Analisis temuan kerentanan data lintas departemen.",
        "Executive Report berisi severity level gap dan rekomendasi remediasi."
      ],
      idealClient: "Semua emiten yang belum tahu tingkat kesiapan mereka menghadapi aturan wajib 2027.",
      duration: "2–3 minggu",
      bgClass: "bg-white",
      textClass: "text-text-dark",
      accent: "text-mckinsey-blue",
      listIconColor: "text-mckinsey-blue"
    },
    {
      id: "tier-1",
      title: "Tier 1: Verification & Disclosure Readiness",
      tagline: "Laporan yang sudah ditulis, diverifikasi dengan standar regulator.",
      desc: "Dirancang untuk perusahaan yang telah memiliki draf laporan keberlanjutan yang dihasilkan secara internal, namun membutuhkan mata independen untuk mitigasi risiko. Kami memverifikasi sinkronisasi angka lintas dokumen dan melakukan gap analysis definitif terhadap ratusan requirement GRI Standards, IFRS S1/S2, dan SEOJK 16/2021 sebagai persiapan final sebelum assurance eksternal.",
      included: [
        "Verifikasi lintas dokumen (Data Integrity check).",
        "Gap analysis granular terhadap 203+ requirement dari standar utama.",
        "Identifikasi dan penanganan data anomali.",
        "Penyusunan Audit Trail Document untuk assurance provider."
      ],
      idealClient: "Emiten terbuka mid-cap hingga large-cap, anak perusahaan MNC dengan target assurance independen.",
      duration: "3–4 minggu",
      bgClass: "bg-subtle-gradient",
      textClass: "text-white",
      accent: "text-white/80",
      listIconColor: "text-white/60"
    },
    {
      id: "tier-2",
      title: "Tier 2: Full Accountable Report Development",
      tagline: "Dari data ke laporan yang siap dipertanggungjawabkan.",
      desc: "Untuk perusahaan yang belum memiliki draf pelaporan formal sama sekali. Bilmare tidak akan mulai dari narasi teks; kami memulai dengan memverifikasi data lapangan dan membangun 'Master Matrix' kuantitatif sebagai single source of truth. Dari landasan data tersebut, kami membangun arsitektur laporan yang sepenuhnya accountable.",
      included: [
        "Pembangunan Master Matrix rekonsiliasi data ESG.",
        "Pengembangan seluruh indikator dan narasi yang selaras regulasi.",
        "Review iteratif bersama komite terkait di perusahaan.",
        "Pembuatan dokumen final yang siap diserahkan kepada investor/regulator."
      ],
      idealClient: "Perusahaan calon IPO (Pre-IPO readiness), bisnis keluarga yang bertransisi menuju tata kelola modern, perusahaan yang menerbitkan laporan perdana.",
      duration: "8–12 minggu",
      bgClass: "bg-white",
      textClass: "text-text-dark",
      accent: "text-mckinsey-blue",
      listIconColor: "text-mckinsey-blue"
    },
    {
      id: "retainer",
      title: "Institutional Memory Retainer",
      tagline: "Investasi yang nilainya bertumbuh setiap tahun.",
      desc: "Hambatan terbesar emiten adalah pergantian tim penasihat atau konsultan setiap tahun; sehingga memori institusional hilang. Kami menyimpan seluruh data historis klien — Master Matrix, time-series database, definisi metrik internal, archive sumber primer — di dalam sistem terkelola. Aset pengetahuan ini dikelola secara retainer sehingga pembaruan tahun berikutnya menjadi jauh lebih efisien.",
      included: [
        "Manajemen dan penyimpanan the Master Matrix tahunan.",
        "Pembaruan definisi metrik bila terjadi perubahan standar regulasi global (seperti IFRS S2).",
        "Arsip dokumen primer sebagai jejak audit.",
        "Dukungan prioritas untuk siklus pelaporan tahun fiskal selanjutnya."
      ],
      idealClient: "Klien yang telah menyelesaikan Tier 1 atau Tier 2 bersama Bilmare.",
      duration: "Ongoing / Kontrak Tahunan",
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
            <div className="text-mckinsey-blue font-sans text-[11px] tracking-[0.15em] uppercase font-semibold mb-6">LAYANAN KAMI</div>
            <h1 className="font-georgia text-white text-[clamp(40px,5vw,64px)] leading-[1.1] font-bold mb-8 max-w-4xl mx-auto">
              Dari Assessment Terfokus Hingga Retainer Penuh.
            </h1>
            <p className="font-sans text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Pelajari metodologi dan output yang Anda dapatkan di setiap tahapan, dirancang khusus untuk memastikan semua klaim Anda valid.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SERVICES LIST */}
      {services.map((svc, idx) => (
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
                    <span className="font-semibold block mb-1">Durasi Engagement:</span>
                    <span className={svc.textClass === 'text-white' ? 'text-white/70' : 'text-text-muted'}>{svc.duration}</span>
                  </div>
                  <div className="font-sans">
                    <span className="font-semibold block mb-1">Profil Klien Ideal:</span>
                    <span className={svc.textClass === 'text-white' ? 'text-white/70' : 'text-text-muted'}>{svc.idealClient}</span>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2} className="relative">
                <div className={`${svc.textClass === 'text-white' ? 'bg-deep-navy/30 border-white/10' : 'bg-off-white border-line'} border p-10 h-full`}>
                  <div className="font-sans text-[12px] tracking-[0.1em] uppercase font-bold mb-8">Apa Yang Termasuk dalam Paket Ini?</div>
                  <ul className="space-y-6">
                    {svc.included.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className={`${svc.listIconColor} mr-4 font-mono mt-1 font-bold`}>&rarr;</span>
                        <span className={`font-sans text-[16px] leading-relaxed ${svc.textClass === 'text-white' ? 'text-white/90' : 'text-text-dark/80'}`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-12 pt-8 border-t border-current border-opacity-10">
                    <Link to="/kontak" className={`${svc.textClass === 'text-white' ? 'text-white border-white hover:bg-white hover:text-deep-navy' : 'bg-mckinsey-blue text-white hover:bg-blue-mid border-transparent'} border px-8 py-3 rounded-sm font-sans font-semibold transition-colors inline-block text-sm`}>
                      Jadwalkan Konsultasi <span className="ml-2 font-mono">&rarr;</span>
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
            <h3 className="font-georgia text-white text-xl md:text-2xl font-medium mb-6">Bingung memilih layanan yang tepat untuk Anda?</h3>
            <Link to="/kontak" className="text-mckinsey-blue font-sans text-[15px] font-semibold hover:text-white transition-colors">
              Bicara dengan spesialis kami sekarang <span className="ml-1 font-mono">&rarr;</span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
