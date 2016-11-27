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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TODO :Définir un prototype
var Chien = {
        init : function (nom, race, taille) {           //la methode init prend en parametre les valeurs initiales des propriétés
          this.nom = nom;                               //et les définit en distinguant les propriétés préfixées avec le mot-clé this
          this.race = race;                             // des paramètres non préfixés
          this.taille = taille;
        },
    aboyer: function () {
          var aboie = "Grr ! Grr !";
          return aboie;
      },
    decrire: function() {
      var description = this.nom +" est un " + this.race + " mesurant " + this.taille + " cm";
      return description;
    }
};

var crokdur = Object.create(Chien);
crokdur.init("Crokdur", "mâtin de Naples", 75);
console.log(crokdur.nom + " est un " + crokdur.race + " mesurant " + crokdur.taille + " cm");
console.log("Tiens, un chat ! " + crokdur.nom + " aboie : " + crokdur.aboyer());

var pupuce = Object.create(Chien);
pupuce.init("Pupuce", "bichon", 22);
console.log(pupuce.nom + " est un " + pupuce.race + " mesurant " + pupuce.taille + " cm");
console.log("Tiens, un chat ! " + pupuce.nom + " aboie : " + pupuce.aboyer());


// Résultat
Crokdur est un mâtin de Naples mesurant 75 cm
Tiens, un chat ! Crokdur aboie : Grr ! Grr !
Pupuce est un bichon mesurant 22 cm
Tiens, un chat ! Pupuce aboie : Grr ! Grr !
