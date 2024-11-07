const queue = ["Ray", "Fiki", "Fadhilla", "Farah"];

// come one customer
queue.push("Nabila");     

// come two more customers
queue.push("Maza", "Elsi");         

// last customer quit the queue and leaves
queue.pop();

// The first and second customers  completed their shopping
queue.shift();
queue.shift();

// new customer cut the queue line
queue.unshift("Tomi");

// Function to display the final queue
function updateQueue() {
    const queueDiv = document.getElementById("queue");
    queueDiv.innerHTML = "Final queue: " + queue.join(", ");
}
