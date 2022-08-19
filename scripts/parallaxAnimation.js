// variables de elementos del parallax landscape
let sky = document.getElementById('sky-landscape');

let mountain = document.getElementById('mountain-landscape');

let rotulo = document.getElementById('text');

let forest = document.getElementById('forest-landscape');



window.addEventListener('scroll', function(){

    // modifica elementos parallax del landscape
    let value = window.scrollY;
    mountain.style.top  = value * 0.2 + 'px';
    sky.style.right = value * 0.1 + 'px';
    sky.style.top = value * -0.2 + 'px';
    forest.style.width = 100 + '%';
    text.style.marginRight = value * 2.5 + 'px';
    text.style.marginTop = value * 0.5 + 'px';


    // quita la transparencia y modifica color de navbar cuando se ejecute el scroll 
    // a través de remover y añadir clases
    var element = document.getElementById("header-nav");
    element.classList.remove("bg-transparent");
    element.classList.add("bg-dark");


})