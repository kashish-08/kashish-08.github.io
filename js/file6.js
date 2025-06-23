//objects
const student = {
    name: "kashish",
    age: 21,
}
console.log(student); //in key value pair
console.log(student.name)
console.log(student["name"]) //same output as above
console.log(student.age)
student.city = "jalandhar"
student.city = "rohtak" //WILL OVER-WRITE
console.log(student);
delete student.city
console.log(student)
const get_keys = Object.keys(student) //VERY USEFUL
console.log(get_keys); //o/p as an array
const get_values = Object.values(student)
console.log(get_values); //o/p as an array


