const { Model, DataTypes } = require("sequelize")
const db = require("../db/db")

class Post extends Model {}

Post.init({
    content:{
        type: DataTypes.STRING
    }
}, {
    sequelize: db
})

module.exports = Post