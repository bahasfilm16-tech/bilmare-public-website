import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import { FadeIn } from '../Layout';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Eye, EyeOff } from 'lucide-react';

const SUPABASE_URL      = import.meta.env.VITE_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
const supabase          = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const PORTAL_TIM    = 'https://portal-tim.vercel.app/';
const PORTAL_CLIENT = 'https://portal-client-delta.vercel.app/';

// ─── Insight ──────────────────────────────────────────────────────────────────
export function Insight() {
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
    <div className="bg-[#FFFFFC] text-[#1C277B] min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6 md:px-10 bg-[#FFFFFC]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="mesh-1 absolute -top-40 -left-32 w-[600px] h-[600px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(35,76,249,0.1) 0%, transparent 70%)' }} />
          <div className="mesh-3 absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(223,231,247,0.9) 0%, transparent 70%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <FadeIn>
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#234CF9] bg-[#234CF9]/8 border border-[#234CF9]/15 px-4 py-2 rounded-full mb-6">
              Insight
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-[#1C277B] mb-5 max-w-3xl">
              Analisis pelaporan yang dapat langsung diterapkan.
            </h1>
            <p className="text-xl text-[#1C277B]/55 font-normal max-w-xl leading-relaxed">
              Perspektif praktis dari lapangan — tentang standar, regulasi, dan risiko pengungkapan.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 px-6 md:px-10 bg-[#DFE7F7]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {articles.map((a, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div
                  className="bg-white rounded-2xl p-7 h-full flex flex-col group cursor-pointer border border-[#1C277B]/5 hover:bg-[#1C277B] transition-colors duration-400"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#234CF9] group-hover:text-white/40 transition-colors">
                      {a.category}
                    </span>
                    <span className="text-[10px] font-medium text-[#1C277B]/30 group-hover:text-white/30 transition-colors">
                      {a.time}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-[#1C277B] group-hover:text-white mb-4 transition-colors leading-[1.25] flex-1">
                    {a.title}
                  </h3>
                  <p className="text-sm text-[#1C277B]/55 group-hover:text-white/55 font-normal leading-relaxed mb-6 transition-colors">
                    {a.desc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#234CF9] group-hover:text-white transition-colors mt-auto">
                    Baca selengkapnya <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-10 bg-[#FFFFFC]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="bg-[#1C277B] rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden">
              <div
                className="absolute -right-10 -top-10 w-[300px] h-[300px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(35,76,249,0.3) 0%, transparent 70%)' }}
              />
              <div className="relative">
                <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-3 leading-[1.2]">
                  Siap memahami kondisi laporan Anda?
                </h2>
                <p className="text-white/50 text-base font-normal">
                  Mulai dengan percakapan awal — tidak ada komitmen di tahap ini.
                </p>
              </div>
              <Link
                to="/layanan"
                className="relative inline-flex items-center gap-2 bg-white text-[#1C277B] px-7 py-3.5 rounded-full text-sm font-bold hover:bg-[#DFE7F7] transition-colors shrink-0 group"
              >
                Lihat Layanan
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
  const values = [
    { title: 'BIL', full: 'Build Integrity in Layers', desc: 'Integritas pengungkapan dibangun melalui verifikasi berlapis — konsistensi data, keterlacakan klaim, dokumentasi metodologi.' },
    { title: 'MARE', full: 'Methodical Accuracy in Reporting Excellence', desc: 'Akurasi yang dapat dipertanggungjawabkan hanya dicapai melalui metodologi yang konsisten dan terdokumentasi.' },
  ];

  return (
    <div className="bg-[#FFFFFC] text-[#1C277B] min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6 md:px-10 bg-[#FFFFFC]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="mesh-1 absolute -top-40 -left-32 w-[600px] h-[600px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(35,76,249,0.1) 0%, transparent 70%)' }} />
          <div className="mesh-3 absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(223,231,247,0.9) 0%, transparent 70%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <FadeIn>
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#234CF9] bg-[#234CF9]/8 border border-[#234CF9]/15 px-4 py-2 rounded-full mb-6">
              Tentang Kami
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-[#1C277B] mb-6 max-w-4xl">
              Satu celah yang spesifik.
            </h1>
            <p className="text-xl text-[#1C277B]/55 font-normal max-w-2xl leading-relaxed">
              Kami mengisi satu celah yang spesifik. Tidak ada pihak yang secara spesifik bertugas memastikan laporan memiliki keterlacakan dan konsistensi yang memadai — sebelum laporan naik ke publik.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#DFE7F7]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-2xl p-10 group hover:bg-[#1C277B] transition-colors duration-400 border border-[#1C277B]/5"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="text-6xl font-black tracking-tight text-[#234CF9] group-hover:text-white transition-colors mb-5 leading-none">
                    {v.title}
                  </div>
                  <h3 className="text-base font-bold text-[#1C277B] group-hover:text-white mb-4 tracking-tight transition-colors">
                    {v.full}
                  </h3>
                  <p className="text-[#1C277B]/60 group-hover:text-white/60 font-normal leading-relaxed text-sm transition-colors">
                    {v.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#FFFFFC]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#234CF9] bg-[#234CF9]/8 border border-[#234CF9]/15 px-4 py-2 rounded-full mb-6">
                  Posisi Bilmare
                </span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1C277B] leading-[1.15] mb-6">
                  Bukan assurance provider. Bukan agency desain.
                </h2>
                <p className="text-lg text-[#1C277B]/55 font-normal leading-relaxed mb-8">
                  Bilmare mengisi satu celah yang spesifik: memastikan setiap klaim dalam laporan Anda memiliki keterlacakan dan konsistensi yang memadai — sebelum laporan naik ke publik.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Verification-led', 'Pre-assurance specialist', 'Bukan agency kreatif', 'Bukan auditor'].map((tag) => (
                    <span key={tag} className="text-[11px] font-semibold tracking-wide uppercase text-[#1C277B]/50 border border-[#1C277B]/15 px-4 py-2 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { who: 'Agency kreatif', what: 'Menulis narasi dan mendesain laporan' },
                  { who: 'Bilmare', what: 'Memverifikasi setiap klaim memiliki keterlacakan', highlight: true },
                  { who: 'Assurance provider', what: 'Memberikan opini independen atas laporan' },
                  { who: 'OJK / Regulator', what: 'Memeriksa kepatuhan pengungkapan publik' },
                ].map((row) => (
                  <div
                    key={row.who}
                    className={`flex items-center justify-between p-5 rounded-xl ${
                      row.highlight ? 'bg-[#1C277B] text-white' : 'bg-[#DFE7F7] text-[#1C277B]'
                    }`}
                  >
                    <span className={`font-bold text-sm ${row.highlight ? 'text-white' : 'text-[#1C277B]'}`}>
                      {row.who}
                    </span>
                    <span className={`text-sm font-normal ${row.highlight ? 'text-white/70' : 'text-[#1C277B]/55'}`}>
                      {row.what}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#1C277B] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="mesh-1 absolute -top-20 right-0 w-[500px] h-[500px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(35,76,249,0.35) 0%, transparent 70%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-[1.1]">
              Kenali lebih jauh cara kerja kami.
            </h2>
            <p className="text-lg text-white/50 font-normal max-w-xl leading-relaxed">
              Lihat metodologi dan layanan yang Bilmare tawarkan untuk laporan Anda.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link to="/layanan" className="inline-flex items-center gap-2 bg-white text-[#1C277B] px-7 py-3.5 rounded-full text-sm font-bold hover:bg-[#DFE7F7] transition-colors group">
              Lihat Layanan <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link to="/pendekatan" className="inline-flex items-center gap-2 border border-white/20 text-white/70 px-7 py-3.5 rounded-full text-sm font-semibold hover:border-white/40 hover:text-white transition-colors">
              Metodologi
            </Link>
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
    <div className="bg-[#FFFFFC] text-[#1C277B] min-h-screen flex">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#1C277B] relative overflow-hidden flex-col justify-between p-14">
        <div className="absolute inset-0 pointer-events-none">
          <div className="mesh-1 absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(35,76,249,0.35) 0%, transparent 70%)' }} />
          <div className="mesh-3 absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(35,76,249,0.15) 0%, transparent 70%)' }} />
        </div>
        <div className="relative z-10">
          <img
            src="/logo.png"
            alt="Bilmare"
            className="h-8 w-auto mb-16"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <h2 className="text-4xl font-bold text-white tracking-tight leading-[1.2] mb-5">
            Portal Klien &<br />Tim Bilmare
          </h2>
          <p className="text-white/55 text-lg font-normal leading-relaxed max-w-sm">
            Masuk untuk mengakses laporan, status engagement, dan dokumentasi verifikasi Anda.
          </p>
        </div>
        <div className="relative z-10 space-y-4">
          {[
            { label: 'Keamanan', value: 'End-to-end encrypted' },
            { label: 'Akses', value: 'Role-based portal routing' },
            { label: 'Data', value: 'Diproteksi Supabase RLS' },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-white/35">{item.label}</span>
              <span className="text-sm font-medium text-white/65">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex items-center justify-center px-6 py-20 lg:py-0">
        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <div className="lg:hidden mb-10">
            <Link to="/">
              <img
                src="/logo.png"
                alt="Bilmare"
                className="h-7 w-auto"
                style={{ filter: 'brightness(0) saturate(100%) invert(13%) sepia(70%) saturate(1500%) hue-rotate(218deg) brightness(65%) contrast(120%)' }}
              />
            </Link>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-[#1C277B] mb-2">Masuk ke akun Anda</h1>
          <p className="text-[#1C277B]/45 font-normal text-base mb-10">
            Portal akan diarahkan sesuai peran Anda.
          </p>

          <form className="space-y-5" onSubmit={handleLogin}>
            {/* Email */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[#1C277B]/45 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                className="w-full bg-[#DFE7F7]/50 border border-[#1C277B]/12 rounded-xl px-4 py-3.5 text-[#1C277B] placeholder:text-[#1C277B]/30 focus:outline-none focus:border-[#234CF9] focus:bg-[#234CF9]/4 transition-all text-sm disabled:opacity-50"
                placeholder="nama@perusahaan.com"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[#1C277B]/45 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                  className="w-full bg-[#DFE7F7]/50 border border-[#1C277B]/12 rounded-xl px-4 py-3.5 pr-12 text-[#1C277B] placeholder:text-[#1C277B]/30 focus:outline-none focus:border-[#234CF9] focus:bg-[#234CF9]/4 transition-all text-sm disabled:opacity-50"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#1C277B]/35 hover:text-[#1C277B]/70 transition-colors"
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
                className="py-3 px-4 bg-red-50 border border-red-200 rounded-xl"
              >
                <p className="text-sm text-red-600 font-medium">{error}</p>
              </motion.div>
            )}

            {/* Forgot */}
            <div className="flex justify-end">
              <a href="#" className="text-[11px] font-semibold text-[#234CF9] hover:opacity-70 transition-opacity uppercase tracking-widest">
                Lupa password?
              </a>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#234CF9] text-white py-4 rounded-full text-sm font-bold hover:bg-[#1a3de8] transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg shadow-[#234CF9]/25 mt-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Memverifikasi...
                </>
              ) : 'Masuk'}
            </button>
          </form>

          <p className="text-center text-[11px] text-[#1C277B]/35 mt-8 font-normal">
            Belum memiliki akses?{' '}
            <Link to="/layanan" className="text-[#234CF9] font-semibold hover:opacity-70 transition-opacity">
              Hubungi tim Bilmare
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
