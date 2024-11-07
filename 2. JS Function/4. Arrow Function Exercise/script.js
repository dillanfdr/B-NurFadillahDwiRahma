const sayHello = name => `Hello ${name}!`;

const greetingDiv = document.getElementById("greeting");
const greetButton = document.getElementById("greetButton");
const nameInput = document.getElementById("nameInput");

greetButton.onclick = () => {
    const name = nameInput.value.trim(); 
    greetingDiv.innerText = name ? sayHello(name) : "Please enter a name.";
};
