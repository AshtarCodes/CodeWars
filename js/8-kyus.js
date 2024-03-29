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

//sum string and number integers, return a number 
function sumMix(x){
  return x.reduce((a,c) => a + Number(c), 0);
}

//BMI 
function bmi(weight, height) {
  let index = weight/height ** 2;
  if (index <= 18.5) return 'Underweight';
  if (index <= 25) return 'Normal';
  if (index <= 30) return 'Overweight';
  if (index > 30) return 'Obese';
}
//return first non-consecutive number
function firstNonConsecutive (arr) {
  if (!Array.isArray(arr) || arr.length < 2){return null};
  let res = []
  for (let i = 0; i < arr.length; i++){
    const el = arr[i];
    if (el === arr[0]) continue;
    if (el !== ++arr[i-1]){
      res.push(el);
    }
  }
  return (res.length == 1) ? res[0] : null;
}

//
function getGrade (s1, s2, s3) {
  // Code here
  let avg = Number(s1+s2+s3) / 3;
  if (avg < 60) return "F";
  else if (avg < 70) return 'D';
  else if (avg < 80) return 'C';
  else if (avg < 90) return 'B';
  else if (avg >= 90 ) return 'A';
}

//
function simpleMultiplication(number) {
  // your code........
  if (number % 2 === 0){
    return number * 8;
  } else {
    return number * 9;
  }
}

// Expressions Matter
function expressionMatter(a, b, c) {
  let one = a + b * c
  let two = (a + b) * c
  let three = a * b + c
  let four = a * b * c
  let five = a * (b + c)
  let six = a + b + c
  return Math.max(...[one, two, three, four, five, six]);
}

function howMuchILoveYou(nbPetals) {
  // your code
  let choices = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
  return choices[(nbPetals-1) % choices.length];
}

function stringToArray(string){
  return string.split(' ');
}

//random color ghost
var Ghost = function() {
  this.color = generateColor();
};
function generateColor () {
  let generate = Math.random();
  switch (true){
    case (generate < 0.25):
        return 'yellow';
    case (generate < 0.5):
        return 'white';
    case (generate < 0.75):
        return 'purple';
    default:
        return 'red';
  };
};
const pacmanEat = new Ghost();

//Classy classes
class Person {
  constructor(name, age) {
    this._name = String(name);
    this._age = age;
  }
  get info (){
    return `${this._name}s age is ${this._age}`;
  }
}

// Alternating case'
// P: strings R: alternate case strings, unaffected non-alphabetical chars ('123'), E: heLLo -> HEllO, 123 -> 123
// Ps: store in new variable, access with charAt. for loop. conditional check if string, and compare case. Convert and push to new variable when it doesn't match.
String.prototype.toAlternatingCase = function () {
  let words = this.split(' ') // words
  let result = [];
  let newWord = '';
  for (let word of words){
    for (let char of word){
      if (typeof char === 'string' && (!Number(char))){ // string and not a number
        if ( char === char.toUpperCase() ){
          newWord += char.toLowerCase() // U -> u
        } else if ( char === char.toLowerCase() ){
          newWord += char.toUpperCase() // l -> L
        }
      } else { // if non-alphabetical char '123'
          newWord += char
      }
    }
    result.push(newWord)
    newWord = ''
  }
  return result.join(' ');
}
//solution 2
String.prototype.toAlternatingCase = function () {
  // Define your method here :)
  return this.split('').map(el => el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()).join('')
}

// Hello function
function greet (name, owner) {
  if (name === owner) return 'Hello boss';
  else if (name !== owner) return 'Hello guest';
}

// messi goals
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// Rock Paper Scissors
const rps = (p1, p2) => {
  if (p1 === 'scissors' && p2 === 'paper' || p1 === 'rock' && p2 === 'scissors' || p1 === 'paper' && p2 === 'rock'){
    return 'Player 1 won!';
  } else if (p1 === p2){
    return 'Draw!'
  } else {
  return 'Player 2 won!';
  }
};

// Switch head and tail
function fixTheMeerkat(arr) {
  return arr.reverse();
}

//Find numbers which are divisible by given number
function divisibleBy(numbers, divisor){
  return numbers.filter(n => n % divisor === 0)
}

// square a number
function square (n) {
  return Math.pow(n,2)
}

// Short Long Short
// conditionals 
// 
function solution(a, b){
  // your code here
  if (a.length > b.length){
    return String(b + a + b);
  } else if (a.length < b.length) {
    return String(a + b + a)
  }
}

//Will there be enough space?
function enough(cap, on, wait) {
  // your code here
  return ((on + wait) < cap) ? 0 : (on + wait) - cap;
}

//Can we divide it?
function isDivideBy(number, a, b) {
  return (number % a === 0 && number % b === 0);
}

function removeExclamationMarks(s) {
  return s.split('').map(c => (c !== '!') ? c : '').join('');
}

function lovefunc(f1, f2){
  // moment of truth
  return ((f1 + f2) % 2 === 1);
}

