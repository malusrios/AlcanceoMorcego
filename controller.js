document.addEventListener('DOMContentLoaded', () => {
    const bat = document.getElementById('bat');
    const gameContainer = document.querySelector('.game-container');
    const scoreDisplay = document.getElementById('score');
    let score = 0;

    const containerWidth = gameContainer.clientWidth;
    const containerHeight = gameContainer.clientHeight;

    function moveBat() {
        const randomX = Math.floor(Math.random() * (containerWidth - bat.clientWidth));
        const randomY = Math.floor(Math.random() * (containerHeight - bat.clientHeight));
        bat.style.left = `${randomX}px`;
        bat.style.top = `${randomY}px`;
    }

    bat.addEventListener('click', () => {
        moveBat();
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
    });

    moveBat();
    setInterval(moveBat, 700);  // Move o morcego a cada 0,7 s
});
