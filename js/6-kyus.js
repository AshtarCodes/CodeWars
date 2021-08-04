//Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details
// P: arr of obj. R: Arr of obj with missing fields, and an inserted property
// E: [ {firstName: null, question: 'Hi, could you please provide your firstName }] || []
// Ps: loop through array, then loop through obj properties. find null. insert question.  
function askForMissingDetails(list) {
    let result = []
    for (let dev of list){ // loop through each dev
      for (let prop in dev){ // loop through dev properties
        if(dev[prop] == null){
          dev.question = `Hi, could you please provide your ${prop}.`
          result.push(dev)
        }
      }
    }
    return result;
}
  // refactored
function askForMissingDetails(list) {

return list.filter((dev) => {
    
    for (let prop in dev){ // loop through dev properties
    if(dev[prop] == null){
        dev.question = `Hi, could you please provide your ${prop}.`
        return dev;
    }
    }
})

}

// check if array values have the same frequency
function same (arr1, arr2){
    let result;
    arr1 = arr1.reduce((acc,c) => {
        if(!acc[c]){
            acc[c] = 0
        }
        acc[c] += 1

        return acc;
    }, {});
    arr2 = arr2.reduce((acc,c)=> {
        if (!acc[c]){
         acc[c] = 0   
        }
        acc[c] += 1
        return acc;
    },{});

    for (let val in arr1){
        if (!(arr2[val**2])){
            return false;
        }
        if(arr1[val] !== arr2[val**2]){
            return false;            
        }        
    }
    return true;
};

// check if valid anagram
function validAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    // first count
    let a1 = str1.split('').reduce((acc,c) => {
        if(!acc[c]){
            acc[c] = 0;
        }
        acc[c] += 1;
        return acc;
    }, {})
    // second count
    let a2 = str2.split('').reduce((acc,c) => {
        if(!acc[c]){
            acc[c] = 0;
        }
        acc[c] += 1;
        return acc;
    }, {})
    
    //check if value and frequencies of values are equal
    for (let val in a1){
        // if this char does not exist in 2nd string
        if(!(val in a2)){
            return false;
        }
        // if the frequencies of both chars don't match
        if((a1[val] !== a2[val])){
            return false;
        }
    }
    return true;
};

// Given two positive integers, determine if the frequency of each digit is the same. 
function sameFrequency(a,b){
    
    a = Array.from(String(a))
    b = Array.from(String(b))
    
    if(a.length !== b.length) return false;
    
    a = a.reduce((acc,c)=>{
       if(!acc[c]){
           acc[c] = 0
       }
       acc[c] += 1;
       return acc;
    },{})
    
    b = b.reduce((acc,c)=>{
       if(!acc[c]){
           acc[c] = 0
       }
       acc[c] += 1;
       return acc;
    },{});
    
    // check if value exists in other; check if frequency of values is the same
    for (let val in a){
        if(!(val in b)){
            return false;
        }
        if(a[val] !== b[val]){
            return false;
        }
    }
    return true;
  }

  // count unique values
  let arr = [1,1,1,2,2,3,3,4,4,4,4,5,5,6,6,7,8,8,8,8]
// i and j. if unequal, increment i and set it to value of j. then increment j. if equal, just increment j. until end of loop. then return index of i + 1 to return a count. 
function countUniqueValues(arr){
    if(!arr.length){
        return 0;
    }
    let i = 0
    for (let j=1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++
            arr[i] = arr[j];
        }         
    }
    return i + 1;
}

// Are there duplicates
// P: several arguments; R: true if duplicates among args; E: 1,3,5,3,'a','b' -> true 
// frequency counter: 
// Ps: group args by identity and count frequency. if any are greater than 1, return true 
function areThereDuplicates(args){
    let itemFrequency = [...args].reduce((acc,c) => {
        if(!acc[c]){
            acc[c] = 0;
        }
        acc[c] += 1;
        return acc;
    }, {});

    for(let item in itemFrequency){
        if(itemFrequency[item] > 1) return false;
    }
    return true;    
}

