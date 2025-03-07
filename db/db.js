const mongoose = require("mongoose")

async function ConnectToDb(){
    try {
        await mongoose.connect(process.env.DB)
        console.log("DATABASE IS CONNECTED SUCCESSFULLY")
    } catch (error) {
        console.log(error.message)
    }
}


const db = ConnectToDb()

module.exports = db