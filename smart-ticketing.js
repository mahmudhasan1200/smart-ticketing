document.getElementById('Scroll-button').addEventListener('click', function(){
    window.scrollBy({
        top: 1700,
        behavior:"smooth"
    });
});

// button selection 
let clickedCount = 0;

const maxClicks = 4;

document.querySelectorAll(".seat").forEach(button =>{
    button.addEventListener('click', function(){
        if(!this.classList.contains("clicked") && clickedCount < maxClicks) {
            this.classList.add("selected");

            clickedCount++

            if(clickedCount === maxClicks){
                document.getElementById("targetElement").classList.remove("hidden");
                alert("Maximum of four seats are clicked");
                disableAllButtons();
            }
        }
    });
});
function disableAllButtons(){
    document.querySelectorAll(".seat").forEach(button => {
        button.disabled = true;
    });
}

// Track buttons that have been clicked
const clickedButtons = new Set();

// Function to determine if a screen is empty
function findEmptyScreen() {
    for (let i = 1; i <= 4; i++) {
        const displayArea = document.getElementById(`displayArea${i}`);
        if (displayArea.textContent.trim() === "") {
            return displayArea;
        }
    }
    return null;
}

// Add event listeners to all buttons
document.querySelectorAll(".showDataButton").forEach(button => {
    button.addEventListener("click", function() {
        // Check if the button has already been clicked
        if (clickedButtons.has(this)) {
            return; // Do nothing if this button has already been clicked
        }

        // Get the data from the button's data attribute
        const data = this.getAttribute("data-info");

        // Find an empty screen to display the data
        const emptyScreen = findEmptyScreen();
        if (emptyScreen) {
            emptyScreen.textContent = data;
            // Mark this button as clicked
            clickedButtons.add(this);
        } else {
            alert("All screens are full!");
        }
    });
});

// value add 
// // Initialize the sum to 0
let sum = 0;

// Add event listeners to all buttons with the class 'valueButton'
document.querySelectorAll(".valueButton").forEach(button => {
    button.addEventListener("click", function() {
        // Check if the button has already been clicked
        if (!this.classList.contains("preesed")) {
            // Get the value from the button's 'value' attribute
            const value = parseInt(this.getAttribute("data-value"));

            // Add the value to the sum
            sum += value;

            // Update the display area with the new sum
            document.getElementById("sumDisplay").textContent = `BDT ${sum}`;

            // Mark the button as clicked
            this.classList.add("preesed");
        }
    });
});


// Initialize counts
let clickedCounts = 0;
const totalButtons = document.querySelectorAll(".clickableButton").length;
let remainingCount = totalButtons;

// Update the display areas
function updateDisplay() {
    document.getElementById("clickedCount").textContent = clickedCounts;
    document.getElementById("remainingCount").textContent = remainingCount;
}

// Add event listeners to all buttons with the class 'clickableButton'
document.querySelectorAll(".clickableButton").forEach(button => {
    button.addEventListener("click", function() {
        // Check if the button has already been clicked
        if (!this.classList.contains("clicked")) {
            // Mark the button as clicked
            this.classList.add("clicked");

            // Increment the clicked count and decrement the remaining count
            clickedCounts++;
            remainingCount--;

            // Update the display areas
            updateDisplay();
        }
    });
});

// Initial display update
updateDisplay();


// dicount of extra ticket 
const discountCodes = {
    "NEW15":0.15,
    "COUPLE20":0.20
};

document.getElementById("applyDiscount").addEventListener("click", function(){
    const discountCode = document.getElementById("discountCode").value.toUpperCase();
    if(discountCodes[discountCode]){
        const discount = discountCodes[discountCode];
        const discountedSum = sum - (sum * discount);
        document.getElementById("discountedSumDisplay").textContent = `BDT ${discountedSum}`;

        document.getElementById("targetElement").classList.add("hidden");
    } else {
        alert("Invalid discount code!");
    }
});

function checkNumberLength(){
    const number = document.getElementById("numberInput").value;
    if(number.length === 11){
        document.getElementById("openButton").classList.remove("hidden");
    } else {
        document.getElementById("openButton").classList.add("hidden");
    }
}
document.getElementById("numberInput").addEventListener("input", checkNumberLength);

// add class and remove class 

function press(){
    hideElementById("header");
    hideElementById("main");
    hideElementById("cuponSection");
    hideElementById("footer");
    showElementById('suuccessfullMessage');

}