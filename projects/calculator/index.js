var calculatorElem = document.getElementById('calculator');
var numberPanelElem = document.getElementById('numberPanel');
var operationElem = document.getElementById('operation');
var outputElem = document.getElementById('output');
var equationElem = document.getElementById('equation');
var resultElem = document.getElementById('result');
var clearElem = document.getElementById('clear');

var equation = [];
var value = '';

numberPanelElem.addEventListener('click', (e) => {
  // debugger;
  if (e.target.innerText) {
    value = value + e.target.innerText;
  }
  printText(equation.length !== 0 ? equation.join('') + value : value);
})

function printText(value) {
  // if(equation.length !== 0) {
  //   equation.innerText = 
  // }
  equationElem.innerHTML = value;
}

operationElem.addEventListener('click', (e) => {
  if (e.target.innerText) {
    equation.push(+value);
    switch (e.target.innerText) {
      case '+':
        equation.push('+');
        break;
      case '-':
        equation.push('-');
        break;
      case 'x':
        equation.push('*');
        break;
      case '/':
        equation.push('/');
        break;
      default: 
    }
    value = '';
    printText(equation.join(''))
  }
});

resultElem.addEventListener('click', (e) => {
 if(e.target.innerText) {
  equation.push(value);
  value = 0;
   let finalEq = equation.join('');
   let result = eval(finalEq);
   alert(result);
 }
});

function clearAll() {
  equation = [];
  value = '';
  equationElem.innerHTML = value;
}

clearElem.addEventListener('click', (e) => {clearAll()})