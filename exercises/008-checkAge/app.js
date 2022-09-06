function checkAge(name, age) {
  // your code here
  var mensaje = {};
  if (age >= 21) {
    mensaje = 'Welcome, ' + name + '!';
  } else {
    mensaje = 'Go home, ' + name + '!';
  }
  return (mensaje);
}
let output = checkAge('Adrian', 21);
console.log(output); // --> '¡Welcome Adrian!'