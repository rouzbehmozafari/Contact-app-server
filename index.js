const express = require("express")
let cors = require("cors");

// const dotenv = require("dotenv").config()
const {_getDb} = require('./db-access/_getDb')
const {getAllContacts} = require('./db-access/getContacts')
const {setFav} = require('./db-access/setFav')
const {addNew} = require('./db-access/addContact')
const app = express()
app.use(cors());
app.use((req, _, next) => {
    console.log("Request:", req.url, req.method)
    next()
})

app.get("/", (req, res) => {
    res.send("<h1>Hallo</h1>")
})
app.get("/fav", (req, res,next) => {
    const mobil = String(req.query.mobil)
    const isF = req.query.isFav == String('true') ? true : false
    console.log(mobil,isF)
    setFav(mobil,isF)
    next()
})
app.get("/newContact", (req, res,next) => {
    const mobil = (req.query.mobil)
    const url = req.query.url
    const name = req.query.name
    const isFav = false
    addNew(mobil,false,url,name)
    next()
})
app.get("/contacts", (req, res) => {
    getAllContacts().then((x) =>{
            res.json(x)
        })
    
})

app.use((_, res) => {
    res.send("<h1>404 Not found!</h1>")
})

app.listen(4000, () => console.log("listening on port 4000"))

