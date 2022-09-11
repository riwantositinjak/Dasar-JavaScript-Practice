// Constructor Inheritance 

// - Dalam constructor kita biasanya membuat property baik itu berisi value ataupun function
// - Di dalam constructor, kita bisa memanggil constructor lain, dengan begiti kita bisa mewarisi 
// semua property yang dibuat di constructor lain tersebut
// -Untuk memanggil constructor lain, kita bisa menggunakan NamaConstructor.call(this, parameter)

function Employee(firstName){
    this.firstName  = firstName;
    this.sayHello = function(name){
        console.log(`Hallo ${name} nama saya adalah ${this.firstName}`);
    }
}

function Manager(firstName, lastName) {
    this.lastName = lastName;
    Employee.call(this, firstName); // memanggil function constructor Employee
}

const riwanto = new Manager("Riwanto", "Sitinjak");
console.log(riwanto);