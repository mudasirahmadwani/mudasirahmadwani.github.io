<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name - Academic Research</title>
    <link rel="stylesheet" href="styles.css"> <!-- You can add your custom CSS here -->
    <style>
        /* Add inline CSS for specific styling, if necessary */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        header {
            background-color: #444;
            color: #fff;
            text-align: center;
            padding: 20px 0;
        }
        header h1 {
            margin: 0;
            font-size: 36px;
        }
        header p {
            font-size: 18px;
        }
        nav {
            background-color: #444;
            text-align: center;
        }
        nav a {
            text-decoration: none;
            color: #fff;
            padding: 10px 20px;
        }
        nav a:hover {
            background-color: #555;
        }
        main {
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
        }
        footer {
            text-align: center;
            background-color: #333;
            color: #fff;
            padding: 10px 0;
        }
    </style>
</head>
<body>
    <header>
    <img src="D:\R E S E A R C H @ PSU-2022\Author_pics\Mudasir.png" alt="Dr. Mudasir Ahmad Wani" width="150" height="150">
    <h1>Dr. Mudasir Ahmad Wani</h1>
    <p> <div id="changingText"><span id="typedText"></span></div> </p>
</header>

    <nav>
        <a href="#about">About</a>
        <a href="#research">Research</a>
        <a href="#projects">Projects</a>
        <a href="#publications">Publications</a>
        <a href="#teaching">Teaching</a>
        <a href="#contact">Contact</a>
    </nav>

    <main>
  // ///////////////////////////////////////////////////////// Anout me ///////////////////////////////////////////////////
        <section id="about">
            <h2>About</h2>
            <p>Mudasir Ahmad Wani is currently working as a Researcher in Natural Language Processing (NLP) at Prince Sultan University, KSA. He has served as a Lecturer and Researcher at the Department of Information Security and Communication Technology (IIK) at the Norwegian University of Science and Technology (NTNU), Norway. He pursued his postdoctoral research at the Norwegian Biometrics Laboratory, NTNU, Norway and He is the recipient of the Alain Bensoussan Fellowship award under the European Research Consortium for Informatics and Mathematics (ERCIM), Sophia Antipolis Cedex, France. He obtained his Ph.D. from Jamia Millia Islamia (A Central University), New Delhi, India in 2019 in Computer Science.  He holds a Master's in Computer Applications (MCA) and M.Phil. (Data Mining) from the University of Kashmir (UoK) in 2012 and 2014 respectively. His research focuses on the extraction and analysis of social data, and the application of different statistical, machine/deep learning, and NLP techniques in developing prediction models.</p>
        </section>


        <section id="research">
            <h2>Research</h2>
            <p>Highlight your research projects, publications, and any other relevant information.</p>
        </section>

        
        <section id="publications">
    <h2>Publications</h2>
    <ul>
        <li>Publication 1: Title, Authors, Journal/Conference, Year</li>
        <li>Publication 2: Title, Authors, Journal/Conference, Year</li>
        <!-- Add more publications as needed -->
    </ul>
        </section>



<section id="projects">
    <h2>Projects</h2>
    <ul>
        <li>Project 1: Title, Description, Year</li>
        <li>Project 2: Title, Description, Year</li>
        <!-- Add more projects as needed -->
    </ul>
</section>

<section id="teaching">
    <h2>Teaching</h2>
    <p>Provide information about the courses you have taught or are currently teaching.</p>
</section>
        
        <section id="contact">
            <h2>Contact</h2>
            <p>You can reach me at <a href="mailto:youremail@example.com">youremail@example.com</a>.</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2023 Your Name</p>
    </footer>



<script>
    var textArray = ["Academic Researcher", "Editor", "Reviewer", "Teacher"];
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
            charIndex = 0; // Reset charIndex
            currentText = ""; // Reset currentText
            setTimeout(typeText, 500); // Wait for 0.5 second before typing the next text
        }
    }

    // Start typing the first text
    typeText();
</script>




    
</body>
</html>
