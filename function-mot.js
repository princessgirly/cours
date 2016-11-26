.length - .toLowerCase - .tuUpperCase - 
Affiche la longueur mot - Transforme en minuscule - Transforme en majuscule - Renvoie le mot à l'envers - Encrypter un mot  

// Faites saisir un mot et affichez le nb de caratère, le mot en minuscule, en majuscule,
//le nb de voyelle et de consonne,
var mot = prompt("Veuillez saisir un mot : ");

function compterNbVoyelles(mot) {
  var nbVoyelle = 0;                            //on crée le compteur
  for (var i=0; i < mot.length; i++) {          //on crée la boucle
      var voyelle = mot[i].toLowerCase();       //on crée le tableau sur le mot, i indice les lettres du mot
      if((voyelle === "a") || (voyelle === "e") || (voyelle === "i") || (voyelle === "o") || (voyelle === "u")) {   //les lettres seront = aux voyelles
      nbVoyelle++;                              // on incrémente le compteur et
  }
} return nbVoyelle;                             // il enregistre le résultat dans la var nbVoyelle
}

function inverser(mot) {
  var envers = "";
  for (var i = 0; i < mot.length; i++) {
  envers = mot[i] + envers;       // Solution 1 : ajouter chaque lettre au début du mot inversé
  } return envers;
}
// Solution 2 : parcourir le mot de la fin vers le début
/*for (var i = mot.length - 1; i >= 0; i--) {
    motInverse = motInverse + mot[i];
}*/

//Encrypte le mot saise en transformant quelques lettres
// Renvoie un mot converti en "leet speak"
function convertirEnLeetSpeek(mot) {
    var motLeet = "";
    for (var i = 0; i < mot.length; i++) {
        motLeet = motLeet + trouverLettreLeet(mot[i]);
    }
    return motLeet;
}
// Renvoie l'équivalent "leet speak" d'une lettre
function trouverLettreLeet(lettre) {
    // Par défaut, la lettre ne change pas
    var lettreLeet = lettre;
    switch (lettre.toLowerCase()) {
    case "a":
        lettreLeet = "4";
        break;
    case "b":
        lettreLeet = "8";
        break;
    case "e":
        lettreLeet = "3";
        break;
    case "l":
        lettreLeet = "1";
        break;
    case "o":
        lettreLeet = "0";
        break;
    case "s":
        lettreLeet = "5";
        break;
    case "t":
        lettreLeet = "7";
        break;
        // ...
    }
    return lettreLeet;
}

var nbVoyelle = compterNbVoyelles(mot);                 // déclarer la var or de la f° sinon elle n'éxiste pas en dehors de la fonction
var envers = inverser(mot);
var motLeetSpeak = convertirEnLeetSpeek(mot);

console.log("Votre mot contient " + mot.length + " caractères.");
console.log("Il s'écrit en minuscule " + mot.toLowerCase());
console.log("Il s'écrit en majuscule " + mot.toUpperCase());
console.log("Le nombre de voyelle est de "+ nbVoyelle + " et le nombre de consonne est de " + (mot.length - nbVoyelle));
console.log("Retourne le mot à l'envers : " + envers);
if(mot != envers) {
  console.log("Ce n'est pas un palindrome.");
} else console.log("C'est un palindrome.");
console.log("Il s'écrit en leet speak " + motLeetSpeak);

// saisie mot = escaliers
//Votre mot contient 9 caractères.
//Il s'écrit en minuscule escaliers
//Il s'écrit en minuscule escaliers
//Le nombre de voyelle est de 4 et le nombre de consonne(s) est de 5
//Retourne le mot à l'envers
//Ce n'est pas un palindrome.
//Encrypte le mot
