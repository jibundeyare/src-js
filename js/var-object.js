// initialisation d'une variable de type Object
var myObject = new Object();
// variante syntaxique
var myObject2 = {};

console.log(myObject);
console.log(myObject2);

// affectation de valeurs de type simple
myObject.myInt = 42;
myObject.myBool = true;

console.log(myObject);

// affectation de valeurs de type Object
myObject.myInternalObject = {};
myObject.myInternalObject.myFloat = 3.14;
myObject.myInternalObject.myString = "Hello!";

console.log(myObject);

var user = {};
user.nom = "pop";
user.prenom = "toto";
user.adresse = "123, rue du ...";
user.localite = "ville...";

var user2 = {};
user2.nom = "pop";
user2.prenom = "titi";
user2.adresse = "42, autre rue";
user2.localite = "autre ville...";

// création d'une liste contenant les 2 utilisateurs
var users = [
    user,
    user2
];

// parcours d'une liste contenant des variables de type Object
for (var myUser of users) {
    console.log(myUser.nom + " " + myUser.prenom);
}

// accès direct aux données d'une variable de type Object
console.log(users[1].nom + " " + users[1].prenom);

// initialisation d'une variable de type Object avec des données
var voiture = {
    marque: "...",
    couleur: "...",
    tarif: "999",
    options: [
        "...",
        "...",
        "..."
    ]
};

// accès à la variable "marque" en mode attribut
console.log(voiture.marque);
// accès à la variable "marque" en mode clé alphanumérique
console.log(voiture["marque"]);

// sérialisation d'une variable de type Object
var voitureSerialized = JSON.stringify(voiture);

console.log(voitureSerialized);

// copié-collé de données renvoyées par l'API https://yesno.wtf/api
var yesno = {"answer":"yes","forced":false,"image":"https://yesno.wtf/assets/yes/5-64c2804cc48057b94fd0b3eaf323d92c.gif"};

console.log(yesno);
