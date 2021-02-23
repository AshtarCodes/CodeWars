// highest profit wins
function minMax(arr){
    let max = Math.max(...arr);
    let min = Math.min(...arr);  
    return [min,max];
};
  //alternate solution
function minMax(arr){
let sort = arr.sort((a,b) => a > b ? 1 : -1);
  return [sort[0],sort[sort.length-1]];
};

// lost without a map
function maps(x){
    return x.map((x) => x*2);
};
//convert number to reversed array of digits
function digitize(n) {
    let reverse = String(n).split('').reverse().map(x => Number(x));
    return reverse;
};