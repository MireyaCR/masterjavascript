// Write your function here
function findMinLengthOfThreeWords(str1,str2,str3) {
    let uno = str1.length;
    let dos = str2.length;
    let tres = str3.length;
    let menor = Math.min(uno,dos,tres);
    return menor;
}
let output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1