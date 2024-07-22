const soma = (x,y) => x+y
const multiplicar = (x,y) => x*y
const dividir = (x,y) => x/y
const subtrair = (x,y) => x-y

const calcularResultado = (a,b, operador =  soma) =>
console.log(operador(a,b))

calcularResultado(2,3)
calcularResultado(4,3,multiplicar)
calcularResultado(3,2, (a,b) => a**b)