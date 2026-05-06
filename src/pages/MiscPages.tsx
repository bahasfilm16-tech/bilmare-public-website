import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import { FadeIn } from '../Layout';
import { motion } from 'motion/react';
import { ArrowRight, Eye, EyeOff } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SUPABASE_URL      = import.meta.env.VITE_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
const supabase          = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const PORTAL_TIM    = 'https://portal-tim.vercel.app/';
const PORTAL_CLIENT = 'https://portal-client-delta.vercel.app/';

// ─── Insight ──────────────────────────────────────────────────────────────────
export function Insight() {
  useScrollReveal();

  const articles = [
    {
      category: 'Panduan Praktis',
      title: 'Mempersiapkan Laporan Tahunan untuk Proses Assurance',
      desc: 'Sebagian besar pembengkakan biaya assurance bukan karena cakupan yang luas — melainkan karena data yang belum siap saat fieldwork dimulai.',
      time: '5 menit baca',
    },
    {
      category: 'Regulasi & OJK',
      title: 'Ketidaksesuaian yang Paling Sering Memicu Pertanyaan OJK',
      desc: 'Pola berulang dalam pengungkapan emiten dan cara mengantisipasinya sebelum laporan dipublikasikan.',
      time: '7 menit baca',
    },
    {
      category: 'Standar ESG',
      title: 'Perubahan Metodologi yang Tidak Diungkapkan',
      desc: 'Mengapa pergeseran definisi metrik antar periode menciptakan eksposur yang lebih besar dari yang disadari manajemen.',
      time: '6 menit baca',
    },
  ];

  return (
    <div style={{ background: 'white', color: 'var(--text-dark)', minHeight: '100vh' }}>

      {/* Header */}
      <section className="bg-dark section-pad" style={{ paddingTop: '140px' }}>
        <div className="container-bilmare">
          <FadeIn>
            <div className="overline-white fade-in-up" style={{ marginBottom: '20px' }}>Insight</div>
            <h1 style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(36px, 6vw, 64px)',
              color: 'white',
              maxWidth: '700px',
              lineHeight: 1.1,
              marginBottom: '20px',
            }}>
              Analisis pelaporan yang dapat langsung diterapkan.
            </h1>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '480px',
              lineHeight: 1.7,
            }}>
              Perspektif praktis dari lapangan — tentang standar, regulasi, dan risiko pengungkapan.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-light section-pad">
        <div className="container-bilmare">
          <div className="fade-in-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }} id="articles-grid">
            {articles.map((a, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div
                  style={{
                    background: 'white',
                    borderTop: '3px solid var(--mckinsey-blue)',
                    padding: '40px',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    transition: 'box-shadow 0.2s, transform 0.2s',
                  }}
                  whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}
                  transition={{ duration: 0.2 }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'flex-start' }}>
                    <span style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'var(--mckinsey-blue)',
                    }}>
                      {a.category}
                    </span>
                    <span style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '11px',
                      color: 'var(--text-muted)',
                    }}>
                      {a.time}
                    </span>
                  </div>
                  <h3 style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '22px',
                    color: 'var(--text-dark)',
                    marginBottom: '16px',
                    lineHeight: 1.3,
                    flex: 1,
                  }}>
                    {a.title}
                  </h3>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                    lineHeight: 1.7,
                    marginBottom: '24px',
                  }}>
                    {a.desc}
                  </p>
                  <span className="cta-link">
                    Baca selengkapnya →
                  </span>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 1024px) {
            #articles-grid { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 640px) {
            #articles-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* CTA */}
      <section className="bg-dark wave-overlay section-pad">
        <div className="container-bilmare" style={{ position: 'relative', zIndex: 1 }}>
          <FadeIn>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '40px' }}>
              <div>
                <div className="overline-white" style={{ marginBottom: '16px' }}>Siap memulai?</div>
                <h2 style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(24px, 4vw, 44px)',
                  color: 'white',
                  marginBottom: '12px',
                  lineHeight: 1.15,
                }}>
                  Siap memahami kondisi laporan Anda?
                </h2>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.7,
                }}>
                  Mulai dengan percakapan awal — tidak ada komitmen di tahap ini.
                </p>
              </div>
              <Link to="/layanan" className="btn-primary" style={{ flexShrink: 0 }}>
                Lihat Layanan <ArrowRight size={15} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

