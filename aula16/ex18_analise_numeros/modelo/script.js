function adicionar() {
    let numero = document.getElementById('txtnum')
    let num = []
    num.push(Number(numero.value))
    if ( num == 0) {
        window.alert('Número não inserido!')
    } else {        
        window.alert(num)     
    }    
}

// let numero = numero.push(Number(document.getElementById('txtnum').value))