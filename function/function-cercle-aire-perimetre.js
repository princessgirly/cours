/*
Ecrivez un programme cercle.js qui contient deux fonctions perimetre() et aire() qui calculent respectivement le périmètre et l'aire
d'un cercle à partir de son rayon. Testez vos fonctions avec un rayon saisi par l'utilisateur.
La valeur du nombre π (Pi) peut s'obtenir en JavaScript en écrivant Math.PI.
    Périmétre cercle : 2*pi*r         Périmètre cercle  : pi*r*r
*/
var r = Number(prompt("Entrez le rayon en cm"));
var a = 1;

var pi = Math.PI;

function perimetre(cercle) {
   cercle = "Le périmètre est de "+ 2 * pi * r;
   return cercle;
}
function aire(cercle) {
   cercle = "L'aire est de " + pi * r * r;
   return cercle;
}
console.log(perimetre(r));
console.log(aire(r));





// Autre solution :

/*
Exercice : périmètre et aire d'un cercle
*/

// Renvoie le périmètre d'un cercle
function perimetre(rayon) {
    return 2 * rayon * Math.PI;
}

// Renvoie l'aire d'un cercle
function aire(rayon) {
    return Math.pow(rayon, 2) * Math.PI;
}

var r = Number(prompt("Entrez le rayon d'un cercle :"));
console.log("Son périmètre vaut " + perimetre(r));
console.log("Son aire vaut " + aire(r));
