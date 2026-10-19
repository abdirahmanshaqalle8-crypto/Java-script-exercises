const list = document.querySelector("#lists")



function addNew() {

    const newItem = document.createElement("li");

    newItem.textContent = "Puntland beaches"
    // newItem.textContent = "United States Of America"

    list.appendChild(newItem)

}

function removeMethod() {

    if(list.lastChild) {
            list.removeChild(list.lastChild)
    } else {
        alert ("Waa lagu kala baxay libaax!")
    }

}