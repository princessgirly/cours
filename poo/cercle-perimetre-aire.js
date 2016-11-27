var r = Number(prompt("Entrez le rayon d'un cercle :"));

var cercle = {};
    cercle.pi = 3.14159265;
    cercle.r = r;

    cercle.perimetre = function () {
      var p = 2 * cercle.pi * cercle.r;
      return p;
    };
    cercle.aire = function () {
      var a = cercle.pi * cercle.r * cercle.r;
      return a;
    };

console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());



La réponse : 
Son périmètre vaut 22.619467080000003
Son aire vaut 40.71504074400001


/*
Autre solution  : Exercice : objet cercle
*/

var r = Number(prompt("Entrez le rayon d'un cercle :"));

var cercle = {
    rayon: r,

    // Renvoie le périmètre du cercle
    perimetre: function () {
        return 2 * this.rayon * Math.PI;
    },
    // Renvoie l'aire du cercle
    aire: function () {
        return this.rayon * this.rayon * Math.PI;
        // Autre possibilité
        //return Math.pow(this.rayon, 2) * Math.PI;
    }
};

console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());
