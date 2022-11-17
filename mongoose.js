const mongoose=require('mongoose');


//Mongo db uri
//mongodb+srv://id:password@cluster0.dtbfvbd.mongodb.net/
mongoose.connect("mongodb+srv://umar389:test786@cluster0.dtbfvbd.mongodb.net/Public");


const db=mongoose.connection;

db.on('error',console.error.bind('error','Error in connecting'));

db.once('open',function(){
    console.log("Successfully connected to mongodb");
})

module.exports=db;