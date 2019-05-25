// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.
console.log("-----------------------------------------");
console.log("CALLBACKS.JS CHALLENGES");
const items = ["Pencil", "Notebook", "yo-yo", "Gum", "Pencil"];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

function getLength(arr, cb) {
  return cb(arr.length);
}

getLength(items, length => console.log(length));
console.log("-----------------------------------------");

function last(arr, cb) {
  return cb(arr[arr.length - 1]);
}

last(items, lastItem => console.log(lastItem));
console.log("-----------------------------------------");

function sumNums(x, y, cb) {
  return cb(x + y);
}

sumNums(3, 6, result => console.log(result));
console.log("-----------------------------------------");

function multiplyNums(x, y, cb) {
  return cb(x * y);
}

multiplyNums(3, 6, result => console.log(result));
console.log("-----------------------------------------");

function contains(item, list, cb) {
  return list.includes(item) ? cb(true) : cb(false);
}

contains("yo-yo", items, x => console.log(x));
console.log("-----------------------------------------");

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let noDupes = [];
  array.map(x => noDupes.push(x));
  let justWorkPlease = noDupes.filter((x, y, arr) => arr.lastIndexOf(x) === y);
  return cb(justWorkPlease);
}

removeDuplicates(items, x => console.log(x));

console.log("-----------------------------------------");

// let noDupes = [];
// items.map(x => noDupes.push(x));
// let uniqueVals = noDupes.filter((x, y, arr) => arr.lastIndexOf(x) === y);
// return noDupes;
// console.log(noDupes);
//let uniqueCompanyNames = companyNames.filter((x, y, arr) => arr.lastIndexOf(x) === y);
