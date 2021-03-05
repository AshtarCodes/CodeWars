// find century of provided year. 
function century(year) {
    let length = String(year).length;
    let p = length - 2;
    if (length > 2){
      return (String(year).slice(p) > 0) ? +String(year).slice(0,p) + 1 : +String(year).slice(0,p);  
    } else {return 1};  
};

// calc
function basicOp(operation, value1, value2){
    switch (operation){
        case '+':
        return value1 + value2
        break;
        case '-':
        return value1 - value2
        break;
        case '*':
        return value1 * value2
        break;
        case '/':
        return value1 / value2
        break;      
    }
};

// n divisible by x and y ? 
function isDivisible(n, x, y) {
    return (n % x === 0 && n % y === 0);
}; 

// str to num
var stringToNumber = function(str){
    return Number(str); 
};

//initials
function abbrevName(name){
    let f = name.toUpperCase().split(' ');
    return f[0].charAt(0) + '.' + f[1].charAt(0);
};

// inverse
function invert(array) {
    return array.map(x => -x)
};

//
function disemvowel(str) {
    let arrNest = str.split(' ').map(word => word.split(''));
    let vowels = (n) => n == 'a' || n == 'e' || n == 'i' || n== 'o' || n == 'u';
    for (let i = 0; i < arrNest.length; i++){
        let eachWord = arrNest[i];
        for (let j = 0; j < eachWord.length; j++){
            let wordLetters = arrNest[i][j];
            let vowelIndex = arrNest[i].findIndex(vowels);
            let removed = arrNest[i].splice(vowelIndex,1);
        };
    };
    return arrNest.map(word => word.join('')).join(' ');    
};

