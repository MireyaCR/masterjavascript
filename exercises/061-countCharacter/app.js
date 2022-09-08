function countCharacter(str, char) {
    // your code here
    
    let contador = 0;
    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        if (element===char)
        contador++;
    }
    return contador;
}