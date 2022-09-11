/* Object Oriented Programming (OOP) adalah salah satu paradigma dalam dunia pemrograman komputer. Ia adalah pendekatan berbasis objek, di mana suatu objek terdiri dari kumpulan atribut dan method di dalamnya. Di dalam JavaScript, atribut adalah variabel yang digunakan untuk menyimpan nilai. Sementara method adalah fungsi yang digunakan untuk menjalankan suatu proses.

Untuk lebih mudah memahami apa itu OOP, kita bisa menggunakan pemodelan hal-hal dunia nyata ke dalam program yang kita buat. Ambil contoh Kucing, ia berperan sebagai objek. 

Kita ibaratkan ada seekor kucing yang memiliki karakteristik bulu berwarna kuning, panjang badan 23 cm, dan juga berat badan 4 kg. Kucing tersebut juga memiliki kemampuan khusus yaitu mampu berlari, melompat, dan juga tidur.

Nah, dalam konteks OOP, karakteristik kucing (warna bulu, tinggi badan, dan berat badan) merupakan atribut dari suatu objek kucing, ia adalah nilai-nilai yang dimiliki oleh seekor kucing. Sedangkan kemampuan (berlari, melompat, tidur) adalah method dari seekor kucing, ia adalah suatu aktivitas yang bisa dilakukan oleh seekor kucing.

JavaScript memiliki kapabilitas untuk membuat program dengan menerapkan paradigma OOP. Meskipun ada beberapa perbedaan dan perdebatan mengenai OOP di JavaScript dengan yang ada di bahasa pemrograman lain.

Sebelumnya kita sudah mengenal dan mempelajari object yang dapat merepresentasikan sebuah layer data. Jika string dianalogikan sebagai kata (kumpulan karakter), number sebagai angka, dan boolean sebagai pernyataan benar atau salah; maka object dianalogikan sebagai sebuah benda yang lebih kompleks. OOP pun sama, tetapi lebih kompleks lagi karena di dalam paradigma OOP terdapat 4 pilar utama, yaitu encapsulation, abstraction, inheritance, dan polymorphism.

Sebagai contoh, kita memiliki sebuah data object bernama mail seperti contoh di bawah ini. */

const mail = {
  from: "pengirim@dicoding.com",
  sendMessage: function (msg, to) {
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
  },
};

console.log(mail.from);
mail.sendMessage("apakabar", "penerima@dicoding.com");
