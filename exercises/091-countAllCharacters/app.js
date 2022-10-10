// Write your function here
function countAllCharacters(cadena) {
    let obj = {}
    // let obj=map((cadena, index) => { 
    //     /* … */ })
    if (cadena) {
        for (let index = 0; index < cadena.length; index++) {
            const element = cadena[index];
            if (obj[element]) {
                obj[element]++;
            } else {
                obj[element]=1;
            }
        }
    }
    return obj
}
let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}

