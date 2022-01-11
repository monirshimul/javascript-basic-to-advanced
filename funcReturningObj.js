

const objBearer = ()=> {
    return {
        objFunc: ()=> {
            return ()=> ["monir", "shimul"]
        },
        b: 2
    }
}

let outSider = objBearer().objFunc();
console.log(outSider());