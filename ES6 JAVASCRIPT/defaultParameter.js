// Default Parameter

// Fungsi pada JavaScript tidak melakukan pengecekan terhadap jumlah maupun tipe argumen yang dimasukkan ke dalam parameter. Ini berarti kita bisa memasukkan argumen meskipun tidak sesuai dengan parameter yang telah didefinisikan.

const defaultParameter = (angkaPertama, angkaKedua = 2) => {
  // kita lihat sendiri disitu udah kita assign angka 2 kedalam variable parameter pada angka kedua
  let result = angkaPertama ** angkaKedua;
  console.log(`${angkaPertama}^${angkaKedua} = ${result}`);
};

defaultParameter(3); // kita mengisi argumen 1 sedangkan parameternya ada 2, tapi kita bisa mengisi default parameter langsung di dalam parameternya
