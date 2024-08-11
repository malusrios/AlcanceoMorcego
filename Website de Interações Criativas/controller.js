// Aguarda o carregamento completo do documento HTML
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona o elemento com o ID 'bat' (morcego) no DOM
    const bat = document.getElementById('bat');

    // Seleciona o contêiner principal do jogo
    const gameContainer = document.querySelector('.game-container');

    // Seleciona o elemento onde o placar será exibido
    const scoreDisplay = document.getElementById('score');

    // Inicializa a variável de pontuação
    let score = 0;

    // Obtém a largura e a altura do contêiner do jogo
    const containerWidth = gameContainer.clientWidth;
    const containerHeight = gameContainer.clientHeight;

    // Função para mover o morcego para uma posição aleatória dentro do contêiner
    function moveBat() {
        // Gera um valor aleatório para a posição X dentro dos limites do contêiner
        const randomX = Math.floor(Math.random() * (containerWidth - bat.clientWidth));
        // Gera um valor aleatório para a posição Y dentro dos limites do contêiner
        const randomY = Math.floor(Math.random() * (containerHeight - bat.clientHeight));
        // Define a posição X e Y do morcego usando as coordenadas geradas
        bat.style.left = `${randomX}px`;
        bat.style.top = `${randomY}px`;
    }

    // Adiciona um evento de clique ao morcego
    bat.addEventListener('click', () => {
        // Move o morcego para uma nova posição aleatória quando clicado
        moveBat();
        // Incrementa a pontuação
        score++;
        // Atualiza o placar exibido na tela
        scoreDisplay.textContent = `Score: ${score}`;
    });

    // Move o morcego para uma posição aleatória inicial
    moveBat();

    // Move o morcego para uma nova posição aleatória a cada 0,7 segundos (700 milissegundos)
    setInterval(moveBat, 700);
});

