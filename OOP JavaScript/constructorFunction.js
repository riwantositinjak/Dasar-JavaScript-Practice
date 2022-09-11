// ini adalah kelas nya yang menggunakan constructor function
function Person() {
    this.firstName = ''
    this.lastName = ''
}


// ini merupakan objectnya
const riwanto = new Person();
riwanto.firstName ="Riwanto";
riwanto.lastName ="Sitinjak";

const lestaria = new Person();
lestaria.firstName = "Lestaria";
lestaria.lastName ="Sitinjak";

console.log(riwanto);
console.log(lestaria);