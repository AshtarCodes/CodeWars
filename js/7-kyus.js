function transformFirstAndLast(array) {
    // your code here
    let first = array[0];
    let last = array[array.length-1];
    let obj = {}
    obj[first] = last
    return obj;
};

// convert an array into an object
function transformArrayToObject(array) {
    // your code here
    return Object.fromEntries(array);
}

// convert nested arrays into an array of objects
function transformEmployeeData(employeeData) {
    // your code here
    return employeeData.map(arr => Object.fromEntries(arr));
}

function getAllKeys(obj) {
    // your code here
    let result = [];
    for (let key in obj){
        result.push(key)
    }
    return result;
}

function listAllValues(obj) {
    // your code here
    let result = [];
    for (let key in obj){
        result.push(obj[key])
    }
    return result;
};

function convertObjectToArray(obj) {
    // your code here
    return Object.entries(obj);
};

//solution 2
function convertObjectToArray(obj) {
    // your code here
    let result = []
    let entries = []
    for (let key in obj){
        entries.push(key, obj[key]);
        result.push(entries);
        entries = []
    }
    return result;
}


var customerData = {
    'Joe': {
      visits: 1
    },
    'Carol': {
      visits: 2
    },
    'Howard': {
      visits: 3,
    },
    'Carrie': {
      visits: 4
    }
};
  
function greetCustomer(firstName) {
    // your code here
   if (customerData[firstName] === undefined){
       return 'Welcome! Is this your first time?';  
   }; 
   let customer = customerData[firstName];
   if (customerData[firstName].visits === 1){
       return(`Welcome back, ${firstName}! We\'re glad you liked us the first time!`);
   } else if (customerData[firstName].visits > 1){
       return(`Welcome back, ${firstName}! So glad to see you again!`);
   };  
};

function isRubyComing(list) {
    return list.some(x => x.language == 'Ruby')  
};

function getFirstPython(list) {
    let dev = list.find(x => x.language === 'Python');
    if (dev !== undefined) {return `${dev.firstName}, ${dev.country}`} else{return 'There will be no Python developers'}
}; 

function isSameLanguage(list) {
    return list.every(x => x.language === list[0].language)
};

function getCount(st) {
    let str = st.toLowerCase();
    let vowelsCount = 0;  
    let strArr = str.split('').filter(str => str.includes('a')||str.includes('e')||str.includes('i')||str.includes('o')||str.includes('u'))     
    return vowelsCount + strArr.length;
};

function alienLanguage(str){
    let words = str.split(' ') // arr of words
    let WORDS = words.map(x => x.toUpperCase()) // arr of capital words
    let result = []
    // 
    for (let i = 0; i < WORDS.length; i++){ // walks each word (i) l-r
      let rev = WORDS[i].split('').reverse().join('') // 'MY' -> ' YM'
      rev = rev.replace(rev[0], rev[0].toLowerCase()) // 'YM' -> 'yM'
      result.push(rev.split('').reverse().join(''))  // 'yM' - 'My'  
    }
    return result.join(' ') // turn arr to str
}

//return only integers
function sum(){
    let sumArr = [...arguments]
    return sumArr.reduce((acc,c) => {
      if (Number.isInteger(c)){
        acc += c;
      }
      return acc;
    },0)
  }

  //Square every digit and concat
  function squareDigits(num){
    return Number(String(num).split('').map(n => n * n).join(''))    
  }

  function oddOrEven(array) {
    if (Array.isArray(array) && (array[0] === 0 || array[0] == null)) return 'even';
    return array.reduce((acc, n) => acc + n, 0) % 2 === 0 ? 'even' : 'odd';
  }

// round up if odd, if eveen get that char and 1 more
function getMiddle(s){
  let middle = s.length / 2 - 1;
  if (s.length % 2 === 1){
    return s.charAt(Math.ceil(middle));
  } else if (s.length % 2 === 0) {
    return s.charAt(middle) + s.charAt(middle + 1);
  }
}

// filter the number
var FilterString = function(value) {
  //Complete this function :)
  let input = value.split('')
  let res = '';
  for (let el of input){
    res += Number.isInteger(parseInt(el)) ? el : '';
  }
  return Number(res);
}

// Training JS #26 - map
function isolateIt(arr){
  return arr.map(s=>s.slice(0,s.length/2)+"|"+s.slice(-s.length/2));
}

// 
function highAndLow(numbers){
  const max = Math.max(...numbers.split(' ').map(n => Number(n)))
  const min = Math.min(...numbers.split(' ').map(n => Number(n)))
  return `${max} ${min}`;
}

//You're a square!
// Given an integral number, determine if it's a square number:
var isSquare = function(n){
  return Number.isInteger(Math.sqrt(n))
}

function descendingOrder(n){
  let result = Number(String(n).split('').sort((a,b) => Number(b)-Number(a)).join(''));
  return result;
}

// Mumbling
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
function accum(s) {
  let result = Array.from(s).map((c, i, arr) => {   
      return c.slice().toUpperCase() + c.toLowerCase().repeat(i)    
  }).join('-')
  return result;	
}

function disemvowel(str) {
  const vowels = {
    a: 
    b,
    c,
    d,
    e,
  }
  let result = ""
  for (let c of str){       
    if(!vowels[c] || !(c.toLowerCase() in vowels)){
      result += c
    }
  }
  return result;
};

function likes (names) {
  if(names.length> 4){
    let [one, two, ...rest] = names;
    return `${one}, ${two}, and ${names.length - 2} others like this`;
  } else if (names.length === 3) {
    let [one, two, three, ...rest] = names;
    return `${one}, ${two}, and ${three} like this`;
  } else if(names.length === 2){
    let [one, two] = names;
    return `${one} and ${two} like this`;
  } else if(names.length === 1){
    let [one] = names;
    return `${one} likes this`;
  } else if (names.length < 1){
    return `no one likes this`;
  }
}
