const montadora = ["Toyota","VW","Nissan","Mitsubish"]
/*for(let i = 0;i<montadora.length;i++){
    console.log(montadora[i])
}

for(i in montadora){
    console.log(`montadora: ${montadora[i]}`)
}
*/
function imprimir (nome, indice) {
    console.log(`${indice +1} ${nome}`)
}
montadora.forEach (imprimir)

