
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora =  data.getHours()
    msg.innerHTML = `Agora são ${hora} horas. `
if (hora >= 0 && hora < 6) {
    // Ba madrugada
    img.src = 'img/foto_madrugada.png'
    document.body.style.background  = '#747474'
} else if (hora >= 6 && hora < 12) {
    // Bom dia !
    img.src = 'img/foto_manha.png'
    document.body.style.background = '#e2cd9f'
}else if (hora >= 12 && hora <= 18) {
    // Boa tarde !
    img.src = 'img/foto_tarde.png'
    document.body.style.background = '#b9846f'
} else {
    // Boa noite !
    img.src = 'img/foto_noite.png'
    document.body.style.background = '#515154'
}
}
