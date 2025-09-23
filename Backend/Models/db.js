const mongoose=require('mongoose')

const mongo_url=process.env.MONGO_DB

mongoose.connect(mongo_url)
    .then(()=>{
        console.log("Connected DataBase");       
    }).catch((err)=>{
        console.log("Mongodb Connection Error: ",err)
    })