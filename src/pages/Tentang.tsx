import { Link } from 'react-router'
import { STATS } from '../data'

export default function Tentang() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5efe6' }}>
      {/* HEADER */}
      <section style={{ backgroundColor: '#3b2a1a' }} className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#e8861a' }}>
            Tentang Program
          </div>
          <h1 className="font-display text-4xl font-bold text-white mb-4">
            UMKM Bantarjati
          </h1>
          <p className="max-w-xl text-sm leading-relaxed" style={{ color: '#b8975a' }}>
            Inisiatif digital Kelurahan Bantarjati untuk memberdayakan pelaku usaha lokal dan
            menghubungkan mereka dengan masyarakat luas.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold mb-5" style={{ color: '#3b2a1a' }}>Misi Kami</h2>
              <div className="space-y-4 text-sm leading-relaxed" style={{ color: '#6b4c2a' }}>
                <p>
                  Program UMKM Bantarjati adalah platform digital yang lahir dari semangat
                  memajukan ekonomi warga Kelurahan Bantarjati, Kecamatan Bogor Utara.
                </p>
                <p>
                  Kami hadir untuk menjembatani kesenjangan antara pelaku UMKM yang memiliki
                  produk berkualitas namun terbatas dalam pemasaran digital, dengan konsumen
                  yang ingin mendukung produk lokal.
                </p>
                <p>
                  Melalui platform ini, setiap usaha — dari warung makan sederhana hingga
                  pengrajin batik — mendapat kesempatan yang sama untuk dikenal dan berkembang.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden h-72 bg-amber-100">
              <img
                src="https://images.unsplash.com/photo-1774370792717-94f279836638?w=700&h=500&fit=crop&auto=format"
                alt="Pasar Bantarjati"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ backgroundColor: '#ede4d8' }} className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-center mb-10" style={{ color: '#3b2a1a' }}>
            UMKM Bantarjati dalam Angka
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="text-center p-6 rounded-2xl" style={{ backgroundColor: '#fff', border: '1px solid #e8d5be' }}>
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="font-display text-3xl font-bold mb-1" style={{ color: '#e8861a' }}>{s.value}</div>
                <div className="text-xs" style={{ color: '#6b4c2a' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-8" style={{ color: '#3b2a1a' }}>Program & Layanan</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '📋',
                title: 'Pendaftaran Gratis',
                desc: 'Setiap UMKM di Bantarjati bisa mendaftar tanpa biaya apapun. Proses cepat dan mudah.',
              },
              {
                icon: '📢',
                title: 'Promosi Digital',
                desc: 'Profil usaha Anda akan tampil di direktori online yang bisa diakses seluruh masyarakat Bogor.',
              },
              {
                icon: '🎓',
                title: 'Pelatihan Usaha',
                desc: 'Program pelatihan kewirausahaan, pembukuan sederhana, dan pemasaran digital untuk pelaku UMKM.',
              },
              {
                icon: '🤝',
                title: 'Kemitraan',
                desc: 'Memfasilitasi kemitraan antar UMKM lokal dan dengan pelaku usaha yang lebih besar.',
              },
              {
                icon: '💳',
                title: 'Akses Permodalan',
                desc: 'Informasi dan pendampingan mengakses KUR, dana bergulir, dan program permodalan UMKM.',
              },
              {
                icon: '📊',
                title: 'Monitoring & Evaluasi',
                desc: 'Pemantauan perkembangan UMKM secara berkala oleh tim kelurahan bersama dinas terkait.',
              },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl" style={{ backgroundColor: '#fff', border: '1px solid #e8d5be' }}>
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-display font-semibold text-base mb-2" style={{ color: '#3b2a1a' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6b4c2a' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ backgroundColor: '#3b2a1a' }} className="py-14">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Ingin Bergabung?</h2>
          <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: '#b8975a' }}>
            Daftarkan UMKM Anda sekarang dan mulai menjangkau lebih banyak pelanggan di Bantarjati dan sekitarnya.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/direktori"
              className="px-8 py-3 rounded-xl font-semibold text-sm transition-all"
              style={{ backgroundColor: '#e8861a', color: '#fff' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f5a83e')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#e8861a')}
            >
              Lihat Direktori
            </Link>
            <a
              href="mailto:kel.bantarjati@bogorkota.go.id"
              className="px-8 py-3 rounded-xl font-semibold text-sm transition-all"
              style={{ backgroundColor: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.4)' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#fff' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)' }}
            >
              Hubungi Kelurahan
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
