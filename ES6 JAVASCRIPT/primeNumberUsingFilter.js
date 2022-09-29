const apakahPrima = (angka) => {
    let pembagi = 0;
    for(let i=1; i <= angka; i++){
      if(angka%i == 0){
        pembagi++
      }
    }
    if(pembagi == 2){
      console.log("prima")
    }else{
      console.log("bukan prima")
    }
  }
  
  // TEST CASES
  apakahPrima(2); //prima
  apakahPrima(3); //prima
  apakahPrima(4); //bukan prima
  apakahPrima(9); //bukan prima
  apakahPrima(19)


console.log(2%1);
console.log(2%2);
