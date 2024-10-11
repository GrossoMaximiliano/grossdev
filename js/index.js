const acciones = ["crearemos", "innovaremos", "impulsaremos"];


let accionId = 0;

function changeAction(){
    document.getElementById("textPresentacion").classList.remove("typing");
    document.getElementById("textPresentacion").innerHTML = acciones[accionId];
    document.getElementById("textPresentacion").style.maxWidth = "0"; 
    setTimeout( () => {
        document.getElementById("textPresentacion").classList.add("typing");
    }, 150);
    accionId++;
    if ( accionId === acciones.length ) accionId = 0;
}

setInterval(
    changeAction, 3500
)
changeAction();

addEventListener("scroll", (event) => {
    if ( window.scrollY > 100 ) {
        document.getElementById("navinfo").style.maxHeight = "0px";
        document.getElementById("navinfo").style.backdropFilter = "blur(24px)";
        document.getElementById("nav").style.backgroundColor = "rgb(10, 10, 10, 0.8)";
        document.getElementById("bar").style.marginTop = "0";
    }
    else if ( window.scrollY < 50 ) 
    {
        document.getElementById("navinfo").style.maxHeight = "41px";
        document.getElementById("bar").style.marginTop = "15px";

        document.getElementById("nav").style.backdropFilter = "blur(0)";
        document.getElementById("nav").style.backgroundColor = "rgb(10, 10, 10, 0)";
    }
});
