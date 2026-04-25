import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { FadeIn } from '../Layout';
import { motion, useScroll, useTransform } from 'motion/react';

// ─── Stat Counter ─────────────────────────────────────────────────────────────
function StatCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let cur = 0;
        const inc = value / 60;
        const t = setInterval(() => {
          cur += inc;
          if (cur >= value) { setCount(value); clearInterval(t); }
          else setCount(Math.floor(cur));
        }, 1800 / 60);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);
  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── Marquee ──────────────────────────────────────────────────────────────────
function Marquee() {
  const items = ['GRI Standards 2021', 'IFRS S1 & S2', 'PSPK 1 — Governance', 'PSPK 2 — Climate', 'SEOJK 16/2021', 'PSAK Keberlanjutan'];
  return (
    <div style={{ overflow: 'hidden', borderTop: '1px solid rgba(13,31,51,0.07)', borderBottom: '1px solid rgba(13,31,51,0.07)', padding: '14px 0', background: '#fff' }}>
      <motion.div
        style={{ display: 'flex', gap: 64, whiteSpace: 'nowrap' }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(13,31,51,0.28)', flexShrink: 0 }}>
            {item} <span style={{ color: 'rgba(13,31,51,0.12)', marginLeft: 32 }}>—</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// ─── Home ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.25], ['0%', '10%']);

  return (
    <div style={{ background: '#fff', color: '#0D1F33', fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}>

      {/* ══ HERO ══════════════════════════════════════════════════════════ */}
      <section style={{ position: 'relative', minHeight: '100vh', background: '#0D1F33', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', overflow: 'hidden' }}>

        {/* Subtle texture overlay */}
        <motion.div style={{ position: 'absolute', inset: 0, y: heroY }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `radial-gradient(ellipse 80% 60% at 70% 40%, rgba(59,125,216,0.07) 0%, transparent 60%)`,
          }} />
        </motion.div>

        {/* Grid lines — Swiss design element */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.025,
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />

        {/* Gold accent line — Swiss design horizontal rule */}
        <div style={{ position: 'absolute', top: 0, left: 40, right: 40, height: 2, background: 'linear-gradient(90deg, #C8A96E 0%, transparent 60%)', opacity: 0.6 }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', width: '100%', padding: '0 40px 80px' }}>

          {/* Eyebrow — Swiss: small, precise, anchored */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
            style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#C8A96E', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)' }}>
              PSPK 1 / PSPK 2 — Berlaku 1 Januari 2027
            </span>
          </motion.div>

          {/* Main headline — Swiss: massive, typographic, dominant */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 'clamp(48px, 6.5vw, 88px)',
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              color: '#fff',
              marginBottom: 32,
              maxWidth: 900,
            }}
          >
            Laporan yang siap<br />
            <span style={{ color: 'rgba(255,255,255,0.28)' }}>dipertanyakan</span> —<br />
            sebelum pertanyaan<br />datang.
          </motion.h1>

          {/* Sub + CTA — Swiss: clean, not decorative */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'end' }} className="hero-bottom-grid">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{ fontSize: 16, fontWeight: 300, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, maxWidth: 440 }}
            >
              Bilmare memastikan setiap klaim dalam laporan keberlanjutan terlacak, konsisten, dan terdokumentasi — sebelum auditor, regulator, atau investor mempertanyakannya.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', flexWrap: 'wrap' }}
            >
              <Link to="/layanan" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#fff', color: '#0D1F33',
                padding: '14px 28px', borderRadius: 100,
                fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
                textDecoration: 'none',
              }}>Lihat Layanan <ArrowUpRight size={13} /></Link>
              <Link to="/pendekatan" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                border: '1px solid rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.6)',
                padding: '14px 28px', borderRadius: 100,
                fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase',
                textDecoration: 'none',
              }}>Metodologi</Link>
            </motion.div>
          </div>

          {/* Stats bar — Swiss: numbers as typography */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, marginTop: 72, borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 36 }}
            className="stats-grid"
          >
            {[
              { value: 956, suffix: '', label: 'Emiten BEI' },
              { value: 6, suffix: '%', label: 'Sudah di-assure' },
              { value: 9, suffix: ' bulan', label: 'Sebelum PSPK efektif' },
              { value: 850, suffix: '+', label: 'Emiten belum siap' },
            ].map((s, i) => (
              <div key={i} style={{ paddingLeft: i === 0 ? 0 : 32, borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 8 }}>
                  <StatCounter value={s.value} suffix={s.suffix} />
                </div>
                <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 600 }}>{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ MARQUEE ═══════════════════════════════════════════════════════ */}
      <Marquee />

      {/* ══ POSITIONING ═══════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 40px', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '280px 1fr', gap: 80, alignItems: 'start' }} className="two-col-grid">
          <FadeIn>
            <div>
              {/* Swiss: vertical label */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <div style={{ width: 24, height: 2, background: '#C8A96E' }} />
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(13,31,51,0.38)' }}>Tentang Bilmare</span>
              </div>
              {/* Number accent */}
              <div style={{ fontSize: 96, fontWeight: 800, color: 'rgba(13,31,51,0.04)', lineHeight: 1, letterSpacing: '-0.04em', marginTop: 8 }}>01</div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p style={{ fontSize: 'clamp(22px, 2.8vw, 36px)', fontWeight: 600, lineHeight: 1.22, letterSpacing: '-0.02em', color: '#0D1F33', marginBottom: 28 }}>
              Satu-satunya firma di Indonesia yang mengkhususkan diri mempersiapkan laporan emiten menghadapi kewajiban PSPK 1/PSPK 2 per Januari 2027.
            </p>
            <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(13,31,51,0.52)', lineHeight: 1.78, maxWidth: 580, marginBottom: 36 }}>
              Bukan assurance provider. Bukan agency desain laporan. Bilmare mengisi celah yang spesifik: memastikan setiap klaim dalam laporan memiliki keterlacakan dan konsistensi yang memadai — sebelum laporan naik ke publik.
            </p>
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', paddingTop: 28, borderTop: '1px solid rgba(13,31,51,0.07)' }}>
              {['Verification-led', 'Bukan assurance provider', 'Bukan agency kreatif'].map(t => (
                <span key={t} style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(13,31,51,0.3)' }}>{t}</span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══ PROBLEM ═══════════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 40px', background: '#F5F4F2' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, flexWrap: 'wrap', gap: 24 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 24, height: 2, background: '#C8A96E' }} />
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(13,31,51,0.38)' }}>Situasi yang Kami Selesaikan</span>
                </div>
                <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.15, color: '#0D1F33', maxWidth: 480 }}>
                  Tiga kondisi yang berulang setiap siklus pelaporan.
                </h2>
              </div>
              <Link to="/pendekatan" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(13,31,51,0.45)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
                Lihat Pendekatan <ArrowRight size={13} />
              </Link>
            </div>
          </FadeIn>

          {/* Swiss: numbered cards, strong typographic hierarchy */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }} className="three-col-grid">
            {[
              { num: '01', title: 'Ketidaksesuaian teridentifikasi menjelang deadline', desc: 'Angka dalam draft tidak cocok dengan laporan keuangan audited. Waktu perbaikan hampis habis sementara assurance provider sudah menunggu.' },
              { num: '02', title: 'Scope assurance meluas karena data belum siap', desc: 'Inkonsistensi ditemukan saat fieldwork. Biaya assurance bertambah, jadwal mundur, dan reputasi tim IR dipertaruhkan.' },
              { num: '03', title: 'Pertanyaan regulator tidak terjawab dalam hitungan menit', desc: 'Data tersebar di berbagai dokumen tanpa jejak sumber yang jelas. Penelusuran memakan hari — bukan jam.' },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <motion.div
                  whileHover={{ backgroundColor: '#0D1F33' }}
                  transition={{ duration: 0.35 }}
                  style={{ background: '#fff', padding: '48px 36px', cursor: 'default' }}
                  className={`problem-card problem-card-${i}`}
                >
                  <motion.div
                    initial={false}
                    style={{ fontSize: 56, fontWeight: 800, lineHeight: 1, letterSpacing: '-0.04em', marginBottom: 32, color: 'rgba(13,31,51,0.06)' }}
                    whileHover={{ color: 'rgba(255,255,255,0.05)' }}
                    transition={{ duration: 0.35 }}
                  >{item.num}</motion.div>
                  <motion.h3
                    style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.35, color: '#0D1F33', marginBottom: 16 }}
                    whileHover={{ color: '#fff' }}
                    transition={{ duration: 0.35 }}
                  >{item.title}</motion.h3>
                  <motion.p
                    style={{ fontSize: 14, fontWeight: 300, color: 'rgba(13,31,51,0.52)', lineHeight: 1.72 }}
                    whileHover={{ color: 'rgba(255,255,255,0.5)' }}
                    transition={{ duration: 0.35 }}
                  >{item.desc}</motion.p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ METHODOLOGY ═══════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 40px', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 96, alignItems: 'start' }} className="two-col-grid">
            {/* Sticky left */}
            <FadeIn>
              <div style={{ position: 'sticky', top: 100 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                  <div style={{ width: 24, height: 2, background: '#C8A96E' }} />
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(13,31,51,0.38)' }}>Metodologi</span>
                </div>
                {/* Swiss: large typographic display */}
                <h2 style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.0, color: '#0D1F33', marginBottom: 24 }}>
                  The<br />Four<br />Layers.
                </h2>
                <p style={{ fontSize: 14, fontWeight: 300, color: 'rgba(13,31,51,0.48)', lineHeight: 1.75, marginBottom: 32 }}>
                  Integritas pengungkapan dibangun lapis demi lapis — bukan diperiksa sekaligus di akhir.
                </p>
                <Link to="/pendekatan" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(13,31,51,0.45)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
                  Detail Metodologi <ArrowRight size={13} />
                </Link>
              </div>
            </FadeIn>

            {/* Layer list */}
            <div>
              {[
                { label: 'Layer 1', name: 'Data Integrity', desc: 'Cross-check seluruh angka lintas Annual Report, Sustainability Report, dan Laporan Keuangan Audited. Setiap angka yang sama di dokumen berbeda harus identik — atau ada penjelasan terdokumentasi.' },
                { label: 'Layer 2', name: 'Regulatory Alignment', desc: 'Setiap pengungkapan diperiksa terhadap PSPK 1/PSPK 2, GRI Standards 2021, dan SEOJK 16/2021. Gap didokumentasikan dengan severity level.' },
                { label: 'Layer 3', name: 'Assurance Readiness', desc: 'Laporan disiapkan seolah assurance provider datang besok. Setiap klaim punya jejak sumber. Setiap metrik punya definisi konsisten year-on-year.' },
                { label: 'Layer 4', name: 'Institutional Memory', desc: 'Seluruh verifikasi disimpan terstruktur di sistem Bilmare per klien. Laporan tahun berikutnya tidak mulai dari nol.' },
              ].map((m, i) => (
                <FadeIn key={i} delay={i * 0.06}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: 'grid', gridTemplateColumns: '80px 1fr 24px', gap: 24, alignItems: 'flex-start', padding: '32px 0', borderTop: '1px solid rgba(13,31,51,0.07)', cursor: 'default' }}
                  >
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(13,31,51,0.25)', paddingTop: 3 }}>{m.label}</span>
                    <div>
                      <h3 style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.01em', color: '#0D1F33', marginBottom: 10 }}>{m.name}</h3>
                      <p style={{ fontSize: 14, fontWeight: 300, color: 'rgba(13,31,51,0.5)', lineHeight: 1.72 }}>{m.desc}</p>
                    </div>
                    <ArrowRight size={14} style={{ color: 'rgba(13,31,51,0.15)', marginTop: 4 }} />
                  </motion.div>
                </FadeIn>
              ))}
              <div style={{ borderTop: '1px solid rgba(13,31,51,0.07)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══════════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 40px', background: '#F5F4F2' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 24, height: 2, background: '#C8A96E' }} />
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(13,31,51,0.38)' }}>Layanan</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.15, color: '#0D1F33' }}>
                Dua titik masuk.<br />Satu standar verifikasi.
              </h2>
              <p style={{ fontSize: 14, fontWeight: 300, color: 'rgba(13,31,51,0.48)', maxWidth: 360, lineHeight: 1.7 }}>
                Situasi pelaporan — bukan skala perusahaan — yang menentukan jalur yang tepat.
              </p>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }} className="two-col-grid">
            {[
              {
                tier: 'Tier 1', title: 'Verification &\nDisclosure Readiness',
                desc: 'Draft laporan tersedia. Diperlukan lapisan verifikasi independen sebelum publikasi atau proses assurance.',
                items: ['Verifikasi silang lintas dokumen (AR / SR / LK)', 'Konsistensi definisi metrik year-on-year', 'Disclosure Risk & Gap Register', 'IR FAQ Databook bersumber'],
              },
              {
                tier: 'Tier 2', title: 'Full Accountable\nReport Development',
                desc: 'Draft belum tersedia. Laporan disusun dari awal dengan proses verifikasi data yang berjalan bersamaan dengan penulisan.',
                items: ['Inventarisasi dan katalogisasi dokumen sumber', 'Pembangunan Master Cross-Reference Matrix', 'Penyusunan draft dengan dokumentasi bersamaan', 'QC gate berlapis sebelum serah terima'],
              },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div style={{ background: '#fff', padding: '48px 40px', height: '100%' }}>
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(13,31,51,0.28)', display: 'block', marginBottom: 24 }}>{s.tier}</span>
                  <h3 style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, color: '#0D1F33', marginBottom: 20, whiteSpace: 'pre-line' }}>{s.title}</h3>
                  <p style={{ fontSize: 14, fontWeight: 300, color: 'rgba(13,31,51,0.5)', lineHeight: 1.75, marginBottom: 32 }}>{s.desc}</p>
                  <div style={{ borderTop: '1px solid rgba(13,31,51,0.07)', paddingTop: 28, marginBottom: 32 }}>
                    {s.items.map((item, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#C8A96E', marginTop: 7, flexShrink: 0 }} />
                        <span style={{ fontSize: 13, fontWeight: 300, color: 'rgba(13,31,51,0.55)', lineHeight: 1.6 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/layanan" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(13,31,51,0.45)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    Detail Layanan <ArrowRight size={13} />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Entry product — gold accent, Swiss: high contrast block */}
          <FadeIn delay={0.12}>
            <div style={{ background: '#0D1F33', padding: '48px 56px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 32 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                  <div style={{ width: 16, height: 2, background: '#C8A96E' }} />
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>Entry Product — 2026</span>
                </div>
                <h3 style={{ fontSize: 'clamp(22px, 2.8vw, 32px)', fontWeight: 700, letterSpacing: '-0.02em', color: '#fff', marginBottom: 10 }}>
                  PSPK Readiness Assessment
                </h3>
                <p style={{ fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,0.42)', lineHeight: 1.7, maxWidth: 480 }}>
                  Peta gap kesiapan PSPK 1/PSPK 2 dalam 2–3 minggu. Langkah pertama yang paling rasional sebelum komitmen lebih besar.
                </p>
              </div>
              <Link to="/layanan" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#fff', color: '#0D1F33',
                padding: '14px 28px', borderRadius: 100,
                fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
                textDecoration: 'none', flexShrink: 0,
              }}>Mulai dari sini <ArrowUpRight size={13} /></Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══ SEGMENTS ══════════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 40px', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 24, height: 2, background: '#C8A96E' }} />
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(13,31,51,0.38)' }}>Klien Kami</span>
                </div>
                <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.15, color: '#0D1F33', maxWidth: 520 }}>
                  Perusahaan di mana kualitas pengungkapan berdampak langsung pada hasil bisnis.
                </h2>
              </div>
              <Link to="/klien-kami" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(13,31,51,0.45)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
                Profil Klien <ArrowRight size={13} />
              </Link>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }} className="four-col-grid">
            {[
              { tag: 'Emiten BEI', title: 'Perusahaan Terbuka', desc: 'Emiten dengan kewajiban pengungkapan berkala kepada OJK. Konsekuensi regulatori atas ketidaksesuaian bersifat langsung dan terukur.' },
              { tag: 'Pre-IPO', title: 'Calon IPO', desc: 'Laporan publik perdana dalam konteks due diligence investor institusional. Standar keterlacakan yang berlaku berbeda dari laporan internal biasa.' },
              { tag: 'Perbankan & Asuransi', title: 'Entitas Diregulasi', desc: 'Perbankan, asuransi, dan utilitas dengan persyaratan transparansi ESG yang meningkat dari regulator sektor dan lembaga rating.' },
              { tag: 'Transisi Governance', title: 'Bisnis Keluarga', desc: 'Transisi ke standar tata kelola korporasi yang lebih formal. Dokumentasi metodologi dibangun dari awal dengan struktur yang dapat diwariskan.' },
            ].map((c, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div style={{ background: '#F5F4F2', padding: '40px 32px', height: '100%' }}>
                  <span style={{ display: 'inline-block', fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(13,31,51,0.38)', background: 'rgba(13,31,51,0.06)', padding: '5px 12px', borderRadius: 100, marginBottom: 24 }}>{c.tag}</span>
                  <h3 style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.01em', color: '#0D1F33', marginBottom: 12 }}>{c.title}</h3>
                  <p style={{ fontSize: 13, fontWeight: 300, color: 'rgba(13,31,51,0.5)', lineHeight: 1.72 }}>{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 40px', background: '#0D1F33' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="two-col-grid">
          <FadeIn>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
              <div style={{ width: 24, height: 2, background: '#C8A96E' }} />
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)' }}>Diskusikan Kebutuhan</span>
            </div>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#fff', marginBottom: 24 }}>
              Kepercayaan masa depan dimulai dari pertanggungjawaban hari ini.
            </h2>
            <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.42)', lineHeight: 1.75 }}>
              Hubungi tim Bilmare untuk asesmen awal. Tidak ada komitmen di tahap ini — hanya pemetaan kondisi laporan saat ini.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)', padding: '48px 40px' }}>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 28, letterSpacing: '-0.01em' }}>Topik yang dapat didiskusikan</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 36 }}>
                {['Penilaian gap kesiapan PSPK 1/PSPK 2', 'Review kondisi laporan yang sedang berjalan', 'Konsultasi scope untuk engagement baru'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                    <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#C8A96E', marginTop: 8, flexShrink: 0 }} />
                    <span style={{ fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/tentang-kami" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                background: '#fff', color: '#0D1F33', padding: '15px 28px',
                borderRadius: 100, fontSize: 11, fontWeight: 700,
                letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none',
              }}>
                Hubungi Bilmare <ArrowUpRight size={13} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .two-col-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .three-col-grid { grid-template-columns: 1fr !important; gap: 2px !important; }
          .four-col-grid { grid-template-columns: 1fr 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; gap: 24px !important; }
          .hero-bottom-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 540px) {
          .four-col-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}
