//passing arguments in function and returning
function greet(std){
    console.log(`Good Morning, ${std}`)
}
greet("Kashish") //argument

function add(a,b){
    return `sum of ${a} ans ${b} is: `+ (a+b)
}
let result = add(5,6)
// console.log(`sum is: ${result}`) //error because a and b are not defined in this scope
console.log(result) //output: sum is 11

// console.log(sum[1,2,3,4,5])
function add2(){
    console.log(arguments)
    console.log(arguments.length)
}
add2(1,4,7,12,8,20,4,55)