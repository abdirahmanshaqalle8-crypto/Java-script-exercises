
function changeImage() {

    const img = document.querySelector("#image")

    const url = prompt("Please enter your image url")
    const borderColor = prompt("Please enter your border color:")
    const width = prompt("Please enter the width of the image (in pixels):")
    const height = prompt("Please enter the height of the image (in pixels):");
    const borderRadius = prompt("Please enter the border radius (in pixels):");


    img.setAttribute("src", url);
    img.style.border = `2px solid ${borderColor}`
    img.style.width = `${width}px`;
    img.style.height = `${height}px`;
    img.style.borderRadius = `${borderRadius}px`;
    img.style.padding = "10px";
    img.style.backgroundColor = '#3e3a41'

}