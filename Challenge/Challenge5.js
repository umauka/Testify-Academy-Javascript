// function reverseArray(myArray){
//     reversedArray = myArray.reverse()
//     return reversedArray
// }
// const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// console.log(reverseArray(testArray))

function reverseArray(myArray) {
    let reversedArray = [];

    for (let i = myArray.length - 1; i >= 0; i--) {
        reversedArray.push(myArray[i]);
    }
    
    return reversedArray;
}

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(reverseArray(testArray));