// constructor tidak bisa di terapkan pada arrow Function, tapi method pada function itu masih bisa menerapkan arrow Function 

const Mahasiswa = function(){
    this.nama = 'Riwanto Sitinjak';
    this.umur = 3;
    this.sayHi = function(){
        console.log(`halo nama saya ${this.nama} dan saya berumur ${this.umur} tahun`);
    }

}

const result = new Mahasiswa();

console.log(result.sayHi);