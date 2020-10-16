//create map
const map = L.map('mapid').setView([-23.584314,-48.0469953], 13)


//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor:[170, 2]
})

//create pop up overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth:240,
    minHeigth:240
}).setContent('Lar das Meninas <a href="orphanage.html?id=1" class="chosse-orphanage"> <img src="./public/images/arrow-white.svg"></a>')

//create and add marker
L.marker([-23.584314,-48.0469953],{ icon }).addTo(map)
    .bindPopup(popup)
    