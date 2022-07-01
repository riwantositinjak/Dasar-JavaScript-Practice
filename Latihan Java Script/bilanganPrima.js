// mencari bilangan prima dari variabel yang diisi oleh array 

const array = [-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13]; // variable array di isi oleh array 

function bilanganPrima(nomor){
    for(let i = 2; nomor > i ; i++){
        if(nomor % 2 == 0){
            return false;
        }
    }
    return nomor > 1;
}
let a = console.log(array.filter(bilanganPrima)); // menampilkan di layar dengan menggunakan method filter esz6cv

// output

// [2, 3,  5, 7, 9, 11, 13 ]