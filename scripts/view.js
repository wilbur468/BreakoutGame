const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

canvas.height = 500;
canvas.width = 500;

let brickRowCount = 3;
let brickColumnCount = 5;
let brickWidth = 70;
let brickHeight = 20;
let brickPadding = 20;
let brickOffsetTop = 30;
let brickOffsetLeft = 35;

let speed = 3;

let ball = {
    x: canvas.width / 2,
    y: canvas.height - 50,
    dx: speed,
    dy: -speed + 1,  // direction in y-axis. -ve value will go up. 
    radius: 7,
    draw: function () {
        ctx.beginPath();
        ctx.fillStyle = '#A020F0';
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true); //Math.pi*2 gives full arc
        ctx.closePath();
        ctx.fill();
    }
};

let paddle = {
    height: 10,
    width: 76,
    x: canvas.width / 2 - 76 / 2,
    draw: function () {
        ctx.beginPath();
        ctx.rect(this.x, canvas.height - this.height, this.width, this.height);
        ctx.fillStyle = '#A020F0';
        ctx.fill();
    }
};



let bricks = [];
function generateBricks() {
    for (let c = 0; c < brickColumnCount; c++) {
        bricks[c] = [];
        for (let r = 0; r < brickRowCount; r++) {
            bricks[c][r] = { x: 0, y: 0, status: 1 } // if status is 1, brick is going to appear. If there is a hit, the status changes to 0.
        }
    }
}

function drawBricks() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            if (bricks[c][r].status === 1) {
                let brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
                let brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = '#A020F0';
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}




let score = 0;

function drawScore() {
    ctx.font = 'bold 17px serif';
    ctx.fillStyle = '#000000'
    ctx.fillText("Score: " + score, 8, 20);
}
function collisionDetection() {

    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            let b = bricks[c][r];
            if (b.status == 1) {
                if (
                    ball.x >= b.x && ball.x <= b.x + brickWidth
                    && ball.y >= b.y
                    && ball.y <= b.y + brickHeight) {

                    ball.dy *= -1;
                    b.status = 0;
                    score++
                }
            }
        }
    }

}










