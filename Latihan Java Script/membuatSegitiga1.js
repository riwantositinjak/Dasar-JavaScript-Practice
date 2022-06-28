// membuat segitiga dengan menggunakan loop for bersarang 

// contoh segitiga yang dibuat di bawah ini 
// *
// **
// ***
// ****
// *****

let baris = 5 ;
let pola = '';

for (let i = 1; i <= baris; i++){ // loop for untuk mengatur pengulangan pada variabel i
   for(let j = 1; j <= i; j++){
    pola += '*'; // menambah * pada tiap baris dan akan berulang sesuai sintaks pengulangan yang ada loop variabel j
   }
    pola += '\n'; // menambahkan baris baru 
}
console.log(pola); // mencetak pola di console.log agar bisa ditampilkan di browser melalui menu console atau bisa di lakukan di nodejs jika terinstall di operating sistem yang ada