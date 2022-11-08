//Tipo 1
function suma_1(a, b){
    return a+b;
}

//Tipo 2
var suma_2 = function(a, b){
    return a+b;
}

//Tipo json
let operaciones = {
    suma: function(a, b){
        return a+b;
    },

    resta: function(a, b){
        return a-b;
    },

    multiplicacion: function(a, b){
        return a*b;
    }
}

//Apuntador flecha
let suma_af = (a, b) => {
    return a+b;
}

//Apuntador flecha simplificada ( si solo contiene un return )
let suma_afs = (a, b) => a + b;

var resultado = suma_afs(5, 5);
console.log(resultado);