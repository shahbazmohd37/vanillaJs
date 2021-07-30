document.addEventListener('DOMContentLoaded', () => {
  var grid = document.querySelector('.grid');
  var squareElem = document.querySelectorAll('.square');
  var currentPlayerIndex;
  var direction = 0;
  var width = 15;
  var interval;
  var cloud = [19,20,21,22,23,24,25, 34,35,36,37,38,39,40];
  var direction = 1;
  var removedClouds = [];
  var cloudInterval;
  var goingRight = true;

  function createGame() {
    for(let i=0;i<225;i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      var grid = document.querySelector('.grid');
      grid.appendChild(square);
    }
    squareElem = document.querySelectorAll('.square');
  }
  function setPlayer() {
    const randomIndex = Math.floor(196 + Math.random() * (210-195));
    squareElem[randomIndex].classList.add('player');
    currentPlayerIndex = randomIndex
    // interval setInterval(fire, 500);
  }
  function createCloud(direction) {
    for(let i=0;i<cloud.length;i++) {
      console.log('cloud i ',cloud[i])
      if(!removedClouds.includes[i]) {
        squareElem[cloud[i]].classList.add('yellow');
      }
    }
  }
  function remove() {
    for (let i=0;i<cloud.length;i++) {
      squareElem[cloud[i]].classList.remove('yellow');
    }
  }
  function moveCloud() {
    const rightEdge = cloud[cloud.length- 1] % width === width - 1;
    const leftEdge = cloud[0] % width === 0
    remove();
    // debugger;
    if(rightEdge && goingRight) {
      for(let i=0;i<cloud.length;i++) {
        cloud[i] += width + 1;
        direction = -1;
        goingRight = false;
      }
    }
    if(leftEdge && !goingRight) {
      for(let i=0;i<cloud.length;i++) {
        cloud[i] += width - 1;
        direction = 1;
        goingRight = true;
      }
    }
    for(let i=0;i<cloud.length;i++) {
      cloud[i] += direction;
    }
    createCloud()
  }

  createGame();
  createCloud()
  setPlayer()
  
  cloudInterval = setInterval(moveCloud, 600);

  function shoot(e) {
    let laserCurrentIndex = currentPlayerIndex;
    let laserId;
    function moveLaser() {
      squareElem[laserCurrentIndex].classList.remove('red');
      laserCurrentIndex -= width;
      if (laserCurrentIndex < 0) {
        clearInterval(laserId);
        return
      }
      squareElem[laserCurrentIndex].classList.add('red');
    }
    switch(e.key) {
      case 'ArrowUp':
        laserId = setInterval(moveLaser, 500);
    }
  }

  function movePlayer() {
    squareElem[currentPlayerIndex].classList.remove('player');
    squareElem[currentPlayerIndex + direction].classList.add('player')
    currentPlayerIndex = currentPlayerIndex + direction;
    // fire(currentPlayerIndex);
  }
  document.addEventListener('keydown', (e) => {
    shoot(e)
  })

  document.addEventListener('keyup', (e) => {
    switch(e.keyCode || e.which) {
      case 37:
        direction = -1;
        movePlayer();
        break;
      case 39:
        direction = 1;
        movePlayer();
        break;
    }
  })
  // function movePlayer() {}
})
