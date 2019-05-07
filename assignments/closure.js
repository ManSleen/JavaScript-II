// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
console.log("-----------------------------------------");
console.log("CLOSURE.JS CHALLENGES");
function parent() {
  return "I'm the parent";
  function child() {
    return "I'm the child!";
  }
}

console.log(parent());
//console.log(child()); // child is not defined

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */
console.log("-----------------------------------------");
// ==== Challenge 2: Create a counter function ====
let count = 0;
const counter = () => {
  function countFunction() {
    return count++;
  }
  return countFunction;
};

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
console.log("-----------------------------------------");
// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
let newCount = 0;
const counterFactory = () => {
  return {
    increment: function() {
      return newCount++;
    },
    decrement: function() {
      return newCount--;
    }
  };

  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
let newerCounter = counterFactory();

newerCounter.increment();
newerCounter.increment();
newerCounter.increment();
newerCounter.increment();

console.log(newCount); // should be 4

console.log("-----------------------------------------");

newerCounter.decrement();
newerCounter.decrement();
newerCounter.decrement();
newerCounter.decrement();
newerCounter.decrement();
newerCounter.decrement();
console.log(newCount); // should be -2 because 4 - 6 = -2
