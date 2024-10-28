import axios from "axios";

let urlGlobal = "http://localhost:3000/api"

const CreandoProducto = async() => {
    
    let nombre = "samsung galaxy s21"

    let precio = 299

    let disponibilidad = true

    let data = {
        "nombre": nombre,
        "precio": precio,
        "disponibilidad": disponibilidad
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

btnAgregar.addEventListener("click", () => {
    CreandoProducto()
    console.log(CreandoProducto());
    
})
