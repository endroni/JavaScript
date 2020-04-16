function adicionar() {
    let numero = document.getElementById('txtnum')
    let selecionados = document.getElementById('selnum')
    let num = []
    num.push(Number(numero.value))
    if ( num == 0 || num < 1 || num > 100) {
        window.alert('Número inválido!')
    } else {        
        selecionados.innerHTML = ''
        while (num > 0) {
            let item = document.createElement('option')
            item.text = num
            item.value = selecionados
            selecionados.appendChild(item)            
        }    
    }    
}

// let numero = numero.push(Number(document.getElementById('txtnum').value))