// What are objects?
// A variable that cans ore multiple values (properties) and functions (methods)

// create variables and functions
var username = "Sharegh";
var age = 25;
var isMarried = true;

function canTalk() {
  console.log("Hello, my name is " + username);
}

// we can call a function using parentheses (invoking a function)
canTalk();

// create an object (using curly brackets) to store related variables and functions (object literal)
var person1 = {
  //  property: value,
  username: "John",
  age: 25,
  isMarried: true,
  //  method: function() {},
  canTalk: function () {
    console.log("Hello, my name is " + this.username);
  },
};

// We can access the properties and methods of an object using dot notation
console.log(person1.canTalk());

// We can create multiple objects with the same structure, but this is not efficient because we have to write the same code multiple times
var person2 = {
  username: "Jane",
  age: 30,
  isMarried: false,
  canTalk: function () {
    console.log("Hello, my name is " + this.username);
  },
};

// We can create objects via a class rule
// A class is a blueprint for creating objects

// create a class using the class keyword
class Person {
  // properties: do NOT require declaration or initialization
  username;
  age;
  isMarried;

  // constructor is a function that runs when we create and object from our class blueprint
  constructor(usernameArg, ageArg, isMarriedArg) {
    // this keyword refers to the object that we are creating
    this.username = usernameArg;
    this.age = ageArg;
    this.isMarried = isMarriedArg;
  }

  // methods: do NOT require the function keyword
  canTalk() {
    // this keyword refers to the object that we are creating
    console.log("Hello, my name is " + this.username);
  }
}

// create an object from the class blueprint
// new keyword calls the constructor function of the Person class
var person3 = new Person("Jack", 35, true);
console.log(person3);

console.log(person3.canTalk());

var person4 = new Person("Jill", 40, false);
console.log(person4);
console.log(person4.canTalk());
