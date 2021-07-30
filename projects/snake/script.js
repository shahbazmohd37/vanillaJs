document.addEventListener('DOMContentLoaded', () => {
  var grid = document.querySelector('.grid');
  var direction = 1;
  let currentIndex = 0;
  let currentSnake = [2,1,0];
  let interval = 0;
  let intervalTime = 0;
  let width = 10;
  let speed = 0.9;
  function createGame() {
    for (let i=0;i<100;i++) {
      var square = document.createElement('div');
      square.classList.add('square');
      grid.appendChild(square);
    }
    var squareElem = document.querySelectorAll('.square');
    squareElem[currentSnake[0]].classList.add('snake')
    squareElem[currentSnake[1]].classList.add('snake')
    squareElem[currentSnake[2]].classList.add('snake')
    intervalTime = 1000;
    interval = setInterval(moveOutcomes, intervalTime);
  }
  // get snake elements and 
  [2,1,0]
  createGame();
  displayRandomApple()
  function moveOutcomes() {
    var squareElem = document.querySelectorAll('.square');
    // check if collides with all four walls
    if (
      ((currentSnake[0] + width) > width*width  && direction === width) || //hit bottom
      ((currentSnake[0] - width) < 0 && direction === -width) || //hit top
      ((currentSnake[0] % width === width - 1 && direction === 1)) || // hits right wall
      (currentSnake[0] % width === 0 && direction === -1) 
    ) {
      return clearInterval(intervalTime);
    }
    const tail = currentSnake.pop(); //remove last elem
    squareElem[tail].classList.remove('snake');
    currentSnake.unshift(currentSnake[0] + direction)
    squareElem[currentSnake[0]].classList.add('snake')
    // snake getting apple
    const appleElem= document.querySelector('.apple');
    if(squareElem[currentSnake[0]].classList.contains('apple')) {
      squareElem[currentSnake[0]].classList.remove('apple');
      squareElem[tail].classList.add('snake');
      currentSnake.push(tail);
      displayRandomApple()
      clearInterval(interval)
      intervalTime = intervalTime * speed
      interval = setInterval(moveOutcomes, intervalTime)
    }
  }

  function displayRandomApple() {
    let randomIndex = 0;
    var squareElem = document.querySelectorAll('.square');
    do {
      randomIndex = Math.floor(Math.random() * 100);
    } while(
      squareElem[randomIndex].classList.contains('snake')
    )
    squareElem[randomIndex].classList.add('apple');
  }

  // move the snake
  document.addEventListener('keyup', moveSnake);
  function moveSnake(event) {
    switch (event.keyCode || event.which) {
      case 37: // left
      direction = -1;
       break;
       case 38: // up
       direction = -width;
       break;
       case 39: // right
       direction = 1;
       break;
       case 40: // down
       direction = +width;
       break;
    }
  }
})