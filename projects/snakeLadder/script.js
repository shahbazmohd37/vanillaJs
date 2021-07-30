function Game(player1, player2) {
  this.player1 = new Player({x: 0, y: 0}, 0, true);
  this.player2 = new Player({x: 0, y: 0}, 0, false);;
  this.board = [];
  this.snakeArray = [];
  this.ladderArray = []
  this.initialiseBoard = function() {
    console.log('value of this', this)
    for(let i=0;i<10;i++) {
      if(i % 2 === 0) {
        for (let j=10;j>=1; j--) {
          this.board.push(new Pos(j, i, 10*i + j));
        }
      } else {
      for (let j=1;j<=10; j++) {
        this.board.push(new Pos(j, i, 10*i + j));
      }
      }
    }
  }
  this.initialiseSnakes = function() {
    // for (let i=0; i<5;i++) {
      this.snakeArray.push(new Snakes({x: 3, y: 7}, {x: 4,y: 8}, 'red'))
      this.snakeArray.push(new Snakes({x: 1, y: 3}, {x: 6,y: 7}, 'blue'))
      this.snakeArray.push(new Snakes({x: 2, y: 9}, {x: 7,y: 5}, 'green'))
      this.snakeArray.push(new Snakes({x: 4, y: 3}, {x: 8,y: 8}, 'yellow'))
      this.snakeArray.push(new Snakes({x: 7, y: 1}, {x: 9,y: 3}, 'brown'))
    // }
  }
  this.intialiseLadder = function() {
    // for (let i=0; i<5;i++) {
      this.ladderArray.push(new Ladder({x: 1, y: 9}, {x: 2,y: 1}, 'pink'))
      this.ladderArray.push(new Ladder({x: 2, y: 2}, {x: 4,y: 3}, 'aqua'))
      this.ladderArray.push(new Ladder({x: 5, y: 4}, {x: 9,y: 3}, 'lightblue'))
      this.ladderArray.push(new Ladder({x: 6, y: 6}, {x: 9,y: 8}, 'black'))
      this.ladderArray.push(new Ladder({x: 4, y: 1}, {x: 8,y: 1}, 'chartreuse'))
    // }
  }
  this.initialiseSnakes();
  this.intialiseLadder();
  console.log('ths.ladder ', this.ladderArray);
  console.log('ths.snakes ', this.snakeArray);
  this.drawGame = function() {
    for (let i=this.board.length - 1;i>=0;i--) {
      const square = document.createElement('div');
      square.setAttribute('id', this.board[i].boxValue)
      square.classList.add('square');
      this.paintSnakeOrLadder(square, this.board[i])
      square.innerHTML = this.board[i].boxValue;
      this.gridElem.appendChild(square)
    }
  }
  this.paintSnakeOrLadder = function (square, pos) {
    console.log('this.snake arra ', this.snakeArray)
    for(let i = 0;i<this.snakeArray.length;i++) {
      if (pos.x === this.snakeArray[i].startPos.x && this.snakeArray[i].startPos.y === pos.y || pos.x === this.snakeArray[i].endPos.x && this.snakeArray[i].endPos.y === pos.y) {
        square.style.background = this.snakeArray[i].color
      }
    }
    for(let i = 0;i<this.ladderArray.length;i++) {
      if (pos.x === this.ladderArray[i].startPos.x && this.ladderArray[i].startPos.y === pos.y || pos.x === this.ladderArray[i].endPos.x && this.ladderArray[i].endPos.y === pos.y) {
        square.style.background = this.ladderArray[i].color
      }
    }
  }
  this.rollDice = function() {
    // const square = document.getElementById(player.boxValue);
    const randomDiceValue = Math.floor(Math.random() * 7);
    debugger;
    if (this.chance === this.player1) {
      this.player1.playerPos.boxValue = (this.player1.playerPos.boxValue + randomDiceValue);
      // this.player1.pos.y = Math.floor((this.player1.pos.x + randomDiceValue) / 10);
      this.chance = this.player2
      this.showPlayerOnBoard(this.player1, 'player1')
    } else {
      this.player2.playerPos.boxValue = (this.player2.playerPos.boxValue + randomDiceValue);
      // this.player1.pos.y = Math.floor((this.player1.pos.x + randomDiceValue) / 10);
      this.chance = this.player1
      this.showPlayerOnBoard(this.player2, 'player2')
    }
  }
  this.showPlayerOnBoard = function(player, playerColor) {
    const square = document.getElementById(player.playerPos.boxValue);
    square.classList.add(playerColor)
  }
  // dom elements 
  this.gridElem = document.querySelector('.grid');
  this.squareElem = document.querySelectorAll('.square')
}

function Player(position,boxValue, chance) {
  console.log('Player class caled ', position, boxValue, chance);
  this.playerPos = new Pos(position.x, position.y, boxValue);
  this.chance = chance;
  this.getPlayerPos = function() {
    return this.playerPos;
  }
  this.getChance = function() {
    return this.chance;
  }
  this.setPlayerPos = function(pos) {
    this.playerPos = pos;
  }
  this.setChance = function(chance) {
    this.chance = chance;
  }
}

function Snakes(startPos, endPos, color) {
this.startPos = startPos;
this.endPos = endPos;
this.color = color
this.getSnakeStartPos = function() {
  return this.startPos;
}
this.getSnakeEndPos = function() {
  return this.endPos;
}
this.setSnakeStartPos  = function(pos) {
  this.startPos = pos;
}
this.setSnakeEndPos  = function(pos) {
  this.endPos = pos;
}
}

function Ladder(startPos, endPos, color) {
  this.startPos = startPos;
  this.endPos = endPos;
  this.color = color
  this.getLadderStartPos = function() {
    return this.startPos;
  }
  this.getLadderEndPos = function() {
    return this.endPos;
  }
  this.setLadderStartPos  = function(pos) {
    this.startPos = pos;
  }
  this.setLadderEndPos  = function(pos) {
    this.endPos = pos;
  }
  }

function Pos(x,y, boxValue) {
  this.x = x;
  this.y = y;
  this.boxValue = boxValue;
  this.getPostion = function() {
    return {x: this.x, y: this.y};
  }
  this.setPosition = function(position) {
    this.x = position.x;
    this.x.y = position.y;
  }
}

var game = new Game('player1', 'player2');
game.initialiseBoard()
game.drawGame();
console.log('board is ', game.board);
console.log('position ', game.board[0].getPostion());
game.rollDice()