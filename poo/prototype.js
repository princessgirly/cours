//Création d'un prototype et de 2 personnages donc, nous avons créé un objet nomméPersonnage,
//qui rassemble les propriétés communes à tous les personnages. Les objetsperso1 etperso2 sont créés avec l'objetPersonnage
//comme prototype, et lui délèguent les fonctionnalités communes.
//Par convention, le nom d'un objet jouant le rôle de modèle (ici l'objetPersonnage) commence souvent par une majuscule

var Personnage = {
          // Initialise le personnage
          initPerso: function (nom, sante, force) {        //pour éviter de répêter perso1.nom, perso1.sante...à chaque fois une valeur et sa propriété
              this.nom = nom;                         //On définit par avance toutes les propriétés mais une seule fois et les valeurs plus bas
              this.sante = sante;
              this.force = force;
              this.xp = 0;
          },                                //this.nom représente la propriéténom de l'objet etnom correspond à l'un des paramètres de la méthode

          // Renvoie la description du personnage
          decrire: function () {
              var description = this.nom + " a " + this.sante + " points de vie, " +
                  this.force + " en force et " + this.xp + " points d'expérience";
              return description;
          }
};
var Joueur = Object.create(Personnage);
            Joueur.initJoueur = function (nom, sante, force) {      //On crée l'objet prototype Joueur basé sur l'objet prototype Personnage déjà crée
              this.initPerso(nom, sante, force);                      //on récupère les données déjà déclaré
              this.xp = 0;
        },
            Joueur.decrire = function () {
              var description = this.nom + " a " + this.sante + " points de vie, " +
                  this.force + " en force et " + this.xp + " points d'expérience";
              return description;
};
var Adversaire = Object.create(Personnage);
              Adversaire.initAdversaire = function (nom, sante, force, race, valeur) {
                  this.initPerso(nom, sante, force);
                  this.race = race;
                  this.valeur = valeur;
};


var joueur1 = Object.create(Joueur);
joueur1.initJoueur("Aurora", 150, 25);                 //on initialise les valeurs

var joueur2 = Object.create(Joueur);
joueur2.initJoueur("Glacius", 130, 30);

console.log("Bienvenue dans ce jeu d'aventure ! Voici nos héros : ");
console.log(joueur1.decrire());
console.log(joueur2.decrire());

var monstre = Object.create(Adversaire);
monstre.initAdversaire("Zog Zog", 40, 20, "orc", 10);
console.log("Un affreux monstre arrive : c'est " + monstre.race + " nommé " + monstre.nom);

/* Réponse Bienvenue dans ce jeu d'aventure ! Voici nos héros :
Aurora a 150 points de vie, 25 en force et 0 points d'expérience
Glacius a 130 points de vie, 30 en force et 0 points d'expérience
Un affreux monstre arrive : c'est orcnomméZog Zog

Cours :
Le mécanisme des prototypes permet aux objetsjoueur1,joueur2 etmonstre de bénéficier
des propriétés définies dans les objetsJoueur etAdversaire, qui eux-mêmes profitent de celles de l'objetPersonnage.
*/
