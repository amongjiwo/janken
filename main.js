class Game {
    constructor(player, com, resultDisplay) {
        this.player = player;
        this.com = com;
        this.resultDisplay = resultDisplay;
    }

    generate_selection() {
        let angka = Math.floor(Math.random() * 3);

        if (angka === 0) {
            this.com.sign[0].style.backgroundColor = "#C4C4C4";
            this.com.sign[1].style.backgroundColor = "#9B835F";
            this.com.sign[2].style.backgroundColor = "#9B835F";
            this.com.signSelection = "rock";
        }

        else if (angka === 1) {
            this.com.sign[0].style.backgroundColor = "#9B835F";
            this.com.sign[1].style.backgroundColor = "#C4C4C4";
            this.com.sign[2].style.backgroundColor = "#9B835F";
            this.com.signSelection = "paper";
        }

        else if (angka === 2) {
            this.com.sign[0].style.backgroundColor = "#9B835F";
            this.com.sign[1].style.backgroundColor = "#9B835F";
            this.com.sign[2].style.backgroundColor = "#C4C4C4";
            this.com.signSelection = "scissors";
        }
    }

    determineWinner() {
        if (this,player.signSelection === this.com.signSelection) {
            this.resultDisplay.innerHTML = `<h2 class="draw">DRAW</h2>`;
        }

        else if ( 
            (this.player.signSelection === 'rock' && this.com.signSelection === 'scissors')
            || (this.player.signSelection === 'paper' && this.com.signSelection === 'rock')
            || (this.player.signSelection === 'scissors' && this.com.signSelection === 'paper')
        ) {
            this.resultDisplay.innerHTML = `<h2 class="playerWin">PLAYER 1<br>WIN</h2>`;
         }
    
        else if (
            (this.player.signSelection === 'rock' && this.com.signSelection === 'paper')
            || (this.player.signSelection === 'paper' && this.com.signSelection === 'scissors')
            || (this.player.signSelection === 'scissors' && this.com.signSelection === 'rock')
        ) {
            this.resultDisplay.innerHTML = `<h2 class="comWin">COM<br>WIN</h2>`;
        }
    }

    begin() {
        this.generate_selection();
        setTimeout(() => {
            this.determineWinner(this.player.signSelection, this.com.signSelection);
          }, 300)
    }

}

class Competitor {
    constructor(sign, selection){
    this.sign = sign;
    this.signSelection = selection;
    }
}

class Player extends Competitor {
    constructor(sign) {
        super(sign);
    }
}

class Com extends Competitor {
    constructor(sign) {
        super(sign);
    }
}

let player = new Player(document.getElementsByClassName("player-selection"));
let com = new Com(document.getElementsByClassName("com-selection"));
let game = new Game(player, com, document.getElementById("versus") );

const startGame = (selection) => {

    player.signSelection = selection;
    if (selection === "rock"){
        player.sign[0].style.backgroundColor = "#c4c4c4";
        player.sign[1].style.backgroundColor = "#9c835f";
        player.sign[2].style.backgroundColor = "#9c835f";
    }

    if (selection === "paper"){
        player.sign[0].style.backgroundColor = "#9c835f";
        player.sign[1].style.backgroundColor = "#c4c4c4";
        player.sign[2].style.backgroundColor = "#9c835f";
    }

    if (selection === "scissors"){
        player.sign[0].style.backgroundColor = "#9c835f";
        player.sign[1].style.backgroundColor = "#9c835f";
        player.sign[2].style.backgroundColor = "#c4c4c4";
    }

    for (let i=0; i<3; i++){
        com.sign[i].style.backgroundColor = "#9c835f";
    }
    game.resultDisplay.innerHTML = `<h2 class="versus">VS</h2>`;
    game.begin();
}

const resetGame = () => {
    player.sign[0].style.backgroundColor = "#9c835f";
    player.sign[1].style.backgroundColor = "#9c835f";
    player.sign[2].style.backgroundColor = "#9c835f";
    com.sign[0].style.backgroundColor = "#9c835f";
    com.sign[1].style.backgroundColor = "#9c835f";
    com.sign[2].style.backgroundColor = "#9c835f";
    game.resultDisplay.innerHTML = `<h2 class="versus">VS</h2>`;
}
