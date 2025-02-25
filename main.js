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

// create an object (using curly brackets) to store related variables and functions
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
