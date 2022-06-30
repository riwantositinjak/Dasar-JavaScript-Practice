// slice digunakan untuk mengiris sebuah array menjadi array yang baru 
// slice itu menghasilkan array baru, jadi alangkah lebih baiknya buat kembali variable baru untuk memanggil array sebelumnya
// rumus dari slice adalah:
// slice(indeksAwal, indeksAkhir)


var nama = ['Riwanto','John', 'Peter', 'Michael', 'Phillips'];

var nama2 = nama.slice(1,4);
console.log(nama.join(' - '));
console.log(nama2.join(' - '));

// output dari code diatas 

// Riwanto - John - Peter - Michael - Phillips
// John - Peter - Michael
