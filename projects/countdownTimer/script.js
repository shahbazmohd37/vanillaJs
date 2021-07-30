var days = 0, hours = 0, min = 0, sec = 0;
const NEW_YEAR = '1 Jan 2022';
var timer;

function countdown() {
  const newYearDate = new Date(NEW_YEAR);
  const currentDate = new Date();
  const timeDiff = (newYearDate.getTime() - currentDate.getTime())/1000;
  days = Math.floor(timeDiff / 3600 / 24);
  hours = Math.floor(timeDiff/3600) % 24;
  min = Math.floor(timeDiff/60) % 60;
  sec = Math.floor(timeDiff) % 60;
  console.log('days', days, ' ', hours, ' ', min)
  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('min').innerHTML = min;
  document.getElementById('sec').innerHTML = sec;
}
// countdown();
// setInterval(countdown,1000);
function startTimer() {
  timer = setInterval(countdown,1000);
}
function stopTimer() {
clearInterval(timer);
}

console.log(a);
console.log('shahbaz')
var a = 5;
console.log(a)

var p1 = new Promise((res) => {
  console.log('P1 called')
  setTimeout(() => {console.log('p1 set timeout '); res()}, 1000)
})

var p2 = new Promise((res) => {
  console.log('P1 called')
  setTimeout(() => {console.log('p1 set timeout '); res()}, 1000)
})

p1.then(() => {console.log('p1 is resolved')});
p2.then(() => {console.log('p2 is resolved')});