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

let modeStatus = localStorage.getItem("modeTheme")

switch (modeStatus) {
    case "verdadero":

    carrito.style.color = "white"
        
        break;
    case "falso":
        carrito.style.color = "black"

        break;

    default:
        break;
}
