require("dotenv").config()
const express = require("express")
const app = express()
const path = require("path")
const db = require("./db/db.js")
const SHORTIT = require("./controllers/ShortURLController.js")
const REDIRECT = require("./controllers/FetchURL.js")


// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")))


// Main Route
app.get("/",(req,res)=>{
    res.render("index",data = false)
})


// Route for shorting urls
app.post("/",SHORTIT)


// Route for redircting to the base url
app.get("/redirect/:id",REDIRECT)


// Starting of the server
app.listen(process.env.PORT,()=>{
    console.log(`SERVER IS LISTNING ON PORT : ${process.env.PORT}`)
})