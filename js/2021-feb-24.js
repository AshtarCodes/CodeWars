//Ghost return random color
var Ghost = function() {
    this.color = generateColor();
};
function generateColor () {
    let generate = Math.random();
    switch (generate){
      case (generate < 0.25):
          return 'yellow';
          break;
      case (generate < 0.5):
          return 'white';
          break;
      case (generate < 0.75):
          return 'purple';
          break;
      default:
          return 'red';
    };
  };
const pacmanKilla = new Ghost();
// console.log(pacmanKilla.color);

// create human, man, and woman classes. create() returns an array of length 2, containing adam and eve

class God{
      static create(){
        return [adam, eve]
      }
}
  

class Human {
    constructor(name, gender){
        this._name = name;
        this._gender = gender;
    };
    get name (){
        return this._name;
    };
    set name (name){
        this._name = name;
    };
    get gender (){
        return this._gender;
    };
    set gender(gender){
        this._gender = gender;
    };
};
class Man extends Human{
    constructor(name, strength){
        super(name);
        this.strength = strength ?? 10;
        this.gender = 'male';
    }
    
};
class Woman extends Human {
    constructor (name, strength, IQ){
        super(name);
        this.strength = strength ?? 9;
        this.IQ = IQ ?? 125;
    }
};

const adam = new Man('Adam', '7');
const eve = new Woman('Eve','10');

// pirate ship
function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt = function (){
     let crewWt = Number(this.crew) * 1.5
     let worth = Number(this.draft - crewWt)
     return (worth > 20) ? true : false;
   };
};

//testing 1-2-3
/*cases: number([]) // => []
number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]*/
// 1. for loop i element and j 2. template strings

let number = function (array){ 
    let result = [];
    let line = "";
    for (let i = 0, j = 1; i < array.length; i++,j++){
        if (array.length > 0){
            line = `${j}: ${array[i]}`;
            result.push(line);
        };
    };
    return result;
};

// refactored greeting
class Person {
    constructor (name){
      this.name = name;
    };
    greet(someone){
      return `Hello ${someone}, my name is ${this.name}`;
    }
  };

  //isSantaClausible
  // check 
  // approaches: if else OR; deconstruct?, iterate through loop
  //pseudo: 1. check presence of method, 2. check expected output. 
  function isSantaClausable(obj) {
    let {sayHoHoHo: Ho, distributeGifts: gifts, goDownTheChimney: chimney} = obj;
    return [Ho,gifts,chimney].every((el, i) => typeof el == 'function');
  };


  // JS class like objects
  /*
  var dog = new Animal('Max', 'dog');
dog.toString(); // should return 'Max is a dog'
dog.type; // should == 'dog'
dog.name; // should == 'Max'
dog.name = 'Lassie'; // should set name to 'Lassie' */
class Animal {
    constructor (name, type){
        this._name = name;
        this._type = type;
    };
    toString(){
        return `${this._name} is a ${this._type}`
    };
    get name (){
        return this._name;
    }
    set name (name){
        this._name = name;
    };
    get type (){
        return this._type;
    }
};


// This Cube function needs help
// change the constructor so that it can take an integer for the side or no args
function Cube(n) {
    var side = Math.abs(n) || 0;
    
    this.getSide = function() { return side; };
    this.setSide = function(n) {
      if (isNaN(n) === true) { return; }
      side = Math.abs(n);
    };
  };