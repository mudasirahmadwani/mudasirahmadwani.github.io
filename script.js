// script.js

const displayText = document.getElementById("displayText");

// Define an array of text options
const textOptions = [
    "Text option 1",
    "Text option 2",
    "Text option 3",
    "Text option 4"
];

let currentIndex = 0;

// Function to change the text automatically
function changeTextAutomatically() {
    displayText.textContent = textOptions[currentIndex];
    currentIndex = (currentIndex + 1) % textOptions.length;
}

// Set an interval to change the text every 3 seconds (adjust as needed)
setInterval(changeTextAutomatically, 3000);

// Initial text
changeTextAutomatically();