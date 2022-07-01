// kali ini saya akan mencoba menggunakan method arrayFill
// Metode fill() mengubah semua elemen dalam array menjadi nilai statis, dari indeks awal (default 0) hingga indeks akhir (array.length default). 
// Ini mengembalikan array yang dimodifikasi.

// penjelasan tentang codenya 
array1.fill(nilaiYangAkanDiIsi, akanDimulaiDiIndeksBerapa, akanDiakhiriDiIndeksBerapa);
// mari langsung lihat saja ke contohnya 


const array1 = [1,2,3,5,6,7,8,9]; // diberikan sebuah array yang di dalam array nya memiliki index 0-8

console.log(array1.fill(1,3,5)); // menampilkan sebuah nilai array yang baru yang di dalamnya di isi nilai 1, yang akan berjalan di indeksAwal 3, dan berhenti di Indeks Akhir 5 yang sudah di tentukan 

// output dari code diatas 

// [1, 2, 3, 1,1, 7, 8, 9]

