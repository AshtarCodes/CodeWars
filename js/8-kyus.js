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