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
