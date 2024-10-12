function greet(name) {
    return "Hello " + name;
}
console.log(greet("World"));


function addNumbers(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

console.log(addNumbers(10, 20));


let num = 10;

function showNum() {
  let num = 30;
  console.log(num);
}

console.log(num);
showNum();
console.log(num);

function makeCounter() {
  let count = 0;

  return function() {
    count++;
    console.log("Count is now:", count);
  }
}

let counter = makeCounter();

counter();
counter();
counter();

console.log("Program completed. Exiting...");
