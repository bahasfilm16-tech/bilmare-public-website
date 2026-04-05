import React, { useState } from 'react';
import { FadeIn } from '../Layout';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Pendekatan() {
  const [activePhase, setActivePhase] = useState(1);

  const phases = [
    {
      id: 1,
      title: "Penyusunan Laporan",
      actor: "Klien / Konsultan",
      description: "Pengumpulan data mentah, penulisan narasi, dan desain awal laporan tahunan atau keberlanjutan.",
      bilmareRole: false,
      details: ["Pengumpulan data ESG & Finansial", "Drafting narasi", "Desain layout awal"]
    },
    {
      id: 2,
      title: "Pre-Assurance Review",
      actor: "BILMARE",
      description: "Verifikasi independen terhadap draf laporan sebelum diserahkan kepada auditor eksternal. Memastikan setiap klaim memiliki bukti yang dapat dilacak.",
      bilmareRole: true,
      details: ["Cross-referencing klaim vs sumber", "Uji konsistensi data antar bab", "Penyusunan matriks jejak audit (audit trail)"]
    },
    {
      id: 3,
      title: "Proses Assurance",
      actor: "Auditor Eksternal",
      description: "Pemeriksaan resmi oleh pihak ketiga independen untuk memberikan opini atau kesimpulan assurance.",
      bilmareRole: false,
      details: ["Fieldwork lebih cepat", "Minim temuan / revisi", "Biaya assurance terkendali berkat persiapan BILMARE"]
    },
    {
      id: 4,
      title: "Publikasi",
      actor: "Klien",
      description: "Rilis laporan ke publik, regulator (OJK), dan pemangku kepentingan dengan tingkat kepercayaan penuh.",
      bilmareRole: false,
      details: ["Kepatuhan regulasi terjamin", "Kepercayaan investor meningkat", "Bebas dari risiko greenwashing"]
    }
  ];

  return (
    <div className="bg-white text-black min-h-screen pt-32">
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto py-20">
        <FadeIn>
          <h1 className="text-[10vw] md:text-[6vw] font-medium tracking-tighter leading-none mb-12">Pendekatan</h1>
          <p className="text-2xl md:text-4xl font-light text-neutral-600 max-w-5xl leading-tight mb-32">
            Verifikasi data mendahului penulisan narasi — dan dokumentasi berjalan bersamaan dengan keduanya.
          </p>
        </FadeIn>

        {/* Interactive Workflow Section */}
        <FadeIn className="mb-48">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Siklus Pelaporan & Peran BILMARE</h2>
            <p className="text-xl text-neutral-600 font-light max-w-3xl">
              Pahami di mana kami masuk untuk mengamankan integritas laporan Anda sebelum proses audit resmi dimulai.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Stepper Navigation */}
            <div className="lg:w-1/3 flex flex-col space-y-4">
              {phases.map((phase) => (
                <button
                  key={phase.id}
                  onClick={() => setActivePhase(phase.id)}
                  className={`text-left p-6 border-l-4 transition-all duration-300 ${
                    activePhase === phase.id
                      ? phase.bilmareRole 
                        ? 'border-black bg-neutral-50' 
                        : 'border-black bg-neutral-50'
                      : 'border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-sm font-semibold tracking-widest uppercase ${activePhase === phase.id && phase.bilmareRole ? 'text-black' : 'text-neutral-500'}`}>
                      Fase 0{phase.id}
                    </span>
                    {phase.bilmareRole && (
                      <span className="bg-black text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest rounded-sm">
                        Peran Kami
                      </span>
                    )}
                  </div>
                  <h3 className={`text-xl font-medium tracking-tight ${activePhase === phase.id ? 'text-black' : 'text-neutral-600'}`}>
                    {phase.title}
                  </h3>
                </button>
              ))}
            </div>

            {/* Active Phase Content */}
            <div className="lg:w-2/3 bg-neutral-50 p-8 md:p-12 border border-black/5 relative overflow-hidden min-h-[400px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {phases.map((phase) => (
                  phase.id === activePhase && (
                    <motion.div
                      key={phase.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="relative z-10"
                    >
                      <div className="flex items-center space-x-3 mb-6">
                        {phase.bilmareRole ? (
                          <ShieldCheck className="w-8 h-8 text-black" />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-600 font-medium text-sm">
                            {phase.id}
                          </div>
                        )}
                        <span className="text-sm font-semibold tracking-widest uppercase text-neutral-500">
                          Aktor: {phase.actor}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
                        {phase.title}
                      </h3>
                      
                      <p className="text-xl text-neutral-600 font-light leading-relaxed mb-10">
                        {phase.description}
                      </p>

                      <div className="space-y-4">
                        <h4 className="text-sm font-semibold tracking-widest uppercase text-neutral-900 border-b border-black/10 pb-2 mb-4">
                          Aktivitas Kunci
                        </h4>
                        {phase.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <CheckCircle2 className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" />
                            <span className="text-lg text-neutral-700 font-light">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
              
              {/* Background decorative number */}
              <div className="absolute -right-12 -bottom-24 text-[20rem] font-medium text-neutral-200/50 select-none pointer-events-none tracking-tighter leading-none">
                0{activePhase}
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-16 border-b border-black/10 pb-8">Metodologi Eksekusi</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-32 mb-48">
          {[
            { step: "01", title: "Inventarisasi dokumen sumber", desc: "Laporan Keuangan Audited, laporan operasional, database ESG, notulen rapat Direksi dikatalogkan dan dikontrol versinya." },
            { step: "02", title: "Pembangunan Cross-Reference Matrix", desc: "Sebelum satu kalimat pun ditulis atau diperiksa, setiap klaim material dipetakan ke dokumen sumbernya." },
            { step: "03", title: "Eksekusi dengan dokumentasi bersamaan", desc: "Setiap kalimat yang ditulis langsung didokumentasikan ke sumbernya. Tidak ada klaim tanpa referensi." },
            { step: "04", title: "Review berlapis dan serah terima", desc: "Laporan melewati review internal. Laporan diserahkan bersama paket dokumentasi lengkap." }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1} className="relative group">
              <div className="absolute -top-16 -left-8 text-[12rem] font-medium text-neutral-100 opacity-50 z-0 select-none tracking-tighter transition-transform duration-700 group-hover:-translate-y-4">
                {item.step}
              </div>
              <div className="relative z-10 border-t border-black/10 pt-8">
                <h3 className="text-3xl font-medium tracking-tight mb-6">{item.title}</h3>
                <p className="text-xl text-neutral-600 font-light leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="bg-neutral-50 p-8 md:p-16 mb-32 border border-black/5">
          <h3 className="text-2xl font-medium tracking-tight mb-12">Contoh entri — Cross-Reference Matrix</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <tbody>
                <tr className="border-b border-black/10">
                  <th className="py-6 font-medium w-1/4 text-sm uppercase tracking-widest text-neutral-500">Klaim</th>
                  <td className="py-6 text-xl font-medium tracking-tight">"Pendapatan konsolidasi meningkat 23% menjadi Rp4,2 triliun pada tahun 2024."</td>
                </tr>
                <tr className="border-b border-black/10">
                  <th className="py-6 font-medium text-sm uppercase tracking-widest text-neutral-500">Dokumen sumber</th>
                  <td className="py-6 text-lg text-neutral-600 font-light">Laporan Keuangan Audited 2024 — hal. 12, Laporan Laba Rugi Konsolidasi</td>
                </tr>
                <tr className="border-b border-black/10">
                  <th className="py-6 font-medium text-sm uppercase tracking-widest text-neutral-500">Verifikasi silang</th>
                  <td className="py-6 text-lg text-neutral-600 font-light">Dikonfirmasi terhadap Catatan Atas Laporan Keuangan hal. 34 dan ringkasan eksekutif hal. 4</td>
                </tr>
                <tr>
                  <th className="py-6 font-medium text-sm uppercase tracking-widest text-neutral-500">Time-series</th>
                  <td className="py-6 text-lg text-neutral-600 font-light">2023: Rp3,4 triliun (LK Audited 2023 hal. 11) — definisi dan lingkup konsolidasi identik</td>
                </tr>
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
