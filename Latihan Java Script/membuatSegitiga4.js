let baris = 5 ; // deklarasi baris yang di isi dengan nilai 5, jika nilai di ganti akan berpengaruh pada hasil dari baris yang ditugaskan.
let pola = ''; // deklarasi pola yang bisa kita isi pada sebuah kondisi dalam sebuah object perulangan pada for

for (let i = 1; i <= baris; i++){ // for loop dengan deklarasi variable yang dibuat, kemudian dengan kondisi yang dibuat kapan perulangan akan berhenti, kemudian variabel i akan di eksekusi jika kondisi yang ada pada parameter terpenuhi.
    for(let j = baris - 1; j >= i; j--){
        pola += ' ' // mencetak jumlah spasi 
    }
    for( let k = 1; k <= i; k++){
        pola += '*'; // mencetak jumlah bintang yang di eksekusi oleh pola
    }
    for(let l = 1; l <= i-1; l++){
        pola += '*' // mencetak untuk menambah jumlah bintang ke kanan
    }
    pola += '\n'  //mencetak baris baru sesuai dengan perulangan yang ada pada loop for 
}
console.log(pola); // mencetak pola kedalam konsol agar bisa menampilkan output seperti di bawah ini.

// output dari code diatas 

//     *
//    ***
//   *****
//  *******
// *********