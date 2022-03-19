let rightPressed = false;
let leftPressed = false;

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

function keyDownHandler(e) {
    if (e.key == 'Right' || e.key == 'ArrowRight') {
        rightPressed = true;
    }
    else if (e.key == 'Left' || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key == 'Right' || e.key == 'ArrowRight') {
        rightPressed = false;
    }
    else if (e.key == 'Left' || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function movePaddle() {
    if (rightPressed) {
        paddle.x += 7;
    } else if (leftPressed) {
        paddle.x -= 7;
    }
}

function play() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw();
    paddle.draw();
    movePaddle();

    ball.x += ball.dx;
    ball.y += ball.dy;

    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
        ball.dx *= -1;

    }

    if (ball.y + ball.radius > canvas.width || ball.y - ball.radius < 0) {
        ball.dy *= -1;

    }

    requestAnimationFrame(play);
}
play();
