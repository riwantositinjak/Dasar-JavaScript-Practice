// splice artinya menyambung atau menambal, jadi kita bisa menyisipkan sebuah elemen ditengah-tengah array 
// intinya menyisipkan elemen array di tengah-tengah


// cara penggunaan inputan method splice dibawah ini 
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2,...)
var nama = ['Riwanto', 'Jack', 'Peter', 'John'];

nama.splice(2, 0, 'Philips');
console.log(nama.join('-'));

// output dari code diatas 

// Riwanto-Jack-Philips-Peter-John
