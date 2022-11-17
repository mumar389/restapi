const express=require('express');
const port=5690;

const db=require('./mongoose');
const Public=require('./model');

/*
1:first download the zip file
2:npm install
3:place your mongo db uri in mongoose.js
4:change the model.js according to the data u want to store in db
5:change the app.post inside the req.body ,, the new fields required
6:use npm start to start the server
*/

const app=express();

app.use(express.json());

app.post('/api/post-data',async function(req,res){
    try {
        const {name,rollno,sec}=req.body;
        let allPublic=await Public.create({
            name:name,
            rollno:rollno,
            sec:sec
        });
        if(!allPublic){
            const error=new error();
            throw error;
        }
        console.log("Data saved successfully");
        res.status(200).json({
            message:"Data saved success"
        })
    } catch (error) {
        console.log(error);
        res.status(501).json({
            message:"Internal Server error"
        })
    }
   
});
app.get('/api/get-data',async function(req,res){
    try {
        const allData=await Public.find({});
    if(!allData){
        console.log("Error in finding data");
        const error=new error();
            throw error;
    }
    console.log("Data fetched successfully");
    res.status(200).json({
        message:"Data fetched success",
        data:allData
    })
    } catch (error) {
        console.log(error);
        res.status(501).json({
            message:"Internal Server error"
        })
    }
    
})

/*
CodeShare-: CodeShare.io/r9VK1v
After making all the changes-:
After doing npm start,
We need postman to save the required data to database,
Got postman:-
1) select the + button
2) select post request
3) enter the url-: http://localhost:5690/api/post-data
4) select raw then json 
5) enter the below sample in json text box-:
{
"name":"value",
"Key":"value"
}

6) press the send button 
*/


app.listen(port,function(){
    console.log(`Server is running on port-:${port}`);
})
