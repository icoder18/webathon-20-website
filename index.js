const { constant } = require("async");
const express = require("express");
const path = require("path");
const port = 1000;

const app = express();

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"assets")));

app.use("/", require("./routes/index"));



app.listen(port,function(err){
    if(err){ 
        console.log(err);
        return;
    }
    console.log("server running on port:", port);
});