const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rollno:{
        type:String,
        required:true
    },
    sec:{
        type:String,
        required:true
    },
});
const Public=mongoose.model('Public',userSchema);

module.exports=Public;