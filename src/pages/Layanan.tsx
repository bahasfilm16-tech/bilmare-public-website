import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { FadeIn } from '../Layout';
import { motion } from 'motion/react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { PlaceholderImage } from '../components/PlaceholderImage';

export default function Layanan() {
  useScrollReveal();

  const tier1Deliverables = [
    { title: 'Laporan disclosure-ready', desc: 'Seluruh klaim material terverifikasi dan siap dipublikasikan.' },
    { title: 'Cross-Reference Matrix', desc: 'Pemetaan setiap klaim ke dokumen sumber yang terverifikasi.' },
    { title: 'Disclosure Risk & Gap Register', desc: 'Log temuan lengkap dengan klasifikasi risiko dan rekomendasi.' },
    { title: 'IR FAQ Databook', desc: 'Panduan respons bersumber untuk investor, regulator, dan stakeholder.' },
  ];

  const tier2Steps = [
    { num: '01', title: 'Inventarisasi dokumen sumber', desc: 'Laporan Keuangan Audited, laporan operasional, database ESG, notulen rapat dikatalogkan dan dikontrol versinya.' },
    { num: '02', title: 'Pembangunan Cross-Reference Matrix', desc: 'Sebelum satu kalimat pun ditulis, setiap klaim material dipetakan ke dokumen sumbernya.' },
    { num: '03', title: 'Penulisan dengan dokumentasi bersamaan', desc: 'Setiap kalimat yang ditulis langsung didokumentasikan ke sumbernya. Tidak ada klaim tanpa referensi.' },
    { num: '04', title: 'Review berlapis dan serah terima', desc: 'Laporan melewati review internal berlapis, diserahkan bersama paket dokumentasi lengkap.' },
  ];

  return (
    <div style={{ background: 'white', color: 'var(--text-dark)', minHeight: '100vh' }}>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="bg-dark section-pad" style={{ paddingTop: '140px' }}>
        <div className="container-bilmare">
          <FadeIn>
            <div className="overline-white fade-in-up" style={{ marginBottom: '20px' }}>Layanan</div>
            <h1 style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(36px, 6vw, 72px)',
              color: 'white',
              maxWidth: '800px',
              lineHeight: 1.1,
              marginBottom: '24px',
            }}>
              Dua titik masuk.<br />Satu standar verifikasi.
            </h1>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '600px',
              lineHeight: 1.7,
            }}>
              Sebagian klien sudah memiliki draft laporan dan memerlukan lapisan verifikasi independen. Sebagian lagi memerlukan laporan yang disusun dari awal. Bilmare melayani keduanya.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── TIER 1 — split layout ───────────────────────────────────── */}
      <section className="bg-white section-pad">
        <div className="container-bilmare">
          <FadeIn>
            <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '80px', alignItems: 'flex-start', marginBottom: '64px' }} className="tier-layout">

              {/* Text side */}
              <div>
                <div className="overline fade-in-up" style={{ marginBottom: '16px' }}>Tier 1</div>
                <h2 style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(28px, 3.5vw, 44px)',
                  color: 'var(--text-dark)',
                  marginBottom: '20px',
                  lineHeight: 1.2,
                }}>
                  Verification &amp;<br />Disclosure Readiness
                </h2>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.8,
                  marginBottom: '32px',
                }}>
                  Draft laporan sudah ada. Pertanyaannya satu: apakah setiap klaim di dalamnya dapat dipertanggungjawabkan ketika regulator, investor institusional, atau assurance provider mempertanyakannya?
                </p>

                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: 600,
                  color: 'var(--text-dark)',
                  lineHeight: 1.5,
                  marginBottom: '28px',
                }}>
                  Draft sudah tersedia. Diperlukan verification layer independen sebelum laporan dipublikasikan atau memasuki proses assurance.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }} className="tier1-detail-cols">
                  <div>
                    <div style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      marginBottom: '16px',
                      paddingBottom: '12px',
                      borderBottom: '1px solid var(--line)',
                    }}>
                      Sesuai untuk
                    </div>
                    <ul style={{ listStyle: 'none' }}>
                      {['Perusahaan terbuka (emiten OJK)', 'Anak perusahaan multinasional', 'Pra-assurance engagement', 'Klien yang bekerja dengan agency kreatif'].map((item) => (
                        <li key={item} style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '14px',
                          color: 'var(--text-muted)',
                          paddingLeft: '16px',
                          borderLeft: '2px solid var(--mckinsey-blue)',
                          marginBottom: '12px',
                          lineHeight: 1.5,
                        }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      marginBottom: '16px',
                      paddingBottom: '12px',
                      borderBottom: '1px solid var(--line)',
                    }}>
                      Cakupan kerja
                    </div>
                    <ul style={{ listStyle: 'none' }}>
                      {[
                        { title: 'Verifikasi silang dokumen', desc: 'Setiap angka dan klaim material diperiksa konsistensinya.' },
                        { title: 'Konsistensi time-series', desc: 'Definisi metrik diverifikasi terhadap laporan periode sebelumnya.' },
                        { title: 'Penyesuaian pengungkapan', desc: 'Klaim berisiko diperbaiki redaksinya sebelum publikasi.' },
                      ].map((it) => (
                        <li key={it.title} style={{ marginBottom: '16px' }}>
                          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '4px' }}>{it.title}</div>
                          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'var(--text-muted)' }}>{it.desc}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Photo side */}
              <PlaceholderImage
                src="/images/service-assessment.jpg"
                alt="PSPK Readiness Assessment"
                className="photo-hero"
                style={{ alignSelf: 'stretch', minHeight: '400px' }}
              />
            </div>
          </FadeIn>

          {/* Deliverables */}
          <FadeIn delay={0.1}>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '20px',
            }}>
              Yang Anda Terima
            </div>
            <div className="fade-in-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2px' }} id="deliverables-grid">
              {tier1Deliverables.map((d, i) => (
                <motion.div
                  key={i}
                  className="service-card"
                  style={{ borderTop: '3px solid var(--mckinsey-blue)' }}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <CheckCircle size={18} style={{ color: 'var(--mckinsey-blue)', marginBottom: '16px', display: 'block' }} />
                  <h4 style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '15px',
                    fontWeight: 600,
                    color: 'var(--text-dark)',
                    marginBottom: '8px',
                  }}>
                    {d.title}
                  </h4>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                  }}>
                    {d.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>

        <style>{`
          @media (max-width: 1024px) {
            .tier-layout { grid-template-columns: 1fr !important; gap: 40px !important; }
            .tier1-detail-cols { grid-template-columns: 1fr !important; }
            #deliverables-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 640px) {
            #deliverables-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── TIER 2 ──────────────────────────────────────────────────── */}
      <section className="bg-light section-pad">
        <div className="container-bilmare">
          <FadeIn>
            <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '80px', alignItems: 'flex-start', marginBottom: '64px' }} className="tier-layout">
              <div>
                <div className="overline fade-in-up" style={{ marginBottom: '16px' }}>Tier 2</div>
                <h2 style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(28px, 3.5vw, 44px)',
                  color: 'var(--text-dark)',
                  marginBottom: '20px',
                  lineHeight: 1.2,
                }}>
                  Full Accountable<br />Report Development
                </h2>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.8,
                  marginBottom: '28px',
                }}>
                  Tidak semua organisasi memiliki kapasitas internal untuk menyusun laporan. Agency umumnya menulis narasi terlebih dahulu, kemudian melampirkan data. Bilmare membangun struktur referensi sebelum satu kalimat pun ditulis.
                </p>

                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  fontWeight: 600,
                  color: 'var(--text-dark)',
                  lineHeight: 1.5,
                  marginBottom: '28px',
                }}>
                  Draft belum tersedia. Diperlukan penyusunan laporan dari awal dengan proses verifikasi data yang berjalan bersamaan dengan penulisan.
                </p>

                <div>
                  <div style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '16px',
                    paddingBottom: '12px',
                    borderBottom: '1px solid var(--line)',
                  }}>
                    Sesuai untuk
                  </div>
                  <ul style={{ listStyle: 'none' }}>
                    {['Calon IPO', 'Bisnis keluarga yang profesionalisasi tata kelola', 'Entitas dengan kewajiban pelaporan baru'].map((item) => (
                      <li key={item} style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                        color: 'var(--text-muted)',
                        paddingLeft: '16px',
                        borderLeft: '2px solid var(--mckinsey-blue)',
                        marginBottom: '12px',
                        lineHeight: 1.5,
                      }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <PlaceholderImage
                src="/images/service-tier2.jpg"
                alt="Full Accountable Report Development"
                className="photo-hero"
                style={{ alignSelf: 'stretch', minHeight: '400px' }}
              />
            </div>
          </FadeIn>

          {/* Process steps */}
          <FadeIn delay={0.1}>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '20px',
            }}>
              Proses Kerja
            </div>
            <div className="fade-in-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }} id="steps-grid">
              {tier2Steps.map((s, i) => (
                <div key={i} className="layer-step" style={{ borderLeft: '2px solid var(--line)' }}>
                  <div style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '48px',
                    fontWeight: 700,
                    color: 'var(--line)',
                    lineHeight: 1,
                    marginBottom: '16px',
                  }}>
                    {s.num}
                  </div>
                  <h4 style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: 'var(--text-dark)',
                    marginBottom: '8px',
                    lineHeight: 1.4,
                  }}>
                    {s.title}
                  </h4>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                    lineHeight: 1.7,
                  }}>
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <style>{`
          @media (max-width: 1024px) {
            #steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 640px) {
            #steps-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── ENTRY PRODUCT + CTA ─────────────────────────────────────── */}
      <section className="bg-dark wave-overlay section-pad">
        <div className="container-bilmare" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} id="entry-grid">
            <FadeIn>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <span className="overline-white">Entry Product — 2026</span>
                  <span className="start-badge">Mulai di sini</span>
                </div>
                <h2 style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  color: 'white',
                  marginBottom: '20px',
                  lineHeight: 1.15,
                }}>
                  PSPK Readiness Assessment
                </h2>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  color: 'rgba(255,255,255,0.65)',
                  lineHeight: 1.7,
                  marginBottom: '32px',
                  maxWidth: '480px',
                }}>
                  Peta gap kesiapan PSPK 1/2 dalam 2–3 minggu. Tidak perlu komitmen besar. Langkah pertama yang paling rasional untuk memahami posisi laporan Anda saat ini.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                  <Link to="/pendekatan" className="btn-primary">
                    Lihat pendekatan <ArrowRight size={15} />
                  </Link>
                  <Link to="/klien-kami" className="btn-secondary">
                    Profil klien
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="dark-card" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', padding: '40px' }}>
                <h3 style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '20px',
                  color: 'white',
                  marginBottom: '24px',
                }}>
                  Mencakup
                </h3>
                <ul style={{ listStyle: 'none', marginBottom: '32px' }}>
                  {[
                    'Gap analysis terhadap PSPK 1 & PSPK 2',
                    'Review konsistensi klaim vs laporan keuangan',
                    'Identifikasi risiko pengungkapan prioritas',
                    'Peta jalan menuju disclosure-ready',
                    'Laporan tertulis dalam 2–3 minggu',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px' }}>
                      <CheckCircle size={14} style={{ color: 'var(--mckinsey-blue)', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/tentang-kami"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Mulai Assessment
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

        <style>{`
          @media (max-width: 1024px) {
            #entry-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>
      </section>
    </div>
  );
}
