const number = [1, 2, 3, 4, 5, 6];

const sum = (number) => {
  let i = 0;
  let int = 0;
  while (i < number.length) {
    int += number[i];
    i++
  }
  return int;
};

console.log(sum(number));
