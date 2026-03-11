const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send('Version 2 deployed 🚀')
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})