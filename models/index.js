const Author = require('./author.model')
const Post = require('./post.model')

//relationships

Author.hasMany(Post)
Post.belongsTo(Author)

module.exports = {
    Author,
    Post
}