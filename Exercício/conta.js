var n1 = document.querySelector("input#n1")
var n2 = document.querySelector("input#n2")
var res = document.querySelector("p#res")

var soma = document.querySelector("input#soma")
soma.addEventListener("click", () => {
    res.innerHTML = ("Resultado: ")
    result = parseFloat(n1.value) + parseFloat(n2.value)
    res.insertAdjacentHTML('beforeend', `${n1.value} + ${n2.value} = ${result}`)
})
var menos = document.querySelector("input#menos")
menos.addEventListener("click", () => {
    res.innerHTML = ("Resultado: ")
    result = parseFloat(n1.value) - parseFloat(n2.value)
    res.insertAdjacentHTML('beforeend', `${n1.value} - ${n2.value} = ${result}`)
})
var mult = document.querySelector("input#mult")
mult.addEventListener("click", () => {
    res.innerHTML = ("Resultado: ")
    result = parseFloat(n1.value) * parseFloat(n2.value)
    res.insertAdjacentHTML('beforeend', `${n1.value} * ${n2.value} = ${result}`)
})
var div = document.querySelector("input#div")
div.addEventListener("click", () => {
    if (n2.value == 0) {
        res.innerHTML = ("Tente de novo<br>Escreva um número diferente de zero!")
    }
    else {
    res.innerHTML = ("Resultado: ")
    result = parseFloat(n1.value) / parseFloat(n2.value)
    res.insertAdjacentHTML('beforeend', `${n1.value} / ${n2.value} = ${result}`) 
    }
})
var pot = document.querySelector("input#pot")
pot.addEventListener("click", () => {
    res.innerHTML = ("Resultado: ")
    result = parseFloat(n1.value) ** parseFloat(n2.value)
    res.insertAdjacentHTML('beforeend', `${n1.value} ** ${n2.value} = ${result}`)
})
var raiz1 = document.querySelector("input#raiz1")
raiz1.addEventListener("click", () => {
    res.innerHTML = ("Resultado: ")
    result = parseFloat(n1.value) ** (1/2)
    res.insertAdjacentHTML('beforeend', `${2}√ ${n2.value} = ${result}`)
})
var raiz2 = document.querySelector("input#raiz2")
raiz2.addEventListener("click", () => {
    if (n2.value < 0) {
        res.innerHTML = ("Tente de novo<br>Escreva um número positivo!")
    }
    else {
    res.innerHTML = ("Resultado: ")
    result = parseFloat(n1.value) ** (1/n2.value)
    res.insertAdjacentHTML('beforeend', `${n2.value}√ ${n1.value} = ${result}`)
    }
})
var resto = document.querySelector("input#resto")
resto.addEventListener("click", () => {
    res.innerHTML = ("Resultado: ")
    result = parseFloat(n1.value) % parseFloat(n2.value)
    res.insertAdjacentHTML('beforeend', `${n1.value} % ${n2.value} = ${result}`)
})
var limpa = document.querySelector("input#limpa")
limpa.addEventListener("click", () => {
    res.innerHTML = ("Resultado: ")
    n1.value = ""
    n2.value = ""
})