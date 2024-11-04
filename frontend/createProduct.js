import axios from "axios";

let urlGlobal = "http://localhost:3000/api"

let contenedorAccion = document.getElementById("contenedorAcciones")

contenedorAccion.innerHTML= `
<input type="text" id="nombre">
<input type="number" id="precio">
<input type="text" id="disponibilidad">
<input type="string" id="imagen">
`


const CreandoProducto = async() => {
    
    let nombre = document.getElementById("nombre")
    console.log(nombre.value);
    

    let precio = document.getElementById("precio")

    let disponibilidad = document.getElementById("disponibilidad")

    let imagen = document.getElementById("imagen")


    let data = {
        "nombre": nombre.value,
        "precio": precio.value,
        "disponibilidad": true,
        "imagen": imagen.value
    }

    try {

        await axios.post(`${urlGlobal}/create-product`, data)

        
    } catch (error) {
        console.error(error);
        
    }

}

let crearProductos = document.createElement("div")

crearProductos.innerHTML = `
<button id="agregar">agregando producto</button>
`
let contenedorAcciones = document.getElementById("contenedorAcciones")

contenedorAcciones.appendChild(crearProductos)

let btnAgregar = document.getElementById("agregar")

btnAgregar.addEventListener("click", async() => {
    const creando = await CreandoProducto()
    obtenerTodosLosProductos()
    console.log(creando);
    
})
