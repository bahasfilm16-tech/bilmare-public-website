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
              TENTANG BILMARE
            </div>
            <h1 className="font-georgia text-white text-[clamp(36px,6vw,72px)] leading-[1.1] font-bold mb-7 max-w-4xl">
              Kepercayaan masa depan dimulai dari pertanggungjawaban hari ini.
            </h1>
            <p className="font-sans text-white/80 text-base md:text-xl leading-relaxed max-w-3xl">
              Kami adalah satu-satunya firma di Indonesia dengan spesialisasi tunggal:
              mempersiapkan laporan emiten menghadapi kewajiban PSPK 1/PSPK 2 per Januari 2027.
              Berbasis di Jakarta, Indonesia.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* THE PROBLEM WE SOLVE */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-20">
          <FadeIn>
            <div className="text-text-muted font-sans text-[11px] tracking-[0.15em] uppercase font-semibold mb-4">
              MENGAPA KAMI ADA
            </div>
            <h2 className="font-georgia text-text-dark text-[clamp(26px,4vw,48px)] leading-[1.2] font-semibold mb-14 max-w-3xl">
              Integritas data keberlanjutan bukan lagi opsi, melainkan syarat fundamental
              berbisnis.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 font-sans text-text-dark/80 text-base md:text-lg leading-[1.75]">
            <FadeIn delay={0.1}>
              <p className="mb-6">
                Bilmare dibangun untuk menyelesaikan satu masalah sistemik: dari 950+ emiten yang
                terdaftar di Bursa Efek Indonesia, lebih dari 850 belum siap menghadapi standar
                PSPK 1 dan PSPK 2 yang diwajibkan oleh OJK mulai 1 Januari 2027.
              </p>
              <p>
                Banyak perusahaan masih melihat laporan keberlanjutan sebagai latihan public
                relations. Laporan ditulis dengan narasi yang meyakinkan, namun ketika diukur,
                angka-angkanya tidak konsisten antara Laporan Keuangan, Annual Report, dan
                Sustainability Report.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mb-6">
                Regulator dan investor institusional sudah mulai menutup pintu untuk pengungkapan
                tanpa dasar. Namun ironisnya, pasar dipenuhi oleh konsultan manajemen generik atau
                agensi kreatif yang fokus pada penulisan dan desain, bukan pada verifikasi klaim
                dan rekonsiliasi data.
              </p>
              <p>
                Di sinilah Bilmare masuk. Kami tidak memulai pekerjaan dengan menulis. Kami
                memulainya dengan memverifikasi setiap angka dan memastikan setiap klaim yang akan
                diungkap dapat dipertanggungjawabkan di meja assurance provider.
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
                Apa itu Bilmare?
              </h2>
              <ul className="space-y-5">
                {[
                  'Spesialis kepatuhan pengungkapan PSPK 1/2 dan GRI Standards.',
                  'Arsitek "Source of Truth" bagi data non-finansial perusahaan.',
                  'Firma verifikasi cross-document yang memastikan sinkronisasi angka.',
                  'Mitra strategis sebelum Anda mendatangkan assurance provider eksternal.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-mckinsey-blue font-mono mt-1 shrink-0">&rarr;</span>
                    <span className="font-sans text-white/90 text-[16px] md:text-[17px] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="font-georgia text-white text-[clamp(26px,3vw,36px)] leading-[1.2] font-semibold mb-8">
                Apa yang{' '}
                <span className="text-mckinsey-blue underline decoration-2 underline-offset-4">
                  Bukan
                </span>{' '}
                Bilmare?
              </h2>
              <ul className="space-y-5">
                {[
                  'Bukan Assurance Provider: Kami tidak memberikan opini assurance (kami adalah pihak yang memastikan laporan Anda lolos uji assurance mereka).',
                  'Bukan Agensi Kreatif: Kami tidak berfokus pada layout cantik, kami berfokus pada validitas materi.',
                  'Bukan Konsultan Generik: Kami menolak proyek di luar spesialisasi verifikasi pelaporan.',
                  'Bukan Penjual Template: Metodologi kami diterapkan secara spesifik pada kompleksitas masing-masing emiten.',
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
              PRINSIP KAMI
            </div>
            <h2 className="font-georgia text-text-dark text-[clamp(26px,4vw,48px)] leading-[1.2] font-semibold mb-14 max-w-2xl">
              Tiga prinsip yang tidak pernah kami kompromikan.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                num: '01',
                title: 'Akuntabilitas di Atas Segalanya',
                desc: 'Setiap klaim yang kami bantu kembangkan harus dapat dipertanggungjawabkan. Tidak ada grey area dalam standar yang kami terapkan.',
              },
              {
                num: '02',
                title: 'Spesialisasi, Bukan Generalisasi',
                desc: 'Kami fokus sepenuhnya pada satu domain. Kedalaman lebih berharga dari keluasan ketika risiko regulasi dan reputasi menjadi taruhannya.',
              },
              {
                num: '03',
                title: 'Kemitraan Jangka Panjang',
                desc: 'Kami membangun aset pengetahuan institusional yang tumbuh nilainya bersama klien setiap tahun. Bukan transaksi satu kali.',
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
              Siap memastikan laporan Anda dapat dipertanggungjawabkan?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/kontak"
                className="bg-mckinsey-blue hover:bg-blue-mid text-white font-sans text-sm font-semibold py-4 px-8 rounded-sm transition-colors inline-block"
              >
                Jadwalkan Discovery Call
              </Link>
              <Link
                to="/layanan"
                className="border border-white text-white hover:bg-white hover:text-deep-navy font-sans text-sm font-semibold py-4 px-8 rounded-sm transition-colors inline-block"
              >
                Lihat Layanan Kami <span className="ml-1 font-mono">&rarr;</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
