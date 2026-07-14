# Solusi Tugas Algoritma & SQL Query (Node.js)

Repositori ini berisi kumpulan skrip JavaScript (Node.js) untuk menyelesaikan berbagai studi kasus logika algoritma dan eksekusi *query* *database* relasional. 

Proyek ini dibangun menggunakan lingkungan Node.js murni dan memanfaatkan **AlaSQL** (In-Memory JavaScript SQL Database). Penggunaan AlaSQL dipilih agar eksekusi *query* SQL dapat langsung berjalan mulus di berbagai *environment* (termasuk StackBlitz, GitHub Codespaces, atau lokal) tanpa perlu menginstal *server database* terpisah atau pusing mengurus masalah *file binding* C++ pada SQLite.

## 🚀 Teknologi yang Digunakan
* **Bahasa:** JavaScript / Node.js
* **Database:** [AlaSQL](https://github.com/agershun/alasql) (In-Memory SQL)
* **Environment:** StackBlitz / Local Node.js

## 📂 Daftar Studi Kasus
Proyek ini menyelesaikan dua bagian utama:

**1. Logika Algoritma:**
- *Generate* deret Bilangan Prima dalam rentang tertentu.
- Manipulasi *Array Collection* (Insert dan Delete).
- Mencetak pola Bintang Segitiga.
- Menghitung frekuensi karakter (Dictionary/Object).
- Logika pengurangan stok barang dengan metode FIFO (*First In, First Out*).

**2. SQL Query (Tabel: Customers, Salesman, Orders, Stock):**
- Mencari pelanggan yang tidak membuat pesanan.
- Menghitung total pesanan tiap pelanggan.
- Mencari pelanggan dengan pesanan dari beberapa *salesman* berbeda.
- Mengurutkan pelanggan berdasarkan jumlah pesanan terbanyak.
- Mencari *salesman* dengan komisi tertinggi.
- Memfilter data stok barang di bawah limit tertentu.
- Membuat rekapan (*summary*) total stok berdasarkan kategori barang.

## 🛠️ Cara Instalasi & Menjalankan Program

Pastikan kamu sudah menginstal **Node.js** di komputermu (atau jalankan langsung melalui StackBlitz/WebContainers).

**1. Clone Repositori (Jika di lokal)**
\`\`\`bash
git clone https://github.com/DinoDarmayanto/tugas-algoritma-dan-sql.git
cd tugas-algoritma-dan-sql
\`\`\`

**2. Instalasi Dependency**
Karena kita menggunakan `alasql` untuk menjalankan *database*, lakukan instalasi *package* terlebih dahulu:
\`\`\`bash
npm install
\`\`\`

**3. Eksekusi Skrip**
Jalankan perintah berikut di terminal untuk melihat hasil *output* algoritma dan tabel SQL secara langsung:
\`\`\`bash
node SoalSql.js
\`\`\`
*(Catatan: Jika kamu menaruh kode logikanya di file berbeda seperti `index.js` atau `algoritma.js`, cukup ganti nama file pada perintah `node` di atas).*

## 💡 Catatan Tambahan
Semua tabel dan data *dummy* akan di-*generate* secara otomatis (*on-the-fly*) di dalam memori saat skrip dijalankan. Output akan dicetak dengan format tabel yang rapi di terminal menggunakan `console.table()`.