//P: two strings; R: boolean; E: 'abc', 'abracadabra' -> true
// Ps: j iterates through s2. if s1[i] === s2[j] ? i++
//  if s1[i] === s1.length ? true
// 
function isSubsequence(s1, s2) {
    let i = 0;
    let j = 0;
    while(j < s2.length){
        if(s1[i] === s2[j]) i++;
        if(i === s1.length) return true;
        j++
    }
    return false;
}

//maxSubarraySum([100,200,300,400], 2) // returns 700

function maxSubarraySum(arr, window){
    if(window > arr.length) return null;

    let tempSum = 0;
    let maxSum = 0;
    
    for (let i = 0; i < window; i++){
        maxSum += arr[i]
    }

    tempSum = maxSum;

    for(let j = window; j < arr.length; j++){
        tempSum = tempSum - arr[j - window] + arr[j];
        maxSum = Math.max(maxSum, tempSum)
    }

    return maxSum;
}

//Who likes it? 
//Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item
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

/* Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits. 
*/
function duplicateCount(text){
    let count = 0;
    text = text.split('').reduce((acc,c) => {
      if(typeof c == 'string'){
        c = c.toLowerCase();
      }
      if(!acc[c]){
        acc[c] = 0;
      }
      acc[c]++;
      return acc;
    },{})
    
    for (let c in text){
      if(text[c] > 1){
        count++;
      }
    }
    return count;
}

/* 
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).
*/
function spinWords(string){
    return string.split(' ').map(el => (el.length >= 5) ? el.split('').reverse().join('') : el).join(' ');
}

/*Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b keeping their order.
*/
function arrayDiff(a, b) {
    if(a.length && a.length < 1) return [];
    
    return a.filter((el, i, arr) => !b.includes(el));
}
// solution 2 for arrayDiff
function arrayDiff(a, b) {
  let output  = [];
  if (a && a.length < 1) return [];
  
  const lookup = b.reduce((acc,c) => (acc[c] = (acc[c]++ || 1), acc),{});
  
  for (let el of a){
    if(!(el in lookup)){
      output.push(el);
    }
  }
  return output;
}

/*
You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
*/
function DNAStrand(dna){
    let complement = {
      A:'T',
      T:'A',
      G:'C',
      C:'G'
    }
    
    let result = "";
    
    for (let s of dna){
      if(complement[s]){
        result += complement[s];
      }
    }
    return result;
}

//
function isIsogram(str){
    if(str.length < 1) return true;
    
    let lookup = {};
    
    for (let c of str){
      c = c.toLowerCase();
      if (c in lookup){
        return false;
      }
      if(!lookup[c]){
        lookup[c] = 0;
      }
      lookup[c]++
    }
    return true;
}

/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
*/
function solution (n) {
    let sum = 0;

    for (let i = 0; i < n; i++){
        if (i % 3 === 0 || i % 5 === 0){
            sum += i;
        }
    }
    return sum;
}

/* Given an array of integers, find the one that appears an odd number of times.
 There will always be only one integer that appears an odd number of times.
*/
function findOdd(A) {
    let counter = A.reduce((acc,c) => {
      if(!acc[c]){
        acc[c] = 0
      }
      acc[c]++;
      return acc;
    }, {});
    
    for (let n in counter){
      if(counter[n] % 2){
        return Number(n);
      }
    }
};

// Simple, given a string of words, return the length of the shortest word(s).
// solution 1
function findShort(s){
  let words = s.split(' ');
  let min = words[0].length;
  for (let word of words){
    let length = word.length;
    if(length < min){
      min = length;
    }
  }
  return min;
}

// solution 2
function findShort (s) {
  return Math.min(...s.split(' ').map(el => el.length));
}

//Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
const countBits = function(n) {
  let bin = Array.from(Number(n).toString(2));
  return bin.reduce((acc,c) => {
    return acc + Number(c);
  }, 0)
};

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
function XO(str) {
  if (str.length < 1) return true;
  let count = str.toLowerCase().split('').reduce((acc,c) => {
    if(!acc[c]){
      acc[c] = 0;
    }
    acc[c]++;
    return acc;
  },{});

  if ('x' in count && 'o' in count){
    if(count['x'] === count['o']){
      return true;
    }
  }
  return false;
};

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
// [2,4,6,7,8] -> 7
function findOutlier(n){
  let even = n.filter(n => n % 2 == 0);
  let odd = n.filter(n => n % 2 !== 0);
  
  if(even.length > odd.length){
    return odd[0];
  } else {
    return even[0];
  }
};

//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
function filter_list(l) {
  return l.filter(el => typeof el === 'number');
}

/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
*/
function duplicateEncode(word){
  word = word.toLowerCase();
  
  let result = "";
  
  let count = {}
  for (let c of word.split('')){
    if (!count[c]) count[c] = 0;
    count[c]++;
  }
  
  for (let char of word){
    if(count[char] && count[char] > 1){
      result += ')';
    } else if (count[char] === 1){
      result += '(';
    }
  }
  return result;
};

// Dubstep. The input consists of a single non-empty string, consisting only of uppercase English letters. May have 'WUB' in between any words. Return only the words of the original song. 
function songDecoder(song){
  return song.split('WUB').filter(el => el.trim() != '').join(' ');
}

/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
*/
// loop through each word. if a word contains a number from 1-9, assign it to a new array at an index of (number - 1). 
function order(words){
  if(words.length < 1) return '';

  let nums = '123456789'.split('');
  let sorted = [];

  for (let word of words.split(' ')){
    
    if (word.length > 1){
      for (let c of word){
        // if c is a num 1-9
        if(nums[c]){
          sorted[c - 1] = word;
        }
      }
    } else {
      sorted[word - 1] = word;
    }
  };

  return sorted.join(' ').trim();
}

/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
*/
function toCamelCase(str){
  let result = "";

  for (let i = 0; i < str.length; i++){
    
    if (str[i -1] === '-' || str[i-1] === '_') {
      result += str[i].toUpperCase();
    } else if (str[i] === '-' || str[i] === '_'){
      continue;
    } else {
      result += str[i];      
    }    
  }
  return result;
}

/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

*/
//  solution 1
function isPangram(string){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  string = string.toLowerCase().split('').map(el => alphabet.includes(el) && el);
  return alphabet.every(el => string.includes(el));
}
//solution 2
function isPangram(string){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  string = string.toLowerCase()
  return alphabet.every(el => string.includes(el) !== false);
}
console.log(isPangram('husky'), false);
console.log(isPangram('abcdefghijklmnopqrstuvwxyz'), true);

/*
Given: an array containing hashes of names
Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
*/
function list(names){
  if (names.length < 1) return [];
  return names.reduce((str, obj, i, arr) => {
    let name = obj.name;

    if(arr.length >= 2 && arr[i] === arr[arr.length - 1]){
      str += `& ${name}`;
    } else if (arr[i] === arr[arr.length - 2]){
      str += `${name} `;
    } else if (arr.length === 1) {
      str += `${name}`;
    } else {
      str += `${name}, `;
    };
    return str;
  }, "")  
}

console.log(list([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}]), 'Bart, Lisa & Maggie');
console.log(list([{name: 'Bart'}, {name: 'Lisa'}]), 'Bart & Lisa');

/* 
 Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
*/

function solution(str){
   let res = [];
   if (str.length < 1) return res;

   let temp = '';
   for (let i = 0; i < str.length; i += 2){
    if (i === str.length - 1){
      temp += str.charAt(i) + '_'; 
    } else {
      temp += str.substr(i, 2);
    }
    res.push(temp);
    temp = '' 
   }

   return res;
}

console.log(solution('abc'), ['ab', 'c_']);
console.log(solution('abcdef'), ['ab', 'cd', 'ef']);

