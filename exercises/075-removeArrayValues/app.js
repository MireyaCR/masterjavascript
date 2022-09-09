function removeArrayValues(obj) {
    // your code here
    
    const propiedades = Object.keys(obj)
  
    for (let key of propiedades) {
        if (obj[key]==[]) {
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