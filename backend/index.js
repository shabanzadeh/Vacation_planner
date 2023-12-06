const express = require("express");
const mongoose = require("mongoose");
const calander = require('./src/router/clander');
const app = express();
//mongoose.connect('mongodb://localhost/test');
mongoose.connect('mongodb://localhost/test',{useNewUrlParser: true,useUnifiedTopology: true});
const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use('/clander',calander)
app.listen(5000,()=>{
    console.log('listening on port 5000...')
})

