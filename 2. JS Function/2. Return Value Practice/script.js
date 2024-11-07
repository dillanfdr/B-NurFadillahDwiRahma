function multiply(a, b) {
  return a * b; 
}

function showResult() {
  const num1 = Number(document.getElementById("num1").value); 
  const num2 = Number(document.getElementById("num2").value); 
  
  const result = multiply(num1, num2); 
  document.getElementById("result").textContent = "Result: " + result; 
}
