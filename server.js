const express = require("express")
const app = express()

app.set('view engine', 'ejs') //engine setting and which type of engine

app.get('/', (req, res) => {
    console.log("I'm in the bank blast the tnt!")
    //res.status(500).json({'json message' : 'json_value'})

    //res.download("server.js")
    res.render("index", {"name" : "Ariel"})
    //make some html and pass it along:
    //make an index.ejs file in a folder called views and render here:


    //passing information down to our HTML
    //npm i ejs //our view engine
    //look at app.set above

    //replace index to be index.ejs
    //should work now!
    //pass a second parameter to render and check it out:
    //res.render("index", {"text" : "Ariel"})
    //look at html real

    //routing:
})

//create another instance of the application with it's own mini logic
// app.get('/info', (req, res) => {
//     res.send('Information')
// })
//
// app.get('/info/new', (req, res) => {
// //new info can be read from here.
//  res.send("new information")
// })

//let's move that all somewhere else and clean up.

const infoRouter = require('./routes/info')

//many more routers can be added here:
///const postRouter = ...
///app.use("/posts", postRouter")

app.use('/info', infoRouter)

app.listen(3000)
