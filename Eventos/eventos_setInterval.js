var eventos = require('events'); 

var EmisorEventos = eventos.EventEmitter; 
var manejador = new EmisorEventos(); 

manejador.on('despedida', function(nombre){ 
    console.log("Adiós " + nombre); 
 }); 

manejador.on('saludo', function(nombre){ 
    console.log("Hola " + nombre); 
 }); 


 setInterval(function(){ 
    manejador.emit('saludo',"Manuel"); 
 },1000); 

 setInterval(function(){ 
    manejador.emit('despedida',"Manuel"); 
 },1001);  