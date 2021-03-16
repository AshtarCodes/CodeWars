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

// reduce but grow
function grow(x){
  let product = 1;
  for (let n of x){
    product *= n
  }
  return product;
};
// solution 2
function grow(x){
  return x.reduce((acc,c)=>acc * c);
}

// Does array a include value x?
function check(a, x) {
  // your code here
  return a.includes(x);
}

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  let arr = dna.toUpperCase().split(''); // [g,c,a,t]
  let res = []
  for (let el of arr){
    if (el === 'T'){
      res.push('U')
    } else {
      res.push(el)
    }    
  }
  return res.join('');  
}
// solution 2
function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  for (let char of dna){
    dna = dna.replace('T','U')
  }  
  return dna;
}
//solution 3
function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  return dna.split('').map(str => str.replace('T','U')).join('');
}

// max and min values in array
var min = function(list){    
  return Math.min(...list);
};

var max = function(list){    
  return Math.max(...list);
};

//fix switch to get planet name
function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break;
    case 2:
      name = 'Venus'
      break;
    case 3:
      name = 'Earth'
      break;
    case 4:
      name = 'Mars'
      break;
    case 5:
      name = 'Jupiter'
      break;
    case 6:
      name = 'Saturn'
      break;
    case 7:
      name = 'Uranus'
      break;
    case 8:
      name = 'Neptune'
      break;
  }  
  return name;
};

//Jenny's secret message
function greet(name){
  
  if(name === "Johnny"){
    return "Hello, my love!";
    };
    return "Hello, " + name + "!";
};

function even_or_odd(number) {
  if(number % 2 === 0){
    return 'Even'
  };
  return 'Odd'
};

function makeNegative(num) {
  return -Math.abs(num)
};

function positiveSum(arr) {
  return arr.map(item => item)
     .filter(item => {
       if (item === Math.abs(item)){return item}
     })
     .reduce((acc, item) => acc + item, 0);
}

function boolToWord( bool ){
  return (bool) ? 'Yes' : 'No'
};

function arrayMadness(a, b) {
  let squareSumA = a.map(n => n = Math.pow(n, 2)).reduce((a,b) => a + b);
  let cubedSumB = b.map(n => n = Math.pow(n, 3)).reduce((a,b) => a + b);
  return (squareSumA > cubedSumB) ? true : false;
};

function greet(language) {
  let lowerCaseLang = language.toLowerCase();
  let languageGreeting = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
  };
  if (languageGreeting[lowerCaseLang] !== undefined){
    return languageGreeting[lowerCaseLang]
  } else if (languageGreeting[lowerCaseLang] == undefined){
    return languageGreeting.english;
  };
};

class Ball {
  constructor(ballType = 'regular') {
    this.ballType = ballType;
  }
};

function opposite(number) {
  return (number === Math.abs(number)) ? -Math.abs(number) : Math.abs(number)
};

function howManydays(month){
  var days;
  switch (month){
    case 2:
      days = 28
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30
      break;
    default:
      days = 31
  }
  return days;
};

function helloWorld(){
  var str = "Hello World!"
  console.log(str)
};

function getLength(arr){
  
  return arr.length
}
function getFirst(arr){
  //return the first element of arr
  return arr[0]
}
function getLast(arr){
  //return the last element of arr
  return arr[arr.length-1]
}
function pushElement(arr){
  var el=1;
  //push el to arr
  arr.push(el)
  return arr
}
function popElement(arr){
  //pop an element from arr
  arr.pop()
  return arr
}

function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}

function trueOrFalse(val){
  if (!val)    return 'false';             
  else return 'true';
}

function saleHotdogs(n){
  let price = 0;
  return (n<5) ? price = n * 100 : (n>=10) ? price = n * 90 : price = n*95;
};

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

function warnTheSheep(queue) {

  for (let i = queue.length - 1, j = 1; i >= 0; i--, j++){
    if (queue[queue.length - 1] === 'wolf'){
      return 'Pls go away and stop eating my sheep';
    } else if (queue[i] === 'wolf') {
      return `Oi! Sheep number ${j-1}! You are about to be eaten by a wolf!`
    };    
  };  
};

// array of string. I need to dissect each string. 

function points(games) {
  // your code here
  return games.map(match => {
    let [x,y] = match.split(':')
    return (x > y) ? 3 : (x < y) ? 0 : 1;
  }).reduce((acc,c) => acc + c,0)
}

// will you make it to the pump?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  return (fuelLeft >= (distanceToPump / mpg)); 
};

// volume of cuboid
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length*width*height;
  }
}

// how many times will i rewrite this paperwork?
function paperwork(n, m) {
  if (n <= 0 || m <= 0){
    return 0;
  } 
  return n * m;  
}

//make uppercase 
function makeUpperCase(str) {
  return str.toUpperCase();
}

//
function sumArray(array) {
  if (Array.isArray(array) || array.length > 1){
  let array = array.sort((a,b)=> a-b)
  } else {
    return 0;
  }
  return array.slice(1,-1).reduce((a,i) => a + i);
}

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let average = Math.round(classPoints.reduce((a,i)=> a + i, 0) / classPoints.length);
  return yourPoints > average;
}

function rentalCarCost(day) {
  // Your solution here
  let stdRate = 40;
  let threeDayDiscount = -20;
  let sevenDayDiscount = -50;
  return (day >= 7) ? day * stdRate + sevenDayDiscount : (day>=3) ? day * stdRate + threeDayDiscount : day * stdRate;
}

//Create a function with two arguments that will return an array of the first (n) multiples of (x).
function countBy(x, n) {
  var z = Array(n).fill(0);
  return z.map((el,i) => x * n--).reverse();
}
//solution 2
function countBy(x, n) {
  var z = Array(n).fill(0);
  return z.map((el,i) => x * (i + 1));
}
//
function setAlarm(employed, vacation){
  return employed && !vacation;
}

//multiply two nums
function multiply(n1, n2){
  return n1 * n2;
}