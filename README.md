# UMKM Bantarjati - Direktori UMKM Kelurahan Bantarjati

> 📱 **Platform digital untuk menjelajahi dan menemukan UMKM lokal di Kelurahan Bantarjati dengan dukungan offline dan instalasi sebagai aplikasi native.**

## 📋 Daftar Isi

- [Tentang Proyek](#tentang-proyek)
- [Fitur Utama](#fitur-utama)
- [Tech Stack](#tech-stack)
- [Struktur Proyek](#struktur-proyek)
- [Alur Aplikasi](#alur-aplikasi)
- [Flowchart Sistem](#flowchart-sistem)
- [Instalasi & Setup](#instalasi--setup)
- [Panduan Penggunaan](#panduan-penggunaan)
- [Kontribusi](#kontribusi)

---

## 📌 Tentang Proyek

**UMKM Bantarjati Web** adalah aplikasi Progressive Web App (PWA) yang dirancang untuk menyediakan direktori lengkap dan mudah diakses dari semua Usaha Mikro Kecil dan Menengah (UMKM) di Kelurahan Bantarjati, Bogor.

Aplikasi ini dibangun dengan teknologi modern:
- **React 19** untuk UI yang responsif dan interaktif
- **Vite** untuk build yang cepat dan hot reload development
- **Tailwind CSS v4** untuk styling yang konsisten
- **React Router** untuk navigasi antar halaman
- **Service Worker (PWA)** untuk akses offline dan instalasi sebagai aplikasi native

### 📊 Statistik UMKM Bantarjati
- **142** UMKM terdaftar
- **48** sektor kuliner
- **380+** tenaga kerja terserap
- **Rp 2,1 M** omzet gabungan per bulan

---

## ✨ Fitur Utama

### 1. **Halaman Home / Landing Page**
   - Tampilan hero dengan pengenalan aplikasi
   - Statistik UMKM Bantarjati
   - Featured UMKM pilihan
   - Call-to-action untuk menjelajahi direktori

### 2. **Halaman Direktori**
   - Filter UMKM berdasarkan kategori (Semua, Kuliner, Fashion, Kerajinan, Jasa, Perdagangan)
   - Daftar UMKM dalam grid layout
   - Informasi dasar setiap UMKM (nama, kategori, deskripsi singkat)
   - Search/filter real-time

### 3. **Halaman Detail UMKM**
   - Informasi lengkap tentang setiap UMKM
   - Foto UMKM berkualitas
   - Deskripsi detail bisnis
   - Alamat lengkap
   - Nomor kontak (WhatsApp clickable)
   - Jam operasional
   - Tags/label produk
   - Informasi tambahan (tahun berdiri, omzet)
   - Tombol navigasi back/share

### 4. **Halaman Tentang**
   - Informasi tentang Kelurahan Bantarjati
   - Visi dan misi program UMKM
   - Tim pengembang
   - Contact & sosial media

### 5. **Progressive Web App (PWA)**
   - ✅ **Offline Support** - Aplikasi tetap berfungsi tanpa internet
   - ✅ **Install as App** - Bisa diinstal di home screen smartphone/desktop
   - ✅ **Push Notifications** - Notifikasi update (opsional)
   - ✅ **Auto-update** - Konten terbaru diunduh otomatis saat online

### 6. **Responsive Design**
   - 📱 Mobile-first design
   - 💻 Tampilan sempurna di tablet dan desktop
   - 🎨 Tema warna yang menarik dan konsisten

---

## 🛠️ Tech Stack

| Kategori | Teknologi |
|----------|-----------|
| **Frontend Framework** | React 19, React Router 8 |
| **Build Tool** | Vite 8 |
| **Styling** | Tailwind CSS v4 + @tailwindcss/vite |
| **Language** | TypeScript 5.7 |
| **PWA** | Workbox Window, vite-plugin-pwa |
| **Package Manager** | pnpm |
| **Type Checking** | TypeScript |
| **Code Formatting** | oxfmt |
| **Platform** | Figma Make (Custom Vite Config) |

---

## 📁 Struktur Proyek
umkm-bantarjati-web/ ├── .figma/ # Figma Make konfigurasi │ └── make/ │ └── site.json # Site metadata configuration ├── src/ │ ├── main.tsx # React entry point │ ├── App.tsx # Root component dengan PWA logic │ ├── index.css # Global styles & Tailwind imports │ ├── data.ts # Konstanta & data UMKM (hardcoded) │ ├── routes.ts # Definisi routing React Router │ ├── vite-env.d.ts # Vite type definitions │ │ │ ├── components/ # Reusable UI components │ │ ├── Navbar.tsx # Navigation bar dengan responsive menu │ │ └── Footer.tsx # Footer dengan contact info │ │ │ ├── layouts/ # Layout templates │ │ └── Root.tsx # Root layout dengan Navbar & Footer │ │ │ └── pages/ # Page components (routes) │ ├── Home.tsx # Halaman home/landing │ ├── Direktori.tsx # List UMKM dengan filter │ ├── Detail.tsx # Detail halaman UMKM │ ├── Tentang.tsx # About page │ └── NotFound.tsx # 404 page │ ├── public/ │ ├── icon.svg # PWA icon │ └── manifest.webmanifest # PWA manifest │ ├── index.html # HTML entry point ├── package.json # Dependencies & scripts ├── pnpm-lock.yaml # Dependency lock file ├── tsconfig.json # TypeScript config ├── vite.config.ts # Vite configuration (dengan PWA plugin) ├── tailwind.config.ts # Tailwind CSS config ├── .gitignore # Git ignore rules ├── .gitattributes # Git attributes ├── .mise.toml # Tool versions (Node.js, pnpm) ├── netlify.toml # Netlify deployment config ├── AGENTS.md # Dokumentasi untuk Figma Make agents └── README.md # File ini
