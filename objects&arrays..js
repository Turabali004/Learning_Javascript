const arr = [1,2,3,4,5,6]
// console.log(arr.slice(1,3))
// console.log(arr)
// console.log(arr.splice(2,5))
// console.log(arr)

// /////////////////////-objects
const symbol = Symbol("key1")
const person1 = {
    name: "John",
    age: 20,
    [symbol]: "mykey1",
    city: "New York",
    nationality: ["American", "Canadian"],
}
const person1Businessess = {
    Fname: "Game and Geeks",
    related: "computer accessories",
    cityBusiness: "Lahore",
}

// console.log(person1["name"])
// console.log(typeof person1["nationality"])
// console.log(typeof person1[symbol])
// console.log(person1.length)

// person1.coutry = "usa"
// console.log(person1["country"])

// console.log({...person1, ...person1Businessess});
// console.log(Object.values({...person1, ...person1Businessess}));


// person1.greeting = function(){ 

// console.log(person1.greeting())



person1.fatherName = () => {
    return "Father's name is Robert"
}
// console.log(
//     person1.fatherName()
// );



