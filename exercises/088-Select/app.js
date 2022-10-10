// Write your function here
function select(arr,obj) {
    let nobj = {};
       for(let key of arr) {
          if (obj[key]) {
            nobj[key] = obj[key];
            }
        }
        return nobj;
    }
    let arr = ['c', 'f'];
  let obj = {
    a: 5,
    b: 2,
    c: 4,
    f: 6,
  };
let output = select(arr, obj);
console.log( output); // --> { a: 1, c: 3 }