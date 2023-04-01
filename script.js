let frirstNumber, secondNumber, operator;

function main() {

}


function operate(frirstNumber, secondNumber, operator) {
  switch (operator) {
    case "+":
      add(frirstNumber, secondNumber);
      break;
    
    case "-":
      substract(frirstNumber, secondNumber);
      break;

    case "*":
      multiply(frirstNumber, secondNumber);
      break;

    case "/":
      divide(frirstNumber, secondNumber);
      break;
  }
}

function add(frirstNumber, secondNumber) {
  return frirstNumber + secondNumber;
}

function substract(frirstNumber, secondNumber) {
  return frirstNumber - secondNumber;
}

function multiply(frirstNumber, secondNumber) {
  return frirstNumber * secondNumber;
}

function divide(frirstNumber, secondNumber) {
  return frirstNumber / secondNumber;
}
