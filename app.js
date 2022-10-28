// Task1: initiate app and run server at 3000
const express=require('express')
const app=new express()
const PORT=process.env.PORT||3000;
const path=require('path');
app.use(express.json())//json related
app.use(express.urlencoded({extended:true}))//files related


    console.log(`server is connected in port ${PORT}!!`)
app.use(express.static(path.join(__dirname+'/dist/FrontEnd')));
// Task2: create mongoDB connection 

const mongoose=require('mongoose')
const EmployeeData=require('./models/employee_data');
mongoose.connect('mongodb+srv://AthiraBabu321:jud0rEqXL1n6ygz5@athirababu.8n9mlcy.mongodb.net/data_base?retryWrites=true&w=majority')
.then(()=>{

console.log('mongodb connected')

})
.catch(error=>{
    console.log('connection error  '+error)
})
//Task 2 : write api with error handling and appropriate api mentioned in the TODO below


//TODO: get data from db  using api '/api/employeelist'// my comment-do not change this

app.get('/api/employeelist',(req,res)=>{
    res.send(data);
})


//TODO: get single data from db  using api '/api/employeelist/:id'
app.get('/api/employeelist/:id',(req,res)=>{
    EmployeeData.findOne({"_id":req.params.id}).then({
      
 })
   })



//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}

app.post('/api/employeelist',async(req,res)=>{
    try{
    
    
       let item = req.body;
       console.log("data from post:",item)
       const user=new EMPLOYEE_DATA(item)
       const savedUser=await user.save()
       res.send(savedUser)
    }
       catch(error){
   console.log(error)
       }
   })




//TODO: delete a employee data from db by using api '/api/employeelist/:id'

app.delete = (req, res) => {
    EmployeeData.findByIdAndRemove(req.params._id)
    .then(EmployeeData => {
        if(!EmployeeData) {
            return res.status(404).send({
                message: "Note not found with id " + req.params._id
            });
        }
        res.send({message: "Note deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Could not delete EmployeeData with id " + req.params._id
        });
    });
};



//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}
app.put('/api/employeelist',(req,res)=>{
   let id=req.body._id
    EmployeeData.findbyIdAndUpdate({"_id":id})
})

//! dont delete this code. it connects the front end file.
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});



