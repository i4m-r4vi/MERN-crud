import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import routes from './routes/postRoutes.js'

dotenv.config()
connectDB()

const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/api',routes)

app.get('/',(req,res)=>{
    res.send(`<h1>Hello World</h1>`)
})

app.listen(process.env.PORT,()=>{
    console.log('The App is Listening on',process.env.PORT);
})

