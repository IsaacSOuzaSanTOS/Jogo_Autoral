class Jogo extends Phaser.Scene {
  constructor() {
    super({ key: "Jogo" });//Define a cena como "Jogo"
  }
  preload() {
    this.load.image("bg", "assets/floresta/2304x1296.png");// Carrega a imagem do fundo
    this.load.image("plataforma", "assets/platform.png");// Carrega a imagem da plataforma
    this.load.spritesheet("player", "assets/plantaCompleto.png", {//Carrega os sprites do personagem 
      frameWidth: 86.6,// Largura de cada frame
      frameHeight: 90,// Altura de cada frame
    });
    this.load.image("star", "assets/star.png");// Carrega a imagem da estrela
  }
  create() {
    this.add.image(larguraDaTela / 2, alturaDaTela / 2, "bg").setScale(0.53);// Adiciona a imagem de fundo

    this.player = this.physics.add.sprite(100, 630, "player").setScale(1.4);// Adiciona o jogador 
    this.player.setCollideWorldBounds(true);//Configura colisão com os limites do mundo

    this.star = this.physics.add.sprite(1450, 50, "star").setScale(2);// Adiciona a estrela
    this.star.setCollideWorldBounds(true);//Configura física
    this.star.setBounce(0.4);//Adiciona o coeficiente de restituição

    this.platforms = this.physics.add.staticGroup(); // Criação das plataformas

    // Adiciona plataformas ao grupo
    this.platforms.create(1000, 568, "plataforma").setScale(1.2).refreshBody();
    this.platforms.create(300, 450, "plataforma");
    this.platforms.create(50, 250, "plataforma");
    this.platforms.create(875, 250, "plataforma");

    //Cria a animação de "respirar"
    this.anims.create({
      key: "respirar",
      frames: this.anims.generateFrameNumbers("player", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    //Cria a animação de correr para a direita
    this.anims.create({
      key: "correrDireita",
      frames: this.anims.generateFrameNumbers("player", { start: 4, end: 11 }),
      frameRate: 10,
      repeat: -1,
    });

    //Cria a animação de correr para a esquerda
    this.anims.create({
      key: "correrEsquerda",
      frames: this.anims.generateFrameNumbers("player", { start: 12, end: 19 }),
      frameRate: 10,
      repeat: -1,
    });

    this.cursors = this.input.keyboard.createCursorKeys();//Adiciona as setas

    //inicializa a pontuação
    this.score = [];
    this.placar = this.add.text(50, 50, "Pontuação: " + this.score.length, {
      fontSize: "32px",
      fill: "#ffffff",
    });

    //Cria uma interação entre o player e a estrela
    this.physics.add.overlap(this.player, this.star, () => {
      this.star.setVisible(false);//Deixa invisível
      this.posicaoStarX = Phaser.Math.RND.between(50, 1150);//Gera um número aleatório
      this.star.setPosition(this.posicaoStarX, 50);//Joga o número aleatório para a posição x
      this.star.setVisible(true);//Deixa visível

      this.score += 1;//Aumenta um a lista score
      this.placar.setText("Pontuação: " + this.score.length);//Lê o tamanho da lista e coloca no placar
    });

    this.physics.add.collider(this.player, this.platforms);//Adiciona colisõa entre o player e as plataformas

    this.physics.add.collider(this.star, this.platforms);//Adiciona colisõa entre a estrela e as plataformas
  }
  update() {
    //Movimento para a direita
    if (this.cursors.right.isDown) {
      this.player.setVelocityX(200);
      this.player.anims.play("correrDireita", true);

    //Movimento para a esquerda
    } else if (this.cursors.left.isDown) {
      this.player.setVelocityX(-200);
      this.player.anims.play("correrEsquerda", true);

    //Se não estiver se movendo, volta à animação padrão
    } else {
      this.player.setVelocityX(0);
      this.player.anims.play("respirar", true);
    }

    // Pulo apenas se estiver no chão
    if (this.cursors.up.isDown && this.player.body.onFloor()) {
      this.player.setVelocityY(-350);
    }

    // Verifica se o jogador pegou 10 estrelas e destrói a estrela
    while (this.score.length == 10) {
      this.star.destroy();
      break;// O "break" evita um loop infinito
    }
  }
}
