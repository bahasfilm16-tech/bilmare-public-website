import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ArrowUpRight } from 'lucide-react';
import { FadeIn } from '../Layout';
import { motion } from 'motion/react';

function MeshBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="mesh-1 absolute -top-40 -left-32 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(35,76,249,0.12) 0%, transparent 70%)' }} />
      <div className="mesh-3 absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(223,231,247,0.9) 0%, transparent 70%)' }} />
    </div>
  );
}

export default function Layanan() {
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
    <div className="bg-[#FFFFFC] text-[#1C277B] min-h-screen">

      {/* ── HEADER ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6 md:px-10 bg-[#FFFFFC]">
        <MeshBg />
        <div className="relative z-10 max-w-7xl mx-auto">
          <FadeIn>
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#234CF9] bg-[#234CF9]/8 border border-[#234CF9]/15 px-4 py-2 rounded-full mb-6">
              Layanan
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-[#1C277B] mb-6 max-w-4xl">
              Dua titik masuk.<br />Satu standar verifikasi.
            </h1>
            <p className="text-xl text-[#1C277B]/55 font-normal max-w-2xl leading-relaxed">
              Sebagian klien sudah memiliki draft laporan dan memerlukan lapisan verifikasi independen. Sebagian lagi memerlukan laporan yang disusun dari awal. Bilmare melayani keduanya.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── TIER 1 ────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#DFE7F7]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-5">
                <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#234CF9] bg-[#234CF9]/10 px-3 py-1.5 rounded-full mb-4">Tier 1</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-[#1C277B] mb-5">
                  Verification &amp;<br />Disclosure Readiness
                </h2>
                <p className="text-base text-[#1C277B]/55 leading-relaxed">
                  Draft laporan sudah ada. Pertanyaannya satu: apakah setiap klaim di dalamnya dapat dipertanggungjawabkan ketika regulator, investor institusional, atau assurance provider mempertanyakannya?
                </p>
              </div>
              <div className="lg:col-span-7 lg:pl-8">
                <p className="text-xl font-semibold tracking-tight text-[#1C277B] mb-5 leading-snug">
                  Draft sudah tersedia. Diperlukan verification layer independen sebelum laporan dipublikasikan atau memasuki proses assurance.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div>
                    <h4 className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#1C277B]/40 mb-4 pb-3 border-b border-[#1C277B]/10">Sesuai untuk</h4>
                    <ul className="space-y-3 text-sm text-[#1C277B]/70 leading-relaxed">
                      {['Perusahaan terbuka (emiten OJK)', 'Anak perusahaan multinasional', 'Pra-assurance engagement', 'Klien yang bekerja dengan agency kreatif'].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#234CF9] shrink-0 mt-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#1C277B]/40 mb-4 pb-3 border-b border-[#1C277B]/10">Cakupan kerja</h4>
                    <ul className="space-y-4 text-sm">
                      {[
                        { title: 'Verifikasi silang dokumen', desc: 'Setiap angka dan klaim material diperiksa konsistensinya.' },
                        { title: 'Konsistensi time-series', desc: 'Definisi metrik diverifikasi terhadap laporan periode sebelumnya.' },
                        { title: 'Penyesuaian pengungkapan', desc: 'Klaim berisiko diperbaiki redaksinya sebelum publikasi.' },
                      ].map((it) => (
                        <li key={it.title}>
                          <span className="font-semibold text-[#1C277B] block mb-0.5">{it.title}</span>
                          <span className="text-[#1C277B]/50">{it.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Deliverables */}
          <FadeIn delay={0.1}>
            <h3 className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#1C277B]/40 mb-5">Yang Anda Terima</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {tier1Deliverables.map((d, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-[#1C277B]/5 group hover:bg-[#1C277B] transition-colors duration-300"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  <CheckCircle size={18} className="text-[#234CF9] group-hover:text-white/60 mb-4 transition-colors" />
                  <h4 className="font-bold text-[#1C277B] group-hover:text-white mb-2 tracking-tight transition-colors">{d.title}</h4>
                  <p className="text-sm text-[#1C277B]/50 group-hover:text-white/50 font-normal leading-relaxed transition-colors">{d.desc}</p>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── TIER 2 ────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#FFFFFC]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-5">
                <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#234CF9] bg-[#234CF9]/10 px-3 py-1.5 rounded-full mb-4">Tier 2</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-[#1C277B] mb-5">
                  Full Accountable<br />Report Development
                </h2>
                <p className="text-base text-[#1C277B]/55 leading-relaxed">
                  Tidak semua organisasi memiliki kapasitas internal untuk menyusun laporan. Agency umumnya menulis narasi terlebih dahulu, kemudian melampirkan data. Bilmare membangun struktur referensi sebelum satu kalimat pun ditulis.
                </p>
              </div>
              <div className="lg:col-span-7 lg:pl-8">
                <p className="text-xl font-semibold tracking-tight text-[#1C277B] mb-5 leading-snug">
                  Draft belum tersedia. Diperlukan penyusunan laporan dari awal dengan proses verifikasi data yang berjalan bersamaan dengan penulisan.
                </p>
                <div>
                  <h4 className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#1C277B]/40 mb-4 pb-3 border-b border-[#1C277B]/10">Sesuai untuk</h4>
                  <ul className="space-y-3 text-sm text-[#1C277B]/70 leading-relaxed">
                    {['Calon IPO', 'Bisnis keluarga yang profesionalisasi tata kelola', 'Entitas dengan kewajiban pelaporan baru'].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#234CF9] shrink-0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Steps */}
          <FadeIn delay={0.1}>
            <h3 className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#1C277B]/40 mb-5">Proses Kerja</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tier2Steps.map((s, i) => (
                <motion.div
                  key={i}
                  className="bg-[#DFE7F7] rounded-2xl p-7 group hover:bg-[#1C277B] transition-colors duration-300 border border-[#1C277B]/5"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  <span className="text-[11px] font-bold tracking-widest uppercase text-[#234CF9] group-hover:text-white/40 transition-colors mb-4 block">{s.num}</span>
                  <h4 className="font-bold text-lg text-[#1C277B] group-hover:text-white mb-2 tracking-tight transition-colors">{s.title}</h4>
                  <p className="text-sm text-[#1C277B]/55 group-hover:text-white/55 font-normal leading-relaxed transition-colors">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── ENTRY PRODUCT + CTA ───────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#1C277B] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="mesh-1 absolute -top-20 right-0 w-[500px] h-[500px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(35,76,249,0.35) 0%, transparent 70%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-white/35 border border-white/15 px-3 py-1.5 rounded-full mb-5">
                  Entry Product — 2026
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-[1.1]">
                  PSPK Readiness Assessment
                </h2>
                <p className="text-lg text-white/55 font-normal mb-8 leading-relaxed max-w-lg">
                  Peta gap kesiapan PSPK 1/2 dalam 2–3 minggu. Tidak perlu komitmen besar. Langkah pertama yang paling rasional untuk memahami posisi laporan Anda saat ini.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/pendekatan"
                    className="inline-flex items-center gap-2 bg-white text-[#1C277B] px-7 py-3.5 rounded-full text-sm font-bold hover:bg-[#DFE7F7] transition-colors group"
                  >
                    Lihat pendekatan
                    <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <Link
                    to="/klien-kami"
                    className="inline-flex items-center gap-2 border border-white/20 text-white/70 px-7 py-3.5 rounded-full text-sm font-semibold hover:border-white/40 hover:text-white transition-colors"
                  >
                    Profil klien
                  </Link>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-6">Mencakup</h3>
                <ul className="space-y-4">
                  {[
                    'Gap analysis terhadap PSPK 1 & PSPK 2',
                    'Review konsistensi klaim vs laporan keuangan',
                    'Identifikasi risiko pengungkapan prioritas',
                    'Peta jalan menuju disclosure-ready',
                    'Laporan tertulis dalam 2–3 minggu',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle size={15} className="text-[#234CF9] shrink-0 mt-0.5" />
                      <span className="text-white/65 text-sm font-normal">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/tentang-kami"
                  className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-[#234CF9] text-white px-7 py-3.5 rounded-full text-sm font-bold hover:bg-[#1a3de8] transition-colors shadow-lg shadow-[#234CF9]/30 group"
                >
                  Mulai Assessment
                  <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
