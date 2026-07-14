const alasql = require('alasql');

console.log("Menyiapkan Database In-Memory (Pure JavaScript)...\n");

// ==========================================
// 1. SETUP TABEL & INSERT DUMMY DATA
// ==========================================

alasql(`
  CREATE TABLE Customers (customer_id INT, customer_name STRING, customer_city STRING);
  CREATE TABLE Salesman (salesman_id INT, salesman_name STRING, salesman_city STRING, commission FLOAT);
  CREATE TABLE Orders (order_id INT, order_date STRING, amount FLOAT, salesman_id INT, customer_id INT);
  CREATE TABLE Stock (ID INT, Nama_Barang STRING, Kode_Barang STRING, Kategori_Barang STRING, Satuan STRING, Harga_Beli INT, Stock INT, Order_Date STRING);
`);

alasql(`INSERT INTO Customers VALUES 
  (1, 'Alpha Corp', 'New York'), (2, 'Beta Ltd', 'London'), 
  (3, 'Gamma Inc', 'Sydney'), (4, 'Delta Corp', 'Madrid')`);

alasql(`INSERT INTO Salesman VALUES 
  (1, 'Lauda', 'New York', 0.15), (2, 'Miomio', 'Los Angeles', 0.12), 
  (3, 'Kamille', 'Houston', 0.10), (4, 'Agus', 'Chicago', 0.14)`);

alasql(`INSERT INTO Orders VALUES 
  (1, '2023-01-01', 200.00, 1, 1), (2, '2023-01-02', 250.00, 2, 1),
  (3, '2023-01-03', 150.00, 3, 2), (4, '2023-01-04', 300.00, 4, 3),
  (5, '2023-01-05', 400.00, 1, 2), (6, '2023-01-06', 350.00, 2, 3),
  (7, '2023-01-07', 500.00, 3, 1), (8, '2023-01-08', 200.00, 4, 3)`);

alasql(`INSERT INTO Stock VALUES 
  (1, 'Benang', 'SKU/00001', 'Bahan Baku Gamis', 'Pcs', 10000, 5, '8/8/2024'),
  (1, 'Benang', 'SKU/00001', 'Bahan Baku Gamis', 'Pcs', 10500, 30, '9/1/2024'),
  (2, 'Benang A', 'SKU/00002', 'Bahan Baku Gamis', 'Pcs', 10000, 20, '8/8/2024'),
  (2, 'Benang A', 'SKU/00002', 'Bahan Baku Gamis', 'Pcs', 10000, 60, '9/1/2024'),
  (3, 'Beras Cap Ikan Koi 5 KG', 'SKU/00003', 'Beras', 'Pak', 60000, 10, '5/8/2024'),
  (3, 'Beras Cap Ikan Koi 5 KG', 'SKU/00003', 'Beras', 'Pak', 61000, 50, '6/9/2024'),
  (3, 'Beras Cap Ikan Koi 5 KG', 'SKU/00003', 'Beras', 'Pak', 60500, 50, '6/30/2024'),
  (3, 'Beras Cap Ikan Koi 5 KG', 'SKU/00003', 'Beras', 'Pak', 60125, 100, '7/31/2024'),
  (4, 'Beras Dua Putri 5 KG', 'SKU/00004', 'Beras', 'Pak', 60000, 20, '8/8/2024'),
  (5, 'Beras Lahap', 'SKU/00005', 'Beras', 'Kg', 12000, 30, '3/3/2024'),
  (5, 'Beras Lahap', 'SKU/00005', 'Beras', 'Kg', 12000, 100, '4/3/2024')`);

// ==========================================
// 2. EKSEKUSI QUERY DAN TAMPILKAN HASIL
// ==========================================
console.log("Memproses Query SQL...\n");

// Fungsi pembantu eksekusi
const jalankanQuery = (nomorSoal, deskripsi, query) => {
  const rows = alasql(query);
  console.log(`=== SOAL ${nomorSoal}: ${deskripsi} ===`);
  console.table(rows);
};

jalankanQuery(1, "Pelanggan Tanpa Pesanan", 
  `SELECT customer_name FROM Customers WHERE customer_id NOT IN (SELECT customer_id FROM Orders)`);
  
jalankanQuery(2, "Total Banyak Pembelian Tiap Pelanggan", 
  `SELECT c.customer_name, COUNT(o.order_id) as total_pembelian FROM Customers c LEFT JOIN Orders o ON c.customer_id = o.customer_id GROUP BY c.customer_id, c.customer_name`);
  
jalankanQuery(3, "Pelanggan dengan >= 2 Salesman Berbeda", 
  `SELECT c.customer_name FROM Customers c JOIN Orders o ON c.customer_id = o.customer_id GROUP BY c.customer_id, c.customer_name HAVING COUNT(DISTINCT o.salesman_id) >= 2`);
  
jalankanQuery(4, "Nama Pelanggan & Banyak Pesanan (Urut Terbanyak)", 
  `SELECT c.customer_name, COUNT(o.order_id) as total_pesanan FROM Customers c JOIN Orders o ON c.customer_id = o.customer_id GROUP BY c.customer_id, c.customer_name ORDER BY total_pesanan DESC`);
  
jalankanQuery(5, "Salesman dengan Komisi Tertinggi", 
  `SELECT salesman_name, commission FROM Salesman ORDER BY commission DESC LIMIT 1`);
  
jalankanQuery(6, "Data Stock < 100", 
  `SELECT * FROM Stock WHERE Stock < 100`);
  
jalankanQuery(7, "Summary Stock Per Kategori", 
  `SELECT Kategori_Barang, SUM(Stock) as Total_Stock FROM Stock GROUP BY Kategori_Barang`);