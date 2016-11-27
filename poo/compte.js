/*
Ecrivez un programme compte.js qui crée un objet compte ayant les propriétés suivantes :

Une propriété titulaire valant "Alex".
Une propriété solde valant initialement 0.
Une méthode crediter() ajoutant le montant passé en paramètre au solde du compte.
Une méthode debiter() retirant le montant passé en paramètre du solde du compte.
Une méthode decrire() renvoyant la description du compte.
Utilisez cet objet pour afficher sa description, le créditer puis le débiter de montants saisis successivement par l'utilisateur, puis afficher de nouveau sa description.

Voici le résultat à obtenir pour un crédit de 200 puis un débit de 150.

Titulaire : Alex, solde : 200 euros
compte.js:30 Titulaire : Alex, solde : 50 euros
*/


var saisieplus = Number(prompt("Entrez le montant à créditer :"));
var saisiemoins = Number(prompt("Entrez le montant à débiter :"));

var compte = {};
    compte.titulaire = "Alex";
    compte.solde = 0;

    compte.crediter = function () {
          var credit = this.solde + saisieplus;
          return credit;
    };

    compte.debiter = function () {
          var debit = this.solde - saisiemoins;
          return debit;
    };

    compte.decrire = function () {
          var description = compte.crediter() + compte.debiter();
          return description;
    };
  console.log("Titulaire : " + compte.titulaire + ", solde :" + compte.solde + " euros.");
  console.log("Titulaire : " + compte.titulaire + ", solde :" + compte.decrire() + " euros.");
