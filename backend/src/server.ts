import express, { Request, Response } from "express";
const mongoose = require('mongoose')
const contactRouter = require("./routes/index");
require('dotenv').config()

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
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