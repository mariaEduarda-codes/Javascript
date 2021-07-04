const quotes = [
    {quote: '“Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.”',
        author:'Albert Einstein'},
    {quote: '“Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.”',
        author: 'Bernard M. Baruch'},
    {quote: '“You\'ve gotta dance like there\'s nobody watching, love like you\'ll never be hurt, sing like there\'s nobody listening, and live like it\'s heaven on earth.”',
        author: 'William W. Purkey'},
    {quote: '"You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams."',
        author: 'Dr. Seuss'},
    {quote: '"A friend is someone who knows all about you and still loves you."',
        author: 'Elbert Hubbard'},
    {quote: '"You only live once, but if you do it right, once is enough."',
        author: 'Mae West'},
    {quote: '"Be the change that you wish to see in the world."',
        author: 'Mahatma Gandhi'},
    {quote: '"If you tell the truth, you don\'t have to remember anything."',
        author: 'Mark Twain'},
    {quote: '"Always forgive your enemies; nothing annoys them so much."',
        author: 'Oscar Wilde'}
];

let paragrafo = document.querySelector('.quote');
let autor = document.querySelector('.info');
let adicionarNovoQuote = document.querySelector('#addQuote');
let gerarNovoQuote = document.querySelector('#generateQuote');

adicionarNovoQuote.addEventListener('click', function(){
    let novoQuote = {
        quote: '',
        author: ''
    }
    novoQuote.quote = prompt('Digite a citação: ');
    novoQuote.author = prompt('Digite o autor: ');
    quotes.push(novoQuote);
});

gerarNovoQuote.addEventListener('click', function (){
    let indice = Math.floor(Math.random() * 10);
    autor.innerHTML = quotes[indice].author;
    paragrafo.innerHTML = quotes[indice].quote;
});
