function Game(player1, player2, chance, numberOfSnakes, numberOfLadders) {
  this.player1 = new Player(player1, 0);
  this.player2 = new Player(player2, 0);;
  this.chance = chance;
  this.snakeArray = []
  this.ladderArray = []
  this.board = []
  this.dice = new Dice()
  this.initBoard = function() {
    for (let y=0; y<10; y++) {
      if(y % 2 === 0) {
        for (let x = 10; x>0;x--) {
          this.board.push(y*10 + x);
        }
      } else {
        for (let x=1; x<=10;x++) {
          this.board.push(y*10 + x);
        }
      }
    }
    this.intialiseSnakes();
    this.intialiseLadder();
  }
  this.intialiseSnakes = function() {
    this.snakeArray.push(new Snake(56, 18));
    this.snakeArray.push(new Snake(78, 38));
    this.snakeArray.push(new Snake(38, 7));
    this.snakeArray.push(new Snake(99, 10));
    this.snakeArray.push(new Snake(84, 27));
  }
  this.intialiseLadder = function() {
    this.ladderArray.push(new Ladder(9, 59));
    this.ladderArray.push(new Ladder(23, 68));
    this.ladderArray.push(new Ladder(39, 79));
    this.ladderArray.push(new Ladder(48, 90));
    this.ladderArray.push(new Ladder(55, 76));
  }
  this.drawBoard = function() {
    for (let i=this.board.length - 1;i>=0;i--) {
      const square = document.createElement('div');
      square.setAttribute('id', this.board[i]);
      square.innerHTML = this.board[i];
      square.classList.add('square');
      this.gridElem.appendChild(square);
    }
    this.drawSnakes();
    this.drawLadder();
  }
  this.drawLadder = function() {
    for (let i=0;i<this.ladderArray.length;i++) {
      const ladderElemStart = document.getElementById(this.ladderArray[i].start);
      const ladderElemEnd = document.getElementById(this.ladderArray[i].end);
      ladderElemStart.style.background = 'green';
      ladderElemEnd.style.background = 'green';
      // connect ladder by line
    }
  }
  this.drawSnakes = function() {
    for (let i=0;i<this.snakeArray.length;i++) {
      const snakeElemStart = document.getElementById(this.snakeArray[i].head);
      const snakeElemEnd = document.getElementById(this.snakeArray[i].tail);
      snakeElemStart.style.background = 'red';
      snakeElemEnd.style.background = 'red';
      // connect snake by line
    }
  }
  this.getNewPostion = function(finalPos) {
    //check if it collides with snake head;
    for (let i=0; i<this.snakeArray.length;i++) {
      if (this.snakeArray[i].head === finalPos) {
        alert('You landed on snake, will take you down');
        return this.snakeArray[i].tail;
      }
    }
    // check for ladder start end
    for (let i=0; i<this.ladderArray.length;i++) {
      if (this.ladderArray[i].start === finalPos) {
        alert('You landed on ladder start, will take you up');
        return this.ladderArray[i].end;
      }
    }
    return finalPos;
  }
  this.showPlayer = function(player, prevPostion, playerColor) {
    document.getElementById(prevPostion)?.classList.remove(playerColor);
    document.getElementById(player.playerPostion)?.classList?.add(playerColor);
  }
  this.changePlayerTo = function(player) {
    playerNameElem.innerHTML = player.name;
    this.chance = player.name;
  }
  this.playGame = function() {
    const diceIndex = this.dice.roll();
    console.log('player chance', diceIndex, this.chance);
    if (this.chance === this.player1.name) {
      const prevPostion = this.player1.playerPostion;
      this.player1.setPlayerPostion(this.getNewPostion(this.player1.playerPostion + diceIndex))
      // document.getElementById('chance').innerHTML = this.player2;
      this.showPlayer(this.player1, prevPostion, 'player1');
      this.changePlayerTo(this.player2);
    } else {
      const prevPostion = this.player2.playerPostion;
      this.player2.setPlayerPostion(this.getNewPostion(this.player2.playerPostion + diceIndex))
      // document.getElementById('chance').innerHTML = this.player2;
      this.showPlayer(this.player2, prevPostion, 'player2');
      this.changePlayerTo(this.player1);
    }
  }
  // 
  this.gridElem = document.querySelector('.grid')
  this.squareElem = document.querySelectorAll('.square')
  this.initBoard();
  this.drawBoard();
}

function Player(playerName, value) {
  this.name = playerName
  this.playerPostion = value;
  this.setPlayerPostion = function(value) {
    this.playerPostion = value;
  }
  this.getPlayerPosition = function() {
    return this.playerPostion;
  }
}

function Snake(head, tail) {
  this.head = head;
  this.tail = tail;
}

function Ladder(start, end) {
  this.start = start;
  this.end = end;
}

function Dice() {
  this.roll = function() {
    return Math.floor(1 + Math.random() * 6)
  }
}

var game = new Game('player1', 'player2', 'player1');
document.getElementById('dice').addEventListener('click', (e) => {
  game.playGame();
});
var playerNameElem = document.getElementById('playerName');