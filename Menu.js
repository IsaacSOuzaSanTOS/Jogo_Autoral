class Menu extends Phaser.Scene {
  constructor() {
    super({ key: "Menu" });//define a cena como "Menu"
  }
  preload() {}
  create() {
    // Adiciona um fundo inicial
    this.bg = this.add.rectangle(//adiciona um retângulo
      larguraDaTela / 2,//posição eixo y
      alturaDaTela / 2,//posição eixo y
      1200,//comprimento do retângulo
      700,//altura do retângulo
      0x3498db//cor azul
    );

    this.add.text(larguraDaTela / 2, //posição y do texto
        alturaDaTela / 2 - 200, //posição y do texto
        "Click para iniciar o jogo", { // Adiciona um texto no centro da tela informando ao jogador que deve clicar para iniciar
        fontSize: "32px",//estilo da fonte
        fill: "#000",//estilo da fonte
      }).setOrigin(0.5);//posiciona o texto no centro


      this.add.text(larguraDaTela / 2, //posição y do texto
        alturaDaTela / 2 - 50, //posição y do texto
        "Pegue 10 estrelas", { // Adiciona um texto no centro da tela informando ao jogador o objetivo
        fontSize: "32px",//estilo da fonte
        fill: "#000",//estilo da fonte
      }).setOrigin(0.5);//posiciona o texto no centro


      this.add.text(larguraDaTela / 2, //posição y do texto
        alturaDaTela / 2 + 100, //posição y do texto
        "Você controla o personagem \n com as setas do teclado", { // Adiciona um texto no centro da tela informando ao jogador os comandos
        fontSize: "32px",//estilo da fonte
        fill: "#000",//estilo da fonte
      }).setOrigin(0.5);//posiciona o texto no centro

    this.input.on("pointerdown", () => {//cria um evento ao click
      this.scene.start("Jogo");//inicia a cena "Jogo"
      this.scene.stop("Menu");//finaliza a cena "Menu"
    });
  }

  update() {}
}
