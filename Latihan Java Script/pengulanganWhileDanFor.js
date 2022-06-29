// sebuah latihan menggunakan looping while dan for dengan output 
// Angkot No. 1 beroperasi dengan baik. -> di cetak sampaik dengan 6 kali menggunakan looping while
// Angkot No. 7 sedang tidak beroperasi -> dicetak sampai dengan nomor 10

var jmlAngkot = 10;
var angkotBeroperasi = 8;
var noAngkot = 1;

while ( noAngkot <= angkotBeroperasi){
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
    noAngkot++;
}
for(noAngkot = angkotBeroperasi + 1 ; noAngkot <= jmlAngkot; noAngkot++){
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi');
}

// output dari code diatas

// Angkot No. 1 beroperasi dengan baik
// Angkot No. 2 beroperasi dengan baik
// Angkot No. 3 beroperasi dengan baik
// Angkot No. 4 beroperasi dengan baik
// Angkot No. 5 beroperasi dengan baik
// Angkot No. 6 beroperasi dengan baik
// Angkot No. 7 beroperasi dengan baik
// Angkot No. 8 beroperasi dengan baik
// Angkot No. 9 sedang tidak beroperasi
// Angkot No. 10 sedang tidak beroperasi