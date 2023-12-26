const express=require('express')
const cors=require('cors')
const { MongoClient }=require('mongodb')

const app=new express()
app.use(express.json())
app.use(cors())

const client=new MongoClient('mongodb+srv://admin:zap@cluster0.ukbopgn.mongodb.net/?retryWrites=true&w=majority')
client.connect()
const db=client.db('MongoDB Dabase')
const col=db.collection('Register')

app.post('/insert',(req,res)=>{
    console.log(req.body)
    col.insertOne(req.body)
    res.send("recieved data")
})

app.get('/home',(req,res)=>{
    res.send("home page")
})

app.listen(8081)
console.log('server running')