//count sheep
var countSheep = function (num){
    let count = ''
    for (let i = 1; i <= num; i++){
        count += `${i} sheep...`
    };
    return count;
}

// fix the infinite loop
function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number; counter++){
      newArray.push(counter);
    }
    
    return newArray;
  }

  //Double Char
  //Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

  // split by spaces, then by char, then loop through and concat a repeat(2), then join('') 
  // handle words separated by space, joining it with the same space
  // two nested for loops. take split words, then for each word, split it and concatenate the repeats, then join the final repeated words together
function doubleChar(str) {
    let ifMultiWords = str.split(' '); // ['hello','world'] or ['hello']
    let splitByChar;
    let doubled = '';
    let result = []; //stores doubled words
    for (let i = 0; i < ifMultiWords.length; i++){
        splitByChar = ifMultiWords[i].split('') // take each word, split to chars ['h','e','l']  
        for (let j = 0; j < splitByChar.length; j++){
        doubled += splitByChar[j].repeat(2) // concat double chars 
        console.log(`inner: ${doubled}`);
        };
        console.log(`outer: ${doubled}`);
        result.push(doubled);
        doubled = '';
    };
    return result.join(' ') // join doubled words with a space if they had one
  };
  
  // doubleChar('test');


  //A wolf in sheep's clothing
  //Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:
  //loop through array, if arr[i] == 'wolf' then arr[i + 1] is warned
// if wolf is last element in arr, ask wolf to go away
function warnTheSheep(queue) {

  for (let i = queue.length - 1, j = 1; i >= 0; i--, j++){
    if (queue[queue.length - 1] === 'wolf'){
      return 'Pls go away and stop eating my sheep';
    } else if (queue[i] === 'wolf') {
      return `Oi! Sheep number ${j-1}! You are about to be eaten by a wolf!`
    };    
  };  
};

//Lario and Muigi Pipe Problem
//#Task Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.
// get max and min vals. loop from min to max, if numbers[i] !== i, then splice it at that position. 
function pipeFix(numbers){
  let max = Math.max(...numbers);
  let min = Math.min(...numbers);
  let result = numbers;
  for (let i = 0; i < ((max-min)+ 1); i++){
    if(numbers[i] !== (min + i)){
      result.splice(i, 0, (min + i) );
  };
};
  return result;
};


//Sum of Multiples
// Find the sum of all multiples of n below m. 
// multiples of n: n += n * i 
// 
// return "INVALID" if m is a negative number
function sumMul(n,m){
  let count = 0;
  for (let i = 1; n*i < m; i++){
    if (m <= 0){
      break
    };
    count += n * i;
  };
  return (count <= 0) ? 'INVALID' : count;  
};



