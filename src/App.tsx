/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const Layanan = lazy(() => import('./pages/Layanan'));
const Metodologi = lazy(() => import('./pages/Metodologi'));
const TentangKami = lazy(() => import('./pages/TentangKami'));
const Kontak = lazy(() => import('./pages/Kontak'));

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-off-white font-sans">

        <Nav />
        <main className="flex-grow">
          <Suspense fallback={<div className="h-screen flex items-center justify-center bg-deep-navy text-white font-georgia">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/layanan" element={<Layanan />} />
              <Route path="/metodologi" element={<Metodologi />} />
              <Route path="/tentang-kami" element={<TentangKami />} />
              <Route path="/kontak" element={<Kontak />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

