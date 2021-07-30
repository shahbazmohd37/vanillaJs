function Game(player1, player2) {
  this.player1 = player1
  this.player2 = player2
  this.chance = this.player1;
  this.createGame = function() {
    const grid = document.querySelector('.grid');
    for(let i = 0; i<5;i++) {
      const square1 = document.createElement('div');
      square1.classList.add('square');
      const square2 = document.createElement('div');
      square2.classList.add('square');
      const square3 = document.createElement('div');
      square3.classList.add('square');
      const square4 = document.createElement('div');
      square4.classList.add('square');
      const square5 = document.createElement('div');
      square5.classList.add('square');
      grid.appendChild(square1)
      grid.appendChild(square2)
      grid.appendChild(square3)
      grid.appendChild(square4)
      grid.appendChild(square5)
    }
  }
  this.gridSquare = document.querySelectorAll('.square');
  this.gridElem = document.querySelector('.grid');
  this.gridElem.addEventListener('click', (e) => {
    if(!e.target.classList.contains('red') && !e.target.classList.contains('blue')) {
      if (this.chance === this.player1) {
        e.target.classList.add('red');
        this.chance = this.player2
      } else {
        e.target.classList.add('blue');
        this.chance = this.player1;
      }
    } else {
      alert('you cannot click on occupied div')
    }
    }
  )
}

var game = new Game('player1', 'player2');
game.createGame();