function countNumberOfKeys(obj) {
    // your code here
   // let size=0;
   // for(let k in obj) {
    //size++;
 // }
//return size;
return Object.keys(obj).length;
}
let obj = {
  a: 1,
  b: 2,
  c: 3,
  //d: 4,
};
let output = countNumberOfKeys(obj);
console.log(output); // --> 3