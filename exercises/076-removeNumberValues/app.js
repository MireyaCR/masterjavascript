let obj = {
    a: 2,
    b: 'remaining',
    c: 4
};
function removeNumberValues(obj) {
    // your code here
    const propiedades = Object.keys(obj)
    for (let key of propiedades) {
        if (obj[key] 
          delete obj[key];
          }
            return obj;
   }

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }