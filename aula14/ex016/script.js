function contador(){
    var ninicio = document.getElementById('txtinicio')
    var num = Number(ninicio.value) // testando
    var nfim = document.getElementById('txtfim')
    var fim = Number(nfim.value) // testando
    var nintervalo = document.getElementById('txtintervalo')
    var intervalo = Number(nintervalo.value)
    var res = document.querySelector('div#res')
    for (num ; num <= fim ; num = num + intervalo){
        res.innerHTML = `${num}`
    }    
}
