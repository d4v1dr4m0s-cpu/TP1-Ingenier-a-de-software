//cordenadas zona del mapa
var map = L.map('map').setView([-34.522852041277574, -58.70066447665266], 15);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const talleres = [
    { id: 1, nombre: "Taller de guitarra", horario: "Lun 19 a 20hs", direccion: "Julio A. Roca 2561", tel: "11-9988-7766", img: "https://www.elvalleonline.com.ar/wp-content/uploads/2024/03/taller-guitarra-trelew-2-e1709642049198.jpeg", redes: "@guitarraIg", coords: [-34.540505, -58.717209], descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere nibh commodo magna malesuada, sed consequat eros finibus. Proin at tortor ut magna tincidunt volutpat ut in lacus." },
    { id: 2, nombre: "Taller de carpinteria Artesanal", horario: "De lunes a sabados <br> 9 a 16hs", direccion: "Paunero 1848", tel: "11-9988-7766", img: "https://www.gaiarestauracion.com/imagenes/r_mueble/curso_ebanisteria2.jpg", redes: "@CarpArt", coords: [-34.539050, -58.714661], descripcion: "Nulla tortor eros, imperdiet sed erat sit amet, auctor varius enim. Pellentesque varius, diam et bibendum varius, libero est tincidunt sem, eu consectetur nibh sem sed ante." },
    { id: 3, nombre: "Clases de violin", horario: "Miercoles y Jueves <br> 18:30 a 20:30", direccion: "Tte. General Ricchieri 422", tel: "11-9988-7766", img: "https://cbblanca-bue.infd.edu.ar/sitio/wp-content/uploads/2025/05/CLASE-DE-INSTRUMENTO.jpg", redes: "@Clavio_ig", coords: [-34.519531, -58.700979], descripcion: "Ut semper massa erat, ac venenatis turpis porttitor eget. Curabitur lacus nulla, ornare quis mollis vitae, ultrices vitae nisl. Suspendisse vulputate." },
    { id: 4, nombre: "Feria de los artesanos", horario: "Jueves 10 a 20hs", direccion: "Juan M. Gutierrez 1050", tel: "11-9988-7766", img: "https://www.olavarria.gov.ar/wp-content/uploads/2020/12/Cultura-Feria-artesanos-1-1024x682.jpg", redes: "@FeriART", coords: [-34.522531471037794, -58.70906656302671], descripcion: "Est ut sodales pharetra, ligula nulla euismod diam, at tempor quam sapien at quam. Fusce at purus tellus." },
    { id: 5, nombre: "Clases de canto", horario: "Jueves y Sabados <br> 9 a 11hs", direccion: "La Plata 1724", tel: "11-9988-7766", img: "https://elizabethdolinska.com/wp-content/uploads/2020/05/clases-de-canto-en-madrid-088.jpg", redes: "@clanto", coords: [-34.56344123055479, -58.6865394296436], descripcion: "Etiam in leo quis enim dapibus ullamcorper sit amet sit amet odio. Maecenas luctus orci lorem, at finibus nisl tincidunt at. Curabitur viverra sed velit aliquam lacinia." },
    { id: 6, nombre: "Luthier de guitarra", horario: "Lunes a Sabados <br> 8 a 17hs", direccion: "Dorrego 149", tel: "11-9988-7766", img: "https://www.guitarrasfuentes.com/wp-content/uploads/2021/12/que-es-un-luthier-de-guitarras-1536x1225.jpg", redes: "@Lutharra", coords: [-34.54353165038189, -58.68962795652001], descripcion: "Praesent aliquam, libero id faucibus scelerisque, sapien turpis accumsan felis, ac imperdiet erat massa eu tellus. Donec et tempor ex." },
    { id: 7, nombre: "Clases de dibujo", horario: "Miercoles 17 a 20hs", direccion: "Altube 4839", tel: "11-9988-7766", img: "https://mencantapintar.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-11-21-at-18.49.18-1-1024x771.jpeg", redes: "@dibuses", coords: [-34.527989, -58.707886], descripcion: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In diam urna." },
    { id: 8, nombre: "Clases de guitarra", horario: "Martes 21 a 22hs", direccion: "Concejal acosta 637", tel: "11-9988-7766", img: "https://www.guitarraguadalajara.com/wp-content/uploads/2020/02/228056019-md-1536x1025.jpeg", redes: "@guitana", coords: [-34.556901, -58.684664], descripcion: "Fusce tristique ipsum sapien, sed ullamcorper risus ultricies sit amet. Sed molestie lacinia ex quis vulputate." },
    { id: 9, nombre: "Clases de canto", horario: "Martes y Viernes 20 a 21hs", direccion: "Tte richieri 422", tel: "11-9988-7766", img: "https://elizabethdolinska.com/wp-content/uploads/2018/09/clases-de-canto-en-madrid-025.jpg", redes: "@Cantina", coords: [-34.550582502068444, -58.6969370517178], descripcion: "Morbi aliquet ligula vitae odio mollis, nec ornare felis imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." },
    { id: 10, nombre: "Centro cultural CCRP", horario: "Lunes a Sabados <br> 8 a 20hs", direccion: "M. Angel Delia 633", tel: "11-5558-7766", img: "https://www.ccamiami.org/el-centro/nuestra-historia/", redes: "@CentroCultural", coords: [-34.534327352041714, -58.71926631735072], descripcion: "Fusce dui velit, gravida et vulputate a, elementum at libero. Donec sem ante, convallis ut commodo sed, facilisis in tortor." }
];

var marcadoresEnPantalla = L.layerGroup().addTo(map);

//Devuelve un array con los elementos filtrados por nombre
function filtrarLista(criterio) {
    return talleres.filter(taller =>  //filter() crea un nuevo array con los elementos que cumplan
        taller.nombre.toLowerCase().includes(criterio.toLocaleLowerCase())
    )
}

//Crea los marcadores tomando un array de los talleres filtrados como parametro
function crearMarcadores(listaFiltrada) {

    marcadoresEnPantalla.clearLayers();
    let encontrado = false;

    listaFiltrada.forEach(function (t) {
        var contenidoPopup = `
                <div style="text-align:center;">
                    <img src="${t.img}" style="width:100%; border-radius:5px;"><br>
                    <strong style="font-size:16px;">${t.nombre}</strong><br>
                    <p> 
                    ${t.direccion}<br>
                    🕒 ${t.horario}<br>
                    📞 ${t.tel}<br>
                    📱 ${t.redes}
                    </p>
                </div>
            `;

        var m = L.marker(t.coords).bindPopup(contenidoPopup);
        m._id = t.id;

        marcadoresEnPantalla.addLayer(m);

        // "Centrar en el mapa" si hay coincidencia exacta o es la primera
        if (!encontrado) {
            map.flyTo(t.coords, 16); // Hace el efecto de zoom suave
            encontrado = true;
        }

        //capturo evento marcador
        m.on("click", () => {
            document.querySelectorAll(".tarjeta").forEach(t => {
                t.classList.remove("expandida");
                t.classList.remove("resaltada");
            });
            const tarjeta = document.querySelector(`.tarjeta[data-id='${t.id}']`);
            if (tarjeta) {
                tarjeta.classList.add("expandida");
                tarjeta.classList.add("resaltada");

                tarjeta.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        });
    });
}

//Crea los marcadores tomando un array de los talleres filtrados como parametro
function crearTarjetas(listaFiltrada) {

    const lista = document.getElementById("lista-talleres");
    lista.innerHTML = "";

    listaFiltrada.forEach(taller => {

        const item = document.createElement("li");

        item.innerHTML = `
        <div class="tarjeta" data-id="${taller.id}">
        <h2>${taller.nombre}</h2>
            <div class="detalle">
            <img src="${taller.img}" style="width:100%; border-radius:5px;"><br>
            <p><strong>Descripción:</strong> ${taller.descripcion} <br></p>
            <p><strong>Horario:</strong> ${taller.horario} <br></p>
            <p><strong>Telefono:</strong> ${taller.tel} <br></p>
            <p><strong>Redes:</strong> ${taller.redes} <br></p>     
            </div>
        <p> <strong>Dirección:</strong> ${taller.direccion}</p>      
        </div>
        `;

        lista.appendChild(item);

        //capturo evento de tarjeta
        const tarjeta = item.querySelector(".tarjeta");
        tarjeta.addEventListener("click", () => {

            //limpio las tarjetas, vuelven a su estado base
            document.querySelectorAll(".tarjeta").forEach(t => {
                t.classList.remove("expandida");
                t.classList.remove("resaltada");
            });
            tarjeta.classList.add("expandida");
            tarjeta.classList.add("resaltada");

            marcadoresEnPantalla.eachLayer(m => {
                if (m._id === taller.id) {
                    m.openPopup();
                    map.flyTo(m.getLatLng(), 16);
                }
            });
        });
    });
}

//por defecto muestro todo
crearMarcadores(talleres);
crearTarjetas(talleres);

//criterio a usar en los filtros
let buscador = document.getElementById("barra_buscador");

//evento a medida que escirbis
buscador.addEventListener("input", () => {
    const talleresfiltrados = filtrarLista(buscador.value);
    crearTarjetas(talleresfiltrados);
    crearMarcadores(talleresfiltrados);
})

//evento cuando apretas boton buscar
/*document.getElementById("btnBuscar").onclick = function () {
    crearMarcadores(buscador.value); //hay que cambiar el criterio, debe recibir array
};*/


