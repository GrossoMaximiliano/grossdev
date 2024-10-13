
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
