class Fim extends Phaser.Scene {
    constructor() {
      super({ key: "Fim" });//define a cena como "Fim"
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
          alturaDaTela / 2 - 150, //posição y do texto
          "Parabéns! Você terminou o jogo.", { // Parabeniza o jogador pelo fim do jogo
          fontSize: "32px",//estilo da fonte
          fill: "#000",//estilo da fonte
        }).setOrigin(0.5);//posiciona o texto no centro
  
  
        this.add.text(larguraDaTela / 2, //posição y do texto
          alturaDaTela / 2, //posição y do texto
          "Click para jogar novamente!", { // Dá instruções para jogar novamente
          fontSize: "32px",//estilo da fonte
          fill: "#000",//estilo da fonte
        }).setOrigin(0.5);//posiciona o texto no centro
 
  
      this.input.on("pointerdown", () => {//cria um evento ao click
        this.scene.start("Menu");//inicia a cena "Menu"
        this.scene.stop("Fim");//finaliza a cena "Fim"
      });
    }
  
    update() {}
  }
  