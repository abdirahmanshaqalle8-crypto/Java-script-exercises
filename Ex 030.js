
console.log("More on callbacks:")
console.log("-----")

function operate(a, b, callback) {
    return callback(a,b)
}

function add(a, b) {
    return a + b;
}

function sub(c, d) {
    return c - d;
}

function mult(e, f) {
    return e * f;
}

function div(g, h) {
    return g / h;
}

console.log("Addition: ", operate(4, 4, add))

console.log("Subs: ", operate(20, 4, sub))

console.log("Multip: ", operate(5, 6, mult))

console.log("Division: ", operate(30, 2, div))