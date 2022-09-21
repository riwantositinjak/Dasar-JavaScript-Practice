const menampilkanWaktu = () => {
    const h1 = document.getElementById("heading");
    h1.textContent = new Date().toString();
}

setInterval(menampilkanWaktu, 1000);
console.log("Program Selesai");