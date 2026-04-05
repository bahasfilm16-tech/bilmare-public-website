import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { FadeIn } from '../Layout';

const SUPABASE_URL      = import.meta.env.VITE_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
const supabase          = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const PORTAL_TIM    = 'https://portal-tim.vercel.app/';
const PORTAL_CLIENT = 'https://portal-client-delta.vercel.app/';

export function Insight() {
  const articles = [
    { category: "Panduan Praktis", title: "Mempersiapkan Laporan Tahunan untuk Proses Assurance", desc: "Sebagian besar pembengkakan biaya assurance bukan karena cakupan yang luas — melainkan karena data yang belum siap saat fieldwork dimulai." },
    { category: "Regulasi & OJK", title: "Ketidaksesuaian yang Paling Sering Memicu Pertanyaan OJK", desc: "Pola berulang dalam pengungkapan emiten dan cara mengantisipasinya." },
    { category: "Standar ESG", title: "Perubahan Metodologi yang Tidak Diungkapkan", desc: "Mengapa pergeseran definisi metrik antar periode menciptakan eksposur yang lebih besar dari yang disadari." }
  ];

  return (
    <div className="bg-white text-black min-h-screen pt-32">
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto py-20">
        <FadeIn>
          <h1 className="text-[10vw] md:text-[6vw] font-medium tracking-tighter leading-none mb-12">Insights</h1>
          <p className="text-2xl md:text-4xl font-light text-neutral-600 max-w-5xl leading-tight mb-32">
            Analisis pelaporan yang dapat langsung diterapkan.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
          {articles.map((article, i) => (
            <FadeIn key={i} delay={i * 0.1} className="group cursor-pointer">
              <div className="border-t border-black/10 pt-8 h-full flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">{article.category}</span>
                </div>
                <h3 className="text-2xl font-medium tracking-tight mb-6 group-hover:text-neutral-600 transition-colors">{article.title}</h3>
                <p className="text-lg text-neutral-600 font-light leading-relaxed mt-auto">{article.desc}</p>
                <span className="text-sm font-medium mt-8 inline-block uppercase tracking-widest group-hover:translate-x-2 transition-transform">Baca selengkapnya &rarr;</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TentangKami() {
  return (
    <div className="bg-neutral-950 text-white min-h-screen pt-32">
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto py-20">
        <FadeIn>
          <h1 className="text-[10vw] md:text-[6vw] font-medium tracking-tighter leading-none mb-12">Tentang Kami</h1>
          <p className="text-2xl md:text-4xl font-light text-neutral-400 max-w-5xl leading-tight mb-32">
            Kami mengisi satu celah yang spesifik. Tidak ada pihak yang secara spesifik bertugas memastikan laporan memiliki keterlacakan dan konsistensi yang memadai — sebelum laporan naik ke publik.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-32">
          <FadeIn>
            <h3 className="text-4xl font-medium tracking-tighter mb-8">BIL</h3>
            <p className="text-xl text-neutral-400 font-light leading-relaxed"><strong>Build Integrity in Layers:</strong> Integritas pengungkapan dibangun melalui verifikasi berlapis — konsistensi data, keterlacakan klaim, dokumentasi metodologi.</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h3 className="text-4xl font-medium tracking-tighter mb-8">MARE</h3>
            <p className="text-xl text-neutral-400 font-light leading-relaxed"><strong>Methodical Accuracy in Reporting Excellence:</strong> Akurasi yang dapat dipertanggungjawabkan hanya dicapai melalui metodologi yang konsisten dan terdokumentasi.</p>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

export function Login() {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');
  const [loading, setLoading]   = useState(false);

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

      // Cek apakah email ada di bilmare_team_members
      const { data: teamMember } = await supabase
        .from('bilmare_team_members')
        .select('id')
        .eq('email', email)
        .maybeSingle();

      if (teamMember) {
        // Pakai hash fragment supaya token tidak terpotong
        window.location.href = `${PORTAL_TIM}#access_token=${access_token}&refresh_token=${refresh_token}`;
        return;
      }

      // Cek apakah email ada di client_users
      const { data: clientUser } = await supabase
        .from('client_users')
        .select('id')
        .eq('email', email)
        .maybeSingle();

      if (clientUser) {
        window.location.href = `${PORTAL_CLIENT}?access_token=${access_token}&refresh_token=${refresh_token}`;
        return;
      }

      // Fallback: cek kolom role di tabel profiles
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
    <div className="bg-white text-black min-h-screen flex items-center justify-center pt-20">
      <div className="w-full max-w-md px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl font-medium tracking-tighter mb-4">BILMARE Portal</h1>
            <p className="text-neutral-500 font-light">Masuk ke akun Anda</p>
          </div>
          <form className="space-y-8" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-semibold uppercase tracking-widest text-neutral-500 mb-3">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                className="w-full border-b border-black/20 py-3 bg-transparent text-lg focus:outline-none focus:border-black transition-colors"
                placeholder="nama@perusahaan.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold uppercase tracking-widest text-neutral-500 mb-3">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
                className="w-full border-b border-black/20 py-3 bg-transparent text-lg focus:outline-none focus:border-black transition-colors"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div className="py-3 px-4 bg-red-50 border border-red-200 rounded">
                <p className="text-sm text-red-700 font-medium">{error}</p>
              </div>
            )}

            <div className="flex items-center justify-end text-sm pt-4">
              <a href="#" className="text-neutral-400 hover:text-black transition-colors text-xs tracking-widest uppercase font-medium underline underline-offset-4">
                Lupa password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-5 text-sm font-semibold uppercase tracking-widest hover:bg-neutral-800 transition-colors mt-8 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  Memverifikasi...
                </>
              ) : 'Masuk'}
            </button>
          </form>
        </FadeIn>
      </div>
    </div>
  );
}
