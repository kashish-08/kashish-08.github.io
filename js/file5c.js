//callback function
// let f1 = () => {
//     console.log("This is f1 function");
// }
// let main = (x) => {
//     x();
// }
// main(f1)

// let main = (x) => {
//     x()
// }
// main(()=>{
//     console.log("important");
// })

function f1(x){
    console.log("value is:", x);
}
const main = () => f1(5);
main();