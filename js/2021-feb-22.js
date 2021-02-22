
// return the sum of the two lowest numbers / elements
function sumTwoSmallestNumbers(numbers) {  
    let sorted = numbers.sort((a,b) => a - b);
    return sorted[0] + sorted[1];
};

// remove spaces of a word
function noSpace(x){
    let xArr =  x.split(' ');
    return xArr.join('')
};

//square the numbers, then add all of them
function squareSum(numbers){
    let sum = numbers.reduce((a,b) => a + (b * b) , 0)
    return sum;
};

// "found the needle at position" + index
function findNeedle(haystack) {
    let needle = haystack.indexOf('needle');
    return `found the needle at position ${needle}`;
};

// create phone number
// "(xxx) xxx-xxxx"
// slice each section into a variable 
function createPhoneNumber(numbers){
  let alpha = numbers.slice(0,3);
  let beta = numbers.slice(3,6);
  let gamma = numbers.slice(6);
  return `(${alpha.join('')}) ${beta.join('')}-${gamma.join('')}`
};

// Jaden Casing
// 1. split by words. 2. loop over them 3. uppercase first letter and concat rest 4. push to new array. 

// String.prototype.toJadenCase = function () {
//     let words = this.split(' ');
//     let wordArr = [];
//     for (let word of words){
//         let jadenCased = word.charAt(0).toUpperCase() + word.slice(1);
//         wordArr.push(jadenCased);
//     };
//     return wordArr.join(' ');
//   };
String.prototype.toJadenCase = function () {
    return this.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

// remove the minimum
// slice array. find smallest. splice it, return the array.
// do not change the order of those left. 
  function removeSmallest(numbers) {
    let copy = numbers.slice();
    let minIndex = copy.indexOf(Math.min(...copy));
    copy.splice(minIndex, 1);
    return copy;
  };

// binary array to number
// 1. walk arr backwards. each index is i * Math.pow(2,j)
const binaryArrayToNumber = arr => {
    let sum = 0;
    for (let i = arr.length-1, j = 0; i >= 0; i--, j++){
        sum += arr[i] * Math.pow(2,j);
    }  
    return sum;  
};