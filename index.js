require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router=require('./Routes/router')
require('./DB/connection')

const EmpServer=express()

EmpServer.use(cors())
EmpServer.use(express.json())
EmpServer.use(router)

const PORT=4000 || process.env.PORT
EmpServer.listen(PORT,()=>{
    console.log(`Employee server started at port : ${PORT} and waiting for client requests`);
})

EmpServer.get('/',(req,res)=>{
    res.send(`<h1>Employee server started and waiting for client requests !!!`)
})

