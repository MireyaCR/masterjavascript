// Write your function here
function findMaxLengthOfThreeWords(str1,str2,str3) {
    let uno = str1.length;
    let dos = str2.length;
    let tres = str3.length;
    let mayor = Math.max(uno,dos,tres);
    return mayor;
}