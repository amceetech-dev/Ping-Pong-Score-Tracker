const p1 = {
    score: 0,
    btn: document.querySelector(".btn1"),
    display: document.querySelector('#p1Score')
}
const p2 = {
    score: 0,
    btn: document.querySelector(".btn2"),
    display: document.querySelector('#p2Score')
}

const reset = document.querySelector(".btn3");
const winingScoreSelect = document.querySelector('#score_select');
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.btn.disabled = true;
            opponent.btn.disabled = true;

        }
        player.display.textContent = player.score;
    }

}
p1.btn.addEventListener('click', function () {
    updateScores(p1, p2)
})
p2.btn.addEventListener('click', function () {
    updateScores(p2, p1)
})

winingScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reseting();
})



reset.addEventListener('click', reseting)

function reseting() {

    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.display.textContent = p.score;
        p.btn.disabled = false;
        isGameOver = false;
    }

}