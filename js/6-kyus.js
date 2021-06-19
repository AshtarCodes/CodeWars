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

