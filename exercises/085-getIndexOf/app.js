// Write your function here
function getIndexOf(caracter, cadena) {
    let posi = -1;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === caracter && posi===-1) {
            posi = i;
        }        
    }
    return posi;
}
let output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2