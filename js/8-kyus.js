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

  