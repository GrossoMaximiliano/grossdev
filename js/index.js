
function toggleMenu(){
    let mobile = document.getElementById("atajos_mobile");
    let close_menu = document.getElementById("close_menu");
    
    if ( ['0', '0px', ''].includes(mobile.style.maxHeight) )
    {
        mobile.style.maxHeight = "100vh";
        close_menu.style.fontSize = "30px";
    }
    else {
        mobile.style.maxHeight = "0px";
        close_menu.style.fontSize = "0";
    }
}

function closeMenu(){
    let mobile = document.getElementById("atajos_mobile");
    let close_menu = document.getElementById("close_menu");
    mobile.style.maxHeight = "0px";
    close_menu.style.fontSize = "0";
}

addEventListener("scroll", (event) => {
    if ( window.scrollY > 100 ) {
        document.getElementById("navinfo").style.maxHeight = "0px";
        document.getElementById("navinfo").style.backdropFilter = "blur(54px)";
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
