import React from 'react';
import { FadeIn } from '../Layout';

export default function Layanan() {
  return (
    <div className="bg-white text-black min-h-screen pt-32">
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto py-20">
        <FadeIn>
          <h1 className="text-[10vw] md:text-[6vw] font-medium tracking-tighter leading-none mb-12">Layanan</h1>
          <p className="text-2xl md:text-4xl font-light text-neutral-600 max-w-5xl leading-tight mb-32">
            Dua titik masuk. Satu standar verifikasi. Sebagian klien sudah memiliki draft laporan dan memerlukan lapisan verifikasi independen. Sebagian lagi memerlukan laporan yang disusun dari awal. Bilmare melayani keduanya.
          </p>
        </FadeIn>

        <div className="space-y-48">
          {/* Tier 1 */}
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5">
                <div className="sticky top-32">
                  <h2 className="text-sm font-mono text-neutral-400 mb-6">Tier 1</h2>
                  <h3 className="text-5xl md:text-6xl font-medium tracking-tighter leading-[1.05] mb-8">Verification &<br/>Disclosure Readiness</h3>
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                    alt="Verification" 
                    className="w-full aspect-[4/3] object-cover grayscale opacity-90"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 lg:pl-12">
                <p className="text-2xl font-medium tracking-tight mb-8">Draft sudah tersedia. Diperlukan verification layer independen sebelum laporan dipublikasikan atau memasuki proses assurance.</p>
                <p className="text-lg text-neutral-600 font-light leading-relaxed mb-16">
                  Draft laporan ada. Pertanyaannya satu: apakah setiap klaim di dalamnya dapat dipertanggungjawabkan ketika regulator, investor institusional, atau assurance provider mempertanyakannya? Bilmare masuk untuk memastikan jawabannya ya — sebelum laporan naik ke publik.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
                  <div>
                    <h4 className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-6 border-b border-black/10 pb-4">Sesuai untuk</h4>
                    <ul className="space-y-4 text-neutral-800 font-light">
                      <li>Perusahaan terbuka (emiten OJK)</li>
                      <li>Anak perusahaan multinasional</li>
                      <li>Pra-assurance engagement</li>
                      <li>Klien yang bekerja dengan agency kreatif</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-6 border-b border-black/10 pb-4">Cakupan kerja</h4>
                    <ul className="space-y-6 text-neutral-800 font-light">
                      <li><strong className="text-black font-medium block mb-1">Verifikasi silang dokumen</strong> Setiap angka dan klaim material diperiksa konsistensinya.</li>
                      <li><strong className="text-black font-medium block mb-1">Konsistensi time-series</strong> Definisi metrik diverifikasi terhadap laporan periode sebelumnya.</li>
                      <li><strong className="text-black font-medium block mb-1">Penyesuaian pengungkapan</strong> Klaim berisiko diperbaiki redaksinya.</li>
                    </ul>
                  </div>
                </div>

                <h4 className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-6 border-b border-black/10 pb-4">Yang Anda terima</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { title: "Laporan berstatus disclosure-ready", desc: "Seluruh klaim material terverifikasi." },
                    { title: "Cross-Reference Matrix", desc: "Pemetaan setiap klaim ke dokumen sumber." },
                    { title: "Disclosure Risk & Gap Register", desc: "Log temuan lengkap dengan klasifikasi." },
                    { title: "IR FAQ Databook", desc: "Panduan respons bersumber untuk stakeholder." }
                  ].map((item, i) => (
                    <div key={i} className="bg-neutral-50 p-8">
                      <h5 className="font-medium text-lg tracking-tight mb-3">{item.title}</h5>
                      <p className="text-neutral-500 font-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Tier 2 */}
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5">
                <div className="sticky top-32">
                  <h2 className="text-sm font-mono text-neutral-400 mb-6">Tier 2</h2>
                  <h3 className="text-5xl md:text-6xl font-medium tracking-tighter leading-[1.05] mb-8">Full Accountable<br/>Report Development</h3>
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                    alt="Development" 
                    className="w-full aspect-[4/3] object-cover grayscale opacity-90"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 lg:pl-12">
                <p className="text-2xl font-medium tracking-tight mb-8">Draft belum tersedia. Diperlukan penyusunan laporan dari awal dengan proses verifikasi data yang berjalan bersamaan dengan penulisan.</p>
                <p className="text-lg text-neutral-600 font-light leading-relaxed mb-16">
                  Tidak semua organisasi memiliki kapasitas internal untuk menyusun Laporan Tahunan atau Laporan Keberlanjutan. Agency umumnya menulis narasi terlebih dahulu, kemudian melampirkan data. Bilmare membangun struktur referensi sebelum satu kalimat pun ditulis.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
                  <div>
                    <h4 className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-6 border-b border-black/10 pb-4">Sesuai untuk</h4>
                    <ul className="space-y-4 text-neutral-800 font-light">
                      <li>Calon IPO</li>
                      <li>Bisnis keluarga yang profesionalisasi tata kelola</li>
                      <li>Entitas dengan kewajiban pelaporan baru</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-6 border-b border-black/10 pb-4">Proses kerja</h4>
                    <ol className="space-y-6 text-neutral-800 font-light list-decimal list-inside">
                      <li>Inventarisasi dokumen sumber</li>
                      <li>Pembangunan Master Cross-Reference Matrix</li>
                      <li>Penyusunan draft dengan dokumentasi bersamaan</li>
                      <li>Review berlapis dan serah terima</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
