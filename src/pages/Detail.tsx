import { useParams, Link, useNavigate } from 'react-router'
import { UMKM_DATA, CATEGORY_COLORS } from '../data'

export default function Detail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const umkm = UMKM_DATA.find((u) => u.id === Number(id))

  if (!umkm) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: '#f5efe6' }}>
        <div className="text-5xl mb-4">🏪</div>
        <h2 className="font-display text-2xl font-bold mb-2" style={{ color: '#3b2a1a' }}>UMKM Tidak Ditemukan</h2>
        <p className="text-sm mb-6" style={{ color: '#6b4c2a' }}>Data usaha ini tidak tersedia di direktori kami.</p>
        <Link
          to="/direktori"
          className="px-6 py-3 rounded-xl font-semibold text-sm"
          style={{ backgroundColor: '#e8861a', color: '#fff' }}
        >
          Kembali ke Direktori
        </Link>
      </div>
    )
  }

  const related = UMKM_DATA.filter((u) => u.kategori === umkm.kategori && u.id !== umkm.id).slice(0, 3)

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5efe6' }}>
      {/* BREADCRUMB */}
      <div style={{ backgroundColor: '#3b2a1a' }} className="py-3">
        <div className="max-w-6xl mx-auto px-4 flex items-center gap-2 text-xs" style={{ color: '#b8975a' }}>
          <Link to="/" className="hover:text-amber-400 transition-colors">Beranda</Link>
          <span>/</span>
          <Link to="/direktori" className="hover:text-amber-400 transition-colors">Direktori</Link>
          <span>/</span>
          <span className="text-white">{umkm.nama}</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT — main info */}
          <div className="lg:col-span-2">
            {/* Hero image */}
            <div className="rounded-2xl overflow-hidden h-72 bg-amber-100 mb-6">
              <img
                src={umkm.img}
                alt={umkm.nama}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Badges */}
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${CATEGORY_COLORS[umkm.kategori]}`}>
                {umkm.kategori}
              </span>
              <span
                className="text-xs px-3 py-1 rounded-full"
                style={{ backgroundColor: '#ede4d8', color: '#6b4c2a' }}
              >
                Berdiri sejak {umkm.berdiriSejak}
              </span>
            </div>

            <h1 className="font-display text-3xl font-bold mb-4" style={{ color: '#3b2a1a' }}>
              {umkm.nama}
            </h1>

            <p className="text-base leading-relaxed mb-6" style={{ color: '#6b4c2a' }}>
              {umkm.deskripsi}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {umkm.tag.map((t) => (
                <span
                  key={t}
                  className="text-sm px-3 py-1 rounded-full"
                  style={{ backgroundColor: '#fff', color: '#6b4c2a', border: '1px solid #e8d5be' }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Back button */}
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: '#6b4c2a' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#e8861a')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#6b4c2a')}
            >
              ← Kembali ke Direktori
            </button>
          </div>

          {/* RIGHT — sidebar */}
          <div className="space-y-4">
            {/* Contact card */}
            <div className="rounded-2xl p-6" style={{ backgroundColor: '#fff', border: '1px solid #e8d5be' }}>
              <h3 className="font-display font-semibold text-base mb-4" style={{ color: '#3b2a1a' }}>
                Informasi Usaha
              </h3>
              <div className="space-y-4">
                {[
                  { icon: '📍', label: 'Alamat', value: umkm.alamat },
                  { icon: '📞', label: 'Kontak', value: umkm.kontak },
                  { icon: '🕐', label: 'Jam Buka', value: umkm.jam },
                  { icon: '💰', label: 'Est. Omzet', value: umkm.omzet },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="flex gap-3">
                    <span className="text-base w-5 flex-shrink-0 mt-0.5">{icon}</span>
                    <div>
                      <div className="text-xs font-semibold mb-0.5" style={{ color: '#b8975a' }}>{label}</div>
                      <div className="text-sm" style={{ color: '#3b2a1a' }}>{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-2">
                <a
                  href={`https://wa.me/${umkm.kontak.replace(/\D/g, '').replace(/^0/, '62')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 rounded-xl font-semibold text-sm text-center transition-all"
                  style={{ backgroundColor: '#2d6a3f', color: '#fff' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#4a9460')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2d6a3f')}
                >
                  Hubungi via WhatsApp
                </a>
                <Link
                  to="/direktori"
                  className="block w-full py-3 rounded-xl font-semibold text-sm text-center transition-all"
                  style={{ backgroundColor: 'transparent', color: '#3b2a1a', border: '1.5px solid #3b2a1a' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#3b2a1a'; e.currentTarget.style.color = '#f5efe6' }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#3b2a1a' }}
                >
                  Kembali ke Direktori
                </Link>
              </div>
            </div>

            {/* Share card */}
            <div className="rounded-2xl p-5" style={{ backgroundColor: '#ede4d8', border: '1px solid #e8d5be' }}>
              <p className="text-xs font-semibold mb-1" style={{ color: '#6b4c2a' }}>Bagikan UMKM ini</p>
              <p className="text-xs" style={{ color: '#b8975a' }}>
                Bantu UMKM lokal berkembang dengan menyebarkan informasi ini kepada teman dan keluarga.
              </p>
            </div>
          </div>
        </div>

        {/* RELATED */}
        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="font-display text-2xl font-bold mb-6" style={{ color: '#3b2a1a' }}>
              UMKM Serupa — {umkm.kategori}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((u) => (
                <Link
                  key={u.id}
                  to={`/direktori/${u.id}`}
                  className="rounded-2xl overflow-hidden group transition-all duration-300 block"
                  style={{ backgroundColor: '#fff', border: '1px solid #e8d5be' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)'
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(59,42,26,0.12)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = ''
                  }}
                >
                  <div className="h-40 bg-amber-100 overflow-hidden">
                    <img src={u.img} alt={u.nama} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display font-semibold text-sm mb-1" style={{ color: '#3b2a1a' }}>{u.nama}</h3>
                    <p className="text-xs" style={{ color: '#6b4c2a' }}>{u.alamat}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
