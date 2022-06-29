// Deklarasi Variable 
var jmlAngkot = 10; 
var angkotBeroperasi = 6;
var noAngkot = 1;

// looping for
for (noAngkot; noAngkot <= jmlAngkot; noAngkot++){
    
    // pengkondisian if
    if(noAngkot <= angkotBeroperasi){ 
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
    }
    //pengkondisian else if
    else if(noAngkot === 8) {
        console.log('Angkot No. ' + noAngkot + ' sedang lembur');
    }
    //pengkondisian else 
    else {
        console.log('Angkot No. ' + noAngkot+ ' sedang tidak beroperasi')  ; 
    }
}

// output dari code diatas 

// Angkot No. 1 beroperasi dengan baik
// Angkot No. 2 beroperasi dengan baik
// Angkot No. 3 beroperasi dengan baik
// Angkot No. 4 beroperasi dengan baik
// Angkot No. 5 beroperasi dengan baik
// Angkot No. 6 beroperasi dengan baik
// Angkot No. 7 sedang tidak beroperasi
// Angkot No. 8 sedang lembur
// Angkot No. 9 sedang tidak beroperasi
// Angkot No. 10 sedang tidak beroperasi