const { Model, DataTypes } = require("sequelize")
const db = require("../db/db")

class Post extends Model {}

Post.init({
    title:{
        type: DataTypes.STRING
    },
    content:{
        type: DataTypes.STRING
    },
    img:{
        type: DataTypes.STRING
    },
    upvotes:{
        type: DataTypes.INTEGER
    }
}, {
    sequelize: db
})

module.exports = Post