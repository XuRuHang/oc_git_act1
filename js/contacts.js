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
