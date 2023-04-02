let frirstNumber, secondNumber, operator;
let operationDisplay = document.querySelector(".operation");
let resultDisplay = document.querySelector(".result");

function main() {
  getClickedButton();
  setTime();
}

function getOperationArgs(buttonClicked) {
  // Getting first number and operator
  if(isOperator(buttonClicked)) {
    if(frirstNumber == undefined) {
      frirstNumber = operationDisplay.textContent;
      operator = buttonClicked;
      resultDisplay.textContent = operationDisplay.textContent += buttonClicked;
      resetOperationDisplay();
      return;
  
    //Getting Second Number and performing operation based on operator that comes after second number
    } else if(secondNumber == undefined && buttonClicked != "=") { 
      
      if(operationDisplay.textContent == "") {
        frirstNumber = resultDisplay.textContent;
        operator = buttonClicked;
        resultDisplay.textContent += buttonClicked;
      } else {
        secondNumber = operationDisplay.textContent;
        resultDisplay.textContent = operate(frirstNumber, secondNumber, operator);
        
        frirstNumber = resultDisplay.textContent
        resultDisplay.textContent += buttonClicked;
        resetOperationDisplay();
  
        secondNumber = undefined;
        operator = buttonClicked;
      }
     
      return;
    
    // Calculating results on "=" buttons press.
    } else if(secondNumber == undefined && buttonClicked == "=") {
      
      secondNumber = operationDisplay.textContent;
      resultDisplay.textContent = operate(frirstNumber, secondNumber, operator);
      resetOperationDisplay();
      operator = undefined;
      secondNumber = undefined;
      return;
    }
    
  } else {
    operationDisplay.textContent += buttonClicked;
  }
}

function getClickedButton() {
  const buttons = document.querySelectorAll(".btn.active");
  let buttonClicked;
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      buttonClicked = `${btn.getAttribute("data-key")}`;
      
      //checking if = or any other buttn is pressed
      if(buttonClicked == "clear") {
        resetCalculator(); 
      } else {
        getOperationArgs(buttonClicked);
      }
    });
  });

}

function operate(frirstNumber, secondNumber, operator) {
  let result;
  frirstNumber = Number(frirstNumber);
  secondNumber = Number(secondNumber);
  
  switch (operator) {
    case "+":
      result = add(frirstNumber, secondNumber);
      break;
    
    case "-":
      result = substract(frirstNumber, secondNumber);
      break;

    case "*":
      result = multiply(frirstNumber, secondNumber);
      break;

    case "/":
      result = divide(frirstNumber, secondNumber);
      break;
  }
  return result;
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
  if (secondNumber == 0) return "Error";
  return frirstNumber / secondNumber;
}

function resetOperationDisplay() {
  operationDisplay.textContent = "";
}

function resetCalculator() {
  operationDisplay.textContent = "";
  resultDisplay.textContent = "";
  frirstNumber = undefined;
  secondNumber = undefined;
  operator = undefined;
}

function isOperator(buttonClicked) {
  if(buttonClicked == "+" || buttonClicked == "-" || buttonClicked == "*" || buttonClicked == "/" || buttonClicked == "=") {
    return true;
  } else {
    return false;
  }
}

function setTime() {
  let time = new Date()
  let timeDiv = document.querySelector(".time");
  timeDiv.textContent = `${time.getHours()}:${time.getMinutes()}`;
}
