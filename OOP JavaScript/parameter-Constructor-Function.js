//// Ini adalah classnya, menggunakan constructor function
function Person(firstName, lastName) { // menambahkan parameter
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function (name) {
      console.log(`Hello ${name}, my name is ${this.firstName}`);
    };
  }
  
  // ini adalah object yang terdapat dalam class person
  const riwanto = new Person("Riwanto", "Sitinjak"); // input argumen untuk di passing ke parameternya
  riwanto.sayHello("Lestaria");
  
  const lestaria = new Person("Lestaria", "Sitinjak")// input argumen untuk di passing ke parameternya
  lestaria.sayHello("Riwanto");

  console.log(riwanto);