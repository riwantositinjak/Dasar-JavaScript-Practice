function Person() {
    this.firstName ='';
    this.lastName ='';
    this.sayHello = function(name){
        console.log(`Hello ${name}, my name is ${this.firstName}`);
    }
}

const riwanto = new Person();
riwanto.firstName = "Riwanto";
riwanto.lastName ="Sitinjak";
riwanto.sayHello("Lestaria")

const lestaria = new Person();
lestaria.firstName = "Lestaria";
lestaria.lastName = "Sitinjak";
lestaria.sayHello("Riwanto");

