const array = [15, 16, 17, 18, 19];

function reducer(previousValue, currentValue, index) {
  const returns = previousValue + currentValue;
  console.log(
    `previousValue: ${previousValue}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`
  );
  return returns;
}

array.reduce(reducer);
