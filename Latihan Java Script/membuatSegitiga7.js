var s = ''
var baris = 5;
for(var i = 1; i <= baris; i++ ){
    for(var j = 1; j <= i; j++){
        s += ' '
    }
    for(var k = baris  ; k >=i; k-- ){
        s += '*'
    }
    s += '\n'
}
console.log(s);

// output pada code di atas 
// *****
//  ****
//   ***
//    **
//     *