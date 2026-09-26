# UMKM Bantarjati - Direktori UMKM Kelurahan Bantarjati

> 📱 **Platform digital untuk menjelajahi dan menemukan UMKM lokal di Kelurahan Bantarjati dengan dukungan online dan instalasi sebagai aplikasi native.**

🔗 **Live Demo:** [https://umkm-bantarjati-a14477.netlify.app/](https://umkm-bantarjati-a14477.netlify.app/)

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

```text
umkm-bantarjati-web/
├── .figma/
│   └── make/
│       └── site.json
├── .gitattributes
├── .gitignore
├── .mise.toml
├── AGENTS.md
├── CLAUDE.md
├── icon.svg
├── index.html
├── manifest.webmanifest
├── netlify.toml
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── vite.config.ts
├── src/
│   ├── App.tsx
│   ├── components/
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── data.ts
│   ├── index.css
│   ├── layouts/
│   │   └── Root.tsx
│   ├── main.tsx
│   ├── pages/
│   │   ├── Detail.tsx
│   │   ├── Direktori.tsx
│   │   ├── Home.tsx
│   │   ├── NotFound.tsx
│   │   └── Tentang.tsx
│   ├── routes.ts
│   └── vite-env.d.ts
└── README.md
