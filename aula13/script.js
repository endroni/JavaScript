/* 
function horas(){
    var agora = new Date()
    var h = agora.getHours()
    var hora = window.document.getElementById(`hora`)
    hora.innerHTML = `Agora são ${h} horas`
    if (hora < 18){
        console.log('Noite')
    }
    console.log('dia')
}
*/
var agora = new Date()
var h = agora.getHours()
function horas() {
    if (h >= 0 && h < 6) {
        hora.innerHTML = `Agora são ${h} horas `
        hora.innerHTML += `Boa madrugada!`
    } else if (h < 12) {
        hora.innerHTML = `Agora são ${h} horas `
        hora.innerHTML += `Bom dia!`
    } else if (h < 18) {
        hora.innerHTML = `Agora são ${h} horas `
        hora.innerHTML += `Boa tarde!`
    } else if (h < 24) {
        hora.innerHTML = `Agora são ${h} horas `
        hora.innerHTML += `Boa noite!`
    } else {
        hora.innerHTML = `Hora inexistente!`
    }
}

