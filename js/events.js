/**
 * ajout d'un comportement à un bouton
 */

// définition d'une fonction qui sera appelée par un event listener
// le paramètre event est transmis par l'event listener
function onClickHandler(event) {
    // la variable event contient des données sur l'évènement
    console.log(event);

    // la variable event.target contient l'élément qui a déclenché l'évènement
    // l'attribut innerText contient le texte d'un élément
    // changement du texte du bouton
    event.target.innerText = 'vous avez cliqué';

    alert('Hello!');
}

// récupération d'un élément via son id
// on utilise un sélécteur CSS pour cibler l'élément souhaité
var myButton = document.querySelector('#myButton');

// variante plus optimisée pour récupérer un élément via son id
// var myButton = document.getElementById('myButton');

console.log(myButton);

// demande d'exécution de la fonction onClickHandler() lorsque myButton déclenche un évènement de type click
myButton.addEventListener('click', onClickHandler);

/**
 * ajout d'un comportement à un champ de saisie (balise input)
 */

function onKeyEventHandler(event) {
    // l'attribut value contient la valeur d'un champ input
    // l'attribut length contient la longueur d'une chaîne de caractères
    loginSize.innerText = event.target.value.length;
}

var login = document.getElementById('login');
var loginSize = document.getElementById('login-size');

login.addEventListener('keydown', onKeyEventHandler);
login.addEventListener('keyup', onKeyEventHandler);

/**
 * ajout d'un comportement à un formulaire
 */

function onSubmitHandler(event) {
    // la méthode preventDefault() empêche le comportement normal (par défaut) de l'élément qui a généré l'évènement
    // en bloquant un évènement de type submit, on empêche le navigateur d'envoyer les données du formulaire
    event.preventDefault();

    // création d'une variable de type Object
    var data = {};

    // ajout de clé alphanumériques et de valeurs associées
    data["firstname"] = firstname.value;
    data["lastname"] = lastname.value;
    // syntaxe alternative qui a le même effet
    // data.firstname = firstname.value;
    // data.lastname = lastname.value;

    console.log(data);
}

var firstname = document.getElementById('firstname');
var lastname = document.getElementById('lastname');
var form = document.getElementById('form');

form.addEventListener('submit', onSubmitHandler);

/**
 * ajout d'un comportement à un autre formulaire
 */

function onSubmitFruitsFormHandler(event) {
    event.preventDefault();

    var data = {};
    // création d'une variable de type Array (tableau)
    var fruits = [];

    // boucle foreach sur une liste d'inputs
    for (var fruitInput of fruitsInputs) {
        // vérification de l'état coché / non coché pour l'input courant
        if (fruitInput.checked) {
            // si l'input est coché, on rajoute la valeur de l'input dans le tableau fruits
            fruits.push(fruitInput.value);
        }
    }

    data.fruits = fruits;
    // syntaxe alternative qui a l même effet
    // data["fruits"] = fruits;

    console.log(data);
}

var fruitsForm = document.getElementById('fruits-form');
var fruitsInputs = document.querySelectorAll('[name="fruits[]"]');

console.log(fruitsInputs);

fruitsForm.addEventListener('submit', onSubmitFruitsFormHandler);

