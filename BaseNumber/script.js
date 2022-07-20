// Get Numbers From User
let userNormalNumber = +prompt("Please Enter A True Num")
let userBaseNumber = +prompt("Please Enter A Base Num")

// Create Higher Order Function
const baseCreator = (funcCreator) => {
    return funcCreator
}
// Create Base Converter
const converter = (normal , base) => {
    return  normal.toString(base)
}
// Create Result
const result = baseCreator(converter(userNormalNumber,userBaseNumber));
console.log(result);