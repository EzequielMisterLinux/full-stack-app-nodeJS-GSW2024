let info = JSON.parse(localStorage.getItem("products"))

console.log(info);

let carrito = document.getElementById("carrito")
info.map(async(elemt) => {
    console.log(elemt.nombre);


carrito.innerHTML = `
<h1>carrito</h1>
<p>${elemt.nombre}</p>
<p>${elemt.precio}</p>

`
})
