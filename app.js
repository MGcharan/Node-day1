const express=require('express');

const app=express();
const PORT=4000;

app.get('/',(req,res)=>{
    res.send('Hello Express')
})

app.get('/home',(req,res)=>{
    res.send("Welcome to my HomePage")
})

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
})