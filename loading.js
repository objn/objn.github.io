// Select the button and the h1 element
const button = document.getElementById('buttoncli');
const outputcli = document.getElementById('outputcli');

// Add a click event listener to the button
button.addEventListener('click', handleClick);
document.getElementById('inputcli').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleClick();
    }
});

async function handleClick() {
    // Get the text from an input field
    const inputText = document.getElementById('inputcli').value;

    // Generate random text of length 2048 characters
    const randomText = Array.from({ length: 2048 }, () =>
        String.fromCharCode(32 + Math.floor(Math.random() * 95))
    ).join('');

    // Combine input text and random text
    const combinedText = inputText + randomText;

    // Encrypt the combined text using SHA-256
    const encoder = new TextEncoder();
    const data = encoder.encode(combinedText);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    // Add a random bad joke
    const jokes = [
        "Why don't programmers like nature? It has too many bugs.",
        "Why do Java developers wear glasses? Because they don't C#.",
        "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
        "Why do programmers prefer dark mode? Because light attracts bugs.",
        "What is a programmer's favorite hangout place? The Foo Bar.",
        "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings.",
        "Why do Python programmers prefer snakes? Because they love Python.",
        "Why did the programmer quit his job? He didn't get arrays.",
        "What do you call 8 hobbits? A hobbyte.",
        "Why was the computer cold? It left its Windows open.",
        "Why did the programmer go broke? Because he used up all his cache.",
        "What do you call a programmer from Finland? Nerdic.",
        "Why do programmers hate nature? It has too many root directories.",
        "Why was the computer tired when it got home? It had a hard drive.",
        "Why do programmers prefer using the terminal? Because they hate windows.",
        "What do you call a programmer who fixes bugs on a farm? A debugger.",
        "Why did the programmer cross the road? To debug the other side.",
        "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.",
        "Why was the JavaScript developer bad at relationships? He kept getting undefined.",
        "Why did the computer keep freezing? It left its Windows open."
    ];
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

    // Change the text content of the h1 element
    outputcli.textContent = `Hash: ${hashHex}\nJoke: ${randomJoke}`;
}