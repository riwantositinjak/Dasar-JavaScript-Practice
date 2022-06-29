var baris = 5;
var pola = ''

for ( var i = 1; i <= baris; i++){
    for(var j = baris - 1; j >= i; j--) {
        pola += ' '
    }
    for( var k = 1; k <= i; k++){
        pola += '*'
    }
    for ( var l = 1; l <= i-1; l++){
        pola += '*'
    }
    pola += '\n'
}
for ( var m = 1; m <= baris; m++){
    for(var n = 1; n <= m; n++ ){
        pola += ' '
    }
    for ( var o = baris - 1; o >= m; o--){
        pola += '*'
    }
    for ( var p = baris ; p >= m + 2; p--){
        pola += '*'
    }
    pola += '\n'
}
console.log(pola);

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

