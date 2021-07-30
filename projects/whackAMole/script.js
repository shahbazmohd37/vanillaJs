
// mole will appear in random square and disappear after sometime
// add eventListener on each square and check on click if mole class is present
// then add in the score
// set timer for 10 sec

var count = 0;
var gridElem = document.querySelectorAll('.square');
var testScore = document.querySelector('.score');

function createGame() {
  let randomIndex = Math.floor(Math.random()* gridElem.length);
  const moleElem = document.querySelectorAll('.mole');
  if(moleElem.length !== 0) {
    moleElem[0].classList.remove('mole');
    gridElem[randomIndex].classList.add('mole');
  }
}

function hitMole(e) {
    if (e.target.classList.contains('mole')) {
      count++
      testScore.innerHTML = count;
    }
}

document.querySelector('.grid').addEventListener('click', hitMole);
var timer = setInterval(createGame, 700);
setTimeout(() => {clearInterval(timer); document.querySelector('.grid').removeEventListener('click', hitMole); alert('game finished')}, 10000);