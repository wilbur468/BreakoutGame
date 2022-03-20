
const scoreDisplay = document.querySelector(".high-score");
let highScore = parseInt(localStorage.getItem("highScore"));
const reset = document.querySelector(".reset");

if (isNaN(highScore)) {
    highScore = 0;
}

scoreDisplay.innerHTML = `High Score: ${highScore}`;
reset.addEventListener('click', () => {
    localStorage.setItem("highScore", "0");
    score = 0;
    scoreDisplay.innerHTML = 'High Score: 0'
    drawBricks();
});

function resetScore() {

    if (ball.y + ball.radius > canvas.height) {
        console.log("Entering");
        if (score > parseInt(localStorage.getItem("highScore"))) {
            localStorage.setItem("highScore", score.toString());
            scoreDisplay.innerHTML = `High Score: ${score}`
        }

        score = 0;
        generateBricks();
        ball.dx = speed;
        ball.dy = -speed + 1;
    }
}


