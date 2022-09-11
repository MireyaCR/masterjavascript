// Write your function here
function getAverageOfElementsAtProperty(obj,key) {
    var sum=0;
    var i=0;
    if (obj[key] && typeof obj[key]=== "object" && obj[key].length) {
        while (i < obj[key].length) {            
             sum += obj[key][i];
             i++;
        }
        console.log(sum)
        sum = sum/obj[key].length;
    }
    return sum;
}      

let obj = {
    key: [1, 2, 3]
  };
  let output = getAverageOfElementsAtProperty(obj, 'key');
  console.log(output); // --> 2