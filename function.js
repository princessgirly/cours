//Complétez le programme carre.js ci-dessous pour que la fonction carre() renvoie le carré d'un nombre passé en paramètre.

// Renvoie le carré d'un nombre
  // TODO : compléter le code de la fonction

function carre(x) {
    var x = x * x;
    return x;
}
console.log(carre(0)); // Doit afficher 0
console.log(carre(2)); // Doit afficher 4
console.log(carre(5)); // Doit afficher 25


////////////   Afficher les carrés de 1 à 10 /////////////////////
var i;

for (var i = 1; i <= 10; i++) {

function carre(x) {
  var x = x * x;                // return x * x         (sans var x = x * x 
  return x;
}
  console.log(carre(i));
  }
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  /////////////////////  Exercice   ///////////////////////////////////////////////////////////
//Complétez le programme bonjour.js ci-dessous pour qu'il fasse saisir le prénom et le nom de
//l'utilisateur dans deux variables, puis affiche le résultat de l'appel à la fonction direBonjour().

// Renvoie un message de bienvenue
var p = prompt("Bonjour, veuillez entrer votre prénom : ");
var n = prompt("Votre nom : ");

function direBonjour(prenom, nom) {
    var message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}
console.log(direBonjour(p, n));

// TODO : faire saisir le prénom et le nom de l'utilisateur
// TODO : appeler direBonjour() avec les bons arguments et afficher son résultat



/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function direBonjour(prenom) {
    var message = "Bonjour, " + prenom + " !";
    return message;
}

console.log(direBonjour("Baptiste"));
console.log(direBonjour("Sophie"));

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//Complétez le programme minimum.js ci-dessous pour que la fonction min() renvoie le plus petit des deux nombres passés en paramètres.
/*
// TODO : écrire la fonction min()

console.log(min(4.5, 5)); // Doit afficher 4.5
console.log(min(19, 9)); // Doit afficher 9
console.log(min(1, 1)); // Doit afficher 1
*/


console.log(Math.min(4.5, 5)); // Doit afficher 4.5
console.log(Math.min(19, 9)); // Doit afficher 9
console.log(Math.min(1, 1)); // Doit afficher 1

  
  
  
