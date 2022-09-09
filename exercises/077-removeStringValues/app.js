let obj = {
    name: 'Sam',
    age: 20
}

function removeStringValues(obj) {
    // your code here
    const propiedades = Object.keys(obj)
    for (let key of propiedades) {
     if (typeof obj[key]=== "string") {
        delete obj[key];
        }
    }
    return obj;
}

removeStringValues(obj);
console.log(obj); // { age: 20 }
