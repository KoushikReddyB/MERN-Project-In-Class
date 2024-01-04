const express=require('express')
const cors=require('cors')
const { MongoClient, Admin }=require('mongodb')

const app=new express()
app.use(express.json())
app.use(cors())

const client=new MongoClient('mongodb+srv://admin:admin@cluster0.ukbopgn.mongodb.net/?retryWrites=true&w=majority')
client.connect()
const db=client.db('MongoDBDatabase')
const col=db.collection('Register')

app.post('/insert',(req,res)=>{
    console.log(req.body)
    col.insertOne(req.body)
    res.send("Data Recieved")
})

app.get('/show', async (req, res) => {
    var result = await col.find().toArray() 
    res.send(result)
})

app.get('/home',(req,res)=>{
    res.send("HomePage")
})

app.listen(8081)
console.log('Server is Running in Port: 8081')