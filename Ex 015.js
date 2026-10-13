// 

console.log ("Properties and Values of each person:")
const friend = { name: "Najiib", age: 22, city: "Burao"};

for (const key in friend) {
    console.log(key + ": " + friend[key]);
}
console.log ("----")

// 

const closeFriend = { name: "Yuusuf", age: 22, city: "Burao"};

for (const key in closeFriend) {
    console.log(key + ": " + closeFriend[key])
}
console.log ("----")

// 

const childhoodFriend = { name: "Abdiraxiin", age: 23, city: "Burao"};

for (const key in childhoodFriend) {
    console.log(key + ": " + childhoodFriend[key])
}
