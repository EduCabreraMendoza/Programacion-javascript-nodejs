var json = '{"nombre":"Eduardo","edad":22,"nacionalidad":"Mexicana","hobbies":["futbol","video juegos","comics"],"mascota":{"especie":"Gato","nombre":"Mati","edad":"8 meses"}}';
var obj = JSON.parse(json); 
var nombreMascota = obj.mascota.nombre;
console.log(nombreMascota);
