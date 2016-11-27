// TODO : ajoutez ici la définition de l'objet chien

var chien = {};
  chien.nom = "Crockdur";
  chien.race = "mâtin de Nâples";
  chien.taille = 75;

  chien.aboyer = function () {
    var aboie = "Grr ! Grr !";
    return aboie;
};

console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm.");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());



