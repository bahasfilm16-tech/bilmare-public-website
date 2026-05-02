import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../Layout';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight, ShieldCheck, ArrowUpRight } from 'lucide-react';

function MeshBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="mesh-1 absolute -top-40 -left-32 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(35,76,249,0.1) 0%, transparent 70%)' }} />
      <div className="mesh-3 absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(223,231,247,0.9) 0%, transparent 70%)' }} />
    </div>
  );
}

export default function Pendekatan() {
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
    <div className="bg-[#FFFFFC] text-[#1C277B] min-h-screen">

      {/* ── HEADER ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6 md:px-10 bg-[#FFFFFC]">
        <MeshBg />
        <div className="relative z-10 max-w-7xl mx-auto">
          <FadeIn>
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#234CF9] bg-[#234CF9]/8 border border-[#234CF9]/15 px-4 py-2 rounded-full mb-6">
              Pendekatan
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-[#1C277B] mb-6 max-w-4xl">
              Verifikasi sebelum narasi.
            </h1>
            <p className="text-xl text-[#1C277B]/55 font-normal max-w-2xl leading-relaxed">
              Verifikasi data mendahului penulisan narasi — dan dokumentasi berjalan bersamaan dengan keduanya.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── WORKFLOW STEPPER ──────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#DFE7F7]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#234CF9] bg-[#234CF9]/8 border border-[#234CF9]/15 px-4 py-2 rounded-full mb-5">
              Siklus Pelaporan
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1C277B] mb-3 leading-[1.15]">
              Di mana Bilmare masuk.
            </h2>
            <p className="text-lg text-[#1C277B]/55 font-normal max-w-2xl mb-12">
              Pahami peran Bilmare dalam siklus pelaporan — sebelum proses audit resmi dimulai.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-col lg:flex-row gap-5">
              {/* Phase tabs */}
              <div className="lg:w-2/5 flex flex-col gap-3">
                {phases.map((phase) => (
                  <button
                    key={phase.id}
                    onClick={() => setActivePhase(phase.id)}
                    className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
                      activePhase === phase.id
                        ? phase.bilmareRole
                          ? 'bg-[#1C277B] border-[#1C277B] shadow-lg shadow-[#1C277B]/15'
                          : 'bg-white border-[#1C277B]/15 shadow-sm'
                        : 'bg-white/60 border-[#1C277B]/8 hover:bg-white hover:border-[#1C277B]/15'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${
                        activePhase === phase.id && phase.bilmareRole ? 'text-white/50' : 'text-[#1C277B]/40'
                      }`}>
                        Fase 0{phase.id}
                      </span>
                      {phase.bilmareRole && (
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest ${
                          activePhase === phase.id ? 'bg-[#234CF9] text-white' : 'bg-[#234CF9]/12 text-[#234CF9]'
                        }`}>
                          Peran Kami
                        </span>
                      )}
                    </div>
                    <h3 className={`text-lg font-bold tracking-tight transition-colors ${
                      activePhase === phase.id && phase.bilmareRole ? 'text-white' : activePhase === phase.id ? 'text-[#1C277B]' : 'text-[#1C277B]/65'
                    }`}>
                      {phase.title}
                    </h3>
                    <p className={`text-xs mt-1 transition-colors ${
                      activePhase === phase.id && phase.bilmareRole ? 'text-white/50' : 'text-[#1C277B]/40'
                    }`}>
                      {phase.actor}
                    </p>
                  </button>
                ))}
              </div>

              {/* Active phase detail */}
              <div className="lg:w-3/5 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePhase}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                    className={`rounded-2xl p-8 md:p-10 h-full min-h-[380px] flex flex-col justify-between relative overflow-hidden ${
                      activePhaseData.bilmareRole ? 'bg-[#1C277B]' : 'bg-white border border-[#1C277B]/8'
                    }`}
                  >
                    {activePhaseData.bilmareRole && (
                      <div
                        className="absolute -right-16 -top-16 w-[300px] h-[300px] rounded-full pointer-events-none"
                        style={{ background: 'radial-gradient(circle, rgba(35,76,249,0.3) 0%, transparent 70%)' }}
                      />
                    )}

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        {activePhaseData.bilmareRole ? (
                          <div className="w-10 h-10 rounded-full bg-[#234CF9]/20 flex items-center justify-center">
                            <ShieldCheck size={20} className="text-white" />
                          </div>
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-[#1C277B]/8 flex items-center justify-center text-[#1C277B]/40 font-bold text-sm">
                            {activePhaseData.id}
                          </div>
                        )}
                        <span className={`text-[11px] font-semibold tracking-[0.15em] uppercase ${
                          activePhaseData.bilmareRole ? 'text-white/50' : 'text-[#1C277B]/40'
                        }`}>
                          {activePhaseData.actor}
                        </span>
                      </div>

                      <h3 className={`text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-[1.15] ${
                        activePhaseData.bilmareRole ? 'text-white' : 'text-[#1C277B]'
                      }`}>
                        {activePhaseData.title}
                      </h3>

                      <p className={`text-base font-normal leading-relaxed mb-8 ${
                        activePhaseData.bilmareRole ? 'text-white/60' : 'text-[#1C277B]/55'
                      }`}>
                        {activePhaseData.description}
                      </p>

                      <div className="space-y-3">
                        <h4 className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-3 ${
                          activePhaseData.bilmareRole ? 'text-white/35' : 'text-[#1C277B]/35'
                        }`}>
                          Aktivitas Kunci
                        </h4>
                        {activePhaseData.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                              activePhaseData.bilmareRole ? 'text-[#234CF9]' : 'text-[#1C277B]/30'
                            }`} />
                            <span className={`text-sm font-normal ${
                              activePhaseData.bilmareRole ? 'text-white/70' : 'text-[#1C277B]/65'
                            }`}>
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Decorative phase number */}
                    <div className={`absolute -right-6 -bottom-10 text-[10rem] font-bold select-none pointer-events-none tracking-tighter leading-none ${
                      activePhaseData.bilmareRole ? 'text-white/5' : 'text-[#1C277B]/4'
                    }`}>
                      0{activePhaseData.id}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── EXECUTION METHODOLOGY ─────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#FFFFFC]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#234CF9] bg-[#234CF9]/8 border border-[#234CF9]/15 px-4 py-2 rounded-full mb-5">
              Metodologi Eksekusi
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1C277B] mb-12 leading-[1.15]">
              Empat langkah. Satu output.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {execSteps.map((s, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <motion.div
                  className="bg-[#DFE7F7] rounded-2xl p-8 group hover:bg-[#1C277B] transition-colors duration-400 border border-[#1C277B]/5 h-full"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                >
                  <span className="text-[11px] font-bold tracking-widest uppercase text-[#234CF9] group-hover:text-white/40 transition-colors mb-4 block">{s.num}</span>
                  <h3 className="text-xl font-bold text-[#1C277B] group-hover:text-white mb-3 tracking-tight transition-colors">{s.title}</h3>
                  <p className="text-sm text-[#1C277B]/55 group-hover:text-white/55 font-normal leading-relaxed transition-colors">{s.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CROSS-REFERENCE TABLE ─────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#DFE7F7]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#234CF9] bg-[#234CF9]/8 border border-[#234CF9]/15 px-4 py-2 rounded-full mb-5">
              Contoh Output
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1C277B] mb-10 leading-[1.15]">
              Cross-Reference Matrix — Contoh entri
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl border border-[#1C277B]/8 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
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
                      <tr key={i} className={i < 3 ? 'border-b border-[#1C277B]/8' : ''}>
                        <th className="py-5 px-7 font-semibold text-[11px] uppercase tracking-widest text-[#1C277B]/35 w-40 shrink-0 align-top">
                          {row.label}
                        </th>
                        <td className={`py-5 px-7 leading-relaxed text-[#1C277B] ${row.bold ? 'font-semibold text-lg' : 'text-base font-normal text-[#1C277B]/65'}`}>
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

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-[#1C277B] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="mesh-2 absolute -top-20 right-0 w-[500px] h-[500px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(35,76,249,0.35) 0%, transparent 70%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-[1.1]">
              Siap melihat kondisi laporan Anda?
            </h2>
            <p className="text-lg text-white/50 font-normal max-w-xl leading-relaxed">
              Mulai dengan PSPK Readiness Assessment. Tidak ada komitmen di tahap ini.
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
              to="/klien-kami"
              className="inline-flex items-center gap-2 border border-white/20 text-white/70 px-7 py-3.5 rounded-full text-sm font-semibold hover:border-white/40 hover:text-white transition-colors"
            >
              Profil Klien
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
