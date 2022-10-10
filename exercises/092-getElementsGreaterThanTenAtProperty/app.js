// Write your function here
function getElementsGreaterThan10AtProperty(obj, key) {
   
     const array= obj?.[key]?.filter?.(value => value > 10)
     return array?array:[]
};
    
let obj = {
    key: [1, 20, 30]
  };
  let output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output); // --> [20, 30]