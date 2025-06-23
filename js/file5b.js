//arrow function
// greet() //wrong - cuz no hoisting in arrow functions
const greet = () => {
    console.log("arrow function")
}
greet()

const add = (a,b) => {
    return a+b
}
console.log(add(11,12))

//spread operator
const fun = (...args) => {
    console.log(args)
}
fun(2,5,"snow",90, true,14)