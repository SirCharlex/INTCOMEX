// import logo from './logo.svg';
import './App.css';
import {clave, valida_correo, posting} from './functions'

function App() {

  function someter(e){
    e.preventDefault()
    let errores = []
    let codigo = document.getElementsByName('codigo')[0].value
    let usuario = document.getElementsByName('usuario')[0].value
    let nombre = document.getElementsByName('nombre')[0].value
    let cargo = document.getElementsByName('cargo')[0].value
    let telefono = document.getElementsByName('telefono')[0].value
    let email = document.getElementsByName('email')[0].value
    let celular = document.getElementsByName('celular')[0].value
    let tipo = document.getElementsByName('tipo')[0].value
    let webstore = document.getElementsByName('webstore')[0].checked
    let ordenes = document.getElementsByName('ordenes')[0].checked
    let informacion = document.getElementsByName('informacion')[0].checked


    
    if (usuario.substr(0,3) !== "XMX"){
      errores.push('El usuario debe iniciar por XMX ')
    }

    if (usuario.length !== 6){
      errores.push('El usuario debe tener 6 caracteres')
    }

    if (nombre.length<5 || nombre.length>15){
      errores.push('El nombre debe tener entre 5 y 15 caracteres')
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

    if (tipo === ""){
      errores.push('Debe seleccionar el tipo de contacto')
    }

    console.log(tipo, webstore, ordenes, informacion)
    console.log(errores)
    console.log(errores.length)



    if (errores.length){
      let mi_error = errores.join("\n")
      alert(mi_error)
      // alert(erroresStr)
      // return errores
    }else{
      let my_pass = clave();
      let my_user={
        "codigo": codigo,
        "usuario": usuario,
        "nombre": nombre,
        "clave": my_pass,
        "cargo": cargo,
        "telefono": telefono,
        "email": email,
        "celular": celular,
        "tipo_contacto": tipo,
        "webstore": webstore,
        "ordenes": ordenes,
        "informacion": informacion 
      }
      posting(my_user)
      alert("usuario almacenado, su clave es: " + my_pass  )
      window.location.reload(true)
    }

    
  }
  // function validaNombre(){

  // }



  return (
    <form className='formulario' name='userform'>
      <h4>Información de Contacto</h4>
      <div className="campos">
        <label className="labels">Código de cliente:</label>
        <input name='codigo' id="code" className="inputs" readOnly type="text" value="xmxwebdemo2"></input>
      </div>
      <div className="campos">
        <label className="labels">Usuario: *</label>
        <input name='usuario' className="inputs" type="text"></input>
      </div>
      <div className="campos">
        <label className="labels">Nombre:*</label>
        <input name='nombre' className="inputs" type="text" placeholder='Nombre:*'></input>
      </div>
      <div className="campos">
        <label className="labels">Cargo:*</label>
        <input name='cargo' className="inputs" type="text" placeholder='Cargo:*'></input>
      </div>
      <div className="campos">
        <label className="labels">Teléfono:*</label>
        <input id="telefono" name='telefono' className="inputs" type="text" placeholder='Teléfono:*'></input>
      </div>
      <div className="campos">
        <label className="labels">Correo electrónico:*</label>
        <input name='email' className="inputs" type="text" placeholder='Correo electrónico:*'></input>
      </div>
      <div className="campos">
        <label className="labels">Número celular:*</label>
        <input name='celular' className="inputs" type="text" placeholder='Número celular:*'></input>
      </div>
      <div className="campos">
        <label className="labels">Tipo de contacto:*</label>
        <select name="tipo" className="inputs">
          <option value = "" disabled selected>--Selecciona tipo de contacto--</option>
          <option value = "Contacto comercial">Contacto Comercial</option>
          <option value = "Pago de factura">Pago de factura</option>
          <option value = "Representante legal">Representante legal</option>
          <option value = "Retiro de mercadería">Retiro de mercadería</option>
        </select>
      </div>
      <div className="campos">
        <label className="labels">Autorizado para acceder a WebStore</label>
        <input name='webstore' className="checks" type="checkbox"></input>
      </div>
      <div className="campos">
        <label className="labels">Autorizado para crear ordenes</label>
        <input name='ordenes' className="checks" type="checkbox"></input>
      </div>
      <div className="campos">
        <label className="labels">¿Desea que se le envíe la información de acceso al usuario?</label>
        <input name='informacion' className="checks" type="checkbox"></input>
      </div>
      <div className='botones'>
        <button name='' className='boton' onClick={e=>someter(e)}>Aceptar</button>
        <button name='' className='boton'>Cancelar</button>
      </div>
    </form>
  );
}

export default App;
