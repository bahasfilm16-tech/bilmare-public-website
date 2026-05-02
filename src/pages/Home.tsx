import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CheckCircle, ChevronRight } from 'lucide-react';
import { FadeIn } from '../Layout';
import { motion } from 'motion/react';

// ─── Stat Counter ─────────────────────────────────────────────────────────────
function StatCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) { setCount(value); clearInterval(timer); }
            else setCount(Math.floor(current));
          }, 1800 / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── Ticker ───────────────────────────────────────────────────────────────────
function Ticker({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden w-full py-4 border-y border-[#1C277B]/10 bg-[#DFE7F7]">
      <div className="flex gap-10 whitespace-nowrap animate-marquee w-max">
        {doubled.map((item, i) => (
          <span key={i} className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#1C277B]/45 shrink-0 flex items-center gap-10">
            {item}
            <span className="w-1 h-1 rounded-full bg-[#234CF9]/40 inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Mesh Gradient Background ─────────────────────────────────────────────────
function MeshBg({ dark = false }: { dark?: boolean }) {
  const blue = dark ? 'rgba(35,76,249,0.35)' : 'rgba(35,76,249,0.12)';
  const navy = dark ? 'rgba(28,39,123,0.35)' : 'rgba(28,39,123,0.08)';
  const sky  = dark ? 'rgba(223,231,247,0.12)' : 'rgba(223,231,247,0.9)';

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="mesh-1 absolute -top-40 -left-32 w-[700px] h-[700px] rounded-full"
        style={{ background: `radial-gradient(circle, ${blue} 0%, transparent 70%)` }} />
      <div className="mesh-2 absolute top-20 right-0 w-[550px] h-[550px] rounded-full"
        style={{ background: `radial-gradient(circle, ${navy} 0%, transparent 70%)` }} />
      <div className="mesh-3 absolute bottom-0 left-1/3 w-[480px] h-[480px] rounded-full"
        style={{ background: `radial-gradient(circle, ${sky} 0%, transparent 70%)` }} />
      <div className="mesh-1 absolute -bottom-20 right-1/4 w-[380px] h-[380px] rounded-full"
        style={{ background: `radial-gradient(circle, ${blue} 0%, transparent 70%)`, animationDelay: '-7s' }} />
    </div>
  );
}

// ─── Home ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const standards = [
    'GRI Standards 2021', 'IFRS S1 & S2', 'POJK Keuangan Berkelanjutan',
    'SEOJK 16/2021', 'PSAK Keberlanjutan', 'TCFD Recommendations',
  ];

  const problems = [
    {
      num: '01',
      title: 'Ketidaksesuaian teridentifikasi menjelang deadline',
      desc: 'Angka di draft tidak cocok dengan laporan keuangan audited. Waktu untuk perbaikan hampir habis.',
    },
    {
      num: '02',
      title: 'Scope assurance meluas karena data tidak siap',
      desc: 'Assurance provider menemukan inkonsistensi data saat fieldwork. Biaya bertambah, jadwal mundur.',
    },
    {
      num: '03',
      title: 'Pertanyaan regulator tidak bisa dijawab segera',
      desc: 'Tim IR harus menelusuri data dari berbagai dokumen selama berhari-hari — bukan menjawab dalam hitungan menit.',
    },
  ];

  const methodology = [
    { num: '01', name: 'Data Integrity', desc: 'Cross-check seluruh angka lintas Annual Report, Sustainability Report, dan Laporan Keuangan Audited.' },
    { num: '02', name: 'Regulatory Alignment', desc: 'Setiap pengungkapan diperiksa terhadap PSPK 1/2, GRI Standards 2021, dan SEOJK 16/2021.' },
    { num: '03', name: 'Assurance Readiness', desc: 'Laporan disiapkan seolah assurance provider datang besok. Setiap klaim memiliki jejak sumber.' },
    { num: '04', name: 'Institutional Memory', desc: 'Seluruh verifikasi disimpan terstruktur per klien. Laporan tahun depan tidak mulai dari nol.' },
  ];

  const services = [
    {
      tier: 'Tier 1',
      title: 'Verification & Disclosure Readiness',
      subtitle: 'Draft laporan sudah ada. Diperlukan lapisan verifikasi independen sebelum publikasi atau proses assurance.',
      bullets: [
        'Verifikasi silang lintas dokumen (AR / SR / LK)',
        'Konsistensi definisi metrik year-on-year',
        'Disclosure Risk & Gap Register',
        'IR FAQ Databook bersumber',
      ],
    },
    {
      tier: 'Tier 2',
      title: 'Full Accountable Report Development',
      subtitle: 'Draft belum ada. Laporan disusun dari awal dengan verifikasi data yang berjalan bersamaan dengan penulisan.',
      bullets: [
        'Inventarisasi dan katalogisasi dokumen sumber',
        'Pembangunan Master Cross-Reference Matrix',
        'Penyusunan draft dengan dokumentasi bersamaan',
        'QC gate berlapis sebelum serah terima',
      ],
    },
  ];

  return (
    <div className="flex flex-col bg-[#FFFFFC] text-[#1C277B]">

      {/* ════════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#FFFFFC] pt-20">
        <MeshBg />

        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(28,39,123,1) 1px, transparent 1px), linear-gradient(90deg, rgba(28,39,123,1) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />

        <div className="relative z-10 px-6 md:px-10 max-w-7xl w-full mx-auto py-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#234CF9] bg-[#234CF9]/8 border border-[#234CF9]/20 px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#234CF9] animate-pulse" />
              PSPK 1/PSPK 2 — Berlaku 1 Januari 2027
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-[68px] lg:text-[80px] font-bold tracking-tight leading-[1.06] text-[#1C277B] mb-7 max-w-5xl"
          >
            Laporan yang siap<br />
            <span className="text-[#234CF9]">dipertanyakan</span> —<br />
            sebelum pertanyaan datang.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl font-normal text-[#1C277B]/55 max-w-2xl leading-relaxed mb-10"
          >
            Bilmare adalah firma verifikasi laporan keberlanjutan yang memastikan setiap klaim terlacak,
            konsisten, dan terdokumentasi — sebelum auditor, regulator, atau investor mempertanyakannya.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              to="/layanan"
              className="inline-flex items-center gap-2 bg-[#234CF9] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-[#1a3de8] transition-all shadow-lg shadow-[#234CF9]/30 group"
            >
              Lihat Layanan
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/pendekatan"
              className="inline-flex items-center gap-2 border border-[#1C277B]/20 text-[#1C277B] px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-[#1C277B]/5 hover:border-[#1C277B]/35 transition-all"
            >
              Metodologi Kami
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1C277B]/8 rounded-2xl overflow-hidden border border-[#1C277B]/8"
          >
            {[
              { value: 956, suffix: '',    label: 'Emiten BEI (Apr 2026)' },
              { value: 6,   suffix: '%',   label: 'Sudah di-assure' },
              { value: 9,   suffix: ' bln',label: 'Sebelum PSPK efektif' },
              { value: 850, suffix: '+',   label: 'Emiten belum siap' },
            ].map((s, i) => (
              <div key={i} className="bg-[#FFFFFC]/85 backdrop-blur-sm px-7 py-6">
                <div className="text-3xl md:text-4xl font-bold text-[#1C277B] mb-1">
                  <StatCounter value={s.value} suffix={s.suffix} />
                </div>
                <p className="text-[11px] text-[#1C277B]/40 font-medium uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          TICKER
      ════════════════════════════════════════════════════════════════ */}
      <Ticker items={standards} />

      {/* ════════════════════════════════════════════════════════════════
          POSITIONING
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 px-6 md:px-10 bg-[#FFFFFC]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#234CF9] bg-[#234CF9]/8 border border-[#234CF9]/15 px-4 py-2 rounded-full mb-6">
                Tentang Bilmare
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] text-[#1C277B]">
                Satu-satunya firma di Indonesia yang mengkhususkan diri mempersiapkan laporan emiten menghadapi PSPK 1/PSPK 2.
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-lg text-[#1C277B]/55 font-normal leading-relaxed mb-8">
                Bukan assurance provider. Bukan agency desain laporan. Bilmare mengisi satu celah yang
                spesifik: memastikan setiap klaim dalam laporan Anda memiliki keterlacakan dan konsistensi
                yang memadai — sebelum laporan naik ke publik.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Verification-led', 'Bukan assurance provider', 'Bukan agency kreatif'].map((tag) => (
                  <span key={tag} className="text-[11px] font-semibold tracking-wide uppercase text-[#1C277B]/50 border border-[#1C277B]/15 px-4 py-2 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          PROBLEMS
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 px-6 md:px-10 bg-[#DFE7F7]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
              <div>
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#234CF9] bg-[#234CF9]/8 border border-[#234CF9]/15 px-4 py-2 rounded-full mb-5">
                  Situasi yang Kami Selesaikan
                </span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1C277B] max-w-xl leading-[1.15]">
                  Tiga kondisi yang berulang setiap siklus pelaporan.
                </h2>
              </div>
              <Link
                to="/pendekatan"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#234CF9] hover:opacity-70 transition-opacity shrink-0 group"
              >
                Lihat pendekatan
                <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {problems.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div
                  className="bg-white rounded-2xl p-8 md:p-10 group hover:bg-[#1C277B] transition-colors duration-500 cursor-default border border-[#1C277B]/5 h-full"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-[72px] font-bold text-[#1C277B]/5 leading-none block mb-5 group-hover:text-white/5 transition-colors">
                    {item.num}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-[#1C277B] mb-3 leading-snug group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#1C277B]/55 font-normal leading-relaxed text-sm group-hover:text-white/55 transition-colors">
                    {item.desc}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SERVICES
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 px-6 md:px-10 bg-[#FFFFFC]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="mb-14">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#234CF9] bg-[#234CF9]/8 border border-[#234CF9]/15 px-4 py-2 rounded-full mb-5">
                Layanan
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1C277B] leading-[1.15]">
                Dua titik masuk.<br />Satu standar verifikasi.
              </h2>
              <p className="mt-4 text-lg text-[#1C277B]/55 font-normal max-w-lg">
                Situasi pelaporan Anda — bukan skala perusahaan — yang menentukan jalur yang tepat.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {services.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div
                  className="bg-[#DFE7F7] rounded-2xl p-8 md:p-10 group hover:bg-[#1C277B] transition-colors duration-500 h-full border border-[#1C277B]/5 flex flex-col"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#234CF9] bg-[#234CF9]/10 group-hover:text-white/60 group-hover:bg-white/10 px-3 py-1.5 rounded-full mb-6 transition-colors w-fit">
                    {s.tier}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1C277B] group-hover:text-white mb-3 transition-colors leading-[1.2]">
                    {s.title}
                  </h3>
                  <p className="text-[#1C277B]/55 font-normal text-base leading-relaxed mb-8 group-hover:text-white/55 transition-colors">
                    {s.subtitle}
                  </p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {s.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-[#1C277B]/65 group-hover:text-white/65 transition-colors">
                        <CheckCircle size={15} className="mt-0.5 shrink-0 text-[#234CF9] group-hover:text-[#234CF9]/80 transition-colors" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/layanan"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#234CF9] group-hover:text-white transition-colors mt-auto hover:opacity-80"
                  >
                    Pelajari layanan <ArrowRight size={14} />
                  </Link>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          {/* Entry product */}
          <FadeIn delay={0.2}>
            <div className="relative overflow-hidden bg-[#1C277B] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div
                className="absolute -right-16 -top-16 w-[350px] h-[350px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(35,76,249,0.3) 0%, transparent 70%)' }}
              />
              <div className="relative">
                <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-white/35 mb-3">
                  Entry Product — 2026
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                  PSPK Readiness Assessment
                </h3>
                <p className="text-white/50 font-normal mt-2 max-w-lg text-base leading-relaxed">
                  Peta gap kesiapan PSPK 1/2 dalam 2–3 minggu. Tidak perlu komitmen besar. Langkah pertama yang paling rasional.
                </p>
              </div>
              <Link
                to="/layanan"
                className="relative inline-flex items-center gap-2 bg-white text-[#1C277B] px-7 py-3.5 rounded-full text-sm font-bold hover:bg-[#DFE7F7] transition-colors shrink-0 group"
              >
                Mulai dari sini
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          METHODOLOGY
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 px-6 md:px-10 bg-[#DFE7F7]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn className="lg:sticky lg:top-32">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#234CF9] bg-[#234CF9]/8 border border-[#234CF9]/15 px-4 py-2 rounded-full mb-6">
                Metodologi
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1C277B] leading-[1.15] mb-5">
                The Four Layers.
              </h2>
              <p className="text-lg text-[#1C277B]/55 font-normal leading-relaxed mb-8">
                Integritas pengungkapan dibangun lapis demi lapis — bukan diperiksa sekaligus di akhir.
              </p>
              <Link
                to="/pendekatan"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#234CF9] hover:opacity-70 transition-opacity group"
              >
                Detail metodologi
                <ChevronRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </FadeIn>

            <div className="space-y-3">
              {methodology.map((m, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <motion.div
                    className="bg-white rounded-xl p-6 flex gap-5 items-start group hover:bg-[#1C277B] transition-colors duration-300 cursor-default border border-[#1C277B]/5"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-[11px] font-bold tracking-widest uppercase text-[#234CF9] group-hover:text-white/40 transition-colors w-8 shrink-0 mt-1">
                      {m.num}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-[#1C277B] group-hover:text-white mb-1.5 transition-colors tracking-tight">
                        {m.name}
                      </h3>
                      <p className="text-[#1C277B]/55 group-hover:text-white/55 font-normal leading-relaxed text-sm transition-colors">
                        {m.desc}
                      </p>
                    </div>
                    <ArrowRight size={15} className="text-[#1C277B]/20 group-hover:text-white/40 transition-all mt-0.5 shrink-0 group-hover:translate-x-0.5" />
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          CLIENTS
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 px-6 md:px-10 bg-[#FFFFFC]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
              <div>
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#234CF9] bg-[#234CF9]/8 border border-[#234CF9]/15 px-4 py-2 rounded-full mb-5">
                  Klien Kami
                </span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1C277B] max-w-xl leading-[1.15]">
                  Perusahaan di mana kualitas pengungkapan berdampak langsung pada hasil bisnis.
                </h2>
              </div>
              <Link
                to="/klien-kami"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#234CF9] hover:opacity-70 transition-opacity shrink-0 group"
              >
                Profil klien
                <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Perusahaan Terbuka', desc: 'Emiten OJK dengan kewajiban pengungkapan berkala. Konsekuensi regulatori atas ketidaksesuaian pelaporan.' },
              { title: 'Calon IPO', desc: 'Laporan publik pertama dalam konteks due diligence investor institusional. Zero margin for error.' },
              { title: 'Entitas Diregulasi', desc: 'Perbankan, asuransi, dan utilitas dengan persyaratan transparansi ESG yang meningkat dari regulator sektor.' },
              { title: 'Bisnis Keluarga', desc: 'Transisi ke standar tata kelola korporasi yang lebih formal. Dokumentasi metodologi dari nol.' },
            ].map((c, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <motion.div
                  className="bg-[#DFE7F7] rounded-2xl p-7 h-full border border-[#1C277B]/5 group hover:bg-[#1C277B] transition-colors duration-300"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-bold text-[#1C277B] group-hover:text-white mb-3 tracking-tight transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-[#1C277B]/55 group-hover:text-white/55 font-normal text-sm leading-relaxed transition-colors">
                    {c.desc}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          CTA
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 px-6 md:px-10 bg-[#1C277B] relative overflow-hidden">
        <MeshBg dark />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-white/40 border border-white/15 px-4 py-2 rounded-full mb-6">
                Diskusikan Kebutuhan Anda
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-white leading-[1.1] mb-6">
                Kepercayaan masa depan dimulai dari pertanggungjawaban hari ini.
              </h2>
              <p className="text-lg text-white/50 font-normal leading-relaxed">
                Hubungi tim Bilmare untuk asesmen awal. Tidak ada komitmen di tahap ini — hanya pemetaan kondisi laporan Anda saat ini.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-white/5 border border-white/12 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-7 tracking-tight">Mulai percakapan</h3>
                <div className="space-y-5 mb-8">
                  {[
                    'Penilaian gap kesiapan PSPK 1/2',
                    'Review kondisi laporan yang sedang berjalan',
                    'Konsultasi scope untuk engagement baru',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-5 h-5 rounded-full border border-[#234CF9]/50 bg-[#234CF9]/15 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle size={11} className="text-[#234CF9]" />
                      </div>
                      <span className="text-white/60 font-normal text-base">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/layanan"
                  className="w-full inline-flex items-center justify-center gap-3 bg-[#234CF9] text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-[#1a3de8] transition-colors group shadow-lg shadow-[#234CF9]/30"
                >
                  Hubungi Kami
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  );
}
