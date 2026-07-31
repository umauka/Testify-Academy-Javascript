function countVowels(word) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let i =0; i < word.length; i++) {
    let char = word[i]
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("Uma Uka"))