function Bolo (nome, peso, preco) {
    this.getDesc = function (n) {
    let val = preco - (preco * n)
    return val
    }
    this.getNome = function () {
        return nome
    }
    this.getPreco = function () {
        return preco
    }
}

const cenoura = new Bolo ('Chocolate', '300g', 30)
console.log(`Sabor: ${cenoura.getNome()}`)
console.log(`Preço: ${cenoura.getPreco()}`)
console.log(`Com 20% de desconto: ${cenoura.getDesc(0.2)}`)
