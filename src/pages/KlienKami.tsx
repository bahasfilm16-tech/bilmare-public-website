import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { FadeIn } from '../Layout';
import { motion, AnimatePresence } from 'motion/react';

const clients = [
  {
    title: 'Perusahaan Terbuka',
    tag: 'Emiten OJK',
    desc: 'Emiten yang menghadapi kewajiban pengungkapan berkala kepada OJK dan pasar modal, dengan konsekuensi regulatori atas ketidaksesuaian pelaporan.',
    exposure: 'Ketidaksesuaian angka antara Laporan Tahunan dan Laporan Keuangan Audited. Perubahan metodologi metrik ESG antar periode yang tidak diungkapkan.',
    needs: ['Verifikasi silang lintas dokumen', 'Konsistensi time-series metrik', 'Disclosure Risk Register', 'Pre-assurance readiness'],
    color: '#234CF9',
  },
  {
    title: 'Calon IPO',
    tag: 'Pre-IPO',
    desc: 'Perusahaan yang mempersiapkan penawaran umum perdana dan untuk pertama kali menyusun laporan publik dalam konteks due diligence investor institusional.',
    exposure: 'Laporan publik pertama yang disusun tanpa verifikasi silang terstruktur. Klaim pencapaian operasional yang tidak dapat ditelusuri ke dokumen sumber.',
    needs: ['Pembangunan audit trail dari nol', 'Dokumentasi metodologi data', 'Cross-Reference Matrix lengkap', 'IR FAQ Databook'],
    color: '#1C277B',
  },
  {
    title: 'Entitas Diregulasi',
    tag: 'Perbankan & Utilitas',
    desc: 'Perbankan, asuransi, dan utilitas yang menghadapi persyaratan transparansi ESG yang meningkat dari regulator sektor dan lembaga rating.',
    exposure: 'Data emisi dan konsumsi energi yang dilaporkan dengan metodologi berbeda antar periode. Ketidaksesuaian metrik ESG dengan laporan regulator sektor.',
    needs: ['Konsistensi metodologi GHG', 'Alignment regulasi multi-sektor', 'Verifikasi data kuantitatif', 'Dokumentasi asumsi'],
    color: '#234CF9',
  },
  {
    title: 'Bisnis Keluarga',
    tag: 'Profesionalisasi Tata Kelola',
    desc: 'Perusahaan yang bertransisi dari struktur tata kelola keluarga ke standar tata kelola korporasi yang lebih formal.',
    exposure: 'Tidak adanya dokumentasi metodologi untuk data yang dilaporkan. Data historis tanpa definisi yang konsisten.',
    needs: ['Pembangunan sistem dokumentasi', 'Definisi metrik yang konsisten', 'Full report development', 'Pelatihan tim internal'],
    color: '#1C277B',
  },
];

