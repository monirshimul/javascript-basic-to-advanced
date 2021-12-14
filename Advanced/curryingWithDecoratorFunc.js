
const addCustomer = fun => (...args) =>{
    //console.log([...args])
    return fun([...args][0])([...args][1])([...args][2])
}
// curry Function====
let cusArr = []
const giveCustomer = name=> email=>age=>{
    
    let details = {
        name,
        email,
        age
    }
    
    cusArr.push(details)
    return cusArr;
}

const provide = addCustomer(giveCustomer)
console.log(provide("monir", "shimul@gmail.com", 25));
console.log(provide("nahid", "shimul@gmail.com", 26));
console.log(provide("mehedi", "shimul@gmail.com", 27));