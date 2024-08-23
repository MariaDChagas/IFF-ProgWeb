const objeto1 = {}
//console.log(objeto1)
objeto1.atrib1 = 10
//console.log(objeto1)

//console.log(typeof new Object(), Object)
const objeto2 = new Object()
//console.log(objeto2, new Object(), Object)

function produto(nome, marca, custo, taxa) {
    this.nome = nome
    this.marca = marca
    this.getPreco = () => {
        return custo*(1.3+taxa)
    }
    this.getMarca = function() {
        return marca
    }
}
const p1 = new produto('mouse', 'logitec', 100, 0.15)
console.log(p1.getPreco(), p1.getMarca())

function cfun (nome, salario, faltas) {
    return {
        nome, salario, faltas,
        getSalaLiqui() {
            return (salario/30) * (30-faltas)
        }
    }
}
const funcionario1 = cfun ('Maria', 10000, 1)
console.log(funcionario1.getSalaLiqui()) 