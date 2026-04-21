document.addEventListener("DOMContentLoaded", function () {

    const btnRegistrate = document.getElementById("btnRegistrate");
    const btnBuscar = document.getElementById("btnBuscar");
    const btnVolver = document.getElementById("btnVolver");


    if (btnRegistrate) {
        btnRegistrate.onclick = function () {
            window.location.href = "formulario_Talleres.html";
        };
    }

    if (btnBuscar) {
        btnBuscar.onclick = function () {
            window.location.href = "mapa.html";
        };
    }

    if (btnVolver) {
        btnVolver.onclick = function () {
            window.location.href = "home_logged.html";
        };
    }

    const inputNombre = document.getElementById("taller_nombre");
    const inputDescrip = document.getElementById("campo_descripcion");
    const inputHorario = document.getElementById("horario"); 
    const inputDirec = document.getElementById("direccion"); 
    const inputRedes = document.getElementById("campo_redes");
    const inputFoto = document.getElementById("campo_foto"); // Obtenemos el input file

    const prevNombre = document.getElementById("prev-nombre");
    const prevDescrip = document.getElementById("prev-descrip");
    const prevDirec = document.getElementById("prev-direc");
    const prevHorario = document.getElementById("prev-horario");
    const prevRedes = document.getElementById("prev-redes");
    const imgPreview = document.getElementById("prev-img"); // La imagen en la tarjeta

    // FUNCIÓN PARA LA IMAGEN: FileReader
    function leerImagen() {
        if (inputFoto.files && inputFoto.files[0]) {
            const reader = new FileReader();

            // Cuando el archivo termina de leerse
            reader.onload = function (e) {
                // ponemos ese resultado como la imagen
                imgPreview.src = e.target.result;
            }

            // Leemos el archivo como una URL de datos
            reader.readAsDataURL(inputFoto.files[0]);
        }
    }

    // Escuchamos el cambio en el input file
    if (inputFoto) {
        inputFoto.addEventListener("change", leerImagen);
    }

    // Actualización de textos 
    function actualizarTextos() {
        prevNombre.innerText = inputNombre.value || "Nombre del Taller";
        prevHorario.innerText = inputHorario.value || "...";
        prevDescrip.innerText = inputDescrip.value || "...";
        prevDirec.innerText = inputDirec.value || "...";
        prevRedes.innerText = inputRedes.value || "...";
    }

    [inputNombre, inputHorario, inputDirec, inputDescrip, inputRedes].forEach(input => {
        if (input) input.addEventListener("input", actualizarTextos);
    });

    // --- LÓGICA SI ES SEDE CENTRO CULTURAL ---
const checkboxSede = document.getElementById("es_sede");

if (checkboxSede) {
    checkboxSede.addEventListener("change", function() {
        if (this.checked) {
            // Establecemos la dirección fija
            inputDirec.value = "M. Angel Delia 544 - Sede Centro Cultural";
            // Bloqueamos la edición para que no la cambien
            inputDirec.disabled = true;
        } else {
            // Limpiamos y desbloqueamos
            inputDirec.value = "";
            inputDirec.disabled = false;
        }
        // Actualizamos la tarjeta de vista previa
        actualizarTextos(); 
    });
}

});