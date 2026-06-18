// Functions are Code Blocks
function sayHello() {
     return "Hello World in der Konsole!"; }

console.log(sayHello());


function sayHello2() {
  return "Hello World auf der Webseite!";
}
console.log(sayHello2());


function sayHello3(){

    return "JavaScript lernen macht Spaß!"
}
let greeting =sayHello3()

document.getElementById("demo").innerHTML= greeting;



function multiply(a, b) {
    return a * b;
  }

   let sum = multiply(4, 3);
  document.getElementById("demo2").innerHTML = sum;

// A Function Can Be Used Many Times
//function add(a, b) {
//  return a + b;}

//let sum1 = add(5, 5);
//let sum2 = add(50, 50);

// Local Variables Gültigkeitsbereich

//Variables declared within
// a JavaScript function, become LOCAL to the function.
//Local variables can only
//  be accessed from within the function.

//Since local variables are only recognized 
// inside their functions, variables with 
// the same name can be used in different functions.

//Local variables are created when a function starts,
//  and deleted when the function is completed.


// GLOBALE Variable: Sie wird ganz außen im Code
// erstellt.
let carName = "Volvo";

// 1. Zugriff von außen:
// Da die Variable global ist,
// kennt der Code sie hier problemlos.
let textOutside = "Outside: " + typeof carName + " " + carName;
document.getElementById("demo3").innerHTML = textOutside;

// 2. Zugriff von innen:
function myFunction() {
    let carNameL = "Saab";
  // Auch innerhalb der Funktion kennt JavaScript die globale Variable!
  let textInside = "Inside: " + typeof carName + " " + carName; 
  document.getElementById("demo4").innerHTML = textInside;
}

myFunction();

let textInside2= "Zugriff von außen auf carNameL ergibt: " + typeof carNameL;
document.getElementById("demo5").innerHTML = textInside2;


// Calling a Function
// JavaScript Function Parameters
function sayHello6(name){
    return "Hello " + name;

}
let greeting6 = sayHello6("John");
document.getElementById("demo6").innerHTML = greeting6;

// Functions Without return
//If a function does not return a value,
//the return value will be undefined.
function multiply(a, b) {
  let x = a * b;
}
let result = multiply(4, 3);
document.getElementById("demo7").innerHTML ="das Ergebnis ist: " +result;

function checkAge(age) {
  if (age < 18) {
    return "Too young";
  }
  return "Access granted";
}

function toCelsius(farenheit) {
  return (5 / 9) * (farenheit - 32);
}
document.getElementById("").innerHTML = toCelsius(77);

//The Arguments Object

