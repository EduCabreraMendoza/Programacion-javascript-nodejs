var express = require('express');
var app = express()
var port = 6777;

app.use(express.json)                // Servicio para recibir datos en json
app.use(express.urlencoded)          // SErvicio para codificar la información

app.post('/', (pet, resp) => {
    let temperatura = pet.body.temperatura;
    resp.send("Hola esto es un servicio y la temperatura es " + temperatura + "°C")
})

app.listen(port, () => {
    console.log("El servidor esta corriendo en el puerto " + port);
})