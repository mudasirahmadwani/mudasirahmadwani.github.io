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
let charIndex = 0;

// Function to change the text automatically with a cursor-style animation
function changeTextAutomatically() {
    const currentText = textOptions[currentIndex];
    displayText.textContent = currentText.substring(0, charIndex);
    charIndex++;
    if (charIndex > currentText.length) {
        charIndex = 0;
        currentIndex = (currentIndex + 1) % textOptions.length;
    }
}

// Set an interval to change the text every 3 seconds (adjust as needed)
setInterval(changeTextAutomatically, 3000);

// Initial text
changeTextAutomatically();
