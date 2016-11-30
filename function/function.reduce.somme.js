//Ecrivez un programme somme.js qui déclare le tableau ci-dessous.
//var valeurs = [11, 3, 7, 2, 9, 10]; et qui affiche le total des éléments additionnés

var valeurs = [11, 3, 7, 2, 9, 10];
var total = valeurs.reduce(function(premier, second) {
  return premier + second;
}, 0);
console.log(total);// Affiche 42
