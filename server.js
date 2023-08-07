const cors =  require('cors')
const env = require('env')
const express = require('express')
const database = require('./index.js');
const port = process.env.port || 5000
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded())
app.get("/",async(req,res)=>{
    const result = await(database.getdata());
    console.log(result.recordsets[0])
    res.send(result.recordsets[0]);
});
app.get("/sareecontact/:msg",async(req,res)=>{
    const val = req.params.msg;
    const result = await(database.updatesareecontact(val));
    res.send(result)   
});
app.get("/dhoticontact/:msg",async(req,res)=>{
    const val = req.params.msg;
    const result = await(database.updatedhoticontact(val));
    console.log("At dhoti" + val)
    res.send(result)   
});
app.get("/formalscontact/:msg",async(req,res)=>{
    const val = req.params.msg;
    const result = await(database.updateformalscontact(val));
    res.send(result)   
});
app.get("/saree/:msg",async(req,res)=>{
    const val = req.params.msg;
    const result = await(database.updatesaree(val))
    res.send(result) 
});
app.listen(port,console.log(`app running on ${port}`))
