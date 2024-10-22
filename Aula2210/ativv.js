const produtos = [
    { nome: "notebook", preco: 6000.00, eletronico: true },
    { nome: "computador", preco: 4500.00, eletronico: true },
    { nome: "teclado", preco: 100.00, eletronico: false },
    { nome: "mouser", preco: 75.00, eletronico: true },
    { nome: "Cadeira Gamer", preco: 1775.00, eletronico: false }
]

const e = x => x.eletronico
const p = y => y.preco > 1000

const elet = produtos.filter(e)
console.log (elet)

const prec = produtos.filter(p)
console.log (prec)