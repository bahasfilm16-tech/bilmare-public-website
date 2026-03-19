import React from 'react';
import { FadeIn } from '../Layout';

export default function KlienKami() {
  const clients = [
    {
      title: "Perusahaan Terbuka",
      desc: "Emiten yang menghadapi kewajiban pengungkapan berkala kepada OJK dan pasar modal, dengan konsekuensi regulatori atas ketidaksesuaian pelaporan.",
      exposure: "Ketidaksesuaian angka antara Laporan Tahunan dan Laporan Keuangan Audited. Perubahan metodologi metrik ESG antar periode yang tidak diungkapkan.",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Calon IPO",
      desc: "Perusahaan yang mempersiapkan penawaran umum perdana dan untuk pertama kali menyusun laporan publik dalam konteks due diligence investor institusional.",
      exposure: "Laporan publik pertama yang disusun tanpa verifikasi silang terstruktur. Klaim pencapaian operasional yang tidak dapat ditelusuri ke dokumen sumber.",
      img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
    },
    {
      title: "Entitas Diregulasi",
      desc: "Perbankan, asuransi, dan utilitas yang menghadapi persyaratan transparansi ESG yang meningkat dari regulator sektor dan lembaga rating.",
      exposure: "Data emisi dan konsumsi energi yang dilaporkan dengan metodologi berbeda antar periode. Ketidaksesuaian metrik ESG dengan laporan regulator sektor.",
      img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Bisnis Keluarga",
      desc: "Perusahaan yang bertransisi dari struktur tata kelola keluarga ke standar tata kelola korporasi yang lebih formal.",
      exposure: "Tidak adanya dokumentasi metodologi untuk data yang dilaporkan. Data historis tanpa definisi yang konsisten.",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-neutral-950 text-white min-h-screen pt-32">
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto py-20">
        <FadeIn>
          <h1 className="text-[10vw] md:text-[6vw] font-medium tracking-tighter leading-none mb-12">Klien Kami</h1>
          <p className="text-2xl md:text-4xl font-light text-neutral-400 max-w-5xl leading-tight mb-32">
            Bilmare bekerja dengan perusahaan di mana kualitas pengungkapan berdampak langsung pada hasil bisnis. Bukan berdasarkan sektor industri — melainkan berdasarkan tahap dan struktur tata kelola.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 mb-32">
          {clients.map((client, i) => (
            <FadeIn key={i} delay={i * 0.1} className="group cursor-pointer">
              <div className="overflow-hidden aspect-[4/3] mb-8 bg-neutral-900 relative">
                <img 
                  src={client.img} 
                  alt={client.title} 
                  className="w-full h-full object-cover grayscale opacity-60 img-hover-zoom"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
              </div>
              <h3 className="text-4xl font-medium tracking-tighter mb-6">{client.title}</h3>
              <p className="text-xl text-neutral-400 font-light mb-8 leading-relaxed">{client.desc}</p>
              <div className="border-t border-white/10 pt-6">
                <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4">Eksposur Pelaporan</h4>
                <p className="text-neutral-300 font-light leading-relaxed">{client.exposure}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
