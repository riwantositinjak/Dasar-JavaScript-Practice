const addElement = () => {
    const h1 = document.createElement("h1");
    h1.textContent = "Halo sekarang saya lagi belajar JavaScript Async";

    document.body.append(h1);
}

setTimeout(addElement, 5000);

console.log("baris ini akan dijalankan tanpa menunggu baris program sebelumnya")