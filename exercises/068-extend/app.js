let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here
    const keysObj1 = Object.keys(obj1)
    const keysObj2 = Object.keys(obj2)
  
    for (let key of keysObj2) {
      if (!keysObj1.includes(key)) {
        obj1[key] = obj2[key]
        }
    }
    return obj1;
}