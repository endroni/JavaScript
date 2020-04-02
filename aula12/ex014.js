var agora = new Date()
var diaSem = agora.getDay()
/*
    0 = Domingo         2 = Terça       4 = Quinta      6 = Sábado
    1 = Segunda         3 = Quarta      5 = Sexta
*/

switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-feira') 
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('Error: Dia inexistente!')
    break
}