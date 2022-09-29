// Rest Parameter
// Masih ingat dengan spread operator (...)? Jika spread operator menyebarkan array menjadi beberapa elemen berbeda, rest parameter ini adalah kebalikan dari operator tersebut. Penasaran?

// Rest parameter juga dituliskan menggunakan three consecutive dots (...). Dengan rest parameter, kita dapat menggabungkan beberapa elemen menjadi satu array. Tentu teknik ini sangat bermanfaat ketika kita hendak membuat sebuah fungsi dengan parameter yang tidak pasti.

// Sebagai contoh adalah fungsi yang menjumlahkan seluruh nilai argumen seperti berikut:

const restParameter = (...angka) => {
  // function akan mengetahui jumlah argumen yang dipassing ke parameter walau tidak sesuai dengan jumlah parameternya
  let incAngka = 0;
  for (let number of angka) {
    incAngka += number;
  }
  return incAngka;
};

console.log(restParameter(1, 2, 3, 4, 5, 6, 7));
