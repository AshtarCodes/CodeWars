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

