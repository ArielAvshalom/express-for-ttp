const express = require("express")
const router = express.Router() //capital letter
//this is independent from the main router sort of like its own compartmentalized piece.

router.get('/', (req, res) => {
    console.log('information router')
    res.send("Information")
})

router.get("/new", (req, res) => {
    res.send("New information")
})

//always put static routes on top of dynamic (parameterized routes)!

//here is a parametrized route:



module.exports = router

