console.log("Bienvenue dans ce gestionnaire de contacts");

var Contact = {
    init: function (prenom, nom) {
        this.prenom = prenom;
        this.nom = nom;
    },
    decrire: function () {
	return this;
    }
};

var listeContacts = [];

var contact1 = Object.create(Contact);
contact1.init("Carole", "Lévisse");
listeContacts.push(contact1);

var contact2 = Object.create(Contact);
contact2.init("Mélodie", "Nelsonne");
listeContacts.push(contact2);

var saisie = '';
while (saisie !== "0") {
    console.log("");
    console.log("1 : Lister les contacts");
    console.log("2 : Ajouter un contact");
    console.log("0 : Quitter");
    saisie = prompt("Votre choix:");

    switch (saisie) {
        case "1":
            console.log("Voici la liste de tous vos contacts:");
	    console.table(listeContacts);
            break;
        case "2":
            var saisieNom = prompt("Donner nom:");
            var saisiePrenom = prompt("Donner prénom:");
            var nouveauContact = Object.create(Contact);
            nouveauContact.init(saisiePrenom, saisieNom);
            listeContacts.push(nouveauContact);
            console.log("Le nouveau contact a été ajouté");
            break;
        case "0":
            console.log("Au revoir !");
            break;
        default:
            console.log("Cette action n'est pas valide");
    }
}
