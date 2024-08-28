function ola () {
    console.log('Olá Mundo!');
}
ola()

function somar (n1,n2) {
    console.log (`A soma é: ${n1} + ${n2} = ${n1+n2}`)
}
somar(8,10)

function multiplic (n1,n2) {
    console.log (`A multiplicação é: ${n1} * ${n2} = ${n1*n2}`)
}
multiplic (5,10)


//usando o bind
function utilizando (){
    console.log(this)
} 
var usodometodo = {
    nome: "Bind"
}
utilizando = utilizando.bind(usodometodo)
utilizando()

//usando declaração de função
function ddf () {
    console.log ('Usando declaração de função.')
}
ddf()

//usando expressão de função
exp = function (){
    console.log('Usando expressão de função.')
}
exp()

function fatorial (s){
    if (s == 0 || s ==1) {
        return 1
    } else {
        return s * fatorial(s-1)
    }
}
console.log('Fatorial', fatorial(20))
