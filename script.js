let userInput = document.getElementById("userInput");
let userOuput = document.getElementById("userOutput");
let expression = "";

function press(num) {
  userInput.value += num;
}

function equal() {
  userOutput.value = eval(userInput.value);
}

function erase() {
  expression = "";
  userInput.value = expression;
  userOutput.value = expression;
}

function del() {
  userInput.value = userInput.value.substring(0, userInput.value.length - 1);
}
