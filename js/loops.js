// tableau
var myNumbers = [42, 2, 3.14, 123, 100];

// parcours d'un tableau avec une boucle de type "for each" (pour chaque)
for (var key in myNumbers) {
    console.log("key " + key + " : " + myNumbers[key]);
}

// parcours d'un tableau avec une boucle de type "for" (pour)
for (var i = 0; i < myNumbers.length; i++) {
    console.log(myNumbers[i]);
}

// exemple de calcul d'une moyenne avec une boucle `for`
var average = 0;

for (var i = 0; i < myNumbers.length; i++) {
    average += myNumbers[i];
}

average /= myNumbers.length;

console.log(average);
