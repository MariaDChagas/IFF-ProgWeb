const cumprimentar = ["João"]
function ola (nome){
    console.log(`Bom dia, ${nome}! Seja bem vindo!`)
}
cumprimentar.forEach(ola)

function mez (mes) {
    switch (mes) {
        case 1:
            console.log("Mês 1: Janeiro")
            break;
        case 2:
            console.log("Mês 2: Fevereiro")
            break;
        case 3:
            console.log("Mês 3: Março")
            break;
        case 4:
            console.log("Mês 4: Abril")
            break;
        case 5:
            console.log("Mês 5: Maio")
            break;
        case 6:
            console.log("Mês 6: Junho")
            break;
        case 7:
            console.log("Mês 7: Julho")
            break;
        case 8:
            console.log("Mês 8: Agosto")
            break;
        case 9:
            console.log("Mês 9: Setembro")
            break;
        case 10:
            console.log("Mês 10: Outubro")
            break;
        case 11:
            console.log("Mês 11: Novembro")
            break;
        case 12:
            console.log("Mês 12: Dezembro")
            break;
        default:
            console.log("Erro! Digite um valor de 1 à 12.")
            break;
    }
}
mez(4)

function num (x,y){
    if(x == NaN || y == NaN){
        console.log("Valores inválidos!")
    }else if (x > y){
        console.log("O primeiro número é maior que o segundo!")
    }else if (x == y){
        console.log("O primeiro número é igual ao segundo!")
    }else if (x < y){
        console.log("O primeiro número é menor que o segundo!")
    }
}
num(6,3)

function contex (salario,  qDeHrsExtras, qDeFaltas){
    var valorhorat = salario / 176
    var valorfaltas = valorhorat * qDeFaltas * 8
    var valorhoraextra = qDeHrsExtras * 1.5 * valorhorat
    var salarioliquido = salario + valorhoraextra - valorfaltas

    console.log(`Salário: ${salario}\nSalário líquido: ${salarioliquido}\nTotal em horas extras: ${valorhoraextra}\nTotal em faltas: ${valorfaltas}`);
}
contex(2300, 8, 2)

const valores = ["1", "2", "3", "4", "5"]
    function escolhervar (){
            console.log(`${valores [0]}, ${valores [valores.length-1]}`)
        }
escolhervar(valores)