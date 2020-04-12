function contador(){
    var ninicio = document.getElementById('txtinicio')
    var num = Number(ninicio.value) // testando
    var nfim = document.getElementById('txtfim')
    var fim = Number(nfim.value) // testando
    var nintervalo = document.getElementById('txtintervalo')
    var intervalo = Number(nintervalo.value)
    var res = document.querySelector('div#res')
    if (num == 0 ){
        res.innerHTML = `Informe o número inicial`
    } else if (fim == 0 ){
        res.innerHTML = `Informe o número final`
    } else if ( intervalo == 0 ){
        res.innerHTML = `Informe o número de intervalo`
    } else {
        for (num ; num <= fim ; num = num + intervalo){
            res.innerHTML = `${num}`
        }
    }        
}


