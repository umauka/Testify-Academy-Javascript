function sortNumbersDesc(arr) {
  let result = [...arr]; 

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length - 1; j++) {
      if (result[j] < result[j + 1]) {
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  return result
}

console.log(sortNumbersDesc([10, 2, 35, 1, 8]))

//line 6 --- if (result[j] < result[j + 1]){...}
//if I change the less than sign to a greater than sign, the function will sort the numbers in ascending order instead of descending order.