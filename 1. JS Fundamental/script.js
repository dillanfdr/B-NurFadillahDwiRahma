function changeBackground() {
  let mood = document.getElementById("moodSelector").value;
  let message = document.getElementById("message");

  let moodMessage = "";

  switch (mood) {
      case "happy":
          document.body.style.backgroundColor = "yellow";
          moodMessage = "Stay positive and keep smiling!";
          break;
      case "sad":
          document.body.style.backgroundColor = "blue";
          moodMessage = "It's okay to feel sad. Take some deep breaths.";
          break;
      case "excited":
          document.body.style.backgroundColor = "orange";
          moodMessage = "Embrace the excitement! What's your next adventure?";
          break;
      case "relaxed":
          document.body.style.backgroundColor = "lightgreen";
          moodMessage = "Take a moment to relax and recharge.";
          break;
      case "tired":
          document.body.style.backgroundColor = "darkgray";
          moodMessage = "Rest is important. Take it easy.";
          break;
      default:
          document.body.style.backgroundColor = "white";
          moodMessage = "Please select a mood.";
  }

  // Display message
  message.innerText = moodMessage;

  // Display mood and message in console
  console.log("Selected Mood:", mood);
  console.log("Message:", moodMessage);

  // Show alert
  alert(`Mood: ${mood}\nMessage: ${moodMessage}`);
}
