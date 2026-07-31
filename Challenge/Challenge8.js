function isNumDivisibleBy10(num) {
  if (num % 10 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isNumDivisibleBy10(730));//true
console.log(isNumDivisibleBy10(239)); 