function removeStringValuesLongerThan(num, obj) {
    // your code here
    const propiedades = Object.keys(obj)
  
    for (let key of propiedades) {
        if (typeof obj[key]== "string" && obj[key].length >num) {
          delete obj[key];
          }
      }
      return obj;
}
let obj = {
    name: 'Montana',
    age: 20,
    location: 'Texas'
  };
  removeStringValuesLongerThan(6, obj);
  console.log(obj); // { age: 20, location: 'Texas' }