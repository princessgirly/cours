var perso = {};                                     //création personnage
    perso.nom = "Aurora";
    perso.sante = 150;
    perso.force = 25;
    perso.xp = 0;                                   //experience

    perso.decrire = function() {
          var description = this.nom + " a " + this.sante + " points de vie, " + this.force + " en force et "
                            + this.xp + " expérience.";
          return description;
    };

console.log(perso.decrire());
      perso.sante = perso.sante - 20;               // Aurora est blessée par une flèche
      perso.force = perso.force + 10;               // Aurora trouve un bracelet de force
      perso.xp = perso.xp + 15;                     // Aurora apprend une nouvelle compétence
console.log(perso.decrire());



    /*
    var perso = {
        nom: "Aurora",
        sante: 150,
        force: 25,

        decrire: function () {                                      // Renvoie la description du personnage
            var description = this.nom + " a " + this.sante + " points de vie et " +
                this.force + " en force";
            return description;
        }
    };
    console.log(perso.decrire());
    perso.sante = perso.sante - 20;                         // Aurora est blessée par une flèche
    perso.force = perso.force + 10;                          // Aurora trouve un bracelet de force
    console.log(perso.decrire());

    /////////////////////////////////////////////////////////////////////////////////////////////////////
    // Autre méthode

    var perso = {}; // Création d'un objet sans aucune propriété
    perso.nom = "Aurora";
    perso.sante = 150;
    perso.force = 25;
    // Renvoie la description du personnage
    perso.decrire = function () {
        var description = this.nom + " a " + this.sante + " points de vie et " +
            this.force + " en force";
        return description;
    };
    console.log(perso.decrire()); 
     */
