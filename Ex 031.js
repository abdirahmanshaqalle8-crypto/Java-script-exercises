
// Introduction to HTTP Requests
// Get Method

async function serverData() {
    try {

        console.log("Starting fetching data from server: ")

        const response = await fetch("https://jsonplaceholder.typicode.com/users")

        if (!response.ok) {
            throw new Error(`HTTP error! status ${response.status}`)
        }

        const data = await response.json();

        console.log(data)
    
    } catch (error) {
        console.log(error)
    }
}

serverData();