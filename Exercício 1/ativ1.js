function Celular (marca, modelo, ram, armazenamento, preco) {
    this.getPreco = function () {
        return preco
    }
    this.getValores = function () {
        return {marca, modelo, ram, armazenamento}
    }
}

const iphone13 = new Celular ("Apple", "iPhone13", "4GB", "128GB", 3509);
console.log(iphone13.getValores())
console.log(`Preço: ${iphone13.getPreco()}`)

const galaxyA32 = new Celular("Samsung", "Galaxy A32", "4GB", "128GB", 1529);
console.log(galaxyA32.getValores())
console.log(`Preço: ${galaxyA32.getPreco()}`)