var baris = 5;
var pola = ''

for ( var i = 1; i <= baris; i++){
    for(var j = 1; j <= baris; j++){
        pola += '*'
    }
    pola += '\n'
}
console.log(pola);