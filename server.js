const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bodyparser = require("body-parser");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const app = express();
const post = require('./Models/posts');
const student = require ('./Models/posts');
mongoose.connect('mongodb://localhost:27017/testdb').then(() =>{
    console.log("Connected to DB")
}).catch(() => {
    console.log("Failed to connect to DB")
});

const port = 8080;
const protectedRoute = express.Router();
app.set("key", "secret");

protectedRoute.use((req, res, next) => {
    const token = req.headers["access-token"];
    if(token){
        jwt.verify(token, app.get("key"),(err, decoded) =>{
            if(err){
                return res.send({'msg': 'Invalid token'})
            }else{
                req.decoded = decoded;
                next();
            }
        } )
    }else{
        res.send({'msg': 'Token not provided'})
    }
})

app.use(express.json());
app.use(cors());

app.all('*', function(req, res, next){
    res.header("Access-Control-Allow-Origin","*");//let any computer/domain to connects everything
    res.header("Access-Control-Allow-Methods","PUT,GET,POST,DELETE,OPTIONS");//Allows PUT,GET,POST and DELETE options
    res.header("Access-Control-Allow-Headers","Content-Type");//requieres a content-type header tag

    next();
    }
);

//-- Endpoints section --
app.get("/api/hello", function(req, res){
        res.send({
            msg: "Hello :D",
            content: "Parangaricutirimicuaro"
        });
    }
);

app.post("/api/new", function(req, res){
    let body = req.body;
    res.send({
        msg: "Hello ):D",
        content: `Parangaricutirimicuaros ${body.hola}`
    });
});

app.listen(port, function(){
    console.log("API is running");
});