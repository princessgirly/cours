/*
Activité : gestion des contacts
*/

// TODO : complétez le programme

console.log("Bienvenue dans le gestionnaire des contacts ! \n 1 : Lister les contacts \n 2 : Ajouter un contact \n 0 : Quitter");

var Contact = {                                           //création du prototype contac
    initContact: function(nom, prenom) {                  //initialisation
        this.nom = nom;
        this.prenom = prenom;
    },
    decrireContact: function() {
        var description = "Nom : " + this.nom + ", prénom : " + this.prenom;
        return description;
    }
}

var contact1 = Object.create(Contact);
contact1.initContact("Lévisse", "Carole");
var contact2 = Object.create(Contact);
contact2.initContact("Nelsonne", "Mélodie");
var contacts = [contact1, contact2];                //mes contacts sous forme de tableau

var nom = '';
var prenom = '';
var i;

while (saisieOption !== 0) {
    var saisieOption = Number(prompt("Choisissez une option : "));


        // Option:  1=Affiche la liste des contacts
        if (saisieOption === 1) {
            console.log('\nVoici la liste de tous vos contacts :');
            contacts.forEach(function(contact) {
                    console.log(contact.decrireContact());
                });
                 console.log('\n'); // Saut de ligne
                 console.log("\n 1 : Lister les contacts \n 2 : Ajouter un contact \n 0 : Quitter");
            }
                  // Option:  2=Crée un nouveau contact et ajoute le dans la liste
            else if (saisieOption === 2) {
                var nom = prompt("Entrez le nom du contact : ");
                var prenom = prompt("Entrez le prénom du contact : ");

                var contact = Object.create(Contact); // Création du contact par prototypage
                contact.initContact(nom, prenom); // Initialisation du contact avec les valeurs saisies

                var afficheContact = contacts.length;   //Affiche la liste initiale des contacts
                contacts.push(contact);
                var listContact = contacts.length;    // Affiche la liste après ajout du ou des nx contacts

                if (listContact > afficheContact) {
                    console.log('\nLe nouveau contact a été ajouté.\n');
                } else {
                    console.log("Choisissez une option : ");
                }
                console.log("\n 1 : Lister les contacts \n 2 : Ajouter un contact \n 0 : Quitter");

            }
        }


console.log("\n Au revoir !");
