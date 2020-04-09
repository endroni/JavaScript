function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var gênero = ''
        var img = document.createElement('img') 
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'img/homem_bebe.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/homem_jovem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/homem_adulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/homem_velho.png')
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'img/mulher_babe.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/mulher_jovem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/mulher_adulta.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/mulher_velha.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}