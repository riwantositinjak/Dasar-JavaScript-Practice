// Array concat berfungsi untuk menggabungkan 2 atau lebih array ke dalam array baru 

const array1 = ['riwanto', 'lisnawati', 'lestaria', 'olivia']; // variabel array 1 yang di isi array string 
const array2 = [1,2,3]; // variabel array 2 yang di isi array 

const arrayGabungan = array1.concat(array2); // syntax method untuk menggabungkan array1 ke array2 
console.log(arrayGabungan); // mencetak arrayGabungan yang sudah di gabungkan mengggunakan method

// output 
[ 'riwanto', 'lestaria', 'lisnawati', 1, 2, 3 ]

// sekarang coba kita menggabungkan lebih 2 array 

const contArray1 = [1,2,3,4];
const contArray2 = ['anakPertama', 'anakKedua', 'anakKetiga', 'anakKeEmpat'];
const contArray3 = ['laki-laki','perempuan1', 'perempuan2', 'perempuan3'];

const arrayConcatenate = contArray1.concat.apply(contArray2,contArray3);

// output dari code diatas 
// [
//     'anakPertama',
//     'anakKedua',
//     'anakKetiga',
//     'anakKeEmpat',
//     'laki-laki',
//     'perempuan1',
//     'perempuan2',
//     'perempuan3'
//   ]
