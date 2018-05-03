// les fonctions nommées peuvent être appelées avant d'être définies (grâce au "function hoisting")

// appel d'une fonction nommée
print("Hello!");

// définition d'une fonction nommée
function print(value) {
    console.log(value);
}

// les fonctions anonymes doivent être définies avant d'être appelées

// définition d'une fonction anonyme et affectation à une variable
var p = function(value) {
    console.log(value);
}

// affectation à une autre variable
var a = p;

// appel d'une fonction anonyme
p("anonymous function call");
a("another anonymous function call");
