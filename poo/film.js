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
