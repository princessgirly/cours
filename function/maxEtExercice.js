//Affiche l'élément max
var valeurs = [11, 3, 7, 2, 9, 10];
console.log("Le maximum des éléments vaut " + Math.max(11, 3, 7, 2, 9, 10));

// 11

///////////////////////////////////////////////////////////////////////
//Autre methode

var valeurs = [11, 3, 7, 2, 9, 10];

var max = valeurs[0];
// L'indice commence à 1 puisque le maximum est initialisé avec la 1ère valeur du tableau
for (var i = 1; i < valeurs.length; i++) {
    if (valeurs[i] > max) {
        max = valeurs[i];
    }
}
console.log("Le maximum des éléments vaut " + max);

///////////////////////////////////////////////////////////////////////

function soustraction(nombre1, nombre2) {
   return nombre2 - nombre1;
}
console.log(soustraction(5, 7));

// 2

///////////////////////////////////////////////////////////////////////

var chaine = "xoxxooxoxxxoooo";
var x = 0;
var o = 0;
for (var i = 0; i < chaine.length; i++) {
    if (chaine[i] === "x") {
        x++;
    } else if (chaine[i] === "o") {
        o++;
    }
}
if (x !== o) {
    console.log("Faux");
} else {
    console.log("Vrai");
}

//Faux

///////////////////////////////////////////////////////////////////////

var etudiant = {
    nom: "Michel",
    prenom: "Joseph"
};
console.log(etudiant.prenom + etudiant.nom);

//affiche JosephMichel

///////////////////////////////////////////////////////////////////////

var a = {
    prop1: "toto"
};
var b = Object.create(a);
b.prop2 = "titi";
var c = Object.create(b);
c.prop3 = "tutu";
console.log(c.prop1);

// toto

///////////////////////////////////////////////////////////////////////

var valeurs = [8, 9, 24, 35, 40, 54];
console.log(valeurs[1] + valeurs[5]);

//63

//////////////////////////////////////////////////////////////////////
//Afficher la liste des films

var Films = {
  init : function (titre, annee, auteur) {
  this.titre = titre;
  this.annee = annee;
  this.auteur = auteur;
},
  decrire : function () {
    var description = this.titre + "( " + this.annee +", " + this.auteur + " )";
    return description;
  }
};
var film1 = Object.create(Films);
    film1.init("Le loup de Wall Street", 2013, "Martin Scorsese");
var film2 = Object.create(Films);
    film2.init("Vice-Versa", 2015, "Pete Docter")
var film3 = Object.create(Films);
    film3.init("Vice-Versa", 2013, "Philippe Lacheau et Nicolas Benamou")

console.log(film1.decrire());
console.log(film2.decrire());
console.log(film3.decrire());

//résultat :
Le loup de Wall Street ( 2013, Martin Scorsese )
Vice-Versa ( 2015, Pete Docter )
Vice-Versa ( 2013, Philippe Lacheau et Nicolas Benamou )
