function divideNumbers() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;

  if (num1 === "" || num2 === "") {
    document.getElementById("result").textContent = "Error: Please provide both numbers.";
    return;
  }


  if (!isNumeric(num1) || !isNumeric(num2)) {
    document.getElementById("result").textContent = "Error: Both inputs must be numeric values.";
    return;
  }


  if (parseFloat(num2) === 0) {
    document.getElementById("result").textContent = "Error: Cannot divide by zero.";
    return;
  }

  const result = parseFloat(num1) / parseFloat(num2);
  document.getElementById("result").textContent = `Result: ${result}`;
}

function isNumeric(value) {
  return !isNaN(value) && !isNaN(parseFloat(value));
}
