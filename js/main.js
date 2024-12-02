// Quotes Array
const quotes = [
    { text: "It's not what happens to you, but how you react to it that matters.", author: "Epictetus" },
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" }
];

// Selecting the button and quote elements
const quoteBtn = document.getElementById('new-quote');
const quoteElement = document.getElementById('quote');

// Button click event
quoteBtn.addEventListener('click', () => {
    // Get a random quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    
    // Update the quote
    quoteElement.innerHTML = `"${randomQuote.text}"<span>--${randomQuote.author}</span>`;
});
