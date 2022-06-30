// method array.map itu sama seperti seperti forEach tapi map itu mengembalikan array sedangkan forEach tidak 

// mari kita coba 

var nominal = [1,2,3,4,5,6,7,8,9]; // deklarasikan variable nominal yang di isi oleh sejumlah elemen array
var nominal2 = nominal.map(function(e){
    return e * 2 ; // mengembalikan elemen pada array yang tiap elemennya dikalikan 2
});
console.log(nominal2.join(' - ')); //di cetak di console dan di gabungkan dengan method join untuk mengubah menjadi string dan digabung.


// output dari code di atas 
// 2 - 4 - 6 - 8 - 10 - 12 - 14 - 16 - 18

