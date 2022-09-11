// Write your function here
function areValidCredentials(nom, cseña) {
    var comprueba = false; 
    if (nom.length > 3 && cseña.length >=8){
        comprueba = true;
       }
    return comprueba; 
}
let output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> verdadero