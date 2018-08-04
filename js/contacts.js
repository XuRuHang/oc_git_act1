console.log("Bienvenue dans ce gestionnaire de contacts");

var Contact = {
    init: function (prenom, nom) {
        this.prenom = prenom;
        this.nom = nom;
    },
    decrire: function () {
        return "Nom: " + this.nom + ", prénom: " + this.prenom;
    }
};

var listeContacts = [];

var contact1 = Object.create(Contact);
contact1.init("Carole", "Lévisse");
listeContacts.push(contact1);

var contact2 = Object.create(Contact);
contact2.init("Mélodie", "Nelsonne");
listeContacts.push(contact2);
