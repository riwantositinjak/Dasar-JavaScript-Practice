var nominal = prompt('masukkan nominal yang anda inginkan : ');

switch(nominal){
    case '1':
        alert('anda memasukkan angka 1');
        break;
    case '2':
        alert('anda memasukkan angka 2');
        break;
    case '3':
        alert('anda memasukkan angka 3');
        break;
    default:
        alert('anda memasukkan angka yang salah');
}

// output dari code di atas 
// 1. jika memasukkan angka 1 pada alert di web browser maka akan menampilkan pop up alert
// "anda memasukkan angka 1" begitu terus sampai pada expression default ketika nominal yang 
// dimasukkan salah, maka akan muncul pop up alert "anda memasukkan angka yang salah"