
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

async function SpaceXUser() {
    try {
        // SuccessStatus
        const user = await SpaceX();
        console.log(user)
    } catch (error) {
        // Errors
        console.log(error)
    }
}

SpaceXUser();