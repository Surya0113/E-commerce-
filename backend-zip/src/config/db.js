const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://suryapratapyadav19:surya121@cluster0.yrz06cm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}