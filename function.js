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

  
//Autre solution 

/* 
Exercice : fonction minimum
*/

// Renvoie le minimum de 2 nombres
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(min(4.5, 5)); // Doit afficher 4.5
console.log(min(19, 9)); // Doit afficher 19
console.log(min(1, 1)); // Doit afficher 1
  
/////////////////////  Exercice   ///////////////////////////////////////////////////////////
//Complétez le programme bonjour.js ci-dessous pour qu'il fasse saisir le prénom et le nom de
//l'utilisateur dans deux variables, puis affiche le résultat de l'appel à la fonction direBonjour().

// Renvoie un message de bienvenue
var prenom = prompt("Bonjour, veuillez entrer votre prénom : ");
var nom = prompt("Votre nom : ");

function direBonjour(prenom, nom) {
    var message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}
console.log(direBonjour(prenom, nom));

// TODO : faire saisir le prénom et le nom de l'utilisateur
// TODO : appeler direBonjour() avec les bons arguments et afficher son résultat



/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function direBonjour(prenom) {
    var message = "Bonjour, " + prenom + " !";
    return message;
}

console.log(direBonjour("Baptiste"));
console.log(direBonjour("Sophie"));


/////////////////////////////////////////////////////////////
var motInitial = "Bora-Bora";
var motEnMinuscules = motInitial.toLowerCase();
console.log(motEnMinuscules); // Affiche "bora-bora"
var motEnMajuscules = motInitial.toUpperCase();
console.log(motEnMajuscules); // Affiche "BORA-BORA"

/////////////////////////////////////////////////////////////
//Accéder à un caractère à partir de son indice

var sport = "Tennis-ballon"; // 13 caractères
console.log(sport.charAt(0)); // Affiche "T"
console.log(sport[0]); // Affiche "T"
console.log(sport.charAt(6)); // Affiche "-"
console.log(sport[6]); // Affiche "-"


/////////////////////////////////////////////////////////////
//Parcourir une chaîne caractère par caractère
//solution 1
var prenom = "Odile"; // 5 caractères
console.log(prenom[0]);
console.log(prenom[1]);
console.log(prenom[2]);
console.log(prenom[3]);
console.log(prenom[4]);
/////////////////////////////////////////////////////////////
//solution 2 : faire une boucle
var prenom = "Odile";
for (var i = 0; i < prenom.length; i++) {
    console.log(prenom[i]);
}

//la réponse pour les deux :
O
d
i
l
e
/////////////////////////////////////////////////////////////
//Crée un tableau avec des fruits et affiche le nb de fruit du tableau
var fruits = [];
fruits.push("banane", "pomme", "pêche");

console.log(fruits.length); // 3

/////////////////////////////////////////////////////////////
