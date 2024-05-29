const carros = [
  {
    modelo: 'Jetta',
    marca: 'Volkswagen'
  },
  {
    modelo: 'HB20',
    marca: 'Hyundai'
  },
  {
    modelo: 'Fit',
    marca: 'Honda'
  },
  {
    modelo: 'Sandero',
    marca: 'Renault'
  }
]

//retornar apenas a marca desses carros
const marcas = carros.map(function (carroAtual) {
  return carroAtual.marca
})

console.log(marcas)

// retornar apenas o modelo do carro
const modelos = carros.map(function (modeloAtual) {
  return modeloAtual.modelo
})

console.log(modelos)

// retornar os numeros do array dobrados
const numeros = [1, 2, 3, 4, 5, 6]

const dobro = numeros.map(function (dobrados) {
  return dobrados * 2
})

console.log(dobro)

// retornar os numeros do array em potência de 2
const elevado = numeros.map(function (potencia) {
  return potencia ** 2
})

console.log(elevado)

console.log('************************************')

// Retornar em métodos separados um array com alunos aprovados e outro array com alunos reprovados

const alunos = [
  (aluno1 = {
    nome: 'Lucas',
    nota: 10
  }),
  (aluno2 = {
    nome: 'Maria',
    nota: 8.5
  }),
  (aluno3 = {
    nome: 'Lucio',
    nota: 4.8
  }),
  (aluno4 = {
    nome: 'Pedro',
    nota: 7.5
  }),
  (aluno5 = {
    nome: 'Marina',
    nota: 6.5
  })
]

// alunos acima da média
const alunosAprovados = alunos.filter(function (aluno) {
  if (aluno.nota >= 7) return aluno
})
console.log(alunosAprovados)

// alunos abaixo da média
const alunosReprovados = alunos.filter(function (aluno) {
  if (aluno.nota <= 7) {
    return aluno
  }
})
console.log(alunosReprovados)

// somatorio de todas as notas => usando Reduce

let valorInicial = 0
const total = alunos.reduce(function (acumulador, aluno) {
  return acumulador + aluno.nota
}, valorInicial)

console.log(total)

// organizando os alunos por maior nota
alunos.sort(function (maior, menor) {
  return menor.nota - maior.nota
})

console.log(alunos)
