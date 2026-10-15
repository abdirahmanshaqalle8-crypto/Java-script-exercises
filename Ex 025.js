
// Spread and Rest Operatorss
console.log("Spread Operators:")

const numbers = [1,2,3]

const genNumbers = [...numbers, 4,5,6] 

console.log(genNumbers)


console.log("------")
console.log("Rest Operators:")

function sum (...number) {
    return number.reduce((total, add) => total * add, 2)
}

console.log(sum(2,4,6,8))