import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { STATS, UMKM_DATA, CATEGORY_COLORS } from "../data"

export default function Home() {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    navigate(`/direktori?q=${encodeURIComponent(search)}`)
  }

  const featured = UMKM_DATA.slice(0, 3)

  return (
    <div>
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "520px" }}
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1774370792717-94f279836638?w=1400&h=600&fit=crop&auto=format"
            alt="Pasar UMKM Bantarjati"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(59,42,26,0.88) 0%, rgba(59,42,26,0.55) 60%, rgba(232,134,26,0.3) 100%)",
            }}
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-2xl">
            <div
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded"
              style={{ backgroundColor: "#e8861a", color: "#fff" }}
            >
              Kelurahan Bantarjati · Bogor Utara
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              Direktori UMKM
              <br />
              <span style={{ color: "#f5a83e" }}>Bantarjati</span>
            </h1>
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: "#e8d5be" }}
            >
              Temukan ratusan usaha mikro, kecil, dan menengah di Kelurahan
              Bantarjati. Dukung produk lokal, perkuat ekonomi warga bersama.
            </p>
            <form
              onSubmit={handleSearch}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div
                className="flex items-center gap-2 px-4 py-3 rounded-xl flex-1"
                style={{
                  backgroundColor: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#f5a83e" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Cari nama, produk, atau jasa..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-transparent text-white placeholder-white/50 outline-none flex-1 text-sm"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 rounded-xl font-semibold text-sm transition-all"
                style={{ backgroundColor: "#e8861a", color: "#fff" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f5a83e")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#e8861a")
                }
              >
                Cari Sekarang
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ backgroundColor: "#3b2a1a" }} className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl mb-1">{s.icon}</div>
                <div
                  className="font-display text-2xl font-bold"
                  style={{ color: "#f5a83e" }}
                >
                  {s.value}
                </div>
                <div className="text-xs mt-1" style={{ color: "#b8975a" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED UMKM */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2
                className="font-display text-3xl font-bold"
                style={{ color: "#3b2a1a" }}
              >
                UMKM Unggulan Kelurahan Bantarjati
              </h2>
              <p className="mt-1 text-sm" style={{ color: "#6b4c2a" }}>
                Pilihan usaha terbaik di Bantarjati
              </p>
            </div>
            <Link
              to="/direktori"
              className="text-sm font-semibold transition-colors"
              style={{ color: "#e8861a" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f5a83e")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#e8861a")}
            >
              Lihat Semua →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((umkm) => (
              <Link
                key={umkm.id}
                to={`/direktori/${umkm.id}`}
                className="rounded-2xl overflow-hidden shadow-sm group transition-all duration-300 block"
                style={{ backgroundColor: "#fff", border: "1px solid #e8d5be" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)"
                  e.currentTarget.style.boxShadow =
                    "0 16px 40px rgba(59,42,26,0.14)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = ""
                }}
              >
                <div className="relative h-48 overflow-hidden bg-amber-100">
                  <img
                    src={umkm.img}
                    alt={umkm.nama}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    className={`absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-full ${CATEGORY_COLORS[umkm.kategori]}`}
                  >
                    {umkm.kategori}
                  </span>
                </div>
                <div className="p-5">
                  <h3
                    className="font-display font-semibold text-base leading-snug mb-2"
                    style={{ color: "#3b2a1a" }}
                  >
                    {umkm.nama}
                  </h3>
                  <p
                    className="text-sm leading-relaxed line-clamp-2 mb-3"
                    style={{ color: "#6b4c2a" }}
                  >
                    {umkm.deskripsi}
                  </p>
                  <div
                    className="flex items-center gap-1.5 text-xs"
                    style={{ color: "#b8975a" }}
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {umkm.alamat}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ backgroundColor: "#ede4d8" }} className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: "#e8861a" }}
              >
                Tentang Program
              </div>
              <h2
                className="font-display text-3xl font-bold mb-5"
                style={{ color: "#3b2a1a" }}
              >
                Mendukung Ekonomi Lokal Bantarjati
              </h2>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "#6b4c2a" }}
              >
                Program UMKM Bantarjati hadir sebagai platform digital yang
                menghubungkan pelaku usaha kecil dan menengah di Kelurahan
                Bantarjati dengan masyarakat luas.
              </p>
              <p
                className="text-sm leading-relaxed mb-8"
                style={{ color: "#6b4c2a" }}
              >
                Daftarkan usaha Anda secara gratis dan dapatkan eksposur lebih
                luas kepada ribuan calon pelanggan di wilayah Bogor Utara dan
                sekitarnya.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/direktori"
                  className="px-6 py-3 rounded-xl font-semibold text-sm transition-all"
                  style={{ backgroundColor: "#e8861a", color: "#fff" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#f5a83e")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#e8861a")
                  }
                >
                  Lihat Direktori
                </Link>
                <Link
                  to="/tentang"
                  className="px-6 py-3 rounded-xl font-semibold text-sm transition-all"
                  style={{
                    backgroundColor: "transparent",
                    color: "#3b2a1a",
                    border: "1.5px solid #3b2a1a",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#3b2a1a"
                    e.currentTarget.style.color = "#f5efe6"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent"
                    e.currentTarget.style.color = "#3b2a1a"
                  }}
                >
                  Selengkapnya
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden h-52 bg-amber-100">
                <img
                  src="https://images.unsplash.com/photo-1683693282353-ddabfd3f5689?w=400&h=300&fit=crop&auto=format"
                  alt="UMKM lokal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-52 mt-8 bg-amber-100">
                <img
                  src="https://images.unsplash.com/photo-1660786442992-1ffb495fd962?w=400&h=300&fit=crop&auto=format"
                  alt="Pedagang lokal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2
              className="font-display text-3xl font-bold"
              style={{ color: "#3b2a1a" }}
            >
              Cara Mendaftar UMKM
            </h2>
            <p className="mt-2 text-sm" style={{ color: "#6b4c2a" }}>
              Proses mudah, cepat, dan tanpa biaya
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Isi Formulir",
                desc: "Lengkapi data usaha Anda melalui formulir online yang tersedia di halaman ini.",
              },
              {
                step: "02",
                title: "Verifikasi Data",
                desc: "Tim kami akan memverifikasi data dalam 1–2 hari kerja dan menghubungi Anda.",
              },
              {
                step: "03",
                title: "Tampil di Direktori",
                desc: "Usaha Anda langsung tampil di direktori dan bisa ditemukan oleh ribuan calon pelanggan.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-2xl"
                style={{ backgroundColor: "#fff", border: "1px solid #e8d5be" }}
              >
                <div
                  className="font-display text-4xl font-bold mb-4"
                  style={{ color: "#e8d5be" }}
                >
                  {item.step}
                </div>
                <h3
                  className="font-display font-semibold text-lg mb-2"
                  style={{ color: "#3b2a1a" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#6b4c2a" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
