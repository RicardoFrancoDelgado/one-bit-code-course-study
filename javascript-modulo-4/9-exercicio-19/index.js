const Author = require('./Author')

const ricardo = new Author('Ricardo F. Delgado', 'ricardo@email.com')
const posts = ricardo.addPosts(
  'Equipe Surpreende e Conquista Título Inédito com Gol nos Acréscimos',
  'Em uma virada histórica, a equipe surpreendeu a todos ao conquistar o título inédito com um gol nos acréscimos. A partida eletrizante deixou os torcedores em êxtase e será lembrada por anos.'
)

posts.addComment("João Silva", "Esse jogo foi emocionante do começo ao fim, inacreditável!")

console.log(ricardo)
console.log(posts)
