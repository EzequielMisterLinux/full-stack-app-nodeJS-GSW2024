//npm install axios instalar esta libreria
import axios from "axios";
import Swal from "sweetalert2";
import cargandoCarrito from "./carrito";

let urlGlobal = "http://localhost:3000/api"

const obtenerTodosLosProductos = async () => {
  
  try {


    
    const respuestaServidor = await axios.get(`${urlGlobal}/obtener-todos-los-products`)

    let obtenerTodosLosProducts = await respuestaServidor.data.obtenertodosLosProducts

    console.log(obtenerTodosLosProducts);
    

    for(let item of obtenerTodosLosProducts){

      
      

      const disponibilidadTransform = (disponible) => {
        if (disponible = true) {
          
          return "si esta disponible"

          

        } else if (disponible = false) {
          return "no esta disponible"
          
        }{
          
        }
      }

      let disponibilidadactual = disponibilidadTransform(item.disponibilidad)

      let contenedorDeProductos = document.createElement("div")

      contenedorDeProductos.textContent =""

      contenedorDeProductos.innerHTML = `
      <div class="container-element-card">
      
        <p>${item.nombre}</p>
        <p>${item.precio}</p>
        <p>${disponibilidadactual}</p>
        <img src=${item.imagen} alt=${item.name} width="200px" height="150px" />
        <button id=${item._id}>agregar al carrito</button>

      </div>

      `

      let app = document.getElementById("app")
      app.appendChild(contenedorDeProductos)
      
      let buttonCard = document.getElementById(`${item._id}`)

      buttonCard.addEventListener('click', () => {
        console.log("has agregado esto al carrito");
        Swal.fire({
          title: `agregaste ${item.nombre}!`,
          text: "vea en el carrito sus productos!!",
          icon: "success"
        });

        cargandoCarrito();
        

        let agregar = JSON.parse(localStorage.getItem("products")
      ) || []

        agregar.push({
          
          "nombre":item.nombre,
          "precio":item.precio,
          "imagen":item.imagen
        })

        localStorage.setItem("products", JSON.stringify(agregar))
        localStorage.setItem("products")
      })

    }

    


  } catch (error) {
    console.error(error);
    
  }

}
obtenerTodosLosProductos()


export default obtenerTodosLosProductos