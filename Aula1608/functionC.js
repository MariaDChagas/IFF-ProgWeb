function carro(velMax = 200, aceleracao = 5, nome = "carro"){
    let velAtual = 0
    this.setAceleracao =  function(x){
        aceleracao = x
    }
    this.setAcelerar = function(){
        velAtual =  (velAtual+aceleracao <= velMax)? (velAtual+aceleracao): (velMax)
    }
    this.getvelAtual = function(){
        return velAtual
    }
}

const corola = new carro ()
console.log(corola.getvelAtual())
corola.velMax = 220
corola.aceleracao = 15
corola.nome = "Corola"
//console.log(corola)
corola.setAcelerar()

const fusca = new carro ()
corola.velMax = 150
corola.nome = "Fusca"
//console.log(fusca)