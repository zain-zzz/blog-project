const { Author, Post } = require("../models")
const db = require("./db")

async function seed (){

    await db.sync({force :true})

    const author1 = await Author.create({
        name: "name1"
    })
    const author2 = await Author.create({
        name: "name2"
    })

    const post1 = await Post.create({
        content: "asdfghjkl;"
    }) 

    const post2 = await Post.create({
        content: "qwertyioypu"
    }) 

    await author1.addPost(post1)

    await author2.addPost(post2)


    console.log("Database is populated!")



}

seed()