
// Fetching Data Using fetch

async function ahmanData() {
    console.log("Starting Using Ahman's Data: ")

    const response = await fetch("https://jsonplaceholder.typicode.com/todos")

    const xog = await response.json();

    console.log("Result: 🤩🔥,", xog)
    
}
ahmanData();