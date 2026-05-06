import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { FadeIn } from '../Layout';
import { motion } from 'motion/react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { PlaceholderImage } from '../components/PlaceholderImage';

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
    <div className="ticker-bar">
      <div className="flex gap-10 whitespace-nowrap animate-marquee w-max">
        {doubled.map((item, i) => (
          <span key={i} style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            flexShrink: 0,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '40px',
          }}>
            {item}
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--mckinsey-blue)', display: 'inline-block', opacity: 0.5 }} />
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Home ─────────────────────────────────────────────────────────────────────
export default function Home() {
  useScrollReveal();

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
      tag: 'TIER 1',
      title: 'Verification & Disclosure Readiness',
      subtitle: 'Draft laporan sudah ada. Diperlukan lapisan verifikasi independen sebelum publikasi atau proses assurance.',
      bullets: [
        'Verifikasi silang lintas dokumen (AR / SR / LK)',
        'Konsistensi definisi metrik year-on-year',
        'Disclosure Risk & Gap Register',
        'IR FAQ Databook bersumber',
      ],
      duration: '4–8 minggu',
      photo: '/images/service-tier1.jpg',
      photoAlt: 'Verification & Disclosure Readiness',
    },
    {
      tag: 'TIER 2',
      title: 'Full Accountable Report Development',
      subtitle: 'Draft belum ada. Laporan disusun dari awal dengan verifikasi data yang berjalan bersamaan dengan penulisan.',
      bullets: [
        'Inventarisasi dan katalogisasi dokumen sumber',
        'Pembangunan Master Cross-Reference Matrix',
        'Penyusunan draft dengan dokumentasi bersamaan',
        'QC gate berlapis sebelum serah terima',
      ],
      duration: '10–16 minggu',
      photo: '/images/service-tier2.jpg',
      photoAlt: 'Full Accountable Report Development',
    },
  ];

  const stats = [
    { value: 956, suffix: '',     label: 'Emiten BEI (Apr 2026)' },
    { value: 6,   suffix: '%',    label: 'Sudah di-assure' },
    { value: 9,   suffix: ' bln', label: 'Sebelum PSPK efektif' },
    { value: 850, suffix: '+',    label: 'Emiten belum siap' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', background: 'white', color: 'var(--text-dark)' }}>

      {/* ════════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-hero wave-overlay photo-section-bg" style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
        <img
          src="/images/hero-bg.jpg"
          alt="Bilmare team"
          className="photo-bg-img"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
        <div className="photo-bg-overlay" />
        <div className="glow-blob" style={{ top: '-100px', right: '-100px' }} />

        <div className="photo-section-content container-bilmare" style={{
          paddingTop: '140px',
          paddingBottom: '100px',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          {/* Overline badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '24px' }}
          >
            <span className="overline-white">
              PSPK 1/PSPK 2 — Berlaku 1 Januari 2027
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 'clamp(40px, 6vw, 80px)',
              fontWeight: 700,
              color: 'white',
              maxWidth: '760px',
              marginBottom: '24px',
              lineHeight: 1.1,
            }}
          >
            Laporan yang siap dipertanyakan — sebelum pertanyaan datang.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              color: 'rgba(255,255,255,0.75)',
              maxWidth: '620px',
              lineHeight: 1.7,
              marginBottom: '48px',
            }}
          >
            Kami memverifikasi setiap klaim dalam laporan keberlanjutan Anda — memastikan keterlacakan,
            konsistensi, dan dokumentasi yang memadai sebelum auditor, regulator, atau investor mempertanyakannya.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}
          >
            <Link to="/layanan" className="btn-primary">
              Lihat Layanan <ArrowRight size={15} />
            </Link>
            <Link to="/pendekatan" className="btn-secondary">
              Metodologi Kami
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          TICKER
      ════════════════════════════════════════════════════════════════ */}
      <Ticker items={standards} />

      {/* ════════════════════════════════════════════════════════════════
          STATS / URGENCY
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-light section-pad">
        <div className="container-bilmare">
          <FadeIn>
            <div className="fade-in-up" style={{ marginBottom: '64px' }}>
              <div className="overline" style={{ marginBottom: '16px' }}>Konteks Regulasi</div>
              <h2 style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(28px, 4vw, 48px)',
                color: 'var(--text-dark)',
                maxWidth: '680px',
                lineHeight: 1.2,
              }}>
                Pasar yang belum siap. Tenggat yang tidak bergeser.
              </h2>
            </div>
          </FadeIn>

          {/* Stat grid */}
          <div className="fade-in-up" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '40px',
            marginBottom: '64px',
          }}>
            {stats.map((s, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div>
                  <div className="stat-number">
                    <StatCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    color: 'var(--text-muted)',
                    marginTop: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 500,
                  }}>
                    {s.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* 2-col explanation */}
          <FadeIn>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }} className="stats-cols">
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: '520px' }}>
                PSPK 1 dan PSPK 2 — Pedoman Standar Pengungkapan Keberlanjutan — adalah perubahan terbesar
                dalam pelaporan emiten Indonesia sejak SEOJK 16/2021. Berlaku efektif 1 Januari 2027, dengan
                implementasi bertahap yang dimulai jauh sebelum tenggat resmi.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: '520px' }}>
                Mayoritas emiten belum memiliki sistem verifikasi data dan dokumentasi metodologi yang memadai.
                Bilmare hadir spesifik untuk mengisi celah ini — sebelum assurance provider menemukan temuan,
                sebelum OJK mempertanyakan laporan yang sudah terbit.
              </p>
            </div>
          </FadeIn>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .stats-cols { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 640px) {
            .fade-in-up[style*="grid-template-columns: repeat(4"] {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
        `}</style>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          EDITORIAL PHOTO STRIP
      ════════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#030f1a', padding: '0' }}>
        <div className="container-bilmare">
          <PlaceholderImage
            src="/images/client-context.jpg"
            alt="Konteks pasar Indonesia"
            className="photo-wide"
            overlayLabel="Konteks Regulasi"
            overlayTitle="PSPK 1/PSPK 2 — Perubahan terbesar dalam pelaporan emiten Indonesia sejak SEOJK 16/2021."
          />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          WHY BILMARE (Positioning)
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-white" style={{ padding: '0' }}>
        <div className="split-section">
          <div className="split-text">
            <FadeIn>
              <div className="overline" style={{ marginBottom: '20px' }}>Tentang Bilmare</div>
              <h2 style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(28px, 3.5vw, 48px)',
                color: 'var(--text-dark)',
                marginBottom: '24px',
                lineHeight: 1.2,
              }}>
                Satu-satunya firma di Indonesia yang mengkhususkan diri mempersiapkan laporan emiten menghadapi PSPK 1/PSPK 2.
              </h2>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                color: 'var(--text-muted)',
                lineHeight: 1.8,
                marginBottom: '32px',
              }}>
                Bukan assurance provider. Bukan agency desain laporan. Bilmare mengisi satu celah yang
                spesifik: memastikan setiap klaim dalam laporan Anda memiliki keterlacakan dan konsistensi
                yang memadai — sebelum laporan naik ke publik.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {['Verification-led', 'Bukan assurance provider', 'Bukan agency kreatif'].map((tag) => (
                  <span key={tag} style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    border: '1px solid var(--line)',
                    padding: '6px 14px',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
          <PlaceholderImage
            src="/images/about-team.jpg"
            alt="Tim Bilmare"
            className="split-photo"
          />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          PROBLEMS (Why Bilmare / Differentiators)
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-dark wave-overlay section-pad">
        <div className="container-bilmare" style={{ position: 'relative', zIndex: 1 }}>
          <FadeIn>
            <div className="fade-in-up" style={{ marginBottom: '64px' }}>
              <div className="overline-white" style={{ marginBottom: '16px' }}>Situasi yang Kami Selesaikan</div>
              <h2 style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(28px, 4vw, 48px)',
                color: 'white',
                maxWidth: '640px',
                lineHeight: 1.2,
              }}>
                Tiga kondisi yang berulang setiap siklus pelaporan.
              </h2>
            </div>
          </FadeIn>

          <div className="fade-in-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0' }} id="problems-grid">
            {problems.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="layer-step">
                  <div className="layer-step-number">{item.num}</div>
                  <h3 style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '18px',
                    fontWeight: 600,
                    color: 'white',
                    marginBottom: '12px',
                    lineHeight: 1.4,
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '15px',
                    color: 'rgba(255,255,255,0.65)',
                    lineHeight: 1.7,
                  }}>
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div style={{ marginTop: '56px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <Link to="/pendekatan" className="cta-link" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Lihat pendekatan kami →
              </Link>
            </div>
          </FadeIn>
        </div>

        <style>{`
          @media (max-width: 768px) {
            #problems-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SERVICES
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-white section-pad">
        <div className="container-bilmare">
          <FadeIn>
            <div className="fade-in-up" style={{ marginBottom: '64px' }}>
              <div className="overline" style={{ marginBottom: '16px' }}>Layanan</div>
              <h2 style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(28px, 4vw, 48px)',
                color: 'var(--text-dark)',
                marginBottom: '16px',
                lineHeight: 1.2,
              }}>
                Dua titik masuk.<br />Satu standar verifikasi.
              </h2>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                color: 'var(--text-muted)',
                maxWidth: '480px',
                lineHeight: 1.7,
              }}>
                Situasi pelaporan Anda — bukan skala perusahaan — yang menentukan jalur yang tepat.
              </p>
            </div>
          </FadeIn>

          <div className="fade-in-up" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }} id="services-grid">
            {services.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="service-card">
                  <PlaceholderImage
                    src={s.photo}
                    alt={s.photoAlt}
                    className="photo-card"
                    style={{ margin: '-40px -40px 32px -40px', width: 'calc(100% + 80px)' }}
                  />
                  <div className="overline" style={{ marginBottom: '12px' }}>{s.tag}</div>
                  <h3 style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '24px',
                    color: 'var(--text-dark)',
                    marginBottom: '12px',
                    lineHeight: 1.3,
                  }}>
                    {s.title}
                  </h3>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '15px',
                    color: 'var(--text-muted)',
                    marginBottom: '24px',
                    lineHeight: 1.7,
                  }}>
                    {s.subtitle}
                  </p>
                  <ul style={{ listStyle: 'none', marginBottom: '24px' }}>
                    {s.bullets.map((b, j) => (
                      <li key={j} style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                        color: 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        marginBottom: '10px',
                      }}>
                        <CheckCircle size={14} style={{ color: 'var(--mckinsey-blue)', marginTop: '2px', flexShrink: 0 }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                    <span className="duration-badge">{s.duration}</span>
                    <Link to="/layanan" className="cta-link">
                      Pelajari layanan →
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Entry product bar */}
          <FadeIn delay={0.2}>
            <div style={{
              background: 'var(--deep-navy)',
              padding: '40px 48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '24px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div className="glow-blob" style={{ top: '-80px', right: '-80px', width: '300px', height: '300px' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <span className="overline-white">Entry Product — 2026</span>
                  <span className="start-badge">Mulai di sini</span>
                </div>
                <h3 style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '28px',
                  color: 'white',
                  marginBottom: '8px',
                }}>
                  PSPK Readiness Assessment
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  color: 'rgba(255,255,255,0.6)',
                  maxWidth: '480px',
                  lineHeight: 1.6,
                }}>
                  Peta gap kesiapan PSPK 1/2 dalam 2–3 minggu. Tidak perlu komitmen besar. Langkah pertama yang paling rasional.
                </p>
              </div>
              <Link to="/layanan" className="btn-primary" style={{ position: 'relative', zIndex: 1, flexShrink: 0 }}>
                Mulai dari sini <ArrowRight size={15} />
              </Link>
            </div>
          </FadeIn>
        </div>

        <style>{`
          @media (max-width: 768px) {
            #services-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          METHODOLOGY
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-dark wave-overlay section-pad">
        <div className="container-bilmare" style={{ position: 'relative', zIndex: 1 }}>
          <FadeIn>
            <div className="fade-in-up" style={{ marginBottom: '64px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
              <div>
                <div className="overline-white" style={{ marginBottom: '16px' }}>Metodologi</div>
                <h2 style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  color: 'white',
                  lineHeight: 1.2,
                }}>
                  The Four Layers.
                </h2>
              </div>
              <Link to="/pendekatan" className="cta-link" style={{ color: 'rgba(255,255,255,0.7)', flexShrink: 0 }}>
                Detail metodologi →
              </Link>
            </div>
          </FadeIn>

          <p className="fade-in-up" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '18px',
            color: 'rgba(255,255,255,0.65)',
            maxWidth: '560px',
            lineHeight: 1.7,
            marginBottom: '64px',
          }}>
            Integritas pengungkapan dibangun lapis demi lapis — bukan diperiksa sekaligus di akhir.
          </p>

          <div className="fade-in-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }} id="method-grid">
            {methodology.map((m, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="layer-step">
                  <div className="layer-step-number">{m.num}</div>
                  <h3 style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '17px',
                    fontWeight: 600,
                    color: 'white',
                    marginBottom: '12px',
                  }}>
                    {m.name}
                  </h3>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '15px',
                    color: 'rgba(255,255,255,0.65)',
                    lineHeight: 1.7,
                  }}>
                    {m.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 1024px) {
            #method-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 640px) {
            #method-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          WHO WE SERVE (Clients)
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-vivid section-pad">
        <div className="container-bilmare">
          <FadeIn>
            <div className="fade-in-up" style={{ marginBottom: '64px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
              <div>
                <div className="overline-white" style={{ marginBottom: '16px' }}>Klien Kami</div>
                <h2 style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  color: 'white',
                  maxWidth: '600px',
                  lineHeight: 1.2,
                }}>
                  Perusahaan di mana kualitas pengungkapan berdampak langsung pada hasil bisnis.
                </h2>
              </div>
              <Link to="/klien-kami" className="cta-link" style={{ color: 'rgba(255,255,255,0.8)', flexShrink: 0 }}>
                Profil klien →
              </Link>
            </div>
          </FadeIn>

          <div className="fade-in-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2px' }} id="clients-grid">
            {[
              { title: 'Perusahaan Terbuka', desc: 'Emiten OJK dengan kewajiban pengungkapan berkala. Konsekuensi regulatori atas ketidaksesuaian pelaporan.' },
              { title: 'Calon IPO', desc: 'Laporan publik pertama dalam konteks due diligence investor institusional. Zero margin for error.' },
              { title: 'Entitas Diregulasi', desc: 'Perbankan, asuransi, dan utilitas dengan persyaratan transparansi ESG yang meningkat dari regulator sektor.' },
              { title: 'Bisnis Keluarga', desc: 'Transisi ke standar tata kelola korporasi yang lebih formal. Dokumentasi metodologi dari nol.' },
            ].map((c, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="dark-card">
                  <h3 style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '17px',
                    fontWeight: 600,
                    color: 'white',
                    marginBottom: '12px',
                  }}>
                    {c.title}
                  </h3>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: 1.7,
                  }}>
                    {c.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 1024px) {
            #clients-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 640px) {
            #clients-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          CTA
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-hero wave-overlay section-pad">
        <div className="container-bilmare" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} id="cta-grid">
            <FadeIn>
              <div className="overline-white" style={{ marginBottom: '20px' }}>Diskusikan Kebutuhan Anda</div>
              <h2 style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(28px, 4vw, 52px)',
                color: 'white',
                marginBottom: '20px',
                lineHeight: 1.15,
              }}>
                Kepercayaan masa depan dimulai dari pertanggungjawaban hari ini.
              </h2>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '18px',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.7,
              }}>
                Hubungi tim Bilmare untuk asesmen awal. Tidak ada komitmen di tahap ini — hanya pemetaan kondisi laporan Anda saat ini.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="white-card">
                <h3 style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '22px',
                  color: 'var(--text-dark)',
                  marginBottom: '28px',
                }}>
                  Mulai percakapan
                </h3>
                <div style={{ marginBottom: '32px' }}>
                  {[
                    'Penilaian gap kesiapan PSPK 1/2',
                    'Review kondisi laporan yang sedang berjalan',
                    'Konsultasi scope untuk engagement baru',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '16px' }}>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        border: '1px solid var(--mckinsey-blue)',
                        background: 'rgba(34,81,255,0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}>
                        <CheckCircle size={11} style={{ color: 'var(--mckinsey-blue)' }} />
                      </div>
                      <span style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '15px',
                        color: 'var(--text-muted)',
                        lineHeight: 1.6,
                      }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/layanan"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '16px 28px' }}
                >
                  Hubungi Kami
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

        <style>{`
          @media (max-width: 1024px) {
            #cta-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>
      </section>

    </div>
  );
}
