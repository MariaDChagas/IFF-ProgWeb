const produto = new Object()

produto.nome = 'Bicicleta'
produto ['quadro da bicicleta'] = 'carbono'
let aparencia = 'cor'
produto[aparencia] = 'azul'
produto.preco = 2500.00
console.log('1', produto)

let auxiliar = produto ['quadro da bicicleta']
delete produto ['quadro da bicicleta']
delete produto.cor
console.log('2', produto)
produto.quadro = auxiliar
console.log('3', produto)
