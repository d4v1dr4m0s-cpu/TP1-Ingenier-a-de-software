document.addEventListener("DOMContentLoaded", function() {
    
    const btnRegistrate = document.getElementById("btnRegistrate");
    const btnBuscar = document.getElementById("btnBuscar"); 

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
});