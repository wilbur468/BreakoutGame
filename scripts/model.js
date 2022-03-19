

function play() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw();
    paddle.draw();
    movePaddle();
    bounce();
    drawBricks();
    collisionDetection();


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

function bounce() {
    if (ball.x >= paddle.x &&
        ball.x <= paddle.x + paddle.width &&
        ball.y + ball.radius > canvas.height - paddle.height) {
        ball.dy *= -1;
        console.log("hit");
    }
}



generateBricks();
play();
