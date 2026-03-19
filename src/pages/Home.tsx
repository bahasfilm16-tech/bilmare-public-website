import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '../Layout';
import { motion, useScroll, useTransform } from 'motion/react';
import Hero3D from '../components/Hero3D';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="flex flex-col bg-black text-white">
      {/* Hero Section with Parallax Image and 3D Animation */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Corporate Architecture" 
            className="w-full h-full object-cover opacity-20 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black"></div>
        </motion.div>

        {/* 3D Animation Layer */}
        <Suspense fallback={null}>
          <Hero3D />
        </Suspense>

        <div className="relative z-10 px-6 md:px-12 max-w-[1400px] w-full mx-auto mt-20 pointer-events-none">
          <FadeIn>
            <h1 className="text-[12vw] md:text-[7vw] font-medium tracking-tighter leading-[0.9] mb-8">
              Verification-led <br />
              <span className="text-neutral-500">report development.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2} className="max-w-2xl pointer-events-auto">
            <p className="text-2xl md:text-3xl font-light leading-snug mb-12 text-neutral-300">
              Laporan yang siap dipertanyakan — sebelum pertanyaan datang.
            </p>
            <Link to="/layanan" className="inline-flex items-center space-x-3 text-sm font-medium tracking-widest uppercase border-b border-white pb-2 hover:text-neutral-400 hover:border-neutral-400 transition-colors group">
              <span>Diskusikan Keterlibatan Anda</span>
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Massive Statement */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-white text-black">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-7xl font-medium tracking-tighter leading-[1.1] max-w-5xl">
              Bilmare memastikan setiap klaim dalam Laporan Tahunan dan Laporan Keberlanjutan Anda terlacak, konsisten, dan terdokumentasi.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2} className="mt-24 pt-8 border-t border-black/10 flex flex-wrap gap-12 text-sm font-medium tracking-widest uppercase text-neutral-500">
            <span>GRI Standards</span>
            <span>POJK Keuangan Berkelanjutan</span>
            <span>ISSB / IFRS S1–S2</span>
            <span className="text-black ml-auto">Bukan assurance provider</span>
          </FadeIn>
        </div>
      </section>

      {/* Situasi (The Problem) - Grid Layout */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-neutral-950">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <FadeIn>
                <h2 className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-6">Situasi yang kami selesaikan</h2>
                <p className="text-4xl md:text-5xl font-medium tracking-tighter leading-tight">Tiga kondisi yang berulang setiap siklus pelaporan.</p>
              </FadeIn>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { num: "01", title: "Ketidaksesuaian teridentifikasi menjelang deadline", desc: "Angka di draft tidak cocok dengan laporan keuangan audited. Waktu untuk koreksi hampir habis." },
                { num: "02", title: "Assurance fieldwork meluas karena data tidak siap", desc: "Assurance provider menemukan data tidak konsisten. Scope bertambah, biaya bertambah." },
                { num: "03", title: "Pertanyaan regulator tidak dapat dijawab segera", desc: "Tim IR harus mencari data dari berbagai dokumen selama berhari-hari — bukan menjawab dalam hitungan menit." }
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1} className="border-t border-white/10 pt-8">
                  <span className="text-neutral-500 font-mono text-sm mb-6 block">{item.num}</span>
                  <h3 className="text-2xl font-medium tracking-tight mb-4">{item.title}</h3>
                  <p className="text-neutral-400 font-light leading-relaxed">{item.desc}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Layanan (Services) - Split Sticky Layout */}
      <section className="bg-white text-black">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-6 md:p-24 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center bg-neutral-100">
            <FadeIn>
              <h2 className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-6">Layanan</h2>
              <h3 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[1.05] mb-8">
                Dua titik masuk.<br/>Satu standar verifikasi.
              </h3>
              <p className="text-xl text-neutral-600 font-light max-w-md">
                Situasi pelaporan Anda — bukan skala perusahaan Anda — yang menentukan jalur yang tepat.
              </p>
            </FadeIn>
          </div>
          
          <div className="flex flex-col">
            <div className="p-6 md:p-24 lg:min-h-screen flex flex-col justify-center border-b border-black/10">
              <FadeIn>
                <h4 className="text-sm font-mono text-neutral-400 mb-6">Tier 1</h4>
                <h5 className="text-4xl md:text-5xl font-medium tracking-tighter mb-8">Verification &<br/>Disclosure Readiness</h5>
                <p className="text-xl text-neutral-600 font-light mb-12 max-w-lg leading-relaxed">Draft laporan sudah ada. Diperlukan verification layer independen sebelum publikasi atau proses assurance.</p>
                <Link to="/layanan" className="inline-flex items-center text-sm font-medium tracking-widest uppercase hover:text-neutral-500 transition-colors group">
                  Lihat detail <ArrowRight size={16} className="ml-3 group-hover:translate-x-2 transition-transform" />
                </Link>
              </FadeIn>
            </div>
            <div className="p-6 md:p-24 lg:min-h-screen flex flex-col justify-center">
              <FadeIn>
                <h4 className="text-sm font-mono text-neutral-400 mb-6">Tier 2</h4>
                <h5 className="text-4xl md:text-5xl font-medium tracking-tighter mb-8">Full Accountable<br/>Report Development</h5>
                <p className="text-xl text-neutral-600 font-light mb-12 max-w-lg leading-relaxed">Draft belum ada. Laporan disusun dari awal dengan verifikasi data yang berjalan bersamaan dengan penulisan.</p>
                <Link to="/layanan" className="inline-flex items-center text-sm font-medium tracking-widest uppercase hover:text-neutral-500 transition-colors group">
                  Lihat detail <ArrowRight size={16} className="ml-3 group-hover:translate-x-2 transition-transform" />
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
