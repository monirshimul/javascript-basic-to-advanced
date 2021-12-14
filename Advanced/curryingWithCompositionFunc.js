

// simple Currying===========
//Currying takes a function that receives more than one parameter
// and breaks it into a series of unary (one parameter) functions

const makeCurry = paramOne => paramTwo => paramThree =>{
    console.log("All parametre,", paramOne, paramTwo, paramThree)
}

console.log(makeCurry(1)(2)(3))

let a = makeCurry("One")
console.log("First",a)
a = a("Two")
console.log("Second",a)
a = a("three")
console.log("Third",a)
