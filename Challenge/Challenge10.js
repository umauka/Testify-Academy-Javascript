function removeNegativeNums(myArray) {
  let result = [];

  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] >= 0) {
      result.push(myArray[i]);
    }
  }

  return result;
}

console.log(removeNegativeNums([-5, 10, -2, 3, 0, -1])); 