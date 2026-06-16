// Den Button anhand seiner ID im HTML-Dokument suchen
let button1 = document.getElementById("myButton");

// Einen Event Listener hinzufügen, der auf einen "click" reagiert
//button.addEventListener("click", function() {
// Den Text des Elements mit der ID "demo" ändern
// document.getElementById("demo").innerHTML = "Hello JavaScript! (mit addEvenListener";
//});

button1.onclick = function() {
    document.getElementById("demo1").innerHTML = "Hello JavaScript! (mit .onclick)";
};

const btnOn = document.getElementById("btnOn");
const btnOff = document.getElementById("btnOff");
const myImage = document.getElementById("myImage");

// 2. Event Listener für den "An"-Button
btnOn.addEventListener('click', function() {
    myImage.src = 'light-on.png',
    btnOn.textContent = "Das Licht ist an"
    btnOff.textContent = "Turn off the light"
});

// 3. Event Listener für den "Aus"-Button
btnOff.addEventListener('click', function() {
    myImage.src = 'light-off.png';
    btnOff.textContent = "Das Licht ist aus"
    btnOn.textContent = "Turn on the light"
});
let text2 = document.getElementById("demo2");
let button2 = document.getElementById("changeFont");

button2.onclick = function(){
    text2.style.fontSize = "35px",
    text2.style.color = "red",
    text2.style.fontWeight = "bold"
}

// oder so
// 2. Dem Button einen Event-Listener für den Klick hinzufügen
//button.addEventListener('click', function() {
// 3. Den Style (die Schriftgröße) des Textes ändern
// textElement.style.fontSize = '35px';
//_______________________________________


// hide elements
let text3 = document.getElementById("demo3");
let button3 = document.getElementById("hideText");

button3.onclick = function(){
    text3.style.display = "none"
}

let text4 = document.getElementById("demo3"); // muss demo3 (show me text)
let button4 = document.getElementById("showText");

button4.onclick = function(){
    text4.style.display = "block"

}
