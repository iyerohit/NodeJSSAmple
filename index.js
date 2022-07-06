const express = require("express");
const app = express();


app.listen(8001);
console.log("itsworking finally");

app.use("/",(req,res,next)=>{


console.log("MIDDLEWARE");
next();
});

app.get("/",(req,res)=>{
    console.log("helllo world");
    res.send("Hello world from node js");

});

