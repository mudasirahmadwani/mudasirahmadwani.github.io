// Array of messages to display
const messages = [
    "Message 11",
    "Message 2",
    "Message 3",
    "Message 4"
];

// Get the element where the text will change
const changingText = document.getElementById("changingText");

// Initialize index to 0
let index = 0;

// Function to change the text
function changeText() {
    changingText.textContent = messages[index];
    index = (index + 1) % messages.length; // Loop through messages
}

// Call changeText function every 2 seconds (2000 milliseconds)
setInterval(changeText, 2000);