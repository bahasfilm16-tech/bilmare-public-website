import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '../Layout';
import { motion, AnimatePresence } from 'motion/react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const clients = [
  {
    title: 'Perusahaan Terbuka',
    tag: 'Emiten OJK',
    desc: 'Emiten yang menghadapi kewajiban pengungkapan berkala kepada OJK dan pasar modal, dengan konsekuensi regulatori atas ketidaksesuaian pelaporan.',
    exposure: 'Ketidaksesuaian angka antara Laporan Tahunan dan Laporan Keuangan Audited. Perubahan metodologi metrik ESG antar periode yang tidak diungkapkan.',
    needs: ['Verifikasi silang lintas dokumen', 'Konsistensi time-series metrik', 'Disclosure Risk Register', 'Pre-assurance readiness'],
  },
  {
    title: 'Calon IPO',
    tag: 'Pre-IPO',
    desc: 'Perusahaan yang mempersiapkan penawaran umum perdana dan untuk pertama kali menyusun laporan publik dalam konteks due diligence investor institusional.',
    exposure: 'Laporan publik pertama yang disusun tanpa verifikasi silang terstruktur. Klaim pencapaian operasional yang tidak dapat ditelusuri ke dokumen sumber.',
    needs: ['Pembangunan audit trail dari nol', 'Dokumentasi metodologi data', 'Cross-Reference Matrix lengkap', 'IR FAQ Databook'],
  },
  {
    title: 'Entitas Diregulasi',
    tag: 'Perbankan & Utilitas',
    desc: 'Perbankan, asuransi, dan utilitas yang menghadapi persyaratan transparansi ESG yang meningkat dari regulator sektor dan lembaga rating.',
    exposure: 'Data emisi dan konsumsi energi yang dilaporkan dengan metodologi berbeda antar periode. Ketidaksesuaian metrik ESG dengan laporan regulator sektor.',
    needs: ['Konsistensi metodologi GHG', 'Alignment regulasi multi-sektor', 'Verifikasi data kuantitatif', 'Dokumentasi asumsi'],
  },
  {
    title: 'Bisnis Keluarga',
    tag: 'Profesionalisasi Tata Kelola',
    desc: 'Perusahaan yang bertransisi dari struktur tata kelola keluarga ke standar tata kelola korporasi yang lebih formal.',
    exposure: 'Tidak adanya dokumentasi metodologi untuk data yang dilaporkan. Data historis tanpa definisi yang konsisten.',
    needs: ['Pembangunan sistem dokumentasi', 'Definisi metrik yang konsisten', 'Full report development', 'Pelatihan tim internal'],
  },
];

