const express=require('express')
const router=new express.Router()
const employeeController=require('../Controllers/employeeController')

// add employee
router.post('/employees/add',employeeController.addEmployeeController)
// get all employees
router.get('/employees/get',employeeController.getAllEmployees)
// edit employee
router.put('/employees/edit/:id',employeeController.editEmployeeController)
// remove employee
router.delete('/employees/delete/:id',employeeController.deleteEmployeeController)

// export router
module.exports=router