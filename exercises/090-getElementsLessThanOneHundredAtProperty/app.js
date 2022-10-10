// Write your function here
function getElementsLessThan100AtProperty(obj,key) {
    let arr = [];
    if (obj[key] && typeof obj[key] === 'object' && obj[key].length) {
        for (let index = 0; index < obj[key].length; index++) {
            const element = obj[key][index];
            if (element < 100) {
                arr.push(element);
            }
        }
    }
    return arr;
}
let obj = {
    key: [1000, 20, 50, 500]
  };
  let output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output); // --> [20, 50]