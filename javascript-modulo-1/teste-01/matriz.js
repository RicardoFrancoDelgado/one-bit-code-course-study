const familia = [
  ['pai'],
  ['filho 1', 'filho 2', 'filho 3'],
  ['neto'],
  ['bisneto']
]

for (let i = 0; i < familia.length; i++) {
  for (let j = 0; j < familia[i].length; j++) {
    const elemento = familia[i][j]
    console.log('membro: ' + i + ' ' + j + ' ' + elemento)
  }
}
