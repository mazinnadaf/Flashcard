const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array
const length = flashcards.length

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    const content = document.getElementById("card-content");
    const card = flashcards[currentIndex];
    
    if (showingTerm == true) {
        content.innerText = card.term;
    } else {
        content.innerText = card.definition;
    }
}

// The rest of the code you will write is apart of event listeners
function next() {
    currentIndex += 1;
    if (currentIndex >= flashcards.length) {
        currentIndex = 0;
    }
    showingTerm = true;
    displayCard();
}

function previous() {
    currentIndex -=1;
    if (currentIndex < 0) {
        currentIndex = flashcards.length - 1; 
    }
    showingTerm = true;
    displayCard();
}

function flip() {
    if (showingTerm == true) {
        showingTerm = false
    } else {
        showingTerm = true
    }
    displayCard();
}

function add() {
    const newTerm = document.getElementById("new-term").value;
    const newDefinition = document.getElementById("new-definition").value;
    flashcards.push({ term: newTerm, definition: newDefinition });
}

document.getElementById("prev-btn").addEventListener("click", previous);
document.getElementById("next-btn").addEventListener("click", next);
document.getElementById("add-card-btn").addEventListener("click", add);
document.getElementById("flashcard").addEventListener("click", flip);

// This line will display the card when the page is refreshed
window.onload = displayCard;