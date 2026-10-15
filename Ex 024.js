
// Default Parameters

function calculateArea (width, height = width) {
    return width * height;
}

console.log(calculateArea(5, 10));
console.log(calculateArea(5))

console.log("Width:", 5, "Height:", 10, " Area:", calculateArea(5, 10));
console.log("Width:", 5, "Height:", 5, " Area:", calculateArea(5, 5));