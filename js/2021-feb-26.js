// convert to string
function numberToString(num) {
    return String(num)
};

// repeat
function repeatStr (n, s) {
    return s.repeat(n);
};

//find smallest int
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args);
    }
};
// count sheep
function countSheeps(arr) {
    return arr.reduce((acc, i) => (i === true) ? acc + i : acc,0)
};

// litres per hour
function litres(time) {
    return Math.floor(time * 0.5);
};

// hello world
function greet (){
    return `hello world!`
};

// get average age of dev objects nested in array 7kyu
// 1. let age = list.age.
// collect ages, divie by list.length
function getAverageAge(list) {
    let totalAge = 0;
    for (let dev of list){
        totalAge += dev.age;
    }
    return Math.round(totalAge / list.length);
};
//solution 2
function getAverageAge(list) {
    return Math.round(list.reduce((acc, dev) => acc + dev.age ,0 ) / list.length)
};

//find github admin 7kyu
// solution 1
function findAdmin(list, lang) {
    let githubAdmins = [];
    for (let dev of list) {
        if (dev.githubAdmin === 'yes' && dev.language === lang) {
            githubAdmins.push(dev);
        }
    }
    return githubAdmins;
};
//solution 2
function findAdmin(list, lang){
    let admin = list.filter(dev => dev.githubAdmin === 'yes' && dev.language === lang);
    return admin;
};

// order the food - return count of meal options selected by devs
function orderFood(list) {
    return list.reduce((acc, dev) => {
        if (!acc[dev.meal]){
            acc[dev.meal] = 0;
        };
        acc[dev.meal]++
        return acc;
    } ,{});
};

// Write a function that returns the array sorted alphabetically by the programming language. In case there are some developers that code in the same language, sort them alphabetically by the first name: 
// sort by lang alpha, if same lang sort by first name alpha
// 
function sortByLanguage(list) {
    let sort = list.sort((a,b) => {
        if (a.language > b.language){
            return 1;
        };
        if (a.language < b.language){
            return -1;
        };
        if (a.language === b.language){
            return (a.firstName > b.firstName) ? 1 : -1;
        };
    })
    return sort;
};
