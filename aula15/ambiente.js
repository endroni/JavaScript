var num = [103,104,101,102]
num[4] = 201
num.push(302)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} elementos!`)

let pos = num.indexOf(403)

if (pos == -1) {
    console.log('Valor não encontrado!')
} else {
    console.log(`O valor 101 está na posição ${pos}`)
}


