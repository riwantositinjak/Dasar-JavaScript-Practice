/* Function
   Block kode yang dibuat untuk melakukan tugas spesifik
   Dapat dipanggil berulang kali
   Memudahkan penelusuran
   Reusability
*/

function jumlahVolumeDuaKubus(a,b){ // a dan b adalah sebuah parameter yang ada di dalam function jumlahVolumeDuaKubus dan nanti akan di isi oleh argumen
    var volumeA;
    var volumeB;
    var volumeC;

    volumeA = a * a * a;
    volumeB = b * b * b;
    
    total = volumeA + volumeB;
    
    return total;
}
console.log(jumlahVolumeDuaKubus(8,3)); // argumen di bawah ini akan mengisi parameter yang ada di function


// output 
// > 539 