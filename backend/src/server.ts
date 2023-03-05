import express, { Request, Response } from "express";
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const sgMail = require('@sendgrid/mail')
const sgClient = require('@sendgrid/client')

const contactRouter = require("./routes/index");
const app = express()


sgMail.setApiKey(process.env.SENDGRIDAPI)
sgClient.setApiKey(process.env.SENDGRIDAPI)
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use('/api', contactRouter)

const MONGOURL = process.env.MONGOURL
const PORT = process.env.PORT

mongoose.set('strictQuery', true);
mongoose.connect(MONGOURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    app.listen(PORT, () => console.log(`Server running at port ${PORT}`))
  })
  .catch((error:unknown) => console.log(error))

// password: wsqchBmUkFdnmbmB

// mongoURL: mongodb+srv://admin:<password>@cluster0.veest8g.mongodb.net/?retryWrites=true&w=majority