// ==========================================
// JAWABAN SOAL 1: Range Bilangan Prima
// ==========================================
console.log('=== Soal 1: Bilangan Prima ===');

function isPrime(num) {
  if (num === 1) return true;
  if (num <= 0) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function generatePrimes(start, end) {
  let primes = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes.join(',');
}

console.log('Start: 1, End: 20');
console.log('Result:', generatePrimes(1, 20));
17, 19;

console.log('\nStart: 15, End: 25');
console.log('Result:', generatePrimes(15, 25));
console.log('\n');

// ==========================================
// JAWABAN SOAL 2: Array Collection
// ==========================================
console.log('=== Soal 2: Array Collection ===');

let collection = [
  'C#',
  'Phyton',
  'Ruby',
  'C++',
  'PHP',
  'JavaScript',
  'VB',
  'Java',
];
console.log('Array Awal:', collection);
collection.splice(4, 0, 'React JS');
console.log("Setelah tambah 'React JS':", collection);

collection.pop();
console.log('Setelah hapus index terakhir:', collection);
console.log('\n');

// ==========================================
// JAWABAN SOAL 3: Bintang Segitiga
// ==========================================
console.log('=== Soal 3: Bintang Segitiga ===');

let rows = 5;
for (let i = 1; i <= rows; i++) {
  let spaces = ' '.repeat(rows - i);
  let stars = '*'.repeat(2 * i - 1);
  console.log(spaces + stars);
} // ==========================================
// JAWABAN SOAL 4: Frekuensi Karakter (Dictionary/Object)
// ==========================================
console.log('=== Jawaban Soal No 4 ===');

function hitungFrekuensi(teks) {
  let kamusFrekuensi = {};

  // Looping setiap huruf di dalam teks
  for (let karakter of teks) {
    // Jika karakter sudah ada, tambahkan 1. Jika belum, set jadi 1.
    kamusFrekuensi[karakter] = (kamusFrekuensi[karakter] || 0) + 1;
  }

  return kamusFrekuensi;
}

const hasilNo4 = hitungFrekuensi('banana');
console.log("Input: 'banana'");
console.log('Output:', hasilNo4);
console.log('\n');

// ==========================================
// JAWABAN SOAL 5: Pengurangan Stok FIFO
// ==========================================
console.log('=== Jawaban Soal No 5 (FIFO) ===');

// [PENANDA 1]: Membuat database dummy berupa Array of Objects.
// ambil data "Beras Cap Ikan Koi 5 KG" saja yang sudah berurutan dari tanggal terlama.
let stockBeras = [
  { nama: 'Beras Cap Ikan Koi 5 KG', stock: 10, tanggal: '5/8/2024' },
  { nama: 'Beras Cap Ikan Koi 5 KG', stock: 50, tanggal: '6/9/2024' },
  { nama: 'Beras Cap Ikan Koi 5 KG', stock: 50, tanggal: '6/30/2024' },
  { nama: 'Beras Cap Ikan Koi 5 KG', stock: 100, tanggal: '7/31/2024' },
];

// [PENANDA 2]: Menentukan jumlah stok yang mau ditarik/dikurangi
let targetKurang = 120;
console.log(`Target pengurangan: ${targetKurang} Pak\n`);
console.log('Proses Pengambilan FIFO (Dari tanggal terlama):');

// [PENANDA 3]: Proses Looping FIFO (First In First Out)
for (let i = 0; i < stockBeras.length; i++) {
  // Jika target pengurangan sudah 0, hentikan looping
  if (targetKurang === 0) break;

  // [PENANDA 4]: Cek apakah stok di baris ini cukup untuk memenuhi sisa target
  if (stockBeras[i].stock <= targetKurang) {
    // Jika stok KURANG DARI atau SAMA DENGAN target: Ambil semua stok di baris ini
    console.log(
      `-> Mengambil ${stockBeras[i].stock} Pak dari stok tanggal ${stockBeras[i].tanggal}`
    );
    targetKurang -= stockBeras[i].stock; // Kurangi target
    stockBeras[i].stock = 0; // Stok baris ini habis
  } else {
    // Jika stok LEBIH BANYAK dari sisa target: Ambil sebagian saja (sebanyak sisa target)
    console.log(
      `-> Mengambil sisa ${targetKurang} Pak dari stok tanggal ${stockBeras[i].tanggal}`
    );
    stockBeras[i].stock -= targetKurang; // Kurangi stok di baris ini
    targetKurang = 0; // Target selesai!
  }
}

// [PENANDA 5]: Menampilkan sisa stok setelah proses FIFO selesai
console.log('\nSisa Stok Setelah FIFO:');
console.table(stockBeras);
