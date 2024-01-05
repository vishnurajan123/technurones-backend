const employees=require('../Models/employeeSchema')

// add employee
exports.addEmployeeController=async (req,res)=>{
    const {empId,name,email,phone,place}=req.body
    try{
        const existingUser=await employees.findOne({email})
        if(existingUser){
            res.status(406).json("Employee already exists !!!.")
        }
        const existingUser2=await employees.findOne({phone})
        if(existingUser2){
            res.status(406).json("Employee already exists !!!.")
        }
        const existingUser3=await employees.findOne({empId})
        if(existingUser3){
            res.status(406).json("Employee already exists !!!.")
        }

        else{
            const newEmployee=new employees({
                empId,name,email,phone,place
            })
            await newEmployee.save()
            res.status(200).json(newEmployee)
        }
    }
    catch(err){
        res.status(401).json(err)
    }
}
// get all employees
exports.getAllEmployees=async (req,res)=>{
    const searchKey=req.query.search
    const query={
        name:{$regex:searchKey , $options:"i"}
    }
    try{
        const allEmployees=await employees.find(query)
        res.status(200).json(allEmployees)
    }
    catch(err){
        res.status(401).json(err)
    }
}

// update employee
exports.editEmployeeController=async (req,res)=>{
    const {id}=req.params
    const { empId,name,email,phone,place}=req.body

    try{
        const updateEmployee=await employees.findByIdAndUpdate({_id:id},{
            empId,name,email,phone,place
        },{new:true})
        await updateEmployee.save()
        res.status(200).json(updateEmployee)
    }
    catch(err){
        res.status(401).json(err)
    }
}
// delete employee
exports.deleteEmployeeController=async (req,res)=>{
    const {id}=req.params
    try{
        const removeEmployee=await employees.findByIdAndDelete({_id:id})
        res.status(200).json(removeEmployee)
    }
    catch (err){
        res.status(401).json(err)
    }
}
