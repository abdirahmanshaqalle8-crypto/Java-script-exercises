
const head = document.querySelector("#header");

console.log(head)

const name = document.querySelector(".name");

console.log(name);

const number = document.querySelector(".number");

console.log(number)

const city = document.querySelector(".city")

console.log(city)

console.log("--------")

function changeHeader() {
    head.textContent = "Welcome to the SpaceX company"
}

function changeElements() {
    name.innerHTML = "Name: Ahman Shaqalle Hugur"

    number.innerHTML = "Phone No: 63-7467972."

    city.innerHTML = "City: Hargeisa, Somaliland."
}