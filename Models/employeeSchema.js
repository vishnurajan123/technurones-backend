const mongoose=require('mongoose')

const employeeSchema=new mongoose.Schema({
    empId:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phone:{
        type:String,
        required:true,
    },
    place:{
        type:String,
        required:true
    }
})

const employees=mongoose.model("employees",employeeSchema)
module.exports=employees