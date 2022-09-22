const mahasiswa = {
    nama: "Riwanto",
    NIM : 1101144404, 
    kelas : 'TT-04',
};

const stringJs = JSON.stringify(mahasiswa);

console.log(stringJs);
console.log(typeof mahasiswa);
const parsing = JSON.parse(stringJs);

console.log(parsing)