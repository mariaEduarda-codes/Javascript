let player, winner;
let infoPlayerTurn = document.getElementById('selected-player');
let infoWinner = document.getElementById('winner');
let restartButton = document.querySelector('.restart');
restartButton.addEventListener('click', function (){
    window.location.reload();
});

switchPlayer('X');

function chooseSquare(id){
    let square = document.getElementById(id);
    if (square.innerHTML !== ''){
        return;
    }
    square.innerHTML = player;

    if(player === 'X'){
        square.style.color = '#a50000';
        player = 'O';
    } else {
        square.style.color = '#000';
        player = 'X';
    }

    switchPlayer(player);
    checksWinner();
}

function switchPlayer(value){
    player = value;
    infoPlayerTurn.innerHTML = `It's player ${player}'s turn`;
}

function checksWinner(){
    let square1 = document.getElementById('1');
    let square2 = document.getElementById('2');
    let square3 = document.getElementById('3');
    let square4 = document.getElementById('4');
    let square5 = document.getElementById('5');
    let square6 = document.getElementById('6');
    let square7 = document.getElementById('7');
    let square8 = document.getElementById('8');
    let square9 = document.getElementById('9');

    if (checksSequence(square1, square2, square3)){
        changeSquareColor(square1, square2, square3);
        changeWinner(square1);
    } else if (checksSequence(square4, square5, square6)){
        changeSquareColor(square4, square5, square6);
        changeWinner(square4);
    } else if (checksSequence(square7, square8, square9)){
        changeSquareColor(square7, square8, square9);
        changeWinner(square7);
    } else if (checksSequence(square1, square4, square7)){
        changeSquareColor(square1, square4, square7);
        changeWinner(square4);
    } else if (checksSequence(square2, square5, square8)){
        changeSquareColor(square2, square5, square8);
        changeWinner(square5);
    } else if (checksSequence(square3, square6, square9)){
        changeSquareColor(square3, square6, square9);
        changeWinner(square6);
    } else if (checksSequence(square1, square5, square9)){
        changeSquareColor(square1, square5, square9);
        changeWinner(square5);
    } else if (checksSequence(square3, square5, square7)){
        changeSquareColor(square3, square5, square7);
        changeWinner(square5);
    }
}

function changeWinner(square){
    winner = square.innerHTML;
    infoWinner.innerHTML = `Player ${winner} is the winner!`;
    setTimeout(() => alert(`Player ${winner} has won!`), 200);
    setTimeout(() => window.location.reload(), 300);
}

function changeSquareColor(sq1, sq2, sq3){
    sq1.style.backgroundColor = '#0f77e5';
    sq2.style.backgroundColor = '#0f77e5';
    sq3.style.backgroundColor = '#0f77e5';
}

function checksSequence(sq1, sq2, sq3){
    let areEqual = false;

    if (sq1.innerHTML !== '' && sq1.innerHTML === sq2.innerHTML && sq2.innerHTML === sq3.innerHTML){
        areEqual = true;
    }

    return areEqual;
}

// else {
//     setTimeout(() => alert('Cats Game!'), 200);
//     setTimeout(() => window.location.reload(), 500);
// }