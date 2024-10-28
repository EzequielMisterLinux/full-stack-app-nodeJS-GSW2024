let cuerpoPage = document.getElementById("cuerpo")

let theme = document.getElementById("modeTheme")

let themeNormal = document.getElementById("modoNormal")

theme.addEventListener("click", () => {
    localStorage.setItem("modeTheme", "verdadero")
    window.location.reload()
})

themeNormal.addEventListener("click", () => {
    localStorage.setItem("modeTheme", "falso")
    window.location.reload()
})

let modeStatus = localStorage.getItem("modeTheme")

switch (modeStatus) {
    case "verdadero":

        cuerpoPage.style.background = "black"
        
        break;
    case "falso":
        cuerpoPage.style.background = "white"

        break;

    default:
        break;
}