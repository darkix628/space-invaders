// Lógica del juego Space Invaders

// Obtiene el canvas y su contexto
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Define las variables del juego
let playerX = canvas.width / 2;
const playerWidth = 50;
const playerHeight = 10;
const playerSpeed = 5;

// Dibuja la nave del jugador
function drawPlayer() {
    ctx.beginPath();
    ctx.rect(playerX - playerWidth / 2, canvas.height - playerHeight, playerWidth, playerHeight);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}

// Mueve la nave del jugador
function movePlayer(direction) {
    if (direction === "left") {
        playerX -= playerSpeed;
    } else if (direction === "right") {
        playerX += playerSpeed;
    }

    // Limita el movimiento del jugador dentro del canvas
    if (playerX < playerWidth / 2) {
        playerX = playerWidth / 2;
    } else if (playerX > canvas.width - playerWidth / 2) {
        playerX = canvas.width - playerWidth / 2;
    }
}

// Función principal de dibujo
function draw() {
    // Borra el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibuja la nave del jugador
    drawPlayer();

    // Solicita el próximo fotograma de animación
    requestAnimationFrame(draw);
}

// Eventos de teclado para controlar la nave del jugador
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        movePlayer("left");
    } else if (event.key === "ArrowRight") {
        movePlayer("right");
    }
});

// Inicia el juego
draw();
