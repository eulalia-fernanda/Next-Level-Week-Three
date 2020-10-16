//create map
const map = L.map('mapid').setView([-23.584314,-48.0469953], 13)


//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68]
})

let marker;


//create and add marker

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker)

    //add icon tileLayer

    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})


// adicionar o caompo de fotos
function addPhotoField() {
    //pegar o container de fotos #images
    const container = document.querySelector('#images')
    //pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da ultima imagem adicionada
    const newfieldConteiner = fieldsContainer[fieldsContainer.length -1].cloneNode(true)
    //verificar se o campo esta vazio, se sim, não adicionar ao container de imagem
    const input = newfieldConteiner.children[0]


    if(input.value == "") {
        return
    }

    //limpar o campo antes de adicionar ao container da imagem
    input.value = ""

    //adicionar o clone ao container da imagem
    newfieldConteiner.children[0].value =""

    container.appendChild(newfieldConteiner)
}

function deleteField(event) {
    const span =event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length < 2) {
    // limpar o valor do campo
    span.parentNode.children[0].value = ""
        return
    }

    // deletar o campo
    span.parentNode.remove();
}

// select yes or no

function toggleSelect(event) {

    //retirar a class .active (dos botoes)
    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active')
})
    //colocar a class .active nesse botão clicado
    const button = event.currentTarget
    button.classList.add('active')

    //atualiza o input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
        
    input.value = button.dataset.value
    
}