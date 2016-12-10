// Créer et appeler une fonction

function ourReusableFunction() {
  console.log("Heyya, World");
}
 
ourReusableFunction();

function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Une variable globale est défini à l'extérieur avec var
// Une variable défini dans une function peut na pas avoir le "var" 
//sont définies en dehors d'un bloc fonctionnel ont globale portée. Cela signifie, ils peuvent être vus partout dans votre code JavaScript.
//Les variables qui sont utilisées sans le varmot - clé sont automatiquement créés dans le globalchamp d' application.

var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// Résultat     myGlobal = 10 oopsGlobal = 5;

