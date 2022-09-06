function getFullName(firstName, lastName) {
  // your code here
  var mensaje = {};
  mensaje = firstName + ' ' + lastName;
  return (mensaje);
}
let output = getFullName('Joe', 'Smith');
console.log(output); // --> 'Joe Smith'