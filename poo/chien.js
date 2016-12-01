/*
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
*/
/////////////////////////////////////////////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////////////////////////////////
//Utilisez cet objet dans un programmechenil.js qui ajoute trois chiens dans un tableau, puis affiche des informations sur le chenil et chacun de ses chiens.


var Chien = {
    // initialise le chien
    initChien: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    decrire : function () {
      description = this.nom + " est " + this.race + " mesurant " + this.taille + "cm.";
      return description;
    },
    // Renvoie l'aboiement du chien
    aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    }
};
console.log("Le chenil héberge 3 chiens : ");

var animal1 = Object.create(Chien);
    animal1.initChien("Crokdur", "matin de Nâples", 75);
var animal2 = Object.create(Chien);
    animal2.initChien("Pupuce", "bichon", 22);
var animal3 = Object.create(Chien);
    animal3.initChien("Médor", "labrador", 58);
console.log(animal1.decrire() + ",il aboie : " + animal1.aboyer());
console.log(animal2.decrire() + ",il aboie : " + animal2.aboyer());
console.log(animal3.decrire() + ",il aboie : " + animal3.aboyer());

///////////////////////////////////////////////////////////////////////////////////////
// Autre solutions

/*
Exercice : gestion d'un chenil
*/

var Chien = {
    // initialise le chien
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    // Renvoie l'aboiement du chien
    aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    }
};

var crokdur = Object.create(Chien);
crokdur.init("Crokdur", "mâtin de Naples", 75);
var pupuce = Object.create(Chien);
pupuce.init("Pupuce", "bichon", 22);
var medor = Object.create(Chien);
medor.init("Médor", "labrador", 58);

var chenil = [];
chenil.push(crokdur);
chenil.push(pupuce);
chenil.push(medor);

console.log("Le chenil héberge " + chenil.length + " chien(s) :");
chenil.forEach(function (chien) {
    console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm. " +
        "Il aboie : " + chien.aboyer());
});
