//cordenadas zona del mapa
var map = L.map('map').setView([-34.522852041277574, -58.70066447665266], 15);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const talleres = [
    { id: 1, nombre: "Taller de guitarra", info: "Lun 19 a 20hs <br> Julio A. Roca", tel: "11-9988-7766", img: "https://www.elvalleonline.com.ar/wp-content/uploads/2024/03/taller-guitarra-trelew-2-e1709642049198.jpeg", redes: "@guitarraIg", coords: [-34.540505, -58.717209] },
    { id: 2, nombre: "Taller de carpinteria Artesanal", info: "De lunes a sabados <br> 9 a 16hs <br> Paunero 1848", tel: "11-9988-7766", coords: [-34.539050, -58.714661] },
    { id: 3, nombre: "Clases de violin", info: "Miercoles y Jueves <br> 18:30 a 20:30 <br> Tte. General Ricchieri 422", tel: "11-9988-7766", coords: [-34.519531, -58.700979] },
    { id: 4, nombre: "Feria de los artesanos", info: "Jueves 10 a 20hs <br> Juan M. Gutierrez 1050", tel: "11-9988-7766", coords: [-34.524944, -58.704787] },
    { id: 5, nombre: "Clases de canto", info: "Jueves y Sabados <br> 9 a 11hs <br> La Plata 1724", tel: "11-9988-7766", coords: [-34.521194, -58.705061] },
    { id: 6, nombre: "Luthier de guitarra", info: "Lunes a Sabados <br> 8 a 17hs <br> Dorrego 149", tel: "11-9988-7766", coords: [-34.517047, -58.697761] },
    { id: 7, nombre: "Clases de dibujo", info: "Miercoles 17 a 20hs <br> Altube 4839", tel: "11-9988-7766", coords: [-34.527989, -58.707886] },
    { id: 8, nombre: "Clases de guitarra", info: "Martes 21 a 22hs <br> Concejal acosta 637", tel: "11-9988-7766", coords: [-34.556901, -58.684664] },
    { id: 9, nombre: "Clases de canto", info: "Martes y Viernes 20 a 21hs <br> Tte richieri 422", tel: "11-9988-7766", coords: [-34.558174, -58.691956] }
];

var marcadoresEnPantalla = L.layerGroup().addTo(map);

let buscador = document.getElementById("barra_buscador"); //criterio a usar en los filtros

function filtrarTalleres(criterio) {

    marcadoresEnPantalla.clearLayers();
    let encontrado = false;

    talleres.forEach(function (t) {
        if (t.nombre.toLowerCase().includes(criterio)) {
            var contenidoPopup = `
                <div style="text-align:center;">
                    <img src="${t.img}" style="width:100%; border-radius:5px;"><br>
                    <strong style="font-size:16px;">${t.nombre}</strong><br>
                    <p>🕒 ${t.info}<br>
                    📞 ${t.tel}<br>
                    📱 ${t.redes}</p>
                </div>
            `;

            var m = L.marker(t.coords).bindPopup(contenidoPopup);
            marcadoresEnPantalla.addLayer(m);

            // asociar marcador a tarjeta
            /*m.on("click", function() {
                cargarDatosFiltro(t.nombre.toLocaleLowerCase());
            })*/

            // "Centrar en el mapa" si hay coincidencia exacta o es la primera
            if (!encontrado) {
                map.flyTo(t.coords, 16); // Hace el efecto de zoom suave
                encontrado = true;
            }
        }
    });
}


//document.getElementById("btnBuscar").onclick = filtrarTalleres(buscador.value);


//muestra los marcadores cuando apretas buscar
document.getElementById("btnBuscar").onclick = function () {
    filtrarTalleres(buscador.value);
};


function cargarDatosFiltro(filtro) {

    const lista = document.getElementById("lista-talleres");
    lista.innerHTML = "";

    talleres.forEach(taller => {

        if (taller.nombre.toLowerCase().includes(filtro.toLowerCase())) {

            const item = document.createElement("li");

            item.innerHTML = `
        <div class="tarjeta">
        <h2>${taller.nombre}</h2>
        <p>${taller.info}</p>
        </div>
        `;
            // obtengo tarjeta creada
            const tarjeta = item.querySelector(".tarjeta");

            // agrego evento click
            tarjeta.addEventListener("click", function () {
                // asocio tarjeta a marcador
                filtrarTalleres(taller.nombre.toLocaleLowerCase());
            });

            lista.appendChild(item);
        }
    });
}

buscador.addEventListener("input", () => {
    cargarDatosFiltro(buscador.value);

    //muestra los marcadores antes de apretar buscar(a medida que escribis)    
    //    filtrarTalleres(buscador.value);
})

//por defecto muestro todo
filtrarTalleres("");
cargarDatosFiltro("");


