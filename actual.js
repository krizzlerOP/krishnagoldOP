const password = prompt("Enter password:");
if (password === "krishnaop") { // Password changed to "krishnaop"
    const tapButton = () => {
        const button = document.querySelector('div._tapArea_njdmz_15'); // Replace this if necessary
        if (button) {
            button.click();
        }
    };
    const getRandomTaps = () => Math.floor(Math.random() * (270 - 250 + 1)) + 250;
    const interval = 100; // Time between taps in milliseconds
    const waitTime = 7 * 60 * 1000; // 7 minutes in milliseconds
    const autoTap = () => {
        let count = 0;
        const maxTaps = getRandomTaps(); // Get a random number of taps between 250 and 270
        const tapInterval = setInterval(() => {
            if (count < maxTaps) {
                tapButton();
                count++;
            } else {
                clearInterval(tapInterval);
                setTimeout(autoTap, waitTime); // Wait for 7 minutes before starting again
            }
        }, interval);
    };
    autoTap(); // Start the auto-tapping
} else {
    console.log("Access denied.");
}
