// Den Button anhand seiner ID im HTML-Dokument suchen
let button = document.getElementById("myButton");

// Einen Event Listener hinzufügen, der auf einen "click" reagiert
//button.addEventListener("click", function() {
// Den Text des Elements mit der ID "demo" ändern
// document.getElementById("demo").innerHTML = "Hello JavaScript! (mit addEvenListener";
//});

button.onclick = function() {
    document.getElementById("demo").innerHTML = "Hello JavaScript! (mit .onclick)";
};

const btnOn = document.getElementById("btnOn");
const btnOff = document.getElementById("btnOff");
const myImage = document.getElementById("myImage");

// 2. Event Listener für den "An"-Button
btnOn.addEventListener('click', function() {
    myImage.src = 'light-on.png',
    btnOn.textContent = "Lücke im Leben"
    btnOff.textContent = "Turn off the light"
});

// 3. Event Listener für den "Aus"-Button
btnOff.addEventListener('click', function() {
    myImage.src = 'light-off.png';
    btnOff.textContent = "andere Lücke im Leben"
    btnOn.textContent = "Turn on the light"
});

