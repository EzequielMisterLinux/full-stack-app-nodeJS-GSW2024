const cargandoCarrito = () => {

let info = JSON.parse(localStorage.getItem("products"))

console.log(info);

let carrito = document.getElementById("carrito")

carrito.textContent=""

info.map(async(elemt) => {
    console.log(elemt.nombre);
    console.log(elemt.precio);
    

carrito.innerHTML += `
<h1>carrito</h1>
<p>${elemt.nombre}</p>
<p>${elemt.precio}</p>
<img src=${elemt.imagen} alt=${elemt.name} width="200px" height="150px" />

`
})
}

cargandoCarrito()

export default cargandoCarrito
