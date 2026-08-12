export const CATEGORIES = ['Semua', 'Kuliner', 'Fashion', 'Kerajinan', 'Jasa', 'Perdagangan']

export interface Umkm {
  id: number
  nama: string
  kategori: string
  deskripsi: string
  alamat: string
  kontak: string
  jam: string
  img: string
  tag: string[]
  berdiriSejak: string
  omzet: string
}

export const UMKM_DATA: Umkm[] = [
  {
    id: 1,
    nama: 'Warung Makan Bu Sari',
    kategori: 'Kuliner',
    deskripsi: 'Masakan rumahan khas Sunda dengan cita rasa autentik. Tersedia nasi liwet, sayur asem, dan lauk pauk segar setiap hari.',
    alamat: 'Jl. Bantarjati No. 12',
    kontak: '0812-3456-7890',
    jam: 'Setiap hari 07.00–20.00',
    img: 'https://images.unsplash.com/photo-1658218615127-40b7068bbae5?w=600&h=400&fit=crop&auto=format',
    tag: ['Nasi Liwet', 'Sayur Asem', 'Halal'],
    berdiriSejak: '2015',
    omzet: 'Rp 5–8 jt/bln',
  },
  {
    id: 2,
    nama: 'Kerajinan Anyam Pak Hadi',
    kategori: 'Kerajinan',
    deskripsi: 'Produk anyaman bambu dan rotan berkualitas tinggi, dari keranjang, tas, hingga furnitur dekoratif. Bisa pesan sesuai desain.',
    alamat: 'Jl. Melati Gang III No. 5',
    kontak: '0813-5678-9012',
    jam: 'Sen–Sab 08.00–17.00',
    img: 'https://images.unsplash.com/photo-1545105580-06fbbf96241e?w=600&h=400&fit=crop&auto=format',
    tag: ['Bambu', 'Rotan', 'Custom Order'],
    berdiriSejak: '2008',
    omzet: 'Rp 10–15 jt/bln',
  },
  {
    id: 3,
    nama: 'Butik Batik Nusantara Ibu Dewi',
    kategori: 'Fashion',
    deskripsi: 'Koleksi batik tulis dan cap motif khas Bogor. Tersedia kain, baju jadi, serta workshop membatik untuk umum dan sekolah.',
    alamat: 'Jl. Bantarjati Raya No. 34',
    kontak: '0857-2345-6789',
    jam: 'Sen–Sab 09.00–18.00',
    img: 'https://images.unsplash.com/photo-1703946908870-200ef3067952?w=600&h=400&fit=crop&auto=format',
    tag: ['Batik Tulis', 'Workshop', 'Kain'],
    berdiriSejak: '2012',
    omzet: 'Rp 8–12 jt/bln',
  },
  {
    id: 4,
    nama: 'Bengkel Las Jaya Mandiri',
    kategori: 'Jasa',
    deskripsi: 'Layanan las listrik, las karbit, dan fabrication besi untuk pagar, kanopi, tangga, serta berbagai konstruksi ringan.',
    alamat: 'Jl. Cempaka No. 7',
    kontak: '0878-9012-3456',
    jam: 'Sen–Sab 07.00–17.00',
    img: 'https://images.unsplash.com/photo-1683693282353-ddabfd3f5689?w=600&h=400&fit=crop&auto=format',
    tag: ['Las Listrik', 'Kanopi', 'Pagar'],
    berdiriSejak: '2010',
    omzet: 'Rp 12–20 jt/bln',
  },
  {
    id: 5,
    nama: 'Toko Sembako Berkah',
    kategori: 'Perdagangan',
    deskripsi: 'Toko kebutuhan pokok lengkap dengan harga terjangkau. Melayani eceran dan grosir, tersedia layanan antar untuk wilayah Bantarjati.',
    alamat: 'Jl. Mawar No. 22',
    kontak: '0812-6789-0123',
    jam: 'Setiap hari 06.00–21.00',
    img: 'https://images.unsplash.com/photo-1774370792717-94f279836638?w=600&h=400&fit=crop&auto=format',
    tag: ['Grosir', 'Eceran', 'Antar Rumah'],
    berdiriSejak: '2005',
    omzet: 'Rp 25–40 jt/bln',
  },
  {
    id: 6,
    nama: 'Katering Dapur Bunda Yuli',
    kategori: 'Kuliner',
    deskripsi: 'Katering prasmanan dan nasi kotak untuk acara pernikahan, syukuran, arisan, dan rapat kantor. Melayani 50–500 porsi.',
    alamat: 'Jl. Dahlia No. 3',
    kontak: '0821-4567-8901',
    jam: 'Setiap hari (pesan sehari sebelumnya)',
    img: 'https://images.unsplash.com/photo-1638569099509-2f46eb4bb94e?w=600&h=400&fit=crop&auto=format',
    tag: ['Katering', 'Prasmanan', 'Nasi Kotak'],
    berdiriSejak: '2018',
    omzet: 'Rp 15–30 jt/bln',
  },
  {
    id: 7,
    nama: 'Salon & Spa Cantik Alami',
    kategori: 'Jasa',
    deskripsi: 'Perawatan kecantikan berbahan herbal alami — creambath, lulur, facial, dan potong rambut. Suasana nyaman dan harga bersahabat.',
    alamat: 'Jl. Bantarjati Dalam No. 9',
    kontak: '0856-7890-1234',
    jam: 'Sen–Min 09.00–20.00',
    img: 'https://images.unsplash.com/photo-1655740247333-a044983d729d?w=600&h=400&fit=crop&auto=format',
    tag: ['Herbal', 'Creambath', 'Facial'],
    berdiriSejak: '2019',
    omzet: 'Rp 6–10 jt/bln',
  },
  {
    id: 8,
    nama: 'Konveksi Jahit Maju Bersama',
    kategori: 'Fashion',
    deskripsi: 'Produksi seragam sekolah, seragam kerja, kaos polos, dan jaket sablon. Minimum order 12 pcs, pengerjaan 5–7 hari kerja.',
    alamat: 'Jl. Kenanga No. 15',
    kontak: '0819-2345-6780',
    jam: 'Sen–Sab 08.00–17.00',
    img: 'https://images.unsplash.com/photo-1683693283403-92383815ab2f?w=600&h=400&fit=crop&auto=format',
    tag: ['Seragam', 'Konveksi', 'Sablon'],
    berdiriSejak: '2014',
    omzet: 'Rp 18–25 jt/bln',
  },
  {
    id: 9,
    nama: 'Warung Kopi Kang Ade',
    kategori: 'Kuliner',
    deskripsi: 'Kopi single origin Jawa dan Sumatera diseduh dengan metode manual brew. Tersedia aneka camilan tradisional dan free WiFi.',
    alamat: 'Jl. Flamboyan No. 1',
    kontak: '0817-3456-7891',
    jam: 'Setiap hari 06.30–22.00',
    img: 'https://images.unsplash.com/photo-1584455486010-760bd0b28fc2?w=600&h=400&fit=crop&auto=format',
    tag: ['Kopi', 'Manual Brew', 'WiFi'],
    berdiriSejak: '2020',
    omzet: 'Rp 7–12 jt/bln',
  },
]

export const STATS = [
  { label: 'Total UMKM Terdaftar', value: '142', icon: '🏪' },
  { label: 'Sektor Kuliner', value: '48', icon: '🍽️' },
  { label: 'Tenaga Kerja Terserap', value: '380+', icon: '👥' },
  { label: 'Omzet Gabungan / Bulan', value: 'Rp 2,1 M', icon: '📈' },
]

export const CATEGORY_COLORS: Record<string, string> = {
  Kuliner: 'bg-amber-100 text-amber-800',
  Fashion: 'bg-rose-100 text-rose-800',
  Kerajinan: 'bg-green-100 text-green-800',
  Jasa: 'bg-blue-100 text-blue-800',
  Perdagangan: 'bg-purple-100 text-purple-800',
}
