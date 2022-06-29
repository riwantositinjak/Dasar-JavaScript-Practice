var s = ''


for(var i = 1; i <= 5; i++){
    for(var j = 1; j <= i ; j++){
        s+= '*' 
    }
    s += '\n'
}
 for (var k = 1; k <= 5 ; k++ ){
     for(var l = 4; l >= k; l-- ){
        s+= '*'
    }
    s += '\n'
 }
 console.log(s);

 // output dari code diatas 

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *