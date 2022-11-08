var sensorA = Buffer.alloc(20);
var sensorB = Buffer.from('Hola este es un buffer');

console.log('Este es un Buffer vacio');
console.log(sensorA);
console.log('Este es el buffer creado con la cadena de caracteres');
console.log(sensorB);

//Imprimir valor en string
console.log(sensorB.toString());

//MOdificar valores del buffer
sensorB[0] = 61;
sensorB[3] = 48;