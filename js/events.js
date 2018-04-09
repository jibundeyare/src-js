function sayHello() {
    alert('Hello!');
}

sayHello();

var myButton = document.querySelector('#myButton');
myButton.addEventListener('click', sayHello);
