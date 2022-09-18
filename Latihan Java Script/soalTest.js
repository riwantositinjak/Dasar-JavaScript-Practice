function test() {
  var a = 100;
  var b = 50000;

  console.log(`a awal = ${a}`);
  console.log(`b awal = ${b}`);

  // coding
  a -= b ;
  b += a;
  a =- a + b ;
  console.log(`a final = ${a}`);
  console.log(`b final = ${b}`);
}
c
test();
