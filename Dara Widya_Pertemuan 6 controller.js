import data from './data.js';

// 1️⃣ Fungsi untuk menampilkan data dengan `.map()`
export function showData() {
    console.log("Daftar Data:");
    data.map((item, index) => {
        console.log(`${index + 1}. ${item.nama}, ${item.umur} tahun, ${item.alamat}, ${item.email}`);
    });
}

// 2️⃣ Fungsi untuk menambah data (push minimal 2 data)
export function addData(nama, umur, alamat, email) {
    data.push({ nama, umur, alamat, email });
    console.log(`Data ${nama} berhasil ditambahkan!`);
}

// 3️⃣ Fungsi untuk menghapus data berdasarkan nama
export function removeData(nama) {
    const index = data.findIndex(item => item.nama === nama);
    if (index !== -1) {
        data.splice(index, 1);
        console.log(`Data ${nama} berhasil dihapus!`);
    } else {
        console.log(`Data dengan nama ${nama} tidak ditemukan.`);
    }
}

// Contoh penggunaan
showData();
addData("Kirana", 21, "Malang", "kirana@email.com");
addData("Lutfi", 32, "Palembang", "lutfi@email.com");
removeData("Budi");
showData();
