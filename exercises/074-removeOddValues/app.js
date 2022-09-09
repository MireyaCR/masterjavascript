function removeOddValues(obj) {
    // your code here
    const propiedades = Object.keys(obj)
  
    for (let key of propiedades) {
        if (obj[key]%2!=0) {
          delete obj[key];
          }
      }
      return obj;
}