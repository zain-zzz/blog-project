
const express = require("express"); // Import Express
const cors = require("cors"); // Import Cors
const db = require("../db/db");
const app = express(); // Create Express Web Server
const { Author, Post } = require("../models");
const { ResultWithContext } = require("express-validator/src/chain");
const {Op} = require("sequelize")
const PORT = 5001

// Allow Cross Origin Resource Sharing in our Server
// app.use(cors({
//     origin: 'http://localhost:3000/',
// }));
app.use(cors())
// Allow JSON data in Request/Response
app.use(express.json());

// GET request returns all authors with a weak correlation to the string
app.get("/:input", async (req, res) => {
    res.send({author: await Author.findAll({
        where: {
            name: {
                [Op.like]: `%${req.params.input}%`
            }
        }
    })}) 
});

// POST creates a post for a specified author 
app.post("/", async (req, res) => {
    //req.body.content - post content
    //req.body.name - author

    // const authorToAdd = await Author.create({
    //         name: req.body.name
    // })

    const [authorToAdd, created] = await Author.findOrCreate({
            where: {
                name: req.body.name
            },
            defaults: {
                 name: req.body.name
            }
        })

    const postToAdd = await Post.create({
        content: req.body.content
    })

    await authorToAdd.addPost(postToAdd)

    if (created)
    {
        res.send("Item successfully added to author");
    }
    else{
        res.send("Items successfully added");
    }

});

//destroys the posts
app.delete('/', async (req,res) => {

    //assuming this is an id
    await Post.destroy({
        where: {id: req.body.id}
    })
    res.send(`Successfully deleted ${req.body.id}`)
})

//destroys the author and the authors posts
app.delete('/all', async (req,res) => {

    let author = await Author.findOne({
        where: {name: req.body.name}
    })

    await Post.destroy({
        where: {authorId: author.id}
    })
    
    await author.destroy()

    res.send("successfully destroyed")
})

// Listen on port 5001
app.listen(PORT);