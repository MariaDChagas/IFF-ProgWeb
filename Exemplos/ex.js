const pessoa = {
    saudacao: 'Boa Noite!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar1 = pessoa.falar.bind(pessoa)
falar1()