// P: lowercase strings R: boolean
// E: blue bird , blueberry donut ->  returns true
// Ps: slice and check
function feast(beast, dish) {
  let bStart = beast.slice(0,1),
      bEnd = beast.slice(-1);
  let dStart = dish.slice(0,1),
      dEnd = dish.slice(-1);
  return (bStart === dStart && bEnd === dEnd);
}

// To the Power of 
//P: arr of pos nums, and a non-negative number N
// R: number, E: N = 2, arr = [0,1,2,3] -> 2 * arr[2] returns 4. if N not in array, then returns -1
function index(arr, n){
  return (arr[n]) ? Math.pow(arr[n], n) : -1;
}

// Removing elements
function removeEveryOther(arr){
  let newArr = []
  for (let i = 0; i < arr.length; i++){
    if (i % 2 === 0){
      newArr.push(arr[i])
    }
  }
  return newArr;
}

// Stringy string
// P: + integer. R: string, E: size = 6, return '101010'
// Ps: iterate 'size' times, check for last digit, and concat either 0 or 1 
function stringy(size) {
  let str = '1'
  if (size == 0){
    return str;
  } else {
    for (let i = 0; i < size; i++) {
      if (str.charAt(str.length-1) == '1'){
        str = str + '0'
      } else if (str.charAt(str.length-1) == '0'){
        str = str + '1'
      }
    }
  }
  return String(str);
}

// Number toString
var a = Number(123).toString();

// Cockroach speed conversion
function cockroachSpeed(s) {
  return Math.floor(s * 27.7778);  
}

// P: arr R: string w/ *** b/w each char
// E: ['hey', 'there', 'aaron'] -> a***a***r***o***n***
// Ps: Sort array alpha (localeCompare ?), then store first el in var, then loop over each char and add char + *** to a new var.   
function twoSort(s) {
  let sort = s.sort((a,b) => b > a ? 1 : -1)
  let str = sort[0]
  let result = str.split('').map(x => x + '***').join('')
  return String(result.slice(0,-3))
}

// P: number R: string in format '$nn.nn' or '$n.nn'
// E: 9 -> $9.00
// Ps: num.toFixed(2), then add $,  
function formatMoney(amount){
  // your formatting code here
  return String('$' + Number(amount).toFixed(2));
}

// well of ideas
function well(x){
  let numOfGoodIdeas
  // if no good ideas
  if(!x.includes('good')){
    return 'Fail!';
  } else {
    numOfGoodIdeas = x.filter(x => x === 'good').length;    
    return numOfGoodIdeas > 2 ? 'I smell a series!' : 'Publish!';
  }
}

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function mouthSize(animal) {
  return animal.toLowerCase() == 'alligator' ? 'small' : 'wide';
}

//Filling an array
function arr (n = null) {
  if (n === null) return [];
  const array = Array(n).fill(0);
  return array.map((el, i) => --n).reverse()
}

//P: array of strings. R: filtered array of non-matches
// E: Ps: loop through, if array.includes is false, then push to new arr
function gooseFilter (birds) {
  const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let filtered = []
  for (let bird of birds) {
    if (!geese.includes(bird)){
      filtered.push(bird)
    }
  }
  // return an array containing all of the strings in the input array except those that match strings in geese
  return filtered;
};

function superSize(num){
  return Number(String(num).split('').sort((a,b) => b - a).join(''));
}

const quarterOf = (month) => {
  if (month <= 3) return 1;
  if (month <= 6) return 2;
  if (month <= 9) return 3;
  if (month <= 12) return 4;
}

// L1: Bartender, drinks!
function getDrinkByProfession(param){
  let person = param.toLowerCase(); 
  let options = {
    jabroni: "Patron Tequila",
    "school counselor": "Anything with Alcohol",
    programmer: "Hipster Craft Beer",
    "bike gang member": "Moonshine",
    politician: "Your tax dollars",
    rapper: "Cristal"
  }
  return options[person] || "Beer";
}

//Reversing words in a string. 
function reverse(string){
  return string.trim().split(' ').reverse().join(' ');
}

//vowel remover
// remove all lowercase vowels in a given string
function shortcut(string){
  const vowels = ['a','e','i', 'o', 'u'];
  let result;
  for (let char of string){
    if (vowels.includes(char)){
      continue;
    }
    result += char;    
  }
  return result;
}
//solution 2
function shortcut(string) {
  const vowels = ['a','e','i', 'o', 'u'];
  return string.split('').filter( x => vowels.includes(x) ? '' : x ).join('');
}

function apple(x){
  let n = Math.pow(Number(x), 2);
  return (n > 1000) ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.';
}

// in: arr, return: string w/o 0 and last index. 
function array(str){
  let arr = str.split(',')
  if (arr.length < 3) return null;
  arr.pop();
  arr.shift();
  return arr.join(' ');
}

var repeatIt = function(str, n) {
  if (typeof str != "string") return "Not a string";
  return str.repeat(n); 
}

