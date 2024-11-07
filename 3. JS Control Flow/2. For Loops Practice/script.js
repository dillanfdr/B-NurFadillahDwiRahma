const countdownDiv = document.getElementById("countdown");

for (let i = 25; i >= 0; i -= 5) {
  countdownDiv.innerHTML += i + "<br>";
}
