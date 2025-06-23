//template literal
let a = 110
let b = 120
if(a>b){
    console.log(`${a} is greater`)
}
else{
    console.log(`${b} is greater`)
}

let c
if (c) console.log("means undefined variables returns true")
else console.log("means undefined variables returns false")

let d = null
if(d) console.log("null returns true")
else console.log("null returns false")

let v1=10
let v2=20
let v3=15
if(v1>v2 && v1>v3) console.log("v1 is greatest")
else if(v2>v1 && v2>v3) console.log("v2 is greatest")
else console.log("v3 is greatest")

let x=15
let y=10
// x>y ? console.log("x is greater") : console.log("y is greater")
x>y && console.log("x is greater")

let v
let take = v || 10 //agar v is assigned a value toh woh lega nhi toh 10 liya jayega
console.log(take)

let vv = 99
let value = vv ?? 100
console.log(value)
