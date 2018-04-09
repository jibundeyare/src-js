// `var` permet de déclarer une variable
// `=` permet d'affecter une valeur à une variable

// chaîne de caractères
var myText = "Lorem ipsum";

// réaffectation d'une nouvelle valeur
myText = "foo bar baz";

// longueur de la chaîne de caractères
console.log(myText.length);

// nombre entier
var myInt = 42;

// nombre à virgule flottant
var myFloat = 3.14;

// valeur booléenne
var myBoolean = true;

// variable déclarée mais non initialisée (`undefined`)
var myVar;

// quand `+` est utilisé avec une chaîne de caractères, il permet de concaténer (coller bout à bout)
console.log("myInt : " + myInt);
console.log("myFloat : " + myFloat);
console.log("myBoolean : " + myBoolean);
console.log("myVar : " + myVar);

// tableau
var myNumbers = [42, 2, 3.14];

// ajout d'élément au tableau
myNumbers.push(123);
myNumbers.push(100);

console.log(myNumbers);
