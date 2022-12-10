const person = {
  namaDepan: "Riwanto",
  namaBelakang: "Sitinjak",
  namaLengkap: function () {
    return this.namaDepan + " " + this.namaBelakang;
  },
};
console.log(person.namaLengkap());
