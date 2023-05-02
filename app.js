const dotenv = require('dotenv');

dotenv.config({path:'./config.env'});

const express = require('express');

const mongoose= require('mongoose');

const movieRoute = require('./Router/movieRoute')

const app = express();

app.use(express.json())

mongoose.connect(process.env.CONNECTION_STRING,{
    useNewUrlParser:true
}).then((connectionObj)=>{
// console.log(connectionObj);
console.log("DB connection successful");

}).catch((err)=>{
    console.log(err);
})

app.use('/',movieRoute);


app.listen(3000,()=>{
    console.log("server is running....!");
})