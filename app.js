let catString = '';
const inputFieldElm = document.querySelector('.js-show-input');

function calc(input) {
  catString += input;
  localStorage.setItem('input', catString)
  inputFieldElm.innerHTML = catString;
}

function calcTotal() {
  const result = eval(catString);
  localStorage.setItem('result', result);
  inputFieldElm.innerHTML = result;
  catString = '';
}

function clearResults() {
  inputFieldElm.innerHTML = 'CLEARED!';
  catString = '';
}

function getLastResult() {
  const lastResultValue = localStorage.getItem('result');
  catString = lastResultValue;
  inputFieldElm.innerHTML = lastResultValue;
  console.log(lastResultValue);
}