/*
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme


var saisie;
var i = 0;         // nombre de tour de boucle


for (var i = 1; i < 7; i++) {
  while ( saisie !== solution) {
  saisie = Number(prompt("Devinez le nombre compris entre 1 et 100 en 6 tentatives !"));

      if(saisie < solution) {
        prompt("C'est trop petit.")
        console.log(saisie + " est trop petit.");
      } if(saisie > solution) {
        prompt("C'est trop grand.")
        console.log(saisie + " est trop grand.");
      } if(saisie === solution) {
        prompt("C'est gagné.")
        console.log(saisie + " Gagné !");
      }
  break;
  }
}
if((saisie !== solution) && (i >=7) )
prompt("Perdu ! Les 6 coups sont utilisés,la solution était " + solution)
console.log("Perdu ! Les 6 coups sont utilisés,la solution était " + solution);
