const express = require("express");
const app = express();

let port = process.env.PORT | 8001;
app.listen(port);
console.log("itsworking finally");

app.use("/",(req,res,next)=>{


console.log("MIDDLEWARE");
next();
});

app.get("/",(req,res)=>{
    console.log("helllo world from node js");
    res.send("Hello world from node js");

});

