const p1 = {
    score: 0,
    button: document.querySelector('#player1'),
    display: document.querySelector('#player1Score')
};

const p2 = {
    score: 0,
    button: document.querySelector('#player2'),
    display: document.querySelector('#player2Score')
};

const reset = document.querySelector('#reset')
const targetSelect = document.querySelector('#options');

let winningScore = 2;
let isGameOver = false;


function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        player.display.innerText = player.score;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.style.color = 'green';
            opponent.display.style.color = 'red';
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
}


p1.button.addEventListener('click', function() {
    updateScore(p1, p2)
})

p2.button.addEventListener('click', function() {
    updateScore(p2, p1)
})

function resetScore() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.button.disabled = false;
        p.display.innerText = 0;
        p.score = 0;
        p.display.style.color = 'black';
    }
    
}

targetSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value)
    resetScore()
})

reset.addEventListener('click', resetScore)

