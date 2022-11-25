const { Author, Post } = require("../models")
const db = require("./db")
const infoToSeed = require("../templates/template")


async function seed (){

    await db.sync({force :true})

    for (let i = 0; i < infoToSeed.length; i++){
        const [authorToAdd, created] = await Author.findOrCreate({
            where: {
                name: infoToSeed[i]["author"]
            },
            defaults: {
                 name: infoToSeed[i]["author"]
            }
        })
        const postToAdd = await Post.create({
            content: infoToSeed[i]["content"],
            title: infoToSeed[i]["title"],
            img: infoToSeed[i]["img"]
        })
        await authorToAdd.addPost(postToAdd)
    }

    console.log("Database is populated!")

}

seed()