function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'PREENCHA OS CAMPOS !!!'             
    } else {
        res.innerHTML = 'Contando: </br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {       
            window.alert('Passo inválido! SERÁ CONSIDERADO PASSO 1')
            p = 1
        }

        if (i < f) {
            for (let c = i ; c <= f; c += p) {      // Contagem crescente
                res.innerHTML += ` ${c} \u{1F637} `
            }            
        } else {
            for (let c = i ; c >= f ; c -= p){      // Contagem decrescente
                res.innerHTML += `${c} \u{1F637}`
            }            
        }    
        res.innerHTML += `\u{1F6A9}`    
    }
}














/*
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
            res.innerHTML += `${num}`
        }
    }        
}
*/

