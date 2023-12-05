const express = require("express");
const mongoose = require("mongoose");
const calander = require('./router/clander');
const app = express();
mongoose.connect('mongodb://localhost/test');


app.use('/clander',calander)
app.listen(5000,()=>{
    console.log('listening on port 5000...')
})

