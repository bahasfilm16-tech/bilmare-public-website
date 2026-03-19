import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Layanan from './pages/Layanan';
import Pendekatan from './pages/Pendekatan';
import KlienKami from './pages/KlienKami';
import { Insight, TentangKami, Login } from './pages/MiscPages';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="layanan" element={<Layanan />} />
          <Route path="pendekatan" element={<Pendekatan />} />
          <Route path="klien-kami" element={<KlienKami />} />
          <Route path="insight" element={<Insight />} />
          <Route path="tentang-kami" element={<TentangKami />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}