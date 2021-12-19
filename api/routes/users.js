const {Router} = require('express')
const { Sequelize, or } = require('sequelize');
const {User} = require('../models/index')
const router = Router()

function valida_correo(email){
    let regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
return regexEmail.test(email)
}

router.get("/", (req, res, next)=>{
    User.findAll()
    .then((user)=> res.send(user))
    .catch((error)=> next(error))
})

router.post("/", (req, res)=>{
    const {
        codigo, 
        usuario, 
        nombre, 
        clave, 
        cargo, 
        telefono, 
        email, 
        celular,
        tipo_contacto,
        webstore,
        ordenes,
        informacion
    }= req.body;

    if (codigo && usuario && nombre && clave && cargo && telefono && email && celular && tipo_contacto){
        let errores =[]
        
        if (codigo !== "xmxwebdemo2"){
            errores.push('el código siempre debe ser xmxwebdemo2 ')
        }

        if (usuario.substr(0,3) !== "XMX"){
            errores.push('El usuario debe iniciar por XMX ')
        }
    
        if (usuario.length !== 6){
        errores.push('El usuario debe tener 6 caracteres')
        }

        if (nombre.length<5 || nombre.length>15){
        errores.push('El nombre debe tener entre 5 y 15 caracteres')
        }

        if (clave.length !==8){
            errores.push('la clave debe ser de 8 digitos')
            }

        if (cargo.length<5 || cargo.length>10 ){
        errores.push('El cargo debe tener entre 5 y 10   caracteres')
        }

        if (telefono.substr(0,3) !== "+57"){
        errores.push('El telefono debe iniciar por +57')
        }

        if (telefono.length !==10 ){
        errores.push('El telefono debe tener 10 caracteres incluido el +57')
        } 

        if (celular.length !==10 ){
        errores.push('El celular debe tener 10 caracteres')
        } 

        if (!valida_correo(email)){
        errores.push('El correo electrónico no es valido')
        }

        if (tipo_contacto === ""){
        errores.push('Debe seleccionar el tipo de contacto')
        }

        if (errores.length){
            return res.status(400).send(errores);
        }else{
            User.findOne({
                where:{
                    usuario: usuario
                }
            })
            .then(user=>{
                if (!user){
                    User.create({
                        codigo: codigo, 
                        usuario: usuario, 
                        nombre: nombre, 
                        clave: clave, 
                        cargo: cargo, 
                        telefono: telefono, 
                        email: email, 
                        celular: celular,
                        tipo_contacto: tipo_contacto,
                        webstore: webstore,
                        ordenes: ordenes,
                        informacion: informacion
                    })
                    .catch(err =>{
                        console.log(err)
                    }).then(user=>{
                        return res.json(user);

                    })
                }else{
                    return res.status(400).send('El usuario ya existe');

                }
            })
        }


    }else{
        return res.status(400).send('Debe llenar todos los campos');

    }
})


module.exports = router;