export default function KlienKami() {
  useScrollReveal();
  const [active, setActive] = useState(0);
  const activeClient = clients[active];

  return (
    <div style={{ background: 'white', color: 'var(--text-dark)', minHeight: '100vh' }}>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="bg-dark section-pad" style={{ paddingTop: '140px' }}>
        <div className="container-bilmare">
          <FadeIn>
            <div className="overline-white fade-in-up" style={{ marginBottom: '20px' }}>Klien Kami</div>
            <h1 style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(36px, 6vw, 72px)',
              color: 'white',
              maxWidth: '800px',
              lineHeight: 1.1,
              marginBottom: '24px',
            }}>
              Bukan berdasarkan sektor.<br />Berdasarkan kebutuhan.
            </h1>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '600px',
              lineHeight: 1.7,
            }}>
              Bilmare bekerja dengan perusahaan di mana kualitas pengungkapan berdampak langsung pada hasil bisnis — berdasarkan tahap dan struktur tata kelola, bukan industri.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── INTERACTIVE CLIENT GRID ─────────────────────────────────── */}
      <section className="bg-light section-pad">
        <div className="container-bilmare">
          <FadeIn>
            <div style={{ display: 'flex', gap: '24px' }} className="client-stepper">
              {/* Tabs */}
              <div style={{ width: '35%', display: 'flex', flexDirection: 'column', gap: '2px' }} className="client-tabs">
                {clients.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    style={{
                      textAlign: 'left',
                      padding: '20px 24px',
                      border: 'none',
                      background: active === i ? 'var(--deep-navy)' : 'white',
                      cursor: 'pointer',
                      transition: 'all 0.25s',
                      borderLeft: `3px solid ${active === i ? 'var(--mckinsey-blue)' : 'transparent'}`,
                    }}
                  >
                    <span style={{
                      display: 'block',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: active === i ? 'rgba(255,255,255,0.45)' : 'var(--mckinsey-blue)',
                      marginBottom: '6px',
                    }}>
                      {c.tag}
                    </span>
                    <h3 style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      fontWeight: 600,
                      color: active === i ? 'white' : 'var(--text-dark)',
                      transition: 'color 0.2s',
                    }}>
                      {c.title}
                    </h3>
                  </button>
                ))}
              </div>

              {/* Detail panel */}
              <div style={{ flex: 1 }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      background: 'white',
                      border: '1px solid var(--line)',
                      borderTop: '3px solid var(--mckinsey-blue)',
                      padding: '40px 48px',
                      height: '100%',
                    }}
                  >
                    <span style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--mckinsey-blue)',
                      display: 'block',
                      marginBottom: '16px',
                    }}>
                      {activeClient.tag}
                    </span>
                    <h2 style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: 'clamp(24px, 3vw, 36px)',
                      color: 'var(--text-dark)',
                      marginBottom: '16px',
                      lineHeight: 1.2,
                    }}>
                      {activeClient.title}
                    </h2>
                    <p style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      color: 'var(--text-muted)',
                      lineHeight: 1.7,
                      marginBottom: '32px',
                    }}>
                      {activeClient.desc}
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }} className="client-detail-cols">
                      <div>
                        <div style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '10px',
                          fontWeight: 600,
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                          color: 'var(--text-muted)',
                          marginBottom: '12px',
                        }}>
                          Eksposur Pelaporan
                        </div>
                        <p style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '14px',
                          color: 'var(--text-muted)',
                          lineHeight: 1.7,
                        }}>
                          {activeClient.exposure}
                        </p>
                      </div>
                      <div>
                        <div style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '10px',
                          fontWeight: 600,
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                          color: 'var(--text-muted)',
                          marginBottom: '12px',
                        }}>
                          Kebutuhan Utama
                        </div>
                        <ul style={{ listStyle: 'none' }}>
                          {activeClient.needs.map((n) => (
                            <li key={n} style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '10px',
                              marginBottom: '10px',
                              fontFamily: 'Inter, sans-serif',
                              fontSize: '14px',
                              color: 'var(--text-muted)',
                            }}>
                              <span style={{
                                width: '4px', height: '4px', borderRadius: '50%',
                                background: 'var(--mckinsey-blue)',
                                flexShrink: 0, marginTop: '8px',
                              }} />
                              {n}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </FadeIn>
        </div>

        <style>{`
          @media (max-width: 1024px) {
            .client-stepper { flex-direction: column !important; }
            .client-tabs { width: 100% !important; flex-direction: row !important; flex-wrap: wrap !important; gap: 2px !important; }
            .client-tabs button { flex: 1 1 calc(50% - 1px) !important; }
            .client-detail-cols { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 640px) {
            .client-tabs button { flex: 1 1 100% !important; }
          }
        `}</style>
      </section>

      {/* ── ALL CLIENTS GRID ─────────────────────────────────────────── */}
      <section className="bg-white section-pad">
        <div className="container-bilmare">
          <FadeIn>
            <div className="fade-in-up" style={{ marginBottom: '56px' }}>
              <div className="overline" style={{ marginBottom: '16px' }}>Semua Profil</div>
              <h2 style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(28px, 4vw, 44px)',
                color: 'var(--text-dark)',
                lineHeight: 1.2,
              }}>
                Seluruh profil klien.
              </h2>
            </div>
          </FadeIn>

          <div className="fade-in-up" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }} id="all-clients-grid">
            {clients.map((c, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <motion.div
                  style={{
                    background: 'var(--off-white)',
                    padding: '40px',
                    borderTop: '3px solid transparent',
                    transition: 'all 0.3s',
                    cursor: 'default',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  whileHover={{ borderTopColor: 'var(--mckinsey-blue)', background: 'var(--deep-navy)' } as any}
                  transition={{ duration: 0.3 }}
                >
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--mckinsey-blue)',
                    display: 'block',
                    marginBottom: '20px',
                  }}>
                    {c.tag}
                  </span>
                  <h3 style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '24px',
                    color: 'var(--text-dark)',
                    marginBottom: '16px',
                    lineHeight: 1.2,
                  }}>
                    {c.title}
                  </h3>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                    lineHeight: 1.7,
                    marginBottom: '24px',
                    flex: 1,
                  }}>
                    {c.desc}
                  </p>
                  <div style={{ borderTop: '1px solid var(--line)', paddingTop: '24px' }}>
                    <div style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '10px',
                      fontWeight: 600,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      marginBottom: '10px',
                    }}>
                      Eksposur Pelaporan
                    </div>
                    <p style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      color: 'var(--text-muted)',
                      lineHeight: 1.6,
                    }}>
                      {c.exposure}
                    </p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            #all-clients-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className="bg-dark wave-overlay section-pad">
        <div className="container-bilmare" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '40px' }}>
            <FadeIn>
              <div>
                <div className="overline-white" style={{ marginBottom: '16px' }}>Mulai sekarang</div>
                <h2 style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(24px, 4vw, 44px)',
                  color: 'white',
                  marginBottom: '16px',
                  lineHeight: 1.15,
                }}>
                  Kenali posisi laporan Anda.
                </h2>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  color: 'rgba(255,255,255,0.6)',
                  maxWidth: '480px',
                  lineHeight: 1.7,
                }}>
                  Mulai dengan percakapan awal. Tidak ada komitmen, hanya pemetaan kondisi laporan Anda saat ini.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', flexShrink: 0 }}>
                <Link to="/layanan" className="btn-primary">
                  Lihat Layanan <ArrowRight size={15} />
                </Link>
                <Link to="/pendekatan" className="btn-secondary">
                  Metodologi Kami
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
