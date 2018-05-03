function onClickHandler(event) {
    // la variable event contient des données sur l'évènement
    console.log(event);

    // la variable event.target contient l'élément qui a déclenché l'évènement
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

// changement du texte du bouton
myButton.innerText = 'clique moi';

// demande d'exécution de la fonction onClickHandler() lorsque myButton déclenche un évènement de type click
myButton.addEventListener('click', onClickHandler);
