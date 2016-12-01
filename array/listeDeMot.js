//Ecrivez un programmemots.js qui fait saisir à l'utilisateur des mots
//jusqu'à ce qu'il saisisse "stop". Le programme affiche alors la liste des mots saisis.

var mot = [];
while (mot !== "stop") {
  mot = prompt("Entrez un mot, pour arrêter écrivez stop");
  console.log(mot);
}


////////////////////////////////////////////////////
//Autre solutions


var mots = [];

var mot = "";
while (mot !== "stop") {
    mot = prompt("Entrez un mot ou tapez stop pour arrêter :");
    if (mot !== "stop") {
        mots.push(mot);
    }
}

mots.forEach(function (mot) {
    console.log(mot);
});
