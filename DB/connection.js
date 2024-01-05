const mongoose=require('mongoose')
const connectionString=process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log("MongoDB atlas successfully connected with Employee Server");
}).catch((err)=>{
    console.log(`MongoDB connection failed !!! Error: ${err}`);
})