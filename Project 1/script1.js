// Declare variables
let num1 = 10;
let num2 = 5;

// Perform arithmetic operations
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);

// String variable
let name = "Justice";
console.log("Hello, my name is " + name);

// Select elements
const button = document.getElementById("btn");
const title = document.getElementById("title");
const message = document.getElementById("message");

// Add click event listener
button.addEventListener("click", function() {
  title.textContent = "Welcome, " + name + "!";
  message.textContent = "You just changed this text using JavaScript!";
  
  // Change style dynamically
  title.style.color = "blue";
  title.style.fontSize = "30px";
  message.style.color = "green";
});
