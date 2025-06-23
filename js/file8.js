//array methods
const points = [2,5,4,2,8,0,7,1,9,3]
// points.forEach(value => {
//     console.log(value);
// })
points.forEach((a, b, c)=>{
    console.log(a, b, c);
    console.log(c[b]); //all array elements
})
//first parameter(here, a) always VALUE, 2nd parameter(i.e. b, here) is always the INDEX and 3rd parameter(here, c) is always the ARRAY..