export default function KlienKami() {
  const [active, setActive] = useState(0);
  const activeClient = clients[active];

  return (
    <div className="bg-[#FFFFFC] text-[#1C277B] min-h-screen">

      {/* ── HEADER ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6 md:px-10 bg-[#FFFFFC]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="mesh-1 absolute -top-40 -left-32 w-[600px] h-[600px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(35,76,249,0.1) 0%, transparent 70%)' }} />
          <div className="mesh-3 absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(223,231,247,0.9) 0%, transparent 70%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <FadeIn>
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#234CF9] bg-[#234CF9]/8 border border-[#234CF9]/15 px-4 py-2 rounded-full mb-6">
              Klien Kami
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-[#1C277B] mb-6 max-w-4xl">
              Bukan berdasarkan sektor.<br />Berdasarkan kebutuhan.
            </h1>
            <p className="text-xl text-[#1C277B]/55 font-normal max-w-2xl leading-relaxed">
              Bilmare bekerja dengan perusahaan di mana kualitas pengungkapan berdampak langsung pada hasil bisnis — berdasarkan tahap dan struktur tata kelola, bukan industri.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── INTERACTIVE CLIENT GRID ───────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#DFE7F7]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-col lg:flex-row gap-5">
              {/* Tabs */}
              <div className="lg:w-2/5 grid grid-cols-2 lg:grid-cols-1 gap-3">
                {clients.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
                      active === i
                        ? 'bg-[#1C277B] border-[#1C277B] shadow-lg shadow-[#1C277B]/15'
                        : 'bg-white border-[#1C277B]/8 hover:bg-white hover:border-[#1C277B]/15'
                    }`}
                  >
                    <span className={`text-[10px] font-bold tracking-[0.2em] uppercase block mb-1.5 ${
                      active === i ? 'text-white/40' : 'text-[#234CF9]'
                    }`}>
                      {c.tag}
                    </span>
                    <h3 className={`text-base font-bold tracking-tight transition-colors ${
                      active === i ? 'text-white' : 'text-[#1C277B]'
                    }`}>
                      {c.title}
                    </h3>
                  </button>
                ))}
              </div>

              {/* Detail panel */}
              <div className="lg:w-3/5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-white rounded-2xl p-8 md:p-10 border border-[#1C277B]/8 h-full relative overflow-hidden"
                  >
                    <div
                      className="absolute -right-10 -top-10 w-[200px] h-[200px] rounded-full pointer-events-none"
                      style={{ background: `radial-gradient(circle, ${activeClient.color}10 0%, transparent 70%)` }}
                    />
                    <div className="relative z-10">
                      <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#234CF9] bg-[#234CF9]/8 px-3 py-1.5 rounded-full mb-5">
                        {activeClient.tag}
                      </span>
                      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1C277B] mb-4 leading-[1.15]">
                        {activeClient.title}
                      </h2>
                      <p className="text-base text-[#1C277B]/60 font-normal leading-relaxed mb-8">
                        {activeClient.desc}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1C277B]/35 mb-4">
                            Eksposur Pelaporan
                          </h4>
                          <p className="text-sm text-[#1C277B]/60 leading-relaxed font-normal">
                            {activeClient.exposure}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1C277B]/35 mb-4">
                            Kebutuhan Utama
                          </h4>
                          <ul className="space-y-2.5">
                            {activeClient.needs.map((n) => (
                              <li key={n} className="flex items-start gap-2.5 text-sm text-[#1C277B]/65">
                                <span className="w-1 h-1 rounded-full bg-[#234CF9] shrink-0 mt-2" />
                                {n}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── ALL CLIENTS GRID ──────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#FFFFFC]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1C277B] mb-14 leading-[1.15]">
              Seluruh profil klien.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {clients.map((c, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <motion.div
                  className="bg-[#DFE7F7] rounded-2xl p-8 group hover:bg-[#1C277B] transition-colors duration-400 border border-[#1C277B]/5 h-full flex flex-col"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                >
                  <span className="inline-block text-[10px] font-bold tracking-[0.18em] uppercase text-[#234CF9] group-hover:text-white/40 transition-colors mb-5">
                    {c.tag}
                  </span>
                  <h3 className="text-2xl font-bold text-[#1C277B] group-hover:text-white mb-4 tracking-tight transition-colors leading-[1.2]">
                    {c.title}
                  </h3>
                  <p className="text-sm text-[#1C277B]/55 group-hover:text-white/55 font-normal leading-relaxed mb-6 transition-colors flex-1">
                    {c.desc}
                  </p>
                  <div className="border-t border-[#1C277B]/8 group-hover:border-white/10 pt-6 transition-colors">
                    <h4 className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#1C277B]/35 group-hover:text-white/30 mb-3 transition-colors">
                      Eksposur Pelaporan
                    </h4>
                    <p className="text-sm text-[#1C277B]/50 group-hover:text-white/50 font-normal leading-relaxed transition-colors">
                      {c.exposure}
                    </p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#1C277B] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="mesh-1 absolute -top-20 right-0 w-[500px] h-[500px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(35,76,249,0.35) 0%, transparent 70%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-[1.1]">
              Kenali posisi laporan Anda.
            </h2>
            <p className="text-lg text-white/50 font-normal max-w-xl leading-relaxed">
              Mulai dengan percakapan awal. Tidak ada komitmen, hanya pemetaan kondisi laporan Anda saat ini.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              to="/layanan"
              className="inline-flex items-center gap-2 bg-white text-[#1C277B] px-7 py-3.5 rounded-full text-sm font-bold hover:bg-[#DFE7F7] transition-colors group"
            >
              Lihat Layanan
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/pendekatan"
              className="inline-flex items-center gap-2 border border-white/20 text-white/70 px-7 py-3.5 rounded-full text-sm font-semibold hover:border-white/40 hover:text-white transition-colors"
            >
              Metodologi Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
