let pessoa = {
  nome: 'Ricardo',
  idade: 23,
  dizerOla() {
    console.log('Olá, mundo!, meu nome é ' + this.nome)
    console.log("Minha idade é: " + this.idade + ' anos')
  }
}

console.log(pessoa)
pessoa.dizerOla()
