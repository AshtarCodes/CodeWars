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
  }
