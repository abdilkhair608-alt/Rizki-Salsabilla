# Undangan Rizki Budiman & Salsabilla Rivalina

Menggunakan template terbaru undangan Ai & Cici, memakai React, Vite dan Tailwind,
dengan identitas, jadwal, dan penyimpanan RSVP khusus Rizki & Salsabilla.

- Akad: Jumat, 30 Oktober 2026, pukul 14.00 WIB sampai selesai.
- Tempat akad: Masjid Tabliqhiyah Garegeh, Bukittinggi.
- Resepsi mengikuti undangan sebelumnya: Senin, 9 November 2026, pukul 10.00 WIB,
  Jl. N.J.Dt.Mangkuto Ameh No.21, Koto Selayan, Bukittinggi.
- Semua nama mempelai dan orang tua disimpan di src/data/wedding.js.
- Bagian mempelai memakai foto Rizki dan Salsabilla; hero dan galeri tetap memakai ilustrasi pernikahan.

## Menjalankan

Buka terminal di folder ini, kemudian:

```sh
npm install
npm run dev -- --port 5174
```

Pada PowerShell gunakan npm.cmd jika npm.ps1 diblokir.

## Tautan undangan dengan nama tamu

Buka `/?kelola=undangan` pada domain website Rizki & Salsabilla.
Masukkan nama tamu, tekan **Buat tautan undangan**, lalu salin tautan/pesan
atau pilih **Kirim via WhatsApp**. Untuk tamu berikutnya, ganti nama dan buat
tautan baru. Tautan sebelumnya tetap berlaku.

Setiap tamu menerima tautan `?to=Nama+Tamu`. Sampul menampilkan nama tersebut
dan tombol **Buka Undangan** untuk masuk ke halaman pernikahan. Tanpa nama,
sampul menampilkan **Tamu Undangan**. Daftar tamu tidak disimpan oleh pembuat
tautan. Pesan pengantar, nama pada sampul, dan monogram memakai data di
`src/data/wedding.js`.

Di ponsel, navigasi tetap berada di bawah layar saat di-scroll. Bagian aktif
ditandai dan konten diberi jarak agar tidak tertutup navbar. Warna teks dan
latar terang mengikuti perbaikan kontras template terbaru.

## Deploy dan RSVP

Buat repository dan project Vercel terpisah, pilih root folder ini, preset Vite,
build npm run build dan output dist. Hubungkan Private Blob ke project yang baru.
Panduan lengkap ada di [docs/vercel-rsvp.md](docs/vercel-rsvp.md).

Data lokal dibuat baru di .data/rsvp.json. Tidak ada data kehadiran, kredensial,
.env, koneksi Vercel atau riwayat Git undangan sebelumnya yang disalin.
Prefix Blob default adalah rizki-salsabilla/production dan rizki-salsabilla/preview,
sedangkan ID browser memakai key rizki-salsabilla.browser-id.v1.
Biarkan RSVP_BLOB_PREFIX kosong agar prefix default terpisah ini digunakan.
Jika mengisi prefix sendiri, jangan gunakan prefix undangan Ai dan Cici.
Gunakan domain tetap agar browser tamu selalu dikenali.

Pemeriksaan API Vercel tanpa menambah konfirmasi tamu:

```sh
npm.cmd run check:vercel -- https://DOMAIN-UNDANGAN.vercel.app
```

## Pemeriksaan

```sh
npm run check
```

Fitur: sampul nama tamu, pembuat tautan dan pesan WhatsApp, navbar mobile di bawah,
hero, galeri, hitung mundur, RSVP berdasarkan ID browser, dan hati berdetak
setelah konfirmasi. Nama serta jadwal tetap khusus Rizki & Salsabilla.
