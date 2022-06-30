// method array pada sort ini adalah untuk mengurutkan elemen yang ada pada array 

// mari kita coba 

var nominal = [5,7,84,3,2,1,9];

nominal.sort(function(a,b){ // fucntion yang ada pada parameter ini akan berguna untuk membandingkan elemen yang ada pada array agar bisa di urutkan sesuai angka yang ada
    return a-b;            
});
console.log(nominal.join(' - '));

// output dari code di atas 

// 1 - 2 - 3 - 5 - 7 - 9 - 84