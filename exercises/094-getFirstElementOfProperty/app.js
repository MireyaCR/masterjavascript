// Write your function here
function getFirstElementOfProperty(obj, key)
{
    let letra= []
for (const key in obj) {
    if (Obj[key]){
         letra=(obj[key].chart(0));
    }
}return letra
}
let obj = {
    key: [1, 2, 4]
  };
  let output = getFirstElementOfProperty(obj, 'key');
  console.log(output); // --> 1