import { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const PORTAL_TIM_URL = import.meta.env.VITE_PORTAL_TIM_URL || 'https://portal-tim-bilmare.vercel.app';
const PORTAL_CLIENT_URL = import.meta.env.VITE_PORTAL_CLIENT_URL || 'https://portal-client-delta.vercel.app';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Email dan password wajib diisi.');
      return;
    }

    setLoading(true);
    setError('');

    const { data, error: authError } = await supabase.auth.signInWithPassword({ email, password });

    if (authError || !data.session) {
      setError('Email atau password salah. Silakan coba lagi.');
      setLoading(false);
      return;
    }

    const { access_token, refresh_token } = data.session;

    // Cek apakah user adalah anggota tim internal Bilmare
    const { data: teamMember } = await supabase
      .from('bilmare_team_members')
      .select('id')
      .eq('email', data.user.email)
      .maybeSingle();

    if (teamMember) {
      // Tim Bilmare → Portal Tim
      window.location.href = `${PORTAL_TIM_URL}/#access_token=${access_token}&refresh_token=${refresh_token}`;
    } else {
      // Client → Portal Client
      window.location.href = `${PORTAL_CLIENT_URL}/#access_token=${access_token}&refresh_token=${refresh_token}`;
    }
  };

  return (
    <div className="min-h-screen bg-deep-navy flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-sm transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Kembali ke bilmare.id
        </Link>
      </div>

      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link to="/" className="text-white font-georgia text-3xl font-bold tracking-tight">
            Bilmare
          </Link>
          <p className="text-white/40 text-xs uppercase tracking-widest mt-2 font-medium">
            Portal Login
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <p className="text-sm font-semibold text-slate-700 mb-6 text-center">
            Masuk ke akun Anda
          </p>

          {error && (
            <div className="bg-red-50 border border-red-100 text-red-600 text-sm px-4 py-3 rounded-xl mb-5">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="email@perusahaan.com"
                autoComplete="email"
                onKeyDown={e => e.key === 'Enter' && handleLogin()}
                className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 outline-none focus:border-mckinsey-blue focus:ring-2 focus:ring-mckinsey-blue/10 transition-all placeholder-slate-300"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="current-password"
                onKeyDown={e => e.key === 'Enter' && handleLogin()}
                className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 outline-none focus:border-mckinsey-blue focus:ring-2 focus:ring-mckinsey-blue/10 transition-all placeholder-slate-300"
              />
            </div>
            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-mckinsey-blue hover:bg-blue-mid text-white font-semibold py-2.5 rounded-xl text-sm transition-colors disabled:opacity-50 mt-1 shadow-sm"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                  Memverifikasi...
                </span>
              ) : 'Masuk'}
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-white/25 mt-8">
          &copy; {new Date().getFullYear()} Bilmare. All rights reserved.
        </p>
      </div>
    </div>
  );
}
