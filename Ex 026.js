// 
console.log("Synchronous: ")
function intelUserData() {
    alert ("Intel user data")
    return { name: "Abdirahman", id: 5,}
}

console.log("Starting the inter user data")

const intel = intelUserData()

console.log("User data", intel)

console.log("This message is blocked until user data is fetched")

// 
// 1000 ms = 1 second
console.log("--------")
console.log("Asynchronous: ")

function tesla (callback) {
    setTimeout(() => {
        const user = { name: "Abdirahman", id: 5}
        callback(user)
    }, 2000);
}

console.log("Starting to get to now this company")

tesla(function (user){
    console.log("Customer data", user)
})

console.log("This message suppose to show up immediately before the timeout")