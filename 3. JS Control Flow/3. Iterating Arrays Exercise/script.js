const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

const peopleListDiv = document.getElementById("people-list");

for (let i = 0; i < people.length; i++) {
  peopleListDiv.innerHTML += people[i].toUpperCase() + "<br>";
}
