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