// ─── TentangKami ──────────────────────────────────────────────────────────────
export function TentangKami() {
  useScrollReveal();

  const values = [
    { title: 'BIL', full: 'Build Integrity in Layers', desc: 'Integritas pengungkapan dibangun melalui verifikasi berlapis — konsistensi data, keterlacakan klaim, dokumentasi metodologi.' },
    { title: 'MARE', full: 'Methodical Accuracy in Reporting Excellence', desc: 'Akurasi yang dapat dipertanggungjawabkan hanya dicapai melalui metodologi yang konsisten dan terdokumentasi.' },
  ];

  return (
    <div style={{ background: 'white', color: 'var(--text-dark)', minHeight: '100vh' }}>

      {/* Header */}
      <section className="bg-dark section-pad" style={{ paddingTop: '140px' }}>
        <div className="container-bilmare">
          <FadeIn>
            <div className="overline-white fade-in-up" style={{ marginBottom: '20px' }}>Tentang Kami</div>
            <h1 style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(36px, 6vw, 72px)',
              color: 'white',
              maxWidth: '700px',
              lineHeight: 1.1,
              marginBottom: '24px',
            }}>
              Satu celah yang spesifik.
            </h1>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '600px',
              lineHeight: 1.7,
            }}>
              Kami mengisi satu celah yang spesifik. Tidak ada pihak yang secara spesifik bertugas memastikan laporan memiliki keterlacakan dan konsistensi yang memadai — sebelum laporan naik ke publik.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Name meaning / Mission */}
      <section className="bg-white section-pad">
        <div className="container-bilmare">
          <FadeIn>
            <div className="fade-in-up" style={{ marginBottom: '56px' }}>
              <div className="overline" style={{ marginBottom: '16px' }}>Nama & Makna</div>
              <h2 style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(28px, 4vw, 44px)',
                color: 'var(--text-dark)',
                lineHeight: 1.2,
              }}>
                Di balik nama Bilmare.
              </h2>
            </div>
          </FadeIn>
          <div className="fade-in-up" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }} id="values-grid">
            {values.map((v, i) => (
              <motion.div
                key={i}
                style={{
                  padding: '56px 48px',
                  borderTop: '3px solid var(--mckinsey-blue)',
                  background: 'var(--off-white)',
                  transition: 'background 0.3s',
                }}
                whileHover={{ background: 'var(--deep-navy)' } as any}
                transition={{ duration: 0.3 }}
              >
                <div style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(48px, 8vw, 72px)',
                  fontWeight: 700,
                  color: 'var(--mckinsey-blue)',
                  lineHeight: 1,
                  marginBottom: '20px',
                }}>
                  {v.title}
                </div>
                <h3 style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: 'var(--text-dark)',
                  marginBottom: '16px',
                  lineHeight: 1.5,
                }}>
                  {v.full}
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.7,
                }}>
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            #values-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Positioning */}
      <section className="bg-light section-pad">
        <div className="container-bilmare">
          <FadeIn>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'flex-start' }} className="positioning-grid">
              <div>
                <div className="overline" style={{ marginBottom: '16px' }}>Posisi Bilmare</div>
                <h2 style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(28px, 3.5vw, 44px)',
                  color: 'var(--text-dark)',
                  marginBottom: '24px',
                  lineHeight: 1.2,
                }}>
                  Bukan assurance provider. Bukan agency desain.
                </h2>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.8,
                  marginBottom: '32px',
                }}>
                  Bilmare mengisi satu celah yang spesifik: memastikan setiap klaim dalam laporan Anda memiliki keterlacakan dan konsistensi yang memadai — sebelum laporan naik ke publik.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {['Verification-led', 'Pre-assurance specialist', 'Bukan agency kreatif', 'Bukan auditor'].map((tag) => (
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
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {[
                  { who: 'Agency kreatif', what: 'Menulis narasi dan mendesain laporan' },
                  { who: 'Bilmare', what: 'Memverifikasi setiap klaim memiliki keterlacakan', highlight: true },
                  { who: 'Assurance provider', what: 'Memberikan opini independen atas laporan' },
                  { who: 'OJK / Regulator', what: 'Memeriksa kepatuhan pengungkapan publik' },
                ].map((row) => (
                  <div
                    key={row.who}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '18px 24px',
                      background: row.highlight ? 'var(--deep-navy)' : 'white',
                      borderLeft: `3px solid ${row.highlight ? 'var(--mckinsey-blue)' : 'transparent'}`,
                    }}
                  >
                    <span style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      fontWeight: 700,
                      color: row.highlight ? 'white' : 'var(--text-dark)',
                    }}>
                      {row.who}
                    </span>
                    <span style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      color: row.highlight ? 'rgba(255,255,255,0.7)' : 'var(--text-muted)',
                    }}>
                      {row.what}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        <style>{`
          @media (max-width: 1024px) {
            .positioning-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          }
        `}</style>
      </section>

      {/* CTA */}
      <section className="bg-dark wave-overlay section-pad">
        <div className="container-bilmare" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '40px' }}>
            <FadeIn>
              <div>
                <div className="overline-white" style={{ marginBottom: '16px' }}>Cara Kerja Kami</div>
                <h2 style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(24px, 4vw, 44px)',
                  color: 'white',
                  marginBottom: '12px',
                  lineHeight: 1.15,
                }}>
                  Kenali lebih jauh cara kerja kami.
                </h2>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  color: 'rgba(255,255,255,0.6)',
                  maxWidth: '480px',
                  lineHeight: 1.7,
                }}>
                  Lihat metodologi dan layanan yang Bilmare tawarkan untuk laporan Anda.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', flexShrink: 0 }}>
                <Link to="/layanan" className="btn-primary">
                  Lihat Layanan <ArrowRight size={15} />
                </Link>
                <Link to="/pendekatan" className="btn-secondary">
                  Metodologi
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── Login ────────────────────────────────────────────────────────────────────
export function Login() {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');
  const [loading, setLoading]   = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { data: authData, error: authError } =
        await supabase.auth.signInWithPassword({ email, password });

      if (authError || !authData.user || !authData.session) {
        setError('Email atau password salah. Silakan coba lagi.');
        setLoading(false);
        return;
      }

      const { access_token, refresh_token } = authData.session;

      const { data: teamMember } = await supabase
        .from('bilmare_team_members')
        .select('id')
        .eq('email', email)
        .maybeSingle();

      if (teamMember) {
        window.location.href = `${PORTAL_TIM}#access_token=${access_token}&refresh_token=${refresh_token}`;
        return;
      }

      const { data: clientUser } = await supabase
        .from('client_users')
        .select('id')
        .eq('email', email)
        .maybeSingle();

      if (clientUser) {
        window.location.href = `${PORTAL_CLIENT}?access_token=${access_token}&refresh_token=${refresh_token}`;
        return;
      }

      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', authData.user.id)
        .maybeSingle();

      if (profile?.role === 'internal' || profile?.role === 'admin' || profile?.role === 'team') {
        window.location.href = `${PORTAL_TIM}#access_token=${access_token}&refresh_token=${refresh_token}`;
      } else {
        window.location.href = `${PORTAL_CLIENT}?access_token=${access_token}&refresh_token=${refresh_token}`;
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Terjadi kesalahan. Silakan coba lagi.');
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      background: 'white',
      color: 'var(--text-dark)',
    }}>
      {/* Left panel — dark brand side */}
      <div style={{
        display: 'none',
        width: '50%',
        background: 'var(--deep-navy)',
        position: 'relative',
        overflow: 'hidden',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '64px',
      }} className="login-left">
        <div className="glow-blob" style={{ top: '-100px', left: '-80px', width: '400px', height: '400px' }} />
        <div className="glow-blob" style={{ bottom: '-80px', right: '-60px', width: '320px', height: '320px' }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            fontFamily: 'Georgia, serif',
            fontSize: '24px',
            fontWeight: 700,
            color: 'white',
            marginBottom: '64px',
          }}>
            Bilmare
          </div>
          <div className="overline-white" style={{ marginBottom: '20px' }}>Portal Akses</div>
          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(28px, 3.5vw, 44px)',
            color: 'white',
            lineHeight: 1.2,
            marginBottom: '20px',
          }}>
            Portal Klien &<br />Tim Bilmare
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.7,
            maxWidth: '340px',
          }}>
            Masuk untuk mengakses laporan, status engagement, dan dokumentasi verifikasi Anda.
          </p>
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          {[
            { label: 'Keamanan', value: 'End-to-end encrypted' },
            { label: 'Akses', value: 'Role-based portal routing' },
            { label: 'Data', value: 'Diproteksi Supabase RLS' },
          ].map((item) => (
            <div key={item.label} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              paddingTop: '16px',
              marginTop: '16px',
            }}>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
                {item.label}
              </span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.65)' }}>
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right panel — form */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 40px',
      }}>
        <div style={{ width: '100%', maxWidth: '360px' }}>

          {/* Mobile wordmark */}
          <div className="login-mobile-logo" style={{ marginBottom: '48px' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <span style={{
                fontFamily: 'Georgia, serif',
                fontSize: '22px',
                fontWeight: 700,
                color: 'var(--deep-navy)',
              }}>
                Bilmare
              </span>
            </Link>
          </div>

          <div className="overline" style={{ marginBottom: '12px' }}>Portal Login</div>
          <h1 style={{
            fontFamily: 'Georgia, serif',
            fontSize: '32px',
            color: 'var(--text-dark)',
            marginBottom: '8px',
            lineHeight: 1.2,
          }}>
            Masuk ke akun Anda
          </h1>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '15px',
            color: 'var(--text-muted)',
            marginBottom: '40px',
            lineHeight: 1.5,
          }}>
            Portal akan diarahkan sesuai peran Anda.
          </p>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={handleLogin}>

            {/* Email */}
            <div>
              <label className="mckinsey-form-label">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                className="mckinsey-form-field"
                placeholder="nama@perusahaan.com"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mckinsey-form-label">Password</label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPass ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                  className="mckinsey-form-field"
                  placeholder="••••••••"
                  style={{ paddingRight: '44px' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  aria-label="Toggle password visibility"
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  padding: '12px 16px',
                  background: '#fef2f2',
                  border: '1px solid #fecaca',
                  borderLeft: '3px solid #ef4444',
                }}
              >
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#dc2626' }}>{error}</p>
              </motion.div>
            )}

            {/* Forgot */}
            <div style={{ textAlign: 'right' }}>
              <a href="#" style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                fontWeight: 600,
                color: 'var(--mckinsey-blue)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}>
                Lupa password?
              </a>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="btn-primary"
              style={{
                width: '100%',
                justifyContent: 'center',
                padding: '16px 28px',
                opacity: loading ? 0.5 : 1,
                cursor: loading ? 'not-allowed' : 'pointer',
                marginTop: '8px',
              }}
            >
              {loading ? (
                <>
                  <svg className="animate-spin" style={{ height: '16px', width: '16px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Memverifikasi...
                </>
              ) : 'Masuk'}
            </button>
          </form>

          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            color: 'var(--text-muted)',
            textAlign: 'center',
            marginTop: '32px',
          }}>
            Belum memiliki akses?{' '}
            <Link to="/layanan" style={{
              color: 'var(--mckinsey-blue)',
              fontWeight: 600,
              textDecoration: 'none',
            }}>
              Hubungi tim Bilmare
            </Link>
          </p>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .login-left { display: flex !important; }
          .login-mobile-logo { display: none !important; }
        }
      `}</style>
    </div>
  );
}
