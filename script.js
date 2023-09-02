    // Array of text to cycle through
    var textArray = ["Text 1", "Text 2", "Text 3"];
    var currentIndex = 0; // Index of the currently displayed text

    // Function to update the text
    function changeText() {
        document.getElementById("changingText").textContent = textArray[currentIndex];
        currentIndex = (currentIndex + 1) % textArray.length; // Loop through the array
    }

    // Call the changeText function to start text cycling
    setInterval(changeText, 2000); // Change text every 2 seconds (adjust the time as needed)
