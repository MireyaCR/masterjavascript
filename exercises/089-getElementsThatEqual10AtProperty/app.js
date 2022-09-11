// Write your function here
function getElementsThatEqual10AtProperty(cosa, key) {
    let arr = [];
    if (cosa[key] && typeof cosa[key] === 'object' && cosa[key].length) {
        for (let index = 0; index < cosa[key].length; index++) {
            const element = cosa[key][index];
            if (element === 10) {
                arr.push(cosa[key][index]);
            }
        }
    }
    return arr;
}
let obj = {
    key: [1000, 10, 50, 10, 20, 6, 10, 98, 10],
  };
    let output = getElementsThatEqual10AtProperty(obj, 'key');
    console.log(output); // --> [10, 10]
