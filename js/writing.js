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