//Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
//The four operators are "add", "subtract", "divide", "multiply".
// Try not to use if statements
// pseudo code: use a switch 

function arithmetic(a, b, operator){
    let result = 0;
    switch (operator) {
        case "add":
            return result = a + b;
            break;
        case "subtract":
            return result = a - b;
            break;
        case 'multiply':
            return result = a * b;
            break;
        case 'divide':
            return result = a / b;            
    };
    return result;
  };

  /* Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.*/
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
} 

//pseudo code: 1. create attack method and add to object instances 2. health = health - damage per attack. 3. loop if health > 0
function declareWinner(fighter1, fighter2, firstAttacker) {
    Fighter.prototype.attack = function (opp) {
        return opp.health = opp.health - this.damagePerAttack;
    };
   let first = firstAttacker;
   let winner = '';
   fighter1.attack(fighter2)
   fighter2.attack(fighter1)
   if (first === fighter1.name) {
       fighter1.attack(fighter2)
       while ((fighter1.health > 0 && fighter2.health > 0)){
            if (fighter2.health > 0){    
                fighter2.attack(fighter1)
            }
            if (fighter1.health > 0){
                fighter1.attack(fighter2)
            }
        }
    } else if (first === fighter2.name) {
       fighter2.attack(fighter1)
       while ((fighter1.health > 0 && fighter2.health > 0)){
           if (fighter1.health > 0){
              fighter1.attack(fighter2)
           }
            if (fighter2.health > 0){
                fighter2.attack(fighter1)
            }
        }
    };
    console.log(fighter1.health);
    console.log(fighter2.health);
    winner = (fighter1.health > 0) ? fighter1.name : fighter2.name;
    return winner;
  };

//   console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"));
//In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

  String.prototype.isUpperCase = function() {
    // pseudo code: 1. have to check if a string is equal to the uppercase version of itself. 2. if empty, must define the isUppercase
    if (String(this) == undefined){
        return String.isUpperCase;
    } else if (String(this) == String(this).toUpperCase()){
        return true;
    } else if (this != this.toUpperCase()) {
        return false
    }
  }