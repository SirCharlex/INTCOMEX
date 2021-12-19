const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index')
const {conn} = require('./models/index')
const { PORT } = require('./config')
const app = express()
const URL_FRONT = "http://localhost:3000"

//Headers
app.use(express.urlencoded({extended:true, limit:"50mb"}));
app.use(express.json({limit:"50mb"}));
app.use(morgan('dev')); //Informar po consola los mensajes de las rutas

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", URL_FRONT)
    res.header("Access-Control-Allow-Credentials", true)
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
    next() //Evita que la aplicación se corte aquí con una nueva petición
})

//Rutas
app.use("/api", routes)
//Middleware control errores
app.use((err, req, res, next)=>{
    const estatus = err.status || 500;
    const mensaje = err.message || err;
    console.error(err)
    return res.status(estatus).send(mensaje);
})

//Server
conn.sync({force: true})
.then(()=>{
    console.log("Base de datos conectada")
    app.listen(PORT, ()=>{
        console.log(`Servidor escuchando en el puerto ${PORT}`)
    })

})