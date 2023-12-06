const express = require("express");
const mongoose = require("mongoose");
const calander = require('./src/router/clander');
const app = express();
require('dotenv').config();


mongoose
  .connect("mongodb://localhost:27017/planDb")
  .then(()=> console.log('connected to mongodb'))
  .catch(()=> console.log('could not connect to mongodb'));


app.use('/clander',calander)
app.listen(process.env.BACKEND_PORT,()=>{
    console.log(`listening on port ${process.env.BACKEND_PORT}...`)
})