// May 13
//1. P: [correct answers to exam], [student's answers to exam] R: integer of score: +4 correct, -1 wrong, 0 for blank; if <0 return 0. Arrs are not empty, are same length
// E: checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// Ps: two for loops comparing with conditionals. 
function checkExam (arr1, arr2) {
  let result = 0;
  for (let i = 0; i < arr1.length; i++){
    if (arr2[i] === ""){
      result += 0;
    } else if (arr1[i] === arr2[i]){
      result += 4;
    } else if (arr1[i] !== arr2[i]){
      result += -1;
    }
  }  
  return (result < 0) ? 0 : result;
};

//solution 2
function checkExam(array1, array2) {
  // good luck
  let correct = array1
    .filter((el, i, arr1) => el === array2[i])
    .reduce((acc, el) => {
      if (el != undefined){
        acc += 4;
      }
      return acc;
    }, 0);
  let incorrect = array2
    .filter((el, i, arr2) => el !== array1[i])
    .reduce((acc, el) => {
      if (el === "") {
        return acc;
      } else {
        acc += 1
      }
      return acc;
    }, 0);
  
  let answer = correct - incorrect;
  return (answer > 0) ? answer : 0;
};

// 2. Find the Difference in Age between Oldest and Youngest Family Members
function differenceInAges(ages){
  let oldest = Math.max(...ages)
  let youngest = Math.min(...ages)
  let difference = oldest - youngest;
  return [youngest, oldest, difference];
};

// 3. To square(root) or not to square(root)
// P: integer array. R: square root as an integer or square the number
// E: [4,3,9,7,2,1] -> [2,9,3,49,4,1] Ps: map and check with Number.isInteger 
function squareOrSquareRoot(array) {
  let result = array.slice();
  return array.map((el, i) => {
    if (Number.isInteger(Math.sqrt(el))){
      return Math.sqrt(el);
    } else {
      return Math.pow(el, 2);
    }
  });  
}

// 3. Printing Array elements with Comma delimiters
/* Input: Array of elements ["h","o","l","a"]
Output: String with comma delimited elements of the array in th same order.
"h,o,l,a" */
function printArray(array){
  return array.join(',');
};

// 4. Grasshopper - Array Mean
function findAverage (arr) {
  if (arr.length === 1) return arr[0];
  return arr.reduce((acc, el) => acc + el, 0) / arr.length;
}

// 5. Add length
// P: string R: an array of each word with it's length
// E: addLength('apple ban') => ["apple 5", "ban 3"]
// Ps: take string and split into words. for each word, add a space and it's length as an integer. return the array of all of these. 
function addLength (str) {
  let arr = str.split(' ');
  let result = [];
  for (let word of arr){
    word = word + ` ${word.length}`;
    result.push(word)
  };
  return result;
};
// solution 2 
function addLength(str) {
  return str.split(' ').map((word) => word + ` ${word.length}`);  
}

//Name Shuffler
function nameShuffler(str){
  return str.split(' ').reverse().join(' ');
}

// Holiday VI - Shark Pontoon
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  let sharkVelocity = (dolphin) ? (sharkSpeed / 2) : sharkSpeed;
  let myTimeInSeconds = pontoonDistance / youSpeed;
  let sharkTimeInSeconds = sharkDistance / sharkVelocity;
  return (myTimeInSeconds > sharkTimeInSeconds) ? 'Shark Bait!' : 'Alive!';
}

function isLockNessMonster(s) {
  let phrase = /tree fiddy|3.50|three fifty/;
  return s.match(phrase);
}

// parse int from char
function getAge(inputString){
  return parseInt(inputString);
}

//Area or perimeter
const areaOrPerimeter = function(l , w) {
  if (l === w) {
    return l * w;
    } else if (l !== w) {
      return (l + w) * 2;
    }
};

// Switch it up
function switchItUp(number){
  let numberInText = {
    0: 'Zero',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
  };

  return numberInText[number];
}

//is it even?
function testEven(n) {
  return n % 2 === 0;
}

// say hello
function sayHello(name) {
  return 'Hello, ' + name;
}

function mergeArrays(arr1, arr2) {
  if(arr1.length == 0 && arr2.length == 0) return [];
  
  let result = arr1.slice();
  for (let n of arr2.slice()){
    if(!result.includes(n)){
      result.push(n)
    }
  }
  return result.sort((a, b) => a - b);
}

//Correct the mistakes of the character recognition software
function correct(string){
  let options = {
    5: 'S',
    0: 'O',
    1: 'I'
  }
  let result = '';
  for (let char of string){
    if(options[char]){
      char = options[char]
    }
    result += char;
  }
  return result;
};

// sum mixed arr values -> [1, '1', '3', 4, '7']
function sumMix(x){
  return x.reduce((acc,c) => acc + Number(c), 0);
}

function multiTable(number) {
  const str = Array.from('123456789')
  str.push('10')
  return str.map(n => `${n} * ${number} = ${n * number}`).join('\n');
}
function isPalindrome(line) {
  return line.split('').reverse().join('') === line;
}

function shortenToDate(longDate) {
  const [date, time] = longDate.split(',')
  return `${date}`
}
