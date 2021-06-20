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