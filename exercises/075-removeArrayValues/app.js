function removeArrayValues(obj) {
    // your code here
    
    const propiedades = Object.keys(obj)
    for (let key of propiedades) {
     if (typeof obj[key]=== "object") {
        delete obj[key];
        }
    }
    return obj;
}
let obj = {
    a: [1, 3, 4],
    b: 2,
    c: ['hi', 'there']
}
removeArrayValues(obj);
console.log(obj); // --> { b: 2 }