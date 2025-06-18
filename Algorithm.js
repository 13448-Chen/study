const display = document.getElementById("show-answer");
const calculatinputanswer = document.getElementById("calculateInput-answer");
var calculateintput = "";

function appendToDisplay(input) {
  if (display.value === "0") {
    display.value = input;
    if (input == "x") {
      input = "*";
      calculateintput += input;
      calculatinputanswer.value = calculateintput;
    } else if (input == "÷") {
      input = "/";
      calculateintput += input;
      calculatinputanswer.value = calculateintput;
    } else {
      calculateintput += input;
      calculatinputanswer.value = calculateintput;
    }
  } else {
    display.value += input;
    if (input == "x") {
      input = "*";
      calculateintput += input;
      calculatinputanswer.value = calculateintput;
    } else if (input == "÷") {
      input = "/";
      calculateintput += input;
      console.log = calculateintput;
      calculatinputanswer.value = calculateintput;
    } else {
      calculateintput += input;
      calculatinputanswer.value = calculateintput;
    }
  }
}

function clearDisplay() {
  display.value = "0";
  calculateintput = "";
  calculatinputanswer.value = calculateintput;
}

function calculate() {
  display.value = eval(calculateintput);
}
