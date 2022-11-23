const express = require("express"); // Import Express
const cors = require("cors"); // Import Cors
const db = require("../db/db");
const app = express(); // Create Express Web Server
const { Author, Post } = require("../models")

// TypeError: authorToAdd.addPost is not a function

app.use(cors()); // Allow Cross Origin Resource Sharing in our Server
app.use(express.json()); // Allow JSON data in Request/Response

// GET request returns object with "msg" k/v pair
app.get("/", (req, res) => {
  console.log("firing");
  res.send({ msg: "This is a GET request" });
});

// POST request returns object with "msg" k/v pair using body for input
app.post("/", async (req, res) => {
    //req.body.content - post content
    //req.body.name - author

    const authorToAdd = await Author.findOrCreate({
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

    res.send("Item successfully added");
});

// Listen on port 5001
app.listen(5001);