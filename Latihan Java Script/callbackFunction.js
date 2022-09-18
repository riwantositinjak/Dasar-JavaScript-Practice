// const orderCoffee = (callback) => {
//     let coffee = null;
//     console.log("Sedang membuat kopi, silakan tunggu...");
//     setTimeout(() => {
//         coffee = "Kopi sudah jadi!";
//         callback(coffee);
//     }, 3000);
// }
 
 
// orderCoffee(coffee => {
//     console.log(coffee);
// });


const callbackFunction = () => {
    console.log("halo nama saya Riwanto");
}

setTimeout(callbackFunction, 3000);
console.log("Ini adalah baris kedua ");
console.log("Ini adalah baris ketiga");