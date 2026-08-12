import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router'
import { CATEGORIES, UMKM_DATA, CATEGORY_COLORS } from '../data'

export default function Direktori() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [activeCategory, setActiveCategory] = useState('Semua')
  const [search, setSearch] = useState(searchParams.get('q') ?? '')

  useEffect(() => {
    const q = searchParams.get('q')
    if (q) setSearch(q)
  }, [searchParams])

  const filtered = UMKM_DATA.filter((u) => {
    const matchCat = activeCategory === 'Semua' || u.kategori === activeCategory
    const matchSearch =
      search === '' ||
      u.nama.toLowerCase().includes(search.toLowerCase()) ||
      u.deskripsi.toLowerCase().includes(search.toLowerCase()) ||
      u.tag.some((t) => t.toLowerCase().includes(search.toLowerCase()))
    return matchCat && matchSearch
  })

  const handleSearch = (val: string) => {
    setSearch(val)
    if (val) setSearchParams({ q: val })
    else setSearchParams({})
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5efe6' }}>
      {/* PAGE HEADER */}
      <section style={{ backgroundColor: '#3b2a1a' }} className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#e8861a' }}>
            Direktori UMKM
          </div>
          <h1 className="font-display text-4xl font-bold text-white mb-4">
            Semua Usaha di Bantarjati
          </h1>
          <p className="text-sm mb-6" style={{ color: '#b8975a' }}>
            Temukan dan hubungi pelaku usaha mikro, kecil, dan menengah di Kelurahan Bantarjati.
          </p>
          {/* SEARCH */}
          <div
            className="flex items-center gap-3 px-4 py-3 rounded-xl max-w-lg"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
          >
            <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#f5a83e' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Cari nama, produk, atau jasa..."
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              className="bg-transparent text-white placeholder-white/40 outline-none flex-1 text-sm"
            />
            {search && (
              <button
                onClick={() => handleSearch('')}
                className="text-white/50 hover:text-white transition-colors text-lg leading-none"
              >
                ×
              </button>
            )}
          </div>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          {/* CATEGORY FILTER */}
          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                style={
                  activeCategory === cat
                    ? { backgroundColor: '#e8861a', color: '#fff', border: '1.5px solid #e8861a' }
                    : { backgroundColor: 'transparent', color: '#6b4c2a', border: '1.5px solid #b8975a' }
                }
              >
                {cat}
              </button>
            ))}
            <span className="ml-auto text-sm self-center" style={{ color: '#b8975a' }}>
              {filtered.length} usaha ditemukan
            </span>
          </div>

          {/* GRID */}
          {filtered.length === 0 ? (
            <div className="text-center py-24" style={{ color: '#b8975a' }}>
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-lg font-medium">Tidak ada UMKM yang cocok</p>
              <p className="text-sm mt-2">Coba kata kunci lain atau ubah kategori</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((umkm) => (
                <Link
                  key={umkm.id}
                  to={`/direktori/${umkm.id}`}
                  className="rounded-2xl overflow-hidden shadow-sm group transition-all duration-300 block"
                  style={{ backgroundColor: '#fff', border: '1px solid #e8d5be' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = '0 16px 40px rgba(59,42,26,0.14)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = ''
                  }}
                >
                  <div className="relative h-48 overflow-hidden bg-amber-100">
                    <img
                      src={umkm.img}
                      alt={umkm.nama}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className={`absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-full ${CATEGORY_COLORS[umkm.kategori]}`}>
                      {umkm.kategori}
                    </span>
                    <span
                      className="absolute top-3 right-3 text-xs px-2 py-1 rounded-full"
                      style={{ backgroundColor: 'rgba(59,42,26,0.7)', color: '#f5efe6' }}
                    >
                      Sejak {umkm.berdiriSejak}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-base leading-snug mb-2" style={{ color: '#3b2a1a' }}>
                      {umkm.nama}
                    </h3>
                    <p className="text-sm leading-relaxed line-clamp-2 mb-4" style={{ color: '#6b4c2a' }}>
                      {umkm.deskripsi}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {umkm.tag.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: '#f5efe6', color: '#6b4c2a', border: '1px solid #e8d5be' }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid #f0e5d4' }}>
                      <div className="flex items-center gap-1.5 text-xs" style={{ color: '#b8975a' }}>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {umkm.alamat}
                      </div>
                      <span className="text-xs font-semibold" style={{ color: '#e8861a' }}>
                        Lihat Detail →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
