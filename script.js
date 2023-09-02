
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
		</script>
		<script>
    var textArray = ["Text 1", "Text 2", "Text 3"];
    var currentIndex = 0;
    var currentText = ""; // Current text being typed
    var charIndex = 0; // Index of the current character

    function typeText() {
        var typedTextElement = document.getElementById("typedText");

        if (charIndex < textArray[currentIndex].length) {
            currentText += textArray[currentIndex].charAt(charIndex);
            typedTextElement.textContent = currentText;
            charIndex++;
            setTimeout(typeText, 50); // Adjust the typing speed as needed
        } else {
            // Typing is complete, wait for a moment and then erase
            setTimeout(eraseText, 1000); // Wait for 1 second before erasing
        }
    }

    function eraseText() {
        var typedTextElement = document.getElementById("typedText");

        if (currentText.length > 0) {
            currentText = currentText.slice(0, -1);
            typedTextElement.textContent = currentText;
            setTimeout(eraseText, 30); // Adjust the erasing speed as needed
        } else {
            // Erasing is complete, move to the next text
            currentIndex = (currentIndex + 1) % textArray.length;
            setTimeout(typeText, 500); // Wait for 0.5 second before typing the next text
        }
    }

    // Start typing the first text
    typeText();
