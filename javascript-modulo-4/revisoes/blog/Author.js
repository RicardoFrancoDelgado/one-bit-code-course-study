const Post = require("./Post")

class Author {
  constructor(nickname, email, job) {
    this.nickname = nickname
    this.email = email
    this.job = job
    this.posts = []
  }

  addPost(title, body) {
    const post = new Post(title, body, this)
    this.posts.push(post)
    return post
  }
}

module.exports = Author