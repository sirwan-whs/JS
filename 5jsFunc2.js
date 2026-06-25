//25.06 
// 1. Function Declaration
function myFunction1(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}

// 2. Function Expression (Named)
const myFunction2 = function(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
};

//2.2 Function Expression (Anonymous)
const myFunction22 = function (x, y) {
  return x * y;
};

// 3. Arrow Function
const myFunction3 = (p1, p2) => p1 * p2;   // The function returns the product of p1 and p2
// 4. Function Constructor
 // The function returns the product of p1 and p2
const myFunction4 = new Function("p1", "p2", "return p1 * p2"); 

// object methods
const obj = {
  myfunction(x, y) {
    return "Hello World!";
  }
};


let f1 = myFunction1(5, 4);
document.getElementById("func1").innerHTML = f1;

function multiply(a, b) {
  return arguments.length;
}
document.getElementById("demo").innerHTML
 = "Number of arguments  multiply() ARE " + multiply();

 document.getElementById("demo2").innerHTML
 = "Number of arguments multiply(1, 2, 3, 4, 5, 6)are " 
 + multiply(1, 2, 3, 4, 5, 6);

 // The toString() method returns the function as a string:
 function multiplytoString(a, b) {
  return a * b;
}
document.getElementById("demo3").innerHTML
 = "The toString() method returns the function as a string: " + multiplytoString.toString();


 // call() method
 // Asynchronous Callbacks
 // Asynchronous callbacks are executed at
 //  a later time, allowing the main program
 //  to continue running without waiting.

// This is essential for preventing 
// the application from freezing during 
// long-running tasks like network requests.

// Synchronous callbacks, on the other hand, 
// are executed immediately,
//  blocking the main program until they complete.

function displayDate() {
  document.getElementById("demo4").innerHTML = Date();
}
//When you pass a function as an argument
// , remember not to use parenthesis.

// Right: displayDate
// Wrong: displayDate()
document.getElementById
("myBtn").addEventListener("click", displayDate);

setTimeout(myFunctiont, 3000);
function myFunctiont() {
  document.getElementById("demo5").innerHTML = "I love You !!";
}

// Array Methods
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myArrayFunction);
document.getElementById("demo6").innerHTML = txt;

function myArrayFunction(value) {
  txt += value + "<br>"; 
}

//The map() method creates
//  a new array by performing a function on each array element.
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myArrayFunction2);

document.getElementById("demo7").innerHTML = JSON.stringify(numbers2);

function myArrayFunction2(value) {
  return value * 2;
}