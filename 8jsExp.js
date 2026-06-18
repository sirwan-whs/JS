const multiply = function(a, b){
return a * b
};

// ohne let z  wird multiply = function ... ausgeben
//document.getElementById("demo").innerHTML = multiply;


//After a function expression has been stored in a variable,
// the variable can be used as a function:

let z = multiply(4, 3);
document.getElementById("demo").innerHTML = z;


//Anonymous Functions
//The function above is
//  actually function without a name.
//Functions stored in variables do not need names.
//The variable name is used to call the function.
//But, function expressions can also be a named:
const add = function add(a, b) {return a + b;};


//Function Expressions Use Semicolons
//A function expression is a JavaScript statement.

//That is why it usually ends with a semicolon.
const add2 = function(a, b) {
  return a + b;
};

//Functions Stored in Variables
// Because a function expression is stored
//  in a variable, it can be used
// like a value.This is useful when passing
// functions to other functions (callbacks).
// A function expression can be assigned to 
// a variable, passed as an argument to another
//  function, or returned from a function.
function run(fn) {
  return fn();
}

const sayHello = function() {
  return "Hello";
};

run(sayHello); 


// Function Declarations vs Function Expression
function add3(a, b) {return a + b;} // A function declaration (or simply a function

const add6 = function(a, b) {return a + b;}; // A function expression

// Hoisting
//Function declarations can be called before they are defined.

//Function expressions can not be called 
// before they are defined.

//Function declarations are "hoisted"
//  to the top of their scope. 
// This means you can call a function before 
// it is defined in the code:

let sum = add4(2, 3); // Will work

function add4(a, b) {return a + b;}


// let sum2 = add5(2, 3); // ⛔ Will generate error

// const add5 = function (a, b) {return a + b;};


// Arrow functions => ... ; 

// // der absoluten Kurzform:
// const multiplyA = (a, b) => a * b;
const  multiplyA = (a, b) => {
    return a * b};

let resultA = multiplyA(4, 3);

document.getElementById("arrow1").innerHTML =
"The product is: " + resultA





 
