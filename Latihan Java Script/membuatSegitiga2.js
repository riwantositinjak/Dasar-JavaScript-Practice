let baris = 5; // deklarasi baris yang di isi dengan nilai 5, jika nilai di ganti akan berpengaruh pada hasil dari baris yang ditugaskan.
let pola = ''; // deklarasi pola yang bisa kita isi pada sebuah kondisi dalam sebuah object perulangan pada for

for (let i = 1; i <= baris; i++){ // for loop dengan deklarasi variable yang dibuat, kemudian dengan kondisi yang dibuat kapan perulangan akan berhenti, kemudian variabel i akan di eksekusi jika kondisi yang ada pada parameter terpenuhi.
    for(let j = baris; j >= i; j--){ // 
        pola += '*' // mencetak jumlah * sesuai dengan perulangan yang ada pada loop for
    }
    pola += '\n'; // mencetak baris baru sesuai dengan perulangan yang ada pada loop for
}
console.log(pola);

// output dari code diatas 

// *****
// ****
// ***
// **
// *