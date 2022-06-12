function power(base, exponent){
    if (exponent === 0) return 1;
    return base * power(base, (exponent - 1));
}

function factorial(num) {
     const cache = {};
     function factorialHelper(num){
        if (num === 0) return 1;
        if (cache[num]) return cache[num];
        const result = num * factorialHelper(num-1);
        cache[num] = result;
       return result;
    }
    return factorialHelper(num);
}

function productOfArray (arr){
    if (arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
}

function recursiveRange(num){
    if (num === 0) return num;
    return num + recursiveRange(num-1);
}

function fibonacci(num) {
     const cache = {};
    function fib(num){
      if (num === 2 || num === 1) return 1;
      if (cache[num]) return cache[num];
      let result = fib(num-1) + fib(num-2);
      cache[num] = result;
      return result;
    }
    return fib(num);
}

function reverseString(str){
    if (str === '') return '';
    return reverseString(str.slice(1)) + str[0];
}