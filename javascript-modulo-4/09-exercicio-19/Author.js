const Post = require("./Post")

class Author {
  constructor(name, email) {
    this.name = name
    this.email = email
    this.posts = []
  }

  addPosts(title, body) {
    const post = new Post(title, body, this)
    this.posts.push(post)
    return post
  }
}

module.exports = Author