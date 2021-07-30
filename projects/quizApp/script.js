// const quizData = [
//   {
//       question: "What is the most used programming language in 2019?",
//       a: "Java",
//       b: "C",
//       c: "Python",
//       d: "JavaScript",
//       correct: "d",
//   },
//   {
//       question: "Who is the President of US?",
//       a: "Florin Pop",
//       b: "Donald Trump",
//       c: "Ivan Saldano",
//       d: "Mihai Andrei",
//       correct: "b",
//   },
//   {
//       question: "What does HTML stand for?",
//       a: "Hypertext Markup Language",
//       b: "Cascading Style Sheet",
//       c: "Jason Object Notation",
//       d: "Helicopters Terminals Motorboats Lamborginis",
//       correct: "a",
//   },
//   {
//       question: "What year was JavaScript launched?",
//       a: "1996",
//       b: "1995",
//       c: "1994",
//       d: "none of the above",
//       correct: "b",
//   },
// ];

import quizData from './config.js';
import printMe from './print.js';
import { setCookie } from './utility/cookies.js';

setCookie();
console.log('cookies set ', unescape(document.cookie));
const name = {
  age: 14,
  city: 'lucknow'
};
const { age, city} = name;
console.log(age, city);

console.log('quiz data ', quizData);
let currentData = 0;
let score = 0;
const id = ['a', 'b', 'c', 'd'];
var answerElem = '';

const elem = document.getElementById('img');
const btn = document.createElement('button');
btn.innerHTML = 'Print me'
btn.onclick = printMe;
document.getElementById('question').appendChild(btn);
console.log(elem);
elem.src = './img/cloud.svg'
function renderQuestion(currentData = 0) {
  deselectAnswers();
  const questionData = quizData[currentData];
  const questTextElem = document.getElementById('question');
  if(questTextElem) {questTextElem.innerHTML = questionData.question};
  id.map((optionId, index) => {
    const elem = document.getElementById(`${optionId}_text`);
    if (elem) {
      elem.innerHTML = questionData[optionId]
    }
  })
}
renderQuestion(currentData);

function getAnswer() {
  answerElem = document.querySelectorAll('.answer');
  console.log('answer elem', answerElem);
  for (let answer of answerElem) {
    if (answer.checked) {
      return answer.value
    }
  }
  return null
}

function deselectAnswers() {
  for (let answer of answerElem) {
    answer.checked = false;
  }
}

function submit() {
  const answer = getAnswer();
  if (answer === quizData[currentData].correct) {
    score++;
  } 
  currentData++
  if(currentData < quizData.length) {
    renderQuestion(currentData);
  } else {
    alert('Your game is finished and restarted ');
    alert(score)
    currentData = 0;
    renderQuestion(currentData);
  }
}
