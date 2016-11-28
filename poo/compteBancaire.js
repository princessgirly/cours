//Par rapport à un compte bancaire, un compte épargne a la particularité de posséder un taux d'intérêt
//(exemple : 0,05 = 5%). Ce taux est utilisé pour calculer le montant des intérêts, qui est ensuite ajouté au solde du compte.
// TODO : ajoutez ici la définition des objets nécessaires
var CompteBancaire = {
  initCB : function (nom, solde) {
    this.nom = nom;
    this.solde = solde;
  },
    decrire : function () {
      var description = "Titulaire : " + this.nom + " solde " + this.solde + ".";
      return description;
    },
    crediter: function (montant) {              // Crédite le compte d'un certain montant
      this.solde = this.solde + montant;
    },
    debiter: function (montant) {
         this.solde = this.solde - montant;
    }
};

var CompteEpargne = Object.create(CompteBancaire);
// Initialise le compte épargne
CompteEpargne.initCE = function (titulaire, solde, tauxInteret) {
    this.initCB(titulaire, solde);
    this.tauxInteret = tauxInteret;
};


CompteEpargne.ajouterInterets = function () {         // Calcule et ajoute les intérêts au solde cu compte
    var interets = this.solde * this.tauxInteret;
    this.solde += interets;
}


var compte1 = Object.create(CompteBancaire);
compte1.initCB("Alex", 100);
var compte2 = Object.create(CompteEpargne);
compte2.initCE("Marco", 50, 0.05);

console.log("Voici l'état initial des comptes :");
console.log(compte1.decrire());
console.log(compte2.decrire());

var montant = Number(prompt("Entrez le montant à transférer entre les comptes :"));
compte1.debiter(montant);
compte2.crediter(montant);

// Calcule et ajoute les intérêts au solde du compte
compte2.ajouterInterets();

console.log("Voici l'état final des comptes après transfert et calcul des intérêts :");
console.log(compte1.decrire());
console.log(compte2.decrire());



/*  Résultat
Voici l'état initial des comptes :
Titulaire : Alex, solde : 100 euros
Titulaire : Marco, solde : 50 euros
Voici l'état final des comptes après transfert et calcul des intérêts :
Titulaire : Alex, solde : 50 euros
Titulaire : Marco, solde : 105 euros
*/
