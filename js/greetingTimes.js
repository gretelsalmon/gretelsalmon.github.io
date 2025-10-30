import { validTimes, greetings } from "./greetingData.js";

// When the "Set Greeting" button is clicked, run this function
document.getElementById("timeBtn").addEventListener("click", () => {

    // trim
    const userInput = document.getElementById("timeInput").value.toLowerCase().trim();

    // Get the paragraph element where the message will be displayed
    const out = document.getElementById("timeGreeting");

    // Clear any old styles before adding new ones -- reset
    out.classList.remove('time-ok', 'time-error');
    
    //  While Loop
    let i = 0;
    let found = false;

    while (i < validTimes.length) {
        if (userInput === validTimes[i]) {
            // Match found
            out.textContent = greetings[userInput];
            out.classList.add('time-ok');
            found = true;
            break; // stop loop once match is found
        }
        i++;
    }

    // If no valid match is found
    if (!found) {
        out.textContent = "Invalid input. Try typing morning, afternoon, or evening.";
        out.classList.add('time-error');
    }
});