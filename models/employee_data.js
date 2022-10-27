const mongoose=require('mongoose')//initialization
//schema definition
const schema = mongoose.Schema;

//modelling
const Employee_Detail=new schema({

name: String,

location:String,
position:String,
salary:Number

})
 const employeeData =mongoose.model('database',Employee_Detail)
module.exports=employeeData ;
