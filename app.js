// este archivo es necesario para crear el servidor
// constante para express
const express = require ('express'),
    path = require("path"),
    app = express(),
    puerto = process.env.PORT || 3000; // Si está definido en el entorno, usarlo. Si no, el 3000


// objeto del servidor de la aplicacion
//const app = express();

//Especificar archivos de threejs como archivos estáticos
app.use(express.static(__dirname + '/public'))

// agregar la ruta del html
// agregar función, requerimiento y respuesta
app.get('/', (req, res)=>{
    // usar respuesta para enviar un archivo
    res.sendFile(__dirname + '/public/index.html');
})

// definir un puerto para el servidor
// función para avisar que el servidor está corriendo
app.listen(3000, ()=>{
    console.log('server running on port: ', 3000);
})

// reiniciar el servidor cada vez que se hagan cambios