/* 
Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
*/
function digital_root(n) {
  if (Number(n) < 10){
    return Number(n);
  };
  
  n = Number(String(n).split('').reduce((acc, c) => Number(acc) + Number(c), 0))
  
  return digital_root(n);
}

console.log(digital_root(450), 9);
console.log(digital_root(45), 9);
console.log(digital_root(45), 5);

/* In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.
For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].
Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates. */
function solve(arr) {
  return arr.map(x => [...new Set(x)].length).reduce((acc,c)=> acc * c, 1)
};

console.log([[1,2],[4],[5,6]], 4);
console.log([[1,2],[4,4],[5,6,6]], 4);
console.log([[1,2],[3,4],[5,6]], 8);

// Anagram
// get a count of unique letters in the word. Then get a count of unique letters in each arr element and compare it. if counts are equal, push el to new arr. return new arr. 
function anagrams(word, words) {
  if (!word.length || !words.length) return [];

  function reduceIntoCount (str) {
    return str.split('').reduce((acc,c)=> {
      if (!acc[c]) acc[c] = 0;
      acc[c]++
      return acc;
    }, {})    
  }
  let result = [];
  let wordCount = reduceIntoCount(word);

  const countArr = words.map(el => reduceIntoCount(el));

  for (let i = 0; i < countArr.length; i++){
    let localCount = countArr[i];
    let match;
    for (let el in localCount){
      if (el in wordCount && localCount[el] === wordCount[el]){
        match = true;
      } else {
        match = false;
        break;
      }
    }
    if (match){
      result.push(words[i]);
    }
  }

  return result; 
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']), ['aabb', 'bbaa']);

/* You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise. */
function isValidWalk(walk) {
  if (walk.length !== 10) return false;
  
  let count = walk.reduce((acc,c) => {
    if (!acc[c]){
      acc[c] = 0;  
    } 
    acc[c]++;
    return acc;
  },{})
  if (count['n'] !== count['s'] || count['w'] !== count['e']){
    return false;
  }
  return true;
};
console.log(isValidWalk(['n','s','n','s']), true);
console.log(isValidWalk(['n']), false);

/* Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2. */
function inArray(arr1,arr2){
  let result = [];
  if (arr1.length < 1 || arr2.length < 1) return result;
  
  for (let i = 0; i < arr2.length; i++){
    let testing = arr2[i];
    for (let str of arr1){
      if(testing.includes(String(str))){
        result.push(str);
      }
    }
  }
  result = result.sort((a,b) => a > b ? 1 : -1);
  return [...new Set(result)];
};
console.log(inArray(["arp", "live", "strong"],["lively", "alive", "harp", "sharp", "armstrong"]), ["arp", "live", "strong"]);

/* In this Kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.  */
function solve(arr){
  let dict = arr.reduce((acc,c) => ((acc[c] = acc[c] + 1 || 1),acc) ,{});
  return arr.sort((a,b) => dict[b] - dict[a] || a - b);
}

console.log(solve([2,3,5,3,7,9,5,3,7]), [3,3,3,5,5,7,7,2,9]);

function iqTest(numbers){
  let nums = numbers.split(' ').filter(el => el !== '' || el !== ' ').map(el => Number(el));
  let even = nums.filter(el => el % 2 === 0).length
  let odd = nums.filter(el => el % 2 !== 0).length
  if (even > odd){
    return nums.findIndex(el => el % 2 !== 0) + 1;
  } else {
    return nums.findIndex(el => el % 2 === 0) + 1;
  };
}
/* Sort the odd */
function sortArray(arr) {
  let odd = arr.filter(x => x % 2).sort((a,b) => a - b);
  let output = arr.map(el => (el % 2) ? odd.shift() : el );
  return output; 
}

/* String Array Duplicates */
function dup(arr) {
  let output = []
  let str;
  for (let s of arr){
    str = s.split('').filter((el,i,a) => el !== a[i+1]).join('')
    output.push(str)
  }
  return output;
};