var baris = 5;
var pola = ''

for(var i = 1; i <= baris; i++){
    for(var j = baris - 1; j >= i; j--){
        pola += ' '
    }
    for (var k = 1; k <= i; k++){
        pola += '*';
    }
    pola += '\n'
}
for(var l = 1 ; l <= baris; l++){
    for(var m = 1; m <= l; m++){
        pola += ' '
    }
    for(var n = 4; n >= l; n--){
        pola += '*'
    }
    pola += '\n'
}
console.log(pola);

// output yang harusnya  dari code diatas =  

//     *
//    **
//   ***
//  ****
// *****
//  ****
//   ***
//    **
//     *