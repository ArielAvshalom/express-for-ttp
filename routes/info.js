const express = require("express")
const router = express.Router() //capital letter
//this is independent from the main router sort of like its own compartmentalized piece.

router.get('/', (req, res) => {
    console.log('Information Router')
    res.send("Information")
})

router.get("/new/1", (req, res) => {
    res.send("New information")
})

//always put static routes on top of dynamic (parameterized routes)!

//here is a parametrized route:
//first add a post command before a get command - because you need to modify before you can read!

router.post("/", (req, res) => {
    res.send("Create Information")
})



// router.get("/:id", (req, res) => {
//     res.send(`Here is a piece of information with this ID: ${req.params.id}`)
// })
//
// router.post("/:id", (req, res) => {
//     res.send(`Here is a piece of information that we posted with this ID: ${req.params.id}`)
// })
//
// router.delete("/:id", (req, res) => {
//     res.send(`Here is a piece of information that we deleted with this ID: ${req.params.id}`)
// })

//what happens if we move /info/new here???
//Express works top down...

//do this for all other necessary commands: like delete or put. You can chain all of these together with .route.



router.
    route("/:id")
    .get((req, res) => {
        console.log(req.titleName)
        res.send(`get info with id... ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`now updating info with id... ${req.params.id}`)
    }).delete(
    (req, res) => {
        res.send(`Here is a piece of information that we deleted with this ID: ${req.params.id}`)
    })//you can add anything else you want here (provided the method exists).

//what do we do with all of this?

//let's add some middleware:
//
 const infoArticles = [{title : "aphrodisiacs"}, {title : "fungi don't do what I want?"}, {title : "communism breaks python... :( you can't force all classes to be equal"}]
//
//let's put that into a very simple piece of middleware called param

router.param('id', (req, res, next, id) => {
    //res.send('hello world')

    req.titleName = infoArticles[id]
    next() //let's see what happens if we don't include next() here...
    //res.send("here is some text")
})


module.exports = router

