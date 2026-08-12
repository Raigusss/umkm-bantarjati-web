export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#3b2a1a' }} className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="font-display font-bold text-white text-lg mb-2">UMKM Bantarjati</div>
            <p className="text-sm leading-relaxed" style={{ color: '#b8975a' }}>
              Platform resmi direktori UMKM Kelurahan Bantarjati, Kecamatan Bogor Utara, Kota Bogor, Jawa Barat.
            </p>
          </div>
          <div>
            <div className="font-semibold text-white text-sm mb-3">Kontak Kelurahan</div>
            <div className="space-y-1.5 text-sm" style={{ color: '#b8975a' }}>
              <p>📍 Jl. Bantarjati Raya No. 1, Bogor Utara</p>
              <p>📞 (0251) 8312-xxx</p>
              <p>✉️ kel.bantarjati@bogorkota.go.id</p>
            </div>
          </div>
          <div>
            <div className="font-semibold text-white text-sm mb-3">Jam Pelayanan</div>
            <div className="space-y-1.5 text-sm" style={{ color: '#b8975a' }}>
              <p>Senin – Jumat: 08.00 – 16.00 WIB</p>
              <p>Sabtu: 08.00 – 12.00 WIB</p>
              <p>Minggu & Libur Nasional: Tutup</p>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(184,151,90,0.3)' }} className="pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs" style={{ color: '#b8975a' }}>© 2026 Kelurahan Bantarjati. Hak cipta dilindungi.</p>
          <p className="text-xs" style={{ color: '#b8975a' }}>Dibuat untuk kemajuan UMKM lokal Bogor</p>
        </div>
      </div>
    </footer>
  )
}
