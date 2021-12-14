

const anObject = {
    a: "monirshimul",
    b: "monir",
    c: "shimul",
    d:[32,30]
}


anObject[Symbol.iterator] = function () {
    let properties = Object.keys(this);
    let count = 0;
    isDone = false;
    let next = () => {
        if (count >= properties.length) {
            isDone = true;
        }
        return { done: isDone, value: this[properties[count++]] };
    }
    return { next };
};

for (let obj of anObject) {
    console.log("values",obj)
}



for (let obj in anObject) {
    // console.log("values",anObject[obj])
    let checkLength = anObject[obj]
    console.log(checkLength)
    
}