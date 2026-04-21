document.addEventListener("DOMContentLoaded", function() {
    
    const btnRegistrate = document.getElementById("btnRegistrate");
    const btnBuscar = document.getElementById("btnBuscar"); 
    const btnVolver = document.getElementById("btnVolver"); 


    if (btnRegistrate) {
        btnRegistrate.onclick = function() {
            window.location.href = "formulario_Talleres.html";
        };
    }

    if (btnBuscar) {
        btnBuscar.onclick = function() {
            window.location.href = "mapa.html";
        };
    }

    if (btnVolver) {
        btnVolver.onclick = function() {
            window.location.href = "home_logged.html";
        };
    }
});