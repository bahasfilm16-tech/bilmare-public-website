import { useState, type ChangeEvent, type FormEvent } from 'react';
import { supabase } from '../supabaseClient';

interface ContactFormProps {
  source?: 'home' | 'kontak';
}

interface FormData {
  namaLengkap: string;
  namaPerusahaan: string;
  jabatan: string;
  email: string;
  nomorWa: string;
  layanan: string;
  pesan: string;
}

const INITIAL: FormData = {
  namaLengkap: '',
  namaPerusahaan: '',
  jabatan: '',
  email: '',
  nomorWa: '',
  layanan: 'PSPK Readiness Assessment',
  pesan: '',
};

const INPUT_CLASS =
  'w-full border border-line rounded px-4 py-3 bg-off-white focus:outline-none focus:border-mckinsey-blue focus:ring-2 focus:ring-mckinsey-blue/10 font-sans text-[15px] text-text-dark transition-colors placeholder:text-text-muted/50';

export default function ContactForm({ source = 'kontak' }: ContactFormProps) {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handle = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error: dbError } = await supabase.from('leads').insert([
      {
        nama_lengkap: form.namaLengkap,
        nama_perusahaan: form.namaPerusahaan,
        jabatan: form.jabatan || null,
        email: form.email,
        nomor_wa: form.nomorWa,
        layanan: form.layanan,
        pesan: form.pesan || null,
        source,
      },
    ]);

    if (dbError) {
      setError(
        'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi atau hubungi kami langsung di info@bilmare.com'
      );
    } else {
      setSuccess(true);
      setForm(INITIAL);
    }
    setLoading(false);
  };

  if (success) {
    return (
      <div className="bg-white p-8 md:p-12 shadow-2xl rounded-sm w-full text-center">
        <div className="w-16 h-16 bg-mckinsey-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-mckinsey-blue"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-georgia text-text-dark text-2xl font-bold mb-4">Terima Kasih!</h3>
        <p className="font-sans text-text-muted text-[15px] leading-relaxed mb-8">
          Pesan Anda telah kami terima. Tim Bilmare akan menghubungi Anda dalam{' '}
          <strong>1×24 jam kerja</strong> melalui email atau WhatsApp yang Anda daftarkan.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="font-sans text-mckinsey-blue text-sm font-semibold hover:text-blue-mid transition-colors underline underline-offset-4"
        >
          Kirim pesan lain
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 shadow-2xl rounded-sm w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="block font-sans text-text-dark text-[13px] font-semibold mb-2">
            Nama Lengkap *
          </label>
          <input
            required
            type="text"
            name="namaLengkap"
            value={form.namaLengkap}
            onChange={handle}
            placeholder="John Doe"
            className={INPUT_CLASS}
          />
        </div>
        <div>
          <label className="block font-sans text-text-dark text-[13px] font-semibold mb-2">
            Nama Perusahaan *
          </label>
          <input
            required
            type="text"
            name="namaPerusahaan"
            value={form.namaPerusahaan}
            onChange={handle}
            placeholder="PT. Contoh Tbk"
            className={INPUT_CLASS}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="block font-sans text-text-dark text-[13px] font-semibold mb-2">
            Jabatan
          </label>
          <input
            type="text"
            name="jabatan"
            value={form.jabatan}
            onChange={handle}
            placeholder="Corporate Secretary"
            className={INPUT_CLASS}
          />
        </div>
        <div>
          <label className="block font-sans text-text-dark text-[13px] font-semibold mb-2">
            Email Bisnis *
          </label>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handle}
            placeholder="anda@perusahaan.com"
            className={INPUT_CLASS}
          />
        </div>
      </div>

      <div className="mb-5">
        <label className="block font-sans text-text-dark text-[13px] font-semibold mb-2">
          Nomor WhatsApp *
        </label>
        <input
          required
          type="tel"
          name="nomorWa"
          value={form.nomorWa}
          onChange={handle}
          placeholder="+62 812 3456 7890"
          className={INPUT_CLASS}
        />
      </div>

      <div className="mb-5">
        <label className="block font-sans text-text-dark text-[13px] font-semibold mb-2">
          Saya tertarik dengan
        </label>
        <select
          name="layanan"
          value={form.layanan}
          onChange={handle}
          className={INPUT_CLASS}
        >
          <option>PSPK Readiness Assessment</option>
          <option>Tier 1 – Verification &amp; Disclosure Readiness</option>
          <option>Tier 2 – Full Report Development</option>
          <option>Institutional Memory Retainer</option>
          <option>Belum tahu — ingin konsultasi dulu</option>
        </select>
      </div>

      <div className="mb-7">
        <label className="block font-sans text-text-dark text-[13px] font-semibold mb-2">
          Ada yang ingin Anda ceritakan?{' '}
          <span className="font-normal text-text-muted">(Opsional)</span>
        </label>
        <textarea
          rows={4}
          name="pesan"
          value={form.pesan}
          onChange={handle}
          placeholder="Ceritakan situasi perusahaan Anda..."
          className={`${INPUT_CLASS} resize-none`}
        />
      </div>

      {error && (
        <div className="mb-5 p-4 bg-red-50 border border-red-200 rounded-sm text-red-700 font-sans text-[13px] leading-relaxed">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-mckinsey-blue hover:bg-blue-mid disabled:opacity-60 disabled:cursor-not-allowed text-white font-sans font-semibold py-4 rounded-sm transition-colors mb-4 flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <svg className="animate-spin h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Mengirim...
          </>
        ) : (
          'Kirim & Jadwalkan Discovery Call'
        )}
      </button>

      <p className="text-center font-sans text-text-muted text-[13px]">
        Tim Bilmare akan menghubungi Anda dalam 1×24 jam kerja.
      </p>
    </form>
  );
}
