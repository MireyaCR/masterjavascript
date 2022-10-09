// Write your function here
function getElementsGreaterThan10AtProperty(obj, key) {
   
     let array =obj.map(element => {(element && typeof element === 'object' && element.lenght)?
          arrayvacio= obj[key].filter(value => value > 10) : arrayvacio=[]
});
    //Si el array no contiene ningún elemento mayor a 10, debería retornar una array vacío.
    //Si la propiedad en esa key dada no es un array, debería retornar una array vacío.
    //Si no hay ninguna propiedad en dicha key, debería retornar una array vacío.
    return arrayvacio;
}
let obj = {
    key: [1, 20, 30]
  };
  let output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output); // --> [20, 30]