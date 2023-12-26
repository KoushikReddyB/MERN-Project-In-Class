const express=require('express')
const cors=require('cors')
const { MongoClient } = require('mongodb')

const app=new express()
app.use(express.json())
app.use(cors())

const client = new MongoClient()
client.connect()

app.post('/insert',(req,res)=>{
    console.log(req.body)
    res.send("Data Recieved")
})

app.get('/home',(req,res)=>{
    res.send("HomePage")
})

app.listen(8081)
console.log('Server is Running in the Localhost Port: 8081')