// method ini lebih keren daripada for biasa 
// secara umum fungsi dari forEach ini sama dengan for ya 

// berikut adalah contoh simplenya

var angka = [1,2,3,4,5,6,7,8];

// for ( var i = 0; i < angka.length; i++){
//     console.log(angka[i]);
// }

angka.forEach(function(e){   // untuk setiap elemen yang ada pada array angka lakukan fungsi berikut ini, jadi tidak perlu nentukan apa yang dibuat seperti for
    console.log(e)
})




