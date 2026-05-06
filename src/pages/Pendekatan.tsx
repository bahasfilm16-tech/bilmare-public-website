import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../Layout';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { PlaceholderImage } from '../components/PlaceholderImage';

export default function Pendekatan() {
  useScrollReveal();
  const [activePhase, setActivePhase] = useState(2);

  const phases = [
    {
      id: 1,
      title: 'Penyusunan Laporan',
      actor: 'Klien / Konsultan',
      description: 'Pengumpulan data mentah, penulisan narasi, dan desain awal laporan tahunan atau keberlanjutan.',
      bilmareRole: false,
      details: ['Pengumpulan data ESG & Finansial', 'Drafting narasi laporan', 'Desain layout awal'],
    },
    {
      id: 2,
      title: 'Pre-Assurance Review',
      actor: 'BILMARE',
      description: 'Verifikasi independen terhadap draf laporan sebelum diserahkan kepada auditor eksternal. Memastikan setiap klaim memiliki bukti yang dapat dilacak.',
      bilmareRole: true,
      details: ['Cross-referencing klaim vs sumber', 'Uji konsistensi data antar bab', 'Penyusunan audit trail matrix'],
    },
    {
      id: 3,
      title: 'Proses Assurance',
      actor: 'Auditor Eksternal',
      description: 'Pemeriksaan resmi oleh pihak ketiga independen untuk memberikan opini atau kesimpulan assurance.',
      bilmareRole: false,
      details: ['Fieldwork lebih cepat & efisien', 'Minim temuan / revisi', 'Biaya assurance terkendali'],
    },
    {
      id: 4,
      title: 'Publikasi',
      actor: 'Klien',
      description: 'Rilis laporan ke publik, regulator (OJK), dan pemangku kepentingan dengan tingkat kepercayaan penuh.',
      bilmareRole: false,
      details: ['Kepatuhan regulasi terjamin', 'Kepercayaan investor meningkat', 'Bebas dari risiko greenwashing'],
    },
  ];

  const execSteps = [
    { num: '01', title: 'Inventarisasi dokumen sumber', desc: 'Laporan Keuangan Audited, laporan operasional, database ESG, notulen rapat Direksi dikatalogkan dan dikontrol versinya.' },
    { num: '02', title: 'Pembangunan Cross-Reference Matrix', desc: 'Sebelum satu kalimat pun ditulis atau diperiksa, setiap klaim material dipetakan ke dokumen sumbernya.' },
    { num: '03', title: 'Eksekusi dengan dokumentasi bersamaan', desc: 'Setiap kalimat yang ditulis langsung didokumentasikan ke sumbernya. Tidak ada klaim tanpa referensi.' },
    { num: '04', title: 'Review berlapis dan serah terima', desc: 'Laporan melewati review internal. Laporan diserahkan bersama paket dokumentasi lengkap.' },
  ];

  const activePhaseData = phases.find((p) => p.id === activePhase)!;

  return (
    <div style={{ background: 'white', color: 'var(--text-dark)', minHeight: '100vh' }}>

      {/* ── HERO (photo background) ─────────────────────────────────── */}
      <section className="photo-section-bg" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <img
          src="/images/methodology-bg.jpg"
          alt="Metodologi Bilmare"
          className="photo-bg-img"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
        <div className="photo-bg-overlay" />
        <div className="photo-section-content container-bilmare section-pad" style={{ paddingTop: '140px' }}>
          <FadeIn>
            <div className="overline-white fade-in-up" style={{ marginBottom: '20px' }}>Pendekatan</div>
            <h1 style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(36px, 6vw, 72px)',
              color: 'white',
              maxWidth: '800px',
              lineHeight: 1.1,
              marginBottom: '24px',
            }}>
              Verifikasi sebelum narasi.
            </h1>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '560px',
              lineHeight: 1.7,
            }}>
              Verifikasi data mendahului penulisan narasi — dan dokumentasi berjalan bersamaan dengan keduanya.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── WORKFLOW STEPPER ─────────────────────────────────────────── */}
      <section className="bg-white section-pad">
        <div className="container-bilmare">
          <FadeIn>
            <div className="fade-in-up" style={{ marginBottom: '48px' }}>
              <div className="overline" style={{ marginBottom: '16px' }}>Siklus Pelaporan</div>
              <h2 style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(28px, 4vw, 44px)',
                color: 'var(--text-dark)',
                marginBottom: '12px',
                lineHeight: 1.2,
              }}>
                Di mana Bilmare masuk.
              </h2>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                color: 'var(--text-muted)',
                maxWidth: '560px',
                lineHeight: 1.7,
              }}>
                Pahami peran Bilmare dalam siklus pelaporan — sebelum proses audit resmi dimulai.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div style={{ display: 'flex', gap: '24px' }} className="stepper-layout">
              {/* Phase tabs */}
              <div style={{ width: '40%', display: 'flex', flexDirection: 'column', gap: '8px' }} className="stepper-tabs">
                {phases.map((phase) => (
                  <button
                    key={phase.id}
                    onClick={() => setActivePhase(phase.id)}
                    style={{
                      textAlign: 'left',
                      padding: '20px 24px',
                      border: '1px solid',
                      borderColor: activePhase === phase.id
                        ? (phase.bilmareRole ? 'var(--deep-navy)' : 'var(--line)')
                        : 'var(--line)',
                      background: activePhase === phase.id
                        ? (phase.bilmareRole ? 'var(--deep-navy)' : 'white')
                        : 'var(--off-white)',
                      cursor: 'pointer',
                      transition: 'all 0.25s',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '10px',
                        fontWeight: 600,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: activePhase === phase.id && phase.bilmareRole ? 'rgba(255,255,255,0.5)' : 'var(--text-muted)',
                      }}>
                        Fase 0{phase.id}
                      </span>
                      {phase.bilmareRole && (
                        <span style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '10px',
                          fontWeight: 700,
                          padding: '3px 10px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          background: activePhase === phase.id ? 'var(--mckinsey-blue)' : 'rgba(34,81,255,0.1)',
                          color: activePhase === phase.id ? 'white' : 'var(--mckinsey-blue)',
                        }}>
                          Peran Kami
                        </span>
                      )}
                    </div>
                    <h3 style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      fontWeight: 600,
                      color: activePhase === phase.id && phase.bilmareRole ? 'white' : activePhase === phase.id ? 'var(--text-dark)' : 'var(--text-muted)',
                      transition: 'color 0.2s',
                    }}>
                      {phase.title}
                    </h3>
                    <p style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '12px',
                      color: activePhase === phase.id && phase.bilmareRole ? 'rgba(255,255,255,0.5)' : 'var(--text-muted)',
                      marginTop: '4px',
                    }}>
                      {phase.actor}
                    </p>
                  </button>
                ))}
              </div>

              {/* Active phase detail */}
              <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePhase}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      padding: '48px',
                      minHeight: '380px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      position: 'relative',
                      overflow: 'hidden',
                      background: activePhaseData.bilmareRole ? 'var(--deep-navy)' : 'white',
                      border: `1px solid ${activePhaseData.bilmareRole ? 'transparent' : 'var(--line)'}`,
                    }}
                  >
                    {activePhaseData.bilmareRole && (
                      <div className="glow-blob" style={{ right: '-80px', top: '-80px', width: '300px', height: '300px' }} />
                    )}

                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                        {activePhaseData.bilmareRole ? (
                          <div style={{
                            width: '40px', height: '40px',
                            background: 'rgba(34,81,255,0.2)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                          }}>
                            <ShieldCheck size={20} color="white" />
                          </div>
                        ) : (
                          <div style={{
                            width: '40px', height: '40px',
                            border: '1px solid var(--line)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontFamily: 'Georgia, serif',
                            fontSize: '16px',
                            fontWeight: 700,
                            color: 'var(--text-muted)',
                          }}>
                            {activePhaseData.id}
                          </div>
                        )}
                        <span style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '11px',
                          fontWeight: 600,
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          color: activePhaseData.bilmareRole ? 'rgba(255,255,255,0.5)' : 'var(--text-muted)',
                        }}>
                          {activePhaseData.actor}
                        </span>
                      </div>

                      <h3 style={{
                        fontFamily: 'Georgia, serif',
                        fontSize: 'clamp(24px, 3vw, 36px)',
                        fontWeight: 700,
                        color: activePhaseData.bilmareRole ? 'white' : 'var(--text-dark)',
                        marginBottom: '16px',
                        lineHeight: 1.2,
                      }}>
                        {activePhaseData.title}
                      </h3>

                      <p style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '15px',
                        color: activePhaseData.bilmareRole ? 'rgba(255,255,255,0.65)' : 'var(--text-muted)',
                        lineHeight: 1.7,
                        marginBottom: '32px',
                      }}>
                        {activePhaseData.description}
                      </p>

                      <div>
                        <div style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '10px',
                          fontWeight: 600,
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                          color: activePhaseData.bilmareRole ? 'rgba(255,255,255,0.35)' : 'var(--text-muted)',
                          marginBottom: '12px',
                        }}>
                          Aktivitas Kunci
                        </div>
                        {activePhaseData.details.map((detail, idx) => (
                          <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '10px' }}>
                            <CheckCircle2 style={{
                              width: '16px', height: '16px', flexShrink: 0, marginTop: '2px',
                              color: activePhaseData.bilmareRole ? 'var(--mckinsey-blue)' : 'var(--line)',
                            }} />
                            <span style={{
                              fontFamily: 'Inter, sans-serif',
                              fontSize: '14px',
                              color: activePhaseData.bilmareRole ? 'rgba(255,255,255,0.75)' : 'var(--text-muted)',
                            }}>
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Decorative phase number */}
                    <div style={{
                      position: 'absolute',
                      right: '-16px',
                      bottom: '-40px',
                      fontFamily: 'Georgia, serif',
                      fontSize: '160px',
                      fontWeight: 700,
                      lineHeight: 1,
                      pointerEvents: 'none',
                      userSelect: 'none',
                      color: activePhaseData.bilmareRole ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
                    }}>
                      0{activePhaseData.id}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </FadeIn>
        </div>

        <style>{`
          @media (max-width: 1024px) {
            .stepper-layout { flex-direction: column !important; }
            .stepper-tabs { width: 100% !important; }
          }
        `}</style>
      </section>

      {/* ── EXECUTION METHODOLOGY ─────────────────────────────────── */}
      <section className="bg-light section-pad">
        <div className="container-bilmare">
          <FadeIn>
            <div className="fade-in-up" style={{ marginBottom: '48px' }}>
              <div className="overline" style={{ marginBottom: '16px' }}>Metodologi Eksekusi</div>
              <h2 style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(28px, 4vw, 44px)',
                color: 'var(--text-dark)',
                lineHeight: 1.2,
              }}>
                Empat langkah. Satu output.
              </h2>
            </div>
          </FadeIn>

          <div className="fade-in-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }} id="exec-grid">
            {execSteps.map((s, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="layer-step" style={{ borderLeft: '2px solid var(--line)' }}>
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
                  <h3 style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '17px',
                    fontWeight: 600,
                    color: 'var(--text-dark)',
                    marginBottom: '12px',
                    lineHeight: 1.4,
                  }}>
                    {s.title}
                  </h3>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                    lineHeight: 1.7,
                  }}>
                    {s.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 1024px) {
            #exec-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 640px) {
            #exec-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── CROSS-REFERENCE TABLE ─────────────────────────────────── */}
      <section className="bg-white section-pad">
        <div className="container-bilmare">
          <FadeIn>
            <div className="fade-in-up" style={{ marginBottom: '40px' }}>
              <div className="overline" style={{ marginBottom: '16px' }}>Contoh Output</div>
              <h2 style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(24px, 3.5vw, 40px)',
                color: 'var(--text-dark)',
                lineHeight: 1.2,
              }}>
                Cross-Reference Matrix — Contoh entri
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div style={{ border: '1px solid var(--line)', overflow: 'hidden' }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {[
                      {
                        label: 'Klaim',
                        value: '"Pendapatan konsolidasi meningkat 23% menjadi Rp4,2 triliun pada tahun 2024."',
                        bold: true,
                      },
                      {
                        label: 'Dokumen sumber',
                        value: 'Laporan Keuangan Audited 2024 — hal. 12, Laporan Laba Rugi Konsolidasi',
                      },
                      {
                        label: 'Verifikasi silang',
                        value: 'Dikonfirmasi terhadap Catatan Atas Laporan Keuangan hal. 34 dan ringkasan eksekutif hal. 4',
                      },
                      {
                        label: 'Time-series',
                        value: '2023: Rp3,4 triliun (LK Audited 2023 hal. 11) — definisi dan lingkup konsolidasi identik',
                      },
                    ].map((row, i) => (
                      <tr key={i} style={{ borderBottom: i < 3 ? '1px solid var(--line)' : 'none' }}>
                        <th style={{
                          padding: '20px 28px',
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '11px',
                          fontWeight: 600,
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          color: 'var(--text-muted)',
                          width: '160px',
                          textAlign: 'left',
                          verticalAlign: 'top',
                          background: 'var(--off-white)',
                        }}>
                          {row.label}
                        </th>
                        <td style={{
                          padding: '20px 28px',
                          fontFamily: row.bold ? 'Georgia, serif' : 'Inter, sans-serif',
                          fontSize: row.bold ? '18px' : '15px',
                          fontWeight: row.bold ? 600 : 400,
                          color: row.bold ? 'var(--text-dark)' : 'var(--text-muted)',
                          lineHeight: 1.6,
                          background: 'white',
                        }}>
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className="bg-dark wave-overlay section-pad">
        <div className="container-bilmare" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '40px' }}>
            <FadeIn>
              <div>
                <div className="overline-white" style={{ marginBottom: '16px' }}>Siap memulai?</div>
                <h2 style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(24px, 4vw, 44px)',
                  color: 'white',
                  marginBottom: '16px',
                  lineHeight: 1.15,
                }}>
                  Siap melihat kondisi laporan Anda?
                </h2>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '17px',
                  color: 'rgba(255,255,255,0.6)',
                  maxWidth: '480px',
                  lineHeight: 1.7,
                }}>
                  Mulai dengan PSPK Readiness Assessment. Tidak ada komitmen di tahap ini.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', flexShrink: 0 }}>
                <Link to="/layanan" className="btn-primary">
                  Lihat Layanan <ArrowRight size={15} />
                </Link>
                <Link to="/klien-kami" className="btn-secondary">
                  Profil Klien
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
