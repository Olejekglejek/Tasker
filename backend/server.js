require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
 const PORT = process.env.PORT || 5000;
const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL, { useNewUrlParser: true,
    useUnifiedTopology: true }).catch(error => console.error(error));

//Middleware
app.use(express.json())

//import Routes
const exercisesRouter = require('./routes/exercises')
 app.use('/exercises', exercisesRouter)

app.listen(PORT, () => console.log(`Listening to port ${PORT}`))