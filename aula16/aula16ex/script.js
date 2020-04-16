let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
      return true  
    } else {
        return false
    }

}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''  // limpa o resultado sempre que um número for adicionado
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' // serve para limpar o campo
    num.focus()    // serve para deixar o cursor nesse campo
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores para finalizar!')
    } else {
        let tot = valores.length
        let menor = valores[0]      //o primeiro valor é o menor e o maior
        let maior = valores[0]      // o primeiro vamor é o menor e o maior 
        let soma = 0                // zera o valor da soma
        let media = 0               //zera o valor da média
      
        for (let pos in valores) {          
            soma += valores[pos]            
            if (valores[pos] > maior)       // e qual o maior valor
                maior = valores[pos]        // esse for é para saber qual o menor
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        
        res.innerHTML = ''
        res.innerHTML += `<p>Temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p>O menor número: ${menor}. </p>`
        res.innerHTML += `<p>O maior número: ${maior}. </p>`
        res.innerHTML += `<p>Soma dos números: ${soma}. </p>`
        res.innerHTML += `<p>A média dos números: ${media}. </p>`
    }
}