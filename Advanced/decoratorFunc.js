

// Inner Function for the Decorator==========>
let sum = (...args)=>{
    return [...args].reduce((acc, num)=> acc + num);
}

// lets define function decorator v1============>

// const decoratorFunction = (func)=>{
//     return (...args)=>{
//         return func(...args)
//     }
// }

const decoratorFunctionShort = (func)=>(...args)=>func(...args)

sum = decoratorFunctionShort(sum)
console.log(sum(1,2,5))


// let a = decoratorFunction(sum)
// console.log(a(1,2,3))


