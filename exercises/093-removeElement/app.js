// Write your function here
function removeElement(arr, discarder) {
 
  const filterarray = arr.filter((element)=> element!=discarder)
 
  return filterarray;
}
let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]