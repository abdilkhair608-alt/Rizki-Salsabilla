# Undangan Rizki Budiman & Salsabilla Rivalina

Salinan mandiri dari desain undangan sebelumnya, memakai React, Vite dan Tailwind.

- Akad: Jumat, 30 Oktober 2026, pukul 14.00 WIB sampai selesai.
- Tempat akad: Masjid Tabliqhiyah Garegeh, Bukittinggi.
- Resepsi mengikuti undangan sebelumnya: Senin, 9 November 2026, pukul 10.00 WIB,
  Jl. N.J.Dt.Mangkuto Ameh No.21, Koto Selayan, Bukittinggi.
- Semua nama mempelai dan orang tua disimpan di src/data/wedding.js.
- Tetap menggunakan ilustrasi pernikahan, bukan foto pribadi mempelai.

## Menjalankan

Buka terminal di folder ini, kemudian:

```sh
npm install
npm run dev -- --port 5174
```

Pada PowerShell gunakan npm.cmd jika npm.ps1 diblokir.

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

## Pemeriksaan

```sh
npm run check
```

Fitur: menu mobile dengan blur, hero, galeri, hitung mundur, RSVP berdasarkan
ID browser, hati berdetak setelah konfirmasi, dan tirai pembuka melengkung.

# Rizki-Salsabilla
