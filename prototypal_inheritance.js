// let animal = {
//     eats: true
    
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal; // now animal is prototype for rabbit

// console.log(rabbit.eats); // true
// console.log(rabbit.jumps); // true

//---------------------------------------------------------------

/*
let animal = {
    eats: true,
    walk() {
      console.log("Animal walk");
    }
  };
  
  let rabbit = {
    jumps: true,
    __proto__: animal
  };
  
  // method walk is taken from the prototype
  rabbit.walk(); // Animal walk 
 */


//---------------------------------------------------------------------
// Using "this"

let animal = {
    walk() {
        if (!this.isSleeping) {
            console.log("I walk");
        }
    },
    sleep() {
        this.isSleeping = true;
    }
};

let rabbit = {
    name: "Whate rabbit",
    __proto__: animal
};

rabbit.sleep();

console.log(animal.isSleeping); // undefined
console.log(rabbit.isSleeping); // true

// "this" works only for object, but not for prototype!!!