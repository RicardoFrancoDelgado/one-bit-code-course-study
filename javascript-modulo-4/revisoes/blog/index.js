const Author = require('./Author')

const ricardo = new Author(
  'Ricardo F. Delgado',
  'ricardo@email.com',
  'Frontend Development'
)
const posts = ricardo.addPost(
  'Sem internet a dois dias',
  'Internet caiu na região de Paciência/RJ por volta de 9h da manhã'
)
post.addComment(
  'Paulo F. Delgado',
  'paulo@email.com',
  'Muito ruim ficar sem internet por tanto tempo'
)
console.log(ricardo)
console.log(posts)
