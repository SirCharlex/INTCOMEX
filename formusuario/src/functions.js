function clave(){
    let letras ="ABCDEFGHIJKLMNOPRSTUVWXYZ"
    let numeros ="0123456789"
    let claveLetras =''
    let claveNumeros = ''
    let mi_clave =''
    const longitudLetras = letras.length
    const logitudNumeros = numeros.length

    for (let x=0; x< 4; x++){
        claveLetras += letras.charAt(Math.floor(Math.random()*longitudLetras))

    }

    for (let x=0; x< 4; x++){
        claveNumeros += numeros.charAt(Math.floor(Math.random()*logitudNumeros))

    }
    mi_clave = claveLetras + claveNumeros
    return mi_clave
}

function valida_correo(email){
let regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
return regexEmail.test(email)
}

function posting(user){
    fetch('http://localhost:3001/api/users', {
        method: 'POST', // o 'PUT' para actualizar
        body: JSON.stringify(user), // los datos pueden ser cadena u objeto 
        headers:{'Content-Type': 'application/json'}
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        console.log('Success:', response);
    })
}


module.exports ={
    clave,
    valida_correo,
    posting
}