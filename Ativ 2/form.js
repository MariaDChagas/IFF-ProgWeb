function ola () {
    console.log('Hello, world!')
}
ola()

function somarerrado (n1,n2) {
    console.log (`A soma é: ${n1} + ${n2} = ${n1+n2}`)
}
somarerrado(2,5)

function somaArg(...args) {
    return args.reduce((n1, n2) => n1 + n2)
}
console.log(`A soma dos argumentos é: ${somaArg(1, 2)}`)           

function multiplic (n1,n2 = 10) {
    console.log (`A multiplicação é: ${n1} x ${n2} = ${n1*n2}`)
}
multiplic(5)

//usando o bind
function exemplo () {
    console.log(this)
} 
var names = {
    nome: "Duda"
}
exemplo = exemplo.bind(names)
exemplo()

//usando declaração de função
function decla () {
    console.log ('Declarando função!')
}
decla()

//usando expressão de função
expre = function () {
    console.log('Expressando função!')
}
expre()

function fat(m) {
    if (m == 0 || m == 1) {
        return 1
    } else {
        return m * fat(m-1)
    }
}
console.log('O fatorial é:',fat(8))

function mont () {
    let non = 'Maria '
    this.getnon = function () {
        return non = non + 'Chagas'
    }
}
const ser = new mont ()
console.log(ser.getnon())