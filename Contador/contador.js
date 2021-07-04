const decreaseButton = document.querySelector('#lower');
const increaseButton = document.querySelector('#add');
const counter = document.querySelector('#counter');

let numeroAtual = 0;
counter.innerText = numeroAtual;

decreaseButton.addEventListener('click', function (){
    numeroAtual -= 1;
    counter.innerText = numeroAtual;
});
increaseButton.addEventListener('click', function (){
    numeroAtual += 1;
    counter.innerText = numeroAtual;
});
