function changeInput() {
  const InputValue = document.getElementById("redCrossTgtInput").value;
  const inputValueAfterCalculated = document.getElementById(
    "inputValueAfterCalculated"
  );
  inputValueAfterCalculated.textContent = InputValue * 2.25;
}

function CalculateSecond() {
  const Input1Value = document.getElementById("changeSecondFirstInput").value;
  const Input2Value = document.getElementById("changeSecondSecondInput").value;
  const calculation = 2.26 * Input1Value * Input2Value ** 2;

  const secondOutputAfterCalculated = document.getElementById(
    "secondOutputAfterCalculated"
  );
  secondOutputAfterCalculated.textContent = calculation;
  console.log(calculation);
}
function calculate() {
  var num1 = parseFloat(document.getElementById("number1").value);
  var num2 = parseFloat(document.getElementById("number2").value);
  if (!isNaN(num1) && !isNaN(num2)) {
    var result = num1 + num2; // Example calculation (you can change the formula)
    document.getElementById("result").value = result;
  } else {
    alert("Please enter valid numbers!");
  }
}