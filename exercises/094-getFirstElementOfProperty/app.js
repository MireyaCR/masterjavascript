// Write your function here
function getFirstElementOfProperty(obj, key)
{
    let result=undefined
    if(obj && obj[key]&& typeof obj[key]=='object' && obj[key].length){
        result= obj[key][0]
        }
        return result
}
let obj = {
    key: [1, 2, 4]
  };
  let output = getFirstElementOfProperty(obj, 'key');
  console.log(output); // --> 1