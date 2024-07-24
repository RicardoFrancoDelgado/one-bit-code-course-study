class Comment {
  constructor(username, email, content) {
    this.username = username 
    this.email = email
    this.content = content
    this.createdAt = new Date()
  }
}

module.exports = Comment