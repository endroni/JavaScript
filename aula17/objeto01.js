let amigo = {
    nome: 'Pedro', 
    sexo: 'M', 
    peso: 91.5,
    engordar(p){
        console.log('Engordou')
        this.peso += p
    }
}
amigo.engordar(3)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)
