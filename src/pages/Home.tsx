import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CheckCircle, ChevronRight } from 'lucide-react';
import { FadeIn } from '../Layout';
import { motion, useScroll, useTransform } from 'motion/react';

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
          const duration = 1800;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) { setCount(value); clearInterval(timer); }
            else setCount(Math.floor(current));
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);
  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── Marquee ──────────────────────────────────────────────────────────────────
function Marquee({ items }: { items: string[] }) {
  return (
    <div className="overflow-hidden w-full py-4 border-y border-[#0d1f33]/8 bg-white">
      <motion.div
        className="flex gap-14 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 32, ease: 'linear', repeat: Infinity }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#0d1f33]/30 shrink-0 flex items-center gap-4">
            {item}
            <span className="w-1 h-1 rounded-full bg-[#0d1f33]/15 inline-block" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// ─── Home ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], ['0%', '12%']);

  const standards = [
    'GRI Standards 2021', 'IFRS S1 & S2', 'PSPK 1 — Governance & Strategy',
    'PSPK 2 — Climate Disclosure', 'SEOJK 16/2021', 'PSAK Keberlanjutan',
    'GRI Standards 2021', 'IFRS S1 & S2', 'PSPK 1 — Governance & Strategy',
    'PSPK 2 — Climate Disclosure', 'SEOJK 16/2021', 'PSAK Keberlanjutan',
  ];

  const problems = [
    {
      num: '01',
      title: 'Ketidaksesuaian teridentifikasi menjelang deadline',
      desc: 'Angka dalam draft tidak cocok dengan laporan keuangan audited. Waktu perbaikan hampir habis — sementara assurance provider sudah menunggu.',
    },
    {
      num: '02',
      title: 'Scope assurance meluas karena data belum siap',
      desc: 'Inkonsistensi ditemukan saat fieldwork. Biaya assurance bertambah, jadwal mundur, dan reputasi tim IR dipertaruhkan.',
    },
    {
      num: '03',
      title: 'Pertanyaan regulator tidak terjawab dalam hitungan menit',
      desc: 'Data tersebar di berbagai dokumen tanpa jejak sumber yang jelas. Penelusuran memakan hari — bukan jam.',
    },
  ];

  const methodology = [
    {
      label: 'Layer 1',
      name: 'Data Integrity',
      desc: 'Cross-check seluruh angka lintas Annual Report, Sustainability Report, dan Laporan Keuangan Audited. Setiap angka yang sama di dokumen berbeda harus identik — atau ada penjelasan terdokumentasi.',
    },
    {
      label: 'Layer 2',
      name: 'Regulatory Alignment',
      desc: 'Setiap pengungkapan diperiksa terhadap PSPK 1/PSPK 2, GRI Standards 2021, dan SEOJK 16/2021. Gap didokumentasikan dengan severity level.',
    },
    {
      label: 'Layer 3',
      name: 'Assurance Readiness',
      desc: 'Laporan disiapkan seolah assurance provider datang besok. Setiap klaim punya jejak sumber. Setiap metrik punya definisi konsisten year-on-year.',
    },
    {
      label: 'Layer 4',
      name: 'Institutional Memory',
      desc: 'Seluruh verifikasi disimpan terstruktur di sistem Bilmare per klien. Laporan tahun berikutnya tidak mulai dari nol — dan keterlacakan data tidak hilang.',
    },
  ];

  const segments = [
    {
      title: 'Perusahaan Terbuka',
      desc: 'Emiten dengan kewajiban pengungkapan berkala kepada OJK. Konsekuensi regulatori atas ketidaksesuaian bersifat langsung dan terukur.',
      tag: 'Emiten BEI',
    },
    {
      title: 'Calon IPO',
      desc: 'Laporan publik perdana dalam konteks due diligence investor institusional. Standar keterlacakan yang berlaku berbeda dari laporan internal biasa.',
      tag: 'Pre-IPO',
    },
    {
      title: 'Entitas Diregulasi',
      desc: 'Perbankan, asuransi, dan utilitas dengan persyaratan transparansi ESG yang meningkat dari regulator sektor dan lembaga rating.',
      tag: 'Perbankan & Asuransi',
    },
    {
      title: 'Bisnis Keluarga',
      desc: 'Transisi ke standar tata kelola korporasi yang lebih formal. Dokumentasi metodologi dibangun dari awal dengan struktur yang dapat diwariskan.',
      tag: 'Transisi Governance',
    },
  ];

  return (
    <div className="flex flex-col bg-white text-[#0d1f33]" style={{ fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif" }}>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0d1f33]">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
        {/* Soft blue orb */}
        <div
          className="absolute top-1/3 right-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(59,125,216,0.08) 0%, transparent 70%)' }}
        />

        {/* Parallax bg */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-[0.05] grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1f33]/50 via-[#0d1f33]/80 to-[#0d1f33]" />
        </motion.div>

        <div className="relative z-10 px-6 md:px-16 max-w-[1380px] w-full mx-auto pt-32">
          {/* Urgency badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="inline-flex items-center gap-2.5 text-[10px] font-bold tracking-[0.28em] uppercase text-white/40 border border-white/10 px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shrink-0" />
              PSPK 1 / PSPK 2 — Berlaku 1 Januari 2027
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-[72px] font-semibold tracking-tight leading-[1.08] text-white mb-7 max-w-4xl"
          >
            Laporan yang siap<br />
            <span className="text-white/35">dipertanyakan</span> —<br />
            sebelum pertanyaan datang.
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl font-light text-white/55 max-w-2xl leading-relaxed mb-12"
          >
            Bilmare adalah firma verifikasi laporan keberlanjutan yang memastikan setiap klaim terlacak, konsisten, dan terdokumentasi — sebelum auditor, regulator, atau investor mempertanyakannya.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              to="/layanan"
              className="inline-flex items-center gap-2.5 bg-white text-[#0d1f33] px-7 py-3.5 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase hover:bg-white/92 transition-colors group"
            >
              Lihat Layanan
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              to="/pendekatan"
              className="inline-flex items-center gap-2.5 border border-white/18 text-white/65 px-7 py-3.5 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase hover:border-white/40 hover:text-white transition-all"
            >
              Metodologi Kami
            </Link>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="relative z-10 mt-20 border-t border-white/8"
        >
          <div className="max-w-[1380px] mx-auto px-6 md:px-16 py-9 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: 956, suffix: '', label: 'Emiten BEI (Apr 2026)' },
              { value: 6, suffix: '%', label: 'Sudah di-assure' },
              { value: 9, suffix: ' bln', label: 'Tersisa sebelum PSPK efektif' },
              { value: 850, suffix: '+', label: 'Emiten belum siap' },
            ].map((s, i) => (
              <div key={i} className="border-l border-white/8 pl-6 first:border-0 first:pl-0">
                <div className="text-3xl md:text-4xl font-semibold text-white mb-1 tracking-tight">
                  <StatCounter value={s.value} suffix={s.suffix} />
                </div>
                <p className="text-[10px] text-white/35 uppercase tracking-[0.18em] font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────────────────────── */}
      <Marquee items={standards} />

      {/* ── POSITIONING ──────────────────────────────────────────────────── */}
      <section className="py-24 md:py-36 px-6 md:px-16 bg-white">
        <div className="max-w-[1380px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <FadeIn>
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#0d1f33]/35 block mb-4">
                  Tentang Bilmare
                </span>
                <div className="w-10 h-[2px] bg-[#0d1f33]/25 rounded-full" />
              </FadeIn>
            </div>
            <div className="lg:col-span-8">
              <FadeIn delay={0.12}>
                <p className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.22] text-[#0d1f33] mb-10">
                  Satu-satunya firma di Indonesia yang mengkhususkan diri mempersiapkan laporan emiten menghadapi kewajiban PSPK 1/PSPK 2 per Januari 2027.
                </p>
                <p className="text-lg text-[#0d1f33]/55 font-light leading-relaxed max-w-3xl mb-10">
                  Bukan assurance provider. Bukan agency desain laporan. Bilmare mengisi celah yang spesifik: memastikan setiap klaim dalam laporan memiliki keterlacakan dan konsistensi yang memadai — sebelum laporan naik ke publik.
                </p>
                <div className="flex flex-wrap gap-x-8 gap-y-2 text-[10px] font-bold tracking-[0.22em] uppercase text-[#0d1f33]/30 border-t border-[#0d1f33]/8 pt-8">
                  <span>Verification-led</span>
                  <span className="text-[#0d1f33]/15">·</span>
                  <span>Bukan assurance provider</span>
                  <span className="text-[#0d1f33]/15">·</span>
                  <span>Bukan agency kreatif</span>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM SECTION ──────────────────────────────────────────────── */}
      <section className="py-24 md:py-36 px-6 md:px-16 bg-[#f8f7f5]">
        <div className="max-w-[1380px] mx-auto">
          <FadeIn>
            <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
              <div>
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#0d1f33]/35 block mb-3">
                  Situasi yang Kami Selesaikan
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0d1f33] max-w-xl leading-[1.2]">
                  Tiga kondisi yang berulang setiap siklus pelaporan.
                </h2>
              </div>
              <Link
                to="/pendekatan"
                className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] uppercase text-[#0d1f33]/50 hover:text-[#0d1f33] transition-colors shrink-0"
              >
                Lihat pendekatan <ArrowRight size={13} />
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#0d1f33]/8 border border-[#0d1f33]/8 rounded-2xl overflow-hidden">
            {problems.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <motion.div
                  className="p-10 md:p-12 bg-[#f8f7f5] group hover:bg-[#0d1f33] transition-colors duration-500 cursor-default h-full"
                >
                  <span className="text-[64px] font-bold text-[#0d1f33]/5 leading-none block mb-5 group-hover:text-white/4 transition-colors">
                    {item.num}
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-[#0d1f33] mb-4 leading-snug group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#0d1f33]/55 font-light leading-relaxed text-[15px] group-hover:text-white/55 transition-colors">
                    {item.desc}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ──────────────────────────────────────────────────── */}
      <section className="py-24 md:py-36 px-6 md:px-16 bg-white">
        <div className="max-w-[1380px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left sticky */}
            <div className="lg:col-span-4">
              <FadeIn>
                <div className="lg:sticky lg:top-28">
                  <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#0d1f33]/35 block mb-3">
                    Metodologi
                  </span>
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0d1f33] leading-[1.2] mb-6">
                    The Four Layers.
                  </h2>
                  <p className="text-[#0d1f33]/50 font-light leading-relaxed mb-8 text-[15px]">
                    Integritas pengungkapan dibangun lapis demi lapis — bukan diperiksa sekaligus di akhir.
                  </p>
                  <Link
                    to="/pendekatan"
                    className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] uppercase text-[#0d1f33]/50 hover:text-[#0d1f33] transition-colors"
                  >
                    Detail metodologi <ArrowRight size={13} />
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Right: layer list */}
            <div className="lg:col-span-8">
              {methodology.map((m, i) => (
                <FadeIn key={i} delay={i * 0.07}>
                  <motion.div
                    className="flex gap-6 items-start border-t border-[#0d1f33]/8 py-8 group cursor-default"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#0d1f33]/25 w-14 shrink-0 mt-0.5 pt-0.5">
                      {m.label}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-[#0d1f33] mb-2 tracking-tight">{m.name}</h3>
                      <p className="text-[#0d1f33]/50 font-light leading-relaxed text-[15px]">{m.desc}</p>
                    </div>
                    <ChevronRight
                      size={15}
                      className="text-[#0d1f33]/15 mt-1 shrink-0 group-hover:text-[#0d1f33]/40 group-hover:translate-x-1 transition-all"
                    />
                  </motion.div>
                </FadeIn>
              ))}
              <div className="border-t border-[#0d1f33]/8" />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-36 px-6 md:px-16 bg-[#f8f7f5]">
        <div className="max-w-[1380px] mx-auto">
          <FadeIn>
            <div className="mb-14">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#0d1f33]/35 block mb-3">
                Layanan
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0d1f33] leading-[1.2]">
                Dua titik masuk. Satu standar verifikasi.
              </h2>
              <p className="mt-4 text-[#0d1f33]/50 font-light text-[15px] max-w-lg leading-relaxed">
                Situasi pelaporan — bukan skala perusahaan — yang menentukan jalur yang tepat.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {/* Tier 1 */}
            <FadeIn delay={0}>
              <div className="bg-white border border-[#0d1f33]/8 rounded-2xl p-10 md:p-12 h-full group hover:border-[#0d1f33]/20 hover:shadow-md transition-all duration-300">
                <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0d1f33]/30 block mb-5">Tier 1</span>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0d1f33] mb-4 leading-snug">
                  Verification &<br />Disclosure Readiness
                </h3>
                <p className="text-[#0d1f33]/50 font-light text-[15px] leading-relaxed mb-8">
                  Draft laporan tersedia. Diperlukan lapisan verifikasi independen sebelum publikasi atau proses assurance.
                </p>
                <ul className="space-y-3 mb-10">
                  {[
                    'Verifikasi silang lintas dokumen (AR / SR / LK)',
                    'Konsistensi definisi metrik year-on-year',
                    'Disclosure Risk & Gap Register',
                    'IR FAQ Databook bersumber',
                  ].map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#0d1f33]/55 text-[14px]">
                      <CheckCircle size={14} className="mt-0.5 shrink-0 text-[#0d1f33]/25" />
                      <span className="font-light">{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/layanan"
                  className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] uppercase text-[#0d1f33]/50 hover:text-[#0d1f33] transition-colors group"
                >
                  Detail layanan <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>

            {/* Tier 2 */}
            <FadeIn delay={0.08}>
              <div className="bg-white border border-[#0d1f33]/8 rounded-2xl p-10 md:p-12 h-full group hover:border-[#0d1f33]/20 hover:shadow-md transition-all duration-300">
                <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0d1f33]/30 block mb-5">Tier 2</span>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0d1f33] mb-4 leading-snug">
                  Full Accountable<br />Report Development
                </h3>
                <p className="text-[#0d1f33]/50 font-light text-[15px] leading-relaxed mb-8">
                  Draft belum tersedia. Laporan disusun dari awal dengan proses verifikasi data yang berjalan bersamaan dengan penulisan.
                </p>
                <ul className="space-y-3 mb-10">
                  {[
                    'Inventarisasi dan katalogisasi dokumen sumber',
                    'Pembangunan Master Cross-Reference Matrix',
                    'Penyusunan draft dengan dokumentasi bersamaan',
                    'QC gate berlapis sebelum serah terima',
                  ].map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#0d1f33]/55 text-[14px]">
                      <CheckCircle size={14} className="mt-0.5 shrink-0 text-[#0d1f33]/25" />
                      <span className="font-light">{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/layanan"
                  className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] uppercase text-[#0d1f33]/50 hover:text-[#0d1f33] transition-colors group"
                >
                  Detail layanan <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Entry product highlight */}
          <FadeIn delay={0.14}>
            <div className="bg-[#0d1f33] rounded-2xl p-10 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-white/28 block mb-3">
                  Entry Product — 2026
                </span>
                <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-2">
                  PSPK Readiness Assessment
                </h3>
                <p className="text-white/45 font-light text-[15px] max-w-lg leading-relaxed">
                  Peta gap kesiapan PSPK 1/PSPK 2 dalam 2–3 minggu. Langkah pertama yang paling rasional sebelum komitmen lebih besar.
                </p>
              </div>
              <Link
                to="/layanan"
                className="inline-flex items-center gap-2.5 bg-white text-[#0d1f33] px-7 py-3.5 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase hover:bg-white/92 transition-colors shrink-0 group"
              >
                Mulai dari sini
                <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── WHO WE WORK WITH ─────────────────────────────────────────────── */}
      <section className="py-24 md:py-36 px-6 md:px-16 bg-white">
        <div className="max-w-[1380px] mx-auto">
          <FadeIn>
            <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
              <div>
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#0d1f33]/35 block mb-3">
                  Klien Kami
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0d1f33] max-w-xl leading-[1.2]">
                  Perusahaan di mana kualitas pengungkapan berdampak langsung pada hasil bisnis.
                </h2>
              </div>
              <Link
                to="/klien-kami"
                className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] uppercase text-[#0d1f33]/50 hover:text-[#0d1f33] transition-colors shrink-0"
              >
                Profil klien <ArrowRight size={13} />
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {segments.map((c, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="border border-[#0d1f33]/8 rounded-2xl p-8 hover:border-[#0d1f33]/18 hover:shadow-sm transition-all h-full">
                  <span className="inline-block text-[9px] font-bold tracking-[0.2em] uppercase text-[#0d1f33]/30 bg-[#0d1f33]/5 px-3 py-1 rounded-full mb-5">
                    {c.tag}
                  </span>
                  <h3 className="text-[17px] font-semibold text-[#0d1f33] mb-3 tracking-tight">{c.title}</h3>
                  <p className="text-[#0d1f33]/50 font-light text-[13px] leading-relaxed">{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-36 px-6 md:px-16 bg-[#0d1f33]">
        <div className="max-w-[1380px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/28 block mb-6">
                Diskusikan Kebutuhan
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-[1.12] mb-7">
                Kepercayaan masa depan dimulai dari pertanggungjawaban hari ini.
              </h2>
              <p className="text-white/45 font-light leading-relaxed text-[15px] max-w-lg">
                Hubungi tim Bilmare untuk asesmen awal. Tidak ada komitmen di tahap ini — hanya pemetaan kondisi laporan saat ini.
              </p>
            </FadeIn>
            <FadeIn delay={0.12}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-10 md:p-12">
                <h3 className="text-lg font-semibold text-white mb-7 tracking-tight">Topik yang dapat didiskusikan</h3>
                <div className="space-y-4 mb-10">
                  {[
                    'Penilaian gap kesiapan PSPK 1/PSPK 2',
                    'Review kondisi laporan yang sedang berjalan',
                    'Konsultasi scope untuk engagement baru',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <CheckCircle size={15} className="text-white/25 shrink-0" />
                      <span className="text-white/55 font-light text-[14px]">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/tentang-kami"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-white text-[#0d1f33] px-8 py-4 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase hover:bg-white/92 transition-colors group"
                >
                  Hubungi Bilmare
                  <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  );
}
