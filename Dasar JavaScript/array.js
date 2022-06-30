// Array


let namaOrang = ['Jack', 'John', 'Peter']; // deklarasi variable namaOrang yang di isi oleh array

for(let i = 0; i < namaOrang.length; i++){ // looping for untuk menelusuri elemen array namaOrang satu persatu, dengan menggunakan method length
    console.log('mahasiswa ke:- ' + (i + 1) + ' adalah ' + namaOrang[i]); // mencetak array namaOrang yang sudah di telusuri di looping for
}

// output dari code diatas 

// mahasiswa ke:- 1 adalah Jack
// mahasiswa ke:- 2 adalah John
// mahasiswa ke:- 3 adalah Peter