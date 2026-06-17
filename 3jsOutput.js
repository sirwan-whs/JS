
const demoElement= document.getElementById("demo")

demoElement.innerHTML= "<h2>Hello, World! mit innerHTML</h2>"

const demo2= document.getElementById("demo2")

demo2.innerText= "Hello, World! mit innerText"

const deleteButton = document.getElementById("btnDelete")
deleteButton.addEventListener("click", function(){

    document.write("<h2>nichts währt ewig</h2>")
    document.write("<p> Die Überschrift und der Button existieren nicht mehr.</p>");

});


let bAlert= document.getElementById("alert")

bAlert.addEventListener("click", function(){

    window.alert("Vorsicht!")
});



// Rechnet 5 + 6 und schreibt das Ergebnis
// (11) unsichtbar in die Entwickler-Konsole
console.log(5 + 6);

// Du kannst auch Text in die Konsole
// schreiben, um zu testen, ob dein Skript lädt:
console.log("Hallo! Die JavaScript-Datei wurde erfolgreich geladen.");


let printP= document.getElementById("print")
printP.addEventListener("click", function(){

    window.print()

})

