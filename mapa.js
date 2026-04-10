//cordenadas zona del mapa
var map = L.map('map').setView([-34.522852041277574, -58.70066447665266], 15);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//marcadores
var marcador1 = L.marker([-34.54050552908683, -58.717209061013484]).addTo(map);
marcador1.bindPopup("Clases de guitarra <br> Lun 19 a 20hs <br> Julio A. Roca").openPopup();

var marcador2 = L.marker([-34.53905072461418, -58.71466129730134]).addTo(map);
marcador2.bindPopup("Maderera Artesanal <br> De lunes a sabados <br> 9 a 16hs <br> Paunero 1848").openPopup();

var marcador3 = L.marker([-34.5195313348882, -58.70097960839921]).addTo(map);
marcador3.bindPopup("Clases de violin <br> Miercoles y Jueves <br> 18:30 a 20:30 <br> Tte. General Ricchieri 422 ").openPopup();

var marcador4 = L.marker([-34.524944276182545, -58.70478799763984]).addTo(map);
marcador4.bindPopup("Feria de los artesanos <br> Jueves 10 a 20hs <br> Juan M. Gutierrez 1050").openPopup();

var marcador5 = L.marker([-34.5211940078788, -58.705061109220665]).addTo(map);
marcador5.bindPopup("Clases de canto <br> Jueves y Sabados <br> 9 a 11hs <br> La Plata 1724").openPopup();

var marcador6 = L.marker([-34.51704768237736, -58.69776139373766]).addTo(map);
marcador6.bindPopup("Luthier de guitarra <br> Lunes a Sabados <br> 8 a 17hs <br> Dorrego 149").openPopup();

var marcador7 = L.marker([-34.52798998002709, -58.70788689806816]).addTo(map);
marcador7.bindPopup("Clases de dibujo <br> Miercoles 17 a 20hs <br> Altube 4839").openPopup();

var marcador8 = L.marker([-34.556901126195065, -58.68466428160185]).addTo(map);
marcador8.bindPopup("Clases de guitarra <br> Martes 21 a 22hs <br> Concejal acosta 637").openPopup();

var marcador9 = L.marker([-34.558174218987055, -58.69195694830966]).addTo(map);
marcador9.bindPopup("Clases de canto <br> Martes y Viernes 20 a 21hs <br> Tte richieri 422").openPopup();