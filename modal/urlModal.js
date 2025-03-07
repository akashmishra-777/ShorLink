const mongoose = require("mongoose")



const urlSchema = new mongoose.Schema({

    baseUrl:{
        type:String,
        required:true
    },
    shortId:{
        type:String,
        required:true,
        unique:true
    }
},{timestamps:true})




const urlModel = mongoose.model("url",urlSchema)



module.exports = urlModel