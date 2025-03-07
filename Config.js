// Define as dimensões da tela do jogo
let larguraDaTela = 1200; // Largura da tela em pixels
let alturaDaTela = 700; // Altura da tela em pixels

// Configuração do jogo
const config = {
  type: Phaser.AUTO, // O Phaser escolherá automaticamente entre WebGL ou Canvas para renderizar o jogo
  width: larguraDaTela, // Define a largura da tela do jogo
  height: alturaDaTela, // Define a altura da tela do jogo

  // Configuração do sistema de física
  physics: {
    default: "arcade", // Define o motor de física como "arcade" (mais simples e eficiente para jogos 2D)
    arcade: {
      gravity: { y: 300 }, // Define a gravidade no eixo Y (fazendo os objetos caírem)
      debug: false, // Define se a depuração das colisões será exibida (false para ocultar)
    },
  },

  // Define as cenas que compõem o jogo
  scene: [Menu, Jogo], // O jogo começa na cena "Menu" e pode transitar para "Jogo"
};

// Criação do jogo com as configurações definidas
const game = new Phaser.Game(config);
