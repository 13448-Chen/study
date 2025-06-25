const display = document.getElementById("show-answer");
const calculatinputanswer = document.getElementById("calculateInput-answer");
var calculateintput = "";
var calStatus = 0;
var displayHolder = "";
var perviousAnswerCheck = "";

//    displayHolder = " ";     displayHolder = valueHolder;

function appendToDisplay(input) {
  //this part will make sure the calculation will keep on going if we click operators after we got the answer.
  //this part is after calculat
  if (calStatus === 1) {
    if (
      input == "+" ||
      input == "-" ||
      input == "x" ||
      input == "÷" ||
      input == "."
    ) {
      displayHolder = valueHolder;
      if (display.value === "0") {
        displayHolder += input;
        display.value = displayHolder + "im1+" + calStatus;
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
        displayHolder += input;
        display.value = displayHolder + "im2+" + calStatus;
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
      }
    }
  } else if (calStatus === 0) {
    //this part is before calculate
    if (display.value === "0") {
      displayHolder += input;
      display.value = displayHolder + "im3+" + calStatus;
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
      displayHolder += input;
      display.value = displayHolder + "im4+" + calStatus;
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
    }
  }
}

/*
  } else {
    alert("you need to enter a number as the first input");
  }
}*/

function clearDisplay() {
  display.value = "0";
  calculateintput = "";
  calculatinputanswer.value = calculateintput;
  displayHolder = "";
  calStatus = 0;
}

function calculate() {
  if (
    display.value === " " ||
    display.value === "0" ||
    display.value === 0 ||
    display.value === "undefine"
  ) {
    display.value = "0";
    calculateintput.value = "0";
    calculatinputanswer.value = "calStatus = " + calStatus; //temp
  } else {
    var valueHolder = eval(calculateintput);
    display.value = valueHolder;
    calculatinputanswer.value = eval(calculateintput);
    //calculateintput = "";
    calculateintput = valueHolder;
    calculatinputanswer.value =
      calculateintput + "+ calculateintput 2" + "calStatus = " + calStatus;
    calStatus = 1;
    displayHolder = valueHolder;
  }
}
