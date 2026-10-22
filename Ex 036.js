const colorSelect = document.querySelector("#color");
const colorPreview = document.querySelector(".preview");
const colorHistory = document.querySelector("#colorHistory");
const clearHistory = document.querySelector("#clearHistory");

colorSelect.addEventListener("input", function() {
    const selectedColor = colorSelect.value;

    colorPreview.style.backgroundColor = selectedColor;

    addColorToHistory(selectedColor);

})

function addColorToHistory(color) {
    const li = document.createElement('li');

    li.textContent = color;
    li.style.color = color;

    colorHistory.appendChild(li);
}

clearHistory.addEventListener('click', function() {
    if (colorHistory.lastElementChild) {
        colorHistory.lastElementChild.remove()
    } 
});