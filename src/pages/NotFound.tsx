import { Link } from 'react-router'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: '#f5efe6' }}>
      <div className="text-6xl mb-4">🏪</div>
      <h1 className="font-display text-4xl font-bold mb-2" style={{ color: '#3b2a1a' }}>404</h1>
      <p className="text-base mb-6" style={{ color: '#6b4c2a' }}>Halaman yang Anda cari tidak ditemukan.</p>
      <Link
        to="/"
        className="px-6 py-3 rounded-xl font-semibold text-sm"
        style={{ backgroundColor: '#e8861a', color: '#fff' }}
      >
        Kembali ke Beranda
      </Link>
    </div>
  )
}
