function multiply(a, b){
    return a * b;
};

function doubleInteger(i) {
    // i will be an integer. Double it and return it.
    return i *2;
};

function getAverage(marks){
    //TODO : calculate the downwar rounded average of the marks array
    return Math.floor(marks.reduce((acc, i) => acc + i)/marks.length);
};


// Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
    if (!Array.isArray(input)){
      return [];
    };
    let pos = 0;
    let neg = [];
    for (let num of input){
      if (num > 0){
        pos++
      };
      if (num < 0){
        neg.push(num)
      };
    };    
    let nSum = neg.reduce((sum, n)=>sum + n,0); 
    return (pos > 0 && nSum < 0) ? [pos,nSum] : [];
};

// time since midnight in milliseconds
function past(h, m, s){
    //#Happy Coding! ^_^
    let sum = (s * 1000) + (m * 60000) + (h * 3600000);
    return sum;
};

// count up from a given number 
function monkeyCount(n) {
    // your code here
      let numArr = [];
      for (let i = 1; i <=n; i++){
        numArr.push(i);
      }
      return numArr;
};

// Each dragon needs two bullets for our hero to beat them. 
function hero(bullets, dragons){
  //Get Coding!
    return (dragons * 2) / bullets <= 1;  
};

//greeting
function greet(name){
  //your code here
  return `Hello, ${name} how are you doing today?`
};

// reverse words
function reverseWords(str){
  return str.split(' ').reverse().join(' '); // reverse those words
};

//return sum of two arrays 
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc,c) => acc + c); 
}

// did i get a bonus?
function bonusTime(salary, bonus) {
  // your code here
    let checkBonus = (bonus) ? salary*10 : salary;
    return `\u00A3${checkBonus}`;
}

// If name begins with R, then plays banjo
function areYouPlayingBanjo(name) {
  // Implement me
  return (name.charAt(0).toUpperCase() === 'R') ? `${name} plays banjo` : `${name} does not play banjo`;
}

//average of nums in an array
function find_average(array) {
  // your code here
  return (array.length > 0) ? array.reduce((a,c) => a + c, 0) / array.length : 0
};

// convert bool into string
function booleanToString(b){
  //your code here
  return (b) ? 'true' : 'false';
}


// nums < 5 are replaced with 0, nums >= 5 are replaced with 1
function fakeBin(x){
  return x.split('').map(n => n < 5 ? '0' : '1').join('');
}

// reverse sequence
const reverseSeq = n => {
  let list = [];
  for (let i = n; i > 0; i--){
    list.push(i)
  }
  return list;
};


