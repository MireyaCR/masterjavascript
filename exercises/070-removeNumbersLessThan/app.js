let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLessThan(num, obj) {
    // your code here
    const propiedades = Object.keys(obj)
  
    for (let key of propiedades) {
        if (obj[key]<num) {
          delete obj[key];
          }
      }
      return obj;
}
