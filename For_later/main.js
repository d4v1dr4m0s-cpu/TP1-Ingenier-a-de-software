
window.onload = function() {
    
    
    const btnRegister = document.querySelectorAll('input[type="button"]')[1];
    
    btnRegister.onclick = function() {
        alert("¡Gracias por querer registrarte!");
    };

   
    const inputSearch = document.getElementById('buscar');
    inputSearch.onkeypress = function(e) {
        if (e.key === 'Enter') {
            alert("Buscando: " + inputSearch.value);
        }
    };
};