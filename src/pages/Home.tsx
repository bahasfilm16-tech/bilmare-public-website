import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CheckCircle } from 'lucide-react';
import { FadeIn } from '../Layout';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';

// ─── Stat Counter ────────────────────────────────────────────────────────────
function StatCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
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
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── Marquee ─────────────────────────────────────────────────────────────────
function Marquee({ items }: { items: string[] }) {
  return (
    <div className="overflow-hidden w-full py-5 border-y border-[#1a2e4a]/10">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-sm font-semibold tracking-[0.2em] uppercase text-[#1a2e4a]/40 shrink-0">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// ─── Service Card ─────────────────────────────────────────────────────────────
function ServiceCard({
  tier, title, subtitle, bullets, delay
}: {
  tier: string; title: string; subtitle: string; bullets: string[]; delay: number;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <FadeIn delay={delay}>
      <motion.div
        className="relative border border-[#1a2e4a]/10 p-10 md:p-14 bg-white group cursor-pointer overflow-hidden"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        {/* Accent line top */}
        <motion.div
          className="absolute top-0 left-0 h-[3px] bg-[#1a2e4a]"
          initial={{ width: 0 }}
          animate={{ width: hovered ? '100%' : '40px' }}
          transition={{ duration: 0.4 }}
        />

        <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#1a2e4a]/40 block mb-6">{tier}</span>
        <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0d1f33] mb-4 leading-[1.15]">{title}</h3>
        <p className="text-[#4a5e72] font-light text-lg leading-relaxed mb-10 max-w-md">{subtitle}</p>

        <ul className="space-y-3 mb-12">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3 text-[#4a5e72]">
              <CheckCircle size={16} className="mt-1 shrink-0 text-[#1a2e4a]/50" />
              <span className="font-light">{b}</span>
            </li>
          ))}
        </ul>

        <Link
          to="/layanan"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-[#1a2e4a] border-b border-[#1a2e4a] pb-1 hover:gap-4 transition-all"
        >
          Pelajari layanan <ArrowRight size={14} />
        </Link>
      </motion.div>
    </FadeIn>
  );
}

// ─── Home ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], ['0%', '15%']);

  const standards = [
    'GRI Standards 2021', 'IFRS S1 & S2', 'POJK Keuangan Berkelanjutan',
    'SEOJK 16/2021', 'PSAK Keberlanjutan', 'GRI Standards 2021', 'IFRS S1 & S2',
    'POJK Keuangan Berkelanjutan', 'SEOJK 16/2021', 'PSAK Keberlanjutan',
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
    { label: 'Layer 1', name: 'Data Integrity', desc: 'Cross-check seluruh angka lintas Annual Report, Sustainability Report, dan Laporan Keuangan Audited.' },
    { label: 'Layer 2', name: 'Regulatory Alignment', desc: 'Setiap pengungkapan diperiksa terhadap PSPK 1/2, GRI Standards 2021, dan SEOJK 16/2021.' },
    { label: 'Layer 3', name: 'Assurance Readiness', desc: 'Laporan disiapkan seolah assurance provider datang besok. Setiap klaim memiliki jejak sumber.' },
    { label: 'Layer 4', name: 'Institutional Memory', desc: 'Seluruh verifikasi disimpan terstruktur per klien. Laporan tahun depan tidak mulai dari nol.' },
  ];

  return (
    <div className="flex flex-col bg-[#f7f5f2] text-[#0d1f33]" style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0d1f33]">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)`,
            backgroundSize: '72px 72px'
          }}
        />

        {/* Subtle gradient orb */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #3b7dd8 0%, transparent 70%)' }}
        />

        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-[0.06] grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1f33]/60 via-[#0d1f33]/80 to-[#0d1f33]" />
        </motion.div>

        <div className="relative z-10 px-6 md:px-16 max-w-[1400px] w-full mx-auto">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-white/40 border border-white/10 px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              PSPK 1/PSPK 2 — Berlaku 1 Januari 2027
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[80px] font-semibold tracking-tight leading-[1.05] text-white mb-8 max-w-5xl"
          >
            Laporan yang siap<br />
            <span className="text-white/40">dipertanyakan</span> —<br />
            sebelum pertanyaan datang.
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl font-light text-white/60 max-w-2xl leading-relaxed mb-14"
          >
            Bilmare adalah firma verifikasi laporan keberlanjutan yang memastikan setiap klaim terlacak, konsisten, dan terdokumentasi — sebelum auditor, regulator, atau investor mempertanyakannya.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/layanan"
              className="inline-flex items-center gap-3 bg-white text-[#0d1f33] px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-white/90 transition-colors group"
            >
              Lihat Layanan
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              to="/pendekatan"
              className="inline-flex items-center gap-3 border border-white/20 text-white/70 px-8 py-4 text-sm font-bold tracking-widest uppercase hover:border-white/50 hover:text-white transition-colors"
            >
              Metodologi Kami
            </Link>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="relative z-10 mt-24 border-t border-white/10"
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 956, suffix: '', label: 'Emiten BEI (Apr 2026)' },
              { value: 6, suffix: '%', label: 'Sudah di-assure' },
              { value: 9, suffix: ' bln', label: 'Tersisa sebelum PSPK efektif' },
              { value: 850, suffix: '+', label: 'Emiten belum siap' },
            ].map((s, i) => (
              <div key={i} className="border-l border-white/10 pl-6 first:border-0 first:pl-0">
                <div className="text-3xl md:text-4xl font-semibold text-white mb-1">
                  <StatCounter value={s.value} suffix={s.suffix} />
                </div>
                <p className="text-xs text-white/40 uppercase tracking-widest font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── MARQUEE ───────────────────────────────────────────────────── */}
      <div className="bg-white">
        <Marquee items={standards} />
      </div>

      {/* ── POSITIONING STATEMENT ─────────────────────────────────────── */}
      <section className="py-28 md:py-40 px-6 md:px-16 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <FadeIn>
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#1a2e4a]/40 block mb-4">
                  Tentang Bilmare
                </span>
                <div className="w-12 h-[3px] bg-[#1a2e4a]" />
              </FadeIn>
            </div>
            <div className="lg:col-span-8">
              <FadeIn delay={0.15}>
                <p className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.2] text-[#0d1f33] mb-12">
                  Bilmare adalah satu-satunya firma di Indonesia yang mengkhususkan diri mempersiapkan laporan emiten menghadapi kewajiban PSPK 1/PSPK 2 per Januari 2027.
                </p>
                <p className="text-xl text-[#4a5e72] font-light leading-relaxed max-w-3xl mb-12">
                  Bukan assurance provider. Bukan agency desain laporan. Bilmare mengisi satu celah yang spesifik: memastikan setiap klaim dalam laporan Anda memiliki keterlacakan dan konsistensi yang memadai — sebelum laporan naik ke publik.
                </p>
                <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm font-semibold tracking-widest uppercase text-[#1a2e4a]/40 border-t border-[#1a2e4a]/10 pt-8">
                  <span>Verification-led</span>
                  <span>•</span>
                  <span>Bukan assurance provider</span>
                  <span>•</span>
                  <span>Bukan agency kreatif</span>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM SECTION ───────────────────────────────────────────── */}
      <section className="py-28 md:py-40 px-6 md:px-16 bg-[#f7f5f2]">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="flex items-end justify-between mb-20 flex-wrap gap-6">
              <div>
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#1a2e4a]/40 block mb-3">Situasi yang Kami Selesaikan</span>
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0d1f33] max-w-xl leading-[1.15]">
                  Tiga kondisi yang berulang setiap siklus pelaporan.
                </h2>
              </div>
              <Link to="/pendekatan" className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-[#1a2e4a] border-b border-[#1a2e4a] pb-1 hover:opacity-60 transition-opacity shrink-0">
                Lihat pendekatan <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#1a2e4a]/10">
            {problems.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div
                  className="p-10 md:p-12 border-b md:border-b-0 md:border-r border-[#1a2e4a]/10 last:border-0 group hover:bg-[#0d1f33] transition-colors duration-500 cursor-default"
                  whileHover={{}}
                >
                  <span className="text-[72px] font-bold text-[#1a2e4a]/6 leading-none block mb-6 group-hover:text-white/5 transition-colors">{item.num}</span>
                  <h3 className="text-xl font-semibold tracking-tight text-[#0d1f33] mb-4 leading-snug group-hover:text-white transition-colors">{item.title}</h3>
                  <p className="text-[#4a5e72] font-light leading-relaxed group-hover:text-white/60 transition-colors">{item.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section className="py-28 md:py-40 px-6 md:px-16 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="mb-20">
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#1a2e4a]/40 block mb-3">Layanan</span>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0d1f33] leading-[1.15]">
                Dua titik masuk.<br />Satu standar verifikasi.
              </h2>
              <p className="mt-6 text-xl text-[#4a5e72] font-light max-w-xl">
                Situasi pelaporan Anda — bukan skala perusahaan — yang menentukan jalur yang tepat.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard
              tier="Tier 1"
              title="Verification & Disclosure Readiness"
              subtitle="Draft laporan sudah ada. Diperlukan lapisan verifikasi independen sebelum publikasi atau proses assurance."
              bullets={[
                'Verifikasi silang lintas dokumen (AR / SR / LK)',
                'Konsistensi definisi metrik year-on-year',
                'Disclosure Risk & Gap Register',
                'IR FAQ Databook bersumber',
              ]}
              delay={0}
            />
            <ServiceCard
              tier="Tier 2"
              title="Full Accountable Report Development"
              subtitle="Draft belum ada. Laporan disusun dari awal dengan verifikasi data yang berjalan bersamaan dengan penulisan."
              bullets={[
                'Inventarisasi dan katalogisasi dokumen sumber',
                'Pembangunan Master Cross-Reference Matrix',
                'Penyusunan draft dengan dokumentasi bersamaan',
                'QC gate berlapis sebelum serah terima',
              ]}
              delay={0.1}
            />
          </div>

          {/* Entry product highlight */}
          <FadeIn delay={0.2}>
            <div className="mt-6 bg-[#0d1f33] p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-white/30 block mb-3">Entry Product — 2026</span>
                <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">PSPK Readiness Assessment</h3>
                <p className="text-white/50 font-light mt-2 max-w-lg">Peta gap kesiapan PSPK 1/2 dalam 2–3 minggu. Tidak perlu komitmen besar. Langkah pertama yang paling rasional.</p>
              </div>
              <Link
                to="/layanan"
                className="inline-flex items-center gap-3 bg-white text-[#0d1f33] px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-white/90 transition-colors shrink-0 group"
              >
                Mulai dari sini
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── METHODOLOGY ───────────────────────────────────────────────── */}
      <section className="py-28 md:py-40 px-6 md:px-16 bg-[#f7f5f2]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <FadeIn>
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#1a2e4a]/40 block mb-3">Metodologi</span>
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0d1f33] leading-[1.15] mb-8">
                  The Four Layers.
                </h2>
                <p className="text-xl text-[#4a5e72] font-light leading-relaxed mb-10">
                  Integritas pengungkapan dibangun lapis demi lapis — bukan diperiksa sekaligus di akhir.
                </p>
                <Link to="/pendekatan" className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-[#1a2e4a] border-b border-[#1a2e4a] pb-1 hover:opacity-60 transition-opacity">
                  Detail metodologi <ArrowRight size={14} />
                </Link>
              </FadeIn>
            </div>

            <div className="lg:col-span-8 space-y-0">
              {methodology.map((m, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <motion.div
                    className="flex gap-8 items-start border-t border-[#1a2e4a]/10 py-8 group hover:bg-white px-6 -mx-6 transition-colors duration-300 cursor-default"
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-xs font-bold tracking-widest uppercase text-[#1a2e4a]/30 w-16 shrink-0 mt-1">{m.label}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-[#0d1f33] mb-2 tracking-tight">{m.name}</h3>
                      <p className="text-[#4a5e72] font-light leading-relaxed">{m.desc}</p>
                    </div>
                    <ArrowRight size={16} className="text-[#1a2e4a]/20 mt-1 shrink-0 ml-auto group-hover:text-[#1a2e4a]/60 group-hover:translate-x-1 transition-all" />
                  </motion.div>
                </FadeIn>
              ))}
              <div className="border-t border-[#1a2e4a]/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE WORK WITH ──────────────────────────────────────────── */}
      <section className="py-28 md:py-40 px-6 md:px-16 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="flex items-end justify-between mb-20 flex-wrap gap-6">
              <div>
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#1a2e4a]/40 block mb-3">Klien Kami</span>
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0d1f33] max-w-xl leading-[1.15]">
                  Perusahaan di mana kualitas pengungkapan berdampak langsung pada hasil bisnis.
                </h2>
              </div>
              <Link to="/klien-kami" className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-[#1a2e4a] border-b border-[#1a2e4a] pb-1 hover:opacity-60 transition-opacity shrink-0">
                Profil klien <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Perusahaan Terbuka', desc: 'Emiten OJK dengan kewajiban pengungkapan berkala. Konsekuensi regulatori atas ketidaksesuaian pelaporan.' },
              { title: 'Calon IPO', desc: 'Laporan publik pertama dalam konteks due diligence investor institusional. Zero margin for error.' },
              { title: 'Entitas Diregulasi', desc: 'Perbankan, asuransi, dan utilitas dengan persyaratan transparansi ESG yang meningkat dari regulator sektor.' },
              { title: 'Bisnis Keluarga', desc: 'Transisi ke standar tata kelola korporasi yang lebih formal. Dokumentasi metodologi dari nol.' },
            ].map((c, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="border border-[#1a2e4a]/10 p-8 hover:border-[#1a2e4a]/30 hover:shadow-sm transition-all h-full">
                  <h3 className="text-lg font-semibold text-[#0d1f33] mb-4 tracking-tight">{c.title}</h3>
                  <p className="text-[#4a5e72] font-light text-sm leading-relaxed">{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="py-28 md:py-40 px-6 md:px-16 bg-[#0d1f33]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-white/30 block mb-6">Diskusikan Kebutuhan Anda</span>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-[1.1] mb-8">
                Kepercayaan masa depan dimulai dari pertanggungjawaban hari ini.
              </h2>
              <p className="text-xl text-white/50 font-light leading-relaxed">
                Hubungi tim Bilmare untuk asesmen awal. Tidak ada komitmen di tahap ini — hanya pemetaan kondisi laporan Anda saat ini.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="bg-white/5 border border-white/10 p-10 md:p-14">
                <h3 className="text-xl font-semibold text-white mb-8 tracking-tight">Mulai percakapan</h3>
                <div className="space-y-6 mb-10">
                  {[
                    'Penilaian gap kesiapan PSPK 1/2',
                    'Review kondisi laporan yang sedang berjalan',
                    'Konsultasi scope untuk engagement baru',
                  ].map((item, i) => (
                    <label key={i} className="flex items-center gap-4 cursor-pointer group">
                      <div className="w-5 h-5 border border-white/20 group-hover:border-white/50 transition-colors flex items-center justify-center shrink-0">
                        <CheckCircle size={12} className="text-white/0 group-hover:text-white/40 transition-colors" />
                      </div>
                      <span className="text-white/60 font-light group-hover:text-white/80 transition-colors">{item}</span>
                    </label>
                  ))}
                </div>
                <Link
                  to="/kontak"
                  className="w-full inline-flex items-center justify-center gap-3 bg-white text-[#0d1f33] px-8 py-5 text-sm font-bold tracking-widest uppercase hover:bg-white/90 transition-colors group"
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
