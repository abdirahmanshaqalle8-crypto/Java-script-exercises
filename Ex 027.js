// 
console.log("Introduction to Promises: ")

function SpaceX() {
    return new Promise ((resolve, reject) => {

        setTimeout(() => {
            const success = true;
            if (success == true) {
                resolve({ name: "Abdirahman shaqalle", id: 10})
            } else {
                reject("Failed to enter spaceX page")
            }
        }, 2000);
    })
}

SpaceX()
    .then((data) => console.log("My data", data))
    .catch((error) => console.log(error))